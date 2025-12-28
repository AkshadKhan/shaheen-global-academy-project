fetch('http://localhost:3000/api/v1/admin/topper/getToppers')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });


  console.log("hello");