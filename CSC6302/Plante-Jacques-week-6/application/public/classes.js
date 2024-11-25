const EMAIL_EXTENSIONS = ['.edu', '.com', '.gov', '.org', '.net', '.mil']

const displayAllStudents = () => {
    let select = document.getElementById('student_select');
    fetch('http://localhost:3000/api/students').then(resp => {
        if (resp.ok) {
            return resp.json();
        } else {
            console.error(resp)
        }
    }).then(students => {
        for (let student of students) {
            select.innerHTML += `
                <option value="${student.id}">${student.firstName} ${student.lastName}</option>
            `
        }
    });
}

const displayStudentClasses = () => {
    let select = document.getElementById('student_select');

    if (select.value !== "") {
        let studentId = select.value;
        fetch(`http://localhost:3000/api/enrollment?studentId=${studentId}`).then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                console.error(resp)
            }
        }).then(classes => {
            let table = document.getElementById('class_table'),
                tbody = table.getElementsByTagName('tbody')[0],
                newHTML = '';
            for (let c of classes) {
                newHTML += `
                    <tr>
                        <td>
                            ${c.subject}
                        </td>
                        <td>
                            ${c.room_number}
                        </td>
                        <td>
                            ${c.teacher_name}
                        </td>
                        <td>
                            ${c.class_grade}
                        </td>
                    </tr>
                `;
            }

            if (!newHTML) {
                newHTML = `
                    <tr>
                        <td colspan="4">Not Enrolled In Classes</td>
                    </tr>
                `
            }

            tbody.innerHTML = newHTML;
        });
    }
}

document.addEventListener('DOMContentLoaded', (e) => {
    displayAllStudents();
});