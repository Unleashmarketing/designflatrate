document.addEventListener('DOMContentLoaded', function() {
    // Services-Funktionalität initialisieren
    populateServices();
    initializeShowMore();
    
    // Filter-Button Event-Listener
    const filterButtons = document.querySelectorAll('.filter-button');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            filterServices(filterValue);
        });
    });
    
    // FAQ Toggle
    const faqQuestions = document.querySelectorAll('.faq-question');
    const faqAnswers = document.querySelectorAll('.faq-answer');
    
    faqQuestions.forEach((question, index) => {
        question.addEventListener('click', function() {
            this.classList.toggle('active');
            faqAnswers[index].classList.toggle('active');
        });
    });
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Sticky header
    window.addEventListener('scroll', function() {
        const stickyHeader = document.querySelector('.sticky-header');
        
        if (window.scrollY > 200) {
            stickyHeader.classList.add('visible');
        } else {
            stickyHeader.classList.remove('visible');
        }
    });
});

// Global variables für Services
let allServices = [];
let showingAllServices = false;
const INITIAL_SERVICES_COUNT = 30; // Zeige initial 30 Services

// Services mit Show More Funktionalität
function populateServices() {
    // Komplette Service-Liste aus deiner ursprünglichen script.js
    allServices = [
        // Marketing & Werbung
        {
            category: "marketing",
            title: "AD Creative",
            time: "1-2 Tage im Durchschnitt | Classic Paket",
            description: "3 Ad Creatives in jeweils 3 Formaten",
            platforms: ["Ai", "Ps", "Id", "Xd"]
        },
        {
            category: "motion",
            title: "AD Creative",
            time: "1-3 Tage im Durchschnitt | Classic Paket",
            description: "Erstellung eines animierten AD Creatives",
            platforms: ["Ae", "Pr"]
        },
        {
            category: "marketing",
            title: "AD Creative Vorlage",
            time: "1-2 Tage im Durchschnitt | Classic Paket",
            description: "Erstellen einer anpassbaren Ad Creative Vorlage zur Wiederverwendung",
            platforms: ["Ai", "Ps", "Id", "Xd"]
        },
        {
            category: "schulungen",
            title: "Adobe Illustrator Schulung",
            time: "1-3 Tage im Durchschnitt | Classic Paket",
            description: "Basic Schulung in Adobe Illustrator von einem Experten",
            platforms: ["Ai"]
        },
        {
            category: "schulungen",
            title: "Adobe InDesign Schulung",
            time: "1-3 Tage im Durchschnitt | Classic Paket",
            description: "Basic Schulung in InDesign von einem Experten",
            platforms: ["Id"]
        },
        {
            category: "schulungen",
            title: "Adobe Photoshop Schulung",
            time: "1-3 Tage im Durchschnitt | Classic Paket",
            description: "Basic Schulung in Photoshop von einem Experten",
            platforms: ["Ps"]
        },
        {
            category: "print",
            title: "Albumcover",
            time: "1-3 Tage im Durchschnitt | Classic Paket",
            description: "Erstellen eines Albumcovers, druckfertiger Export",
            platforms: ["Ai", "Ps", "Id", "Xd"]
        },
        {
            category: "print",
            title: "Anhängerplane",
            time: "2-3 Tage im Durchschnitt | Classic Paket",
            description: "Anhängerplane layouten, gestalten, druckfertiger Export",
            platforms: ["Ai", "Ps"]
        },
        {
            category: "ux",
            title: "App Design",
            time: "Abhängig vom Aufwand",
            description: "Anlegen eines Wireframes, gestalten der App, Aufbereitung für Entwicklung",
            platforms: ["Xd"]
        },
        {
            category: "print",
            title: "Aufkleber",
            time: "1-2 Tage im Durchschnitt | Classic Paket",
            description: "Layouten, gestalten, druckfertiger Export",
            platforms: ["Ai", "Id", "Ps", "Xd"]
        },
        {
            category: "print",
            title: "Award",
            time: "1-2 Tage im Durchschnitt | Classic Paket",
            description: "Erstellen einer Awards, für Herstellung aufbereiten",
            platforms: ["Xd", "Ai", "Ps", "Id", "Xd"]
        },
        {
            category: "marketing",
            title: "Bandenwerbung",
            time: "Abhängig vom Aufwand",
            description: "Erstellen einer Bandenwerbung, Aufbereitung zur weiteren Verwendung",
            platforms: ["Id"]
        },
        {
            category: "marketing",
            title: "Banner Ad",
            time: "1-2 Tage im Durchschnitt | Classic Paket",
            description: "1-2 Banner Ads in den gewünschten Formaten",
            platforms: ["Ai", "Ps", "Id", "Xd"]
        },
        {
            category: "print",
            title: "Bauzaunbanner",
            time: "2-3 Tage im Durchschnitt | Classic Paket",
            description: "Layouten, gestalten, druckfertiger Export",
            platforms: ["Ai", "Ps"]
        },
        {
            category: "marketing",
            title: "Bildfreistellung",
            time: "1 Tag im Durchschnitt | Classic Paket",
            description: "Freistellen von 1-20 Bildern je nach Komplexität",
            platforms: ["Ps"]
        },
        {
            category: "brand",
            title: "Bildwelt",
            time: "1-2 Tage im Durchschnitt | Classic Paket",
            description: "Erstellen eines Moodboards für die zukünftige Bildwelt",
            platforms: ["Id", "Ps"]
        },
        {
            category: "marketing",
            title: "Blog Beitrag",
            time: "1 Tag im Durchschnitt | Classic Paket",
            description: "Gestaltung eines Blogbeitrags mit 8 Sektionen",
            platforms: ["Xd", "Id"]
        },
        {
            category: "brand",
            title: "Brand Manual",
            time: "5-10 Tage im Durchschnitt | Classic Paket",
            description: "Ausführliche Zusammenfassung in ca. 15-20 Seiten der Marke (Logo, Farben, Schriften, Bildwelt, Mission, Vision, Anwendungsbeispiele)",
            platforms: ["Xd", "Id", "Ps"]
        },
        {
            category: "print",
            title: "Briefpapier",
            time: "2-3 Tage im Durchschnitt | Classic Paket",
            description: "Doppelseitiges Briefpapier layouten, gestalten, druckfertiger Export",
            platforms: ["Ai", "Id", "Ps"]
        },
        {
            category: "print",
            title: "Broschüre",
            time: "1-2 Tage im Durchschnitt | Classic Paket",
            description: "Eine Doppelseite layouten, gestalten, druckfertiger Export",
            platforms: ["Id", "Ps"]
        },
        {
            category: "print",
            title: "Buchcover",
            time: "1-3 Tage im Durchschnitt | Classic Paket",
            description: "Erstellen eines Buchcovers, druckfertiger Export",
            platforms: ["Ai", "Id", "Ps"]
        },
        {
            category: "print",
            title: "Buchsatz",
            time: "Abhängig vom Aufwand",
            description: "Anlegen eines gesamten Buches, druckfertiger Export",
            platforms: ["Id"]
        },
        {
            category: "ux",
            title: "Dashboard",
            time: "Abhängig vom Aufwand",
            description: "Anlegen eines Wireframes, gestalten des Dashboards, Aufbereitung für Entwicklung",
            platforms: ["Xd"]
        },
        {
            category: "kleidung",
            title: "Decke",
            time: "1-2 Tage im Durchschnitt | Classic Paket",
            description: "Erstellen einer Decke, druckfertiger Export",
            platforms: ["Xd", "Ai", "Ps", "Id", "Xd"]
        },
        {
            category: "marketing",
            title: "Display Anzeige",
            time: "1-2 Tage im Durchschnitt | Classic Paket",
            description: "1-2 Displayanzeigen in den Google Ads-Formaten",
            platforms: ["Ai", "Ps", "Id", "Xd"]
        },
        {
            category: "marketing",
            title: "E-Mail Newsletter",
            time: "1-2 Tage im Durchschnitt | Classic Paket",
            description: "Gestalten eines Newsletters (ohne html)",
            platforms: ["Xd"]
        },
        {
            category: "print",
            title: "Einladungskarte",
            time: "2-3 Tage im Durchschnitt | Classic Paket",
            description: "4-Seitige Karte layouten, gestalten, druckfertiger Export",
            platforms: ["Ai", "Ps", "Id", "Xd"]
        },
        {
            category: "print",
            title: "Eintrittskarte",
            time: "2-3 Tage im Durchschnitt | Classic Paket",
            description: "2-Seitige Eintrittskarte layouten, gestalten, druckfertiger Export",
            platforms: ["Ai", "Ps", "Id", "Xd"]
        },
        {
            category: "motion",
            title: "Erklärvideo",
            time: "Abhängig vom Aufwand",
            description: "Erstellen eines Erklärvideos zur Erläuterung komplexer Themenbereiche",
            platforms: ["Ae", "Pr"]
        },
        {
            category: "print",
            title: "Fahrzeugbeklebung",
            time: "1-3 Tage im Durchschnitt | Classic Paket",
            description: "Ein Fahrzeug gestalten, Aufbereitung für weitere Verwendung",
            platforms: ["Ai", "Id", "Ps"]
        },
        {
            category: "verpackung",
            title: "Faltschachtel",
            time: "2-4 Tage im Durchschnitt | Classic Paket",
            description: "Layouten, gestalten, druckfertiger Export",
            platforms: ["Ai", "Ps"]
        },
        {
            category: "brand",
            title: "Farbwelt",
            time: "1-3 Tage im Durchschnitt | Classic Paket",
            description: "Ausarbeitung der Unternehmensfarben zur Markenbildung",
            platforms: ["Ai", "Id", "Ps"]
        },
        {
            category: "print",
            title: "Firmenschilder",
            time: "1-2 Tage im Durchschnitt | Classic Paket",
            description: "Anlegen eines Firmenschildes, druckfertiger Export",
            platforms: ["Xd", "Ai", "Id", "Ps", "Xd"]
        },
        {
            category: "print",
            title: "Flagge",
            time: "1-2 Tage im Durchschnitt | Classic Paket",
            description: "Layouten, gestalten, druckfertiger Export",
            platforms: ["Ai", "Id", "Ps", "Xd"]
        },
        {
            category: "verpackung",
            title: "Flaschendesign",
            time: "5-7 Tage im Durchschnitt | Classic Paket",
            description: "Layouten, gestalten, druckfertiger Export",
            platforms: ["Ai", "Ps"]
        },
        {
            category: "print",
            title: "Flyer (2-Seitig)",
            time: "2-4 Tage im Durchschnitt | Classic Paket",
            description: "Vorder- & Rückseite layouten, gestalten, druckfertiger Export",
            platforms: ["Ai", "Id", "Ps", "Xd"]
        },
        {
            category: "print",
            title: "Flyer (6-Seitig)",
            time: "3-5 Tage im Durchschnitt | Classic Paket",
            description: "Layouten, gestalten, druckfertiger Export",
            platforms: ["Ai", "Id", "Ps", "Xd"]
        },
        {
            category: "marketing",
            title: "Fotobearbeitung",
            time: "1 Tag im Durchschnitt | Classic Paket",
            description: "Color Grading, Retusche, weitere Anpassungen",
            platforms: ["Ps"]
        },
        {
            category: "verpackung",
            title: "Geschenkverpackung",
            time: "2-3 Tage im Durchschnitt | Classic Paket",
            description: "Layouten, gestalten, druckfertiger Export",
            platforms: ["Ai", "Ps"]
        },
        {
            category: "motion",
            title: "Gif",
            time: "2-3 Tage im Durchschnitt | Classic Paket",
            description: "Erstellen eines animierten Gifs",
            platforms: ["Ae"]
        },
        {
            category: "print",
            title: "Gutschein",
            time: "1 Tag im Durchschnitt | Classic Paket",
            description: "Erstellen eines Gutscheins, druckfertiger Export",
            platforms: ["Xd", "Ai", "Id", "Ps", "Xd"]
        },
        {
            category: "kleidung",
            title: "Hemd / Bluse",
            time: "1-2 Tage im Durchschnitt | Classic Paket",
            description: "Erstellen eines Hemdes / einer Bluse, druckfertiger Export",
            platforms: ["Xd", "Ai", "Id", "Ps", "Xd"]
        },
        {
            category: "kleidung",
            title: "Hoodie & Sweatshirt",
            time: "1-2 Tage im Durchschnitt | Classic Paket",
            description: "Vorder- & Rückseite erstellen, druckfertiger Export",
            platforms: ["Xd", "Ai", "Id", "Ps", "Xd"]
        },
        {
            category: "kleidung",
            title: "Hose",
            time: "1-2 Tage im Durchschnitt | Classic Paket",
            description: "Erstellen eines Designs, druckfertiger Export",
            platforms: ["Xd", "Ai", "Id", "Ps", "Xd"]
        },
        {
            category: "brand",
            title: "Iconset",
            time: "1-3 Tage im Durchschnitt | Classic Paket",
            description: "Erstellen eines Iconsets mit 12 Icons",
            platforms: ["Ai"]
        },
        {
            category: "marketing",
            title: "Illustration",
            time: "Abhängig vom Aufwand",
            description: "Illustration von einem Comic, Maskottchen, usw.",
            platforms: ["Ai"]
        },
        {
            category: "marketing",
            title: "Infografik",
            time: "1-2 Tage im Durchschnitt | Classic Paket",
            description: "Eine Infografik für einen Themenschwerpunkt ausarbeiten",
            platforms: ["Ai", "Id", "Ps", "Xd"]
        },
        {
            category: "video",
            title: "Instagram Reel",
            time: "1-2 Tage im Durchschnitt | Classic Paket",
            description: "Erstellen eines viralen Instagram Reels aus bestehendem Videomaterial",
            platforms: ["Ae", "Pr"]
        },
        {
            category: "motion",
            title: "Intro / Outro",
            time: "3-4 Tage im Durchschnitt | Classic Paket",
            description: "Gestaltung eines animierten Intros/Outros",
            platforms: ["Ae", "Pr"]
        },
        {
            category: "kleidung",
            title: "Jacke",
            time: "1-2 Tage im Durchschnitt | Classic Paket",
            description: "Erstellen eines Designs, druckfertiger Export",
            platforms: ["Xd", "Ai", "Id", "Ps", "Xd"]
        },
        {
            category: "print",
            title: "Kalender",
            time: "1-2 Tage im Durchschnitt | Classic Paket",
            description: "Anlegen eines Kalenders, druckfertiger Export",
            platforms: ["Ai", "Id", "Ps", "Xd"]
        },
        {
            category: "brand",
            title: "Key Visual",
            time: "1-3 Tage im Durchschnitt | Classic Paket",
            description: "Erstellen von 2-3 Key Visuals zur Markenbildung",
            platforms: ["Ai"]
        },
        {
            category: "verpackung",
            title: "Klebeband",
            time: "1-2 Tage im Durchschnitt | Classic Paket",
            description: "Layouten, gestalten, druckfertiger Export",
            platforms: ["Ai", "Id", "Ps", "Xd"]
        },
        {
            category: "video",
            title: "Kurzfilm",
            time: "Abhängig vom Aufwand",
            description: "Cutting, Color Grading, Audio Design und Export von maximal 3 Minuten Videos",
            platforms: ["Ae", "Pr"]
        },
        {
            category: "ux",
            title: "Landingpage",
            time: "4-6 Tage im Durchschnitt | Classic Paket",
            description: "Anlegen eines Wireframes mit 6 Sektionen, gestalten der Webseite, Aufbereitung für Entwicklung",
            platforms: ["Xd"]
        },
        {
            category: "print",
            title: "Leuchtwerbung",
            time: "1-2 Tage im Durchschnitt | Classic Paket",
            description: "Anlegen einer Leuchtwerbung, druckfertiger Export",
            platforms: ["Xd", "Ai", "Id", "Ps", "Xd"]
        },
        {
            category: "brand",
            title: "Logo Design",
            time: "2-5 Tage im Durchschnitt | Classic Paket",
            description: "3 ausgearbeitete Logo Konzepte, Reinzeichnung eines Konzeptes",
            platforms: ["Ai"]
        },
        {
            category: "motion",
            title: "Logo-Animation",
            time: "Abhängig vom Aufwand",
            description: "Erstellung einer Logo-Animation",
            platforms: ["Ae", "Pr"]
        },
        {
            category: "motion",
            title: "Lotti Animation",
            time: "2-3 Tage im Durchschnitt | Classic Paket",
            description: "Einfache Animation von bspw. Infografiken oder SaaS Plattformen",
            platforms: ["Ae", "Pr"]
        },
        {
            category: "print",
            title: "Magazin",
            time: "1-2 Tage im Durchschnitt | Classic Paket",
            description: "Eine Doppelseite layouten, gestalten, reinzeichnen, druckfertiger Export",
            platforms: ["Id", "Ps"]
        },
        {
            category: "print",
            title: "Messestand",
            time: "3-6 Tage im Durchschnitt | Classic Paket",
            description: "Messewand & Messetheke layouten, gestalten, druckfertiger Export",
            platforms: ["Xd", "Id", "Ps"]
        },
        {
            category: "schulungen",
            title: "Mitarbeiterschulung",
            time: "1-3 Tage im Durchschnitt | Classic Paket",
            description: "Schulung im Bereich Design von einem Experten",
            platforms: ["Ai", "Id", "Ps", "Xd", "Ae"]
        },
        {
            category: "marketing",
            title: "NFT",
            time: "1-3 Tage im Durchschnitt | Classic Paket",
            description: "Gestalten eines NFTs, Aufbereitung zur weiteren Verwendung",
            platforms: ["Ai", "Ps"]
        },
        {
            category: "verpackung",
            title: "POS-Display",
            time: "4-5 Tage im Durchschnitt | Classic Paket",
            description: "Layouten, gestalten, druckfertiger Export",
            platforms: ["Ai", "Ps"]
        },
        {
            category: "print",
            title: "Plakat",
            time: "2-3 Tage im Durchschnitt | Classic Paket",
            description: "Layouten, gestalten, druckfertiger Export",
            platforms: ["Ai", "Id", "Ps", "Xd"]
        },
        {
            category: "video",
            title: "Podcast",
            time: "1-3 Tage im Durchschnitt | Classic Paket",
            description: "Cutting, Color Grading, Audio Design und Export eines 30 minütigen Podcasts",
            platforms: ["Ae", "Pr"]
        },
        {
            category: "kleidung",
            title: "Poloshirt",
            time: "1-2 Tage im Durchschnitt | Classic Paket",
            description: "Erstellen eines Poloshirt, druckfertiger Export",
            platforms: ["Xd", "Ai", "Id", "Ps", "Xd"]
        },
        {
            category: "print",
            title: "Poster",
            time: "1-2 Tage im Durchschnitt | Classic Paket",
            description: "Layouten, gestalten, druckfertiger Export",
            platforms: ["Ai", "Id", "Ps", "Xd"]
        },
        {
            category: "print",
            title: "Postkarte",
            time: "1-2 Tage im Durchschnitt | Classic Paket",
            description: "Layouten, gestalten, druckfertiger Export",
            platforms: ["Ai", "Id", "Ps", "Xd"]
        },
        {
            category: "marketing",
            title: "Präsentation",
            time: "Abhängig vom Aufwand",
            description: "Erstellung einer Präsentation bspw. für Sales",
            platforms: ["Xd", "Ai", "Ps", "Id"]
        },
        {
            category: "motion",
            title: "Präsentation",
            time: "Abhängig vom Aufwand",
            description: "Ausarbeitung einer Präsentation, Export als Videodatei",
            platforms: ["Ae", "Ai", "Ps"]
        },
        {
            category: "video",
            title: "Recruiting AD",
            time: "2-3 Tage im Durchschnitt | Classic Paket",
            description: "Cutting, Color Grading, Audio Design und Export einer 2 minütigen Recruiting AD",
            platforms: ["Ae", "Pr"]
        },
        {
            category: "kleidung",
            title: "Regenschirm",
            time: "1-2 Tage im Durchschnitt | Classic Paket",
            description: "Erstellen eines Regenschirms, druckfertiger Export",
            platforms: ["Xd", "Ai", "Id", "Ps", "Xd"]
        },
        {
            category: "print",
            title: "Roll-Up",
            time: "2-3 Tage im Durchschnitt | Classic Paket",
            description: "Layouten, gestalten, druckfertiger Export",
            platforms: ["Ai", "Id", "Ps", "Xd"]
        },
        {
            category: "ux",
            title: "SaaS",
            time: "Abhängig vom Aufwand",
            description: "Anlegen eines Wireframes, Umsetzung des Designs, Aufbereitung für Entwicklung",
            platforms: ["Xd"]
        },
        {
            category: "print",
            title: "Schaufensterbeklebung",
            time: "1-3 Tage im Durchschnitt | Classic Paket",
            description: "Eine Schaufensterbeklebung gestalten, Aufbereitung zur weiteren Verwendung",
            platforms: ["Xd", "Ai", "Id", "Ps", "Xd"]
        },
        {
            category: "kleidung",
            title: "Schlüsselanhänger",
            time: "1-2 Tage im Durchschnitt | Classic Paket",
            description: "Erstellen eines Anhängers, druckfertiger Export",
            platforms: ["Xd", "Ai", "Id", "Ps", "Xd"]
        },
        {
            category: "ux",
            title: "Sitemap",
            time: "1-2 Tage im Durchschnitt | Classic Paket",
            description: "Erstellen einer Sitemap für eine Webseite oder SaaS",
            platforms: ["Xd"]
        },
        {
            category: "marketing",
            title: "Social Media Banner",
            time: "1-2 Tage im Durchschnitt | Classic Paket",
            description: "Ein Banner für Meta, YouTube oder LinkedIn",
            platforms: ["Xd", "Ai", "Id", "Ps", "Xd"]
        },
        {
            category: "marketing",
            title: "Social Media Post",
            time: "1-2 Tage im Durchschnitt | Classic Paket",
            description: "3 Social Media Posts layouten und gestalten",
            platforms: ["Xd", "Ai", "Id", "Ps", "Xd"]
        },
        {
            category: "print",
            title: "Speisekarte",
            time: "Abhängig vom Aufwand",
            description: "Layouten, gestalten, druckfertiger Export",
            platforms: ["Ai", "Id", "Ps", "Xd"]
        },
        {
            category: "kleidung",
            title: "Sportbekleidung",
            time: "1-2 Tage im Durchschnitt | Classic Paket",
            description: "Erstellen eines Designs, druckfertiger Export",
            platforms: ["Xd", "Ai", "Id", "Ps", "Xd"]
        },
        {
            category: "print",
            title: "Stempel",
            time: "1 Tag im Durchschnitt | Classic Paket",
            description: "Anlegen eines Stempels, druckfertiger Export",
            platforms: ["Xd", "Ai", "Id", "Ps", "Xd"]
        },
        {
            category: "brand",
            title: "Style Guide",
            time: "2-4 Tage im Durchschnitt | Classic Paket",
            description: "Kurze Zusammenfassung in ca. 5-7 Seiten der Marke (Logo, Farben, Schriften, Bildwelt)",
            platforms: ["Xd", "Id", "Ps"]
        },
        {
            category: "kleidung",
            title: "T-Shirt",
            time: "1-2 Tage im Durchschnitt | Classic Paket",
            description: "Erstellen eines T-Shirts, druckfertiger Export",
            platforms: ["Xd", "Ai", "Id", "Ps", "Xd"]
        },
        {
            category: "marketing",
            title: "Thumbnail",
            time: "1 Tag im Durchschnitt | Classic Paket",
            description: "Erstellen eines Thumbnails",
            platforms: ["Xd", "Ai", "Id", "Ps", "Xd"]
        },
        {
            category: "video",
            title: "TikTok Video",
            time: "1-2 Tage im Durchschnitt | Classic Paket",
            description: "Cutting, Color Grading, Audio Design",
            platforms: ["Ae", "Pr"]
        },
{
           category: "ux",
           title: "UI/UX Components",
           time: "2-4 Tage im Durchschnitt | Classic Paket",
           description: "Erstellen von grundlegenden Components für UI/UX, anlegen einer Library",
           platforms: ["Xd"]
       },
       {
           category: "print",
           title: "Urkunde",
           time: "1 Tag im Durchschnitt | Classic Paket",
           description: "Erstellen einer Urkunde, druckfertiger Export",
           platforms: ["Xd", "Ai", "Id", "Ps", "Xd"]
       },
       {
           category: "verpackung",
           title: "Versandverpackungen",
           time: "1-2 Tage im Durchschnitt | Classic Paket",
           description: "Layouten, gestalten, druckfertiger Export",
           platforms: ["Id", "Ps"]
       },
       {
           category: "print",
           title: "Visitenkarte",
           time: "1-2 Tage im Durchschnitt | Classic Paket",
           description: "Doppelseitige Visitenkarte layouten, gestalten, druckfertiger Export",
           platforms: ["Ai", "Id", "Ps", "Xd"]
       },
       {
           category: "print",
           title: "Wandbilder",
           time: "1-2 Tage im Durchschnitt | Classic Paket",
           description: "Anlegen eines motivierenden Wandbildes, druckfertiger Export",
           platforms: ["Xd", "Ai", "Id", "Ps", "Xd"]
       },
       {
           category: "ux",
           title: "Website",
           time: "Abhängig vom Aufwand",
           description: "Anlegen eines Wireframes, gestalten der Webseite, Aufbereitung für Entwicklung",
           platforms: ["Xd"]
       },
       {
           category: "marketing",
           title: "Werbeartikel",
           time: "Abhängig vom Aufwand",
           description: "Erstellen eines Werbeartikels jeglicher Art, druckfertiger Export",
           platforms: ["Xd", "Ai", "Id", "Ps", "Xd"]
       },
       {
           category: "print",
           title: "Werbesäule",
           time: "1-3 Tage im Durchschnitt | Classic Paket",
           description: "Werbesäule im Wunschformat erstellen, druckfertiger Export",
           platforms: ["Xd", "Ai", "Id", "Ps", "Xd"]
       },
       {
           category: "ux",
           title: "Wireframe",
           time: "1-2 Tage im Durchschnitt | Classic Paket",
           description: "Anlegen eines grundlegenden Wireframes für 8 Sektionen (ohne Design)",
           platforms: ["Xd"]
       },
       {
           category: "schulungen",
           title: "Workshop",
           time: "1 Tag im Durchschnitt | Classic Paket",
           description: "Workshop zur Markenbildung von einem Experten",
           platforms: ["Ai", "Ps", "Xd", "Ae", "Pr", "Id", "Ps", "Xd"]
       },
       {
           category: "video",
           title: "YouTube Short",
           time: "1-2 Tage im Durchschnitt | Classic Paket",
           description: "Cutting, Color Grading, Audio Design",
           platforms: ["Ae", "Pr"]
       },
       {
           category: "video",
           title: "YouTube Video",
           time: "Abhängig vom Aufwand",
           description: "Cutting, Color Grading, Audio Design",
           platforms: ["Ae", "Pr"]
       },
       {
           category: "print",
           title: "Zeitschrift",
           time: "1-2 Tage im Durchschnitt | Classic Paket",
           description: "Eine Doppelseite layouten, gestalten, reinzeichnen, druckfertiger Export",
           platforms: ["Id"]
       }
   ];
   
   renderServices();
}

