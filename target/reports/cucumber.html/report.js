$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/ChangeFeaturesOnTestingPage.feature");
formatter.feature({
  "name": "Changing color background on TechFios Testing Page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@BackgroundTest"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Background Color Change",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "\"\u003ccolor\u003e\" button exists",
  "keyword": "Given "
});
formatter.step({
  "name": "User clicks on \"\u003cbutton\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The background color will change to \"\u003cbgColor\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "color",
        "button",
        "bgColor"
      ]
    },
    {
      "cells": [
        "skyblue",
        "skyblue",
        "skyblue"
      ]
    },
    {
      "cells": [
        "white",
        "white",
        "white"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Background Color Change",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BackgroundTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "\"skyblue\" button exists",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.StepDefinition.colorButtonExist(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on \"skyblue\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.StepDefinition.userClicksOnButton(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The background color will change to \"skyblue\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.StepDefinition.BGColorWillChange(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Background Color Change",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BackgroundTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "\"white\" button exists",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.StepDefinition.colorButtonExist(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on \"white\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.StepDefinition.userClicksOnButton(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The background color will change to \"white\"",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.StepDefinition.BGColorWillChange(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});