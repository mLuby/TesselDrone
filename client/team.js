'use strict'

angular.module('MadProps')
  .config(function($stateProvider){
    $stateProvider
      .state('team', {
        url: '/team',
        templateUrl: '../client/team.html'
      })
  })