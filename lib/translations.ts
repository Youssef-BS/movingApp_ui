export const translations = {
  de: {
    // Navigation & Headers
    header: "K&A Entrümpelung",
    home: "Startseite",
    booking: "Anfrage",
    services: "Leistungen",
    about: "Über uns",
    contact: "Kontakt",

    // Hero Section
    heroTitle: "K&A Entrümpelung – Ihr Entrümpler aus Weinstadt",
    heroDescription:
      "Zuverlässig · Schnell · Diskret · Faire Festpreise. Wir kümmern uns um en, Entrümpelungen und fachgerechte Entsorgung – professionell und unkompliziert.",
    bookNow: "Jetzt Anfrage stellen",
    learnMore: "Mehr erfahren",

    // Services
    movingServices: "",
    movingDescription:
      "Professionelle en mit sorgfältiger Räumung und zuverlässiger Abwicklung.",
    cleaningServices: "Besenrein- & Endreinigung",
    cleaningDescription:
      "Gründliche Reinigung nach der Entrümpelung – für eine saubere und übergabebereite Immobilie.",
    packingServices: "Entrümpelung Entsorgung",
    packingDescription:
      "Fachgerechte Räumung und Entsorgung von Möbeln, Sperrmüll und nicht mehr benötigten Gegenständen.",

    // Features
    expertTeam: "Zuverlässig & Diskret",
    expertTeamDesc:
      "Wir arbeiten professionell, sorgfältig und respektvoll – auch bei sensiblen Haushalts- und Nachlassauflösungen.",
    quickService: "Schnell & Termintreu",
    quickServiceDesc:
      "Effiziente Abläufe, flexible Terminvereinbarung und zuverlässige Durchführung.",
    qualityAssured: "Faire Festpreise",
    qualityAssuredDesc:
      "Transparente Preisgestaltung und Festpreise – Besenreinheit und Entsorgung inklusive.",

    // Map Booking
    mapBooking: "Einsatzgebiet & Anfrage über Karte",
    advancedSettings: "Erweiterte Einstellungen",
    clearPoints: "Punkte löschen",
    lockMarkers: "Marker sperren",
    showCoords: "Koordinaten anzeigen",
    lat: "Breitengrad (lat)",
    lng: "Längengrad (lng)",
    update: "Aktualisieren",
    showPoints: "Standorte anzeigen",
    hidePoints: "Standorte verbergen",
    pickupLocation: "Standort auswählen",
    deliveryLocation: "Zielort auswählen",
    searchAddress: "Adresse suchen...",
    confirmLocation: "Ort bestätigen",
    startAddress: "Adresse / Einsatzort",
    endAddress: "Weitere Adresse",
    getQuote: "Festpreisangebot erhalten",
    distance: "Entfernung",
    estimatedPrice: "Geschätzter Preis",
    bookService: "Entrümpelung anfragen",

    // Testimonials
    whatCustomersSay: "Was unsere Kunden sagen",
    testimonial1:
      "Zuverlässiger und professioneller Service bei der Entrümpelung.",
    testimonial2:
      "Schnelle Abwicklung und transparente Preise. Sehr empfehlenswert!",
    testimonial3:
      "Die Immobilie wurde sauber und besenrein übergeben.",

    // CTA
    readyToMove: "Sie benötigen eine Entrümpelung?",
    startBooking:
      "Kontaktieren Sie uns jetzt für ein unverbindliches Angebot und eine unkomplizierte Terminvereinbarung.",
    bookYourService: "Jetzt Angebot anfragen",

    // Footer
    footer:
      "© 2026 K&A Entrümpelung. Alle Rechte vorbehalten.",
  },

  en: {
    // Navigation & Headers
    header: "K&A Clearance Services",
    home: "Home",
    booking: "Request",
    services: "Services",
    about: "About Us",
    contact: "Contact",

    // Hero Section
    heroTitle: "K&A Clearance – Your Local Clearance Team in Weinstadt",
    heroDescription:
      "Reliable · Fast · Discreet · Fair Fixed Prices. We handle house clearances, property clear-outs, waste disposal, and cleaning professionally and hassle-free.",
    bookNow: "Request a Quote",
    learnMore: "Learn More",

    // Services
    movingServices: "House Clearances",
    movingDescription:
      "Professional house clearances with careful removal and reliable service.",
    cleaningServices: "Final & Sweep-Cleaning",
    cleaningDescription:
      "Thorough cleaning after clearance, leaving your property clean and ready for handover.",
    packingServices: "Clearance & Disposal",
    packingDescription:
      "Professional removal and disposal of furniture, bulky waste, and unwanted items.",

    // Features
    expertTeam: "Reliable & Discreet",
    expertTeamDesc:
      "Professional, careful, and respectful service, including sensitive estate clearances.",
    quickService: "Fast & On Time",
    quickServiceDesc:
      "Efficient processes, flexible appointments, and dependable service.",
    qualityAssured: "Fair Fixed Prices",
    qualityAssuredDesc:
      "Transparent pricing with fixed quotes, including disposal and sweep-cleaning.",

    // Map Booking
    mapBooking: "Service Area & Location Request",
    advancedSettings: "Advanced Settings",
    clearPoints: "Clear Points",
    lockMarkers: "Lock Markers",
    showCoords: "Show Coordinates",
    lat: "Latitude (lat)",
    lng: "Longitude (lng)",
    update: "Update",
    showPoints: "Show Locations",
    hidePoints: "Hide Locations",
    pickupLocation: "Select Location",
    deliveryLocation: "Select Destination",
    searchAddress: "Search address...",
    confirmLocation: "Confirm Location",
    startAddress: "Service Address",
    endAddress: "Additional Address",
    getQuote: "Get a Fixed-Price Quote",
    distance: "Distance",
    estimatedPrice: "Estimated Price",
    bookService: "Request Clearance",

    // Testimonials
    whatCustomersSay: "What Our Customers Say",
    testimonial1:
      "Reliable and professional clearance service.",
    testimonial2:
      "Fast service and transparent pricing. Highly recommended!",
    testimonial3:
      "The property was left clean and ready for handover.",

    // CTA
    readyToMove: "Need a Property Clearance?",
    startBooking:
      "Contact us today for a free quote and an easy appointment booking process.",
    bookYourService: "Request Your Quote",

    // Footer
    footer:
      "© 2026 K&A Clearance Services. All rights reserved.",
  },
}

export type Language = "de" | "en"

export function getTranslation(
  key: keyof (typeof translations)["de"],
  lang: Language = "de"
) {
  return translations[lang]?.[key] || translations.de[key]
}