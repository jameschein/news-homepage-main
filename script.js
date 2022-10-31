document.addEventListener('DOMContentLoaded', ()=> {

    const hamburger = document.querySelector('.hamburger');
    const mainNavbar = document.querySelector('.main-navbar');


    const toggleMenu = (e) => {
        
        if(hamburger.classList.contains('hamburger-show')){
            hamburger.classList.remove('hamburger-show')
            mainNavbar.classList.remove('main-navbar-show')

            // hide the menu
            mainNavbar.style.right = -100 + '%';
            mainNavbar.style.transition = 'right 250ms';

        } else {
            hamburger.classList.add('hamburger-show')
            mainNavbar.classList.add('main-navbar-show')
            
            // show the menu
            mainNavbar.style.right = 0;
            mainNavbar.style.transition = 'right 250ms';
            

        }

        e.preventDefault();
    }

    hamburger.addEventListener('click', toggleMenu)

})