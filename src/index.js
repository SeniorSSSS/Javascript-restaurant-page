import { mainpcontentadderf } from './addtextforhp.js';
import { contactpagemaker } from './contactconaddf.js';
import { homepagemaker } from './homeconadderf.js';

//each button should set off adding of stuff & kill other content

const Mainbutton = document.createElement('button');
Mainbutton.textContent = 'Main';
document.body.appendChild(Mainbutton);
Mainbutton.addEventListener('click',mainpcontentadderf);

const Homebutton = document.createElement('button');
Homebutton.textContent = 'Home';
document.body.appendChild(Homebutton);
Homebutton.addEventListener('click',homepagemaker);

const Contactbutton = document.createElement('button');
Contactbutton.textContent = 'Contact';
document.body.appendChild(Contactbutton);
Contactbutton.addEventListener('click',contactpagemaker);


