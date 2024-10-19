import 'reflect-metadata';
import { createConnection } from 'typeorm';

export async function intializeDB(): Promise<void> {
    try {
        await createConnection();
        console.log('Database initialized');
    } catch (error) {
        console.error('Error initializing the database', error);
        throw error;
    }
}