const toggle = document.querySelector('.bars');
const burger = document.querySelector('ul');
const lists = document.querySelector('a');
const body = document.querySelector('body');

toggle.addEventListener('click', () => {
    burger.classList.toggle('show')
    console.log (toggle)
})


const form = document.querySelector('form');
const err = document.querySelector('.errMessage');
const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    err.textContent = "";

    const text = form.elements['text'].value;
    const email = form.elements['email'].value;
    const num = form.elements['tel'].value;

    try {
        if(text == '') throw "Please complete the field";
        if(email == '') throw "Please complete the field";
        if(num == '') throw "Please complete the field";

    } catch (error) {
        err.textContent += error
    }
});

const inputs = document.querySelectorAll('input');

inputs.forEach((item) => {
    item.addEventListener('focusin', (e) => {
        e.preventDefault();
        var current = e.currentTarget.classList.add('redBorder');
        current;
    })
});

inputs.forEach((items) => {
    items.addEventListener('input', (item) => {
        item.preventDefault();
        err.textContent = ""
    })
})


inputs.forEach((item) => {
    item.addEventListener('focusout', (e) => {
        e.preventDefault();
        var current = e.currentTarget.classList.remove('redBorder');
        current;
    })
});