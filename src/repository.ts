import { Person } from "./backends";

export interface IPeopleBackend {
    listPerson: (name: string) => Person;
    addPerson: (person: Person) => void;
    deletePerson: (person: Person) => void;
    updatePerson: (person: Person) => void;
    allPeople: () => Array<Person>;
}

export class PeopleRepository {
    name: string;
    backend: IPeopleBackend;

    constructor(name: string, backend: IPeopleBackend) {
        this.name = name;
        this.backend = backend;
    }

    listPerson(name: string): Person {
        const person = this.backend.listPerson(name);
        if (person == undefined) {
            throw Error()
        }
        return person
    }

    allPeople(): Array<Person> {
        return this.backend.allPeople()

    }

    addPerson(person: Person): void {
        this.backend.addPerson(person)
    }

    deletePerson(person: Person): void {
        this.backend.deletePerson(person)
    }

    updatePerson(person: Person): void {
        this.backend.updatePerson(person)
    }


}
