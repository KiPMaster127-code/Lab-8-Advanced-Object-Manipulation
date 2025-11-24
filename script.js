// Part 1 Creating student properties
const studentProfile = {
    fullName: "Misha Azaranka",
    age: 24,
    isEnrolled: true,
    subjects: [
        "WRIT 120 - Technical Read and Writing Skills",
        "CPAN 113 - Fundamentals of JavaScript",
        "CPAN 111 - Database Concepts and Design",
        "CPAN 116 - Algorithms and Problem Solving",
        "CPAN 133 - Operating Systems",
        "CPAN 134 - Web Programming and Design"
    ],
    getSummary() {
        return `Student: ${this.fullName}, Age: ${this.age}, Enrolled: ${this.isEnrolled}, Subjects: ${this.subjects.join(", ")}`;
    }
};

console.log("Student Name -", studentProfile.fullName);
console.log("Students Age -", studentProfile.age);
console.log("Summary -", studentProfile.getSummary());

//Part 2 Working with JSON


const studentJSON = JSON.stringify(studentProfile);
console.log("JSON String:", studentJSON);

const BobProfile = JSON.parse(studentJSON);
console.log("BobProfile:", BobProfile);

console.log("Are these objects equal ?", BobProfile === studentProfile);
console.log("Are they same structure ?", JSON.stringify(BobProfile) === JSON.stringify(studentProfile));


