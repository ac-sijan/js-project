//set initial count
let count = 0;

// select value and buttons 
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach( (btn) => {
    btn.addEventListener('click',(e) => {
        const style = e.currentTarget.classList;
        if(style.contains('decrese')){
            count--;
        }
        else if(style.contains('increase')) {
            count++;
        }
        else{
            count = 0;
        }
        value.textContent = count;
        if(count>0){
            value.style.color = 'green';
        }
        if(count<0){
            value.style.color = 'red';
        }

        if(count === 0){
            value.style.color = 'black';
        }

    });
});