let time=document.getElementById("time");
let back=document.getElementById("back");


document.getElementById("route").addEventListener("change",Cl)
function Cl(){
    time.value="";
    back.value="";  
}





function AtoB(t,b){
    time.style.display=t;
    back.style.display=b;
    document.getElementById("label").style.display=b;
    document.getElementById("label1").style.display=t
 
}

function Vis(){
    let vis=document.getElementById("route").value;
if(vis==="из A в B"){
    AtoB("inline","none");
    time.addEventListener("change",function(){back.style.display="none";document.getElementById("label").style.display="none";})
}else if(vis==="из B в A"){
    AtoB("none","inline")
}else{
    AtoB("inline","none");
    time.addEventListener("change",function(){back.style.display="inline";document.getElementById("label").style.display="inline";})
}
}






