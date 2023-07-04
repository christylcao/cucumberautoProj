@BackgroundTest
Feature: Changing color background on TechFios Testing Page

Scenario Outline: Background Color Change
		Given "<color>" button exists
		When User clicks on "<button>"
		Then The background color will change to "<bgColor>"
		
		
	Examples:
		|color|button|bgColor|
		|skyblue|skyblue|skyblue|
		|white|white|white|