 * nezabudnutí. - Platform of Helping Organizations
 * JavaScript functionality for bilingual website
 * @version 1.0.0
 * @author Platform nezabudnutí
 */

'use strict';

// Language translations object
const translations = {
    sk: {
        // Navigation
        nav: {
            about: "O platforme",
            committee: "Výkonný výbor",
            join: "Pridajte sa k nám",
            members: "Členovia",
            projects: "Projekty",
            contact: "Kontakt",
            support: "Podporte nás"
        },
        // Hero section
        hero: {
            title:"",  // Empty
            subtitle: "Pomáhame tým, ktorí pomáhajú. Vytvárame platformu pre dôstojnú a dostupnú starostlivosť."
        },
        // About section
        about: {
            title: "Kto sme?",
            content: "Sme Platforma pomáhajúcich organizácií - nezabudnutí. Vznikli sme ako strešný priestor pre mimovládne organizácie, ktoré denne pomáhajú ľuďom v zdravotnej a sociálnej oblasti. Pracujeme na tom, aby systém starostlivosti na Slovensku nebol len o improvizácii a dobrej vôli – ale o dôstojnosti, dostupnosti a udržateľnosti."
        },
        // Vision section
        vision: {
            title: "Naša vízia",
            content: "Veríme v spoločnosť, kde pomoc nie je výnimkou, ale právom. Kde každý človek má prístup k starostlivosti – bez ohľad na to, kde žije či koľko má rokov."
        },
        // Values section
        values: {
            title: "Naše hodnoty",
            list: [
                "Ľudskosť - nie ako slovo, ale ako každodenná prax.",
                "Odbornosť - rozhodnutia majú stáť na skúsenostiach z terénu a faktoch, nie na dojmoch.",
                "Dialóg - skutočné zmeny nevznikajú v tichu, ale v rozhovore.",
                "Partnerstvo - spájame neziskový, verejný aj súkromný sektor.",
                "Odvaha - hovoriť aj o tom, čo iní obchádzajú."
            ]
        },
        // Activity section
        activity: {
            title: "Naša činnosť",
            subtitle: "Spájame hlasy. Navrhujeme riešenia. Meníme systém.",
            content: "Spájame mimovládne organizácie. Vytvárame a navrhujeme riešenia. Presadzujeme systémové zmeny. Platforma pomáhajúcich organizácií – nezabudnutí., vznikla ako odpoveď na mlčanie tam, kde malo zaznieť silné slovo. Ako reakcia na osamelosť tam, kde mal byť dialóg. Ako snaha spojiť organizácie, ktorým záleží na dôstojnosti, prístupe k starostlivosti a spravodlivosti v systéme."
        },
        // What we do section
        whatWeDo: {
            title: "Čo robíme?",
            list: [
                "prepájame organizácie v sociálnej a zdravotnej oblasti",
                "prinášame odborné argumenty, ktoré formujú verejnú diskusiu",
                "formulujeme systémové návrhy a vstupujeme do legislatívnych procesov",
                "chránime priestor pre slobodnú, odbornú a hodnotovú činnosť mimovládnych organizácií"
            ]
        },
        // Achievements section
        achievements: {
            title: "Spolu sme už dokázali",
            items: [
                {
                    title: "Zmena financovania hospicovej a paliatívnej starostlivosti",
                    subtitle: "Naštartovali a dotiahli sme systémovú zmenu vo financovaní hospicovej starostlivosti.",
                    content: "Dlhodobo sme upozorňovali na to, že výška úhrady za lôžkodňový výkon v hospicoch nepokrývala reálne náklady na starostlivosť - ani personálne, ani prevádzkové. Vďaka spoločnému úsiliu odborníkov, organizácií a ľudí z praxe sa podarilo otvoriť dialóg, ktorý viedol k navýšeniu tejto úhrady zo 100 na 230 eur za lôžkodeň."
                },
                {
                    title: "Spojili sme 40 organizácií voči zákonu o MNO",
                    content: "Pri kampani proti prijatiu návrhu zákona o mimovládnych neziskových organizáciách sme spojili približne 40 pomáhajúcich organizácií, ktoré sa rozhodli spoločne reagovať na tému, ktorá sa ich priamo dotýka."
                },
                {
                    title: "Aktívne sme vystúpili proti zavedeniu tzv. transakčnej dane pre MNO",
                    content: "Aj vďaka spoločnej intervencii a advokácii sa podarilo otvoriť verejnú diskusiu o dopadoch tohto opatrenia na služby, ktoré mnohí ľudia denne potrebujú."
                },
                {
                    title: "Zastali sme sa asignácie 2 % z dane pre MNO",
                    content: "V roku 2024 sme sa podieľali na komunikácii a koordinácii úsilia o zachovanie mechanizmu asignácie 2% ako stabilného a spravodlivého zdroja podpory naprieč celým sektorom."
                }
            ]
        },
        // Join us section
        joinUs: {
            title: "Pomáhate? Nemusíte na to byť sami.",
            subtitle: "Ak ste občianske združenie, nezisková organizácia, komunitná iniciatíva, nadácia či odborná skupina, ktorá denne podáva pomocnú ruku, spoločne dokážeme viac.",
            content: "Platforma pomáhajúcich organizácií – nezabudnutí. vytvára priestor pre:",
            list: [
                "spoločné témy v kľúčových verejných a odborných diskusiách",
                "výmenu poznatkov, skúseností a dát",
                "spoločné advokačné kampane a legislatívne iniciatívy",
                "sieť participantov, ktorí pracujú pre zmeny, nie na rezignácii"
            ],
            joinForces: {
                title: "Spojme sily:",
                list: [
                    "aby naša práca mala väčší dosah",
                    "aby sa o potrebách ľudí, ktorým pomáhame, hovorilo nahlas",
                    "aby starostlivosť nebola len súkromná vec, ale spoločná priorita"
                ]
            }
        },
        // Why support us section
        whySupport: {
            title: "Prečo nás podporiť?",
            content: "Vaša podpora znamená, že pomoc na Slovensku nebude len reakciou na krízu, ale premysleným, funkčným systémom. Spolu s vami dokážeme navrhovať a presadzovať systémové mechanizmy, ktoré menia osudy a vytvárajú priestor nielen pre jednotlivcov, ale aj celých rodín a komunít k dostupnejšej zdravotnej a sociálnej starostlivosti a informovanosti.",
            tagline: "Pomáhame tým, ktorí pomáhajú."
        },
        // FAQ section
        faq: {
            title: "Často kladené otázky",
            items: [
                {
                    question: "Ako sa stať inštitucionálnym darcom/kyňou?",
                    answer: "Pridajte sa do komunity, ktorej nie sú ľudia v núdzi ľahostajní a meňte svet k lepšiemu. Kontaktujte našu manažérku pre právnické osoby: Jozefína Fekiačová<br>e-mail: <a href=\"mailto:fekiacova@platformanezabudnuti.sk\">fekiacova@platformanezabudnuti.sk</a><br>t.číslo: +421 948 953 293"
                },
                {
                    question: "Ako sa stať členom Platformy?",
                    answer: "Pokiaľ sú Vám blízke naše hodnoty a chcete sa stať členom alebo pridruženým členom platformy pomáhajúcich organizácií, vyplňte <a href=\"https://docs.google.com/forms/d/e/1FAIpQLSfnGQHNQ-7xbyTXAksHqVwxeM3wGecepG8sLgzm5dW17zN3iQ/viewform?pli=1\" target=\"_blank\" rel=\"noopener noreferrer\">nasledujúci formulár</a> a následne Vás budeme kontaktovať. Ďakujeme."
                },
                {
                    question: "GDPR/Ochrana osobných údajov",
                    answer: `<p><strong>Kto sme</strong><br>
                            Sme Platforma pomáhajúcich organizácií - nezabudnutí, ktorá združuje občianske združenia, mimovládne neziskové organizácie, nadácie a občianske iniciatívy pôsobiace v sociálnej a zdravotnej oblasti. Adresa našej webovej stránky je <a href="https://www.platformanezabudnuti.sk">www.platformanezabudnuti.sk</a>. Majiteľom domény a hostingu pre webovú stránku je občianske združenie URBANA.</p>
                            
                            <p>Sme spracovateľom vašich osobných údajov, ak ste nám ich poskytli. Znamená to, že zodpovedáme za ich ochranu a spôsob spracovania. Dbáme na to, aby sme vaše osobné údaje spracúvali v súlade s príslušnými právnymi predpismi (najmä Zákon o ochrane osobných údajov a Nariadenie o ochrane osobných údajov tzv. GDPR) a týmito informáciami.</p>
                            
                            <p><strong>Aké osobné údaje spracovávame?</strong><br>
                            • Spracovávame vaše meno, priezvisko, telefónne číslo a e-mailovú adresu.<br>
                            • V niektorých prípadoch spracovávame aj vašu adresu prípadne ďalšie osobné či pracovné kontaktné údaje.</p>
                            
                            <p><strong>Za akým účelom spracúvame vaše osobné údaje?</strong><br>
                            • Informovanie o našich aktivitách prostredníctvom posielania e-mailov a/alebo za účelom odpovedania na otázky, ktoré ste nám priamo zaslali.<br>
                            • Správa našej webovej stránky s cieľom zobraziť obsah stránky a účtov čo najefektívnejšie.</p>
                            
                            <p>Pokiaľ si chcete ktorékoľvek z práv uplatniť, pošlite nám, prosím, e-mail na <a href="mailto:info@platformanezabudnuti.sk">info@platformanezabudnuti.sk</a>.</p>`
                }
            ]
        },
        // Footer
        footer: {
            newsletter: "Newsletter",
            newsletterText: "Prihláste sa na odber noviniek z oblasti zdravotnej a sociálnej starostlivosti.",
            emailPlaceholder: "Váš email",
            subscribe: "Prihlásiť sa",
            contact: "Kontakt",
            address: "Bratislava, Slovensko",
            operatorInfo: "Prevádzkovateľ a správca: Urbana, Račianska 1579/88B, 831 02 Bratislava-Nové Mesto",
            gdpr: "GDPR a cookies",
            copyright: "© 2025 Platforma pomáhajúcich organizácií - nezabudnutí. Všetky práva vyhradené."
        },
        // Events
        events: {
            title: "Najbližšie udalosti",
            viewAll: "Zobraziť všetky udalosti",
            list: [
                {
                    date: "Máj",
                    title: "Webinár - Čo znamená v praxi nový zákon o mimovládnych organizáciách?",
                    description: "Online stretnutie členov k téme schváleného zákona o mimovládnych organizáciách. Koncom mája organizujeme webinár pre členky a členov Platformy pomáhajúcich organizácií k novému zákonu o mimovládnych neziskových organizáciách, ktorý vstúpi do platnosti 1. júna 2025.",
                    expandedContent: "Zameriame sa na to, čo konkrétne znamená pre organizácie v praxi – od nárastu administratívy až po riziká spojené s verejnou dôverou. Zákon prináša viaceré nové povinnosti, ktoré môžu skomplikovať činnosť mnohých MNO: povinnosť zverejňovať výkaz o transparentnosti pri príjme nad 35 000 € ročne, zverejňovanie osobných údajov darcov, ktorí prispeli viac ako 5 000 €, vysoké pokuty za nesplnenie formálnych náležitostí."
                },
                {
                    date: "Jún",
                    title: '"Inner dialógy" - Keď si sociálna a paliatívna starostlivosť podajú ruky',
                    description: "Stretnutie členov Platformy pôsobiacich v oblasti sociálnej starostlivosti - prienik respitnej služby a paliatívnej starostlivosti. V júni sa v rámci Inner dialógy stretnú členky a členovia Platformy z oblasti sociálnych služieb.",
                    expandedContent: "Cieľom je pomenovať výzvy, zdieľať skúsenosti a hľadať možnosti odbornej spolupráce. Respitná starostlivosť môže byť dôležitým mostom k dôstojnému sprevádzaniu na konci života – najmä v prostredí, kde nie sú dostupné zdravotnícke služby. Témy stretnutia: Aké sú prieniky a hranice medzi respitnou a paliatívnou starostlivosťou? Ako môže sociálna služba rozpoznať potrebu paliatívneho prístupu?"
                },
                {
                    date: "Júl",
                    title: 'Verejná diskusia "AFTERLIFE" - Kto sa postará o tých, ktorí sa starali o nás?',
                    description: "Starnutie nie je len otázka veku. Je to otázka spolupatričnosti. Pozývame na verejnú diskusiu v Bratislave, ktorá v rámci projektu Afterlife otvorí tému medzigeneračnej starostlivosti.",
                    expandedContent: "Budeme hovoriť o zodpovednosti, únave aj blízkosti medzi generáciami. Príďte sa rozprávať, pýtať, inšpirovať. Pretože starostlivosť o starších nie je len úloha rodiny. Je to zrkadlo našej spoločnosti. Cieľom je vytvárať mosty - medzi seniormi, mladými ľuďmi, odborníkmi aj verejnosťou."
                }
            ]
        },
        // Buttons
        buttons: {
            joinUs: "Pridajte sa k nám",
            learnMore: "Zistite viac",
            addOrganization: "Pridať organizáciu",
            viewAll: "Zobraziť všetky",
            readMore: "Čítať viac"
        },
        // Members section - removed organizations array since we now use static HTML
        members: {
            title: "Naše členské organizácie"
        }
    },
    // English translations
    en: {
        // Navigation
        nav: {
            about: "About Platform",
            committee: "Executive Committee",
            join: "Join Us",
            members: "Members",
            projects: "Projects",
            contact: "Contact",
            support: "Support Us"
        },
        // Hero section
        hero: {
            title: "",  // Empty
            subtitle: "We help those who help others. Creating a platform for dignified and accessible care."
        },
        // About section
        about: {
            title: "Who are we?",
            content: "We are the Platform of Helping Organizations - nezabudnutí (unforgotten). We emerged as an umbrella space for NGOs that help people in healthcare and social areas daily. We work to ensure that the care system in Slovakia is not just about improvisation and goodwill - but about dignity, accessibility, and sustainability."
        },
        // Vision section
        vision: {
            title: "Our vision",
            content: "We believe in a society where help is not an exception, but a right. Where every person has access to care - regardless of where they live or how old they are."
        },
        // Values section
        values: {
            title: "Our values",
            list: [
                "Humanity - not as a word, but as everyday practice.",
                "Expertise - decisions should be based on field experience and facts, not impressions.",
                "Dialogue - real changes don't emerge in silence, but in conversation.",
                "Partnership - we connect non-profit, public, and private sectors.",
                "Courage - to speak about what others avoid."
            ]
        },
        // Activity section
        activity: {
            title: "Our activities",
            subtitle: "Connecting voices. Proposing solutions. Changing the system.",
            content: "We connect NGOs. We create and propose solutions. We advocate for systemic changes. The Platform of Helping Organizations - nezabudnutí, emerged as a response to silence where a strong word should have been heard. As a reaction to loneliness where there should have been dialogue. As an effort to connect organizations that care about dignity, access to care, and justice in the system."
        },
        // What we do section
        whatWeDo: {
            title: "What we do?",
            list: [
                "connect organizations in social and healthcare areas",
                "bring expert arguments that shape public discussion",
                "formulate systemic proposals and enter legislative processes",
                "protect the space for free, professional, and value-based activities of NGOs"
            ]
        },
        // Achievements section
        achievements: {
            title: "Together we have already achieved",
            items: [
                {
                    title: "Change in hospice and palliative care financing",
                    subtitle: "We initiated and completed a systemic change in hospice care financing.",
                    content: "We have long pointed out that the reimbursement rate for hospice care did not cover the real costs of care - neither personnel nor operational. Thanks to the joint efforts of experts, organizations, and practitioners, a dialogue was opened that led to an increase in this reimbursement from 100 to 230 euros per bed-day."
                },
                {
                    title: "We united 40 organizations against the NGO law",
                    content: "In the campaign against the adoption of the draft law on non-governmental non-profit organizations, we united approximately 40 helping organizations that decided to respond together to an issue that directly affects them."
                },
                {
                    title: "We actively opposed the introduction of the so-called transaction tax for NGOs",
                    content: "Thanks to joint intervention and advocacy, a public discussion on the impacts of this measure on services that many people need daily was opened."
                },
                {
                    title: "We stood up for the 2% tax assignation for NGOs",
                    content: "In 2024, we participated in communicating and coordinating efforts to preserve the 2% tax assignation mechanism as a stable and fair source of support across the sector."
                }
            ]
        },
        // Join us section
        joinUs: {
            title: "Are you helping? You don't have to do it alone.",
            subtitle: "If you are a civic association, non-profit organization, community initiative, foundation, or expert group that lends a helping hand daily, together we can do more.",
            content: "The Platform of Helping Organizations - nezabudnutí. creates space for:",
            list: [
                "common topics in key public and expert discussions",
                "exchange of knowledge, experience, and data",
                "joint advocacy campaigns and legislative initiatives",
                "a network of participants who work for change, not resignation"
            ],
            joinForces: {
                title: "Let's join forces:",
                list: [
                    "so that our work has a greater impact",
                    "so that the needs of the people we help are spoken about loudly",
                    "so that care is not just a private matter, but a common priority"
                ]
            }
        },
        // Why support us section
        whySupport: {
            title: "Why support us?",
            content: "Your support means that help in Slovakia will not just be a response to a crisis, but a thoughtful, functional system. Together with you, we can design and promote systemic mechanisms that change destinies and create space not only for individuals but also for entire families and communities for more accessible healthcare, social care, and information.",
            tagline: "We help those who help others."
        },
        // FAQ section
        faq: {
            title: "Frequently Asked Questions",
            items: [
                {
                    question: "How to become an institutional donor?",
                    answer: "Join the community that cares about people in need and change the world for the better. Contact our manager for legal entities: Jozefína Fekiačová<br>e-mail: <a href=\"mailto:fekiacova@platformanezabudnuti.sk\">fekiacova@platformanezabudnuti.sk</a><br>phone: +421 948 953 293"
                },
                {
                    question: "How to become a Platform member?",
                    answer: "If our values are close to you and you want to become a member or associate member of the platform of helping organizations, fill out the <a href=\"https://docs.google.com/forms/d/e/1FAIpQLSfnGQHNQ-7xbyTXAksHqVwxeM3wGecepG8sLgzm5dW17zN3iQ/viewform?pli=1\" target=\"_blank\" rel=\"noopener noreferrer\">following form</a> and we will contact you. Thank you."
                },
                {
                    question: "GDPR/Personal Data Protection",
                    answer: `<p><strong>Who we are</strong><br>
                            We are the Platform of Helping Organizations - nezabudnutí, which brings together civic associations, non-governmental non-profit organizations, foundations and civic initiatives operating in the social and health areas. The address of our website is <a href="https://www.platformanezabudnuti.sk">www.platformanezabudnuti.sk</a>. The owner of the domain and hosting for the website is the civic association URBANA.</p>
                            
                            <p>We are the processor of your personal data if you have provided it to us. This means we are responsible for their protection and processing method. We ensure that we process your personal data in accordance with relevant legal regulations (especially the Personal Data Protection Act and the General Data Protection Regulation - GDPR).</p>
                            
                            <p><strong>What personal data do we process?</strong><br>
                            • We process your name, surname, phone number and e-mail address.<br>
                            • In some cases, we also process your address or other personal or work contact details.</p>
                            
                            <p><strong>For what purpose do we process your personal data?</strong><br>
                            • Informing about our activities through sending e-mails and/or for the purpose of answering questions you have sent us directly.<br>
                            • Managing our website to display the content of the site and accounts as efficiently as possible.</p>
                            
                            <p>If you want to exercise any of these rights, please send us an e-mail to <a href="mailto:info@platformanezabudnuti.sk">info@platformanezabudnuti.sk</a>.</p>`
                }
            ]
        },
        // Footer
        footer: {
            newsletter: "Newsletter",
            newsletterText: "Subscribe to news from the healthcare and social care areas.",
            emailPlaceholder: "Your email",
            subscribe: "Subscribe",
            contact: "Contact",
            address: "Bratislava, Slovakia",
            operatorInfo: "Operator and administrator: Urbana, Račianska 1579/88B, 831 02 Bratislava-Nové Mesto",
            gdpr: "GDPR and cookies",
            copyright: "© 2025 Platform of Helping Organizations - nezabudnutí. All rights reserved."
        },
        // Events
        events: {
            title: "Upcoming events",
            viewAll: "View all events",
            list: [
                {
                    date: "May",
                    title: "Webinar - What does the new law on non-governmental organizations mean in practice?",
                    description: "Online meeting of members on the topic of the approved law on non-governmental organizations. At the end of May, we are organizing a webinar for members of the Platform of Helping Organizations on the new law on non-governmental non-profit organizations.",
                    expandedContent: "We will focus on what this specifically means for organizations in practice - from increased administration to risks associated with public trust. The law brings several new obligations that may complicate the activities of many NGOs: obligation to publish transparency reports for income over €35,000 annually, publication of personal data of donors who contributed more than €5,000, high fines for non-compliance with formal requirements."
                },
                {
                    date: "June",
                    title: '"Inner dialogues" - When social and palliative care join hands',
                    description: "Meeting of Platform members working in the field of social care - intersection of respite service and palliative care. In June, within the Inner dialogues, members of the Platform from the field of social services will meet.",
                    expandedContent: "The goal is to identify challenges, share experiences and look for opportunities for professional cooperation. Respite care can be an important bridge to dignified end-of-life care - especially in environments where healthcare services are not available. Meeting topics: What are the intersections and boundaries between respite and palliative care? How can social services recognize the need for a palliative approach?"
                },
                {
                    date: "July",
                    title: 'Public discussion "AFTERLIFE" - Who will take care of those who took care of us?',
                    description: "Aging is not just a matter of age. It is a matter of belonging. We invite you to a public discussion in Bratislava, which will open the topic of intergenerational care within the Afterlife project.",
                    expandedContent: "We will talk about responsibility, fatigue and closeness between generations. Come to talk, ask, inspire. Because caring for the elderly is not just a family task. It is a mirror of our society. The goal is to create bridges - between seniors, young people, experts and the public."
                }
            ]
        },
        // Buttons
        buttons: {
            joinUs: "Join us",
            learnMore: "Learn more",
            addOrganization: "Add organization",
            viewAll: "View all",
            readMore: "Read more"
        },
        // Members section - removed organizations array since we now use static HTML
        members: {
            title: "Our member organizations"
        }
    }
};

