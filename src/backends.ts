import { IPeopleBackend } from "./repository";

export class Person {
    name: string;
    age: number;
    job?: string;

    constructor(name: string, age: number, job?: string) {
        this.name = name;
        this.age = age;
        this.job = job;
    }

    makeString(): string {
        return `${this.name} ${this.age} ${this.job}`
    }
}

export class InMemoryBackend implements IPeopleBackend {
    people: Map<string, Person> = new Map();

    listPerson(name: string): Person {
        return this.people.get(name)!
    }

    addPerson(person: Person): void {
        this.people.set(person.name, person)
    }

    deletePerson(person: Person): void {
        this.people.delete(person.name)
    }

    updatePerson(person: Person): void {
        this.people.set(person.name, person)
    }
}
