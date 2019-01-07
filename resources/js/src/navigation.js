'use strict'

class Navigation{
    constructor(){
        this.burger=document.querySelector('.header__mobile-hesburger');
        this.mobileNav=document.querySelector('.header__mobile-items');
        

        this.event()
    }

    event(){
        this.burger.addEventListener('click',()=>{
            this.mobileNav.classList.toggle('header__mobile-items--open')
            this.burger.classList.toggle("header__mobile-hesburger--open");
        })
    }


}

new Navigation();