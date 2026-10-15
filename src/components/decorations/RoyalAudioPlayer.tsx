import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { MUSIC_SRC } from '../../config/features';

interface RoyalAudioPlayerProps {
  isHindi?: boolean;
}

export const RoyalAudioPlayer: React.FC<RoyalAudioPlayerProps> = ({ isHindi = false }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioElRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<{ oscillators: OscillatorNode[]; gainNode: GainNode } | null>(null);

  // Sa-Pa-Sa royal classical tanpura drone frequencies (tuned to C# ~ 138.6 Hz, G# ~ 207.6 Hz)
  const baseFreqs = [138.59, 207.65, 277.18, 554.37];

  const startDrone = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Master gain
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 1.5);
      masterGain.connect(ctx.destination);

      // Low pass filter for warm resonant sitar/tanpura body sound
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, ctx.currentTime);
      filter.connect(masterGain);

      const oscillators: OscillatorNode[] = [];

      baseFreqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        // Slight natural chorus detune
        const detune = (idx - 1.5) * 3;
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        osc.detune.setValueAtTime(detune, ctx.currentTime);

        // LFO subtle strumming effect
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(0.2 + idx * 0.1, ctx.currentTime);
        lfoGain.gain.setValueAtTime(0.02, ctx.currentTime);
        lfo.connect(lfoGain.gain);

        oscGain.gain.setValueAtTime(0.05, ctx.currentTime);

        osc.connect(oscGain);
        oscGain.connect(filter);

        osc.start();
        lfo.start();
        oscillators.push(osc);
      });

      nodesRef.current = { oscillators, gainNode: masterGain };
      setIsPlaying(true);
    } catch {
      // AudioContext unavailable
      setIsPlaying(false);
    }
  };

  const stopDrone = () => {
    if (nodesRef.current && audioCtxRef.current) {
      const { gainNode, oscillators } = nodesRef.current;
      const ctx = audioCtxRef.current;
      gainNode.gain.setValueAtTime(gainNode.gain.value, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.8);
      setTimeout(() => {
        oscillators.forEach(osc => {
          try { osc.stop(); } catch {}
        });
        nodesRef.current = null;
        setIsPlaying(false);
      }, 800);
    } else {
      setIsPlaying(false);
    }
  };

  // Prefer the real track in /public/audio; fall back to the synthesized tanpura drone
  const startAudio = () => {
    if (!audioElRef.current) {
      const el = new Audio(MUSIC_SRC);
      el.loop = true;
      el.volume = 0.5;
      el.preload = 'auto';
      audioElRef.current = el;
    }
    const el = audioElRef.current;
    const fallback = () => {
      audioElRef.current = null;
      startDrone();
    };
    el.addEventListener('error', fallback, { once: true });
    el.play()
      .then(() => setIsPlaying(true))
      .catch(fallback);
  };

  const stopAll = () => {
    if (audioElRef.current && !audioElRef.current.paused) {
      audioElRef.current.pause();
      setIsPlaying(false);
    } else {
      stopDrone();
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopAll();
    } else {
      startAudio();
    }
  };

  useEffect(() => {
    return () => {
      audioElRef.current?.pause();
      if (nodesRef.current) {
        nodesRef.current.oscillators.forEach(osc => {
          try { osc.stop(); } catch {}
        });
      }
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <button
        onClick={toggleAudio}
        type="button"
        className="group relative flex items-center gap-2 px-3.5 py-2.5 bg-surface/95 backdrop-blur-md border border-[#B89555]/60 hover:border-[#B89555] rounded-full shadow-md text-maroon-text text-xs font-serif font-medium transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#B89555]/40"
        title={isPlaying ? (isHindi ? "संगीत रोकें" : "Pause Ambient Melody") : (isHindi ? "शहनाई व तानपुरा धुन सुनें" : "Play Ambient Shehnai & Tanpura")}
        aria-label={isPlaying ? "Mute background ambient music" : "Play background ambient music"}
      >
        <span className="relative flex items-center justify-center w-5 h-5 rounded-full bg-[#B89555]/15 text-maroon-text">
          {isPlaying ? (
            <Volume2 className="w-3.5 h-3.5 animate-pulse text-maroon-text" />
          ) : (
            <VolumeX className="w-3.5 h-3.5 text-ink/60" />
          )}
        </span>
        <span className="hidden sm:inline-block tracking-wide">
          {isPlaying ? (
            <span className="flex items-center gap-1.5 text-maroon-text">
              <Music className="w-3 h-3 animate-spin text-[#B89555]" style={{ animationDuration: '4s' }} />
              {isHindi ? 'राजसी धुन बज रही है' : 'Royal Ambience'}
            </span>
          ) : (
            <span className="text-ink/80">
              {isHindi ? 'संगीत सुनें' : 'Play Music'}
            </span>
          )}
        </span>
      </button>
    </div>
  );
};
