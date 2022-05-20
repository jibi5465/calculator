let display = document.getElementById('display');
let history = document.getElementById('history');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        // console.log('clicked');
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.innerText);
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '←':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try{    
                    history.innerText = eval(display.innerText);
                    display.innerText = '';
                } catch {
                    history.innerText = 'undefined!';
                    display.innerText = '';
                }
                break;
            default:
                display.innerText += e.target.innerText;  
        }
    });
})
