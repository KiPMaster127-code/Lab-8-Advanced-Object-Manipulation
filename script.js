// Creating student properties
const studentProfile = {
    fullName: "Misha",
    age: 24,
    isEnrolled: true,
    subjects: [
        "WRIT 120",
        "CPAN 113",
        "CPAN 111",
        "CPAN 116",
        "CPAN 133",
        "CPAN 134"
    ],
    getSummary() {
        return `Student: ${this.fullName}, Age: ${this.age}, Enrolled: ${this.isEnrolled}, Subjects: ${this.subjects.join(", ")}`;
    }
};

console.log("Student Name", studentProfile.fullName);
console.log("Students Age", studentProfile.age);
console.log("Summary", studentProfile.getSummary());

