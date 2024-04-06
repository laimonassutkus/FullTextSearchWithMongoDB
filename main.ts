// Firstly, setup the environment variables.
import dotenv from 'dotenv'
dotenv.config()

// Secondly, import the rest of the modules.
import { MONGO_FULL_TEXT_SEARCH_INDEX, collection, mongoDbClient } from "./mongodb";

async function main() {
    try {
        const result = await collection.aggregate(
            [
                {
                    $search: {
                        index: MONGO_FULL_TEXT_SEARCH_INDEX,
                        text: {
                            query: 'Archibld',
                            path: ['firstName', 'lastName', 'jobTitle', 'skills'],
                            fuzzy: {}
                        }
                    }
                },
                {
                    $project: {
                        _id: 0,
                        score: {$meta: 'searchScore'},
                        firstName: 1, 
                        lastName: 1,
                        jobTitle: 1,
                        skills: 1
                    }
                }
            ]
        ).sort({ score: -1 }).limit(10)

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
