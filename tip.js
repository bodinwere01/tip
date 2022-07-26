const bill = document.getElementById("bill");
const people = document.getElementById("people");
const custom = document.getElementById("custom");
const tip = document.getElementById("amount");
const total = document.getElementById("total");
const reset= document.getElementById("reset")



function errorRange(){
    if(people.value<=0){
        document.getElementById("error").style.display="block";
        custom.value = "" ;
        percent=0;
        calculater();
    }else{
        document.getElementById("error").style.display="none";
    }
}
function resetbtn(){
    percent="";
    bill.value = "" ;
    people.value = "" ;
    custom.value = "" ;
    tip.innerHTML = "$0.00";
    total.innerHTML = "$0.00";
};
document.getElementById("btn1").addEventListener("click",()=>{
    custom.value="";
    percent=5;
    calculater();
});
document.getElementById("btn2").addEventListener("click",()=>{
    custom.value="";
    percent=10;
    calculater();
});
document.getElementById("btn3").addEventListener("click",()=>{
    custom.value="";
    percent=15;
    calculater();
});
document.getElementById("btn4").addEventListener("click",()=>{
    custom.value="";
    percent=25;
    calculater();
});
document.getElementById("btn5").addEventListener("click",()=>{
    custom.value="";
    percent=50;
    calculater();
});
function selectcustom(){
    if(custom!=0){
        percent=custom.value;
        calculater();
    }
}
function calculater(){
    if(bill!=0&&people!=0){
        if(percent==0){
            Rtip = 0;
            Rtotal =bill.value/people.value;
        }else{
            Rtip= bill.value/100*percent/people.value;
             Rtotal=bill.value/people.value+Rtip;
        }
        tip.innerHTML="$"+Rtip.toFixed(2);
        total.innerHTML="$"+Rtotal.toFixed(2);
    }
}
reset.addEventListener("click", resetbtn);
people.addEventListener("input",errorRange);
bill.addEventListener("input",calculater);
people.addEventListener("input",calculater);
custom.addEventListener("input",selectcustom);