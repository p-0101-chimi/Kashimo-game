// ==============================
// ゲームデータ
// ==============================

let playerName = "";

let affection = 0;
let trust = 0;
let courage = 0;


// ==============================
// 画面表示
// ==============================

function showMessage(text, nextFunction) {

    document.getElementById("message").textContent = text;

    document.getElementById("input-area").innerHTML = `
        <button onclick="${nextFunction}()">次へ</button>
    `;
}


// ==============================
// ゲーム開始
// ==============================

function startGame() {

    document.getElementById("message").textContent =
        "名前を入力してください";

    document.getElementById("input-area").innerHTML = `
        <input type="text" id="name-input" placeholder="名前を入力">
        <button onclick="saveName()">決定</button>
    `;

    document.getElementById("start-button").style.display = "none";
}


// ==============================
// 名前入力
// ==============================

function saveName() {

    playerName =
        document.getElementById("name-input").value;

    if (playerName.trim() === "") {

        document.getElementById("message").textContent =
            "名前を入力してください";

        return;
    }

    document.getElementById("message").textContent =
        playerName + "さん、ゲームを始めます。";

    document.getElementById("input-area").innerHTML = `
        <button onclick="fridayNight()">次へ</button>
    `;
}


// ==============================
// 金曜日の夜
// ==============================

function fridayNight() {

    document.getElementById("message").textContent =
        "金曜日の夜に任務があると必ず外泊をしてくる。\n\n" +
        "夜には鹿紫雲さんに呼び出される。\n\n" +
        "私はメッセージが来ないか気になって何も手につかない。";

    document.getElementById("input-area").innerHTML = `
        <button onclick="fridayNightMessage()">次へ</button>
    `;
}
// ==============================
// 「今から出れるか」
// ==============================

function fridayNightMessage() {

    document.getElementById("message").textContent =
        "「今から出れるか」";

    document.getElementById("input-area").innerHTML = `
        <button onclick="fridayNightChoice()">次へ</button>
    `;
}


// ==============================
// 金曜日の夜・選択肢
// ==============================

function fridayNightChoice() {

    document.getElementById("message").textContent =
        "どう返事をする？";

    document.getElementById("input-area").innerHTML = `

        <button onclick="chooseFriday(1)">
            1. 「行ける！」
        </button>

        <button onclick="chooseFriday(2)">
            2. 「今日は無理です」
        </button>

        <button onclick="chooseFriday(3)">
            3. 「またホテルですか？」
        </button>

    `;
}


// ==============================
// 金曜日の夜・選択結果
// ==============================

function chooseFriday(choice) {

    if (choice === 1) {

        affection += 1;

    } else if (choice === 2) {

        courage += 1;

    } else if (choice === 3) {

        trust += 1;
        courage += 1;
    }

    hotel();
}


// ==============================
// ホテル
// ==============================

function hotel() {

    document.getElementById("message").textContent =
        "返事なんて気にせず、連絡があった時点ですぐに飛び出していた。\n\n" +
        "指定された場所ですでに待っていた鹿紫雲の後ろから抱きつく。\n\n" +
        "鹿紫雲に服装を上から下まで見られて、微妙な顔をされる。";

    document.getElementById("input-area").innerHTML = `
        <button onclick="hotelChoice()">次へ</button>
    `;
}


// ==============================
// ホテル・選択肢
// ==============================

function hotelChoice() {

    document.getElementById("message").textContent =
        "どう返事をする？";

    document.getElementById("input-area").innerHTML = `

        <button onclick="chooseHotel(1)">
            1. 「・・・今日の服、変ですか？」
        </button>

        <button onclick="chooseHotel(2)">
            2. 「そんなに見ないでください、恥ずかしい・・・」
        </button>

        <button onclick="chooseHotel(3)">
            3. 「似合ってないなら言ってください」
        </button>

    `;
}


// ==============================
// ホテル・選択結果
// ==============================

function chooseHotel(choice) {

    if (choice === 1) {

        trust += 1;

    } else if (choice === 2) {

        affection += 1;

    } else if (choice === 3) {

        courage += 1;
    }

    document.getElementById("message").textContent =
        "「別になんも言ってねぇだろ」";

    document.getElementById("input-area").innerHTML = `
        <button onclick="convenienceStoreScene()">次へ</button>
    `;
}


// ==============================
// コンビニ
// ==============================

function convenienceStoreScene() {

    document.getElementById("message").textContent =
        "ホテルを一旦出て、いつものルーティンのようにコンビニに向かった。\n\n" +
        "とりあえずカゴに好きなだけおにぎり、デザート、サラダ、飲み物などを放り込んでいく。";

    document.getElementById("input-area").innerHTML = `
        <button onclick="convenienceChoice()">次へ</button>
    `;
}


