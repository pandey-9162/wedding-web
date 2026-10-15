# Project “A Royal Beginning” — Udaipur Wedding Website

An award-winning, royal Rajasthani wedding website crafted for a Hindu family celebration in Udaipur, Rajasthan. The design combines the heritage of Mewar and Lake Pichola, the warmth of a personalized love story, luxury wedding stationery aesthetics, and modern responsive web engineering.

---

## 👑 Features & Experience

1. **Interactive Palace Invitation Opening (`InvitationIntro`)**:
   - Opens with a tactile ivory & gold royal invitation card framed in a Mewari jharokha arch.
   - Features Sanskrit invocations (*श्री गणेशाय नमः*, *शुभ विवाह*), personalized couple monogram, and an "Open Our Invitation" reveal.

2. **The Royal Hero Section (`WeddingHero`)**:
   - Prominent couple names, bilingual invitation blessings in English & Hindi, and decorative Sanskrit (*मङ्गलम् भवतु*).
   - High-fidelity fine-art illustration of Udaipur City Palace across Lake Pichola during golden sunset.

3. **Live Wedding Countdown (`WeddingCountdown`)**:
   - Real-time countdown in `Asia/Kolkata` (IST) tracking Days, Hours, Minutes, and Seconds.
   - Graceful handlers for imminent or past dates and respects `prefers-reduced-motion`.

4. **Our Story Timeline (`LoveStory`)**:
   - Five beautifully illustrated chapters: *Where Our Story Began*, *A Moment to Remember*, *The Beginning of Forever*, *A Promise for Life*, and *Our Next Chapter*.

5. **Meet the Couple (`CoupleProfiles`)**:
   - Complementary royal profile cards for the Bride and Groom with jharokha portrait framing, fond nicknames, and personal quotes.

6. **Wedding Celebrations Itinerary (`WeddingEvents`)**:
   - Dedicated event cards for *Ganesh Sthapana*, *Mehendi & Bazaar*, *Sangeet*, *Haldi*, *Baraat & Pheras*, and *The Royal Banquet*.
   - Includes dress code guidance, Google Maps directions links, and one-click **Google Calendar** and **.ics** calendar downloads.

7. **The Families & Joint Blessings (`FamilySection`)**:
   - Balanced cards for the Bride's and Groom's parents with personal messages and shared blessing (*दो परिवार, एक उत्सव*).

8. **Editorial Photo Gallery & Lightbox (`PhotoGallery`)**:
   - Scrapbook-style gallery categorized by *Portraits*, *Lakeside & Twilight*, and *Sacred Mandap*.
   - Fullscreen keyboard-accessible lightbox with arrow navigation (`←` / `→`) and `Escape` to close.

9. **Udaipur Travel & Hospitality Guide (`TravelGuide`)**:
   - Details for Maharana Pratap Airport (UDR), Udaipur City Railway Station (UDZ), royal shikara boat transfers to Jagmandir Island Palace, recommended heritage stays, November climate advice, and concierge contact desk.

10. **RSVP Experience (`RSVPForm`)**:
    - Validated guest attendance confirmation, guest count selector, multi-ceremony attendance checkboxes, Mewari & Jain dietary preferences, and blessings message.
    - Transparent submission handler: connects to any external webhook URL or saves to local browser storage with instant CSV download for wedding planners.

11. **Sharing & Social Cards (`ShareInvitation`)**:
    - Web Share API integration, WhatsApp pre-filled invitation sharing, and copy-link button.
    - Complete OpenGraph, Twitter, and Schema.org Event metadata configured in `index.html`.

12. **The Closing Scene (`WeddingFooter`)**:
    - Twilight Lake Pichola composition, Sanskrit closing (*सर्वे भवन्तु सुखिनः*), monogram, and back-to-top navigation.

13. **Ambient Traditional Music (`RoyalAudioPlayer`)**:
    - Synthesizes a meditative, serene classical sitar & tanpura drone in Raga Yaman using the Web Audio API. Never autoplays unexpectedly.

---

## 🛠️ How to Customize for Your Wedding

All personal names, dates, ceremonies, and messages are centralized in a single configuration file:

```text
src/config/wedding.ts
```

### 1. Update Bride & Groom Information
In `src/config/wedding.ts`, locate the `bride` and `groom` sections:
```typescript
bride: {
  name: "Radhika Sharma",
  nameHindi: "राधिका शर्मा",
  nickname: "Ria",
  initials: "R",
  bio: "...",
  photo: "/src/assets/images/bride_portrait_1792099311324.jpg", // Replace with your photo URL
  family: {
    father: "Dr. Alok Sharma",
    mother: "Mrs. Meenakshi Sharma",
    message: "..."
  }
}
```

### 2. Set the Wedding Date & Time
Update the `wedding.date` ISO 8601 string (used by the countdown timer in `Asia/Kolkata`):
```typescript
wedding: {
  date: "2026-11-28T18:30:00+05:30",
  dateDisplay: "Saturday, 28th November 2026",
  dateDisplayHindi: "शनिवार, 28 नवंबर 2026",
  venueName: "The Oberoi Udaivilas & Jagmandir Island Palace",
  googleMapsUrl: "https://maps.google.com/?q=The+Oberoi+Udaivilas+Udaipur",
  ...
}
```

### 3. Configure the RSVP Endpoint
If you wish to send RSVP submissions to a Google Sheet, Zapier webhook, or backend API, set `rsvp.endpointUrl`:
```typescript
rsvp: {
  endpointUrl: "https://your-api.example.com/api/rsvp", // or leave empty for local dev storage + CSV export
  contactEmail: "hospitality.udaipurwedding@example.com",
  ...
}
```

### 4. Live Preview Button
You can also click the **"Personalize"** button located at the bottom-left of the screen to preview couple names and venues directly in your browser.

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start the local development server
npm run dev

# Run production build
npm run build
```

## Dark mode
A sun/moon button in the header switches themes. The choice is saved in the browser and defaults to the visitor's system setting. Colours are CSS variables in `src/index.css` (`:root` and `html.dark`). Use `text-ink`, `bg-surface`, `bg-surface-2`, `text-maroon-text` etc. in new components so they follow the theme.

## Feature flags (`src/config/features.ts`)
- `VITE_FEATURE_PERSONALIZE` (default `false`) – hides the Personalize button/modal for guests.
  Owner access: visit `/?personalize=on` once on your own device (turn off with `/?personalize=off`).
- `VITE_FEATURE_THEME_TOGGLE` (default `true`) – set `false` to hide the theme toggle.

## Music
Drop an MP3 at `public/audio/wedding-theme.mp3` (or set `VITE_MUSIC_URL`). The player never autoplays; guests tap "Play Music". If no file is found it falls back to the built-in synthesized tanpura drone. Use music you have a licence for.
