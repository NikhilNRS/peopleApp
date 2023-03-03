import { InMemoryBackend } from "./backends";
import { PeopleRepository } from "./repository";
import { Person} from "./backends"

const express = require("express");

const router = express.Router();
const peopleRepository = new PeopleRepository("inMemory", new InMemoryBackend());

router.get("/ping", (_: any, res: any) => {
    res.send("Pong")
});

router.get("/person/:name", (req: any, res: any) => {
    const name: string = req.params.name;
    const person = peopleRepository.listPerson(name);
    res.send(person.makeString())
})

router.post("/person", (req: any, res: any) => {
    console.log(req.body)
    const person: Person = new Person(req.body.name, req.body.age, req.body.job)
    peopleRepository.addPerson(person)
    res.send(person)
})

router.delete("/person", (req: any, res: any) => {
    console.log(req.body)
    const person: Person = new Person(req.body.name, req.body.age, req.body.job)
    peopleRepository.deletePerson(person)
    res.send(person)

router.put("/person", (req: any, res: any) => {
    console.log(req.body)
    const person: Person = new Person(req.body.name, req.body.age, req.body.job)
    peopleRepository.updatePerson(person)
    res.send(person)
})

})

export = router;