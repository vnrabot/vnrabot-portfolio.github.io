const bgm = document.getElementById('bgm');

const infoData = {
    skills: {
        title: "DEVELOPER SKILLS & TOOLS",
        categories: [
            { name: "Game Engines", techs: ["Unity (URP/HDRP)", "Unreal Engine"] },
            { name: "Programming", techs: ["C++", "C#", "JavaScript", "TypeScript"] },
            { name: "Core Expertise", techs: ["AI Programming", "Gameplay Systems", "Physics", "UI Dev"] },
            { name: "Optimization", techs: ["Memory Profiling", "Object Pooling", "Garbage Collection Management", "Draw Call Reduction"] },
            { name: "DevOps & Tools", techs: ["Git", "Perforce", "Jira", "Notion", "Steam Deployment"] }
        ]
    },
    contact: {
        email: "vincentgabriel.rabot@gmail.com",
        facebook: "https://www.facebook.com/vgvrabs",
        linkedin: "https://www.linkedin.com/in/vgvrabs/",
        github: "https://github.com/vnrabot",
    }
};

const projectData = {
    gow: {
        title: "God of War: Sons of Sparta",
        video: "assets/gow.mp4",
        desc: "2D Metroidvania prequel developed with Mega Cat Studios. Explores the Agoge training of Kratos and Deimos in Laconia. First Greek-era entry since 2013, bridging the gap before 'Ascension'",
        stack: ["C#", "Unity", "Gameplay Engineer"]
    },
    fnaf: {
        title: "Five Nights at Freddy's: Into the Pit",
        video: "https://www.youtube.com/embed/2pTYUVB6-zM",
        desc: "Chronological stealth-horror. Solve temporal puzzles across multiple eras while evading a persistent, evolving threat. High-stakes survival mechanics where player choices impact secondary character outcomes.",
        stack: ["DevOps", "Unity", "C#", "Platform Engineer"]
    },
    wq: {
        title: "WrestleQuest",
        video: "https://www.youtube.com/embed/RXQMkQ71F_M",
        desc: "TAG TEAM WITH DESTINY! Pro wrestling and RPG fantasy collide in the ultimate pixel powered adventure. “Macho Man” Randy Savage and tons of other icons offer guidance as you powerbomb your way to glory beyond the ring. This hero’s journey ain’t just an epic quest, it’s WRESTLEQUEST!",
        stack: ["Unity", "C#", "Unity Developer"]
    },
    so: {
        title: "Stressed Out",
        video: "https://www.youtube.com/embed/miwb-MI3W8w",
        desc: "Be a college student in the Philippines during the pandemic. Full of stressful and whacky scenarios, enjoy (or rage) as you go through your days as a full-time student stuck at home!",
        stack: ["Unity", "C#", "Programmer"]
    },
};

window.updateBriefing = function (key)
{
    const data = projectData[key];
    const videoEl = document.getElementById('briefing-video');
    const descEl = document.getElementById('proj-desc');
    const stackEl = document.getElementById('tech-stack');
    const videoContainer = document.querySelector('.video-preview');


    if (!data)
    {
        console.error("Data not found for key:", key);
        return;
    }

    const titleEl = document.getElementById('proj-title');

    if (titleEl)
    {
        titleEl.innerText = data.title;
    }

    if (videoEl)
    {
        videoEl.src = data.video;
    }

    descEl.innerText = data.desc;
    stackEl.innerHTML = data.stack.map(s => `<span class="red-tag">${s}</span>`).join('');

    if (data.video.includes("youtube.com"))
    {
        videoContainer.innerHTML = `
        <iframe id="briefing-video" 
                src="${data.video}?autoplay=1&mute=1&controls=0&modestbranding=1" 
                frameborder="0" 
                allow="autoplay; encrypted-media" 
                allowfullscreen>
        </iframe>
        <div class="video-overlay"></div>`;
    } else
    {
        videoContainer.innerHTML = `
        <video id="briefing-video" autoplay loop muted>
            <source src="${data.video}" type="video/mp4">
        </video>
        <div class="video-overlay"></div>`;
    }
};

const startBGM = () =>
{
    // if (bgm && bgm.paused)
    // {
    //     bgm.volume = 0.1;

    //     bgm.play().then(() =>
    //     {
    //         console.log("BGM started.");
    //     }).catch(err =>
    //     {
    //         console.log("Waiting for user interaction.");
    //     });
    // }
}

window.addEventListener('click', startBGM, { once: true });
window.addEventListener('mouseenter', startBGM, { once: true });

