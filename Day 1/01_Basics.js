console.log("Hello This is my first Message!")

// console.log --> Output 
// same as System.Out.Println --> Java 


// Step-By-Step break down (V8 engine) 
/* JS --> Parse --> Create AST (Abstact Syntax Tree) --> Interpreter

The engine first breaks the raw code into small meaningfull chunks is called Tokens. 


V8 starts by breaking code into tokens like, keywords, identifiers,  operators. 
Example: 
let x = 10;

Keyword: They are the reserved word. 

Tokens --> [let] [x] [=] [10] [;]


AST --> convert the given program into a tree. 

(astexplorer.net)

*/ 
