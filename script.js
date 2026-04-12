const hoverSfx = document.getElementById('hover-sfx');
const clickSfx = document.getElementById('click-sfx');
const overlay = document.getElementById('popup-overlay');
const content = document.getElementById('popup-content');

// 1. Fundamental: Adding Audio to Interactivity
document.querySelectorAll('.p5-btn').forEach(btn =>
{
    btn.addEventListener('mouseenter', () =>
    {
        hoverSfx.currentTime = 0; // Reset sound to start
        hoverSfx.play();
    });
});

// 2. Fundamental: State Switching (Show/Hide)
function showPopup(type)
{
    clickSfx.play();
    overlay.style.display = 'flex';

    if (type === 'projects')
    {
        content.innerHTML = `
            <h1 style="background:black; color:white; display:inline-block; padding:5px 20px;">MISSION LOG</h1>
            <p style="font-size:1.5rem; margin-top:20px;">> Operation: Portfolio Site<br>> Status: In Progress...</p>
        `;
    } else if (type === 'skills')
    {
        content.innerHTML = `
            <h1 style="background:black; color:white; display:inline-block; padding:5px 20px;">STEALTH SKILLS</h1>
            <p style="font-size:1.5rem; margin-top:20px;">C#, Unity, Cybersecurity, Full-Stack Dev.</p>
        `;
    }
}

function hidePopup()
{
    overlay.style.display = 'none';
}

document.querySelectorAll('.p5-btn').forEach(btn =>
{
    // Existing Hover Sound
    btn.addEventListener('mouseenter', () =>
    {
        hoverSfx.currentTime = 0;
        hoverSfx.play();

        // NEW: Get the style from data-bg and apply to body
        const bgStyle = btn.getAttribute('data-bg');
        document.body.classList.add(`bg-${bgStyle}`);
    });

    // NEW: Remove the style when mouse leaves
    btn.addEventListener('mouseleave', () =>
    {
        const bgStyle = btn.getAttribute('data-bg');
        document.body.classList.remove(`bg-${bgStyle}`);
    });
});