const btn = document.querySelectorAll('.btn');
const display = document.getElementById('display');
btn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // single del krne k liye 
        // display.value.toString().slice(0, -1)
        if(!(btn.textContent == 'CE' || btn.textContent == 'C')) {
            display.value = display.value + btn.textContent;
        }
        if(btn.textContent == 'CE' || btn.textContent == 'C') {
            display.value = '';
        }
        if(btn.textContent == '=') {
            display.value = display.value.toString().slice(0, -1);
            display.value = eval(result);
        }
        // if(btn.textContent == '=') {
        //     display.value = eval(display.value);
        // }
    })
});