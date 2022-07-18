let body = document.querySelector('body')

let header = document.querySelector('header')

function tuda_syda() {
    header.innerHTML = ''
    header.innerHTML = `
    <a href="../well come/well_come.html" class="p_header">
        Главная
    </a>
    <a href="../my wallets/my_wallets.html" class="p_header">
        Мои кошельки
    </a>
    <a href="../my transactions/my_transactions.html" class="p_header">
        Мои транзакции
    </a>
    <p class="email_header">alexadams@google.com</p>
    <img src="./icon/log-out (1) 1.svg" class="img_header">
    `
}
tuda_syda()