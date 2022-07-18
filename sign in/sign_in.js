let body = document.querySelector('body')

let form = document.forms.sign_in
let inputs = document.querySelectorAll('input')
let post = document.querySelector('.go')

let one = document.querySelector('.one')
let two = document.querySelector('.two')

let pattern = {
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
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
        let data = JSON.parse(localStorage.getItem('user'))

        if (user.email === data.email || user.password === data.password) {
            window.location.href = '../well come/well_come.html'
        } else {
            alert('damoy idi eee')
        }
    };
}
