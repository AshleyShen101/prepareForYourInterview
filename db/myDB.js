const { MongoClient, ObjectId } = require("mongodb");

function Database() {
  const myDB = {};
  const url = process.env.MONGO_URL || "mongodb://localhost:27017";
  const DB_NAME = "Project0";

  // create users: register
  myDB.creatUser = async (user) => {
    let client;
    try {
      client = new MongoClient(uri, { useUnifiedTopology: true });
      await client.connect();
      const res = await client.db(DB_NAME).collection("users").insertOne(user);
      console.log("Inserted", res);
      return res;
    } catch (e) {
      console.log("Error", e);
      return;
    } finally {
      client.close();
    }
  };

  myDB.searchUser = async (q) => {
    let client;
    try {
      client = new MongoClient(uri, { useUnifiedTopology: true });
      await client.connect();
      const column = client.db(DB_NAME).collection("users");
      const userArr = await column.find(q).toArray();
      console.log(userArr);
      return userArr;
    } finally {
      client.close();
    }
  };

  myDB.createPost = async (post) => {
    let client;
    try {
      client = new MongoClient(uri, { useUnifiedTopology: true });
      await client.connect();
      const res = await client.db(DB_NAME).collection("posts").insertOne(post);
      console.log("Inserted", res);
      return res;
    } catch (e) {
      console.log("Error", e);
      return;
    } finally {
      client.close();
    }
  };

  myDB.getPosts = async () => {
    let client;
    try {
      client = new MongoClient(uri, { useUnifiedTopology: true });
      await client.connect();
      await client
        .db(DB_NAME)
        .collection("posts")
        .find({})
        .toArray((err, result) => {
          if (err) {
            return err;
          } else {
            return result;
          }
        });
    } catch (e) {
      console.log("Error", e);
      return;
    } finally {
      client.close();
    }
  };

  return myDB;
}

module.exports = Database();
