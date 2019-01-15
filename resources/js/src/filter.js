'use strict'

class Filter{
    constructor(){
        this.buttons=document.querySelectorAll('.category__button')
        this.movies=document.querySelectorAll('.category__movies-container')
        this.images=document.querySelectorAll('.category__movie-poster')

        //show now playing movies by default 
        this.hideMovies()

        //Filter the movies on click
        this.filterMovies()

        //redirect the page on click
        this.redirect()
        
    }

    filterMovies(){
        this.buttons.forEach(button => {
            button.addEventListener('click',(e)=>{
                this.toggleActive(button)
                let category=button.getAttribute('data-id')
                this.movies.forEach(movie => {
                    if(movie.getAttribute('data-id')===category){
                        if(movie.classList.contains('category__movies-container--hide')){
                            movie.classList.remove('category__movies-container--hide')
                        }
                    }else{
                        if(!movie.classList.contains('category__movies-container--hide')){
                            movie.classList.add('category__movies-container--hide')
                        } 
                    }
                });
            })
        });
        
    }

    toggleActive(button){
        this.buttons.forEach(btn => {
            
            if(btn===button){
                btn.classList.add('category__button--active')
            }else{
                btn.classList.remove('category__button--active')
            }
        });
    }

    hideMovies(){
        this.movies.forEach(movie => {
            let category=movie.getAttribute('data-id')
           
            if(category!=='now_playing'){
                movie.classList.add('category__movies-container--hide')
            }
        });
    }

    redirect(){
        this.images.forEach(img=>{

            img.addEventListener('click',()=>{
                let id=img.getAttribute('data-movie-id')
                window.location.href="/movie.html?id="+id;
            })
            
        })
    }
}

window.onload = function(){
   new Filter()

}