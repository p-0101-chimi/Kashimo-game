//シナリオ、各シーン
import java.util.Scanner;
public class Scenario {
    private Player player;
    private String name;

    Scanner scanner = new Scanner(System.in);
    public Scenario(Player player) {
        this.player = player;
    }

    public void pause() {
        System.out.println("Enterを押してください");
        scanner.nextLine();
    }

    public void opening() {
        System.out.println("名前を入力してください");
        name = scanner.nextLine();
        pause();
    }

    public void fridayNight() {
        System.out.println("金曜日の夜に任務があると必ず外泊をしてくる。\n夜には鹿紫雲さんに呼び出される。");
        System.out.println("私はメッセージが来ないか気になって何も手につかない。");
        pause();
        System.out.println("「今から出れるか」");
        pause();
        System.out.println("1. 行ける！");
        System.out.println("2. 今日は無理です");
        System.out.println("3. またホテルですか？");
        System.out.println("数字を入力してください");
        
        int choice = Integer.parseInt(scanner.nextLine());
        while (choice < 1 || choice > 3) {
        System.out.println("1〜3の数字を入力してください");
        choice = Integer.parseInt(scanner.nextLine());
        }
        switch(choice) {
            case 1:
                player.addAffection(1);
                break;
            case 2:
                player.addCourage(1);
                break;
            case 3:
                player.addTrust(1);
                player.addCourage(1);
                break;
            default:
                break;
        }
        hotel();
    }

    public void hotel() {
        pause();
        System.out.println("返事なんて気にせず、連絡があった時点ですぐに飛び出していた。\n指定された場所ですでに待っていた鹿紫雲の後ろから抱きつく。\n鹿紫雲に服装を上から下まで見られて、微妙な顔をされる。");
        pause();
        System.out.println("1. 「・・・今日の服、変ですか？」");
        System.out.println("2. 「そんなに見ないでください、恥ずかしい・・・」");
        System.out.println("3. 「似合ってないなら言ってください」");
        System.out.println("数字を入力してください");

        int choice = Integer.parseInt(scanner.nextLine());
        while (choice < 1 || choice > 3) {
        System.out.println("1〜3の数字を入力してください");
        choice = Integer.parseInt(scanner.nextLine());
        }
        switch (choice) {
            case 1:
                player.addTrust(1);
                break;
            case 2:
                player.addAffection(1);
                break;
            case 3:
                player.addCourage(1);
                break;
            default:
                break;
        }
        System.out.println("「別になんも言ってねぇだろ」" );
        convenienceStoreScene();
    }

    public void convenienceStoreScene() {
        pause();
        System.out.println("ホテルを一旦出て、いつものルーティンのようにコンビニに向かった。\nとりあえずカゴに好きなだけおにぎり、デザート、サラダ、飲み物などを放り込んでいく。");
        pause();
        System.out.println("1. 「これも買っていいですか？」");
        System.out.println("2. 「買いすぎじゃないですか？」");
        System.out.println("3. 「鹿紫雲さんが好きなの選んでください」");
        System.out.println("数字を入力してください");
        
        int choice = Integer.parseInt(scanner.nextLine());
        while (choice < 1 || choice > 3) {
        System.out.println("1〜3の数字を入力してください");
        choice = Integer.parseInt(scanner.nextLine());
        }
        switch (choice) {
            case 1:
                player.addAffection(1);
                break;
            case 2:
                player.addCourage(1);
                player.addTrust(1);
                break;
            case 3:
                player.addCourage(1);
                player.addAffection(1);
                break;
            default:
                break;
        }
        hotelDinner();
    }

    public void hotelDinner() {
        pause();
        System.out.println("コンビニから出ると、鹿紫雲が荷物を奪いそのまま指を絡めた。");
        pause();
        System.out.println("1. 何も言わず、そのまま手を繋ぐ");
        System.out.println("2. 「・・・なんで手繋いでるんですか」");
        System.out.println("3. 「手繋ぎたかったんですか」");
        System.out.println("数字を入力してください");

        int choice = Integer.parseInt(scanner.nextLine());
        while (choice < 1 || choice > 3) {
        System.out.println("1〜3の数字を入力してください");
        choice = Integer.parseInt(scanner.nextLine());
        }
        switch (choice) {
            case 1:
                player.addAffection(1);
                player.addTrust(1);
                break;
            case 2:
                player.addCourage(1);
                player.addTrust(1);
                break;
            case 3:
                player.addCourage(1);
                player.addAffection(1);
                break;
            default:
                break;
        }
        System.out.println("鹿紫雲さんが何も言わないまま手を引かれて来た道を戻る。");
        doubleBed();
    }

