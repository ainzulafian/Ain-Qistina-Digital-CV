// ==================================================
// COMPLETE JAVASCRIPT - Bilingual (EN/BM) & Navigation
// IMD318 Individual Project
// ==================================================

const langState = { current: 'en' };

function setLanguage(lang) {
    langState.current = lang;
    
    // Update all elements with data-en / data-bm attributes
    const elementsWithLang = document.querySelectorAll('[data-en][data-bm]');
    elementsWithLang.forEach(el => {
        const enText = el.getAttribute('data-en');
        const bmText = el.getAttribute('data-bm');
        if (lang === 'en' && enText) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.value = enText;
            } else {
                el.innerText = enText;
            }
        } else if (lang === 'bm' && bmText) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.value = bmText;
            } else {
                el.innerText = bmText;
            }
        }
    });

    // Update about paragraph specifically (handles inner paragraph)
    const aboutPara = document.getElementById('aboutText');
    if (aboutPara) {
        if (lang === 'en') aboutPara.innerText = aboutPara.getAttribute('data-en');
        else aboutPara.innerText = aboutPara.getAttribute('data-bm');
    }
    
    // Update navigation labels
    document.querySelectorAll('.nav-label').forEach(label => {
        const enVal = label.getAttribute('data-en');
        const bmVal = label.getAttribute('data-bm');
        if (lang === 'en' && enVal) label.innerText = enVal;
        else if (lang === 'bm' && bmVal) label.innerText = bmVal;
    });
    
    // Update main title
    const titleEl = document.getElementById('digitalCvTitle');
    if (titleEl) {
        if (lang === 'en') titleEl.innerText = titleEl.getAttribute('data-en');
        else titleEl.innerText = titleEl.getAttribute('data-bm');
    }
    
    // Update About title and Contact title
    const aboutTitleH = document.getElementById('aboutTitle');
    if (aboutTitleH) {
        if (lang === 'en') aboutTitleH.innerText = aboutTitleH.getAttribute('data-en');
        else aboutTitleH.innerText = aboutTitleH.getAttribute('data-bm');
    }
    
    const contactTitleH = document.getElementById('contactTitle');
    if (contactTitleH) {
        if (lang === 'en') contactTitleH.innerText = contactTitleH.getAttribute('data-en');
        else contactTitleH.innerText = contactTitleH.getAttribute('data-bm');
    }
    
    // Update WhatsApp and Email labels
    const waLabel = document.querySelector('#whatsappLabel');
    if (waLabel) {
        if (lang === 'en') waLabel.innerText = waLabel.getAttribute('data-en');
        else waLabel.innerText = waLabel.getAttribute('data-bm');
    }
    
    const emailLabelSpan = document.querySelector('#emailLabel');
    if (emailLabelSpan) {
        if (lang === 'en') emailLabelSpan.innerText = emailLabelSpan.getAttribute('data-en');
        else emailLabelSpan.innerText = emailLabelSpan.getAttribute('data-bm');
    }
    
    // Update footer
    const footerEl = document.getElementById('footerRights');
    if (footerEl) {
        if (lang === 'en') footerEl.innerText = footerEl.getAttribute('data-en');
        else footerEl.innerText = footerEl.getAttribute('data-bm');
    }
    
    // Update section headings (biodata, education, family, gallery, experience)
    const sections = ['biodata', 'education', 'family', 'gallery', 'experience'];
    sections.forEach(section => {
        const sectionEl = document.getElementById(section);
        if (sectionEl) {
            const heading = sectionEl.querySelector('h2');
            if (heading) {
                const enText = heading.getAttribute('data-en');
                const bmText = heading.getAttribute('data-bm');
                if (lang === 'en' && enText) heading.innerText = enText;
                else if (lang === 'bm' && bmText) heading.innerText = bmText;
            }
        }
    });
}

// Language switcher event listeners
document.getElementById('langEngBtn').addEventListener('click', () => setLanguage('en'));
document.getElementById('langBmBtn').addEventListener('click', () => setLanguage('bm'));

// Initialize with English
setLanguage('en');

// Smooth scrolling for sidebar navigation icons
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        const targetId = this.getAttribute('data-target');
        if (targetId) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// Set bilingual attributes for section headings (ensure they exist)
window.addEventListener('DOMContentLoaded', () => {
    const sectionHeadings = [
        { id: 'biodata', en: '📋 BIODATA', bm: '📋 BIODATA' },
        { id: 'education', en: '🎓 EDUCATION', bm: '🎓 PENDIDIKAN' },
        { id: 'family', en: '👨‍👩‍👧 FAMILY', bm: '👨‍👩‍👧 KELUARGA' },
        { id: 'gallery', en: '🖼️ GALLERY', bm: '🖼️ GALERI' },
        { id: 'experience', en: '💼 EXPERIENCE', bm: '💼 PENGALAMAN' }
    ];
    
    sectionHeadings.forEach(section => {
        const sectionEl = document.getElementById(section.id);
        if (sectionEl) {
            const heading = sectionEl.querySelector('h2');
            if (heading && !heading.getAttribute('data-en')) {
                heading.setAttribute('data-en', section.en);
                heading.setAttribute('data-bm', section.bm);
            }
        }
    });
    
    // Re-apply current language to ensure consistency
    if (langState.current === 'en') setLanguage('en');
    else setLanguage('bm');
});