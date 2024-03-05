console.log(tempData);

const tarjetas = document.querySelectorAll('.tarjeta_pelicula')

console.log(tarjetas);


tarjetas.forEach((tar, i) => {
    const e = tempData[i];

    const tituloT = e.title;
    const directorT = e.director;
    const rateT= e.rate;
    const yearT=  e.year;
    const genreT= e.genre;
    const durationT= e.duration;
    const img = e.poster;
    
    console.log(e.poster)
    
   
    tar.style.backgroundImage = `url('${img}')`;
    tar.querySelector('.title').append(tituloT)
    tar.querySelector('.director').append(directorT) 
    tar.querySelector('.rate').append(rateT) 
    tar.querySelector('.year').append(yearT) 
    tar.querySelector('.genre').append(genreT) 
    tar.querySelector('.duration').append(durationT)
    
});

    