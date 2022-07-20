import Resimage from './resimageforhp.jpeg';

//the other module will call this function which will be imported to that page.
export function imageadderfunction() {
//the following code adds the img
    const divthathascontentaddedtoit = document.getElementById('content');
    const myImage = new Image();
    myImage.src = Resimage;
    divthathascontentaddedtoit.appendChild(myImage);
}



