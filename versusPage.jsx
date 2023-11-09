<>
  <meta charSet="UTF-8" />
  <title>Loading Screen</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        body {\n            background-color: #003300; /* Dark green */\n            color: white;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n            margin: 0;\n        }\n        .team1 {\n            font-size: 50px;\n            font-weight: bold;\n            text-align: center;\n        }\n        .team2 {\n            font-size: 50px;\n            font-weight: bold;\n            text-align: center;\n            margin-left: 300px; /* Adjust this margin to control the space between Team 1 and Team 2 */\n        }\n        .list1{\n            font-size: 30px;\n            text-align: center;\n        }\n        .list2{\n            font-size: 30px;\n            text-align: center;\n            margin-left: 300px;\n        }\n        .vertical {\n            border-left: 35px solid white;\n            height: 750px;\n            position: absolute;\n            left: 50%;\n        }\n    "
    }}
  />
  <div>
    <span className="team1">Team 1</span>
    <span className="team2">Team 2</span>
    <br />
    <span className="list1">list players</span>
    <span className="list2">list players</span>
  </div>
  <div className="vertical" />
</>
