let incri = document.getElementById("start");
let savEl = document.getElementById("entries");

let count = 0;

 function increase(){
    count += 1;
    incri.textContent = count;
 }

 function save() {

    let countstr =  count + " - "
    savEl.textContent += countstr
    incri.textContent = 0;
    count = 0;
 }

