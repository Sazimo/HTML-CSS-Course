function showCategory(cat) {

    setActive(cat);

    if (cat == "*") {
        setDisplay("block");
        return;
    }

    setDisplay("none")

    const el = document.getElementById(cat);
    el.style.display = "block";

}


function setDisplay(display) {
    let elements = document.getElementsByClassName("category");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = display;
    }
}

function setActive(cat) {
    let elements = document.getElementsByClassName("active");
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove("active");
    }

    let element = document.getElementById("link-" + cat);
    element.classList.add("active");
}



let elements = document.getElementsByTagName("button");
console.log(elements);

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", btnClicked)
}
function btnClicked(e) {
    let cat = e.target.dataset.category;
    showCategory(cat)
}




/* let btn = document.getElementById("myBtn")
btn.addEventListener("click",alertMe)
function alertMe(e)
{
    console.log(e.target);
    alert("I pressed..")
}
 */


/* 

boolean
Array
array

function doSum(a,b){
    let x = sum(a,b);
    alert(x);
}


function sum(a,b){
    c = a + b;
    return c;
}

 */



/* function sayHello(name="Mahmood", age=20){
    if(age >= 40){
        alert("Hello "+ name + ". you are too old.");
        alert("bla bla ...")
    }
    else if(age >=10 ) {
        alert("Hello "+ name + ". you are young.");
        alert("bla bla bla bla ...")
    } 
    else {
        alert("Hello "+ name + ". you are child.");
    }
} */

/* 

Ensan;

let hossein = new Ensan;
let ali = new Ensan;
let sadegh = new Ensan;

hossein.color = red;
hossein.weight = 80;
hossein.tahsilat.daneshgah = "azad";
hossein.tahsilat.maghta = "kasrshenasi";

hossein.gorosneh(ghazakhordan);

function ghazakhordan(){
    
} */


/* class Ensan {

    setName(name) {
        this.name = name;
    }


    getName() {
        return this.name;
    }

    setHeight(h) {
        this.height = h;
    }

    getHeight() {
        return this.height;
    }

}


let a = new Ensan;

a.setName("Hossein");
a.setHeight(178);


console.log(a.getName());
console.log(a.getHeight());

let b = new Ensan;

b.setName("Ali");
b.setHeight(188);


console.log(b.getName());
console.log(b.getHeight());
 */









