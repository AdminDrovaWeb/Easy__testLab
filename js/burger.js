const imgLogo = document.getElementById('imgLogo');
document.querySelector('.header__burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');
    document.querySelector('.header__text').classList.toggle('opened');
})
