const bgm = document.getElementById('bgm');

window.showPopup = function (type)
{
    const clickSfx = document.getElementById('click-sfx');
    const overlay = document.getElementById('popup-overlay');
    const content = document.getElementById('popup-content');

    clickSfx.play();
    overlay.style.display = 'flex';

    if (type === 'aboutme')
    {
        content.innerHTML = `<h1 style="background:black; color:white; display:inline-block; padding:5px 20px;">PHANTOM THIEF</h1>
                             <p style="font-size:1.5rem; margin-top:20px;">Vincent Rabot. Student, Developer, Rebel.</p>`;
    } else if (type === 'projects')
    {
        content.innerHTML = `<h1 style="background:black; color:white; display:inline-block; padding:5px 20px;">MISSION LOG</h1>
                             <p style="font-size:1.5rem; margin-top:20px;">> Operation: Portfolio Site<br>> Status: In Progress...</p>`;
    } else if (type === 'skills')
    {
        content.innerHTML = `<h1 style="background:black; color:white; display:inline-block; padding:5px 20px;">STEALTH SKILLS</h1>
                             <p style="font-size:1.5rem; margin-top:20px;">C#, Unity, Cybersecurity, Full-Stack Dev.</p>`;
    }
};

window.hidePopup = function ()
{
    document.getElementById('popup-overlay').style.display = 'none';
};

// Initialize listeners after DOM is loaded
document.addEventListener('DOMContentLoaded', () =>
{
    const hoverSfx = document.getElementById('hover-sfx');
    const buttons = document.querySelectorAll('.p5-btn');

    buttons.forEach(btn =>
    {
        btn.addEventListener('mouseenter', () =>
        {
            // Sound
            hoverSfx.currentTime = 0;
            hoverSfx.play();

            bgm.play();

            // Background Effect
            // const bgStyle = btn.getAttribute('data-bg');
            document.body.className = '';
            document.body.classList.add('bg-' + style);
        });

        btn.addEventListener('mouseleave', () =>
        {
            const bgStyle = btn.getAttribute('data-bg');
            if (bgStyle) document.body.classList.remove(`bg-${bgStyle}`);
        });
    });
});