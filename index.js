//! crea una constante con el puerta local o el asignado en las variables globales de la aplicacion
import app from './app.js';
const PORT = 3000 || process.env.PORT;


//!Encendemos el servicio - prendemos la API
app.listen(PORT,()=>{
    console.log(`Servidor corriendo en: ${PORT}`);
});