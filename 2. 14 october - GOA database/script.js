let students = [
    { 
        name: "Sandro Zabakhidze", 
        motherName: "???", 
        facebook: "facebook.com/za_baxx", 
        age: 15, 
        groupLeader: "Leader A" 
    },
    { 
        name: "Data Diasamidze", 
        motherName: "???", 
        facebook: "facebook.com/Diassaa_", 
        age: 15, 
        groupLeader: "Leader B" 
    }
];

document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const role = document.getElementById('role').value;

    document.getElementById('signInForm').style.display = 'none';
    document.getElementById('studentManagement').style.display = 'block';

    if (role === 'Viewer') {
        document.getElementById('roleTitle').textContent = 'Viewer: You can see students list';
        loadTable(false);
    } 
    else if (role === 'Moderator') {
        const password = prompt("Please enter the moderator password:");
        
        if (password === 'GOA_isthebest') {
            document.getElementById('roleTitle').textContent = 'Moderator: You can manage students list';
            document.getElementById('addStudentSection').style.display = 'block';
            document.getElementById('actionsHeader').style.display = 'table-cell';
            loadTable(true);
        } else {
            alert("Incorrect password. Access denied.");
            document.getElementById('signInForm').style.display = 'block';
            document.getElementById('studentManagement').style.display = 'none';
        }
    }
});

function loadTable(isModerator) {
    const tableBody = document.querySelector('#studentTable tbody');
    tableBody.innerHTML = '';

    students.forEach((student, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td contenteditable="${isModerator}">
                ${student.name}
            </td>
            <td contenteditable="${isModerator}">
                ${student.motherName}
            </td>
            <td contenteditable="${isModerator}">
                <a href="${student.facebook}" target="_blank">Profile</a>
            </td>
            <td contenteditable="${isModerator}">
                ${student.age}
            </td>
            <td contenteditable="${isModerator}">
                ${student.groupLeader}
            </td>
            ${isModerator 
                ? `<td><button onclick="deleteStudent(${index})">Delete</button></td>` 
                : ''
            }
        `;

        tableBody.appendChild(row);
    });
}

document.getElementById('addStudentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const motherName = document.getElementById('motherName').value;
    const facebook = document.getElementById('facebook').value;
    const age = document.getElementById('age').value;
    const groupLeader = document.getElementById('groupLeader').value;

    students.push({ 
        name, 
        motherName, 
        facebook, 
        age, 
        groupLeader 
    });

    loadTable(true);
});

function deleteStudent(index) {
    students.splice(index, 1);
    loadTable(true); 
}
