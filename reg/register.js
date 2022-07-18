let body = document.querySelector('body')

let form = document.forms.register
let inputs = document.querySelectorAll('input')
let post = document.querySelector('.go')

let one = document.querySelector('.one')
let two = document.querySelector('.two')
let three = document.querySelector('.three')
let four = document.querySelector('.four')

let pattern = {
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    name: /^[a-z ,.'-]+$/i,
    surname: /^[a-z ,.'-]+$/i,
    password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
}

function validate(field, regex) {
    if (regex.test(field.value)) {
        field.classList.add('valid');
        field.classList.remove('invalid');
    } else {
        field.classList.add('invalid');
        field.classList.remove('valid');
    }
}

inputs.forEach((input) => {
    input.onkeyup = () => {
        validate(input, pattern[input.name]);
    };
    if (input.value.length === 0) {
        input.classList.add('invalid')
    }
});

post.onclick = () => {
    //    inputs.forEach(inp => {
    //     if(inp.classList.contains('invalid') || inp.value.length === 0){

    //         alert('error')
    //     } else{
    //         dates()
    //     }
    //    })
    if (one.classList.contains('invalid') || one.value.lenght === 0 || two.classList.contains('invalid') || two.value.lenght === 0 || three.classList.contains('invalid') || three.value.lenght === 0 || four.classList.contains('invalid') || four.value.lenght === 0) {
        alert('error')
    } else {
        dates()
    }
}

function dates() {

    form.onsubmit = (event) => {
        event.preventDefault();

        let user_one = {};

        let fm = new FormData(form);

        fm.forEach((value, key) => {
            user_one[key] = value;
        });

        console.log(user_one);
        localStorage.setItem('user', JSON.stringify(user_one))
        window.location.href = '../sign in/sign_in.html'

    };
}

function perehod() {
    let data = JSON.parse(localStorage.getItem('user'))
    console.log(data);

    if (data >= 0) {
        window.location.href = '../reg/register.html'
    } else {
        window.location.href = '../sign in/sign_in.html'
    }
}
perehod()