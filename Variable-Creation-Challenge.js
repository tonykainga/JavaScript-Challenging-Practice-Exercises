let firstName= "Sarabi";
// Declares a variable 'firstName' and assigns it the value "Sarabi"
let secondName="Chichia";
// Declares a variable 'secondName' and assigns it the value "chichia"
const herAge=20;
// Declares a constant 'herAge' and assigns it the value 20
const position= "Student"
// Declares a constant 'role' and assigns it the value "Student"
let isStudent=true;
// Declares a boolean variable 'student' and sets it to true
var role=" Part Time Student";
role="Good student";
// Declares a variable 'role' with initial value
// Reassigns a new value to the same variable
var middleName=null;
// Declares a variable 'middleName' and sets it to no value (null)
let subjects=["English","Math","Kiswahili","Science"];
//  Array storing a list of subjects

console.log(`Name: ${firstName} ${middleName ?? ""} ${secondName}, Age: ${herAge}, Position: ${position}, Role: ${role}, Student: ${isStudent}, Subjects: ${subjects.join(", ")}`);

console.log(
  `firstName: ${typeof firstName}, 
secondName: ${typeof secondName}, 
herAge: ${typeof herAge}, 
position: ${typeof position}, 
isStudent: ${typeof isStudent}, 
role: ${typeof role}, 
middleName: ${typeof middleName}, 
subjects: ${typeof subjects}`
);
