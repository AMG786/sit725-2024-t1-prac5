let client = require('../mongoConnection');

let collections = client.db().collection('resturants');

function getAllItems(callback){
    collections.find({}).toArray(callback);
}

function insertItem(newFood){
    collections.insertOne(newFood, (err, result) => {
        if(err){
            console.error("Error in Inserting Item in DB", err);
        }else{
            console.log("Inserted into DB Successfully!!");
        }
    });
}

module.exports = {getAllItems, insertItem};

