let changeColorBtns = document.querySelectorAll('.change-color-btn');
let fontColorSelect = document.querySelector('#font-color');
let fontSizeInput = document.querySelector('#font-size');
let ul = document.querySelector('ul');
let listStyleRadio = document.querySelectorAll('input[name="list_type"]');
let header = document.querySelector('#top-bar h2');
let underlineCheckbox = document.querySelector('#underline');
let photo = document.querySelector('#photo-box img');

changeColorBtns.forEach( btn => {
    btn.addEventListener('click', () => {
        document.querySelector('body').style.backgroundColor = btn.value;
    });
});

fontColorSelect.addEventListener('change', (event) => {
    document.querySelector('#bottom-bar').style.color = event.target.value;
});

fontSizeInput.addEventListener('keydown', (event) => {
    if(event.key == 'Enter') {
        document.querySelector('#bottom-bar').style.fontSize = fontSizeInput.value + 'px';
    }
});

listStyleRadio.forEach( radio => {
    radio.addEventListener('change', (event) => {
        ul.style.listStyle = event.target.value;
    });
});

underlineCheckbox.addEventListener('change', (event) => {
    if(event.target.checked) {
        header.style.textDecoration = 'underline';
    }else {
        header.style.textDecoration = 'none';
    }
});

photo.addEventListener('mouseenter', () => {
    photo.style.width = '90%';
});

photo.addEventListener('mouseout', () => {
    photo.style.width = '60%';
});