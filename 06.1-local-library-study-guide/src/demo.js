/* 

*/

const courses = require("../data/courses");
const instructors = require("../data/instructors");
const students = require("../data/students");

//1. Get Total courses count
function getTotalCoursesCount(courses=[]) {
    return courses.length
}

// console.log(getTotalCoursesCount(courses))

//2. Get Total accounts count
function getTotalAccountsCount(accounts=[]) {
    return accounts.length
}

//3. Find instructor by Id-> given array of instructors and an id, find the instructor object that matches the given id
function findInstructorById(instructors=[], id) {
    const result = instructors.find((element)=>{
        return element.id === id
    })
    return result;
}

// console.log(findInstructorById(instructors, 3))

//4. Find course by Id-> given array of courses and an id, find the course object that matches the given id
function findCourseById(courses=[], id) {
    const result = courses.find((element)=>{
        return element.id === id
    })
    return result;
}
// console.log(findCourseById(courses, 3))

//5. Find student by Id-> given array of students and an id, find the student object that matches the given id
function findstudentById(students, id) {
    const result = students.find((element)=>{
        return element.id === id
    })
    return result;
}

// console.log(findstudentById(students, 3))

//6. Given a list of students, return back the list of students sorted by their first name
function sortStudentsByFirstName(students) {
    students.sort((studentA, studentB)=>{
        return studentA.name.first.toLowerCase() > studentB.name.first.toLowerCase() ? 1: -1
    })
    return students
}

// console.log(sortStudentsByFirstName(students))


//7. Partition courses by student on pace
//find the courses that have all students on pace and find courses that have at least one student not on pace. Return back an array containing 2 sub-arrays inside it. First sub-array will have the courses where all students are on pace, and the second sub-array will have the courses where not all students are on pace



function partitionCoursesByStudentProgress(courses=[]) {
    //create array for onPace courses
    const onPace = [];
    //create array for notOnPace Courses
    const notOnPace = [];
    //loop through the courses array
    courses.forEach((courseObj)=>{
        //get access to roster for each course
        const {roster} = courseObj;
        //have flag to represent if the courseObj is on pace or not
        let isOnPace = true;
        //loop through the roster
        roster.forEach((rosterObj)=>{
            //for each element we will look at onPace. if everyone is on pace, we will push this to the "onPaceCourses array" otherwise we will push the current course to notOnPaceCourses array
            if(rosterObj.onPace === false){
                //toggle the flag to false
                isOnPace = false
                // return;
            }
        })

        if(isOnPace === true){
            onPace.push(courseObj)
        }else{
            notOnPace.push(courseObj)
        }
    })
    return [onPace,notOnPace]
}


function partitionCoursesByStudentProgress2(courses=[]) {
    //filter the courses on pace
    const onPaceCourses = courses.filter((courseObj)=>{
        //get access to roster for each course
        const {roster} = courseObj;

        //check if every element in roster has onPace === true
        const isOnPace = roster.every((rosterObj)=>{
            return rosterObj.onPace === true
        })

        return isOnPace;
    })
    //filter the courses not on pace
    const notOnPace = courses.filter((courseObj)=>{
        //get access to roster for each course
        const {roster} = courseObj;

        //check if every element in roster has onPace === true
        const isNotOnPace = roster.some((rosterObj)=>{
            return rosterObj.onPace === false
        })

        return isNotOnPace;
    })

    return [onPaceCourses, notOnPace]
}


// console.log(partitionCoursesByStudentProgress2(courses))

/* 

8. getStudentsForCourse - Given a course object, for its course roster, return an array of students that match the courses roster list, and add the onPace property from the roster objects to the student object. 

let oneCourse = {
    id: 1,
    name: "Javascript Fundamentals",
    category: "Software Engineering",
    instructorId: 3,
    roster: [
        {
            studentId: 1,
            onPace: true
        },
        {
            studentId: 2,
            onPace: false
        },
        {
            studentId: 3,
            onPace: true
        },
        {
            studentId: 4,
            onPace: true
        },
        {
            studentId: 5,
            onPace: true
        }
    ]
}
*/

function getStudentsForCourse(course={}, students=[]) {
    const {roster} = course;
    const result = [];
    //loop through the roster of the given course
    roster.forEach((rosterObj)=>{
        //look at the id of the rosterObj so we can match it with the id of a student in the students array
        // rosterObj.studentId
        let foundStudent = undefined;
        //loop through the students array
        students.forEach((studentObj)=>{
            if(studentObj.id === rosterObj.studentId){
                foundStudent = studentObj
            }
        })
        result.push(foundStudent)
    })
    return result;
}

