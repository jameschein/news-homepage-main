document.addEventListener('DOMContentLoaded', ()=> {

    const hamburger = document.querySelector('.hamburger');
    const mainNavbar = document.querySelector('.main-navbar');
    const hamburgerIcon = document.querySelector('img', hamburger);


    const toggleMenu = (e) => {
        
        if(hamburger.classList.contains('hamburger-show')){
            hamburger.classList.remove('hamburger-show')

            hamburgerIcon.src = "assets/images/icon-menu.svg"
         
            // hide the menu
            mainNavbar.style.right = -100 + '%';
            mainNavbar.style.transition = 'right 250ms';

        } else {
            hamburger.classList.add('hamburger-show')

            // change the icon svg
            hamburgerIcon.src = "assets/images/icon-menu-close.svg"
            
            // show the menu
            mainNavbar.style.right = 0;
            mainNavbar.style.transition = 'right 250ms';
        }

        e.preventDefault();
    }

    // set up toggle event
    hamburger.addEventListener('click', toggleMenu)

})