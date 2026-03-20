function add(a,b,c) {
    return a+b+c; 
}

let num =[1,2,3];
add(...num);  //sum -> 6


//---------------------

function hasError(...codes) {
    return codes.some(c => c >= 400);
}

let responsecodes =[200,201,401];
hasError(...responsecodes);  //true