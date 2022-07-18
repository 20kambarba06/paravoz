let body = document.querySelector('body')

let form = document.forms.add_wallet
let inputs = document.querySelectorAll('input')
let post = document.querySelector('.go')

let one = document.querySelector('.one')
let two = document.querySelector('.two')
let three = document.querySelector('.three')
let four = document.querySelector('.four')

let pattern = {
    name: /^[a-z ,.'-]+$/i,
    currency: /^[a-z ,.'-]+$/i,
}

function validate(field, regex) {
    if (regex.test(field.value)) {
        field.classList.add('valid');
        field.classList.remove('invalid');
    } else {
        field.classList.add('invalid');
        field.classList.remove('valid');
    }
    if (input.value.length === 0) {
        input.classList.add('invalid')
    }
}

inputs.forEach((input) => {
    input.onkeyup = () => {
        validate(input, pattern[input.name]);
    };
});

post.onclick = () => {
    //    inputs.forEach(inp => {
    //     if(inp.classList.contains('invalid') || inp.value.length === 0){

    //         alert('error')
    //     } else{
    //         dates()
    //     }
    //    })
    if (one.classList.contains('invalid') || one.value.lenght === 0 || two.classList.contains('invalid') || two.value.lenght === 0) {
        alert('error')
    } else {
        dates()
    }
}

function dates() {

    form.onsubmit = (event) => {
        event.preventDefault();

        let user = {};

        let fm = new FormData(form);

        fm.forEach((value, key) => {
            user[key] = value;
        });

        console.log(user);

    };
}
