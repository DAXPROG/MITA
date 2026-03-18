// assets/js/language.js
let currentLanguage = localStorage.getItem('mita_lang') || 'sw';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('mita_lang', lang);
    document.getElementById('currentLang').innerText = lang.toUpperCase();
    translatePage();
    loadAllSections(); // refresh dynamic content
}

function translatePage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[currentLanguage][key];
            } else {
                el.innerText = translations[currentLanguage][key];
            }
        }
    });
}

const translations = {
    sw: {
        home: 'Nyumbani', about: 'Kuhusu', services: 'Huduma', products: 'Bidhaa',
        testimonials: 'Ushuhuda', faq: 'Maswali', team: 'Timu', contact: 'Mawasiliano',
        hero_title: 'Urithi wako,', hero_highlight: 'Haki yako!',
        hero_desc: 'Kwa nini uchague MITA? Tunatoa mwongozo wa kitaalamu kuhusu sheria za urithi, mirathi, wosia na usimamizi wa mali za marehemu. Tunawawezesha familia na kuhakikisha wapendwa wako wanalindwa.',
        contact_btn: 'Wasiliana nasi', learn_more: 'Maelezo zaidi',
        news: 'Habari mpya', about_us: 'Kuhusu sisi', our_services: 'Huduma zetu',
        our_story: 'Historia yetu', mission: 'Dhamira', vision: 'Malengo',
        story_text: 'MITA ni asasi isiyo ya kiserikali inayowasaidia Watanzania hasa wajane, watoto, wazee na familia za kipato cha chini kupitia taratibu za usimamizi wa mirathi ili kupata haki yao ya urithi.',
        mission_text: 'Kuharakisha haki za mirathi kwa makundi tete, kupunguza gharama na ucheleweshaji katika usimamizi wa mirathi.',
        vision_text: 'Tanzania ambayo haki za urithi kwa makundi tete si lengo bali ni haki inayotolewa kwa urahisi.',
        location: 'Maweni, Skanska – Kigamboni', map_link: 'Tazama ramani ya Google',
        hours: 'Jumatatu–Ijumaa: 8:00 asubuhi – 4:00 mchana',
        slogan: 'Urithi wako, Haki yako!',
        admin_login: 'Kuingia kwa admin', admin_note: 'Ingiza namba maalum ya kuingia (kwa sasa ni 1234).',
        close: 'Funga', login: 'Ingia', admin_dashboard: 'Admin Dashboard - Badilisha yaliyomo',
        save_changes: 'Hifadhi mabadiliko yote',partners: 'Wadau/Washirika'
    },
    en: {
        home: 'Home', about: 'About', services: 'Services', products: 'Products',
        testimonials: 'Testimonials', faq: 'FAQ', team: 'Team', contact: 'Contact',
        hero_title: 'Your Heritage,', hero_highlight: 'Your Right!',
        hero_desc: 'Why choose MITA? We provide expert guidance on inheritance laws, estate planning, will writing and storage, and estate administration. We empower families and ensure your loved ones are protected.',
        contact_btn: 'Contact us', learn_more: 'Learn more',
        news: 'Latest News', about_us: 'About us', our_services: 'Our Services',
        our_story: 'Our Story', mission: 'Mission', vision: 'Vision',
        story_text: 'MITA is a non-profit that helps Tanzanians, especially widows, children, elderly and low-income families navigate probate and estate administration to secure rightful inheritances.',
        mission_text: 'To promote timely administration of justice to enable vulnerable groups to access inheritance rights without undue delay and costs.',
        vision_text: 'Envision Tanzania where inheritance right to vulnerable groups is not a goal but given.',
        location: 'Maweni, Skanska – Kigamboni', map_link: 'View Google Map',
        hours: 'Monday–Friday, 8:00 am – 4:00 pm',
        slogan: 'Your Heritage, Your Right!',
        admin_login: 'Admin access', admin_note: 'Enter special code to enter .',
        close: 'Close', login: 'Login', admin_dashboard: 'Admin Dashboard - Edit content',
        save_changes: 'Save all changes',partners: 'Partners'
    }
};
document.addEventListener('DOMContentLoaded', () => setLanguage(currentLanguage));