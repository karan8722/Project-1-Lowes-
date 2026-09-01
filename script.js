let students = JSON.parse(localStorage.getItem("students")) || [];

const studentForm = document.getElementById("studentForm");
const tableContainer = document.getElementById("tableContainer");

studentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("Name").value;
    const math = Number(document.getElementById("Math").value);
    const science = Number(document.getElementById("Science").value);
    const english = Number(document.getElementById("English").value);
    const history = Number(document.getElementById("History").value);


    // Validate name
    if (name === "") {
        alert("Please enter student name");
        return;
    }
    // Validate marks
    if (math < 0 || math > 100) {
        alert("Math marks must be between 0 and 100");
        return;
    }

    if (science < 0 || science > 100) {
        alert("Science marks must be between 0 and 100");
        return;
    }

    if (english < 0 || english > 100) {
        alert("English marks must be between 0 and 100");
        return;
    }

    if (history < 0 || history > 100) {
        alert("History marks must be between 0 and 100");
        return;
    }
    console.log("All inputs are valid");
// calculate total 
    const marks = [math, science, english, history];
    const totalMarks = marks.reduce((acc, mark) => acc + mark, 0);
   
// calculate average
    const averageMarks = totalMarks / marks.length;
    

// calculate grade
    let grade;
    if (averageMarks >= 90) {
        grade = "A";
    }
    else if (averageMarks >= 80) {
        grade = "B";
    }
    else if (averageMarks >= 70) {
        grade = "C";
    }
    else if (averageMarks >= 60) {
        grade = "D";
    }
    else {
        grade = "Fail";
    }
//test the console
console.log(`Student: ${name}, Total Marks: ${totalMarks}, Average Marks: ${averageMarks.toFixed(2)}, Grade: ${grade}`);

//create student object and push to students array 
const student = {
        name: name,
        math: math,
        science: science,
        english: english,
        history: history,
        totalMarks: totalMarks,
        averageMarks: averageMarks.toFixed(2),
        grade: grade
    };
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
    displayStatistics();
    studentForm.reset();

});

// Display students in table
function displayStudents() {

    tableContainer.innerHTML = "";

    const table = document.createElement("table");

    table.className = "table table-bordered table-striped text-center";

    table.innerHTML = `
        <thead class="table-primary">
            <tr>
                <th>Name</th>
                <th>Math</th>
                <th>Science</th>
                <th>English</th>
                <th>History</th>
                <th>Total</th>
                <th>Average</th>
                <th>Grade</th>
                <th>Action</th>
            </tr>
        </thead>

        <tbody id="studentTableBody"></tbody>
    `;

    tableContainer.appendChild(table);


    const tableBody = document.getElementById("studentTableBody");


    const rows = students.map(function(student) {

        return `
            <tr>
                <td>${student.name}</td>
                <td>${student.math}</td>
                <td>${student.science}</td>
                <td>${student.english}</td>
                <td>${student.history}</td>
                <td>${student.totalMarks}</td>
                <td>${student.averageMarks}%</td>
                <td>${student.grade}</td>
                <td><button class="btn btn-danger btn-sm" onclick="deleteStudent(${students.indexOf(student)})">Delete</button></td>    
            </tr>
        `;

    });


    tableBody.innerHTML = rows.join("");
}
// Delete student from the list
function deleteStudent(name) {
    students = students.filter(function(student) {
        return students.indexOf(student) !== name;     
    });

    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
    displayStatistics();
}
// Filter students based on grade and average marks
function filterStudents() {

    const grade = document.getElementById("gradeFilter").value;

    const average = Number(
        document.getElementById("averageFilter").value
    );

    const filteredStudents = students.filter(function(student) {

        if (grade !== "all" && student.grade !== grade) {
            return false;
        }

        if (average > 0 && student.averageMarks < average) {
            return false;
        }

        return true;
    });

    displayFilteredStudents(filteredStudents);
}
// Display filtered students in table
function displayFilteredStudents(filteredStudents) {

    tableContainer.innerHTML = `
    
        <table class="table table-bordered table-striped text-center">

            <thead class="table-primary">

                <tr>
                    <th>Name</th>
                    <th>Math</th>
                    <th>Science</th>
                    <th>English</th>
                    <th>History</th>
                    <th>Total</th>
                    <th>Average</th>
                    <th>Grade</th>
                    <th>Action</th>
                </tr>

            </thead>

            <tbody id="studentTableBody">

            </tbody>

        </table>
    `;


    const tableBody =
        document.getElementById("studentTableBody");


    filteredStudents.map(function(student) {

        tableBody.innerHTML += `
        
            <tr>
                <td>${student.name}</td>
                <td>${student.math}</td>
                <td>${student.science}</td>
                <td>${student.english}</td>
                <td>${student.history}</td>
                <td>${student.totalMarks}</td>
                <td>${student.averageMarks}%</td>
                <td>${student.grade}</td>

                <td>
                    <button
                        class="btn btn-danger"
                        onclick="deleteStudent('${student.name}')">
                        Delete
                    </button>
                </td>
            </tr>
            
        `;
    });
}

