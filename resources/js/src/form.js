'use strict';

class Form{

    constructor(el){
     
        this.form=document.querySelector(el)
        this.required=this.form.querySelectorAll('[required]')
        
        
        this.emails=this.form.querySelectorAll('[email]')
        this.action=this.form.getAttribute('action')
        
        //this.Event()
        this.errors=[]
    }

    Event(){
        //remove any error indication
        this.required.forEach(required => {
           required.addEventListener('change', ()=>{
            console.log(required)
            let cssClass=required.classList[0]+'--error'
            
            if(required.classList.contains(cssClass)){
                required.classList.remove(cssClass)
            }
           })
       });

       this.form.addEventListener('submit',(e)=>{
            
            e.preventDefault();

            if(this.errors.length>0){
                this.removeErrors();
            }

            this.validationCheck()

            if(this.errors.length>0){
                this.displayErrors()
            }else{
                
                this.form.submit();
                
            }
            
       })
    }

    removeErrors(){
        this.errors.forEach(error => {
           let spans=error.element.parentNode.querySelectorAll('span');
           spans.forEach(span => {
                error.element.parentNode.removeChild(span)
              
           });
           this.errors=[];
        });
    }

    validationCheck(){

        let errorData={}
        var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.required.forEach(required => {
           
            switch(required.nodeName){
                case 'INPUT':
                case 'TEXTAREA':
                    if(required.value.length==0){
                        errorData['element']=required
                        errorData['message']='This field is mandatory.'
                    }
                break;
                case 'SELECT':
                    if(required.value==0){
                        errorData['element']=required
                        errorData['message']='Please select one'
                    }
                break;
            }

            if(Object.keys(errorData).length>0){
                this.errors.push(errorData)
                errorData={}
            }
           
        });

        this.emails.forEach(email => {
            if(!reg.test(email.value)){
                errorData={}
                errorData['element']=email
                errorData['message']='Please provide valid email'
                this.errors.push(errorData)
            }

           
        });
        
    }

    displayErrors(){
        this.errors.forEach(error => {
            
            let cssClass=$(error.element).classList[0]+'--error'
            $(error.element).classList.add(cssClass);
            let span=document.createElement('span');
            span.textContent=error.message
            $(error.element).parentNode.appendChild(span)
        });
        
    }

}

