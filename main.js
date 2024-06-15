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
    'https://img.freepik.com/free-photo/green-field-tree-blue-skygreat-as-backgroundweb-banner-generative-ai_1258-152184.jpg?t=st=1718454413~exp=1718458013~hmac=46a959711d9bdf28188abd2468136f8a4b6ff4417c54d30972c3dbc6227cbbb9&w=826', 
    'https://img.freepik.com/premium-photo/landscape-morning-fog-mountains-with-hot-air-balloons-sunrise_1029469-8968.jpg?w=826', 
    'https://img.freepik.com/free-photo/beautiful-scenery-rock-formations-by-sea-queens-bath-kauai-hawaii-sunset_181624-36857.jpg?t=st=1718454281~exp=1718457881~hmac=32f9aa3c1cef1f8bc0784b1206236d4f59a168b10b14e375b009eb5fb41576bb&w=826', 
    'https://img.freepik.com/free-photo/beautiful-shot-tree-savanna-plains-with-blue-sky_181624-21992.jpg?t=st=1718455044~exp=1718458644~hmac=ec5b36bdfe7def9961a4e327edecb994e48886e1dad1ab7cf018a2ac6954d704&w=826', 
    'https://img.freepik.com/premium-photo/sunrise-maasai-mara-kenya-with-silhouette-tree_826551-1487.jpg?w=826', 
    'https://img.freepik.com/free-photo/natural-landscape-with-sunrise_23-2149134291.jpg?t=st=1718455166~exp=1718458766~hmac=d1f7ad72c300918d15b0da30b5789cf0da73a0717e420c041f98488644cf7b8a&w=826',
    'https://img.freepik.com/free-photo/breathtaking-view-ocean-cliffs-covered-with-plants-captured-lombok-indonesia_181624-8408.jpg?t=st=1718455272~exp=1718458872~hmac=273b96aee2834d733af49afe6fd7a68a488c5ccc229d4a13503a70b536aa2b04&w=826',
    'https://img.freepik.com/free-photo/beautiful-aerial-shot-fronalpstock-mountains-switzerland-beautiful-pink-blue-sky_181624-9315.jpg?t=st=1718455334~exp=1718458934~hmac=0a6a38a917492c0903be1a36302b4f996824bfa7f917691d4b0bdbb4aed688c4&w=826',
    'https://img.freepik.com/free-photo/beautiful-shot-snowy-mountains-with-dark-blue-sky_181624-2640.jpg?t=st=1718455476~exp=1718459076~hmac=5664ff5f6adca5bebbf09764d29dd8d55bd15abed9fe4b888ecadfc59665e712&w=826'
];

let captions = [
    'Grassland', 
    'Flying hot air baloons',
    'Rock formation',
    'Savanna plains',
    'Savanna plains at night',
    'Open sky',
    'Ocean and cliffs In Lombok',
    'Fronalpstock mountains in Switzerland',
    'snowy mountains'
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