// Global variables
let currentLanguage = 'sk';
const IBAN = 'SK5609000000005232852272';
const JOIN_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfnGQHNQ-7xbyTXAksHqVwxeM3wGecepG8sLgzm5dW17zN3iQ/viewform?pli=1';

/**
 * Change website language
 * @param {string} language - Language code ('sk' or 'en')
 */
function changeLanguage(language) {
    if (!translations[language]) {
        console.error(`Language ${language} not supported`);
        return;
    }

    currentLanguage = language;
    
    // Update language toggle styling
    const skButton = document.getElementById('lang-sk');
    const enButton = document.getElementById('lang-en');
    
    if (skButton && enButton) {
        skButton.classList.toggle('active', language === 'sk');
        enButton.classList.toggle('active', language === 'en');
        
        // Update ARIA attributes
        skButton.setAttribute('aria-pressed', language === 'sk');
        enButton.setAttribute('aria-pressed', language === 'en');
    }
    
    // Update all elements with data-key attribute
    const elementsWithKey = document.querySelectorAll('[data-key]');
    elementsWithKey.forEach(element => {
        const key = element.getAttribute('data-key');
        const translation = getTranslation(key, language);
        
        if (translation !== null) {
            if (element.hasAttribute('placeholder') || element.hasAttribute('data-placeholder-key')) {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update dynamic content sections
    updateAchievements();
    updateFAQ();
    renderEvents();
    
    // Update document language attribute
    document.documentElement.lang = language;
}

/**
 * Get translation by key path
 * @param {string} key - Translation key path (e.g., 'nav.about')
 * @param {string} language - Language code
 * @returns {string|null} Translation text or null if not found
 */
function getTranslation(key, language) {
    const keyParts = key.split('.');
    let translation = translations[language];
    
    for (const part of keyParts) {
        if (translation && translation[part] !== undefined) {
            translation = translation[part];
        } else {
            return null;
        }
    }
    
    return translation;
}

/**
 * Update achievements section content
 */
function updateAchievements() {
    const achievementCards = document.querySelectorAll('.achievement-card');
    const achievements = translations[currentLanguage].achievements.items;
    
    achievementCards.forEach((card, index) => {
        if (achievements[index]) {
            const title = card.querySelector('.achievement-title');
            const subtitle = card.querySelector('.achievement-subtitle');
            const content = card.querySelector('.achievement-content');
            
            if (title) title.textContent = achievements[index].title;
            if (subtitle) subtitle.textContent = achievements[index].subtitle || '';
            if (content) content.textContent = achievements[index].content;
        }
    });
}

/**
 * Update FAQ section content
 */
function updateFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    const faqData = translations[currentLanguage].faq.items;
    
    faqItems.forEach((item, index) => {
        if (faqData[index]) {
            const question = item.querySelector('.faq-question h3');
            const answer = item.querySelector('.faq-answer');
            
            if (question) question.textContent = faqData[index].question;
            if (answer) {
                // For GDPR section, preserve HTML structure
                if (index === 2) {
                    answer.innerHTML = `<div>${faqData[index].answer}</div>`;
                } else {
                    answer.innerHTML = `<p>${faqData[index].answer}</p>`;
                }
            }
        }
    });
}

// NOTE: renderMembers() function removed as we now use static HTML for member cards

/**
 * Render events with expansion functionality
 */
function renderEvents() {
    const eventsList = document.querySelector('.events-list');
    if (!eventsList) return;
    
    const events = translations[currentLanguage].events.list;
    const readMoreText = translations[currentLanguage].buttons.readMore;
    
    // Clear existing content
    eventsList.innerHTML = '';
    
    // Create and add event items
    events.forEach((event, index) => {
        const eventItem = document.createElement('div');
        eventItem.className = 'event-item';
        eventItem.setAttribute('role', 'listitem');
        
        const hasExpandedContent = event.expandedContent && event.expandedContent.trim();
        
        eventItem.innerHTML = `
            <div class="event-date">${escapeHtml(event.date)}</div>
            <div class="event-content">
                <h3 class="event-title">${escapeHtml(event.title)}</h3>
                <p class="event-description">${escapeHtml(event.description)}</p>
                ${hasExpandedContent ? `
                    <div class="event-expanded" id="event-expanded-${index}" style="display: none;" aria-hidden="true">
                        <p>${escapeHtml(event.expandedContent)}</p>
                    </div>
                    <button class="event-read-more" onclick="toggleEvent(${index})" 
                            data-more="${escapeHtml(readMoreText)}" 
                            data-less="${currentLanguage === 'sk' ? 'Skryť' : 'Hide'}"
                            aria-expanded="false" aria-controls="event-expanded-${index}">
                        ${escapeHtml(readMoreText)}
                    </button>
                ` : ''}
            </div>
        `;
        
        eventsList.appendChild(eventItem);
    });
}

/**
 * Toggle event expansion
 * @param {number} index - Event index
 */
function toggleEvent(index) {
    const expandedDiv = document.getElementById(`event-expanded-${index}`);
    const readMoreButton = expandedDiv ? expandedDiv.nextElementSibling : null;
    
    if (!expandedDiv || !readMoreButton) return;
    
    const isExpanded = expandedDiv.style.display === 'block';
    
    if (isExpanded) {
        expandedDiv.style.display = 'none';
        expandedDiv.setAttribute('aria-hidden', 'true');
        readMoreButton.textContent = readMoreButton.getAttribute('data-more');
        readMoreButton.setAttribute('aria-expanded', 'false');
    } else {
        expandedDiv.style.display = 'block';
        expandedDiv.setAttribute('aria-hidden', 'false');
        readMoreButton.textContent = readMoreButton.getAttribute('data-less');
        readMoreButton.setAttribute('aria-expanded', 'true');
    }
}

/**
 * Show IBAN modal
 */
function showIBAN() {
    const modal = document.getElementById('iban-modal');
    if (modal) {
        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
        
        // Focus on the modal content for accessibility
        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.focus();
        }
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Close modal
 * @param {Event} [event] - Click event (optional)
 */
function closeModal(event) {
    const modal = document.getElementById('iban-modal');
    if (!modal) return;
    
    // Only close if clicking on modal backdrop or no event provided
    if (!event || event.target === modal) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        
        // Restore body scroll
        document.body.style.overflow = '';
        
        // Return focus to the button that opened the modal
        const supportButton = document.querySelector('button[onclick="showIBAN()"]');
        if (supportButton) {
            supportButton.focus();
        }
    }
}

/**
 * Copy IBAN to clipboard
 */
async function copyIBAN() {
    try {
        // Try modern clipboard API first
        if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(IBAN);
            showCopyNotification();
        } else {
            // Fallback to legacy method
            copyIBANFallback();
        }
    } catch (error) {
        console.error('Copy failed:', error);
        copyIBANFallback();
    }
}

/**
 * Fallback copy method using document.execCommand
 */
function copyIBANFallback() {
    const textArea = document.createElement('textarea');
    textArea.value = IBAN;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    textArea.style.left = '-9999px';
    textArea.setAttribute('aria-hidden', 'true');
    
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        showCopyNotification();
    } catch (error) {
        console.error('Fallback copy failed:', error);
        // Show IBAN in alert as last resort
        alert(`IBAN: ${IBAN}`);
    }
    
    document.body.removeChild(textArea);
}

/**
 * Show copy notification
 */
function showCopyNotification() {
    const notification = document.createElement('div');
    notification.textContent = currentLanguage === 'sk' ? 'IBAN skopírovaný!' : 'IBAN copied!';
    notification.setAttribute('role', 'status');
    notification.setAttribute('aria-live', 'polite');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--soft-warm-rose);
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        font-weight: 500;
        font-family: Inter, sans-serif;
        transition: opacity 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove notification
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 2000);
}

