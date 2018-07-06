const inputText = document.querySelector('input');
const containerTitle = document.getElementById('title');
const containerYear = document.getElementById('year');
const containerRuntime = document.getElementById('runtime');
const containerImage = document.getElementById('img');

inputText.addEventListener('keypress', (event) => {
  let key = event.which || event.keycode;
  if (key === 13) { // Código 13 corresponde a la tecla 'enter'
    let movie = inputText.value;
    console.log(movie);
    inputText.value = '';

    fetch(`http://www.omdbapi.com/?t=${movie}&apikey=6ef55e68`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      
      renderInfo(data);

    })
  }
})

const renderInfo = (data) => {
  containerTitle.innerHTML = data.Title;
  containerYear.innerHTML = data.Year;
  containerRuntime.innerHTML = data.Runtime;
  containerImage.innerHTML = `<img src= "${data.Poster}"> `;

}