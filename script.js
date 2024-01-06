const ageInput = document.getElementById('ageInput');
    const checkAgeButton = document.getElementById('checkAge');
    const ageCard = document.getElementById('ageCard');
    const ageMessage = document.getElementById('ageMessage');

    checkAgeButton.addEventListener('click', () => {
      const age = parseInt(ageInput.value);
      ageCard.style.display = 'block';

      if (age >= 18) {
        ageMessage.textContent = 'Congratulations! You are an Adult.';
      } else {
        ageMessage.textContent = 'You are a child. You will be an adult soon!!';
      }
    });