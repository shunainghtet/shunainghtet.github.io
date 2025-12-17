// --- CONFIGURATION: EDIT THIS DATA ---
const portfolioData = {
    name: "Shu Naing Htet", 
    projects: [
        {
            name: "Ecommerce and Inventory Solutions",
            desc: "Developed robust backend solutions for online sales platforms and inventory management systems, focusing on transaction integrity and scale.",
            link: "#",
            status: "Completed"
        },
        {
            name: "Ocean Wave Application (ISP Services)",
            desc: "Backend service API for an ISP, managing user authentication, purchase logic, and delivery of Wi-Fi and internet packages.",
            link: "#",
            status: "Production"
        },
        {
            name: "Vidya Media Platform (Social/Comms)",
            desc: "Real-time backend infrastructure supporting social features: video/audio calls, instant messaging, and high-throughput broadcast channels.",
            link: "#",
            status: "Live Service"
        },
        {
            name: "Lexis Game Application (Ed-Tech)",
            desc: "Educational application backend serving dynamic content (abacus, flashcards, games) and tracking student progress and scores.",
            link: "#",
            status: "Deployed"
        },
        {
            name: "Lead Call Center Portal",
            desc: "Internal portal backend for call center operations, managing lead distribution, agent tracking, and reporting analytics.",
            link: "#",
            status: "Internal Tool"
        },
        {
            name: "Offshore & Internal Project Suite",
            desc: "Executed a variety of projects for overseas clients and internal initiatives, specializing in reliable cross-border API development.",
            link: "#",
            status: "Completed"
        }
    ],
    // MODIFIED EDUCATION DATA
    education: [
        {
            degree: "Bachelor of Science (Computing)",
            institution: "Edinburgh Napier University, UK",
            date: "2015 - 2019",
            desc: "Undergraduate degree focusing on computing principles and software development."
        }
    ],
    experience: [
        {
            role: "Automation Engineer",
            company: "Xtela",
            date: "Nov 2024 - Present",
            desc: "Implemented Docker and CI/CD pipelines for automated deployment on AWS. Focused on infrastructure as code and system reliability."
        },
        {
            role: "Software Engineer",
            company: "Ooredoo Myanmar",
            date: "Oct 2023 - Mar 2024",
            desc: "Developed internal portals and built scalable APIs connecting frontend, mobile apps, and microservices to streamline organizational communication."
        },
        {
            role: "Backend Developer",
            company: "MOC Interactive",
            date: "Jul 2022 - Sep 2023",
            desc: "Created multiple Point-of-Sale (POS) and e-commerce platforms. Designed robust APIs for seamless frontend integration and efficient inventory management."
        },
        {
            role: "Backend Developer",
            company: "Vidya Media",
            date: "Sep 2020 - Jun 2022",
            desc: "Developed and maintained application backend (including mobile APIs). Provided DevOps support, implementing automation and monitoring for system availability."
        },
        {
            role: "Junior Python Developer",
            company: "Nexidea",
            date: "Oct 2019 - Aug 2020",
            desc: "Developed numerous APIs for mobile, web, and AI projects. Contributed to offshore backend infrastructure and prepared training data for AI models."
        }
    ]
};

// --- RENDER LOGIC (No changes needed) ---

// 1. Name and Typing Effect
const nameElement = document.getElementById('name-target');
const nameText = portfolioData.name;

const typeWriter = () => {
    nameElement.innerText = "";
    let i = 0;
    const typingInterval = setInterval(() => {
        if (i < nameText.length) {
            nameElement.innerHTML += nameText.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
        }
    }, 100);
};
window.onload = typeWriter;

// 2. Projects
const projectSection = document.getElementById('projects');
const projectGridContainer = document.createElement('div');
projectGridContainer.className = 'project-grid';

portfolioData.projects.forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <div style="margin-bottom: 10px;">
            <strong style="font-size: 1.1rem; color: var(--string-color)">"${p.name}"</strong>
            <span class="status-badge">${p.status}</span>
        </div>
        <p style="color: var(--text-color); font-size: 0.9rem;">${p.desc}</p>
        <div style="margin-top: 15px;">
            <a href="${p.link}" style="font-size: 0.9rem;">> View Source</a>
        </div>
    `;
    projectGridContainer.appendChild(card);
});

// Append the entire grid container to the projects section
projectSection.appendChild(projectGridContainer);


// 3. Education
const educationContainer = document.getElementById('education');

const renderEducation = () => {
    portfolioData.education.forEach(edu => {
        const item = document.createElement('div');
        item.className = 'timeline-item'; 
        item.innerHTML = `
            <div class="timeline-date">${edu.date}</div>
            <div class="timeline-role">${edu.degree} <span style="color: var(--accent-color)">@ ${edu.institution}</span></div>
            <div class="timeline-desc">${edu.desc}</div>
        `;
        educationContainer.appendChild(item);
    });
};
renderEducation();


// 4. Experience
const expContainer = document.getElementById('experience');
portfolioData.experience.forEach(exp => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.innerHTML = `
        <div class="timeline-date">${exp.date}</div>
        <div class="timeline-role">${exp.role} <span style="color: var(--accent-color)">@ ${exp.company}</span></div>
        <div class="timeline-desc">${exp.desc}</div>
    `;
    expContainer.appendChild(item);
});

// Smooth Scroll Helper (Used by Nav links)
const scrollToId = (id) => {
    document.getElementById(id).scrollIntoView({behavior: 'smooth'});
};