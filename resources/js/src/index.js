'use strict'


class Index extends Config{
    
    constructor(){

        super();
        this.service(['now_playing','upcoming','popular','top_rated'])
        
        
    }

    service(categories){
      
        categories.forEach(category => {
            this.httpRequest(category)
        });
        
    }

    httpRequest(category){
        fetch(
            this.moviedb_base_url+category+'?api_key='+this.moviedb_api_key,
            { method:"GET" }
        )
        .then(response=>{
            if(response.ok){
                return response.json()
            }else{
                
                throw Error(response.statusText)
            }
        })
        .then(data=>{
          this.fetchSuccess(data,category)
           
        })
        .catch(error=>{
            console.log(error)
            //this.fetchFail(error)
        })
    }

    fetchSuccess(data,category){
        
        let movies=[]
        if(Object.keys(data).length!==0){
            for(let i=0; i<4; i++){
                let movie={}
                movie['title']=data['results'][i]['title']
                movie['rating']=data['results'][i]['vote_average']
                movie['release_date']=data['results'][i]['release_date']
                movie['poster']=data['results'][i]['poster_path']
                movie['id']=data['results'][i]['id']
                movie['category']=category
                movies.push(movie)
            }

            if(Object.keys(movies).length>0){
                
                this.createHtml(movies)
            }

        }else{
            console.log('nothing has been returned')
        }
       
    }

    createHtml(movies){
       
        let movies_block=document.querySelector('.category__movies')

        let movies_container=document.createElement('div')
        movies_container.setAttribute('class','category__movies-container');

      
        movies.forEach(movie=> {
            
            movies_container.setAttribute('data-id',movie['category'])
            //container
            let div_movie=document.createElement('div')
            div_movie.setAttribute('class','category__movie')

            //image
            let img_movie=document.createElement('img')
            img_movie.setAttribute('class','category__movie-poster')
            img_movie.src=this.moviedb_image_path+movie['poster']
            img_movie.setAttribute('data-movie-id',movie['id'])

            //title
            let title=document.createElement('h3')
            title.setAttribute('class','category__movie-title')
            title.textContent=movie['title']

            //Rating
            let rating=document.createElement('p')
            rating.setAttribute('class','category__movie-rating')
            rating.textContent='rating : '+movie['rating']

            //Rating
            let release=document.createElement('p')
            release.setAttribute('class','category__movie-release')
            release.textContent='release date : '+movie['release_date']

            //button
            let button=document.createElement('button')
            button.setAttribute('class','category__button-ticket')
            button.textContent='Ticket'
            
            div_movie.appendChild(img_movie)
            div_movie.appendChild(title)
            div_movie.appendChild(rating)
            div_movie.appendChild(release)
            div_movie.appendChild(button)
            
            movies_container.appendChild(div_movie)
        })

        movies_block.appendChild(movies_container)
        
        
       
    }

    fetchFail(data){
       console.log('Error'+data);
    }
}

new Index();