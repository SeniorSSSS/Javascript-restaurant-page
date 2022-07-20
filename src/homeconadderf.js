function imageadderfunction3() {
    //the following code adds the img
    alert ('pretendhomepic added');
    }

function removedivcontent() {
    const divthathascontentaddedtoit = document.getElementById('content');
    while (divthathascontentaddedtoit.firstChild) {
        divthathascontentaddedtoit.removeChild(divthathascontentaddedtoit.lastChild);
    }

}

export function homepagemaker(){
        removedivcontent();

        const divthathascontentaddedtoit = document.getElementById('content');
        
        //the following code adds the h1
        const h1node = document.createElement("h1");
        divthathascontentaddedtoit.appendChild(h1node);
        h1node.innerText = 'swwweeeetthome';
        
        //The following code runs function from another module which adds the image.
        imageadderfunction3();
    
    
        //the following code adds the p text
        const parnode = document.createElement('p');
        parnode.innerText = "swweeet treat beat seat heat on the sccrreeeet";
        divthathascontentaddedtoit.appendChild(parnode);
        console.log('Contactme fUNCTION WAS RUN');
    }
    