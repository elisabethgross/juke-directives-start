
juke.directive('albumList', function () {
  return {
    restrict: 'E',
    templateUrl: 'js/albums.directive.html',
    scope: {
      albums: '='
    }
  };
});
