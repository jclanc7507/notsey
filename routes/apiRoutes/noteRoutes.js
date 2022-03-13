const router = require("express").Router();
const { createNewNote, validateNote, findById } = require('../../lib/notes');
const { notes } = require('../../db/notes');

router.get('/notes', (req, res) => {
    let results = notes;
    if(req.id) {
        results = findById(req.id, results);
    }
    res.json(results);
});

router.get('/animals/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(results);
    } else {
        res.send(404);
    }
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    if (!validateAnimal(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

module.exports = router;