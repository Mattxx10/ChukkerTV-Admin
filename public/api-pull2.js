console.log("here");
const data = { username: 'example' };

fetch('https://api.vimeo.com/users/161996644/projects/307153/videos', {
  method: 'GET', // or 'PUT'
  headers: {
    'Authorization': 'bearer 66f2e46a649ee4fd1c4bfbe8cb646456',
  }
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});