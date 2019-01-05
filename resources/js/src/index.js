'use strict'

class Index{
    
    constructor(){

        this.api="https://api.themoviedb.org/3/movie/404368/images"
        this.api_key="220db9d772820f55fd7e39476eef1d78"
        this.url=this.api+"?api_key="+this.api_key
        this.image_api="https://image.tmdb.org/t/p/w500/"
       
        this.service()
    }

    service(){
        fetch(this.url,{
            method:"GET"
        })
        .then(response=>{
            if(response.ok){
                return response.json()
            }else{
                throw Error(response.statusText)
            }
        })
        .then(data=>{
          this.fetchSuccess(data)
           
        })
        .catch(data=>{
            console.log("some error occoured: "+ data)
        })
    }

    fetchSuccess(data){
        if(Object.keys(data).length!==0){
            console.log(data)
        }else{
            console.log('nothing has been returned')
        }
    }
}

new Index();