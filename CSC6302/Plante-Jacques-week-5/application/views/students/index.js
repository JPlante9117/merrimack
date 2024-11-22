const displayAllStudents = () => {
    let table = document.getElementById('student_table');
    fetch('http://localhost:3000/api/students').then(resp => {
        if (resp.ok) {
            return resp.json();
        } else {
            console.error(resp)
        }
    }).then(students => {
        for (student of students) {
            table.innerHTML += `
                <tr>
                    <td>
                        ${student.firstName}
                    </td>
                    <td>
                        ${student.lastName}
                    </td>
                    <td>
                        ${student.emailAddress}
                    </td>
                </tr>
            `;
        }
    });
}

const insertStudentIntoTable = (firstName, lastName, email) => {
    let table = document.getElementById('student_table');
    table.innerHTML += `
        <tr>
            <td>
                ${firstName}
            </td>
            <td>
                ${lastName}
            </td>
            <td>
                ${email}
            </td>
        </tr>
    `;
}

const addStudent = (event) => {
    event.preventDefault();
    const form        = event.target,
        first_name    = form.querySelector('input[name="first_name"]').value,
        last_name     = form.querySelector('input[name="last_name"').value,
        email_address = form.querySelector('input[name="email_address"').value,
        date_of_birth = form.querySelector('input[name="dob"').value,
        student_grade = form.querySelector('input[name="grade"').value;

    fetch('/api/students', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            first_name,
            last_name,
            email_address,
            date_of_birth,
            student_grade
        })
    }).then(resp => {
        if (!resp.ok) {
            throw new Error(resp.status, resp.statusText)
        }
        let modal = document.getElementById('add-student');

        document.removeChild(modal);
    
        console.log("Student added successfully!");

        insertStudentIntoTable(first_name, last_name, email_address);
    }).catch(error => {
        console.error("Error: ", error);
    })
}

const openStudentModal = () => {
    let modal = document.createElement('div');
    modal.role = 'modal';
    modal.classList.add('modal');

    modal.innerHTML = `
        <h1>Add a Student</h1>
        <form id="add-student-form">
            <label for="first_name">First Name:</label>
            <input type="text" name="first_name" placeholder="First Name" />
            <label for="last_name">Last Name:</label>
            <input type="text" name="last_name" placeholder="Last Name" />
            <label for="email_address">Email:</label>
            <input type="text" name="email_address" placeholder="Email" />
            <label for="dob">Date of Birth:</label>
            <input type="date" name="dob" placeholder="Birthday" />
            <label for="grade">Student Grade:</label>
            <input type="text" name="grade" placeholder="Grade in School" />
            <button type="submit">Add Student</button>
        </form>
    `;

    console.log(modal);

    document.body.appendChild(modal);
}

document.addEventListener('DOMContentLoaded', (e) => {
    displayAllStudents();
    const form = document.getElementById('add-student-form');
    form.addEventListener('submit', addStudent);
});