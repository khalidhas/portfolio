// =============================================================
// 1. ARRAYS OF OBJECTS (Store Project Portfolio Data)
// =============================================================
const capstoneProjects = [
    {
        title: "Enterprise Network Automation Core",
        type: "Infrastructure & Web Integration",
        technologies: ["Python", "HTML", "CSS", "Cisco IOS API"],
        image: "https://unsplash.com",
        description: "A centralized custom web platform allowing network engineers to safely configure routing subnets, fetch VLAN metrics, and monitor interface state tables remotely."
    },
    {
        title: "Agritech Information System",
        type: "Front-End Application",
        technologies: ["JavaScript", "HTML5", "CSS Grid"],
        image: "https://unsplash.com",
        description: "An advanced tracking portal built for regional farming initiatives monitoring operational crop stages, daily layer egg records, and monthly net utility expenditures."
    },
    {
        title: "Secure Property Showcase Hub",
        type: "E-Commerce System",
        technologies: ["JavaScript", "DOM Manipulation", "CSS Modals"],
        image: "https://unsplash.com",
        description: "A real estate showcase deploying live conditional workflows that cleanly classify premium land parcels or standard family housing based on asset valuations."
    }
];

// =============================================================
// 2. LOOPS (Display Projects Dynamically in the DOM)
// =============================================================
function renderPortfolioProjects() {
    const projectContainer = document.getElementById("project-container");
    
    // Clear container completely before programmatic loop append
    projectContainer.innerHTML = "";

    // Loop through the data array structures
    capstoneProjects.forEach(project => {
        // Construct unique text technology badges 
        let tagHTML = "";
        project.technologies.forEach(tech => {
            tagHTML += `<span class="tag">${tech}</span>`;
        });

        // Assemble structural grid card element
        const projectCard = document.createElement("div");
        projectCard.className = "project-card";
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-card-info">
                <div class="tags">${tagHTML}</div>
                <h3>${project.title}</h3>
                <p><strong>Focus:</strong> ${project.type}</p>
                <p>${project.description}</p>
            </div>
        `;
        
        // Append child dynamically into DOM grid context
        projectContainer.appendChild(projectCard);
    });
}

// =============================================================
// 3. DOM MANIPULATION (Theme Switching & Show/Hide Controls)
// =============================================================

// Target interactive functional elements
const themeBtn = document.getElementById("theme-btn");
const toggleNavSectionsBtn = document.getElementById("toggle-nav-sections");
const rootHtmlElement = document.documentElement;

// A. Theme Switcher Capability (Light / Dark Configuration Toggle)
themeBtn.addEventListener("click", () => {
    const currentTheme = rootHtmlElement.getAttribute("data-theme");
    
    if (currentTheme === "light") {
        rootHtmlElement.setAttribute("data-theme", "dark");
    } else {
        rootHtmlElement.setAttribute("data-theme", "light");
    }
});

// B. Show/Hide Sections Capability (Toggle Entire About & Skills Page Visibility)
toggleNavSectionsBtn.addEventListener("click", () => {
    const aboutSection = document.getElementById("about");
    const skillsSection = document.getElementById("skills");

    if (aboutSection.style.display === "none") {
        // Show sections smoothly
        aboutSection.style.display = "block";
        skillsSection.style.display = "block";
        toggleNavSectionsBtn.innerText = "Minimize UI";
        toggleNavSectionsBtn.style.background = "#e74c3c";
    } else {
        // Hide sections immediately
        aboutSection.style.display = "none";
        skillsSection.style.display = "none";
        toggleNavSectionsBtn.innerText = "Expand Full UI";
        toggleNavSectionsBtn.style.background = "#2ecc71";
    }
});

// Initialize dynamic project elements on content load
document.addEventListener("DOMContentLoaded", () => {
    renderPortfolioProjects();
});