/**
 * Open join form in new tab
 */
function openJoinForm() {
    window.open(JOIN_FORM_URL, '_blank', 'noopener,noreferrer');
}

/**
 * Smooth scroll to about section
 */
function scrollToAbout() {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        aboutSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        
        // Focus the section for accessibility
        aboutSection.focus({ preventScroll: true });
    }
}

/**
 * Submit newsletter form
 * @param {Event} event - Form submit event
 */
function submitNewsletter(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById('newsletter-email');
    const form = document.getElementById('newsletter-form');
    
    if (!emailInput || !form) return;
    
    const email = emailInput.value.trim();
    
    // Basic email validation
    if (!isValidEmail(email)) {
        showEmailError(currentLanguage === 'sk' 
            ? 'Prosím, zadajte platný email.' 
            : 'Please enter a valid email.');
        return;
    }
    
    // Clear any previous errors
    clearEmailError();
    
    // Create mailto link
    const subject = encodeURIComponent('Newsletter subscription');
    const body = encodeURIComponent(`Please add this email to the newsletter: ${email}`);
    
    // Open email client
    window.location.href = `mailto:info@platformanezabudnuti.sk?subject=${subject}&body=${body}`;
    
    // Show confirmation
    showNewsletterConfirmation(form);
}

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Show email validation error
 * @param {string} message - Error message
 */
