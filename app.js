// Fetching the JSON data from the file
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Getting the reference of the table body
        const tbody = document.getElementById('jsonTable').getElementsByTagName('tbody')[0];

        // Looping through each item in the JSON data
        data.forEach(item => {
            // Creating a new row
            const newRow = tbody.insertRow();

            // Inserting new cells and assigning values to them
            newRow.insertCell().textContent = item.type;
            newRow.insertCell().textContent = item.title;
            newRow.insertCell().textContent = item.category;
            newRow.insertCell().textContent = item.description;
            newRow.insertCell().textContent = item.section_about;
            newRow.insertCell().textContent = item.section_actions;
            newRow.insertCell().textContent = item.section_doc;
            newRow.insertCell().textContent = item.AIActors;
            newRow.insertCell().textContent = item.Topic;
        });
    })
    .catch(error => console.error('Error:', error));
