package pages;


import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.Color;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class MainPage {
	
	WebDriver driver;
	
	public MainPage(WebDriver driver) {
		this.driver = driver;
		
	}

	@FindBy(how = How.XPATH, using = "//b[text()=\"NSS-TODO List v 1.1\"]") WebElement MAIN_PAGE;
	@FindBy(how = How.XPATH, using = "//button[contains(text(), \"Set SkyBlue Background\")]") WebElement BLUE_BUTTON;
	@FindBy(how = How.XPATH, using = "//button[contains(text(), \"Set White Background\")]") WebElement WHITE_BUTTON;

	
	public void navigateToPage() {
		driver.get("https://techfios.com/test/105/");
	}
	
	public void validatePage() {
		System.out.println(MAIN_PAGE.isDisplayed());
	}
	
	public void clickOnBlueButton(){
		BLUE_BUTTON.click();
		
	}
	
	public void clickOnWhiteButton() {
		WHITE_BUTTON.click();
		
	}
	
	public boolean blueButtonExist() {
		return BLUE_BUTTON.isDisplayed();
	}
	
	public boolean whiteButtonExist() {
		return WHITE_BUTTON.isDisplayed();
}
	
	public void validateBGcolor(String bgColor) {
			
			switch (bgColor) {
			case "skyblue":
				System.out.println("Background color is Sky Blue.");
				break;
			case "white":
				System.out.println("Background color is White.");
				break;
			}
				
	}
		
}
