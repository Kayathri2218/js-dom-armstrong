let result =  document.getElementById("result");

function checkArmstrong() {
    let number = document.getElementById("input").value;
    let a = 0;
    let num = number;
    while (num > 0) {
        let sum = num % 10;
        num = (num - sum) / 10;
        a++;
    }
    let b = number;
    let cal = 0;
    while (b > 0) {
        let sum = b % 10;
        cal += sum ** a;
        b = parseInt(b / 10);
    }
    if (number == cal) {
        result.innerHTML = "Armstrong Number";
    } else {
        result.innerHTML = "Not Armstrong Number";
    }
}
