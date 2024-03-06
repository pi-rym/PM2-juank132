

$.get(`https://students-api.2.us-1.fl0.io/movies`, function(data) {
  
  console.log(tempData);

  const tarjetas = document.querySelectorAll('.tarjeta_pelicula')
  
  function iterarImagen(tar, i) {
      const e = data[i];
  
      //ESTE ES MI MACHETE VISUAL
  
      const tituloT = e.title;
      const directorT = e.director;
      const rateT= e.rate;
      const yearT=  e.year;
      const genreT= e.genre;
      const durationT= e.duration;
      const img = e.poster;
      
  
      tar.style.backgroundImage = `url('${img}')`;
      tar.querySelector('.title').append(tituloT);
      tar.querySelector('.director').append(directorT); 
      tar.querySelector('.rate').append(rateT); 
      tar.querySelector('.year').append(yearT) ;
      tar.querySelector('.genre').append(genreT); 
      tar.querySelector('.duration').append(durationT);
  }
  
  
  tarjetas.forEach(iterarImagen);


})


    

