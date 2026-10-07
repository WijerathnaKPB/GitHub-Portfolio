// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// Initialize Typed.js
new Typed('#typed-text', {
    strings: ['Automation Engineer', 'IoT Developer', 'Robotics Enthusiast'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    cursorChar: '|'
});

// Projects Data
const projects = [
    {
        title: "Automated Water Filling and Heating System with PLC",
        image: "image/System 1.jpeg", 
        link: "https://www.linkedin.com/in/pasanbasuruwijerathna/details/projects/"
    },
    {
        title: "Product Sorting and Identification System",
        image: "image/sorting-system.png", 
        link: "https://www.linkedin.com/in/pasanbasuruwijerathna/details/projects/"
    },
    {
        title: "Pneumatic System for Industrial Application",
        image: "image/Prototype.jpeg", 
        link: "https://www.linkedin.com/in/pasanbasuruwijerathna/details/projects/"
    },
    {
        title: "Water Hyacinth Removal System",
        image: "image/Removal.png",
        link: "https://drive.google.com/drive/folders/1-w7fEC9tXPhh3ehmRrroDo1CjD3eeRS2?usp=sharing"
    },
    {
        title: "Smart Alcohol Detection and Engine Locking",
        image:"image/iot project.jpg",
        link: "https://github.com/Pasanbasuru1124/IOT"
    },
    {
        title: "Automated Apple Packing Warehouse",
        image: "image/System Architecture.png",
        link: "https://drive.google.com/drive/folders/1-PvNId0SBlPO8GaQhO76bYQ0NAiheP0v?usp=sharing"
    }
];

// Initialize projects
function initializeProjects() {
    const projectsGrid = document.getElementById('projectsGrid');

    function createProjectCard(project) {
        return `
            <div class="project-card" data-aos="fade-up">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-bottom">
                    <span class="project-title">${project.title}</span>
                    <a href="${project.link}" class="project-link" target="_blank">view</a>
                </div>
            </div>
        `;
    }

    // Render all projects (Filters removed to match new minimalist design)
    projectsGrid.innerHTML = projects.map(createProjectCard).join('');
    AOS.refresh();
}

// Smooth scrolling for sidebar layout
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').length > 1) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Update active state on sidebar links
                document.querySelectorAll('.sidebar .nav-link').forEach(link => link.classList.remove('active'));
                this.classList.add('active');
                
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Update active sidebar link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.sidebar .nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeProjects);