const boxes = document.querySelectorAll(".box1");
const inputBox = document.querySelector("#input-box");
let i = 0;

while (boxes[i].innerText != "=") {
    if (boxes[i].innerText == "< check" || boxes[i].innerText == 'check >') { }
    else if (boxes[i].innerText == "AC") {
        {
            boxes[i].addEventListener('click', function () {

                inputBox.innerText = "";

            })
        };
    }
    else {
        boxes[i].addEventListener('click', function () {

            inputBox.innerText = inputBox.innerText + this.innerText


        })
    };
    i++;
}

// input = document.querySelector("#input-box");

