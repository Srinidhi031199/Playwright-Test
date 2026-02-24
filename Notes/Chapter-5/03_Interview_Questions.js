//true
if ("hello") console.log("This is a truthy value");
if (42) console.log("This is a truthy value");
if ([]) console.log("This is a truthy value");
if ({}) console.log("This is a truthy value");

//false
if ("") console.log("This is a falsy value"); //won't print
if (null) console.log("This is a falsy value"); //won't print
if (undefined) console.log("This is a falsy value"); //won't print
if (0) console.log("This is a falsy value"); //won't print
if (NaN) console.log("This is a falsy value"); //won't print