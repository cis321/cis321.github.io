'use strict';

/**
 * @ngdoc function
 * @name ofertasCalendarioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ofertasCalendarioApp
 */
angular.module('ofertasCalendarioApp')
  .controller('MainCtrl', function ($scope) {
    $scope.sourceCities = ['Bogotá', 'Salvador', ];
    $scope.destinationCities = ['Miami', 'New York', ];
    $scope.events = [{
        source: 'Bogotá',
        destination: 'Miami',
        value: 'Desde USD 300',
        eventSources: [
          [{
              start: new Date(2017, 10, 15),
              allDay: true,
            },
            {
              start: new Date(2017, 10, 20),
              allDay: true,
            },
            {
              start: new Date(2017, 10, 28),
              allDay: true,
            },
          ],
        ],
      },
      {
        source: 'Miami',
        destination: 'Bogotá',
        value: 'Desde USD 250',
        eventSources: [
          [{
              start: new Date(2017, 10, 16),
              allDay: true,
            },
            {
              start: new Date(2017, 10, 21),
              allDay: true,
            },
            {
              start: new Date(2017, 10, 29),
              allDay: true,
            },
          ],
        ],
      },
    ];

    $scope.searchPromos = function () {
      for (var i = 0; i < $scope.events.length; i++) {
        if ($scope.events[i].source === $scope.selectedSource && $scope.events[i].destination === $scope.selectedDestination) {
          $scope.departureEventSource = $scope.events[i].eventSources;
          $scope.sourceIndex = i;
          for (var j = 0; j < $scope.events.length; j++) {
            if ($scope.events[j].destination === $scope.selectedSource && $scope.events[j].source === $scope.selectedDestination) {
              $scope.arriveEventSource = $scope.events[j].eventSources;
              $scope.destinationIndex = j;
              break;
            }
          }
        }
        break;
      }
    }
  });
