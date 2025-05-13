// script.js
const medicines = [
    { name: "Aspirin", description: "Pain reliever and anti-inflammatory.", dosage: "500mg" },
    { name: "Ibuprofen", description: "Pain reliever, anti-inflammatory.", dosage: "200mg" },
    { name: "Amoxicillin", description: "Antibiotic used to treat infections.", dosage: "500mg" },
    { name: "Lisinopril", description: "Used to treat high blood pressure.", dosage: "10mg" },
    { name: "Metformin", description: "Used to manage blood sugar levels.", dosage: "500mg" }
];

function searchMedicines() {
    const query = document.getElementById('search').value.toLowerCase();
    const filteredMedicines = medicines.filter(medicine =>
        medicine.name.toLowerCase().includes(query)
    );
    displayMedicines(filteredMedicines);
}

function displayMedicines(medicinesToDisplay) {
    const medicinesDiv = document.getElementById('medicines');
    medicinesDiv.innerHTML = ''; // Clear previous results
    if (medicinesToDisplay.length === 0) {
        medicinesDiv.innerHTML = '<p>No medicines found.</p>';
        return;
    }
    medicinesToDisplay.forEach(medicine => {
        const div = document.createElement('div');
        div.className = 'medicine-item';
        div.innerHTML = `
            <h3>${medicine.name}</h3>
            <p><strong>Description:</strong> ${medicine.description}</p>
            <p><strong>Dosage:</strong> ${medicine.dosage}</p>
        `;
        medicinesDiv.appendChild(div);
    });
}
