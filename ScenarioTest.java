import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class ScenarioTest {
    private Player player;
    @BeforeEach
    void setUp() {
        player = new Player();
    }

    @Test
    void TRUE_HAPPYになる() {
        player.addAffection(8);
        player.addTrust(8);
        player.addCourage(8);

        Scenario scenario = new Scenario(player);

        assertEquals("TRUE HAPPY", scenario.checkEnding());
    }

    @Test 
    void HAPPYになる() {
        player.addAffection(6);
        player.addTrust(4);
        player.addCourage(5);

        Scenario scenario = new Scenario(player);

        assertEquals("HAPPY", scenario.checkEnding());
    }
    @Test 
    void NORMALになる() {
        player.addAffection(5);
        player.addTrust(4);

        Scenario scenario = new Scenario(player);

        assertEquals("NORMAL", scenario.checkEnding());
    }

    @Test 
    void BADになる() {
        player.addAffection(2);
        player.addCourage(1);

        Scenario scenario = new Scenario(player);

        assertEquals("BAD", scenario.checkEnding());
    }

    @Test 
    void affectionが7ならTRUEHAPPYにはならない() {
        player.addAffection(7);
        player.addTrust(8);
        player.addCourage(8);

        Scenario scenario = new Scenario(player);

        assertEquals("HAPPY", scenario.checkEnding());
    }
     @Test
    void addTrustが7の時HAPPYになる() {
        player.addAffection(8);
        player.addTrust(7);
        player.addCourage(8);

        Scenario scenario = new Scenario(player);

        assertEquals("HAPPY", scenario.checkEnding());
    }
     @Test
    void addCoutageが7のときHAPPYになる() {
        player.addAffection(8);
        player.addTrust(8);
        player.addCourage(7);

        Scenario scenario = new Scenario(player);

        assertEquals("HAPPY", scenario.checkEnding());
    }
    @Test 
    void affectionたちが545のときBADになる() {
        player.addAffection(5);
        player.addTrust(4);
        player.addCourage(5);

        Scenario scenario = new Scenario(player);

        assertEquals("BAD", scenario.checkEnding());
    }
    @Test 
    void affectionたちが635のときBADになる() {
        player.addAffection(6);
        player.addTrust(3);
        player.addCourage(5);

        Scenario scenario = new Scenario(player);

        assertEquals("BAD", scenario.checkEnding());
    }
    @Test 
    void affectionたちが644のときBADになる() {
        player.addAffection(6);
        player.addTrust(4);
        player.addCourage(4);

        Scenario scenario = new Scenario(player);

        assertEquals("BAD", scenario.checkEnding());
    }

 @Test
    void NOENDになる() {
        player.addAffection(0);
        player.addTrust(0);
        player.addCourage(0);

        Scenario scenario = new Scenario(player);

        assertEquals("NO END", scenario.checkEnding());
    }
    @Test
    void affectionが450NOENDになる() {
        player.addAffection(4);
        player.addTrust(5);
        player.addCourage(0);

        Scenario scenario = new Scenario(player);

        assertEquals("NO END", scenario.checkEnding());
    }
    @Test
    void affection540のときNOENDになる() {
        player.addAffection(5);
        player.addTrust(4);
        player.addCourage(0);

        Scenario scenario = new Scenario(player);

        assertEquals("NO END", scenario.checkEnding());
    }
    @Test
    void affectionが111のときNOENDになる() {
        player.addAffection(1);
        player.addTrust(1);
        player.addCourage(1);

        Scenario scenario = new Scenario(player);

        assertEquals("NO END", scenario.checkEnding());
    }
    @Test
    void affectionが201のときNOENDになる() {
        player.addAffection(2);
        player.addTrust(0);
        player.addCourage(1);

        Scenario scenario = new Scenario(player);

        assertEquals("NO END", scenario.checkEnding());
    }
    @Test
    void affectionが210のときNOENDになる() {
        player.addAffection(2);
        player.addTrust(1);
        player.addCourage(0);

        Scenario scenario = new Scenario(player);

        assertEquals("NO END", scenario.checkEnding());
    }
}
