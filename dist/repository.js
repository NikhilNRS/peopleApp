"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeopleRepository = void 0;
class PeopleRepository {
    constructor(name, backend) {
        this.name = name;
        this.backend = backend;
    }
    listPerson(name) {
        const person = this.backend.listPerson(name);
        if (person == undefined) {
            throw Error();
        }
        return person;
    }
    allPeople() {
        return this.backend.allPeople();
    }
    addPerson(person) {
        this.backend.addPerson(person);
    }
    deletePerson(person) {
        this.backend.deletePerson(person);
    }
    updatePerson(person) {
        this.backend.updatePerson(person);
    }
}
exports.PeopleRepository = PeopleRepository;
