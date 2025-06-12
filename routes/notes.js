var express = require('express');
var router = express.Router();

//接続情報を設定
const { MongoClient } = require("mongodb");
const uri =  "mongodb+srv://aiueokttt209:tatsuki3405@cluster0.h1voyoj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";//matsunami2:password@test.lfwohhl.mongodb.net/?retryWrites=true&w=majorityß";
const client = new MongoClient(uri);

router.get('/',async (req,res) =>{
    const database = client.db('notes');
    const notes = database.collection('notes');

    const query = { id: 2 };
    const note = await notes.findOne(query);

    res.json(note);
})

module.exports = router;
//レスポンスのデータ
const responseObjectDataAll = {
textObject1 : {
    id: 1,
    title: 'ノート１のタイトルです',
    subTitle: 'ノート１のサブタイトルです',
    bodyText: 'ノート１の本文です'
},
textObject2 : {
    id: 2,
    title: 'ノート２のタイトルです',
    subTitle: 'ノート２のサブタイトルです',
    bodyText: 'ノート２の本文です'
},

};

/**
 * メモを全取得するAPI
 * @returns{Object[]} data
 * @returns{number} data.id ~ ID
 * @returns{string} data.title ~タイトル
 * @returns{string} data.text ~内容
 */
router.get('/',function(req,res,next){
    //全件取得して返す
    res.json(responseObjectDataAll);
})

module.exports = router;