window.showPopup = function (type)
{
    console.log("Mission Triggered: " + type); // This helps us debug
    const overlay = document.getElementById('popup-overlay');
    const content = document.getElementById('popup-content');
    const clickSfx = document.getElementById('click-sfx');

    // if (clickSfx) clickSfx.play().catch(() => { });

    if (overlay) overlay.style.display = 'flex';

    if (type === 'about')
    {
        const contact = infoData.contact;
        content.innerHTML = `
        <h1 class="p5-title">PHANTOM PROFILE</h1>
        <div class="mission-container">
            <div class="intel-pane">
                <h3 id="proj-title">VINCENT GABRIEL V. RABOT</h3>
                <p id="proj-desc">
                Software Engineer operating at the intersection of high-fidelity gameplay and clean architecture. With 3 years of professional experience, I specialize in translating complex mechanics into seamless player experiences. My approach combines the rigor of C++/C# systems with the agility of AI-assisted coding to build gameplay that is both performant and polished. From optimizing memory profiling in Unity to architecting robust AI behaviors, I solve technical puzzles with the precision of a phantom.</p>
                <div class="stack-icons">
                    <span class="red-tag">LOC: PHILIPPINES</span>
                    <span class="red-tag">RANK: MID-LEVEL</span>
                    <span class="red-tag">STATUS: ACTIVE</span>
                </div>
              
                <div class="contact-block">
                    <div class="contact-item">
                        <span class="red-tag">EMAIL</span> 
                        <a href="mailto:${contact.email}">${contact.email}</a>
                    </div>
                    <div class="contact-item">
                        <span class="red-tag">LINKEDIN</span> 
                        <a href="https://${contact.linkedin}" target="_blank">View Profile</a>
                    </div>
                    <div class="contact-item">
                        <span class="red-tag">GITHUB</span> 
                        <a href="https://${contact.github}" target="_blank">View Profile</a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    `;
    }
    else if (type === 'projects')
    {
        content.innerHTML = `
        <h1 class="p5-title">MISSION LOG</h1>
        <div class="mission-container">
            <ul class="mission-list">
                <li onmouseenter="updateBriefing('gow')">God of War: Sons of Sparta</li>
                <li onmouseenter="updateBriefing('fnaf')">Five Nights at Freddy's: Into the Pit</li>
                <li onmouseenter="updateBriefing('wq')">WrestleQuest</li>
                <li onmouseenter="updateBriefing('so')">Stressed Out</li>
            </ul>
            <div class="intel-pane">
                <div class="video-preview" id="video-container">
                    <div class="video-overlay"></div>
                </div>
                <h3 id="proj-title"></h3>
                <p id="proj-desc"></p>
                <div id="tech-stack"></div>
            </div>
        </div>
    `;

        // WAIT FOR 1 FRAME (approx 16ms-50ms)
        setTimeout(() =>
        {
            window.updateBriefing('unity');
        }, 50);

    } else if (type === 'skills')
    {
        const data = infoData.skills;

        let categoriesHtml = data.categories.map(cat => `
        <div class="skill-group">
            <div class="category-header">${cat.name}</div>
            <div class="tag-container">
                ${cat.techs.map(t => `<span class="red-tag">${t}</span>`).join('')}
            </div>
        </div>
    `).join('');

        content.innerHTML = `
        <h1 class="p5-title">${data.title}</h1>
        <div class="mission-container skills-scroll">
            <div class="skills-grid">
                ${categoriesHtml}
            </div>
        </div>
    `;
    };

    window.hidePopup = function ()
    {
        const overlay = document.getElementById('popup-overlay');
        const videoContainer = document.querySelector('.video-preview');
        if (overlay) overlay.style.display = 'none';

        if (videoContainer) videoContainer.innerHTML = "";
    };

    document.querySelectorAll('.mission-list li').forEach(li =>
    {
        li.classList.remove('active-mission');
    })

    if (element)
    {
        element.classList.add('active-mission');
    }

    // Initialize listeners after DOM is loaded
    document.addEventListener('DOMContentLoaded', () =>
    {
        const buttons = document.querySelectorAll('.p5-btn');
        const hoverSfx = document.getElementById('hover-sfx');

        buttons.forEach(btn =>
        {
            btn.addEventListener('mouseenter', () =>
            {
                const bgStyle = btn.getAttribute('data-bg');

                // if (hoverSfx)
                // {
                //     hoverSfx.currentTime = 0;
                //     hoverSfx.play().catch(() => { });
                // }

                document.body.className = '';
                if (bgStyle) document.body.classList.add('bg-' + bgStyle);
            });

            btn.onmouseleave = () =>
            {
                document.body.removeAttribute('class');
            };
        });

    });
}