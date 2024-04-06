// Firstly, setup the environment variables.
import dotenv from 'dotenv'
dotenv.config()

// Secondly, import the rest of the modules.
import { collection, mongoDbClient } from "./mongodb";

async function main() {
    try {
        const result = await collection.find({
            $text: { $search: "Rachel" }
        })

        const results = await result.toArray()
        console.log(`Found ${results.length} results.`)
        return results
    }
    catch (err) {
        console.log(err)
    }
    finally {
        await mongoDbClient.close()
    }
}

main().then(results => {
    console.log(results)
}).catch(error => {
    console.log(error)
})
