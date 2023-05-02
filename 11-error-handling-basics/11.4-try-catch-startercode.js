/* 
WHEN OUR APP RUNS INTO AN ERROR, WE DON'T WANT THE ERROR TO CRASH THE WHOLE APP AND MAKE EVERYTHING STOP WORKING!

SOLUTION-> WE CAN CATCH ERRORS THAT HAVE BEEN THROWN. BY CATCHING ERRORS, WE ALLOW OUR CODE TO CONTINUE RUNNING EVEN AFTER AN ERROR HAS OCCURED

*/
// try {
//     //risky operations can go here. Operations that could result in an error sometimes
//     const randomNum = Math.random();
//     console.log("random num is", randomNum)
//     if(randomNum>0.9){ //90% of time people fill it out properly, 10% of time there are errors
//         throw new Error("You filled out form improperly")
//     }else{
//         console.log("success! you are logged in")
//     }
// }catch(error){
//     console.log(error.message)
//     console.log("redirecting you to registration from for another attempt")
// }


// console.log("other code that needs to stay running")





function getRandomQuote(person={}) {
    try{
        let randomIndex = Math.floor(Math.random()* person.quotes.length) //0.9*5 => 4.5 -> 4
        return person.quotes[randomIndex];
    }catch(error){
        console.log(error.message)
    }
    // console.log(randomIndex)
}



const person1 = {
    name: "Michael Scott",
    quotes: [
        "An office is not for dying. An office is a place for living life to the fullest, to the max, to… an office is a place where dreams come true.",
        "Sometimes I'll start a sentence, and I don't even know where it's going. I just hope I find it along the way.",
        "Do I have a special someone? Well, yeah, of course. A bunch of 'em. My employees.",
        "I love inside jokes. I hope to be a part of one someday.",
        "I'm an early bird and I'm a night owl so I'm wise and I have worms.",
    ],
    company: "Dunder Mifflin"
};


const person2 = {
    name: "Dwight Schrute",
    quotes: null,
    company: "Dunder Mifflin"
}



console.log(getRandomQuote(person1));
console.log(getRandomQuote(person2));
console.log(getRandomQuote());

function anotherFunction(){
    console.log("other proceses that need to run are running because of anotherFunction()")
}


anotherFunction()





