import { Post } from "../models/Post.js";
import { Op } from "sequelize";


export async function getPost(req, res) {
  try {
    console.log("obteniendo previajes");
    // Obtener todos los registros utilizando el método findAll del modelo Previaje
    const registros = await Post.findAll();

    // Devolver una respuesta con los registros obtenidos
    return res.json(registros);
  } catch (error) {
    // Manejar cualquier error que pueda ocurrir durante la consulta
    console.error("Error al obtener los registros:", error.message);
    return res.status(500).json({ error: "Error al obtener los registros" });
  }
}

export async function createPost(req, res) {
  const {  author, title, content, typesurvey, date_create } = req.body;

    const nuevoRegistro = await Post.create({
      author: author,
      title: title,
      content: content,
      typesurvey: typesurvey,
      date_create: date_create,
      image_post: 'https://www.mundodeportivo.com/alfabeta/hero/2023/05/satoru-gojo-jujutsu-kaisen.jpg?width=1200'
    });
  
  res.status(200).json({msg: 'creado exitosamente'});
}

export async function buscarPost(req, res) {
  try {
    const { tipo, palabra } = req.params;

    console.log('tipo:', tipo)
    console.log('palabra:', palabra)


    let whereCondition = {};

    if (tipo === 'author') {
      whereCondition = {
        author: {
          [Op.like]: `%${palabra}%`,
        },
      };
    } else if (tipo === 'title') {
      whereCondition = {
        title: {
          [Op.like]: `%${palabra}%`,
        },
      };
    } else if (tipo === 'content') {
      whereCondition = {
        content: {
          [Op.like]: `%${palabra}%`,
        },
      };
    }

    const publicaciones = await Post.findAll({ where: whereCondition });

    res.json(publicaciones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al buscar publicaciones.' });
  }
};



export const updateProject = async (req, res) => {};
