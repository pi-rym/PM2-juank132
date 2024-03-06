
console.log(tempData);

const tarjetas = document.querySelectorAll('.tarjeta_pelicula')


$.get(`https://students-api.2.us-1.fl0.io/movies`, (data) => {
  
  function iterarImagen(tar,i) {
        const e = data[i];
  
        tar.style.backgroundImage = `url('${e.poster}')`;
        tar.querySelector('.title').append(e.title);
        tar.querySelector('.director').append(e.director); 
        tar.querySelector('.rate').append(e.rate); 
        tar.querySelector('.year').append(e.year) ;
        tar.querySelector('.genre').append( e.genre); 
        tar.querySelector('.duration').append(e.duration);

    }

    
  tarjetas.forEach(iterarImagen);


})


    

