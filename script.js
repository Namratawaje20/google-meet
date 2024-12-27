const participants = [
    { name: 'Namrata', image: 'woman-1.png' },
      { name: 'Pratik', image: 'boy-1.png' },
      { name: 'AAditya', image: 'boy-2.png' },
      { name: 'Sarthak', image: 'boy-1.png' },
      { name: 'Vishakha', image: 'woman-2.png' },
      { name: 'Rushi', image: 'boy-1.png' },
      { name: 'Darshan', image: 'boy-2.png' },
      { name: 'Geeta', image: 'woman-2.png' },
      { name: 'Pallavi', image: 'woman-1.png' },
      { name: 'tejas', image: 'boy-1.png' },
      { name: 'Prashant', image: 'boy-2.png' },
      { name: 'Suvarna', image: 'woman-1.png' },
      { name: 'Varsha', image: 'woman-2.png' },
      { name: 'Akshada', image: 'woman-1.png' },
      { name: 'Tanuja', image: 'woman-2.png' },
      { name: 'Sumit', image: 'boy-2.png' },
      { name: 'Deven', image: 'woman-1.png'},
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
    