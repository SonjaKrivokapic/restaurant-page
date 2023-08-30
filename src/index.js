import  { pageLoad }  from './pageLoad.js';
import { menu } from '.menu.js';
import { contact } from '.contact.js';

pageLoad();

let tabSwitchingModule = (function(){
    const homeTab = document.querySelector('.home');
    homeTab.addEventListener('click', pageLoad);

    const menuTab = document.querySelector('.menu');
    menuTab.addEventListener('click', menu);

    const contactTab = document.querySelector('.contact');
    contactTab.addEventListener('click', contact);

})();


// import * as module from './pageLoad.js';
// module.pageLoad();