function renderServices() {
   const servicesGrid = document.querySelector('.services-grid');
   const showMoreBtn = document.getElementById('showMoreServices');
   
   // Bestimme welche Services angezeigt werden sollen
   const currentFilter = document.querySelector('.filter-button.active').getAttribute('data-filter');
   let filteredServices = filterServicesByCategory(allServices, currentFilter);
   
   // Bestimme die Anzahl der anzuzeigenden Services
   const servicesToShow = showingAllServices ? 
       filteredServices : 
       filteredServices.slice(0, INITIAL_SERVICES_COUNT);
   
   // Grid leeren und Services hinzufügen
   servicesGrid.innerHTML = '';
   
   servicesToShow.forEach(service => {
       const card = createServiceCard(service);
       servicesGrid.appendChild(card);
   });
   
   // Show More Button Status aktualisieren
   updateShowMoreButton(filteredServices.length);
}

function createServiceCard(service) {
   const card = document.createElement('div');
   card.className = 'service-card';
   card.setAttribute('data-category', service.category);
   
   let platformsHTML = '';
   service.platforms.forEach(platform => {
       platformsHTML += `<div class="platform-icon">${platform}</div>`;
   });
   
   card.innerHTML = `
       <div class="service-header">
           <div class="service-category">${getCategoryName(service.category)}</div>
           <h3 class="service-title">${service.title}</h3>
           <div class="service-time">${service.time}</div>
       </div>
       <div class="service-description">
           <p>${service.description}</p>
       </div>
       <div class="service-platforms">
           ${platformsHTML}
       </div>
   `;
   
   return card;
}

