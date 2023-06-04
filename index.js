// icon to toggle nav bar 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};


// icon to remove nav bar 
 menuIcon.classList.remove('fa-times');
 navbar.classList.remove('active');


 