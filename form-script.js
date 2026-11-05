document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('hospitalEntryForm');

  if (form) {
    form.addEventListener('submit', (e) => {
      // Basic fast client-side verification
      const phone = document.getElementById('phone').value;
      
      if (phone.length < 7) {
        alert('Please enter a valid phone number.');
        e.preventDefault();
        return;
      }

      // Form proceeds to submit and navigate to success.html
    });
  }
});
