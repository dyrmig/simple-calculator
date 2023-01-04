const buttons = document.querySelectorAll('#buttons button');
const display = document.querySelector('#display');

let initialState = true;
buttons.forEach(button => {
    button.addEventListener('click', function handleClick() {
        if(initialState && this.getAttribute('id')!=='equals'){
            initialState = false;
            display.innerHTML = this.value;
        } else if(this.getAttribute('id')!=='equals') {
            display.innerHTML += this.value;
        }

      if(this.getAttribute('id')==='clear'){
        display.innerHTML = 0;
        initialState = true;
      }
      if(this.getAttribute('id')==='equals'){
        display.innerHTML = eval(display.innerHTML);
        initialState = true;
      }
    });
  });
  