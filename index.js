// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };
  
//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     });

const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
  };
  
  // method: "POST" is missing from the object below
//   const configurationObject = {
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     })
//     .catch(function (error) {
//       alert("Bad things! Ragnarők!");
//       console.log(error.message);
//     });


const submitData = (name, email) => {
    const formUser = {
        name: name,
        email: email
    };

    const configurationObject = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formUser),
    };


  return fetch('http://localhost:3000/users', configurationObject)
  .then(response => response.json())
  .then(data => console.log(data))

  const dataId = data.id
    // .catch(error => console.log(error.message),
    //         ('Unauthorized Access')
}

submitData('Steve', 'steve@steve.com')