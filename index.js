const num1 = 98;
const num2 = 568;
const num3 = 1056;

// const addition = num1 + num2 + num3;
// document.write(num3)
// alert(num2)


const num4 = 98;
const num5 = 568;
const num6 = 1056;

const multiplication = num4 * num5 * num6;
console.log(multiplication);


const num7 = 40;
const num8 = 576;
const num9 = 1074;

const subtraction = num7 - num8 - num9;
console.log(subtraction);

const num10 = 98;
const num11 = 987;
const num12 = 10;

const division = num10 / num11 / num12;
console.log(division);

const height = 8;
const breath = 7;

const areaoftriangle = height * breath / 2;
console.log(areaoftriangle);


const radius = 29;
const areaofcircle = Math.PI * radius **2;
console.log(areaofcircle .toFixed(2));

const base1 = 4;
const base2 = 5;
const height1 = 8;
const areaofatrapezoid = ((base1 + base2)/ 2) * height;
console.log(areaofatrapezoid);


const base3 = 7;
const height2 = 8;
const areaofaparallelogram = base3 * height2;
console.log(areaofaparallelogram);



// // AREA OF CYLINDER 
// const r = 7;
// const h = 20;
// const AREA = (2* math.PI * r * h) + (2* math.PI * r **2)
// console.log(AREA.tofixed(2))

// AREA OF PENTAGON 
// const a = 25;
// const sqrt1 = math.sqrt




const l = 43;
const w = 19;
const h = 20;

const sqrt1 = Math.sqrt((w/2)**2 + h**2);
const sqrt2 = Math.sqrt((l/2)**2 + h**2);
const areaofpyramid = l * w + l* sqrt1 + w * sqrt2
console.log (areaofpyramid.toFixed(2))









// const firstName = "kendrick";
// document.write(firstName);
// console.log(firstName);
// alert(firstName);
// const num1 = "50"
// const num2 = 50;
// const boolean = true;
// const boolean2 = false;


function generate() {
    const base = parseFloat(prompt('enter your base'));
    const height = parseFloat(prompt('enter your height'));

    const areaofatriangle = height * base / 2;
    alert("the area of a triangle is:" + " " + areaofatriangle);
    
    
};

function showme() {
    const a = parseFloat(prompt("enter your a"));
    const b = parseFloat(prompt("enter your b"));
    const h = parseFloat(prompt("enter your h"));

    const AreaOfATrapezoid = a * b / 2 * h;
    alert("the are of a trapezoid is:" + " " + AreaOfATrapezoid)
    
}

function generate1() {
    const a = parseFloat(prompt("enter your a"))

    const sqrt5 = Math.sqrt(5);
    const sqrt6 = Math.sqrt (5 * (5 + 2 * sqrt5))

    const areaofpenTagon = 1 / 4 * sqrt6 * a**2
    alert(" the area of pentagon is: " + " " + areaofpenTagon.toFixed(2))
    
}

function generate2() {
    const l = parseFloat(prompt("enter your l"))
    const w = parseFloat(prompt("enter your w"))
    const h = parseFloat(prompt("enter your h"))

    const sqrt3 =  Math.sqrt((w/2)**2 + h**2);
    const sqrt4 =  Math.sqrt((l/2)**2 + h**2);
    const AreaOfPyramid = l * w + l* sqrt3 + w * sqrt4
    alert("the area of a pyramid is:" + " " + AreaOfPyramid.toFixed(2))
    
}

function generate3() {
    const a = parseFloat(prompt("enter your value"))

    const sqrt7 = Math.sqrt(5);
    const sqrt8 = Math.sqrt((5+2) * 5);
    const areaofdecagon = ((5 / 2) * a**2  * sqrt8);
    document.write("area of decagon is:" + " " + areaofdecagon.toFixed(2))
    
}