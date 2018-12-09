package quandoo;

import config.BaseTest;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static org.testng.Assert.assertTrue;

/**
 * Steps for scenarios for Positive.features
 */
public class Annotation  extends BaseTest {
    public Annotation(){super();}
    WebDriver driver;
    Steps steps;
    mainPage page;
    WebDriverWait wait;

    public void setUP(String browser)
    {
        if (browser != null){
            protectedBrowser = Browser.Chrome;
        }
        this.driver = getDriver(protectedBrowser);
        setRestartFreq(10);
        wait =new WebDriverWait(driver, 20);
        steps = new Steps(driver);
        page = new mainPage(driver);
        waitForLoading();
    }

    @Given("^User navigates to \"(.*)\"$")public void goToSite(String url){

        setUP("chrome");
        getLink(url);
    }

    @When("^User puts \"(.*)\" to \"(.*)\" field$")
    public void putDataToField(String fieldInput, String field) {

       steps.sendText(fieldInput, field);
    }

    @When("^User press Login button$")
    public void pressLoginButton() {

        page.loginButton.click();
    }

    @Then("^User sees message which partially equals to \"(.*)\"$")
    public void positiveResult(String result) {

        wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("div.example")));
        String text = page.headerWithText.getText();

        assertTrue(steps.findPartial(result, text),"Text is totally different" );
    }

    @When("^User moves to \"(.*)\"$")
    public void moveToFigure(int fig){

        steps.choosePicture(fig).click();
    }

    @Then("^Message \"(.*)\" is shown$")
    public void seeText(String nam){

        String name =steps.getText(nam);
        assertTrue(name.contains(nam), "There is no such name");
    }

    @When("^User presses on tittle Last Name$")
    public void pressOnTittle(){

        page.tittle.click();
    }

    @Then("^Names are in ascending order$")
    public void ascendingOrder(){

        assertTrue(steps.checkAscending(steps.getRecords()), "There is no ascending");
    }

    @Then("^Names are in descending order$")
    public void descendingOrder(){

        assertTrue(steps.checkDescending(steps.getRecords()), "There is no descending");
    }
}
