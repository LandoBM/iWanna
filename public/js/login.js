<<<<<<< HEAD
const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
=======
//TESTING 
const loginFormHandler = async(event) => {
    event.preventDefault()


const email = document.querySelector('#email-login').value.trim();
const password = document.querySelector('#password-login').value.trim();
console.log(email, password)
if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/addproduct');
      } else {
        alert(response.statusText);
      }
    }

  }

    const signupFormHandler = async (event) => {
        event.preventDefault();
      
        const name = document.querySelector('#name-signup').value.trim();
        const email = document.querySelector('#email-signup').value.trim();
        const password = document.querySelector('#password-signup').value.trim();
      
        if (name && email && password) {
          const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
          });
      
          if (response.ok) {
            document.location.replace('/addproduct');
          } else {
            alert(response.statusText);
          }
        }
      };
      
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
>>>>>>> 07aca660969a09b3328c4c50621f8b3217e020ab