// ==============================
// コンビニ・選択肢
// ==============================

function convenienceChoice() {

    document.getElementById("message").textContent =
        "どう返事をする？";

    document.getElementById("input-area").innerHTML = `

        <button onclick="chooseConvenience(1)">
            1. 「これも買っていいですか？」
        </button>

        <button onclick="chooseConvenience(2)">
            2. 「買いすぎじゃないですか？」
        </button>

        <button onclick="chooseConvenience(3)">
            3. 「鹿紫雲さんが好きなの選んでください」
        </button>

    `;
}


// ==============================
// コンビニ・選択結果
// ==============================

function chooseConvenience(choice) {

    if (choice === 1) {

        affection += 1;

    } else if (choice === 2) {

        courage += 1;
        trust += 1;

    } else if (choice === 3) {

        courage += 1;
        affection += 1;
    }

    hotelDinner();
}


// ==============================
// ホテルで夕食
// ==============================

function hotelDinner() {

    document.getElementById("message").textContent =
        "コンビニから出ると、鹿紫雲が荷物を奪いそのまま指を絡めた。";

    document.getElementById("input-area").innerHTML = `
        <button onclick="hotelDinnerChoice()">次へ</button>
    `;
}


// ==============================
// ホテルで夕食・選択肢
// ==============================

function hotelDinnerChoice() {

    document.getElementById("message").textContent =
        "どうする？";

    document.getElementById("input-area").innerHTML = `

        <button onclick="chooseDinner(1)">
            1. 何も言わず、そのまま手を繋ぐ
        </button>

        <button onclick="chooseDinner(2)">
            2. 「・・・なんで手繋いでるんですか」
        </button>

        <button onclick="chooseDinner(3)">
            3. 「手繋ぎたかったんですか」
        </button>

    `;
}


// ==============================
// ホテルで夕食・選択結果
// ==============================

function chooseDinner(choice) {

    if (choice === 1) {

        affection += 1;
        trust += 1;

    } else if (choice === 2) {

        courage += 1;
        trust += 1;

    } else if (choice === 3) {

        courage += 1;
        affection += 1;
    }

    document.getElementById("message").textContent =
        "鹿紫雲さんが何も言わないまま手を引かれて来た道を戻る。";

    document.getElementById("input-area").innerHTML = `
        <button onclick="doubleBed()">次へ</button>
    `;
}


// ==============================
// ダブルベッド
// ==============================

function doubleBed() {

    document.getElementById("message").textContent =
        "ホテルの部屋に入ると、そこにはダブルベッドしかなかった。\n\n" +
        "鹿紫雲さんは平然としている。";

    document.getElementById("input-area").innerHTML = `
        <button onclick="doubleBedChoice()">次へ</button>
    `;
}


// ==============================
// ダブルベッド・選択肢
// ==============================

function doubleBedChoice() {

    document.getElementById("message").textContent =
        "どうする？";

    document.getElementById("input-area").innerHTML = `

        <button onclick="chooseBed(1)">
            1. 「じゃあ私、ソファで寝ますね」
        </button>

        <button onclick="chooseBed(2)">
            2. 「・・・一緒に寝るんですか」
        </button>

        <button onclick="chooseBed(3)">
            3. 「鹿紫雲さん、何か企んでません？」
        </button>

    `;
}


// ==============================
// ダブルベッド・選択結果
// ==============================

function chooseBed(choice) {

    if (choice === 1) {

        courage += 1;

    } else if (choice === 2) {

        affection += 1;

    } else if (choice === 3) {

        courage += 1;
        trust += 1;
    }

    document.getElementById("message").textContent =
        "「なんだよ、別に一緒で問題ねぇだろ」";

    document.getElementById("input-area").innerHTML = `
        <button onclick="night()">次へ</button>
    `;
}


// ==============================
// 夜
// ==============================

function night() {

    document.getElementById("message").textContent =
        "二人揃ってベッドに潜り込んで眠った。\n\n" +
        "鹿紫雲さんの腕が私の腹に回っている。\n" +
        "抜け出そうと動くも腕に力が入れられる。\n\n" +
        "「" + playerName + "、寒いから動くな」";

    document.getElementById("input-area").innerHTML = `
        <button onclick="nightChoice()">次へ</button>
    `;
}


// ==============================
// 夜・選択肢
// ==============================

function nightChoice() {

    document.getElementById("message").textContent =
        "どう返事をする？";

    document.getElementById("input-area").innerHTML = `

        <button onclick="chooseNight(1)">
            1. 「・・・はい」
        </button>

        <button onclick="chooseNight(2)">
            2. 「鹿紫雲さん、もしかしてずっと起きてました？」
        </button>

        <button onclick="chooseNight(3)">
            3. 「・・・こういうことするから勘違いするんですよ」
        </button>

    `;
}


