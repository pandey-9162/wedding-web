import React, { useState, useEffect } from 'react';
import { weddingConfig, WeddingConfig } from './config/wedding';
import { Navigation } from './components/Navigation';
import { InvitationIntro } from './components/InvitationIntro';
import { WeddingHero } from './components/WeddingHero';
import { WeddingCountdown } from './components/WeddingCountdown';
import { LoveStory } from './components/LoveStory';
import { CoupleProfiles } from './components/CoupleProfiles';
import { WeddingEvents } from './components/WeddingEvents';
import { FamilySection } from './components/FamilySection';
import { PhotoGallery } from './components/PhotoGallery';
import { TravelGuide } from './components/TravelGuide';
import { RSVPForm } from './components/RSVPForm';
import { ShareInvitation } from './components/ShareInvitation';
import { WeddingFooter } from './components/WeddingFooter';
import { RoyalAudioPlayer } from './components/decorations/RoyalAudioPlayer';
import { PersonalizeModal } from './components/PersonalizeModal';
import { Edit3 } from 'lucide-react';
import { featureFlags } from './config/features';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const [config, setConfig] = useState<WeddingConfig>(weddingConfig);
  const [isInvitationOpen, setIsInvitationOpen] = useState<boolean>(false);
  const [isHindi, setIsHindi] = useState<boolean>(false);
  const { isDark, toggleTheme } = useTheme();
  const [isPersonalizeOpen, setIsPersonalizeOpen] = useState<boolean>(false);

  // Sync document language tag
  useEffect(() => {
    document.documentElement.lang = isHindi ? 'hi' : 'en';
  }, [isHindi]);

  const toggleLanguage = () => {
    setIsHindi((prev) => !prev);
  };

  return (
    <div className="min-h-screen stationery-paper font-sans text-ink selection:bg-[#B89555]/20 selection:text-maroon-text">
      {/* Interactive Royal Invitation Card Opening Modal */}
      <InvitationIntro
        config={config}
        isOpen={isInvitationOpen}
        onOpen={() => setIsInvitationOpen(true)}
        isHindi={isHindi}
      />

      {/* Main Top Navigation Header */}
      <Navigation
        config={config}
        isHindi={isHindi}
        onToggleLanguage={toggleLanguage}
        onReopenInvitation={() => setIsInvitationOpen(false)}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      <main>
        {/* SECTION B: The Royal Hero */}
        <WeddingHero config={config} isHindi={isHindi} />

        {/* SECTION G: Wedding Countdown in Asia/Kolkata */}
        <WeddingCountdown config={config} isHindi={isHindi} />

        {/* SECTION C: Our Love Story */}
        <LoveStory config={config} isHindi={isHindi} />

        {/* SECTION D: Meet the Bride & Groom */}
        <CoupleProfiles config={config} isHindi={isHindi} />

        {/* SECTION E: Wedding Celebrations & Ceremonies */}
        <WeddingEvents config={config} isHindi={isHindi} />

        {/* SECTION F: The Families & Joint Blessing */}
        <FamilySection config={config} isHindi={isHindi} />

        {/* SECTION H: Editorial Photo Gallery & Lightbox */}
        <PhotoGallery config={config} isHindi={isHindi} />

        {/* SECTION I: Venue & Travel Guide for Udaipur */}
        <TravelGuide config={config} isHindi={isHindi} />

        {/* SECTION J: RSVP Response Experience */}
        <RSVPForm config={config} isHindi={isHindi} />

        {/* SECTION K: Share Invitation & Contact */}
        <ShareInvitation config={config} isHindi={isHindi} />
      </main>

      {/* SECTION L: The Closing Scene & Back to Top */}
      <WeddingFooter config={config} isHindi={isHindi} />

      {/* Ambient Shehnai & Sitar Traditional Audio Player (Respectful, Never Autoplays) */}
      <RoyalAudioPlayer isHindi={isHindi} />

      {/* Personalize tool – hidden unless the 'personalize' feature flag is on */}
      {featureFlags.personalize && (
        <>
        {/* Personalize Details Quick-Access Tool */}
        <div className="fixed bottom-5 left-5 z-40">
          <button
            onClick={() => setIsPersonalizeOpen(true)}
            type="button"
            className="flex items-center gap-2 px-3 py-2 bg-surface/95 backdrop-blur-md border border-[#B89555]/50 hover:border-[#B89555] rounded-full shadow-md text-maroon-text text-xs font-serif font-medium transition-all hover:scale-105 active:scale-95"
            title="Customize couple names and dates for preview"
          >
            <Edit3 className="w-3.5 h-3.5 text-[#B89555]" />
            <span className="hidden sm:inline">
              {isHindi ? "विवरण अनुकूलित करें" : "Personalize"}
            </span>
          </button>
        </div>

        {/* Personalize Modal */}
        <PersonalizeModal
          config={config}
          isOpen={isPersonalizeOpen}
          onClose={() => setIsPersonalizeOpen(false)}
          onUpdateConfig={(newConfig) => setConfig(newConfig)}
          isHindi={isHindi}
        />
        </>
      )}
    </div>
  );
}
