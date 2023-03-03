"use strict";
const backends_1 = require("./backends");
const repository_1 = require("./repository");
const backends_2 = require("./backends");
const express = require("express");
const router = express.Router();
const peopleRepository = new repository_1.PeopleRepository("inMemory", new backends_1.InMemoryBackend());
router.get("/ping", (_, res) => {
    res.send("Pong");
});
router.get("/person/:name", (req, res) => {
    const name = req.params.name;
    const person = peopleRepository.listPerson(name);
    res.send(person.makeString());
});
router.post("/person", (req, res) => {
    console.log(req.body);
    const person = new backends_2.Person(req.body.name, req.body.age, req.body.job);
    peopleRepository.addPerson(person);
    res.send(person);
});
router.delete("/person", (req, res) => {
    console.log(req.body);
    const person = new backends_2.Person(req.body.name, req.body.age, req.body.job);
    peopleRepository.deletePerson(person);
    res.send(person);
    router.put("/person", (req, res) => {
        console.log(req.body);
        const person = new backends_2.Person(req.body.name, req.body.age, req.body.job);
        peopleRepository.updatePerson(person);
        res.send(person);
    });
});
module.exports = router;