// Display summary statistics
function displayStatistics() {

    const statisticsContainer =
        document.getElementById("statisticsContainer");

    if (students.length === 0) {
        statisticsContainer.innerHTML = "";
        return;
    }

    // Total students
    const totalStudents = students.length;

    // Class average
    const totalAverage = students.reduce(function(sum, student) {
        return sum + Number(student.averageMarks);
    }, 0);

    const classAverage = totalAverage / totalStudents;

    // Highest total marks
    const highestMarks = students.reduce(function(max, student) {
        return Math.max(max, student.totalMarks);
    }, students[0].totalMarks);

    // Lowest total marks
    const lowestMarks = students.reduce(function(min, student) {
        return Math.min(min, student.totalMarks);
    }, students[0].totalMarks);


    // Display statistics
    statisticsContainer.innerHTML = `
        <div class="card p-4">

            <h3 class="text-primary text-center mb-4">
                Summary Statistics
            </h3>

            <div class="row text-center">

                <div class="col-md-3">
                    <h5>Total Students</h5>
                    <p>${totalStudents}</p>
                </div>

                <div class="col-md-3">
                    <h5>Class Average</h5>
                    <p>${classAverage.toFixed(2)}%</p>
                </div>

                <div class="col-md-3">
                    <h5>Highest Marks</h5>
                    <p>${highestMarks}</p>
                </div>

                <div class="col-md-3">
                    <h5>Lowest Marks</h5>
                    <p>${lowestMarks}</p>
                </div>

            </div>

        </div>
    `;
}

if (students.length > 0) {
    displayStudents();
    displayStatistics();
}


//download CSV file
function exportStudents() {

    let data = "Name,Math,Science,English,History,Total,Average,Grade\n";

    students.forEach(function(student) {

        data += student.name + "," +
                student.math + "," +
                student.science + "," +
                student.english + "," +
                student.history + "," +
                student.totalMarks + "," +
                student.averageMarks + "," +
                student.grade + "\n";
    });

    const file = new Blob([data], { type: "text/csv" });

    const link = document.createElement("a");

    link.href = URL.createObjectURL(file);
    link.download = "students.csv";

    link.click();
}

//dowmload report 
function downloadReport() {

    let data = "";

    students.forEach(function(student) {

        data += "Name: " + student.name + "\n";
        data += "Math: " + student.math + "\n";
        data += "Science: " + student.science + "\n";
        data += "English: " + student.english + "\n";
        data += "History: " + student.history + "\n";
        data += "Total: " + student.totalMarks + "\n";
        data += "Average: " + student.averageMarks + "\n";
        data += "Grade: " + student.grade + "\n";
        data += "------------------\n";

    });

    const file = new Blob([data], { type: "text/plain" });

    const link = document.createElement("a");

    link.href = URL.createObjectURL(file);
    link.download = "student-report.txt";

    link.click();
}