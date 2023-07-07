const Notas = require('../models/notas');

async function searchNotas(req, res) {
  try {
    const variable = `${req.query.query}`;
    const patron = `${variable}`;

  const filtros = {
    nombrenota: { $regex: new RegExp(patron), $options: 'i' }
  };
    

    const datos = await Notas.find(filtros); // Aplicar los filtros a la búsqueda en MongoDB

    res.json(datos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
}

async function searchTipo(req, res) {
    try {
      const variable = req.query.tipo_publicacion; // Obtener los parámetros de consulta
      const patron = `^${variable}`;

      const filtros = {
        tipo_publicacion: { $regex: new RegExp(patron), $options: 'i' }
      };
        
    
        const datos = await Notas.find(filtros); // Aplicar los filtros a la búsqueda en MongoDB
    
        res.json(datos);
      } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error en el servidor' });
      }
  }
module.exports = {
    searchNotas,
    searchTipo
};