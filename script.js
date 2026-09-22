let playerName = "";

let affection = 0;
let trust = 0;
let courage = 0;

function startGame() {
    document.getElementById("message").textContent =
        "名前を入力してください";

    document.getElementById("input-area").innerHTML = `
        <input type="text" id="name-input" placeholder="名前を入力">
        <button onclick="saveName()">決定</button>
    `;

    document.getElementById("start-button").style.display = "none";
}

function saveName() {
    playerName = document.getElementById("name-input").value;

    if (playerName.trim() === "") {
        document.getElementById("message").textContent =
            "名前を入力してください";
        return;
    }

    document.getElementById("message").textContent =
        playerName + "さん、ゲームを始めます。";

    document.getElementById("input-area").innerHTML = `
        <button onclick="startFridayNight()">次へ</button>
    `;
}

function startFridayNight() {
    document.getElementById("message").textContent =
        "金曜日の夜に任務があると必ず外泊をしてくる。\n" +
        "夜には鹿紫雲さんに呼び出される。\n\n" +
        "私はメッセージが来ないか気になって何も手につかない。";

    document.getElementById("input-area").innerHTML = `
        <button onclick="fridayNightNext()">次へ</button>
    `;
}

function fridayNightNext() {
    document.getElementById("message").textContent =
        "「今から出れるか」";

    document.getElementById("input-area").innerHTML = `
        <button onclick="showFridayChoices()">次へ</button>
    `;
}

function showFridayChoices() {
    document.getElementById("message").textContent =
        "どう返事をする？";

    document.getElementById("input-area").innerHTML = `
        <button onclick="chooseFriday(1)">1. 「行ける！」</button>
        <button onclick="chooseFriday(2)">2. 「今日は無理です」</button>
        <button onclick="chooseFriday(3)">3. 「またホテルですか？」</button>
    `;
}

function chooseFriday(choice) {

    if (choice === 1) {
        affection += 1;
    } else if (choice === 2) {
        courage += 1;
    } else if (choice === 3) {
        trust += 1;
        courage += 1;
    }

    document.getElementById("message").textContent =
        "選択しました。";

    document.getElementById("input-area").innerHTML = `
        <button onclick="hotel()">次へ</button>
    `;
}

function hotel() {
    document.getElementById("message").textContent =
        "返事なんて気にせず、連絡があった時点ですぐに飛び出していた。\n\n" +
        "指定された場所ですでに待っていた鹿紫雲の後ろから抱きつく。\n\n" +
        "鹿紫雲に服装を上から下まで見られて、微妙な顔をされる。";

    document.getElementById("input-area").innerHTML = `
        <button onclick="showHotelChoices()">次へ</button>
    `;
}

function showHotelChoices() {
    document.getElementById("message").textContent =
        "どう返事をする？";

    document.getElementById("input-area").innerHTML = `
        <button>1. 「・・・今日の服、変ですか？」</button>
        <button>2. 「そんなに見ないでください、恥ずかしい・・・」</button>
        <button>3. 「似合ってないなら言ってください」</button>
    `;
}