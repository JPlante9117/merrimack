const EMAIL_EXTENSIONS = ['.edu', '.com', '.gov', '.org', '.net', '.mil']

const displayAllTeachers = () => {
    let select = document.getElementById('teacher_select');
    fetch('http://localhost:3000/api/teachers').then(resp => {
        if (resp.ok) {
            return resp.json();
        } else {
            console.error(resp)
        }
    }).then(teachers => {
        for (let teacher of teachers) {
            select.innerHTML += `
                <option value="${teacher.firstName} ${teacher.lastName}">${teacher.firstName} ${teacher.lastName}</option>
            `
        }
    });
}

const displayTeachersStudents = () => {
    let select = document.getElementById('teacher_select');

    if (select.value !== "") {
        let [firstName, lastName] = select.value.split(" ");
        fetch(`http://localhost:3000/api/getTeachersStudents?fname=${firstName}&lname=${lastName}`).then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                console.error(resp);
            }
        }).then(students => {
            let table = document.getElementById('student_table'),
                tbody = table.getElementsByTagName('tbody')[0],
                newHTML = [];

            for (let student of students) {
                newHTML += `
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
                        <td>
                            ${student.subject}
                        </td>
                        <td>
                            ${student.roomNumber}
                        </td>
                    </tr>
                `;
            }

            tbody.innerHTML = newHTML;
        })
    }
}

document.addEventListener('DOMContentLoaded', (e) => {
    displayAllTeachers();
});