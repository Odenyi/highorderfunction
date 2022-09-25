const students = [
    {
        name: "brian", age:20, admission:4309

    },
    {
        name: "Lewis", age:21, admission:4310
    },
    {
        name: "Karen", age:25, admission:4311
    }
]
let adults = [];
const areadults = students.filter((student)=>student.age>=21)
for(let i=0; i<students.length; i++){
    if(students[i].age>=21){
        adults.push(students[i].name)
    }
}
console.log(areadults);
students.forEach((student)=>console.log(student))
// foreach
// map
//reduce
//filter
//sort