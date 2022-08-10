// imports
import express from 'express';
// config vars
const PORT = process.env.PORT || 3000;
// base de datos de mentira
const notes = [
  {
    id: 1,
    text: 'Lavar la ropa',
    done: false
  },
  {
    id: 2,
    text: 'Estudiar node',
    done: false
  },
  {
    id: 3,
    text: 'Hacer las compras',
    done: false
  },
  {
    id: 4,
    text: 'Preparar los examenes',
    done: false
  }
];


const app = express();
app.use(express.static('public'));
app.use(express.json());

// en una API que devuelve JSON
// lo que se dice una API REST
// GET para leer datos
// POST para crear datos
// PUT para modificar
// DELETE para borrar

// devuelve todas las notas
app.get('/notes', (req, res) => {
  res.status(200).json(notes);
});
// devuelve la nota con id: id
app.get('/notes/:id', (req, res) => {
  let id = +req.params.id;
  let result = notes.filter(note => note.id === id);
  res.status(200).json(result);
});
// crea una nota nueva
app.post('/notes', (req, res) => {
  let { id, text, done } = req.body;
  console.log(req.body);
  let newNote = { id, text, done };
  notes.push(newNote);
  res.status(201).json(newNote);
});

app.listen(PORT, () => {
  console.log(`Server escuchando en puerto ${PORT}`);
});
