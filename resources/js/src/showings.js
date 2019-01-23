'use strict'

class Showing extends Config{
    constructor(category){
        super()
        this.category=category
        
        this.showing_container=document.querySelector('.showing__container')
        this.getMovies()
        
    }

    getMovies(){
       fetch(this.moviedb_base_url+this.category+'?api_key='+this.moviedb_api_key,{
           method:'GET'
       }).then(response=>{
            return response.json()
       }).then(data=>{
            this.displayMovies(data['results'])
       })
    }

    displayMovies(movies){
        movies.forEach(movie=> {

            console.log(movie);
            
            let poster=document.createElement('img')
            poster.setAttribute('class','showing__poster')
            poster.setAttribute('src',this.moviedb_image_path+movie['backdrop_path'])

            let showing_movie=document.createElement('div')
            showing_movie.setAttribute('class','showing__movie')

            let description=document.createElement('div')
            description.setAttribute('class','showing__description')

            let title=document.createElement('h1')
            title.setAttribute('class','showing__title')
            title.textContent=movie['title']

            let date=document.createElement('p')
            date.setAttribute('class','showing__release-date')
            date.textContent='Release date : '+movie['release_date']

            let language=document.createElement('div')
            language.setAttribute('class','showing__language')
            language.textContent='Langauga : ' + movie['original_language']

            let rating=document.createElement('div')
            rating.setAttribute('class','showing__language')
            rating.textContent='IMDB rating : ' + movie['vote_average']

            //button
            let more=document.createElement('button')
            more.setAttribute('class','showing__ticket showing__view-more')
            more.setAttribute('data-id',movie['id'])
            more.textContent='View more'

            //button
            let ticket=document.createElement('button')
            ticket.setAttribute('class','showing__ticket showing__buy-ticket')
            ticket.setAttribute('data-id',movie['id'])
            ticket.textContent='Ticket'

            description.appendChild(title)
            description.appendChild(date)
            description.appendChild(language)
            description.appendChild(rating)
            description.appendChild(more)
            description.appendChild(ticket)
            showing_movie.appendChild(description)
            showing_movie.appendChild(poster)
            this.showing_container.appendChild(showing_movie)

            this.getButtons()
            
        });
       
    }

    getButtons(){
        this.showMore=document.querySelectorAll('.showing__view-more') 
        this.showMore.forEach(movie=>{
            movie.addEventListener('click',()=>{
                let id=movie.getAttribute('data-id')
                window.location.href="/movie.html?id="+id;
            })
            
        })
    }

}

