package quandoo;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class mainPage {
    WebDriver driver;
    public mainPage(WebDriver webDriver){
        this.driver = webDriver;
        PageFactory.initElements(this.driver, this);
    }

	@FindBy(css="button.radius")
	public WebElement loginButton;

	@FindBy(css="h4.subheader")
	public WebElement headerWithText;

	@FindBy(css="span.last-name")
	public WebElement tittle;






}
