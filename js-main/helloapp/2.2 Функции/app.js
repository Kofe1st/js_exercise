function CreateStudent(studentName, studentAge) {
    this.studentName = studentName;
    this.studentAge = studentAge;
}
var student1 = new CreateStudent("Матвей", 19);
var student2 = new CreateStudent("Антон", 20);
console.log("Имя - " + student1.studentName + ", возраст - " + student1.studentAge);
console.log("Имя - " + student2.studentName + ", возраст - " + student2.studentAge);
