app.controller("myCtrl", function($scope) {
  const regex = /^(\.?)(\d+)([m,M,b,B,k]?)$/;
  const commaRegex = /\B(?=(\d{3})+(?!\d))/g;
  $scope.entry = ""
  $scope.verify = () => {
    const entry = $scope.entry;
    let result = entry.match(regex);
    if (!result) { 
      $scope.resultMessage = "You gotta talk the talk";
    } else {
      let answer = parseInt(result[2]);
      if (result[1]) {
        const power = result[2].length;
        answer = answer/(Math.pow(10, power));
      }
      switch (result[3]) {
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
