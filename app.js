const images = ['1.jpg', '2.JPG', '3.JPG', '4.JPG'];
const targetImage = document.querySelector('.my_image img');
let i = 1;

targetImage.addEventListener('click', () => {

    targetImage.style.opacity = '0';

    setTimeout(() => {
        if (i === images.length - 1) {
            i = 0;
        }

        targetImage.src = 'images/' + images[i];
        i++;

        targetImage.style.opacity = '1';

    }, 200);

});
// koodis on viga, ta loopib vaid kolme pilti, seega loopib enne viimasele pildile jõudmist?//