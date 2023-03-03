"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryBackend = exports.Person = void 0;
class Person {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
    makeString() {
        return `${this.name} ${this.age} ${this.job}`;
    }
}
exports.Person = Person;
class InMemoryBackend {
    constructor() {
        this.people = new Map();
    }
    listPerson(name) {
        return this.people.get(name);
    }
    addPerson(person) {
        this.people.set(person.name, person);
    }
    deletePerson(person) {
        this.people.delete(person.name);
    }
    updatePerson(person) {
        this.people.set(person.name, person);
    }
}
exports.InMemoryBackend = InMemoryBackend;
