const btn = document.querySelector('button');
const img = document.getElementById('photo');
const url = 'https://dog.ceo/api/breeds/image/random';

const getJSON = (url, callback) => {
//Crear instancia del objeto XMLHTTPRequest
  const request = new XMLHttpRequest();

  request.onload = () => {
    if (request.readyState === 4 && request.status === 200) {
      callback(request.responseText);
    }
  }
    //open()
    request.open('GET', url);
    //send()
    request.send();
}

btn.addEventListener('click', () => {
  getJSON (url, response => {
    let doggie = JSON.parse(response);
    console.log(doggie);
    img.src = doggie.message;
    

  })
});