
var taskbariconELES = document.querySelectorAll('.dropintaskbar')
var homeICONS = document.querySelectorAll('.iconBody')



//if user clicks on:

//open



//add to zip

//scan for viruses

//zip and email

//send to

//cut

//copy


//pin to taskbar
document.getElementById('ContextMenuIconHome-pintotaskbar').addEventListener('click', function (e){
    //console.log('clicked')
    for(let j = 0; j < taskbariconELES.length; j++){
        console.log('all task bar spots')
        console.log(taskbariconELES[j])
    }
    for(let i = 0; i < taskbariconELES.length; i++){
        
        if(taskbariconELES[i].innerHTML == ""){
            
            for(let k = 0; k < homeICONS.length; k++){
                if(homeICONS[k].style.backgroundColor == "rgba(132, 134, 134, 0.7)"){
                    
                    let img = document.createElement('img')
                    img.src = homeICONS[k].querySelector('img').src
                    img.classList.add('imgForIconInTaskBar')
                    img.alt = homeICONS[k].querySelector('img').alt
                    taskbariconELES[i].appendChild(img)
                    console.log(taskbariconELES[i])
                   return
                    
                }
            

            
            }
        } 
    }

    


})




//delete
document.getElementById('ContextMenuIconHome-rename').addEventListener('click', function(){

    
    /*
        for(let k = 0; k < homeICONS.length; k++){
            if(homeICONS[k].style.backgroundColor == "rgba(132, 134, 134, 0.7)"){
                
               
                
               return
                
            }
        
    
        
        }
    */
    })



//rename
document.getElementById('ContextMenuIconHome-rename').addEventListener('click', function(){

    
/*
    for(let k = 0; k < homeICONS.length; k++){
        if(homeICONS[k].style.backgroundColor == "rgba(132, 134, 134, 0.7)"){
            
           
            
           return
            
        }
    

    
    }
*/
})



