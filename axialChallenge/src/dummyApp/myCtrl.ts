app.controller("myCtrl", function($scope) {
  const regex = /^(\d*)(\.?)(\d*)([m,M,b,B,k]?)$/;
  const commaRegex = /\B(?=(\d{3})+(?!\d))/g;
  $scope.entry = "";
  $scope.verify = () => {
    const entry = $scope.entry;
    let result = entry.match(regex);
    if (!result) { 
      $scope.resultMessage = "You gotta talk the talk";
    } else {
      let answer = (tempParts[1] ? parseInt(tempParts[1]) : 0);
      if (result[2]) {
        const power = result[3].length;
        let decimal = parseInt(result[3]);
        answer = answer + (decimal/(Math.pow(10, power)));
      }
      switch (result[4]) {
        case "b":
        case "B":
          answer = answer * 1000000000;
          break;
        case "m":
        case "M":
          answer = answer * 1000000;
          break;
        case "k":
          answer = answer * 1000;
          break;
        default:
      }
      let parts = answer.toString().split(".");
      answer = parts[0].replace(commaRegex, ",") + (parts[1] ? "." + parts[1] : "");
      $scope.resultMessage = answer + " TENDIES!";
    }
  }
});
