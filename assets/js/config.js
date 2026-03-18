// assets/js/config.js
const STORAGE_KEYS = {
 NEWS: 'mita_news',
 PRODUCTS: 'mita_products',
 TESTIMONIALS: 'mita_testimonials',
 FAQ: 'mita_faq'
};

// Beautiful default data with rich content
const defaultData = {
 news: [
     { id: 1, title_en: '📢 Free Will Writing Workshop - April 15', title_sw: '📢 Warsha ya bure ya kuandika wosia - Aprili 15', date: '2025-04-15', image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400' },
     { id: 2, title_en: '⚖️ New Inheritance Law Guide Published', title_sw: '⚖️ Mwongozo mpya wa sheria za urithi umetolewa', date: '2025-05-01', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400' },
     { id: 3, title_en: '👵🏽 Special Legal Aid for Elderly - May 10', title_sw: '👵🏽 Msaada maalum kwa wazee - Mei 10', date: '2025-05-10', image: 'https://images.unsplash.com/photo-1576765974826-2f8058b5d0a7?w=400' }
 ],
 products: [
     { id: 1, name_en: '📘 Will Writing Guide (Booklet)', name_sw: '📘 Mwongozo wa kuandika wosia', description_en: 'Step-by-step guide in simple language', description_sw: 'Mwongozo wa hatua kwa hatua kwa lugha rahisi', image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=400' },
     { id: 2, name_en: '📋 Inheritance Checklist', name_sw: '📋 Orodha ya urithi', description_en: 'What to do when a loved one passes', description_sw: 'Nini cha kufanya mpendwa anapofariki', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400' },
     { id: 3, name_en: '🎥 Online Course: Probate Basics', name_sw: '🎥 Kozi ya mtandaoni: Misingi ya Mirathi', description_en: '3-hour video course with certificate', description_sw: 'Kozi ya saa 3 na cheti', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400' }
 ],
 testimonials: [
     { id: 1, text_en: 'MITA helped me understand my rights as a widow. Now I can protect my children\'s future.', text_sw: 'MITA imenisaidia kuelewa haki zangu kama mjane. Sasa ninaweza kulinda mustakabali wa watoto wangu.', author: 'Maria K.', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200' },
     { id: 2, text_en: 'They guided our family through the probate process peacefully. Highly recommend!', text_sw: 'Walituongoza familia yetu katika kesi ya mirathi kwa amani. Nawashauri sana!', author: 'Juma & Family', image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200' }
 ],
 faq: [
     { id: 1, question_en: 'Who can write a will?', question_sw: 'Nani anaweza kuandika wosia?', answer_en: 'Any adult of sound mind (18+ years) can write a will.', answer_sw: 'Kila mtu mzima mwenye akili timamu (miaka 18+) anaweza kuandika wosia.' },
     { id: 2, question_en: 'Is a wife entitled to inherit?', question_sw: 'Je, mke ana haki ya kurithi?', answer_en: 'Yes, under Tanzanian law, a wife is a legal heir.', answer_sw: 'Ndiyo, kwa sheria za Tanzania, mke ni mrithi halali.' },
     { id: 3, question_en: 'How long does probate take?', question_sw: 'Kesi ya mirathi inachukua muda gani?', answer_en: 'It varies, but with MITA\'s help, we reduce delays significantly.', answer_sw: 'Inategemea, lakini kwa msaada wa MITA, tunapunguza ucheleweshaji.' }
 ]
};

function initStorage() {
 if (!localStorage.getItem(STORAGE_KEYS.NEWS)) {
     localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(defaultData.news));
 }
 if (!localStorage.getItem(STORAGE_KEYS.PRODUCTS)) {
     localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(defaultData.products));
 }
 if (!localStorage.getItem(STORAGE_KEYS.TESTIMONIALS)) {
     localStorage.setItem(STORAGE_KEYS.TESTIMONIALS, JSON.stringify(defaultData.testimonials));
 }
 if (!localStorage.getItem(STORAGE_KEYS.FAQ)) {
     localStorage.setItem(STORAGE_KEYS.FAQ, JSON.stringify(defaultData.faq));
 }
}
initStorage();