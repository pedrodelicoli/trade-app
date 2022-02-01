const { MongoClient } = require('mongodb');

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const MONGO_DB_URL = 'mongodb://localhost:27017';

let db: any = null;

const connection = () => {
    try { 
      return db
        ? Promise.resolve(db)
        : MongoClient.connect(MONGO_DB_URL, OPTIONS)
           .then((conn: any) => {
             db = conn.db('forex_users');
             return db;
           })
    } catch (err: any) {
      console.log(err.message);
      process.exit(1);
    }   
};

export { connection };