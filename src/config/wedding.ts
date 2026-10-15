/**
 * Centralized Wedding Configuration for "A Royal Beginning"
 * 
 * To personalize this wedding website for your family:
 * 1. Replace the placeholder values below with the bride and groom's names, dates, and venue.
 * 2. Update the events, family messages, and travel logistics as needed.
 * 3. All components across the application consume this single source of truth.
 */

import bridePhoto from '../assets/images/bride_portrait_1792099311324.jpg';
import groomPhoto from '../assets/images/groom_portrait_1792099311214.jpg';
import palaceHero from '../assets/images/udaipur_palace_hero_1792099309997.jpg';
import twilight from '../assets/images/udaipur_twilight_closing_1792099310694.jpg';
import mandap from '../assets/images/royal_mandap_celebration_1792099311415.jpg';

export interface EventDetail {
  id: string;
  name: string;
  nameHindi: string;
  date: string;
  dateHindi: string;
  startTime: string;
  endTime: string;
  venue: string;
  venueHindi: string;
  address: string;
  description: string;
  descriptionHindi: string;
  dressCode?: string;
  dressCodeHindi?: string;
  mapUrl: string;
  themeColor: string; // Tailored accent color
}

export interface StoryMilestone {
  id: string;
  chapter: string;
  chapterHindi: string;
  title: string;
  titleHindi: string;
  date: string;
  location: string;
  description: string;
  descriptionHindi: string;
  highlight: string;
  highlightHindi: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  titleHindi: string;
  category: 'portraits' | 'engagement' | 'family' | 'prewedding' | 'preparations';
  imageUrl: string;
  caption: string;
  captionHindi: string;
}

export interface TravelAccommodation {
  name: string;
  type: string;
  description: string;
  location: string;
  distance: string;
}

export interface WeddingConfig {
  bride: {
    name: string;
    nameHindi: string;
    nickname: string;
    initials: string;
    bio: string;
    bioHindi: string;
    photo: string;
    family: {
      father: string;
      mother: string;
      message: string;
      messageHindi: string;
    };
  };
  groom: {
    name: string;
    nameHindi: string;
    nickname: string;
    initials: string;
    bio: string;
    bioHindi: string;
    photo: string;
    family: {
      father: string;
      mother: string;
      message: string;
      messageHindi: string;
    };
  };
  sharedFamilyMessage: {
    title: string;
    titleHindi: string;
    sanskritHeading: string;
    text: string;
    textHindi: string;
  };
  wedding: {
    title: string;
    tagline: string;
    taglineHindi: string;
    sanskritGreeting: string;
    sanskritBlessing: string;
    sanskritClosing: string;
    date: string; // ISO 8601 string for countdown accuracy
    dateDisplay: string;
    dateDisplayHindi: string;
    timeDisplay: string;
    timeZone: string;
    venueName: string;
    venueNameHindi: string;
    venueAddress: string;
    city: string;
    stateCountry: string;
    googleMapsUrl: string;
    heroImage: string;
    twilightImage: string;
    mandapImage: string;
  };
  events: EventDetail[];
  story: StoryMilestone[];
  gallery: GalleryItem[];
  travel: {
    overview: string;
    overviewHindi: string;
    airport: {
      name: string;
      code: string;
      distance: string;
      details: string;
      detailsHindi: string;
    };
    railway: {
      name: string;
      code: string;
      distance: string;
      details: string;
      detailsHindi: string;
    };
    boatTransfers: {
      title: string;
      titleHindi: string;
      details: string;
      detailsHindi: string;
    };
    accommodations: TravelAccommodation[];
    conciergeContact: {
      name: string;
      role: string;
      phone: string;
      email: string;
    };
    weatherNotes: string;
    weatherNotesHindi: string;
  };
  rsvp: {
    endpointUrl: string; // If set to empty, defaults to mock/local storage with user feedback
    contactEmail: string;
    deadline: string;
    deadlineHindi: string;
    dietaryOptions: { id: string; label: string; labelHindi: string }[];
  };
  share: {
    whatsappMessage: string;
    shareTitle: string;
    shareText: string;
  };
  features: {
    countdown: boolean;
    gallery: boolean;
    travelGuide: boolean;
    rsvp: boolean;
    music: boolean;
  };
}

