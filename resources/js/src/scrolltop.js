'use strict'

class Scroll{
    constructor(){
        this.el=document.querySelector('.scroll')

        this.event()
        window.addEventListener('scroll',e=>{
            this.scroll()
            
        })
    }

    event(){
        this.el.addEventListener('click',()=>{
            window.scroll({
                top:0,
                behavior:'smooth'
            })
        })
    }

    scroll(){
        
        if(document.documentElement.scrollTop>250){

            this.el.classList.add('scroll--open');
            
        }else{
            this.el.classList.remove('scroll--open');
        }
    }
}

new Scroll()