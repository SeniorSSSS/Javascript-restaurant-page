function imageadderfunction2() {
    //the following code adds the img
    alert ('pretend contact image added');
    }

function removedivcontent() {
    const divthathascontentaddedtoit = document.getElementById('content');
    while (divthathascontentaddedtoit.firstChild) {
        divthathascontentaddedtoit.removeChild(divthathascontentaddedtoit.lastChild);
    }

}

export function contactpagemaker(){
        removedivcontent();

        const divthathascontentaddedtoit = document.getElementById('content');
        
        //the following code adds the h1
        const h1node = document.createElement("h1");
        divthathascontentaddedtoit.appendChild(h1node);
        h1node.innerText = 'CONTACTMEEEE';
        
        //The following code runs function from another module which adds the image.
        imageadderfunction2();
    
    
        //the following code adds the p text
        const parnode = document.createElement('p');
        parnode.innerText = "CONTACT MEEEE*";
        divthathascontentaddedtoit.appendChild(parnode);
        console.log('Contactme fUNCTION WAS RUN');
    }
    
