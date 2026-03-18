// assets/js/admin.js
let isAdmin = false;

function verifyAdmin() {
    const code = document.getElementById('adminCode').value;
    if (code === 'MITA') {
        isAdmin = true;
        bootstrap.Modal.getInstance(document.getElementById('adminLoginModal')).hide();
        const panelModal = new bootstrap.Modal(document.getElementById('adminPanelModal'));
        panelModal.show();
        renderAdminPanels();
    } else {
        alert('Code sahihi? Jaribu 1234');
    }
}

function closeAdminPanel() {
    bootstrap.Modal.getInstance(document.getElementById('adminPanelModal')).hide();
    isAdmin = false;
}

// Getters and setters
function getNews() { return JSON.parse(localStorage.getItem(STORAGE_KEYS.NEWS)) || []; }
function getProducts() { return JSON.parse(localStorage.getItem(STORAGE_KEYS.PRODUCTS)) || []; }
function getTestimonials() { return JSON.parse(localStorage.getItem(STORAGE_KEYS.TESTIMONIALS)) || []; }
function getFaq() { return JSON.parse(localStorage.getItem(STORAGE_KEYS.FAQ)) || []; }

function saveNews(data) { localStorage.setItem(STORAGE_KEYS.NEWS, JSON.stringify(data)); loadAllSections(); }
function saveProducts(data) { localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(data)); loadAllSections(); }
function saveTestimonials(data) { localStorage.setItem(STORAGE_KEYS.TESTIMONIALS, JSON.stringify(data)); loadAllSections(); }
function saveFaq(data) { localStorage.setItem(STORAGE_KEYS.FAQ, JSON.stringify(data)); loadAllSections(); }

function renderAdminPanels() {
    // News list
    let news = getNews();
    let html = '<ul class="list-group">';
    news.forEach((item, index) => {
        html += `<li class="list-group-item d-flex justify-content-between align-items-center">
            <span><img src="${item.image}" width="40" class="me-2 rounded"> ${item.title_en} / ${item.title_sw}</span>
            <span><button class="btn btn-sm btn-outline-primary" onclick="adminEditNews(${index})">Badili</button> <button class="btn btn-sm btn-outline-danger" onclick="adminDeleteNews(${index})">Futa</button></span>
        </li>`;
    });
    html += '</ul>';
    document.getElementById('newsAdminList').innerHTML = html;

    // Products list
    let products = getProducts();
    html = '<ul class="list-group">';
    products.forEach((item, index) => {
        html += `<li class="list-group-item d-flex justify-content-between">
            <span><img src="${item.image}" width="40" class="me-2 rounded"> ${item.name_en} / ${item.name_sw}</span>
            <span><button class="btn btn-sm btn-outline-primary" onclick="adminEditProduct(${index})">Badili</button> <button class="btn btn-sm btn-outline-danger" onclick="adminDeleteProduct(${index})">Futa</button></span>
        </li>`;
    });
    html += '</ul>';
    document.getElementById('productsAdminList').innerHTML = html;

    // Testimonials list
    let tests = getTestimonials();
    html = '<ul class="list-group">';
    tests.forEach((item, index) => {
        html += `<li class="list-group-item d-flex justify-content-between">
            <span><img src="${item.image}" width="40" class="me-2 rounded-circle"> ${item.text_en.substring(0,30)}...</span>
            <span><button class="btn btn-sm btn-outline-primary" onclick="adminEditTestimonial(${index})">Badili</button> <button class="btn btn-sm btn-outline-danger" onclick="adminDeleteTestimonial(${index})">Futa</button></span>
        </li>`;
    });
    html += '</ul>';
    document.getElementById('testimonialsAdminList').innerHTML = html;

    // FAQ list
    let faqs = getFaq();
    html = '<ul class="list-group">';
    faqs.forEach((item, index) => {
        html += `<li class="list-group-item d-flex justify-content-between">
            <span>${item.question_en.substring(0,30)}...</span>
            <span><button class="btn btn-sm btn-outline-primary" onclick="adminEditFaq(${index})">Badili</button> <button class="btn btn-sm btn-outline-danger" onclick="adminDeleteFaq(${index})">Futa</button></span>
        </li>`;
    });
    html += '</ul>';
    document.getElementById('faqAdminList').innerHTML = html;
}

