import { MongoClient } from 'mongodb';

declare global {
    namespace Express {
        export interface Request {
            mongoURL?: string;
            client: MongoClient;
        }
    }
}
