'use strict'

class Parallax{
    constructor(element){
        this.y=0
        this.element=document.querySelector(element)

        this.Event()
    }

    Event(){
        window.addEventListener('scroll',e=>{
            this.y=this.element.offsetTop
            console.log(this.y)
        })
    }
}