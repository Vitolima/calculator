var newNumber = false;

function insert(num){
    var number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + num;
    
}
function clean(){
    document.getElementById('result').innerHTML = "";
    
}

function result (){
    var result = document.getElementById('result').innerHTML;       
    if (result){
        document.getElementById('result').innerHTML = eval(result);

    } else{
        document.getElementById('result').innerHTML = "NaN";

    }
}
function percent(){
    var number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = (number/100)
}

function changeSignal (){
    var number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number *(-1)
}

if (newNumber = true){
    insert(num)
   
}