function addcart() {
  alert("Flower Added to Cart");
}

function getUserEmail() {
  let userEmail = document.getElementById("email");
  const emailAddress = userEmail.value;
  console.log(emailAddress);
  alert(
    "Your Email: " +
      '"' +
      emailAddress +
      '"' +
      " is added to our database. Thanks We will inform you about aur promotion preodically"
  );
}
