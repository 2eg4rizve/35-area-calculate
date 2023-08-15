console.log("Calculate.js");

// Triangle
// Area (A) = 0.5 X b X h
document.getElementById('btn-triangle').addEventListener('click', function () {

    const input1 = document.getElementById('triangle-input1').value;
    console.log(input1);

    const input2 = document.getElementById('triangle-input2').value;
    console.log(input2);

    const output = document.getElementById('output');
    const p = document.createElement('p');

    const ans = 0.5 * input1 * input2;

    p.innerHTML = ` Triangle Area ${ans}`;

    output.appendChild(p);



})



// Ellipse
// Area (E) = PI X b X h

document.getElementById('btn-ellipse').addEventListener('click', function () {

    const input1 = document.getElementById('ellipse-input1').value;
    console.log(input1);

    const input2 = document.getElementById('ellipse-input2').value;
    console.log(input2);

    const output = document.getElementById('output');
    const p = document.createElement('p');

    const ans = 3.1416 * input1 * input2;

    p.innerHTML = ` ellipse Area ${ans}`;

    output.appendChild(p);



})