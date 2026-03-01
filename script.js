// 1. Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => preloader.style.display = 'none', 500);
    }, 1500);
});

// 2. Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// 3. Stats Counter Animation
const counters = document.querySelectorAll('.counter');
const speed = 200;

const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target + "+";
            }
        };
        updateCount();
    });
};

// Intersection Observer for Stats
const observerOptions = { threshold: 0.5 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounters();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

observer.observe(document.querySelector('.stats-grid'));

// 4. Gallery Logic
const galleryData = {
    'pre-wedding': [
        'pre1.jpeg',
        'pre2.jpeg',
        'pre3.jpeg',
        'pre4.jpeg',
        'pre5.jpeg',
        'pre6.jpeg',
        'pre7.jpeg',
        'pre8.jpeg',
        'pre9.jpeg',
        'pre10.jpeg',
        'pre11.jpeg',
        'pre13.jpeg',
        'pre14.jpeg',
        'pre15.jpeg',
        'pre16.jpeg',
        'pre17.jpeg',
        'pre18.jpeg',
        'pre19.jpeg',
        


    ],
    'wedding': [
        'wedding.jpeg',
        'wedding1.jpeg',
        'wedding2.jpeg',
        'wedding3.jpeg',
        'wedding4.jpeg',
        'wedding5.jpeg',
        'wedding6.jpeg',
        'wedding7.jpeg',
        'wedding8.jpeg',
        'wedding9.jpeg',
        'wedding10.jpeg',
        'wedding11.jpeg',
        'wedding12.jpeg',
        'wedding13.jpeg',
        'wedding14.jpeg',
        'wedding15.jpeg',
        'wedding16.jpeg',
        'wedding17.jpeg',
        'wedding18.jpeg',
        'wedding19.jpeg',
        'wedding20.jpeg',
        'wedding21.jpeg',
        'wedding22.jpeg',
        'wedding23.jpeg',
        'wedding24.jpeg',
        'wedding25.jpeg',
        'wedding26.jpeg',
        'wedding27.jpeg',
        'wedding28.jpg',
        'wedding29.jpg',
        'wedding30.jpg',
        'wedding31.jpg',
        'wedding32.jpg',
        
    ],
    'ceremony': [
        'ring1.jpeg',
        'ring2.jpeg',
        'ring3.jpeg',
        'ring4.jpeg',
        'ring5.jpeg',
        'ring6.jpeg',
        'ring7.jpeg',
        'ring8.jpeg',
        'ring9.jpeg',
        'ring10.jpeg',
        'ring11.jpeg',
        'ring12.jpeg',
      
        
    ],
       'baby-shower': [
        'baby1.jpeg',
        'baby2.jpeg',
        'baby3.jpeg',
        'baby4.jpeg',
           
        
        
    ],
    // Add more URLs for other categories...
};

function openGallery(category) {
    const folderView = document.getElementById('folder-view');
    const displayView = document.getElementById('gallery-display');
    const grid = document.getElementById('masonry-grid');
    const title = document.getElementById('gallery-title');

    title.innerText = category.replace('-', ' ').toUpperCase();
    grid.innerHTML = ''; // Clear previous

    // Populate placeholder images
    const images = galleryData[category] || galleryData['wedding'];
    images.forEach(src => {
        const div = document.createElement('div');
        div.className = 'masonry-item';
        div.innerHTML = `<img src="${src}" alt="Gallery image">`;
        grid.appendChild(div);
    });

    folderView.classList.add('hidden');
    displayView.classList.remove('hidden');
    window.scrollTo({ top: document.getElementById('gallery').offsetTop - 100 });
}

function closeGallery() {
    document.getElementById('folder-view').classList.remove('hidden');
    document.getElementById('gallery-display').classList.add('hidden');
}

// 5. Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    if (name.length < 2) {
        alert("Please enter a valid name.");
        return;
    }
    
    if (!/^\d{10}$/.test(phone.replace(/\s/g, ''))) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    alert(`Thank you, ${name}! Your request has been sent to Giriraj Studio 2.0.`);
    this.reset();
});

// 6. Reveal Animations on Scroll
const reveal = () => {
    const reveals = document.querySelectorAll('.reveal, .spec-card');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
};

window.addEventListener('scroll', reveal);