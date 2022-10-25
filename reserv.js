let time=document.getElementById("time");
let back=document.getElementById("back");
let timeValue=time.value;
let backValue=back.value;

document.getElementById("route").addEventListener("change",Cl)
function Cl(){
    time.value="";
    back.value="";  
}





function AtoB(time){
    time.style.display="inline";
    back.style.display="none"
    document.getElementById("label").style.display="none";
    document.getElementById("label1").style.display="inline"
    time.addEventListener("change",function(){back.style.display="none";document.getElementById("label").style.display="none";})
}function BtoA(){
    time.style.display="none";
    back.style.display="inline"
    document.getElementById("label").style.display="inline";
    document.getElementById("label1").style.display="none"
}function AtoBtoA(){
    time.style.display="inline";
    document.getElementById("label1").style.display="inline";
    back.style.display="none"
    document.getElementById("label").style.display="none";
    time.addEventListener("change",function(){back.style.display="inline";document.getElementById("label").style.display="inline";})
   
}




function Vis(){
    let vis=document.getElementById("route").value;
if(vis==="из A в B"){
    AtoB()
}else if(vis==="из B в A"){
    BtoA()
}else{
    AtoBtoA()   
}
}
 