let oneCourse = {
    id: 1,
    name: "Javascript Fundamentals",
    category: "Software Engineering",
    instructorId: 3,
    roster: [
        {
            studentId: 1,
            onPace: true,
        },
        // {
        //     studentId: 2,
        //     onPace: false,
        // },
        // {
        //     studentId: 3,
        //     onPace: true,
        // },
        // {
        //     studentId: 4,
        //     onPace: true,
        // },
        // {
        //     studentId: 5,
        //     onPace: true,
        // },
    ],
};

// console.log(getStudentsForCourse(oneCourse, students))

/* 
9. getTotalNumberOfClassesForStudent- Given a student object and an array of course objects, find the number of times this student object's id appears in the all the courses rosters array

let student1 = {
        id: 1,
        name: {
            first: "Bugs",
            last: "Bunny"
        },
    }
*/

function getTotalNumberOfClassesEnrolledIn(student={}, courses=[]) {
    //set counter = 0;
    let counter = 0;
    //loop through the courses array
    courses.forEach((courseObj)=>{
        //access the roster of each course
        const {roster} = courseObj;
        //loop through the roster
        roster.forEach((rosterObj)=>{
            //if the given student's id matches the current rosterObj's studentId, then increse count by 1
            if(student.id === rosterObj.studentId){
                //for each rosterObj whose id is matching the given students id, we will increment the count by 1
                counter++
            }
        })

    })

    //return the counter
    return counter;
}

function getTotalNumberOfClassesEnrolledIn2(student={}, courses=[]) {
    //set counter = 0;
    let counter = courses.reduce((accumulator, courseObj)=>{
        //access the roster of each course
        const {roster} = courseObj;
        //loop through the roster
        roster.forEach((rosterObj)=>{
            //if the given student's id matches the current rosterObj's studentId, then increse count by 1
            if(student.id === rosterObj.studentId){
                //for each rosterObj whose id is matching the given students id, we will increment the count by 1
                accumulator++
            }
        })

        return accumulator
    },0)

    //return the counter
    return counter;
}


let student1 = {
    id: 1,
    name: {
        first: "Bugs",
        last: "Bunny",
    },
};



// console.log(getTotalNumberOfClassesEnrolledIn2(student1, courses));

/* 
10- Given a student object, an array of course objects and an array of instructors objects-> give back all the course objects including the instructor information embedded into the course object for the courses the student is enrolled in

[]

*/

let student2 = {
    id: 2,
    name: {
        first: "Scooby",
        last: "Doo"
    }
}

function getCoursesStudentEnrolledIn(student={}, courses=[], instructors=[]) {
    //create the array to build out
    const result = [];
    //look at id of given student
    //examine every course in the courses array. for each course:
    courses.forEach((courseObj)=>{
        //look at the roster of currentCourse by looping through it
        const {roster} = courseObj;
        roster.forEach((rosterObj)=>{
            //check if we can find the rosterObj whose studentId matches the given students id. If we do, 
            if(rosterObj.studentId === student.id){
                //modify the courseObj to have a instructor property
                courseObj.instructor = instructors.find((instructorObj)=>{
                    return instructorObj.id === courseObj.instructorId
                })
                result.push(courseObj)
            }
        })
    })
    return result;
}

function getCoursesStudentEnrolledIn2(student={}, courses=[], instructors=[]) {
    const result = courses.filter((courseObj)=>{
        //look at the roster of currentCourse by looping through it
        const {roster} = courseObj;
        let found = false;
        roster.forEach((rosterObj)=>{
            //check if we can find the rosterObj whose studentId matches the given students id. If we do, 
            if(rosterObj.studentId === student.id){
                //modify the courseObj to have a instructor property
                courseObj.instructor = instructors.find((instructorObj)=>{
                    return instructorObj.id === courseObj.instructorId
                })
                found = true;
            }
        })
        return found;
    })
    return result;
}

// console.log(getCoursesStudentEnrolledIn2(student2, courses, instructors));

/*
11. Get count of courses who have at least on student not onPace- similar to getBooksBorrowedCount(books)
*/


function getCoursesNotOnPaceCount(courses=[]) {
    //initialize a counter = 0
    let counter = 0;
    //look at each and every course -> loop
    courses.forEach(({roster})=>{
        //look at the roster for each course
        // const {roster} = courseObj;
        //look at each rosterObj in the roster -> loop
        for(let i = 0; i< roster.length;i++){
            if(roster[i].onPace === false){
                counter++
                break;
            }
        }
    })
    return counter;
}

