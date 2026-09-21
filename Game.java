public class Game {
    Player player;
    Scenario scenario;

    public Game() {
        this.player = new Player();
        this.scenario = new Scenario(player);
    }

    public void start() {
        scenario.opening();
        scenario.fridayNight();
    }
}