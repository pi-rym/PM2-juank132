const axios = require("axios");
const promesa = axios.get(`https://students-api.up.railway.app/movies`);

const ejec = 
    
    promesa.then((res) => {
    return res.data
   }).catch((err) => {
    return err
   })


module.exports = ejec;

       


