document.getElementById('predictAgeBtn').addEventListener('click', predictAge);

function predictAge() {
    const name = document.getElementById('nameInput').value.trim();

    if (!name) {
        alert('Please enter a name');
        return;
    }

    const url = `https://api.agify.io?name=${name}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const predictedAge = data.age;
            const count = data.count;
            const message = `The average age of people named ${name} is approximately ${predictedAge} years old. Based on data from ${count} people.`;
            document.getElementById('predictedAge').textContent = message;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Error predicting age');
        });
}