function showEmailError(message) {
    const errorElement = document.getElementById('email-error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        errorElement.setAttribute('aria-live', 'polite');
    }
}

/**
 * Clear email validation error
 */
function clearEmailError() {
    const errorElement = document.getElementById('email-error');
    if (errorElement) {
        errorElement.style.display = 'none';
        errorElement.textContent = '';
    }
}

/**
 * Show newsletter confirmation
 * @param {HTMLElement} form - Form element
 */
function showNewsletterConfirmation(form) {
    const originalHTML = form.innerHTML;
    
    form.innerHTML = `<p style="color: var(--soft-warm-rose); font-weight: 500; text-align: center;">${
        currentLanguage === 'sk' 
            ? 'Ďakujeme! Váš email klient sa otvoril.' 
            : 'Thank you! Your email client has opened.'
    }</p>`;
    
    // Reset form after 3 seconds
    setTimeout(() => {
        form.innerHTML = originalHTML;
        // Re-add event listener
        form.addEventListener('submit', submitNewsletter);
    }, 3000);
}

/**
 * Toggle FAQ item
 * @param {number} index - FAQ index
 */
function toggleFAQ(index) {
    const answer = document.getElementById(`faq-answer-${index}`);
    const question = answer ? answer.previousElementSibling : null;
    const arrow = question ? question.querySelector('.faq-arrow') : null;
    
    if (!answer || !question || !arrow) return;
    
    const isOpen = answer.style.display === 'block';
    
    // Close all other FAQs
    document.querySelectorAll('.faq-answer').forEach((faq, i) => {
        if (i !== index && faq.style.display === 'block') {
            faq.style.display = 'none';
            const otherQuestion = faq.previousElementSibling;
            const otherArrow = otherQuestion ? otherQuestion.querySelector('.faq-arrow') : null;
            if (otherQuestion && otherArrow) {
                otherQuestion.setAttribute('aria-expanded', 'false');
                otherArrow.textContent = '▼';
                otherArrow.style.transform = 'rotate(0deg)';
            }
        }
    });
    
    // Toggle current FAQ
    if (isOpen) {
        answer.style.display = 'none';
        question.setAttribute('aria-expanded', 'false');
        arrow.textContent = '▼';
        arrow.style.transform = 'rotate(0deg)';
    } else {
        answer.style.display = 'block';
        question.setAttribute('aria-expanded', 'true');
        arrow.textContent = '▲';
        arrow.style.transform = 'rotate(180deg)';
    }
}

