$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Positive.feature");
formatter.feature({
  "line": 1,
  "name": "QuandooTest",
  "description": "",
  "id": "quandootest",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login scenario",
  "description": "",
  "id": "quandootest;login-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User navigates to \"http://the-internet.herokuapp.com/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User puts \"\u003cpassword\u003e\" to \"username\" field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User puts \"\u003clogin\u003e\" to \"password\" field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User press Login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User sees message which partially equals to \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "quandootest;login-scenario;",
  "rows": [
    {
      "cells": [
        "password",
        "login",
        "message"
      ],
      "line": 11,
      "id": "quandootest;login-scenario;;1"
    },
    {
      "cells": [
        "tomsmith",
        "SuperSecretPassword!",
        "You logged into a secure area is present"
      ],
      "line": 12,
      "id": "quandootest;login-scenario;;2"
    },
    {
      "cells": [
        "tomtom",
        "SuperSecretPassword!",
        "Your password is invalid"
      ],
      "line": 13,
      "id": "quandootest;login-scenario;;3"
    },
    {
      "cells": [
        "tomsmith",
        "SuperSecret!",
        "Your password is invalid"
      ],
      "line": 14,
      "id": "quandootest;login-scenario;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Login scenario",
  "description": "",
  "id": "quandootest;login-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User navigates to \"http://the-internet.herokuapp.com/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User puts \"tomsmith\" to \"username\" field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User puts \"SuperSecretPassword!\" to \"password\" field",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User press Login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User sees message which partially equals to \"You logged into a secure area is present\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://the-internet.herokuapp.com/login",
      "offset": 19
    }
  ],
  "location": "Annotation.goToSite(String)"
});
formatter.result({
  "duration": 5855728484,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tomsmith",
      "offset": 11
    },
    {
      "val": "username",
      "offset": 25
    }
  ],
  "location": "Annotation.putDataToField(String,String)"
});
formatter.result({
  "duration": 176507832,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SuperSecretPassword!",
      "offset": 11
    },
    {
      "val": "password",
      "offset": 37
    }
  ],
  "location": "Annotation.putDataToField(String,String)"
});
formatter.result({
  "duration": 165380712,
  "status": "passed"
});
formatter.match({
  "location": "Annotation.pressLoginButton()"
});
formatter.result({
  "duration": 500313684,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You logged into a secure area is present",
      "offset": 45
    }
  ],
  "location": "Annotation.positiveResult(String)"
});
formatter.result({
  "duration": 97420992,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login scenario",
  "description": "",
  "id": "quandootest;login-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User navigates to \"http://the-internet.herokuapp.com/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User puts \"tomtom\" to \"username\" field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User puts \"SuperSecretPassword!\" to \"password\" field",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User press Login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User sees message which partially equals to \"Your password is invalid\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://the-internet.herokuapp.com/login",
      "offset": 19
    }
  ],
  "location": "Annotation.goToSite(String)"
});
formatter.result({
  "duration": 279863160,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tomtom",
      "offset": 11
    },
    {
      "val": "username",
      "offset": 23
    }
  ],
  "location": "Annotation.putDataToField(String,String)"
});
formatter.result({
  "duration": 111572051,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SuperSecretPassword!",
      "offset": 11
    },
    {
      "val": "password",
      "offset": 37
    }
  ],
  "location": "Annotation.putDataToField(String,String)"
});
formatter.result({
  "duration": 147264022,
  "status": "passed"
});
formatter.match({
  "location": "Annotation.pressLoginButton()"
});
formatter.result({
  "duration": 582014557,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your password is invalid",
      "offset": 45
    }
  ],
  "location": "Annotation.positiveResult(String)"
});
formatter.result({
  "duration": 75438099,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login scenario",
  "description": "",
  "id": "quandootest;login-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User navigates to \"http://the-internet.herokuapp.com/login\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User puts \"tomsmith\" to \"username\" field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User puts \"SuperSecret!\" to \"password\" field",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User press Login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User sees message which partially equals to \"Your password is invalid\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://the-internet.herokuapp.com/login",
      "offset": 19
    }
  ],
  "location": "Annotation.goToSite(String)"
});
formatter.result({
  "duration": 256298376,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tomsmith",
      "offset": 11
    },
    {
      "val": "username",
      "offset": 25
    }
  ],
  "location": "Annotation.putDataToField(String,String)"
});
formatter.result({
  "duration": 124705079,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SuperSecret!",
      "offset": 11
    },
    {
      "val": "password",
      "offset": 29
    }
  ],
  "location": "Annotation.putDataToField(String,String)"
});
formatter.result({
  "duration": 146732234,
  "status": "passed"
});
formatter.match({
  "location": "Annotation.pressLoginButton()"
});
formatter.result({
  "duration": 456266430,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your password is invalid",
      "offset": 45
    }
  ],
  "location": "Annotation.positiveResult(String)"
});
formatter.result({
  "duration": 70131132,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "hoover",
  "description": "",
  "id": "quandootest;hoover",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "User navigates to \"http://the-internet.herokuapp.com/hovers\"",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User moves to \"\u003cfigure\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Message \"\u003cname\u003e\" is shown",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "quandootest;hoover;",
  "rows": [
    {
      "cells": [
        "figure",
        "name"
      ],
      "line": 22,
      "id": "quandootest;hoover;;1"
    },
    {
      "cells": [
        "1",
        "name: user1"
      ],
      "line": 23,
      "id": "quandootest;hoover;;2"
    },
    {
      "cells": [
        "2",
        "name: user2"
      ],
      "line": 24,
      "id": "quandootest;hoover;;3"
    },
    {
      "cells": [
        "3",
        "name: user3"
      ],
      "line": 25,
      "id": "quandootest;hoover;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "hoover",
  "description": "",
  "id": "quandootest;hoover;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "User navigates to \"http://the-internet.herokuapp.com/hovers\"",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User moves to \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Message \"name: user1\" is shown",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://the-internet.herokuapp.com/hovers",
      "offset": 19
    }
  ],
  "location": "Annotation.goToSite(String)"
});
formatter.result({
  "duration": 308260856,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 15
    }
  ],
  "location": "Annotation.moveToFigure(int)"
});
formatter.result({
  "duration": 88310045,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name: user1",
      "offset": 9
    }
  ],
  "location": "Annotation.seeText(String)"
});
formatter.result({
  "duration": 67324014,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "hoover",
  "description": "",
  "id": "quandootest;hoover;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "User navigates to \"http://the-internet.herokuapp.com/hovers\"",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User moves to \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Message \"name: user2\" is shown",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://the-internet.herokuapp.com/hovers",
      "offset": 19
    }
  ],
  "location": "Annotation.goToSite(String)"
});
formatter.result({
  "duration": 270800965,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 15
    }
  ],
  "location": "Annotation.moveToFigure(int)"
});
formatter.result({
  "duration": 91147955,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name: user2",
      "offset": 9
    }
  ],
  "location": "Annotation.seeText(String)"
});
formatter.result({
  "duration": 60687898,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "hoover",
  "description": "",
  "id": "quandootest;hoover;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "User navigates to \"http://the-internet.herokuapp.com/hovers\"",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User moves to \"3\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Message \"name: user3\" is shown",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://the-internet.herokuapp.com/hovers",
      "offset": 19
    }
  ],
  "location": "Annotation.goToSite(String)"
});
formatter.result({
  "duration": 251120987,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 15
    }
  ],
  "location": "Annotation.moveToFigure(int)"
});
formatter.result({
  "duration": 102054406,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name: user3",
      "offset": 9
    }
  ],
  "location": "Annotation.seeText(String)"
});
formatter.result({
  "duration": 61306926,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "work with table",
  "description": "",
  "id": "quandootest;work-with-table",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "User navigates to \"http://the-internet.herokuapp.com/tables\"",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User presses on tittle Last Name",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "Names are in ascending order",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User presses on tittle Last Name",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Names are in descending order",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://the-internet.herokuapp.com/tables",
      "offset": 19
    }
  ],
  "location": "Annotation.goToSite(String)"
});
formatter.result({
  "duration": 488676587,
  "status": "passed"
});
formatter.match({
  "location": "Annotation.pressOnTittle()"
});
formatter.result({
  "duration": 93649729,
  "status": "passed"
});
formatter.match({
  "location": "Annotation.ascendingOrder()"
});
formatter.result({
  "duration": 110704769,
  "status": "passed"
});
formatter.match({
  "location": "Annotation.pressOnTittle()"
});
formatter.result({
  "duration": 41288246,
  "status": "passed"
});
formatter.match({
  "location": "Annotation.descendingOrder()"
});
formatter.result({
  "duration": 73097337,
  "status": "passed"
});
});