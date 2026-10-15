/**
 * Feature flags for the site.
 *
 * Priority (highest first):
 *   1. URL override   ?personalize=on | ?personalize=off   (remembered in this browser)
 *   2. Env variable   VITE_FEATURE_PERSONALIZE=true|false   (set in .env / hosting dashboard)
 *   3. Default        false  -> hidden for everyone you share the link with
 *
 * Owner workflow: open  https://your-site/?personalize=on  once on your own device;
 * the button then stays visible only in YOUR browser. Guests never see it.
 * Note: this is a UI toggle, not security — the data it edits is just a live preview.
 */
const STORAGE_KEY = 'ff_personalize';

function readPersonalizeFlag(): boolean {
  try {
    const param = new URLSearchParams(window.location.search).get('personalize');
    if (param === 'on') localStorage.setItem(STORAGE_KEY, 'on');
    if (param === 'off') localStorage.removeItem(STORAGE_KEY);
    if (localStorage.getItem(STORAGE_KEY) === 'on') return true;
  } catch {
    /* storage unavailable – fall through to env default */
  }
  return import.meta.env.VITE_FEATURE_PERSONALIZE === 'true';
}

export const featureFlags = {
  personalize: readPersonalizeFlag(),
  /** Show the light/dark toggle in the header */
  themeToggle: import.meta.env.VITE_FEATURE_THEME_TOGGLE !== 'false',
};

/** Where the background track lives. Put your file in /public/audio/ (see README). */
export const MUSIC_SRC: string =
  import.meta.env.VITE_MUSIC_URL || '/audio/wedding-theme.mp3';
