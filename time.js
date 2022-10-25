function select(){
    let num=document.getElementById("num").value
    
    
    
    
            let back=document.getElementById("back").value;
                let h=back.slice(0,2)
                let m=back.substring(3,5)
                let minute=Number(m);
                let hour=Number(h)
    
                
                const d = new Date();
                d.setHours(hour);
                   d.setMinutes(minute+50);
                 let t=d.getHours()+":"+ d.getMinutes();
    
               
    
    
                  
    
    
    
          let time=document.getElementById("time").value;
          let slice1=time.slice(0,5);
          let slice2=time.substring(5);
          let htime=time.slice(0,2);
          let mtime=time.substring(3,5);
    
          const timeB = new Date();
          timeB.setHours(Number(htime));
             timeB.setMinutes(Number(mtime)+50);
           
    
          if(time&&back!==""){
          cost=1200
          }else if(time!==""||back!==""){
           cost=700
            }
    
    
            
            const x = new Date();
            x.setMinutes(d.getMinutes());
            x.setHours(d.getHours())
            let v=new Date()
            v.setMinutes(Number(mtime));
            v.setHours(Number(htime))
            let min=x.getMinutes()-v.getMinutes();
            let hours=x.getHours()-v.getHours();
            if(min<0){
            hours=hours-1;
            min=60-x.getMinutes()-v.getMinutes()
            }
    
    returnee=""
       
        if(time&&back!==""){
            difference=`${hours}ч ${min}мин`;
            returnee="назад";
            }else if(time!==""||back!==""){
             difference=50
              }
           
    
    let re=`${d.getHours()+"ч"+d.getMinutes()+"мин"}.`
    if(time!==""&&back==""){
        re=`${timeB.getHours()+"ч"+timeB.getMinutes()+"мин"}.`
    }
    let ttime=slice1
    if(time==""&&back!==""){
        ttime=back.slice(0,5)
    }
    
    
          document.getElementById('demo').innerHTML=`Вы выбрали ${num} билета по маршруту ${slice2} стоимостью ${cost*num} р.
    Это путешествие займет у вас ${difference} минут. 
    Теплоход отправляется в ${ttime}, а прибудет ${returnee} в ${re} `
    
        }
    