
const users = [
    {
        available: true,
        rate: 120,
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
        fullName: "Tony Stark",
        position: "AI Systems Engineer",
        companyname: "Stark Industries",
        skills: ["AI", "Robotics", "Embedded Systems", "Cybersecurity", "Cloud Computing", "Data Science", "IoT", "Automation"],
        description: "Genius engineer building intelligent machines, defense tech, and advanced autonomous systems worldwide."
    },
    {
        available: false,
        rate: 95,
        image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
        fullName: "Peter Parker",
        position: "Frontend Developer",
        companyname: "Daily Bugle Tech",
        skills: ["HTML", "CSS", "JavaScript", "React", "Accessibility", "Animations", "Performance Optimization"],
        description: "Creative frontend developer crafting responsive, accessible, and high performance web experiences daily."
    },
    {
        available: true,
        rate: 110,
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
        fullName: "Bruce Wayne",
        position: "Cybersecurity Specialist",
        companyname: "Wayne Enterprises",
        skills: ["Ethical Hacking", "Network Security", "Cryptography", "Threat Analysis", "DevSecOps", "Linux", "Python"],
        description: "Security expert protecting systems from breaches using intelligence, strategy, and advanced tooling."
    },
    {
        available: true,
        rate: 100,
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        fullName: "Natasha Romanoff",
        position: "DevOps Engineer",
        companyname: "S.H.I.E.L.D. Labs",
        skills: ["CI/CD", "Docker", "Kubernetes", "AWS", "Monitoring", "Infrastructure as Code", "Automation"],
        description: "DevOps specialist ensuring scalable infrastructure, automated deployments, and reliable production environments."
    },
    {
        available: false,
        rate: 130,
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
        fullName: "Stephen Strange",
        position: "AR/VR Developer",
        companyname: "Sanctum Labs",
        skills: ["Three.js", "WebGL", "ARCore", "VR Design", "Shaders", "Unity", "3D Math"],
        description: "Immersive experience developer building augmented and virtual worlds using advanced graphics programming."
    },
    {
        available: true,
        rate: 105,
        image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126",
        fullName: "Shuri",
        position: "Full Stack Developer",
        companyname: "Wakanda Tech",
        skills: ["Node.js", "React", "MongoDB", "GraphQL", "TypeScript", "System Design", "API Architecture"],
        description: "Innovative full stack developer designing efficient systems with futuristic technology and clean architecture."
    },
    {
        available: true,
        rate: 90,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        fullName: "Barry Allen",
        position: "Performance Engineer",
        companyname: "Central City Labs",
        skills: ["Performance Tuning", "Caching", "Load Testing", "Optimization", "CDN", "Profiling", "Monitoring"],
        description: "Performance engineer optimizing applications for extreme speed, scalability, and seamless user experience."
    },
    {
        available: false,
        rate: 115,
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
        fullName: "Diana Prince",
        position: "Product Designer",
        companyname: "Themyscira Studios",
        skills: ["UI Design", "UX Research", "Figma", "Prototyping", "Design Systems", "User Testing", "Accessibility"],
        description: "Empathetic product designer creating intuitive interfaces, meaningful flows, and human centered digital products."
    },
    {
        available: true,
        rate: 125,
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
        fullName: "Clark Kent",
        position: "Cloud Architect",
        companyname: "Metropolis Cloud",
        skills: ["AWS", "Azure", "GCP", "Microservices", "Kubernetes", "Scalability", "Distributed Systems"],
        description: "Cloud architect building resilient infrastructure for global scale applications with high availability."
    },
    {
        available: true,
        rate: 85,
        image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
        fullName: "Wade Wilson",
        position: "Backend Developer",
        companyname: "Merc Labs",
        skills: ["Node.js", "Express", "SQL", "REST APIs", "Authentication", "Testing", "Debugging"],
        description: "Backend developer writing clean APIs, handling databases, and ensuring secure server side logic."
    }
];

const main = document.getElementById("cards");

let html = "";

users.forEach(user => {
    html += `
    <div class="card">
      <div class="top">
        <button class="${user.available ? "available" : "unavailable"}">
          ${user.available ? "Available" : "Unavailable"}
        </button>
        <h4>$${user.rate}/hr</h4>
      </div>

      <div class="center">
        <img src="${user.image}" alt="${user.fullName}">
        <h4>${user.fullName}</h4>
        <h5>${user.position}</h5>
        <h6>${user.companyname}</h6>

        <div class="skill">
          ${user.skills.map(skill => `<h4>${skill}</h4>`).join("")}
        </div>

        <p>${user.description}</p>

        <button class="neu-button">View Profile</button>
      </div>
    </div>
  `;
});

main.innerHTML = html;

let body = document.querySelector("body")

body.addEventListener("click",(dats)=>{

    console.log(dats.target.users)
})
