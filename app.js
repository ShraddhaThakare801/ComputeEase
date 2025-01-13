let allBtns = document.querySelectorAll(".btn");
let displayInput = document.querySelector("#display-input");

let res;
let currInput = "";

let resetAfterEqual = false;

allBtns.forEach((btn) => {
    btn.addEventListener("click",(e) => {

        res = e.target.value;
       // console.log(res);
        displayInput.value = currInput;

        if(resetAfterEqual){
            currInput = "";
            resetAfterEqual = false;
        }

        if(res === "="){
            try {
            finalRes = eval(currInput);
            displayInput.value = finalRes.toString();
            currInput = finalRes.toString();
            resetAfterEqual = true;

            } catch (error) {
                currInput = "";
                displayInput.value = "error";
            }

            return;
        }
        
        if(res === "AC"){
            currInput = "";
            displayInput.value = "";
            return;
        }

        if(res === "back"){
            if (currInput.length > 0) {
            currInput = currInput.slice(0,-1);
            displayInput.value = currInput;
            }
            return;
        }

        currInput = currInput + res;
        displayInput.value = currInput;

    }); 
});

