const formulario = document.querySelector("#agregarp");
const inputs = document.getElementsByTagName('input');
const limpiar = document.getElementById('unic1');
const axios = require("axios");


const crearHtml = (obj) => {
  const {title,director,rate,year,genre,duration,poster} = obj;

    const tituloTar = document.createElement('h2').classList.add('title');
    tituloTar.textContent = title;
  
    const directorTar = document.createElement('p').classList.add('director');
    directorTar.textContent = director;

    const rateTar = document.createElement('h5').classList.add('rate');
    rateTar.textContent = rate;

    const yearTar = document.createElement('h3').classList.add('year');
    yearTar.textContent = year;
    
    const genreTar = document.createElement('h4').classList.add('genre');
    genreTar.textContent = genre;

    const durationTar = document.createElement('hp').classList.add('duration');
    durationTar.textContent = duration;
    
    const posterTar = style.backgroundImage = `url('${poster}')`;
    posterTar.textContent = poster;


    const movie = document.createElement('div').className.add('tarjeta_pelicula');
    const info = document.createElement('div').className.add('infoT');

    movie.appendChild(info);
    info.appendChild(title);
    info.appendChild(director);
    info.appendChild(rate);
    info.appendChild(year);
    info.appendChild(genre);
    info.appendChild(duration);
    info.appendChild(poster);
}


const limpiarIn = (event) => {
  event.preventDefault();

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
  }

}


const handleSubmit = async (event) => {
    event.preventDefault();
    
    const Ititle = document.querySelector('.Title');
    const Iyear = document.querySelector('.Year');
    const Idirector = document.querySelector('.Director');
    const Iduration = document.querySelector('.Duration');
    const Igenre = document.querySelector('.Genre');
    const Iurl = document.querySelector('.Urldeimagen');
    const Irate = document.querySelector('.Rate');
    


    const title = Ititle.value ;
    const year = Iyear.value ;
    const director = Idirector.value ;
    const duration = Iduration.value ;
    const genre = Igenre.value ;
    const rate = Irate.value ;
    const poster = Iurl.value ;
  

    if (!title || !year || !director|| !duration|| !genre|| !rate|| !poster) {
        alert('Por favor, complete todos los campos');
        return;
    }

    const newMovie = {title,year,director,duration,genre,rate,poster}
    
    try {
     
      await axios.post('http://localhost:3001/movies',newMovie)
      alert('Los datos se enviaron correctamente')

    } catch (error) {
      console.log(error.message);
    }

};

limpiar.addEventListener("click", limpiarIn);

formulario.addEventListener('submit', handleSubmit);

