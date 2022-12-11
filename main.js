const number = document.querySelector('.number');
const numberContent = document.querySelector('.number span')
const counter = document.querySelector('.counter');
const buttons = document.querySelector('.buttons');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');
// decrease.addEventListener('click', function(){
//     number.textContent--;
//     if(number.textContent < 0){
//         number.style.color = 'red';
//     }else if(number.textContent == 0){
//         number.style.color = 'black';
//     }
// });
// reset.addEventListener('click', function(){
//     number.textContent = 0;
//     if(number.textContent == 0){
//         number.style.color = '#000';
//     }
// });
// increase.addEventListener('click', function(){
//     number.textContent++;
//     if(number.textContent > 0){
//         number.style.color = 'green';
//     }else if(number.textContent == 0){
//         number.style.color = 'black';
//     }
// // });
let count = 0;
console.log(buttons)
    buttons.addEventListener('click', function(e){
    if(e.target.id === 'decrease'){
        count--;
    }else if(e.target.id === 'reset'){
        count = 0;
    }else{
        count++;
    }
    if(count < 0){
        number.style.color = 'red'
    }
    if(count == 0){
        number.style.color = '#222'
    }
    if(count > 0){
        number.style.color = 'green'
    }
    number.textContent = count;
});


// rewritten codes
// set initial v=count
// var count = 0;
// // selet values and buttons
// const value = document.querySelector('#value');
// const btns = document.querySelectorAll('.btn');
// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         const styles = e.currentTarget.classList;
//         if(styles.contains('decrease')){
//             count--;
//         }else if(styles.contains('increase')){
//             count++;
//         }else{
//             count = 0;
//         }
//         if(count > 0){
//             value.style.color = 'green'
//         }
//         if(count < 0){
//             value.style.color = 'red'
//         }
//         if(count == 0){
//             value.style.color = '#222'
//         }
//         value.textContent = count;
//     })
// });