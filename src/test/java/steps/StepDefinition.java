package steps;

import org.openqa.selenium.support.PageFactory;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.MainPage;
import pages.TestBasePage;

public class StepDefinition extends TestBasePage{
	
	
	MainPage mainpage;
	
	@Before
	public void beforeTest() {
		initDriver();
		mainpage = PageFactory.initElements(driver, MainPage.class);
		mainpage.navigateToPage();
		mainpage.validatePage();
		
	}
	@Given("{string} button exists")
	public void colorButtonExist(String color) {
	
			switch (color) {
			case "skyblue": 
			System.out.println(mainpage.blueButtonExist());
			break;
			case "white": 
			System.out.println(mainpage.whiteButtonExist());
			break;
		}
		

		takeScreenShot(driver);
	}
	

	
	@When ("User clicks on {string}")
	public void userClicksOnButton(String button) {
		switch (button) {
		case "skyblue":
			mainpage.clickOnBlueButton();
			break;
		case "white":
			mainpage.clickOnWhiteButton();
			break;
		}
		
	}
		
	
	@Then ("The background color will change to {string}")
	public void BGColorWillChange(String bgColor) {
		switch (bgColor) {
		case "skyblue":
			mainpage.validateBGcolor("skyblue");
			break;
		case "white":
			mainpage.validateBGcolor("white");
		}
	}
	
	
	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}
}

