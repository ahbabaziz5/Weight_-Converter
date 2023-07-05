let in1 = document.getElementById('in1');
let in2 = document.getElementById('in2');
let in3 = document.getElementById('in3');
let in4 = document.getElementById('in4');
let in5 = document.getElementById('in5');
let four = document.getElementById('four');
let five = document.getElementById('five');

function pound(){
    in2.value = ( in1.value*16).toFixed(3)
in3.value = (in1.value / 2.20).toFixed(3)
in4.value = (in1.value * 453600).toFixed(3)
in5.value = (in1.value * 453.6).toFixed(3)


}
function ounce(){
in1.value = (in2.value /16).toFixed(3)
in3.value = (in2.value / 35.27).toFixed(3)
in4.value = (in2.value * 28350).toFixed(3)
in5.value = (in2.value * 28.35).toFixed(3)

}
function kg(){
in1.value = (in3.value *2.20).toFixed(3)
in2.value = (in3.value * 35.27).toFixed(3)
in4.value = (in3.value * 1000000).toFixed(3)
in5.value = (in3.value * 1000).toFixed(3)
}
function mg(){
in1.value = (in4.value  / 453600).toFixed(3)
in2.value = (in4.value / 28350).toFixed(3)
in3.value = (in4.value / 1000000).toFixed(3)
in5.value = (in4.value / 1000).toFixed(3)
}
function g(){
in1.value = (in5.value /453.6).toFixed(3)
in2.value = (in5.value / 28.35).toFixed(3)
in3.value = (in5.value / 1000).toFixed(3)
in4.value = (in5.value * 1000).toFixed(3)
}
function view(){
 document.getElementById('btn').style.display='none'
in4.style.display="block"
four.style.display="block"
in5.style.display="block"
five.style.display="block"
}