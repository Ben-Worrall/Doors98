var exitBNT = document.getElementById('startmenu-shutdown-exit')
var shutdownApp = document.getElementById('startmenu-shutdown-app')
var StartmenuFirstApps = document.getElementById('StartMenu-popup-first-apps')
var selectionOPTS = document.querySelectorAll('.startmenu-shutdown-bottom-container')




let allEL = document.getElementsByTagName("*");


//the buttons on the app

//exit button
 function exitFirstapp(){
    StartmenuFirstApps.style.display = "none"
    StartmenuFirstApps.innerHTML = ""
    

    for (var i=0; i < allEL.length; i++) {
         
        allEL[i].classList.remove("blur") 
            
    } 
    
}


//cancel button
function cancel(){
    StartmenuFirstApps.style.display = "none"
    StartmenuFirstApps.innerHTML = ""
    for (var i=0; i < allEL.length; i++) {
         
        allEL[i].classList.remove("blur") 
        
            
    } 
}





function ShutDown(){
    document.getElementById("ContentBody").classList.remove('blur')
    
}










let curSelARR = []

//ok button
function ok(){
   

   
   
let curSel =  document.querySelector('.startmenu-shutdown-bottom-container input:checked').parentNode.innerText
    
    //console.log(curSel)
    curSelARR[0] = curSel
    console.log(curSelARR[0])


    if(curSelARR[0] === "Stand by "){  //stand by

        
        let content = document.getElementById('content')
        let bodyHTML = document.getElementById('Body')
        content.style.display = "none"
        bodyHTML.style.backgroundColor = "black"
        document.getElementById('html').style.cursor = 'none'




        





    }else if(curSelARR[0] === "Shut down "){ //shutdown

        
        //remove the blur
        for (var i=0; i < allEL.length; i++) {
            allEL[i].classList.remove("blur") 
        } 
        //change location to teh shutdown page 
        function LoadShutdown(){
            //for live server
            if (location.hostname == "localhost" || location.hostname === "127.0.0.1"){
                window.location = '/doors98Shutdown/doors98shutdown.html'
            }
        
            //for file
            else if(window.location.protocol == "file:"){
            window.location = '/doors98Shutdown/doors98shutdown.html'
            }
            //for github
            else if(document.location.protocol == "https:"){window.location = 'https://ben-worrall.github.io/Doors98/doors98Shutdown/doors98shutdown.html'}
        }
        LoadShutdown()







    }else if(curSelARR[0] === "Restart "){  //restart
      
        //remove the blur
        for (var i=0; i < allEL.length; i++) {
            allEL[i].classList.remove("blur") 
        } 
        //change location to the restart page 
        function LoadRestart(){
            //for live server
            if (location.hostname == "localhost" || location.hostname === "127.0.0.1"){
                window.location = '/doors98Restart/doors98restart.html'
            }
        
            //for file
            else if(window.location.protocol == "file:"){
            window.location = '/doors98Restart/doors98restart.html'
            }
            //for github
            else if(document.location.protocol == "https:"){window.location = 'https://ben-worrall.github.io/Doors98/doors98Restart/doors98restart.html'}
        }
        setTimeout(LoadRestart, 2000)













    }else if(curSelARR[0] === "Restart in MS-DOS mode "){ //restart in ms mode

        console.log( " restart in ms mode")


    }



      


}



    