export const weddingConfig: WeddingConfig = {
  bride: {
    name: "Radhika Sharma",
    nameHindi: "राधिका शर्मा",
    nickname: "Ria",
    initials: "R",
    bio: "An architect with an eye for timeless heritage and open skies. She finds beauty in classical Mewari courtyards, quiet lakeside mornings, and spontaneous family laughs.",
    bioHindi: "कला और वास्तुकला से प्रेम करने वाली राधिका, मेवाड़ी झरोखों और झील के शांत सवेरों में सुकून पाती हैं।",
    photo: bridePhoto,
    family: {
      father: "Dr. Alok Sharma",
      mother: "Mrs. Meenakshi Sharma",
      message: "May the grace of Bhagwan Eklingji bless our beloved daughter Radhika as she embarks on this holy union. We welcome Devendra into our hearts with immense joy and blessings.",
      messageHindi: "भगवान एकलिंगजी की असीम कृपा हमारी लाडली राधिका पर सदा बनी रहे। हम सूर्यवीर और उनके परिवार का सस्नेह स्वागत करते हैं।"
    }
  },
  groom: {
    name: "Suryaveer Singh",
    nameHindi: "सूर्यवीर सिंह",
    nickname: "Surya",
    initials: "S",
    bio: "A heritage preservation enthusiast and entrepreneur who carries deep reverence for Mewar's valiant past, warm hospitality, and the timeless magic of Udaipur's golden sunsets.",
    bioHindi: "उदयपुर की पावन धरा और संस्कृति से गहरे जुड़े सूर्यवीर, परंपरा और आधुनिकता के खूबसूरत संगम में विश्वास रखते हैं।",
    photo: groomPhoto,
    family: {
      father: "Thakur Mahendra Singh",
      mother: "Mrs. Gayatri Devi",
      message: "With pride and humility, we celebrate Suryaveer finding his soulmate in Radhika. We look forward to folding both families together under the auspicious sky of Mewar.",
      messageHindi: "हमारे सुपुत्र सूर्यवीर और राधिका के इस पावन गठबंधन पर हम समस्त परिजनों और मित्रों का सहृदय स्वागत करते हैं।"
    }
  },
  sharedFamilyMessage: {
    title: "Two Families, One Celebration",
    titleHindi: "दो परिवार, एक उत्सव",
    sanskritHeading: "शुभ विवाह",
    text: "With folded hands and heartfelt happiness, the Sharma and Singh families invite you to share in the divine blessings, joy, and celebration as our children take their seven sacred vows.",
    textHindi: "करबद्ध प्रार्थना और असीम हर्ष के साथ, शर्मा एवं सिंह परिवार आप सभी को इस शुभ विवाह उत्सव में सादर आमंत्रित करते हैं।"
  },
  wedding: {
    title: "A Royal Beginning",
    tagline: "Two Hearts, Two Families, One Beautiful Beginning.",
    taglineHindi: "दो दिल, दो परिवार, एक खूबसूरत शुरुआत।",
    sanskritGreeting: "शुभ विवाह",
    sanskritBlessing: "मङ्गलम् भवतु",
    sanskritClosing: "सर्वे भवन्तु सुखिनः",
    date: "2026-11-28T18:30:00+05:30", // Live countdown target in Asia/Kolkata
    dateDisplay: "Saturday, 28th November 2026",
    dateDisplayHindi: "शनिवार, 28 नवंबर 2026",
    timeDisplay: "Muhurat: 6:30 PM IST onwards",
    timeZone: "Asia/Kolkata",
    venueName: "The Oberoi Udaivilas & Jagmandir Island Palace",
    venueNameHindi: "द ओबेरॉय उदयविलास एवं जगमंदिर आइलैंड पैलेस",
    venueAddress: "Haridas Ji Ki Magri, Lake Pichola, Udaipur, Rajasthan 313001",
    city: "Udaipur",
    stateCountry: "Rajasthan, India",
    googleMapsUrl: "https://maps.google.com/?q=The+Oberoi+Udaivilas+Udaipur",
    heroImage: palaceHero,
    twilightImage: twilight,
    mandapImage: mandap,
  },
  events: [
    {
      id: "ganesh-puja",
      name: "Ganesh Sthapana & Divine Puja",
      nameHindi: "गणेश स्थापना एवं मंगल पाठ",
      date: "Friday, 27th November 2026",
      dateHindi: "शुक्रवार, 27 नवंबर 2026",
      startTime: "10:00 AM IST",
      endTime: "12:30 PM IST",
      venue: "Chandra Mahal Courtyard, Udaivilas",
      venueHindi: "चंद्र महल प्रांगण, उदयविलास",
      address: "Haridas Ji Ki Magri, Udaipur",
      description: "An auspicious invocation to Lord Ganesha, seeking divine blessings, peace, and harmony before the commencement of our royal wedding festivities.",
      descriptionHindi: "विघ्नहर्ता श्री गणेश जी की पावन स्थापना और अर्चना के साथ विवाह उत्सव का शुभ शुभारंभ।",
      dressCode: "Traditional Rajasthani / Festive Yellow & Pastel",
      dressCodeHindi: "पारंपरिक राजस्थानी / पीला एवं सौम्य परिधान",
      mapUrl: "https://maps.google.com/?q=The+Oberoi+Udaivilas+Udaipur",
      themeColor: "#B85C45"
    },
    {
      id: "mehendi",
      name: "Mehendi & Lakeside Bazaar",
      nameHindi: "मेहंदी एवं झील का मेला",
      date: "Friday, 27th November 2026",
      dateHindi: "शुक्रवार, 27 नवंबर 2026",
      startTime: "03:00 PM IST",
      endTime: "07:00 PM IST",
      venue: "Poolside Lawns, Udaivilas",
      venueHindi: "पूलसाइड लॉन, उदयविलास",
      address: "Haridas Ji Ki Magri, Udaipur",
      description: "Intricate henna artistry, folk music, puppet shows, colorful dupattas, and authentic Rajasthani street delicacies by the gentle waters of Lake Pichola.",
      descriptionHindi: "हाथों में रचेगी खुशियों की मेहंदी, लोकगीतों की धुन और झील किनारे सजेगा राजस्थानी स्वाद।",
      dressCode: "Bright Florals & Vibrant Green / Rani Pink",
      dressCodeHindi: "रंग-बिरंगे फ्लोरल / हरा एवं रानी गुलाबी",
      mapUrl: "https://maps.google.com/?q=The+Oberoi+Udaivilas+Udaipur",
      themeColor: "#9DA98B"
    },
    {
      id: "sangeet",
      name: "Sangeet & Royal Melodies",
      nameHindi: "संगीत संध्या एवं उत्सव",
      date: "Friday, 27th November 2026",
      dateHindi: "शुक्रवार, 27 नवंबर 2026",
      startTime: "08:00 PM IST",
      endTime: "Late Night IST",
      venue: "The Grand Mewar Ballroom & Terrace",
      venueHindi: "द ग्रैंड मेवाड़ बॉलरूम एवं टेरेस",
      address: "Haridas Ji Ki Magri, Udaipur",
      description: "An enchanting evening of family dance performances, royal Mewari dinner, Sufi melodies, and celebration under the starlit sky.",
      descriptionHindi: "दोनों परिवारों की ओर से मनमोहक नृत्य प्रस्तुतियां, मधुर संगीत और शाही दावत।",
      dressCode: "Royal Indo-Western / Shimmer & Velvet",
      dressCodeHindi: "रॉयल इंडो-वेस्टर्न / शिमर एवं वेलवेट",
      mapUrl: "https://maps.google.com/?q=The+Oberoi+Udaivilas+Udaipur",
      themeColor: "#702D3B"
    },
    {
      id: "haldi",
      name: "Haldi & Phoolon Ki Holi",
      nameHindi: "हल्दी एवं फूलों की होली",
      date: "Saturday, 28th November 2026",
      dateHindi: "शनिवार, 28 नवंबर 2026",
      startTime: "10:30 AM IST",
      endTime: "01:30 PM IST",
      venue: "Lotus Pond Pavilions, Udaivilas",
      venueHindi: "कमल कुंड मंडप, उदयविलास",
      address: "Haridas Ji Ki Magri, Udaipur",
      description: "Sacred turmeric paste ceremony infused with fragrant marigold and rose petal showers, dhol beats, and joyful blessings.",
      descriptionHindi: "सुगंधित हल्दी, गुलाब और गेंदे के फूलों की वर्षा और ढोल की थाप पर खुशियों का उल्लास।",
      dressCode: "Sunlit Yellow / Mustard & Ivory",
      dressCodeHindi: "हल्दी पीला / केसरिया एवं आइवरी",
      mapUrl: "https://maps.google.com/?q=The+Oberoi+Udaivilas+Udaipur",
      themeColor: "#B89555"
    },
    {
      id: "wedding-ceremony",
      name: "Baraat, Varmala & Sacred Pheras",
      nameHindi: "बारात, वरमाला एवं सात फेरे",
      date: "Saturday, 28th November 2026",
      dateHindi: "शनिवार, 28 नवंबर 2026",
      startTime: "05:00 PM IST",
      endTime: "09:00 PM IST",
      venue: "Jagmandir Island Palace, Lake Pichola",
      venueHindi: "जगमंदिर आइलैंड पैलेस, पिछोला झील",
      address: "Lake Pichola, Udaipur (Boat boarding from Bansi Ghat)",
      description: "The royal Baraat arrives via illuminated boats across the lake. In the sanctified mandap of Jagmandir, Radhika and Suryaveer take the sacred seven vows around the holy agni.",
      descriptionHindi: "शाही नावों से बारात का आगमन, वरमाला और पवित्र अग्नि के साक्षी सात फेरों का अलौकिक दृश्य।",
      dressCode: "Royal Traditional / Banarasi Silk & Sherwani",
      dressCodeHindi: "राजसी पारंपरिक / बनारसी सिल्क एवं शेरवानी",
      mapUrl: "https://maps.google.com/?q=Jagmandir+Island+Palace+Udaipur",
      themeColor: "#702D3B"
    },
    {
      id: "reception",
      name: "The Royal Banquet & Reception",
      nameHindi: "शाही प्रीतिभोज एवं स्वागत",
      date: "Saturday, 28th November 2026",
      dateHindi: "शनिवार, 28 नवंबर 2026",
      startTime: "09:30 PM IST",
      endTime: "Midnight IST",
      venue: "The Courtyard of 1000 Lanterns, Jagmandir",
      venueHindi: "सहस्र दीप प्रांगण, जगमंदिर",
      address: "Lake Pichola, Udaipur",
      description: "A candle-lit banquet honoring the newlyweds featuring heritage Mewari culinary delicacies, live sitar ragas, and heartfelt toasts.",
      descriptionHindi: "दीपों की आभा में नवदम्पति का स्वागत, पारंपरिक मेवाड़ी व्यंजन और आत्मीय मिलन।",
      dressCode: "Formal Indian Royale / Black Tie Optional",
      dressCodeHindi: "शाही औपचारिक / ब्लैक टाई या पारंपरिक",
      mapUrl: "https://maps.google.com/?q=Jagmandir+Island+Palace+Udaipur",
      themeColor: "#40332F"
    }
  ],
  story: [
    {
      id: "chapter-1",
      chapter: "Chapter 01",
      chapterHindi: "अध्याय ०१",
      title: "Where Our Story Began",
      titleHindi: "जहाँ से शुरुआत हुई",
      date: "Autumn 2022",
      location: "Jaipur Literature Festival",
      description: "A chance conversation in the historic halls of Diggi Palace over architecture and vintage Rajasthani poetry. What was meant to be a 10-minute book discussion turned into hours of shared laughter and discovered connections.",
      descriptionHindi: "जयपुर के साहित्य उत्सव में वास्तुकला और कविता पर एक छोटी सी बातचीत, जो घंटों के आत्मीय संवाद में बदल गई।",
      highlight: "One conversation that felt like home.",
      highlightHindi: "एक बातचीत जिसने दिल को अपना सा बना दिया।"
    },
    {
      id: "chapter-2",
      chapter: "Chapter 02",
      chapterHindi: "अध्याय ०२",
      title: "A Moment to Remember",
      titleHindi: "एक यादगार लम्हा",
      date: "Winter 2023",
      location: "Lake Pichola, Udaipur",
      description: "On a sunset boat ride overlooking the shimmering palaces of Udaipur, we watched the golden twilight reflect in the lake. It was that evening we both quietly realized our lives were intertwined forever.",
      descriptionHindi: "पिछोला की लहरों पर ढलती शाम और सुनहरी धूप के बीच, दोनों ने खामोशी में एक-दूसरे का हाथ थाम लिया।",
      highlight: "Under the golden Mewar twilight.",
      highlightHindi: "मेवाड़ की सुनहरी संध्या की छांव में।"
    },
    {
      id: "chapter-3",
      chapter: "Chapter 03",
      chapterHindi: "अध्याय ०३",
      title: "The Beginning of Forever",
      titleHindi: "सदा के लिए एक बंधन",
      date: "Monsoon 2024",
      location: "Family Blessings, New Delhi & Jodhpur",
      description: "When our families met, the bond felt ancient and effortless. Over steaming adrak chai and traditional sweets, two distinct families found themselves laughing like lifelong friends.",
      descriptionHindi: "जब दोनों परिवार मिले, तो लगा मानो यह रिश्ता सदियों पुराना हो। हंसी-खुशी और आशीर्वाद के सुंदर पल।",
      highlight: "Two families becoming one.",
      highlightHindi: "दो परिवारों का एक आत्मीय मिलन।"
    },
    {
      id: "chapter-4",
      chapter: "Chapter 04",
      chapterHindi: "अध्याय ०४",
      title: "A Promise for Life",
      titleHindi: "जीवन भर का वादा",
      date: "Spring 2025",
      location: "Sajjangarh Monsoon Palace",
      description: "Surrounded by panoramic views of Udaipur's emerald hills and lakes, Suryaveer asked Radhika to be his partner in all of life's adventures, and with tears of pure joy, she said yes.",
      descriptionHindi: "उदयपुर की पहाड़ियों की गोद में, जीवन भर साथ निभाने का वादा और मुस्कुराती हुई 'हां'।",
      highlight: "With all our hearts, we said yes.",
      highlightHindi: "दिल की गहराइयों से किया गया जीवन-भर का वादा।"
    },
    {
      id: "chapter-5",
      chapter: "Chapter 05",
      chapterHindi: "अध्याय ०५",
      title: "Our Next Chapter",
      titleHindi: "हमारा नया सफर",
      date: "November 2026",
      location: "Udaipur, Rajasthan",
      description: "Now, as we prepare to step around the holy fire, we look forward to having our closest friends, mentors, and loved ones bless this royal beginning.",
      descriptionHindi: "अब पवित्र अग्नि के फेरे लेकर, आप सभी के सानिध्य में हम अपने जीवन के नए अध्याय की शुरुआत कर रहे हैं।",
      highlight: "Celebrating with those we cherish most.",
      highlightHindi: "अपने सबसे प्रियजनों के आशीर्वाद के साथ।"
    }
  ],
  gallery: [
    {
      id: "g-1",
      title: "The Royal Heritage",
      titleHindi: "राजसी धरोहर",
      category: "portraits",
      imageUrl: palaceHero,
      caption: "City Palace reflections in the tranquil waters of Lake Pichola at sunset.",
      captionHindi: "सूर्यास्त के समय पिछोला झील में प्रतिबिंबित सिटी पैलेस की भव्यता।"
    },
    {
      id: "g-2",
      title: "The Graceful Bride",
      titleHindi: "सौम्य दुल्हन",
      category: "portraits",
      imageUrl: bridePhoto,
      caption: "Radhika in hand-embroidered rose lehenga with traditional Mewari Kundan jewellery.",
      captionHindi: "पारंपरिक कुंदन आभूषणों और गुलाबी लहंगे में सजी राधिका।"
    },
    {
      id: "g-3",
      title: "The Royal Groom",
      titleHindi: "राजसी दूल्हा",
      category: "portraits",
      imageUrl: groomPhoto,
      caption: "Suryaveer in an ivory achkan sherwani with an understated Mewar safa.",
      captionHindi: "आइवरी अचकन शेरवानी और मेवाड़ी साफा में सुशोभित सूर्यवीर।"
    },
    {
      id: "g-4",
      title: "Sacred Mandap & Pheras",
      titleHindi: "पवित्र मंडप एवं फेरे",
      category: "preparations",
      imageUrl: mandap,
      caption: "Fragrant marigold garlands and sacred fire awaiting the auspicious moments.",
      captionHindi: "गेंदे के सुगंधित फूलों और पवित्र अग्नि के साक्षी शुभ मुहूर्त की तैयारी।"
    },
    {
      id: "g-5",
      title: "Twilight on Jagmandir",
      titleHindi: "जगमंदिर की संध्या",
      category: "prewedding",
      imageUrl: twilight,
      caption: "Thousands of floating lanterns illuminated over Lake Pichola.",
      captionHindi: "पिछोला झील पर दीपों और दीपमालाओं से जगमगाता जगमंदिर द्वीप महल।"
    }
  ],
  travel: {
    overview: "We have arranged a warm royal welcome for all our esteemed guests arriving in the City of Lakes. Here is all the logistical information to ensure your journey is seamless and joyous.",
    overviewHindi: "झीलों की नगरी उदयपुर में पधारने वाले हमारे सभी सम्मानीय अतिथियों के लिए शाही स्वागत और यात्रा की विस्तृत जानकारी।",
    airport: {
      name: "Maharana Pratap Airport",
      code: "UDR (Dabok)",
      distance: "25 km (approx. 40 minutes to Lake Pichola)",
      details: "Direct domestic flights operate regularly from Delhi, Mumbai, Bengaluru, Jaipur, and Ahmedabad. Dedicated wedding hospitality desks will welcome you at arrivals.",
      detailsHindi: "दिल्ली, मुंबई, बेंगलुरु और अहमदाबाद से सीधी उड़ानें उपलब्ध हैं। हवाई अड्डे पर शादी का स्वागत डेस्क उपस्थित रहेगा।"
    },
    railway: {
      name: "Udaipur City Railway Station",
      code: "UDZ",
      distance: "7 km (approx. 15 minutes to Lake Pichola)",
      details: "Connected by premium express trains including Mewar Express and Vande Bharat. Pre-arranged chauffeurs will assist with luggage and transfers.",
      detailsHindi: "मेवाड़ एक्सप्रेस और वंदे भारत सहित प्रमुख रेलगाड़ियों से जुड़ा हुआ। स्टेशन पर वाहन सुविधा उपलब्ध रहेगी।"
    },
    boatTransfers: {
      title: "Royal Shikara Boat Transfers to Jagmandir",
      titleHindi: "जगमंदिर के लिए शाही नाव सेवा",
      details: "Access to the wedding ceremony at Jagmandir Island Palace is exclusively via traditional decorated boats departing every 15 minutes from Bansi Ghat jetty.",
      detailsHindi: "जगमंदिर द्वीप महल के लिए बंसी घाट से हर १५ मिनट में सजी हुई शाही नावें उपलब्ध रहेंगी।"
    },
    accommodations: [
      {
        name: "The Oberoi Udaivilas",
        type: "Primary Wedding Venue & Stay",
        description: "50-acre luxury retreat featuring interconnected domes, fountains, and peacocks overlooking the lake.",
        location: "Haridas Ji Ki Magri",
        distance: "Venue"
      },
      {
        name: "Taj Lake Palace",
        type: "Heritage Island Partner",
        description: "18th-century white marble palace floating in the middle of Lake Pichola.",
        location: "Lake Pichola",
        distance: "5 mins via boat"
      },
      {
        name: "Fateh Garh Heritage Palace",
        type: "Recommended Partner Stay",
        description: "Perched high on the Sisarma hill overlooking the entire Udaipur valley with sanctuary views.",
        location: "Sisarma",
        distance: "10 mins drive"
      }
    ],
    conciergeContact: {
      name: "Udaipur Royal Wedding Concierge Desk",
      role: "Guest Hospitality & Transfers Lead",
      phone: "+91 98290 XXXXX",
      email: "hospitality.udaipurwedding@example.com"
    },
    weatherNotes: "Udaipur in late November is pleasantly warm during sunny afternoons (around 26°C) and delightfully crisp in the evenings by the water (approx. 14°C). A light stole, shawl, or royal jacket is recommended for outdoor lakeside events.",
    weatherNotesHindi: "नवंबर के अंत में उदयपुर का मौसम दिन में सुखद (२६° से.) और शाम को झील किनारे हल्की ठंड (१४° से.) रहता है। शाम के उत्सवों के लिए शॉल या कोट साथ रखें।"
  },
  rsvp: {
    endpointUrl: "", // When empty, utilizes safe browser persistence with helpful dev export
    contactEmail: "rsvp.udaipurwedding@example.com",
    deadline: "1st November 2026",
    deadlineHindi: "१ नवंबर २०२६",
    dietaryOptions: [
      { id: "mewari-pure-veg", label: "Traditional Mewari Rajasthani Vegetarian (Dal Baati Churma, Gatte)", labelHindi: "पारंपरिक मेवाड़ी राजस्थानी शाकाहारी" },
      { id: "jain-veg", label: "Strict Jain Vegetarian (No onion, garlic, or root vegetables)", labelHindi: "शुद्ध जैन शाकाहारी" },
      { id: "royal-multi-cuisine", label: "Royal Multi-Cuisine Vegetarian (North Indian, Continental, Asian)", labelHindi: "रॉयल मल्टी-कुज़ीन शाकाहारी" },
      { id: "vegan-glutenfree", label: "Vegan & Gluten-Sensitive Cuisine", labelHindi: "वीगन एवं ग्लूटेन-मुक्त" }
    ]
  },
  share: {
    whatsappMessage: "With the love and blessings of our families, we joyfully invite you to the Royal Wedding of Radhika & Suryaveer in Udaipur on 28th November 2026. Please visit our wedding invitation website for celebration details, itinerary, and RSVP:",
    shareTitle: "A Royal Beginning: Radhika & Suryaveer's Udaipur Wedding",
    shareText: "Join us in Udaipur for the royal wedding celebration of Radhika & Suryaveer. Two hearts, two families, one beautiful beginning."
  },
  features: {
    countdown: true,
    gallery: true,
    travelGuide: true,
    rsvp: true,
    music: true
  }
};
