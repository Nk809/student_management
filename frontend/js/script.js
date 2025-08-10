const API_URL = 'http://localhost:3000/api/students';

// Fetch all students
fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        const tableBody = document.querySelector('#studentTable tbody');
        tableBody.innerHTML = '';
        data.forEach(student => {
            tableBody.innerHTML += `
                <tr>
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.roll_number}</td>
                    <td>${student.department}</td>
                    <td>${student.email}</td>
                    <td>
                        <button onclick="editStudent(${student.id})">Edit</button>
                        <button onclick="deleteStudent(${student.id})">Delete</button>
                    </td>
                </tr>
            `;
        });
    });

// Delete a student
function deleteStudent(id) {
    if (confirm('Are you sure you want to delete this student?')) {
        fetch(`${API_URL}/${id}`, { method: 'DELETE' })
            .then(res => res.json())
            .then(() => window.location.reload());
    }
}

// Redirect to edit page
function editStudent(id) {
    window.location.href = `edit-student.html?id=${id}`;
}
