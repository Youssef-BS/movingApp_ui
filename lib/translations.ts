export const translations = {
  de: {
    // Navigation & Headers
    header: "K&A Umzugsdienste",
    home: "Startseite",
    booking: "Buchung",
    services: "Dienstleistungen",
    about: "Über uns",
    contact: "Kontakt",

    // Hero Section
    heroTitle: "Dein vertrauenswürdiger Umzugs- und Reinigungs­partner",
    heroDescription:
      "Professionelle Dienstleistungen mit persönlichem Touch. Wir machen deinen Umzug stressfrei und einfach.",
    bookNow: "Jetzt Buchen",
    learnMore: "Mehr erfahren",

    // Services
    movingServices: "Umzugsdienste",
    movingDescription: "Professioneller Umzug mit erfahrenem Team und moderner Ausrüstung",
    cleaningServices: "Reinigungsdienste",
    cleaningDescription: "Gründliche Reinigung vom alten zum neuen Ort",
    packingServices: "Verpackungsdienste",
    packingDescription: "Fachmännische Verpackung für sicheren Transport",

    // Features
    expertTeam: "Expertenteam",
    expertTeamDesc: "Geschulte Fachleute mit jahrelanger Erfahrung",
    quickService: "Schneller Service",
    quickServiceDesc: "Effiziente und pünktliche Servicebereitstellung",
    qualityAssured: "Qualität Garantiert",
    qualityAssuredDesc: "Zufriedenheit garantiert bei jedem Auftrag",

    // Map Booking
    mapBooking: "Interaktive Buchung mit Kartentool",
    advancedSettings: "Erweiterte Einstellungen",
    clearPoints: "Punkte löschen",
    lockMarkers: "Marker sperren",
    showCoords: "Koordinaten anzeigen",
    lat: "Breitengrad (lat)",
    lng: "Längengrad (lng)",
    update: "Aktualisieren",
    showPoints: "Standorte anzeigen",
    hidePoints: "Standorte verbergen",
    pickupLocation: "Abholort wählen",
    deliveryLocation: "Lieferort wählen",
    searchAddress: "Adresse suchen...",
    confirmLocation: "Ort bestätigen",
    startAddress: "Startadresse",
    endAddress: "Zieladresse",
    getQuote: "Kostenschätzung erhalten",
    distance: "Entfernung",
    estimatedPrice: "Geschätzter Preis",
    bookService: "Service buchen",

    // Testimonials
    whatCustomersSay: "Was unsere Kunden sagen",
    testimonial1: "Ausgezeichneter Service! Das Team war professionell und kümmerte sich großartig um unsere Sachen.",
    testimonial2: "Sehr effizienter Umzugsprozess. Ich empfehle K&A Entrümpelung sehr weiter!",
    testimonial3: "Der Reinigungsservice war gründlich und der Preis sehr fair.",

    // CTA
    readyToMove: "Bereit umzuziehen?",
    startBooking: "Starte deine Buchung heute und erlebe professionellen Service",
    bookYourService: "Buche deinen Service",

    // Footer
    footer: "© 2025 K&A Entrümpelung. Alle Rechte vorbehalten.",
  },
  en: {
    // Navigation & Headers
    header: "K&A Moving Services",
    home: "Home",
    booking: "Booking",
    services: "Services",
    about: "About",
    contact: "Contact",

    // Hero Section
    heroTitle: "Your Trusted Moving & Cleaning Partner",
    heroDescription: "Professional services with a personal touch. We make your move seamless and stress-free.",
    bookNow: "Book Now",
    learnMore: "Learn More",

    // Services
    movingServices: "Moving Services",
    movingDescription: "Professional moving with experienced team and modern equipment",
    cleaningServices: "Cleaning Services",
    cleaningDescription: "Thorough cleaning from your current to new space",
    packingServices: "Packing Services",
    packingDescription: "Expert packing to ensure safe transport of belongings",

    // Features
    expertTeam: "Expert Team",
    expertTeamDesc: "Trained professionals with years of experience",
    quickService: "Quick Service",
    quickServiceDesc: "Efficient and punctual service delivery",
    qualityAssured: "Quality Assured",
    qualityAssuredDesc: "Satisfaction guaranteed on every job",

    // Map Booking
    mapBooking: "Interactive Booking with Map",
    advancedSettings: "Advanced settings",
    clearPoints: "Clear points",
    lockMarkers: "Lock markers",
    showCoords: "Show coordinates",
    lat: "Latitude (lat)",
    lng: "Longitude (lng)",
    update: "Update",
    showPoints: "Show service points",
    hidePoints: "Hide service points",
    pickupLocation: "Choose Pickup Location",
    deliveryLocation: "Choose Delivery Location",
    searchAddress: "Search address...",
    confirmLocation: "Confirm Location",
    startAddress: "Start Address",
    endAddress: "Destination Address",
    getQuote: "Get Quote",
    distance: "Distance",
    estimatedPrice: "Estimated Price",
    bookService: "Book Service",

    // Testimonials
    whatCustomersSay: "What Customers Say",
    testimonial1: "Excellent service! The team was professional and took great care of our belongings.",
    testimonial2: "Very efficient moving process. Highly recommend K&A Moving Services!",
    testimonial3: "The cleaning service was thorough and the price was very fair.",

    // CTA
    readyToMove: "Ready to Move?",
    startBooking: "Start your booking today and experience professional service",
    bookYourService: "Book Your Service",

    // Footer
    footer: "© 2025 K&A Moving Services. All rights reserved.",
  },
}

export type Language = "de" | "en"

export function getTranslation(key: keyof (typeof translations)["de"], lang: Language = "de") {
  return translations[lang]?.[key] || translations.de[key]
}
