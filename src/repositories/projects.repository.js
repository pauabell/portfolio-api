import {MongoClient} from 'mongodb';

async function getDatabase() { 
 const url = 'mongodb+srv://fullstack3r:fullstack3r@portfolio-cluster.b4lbz9d.mongodb.net/';
 const client = new MongoClient(url); 
 client.connect()
 const db= client.db ("portfolio");
 return db;
}

async function all(){
    const db= await getDatabase();
    const collection=db.collection('projects')
    const result=collection.find ();
    return result.toArray();
}

export default {all};