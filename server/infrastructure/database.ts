import { ClientSession, MongoClient } from "mongodb";
process.loadEnvFile('../../.env');
export class ConnectToDatabase{

    static instanceConnect : ConnectToDatabase;
    connection : MongoClient | undefined;
    db : unknown
    session : ClientSession | undefined

    constructor(){

        if(typeof ConnectToDatabase.instanceConnect !== 'object'){
            return ConnectToDatabase.instanceConnect;
        }

        this.connectOpen()

        ConnectToDatabase.instanceConnect = this;
    }
    async connectOpen(){
        try {
            this.connection = new MongoClient(
                `${process.env.MONGO_ACCESS}
                ${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`); //{ useNewUrlParser: true, useUnifiedTopology: true }
            this.session = this.connection.startSession()
            await this.connection?.connect();
            this.db = this.connection?.db(process.env.MONGO_DB_NAME);
            console.log('conexion exitosa')
        } catch (error) {
            throw new Error('Error connecting');
        }
    }
    async connectClose(){
        this.connection?.close();
    }
}