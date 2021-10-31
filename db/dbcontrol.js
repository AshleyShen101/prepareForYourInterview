const { MongoClient, ObjectId } = require("mongodb");

function dbcontrol() {
  const dbcontrol = {};
  const uri = "mongodb+srv://AshleyShen:Asyy*1234@cluster0.perfc.mongodb.net/prepareForInterviewDB?retryWrites=true&w=majority";
  const DB_NAME = "prepareForInterviewDB";

  // create users: register
  dbcontrol.creatUser = async (user) => {
    let client;
    try {
      client = new MongoClient(uri, { useUnifiedTopology: true });
      console.log("Connecting to the db");
      await client.connect();
      console.log("Connected!");
      const res = await client
        .db(DB_NAME)
        .collection("usersinfo")
        .insertOne({user: "111"});
      console.log("Inserted", res);
      return res;
    } finally {
      console.log("Closing the connection");
      client.close();
    }
  };

  // search user info
  dbcontrol.searchUser = async (query) => {
    let client;
    try {
      client = new MongoClient(uri, { useUnifiedTopology: true });
      console.log("Connecting to the db");
      await client.connect();
      console.log("connected!");
      const db = client.db();
    } finally {
      console.log
    }
  }
}
