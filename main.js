const galleryContainer = document.querySelector('.gallery-container');
console.log(galleryContainer);

const gallery = document.createElement('div');
gallery.classList = 'gallery';
galleryContainer.appendChild(gallery);
console.log(gallery);

let images = [
    'Grassland-sm.jpg', 
    'Hotairbaloons-sm.jpg', 
    'Rockformation-sm.jpg', 
    'Savannaplanes-sm.jpg', 
    'Savannaplanesnight-sm.jpg', 
    'sky-sm.jpg'];

console.log(images);

window.addEventListener('load', () => {
    images.forEach(image => {
        const img = document.createElement('img');
        img.setAttribute('src', `./Images original/thumbnails/${images[0]}/`);
        gallery.appendChild(img);
        console.log(img);
    })
})

// const imgs = document.querySelectorAll('.gallery img');
// console.log(imgs)

const createLightBox = document.createElement('div');
createLightBox.id = 'lightBox';
document.body.appendChild(createLightBox);

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

createLightBox.addEventListener('click', e => {
    if(e.target !== e.currentTarget) return;
    createLightBox.classList.remove('active');
    
});
