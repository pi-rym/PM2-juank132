const formulario = document.querySelector("#agregarp");
const inputs = document.getElementsByTagName('input');


const handleSubmit = async (event) => {
    event.preventDefault();
    

    alert('sin borrar');


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
    const rate = Iurl.value ;
    const poster = Irate.value ;
  

    if (!title || !year || !director|| !duration|| !genre|| !rate|| !poster|| !descripcion) {
        alert('Por favor, complete todos los campos');
        return;
    }

    const newMovie = {title,year,director,duration,genre,rate,poster}
    
    console.log(newMovie);
    
    
    
  module.exports = newMovie;

};




formulario.addEventListener('submit', handleSubmit);