function getCoursesNotOnPaceCount2(courses=[]) {
    //initialize a counter = 0
    let counter = courses.reduce((accumulator, courseObj)=>{
        //look at the roster for each course
        const {roster} = courseObj;
        //look at each rosterObj in the roster -> loop
        // for(let i = 0; i< roster.length;i++){
        //     if(roster[i].onPace === false){
        //         accumulator++
        //         break;
        //     }
        // }
        /* 
         // find way
         const foundSomeoneNotOnPace = roster.find((rosterObj)=>{
             return rosterObj.onPace === false
         })
         if(foundSomeoneNotOnPace !== undefined){
             accumulator++
         }
        */
        const foundSomeoneNotOnPace = roster.some((rosterObj)=>{
            return rosterObj.onPace === false
        })
        if(foundSomeoneNotOnPace === true){
            accumulator++
        }

        return accumulator;

    },0)

    return counter;
}

// console.log(getCoursesNotOnPaceCount(courses));

/* 
12. Get most common course categories. Output in this format:

[
    { name: "Software Engineering", count: 3 },
    { name: "Finance", count: 2 },
    { name: "Psychology", count: 2 },
]


lookup = { 'Software Engineering': 3, Psychology: 2, Finance: 2 } => ["softwareenginereing", "psychology", "finance"]
*/

const getMostCommonCategories = (courses=[]) => {
    //initialize the object
    const lookup = {}
    //loop through courses
    courses.forEach((courseObj)=>{
        const {category} = courseObj;
        //if the lookup does not contain a key representing the current courseObjs category, then create a key representing that category, and set the value to 1
        // if(!lookup.hasOwnProperty(category)){
        //     lookup[category] = 1;
        // }
        if(lookup[category] === undefined){ //if lookup at the current category ==== undefined
            lookup[category] = 1;
        }else{
            lookup[category]++
        }
    })

    //extract the keys from lookup into an array
    const categoryKeys = Object.keys(lookup) //[ 'Software Engineering', 'Psychology', 'Finance' ]
    
    const result = categoryKeys.map((category)=>{
        return {name: category, count: lookup[category]}
    })

    return result.slice(0,2)
};

// console.log(getMostCommonCategories(courses));

/* 
13. Get most popular courses- find the top 3 largest courses based on roster size


Output in this format: 
[
  { name: 'Javascript Fundamentals', rosterSize: 5 },
  { name: 'Bread And Cheddar- The Fundamentals', rosterSize: 4 },
  { name: 'Python Fundamentals', rosterSize: 3 }
]
*/



function getMostPopularCourses(courses=[]) {
    //sort the courses by the roster size
    courses = sortCoursesByRosterSize(courses)
    const top3courses = courses.slice(0,3);

    const result = top3courses.map((courseObj)=>{
        return {name: courseObj.name, rosterSize: courseObj.roster.length}
    })

    return result;
    
}

// console.log(getMostPopularCourses(courses));

/* 

14. Get instructors of 3 largest classes.

Output in this format: 

[
  { name: 'Rob Dahal', numStudents: 5 },
  { name: 'Wayne Dyer', numStudents: 4 },

]


[

]

*/

function instructorsOfLargestClasses(courses=[], instructors=[]) {
    courses = sortCoursesByRosterSize(courses)
    const top3courses = courses.slice(0,3);

    const result = [];
    //find the instructors from each course in top3courses
    top3courses.forEach((courseObj)=>{
        const {instructorId} = courseObj;

        const foundInstructor = instructors.find((instructorObj)=>{
            return instructorId === instructorObj.id
        })
        const transformation = { name: helperJoinFirstAndLastNames(foundInstructor.name.first, foundInstructor.name.last), numStudents: courseObj.roster.length }
        result.push(transformation)
    })

    return result;
}


function instructorsOfLargestClassesDestructuredWay(courses=[], instructors=[]) {
    courses = sortCoursesByRosterSize(courses)
    const top3courses = courses.slice(0,3);
    return top3courses.map(({instructorId, roster})=>{
        const {name: {first,last}} = instructors.find(({id})=> instructorId === id)
        return { name: helperJoinFirstAndLastNames(first, last), numStudents: roster.length }
    })
}


const instructorsOfLargestClassesDestructuredWayOneLiner = (courses=[], instructors=[]) => sortCoursesByRosterSize(courses).slice(0,3).map(({instructorId, roster})=>{
    const {name: {first,last}} = instructors.find(({id})=> instructorId === id)
    return { name: helperJoinFirstAndLastNames(first, last), numStudents: roster.length }
})


function helperJoinFirstAndLastNames(first, last) {
    return `${first} ${last}`;
}

function sortCoursesByRosterSize(courses=[]){
    courses.sort((courseA,courseB)=>{
        return courseB.roster.length - courseA.roster.length
    })
    return courses
}

console.log(instructorsOfLargestClassesDestructuredWay(courses, instructors));

