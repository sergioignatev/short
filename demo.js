    document.getElementById('route').addEventListener("change",cDest)
    document.getElementById('time').addEventListener("change",cDest)
    
function cDest(){
    let collection=document.getElementById("back").children;
    for(let i=0;i<collection.length;i++){
    collection[i].style.display='flex'
     }
     back.value=""
     }


    document.getElementById("time").addEventListener("change",hide)
function hide(){
    let collection=document.getElementById("back").children;
    let ticket=0;


    if(time.value=="18:00(из A в B)"){
        ticket=3
    }else if(time.value=="18:30(из A в B)"){
         ticket=5
    }else if(time.value=="18:45(из A в B)"){
        ticket=5
    }else if(time.value=="19:00(из A в B)"){
        ticket=6
    }else if(time.value=="19:15(из A в B)"){
        ticket=6
    }else if(time.value=="21:00(из A в B)"){
        ticket=6
    }else{ticket=0}



function aw(){
    for(let i=0;i<ticket;i++){
        collection[i].style.display="none"
}
}
aw()
}
