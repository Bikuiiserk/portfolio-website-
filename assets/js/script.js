// Dynamically load assignments
document.addEventListener('DOMContentLoaded', () => {
    const assignmentList = document.getElementById('assignment-list');

    // Sample assignments
    const assignments = [
        { name: "Assignment 1", link: "assignments/assignment1.pdf" },
        { name: "Assignment 2", link: "assignments/assignment2.pdf" }
    ];

    assignments.forEach(assignment => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = assignment.link;
        a.innerText = assignment.name;
        li.appendChild(a);
        assignmentList.appendChild(li);
    });
});
