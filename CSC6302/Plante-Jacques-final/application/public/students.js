const EMAIL_EXTENSIONS = ['.edu', '.com', '.gov', '.org', '.net', '.mil']

const displayAllStudents = () => {
    let table = document.getElementById('student_table'),
        tbody = table.getElementsByTagName('tbody')[0];
    fetch('http://localhost:3000/api/students').then(resp => {
        if (resp.ok) {
            return resp.json();
        } else {
            console.error(resp)
        }
    }).then(students => {
        for (let student of students) {
            tbody.innerHTML += `
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

const validateNewStudent = ({first_name, last_name, email_address, date_of_birth, student_grade}) => {
    let hasErrors = false,
        errorList = {
        first_name    : [],
        last_name     : [],
        email_address : [],
        date_of_birth : [],
        student_grade : []
    };

    if (!first_name) {
        hasErrors = true;
        errorList.first_name.push('Student must have first name');
    }

    if (!last_name) {
        hasErrors = true;
        errorList.last_name.push('Student must have last name');
    }

    if (!email_address) {
        hasErrors = true;
        errorList.email_address.push('Student must provide an email address');
    }

    if (!email_address.includes('@') || !EMAIL_EXTENSIONS.some(ex => email_address.includes(ex))) {
        hasErrors = true;
        errorList.email_address.push('Invalid email address');
    }

    if (!date_of_birth) {
        hasErrors = true;
        errorList.date_of_birth.push('Student must provide a date of birth');
    }

    if (!new Date(date_of_birth)){
        hasErrors = true;
        errorList.date_of_birth.push('Date of birth must be a valid date');
    }

    if (!student_grade) {
        hasErrors = true;
        errorList.student_grade.push('Student must be in a grade');
    }

    if (!parseInt(student_grade)) {
        hasErrors = true;
        errorList.student_grade.push('Student grade must be an integer');
    }

    return {hasErrors, errorList};
}

const getBadRespErrors = (err) => {
    let errorList = {
        primary       : [],
        first_name    : [],
        last_name     : [],
        email_address : [],
        date_of_birth : [],
        student_grade : []
    }

    if (err.status == 403) {
        errorList.primary.push('Permission Denied: You appear to not have access to this functionality');
    } else if (err.status == 409) {
        errorList.primary.push('Duplicate Student: This student either is already in the database, or the email address is shared with another student.');
    }

    return errorList;
}

const displayFormErrors = (errorList) => {
    Object.keys(errorList).forEach(key => {
        let thisErrorList = errorList[key],
            hasErrors     = thisErrorList.length > 0,
            input         = document.querySelector(`input[name="${key}"]`),
            errorField    = document.getElementById(`errors_${key}`);

        if (hasErrors) {
            let errorMsg = '';
            if (input) {
                input.classList.add('error_input');
            }
            thisErrorList.forEach(err => {
                errorMsg += `<span>${err}</span>`;
            });
            errorField.innerHTML = errorMsg;
        } else {
            if (input) {
                input.classList.remove('error_input');
            }
            errorField.innerHTML = '';
        }
    })
}

const addStudent = (event) => {
    event.preventDefault();
    const form        = event.target,
        first_name    = form.querySelector('input[name="first_name"]').value,
        last_name     = form.querySelector('input[name="last_name"').value,
        email_address = form.querySelector('input[name="email_address"').value,
        date_of_birth = form.querySelector('input[name="date_of_birth"').value,
        student_grade = form.querySelector('input[name="student_grade"').value;

    let {hasErrors, errorList} = validateNewStudent({
        first_name,
        last_name,
        email_address,
        date_of_birth,
        student_grade
    });

    if (hasErrors) {
        displayFormErrors(errorList);
        return;
    }

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
    }).then(async resp => {
        if (!resp.ok) {
            errorList = getBadRespErrors(resp);
            displayFormErrors(errorList)
            throw new Error(resp.status, resp.statusText)
        }
        closeStudentModal()
    
        console.log("Student added successfully!");

        insertStudentIntoTable(first_name, last_name, email_address);
    }).catch(error => {
        console.error("Smigbop: ", error);
    });
}

const closeStudentModal = () => {
    let modal = document.getElementsByClassName('modal_container')[0];

    document.body.removeChild(modal);
}

const openStudentModal = () => {
    let modal = document.createElement('div');
    modal.classList.add('modal_container');

    let existingModal = document.getElementById('add-student-modal');

    if (existingModal) {
        // Do not add another modal.
        return;
    }

    modal.innerHTML = `
        <div id="add-student-modal" class="modal" role="modal">
            <h1>Add a Student</h1>
            <form id="add-student-form">
                <div id="errors_primary" class="input_errors"></div>
                <label for="first_name">First Name:</label>
                <input type="text" name="first_name" placeholder="Ex: Johnny" />
                <div id="errors_first_name" class="input_errors"></div>
                <label for="last_name">Last Name:</label>
                <input type="text" name="last_name" placeholder="Ex: Spells" />
                <div id="errors_last_name" class="input_errors"></div>
                <label for="email_address">Email:</label>
                <input type="text" name="email_address" placeholder="Ex: spellsj@merrimack.edu" />
                <div id="errors_email_address" class="input_errors"></div>
                <label for="date_of_birth">Date of Birth:</label>
                <input type="date" name="date_of_birth" />
                <div id="errors_date_of_birth" class="input_errors"></div>
                <label for="student_grade">Student Grade:</label>
                <input type="number" name="student_grade" placeholder="Ex: 10" />
                <div id="errors_student_grade" class="input_errors"></div>
                <div class="modal_button_container">
                    <button type="submit">Add Student</button>
                    <button onclick="closeStudentModal()">Cancel</button>
                </div>
            </form>
        </div>
    `;

    document.body.appendChild(modal);
    let form = modal.querySelector('#add-student-form');
    form.addEventListener('submit', addStudent)
}

document.addEventListener('DOMContentLoaded', (e) => {
    displayAllStudents();
});