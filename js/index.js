const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1-item-1": "DOM ",
    "h1-item-2": "Is ",
    "h1-item-3": "Awesome ",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address-item-1" : "123 Way 456 Street",
    "address-item-2" : "Somewhere, Usa",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navMain = document.querySelector('header nav');
const navTag = document.querySelectorAll('header nav a');
const servicesLink = navTag[0];
const productLink = navTag[1];
const visionLink = navTag[2];
const featuresLink = navTag[3];
const aboutLink = navTag[4];
const contactLink = navTag[5];

servicesLink.textContent = siteContent['nav']['nav-item-1'];
productLink.textContent = siteContent['nav']['nav-item-2'];
visionLink.textContent = siteContent['nav']['nav-item-3'];
featuresLink.textContent = siteContent['nav']['nav-item-4'];
aboutLink.textContent = siteContent['nav']['nav-item-5'];
contactLink.textContent = siteContent['nav']['nav-item-6'];

const mainHeading = document.querySelector('.cta-text h1');
const h1Span1 = document.createElement('span');
const h1Span2 = document.createElement('span');
const h1Span3 = document.createElement('span');
const startButton = document.querySelector('.cta-text button');
const mainImage = document.querySelector('#cta-img');

mainHeading.appendChild(h1Span1);
mainHeading.appendChild(h1Span2);
mainHeading.appendChild(h1Span3);

h1Span1.textContent = siteContent['cta']['h1-item-1'];
h1Span2.textContent = siteContent['cta']['h1-item-2'];
h1Span3.textContent = siteContent['cta']['h1-item-3'];
startButton.textContent = siteContent.cta.button;
mainImage.src = siteContent.cta["img-src"];

mainHeading.style.display = 'flex';
mainHeading.style.flexDirection = 'column';

const contentHeading = document.querySelectorAll('.text-content h4');
const contentText = document.querySelectorAll('.text-content p');
const middleImage = document.querySelector('#middle-img');
const featuresHeading = contentHeading[0];
const featuresContent = contentText[0];
const aboutHeading = contentHeading[1];
const aboutContent = contentText[1];
const servicesHeading = contentHeading[2];
const servicesContent = contentText[2];
const productHeading = contentHeading[3];
const productContent = contentText[3];
const visionHeading = contentHeading[4];
const visionContemt = contentText[4];

featuresHeading.textContent = siteContent['main-content']['features-h4'];
featuresContent.textContent = siteContent['main-content']['features-content'];
aboutHeading.textContent = siteContent['main-content']['about-h4'];
aboutContent.textContent = siteContent['main-content']['about-content'];
middleImage.src = siteContent['main-content']['middle-img-src'];
servicesHeading.textContent = siteContent['main-content']['services-h4'];
servicesContent.textContent = siteContent['main-content']['services-content'];
productHeading.textContent = siteContent['main-content']['product-h4'];
productContent.textContent = siteContent['main-content']['product-content'];
visionHeading.textContent = siteContent['main-content']['vision-h4'];
visionContemt.textContent = siteContent['main-content']['vision-content'];

const contactHeading = document.querySelector('.contact h4');
const contactParagraph = document.querySelectorAll('.contact p');
const addressContact = contactParagraph[0];
const addressLineOne = document.createElement('span');
const addressLineBreak = document.createElement('br');
const addressLineTwo = document.createElement('span');
const phoneContact = contactParagraph[1];
const emailContact = contactParagraph[2];

addressContact.appendChild(addressLineOne);
addressContact.appendChild(addressLineBreak);
addressContact.appendChild(addressLineTwo)

contactHeading.textContent = siteContent.contact['contact-h4'];
addressLineOne.textContent = siteContent.contact['address-item-1'];
addressLineTwo.textContent = siteContent.contact['address-item-2'];
phoneContact.textContent = siteContent.contact.phone;
emailContact.textContent = siteContent.contact.email;

const copyrightText = document.querySelector('footer p');
copyrightText.textContent = siteContent.footer.copyright;

//Taskv3 start
navTag.forEach(anchor => anchor.style.color = 'green');
const goLink = document.createElement('a');
const buzzLink = document.createElement('a');

goLink.textContent = 'Go Home';
buzzLink.textContent = 'Buzz Off';

navMain.prepend(goLink);
navMain.appendChild(buzzLink);

const newNavTag = document.querySelectorAll('header nav a');
newNavTag.forEach(anchor => anchor.style.color = 'red');
//Task 3 End

//Stretch start
const breakButton = document.createElement('button');
breakButton.textContent = 'Break it';
document.querySelector('.cta-text').appendChild(breakButton);

breakButton.addEventListener('mouseenter', (event) => {
  event.target.textContent = 'Just Do it';
  startButton.textContent = 'Bad idea';
  event.stopPropagation();
})

breakButton.addEventListener('mouseleave', (event) => {
  event.target.textContent = 'Break it';
  startButton.textContent = siteContent.cta.button;
  event.stopPropagation();
})

breakButton.addEventListener('click', (event) => {
  newNavTag.forEach(anchor => anchor.style.color = 'blue');
  newNavTag.forEach(anchor => anchor.textContent = 'Bad idea');
  logo.style.display = 'none';
})
//Stretch end