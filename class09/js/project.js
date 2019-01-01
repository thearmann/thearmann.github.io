document.querySelector('#convert').onclick = Celsius;

function Celsius (){

    let fahrenheit = document.querySelector('#number').value;
    
    let Celsius = (fahrenheit - 32) * 5/9;

    if (Celsius<-6){
        document.body.style.backgroundColor = "blue";
    }

    if (Celsius>26){
        document.body.style.backgroundColor = "red";
    }

    document.querySelector('#outputcelsius').innerHTML = Celsius;

}

document.querySelector('#Cconvert').onclick = fahrenheit;

function fahrenheit (){

    let celsius = document.querySelector('#Cnumber').value;
    
    let fahrenheit = celsius * (9/5) + 32;

    if (fahrenheit>80){
        document.body.style.backgroundColor = "red";
    }

    if (fahrenheit<20){
        document.body.style.backgroundColor = "blue";
    }

    document.querySelector('#outputfahrenheit').innerHTML = fahrenheit;

    
}


