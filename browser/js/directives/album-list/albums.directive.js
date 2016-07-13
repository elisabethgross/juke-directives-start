
juke.directive('albumList', function () {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/album-list/albums.directive.html',
    scope: {
      albums: '='
    }
  };
});
