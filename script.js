const participants = [
  { name: 'Namrata', image: './img/woman-1.png' },
  { name: 'Pratik', image: './img/boy-3.png' },
  { name: 'Aaditya', image: './img/boy-2.png' },
  { name: 'Tejas', image: './img/boy-1.png' },
  { name: 'Geeta', image: './img/woman-2.jpg' },
  { name: 'Tushar', image: './img/boy-1.png' },
  { name: 'Sarthak', image: './img/boy-2.png' },
  { name: 'Pallavi', image: './img/woman-1.png' },
  { name: 'Suvarna', image: './img/woman-3.jpg' },
  { name: 'Sudarshan', image: './img/boy-2.png' },
  { name: 'Svarup', image: './img/boy-3.png' },
  { name: 'Rutuja', image: './img/woman-1.png' },
  { name: 'Rohini', image: './img/woman-2.jpg' },
  { name: 'Bharti', image: './img/woman-3.jpg' },
  { name: 'Seema', image: './img/woman-2.jpg' },
  { name: 'Aaryan', image: './img/boy-2.png' },
  { name: 'Patu', image: './img/boy-1.png' },
  { name: 'Shevta', image: './img/woman-1.png' },
  { name: 'Netra', image: './img/woman-2.jpg' },
  { name: 'Vishakha', image: './img/woman-2.jpg' },
  { name: 'Tanuja', image: './img/woman-1.png' },
  { name: 'Chetan', image: './img/boy-1.png' },
  { name: 'Jivitesh', image: './img/boy-3.png' },
];


const participantsContainer = document.getElementById('participants-container');

function displayParticipants(participantList) {
  participantsContainer.innerHTML = '';
  participantList.forEach((participant) => {
    participantsContainer.innerHTML += `
      <div class='participant-card'>
        <img src="${participant.image}" alt="${participant.name}" onerror="this.src='./img/placeholder.png'">
        <span>${participant.name}</span>
      </div>
    `;
  });
}

displayParticipants(participants);

function filterParticipants() {
  const searchQuery = document.getElementById('search').value.toLowerCase();
  const filteredParticipants = participants.filter(participant => 
    participant.name.toLowerCase().includes(searchQuery)
  );
  displayParticipants(filteredParticipants);
}
