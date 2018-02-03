const config = require('./config')
const mysql = require('mysql');

class Database {
    constructor() {
        this.con = mysql.createConnection({
            host: config.database.host,
            user: config.database.user,
            password: config.database.password,
            database: config.database.database
          });
          
          this.con.connect((err)=>{
            if(err) throw err;
            console.log("Successfully connected to the database!");
          });
    }


    static getInstance(){
        if(this.instance){
            return this.instance;
        }
        else{
            this.instance = new Database();
            return this.instance;
        }
        
    }
}

module.exports = Database;