function filterServicesByCategory(services, category) {
   if (category === 'all') {
       return services;
   }
   return services.filter(service => service.category === category);
}

function updateShowMoreButton(totalFilteredServices) {
   const showMoreBtn = document.getElementById('showMoreServices');
   const btnText = showMoreBtn.querySelector('.btn-text');
   
   if (totalFilteredServices <= INITIAL_SERVICES_COUNT) {
       // Nicht genug Services für Button
       showMoreBtn.classList.add('hidden');
   } else {
       showMoreBtn.classList.remove('hidden');
       
       if (showingAllServices) {
           btnText.textContent = 'Weniger anzeigen';
           showMoreBtn.classList.add('expanded');
       } else {
           const remainingCount = totalFilteredServices - INITIAL_SERVICES_COUNT;
           btnText.textContent = `${remainingCount} weitere Leistungen entdecken`;
           showMoreBtn.classList.remove('expanded');
       }
   }
}

function initializeShowMore() {
   const showMoreBtn = document.getElementById('showMoreServices');
   
   showMoreBtn.addEventListener('click', function() {
       showingAllServices = !showingAllServices;
       
       // Loading Animation
       this.classList.add('loading');
       
       setTimeout(() => {
           renderServices();
           this.classList.remove('loading');
           
           // Smooth scroll zu den neuen Services
           if (showingAllServices) {
               setTimeout(() => {
                   const newServicesPosition = document.querySelector('.service-card:nth-child(31)');
                   if (newServicesPosition) {
                       newServicesPosition.scrollIntoView({ 
                           behavior: 'smooth', 
                           block: 'center' 
                       });
                   }
               }, 100);
           }
       }, 300);
   });
}