/**
 * Escape HTML to prevent XSS
 * @param {string} text - Text to escape
 * @returns {string} Escaped text
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Initialize the website
 */
function init() {
    // Set initial language
    changeLanguage('sk');
    
    // Add event listeners
    setupEventListeners();
    
    // Set focus management for accessibility
    setupAccessibility();
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
    // Modal event listeners
    const modal = document.getElementById('iban-modal');
    if (modal) {
        // Close modal when clicking outside
        modal.addEventListener('click', closeModal);
        
        // Close modal with ESC key
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && modal.style.display === 'block') {
                closeModal();
            }
        });
    }
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', submitNewsletter);
    }
    
    // Language toggle keyboard navigation
    const langButtons = document.querySelectorAll('.lang-option');
    langButtons.forEach(button => {
        button.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                button.click();
            }
        });
    });
}

/**
 * Setup accessibility features
 */
function setupAccessibility() {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = currentLanguage === 'sk' ? 'Preskočiť na hlavný obsah' : 'Skip to main content';
    skipLink.className = 'visually-hidden';
    skipLink.addEventListener('focus', () => {
        skipLink.style.position = 'absolute';
        skipLink.style.top = '10px';
        skipLink.style.left = '10px';
        skipLink.style.zIndex = '10000';
        skipLink.style.padding = '10px';
        skipLink.style.background = 'var(--soft-warm-rose)';
        skipLink.style.color = 'white';
        skipLink.style.textDecoration = 'none';
        skipLink.style.borderRadius = '4px';
    });
    skipLink.addEventListener('blur', () => {
        skipLink.className = 'visually-hidden';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main landmark if not present
    const main = document.querySelector('main');
    if (main) {
        main.id = 'main';
        main.setAttribute('tabindex', '-1');
    }
}

// DOM Content Loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Export functions for global access (for onclick handlers)
window.changeLanguage = changeLanguage;
window.showIBAN = showIBAN;
window.closeModal = closeModal;
window.copyIBAN = copyIBAN;
window.openJoinForm = openJoinForm;
window.scrollToAbout = scrollToAbout;
window.submitNewsletter = submitNewsletter;
window.toggleFAQ = toggleFAQ;
window.toggleEvent = toggleEvent;

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.btn-primary[onclick*="showBAN"]');
    const nav = document.querySelector('nav[role="navigation"]');
    
    if (menuButton && nav) {
        menuButton.addEventListener('click', function(e) {
            e.preventDefault();
            nav.classList.toggle('active');
        });
    }
});
