export function menu() {
contentDiv = document.querySelector('content');

contentDiv.replaceChildren();

const heading = document.createElement('h1');
heading.textContent = 'Welcome to our coding restaurant and lounge';
heading.classList.add('landing-title');
contentDiv.appendChild(heading);

const fish = document.createElement('img');
fish.classList.add('image');
fish.src = '';
fish.alt = 'Image of fish meal';
contentDiv.appendChild(fish);
const fishParagraf = document.createElement('p');
fishParagraf.textContent = 'Seabass with vegetables'
fishParagraf.classList.add('menu-txt');
contentDiv.appendChild(fish);

const octopus = document.createElement('img');
octopus.classList.add('image');
octopus.src = '';
octopus.alt = 'Image of octopus meal';
contentDiv.appendChild(octopus);
const octopusParagraf = document.createElement('p');
octopusParagraf.textContent = 'Octopus salad';
octopusParagraf.classList.add('menu-txt');
contentDiv.appendChild(octopusParagraf);

const seafood = document.createElement('img');
seafood.classList.add('image');
seafood.src = '';
seafood.alt = 'Image of seafood meal';
contentDiv.appendChild(seafood);
const seafoodParagraf = document.createElement('p');
seafoodParagraf.textContent = 'Octopus salad';
seafoodParagraf.classList.add('menu-txt');
contentDiv.appendChild(seafoodParagraf);

}




