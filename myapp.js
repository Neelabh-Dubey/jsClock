
let time;
let flag = false;

function display(){
    let date = new Date();

    console.log(date.getHours(), date.getMinutes(), date.getSeconds());

    let hours = (date.getHours()%12)*30 + 270;
    let minutes = (date.getMinutes())*6 + 270;
    let seconds = (date.getSeconds())*6 + 270;
    
    let rotHrs = document.querySelector('#hrs');
    rotHrs.style.transform = 'rotate('+ hours + 'deg)';

    let rotMin = document.querySelector('#min');
    rotMin.style.transform = 'rotate('+ minutes + 'deg)';

    let rotSec = document.querySelector('#sec');
    rotSec.style.transform = 'rotate('+ seconds + 'deg)';
}

let button = document.querySelector('#play');
button.addEventListener('click',()=>{
    console.log("clicked");
    if(!flag){
        time = setInterval(display,1000);
        flag=true;
    }
    else{
        clearInterval(time);
        flag=false;
    }
});
