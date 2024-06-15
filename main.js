const galleryContainer = document.querySelector('.gallery-container');
console.log(galleryContainer);

const gallery = document.createElement('div');
gallery.classList = 'gallery';
galleryContainer.appendChild(gallery);
console.log(gallery);

let images = [
    './Images original/thumbnails/Grassland-sm.jpg', 
    './Images original/thumbnails/Hotairbaloons-sm.jpg', 
    './Images original/thumbnails/Rockformation-sm.jpg', 
    './Images original/thumbnails/Savannaplanes-sm.jpg', 
    './Images original/thumbnails/Savannaplanesnight-sm.jpg', 
    './Images original/thumbnails/sky-sm.jpg'];

console.log(images);


images.forEach(image => {
    const img = document.createElement('img');
    img.setAttribute('src', `${image}`);
    gallery.appendChild(img);
    console.log(img);
})


const imgs = document.querySelectorAll('.gallery img');
console.log(imgs)

imgs.forEach(image => {
    image.addEventListener('click', () => {
        createLightBox.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src;
        createLightBox.appendChild(img);
        img.style.width = '500px';
        img.style.border = '1px solid white';
        img.style.borderRadius = '8px';
        img.style.padding = '4px';
    });
});

const createLightBox = document.createElement('div');
createLightBox.id = 'lightBox';
document.body.appendChild(createLightBox);

createLightBox.addEventListener('click', e => {
    if(e.target !== e.currentTarget) return;
    createLightBox.classList.remove('active');
    
});
