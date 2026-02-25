// Create an array of student objects with name and marks. Add a new student. Write a function that adds a grade property (A/B/C/Fail) based on marks. Use object destructuring and the spread operator.

let students=[
    {name:"Ashith",marks:91},
    {name:"Raj",marks:75},
    {name:"Ram",marks:63}
];


students=[
    ...students,
    {name:"Ajay",marks:23}
];

console.log(students);

function studentMarks(studentArray){
    return studentArray.map(({name,marks})=>{
        let grade;
        if(marks>=90){
            grade="A";
        }else if(marks>=70){
            grade="B";
        }else if(marks>=50){
            grade="C";
        }else{
            grade="F";
        }

        return {name,marks,grade};
    })
}

let studentGrade=studentMarks(students);

console.log(studentGrade);