// CRUD operations with prompts (now including image URLs)
function adminAddNews() {
    let titleEn = prompt('News title (English)');
    let titleSw = prompt('News title (Swahili)');
    let image = prompt('Image URL (leave empty for default)', 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400');
    if (titleEn && titleSw) {
        let news = getNews();
        let newId = news.length ? Math.max(...news.map(n=>n.id)) + 1 : 1;
        news.push({ id: newId, title_en: titleEn, title_sw: titleSw, date: new Date().toISOString().slice(0,10), image: image });
        saveNews(news);
        renderAdminPanels();
    }
}
function adminDeleteNews(index) {
    if (confirm('Una uhakika?')) {
        let news = getNews();
        news.splice(index, 1);
        saveNews(news);
        renderAdminPanels();
    }
}
function adminEditNews(index) {
    let news = getNews();
    let item = news[index];
    let newTitleEn = prompt('Edit English title', item.title_en);
    let newTitleSw = prompt('Edit Swahili title', item.title_sw);
    let newImage = prompt('Edit image URL', item.image);
    if (newTitleEn && newTitleSw) {
        news[index] = { ...item, title_en: newTitleEn, title_sw: newTitleSw, image: newImage };
        saveNews(news);
        renderAdminPanels();
    }
}

// Products
function adminAddProduct() {
    let nameEn = prompt('Product name (English)');
    let nameSw = prompt('Product name (Swahili)');
    let descEn = prompt('Description (English)');
    let descSw = prompt('Description (Swahili)');
    let image = prompt('Image URL', 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=400');
    if (nameEn && nameSw) {
        let prods = getProducts();
        let newId = prods.length ? Math.max(...prods.map(p=>p.id)) + 1 : 1;
        prods.push({ id: newId, name_en: nameEn, name_sw: nameSw, description_en: descEn, description_sw: descSw, image: image });
        saveProducts(prods);
        renderAdminPanels();
    }
}
function adminDeleteProduct(index) {
    if (confirm('Una uhakika?')) {
        let prods = getProducts();
        prods.splice(index,1);
        saveProducts(prods);
        renderAdminPanels();
    }
}
function adminEditProduct(index) {
    let prods = getProducts();
    let item = prods[index];
    let newNameEn = prompt('Edit English name', item.name_en);
    let newNameSw = prompt('Edit Swahili name', item.name_sw);
    let newDescEn = prompt('Edit English description', item.description_en);
    let newDescSw = prompt('Edit Swahili description', item.description_sw);
    let newImage = prompt('Edit image URL', item.image);
    if (newNameEn && newNameSw) {
        prods[index] = { ...item, name_en: newNameEn, name_sw: newNameSw, description_en: newDescEn, description_sw: newDescSw, image: newImage };
        saveProducts(prods);
        renderAdminPanels();
    }
}

// Testimonials
function adminAddTestimonial() {
    let textEn = prompt('Testimonial (English)');
    let textSw = prompt('Testimonial (Swahili)');
    let author = prompt('Author name');
    let image = prompt('Author image URL', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200');
    if (textEn && textSw) {
        let tests = getTestimonials();
        let newId = tests.length ? Math.max(...tests.map(t=>t.id)) + 1 : 1;
        tests.push({ id: newId, text_en: textEn, text_sw: textSw, author: author, image: image });
        saveTestimonials(tests);
        renderAdminPanels();
    }
}
function adminDeleteTestimonial(index) {
    if (confirm('Una uhakika?')) {
        let tests = getTestimonials();
        tests.splice(index,1);
        saveTestimonials(tests);
        renderAdminPanels();
    }
}
function adminEditTestimonial(index) {
    let tests = getTestimonials();
    let item = tests[index];
    let newTextEn = prompt('Edit English text', item.text_en);
    let newTextSw = prompt('Edit Swahili text', item.text_sw);
    let newAuthor = prompt('Edit author', item.author);
    let newImage = prompt('Edit image URL', item.image);
    if (newTextEn && newTextSw) {
        tests[index] = { ...item, text_en: newTextEn, text_sw: newTextSw, author: newAuthor, image: newImage };
        saveTestimonials(tests);
        renderAdminPanels();
    }
}

// FAQ
function adminAddFaq() {
    let qEn = prompt('Question (English)');
    let aEn = prompt('Answer (English)');
    let qSw = prompt('Question (Swahili)');
    let aSw = prompt('Answer (Swahili)');
    if (qEn && aEn && qSw && aSw) {
        let faqs = getFaq();
        let newId = faqs.length ? Math.max(...faqs.map(f=>f.id)) + 1 : 1;
        faqs.push({ id: newId, question_en: qEn, answer_en: aEn, question_sw: qSw, answer_sw: aSw });
        saveFaq(faqs);
        renderAdminPanels();
    }
}
function adminDeleteFaq(index) {
    if (confirm('Una uhakika?')) {
        let faqs = getFaq();
        faqs.splice(index,1);
        saveFaq(faqs);
        renderAdminPanels();
    }
}
function adminEditFaq(index) {
    let faqs = getFaq();
    let item = faqs[index];
    let newQEn = prompt('Edit question (English)', item.question_en);
    let newAEn = prompt('Edit answer (English)', item.answer_en);
    let newQSw = prompt('Edit question (Swahili)', item.question_sw);
    let newASw = prompt('Edit answer (Swahili)', item.answer_sw);
    if (newQEn && newAEn && newQSw && newASw) {
        faqs[index] = { ...item, question_en: newQEn, answer_en: newAEn, question_sw: newQSw, answer_sw: newASw };
        saveFaq(faqs);
        renderAdminPanels();
    }
}

function saveAllChanges() {
    alert('Mabadiliko yamehifadhiwa kwenye localStorage. Yataonekana kwa wote.');
    loadAllSections();
    closeAdminPanel();
}