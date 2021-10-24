const profiletopic = ["名前","年齢","出身","大学","学部","学年","好きな作家","好きなゲーム","好きな車","好きな店","好きな歌手","好きな料理","好きなコンビニ"];
const profile = ["渡邉陽向",21,"宮城県名取市","京都大学","経済学部","三回","村上春樹","ぼくは航空管制官","RX-8","びっくりドンキー","マハラージャン","エビチリ","ミニストップ"];
const topic = document.getElementById("topic");
const content = document.getElementById("content");
const changebutton = document.getElementById("change");
const decidebutton = document.getElementById("decide");
const photo1 = document.getElementById("photo1");
const photo2 = document.getElementById("photo2");
const photo5 = document.getElementById("photo5");
const photo4 = document.getElementById("photo4");
const comment = document.getElementById("comment");
content.textContent = "　";
    topic.textContent = profiletopic[0];
    let i = 0;
    decidebutton.onclick = function() {
        content.textContent = profile[i];
    }
    changebutton.onclick = function() {
        content.textContent = " 　";
        i++;
        if (i < 12) {
        topic.textContent = profiletopic[i];
    } else {
        i = 0
        topic.textContent = profiletopic[i];
    }
    }
photo1.onmouseover = function() {
    console.log(1);
    comment.textContent = "神戸の摩耶山から見た夜景です。大阪湾が一望できます。日本三大夜景の一つです！";
    photo1.onmouseleave = function() {
    comment.textContent = "　";
    }
}
photo2.onmouseover = function() {
    console.log(1);
    comment.textContent = "中京競馬場のゴール板前の写真です。馬がめちゃくちゃ早かった。かっこいいですね。";
    photo2.onmouseleave = function() {
    comment.textContent = "　";
    }
}
photo5.onmouseover = function() {
    console.log(1);
    comment.textContent = "東北新幹線のグランクラスです。グリーン車の一つ上のクラスです。高級感がすごかったです。";
    photo5.onmouseleave = function() {
    comment.textContent = "　";
    }
}
photo4.onmouseover = function() {
    console.log(1);
    comment.textContent = "トヨタの86を借りたときの写真です。FRで普通の車と運転の感覚が違いました。音がかっこいい！";
    photo4.onmouseleave = function() {
    comment.textContent = "　";
    }
}