const galleryContainer = document.querySelector('.gallery-container');
// console.log(galleryContainer);

const gallery = document.createElement('div');
gallery.classList = 'gallery';
galleryContainer.appendChild(gallery);
// console.log(gallery);

/* Previous and Next buttons */
const prev = document.createElement('img');
prev.src = "./icons/prev.png";
prev.setAttribute('id', 'prev');

const next = document.createElement('img');
next.src = "./icons/next.png";
next.setAttribute('id', 'next');

document.body.appendChild(prev);
document.body.appendChild(next);


let images = [
    './Images original/thumbnails/Grassland-sm.jpg', 
    './Images original/thumbnails/Hotairbaloons-sm.jpg', 
    './Images original/thumbnails/Rockformation-sm.jpg', 
    './Images original/thumbnails/Savannaplanes-sm.jpg', 
    './Images original/thumbnails/Savannaplanesnight-sm.jpg', 
    './Images original/thumbnails/sky-sm.jpg'];

let captions = [
    'Grassland', 
    'Flying hot air baloons',
    'Rock formation',
    'Savanna plains',
    'Savanna plains at night',
    'Open sky'
];

// console.log(images);


images.forEach((image, i) => {
    const img = document.createElement('img');
    img.setAttribute('src', `${image}`);
    img.setAttribute('alt', `${captions[i]}`)
    gallery.appendChild(img);
    // console.log(img);
})


const imgs = document.querySelectorAll('.gallery img');
// console.log(imgs)

imgs.forEach((image, index) => {
    image.addEventListener('click', () => {
        createLightBox.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src;
        // console.log(index);
        while(createLightBox.firstChild){
            createLightBox.removeChild(createLightBox.firstChild);
        }
        prev.style.display = 'flex';
        next.style.display = 'flex';
        createLightBox.appendChild(img);
        img.style.width = '600px';
        img.style.border = '1px solid white';
        img.style.borderRadius = '8px';
        img.style.padding = '4px';

        const p = document.createElement('p');
        p.textContent = captions[index];
        console.log(p.textContent);
        p.style.position = 'absolute';
        p.style.zIndex = '30000';
        p.style.bottom = '100px';
        p.style.left = '5rem';
        p.style.color = 'white';
        p.style.fontFamily = 'Poppins';
        p.style.backgroundColor = 'transparent';
        createLightBox.appendChild(p);

        getIndex(index);
    });
});

let imgIndex = 0;
function getIndex(index){
    imgIndex = index;
    // console.log(imgIndex);
}
getIndex()


const createLightBox = document.createElement('div');
createLightBox.id = 'lightBox';
document.body.appendChild(createLightBox);

createLightBox.addEventListener('click', e => {
    if(e.target !== e.currentTarget) return;
    createLightBox.classList.remove('active');
    prev.style.display = 'none';
    next.style.display = 'none';
});

prev.addEventListener('click', e => {
    imgIndex = imgIndex - 1;
    if(imgIndex >= 0){
        const img = document.createElement('img');
        img.src = images[imgIndex];
        img.style.width = '600px';
        img.style.border = '1px solid white';
        img.style.borderRadius = '8px';
        img.style.padding = '4px';

        while(createLightBox.firstChild){
            createLightBox.removeChild(createLightBox.firstChild);
        }
        createLightBox.appendChild(img);
        console.log(imgs[imgIndex].src);

        const p = document.createElement('p');
        p.textContent = captions[imgIndex];
        console.log(p.textContent);
        p.style.position = 'absolute';
        p.style.zIndex = '30000';
        p.style.bottom = '100px';
        p.style.left = '5rem';
        p.style.color = 'white';
        p.style.fontFamily = 'Poppins';
        p.style.backgroundColor = 'transparent';
        createLightBox.appendChild(p);

    }else{
        imgIndex = images.length -1;
        const img = document.createElement('img');
        img.src = images[imgIndex];
        img.style.width = '600px';
        img.style.border = '1px solid white';
        img.style.borderRadius = '8px';
        img.style.padding = '4px';
        
        while(createLightBox.firstChild){
            createLightBox.removeChild(createLightBox.firstChild);
        }
        createLightBox.appendChild(img);
        console.log(imgIndex, imgs[imgIndex].src);

        const p = document.createElement('p');
        p.textContent = captions[imgIndex];
        console.log(p.textContent);
        p.style.position = 'absolute';
        p.style.zIndex = '30000';
        p.style.bottom = '100px';
        p.style.left = '5rem';
        p.style.color = 'white';
        p.style.fontFamily = 'Poppins';
        p.style.backgroundColor = 'transparent';
        createLightBox.appendChild(p);
    }

})


next.addEventListener('click', () => {
    imgIndex += 1;
    console.log('Image index after click: ', imgIndex);
    console.log('Length of images: ', images.length-1);
    if(imgIndex <= images.length-1){
        const img = document.createElement('img');
        img.src = images[imgIndex];
        img.style.width = '600px';
        img.style.border = '1px solid white';
        img.style.borderRadius = '8px';
        img.style.padding = '4px';

        while(createLightBox.firstChild){
            createLightBox.removeChild(createLightBox.firstChild);
        }
        createLightBox.appendChild(img);

        const p = document.createElement('p');
        p.textContent = captions[imgIndex];
        console.log(p.textContent);
        p.style.position = 'absolute';
        p.style.zIndex = '30000';
        p.style.bottom = '100px';
        p.style.left = '5rem';
        p.style.color = 'white';
        p.style.fontFamily = 'Poppins';
        p.style.backgroundColor = 'transparent';
        createLightBox.appendChild(p);
    }
    else{
        imgIndex = 0;
        const img = document.createElement('img');
        img.src = images[imgIndex];
        img.style.width = '600px';
        img.style.border = '1px solid white';
        img.style.borderRadius = '8px';
        img.style.padding = '4px';

        while(createLightBox.firstChild){
            createLightBox.removeChild(createLightBox.firstChild);
        }
        createLightBox.appendChild(img);

        const p = document.createElement('p');
        p.textContent = captions[imgIndex];
        console.log(p.textContent);
        p.style.position = 'absolute';
        p.style.zIndex = '30000';
        p.style.bottom = '100px';
        p.style.left = '5rem';
        p.style.color = 'white';
        p.style.fontFamily = 'Poppins';
        p.style.backgroundColor = 'transparent';
        createLightBox.appendChild(p);
    }
    
})
