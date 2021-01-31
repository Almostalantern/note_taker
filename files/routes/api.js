const router = require("express").Router();
const notes = require("../db/Notes");


router.get("./notes", function (req, res){
    notes.getNotes().then(notes => {
        return res.json(notes)
    }).catch(err => res.status(500).json(err))
})

router.post("./notes", function (req, res){
    notes.writeNote(req.body).then(notes => {
        return res.json(notes)
    }).catch(err => res.status(500).json(err))
})

router.get("/:id", function (req, res){
    notes.getNotes(req.params.id).then(notes => {
        return res.json(notes)
    }).catch(err => res.status(500).json(err))
})

module.exports = router;