//主人公の好感度管理
public class Player {
    private int affection = 0; //愛情
    private int trust = 0; //信頼
    private int courage = 0; //勇気

    public void addAffection(int value) {
        affection += value;
    }

    public void addTrust(int value) {
        trust += value;
    }

    public void addCourage(int value) {
        courage += value;
    }

    public int getAffection() {
        return affection;
    }

    public int getTrust() {
        return trust;
    }

    public int getCourage() {
        return courage;
    }
}