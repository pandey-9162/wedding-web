import React, { useState } from 'react';
import { WeddingConfig } from '../config/wedding';
import { X, Sparkles, Sliders, Check } from 'lucide-react';

interface PersonalizeModalProps {
  config: WeddingConfig;
  isOpen: boolean;
  onClose: () => void;
  onUpdateConfig: (newConfig: WeddingConfig) => void;
  isHindi: boolean;
}

export const PersonalizeModal: React.FC<PersonalizeModalProps> = ({
  config,
  isOpen,
  onClose,
  onUpdateConfig,
  isHindi,
}) => {
  const [formData, setFormData] = useState({
    brideName: config.bride.name,
    brideNameHindi: config.bride.nameHindi,
    groomName: config.groom.name,
    groomNameHindi: config.groom.nameHindi,
    venueName: config.wedding.venueName,
    venueNameHindi: config.wedding.venueNameHindi,
    dateDisplay: config.wedding.dateDisplay,
  });

  const [savedToast, setSavedToast] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const updated: WeddingConfig = {
      ...config,
      bride: {
        ...config.bride,
        name: formData.brideName,
        nameHindi: formData.brideNameHindi,
        initials: formData.brideName.charAt(0) || 'R',
      },
      groom: {
        ...config.groom,
        name: formData.groomName,
        nameHindi: formData.groomNameHindi,
        initials: formData.groomName.charAt(0) || 'S',
      },
      wedding: {
        ...config.wedding,
        venueName: formData.venueName,
        venueNameHindi: formData.venueNameHindi,
        dateDisplay: formData.dateDisplay,
      },
    };

    onUpdateConfig(updated);
    setSavedToast(true);
    setTimeout(() => {
      setSavedToast(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1A120F]/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-surface rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-[#B89555]/40 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 p-2 text-ink/60 hover:text-maroon-text rounded-full focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2 text-maroon-text">
          <Sliders className="w-5 h-5 text-[#B89555]" />
          <h3 className="text-xl font-serif font-bold">
            {isHindi ? "विवाह विवरण संपादित करें" : "Live Personalize Preview"}
          </h3>
        </div>

        <p className="text-xs font-serif text-ink/80 mb-6">
          {isHindi
            ? "यहाँ नाम और तिथि बदलकर देखें कि आपकी वेबसाइट कैसी दिखेगी। स्थाई बदलाव के लिए 'src/config/wedding.ts' को संपादित करें।"
            : "Customize couple names and venues here for instant live preview. For permanent changes, edit 'src/config/wedding.ts'."}
        </p>

        {savedToast ? (
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-serif flex items-center justify-center gap-2 my-6">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>Updated live preview successfully!</span>
          </div>
        ) : (
          <form onSubmit={handleSave} className="space-y-4 text-xs font-serif">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-maroon-text font-semibold mb-1">
                  Bride's Name (EN)
                </label>
                <input
                  type="text"
                  name="brideName"
                  value={formData.brideName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-surface-card border border-[#B89555]/30 rounded-lg text-xs"
                />
              </div>
              <div>
                <label className="block text-maroon-text font-semibold mb-1">
                  वधू का नाम (HI)
                </label>
                <input
                  type="text"
                  name="brideNameHindi"
                  value={formData.brideNameHindi}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-surface-card border border-[#B89555]/30 rounded-lg text-xs font-devanagari"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-maroon-text font-semibold mb-1">
                  Groom's Name (EN)
                </label>
                <input
                  type="text"
                  name="groomName"
                  value={formData.groomName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-surface-card border border-[#B89555]/30 rounded-lg text-xs"
                />
              </div>
              <div>
                <label className="block text-maroon-text font-semibold mb-1">
                  वर का नाम (HI)
                </label>
                <input
                  type="text"
                  name="groomNameHindi"
                  value={formData.groomNameHindi}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-surface-card border border-[#B89555]/30 rounded-lg text-xs font-devanagari"
                />
              </div>
            </div>

            <div>
              <label className="block text-maroon-text font-semibold mb-1">
                Wedding Date Display
              </label>
              <input
                type="text"
                name="dateDisplay"
                value={formData.dateDisplay}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-surface-card border border-[#B89555]/30 rounded-lg text-xs"
              />
            </div>

            <div>
              <label className="block text-maroon-text font-semibold mb-1">
                Venue Name
              </label>
              <input
                type="text"
                name="venueName"
                value={formData.venueName}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-surface-card border border-[#B89555]/30 rounded-lg text-xs"
              />
            </div>

            <div className="pt-3 flex gap-3">
              <button
                type="submit"
                className="flex-1 py-2.5 bg-maroon hover:bg-[#853445] text-on-dark rounded-xl font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#DFC18A]" />
                <span>Apply to Preview</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 bg-surface-2 hover:bg-surface-3 text-ink rounded-xl font-medium transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