function filterServices(filterValue) {
   // Reset Show More Status beim Filtern
   showingAllServices = false;
   renderServices();
}

function getCategoryName(categorySlug) {
   const categories = {
       'marketing': 'Marketing & Werbung',
       'print': 'Print Design',
       'motion': 'Motion Design',
       'ux': 'UX/UI Design',
       'brand': 'Brand Design',
       'kleidung': 'Kleidung & Textilien',
       'video': 'Video Editing',
       'verpackung': 'Verpackungsdesign',
       'schulungen': 'Schulungen'
   };
   
   return categories[categorySlug] || categorySlug;
}

// Cookie Banner Funktionalität
document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookieBanner');
    const cookieModal = document.getElementById('cookieModal');
    const acceptAllBtn = document.getElementById('acceptAllCookies');
    const declineBtn = document.getElementById('declineCookies');
    const settingsBtn = document.getElementById('cookieSettings');
    const modalAcceptBtn = document.getElementById('modalAccept');
    const modalDeclineBtn = document.getElementById('modalDecline');
    
    // Cookie Toggles
    const analyticsToggle = document.getElementById('analyticsCookies');
    const marketingToggle = document.getElementById('marketingCookies');
    const functionalToggle = document.getElementById('functionalCookies');
    
    // Cookie Banner anzeigen, wenn noch keine Einstellung gespeichert
    if (!localStorage.getItem('cookieConsent')) {
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 1000);
    } else {
        // Bereits gespeicherte Einstellungen laden
        loadCookieSettings();
    }
    
    // Event Listeners
    acceptAllBtn.addEventListener('click', () => {
        acceptAllCookies();
        hideBanner();
    });
    
    declineBtn.addEventListener('click', () => {
        acceptOnlyNecessary();
        hideBanner();
    });
    
    settingsBtn.addEventListener('click', () => {
        showModal();
        loadCurrentSettings();
    });
    
    modalAcceptBtn.addEventListener('click', () => {
        saveCustomSettings();
        hideModal();
        hideBanner();
    });
    
    modalDeclineBtn.addEventListener('click', () => {
        acceptOnlyNecessary();
        hideModal();
        hideBanner();
    });
    
    // Toggle Funktionalität
    [analyticsToggle, marketingToggle, functionalToggle].forEach(toggle => {
        toggle.addEventListener('click', () => {
            if (!toggle.classList.contains('disabled')) {
                toggle.classList.toggle('active');
            }
        });
    });
    
    // Modal schließen bei Klick außerhalb
    cookieModal.addEventListener('click', (e) => {
        if (e.target === cookieModal) {
            hideModal();
        }
    });
    
    // Funktionen
    function acceptAllCookies() {
        const settings = {
            necessary: true,
            analytics: true,
            marketing: true,
            functional: true,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem('cookieConsent', JSON.stringify(settings));
        applyCookieSettings(settings);
    }
    
    function acceptOnlyNecessary() {
        const settings = {
            necessary: true,
            analytics: false,
            marketing: false,
            functional: false,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem('cookieConsent', JSON.stringify(settings));
        applyCookieSettings(settings);
    }
    
    function saveCustomSettings() {
        const settings = {
            necessary: true,
            analytics: analyticsToggle.classList.contains('active'),
            marketing: marketingToggle.classList.contains('active'),
            functional: functionalToggle.classList.contains('active'),
            timestamp: new Date().toISOString()
        };
        localStorage.setItem('cookieConsent', JSON.stringify(settings));
        applyCookieSettings(settings);
    }
    
    function loadCookieSettings() {
        const settings = JSON.parse(localStorage.getItem('cookieConsent'));
        if (settings) {
            applyCookieSettings(settings);
        }
    }
    
    function loadCurrentSettings() {
        const settings = JSON.parse(localStorage.getItem('cookieConsent')) || {
            analytics: false,
            marketing: false,
            functional: false
        };
        
        analyticsToggle.classList.toggle('active', settings.analytics);
        marketingToggle.classList.toggle('active', settings.marketing);
        functionalToggle.classList.toggle('active', settings.functional);
    }
    
    function applyCookieSettings(settings) {
        // Google Analytics
        if (settings.analytics) {
            loadGoogleAnalytics();
        }
        
        // Marketing Cookies (z.B. Facebook Pixel)
        if (settings.marketing) {
            loadMarketingScripts();
        }
        
        // Funktionale Cookies
        if (settings.functional) {
            loadFunctionalScripts();
        }
        
        console.log('Cookie-Einstellungen angewendet:', settings);
    }
    
    function loadGoogleAnalytics() {
        // Google Analytics Code hier einfügen
        // Beispiel:
        /*
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID');
        */
    }
    
    function loadMarketingScripts() {
        // Marketing Scripts hier laden
        console.log('Marketing Cookies aktiviert');
    }
    
    function loadFunctionalScripts() {
        // Funktionale Scripts hier laden
        console.log('Funktionale Cookies aktiviert');
    }
    
    function showModal() {
        cookieModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    
    function hideModal() {
        cookieModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
    
    function hideBanner() {
        cookieBanner.classList.remove('show');
    }
    
    // Cookie-Einstellungen zurücksetzen (für Testing)
    // localStorage.removeItem('cookieConsent');
});
