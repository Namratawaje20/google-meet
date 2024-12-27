const participants = [
    { name: 'Namrata', image: 'w1.png' },
      { name: 'Pratik', image: 'b1.png' },
      { name: 'AAditya', image: 'b2.png' },
      { name: 'Sarthak', image: 'b3.png' },
      { name: 'Vishakha', image: 'w2.png' },
      { name: 'Rushi', image: 'b1.png' },
      { name: 'Darshan', image: 'b2.png' },
      { name: 'Geeta', image: 'w3.png' },
      { name: 'Pallavi', image: 'w1.png' },
      { name: 'tejas', image: 'b1.png' },
      { name: 'Prashant', image: 'b2.png' },
      { name: 'Suvarna', image: 'w1.png' },
      { name: 'Varsha', image: 'w2.png' },
      { name: 'Akshada', image: 'w3.png' },
      { name: 'Tanuja', image: 'w1.png' },
      { name: 'Sumit', image: 'b3.png' },
      { name: 'Deven', image: 'w3.png'},
      { name: 'Tushar', image: 'b1.png' },
      { name: 'sudarshan', image: 'b2.png' },
      { name: 'santu', image: 'b3.png' },
      { name: 'Megha', image: 'w2.png' },
    ];
    
    const participantsContainer = document.getElementById('participants-container');
    
    function displayParticipants(participantList) {
      participantsContainer.innerHTML = '';
      participantList.forEach((participant) => {
        participantsContainer.innerHTML += `
          <div class='participant-card'>
            <img src="${participant.image}" alt="${participant.name}">
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
    