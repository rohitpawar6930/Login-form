const formCard = document.getElementById("formCard");

  function flipCard() {
    formCard.classList.toggle("flip");   // 
    console.log("Form flipped");
  }

  

  function login() {
    const user = document.getElementById("loginUser").value;
    const pass = document.getElementById("loginPass").value;

    if (user === "admin" && pass === "1234") {
      alert("Login successful!");
      console.log("Login successful! Username:", user);
    } else {
      alert("Invalid credentials");
      console.log("Login failed. Entered Username:", user, "Password:", pass);
    }
  }

  function register() {
    const user = document.getElementById("regUser").value;
    const email = document.getElementById("regEmail").value;
    const pass = document.getElementById("regPass").value;

    if (user && email && pass) {
      alert(`Welcome ${user}! Registration complete.`);
      console.log("Registration complete", {
        username: user,
        email: email,
        password: pass, 
      });
      //  flipCard();
    } else {
      alert("Please fill all fields.");
      console.log("Registration failed: Missing fields", {
        username: user,
        email: email,
        password: pass,
      });
    }
  }


















  