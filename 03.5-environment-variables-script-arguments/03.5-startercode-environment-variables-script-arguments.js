// ENVIRONMENT VARIABLE- ALSO CALLED AN ENV VAR, A KEY-VALUE PAIR HELD BY YOUR CURRENT OPERATING SYSTEM AND USER


//Security: Environment variables can be used to store sensitive information such as passwords, API keys, or other credentials. By using environment variables to store these values, you can ensure that they are not hard-coded in your code or configuration files, which can be a security risk if they are ever exposed.

//Example: If i have a database password in my code, and i push that code to github, then others can see my password. However, if I put that password in my environment variable, i can still use the password and hide it when pushing to github


// HOW TO ACCESS ENVIRONMENT VARIABLES USING JS: process.env
console.log(process.env.DATABASE_PASSWORD_FOR_FINANCE_APP);



// HOW TO SET ENVIRONMENT VARIABLES? -> USE COMMAND LINE 
// DATABASE_PASSWORD_FOR_FINANCE_APP=WAZZAP node <PATH TO FILE HERE>


// WHAT ARE SCRIPT ARGUMENTS? -> arguments entered when running the file from the command line "node fileNameHere.js"


// HOW TO USE AND ACCESS SCRIPT ARGUMENTS: process.argv
console.log(process.argv[4])