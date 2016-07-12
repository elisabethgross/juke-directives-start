'use strict';

/* ARTIST (SINGULAR) CONTROLLER */

juke.controller('ArtistCtrl', function ($scope, PlayerFactory, theArtist) {

  $scope.artist = theArtist;

});

/* ARTISTS (PLURAL) CONTROLLER */

juke.controller('ArtistsCtrl', function ($scope, allArtists) {

  $scope.artists = allArtists;

});
