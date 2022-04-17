function showCategory(cat){
    
    if(cat == "*"){
        document.getElementById("nature").style.display = "block";
        document.getElementById("technology").style.display = "block";
        return;
    }

    document.getElementById("nature").style.display = "none";
    document.getElementById("technology").style.display = "none";

    const el= document.getElementById(cat);
    el.style.display = "block";
}




/* 

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