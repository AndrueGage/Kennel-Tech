import { connectToDatabase as db } from '../config/connection.js';

const cleanDB = async (collectionName) => {
  const connection = await db();
  console.log(collectionName)
  try {
    
      const collectionExists = await connection.listCollections({ name: collectionName }).toArray();
      if (collectionExists.length) {
        await connection.dropCollection(collectionName);
      }
    }
  catch (err) {
    throw new Error(`Collection ${collectionName} does not exist.`);
  }
};

export default cleanDB;