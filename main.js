import './style.css';
import AOS from 'aos';
import Typed from 'typed.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

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
        title: "Automated Water Filling and Heating System with PLC (S7-400)",
        category: "Automation",
        image: "image/System 1.jpeg", 
        description: "An automated water filling, heating, and cup dispensing system designed with a Siemens S7-400 PLC. It integrates proximity sensors, pumps, and a conveyor for precise process control, featuring timed heating and real-time status indicators.",
        link: "https://www.linkedin.com/in/pasanbasuruwijerathna/details/projects/",
        technologies: ["Siemens S7-400", "PLC", "IndustrialAutomation", "Sensors"]
    },
    {
        title: "Product Sorting and Identification System",
        category: "Pneumatic",
        image: "image/sorting-system.png", 
        description: "An automated sorting system utilizing a Siemens PLC and pneumatic valves to detect and separate metal objects on a conveyor. It integrates inductive and photoelectric sensors with visual status indicators to improve sorting accuracy and efficiency.",
        link: "https://www.linkedin.com/in/pasanbasuruwijerathna/details/projects/",
        technologies: ["Siemens PLC", "PLC Ladder Logic", "Pneumatic", "Sorting"]
    },
    {
        title: "Design and Creation of a Pneumatic System for Industrial Application",
        category: "Pneumatic",
        image: "image/Prototype.jpeg", 
        description: "An Arduino-controlled pneumatic sorting system featuring dual conveyors, ultrasonic, and IR sensors. It automates the detection, sorting, and ink-marking of boxes by color, showcasing an efficient, cost-effective solution for industrial material handling capable of processing 30-50 boxes per minute.",
        link: "https://www.linkedin.com/in/pasanbasuruwijerathna/details/projects/",
        technologies: ["Arduino UNO", "Pneumatics", "FluidSIM", "Automation"]
    },
    {
        title: "Automated Apple Packing Warehouse Conveyor System",
        category: "Automation",
        image: "image/System Architecture.png",
        description: "An automated packing system utilizing a Xinje PLC to streamline sorting, labeling, and packaging operations. It integrates sensor-based quality control to detect packages and rotten fruit, robotic arms for handling, and comprehensive fault detection for reliable operation.",
        link: "https://drive.google.com/drive/folders/1-PvNId0SBlPO8GaQhO76bYQ0NAiheP0v?usp=sharing",
        technologies: ["Xinje PLC", "Selpro", "Conveyor Systems", "Automation"]
    },
    {
        title: "Water Hyacinth Removal and Waste-to-Energy System",
        category: "IoT",
        image: "image/Removal.png",
        description: "An innovative, solar-powered autonomous machine designed to efficiently remove invasive water hyacinth from water bodies. The system integrates IoT technology via Raspberry Pi for real-time monitoring and SMS alerts, and features a specialized unit that converts the collected aquatic waste into biogas and organic fertilizer.",
        link: "https://drive.google.com/drive/folders/1-w7fEC9tXPhh3ehmRrroDo1CjD3eeRS2?usp=sharing",
        technologies: ["IoT", "Raspberry Pi", "Solar Power", "Biogas Technology"]
    },
    {
        title: "Smart Alcohol Detection and Engine Locking System",
        category: "IoT",
        image:"image/iot project.jpg",
        description: "The Smart Alcohol Detection and Engine Locking System is a solution aimed at preventing drunk driving by integrating cutting-edge technology to ensure road safety. This system combines a user-friendly platform, MEMS Ethanol sensors, GPS tracking, and real-time notifications to address the critical issue of impaired driving.",
        link: "https://github.com/Pasanbasuru1124/IOT",
        technologies: ["ESP32", "Arduino"]
    },
    {
        title: "Automated Industrial Electronic Nose",
        category: "IoT",
        image: "image/electronic-nose.jpg", 
        description: "An automated prototype featuring climate conditioning, dual ESP32 controllers, a multi-sensor array, and embedded machine learning for real-time mycotoxin detection in stored grain.",
        link: "https://github.com/WijerathnaKPB", 
        technologies: ["ESP32", "Edge Impulse", "Sensors", "IoT"]
    },
    {
        title: "CampusSwap",
        category: "Other",
        image: "image/campusswap.png", 
        description: "A peer-to-peer campus marketplace platform designed specifically for university students to exchange and purchase resources.",
        link: "https://github.com/WijerathnaKPB", 
        technologies: ["Web Development", "UI/UX", "Business Strategy"]
    }
];

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Initialize projects
function initializeProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    const categoryBtns = document.querySelectorAll('.category-btn');

    function createProjectCard(project) {
        return `
            <div class="project-card" data-aos="fade-up">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-content">
                    <div class="project-header">
                        <h3>${project.title}</h3>
                        <span class="project-category">${project.category}</span>
                    </div>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `
                            <span class="tech-tag">${tech}</span>
                        `).join('')}
                    </div>
                    <a href="${project.link}" class="project-link" target="_blank">View Project</a>
                </div>
            </div>
        `;
    }

    function renderProjects(category = 'All') {
        const filteredProjects = category === 'All' 
            ? projects 
            : projects.filter(project => project.category === category);
        
        projectsGrid.innerHTML = filteredProjects.map(createProjectCard).join('');
        AOS.refresh();
    }

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProjects(btn.dataset.category);
        });
    });

    renderProjects();
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeProjects);