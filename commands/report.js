const fs = require("fs");
const reportFile = "./data/lastReport.txt";

exports.report = function report(authorid, args) {
  var type;
  args[0] == "bug" || args[0] == "text" ? args[0] == "bug" ? "bug" : "text" : type = "invalid";
  if (type != "invalid") {
    var reportArgs = [];
    for (var  i = 1; i < args.length; i++) {
      reportArgs[i-1] = args[i];
      reportArgs[i-1] += " ";
    }
    
    fs.writeFile(reportFile, "", function (err) {
      if (err) throw (err);
    });
    
    for (var j = 0; j < reportArgs.length; j++) { 
      fs.appendFile(reportFile, reportArgs[j], function (err) {
      if (err) throw (err);
      });
    }
    
    var reportAuthor = "from <@" + authorid + "> and is a " + args[0] + " report.";
    
    fs.appendFile(reportFile, reportAuthor, function (err) {
      if (err) throw (err);
    });
    
    return "**Thank for your text report. This has been sent to [Copier] TitaniumTahmid with success.** *False reports are punishable.*";
  } else {
    return "Please use a valid report type!";
  }
}
