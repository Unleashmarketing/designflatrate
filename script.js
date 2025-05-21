document.addEventListener('DOMContentLoaded', function() {
    // Aktiviere die populateServices-Funktion
    populateServices();
    
    // Füge Event-Listener für Filter-Buttons hinzu
    const filterButtons = document.querySelectorAll('.filter-button');
    
    // Add event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Show/hide service cards based on filter
            document.querySelectorAll('.service-card').forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
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
    
    // Smooth scrolling for anchor links
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
    
    // Improved sticky header on scroll
    window.addEventListener('scroll', function() {
        const stickyHeader = document.querySelector('.sticky-header');
        
        if (window.scrollY > 200) {
            stickyHeader.classList.add('visible');
        } else {
            stickyHeader.classList.remove('visible');
        }
    });
});

// Funktion zum Generieren der Service-Karten mit allen Leistungen aus den Bildern
function populateServices() {
    // Komplette Liste aller Leistungen basierend auf den Bildern
    const allServices = [
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
    
    // Sie würden dann diese Daten verwenden, um Ihr Services-Grid zu befüllen
    const servicesGrid = document.querySelector('.services-grid');
    servicesGrid.innerHTML = ''; // Löschen Sie alle Beispielkarten
    
    allServices.forEach(service => {
        // Erstellen Sie eine Servicekarte für jeden Service
        const card = document.createElement('div');
        card.className = 'service-card';
        card.setAttribute('data-category', service.category);
        
        // Generieren Sie Platform-Icons HTML
        let platformsHTML = '';
        service.platforms.forEach(platform => {
            platformsHTML += `<div class="platform-icon">${platform}</div>`;
        });
        
        // Setzen Sie den inneren HTML-Code der Karte
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
        
        servicesGrid.appendChild(card);
    });
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
