import * as mongodb from 'mongodb'
import { getEnvVarMandatory } from './util'

const MONGODB_HOST: string = getEnvVarMandatory('MONGODB_HOST')
const MONGODB_USER: string = getEnvVarMandatory('MONGODB_USER')
const MONGODB_PASS: string = getEnvVarMandatory('MONGODB_PASS')
const MONGO_DATABASE: string = getEnvVarMandatory('MONGO_DATABASE')
const MONGO_COLLECTION: string = getEnvVarMandatory('MONGO_COLLECTION')
export const MONGO_FULL_TEXT_SEARCH_INDEX: string = getEnvVarMandatory('MONGO_FULL_TEXT_SEARCH_INDEX')

export const mongoDbClient = new mongodb.MongoClient(MONGODB_HOST, {
    auth: {
        username: MONGODB_USER,
        password: MONGODB_PASS
    }
})

export const database: mongodb.Db = mongoDbClient.db(MONGO_DATABASE)
export const collection: mongodb.Collection = database.collection(MONGO_COLLECTION)
