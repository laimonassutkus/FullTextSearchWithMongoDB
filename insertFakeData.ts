// Firstly, setup the environment variables.
import dotenv from 'dotenv'
dotenv.config()

// Secondly, import the rest of the modules.
import User from "./user"
import { collection, mongoDbClient } from "./mongodb"

async function main() {
    const users: User[] = Array.from({ length: 10 }, () => User.randomUser())

    try {
        await collection.insertMany(users)
    }
    catch (err) {
        console.log(err)
    }
    finally {
        await mongoDbClient.close()
    }
}

main()