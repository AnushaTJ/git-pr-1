let targetbtn=document.querySelector("#in1");
let show=(bgcolor,message)=>{
    if(message!=''){
        targetbtn.style.backgroundColor=bgcolor;
        targetbtn.style.color='white';
        targetbtn.style.fontSize="25px";
        targetbtn.style.fontWeight='bold';
        targetbtn.value=message;
    }
    else{
        targetbtn.style.backgroundColor=bgcolor;
        targetbtn.style.color='black';
        targetbtn.style.fontSize="16px";
        targetbtn.style.fontWeight='normal';
        targetbtn.value='';
    }
}

let blbtn=document.querySelector("#bl");
blbtn.addEventListener('click',function(){
    show('blue',"you have clicked blue button")
});

let gnbtn=document.querySelector("#gn");
gnbtn.addEventListener('click',function(){
    show('green',"you have clicked green button")
});

let ylbtn=document.querySelector("#yl");
ylbtn.addEventListener('click',function(){
    show('yellow',"you have clicked yellow button")
});

let clbtn=document.querySelector("#cl");
clbtn.addEventListener('click',function(){
    show('white',"");
});

