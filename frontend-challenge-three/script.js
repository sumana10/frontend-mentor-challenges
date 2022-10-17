const form = document.getElementById('form');

// const email = document.getElementById('email')

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

form.addEventListener('submit', (e) =>{
  e.preventDefault();

  const email = form['email'].value;

  // alert(email)

//   const emailVal = email.value;

 if(!validateEmail(email))
 form.classList.add('error');
 else
 form.classList.remove('error')

 

})

