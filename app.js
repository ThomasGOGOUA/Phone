const nav  = document.querySelector('.home-button')

nav.addEventListener('click', () => {
    nav.classList.toggle('active')
})

const checks = document.querySelectorAll('.check');
const content = document.querySelector('.box-actiive');
const contentText = document.querySelector('.box-active p span');

const WIFI_MESSAGE = "Vous avez activé le wifi";
const VOLUME_MESSAGE = "Vous avez activé le volume";
const ABSCENCE_MESSAGE = "Vous n'avez pas d'appel en absence";
const CAMERA_MESSAGE = "Vous avez activé la caméra";

for(let i = 0; i< checks.length; i ++)[
    checks[i].addEventListener('change',() => {

        if(checks[0].checked){
            contentText.textContent = WIFI_MESSAGE;
            content.classList.add('act');
            setTimeout(() => {
                content.classList.list.remove('act');
            },2000)
        }
        if(checks[1].checked){
            contentText.textContent = VOLUME_MESSAGE;
            content.classList.add('act');
            setTimeout(() => {
                content.classList.list.remove('act');
            },2000)
        }
        if(checks[2].checked){
            contentText.textContent = ABSCENCE_MESSAGE;
            content.classList.add('act');
            setTimeout(() => {
                content.classList.list.remove('act');
            },2000)
        }
        if(checks[3].checked){
            contentText.textContent = CAMERA_MESSAGE;
            content.classList.add('act');
            setTimeout(() => {
                content.classList.list.remove('act');
            },2000)
        }

    })
]
