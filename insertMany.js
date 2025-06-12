const {MongoClient} = require("mongodb");

const uri = "mongodb+srv://aiueokttt209:<db_password>@cluster0.h1voyoj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run(){
    const database = client.db('notes');
    const notes = database.collection('notes');

    const query = [{
        id: 1,
        title: 'ノート１のタイトルです',
        subTitle: 'ノート１のサブタイトルです',
        bodyText: 'ノート１の本文です',
    },
{
    id: 2,
    title: 'ノート２のタイトルです',
    subTitle: 'ノート２のサブタイトルです',
    bodyText: 'ノート２の本文です',
}];
const note = await notes.insertMany(query);
console.log(note);
await client.close();
}
run()