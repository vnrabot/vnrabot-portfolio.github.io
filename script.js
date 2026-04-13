const bgm = document.getElementById('bgm');

const startBGM = () =>
{
    if (bgm && bgm.paused)
    {
        bgm.volume = 0.1;

        bgm.play().then(() =>
        {
            console.log("BGM started.");
        }).catch(err =>
        {
            console.log("Waiting for user interaction.");
        });
    }
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
        content.innerHTML = `<h1 class="popup-title">PHANTOM THIEF</h1><p>Vincent Rabot...</p>`;
    } else if (type === 'projects')
    {
        content.innerHTML = `<h1 class="popup-title">MISSION LOG</h1><p>Operation: Portfolio...</p>`;
    } else if (type === 'skills')
    {
        content.innerHTML = `<h1 class="popup-title">STEALTH SKILLS</h1><p>C#, Unity, Dev...</p>`;
    }
};

window.hidePopup = function ()
{
    const overlay = document.getElementById('popup-overlay');
    if (overlay) overlay.style.display = 'none';
};

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
    });

    btn.addEventListener('mouseleave', () =>
    {
        document.body.className = '';
    });
});