    public void doubleBed() {
        pause();
        System.out.println("ホテルの部屋に入ると、そこにはダブルベッドしかなかった。\n鹿紫雲さんは平然としている。");
        pause();
        System.out.println("1. 「じゃあ私、ソファで寝ますね」");
        System.out.println("2. 「・・・一緒に寝るんですか」");
        System.out.println("3. 「鹿紫雲さん、何か企んでません？」");
        System.out.println("数字を入力してください");

        int choice = Integer.parseInt(scanner.nextLine());
        while (choice < 1 || choice > 3) {
        System.out.println("1〜3の数字を入力してください");
        choice = Integer.parseInt(scanner.nextLine());
        }
        switch (choice) {
            case 1:
                player.addCourage(1);
                break;
            case 2:
                player.addAffection(1);
                break;
            case 3:
                player.addCourage(1);
                player.addTrust(1);
                break;
            default:
                break;
        }
        System.out.println("「なんだよ、別に一緒で問題ねぇだろ」");
        night();
    }

    public void night() {
        pause();
        System.out.println("二人揃ってベッドに潜り込んで眠った。\n鹿紫雲さんの腕が私の腹に回っている。抜け出そうと動くも腕に力が入れられる。");
        pause();
        System.out.println("「" + name + "、寒いから動くな」 ");
        pause();
        System.out.println("1. 「・・・はい」");
        System.out.println("2. 「鹿紫雲さん、もしかしてずっと起きてました？」");
        System.out.println("3. 「・・・こういうことするから勘違いするんですよ」");
        System.out.println("数字を入力してください");
        int choice = Integer.parseInt(scanner.nextLine());
        while (choice < 1 || choice > 3) {
        System.out.println("1〜3の数字を入力してください");
        choice = Integer.parseInt(scanner.nextLine());
        }
        switch (choice) {
            case 1:
                player.addAffection(1);
                break;
            case 2:
                player.addTrust(1);
                break;
            case 3:
                player.addCourage(1);
                System.out.println("「何を？」 ");
                pause();
                System.out.println("「・・・なんでもないです」");
                pause();
                break;
            default:
                break;
        }
        tomorrow();
    }

    public void tomorrow() {
        pause();
        System.out.println("緊張も睡魔には勝てず、いつの間にか眠っていた。\n昼過ぎに金ちゃんからの着信で目が覚めた。");
        pause();
        System.out.println("「うるせぇな、寝てんだがら静かにしろよ」");
        System.out.println("「お前、今鹿紫雲といんのかよ」\n人の電話に勝手に出た鹿紫雲さんのせいでせっかくバレずに抜け出してきたのにバレてしまった。\nきんちゃんの言葉に返事もせず電話を勝手に切る。");
        pause();
        System.out.println("1. 「今のなんですか！」");
        System.out.println("2. 「・・・また寝ます？」");
        System.out.println("3. 「私、そろそろ帰りまーす・・・」");
        System.out.println("数字を入力してください");

        int choice = Integer.parseInt(scanner.nextLine());
        while (choice < 1 || choice > 3) {
        System.out.println("1〜3の数字を入力してください");
        choice = Integer.parseInt(scanner.nextLine());
        }
        switch (choice) {
            case 1:
                player.addTrust(1);
                break;
            case 2:
                player.addAffection(1);
                break;
            case 3:
                player.addCourage(1);
                break;
            default:
                break;
        }
        System.out.println("言い表せない気まずさを感じながら学校に戻った。");
        pause();
        consultation();
    }

    public void consultation() {
        System.out.println("「夜にだけ呼び出す男ってどう思います？」\nたまたま保健室にいた硝子さんに相談を持ちかける。\n彼女の口から出た言葉は至ってシンプル。");
        pause();
        System.out.println("「カス」\nさらに、\n「じゃあその男は呼び出す女の事どう思ってると思います？」\n「手軽な女」");
        pause();
        System.out.println("1. 「ですよね・・・」");
        System.out.println("2. 「鹿紫雲さんはそんな人じゃないです・・・！！」");
        System.out.println("3. 「信じたくない！！」");
        System.out.println("数字を入力してください");
        
        int choice = Integer.parseInt(scanner.nextLine());
        while (choice < 1 || choice > 3) {
        System.out.println("1〜3の数字を入力してください");
        choice = Integer.parseInt(scanner.nextLine());
        }
        switch (choice) {
            case 1:
                player.addTrust(-1);
                break;
            case 2:
                player.addTrust(2);
                break;
            case 3:
                System.out.println("「本人に聞いたらいいだろ」");
                break;
            default:
                break;
        }
        System.out.println("硝子さんの言葉を受け入れたくなくて、でも本人に直接聞く勇気もでない。\nいや、でも・・・。\nうじうじと悩んでいたら見兼ねた硝子さんが金ちゃん経由で鹿紫雲さんを呼び出してしまった。");
        pause();
        call();
    }

