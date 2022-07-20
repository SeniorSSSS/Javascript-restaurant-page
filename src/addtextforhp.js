// the following adds style
import './styles.css';

import {  imageadderfunction } from './addimageforhp.js';

function removedivcontent() {
    const divthathascontentaddedtoit = document.getElementById('content');
    while (divthathascontentaddedtoit.firstChild) {
        divthathascontentaddedtoit.removeChild(divthathascontentaddedtoit.lastChild);
    }

}


//thisfunction runs on the selected div and adds text stuff. It also calls the image adder function.
export function mainpcontentadderf() {
    removedivcontent();
    
    const divthathascontentaddedtoit = document.getElementById('content');
    

    //the following code adds the h1
    const h1node = document.createElement("h1");
    divthathascontentaddedtoit.appendChild(h1node);
    h1node.innerText = 'THE BIG BANGING RESTAURANT';
    

    //The following code runs function from another module which adds the image.
    imageadderfunction();


    //the following code adds the p text
    const parnode = document.createElement('p');
    parnode.innerText = "MMM MMM MMM SO GOOD DELICIOUS, THE FOOD EXIQUISITE IT CHANGES THE MOOD OF EVERY DUDE WHO IN IT, ALL CUSTOMERS CONCLUDE THAT THEY WITH IT, ARE YOU PREPARED TO BE SUBDUED AND FORCE FEED THE FOOD MMM MMM MMM OF COURSE YOU ARE ITS DELICIOUS *CHEF KISS*";
    divthathascontentaddedtoit.appendChild(parnode);
    console.log('FUNCTION WAS RUN');
}












