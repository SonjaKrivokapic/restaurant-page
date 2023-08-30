export function pageLoad() {
    const contentDiv = document.querySelector('#content');
    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to our restaurant';
    heading.classList.add('landing-title');
    contentDiv.appendChild(heading);

    const image = document.createElement('img');
    image.src = 'https://marketplace.canva.com/EAESMsqG9rI/3/0/1600w/canva-grey-%26-green-elegant-minimal-good-taste-food-restaurant-logo-jeSR74GRMC8.jpg';
    image.alt = 'Image of the restaurant';
    image.style = ('max-width: 300px');
    contentDiv.appendChild(image);

    const p1 = document.createElement('p');
    p1.textContent = 'Come and taste the pure pleasure!';
    p1.classList.add('p');
    contentDiv.appendChild(p1);

}

