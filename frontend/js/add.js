const API_URL = 'http://localhost:3000/api/students';

document.getElementById('addForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
        name: this.name.value,
        roll_number: this.roll_number.value,
        department: this.department.value,
        email: this.email.value
    };

    fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(() => {
        alert('Student added successfully!');
        window.location.href = 'index.html';
    });
});
