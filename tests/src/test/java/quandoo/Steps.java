package quandoo;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.ArrayList;
import java.util.List;

public class Steps {
    private final WebDriver webDriver;
    mainPage mainPage;

    public Steps(WebDriver webDriver)
    {
        this.webDriver = webDriver;
        PageFactory.initElements(this.webDriver, this);
        mainPage =  new mainPage(webDriver);
    }

    public void sendText(String fieldInput, String field){

        WebDriverWait wait =new WebDriverWait(webDriver, 20);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector("input#"+field+"")))
                .sendKeys(fieldInput);
    }

    public boolean findPartial(String result, String text){
        int count = 0;

        String[] sp = result.split(" ");

        for(int j=0; j<sp.length; j++){
            if (text.toLowerCase().contains(sp[j].toLowerCase())){
                count +=1;
            }
        }

        if (count>0){
            return true;
        }
        else return false;
    }

    public List<String> getRecords(){
        List<WebElement> rowVals = webDriver.findElements(By.cssSelector("#table2 > tbody > tr > td.last-name"));
        List<String> records = new ArrayList<String>();
        for (int i=0; i<rowVals.size(); i++){
            records.add(rowVals.get(i).getText());
        }

        return records;
    }

    public boolean checkAscending(List<String> records){
        for (int i=0; i< records.size()-1; i++){
            if (records.get(i).compareTo( records.get(i+1)) >0)
                return false;
        }
        return  true;
    }

    public boolean checkDescending(List<String> records){
        for (int i=0; i< records.size()-1; i++){
            if (records.get(i).compareTo( records.get(i+1)) <0)
                return false;
        }

        return  true;
    }

    public WebElement choosePicture(int fig){
        switch (fig) {
            case 1: return webDriver.findElement(By.cssSelector("#content > div > div:nth-child(3)"));

            case 2: return webDriver.findElement(By.cssSelector("#content > div > div:nth-child(4)"));

            case 3: return webDriver.findElement(By.cssSelector("#content > div > div:nth-child(5)"));

            default: throw new IllegalStateException("there is no such figure");
        }
    }



    public String getText(String tittle){
        WebDriverWait wait =new WebDriverWait(webDriver, 20);

        if (tittle.contains("1")) {
            return wait.until(ExpectedConditions.visibilityOfElementLocated
                    (By.cssSelector("#content > div > div:nth-child(3) > div"))).getText();
        }
        else {
            if (tittle.contains("2")){
                return wait.until(ExpectedConditions.visibilityOfElementLocated
                        (By.cssSelector("#content > div > div:nth-child(4) > div"))).getText();
            }
            else {return wait.until(ExpectedConditions.visibilityOfElementLocated
                    (By.cssSelector("#content > div > div:nth-child(5) > div"))).getText();}
        }
    }

}
