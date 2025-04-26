document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("heritageContactForm");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent form submission
  
      const name = form.fullname.value.trim();
      const email = form.email.value.trim();
      const phone = form.phone.value.trim();
      const subject = form.subject.value;
      const message = form.message.value.trim();
      const consent = form.querySelector('input[type="checkbox"]').checked;
  
      // Email validation
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      // Phone number validation
      const phonePattern = /^[0-9]{10}$/;
  
      if (name === "" || email === "" || subject === "" || message === "") {
        alert("Please fill in all required fields.");
        return;
      }
  
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      if (phone && !phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
      }
  
      if (!consent) {
        alert("You must agree to be contacted by Indian Heritages.");
        return;
      }
  
      // If everything is valid
      alert("Thank you! Your message has been successfully submitted.");
      form.reset();
    });
  });
  