window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");    
    const pads = document.querySelectorAll(".pads div")
    const visual = document.querySelector(".visual");
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#6860d3",
        "#60d3b6",
    ];
    //Lets get going with the sound here
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });

    //create a function to pop bubbles

    const createBubbles = (index) => {
        const bubble = document.createElement('div');
        const bullet = document.createElement('img');

        visual.appendChild(bubble);
        visual.appendChild(bullet);

        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend', function () {
            visual.removeChild(this);
        });
        
        
        bullet.setAttribute('src', './images/bullets.png');
        bullet.style.animation = "shoot 1s ease";
        bullet.addEventListener('animationend', function () {
            visual.removeChild(this);
            
        });

    };

});