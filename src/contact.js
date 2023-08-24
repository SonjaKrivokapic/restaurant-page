export function contact() {
    contentDiv = document.querySelector('content');

    contentDiv.replaceChildren();
    
    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to our coding restaurant and lounge';
    heading.classList.add('landing-title');
    contentDiv.appendChild(heading);
    
    const phoneImage = document.createElement('img');
    phoneImage.classList.add('image');
    phoneImage.src = '';
    phoneImage.alt = 'Image of phone';
    contentDiv.appendChild(phoneImage);
    const phonePar = document.createElement('p');
    phonePar.textContent = "Call us!"
    phonePar.classList.add('contact-txt');
    contentDiv.appendChild(phonePar);
    
    const emailImg = document.createElement('img');
    emailImg.classList.add('image');
    emailImg.src = '';
    emailImg.alt = 'Image of email';
    contentDiv.appendChild(emailImg);
    
    const instagram = document.createElement('img');
    instagram.classList.add('image');
    instagram.src = '';
    instagram.alt = 'insta logo';
    contentDiv.appendChild(instagram);
    const instagramPar = document.createElement('p');
    instagramPar.textContent = 'Find us on instagram';
    instagramPar.classList.add('contact-txt');
    contentDiv.appendChild(instagramPar);

}