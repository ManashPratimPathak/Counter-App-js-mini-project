//set initial and then count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

//btns is basically an array of btns so in order to 
//access all we will use for each function.

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;  
        }
        else if (styles.contains("increase")){
            count++;
        }
        else{
            count = 0;
        }

        if(count>0){
            value.style.color = "green";
        }else if (count<0){
            value.style.color = "red";
        }else if(count == 0){
            value.style.color = "#222"
        }
        value.textContent = count;
    });
});

//The contains() method checks whether a string contains a sequence of characters.


//in the call back function we will right away  access my event objects because we want to check  which buttons are we clicking.