// ==============================
// 夜・選択結果
// ==============================

function chooseNight(choice) {

    if (choice === 1) {

        affection += 1;

        tomorrow();

    } else if (choice === 2) {

        trust += 1;

        tomorrow();

    } else if (choice === 3) {

        courage += 1;

        document.getElementById("message").textContent =
            "「何を？」\n\n" +
            "「・・・なんでもないです」";

        document.getElementById("input-area").innerHTML = `
            <button onclick="tomorrow()">次へ</button>
        `;
    }
}


// ==============================
// 翌日
// ==============================

function tomorrow() {

    document.getElementById("message").textContent =
        "緊張も睡魔には勝てず、いつの間にか眠っていた。\n\n" +
        "昼過ぎに金ちゃんからの着信で目が覚めた。\n\n" +
        "「うるせぇな、寝てんだがら静かにしろよ」\n\n" +
        "「お前、今鹿紫雲といんのかよ」\n\n" +
        "人の電話に勝手に出た鹿紫雲さんのせいで、" +
        "せっかくバレずに抜け出してきたのにバレてしまった。\n\n" +
        "きんちゃんの言葉に返事もせず電話を勝手に切る。";

    document.getElementById("input-area").innerHTML = `
        <button onclick="tomorrowChoice()">次へ</button>
    `;
}


// ==============================
// 翌日・選択肢
// ==============================

function tomorrowChoice() {

    document.getElementById("message").textContent =
        "どうする？";

    document.getElementById("input-area").innerHTML = `

        <button onclick="chooseTomorrow(1)">
            1. 「今のなんですか！」
        </button>

        <button onclick="chooseTomorrow(2)">
            2. 「・・・また寝ます？」
        </button>

        <button onclick="chooseTomorrow(3)">
            3. 「私、そろそろ帰りまーす・・・」
        </button>

    `;
}


// ==============================
// 翌日・選択結果
// ==============================

function chooseTomorrow(choice) {

    if (choice === 1) {

        trust += 1;

    } else if (choice === 2) {

        affection += 1;

    } else if (choice === 3) {

        courage += 1;
    }

    document.getElementById("message").textContent =
        "言い表せない気まずさを感じながら学校に戻った。";

    document.getElementById("input-area").innerHTML = `
        <button onclick="consultation()">次へ</button>
    `;
}


// ==============================
// 相談
// ==============================

function consultation() {

    document.getElementById("message").textContent =
        "「夜にだけ呼び出す男ってどう思います？」\n\n" +
        "たまたま保健室にいた硝子さんに相談を持ちかける。\n\n" +
        "彼女の口から出た言葉は至ってシンプル。\n\n" +
        "「カス」\n\n" +
        "さらに、\n" +
        "「じゃあその男は呼び出す女の事どう思ってると思います？」\n\n" +
        "「手軽な女」";

    document.getElementById("input-area").innerHTML = `
        <button onclick="consultationChoice()">次へ</button>
    `;
}


// ==============================
// 相談・選択肢
// ==============================

function consultationChoice() {

    document.getElementById("message").textContent =
        "どう答える？";

    document.getElementById("input-area").innerHTML = `

        <button onclick="chooseConsultation(1)">
            1. 「ですよね・・・」
        </button>

        <button onclick="chooseConsultation(2)">
            2. 「鹿紫雲さんはそんな人じゃないです・・・！！」
        </button>

        <button onclick="chooseConsultation(3)">
            3. 「信じたくない！！」
        </button>

    `;
}


// ==============================
// 相談・選択結果
// ==============================

function chooseConsultation(choice) {

    if (choice === 1) {

        trust -= 1;

    } else if (choice === 2) {

        trust += 2;

    } else if (choice === 3) {

        document.getElementById("message").textContent =
            "「本人に聞いたらいいだろ」";
    }

    document.getElementById("input-area").innerHTML = `
        <button onclick="call()">次へ</button>
    `;
}


// ==============================
// 呼び出し
// ==============================

function call() {

    document.getElementById("message").textContent =
        "放課後。誰もいない教室で鹿紫雲さんを待つ。\n\n" +
        "口から心臓が出そうだし、背中から嫌な汗がとめどなく流れてくる。\n\n" +
        "でもこうやって周りにお膳立てしてもらわないと絶対に聞き出すことなんてできない。\n\n" +
        "せっかくもらったチャンス、逃げるわけにはいかない。\n\n" +
        "教室の扉が開く。\n" +
        "鹿紫雲さんが顔を出した。\n\n" +
        "「なんだよ、話って」";

    document.getElementById("input-area").innerHTML = `
        <button onclick="finalScene()">次へ</button>
    `;
}


