let students = []
function addStudent() {
    const studentName = document.getElementById('student-name').value
    const grade = parseFloat(document.getElementById('grade').value)
    if (studentName && !isNaN(grade)) {
        students.push({ name: studentName, grade: grade })
        document.getElementById('student-name').value = ''
        document.getElementById('grade').value = ''
    } else {
        alert("Please enter valid student name and grade.")
    }
}
function displayGrades() {
    const gradesList = document.getElementById('grades-list')
    gradesList.innerHTML = ''
    students.forEach((student, index) => {
        const listItem = document.createElement('li')
        listItem.textContent = `${index + 1}. ${student.name} - ${student.grade}`
        gradesList.appendChild(listItem)
    });
}
function calculateAverage() {
    if (students.length === 0) {
        document.getElementById('average-grade').textContent = 'N/A'
        alert("No students added yet.")
        return
    }
    const totalGrades = students.reduce((total, student) => total + student.grade, 0)
    const averageGrade = (totalGrades / students.length).toFixed(2)
    document.getElementById('average-grade').textContent = averageGrade
}
