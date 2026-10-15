import React from 'react';
import { motion } from 'motion/react';
import { WeddingConfig } from '../config/wedding';
import { Plane, Train, Ship, Hotel, Phone, Mail, Navigation, Sun, ExternalLink } from 'lucide-react';
import { FloralGarland } from './decorations/FloralGarland';

interface TravelGuideProps {
  config: WeddingConfig;
  isHindi: boolean;
}

export const TravelGuide: React.FC<TravelGuideProps> = ({ config, isHindi }) => {
  const travel = config.travel;

  return (
    <section id="travel" className="py-20 sm:py-28 bg-surface-2/40 relative border-t border-[#B89555]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase font-serif tracking-[0.25em] text-[#B89555] font-semibold">
            {isHindi ? "झीलों की नगरी" : "City of Lakes"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-maroon-text mt-1 mb-3">
            {isHindi ? "उदयपुर यात्रा एवं आतिथ्य गाइड" : "Venue & Guest Travel Guide"}
          </h2>
          <p className="text-sm sm:text-base font-serif italic text-ink/80 leading-relaxed">
            {isHindi ? travel.overviewHindi : travel.overview}
          </p>
          <FloralGarland variant="lotus" />
        </div>

        {/* Primary Venue Spotlight Banner */}
        <div className="mt-12 bg-surface rounded-3xl p-6 sm:p-8 border border-[#B89555]/30 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-serif uppercase tracking-widest text-terracotta-text font-semibold">
              {isHindi ? "मुख्य विवाह स्थल" : "Primary Wedding Venue"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-maroon-text">
              {isHindi ? config.wedding.venueNameHindi : config.wedding.venueName}
            </h3>
            <p className="text-xs sm:text-sm font-serif text-ink/80">
              {config.wedding.venueAddress}
            </p>
          </div>

          <a
            href={config.wedding.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-maroon hover:bg-[#853445] text-on-dark text-xs sm:text-sm font-serif font-semibold rounded-full shadow transition-all duration-200 border border-[#DFC18A]/40 whitespace-nowrap shrink-0"
          >
            <Navigation className="w-4 h-4 text-[#DFC18A]" />
            <span>{isHindi ? "गूगल मैप्स पर देखें" : "Open in Google Maps"}</span>
          </a>
        </div>

        {/* Arrival Logistics: Flights, Trains, and Royal Boats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8">
          {/* Airport */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-surface p-6 rounded-2xl border border-[#B89555]/30 shadow-sm flex flex-col"
          >
            <div className="w-10 h-10 rounded-full bg-[#B89555]/15 flex items-center justify-center text-maroon-text mb-4">
              <Plane className="w-5 h-5 text-maroon-text" />
            </div>
            <span className="text-xs font-serif uppercase tracking-widest text-[#B89555] font-semibold">
              {isHindi ? "हवाई मार्ग" : "By Air"}
            </span>
            <h4 className="text-lg font-serif font-bold text-maroon-text mt-1">
              {travel.airport.name}
            </h4>
            <p className="text-xs font-serif text-terracotta-text font-semibold mt-0.5">
              {travel.airport.code} · {travel.airport.distance}
            </p>
            <p className="text-xs sm:text-sm font-serif text-ink/85 mt-3 leading-relaxed">
              {isHindi ? travel.airport.detailsHindi : travel.airport.details}
            </p>
          </motion.div>

          {/* Railway */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-surface p-6 rounded-2xl border border-[#B89555]/30 shadow-sm flex flex-col"
          >
            <div className="w-10 h-10 rounded-full bg-[#B89555]/15 flex items-center justify-center text-maroon-text mb-4">
              <Train className="w-5 h-5 text-maroon-text" />
            </div>
            <span className="text-xs font-serif uppercase tracking-widest text-[#B89555] font-semibold">
              {isHindi ? "रेल मार्ग" : "By Train"}
            </span>
            <h4 className="text-lg font-serif font-bold text-maroon-text mt-1">
              {travel.railway.name}
            </h4>
            <p className="text-xs font-serif text-terracotta-text font-semibold mt-0.5">
              {travel.railway.code} · {travel.railway.distance}
            </p>
            <p className="text-xs sm:text-sm font-serif text-ink/85 mt-3 leading-relaxed">
              {isHindi ? travel.railway.detailsHindi : travel.railway.details}
            </p>
          </motion.div>

          {/* Lake Boats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-surface p-6 rounded-2xl border border-[#B89555]/30 shadow-sm flex flex-col"
          >
            <div className="w-10 h-10 rounded-full bg-[#B89555]/15 flex items-center justify-center text-maroon-text mb-4">
              <Ship className="w-5 h-5 text-maroon-text" />
            </div>
            <span className="text-xs font-serif uppercase tracking-widest text-[#B89555] font-semibold">
              {isHindi ? "झील में शाही नावें" : "Lakeside Transfers"}
            </span>
            <h4 className="text-lg font-serif font-bold text-maroon-text mt-1">
              {isHindi ? travel.boatTransfers.titleHindi : travel.boatTransfers.title}
            </h4>
            <p className="text-xs font-serif text-terracotta-text font-semibold mt-0.5">
              Bansi Ghat Jetty → Jagmandir
            </p>
            <p className="text-xs sm:text-sm font-serif text-ink/85 mt-3 leading-relaxed">
              {isHindi ? travel.boatTransfers.detailsHindi : travel.boatTransfers.details}
            </p>
          </motion.div>
        </div>

        {/* Accommodation Stays */}
        <div className="mt-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-serif font-bold text-maroon-text">
              {isHindi ? "सुझाए गए हेरिटेज होटल एवं विश्राम स्थल" : "Recommended Heritage Accommodations"}
            </h3>
            <p className="text-xs sm:text-sm font-serif italic text-ink/70">
              {isHindi ? "विवाह स्थल के समीप आरक्षित एवं प्रमुख होटल" : "Selected stays offering royal Mewari warmth and proximity to venues"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {travel.accommodations.map((acc, i) => (
              <div
                key={i}
                className="bg-surface p-5 rounded-2xl border border-[#B89555]/25 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-serif text-[#B89555] mb-1">
                    <Hotel className="w-3.5 h-3.5" />
                    <span>{acc.type}</span>
                  </div>
                  <h4 className="text-lg font-serif font-bold text-maroon-text">
                    {acc.name}
                  </h4>
                  <p className="text-xs font-serif text-terracotta-text mt-0.5 font-medium">
                    {acc.location} · {acc.distance}
                  </p>
                  <p className="text-xs font-serif text-ink/80 mt-2 leading-relaxed">
                    {acc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weather & Hospitality Desk Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {/* Weather */}
          <div className="bg-surface p-5 rounded-2xl border border-[#B89555]/30 flex items-start gap-4">
            <div className="p-3 bg-surface-2 rounded-full text-terracotta-text shrink-0">
              <Sun className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-serif font-bold text-maroon-text">
                {isHindi ? "उदयपुर मौसम एवं पहनावा सलाह" : "November Weather & Attire Note"}
              </h4>
              <p className="text-xs sm:text-sm font-serif text-ink/85 mt-1 leading-relaxed">
                {isHindi ? travel.weatherNotesHindi : travel.weatherNotes}
              </p>
            </div>
          </div>

          {/* Concierge Desk */}
          <div className="bg-surface p-5 rounded-2xl border border-[#B89555]/30 flex items-start gap-4">
            <div className="p-3 bg-surface-2 rounded-full text-maroon-text shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-serif font-bold text-maroon-text">
                {isHindi ? "अतिथि आतिथ्य एवं सहायता डेस्क" : "Guest Hospitality & Concierge Desk"}
              </h4>
              <p className="text-xs font-serif text-terracotta-text font-medium">
                {travel.conciergeContact.name} ({travel.conciergeContact.role})
              </p>
              <div className="mt-2 space-y-1 text-xs font-serif text-ink/80">
                <p>Phone: {travel.conciergeContact.phone}</p>
                <p>Email: {travel.conciergeContact.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