// ==============================
// 最終シーン
// ==============================

function finalScene() {

    document.getElementById("message").textContent =
        "「・・・よく夜に呼び出すじゃないですか。" +
        "あれってなんでなんですか？」\n\n" +

        "「なんでって・・・" +
        playerName +
        "が外でデートしたいって言ったからだろ」\n\n" +

        "鹿紫雲さんは心底解せないという態度で、" +
        "至極当然のように言い放つ。\n\n" +

        "「え！？た、確かにそんなこと言ったかもですけど！！" +
        "でも私たちそんな関係じゃないですよね！？」\n\n" +

        "「・・・・・・ハァ？」";

    document.getElementById("input-area").innerHTML = `
        <button onclick="finalChoice()">次へ</button>
    `;
}


// ==============================
// 最終選択
// ==============================

function finalChoice() {

    document.getElementById("message").textContent =
        "鹿紫雲さんの認識を整理するとこうだ。\n\n" +
        "① 最中に告白した。\n" +
        "② 私も了承した。\n" +
        "③ 付き合った。\n" +
        "④ 会える時間に呼び出していた。";

    document.getElementById("input-area").innerHTML = `

        <button onclick="chooseFinal(1)">
            1. 「私、ずっと都合よく呼ばれて遊ばれてるんだと思ってました・・・」
        </button>

        <button onclick="chooseFinal(2)">
            2. 「私たちって付き合ってるんですか！？」
        </button>

        <button onclick="chooseFinal(3)">
            3. 「・・・もういいです」
        </button>

    `;
}


// ==============================
// 最終選択・結果
// ==============================

function chooseFinal(choice) {

    if (choice === 1) {

        affection += 2;
        courage += 2;

    } else if (choice === 2) {

        trust += 1;
        courage += 3;

    } else if (choice === 3) {

        trust -= 2;
        courage -= 2;
    }

    finalChoice2();
}


// ==============================
// 最終選択②
// ==============================

function finalChoice2() {

    document.getElementById("message").textContent =
        "「俺も了承の返事したろ」";

    document.getElementById("input-area").innerHTML = `

        <button onclick="chooseFinal2(1)">
            1. 「私も・・・私も好きです」
        </button>

        <button onclick="chooseFinal2(2)">
            2. 「そ、そうだったんですね・・・」
        </button>

        <button onclick="chooseFinal2(3)">
            3. 「・・・それ最中の言葉ですよね？」
        </button>

    `;
}


// ==============================
// 最終選択②・結果
// ==============================

function chooseFinal2(choice) {

    if (choice === 1) {

        affection += 2;
        courage += 2;

    } else if (choice === 2) {

        trust += 1;

    } else if (choice === 3) {

        courage += 1;
    }

    ending();
}


// ==============================
// エンディング判定
// ==============================

function ending() {

    let endingText = "";

    if (
        affection >= 8 &&
        trust >= 8 &&
        courage >= 8
    ) {

        endingText =
            "「不安にさせて悪かった。" +
            playerName +
            "、これからずっと一緒にいてくれ」";

    } else if (
        affection >= 6 &&
        trust >= 4 &&
        courage >= 5
    ) {

        endingText =
            "「好きでもねぇ女と一緒にいるわけねぇだろ」\n\n" +
            "「なんですかその言い方」\n\n" +
            "彼のぶっきらぼうな言い方に思わず吹き出してしまった。\n\n" +
            "「別れてって言っても別れてあげませんから！！」";

    } else if (
        affection >= 5 &&
        trust >= 5
    ) {

        endingText =
            "「ねえ、私のこと好きなんですか？」\n\n" +
            "「言わなくてもわかるだろ」\n\n" +
            "晴れて私は鹿紫雲さんの恋人の座を手に入れた。と思う。\n\n" +
            "彼の言葉足らずな部分を責める気にもなれない。";

    } else {

        endingText =
            "「もう夜に呼び出すの、やめてください」\n\n" +
            "「なんで」\n\n" +
            "鋭い視線でこちらを睨みつける。\n\n" +
            "「私そう言うの嫌なので」\n\n" +
            "「そうかよ、今まで悪かったな」\n\n" +
            "それから、金曜日になっても連絡は来ない。\n" +
            "翌週も、その次もない。";
    }

    document.getElementById("message").textContent =
        endingText;

    document.getElementById("input-area").innerHTML = `
        <p>END</p>
        <button onclick="location.reload()">最初から</button>
    `;
}