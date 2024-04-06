import { faker } from "@faker-js/faker"
import SKILLS from "./skills"
import { getRandomItems } from "./util"

class User {
    public firstName: string
    public lastName: string
    public jobTitle: string
    public skills: string[]

    constructor(
        firstName: string,
        lastName: string,
        jobTitle: string,
        skills: string[]
    ) {
        this.firstName = firstName
        this.lastName = lastName
        this.jobTitle = jobTitle
        this.skills = [...skills]
    }

    static randomUser(): User {
        return new User(
            faker.person.firstName(),
            faker.person.lastName(),
            faker.person.jobTitle(),
            getRandomItems(SKILLS)
        )
    }
}

export default User
