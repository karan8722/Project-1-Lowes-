# Student Grade Management System

A simple web application for managing student marks, calculating totals and averages, assigning grades, and exporting student records.

## Overview

This project is a front-end student grade management dashboard built with HTML, CSS, and JavaScript. It lets you:

- Add student details and subject marks
- Validate marks between 0 and 100
- Calculate total marks and average
- Assign grades based on average performance
- Filter students by grade or minimum average
- Delete student records
- View summary statistics
- Export records as CSV or text report
- Store data locally in the browser using `localStorage`

## Features

- Student registration form for name and four subjects:
  - Math
  - Science
  - English
  - History
- Automatic grade calculation:
  - A: 90+
  - B: 80–89
  - C: 70–79
  - D: 60–69
  - Fail: below 60
- Real-time student table display
- Grade and average filtering
- Summary statistics card:
  - Total students
  - Class average
  - Highest marks
  - Lowest marks
- CSV export of all student data
- Report download in plain text format
- Persistent browser storage using `localStorage`

## Tech Stack

- HTML5
- CSS3
- JavaScript
- Bootstrap 5

## Project Structure

```text
Student-Grade-Management-LOWES/
├── index.html
├── style.css
├── script.js
├── README.md
```

## How to Run

1. Download or clone the project.
2. Open the project folder.
3. Open `index.html` in your web browser.

You do not need a backend or installation step for this project because it runs entirely in the browser.

## Usage

### Add a Student

- Enter the student name.
- Enter marks for Math, Science, English, and History.
- Click the "Add Student" button.
- The student will be added to the table and saved locally.

### Filter Students

- Select a grade from the dropdown, or enter a minimum average.
- Click "Apply Filter" to view matching students.
- Click "Clear Filter" to reset the list.

### Delete a Student

- Use the "Delete" button in the student table row.

### Export Data

- Click "Export CSV" to download all records as a CSV file.
- Click "Download Report" to download a text summary of all student records.

## Local Storage

The app stores student data in the browser's `localStorage`, so records remain available even after refreshing the page.

## Notes

- Mark entries must be between 0 and 100.
- Name field cannot be empty.
- The project is intended as a lightweight academic management demo.


## Conclusion

The Student Grade Management System is a beginner-friendly JavaScript project that demonstrates how HTML, CSS, Bootstrap, and JavaScript can be combined to create a functional web application.

The project provides practical experience with DOM manipulation, form validation, arrays, objects, array methods, Local Storage, dynamic table generation, filtering, and file export.



## License
Developed as a learning project to practice HTML, CSS, Bootstrap, and JavaScript.
