// assets/js/main.js
function loadAllSections() {
 loadNews();
 loadProducts();
 loadTestimonials();
 loadFaq();
 loadServices();
 loadTeam();
 loadWashirika();
}

function loadNews() {
 const news = getNews();
 let html = '';
 news.forEach(item => {
     let title = currentLanguage === 'sw' ? item.title_sw : item.title_en;
     html += `<div class="col-md-4 mb-4">
         <div class="card h-100 border-0 shadow-sm">
             <img src="${item.image}" class="card-img-top" style="height: 200px; object-fit: cover;object-position: center;" alt="${title}">
             <div class="card-body">
                 <h6>${title}</h6>
                 <small class="text-muted">${item.date || ''}</small>
             </div>
         </div>
     </div>`;
 });
 document.getElementById('newsContainer').innerHTML = html || '<p>Hakuna habari</p>';
}

function loadProducts() {
 const prods = getProducts();
 let html = '';
 prods.forEach(p => {
     let name = currentLanguage === 'sw' ? p.name_sw : p.name_en;
     let desc = currentLanguage === 'sw' ? p.description_sw : p.description_en;
     html += `<div class="col-md-4 mb-4">
         <div class="product-card h-100">
             <img src="${p.image}" class="card-img-top rounded-3 mb-3" style="height: 180px; object-fit: cover;" alt="${name}">
             <h5>${name}</h5>
             <p>${desc}</p>
         </div>
     </div>`;
 });
 document.getElementById('productsContainer').innerHTML = html || '<p>Hakuna bidhaa</p>';
}

function loadTestimonials() {
 const tests = getTestimonials();
 let html = '';
 tests.forEach(t => {
     let text = currentLanguage === 'sw' ? t.text_sw : t.text_en;
     html += `<div class="col-md-6 mb-4">
         <div class="testimonial-card ">
             <img src="${t.image}" class="rounded-circle me-3" width="80" height="80" style="object-fit: cover;">
             <div>
                 <p><i class="bi bi-quote text-sky"></i> ${text}</p>
                 <footer class="fw-bold">— ${t.author || ''}</footer>
             </div>
         </div>
     </div>`;
 });
 document.getElementById('testimonialsContainer').innerHTML = html || '<p>Hakuna ushuhuda</p>';
}

function loadFaq() {
 const faqs = getFaq();
 let accordionHtml = '';
 faqs.forEach((faq, index) => {
     let question = currentLanguage === 'sw' ? faq.question_sw : faq.question_en;
     let answer = currentLanguage === 'sw' ? faq.answer_sw : faq.answer_en;
     accordionHtml += `
     <div class="accordion-item">
         <h2 class="accordion-header">
             <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq${index}">
                 ${question}
             </button>
         </h2>
         <div id="faq${index}" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
             <div class="accordion-body">${answer}</div>
         </div>
     </div>`;
 });
 document.getElementById('faqAccordion').innerHTML = accordionHtml;
}

function loadServices() {
 const services = [
     { sw: 'Kuelimisha umma kuhusu sheria za mirathi', en: 'Educate public on inheritance laws', icon: 'bi-book' },
     { sw: 'Msaada wa kisheria kwa watu wenye uhitaji', en: 'Legal aid for vulnerable', icon: 'bi-briefcase' },
     { sw: 'Kutetea mageuzi ya sheria za mirathi', en: 'Advocate for law reform', icon: 'bi-graph-up' },
     { sw: 'Midahalo ya kitamaduni kuhusu mirathi', en: 'Community dialogues', icon: 'bi-people' },
     { sw: 'Kujenga uwezo kwa viongozi na paralegals', en: 'Capacity building', icon: 'bi-person-up' },
     { sw: 'Uhifadhi salama wa nyaraka za mirathi', en: 'Secure document storage', icon: 'bi-shield-check' }
 ];
 let html = '';
 services.forEach(s => {
     let text = currentLanguage === 'sw' ? s.sw : s.en;
     html += `<div class="col-md-4"><div class="service-card p-3"><i class="bi ${s.icon} fs-1 text-sky"></i><p class="mt-2">${text}</p></div></div>`;
 });
 document.getElementById('servicesContainer').innerHTML = html;
}

function loadTeam() {
 const team = [
     { name: 'Adv. Grace Mushi', role_sw: 'Mkurugenzi wa Sheria', role_en: 'Legal Director', img: 'assets/images/woman.png' },
     { name: 'Juma Kipara', role_sw: 'Mratibu wa jamii', role_en: 'Community Coordinator', img: 'assets/images/man.png' },
     { name: 'Zainab Hassan', role_sw: 'Afisa Wosia', role_en: 'Will Officer', img: 'assets/images/woman.png' }
 ];
 let html = '';
 team.forEach(m => {
     let role = currentLanguage === 'sw' ? m.role_sw : m.role_en;
     html += `<div class="col-md-4 text-center mb-4">
         <img src="${m.img}" class="team-img shadow">
         <h5>${m.name}</h5>
         <p class="text-secondary">${role}</p>
     </div>`;
 });
 document.getElementById('teamContainer').innerHTML = html;
}
function loadWashirika() {
 const team = [
     { name: 'Irish Embassy ', role_sw: 'Mshirika/Mdau', role_en: 'Stakeholder/Partner', img: 'assets/images/Logo.jpeg' },
     { name: 'Latesha Supermarket', role_sw: 'Mshirika/Mdau', role_en: 'Stakeholder/Partner', img: 'assets/images/Logo.jpeg' },
     { name: 'Wizara ya Katiba na Sheria', role_sw: 'Mshirika/Mdau', role_en: 'Stakeholder/Partner', img: 'assets/images/Logo.jpeg' }
 ];
 let html = '';
 team.forEach(m => {
     let role = currentLanguage === 'sw' ? m.role_sw : m.role_en;
     html += `<div class="col-md-4 text-center mb-4">
         <img src="${m.img}" class="partner-img shadow">
         <h5>${m.name}</h5>
         <p class="text-secondary">${role}</p>
     </div>`;
 });
 document.getElementById('washirikaContainer').innerHTML = html;
}

// Copy phone number on call button click
document.getElementById('callBtn')?.addEventListener('click', (e) => {
 e.preventDefault();
 navigator.clipboard.writeText('+255761771141').then(() => {
     alert('Nambari imenakiliwa. Sasa paste kwenye simu.');
 }).catch(() => window.location.href = 'tel:+255761771141');
});

// Initial load
document.addEventListener('DOMContentLoaded', loadAllSections);