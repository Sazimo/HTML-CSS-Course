function showCategory(cat){
    
   setActive(cat);

    if(cat == "*"){
        setDisplay("block");
        return;
    }

    setDisplay("none")

    const el= document.getElementById(cat);
    el.style.display = "block";

}

function setDisplay(display){
    let elements = document.getElementsByClassName("category");
    for(let i = 0; i < elements.length; i++){
        elements[i].style.display = display;
    }
}

function setActive(cat){
    let elements = document.getElementsByClassName("active");
    for(let i = 0; i < elements.length; i++){
        elements[i].classList.remove("active");
    }

    let element = document.getElementById("link-" + cat);
    element.classList.add("active");
}

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