    public void call() {
        System.out.println("放課後。誰もいない教室で鹿紫雲さんを待つ。\n口から心臓が出そうだし、背中から嫌な汗がとめどなく流れてくる。");
        System.out.println("でもこうやって周りにお膳立てしてもらわないと絶対に聞き出すことなんてできない。\nせっかくもらったチャンス、逃げるわけにはいかない。");
        pause();
        System.out.println("教室の扉が開く。\n鹿紫雲さんが顔を出した。「なんだよ、話って」");
        pause();
        System.out.println("「・・・よく夜に呼び出すじゃないですか。あれってなんでなんですか？」");
        pause();
        System.out.println("「なんでって・・・" + name + "が外でデートしたいって言ったからだろ」\n鹿紫雲さんは心底解せないと言う態度で、至極当然のように言い放つ。");
        System.out.println("「え！？た、確かにそんなこと言ったかもですけど！！\nでも私たちそんな関係じゃないですよね！？」");
        System.out.println("「・・・・・・ハァ？」");
        finalChoice();
    }

    public void finalChoice() {
        pause();
        System.out.println("鹿紫雲さんの認識を整理するとこうだ。\n①最中に告白した。\n②私も了承した。\n③付き合った。\n④会える時間に呼び出していた。");
        pause();
        System.out.println("1. 「私、ずっと都合よく呼ばれて遊ばれてるんだと思ってました・・・」");
         System.out.println("2. 「私たちって付き合ってるんですか！？」");
         System.out.println("3. 「・・・もういいです」");
         System.out.println("数字を入力してください");
         
        int choice = Integer.parseInt(scanner.nextLine());
        while (choice < 1 || choice > 3) {
        System.out.println("1〜3の数字を入力してください");
        choice = Integer.parseInt(scanner.nextLine());
        }
        switch (choice) {
            case 1:
                player.addAffection(2);
                player.addCourage(2);
                break;
            case 2:
                player.addTrust(1);
                player.addCourage(3);
                break;
            case 3:
                player.addTrust(-2);
                player.addCourage(-2);
                break;
            default:
                break;
        }
        System.out.println("「俺も了承の返事したろ」");
        pause();
        System.out.println("1. 「私も・・・私も好きです」");
        System.out.println("2. 「そ、そうだったんですね・・・」");
        System.out.println("3. 「・・・それ最中の言葉ですよね？」");
        System.out.println("数字を入力してください");
        
        int choice2 = Integer.parseInt(scanner.nextLine());
        while (choice < 1 || choice > 3) {
        System.out.println("1〜3の数字を入力してください");
        choice = Integer.parseInt(scanner.nextLine());
        }
        switch (choice2) {
            case 1:
                player.addAffection(2);
                player.addCourage(2);
                break;
            case 2:
                player.addTrust(1);
                break;
            case 3:
                player.addCourage(1);
                System.out.println("「じゃあ本気じゃねぇって疑ってんのか？」");
                System.out.println("「そうじゃないですけど・・・私がその言葉信じていいかわかんないんですもん」");
                break;
            default:
                break;
        }
        ending();
    }
    public void ending() {
        if(player.getAffection() >= 8 && player.getTrust() >= 8 && player.getCourage() >= 8) {
            System.out.println("「不安にさせて悪かった。" + name + "、、これからずっと一緒にいてくれ」");
        } else if(player.getAffection() >= 5 && player.getTrust() >= 4) {
            System.out.println("「ねえ、私のこと好きなんですか？」");
            System.out.println("「言わなくてもわかるだろ」");
            System.out.println("晴れて私は鹿紫雲さんの恋人の座を手に入れた。と思う。");
            System.out.println("彼の言葉足らずな部分を責める気にもなれない。");
        } else if(player.getTrust() <= 2 && player.getCourage() <= 1) {
            System.out.println("「もう夜に呼び出すの、やめてください」");
            System.out.println("「なんで」\n鋭い視線でこちらを睨みつける。");
            System.out.println("震える足を無視して口をひらく。\n「私そう言うの嫌なので」");
            System.out.println("「そうかよ、今まで悪かったな」");
            System.out.println("それから、金曜日になっても連絡は来ない。翌週も、その次もない。");
        } else if(player.getAffection() >= 6 && player.getTrust() >= 4 && player.getCourage() >= 5) {
            System.out.println("「好きでもねぇ女と一緒にいるわけねぇだろ」");
            System.out.println("「なんですかその言い方」\n彼のぶっきらぼうな言い方に思わず吹き出してしまった。");
            pause();
            System.out.println("「別れてって言っても別れてあげませんから！！」");
        }
    }
    public String checkEnding() {

    if (player.getAffection() >= 8 && player.getTrust() >= 8 && player.getCourage() >= 8) {
        return "TRUE HAPPY";
    } else if (player.getAffection() >= 6 && player.getTrust() >= 4 && player.getCourage() >= 5) {
        return "HAPPY";
    } else if (player.getAffection() >= 5 && player.getTrust() >= 5) {
        return "NORMAL";
    } else if (player.getAffection() >= 2 && player.getCourage() >= 1 && player.getCourage() >= 1) {
        return "BAD";
    }
    return "NO END";
}

}