const API_URL = 'http://localhost:3000/api/students';

// Get ID from query params
const urlParams = new URLSearchParams(window.location.search);
const studentId = urlParams.get('id');

// Load existing data
fetch(`${API_URL}/${studentId}`)
    .then(res => res.json())
    .then(student => {
        document.querySelector('input[name="name"]').value = student.name;
        document.querySelector('input[name="roll_number"]').value = student.roll_number;
        document.querySelector('input[name="department"]').value = student.department;
        document.querySelector('input[name="email"]').value = student.email;
    });

// Update on form submit
document.getElementById('editForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const updatedData = {
        name: this.name.value,
        roll_number: this.roll_number.value,
        department: this.department.value,
        email: this.email.value
    };

    fetch(`${API_URL}/${studentId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData)
    })
    .then(res => res.json())
    .then(() => {
        alert('Student updated successfully!');
        window.location.href = 'index.html';
    });
});
