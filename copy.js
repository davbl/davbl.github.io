document.getElementById("copy-icon").addEventListener("click", function () {
  const email = "dave@dnarna.co";
  navigator.clipboard
    .writeText(email)
    .then(function () {
      // Replace the span text with "Copied!"
      const emailText = document.getElementById("email-text");
      emailText.textContent = "Copied!";

      // Revert the text back to the original after a delay
      setTimeout(function () {
        emailText.textContent = email;
      }, 1000); // 1 second delay
    })
    .catch(function (error) {
      console.error("Failed to copy text: ", error);
    });
});
