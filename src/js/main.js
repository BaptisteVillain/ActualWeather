const sidebar_button = document.querySelectorAll('.button-sidebar')
const sidebar        = document.querySelector('.sidebar-positions')

for (var i = 0; i < sidebar_button.length; i++) {
    sidebar_button[i].addEventListener('click',function(){
        console.log('HELLO')
        sidebar.classList.toggle('active')
        sidebar_button[1].classList.toggle('active')
    })
}