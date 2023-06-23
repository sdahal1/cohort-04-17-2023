module.exports = {
  /** 
    * ESLint: http://eslint.org/docs/user-guide/configuring
    */

  // "env:" supplies predefined global variables
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jest": true,
  },
  "globals": {
    "supertest": true,
  },
  // our configuration extends the recommended base configuration
  "extends": "eslint:recommended",
  // define the type of file `script` or `module` for ES6 Modules
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "script"
  },
  //ESLint rules: Severity Levels: off = 0 | warn = 1 | error = 2
  "rules": {
    "eqeqeq":"warn",              //prefer strict equality `===`
    "no-console": ["warn", { "allow": ["error"] } ],          //allows but warn about console like `console.log()`
    "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" } ],
    "no-eval": "error",            //disallows `eval()` usage
    "indent": ["error", 2],        //enforce 2 space indents (not tabs)        
    "semi": ["error", "always"],   //enforce semi-colon usage
    "quotes": ["warn", "double", { "allowTemplateLiterals": true } ]
  }
};
