let display_txt = document.querySelector('#display');
let buttons = document.querySelectorAll('button');

let displayval = '';

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let btn_txt = e.target.innerText;
        console.log(btn_txt);
        

        if (btn_txt === 'AC') {
            // Clear the display
            displayval = '';
        } else if (btn_txt === 'DEL') {
            // Remove the last character from displayval
            displayval = displayval.slice(0, -1);
        } else if (btn_txt === '=') {
            try {
                // Evaluate the expression safely
                displayval = eval(displayval).toString();
            } catch (error) {
                // Handle errors (e.g., invalid expressions)
                displayval = 'Error';
            }
        } else {
            // Append the button's text to displayval
            displayval += btn_txt;
        }

        // Update the display
        display_txt.value = displayval;
    });
});