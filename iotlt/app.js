'use strict';

const fs = require("fs");
const Connpass = require('./connpass');
const groupname = 'enebular';
const community = new Connpass(`https://${groupname}.connpass.com/`);

(async () => {
    const c = {};

    c.name = groupname;
    c.event = await community.getEventCount();
    c.presentation = await community.getPresentationCount();
    c.presentationPerEvent = c.presentation / c.event; //1回あたりの登壇数平均
    c.uniq_member = await community.getMemberCount();
    c.total_member = await community.getTotalPeople();
    c.new_rate = c.uniq_member / c.total_member; //新規率

    /**
     * データ更新処理
     * */
    const PATH = "./data/connpass.json";
    const readTxt = fs.readFileSync(PATH, 'utf8');
    const communityData = JSON.parse(readTxt);
    communityData[groupname] = c; //新規 or 更新

    console.log(communityData);

    fs.writeFileSync(PATH, JSON.stringify(communityData));
})();

console.log(res.data.Items[0].Item.title) //


const items = res.data.Items;
console.log(items[0].item.title);
console.log(items[0].item.author);




const item = res.data.Items[0].Item;
console.log(item.title);
console.log(item.author);

console.log(res.data.Items[0].Item.title)
console.log(res.data.Items[0].Item.author);


//   console.log(items[0].Item.title ); // タイトル


function handlefunc(){
    //色々な処理

    const rakutenURL = 'https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&booksGenreId=001004008&count=3&applicationId=';
    const titleStr   = '&title='+ booktitle ;// イベントメッセージ以外をここに入れたい
  
    let apiUrl = encodeURI( rakutenURL + titleStr ); // URLエンコード
    const res = await axios.get( apiUrl );
    const items = res.data.Items;
    
    const url = items[0].Item.smallImageUrl;

    return client.replyMessage(event.replyToken, [{
        type: 'text',
        text: event.message.text //実際に返信の言葉を入れる箇所
      },
      {
        type: 'text',
        text: event.message.text //実際に返信の言葉を入れる箇所
      },
      {
        type: 'image',
        originalContentUrl: url,
        previewImageUrl: url
    }]);
}


// function getbook(){
//   const rakutenURL = 'https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&booksGenreId=001004008&count=3&applicationId=';
//   const titleStr   = '&title='+ booktitle ;// イベントメッセージ以外をここに入れたい

//   let apiUrl = encodeURI( rakutenURL + titleStr ); // URLエンコード
//   const res = await axios.get( apiUrl );
//   const items = res.data.Items;

//   return items;
// }


const express = require('express')
const app = express()

app.post('/webhook', (req, res) => {

})



// app.get('/', (req, res) => res.send('hello'))
app.get('/', (req, res) => {
    res.send([
        {
            name: 'isu',
            color: 'red',
            image: 'hogehoge.png'
        },
        {
            name: 'isu',
            color: 'red',
            image: 'hogehoge.png'
        },
    ]);
}); 

// http://localhost:3000/hello
// http://localhost:3000/webhook
// http://xxx.ngrok.io/webhook
app.get('/hello', (req, res) => {

    res.send('hello');
})

app.get('/', function(req, res){
    
})


const getBook = async (userId, booktitle) => {

}

async function getBook(userId, booktitle){

}

//STEP1
function getbook(){

}

app.get('/', (req, res) => {

})

app.listen(3000, () => console.log('Example app listening on port 3000!'))