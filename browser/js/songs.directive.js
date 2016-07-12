
juke.directive('songList', function (PlayerFactory) {
  return {
    restrict: 'E',
    templateUrl: '/js/songs.directive.html',
    scope: {
      songs: '='
    },
    link: function (scope, element) {

      scope.getCurrentSong = function () {
        return PlayerFactory.getCurrentSong();
      };

      scope.isPlaying = function (song) {
        return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
      };

      scope.toggle = function (song) {
        if (song !== PlayerFactory.getCurrentSong()) {
          PlayerFactory.start(song, scope.songs);
        } else if ( PlayerFactory.isPlaying() ) {
          PlayerFactory.pause();
        } else {
          PlayerFactory.resume();
        }
      };
    }
  };
});

juke.directive('doubleClick', function () {
  return {
    restrict: 'A',
    scope: {
      doubleClick: '&'
    },
    link: function (scope, element) {
      element.on('dblclick', function (song) {
        scope.doubleClick(song);
      });
    }
  };
});
