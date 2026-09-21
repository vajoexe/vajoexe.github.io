const container = document.querySelector(".container");

const noise = document.createElement("canvas");
const ctx = noise.getContext("2d");

noise.style.position = "absolute";
noise.style.inset = "0";
noise.style.width = "100%";
noise.style.height = "100%";
noise.style.pointerEvents = "none";
noise.style.zIndex = "0";

container.appendChild(noise);

function resize() {
    noise.width = container.clientWidth;
    noise.height = container.clientHeight;
}

function draw() {
    let lastFrame = 0;
    const frameInterval = 1000 / 45;

    function draw(timestamp) {
        requestAnimationFrame(draw);

        if (timestamp - lastFrame < frameInterval) {
            return;
        }

        lastFrame = timestamp;

        const image = ctx.createImageData(noise.width, noise.height);
        const data = image.data;

        for (let i = 0; i < data.length; i += 4) {
            const value = Math.random() * 255;

            data[i] = value;
            data[i + 1] = value;
            data[i + 2] = value;
            data[i + 3] = 10;
        }

        ctx.putImageData(image, 0, 0);
    }

    requestAnimationFrame(draw);
}

window.addEventListener("resize", resize);

resize();
draw();
