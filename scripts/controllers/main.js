'use strict';

/**
 * @ngdoc function
 * @name ofertasCalendarioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ofertasCalendarioApp
 */
angular.module('ofertasCalendarioApp')
  .controller('MainCtrl', function ($scope, _) {
    $scope.events = [{
      source: "Cali",
      destination: "San Andrés",
      value: "COP 119900",
      eventSources: [
        [{
          start: new Date(2017, 10, 22),
          allDay: true
        }, {
          start: new Date(2017, 10, 24),
          allDay: true
        }, {
          start: new Date(2017, 10, 25),
          allDay: true
        }, {
          start: new Date(2017, 10, 26),
          allDay: true
        }, {
          start: new Date(2017, 10, 27),
          allDay: true
        }, {
          start: new Date(2017, 10, 28),
          allDay: true
        }, {
          start: new Date(2017, 10, 29),
          allDay: true
        }, {
          start: new Date(2017, 10, 30),
          allDay: true
        }, {
          start: new Date(2018, 0, 31),
          allDay: true
        }, {
          start: new Date(2018, 1, 3),
          allDay: true
        }, {
          start: new Date(2018, 1, 4),
          allDay: true
        }, {
          start: new Date(2018, 1, 5),
          allDay: true
        }, {
          start: new Date(2018, 1, 6),
          allDay: true
        }, {
          start: new Date(2018, 1, 7),
          allDay: true
        }, {
          start: new Date(2018, 1, 10),
          allDay: true
        }, {
          start: new Date(2018, 1, 11),
          allDay: true
        }, {
          start: new Date(2018, 1, 12),
          allDay: true
        }, {
          start: new Date(2018, 1, 13),
          allDay: true
        }, {
          start: new Date(2018, 1, 14),
          allDay: true
        }, {
          start: new Date(2018, 1, 17),
          allDay: true
        }, {
          start: new Date(2018, 1, 18),
          allDay: true
        }, {
          start: new Date(2018, 1, 19),
          allDay: true
        }, {
          start: new Date(2018, 1, 20),
          allDay: true
        }]
      ]
    }, {
      source: "San Andrés",
      destination: "Cali",
      value: "COP 119900",
      eventSources: [
        [{
          start: new Date(2017, 10, 22),
          allDay: true
        }, {
          start: new Date(2017, 10, 23),
          allDay: true
        }, {
          start: new Date(2017, 10, 24),
          allDay: true
        }, {
          start: new Date(2017, 10, 25),
          allDay: true
        }, {
          start: new Date(2017, 10, 28),
          allDay: true
        }, {
          start: new Date(2017, 10, 29),
          allDay: true
        }, {
          start: new Date(2017, 11, 12),
          allDay: true
        }, {
          start: new Date(2017, 11, 31),
          allDay: true
        }, {
          start: new Date(2018, 0, 30),
          allDay: true
        }, {
          start: new Date(2018, 1, 2),
          allDay: true
        }, {
          start: new Date(2018, 1, 8),
          allDay: true
        }, {
          start: new Date(2018, 1, 14),
          allDay: true
        }, {
          start: new Date(2018, 1, 15),
          allDay: true
        }, {
          start: new Date(2018, 1, 16),
          allDay: true
        }, {
          start: new Date(2018, 1, 17),
          allDay: true
        }, {
          start: new Date(2018, 1, 20),
          allDay: true
        }]
      ]
    }, {
      source: "Bogotá",
      destination: "Armenia",
      value: "COP 79900",
      eventSources: [
        [{
          start: new Date(2017, 10, 22),
          allDay: true
        }, {
          start: new Date(2017, 11, 3),
          allDay: true
        }, {
          start: new Date(2017, 11, 13),
          allDay: true
        }, {
          start: new Date(2017, 11, 14),
          allDay: true
        }, {
          start: new Date(2018, 0, 22),
          allDay: true
        }, {
          start: new Date(2018, 0, 23),
          allDay: true
        }, {
          start: new Date(2018, 0, 24),
          allDay: true
        }, {
          start: new Date(2018, 0, 25),
          allDay: true
        }, {
          start: new Date(2018, 0, 26),
          allDay: true
        }, {
          start: new Date(2018, 0, 27),
          allDay: true
        }, {
          start: new Date(2018, 0, 28),
          allDay: true
        }, {
          start: new Date(2018, 0, 29),
          allDay: true
        }, {
          start: new Date(2018, 0, 30),
          allDay: true
        }, {
          start: new Date(2018, 0, 31),
          allDay: true
        }, {
          start: new Date(2018, 1, 1),
          allDay: true
        }, {
          start: new Date(2018, 1, 2),
          allDay: true
        }, {
          start: new Date(2018, 1, 3),
          allDay: true
        }, {
          start: new Date(2018, 1, 4),
          allDay: true
        }, {
          start: new Date(2018, 1, 5),
          allDay: true
        }, {
          start: new Date(2018, 1, 6),
          allDay: true
        }, {
          start: new Date(2018, 1, 7),
          allDay: true
        }, {
          start: new Date(2018, 1, 8),
          allDay: true
        }, {
          start: new Date(2018, 1, 9),
          allDay: true
        }, {
          start: new Date(2018, 1, 10),
          allDay: true
        }, {
          start: new Date(2018, 1, 11),
          allDay: true
        }, {
          start: new Date(2018, 1, 12),
          allDay: true
        }, {
          start: new Date(2018, 1, 13),
          allDay: true
        }, {
          start: new Date(2018, 1, 14),
          allDay: true
        }, {
          start: new Date(2018, 1, 15),
          allDay: true
        }, {
          start: new Date(2018, 1, 16),
          allDay: true
        }, {
          start: new Date(2018, 1, 17),
          allDay: true
        }, {
          start: new Date(2018, 1, 18),
          allDay: true
        }, {
          start: new Date(2018, 1, 19),
          allDay: true
        }, {
          start: new Date(2018, 1, 20),
          allDay: true
        }]
      ]
    }, {
      source: "Armenia",
      destination: "Bogotá",
      value: "COP 79900",
      eventSources: [
        [{
          start: new Date(2017, 10, 22),
          allDay: true
        }, {
          start: new Date(2017, 10, 25),
          allDay: true
        }, {
          start: new Date(2017, 10, 27),
          allDay: true
        }, {
          start: new Date(2017, 10, 28),
          allDay: true
        }, {
          start: new Date(2017, 10, 29),
          allDay: true
        }, {
          start: new Date(2017, 10, 30),
          allDay: true
        }, {
          start: new Date(2017, 11, 1),
          allDay: true
        }, {
          start: new Date(2017, 11, 2),
          allDay: true
        }, {
          start: new Date(2017, 11, 4),
          allDay: true
        }, {
          start: new Date(2017, 11, 5),
          allDay: true
        }, {
          start: new Date(2017, 11, 6),
          allDay: true
        }, {
          start: new Date(2017, 11, 7),
          allDay: true
        }, {
          start: new Date(2017, 11, 8),
          allDay: true
        }, {
          start: new Date(2017, 11, 12),
          allDay: true
        }, {
          start: new Date(2017, 11, 13),
          allDay: true
        }, {
          start: new Date(2017, 11, 14),
          allDay: true
        }, {
          start: new Date(2017, 11, 15),
          allDay: true
        }, {
          start: new Date(2017, 11, 16),
          allDay: true
        }, {
          start: new Date(2017, 11, 17),
          allDay: true
        }, {
          start: new Date(2017, 11, 19),
          allDay: true
        }, {
          start: new Date(2017, 11, 24),
          allDay: true
        }, {
          start: new Date(2017, 11, 25),
          allDay: true
        }, {
          start: new Date(2017, 11, 28),
          allDay: true
        }, {
          start: new Date(2017, 11, 29),
          allDay: true
        }, {
          start: new Date(2017, 11, 30),
          allDay: true
        }, {
          start: new Date(2018, 0, 12),
          allDay: true
        }, {
          start: new Date(2018, 0, 13),
          allDay: true
        }, {
          start: new Date(2018, 0, 19),
          allDay: true
        }, {
          start: new Date(2018, 0, 22),
          allDay: true
        }, {
          start: new Date(2018, 0, 23),
          allDay: true
        }, {
          start: new Date(2018, 0, 24),
          allDay: true
        }, {
          start: new Date(2018, 0, 25),
          allDay: true
        }, {
          start: new Date(2018, 0, 26),
          allDay: true
        }, {
          start: new Date(2018, 0, 27),
          allDay: true
        }, {
          start: new Date(2018, 0, 28),
          allDay: true
        }, {
          start: new Date(2018, 0, 29),
          allDay: true
        }, {
          start: new Date(2018, 0, 30),
          allDay: true
        }, {
          start: new Date(2018, 0, 31),
          allDay: true
        }, {
          start: new Date(2018, 1, 1),
          allDay: true
        }, {
          start: new Date(2018, 1, 2),
          allDay: true
        }, {
          start: new Date(2018, 1, 3),
          allDay: true
        }, {
          start: new Date(2018, 1, 4),
          allDay: true
        }, {
          start: new Date(2018, 1, 5),
          allDay: true
        }, {
          start: new Date(2018, 1, 6),
          allDay: true
        }, {
          start: new Date(2018, 1, 7),
          allDay: true
        }, {
          start: new Date(2018, 1, 8),
          allDay: true
        }, {
          start: new Date(2018, 1, 9),
          allDay: true
        }, {
          start: new Date(2018, 1, 10),
          allDay: true
        }, {
          start: new Date(2018, 1, 11),
          allDay: true
        }, {
          start: new Date(2018, 1, 12),
          allDay: true
        }, {
          start: new Date(2018, 1, 13),
          allDay: true
        }, {
          start: new Date(2018, 1, 14),
          allDay: true
        }, {
          start: new Date(2018, 1, 15),
          allDay: true
        }, {
          start: new Date(2018, 1, 16),
          allDay: true
        }, {
          start: new Date(2018, 1, 17),
          allDay: true
        }, {
          start: new Date(2018, 1, 18),
          allDay: true
        }, {
          start: new Date(2018, 1, 19),
          allDay: true
        }, {
          start: new Date(2018, 1, 20),
          allDay: true
        }]
      ]
    }, {
      source: "Bogotá",
      destination: "Santa Marta",
      value: "COP 119900",
      eventSources: [
        [{
          start: new Date(2017, 10, 25),
          allDay: true
        }, {
          start: new Date(2017, 10, 26),
          allDay: true
        }, {
          start: new Date(2017, 10, 27),
          allDay: true
        }, {
          start: new Date(2017, 10, 28),
          allDay: true
        }, {
          start: new Date(2017, 10, 29),
          allDay: true
        }, {
          start: new Date(2017, 11, 2),
          allDay: true
        }, {
          start: new Date(2017, 11, 3),
          allDay: true
        }, {
          start: new Date(2017, 11, 4),
          allDay: true
        }, {
          start: new Date(2017, 11, 5),
          allDay: true
        }, {
          start: new Date(2017, 11, 9),
          allDay: true
        }, {
          start: new Date(2017, 11, 10),
          allDay: true
        }, {
          start: new Date(2017, 11, 11),
          allDay: true
        }, {
          start: new Date(2017, 11, 12),
          allDay: true
        }, {
          start: new Date(2017, 11, 13),
          allDay: true
        }, {
          start: new Date(2018, 0, 7),
          allDay: true
        }, {
          start: new Date(2018, 0, 8),
          allDay: true
        }, {
          start: new Date(2018, 0, 9),
          allDay: true
        }, {
          start: new Date(2018, 0, 10),
          allDay: true
        }, {
          start: new Date(2018, 0, 11),
          allDay: true
        }, {
          start: new Date(2018, 0, 12),
          allDay: true
        }, {
          start: new Date(2018, 0, 13),
          allDay: true
        }, {
          start: new Date(2018, 0, 14),
          allDay: true
        }, {
          start: new Date(2018, 0, 15),
          allDay: true
        }, {
          start: new Date(2018, 0, 16),
          allDay: true
        }, {
          start: new Date(2018, 0, 17),
          allDay: true
        }, {
          start: new Date(2018, 0, 18),
          allDay: true
        }, {
          start: new Date(2018, 0, 19),
          allDay: true
        }, {
          start: new Date(2018, 0, 20),
          allDay: true
        }, {
          start: new Date(2018, 0, 21),
          allDay: true
        }, {
          start: new Date(2018, 0, 22),
          allDay: true
        }, {
          start: new Date(2018, 0, 23),
          allDay: true
        }, {
          start: new Date(2018, 0, 24),
          allDay: true
        }, {
          start: new Date(2018, 0, 25),
          allDay: true
        }, {
          start: new Date(2018, 0, 26),
          allDay: true
        }, {
          start: new Date(2018, 0, 27),
          allDay: true
        }, {
          start: new Date(2018, 0, 28),
          allDay: true
        }, {
          start: new Date(2018, 0, 29),
          allDay: true
        }, {
          start: new Date(2018, 0, 30),
          allDay: true
        }, {
          start: new Date(2018, 0, 31),
          allDay: true
        }, {
          start: new Date(2018, 1, 1),
          allDay: true
        }, {
          start: new Date(2018, 1, 2),
          allDay: true
        }, {
          start: new Date(2018, 1, 3),
          allDay: true
        }, {
          start: new Date(2018, 1, 4),
          allDay: true
        }, {
          start: new Date(2018, 1, 5),
          allDay: true
        }, {
          start: new Date(2018, 1, 6),
          allDay: true
        }, {
          start: new Date(2018, 1, 7),
          allDay: true
        }, {
          start: new Date(2018, 1, 10),
          allDay: true
        }, {
          start: new Date(2018, 1, 11),
          allDay: true
        }, {
          start: new Date(2018, 1, 12),
          allDay: true
        }, {
          start: new Date(2018, 1, 13),
          allDay: true
        }, {
          start: new Date(2018, 1, 14),
          allDay: true
        }, {
          start: new Date(2018, 1, 17),
          allDay: true
        }, {
          start: new Date(2018, 1, 18),
          allDay: true
        }, {
          start: new Date(2018, 1, 19),
          allDay: true
        }, {
          start: new Date(2018, 1, 20),
          allDay: true
        }]
      ]
    }, {
      source: "Pereira",
      destination: "Bogotá",
      value: "COP 79900",
      eventSources: [
        [{
          start: new Date(2017, 10, 25),
          allDay: true
        }, {
          start: new Date(2017, 10, 26),
          allDay: true
        }, {
          start: new Date(2017, 10, 27),
          allDay: true
        }, {
          start: new Date(2017, 10, 28),
          allDay: true
        }, {
          start: new Date(2017, 10, 29),
          allDay: true
        }, {
          start: new Date(2017, 10, 30),
          allDay: true
        }, {
          start: new Date(2017, 11, 1),
          allDay: true
        }, {
          start: new Date(2017, 11, 3),
          allDay: true
        }, {
          start: new Date(2017, 11, 4),
          allDay: true
        }, {
          start: new Date(2017, 11, 5),
          allDay: true
        }, {
          start: new Date(2017, 11, 6),
          allDay: true
        }, {
          start: new Date(2017, 11, 7),
          allDay: true
        }, {
          start: new Date(2017, 11, 8),
          allDay: true
        }, {
          start: new Date(2017, 11, 9),
          allDay: true
        }, {
          start: new Date(2017, 11, 13),
          allDay: true
        }, {
          start: new Date(2017, 11, 14),
          allDay: true
        }, {
          start: new Date(2017, 11, 15),
          allDay: true
        }, {
          start: new Date(2017, 11, 16),
          allDay: true
        }, {
          start: new Date(2017, 11, 17),
          allDay: true
        }, {
          start: new Date(2017, 11, 18),
          allDay: true
        }, {
          start: new Date(2017, 11, 19),
          allDay: true
        }, {
          start: new Date(2017, 11, 21),
          allDay: true
        }, {
          start: new Date(2017, 11, 22),
          allDay: true
        }, {
          start: new Date(2017, 11, 23),
          allDay: true
        }, {
          start: new Date(2017, 11, 24),
          allDay: true
        }, {
          start: new Date(2017, 11, 31),
          allDay: true
        }, {
          start: new Date(2018, 0, 23),
          allDay: true
        }, {
          start: new Date(2018, 0, 24),
          allDay: true
        }, {
          start: new Date(2018, 0, 25),
          allDay: true
        }, {
          start: new Date(2018, 0, 26),
          allDay: true
        }, {
          start: new Date(2018, 0, 28),
          allDay: true
        }, {
          start: new Date(2018, 0, 29),
          allDay: true
        }, {
          start: new Date(2018, 0, 30),
          allDay: true
        }, {
          start: new Date(2018, 0, 31),
          allDay: true
        }, {
          start: new Date(2018, 1, 1),
          allDay: true
        }, {
          start: new Date(2018, 1, 2),
          allDay: true
        }, {
          start: new Date(2018, 1, 3),
          allDay: true
        }, {
          start: new Date(2018, 1, 5),
          allDay: true
        }, {
          start: new Date(2018, 1, 6),
          allDay: true
        }, {
          start: new Date(2018, 1, 7),
          allDay: true
        }, {
          start: new Date(2018, 1, 8),
          allDay: true
        }, {
          start: new Date(2018, 1, 9),
          allDay: true
        }, {
          start: new Date(2018, 1, 10),
          allDay: true
        }, {
          start: new Date(2018, 1, 11),
          allDay: true
        }, {
          start: new Date(2018, 1, 12),
          allDay: true
        }, {
          start: new Date(2018, 1, 13),
          allDay: true
        }, {
          start: new Date(2018, 1, 14),
          allDay: true
        }, {
          start: new Date(2018, 1, 15),
          allDay: true
        }, {
          start: new Date(2018, 1, 16),
          allDay: true
        }, {
          start: new Date(2018, 1, 17),
          allDay: true
        }, {
          start: new Date(2018, 1, 19),
          allDay: true
        }, {
          start: new Date(2018, 1, 20),
          allDay: true
        }]
      ]
    }, {
      source: "Bogotá",
      destination: "Pereira",
      value: "COP 79900",
      eventSources: [
        [{
          start: new Date(2017, 10, 26),
          allDay: true
        }, {
          start: new Date(2017, 11, 2),
          allDay: true
        }, {
          start: new Date(2017, 11, 3),
          allDay: true
        }, {
          start: new Date(2017, 11, 4),
          allDay: true
        }, {
          start: new Date(2017, 11, 5),
          allDay: true
        }, {
          start: new Date(2017, 11, 10),
          allDay: true
        }, {
          start: new Date(2017, 11, 11),
          allDay: true
        }, {
          start: new Date(2017, 11, 12),
          allDay: true
        }, {
          start: new Date(2017, 11, 13),
          allDay: true
        }, {
          start: new Date(2018, 0, 10),
          allDay: true
        }, {
          start: new Date(2018, 0, 11),
          allDay: true
        }, {
          start: new Date(2018, 0, 12),
          allDay: true
        }, {
          start: new Date(2018, 0, 13),
          allDay: true
        }, {
          start: new Date(2018, 0, 14),
          allDay: true
        }, {
          start: new Date(2018, 0, 15),
          allDay: true
        }, {
          start: new Date(2018, 0, 16),
          allDay: true
        }, {
          start: new Date(2018, 0, 17),
          allDay: true
        }, {
          start: new Date(2018, 0, 18),
          allDay: true
        }, {
          start: new Date(2018, 0, 19),
          allDay: true
        }, {
          start: new Date(2018, 0, 20),
          allDay: true
        }, {
          start: new Date(2018, 0, 21),
          allDay: true
        }, {
          start: new Date(2018, 0, 22),
          allDay: true
        }, {
          start: new Date(2018, 0, 23),
          allDay: true
        }, {
          start: new Date(2018, 0, 24),
          allDay: true
        }, {
          start: new Date(2018, 0, 25),
          allDay: true
        }, {
          start: new Date(2018, 0, 26),
          allDay: true
        }, {
          start: new Date(2018, 0, 27),
          allDay: true
        }, {
          start: new Date(2018, 0, 28),
          allDay: true
        }, {
          start: new Date(2018, 0, 29),
          allDay: true
        }, {
          start: new Date(2018, 0, 30),
          allDay: true
        }, {
          start: new Date(2018, 1, 1),
          allDay: true
        }, {
          start: new Date(2018, 1, 2),
          allDay: true
        }, {
          start: new Date(2018, 1, 3),
          allDay: true
        }, {
          start: new Date(2018, 1, 4),
          allDay: true
        }, {
          start: new Date(2018, 1, 5),
          allDay: true
        }, {
          start: new Date(2018, 1, 6),
          allDay: true
        }, {
          start: new Date(2018, 1, 7),
          allDay: true
        }, {
          start: new Date(2018, 1, 8),
          allDay: true
        }, {
          start: new Date(2018, 1, 11),
          allDay: true
        }, {
          start: new Date(2018, 1, 12),
          allDay: true
        }, {
          start: new Date(2018, 1, 13),
          allDay: true
        }, {
          start: new Date(2018, 1, 14),
          allDay: true
        }, {
          start: new Date(2018, 1, 15),
          allDay: true
        }, {
          start: new Date(2018, 1, 16),
          allDay: true
        }, {
          start: new Date(2018, 1, 17),
          allDay: true
        }, {
          start: new Date(2018, 1, 18),
          allDay: true
        }, {
          start: new Date(2018, 1, 19),
          allDay: true
        }, {
          start: new Date(2018, 1, 20),
          allDay: true
        }]
      ]
    }, {
      source: "Bogotá",
      destination: "Barranquilla",
      value: "COP 99900",
      eventSources: [
        [{
          start: new Date(2017, 10, 26),
          allDay: true
        }, {
          start: new Date(2017, 11, 2),
          allDay: true
        }, {
          start: new Date(2017, 11, 4),
          allDay: true
        }, {
          start: new Date(2017, 11, 5),
          allDay: true
        }, {
          start: new Date(2017, 11, 8),
          allDay: true
        }, {
          start: new Date(2017, 11, 9),
          allDay: true
        }, {
          start: new Date(2017, 11, 12),
          allDay: true
        }, {
          start: new Date(2018, 0, 1),
          allDay: true
        }, {
          start: new Date(2018, 0, 2),
          allDay: true
        }, {
          start: new Date(2018, 0, 3),
          allDay: true
        }, {
          start: new Date(2018, 0, 6),
          allDay: true
        }, {
          start: new Date(2018, 0, 7),
          allDay: true
        }, {
          start: new Date(2018, 0, 8),
          allDay: true
        }, {
          start: new Date(2018, 0, 9),
          allDay: true
        }, {
          start: new Date(2018, 0, 10),
          allDay: true
        }, {
          start: new Date(2018, 0, 11),
          allDay: true
        }, {
          start: new Date(2018, 0, 12),
          allDay: true
        }, {
          start: new Date(2018, 0, 13),
          allDay: true
        }, {
          start: new Date(2018, 0, 14),
          allDay: true
        }, {
          start: new Date(2018, 0, 15),
          allDay: true
        }, {
          start: new Date(2018, 0, 16),
          allDay: true
        }, {
          start: new Date(2018, 0, 17),
          allDay: true
        }, {
          start: new Date(2018, 0, 18),
          allDay: true
        }, {
          start: new Date(2018, 0, 19),
          allDay: true
        }, {
          start: new Date(2018, 0, 20),
          allDay: true
        }, {
          start: new Date(2018, 0, 21),
          allDay: true
        }, {
          start: new Date(2018, 0, 22),
          allDay: true
        }, {
          start: new Date(2018, 0, 23),
          allDay: true
        }, {
          start: new Date(2018, 0, 24),
          allDay: true
        }, {
          start: new Date(2018, 0, 25),
          allDay: true
        }, {
          start: new Date(2018, 0, 26),
          allDay: true
        }, {
          start: new Date(2018, 0, 27),
          allDay: true
        }, {
          start: new Date(2018, 0, 28),
          allDay: true
        }, {
          start: new Date(2018, 0, 29),
          allDay: true
        }, {
          start: new Date(2018, 0, 30),
          allDay: true
        }, {
          start: new Date(2018, 0, 31),
          allDay: true
        }, {
          start: new Date(2018, 1, 1),
          allDay: true
        }, {
          start: new Date(2018, 1, 2),
          allDay: true
        }, {
          start: new Date(2018, 1, 3),
          allDay: true
        }, {
          start: new Date(2018, 1, 4),
          allDay: true
        }, {
          start: new Date(2018, 1, 5),
          allDay: true
        }, {
          start: new Date(2018, 1, 6),
          allDay: true
        }, {
          start: new Date(2018, 1, 7),
          allDay: true
        }, {
          start: new Date(2018, 1, 11),
          allDay: true
        }, {
          start: new Date(2018, 1, 12),
          allDay: true
        }, {
          start: new Date(2018, 1, 13),
          allDay: true
        }, {
          start: new Date(2018, 1, 14),
          allDay: true
        }, {
          start: new Date(2018, 1, 15),
          allDay: true
        }, {
          start: new Date(2018, 1, 16),
          allDay: true
        }, {
          start: new Date(2018, 1, 17),
          allDay: true
        }, {
          start: new Date(2018, 1, 18),
          allDay: true
        }, {
          start: new Date(2018, 1, 20),
          allDay: true
        }]
      ]
    }, {
      source: "Santa Marta",
      destination: "Bogotá",
      value: "COP 119900",
      eventSources: [
        [{
          start: new Date(2017, 10, 29),
          allDay: true
        }, {
          start: new Date(2017, 10, 30),
          allDay: true
        }, {
          start: new Date(2017, 11, 1),
          allDay: true
        }, {
          start: new Date(2017, 11, 2),
          allDay: true
        }, {
          start: new Date(2017, 11, 3),
          allDay: true
        }, {
          start: new Date(2017, 11, 4),
          allDay: true
        }, {
          start: new Date(2017, 11, 5),
          allDay: true
        }, {
          start: new Date(2017, 11, 6),
          allDay: true
        }, {
          start: new Date(2017, 11, 7),
          allDay: true
        }, {
          start: new Date(2017, 11, 8),
          allDay: true
        }, {
          start: new Date(2017, 11, 12),
          allDay: true
        }, {
          start: new Date(2017, 11, 13),
          allDay: true
        }, {
          start: new Date(2017, 11, 14),
          allDay: true
        }, {
          start: new Date(2018, 0, 17),
          allDay: true
        }, {
          start: new Date(2018, 0, 18),
          allDay: true
        }, {
          start: new Date(2018, 0, 19),
          allDay: true
        }, {
          start: new Date(2018, 0, 20),
          allDay: true
        }, {
          start: new Date(2018, 0, 22),
          allDay: true
        }, {
          start: new Date(2018, 0, 23),
          allDay: true
        }, {
          start: new Date(2018, 0, 24),
          allDay: true
        }, {
          start: new Date(2018, 0, 25),
          allDay: true
        }, {
          start: new Date(2018, 0, 26),
          allDay: true
        }, {
          start: new Date(2018, 0, 27),
          allDay: true
        }, {
          start: new Date(2018, 0, 28),
          allDay: true
        }, {
          start: new Date(2018, 0, 29),
          allDay: true
        }, {
          start: new Date(2018, 0, 30),
          allDay: true
        }, {
          start: new Date(2018, 0, 31),
          allDay: true
        }, {
          start: new Date(2018, 1, 1),
          allDay: true
        }, {
          start: new Date(2018, 1, 2),
          allDay: true
        }, {
          start: new Date(2018, 1, 3),
          allDay: true
        }, {
          start: new Date(2018, 1, 4),
          allDay: true
        }, {
          start: new Date(2018, 1, 5),
          allDay: true
        }, {
          start: new Date(2018, 1, 6),
          allDay: true
        }, {
          start: new Date(2018, 1, 7),
          allDay: true
        }, {
          start: new Date(2018, 1, 8),
          allDay: true
        }, {
          start: new Date(2018, 1, 9),
          allDay: true
        }, {
          start: new Date(2018, 1, 10),
          allDay: true
        }, {
          start: new Date(2018, 1, 12),
          allDay: true
        }, {
          start: new Date(2018, 1, 14),
          allDay: true
        }, {
          start: new Date(2018, 1, 15),
          allDay: true
        }, {
          start: new Date(2018, 1, 16),
          allDay: true
        }, {
          start: new Date(2018, 1, 17),
          allDay: true
        }, {
          start: new Date(2018, 1, 19),
          allDay: true
        }, {
          start: new Date(2018, 1, 20),
          allDay: true
        }]
      ]
    }, {
      source: "Barranquilla",
      destination: "Bogotá",
      value: "COP 99900",
      eventSources: [
        [{
          start: new Date(2017, 11, 1),
          allDay: true
        }, {
          start: new Date(2017, 11, 2),
          allDay: true
        }, {
          start: new Date(2017, 11, 3),
          allDay: true
        }, {
          start: new Date(2017, 11, 4),
          allDay: true
        }, {
          start: new Date(2017, 11, 5),
          allDay: true
        }, {
          start: new Date(2017, 11, 6),
          allDay: true
        }, {
          start: new Date(2017, 11, 7),
          allDay: true
        }, {
          start: new Date(2017, 11, 8),
          allDay: true
        }, {
          start: new Date(2017, 11, 9),
          allDay: true
        }, {
          start: new Date(2017, 11, 12),
          allDay: true
        }, {
          start: new Date(2017, 11, 13),
          allDay: true
        }, {
          start: new Date(2017, 11, 14),
          allDay: true
        }, {
          start: new Date(2018, 0, 17),
          allDay: true
        }, {
          start: new Date(2018, 0, 18),
          allDay: true
        }, {
          start: new Date(2018, 0, 19),
          allDay: true
        }, {
          start: new Date(2018, 0, 20),
          allDay: true
        }, {
          start: new Date(2018, 0, 21),
          allDay: true
        }, {
          start: new Date(2018, 0, 22),
          allDay: true
        }, {
          start: new Date(2018, 0, 23),
          allDay: true
        }, {
          start: new Date(2018, 0, 24),
          allDay: true
        }, {
          start: new Date(2018, 0, 25),
          allDay: true
        }, {
          start: new Date(2018, 0, 26),
          allDay: true
        }, {
          start: new Date(2018, 0, 27),
          allDay: true
        }, {
          start: new Date(2018, 0, 28),
          allDay: true
        }, {
          start: new Date(2018, 0, 29),
          allDay: true
        }, {
          start: new Date(2018, 0, 30),
          allDay: true
        }, {
          start: new Date(2018, 0, 31),
          allDay: true
        }, {
          start: new Date(2018, 1, 1),
          allDay: true
        }, {
          start: new Date(2018, 1, 2),
          allDay: true
        }, {
          start: new Date(2018, 1, 3),
          allDay: true
        }, {
          start: new Date(2018, 1, 4),
          allDay: true
        }, {
          start: new Date(2018, 1, 5),
          allDay: true
        }, {
          start: new Date(2018, 1, 6),
          allDay: true
        }, {
          start: new Date(2018, 1, 7),
          allDay: true
        }, {
          start: new Date(2018, 1, 8),
          allDay: true
        }, {
          start: new Date(2018, 1, 9),
          allDay: true
        }, {
          start: new Date(2018, 1, 10),
          allDay: true
        }, {
          start: new Date(2018, 1, 16),
          allDay: true
        }, {
          start: new Date(2018, 1, 17),
          allDay: true
        }, {
          start: new Date(2018, 1, 18),
          allDay: true
        }, {
          start: new Date(2018, 1, 19),
          allDay: true
        }, {
          start: new Date(2018, 1, 20),
          allDay: true
        }]
      ]
    }, {
      source: "Medellín",
      destination: "Barranquilla",
      value: "COP 79900",
      eventSources: [
        [{
          start: new Date(2017, 11, 1),
          allDay: true
        }, {
          start: new Date(2017, 11, 2),
          allDay: true
        }, {
          start: new Date(2017, 11, 6),
          allDay: true
        }, {
          start: new Date(2017, 11, 8),
          allDay: true
        }, {
          start: new Date(2017, 11, 9),
          allDay: true
        }, {
          start: new Date(2017, 11, 12),
          allDay: true
        }, {
          start: new Date(2017, 11, 13),
          allDay: true
        }, {
          start: new Date(2018, 0, 14),
          allDay: true
        }, {
          start: new Date(2018, 0, 15),
          allDay: true
        }, {
          start: new Date(2018, 0, 16),
          allDay: true
        }, {
          start: new Date(2018, 0, 17),
          allDay: true
        }, {
          start: new Date(2018, 0, 18),
          allDay: true
        }, {
          start: new Date(2018, 0, 20),
          allDay: true
        }, {
          start: new Date(2018, 0, 21),
          allDay: true
        }, {
          start: new Date(2018, 0, 22),
          allDay: true
        }, {
          start: new Date(2018, 0, 23),
          allDay: true
        }, {
          start: new Date(2018, 0, 24),
          allDay: true
        }, {
          start: new Date(2018, 0, 25),
          allDay: true
        }, {
          start: new Date(2018, 0, 27),
          allDay: true
        }, {
          start: new Date(2018, 0, 28),
          allDay: true
        }, {
          start: new Date(2018, 0, 29),
          allDay: true
        }, {
          start: new Date(2018, 0, 30),
          allDay: true
        }, {
          start: new Date(2018, 0, 31),
          allDay: true
        }, {
          start: new Date(2018, 1, 1),
          allDay: true
        }, {
          start: new Date(2018, 1, 3),
          allDay: true
        }, {
          start: new Date(2018, 1, 4),
          allDay: true
        }, {
          start: new Date(2018, 1, 5),
          allDay: true
        }, {
          start: new Date(2018, 1, 11),
          allDay: true
        }, {
          start: new Date(2018, 1, 15),
          allDay: true
        }, {
          start: new Date(2018, 1, 18),
          allDay: true
        }, {
          start: new Date(2018, 1, 19),
          allDay: true
        }]
      ]
    }, {
      source: "San Andrés",
      destination: "Medellín",
      value: "COP 109900",
      eventSources: [
        [{
          start: new Date(2017, 11, 1),
          allDay: true
        }, {
          start: new Date(2017, 11, 3),
          allDay: true
        }, {
          start: new Date(2017, 11, 6),
          allDay: true
        }, {
          start: new Date(2017, 11, 8),
          allDay: true
        }, {
          start: new Date(2017, 11, 24),
          allDay: true
        }, {
          start: new Date(2017, 11, 25),
          allDay: true
        }, {
          start: new Date(2018, 0, 17),
          allDay: true
        }, {
          start: new Date(2018, 0, 19),
          allDay: true
        }, {
          start: new Date(2018, 0, 23),
          allDay: true
        }, {
          start: new Date(2018, 0, 24),
          allDay: true
        }, {
          start: new Date(2018, 0, 26),
          allDay: true
        }, {
          start: new Date(2018, 0, 28),
          allDay: true
        }, {
          start: new Date(2018, 0, 29),
          allDay: true
        }, {
          start: new Date(2018, 0, 30),
          allDay: true
        }, {
          start: new Date(2018, 0, 31),
          allDay: true
        }, {
          start: new Date(2018, 1, 2),
          allDay: true
        }, {
          start: new Date(2018, 1, 4),
          allDay: true
        }, {
          start: new Date(2018, 1, 5),
          allDay: true
        }, {
          start: new Date(2018, 1, 6),
          allDay: true
        }, {
          start: new Date(2018, 1, 8),
          allDay: true
        }, {
          start: new Date(2018, 1, 9),
          allDay: true
        }, {
          start: new Date(2018, 1, 12),
          allDay: true
        }, {
          start: new Date(2018, 1, 14),
          allDay: true
        }, {
          start: new Date(2018, 1, 15),
          allDay: true
        }, {
          start: new Date(2018, 1, 16),
          allDay: true
        }, {
          start: new Date(2018, 1, 17),
          allDay: true
        }, {
          start: new Date(2018, 1, 18),
          allDay: true
        }, {
          start: new Date(2018, 1, 19),
          allDay: true
        }, {
          start: new Date(2018, 1, 20),
          allDay: true
        }]
      ]
    }, {
      source: "Medellín",
      destination: "Bogotá",
      value: "COP 79900",
      eventSources: [
        [{
          start: new Date(2017, 11, 1),
          allDay: true
        }, {
          start: new Date(2017, 11, 2),
          allDay: true
        }, {
          start: new Date(2017, 11, 3),
          allDay: true
        }, {
          start: new Date(2017, 11, 4),
          allDay: true
        }, {
          start: new Date(2017, 11, 6),
          allDay: true
        }, {
          start: new Date(2017, 11, 7),
          allDay: true
        }, {
          start: new Date(2017, 11, 8),
          allDay: true
        }, {
          start: new Date(2017, 11, 9),
          allDay: true
        }, {
          start: new Date(2017, 11, 12),
          allDay: true
        }, {
          start: new Date(2017, 11, 13),
          allDay: true
        }, {
          start: new Date(2017, 11, 14),
          allDay: true
        }, {
          start: new Date(2017, 11, 15),
          allDay: true
        }, {
          start: new Date(2017, 11, 16),
          allDay: true
        }, {
          start: new Date(2017, 11, 17),
          allDay: true
        }, {
          start: new Date(2017, 11, 18),
          allDay: true
        }, {
          start: new Date(2017, 11, 19),
          allDay: true
        }, {
          start: new Date(2017, 11, 20),
          allDay: true
        }, {
          start: new Date(2017, 11, 21),
          allDay: true
        }, {
          start: new Date(2017, 11, 22),
          allDay: true
        }, {
          start: new Date(2017, 11, 23),
          allDay: true
        }, {
          start: new Date(2017, 11, 24),
          allDay: true
        }, {
          start: new Date(2017, 11, 25),
          allDay: true
        }, {
          start: new Date(2017, 11, 27),
          allDay: true
        }, {
          start: new Date(2017, 11, 28),
          allDay: true
        }, {
          start: new Date(2017, 11, 29),
          allDay: true
        }, {
          start: new Date(2017, 11, 30),
          allDay: true
        }, {
          start: new Date(2017, 11, 31),
          allDay: true
        }, {
          start: new Date(2018, 0, 3),
          allDay: true
        }, {
          start: new Date(2018, 0, 4),
          allDay: true
        }, {
          start: new Date(2018, 0, 5),
          allDay: true
        }, {
          start: new Date(2018, 0, 6),
          allDay: true
        }, {
          start: new Date(2018, 0, 7),
          allDay: true
        }, {
          start: new Date(2018, 0, 9),
          allDay: true
        }, {
          start: new Date(2018, 0, 10),
          allDay: true
        }, {
          start: new Date(2018, 0, 11),
          allDay: true
        }, {
          start: new Date(2018, 0, 12),
          allDay: true
        }, {
          start: new Date(2018, 0, 13),
          allDay: true
        }, {
          start: new Date(2018, 0, 14),
          allDay: true
        }, {
          start: new Date(2018, 0, 15),
          allDay: true
        }, {
          start: new Date(2018, 0, 16),
          allDay: true
        }, {
          start: new Date(2018, 0, 17),
          allDay: true
        }, {
          start: new Date(2018, 0, 18),
          allDay: true
        }, {
          start: new Date(2018, 0, 19),
          allDay: true
        }, {
          start: new Date(2018, 0, 20),
          allDay: true
        }, {
          start: new Date(2018, 0, 21),
          allDay: true
        }, {
          start: new Date(2018, 0, 22),
          allDay: true
        }, {
          start: new Date(2018, 0, 23),
          allDay: true
        }, {
          start: new Date(2018, 0, 24),
          allDay: true
        }, {
          start: new Date(2018, 0, 25),
          allDay: true
        }, {
          start: new Date(2018, 0, 26),
          allDay: true
        }, {
          start: new Date(2018, 0, 27),
          allDay: true
        }, {
          start: new Date(2018, 0, 28),
          allDay: true
        }, {
          start: new Date(2018, 0, 29),
          allDay: true
        }, {
          start: new Date(2018, 0, 30),
          allDay: true
        }, {
          start: new Date(2018, 0, 31),
          allDay: true
        }, {
          start: new Date(2018, 1, 1),
          allDay: true
        }, {
          start: new Date(2018, 1, 2),
          allDay: true
        }, {
          start: new Date(2018, 1, 3),
          allDay: true
        }, {
          start: new Date(2018, 1, 4),
          allDay: true
        }, {
          start: new Date(2018, 1, 5),
          allDay: true
        }, {
          start: new Date(2018, 1, 6),
          allDay: true
        }, {
          start: new Date(2018, 1, 7),
          allDay: true
        }, {
          start: new Date(2018, 1, 8),
          allDay: true
        }, {
          start: new Date(2018, 1, 9),
          allDay: true
        }, {
          start: new Date(2018, 1, 10),
          allDay: true
        }, {
          start: new Date(2018, 1, 11),
          allDay: true
        }, {
          start: new Date(2018, 1, 12),
          allDay: true
        }, {
          start: new Date(2018, 1, 13),
          allDay: true
        }, {
          start: new Date(2018, 1, 14),
          allDay: true
        }, {
          start: new Date(2018, 1, 15),
          allDay: true
        }, {
          start: new Date(2018, 1, 16),
          allDay: true
        }, {
          start: new Date(2018, 1, 17),
          allDay: true
        }, {
          start: new Date(2018, 1, 18),
          allDay: true
        }, {
          start: new Date(2018, 1, 19),
          allDay: true
        }, {
          start: new Date(2018, 1, 20),
          allDay: true
        }]
      ]
    }, {
      source: "Bogotá",
      destination: "Florencia",
      value: "COP 229900",
      eventSources: [
        [{
          start: new Date(2017, 11, 2),
          allDay: true
        }, {
          start: new Date(2017, 11, 8),
          allDay: true
        }, {
          start: new Date(2017, 11, 10),
          allDay: true
        }, {
          start: new Date(2017, 11, 13),
          allDay: true
        }, {
          start: new Date(2018, 0, 1),
          allDay: true
        }, {
          start: new Date(2018, 0, 6),
          allDay: true
        }, {
          start: new Date(2018, 0, 7),
          allDay: true
        }, {
          start: new Date(2018, 0, 13),
          allDay: true
        }, {
          start: new Date(2018, 0, 14),
          allDay: true
        }, {
          start: new Date(2018, 0, 17),
          allDay: true
        }, {
          start: new Date(2018, 0, 18),
          allDay: true
        }, {
          start: new Date(2018, 0, 19),
          allDay: true
        }, {
          start: new Date(2018, 0, 20),
          allDay: true
        }, {
          start: new Date(2018, 0, 21),
          allDay: true
        }, {
          start: new Date(2018, 0, 24),
          allDay: true
        }, {
          start: new Date(2018, 0, 25),
          allDay: true
        }, {
          start: new Date(2018, 0, 26),
          allDay: true
        }, {
          start: new Date(2018, 0, 27),
          allDay: true
        }, {
          start: new Date(2018, 0, 31),
          allDay: true
        }]
      ]
    }, {
      source: "Barranquilla",
      destination: "Medellín",
      value: "COP 79900",
      eventSources: [
        [{
          start: new Date(2017, 11, 2),
          allDay: true
        }, {
          start: new Date(2017, 11, 5),
          allDay: true
        }, {
          start: new Date(2017, 11, 6),
          allDay: true
        }, {
          start: new Date(2017, 11, 13),
          allDay: true
        }, {
          start: new Date(2018, 0, 18),
          allDay: true
        }, {
          start: new Date(2018, 0, 21),
          allDay: true
        }, {
          start: new Date(2018, 0, 24),
          allDay: true
        }, {
          start: new Date(2018, 0, 25),
          allDay: true
        }, {
          start: new Date(2018, 0, 27),
          allDay: true
        }, {
          start: new Date(2018, 0, 28),
          allDay: true
        }, {
          start: new Date(2018, 0, 29),
          allDay: true
        }, {
          start: new Date(2018, 0, 30),
          allDay: true
        }, {
          start: new Date(2018, 0, 31),
          allDay: true
        }, {
          start: new Date(2018, 1, 4),
          allDay: true
        }, {
          start: new Date(2018, 1, 18),
          allDay: true
        }]
      ]
    }, {
      source: "Montería",
      destination: "Bogotá",
      value: "COP 79900",
      eventSources: [
        [{
          start: new Date(2017, 11, 2),
          allDay: true
        }, {
          start: new Date(2017, 11, 3),
          allDay: true
        }, {
          start: new Date(2017, 11, 4),
          allDay: true
        }, {
          start: new Date(2017, 11, 5),
          allDay: true
        }, {
          start: new Date(2017, 11, 6),
          allDay: true
        }, {
          start: new Date(2017, 11, 8),
          allDay: true
        }, {
          start: new Date(2017, 11, 13),
          allDay: true
        }, {
          start: new Date(2017, 11, 14),
          allDay: true
        }, {
          start: new Date(2018, 0, 27),
          allDay: true
        }, {
          start: new Date(2018, 0, 31),
          allDay: true
        }, {
          start: new Date(2018, 1, 3),
          allDay: true
        }, {
          start: new Date(2018, 1, 5),
          allDay: true
        }, {
          start: new Date(2018, 1, 6),
          allDay: true
        }, {
          start: new Date(2018, 1, 10),
          allDay: true
        }, {
          start: new Date(2018, 1, 12),
          allDay: true
        }, {
          start: new Date(2018, 1, 13),
          allDay: true
        }, {
          start: new Date(2018, 1, 17),
          allDay: true
        }, {
          start: new Date(2018, 1, 19),
          allDay: true
        }]
      ]
    }, {
      source: "Cali",
      destination: "Bogotá",
      value: "COP 99900",
      eventSources: [
        [{
          start: new Date(2017, 11, 2),
          allDay: true
        }, {
          start: new Date(2017, 11, 3),
          allDay: true
        }, {
          start: new Date(2017, 11, 4),
          allDay: true
        }, {
          start: new Date(2017, 11, 6),
          allDay: true
        }, {
          start: new Date(2017, 11, 7),
          allDay: true
        }, {
          start: new Date(2017, 11, 8),
          allDay: true
        }, {
          start: new Date(2017, 11, 9),
          allDay: true
        }, {
          start: new Date(2017, 11, 12),
          allDay: true
        }, {
          start: new Date(2017, 11, 13),
          allDay: true
        }, {
          start: new Date(2017, 11, 14),
          allDay: true
        }, {
          start: new Date(2017, 11, 15),
          allDay: true
        }, {
          start: new Date(2017, 11, 16),
          allDay: true
        }, {
          start: new Date(2017, 11, 17),
          allDay: true
        }, {
          start: new Date(2017, 11, 18),
          allDay: true
        }, {
          start: new Date(2017, 11, 19),
          allDay: true
        }, {
          start: new Date(2017, 11, 20),
          allDay: true
        }, {
          start: new Date(2017, 11, 21),
          allDay: true
        }, {
          start: new Date(2017, 11, 22),
          allDay: true
        }, {
          start: new Date(2017, 11, 23),
          allDay: true
        }, {
          start: new Date(2017, 11, 24),
          allDay: true
        }, {
          start: new Date(2017, 11, 25),
          allDay: true
        }, {
          start: new Date(2018, 0, 17),
          allDay: true
        }, {
          start: new Date(2018, 0, 18),
          allDay: true
        }, {
          start: new Date(2018, 0, 19),
          allDay: true
        }, {
          start: new Date(2018, 0, 20),
          allDay: true
        }, {
          start: new Date(2018, 0, 21),
          allDay: true
        }, {
          start: new Date(2018, 0, 22),
          allDay: true
        }, {
          start: new Date(2018, 0, 23),
          allDay: true
        }, {
          start: new Date(2018, 0, 24),
          allDay: true
        }, {
          start: new Date(2018, 0, 25),
          allDay: true
        }, {
          start: new Date(2018, 0, 26),
          allDay: true
        }, {
          start: new Date(2018, 0, 27),
          allDay: true
        }, {
          start: new Date(2018, 0, 28),
          allDay: true
        }, {
          start: new Date(2018, 0, 29),
          allDay: true
        }, {
          start: new Date(2018, 0, 30),
          allDay: true
        }, {
          start: new Date(2018, 0, 31),
          allDay: true
        }, {
          start: new Date(2018, 1, 1),
          allDay: true
        }, {
          start: new Date(2018, 1, 2),
          allDay: true
        }, {
          start: new Date(2018, 1, 3),
          allDay: true
        }, {
          start: new Date(2018, 1, 4),
          allDay: true
        }, {
          start: new Date(2018, 1, 5),
          allDay: true
        }, {
          start: new Date(2018, 1, 6),
          allDay: true
        }, {
          start: new Date(2018, 1, 7),
          allDay: true
        }, {
          start: new Date(2018, 1, 8),
          allDay: true
        }, {
          start: new Date(2018, 1, 9),
          allDay: true
        }, {
          start: new Date(2018, 1, 10),
          allDay: true
        }, {
          start: new Date(2018, 1, 11),
          allDay: true
        }, {
          start: new Date(2018, 1, 12),
          allDay: true
        }, {
          start: new Date(2018, 1, 13),
          allDay: true
        }, {
          start: new Date(2018, 1, 14),
          allDay: true
        }, {
          start: new Date(2018, 1, 15),
          allDay: true
        }, {
          start: new Date(2018, 1, 16),
          allDay: true
        }, {
          start: new Date(2018, 1, 17),
          allDay: true
        }, {
          start: new Date(2018, 1, 18),
          allDay: true
        }, {
          start: new Date(2018, 1, 19),
          allDay: true
        }, {
          start: new Date(2018, 1, 20),
          allDay: true
        }]
      ]
    }, {
      source: "Bucaramanga",
      destination: "Bogotá",
      value: "COP 99900",
      eventSources: [
        [{
          start: new Date(2017, 11, 2),
          allDay: true
        }, {
          start: new Date(2017, 11, 3),
          allDay: true
        }, {
          start: new Date(2017, 11, 4),
          allDay: true
        }, {
          start: new Date(2017, 11, 5),
          allDay: true
        }, {
          start: new Date(2017, 11, 6),
          allDay: true
        }, {
          start: new Date(2017, 11, 7),
          allDay: true
        }, {
          start: new Date(2017, 11, 8),
          allDay: true
        }, {
          start: new Date(2017, 11, 9),
          allDay: true
        }, {
          start: new Date(2017, 11, 11),
          allDay: true
        }, {
          start: new Date(2017, 11, 12),
          allDay: true
        }, {
          start: new Date(2017, 11, 13),
          allDay: true
        }, {
          start: new Date(2017, 11, 14),
          allDay: true
        }, {
          start: new Date(2018, 0, 11),
          allDay: true
        }, {
          start: new Date(2018, 0, 12),
          allDay: true
        }, {
          start: new Date(2018, 0, 13),
          allDay: true
        }, {
          start: new Date(2018, 0, 14),
          allDay: true
        }, {
          start: new Date(2018, 0, 15),
          allDay: true
        }, {
          start: new Date(2018, 0, 16),
          allDay: true
        }, {
          start: new Date(2018, 0, 17),
          allDay: true
        }, {
          start: new Date(2018, 0, 18),
          allDay: true
        }, {
          start: new Date(2018, 0, 19),
          allDay: true
        }, {
          start: new Date(2018, 0, 20),
          allDay: true
        }, {
          start: new Date(2018, 0, 21),
          allDay: true
        }, {
          start: new Date(2018, 0, 22),
          allDay: true
        }, {
          start: new Date(2018, 0, 23),
          allDay: true
        }, {
          start: new Date(2018, 0, 24),
          allDay: true
        }, {
          start: new Date(2018, 0, 25),
          allDay: true
        }, {
          start: new Date(2018, 0, 26),
          allDay: true
        }, {
          start: new Date(2018, 0, 27),
          allDay: true
        }, {
          start: new Date(2018, 0, 28),
          allDay: true
        }, {
          start: new Date(2018, 0, 29),
          allDay: true
        }, {
          start: new Date(2018, 0, 30),
          allDay: true
        }, {
          start: new Date(2018, 0, 31),
          allDay: true
        }, {
          start: new Date(2018, 1, 1),
          allDay: true
        }, {
          start: new Date(2018, 1, 2),
          allDay: true
        }, {
          start: new Date(2018, 1, 3),
          allDay: true
        }, {
          start: new Date(2018, 1, 4),
          allDay: true
        }, {
          start: new Date(2018, 1, 5),
          allDay: true
        }, {
          start: new Date(2018, 1, 6),
          allDay: true
        }, {
          start: new Date(2018, 1, 7),
          allDay: true
        }, {
          start: new Date(2018, 1, 8),
          allDay: true
        }, {
          start: new Date(2018, 1, 9),
          allDay: true
        }, {
          start: new Date(2018, 1, 10),
          allDay: true
        }, {
          start: new Date(2018, 1, 11),
          allDay: true
        }, {
          start: new Date(2018, 1, 12),
          allDay: true
        }, {
          start: new Date(2018, 1, 13),
          allDay: true
        }, {
          start: new Date(2018, 1, 14),
          allDay: true
        }, {
          start: new Date(2018, 1, 15),
          allDay: true
        }, {
          start: new Date(2018, 1, 16),
          allDay: true
        }, {
          start: new Date(2018, 1, 17),
          allDay: true
        }, {
          start: new Date(2018, 1, 18),
          allDay: true
        }, {
          start: new Date(2018, 1, 19),
          allDay: true
        }, {
          start: new Date(2018, 1, 20),
          allDay: true
        }]
      ]
    }, {
      source: "Cartagena",
      destination: "San Andrés",
      value: "COP 109900",
      eventSources: [
        [{
          start: new Date(2017, 11, 2),
          allDay: true
        }, {
          start: new Date(2018, 0, 30),
          allDay: true
        }, {
          start: new Date(2018, 1, 6),
          allDay: true
        }, {
          start: new Date(2018, 1, 13),
          allDay: true
        }, {
          start: new Date(2018, 1, 20),
          allDay: true
        }]
      ]
    }, {
      source: "San Andrés",
      destination: "Cartagena",
      value: "COP 109900",
      eventSources: [
        [{
          start: new Date(2017, 11, 2),
          allDay: true
        }, {
          start: new Date(2017, 11, 5),
          allDay: true
        }, {
          start: new Date(2017, 11, 9),
          allDay: true
        }, {
          start: new Date(2017, 11, 12),
          allDay: true
        }, {
          start: new Date(2017, 11, 14),
          allDay: true
        }, {
          start: new Date(2017, 11, 16),
          allDay: true
        }, {
          start: new Date(2017, 11, 21),
          allDay: true
        }, {
          start: new Date(2018, 0, 18),
          allDay: true
        }, {
          start: new Date(2018, 0, 23),
          allDay: true
        }, {
          start: new Date(2018, 0, 25),
          allDay: true
        }, {
          start: new Date(2018, 0, 27),
          allDay: true
        }, {
          start: new Date(2018, 0, 30),
          allDay: true
        }, {
          start: new Date(2018, 1, 1),
          allDay: true
        }, {
          start: new Date(2018, 1, 3),
          allDay: true
        }, {
          start: new Date(2018, 1, 6),
          allDay: true
        }, {
          start: new Date(2018, 1, 8),
          allDay: true
        }, {
          start: new Date(2018, 1, 10),
          allDay: true
        }, {
          start: new Date(2018, 1, 15),
          allDay: true
        }, {
          start: new Date(2018, 1, 17),
          allDay: true
        }, {
          start: new Date(2018, 1, 20),
          allDay: true
        }]
      ]
    }, {
      source: "Bogotá",
      destination: "Medellín",
      value: "COP 79900",
      eventSources: [
        [{
          start: new Date(2017, 11, 2),
          allDay: true
        }, {
          start: new Date(2017, 11, 3),
          allDay: true
        }, {
          start: new Date(2017, 11, 4),
          allDay: true
        }, {
          start: new Date(2017, 11, 5),
          allDay: true
        }, {
          start: new Date(2017, 11, 9),
          allDay: true
        }, {
          start: new Date(2017, 11, 10),
          allDay: true
        }, {
          start: new Date(2017, 11, 11),
          allDay: true
        }, {
          start: new Date(2017, 11, 24),
          allDay: true
        }, {
          start: new Date(2017, 11, 25),
          allDay: true
        }, {
          start: new Date(2017, 11, 26),
          allDay: true
        }, {
          start: new Date(2017, 11, 27),
          allDay: true
        }, {
          start: new Date(2017, 11, 28),
          allDay: true
        }, {
          start: new Date(2017, 11, 31),
          allDay: true
        }, {
          start: new Date(2018, 0, 1),
          allDay: true
        }, {
          start: new Date(2018, 0, 2),
          allDay: true
        }, {
          start: new Date(2018, 0, 3),
          allDay: true
        }, {
          start: new Date(2018, 0, 4),
          allDay: true
        }, {
          start: new Date(2018, 0, 5),
          allDay: true
        }, {
          start: new Date(2018, 0, 6),
          allDay: true
        }, {
          start: new Date(2018, 0, 7),
          allDay: true
        }, {
          start: new Date(2018, 0, 8),
          allDay: true
        }, {
          start: new Date(2018, 0, 9),
          allDay: true
        }, {
          start: new Date(2018, 0, 10),
          allDay: true
        }, {
          start: new Date(2018, 0, 11),
          allDay: true
        }, {
          start: new Date(2018, 0, 12),
          allDay: true
        }, {
          start: new Date(2018, 0, 13),
          allDay: true
        }, {
          start: new Date(2018, 0, 14),
          allDay: true
        }, {
          start: new Date(2018, 0, 15),
          allDay: true
        }, {
          start: new Date(2018, 0, 16),
          allDay: true
        }, {
          start: new Date(2018, 0, 17),
          allDay: true
        }, {
          start: new Date(2018, 0, 18),
          allDay: true
        }, {
          start: new Date(2018, 0, 19),
          allDay: true
        }, {
          start: new Date(2018, 0, 20),
          allDay: true
        }, {
          start: new Date(2018, 0, 21),
          allDay: true
        }, {
          start: new Date(2018, 0, 22),
          allDay: true
        }, {
          start: new Date(2018, 0, 23),
          allDay: true
        }, {
          start: new Date(2018, 0, 24),
          allDay: true
        }, {
          start: new Date(2018, 0, 25),
          allDay: true
        }, {
          start: new Date(2018, 0, 26),
          allDay: true
        }, {
          start: new Date(2018, 0, 27),
          allDay: true
        }, {
          start: new Date(2018, 0, 28),
          allDay: true
        }, {
          start: new Date(2018, 0, 29),
          allDay: true
        }, {
          start: new Date(2018, 0, 30),
          allDay: true
        }, {
          start: new Date(2018, 0, 31),
          allDay: true
        }, {
          start: new Date(2018, 1, 1),
          allDay: true
        }, {
          start: new Date(2018, 1, 2),
          allDay: true
        }, {
          start: new Date(2018, 1, 3),
          allDay: true
        }, {
          start: new Date(2018, 1, 4),
          allDay: true
        }, {
          start: new Date(2018, 1, 5),
          allDay: true
        }, {
          start: new Date(2018, 1, 6),
          allDay: true
        }, {
          start: new Date(2018, 1, 7),
          allDay: true
        }, {
          start: new Date(2018, 1, 8),
          allDay: true
        }, {
          start: new Date(2018, 1, 9),
          allDay: true
        }, {
          start: new Date(2018, 1, 10),
          allDay: true
        }, {
          start: new Date(2018, 1, 11),
          allDay: true
        }, {
          start: new Date(2018, 1, 12),
          allDay: true
        }, {
          start: new Date(2018, 1, 13),
          allDay: true
        }, {
          start: new Date(2018, 1, 14),
          allDay: true
        }, {
          start: new Date(2018, 1, 15),
          allDay: true
        }, {
          start: new Date(2018, 1, 16),
          allDay: true
        }, {
          start: new Date(2018, 1, 17),
          allDay: true
        }, {
          start: new Date(2018, 1, 18),
          allDay: true
        }, {
          start: new Date(2018, 1, 19),
          allDay: true
        }, {
          start: new Date(2018, 1, 20),
          allDay: true
        }]
      ]
    }, {
      source: "Bogotá",
      destination: "Bucaramanga",
      value: "COP 99900",
      eventSources: [
        [{
          start: new Date(2017, 11, 2),
          allDay: true
        }, {
          start: new Date(2017, 11, 4),
          allDay: true
        }, {
          start: new Date(2017, 11, 5),
          allDay: true
        }, {
          start: new Date(2017, 11, 6),
          allDay: true
        }, {
          start: new Date(2017, 11, 9),
          allDay: true
        }, {
          start: new Date(2017, 11, 13),
          allDay: true
        }, {
          start: new Date(2018, 0, 1),
          allDay: true
        }, {
          start: new Date(2018, 0, 2),
          allDay: true
        }, {
          start: new Date(2018, 0, 3),
          allDay: true
        }, {
          start: new Date(2018, 0, 4),
          allDay: true
        }, {
          start: new Date(2018, 0, 6),
          allDay: true
        }, {
          start: new Date(2018, 0, 7),
          allDay: true
        }, {
          start: new Date(2018, 0, 8),
          allDay: true
        }, {
          start: new Date(2018, 0, 9),
          allDay: true
        }, {
          start: new Date(2018, 0, 10),
          allDay: true
        }, {
          start: new Date(2018, 0, 11),
          allDay: true
        }, {
          start: new Date(2018, 0, 13),
          allDay: true
        }, {
          start: new Date(2018, 0, 14),
          allDay: true
        }, {
          start: new Date(2018, 0, 15),
          allDay: true
        }, {
          start: new Date(2018, 0, 16),
          allDay: true
        }, {
          start: new Date(2018, 0, 17),
          allDay: true
        }, {
          start: new Date(2018, 0, 18),
          allDay: true
        }, {
          start: new Date(2018, 0, 19),
          allDay: true
        }, {
          start: new Date(2018, 0, 20),
          allDay: true
        }, {
          start: new Date(2018, 0, 21),
          allDay: true
        }, {
          start: new Date(2018, 0, 22),
          allDay: true
        }, {
          start: new Date(2018, 0, 23),
          allDay: true
        }, {
          start: new Date(2018, 0, 24),
          allDay: true
        }, {
          start: new Date(2018, 0, 25),
          allDay: true
        }, {
          start: new Date(2018, 0, 26),
          allDay: true
        }, {
          start: new Date(2018, 0, 27),
          allDay: true
        }, {
          start: new Date(2018, 0, 28),
          allDay: true
        }, {
          start: new Date(2018, 0, 29),
          allDay: true
        }, {
          start: new Date(2018, 0, 30),
          allDay: true
        }, {
          start: new Date(2018, 0, 31),
          allDay: true
        }, {
          start: new Date(2018, 1, 1),
          allDay: true
        }, {
          start: new Date(2018, 1, 2),
          allDay: true
        }, {
          start: new Date(2018, 1, 3),
          allDay: true
        }, {
          start: new Date(2018, 1, 4),
          allDay: true
        }, {
          start: new Date(2018, 1, 5),
          allDay: true
        }, {
          start: new Date(2018, 1, 6),
          allDay: true
        }, {
          start: new Date(2018, 1, 7),
          allDay: true
        }, {
          start: new Date(2018, 1, 8),
          allDay: true
        }, {
          start: new Date(2018, 1, 10),
          allDay: true
        }, {
          start: new Date(2018, 1, 11),
          allDay: true
        }, {
          start: new Date(2018, 1, 12),
          allDay: true
        }, {
          start: new Date(2018, 1, 13),
          allDay: true
        }, {
          start: new Date(2018, 1, 14),
          allDay: true
        }, {
          start: new Date(2018, 1, 15),
          allDay: true
        }, {
          start: new Date(2018, 1, 17),
          allDay: true
        }, {
          start: new Date(2018, 1, 18),
          allDay: true
        }, {
          start: new Date(2018, 1, 19),
          allDay: true
        }, {
          start: new Date(2018, 1, 20),
          allDay: true
        }]
      ]
    }, {
      source: "Bogotá",
      destination: "Cali",
      value: "COP 99900",
      eventSources: [
        [{
          start: new Date(2017, 11, 2),
          allDay: true
        }, {
          start: new Date(2017, 11, 3),
          allDay: true
        }, {
          start: new Date(2017, 11, 4),
          allDay: true
        }, {
          start: new Date(2017, 11, 5),
          allDay: true
        }, {
          start: new Date(2017, 11, 6),
          allDay: true
        }, {
          start: new Date(2017, 11, 8),
          allDay: true
        }, {
          start: new Date(2017, 11, 9),
          allDay: true
        }, {
          start: new Date(2017, 11, 10),
          allDay: true
        }, {
          start: new Date(2017, 11, 11),
          allDay: true
        }, {
          start: new Date(2017, 11, 12),
          allDay: true
        }, {
          start: new Date(2017, 11, 13),
          allDay: true
        }, {
          start: new Date(2017, 11, 14),
          allDay: true
        }, {
          start: new Date(2018, 0, 1),
          allDay: true
        }, {
          start: new Date(2018, 0, 4),
          allDay: true
        }, {
          start: new Date(2018, 0, 6),
          allDay: true
        }, {
          start: new Date(2018, 0, 7),
          allDay: true
        }, {
          start: new Date(2018, 0, 8),
          allDay: true
        }, {
          start: new Date(2018, 0, 9),
          allDay: true
        }, {
          start: new Date(2018, 0, 10),
          allDay: true
        }, {
          start: new Date(2018, 0, 11),
          allDay: true
        }, {
          start: new Date(2018, 0, 12),
          allDay: true
        }, {
          start: new Date(2018, 0, 13),
          allDay: true
        }, {
          start: new Date(2018, 0, 14),
          allDay: true
        }, {
          start: new Date(2018, 0, 15),
          allDay: true
        }, {
          start: new Date(2018, 0, 16),
          allDay: true
        }, {
          start: new Date(2018, 0, 17),
          allDay: true
        }, {
          start: new Date(2018, 0, 18),
          allDay: true
        }, {
          start: new Date(2018, 0, 19),
          allDay: true
        }, {
          start: new Date(2018, 0, 20),
          allDay: true
        }, {
          start: new Date(2018, 0, 21),
          allDay: true
        }, {
          start: new Date(2018, 0, 22),
          allDay: true
        }, {
          start: new Date(2018, 0, 23),
          allDay: true
        }, {
          start: new Date(2018, 0, 24),
          allDay: true
        }, {
          start: new Date(2018, 0, 25),
          allDay: true
        }, {
          start: new Date(2018, 0, 26),
          allDay: true
        }, {
          start: new Date(2018, 0, 27),
          allDay: true
        }, {
          start: new Date(2018, 0, 28),
          allDay: true
        }, {
          start: new Date(2018, 0, 29),
          allDay: true
        }, {
          start: new Date(2018, 0, 30),
          allDay: true
        }, {
          start: new Date(2018, 0, 31),
          allDay: true
        }, {
          start: new Date(2018, 1, 1),
          allDay: true
        }, {
          start: new Date(2018, 1, 2),
          allDay: true
        }, {
          start: new Date(2018, 1, 3),
          allDay: true
        }, {
          start: new Date(2018, 1, 4),
          allDay: true
        }, {
          start: new Date(2018, 1, 5),
          allDay: true
        }, {
          start: new Date(2018, 1, 6),
          allDay: true
        }, {
          start: new Date(2018, 1, 7),
          allDay: true
        }, {
          start: new Date(2018, 1, 8),
          allDay: true
        }, {
          start: new Date(2018, 1, 9),
          allDay: true
        }, {
          start: new Date(2018, 1, 10),
          allDay: true
        }, {
          start: new Date(2018, 1, 11),
          allDay: true
        }, {
          start: new Date(2018, 1, 12),
          allDay: true
        }, {
          start: new Date(2018, 1, 13),
          allDay: true
        }, {
          start: new Date(2018, 1, 14),
          allDay: true
        }, {
          start: new Date(2018, 1, 15),
          allDay: true
        }, {
          start: new Date(2018, 1, 16),
          allDay: true
        }, {
          start: new Date(2018, 1, 17),
          allDay: true
        }, {
          start: new Date(2018, 1, 18),
          allDay: true
        }, {
          start: new Date(2018, 1, 19),
          allDay: true
        }, {
          start: new Date(2018, 1, 20),
          allDay: true
        }]
      ]
    }, {
      source: "Medellín",
      destination: "San Andrés",
      value: "COP 109900",
      eventSources: [
        [{
          start: new Date(2017, 11, 3),
          allDay: true
        }, {
          start: new Date(2017, 11, 4),
          allDay: true
        }, {
          start: new Date(2018, 0, 21),
          allDay: true
        }, {
          start: new Date(2018, 0, 28),
          allDay: true
        }, {
          start: new Date(2018, 0, 30),
          allDay: true
        }, {
          start: new Date(2018, 0, 31),
          allDay: true
        }, {
          start: new Date(2018, 1, 2),
          allDay: true
        }, {
          start: new Date(2018, 1, 4),
          allDay: true
        }, {
          start: new Date(2018, 1, 5),
          allDay: true
        }, {
          start: new Date(2018, 1, 6),
          allDay: true
        }, {
          start: new Date(2018, 1, 7),
          allDay: true
        }, {
          start: new Date(2018, 1, 9),
          allDay: true
        }, {
          start: new Date(2018, 1, 11),
          allDay: true
        }, {
          start: new Date(2018, 1, 12),
          allDay: true
        }, {
          start: new Date(2018, 1, 13),
          allDay: true
        }, {
          start: new Date(2018, 1, 14),
          allDay: true
        }, {
          start: new Date(2018, 1, 16),
          allDay: true
        }, {
          start: new Date(2018, 1, 18),
          allDay: true
        }, {
          start: new Date(2018, 1, 19),
          allDay: true
        }, {
          start: new Date(2018, 1, 20),
          allDay: true
        }]
      ]
    }, {
      source: "Florencia",
      destination: "Bogotá",
      value: "COP 229900",
      eventSources: [
        [{
          start: new Date(2017, 11, 4),
          allDay: true
        }, {
          start: new Date(2017, 11, 5),
          allDay: true
        }, {
          start: new Date(2017, 11, 6),
          allDay: true
        }, {
          start: new Date(2017, 11, 7),
          allDay: true
        }, {
          start: new Date(2017, 11, 8),
          allDay: true
        }, {
          start: new Date(2017, 11, 9),
          allDay: true
        }, {
          start: new Date(2017, 11, 12),
          allDay: true
        }, {
          start: new Date(2017, 11, 13),
          allDay: true
        }, {
          start: new Date(2017, 11, 14),
          allDay: true
        }, {
          start: new Date(2018, 0, 3),
          allDay: true
        }, {
          start: new Date(2018, 0, 4),
          allDay: true
        }, {
          start: new Date(2018, 0, 5),
          allDay: true
        }, {
          start: new Date(2018, 0, 6),
          allDay: true
        }, {
          start: new Date(2018, 0, 7),
          allDay: true
        }, {
          start: new Date(2018, 0, 9),
          allDay: true
        }, {
          start: new Date(2018, 0, 10),
          allDay: true
        }, {
          start: new Date(2018, 0, 11),
          allDay: true
        }, {
          start: new Date(2018, 0, 12),
          allDay: true
        }, {
          start: new Date(2018, 0, 13),
          allDay: true
        }, {
          start: new Date(2018, 0, 14),
          allDay: true
        }, {
          start: new Date(2018, 0, 15),
          allDay: true
        }, {
          start: new Date(2018, 0, 16),
          allDay: true
        }, {
          start: new Date(2018, 0, 17),
          allDay: true
        }, {
          start: new Date(2018, 0, 18),
          allDay: true
        }, {
          start: new Date(2018, 0, 19),
          allDay: true
        }, {
          start: new Date(2018, 0, 20),
          allDay: true
        }, {
          start: new Date(2018, 0, 21),
          allDay: true
        }, {
          start: new Date(2018, 0, 22),
          allDay: true
        }, {
          start: new Date(2018, 0, 23),
          allDay: true
        }, {
          start: new Date(2018, 0, 24),
          allDay: true
        }, {
          start: new Date(2018, 0, 25),
          allDay: true
        }, {
          start: new Date(2018, 0, 26),
          allDay: true
        }, {
          start: new Date(2018, 0, 27),
          allDay: true
        }, {
          start: new Date(2018, 0, 28),
          allDay: true
        }, {
          start: new Date(2018, 0, 29),
          allDay: true
        }, {
          start: new Date(2018, 0, 30),
          allDay: true
        }, {
          start: new Date(2018, 0, 31),
          allDay: true
        }]
      ]
    }, {
      source: "Cartagena",
      destination: "Medellín",
      value: "COP 89900",
      eventSources: [
        [{
          start: new Date(2017, 11, 5),
          allDay: true
        }, {
          start: new Date(2017, 11, 6),
          allDay: true
        }, {
          start: new Date(2017, 11, 8),
          allDay: true
        }, {
          start: new Date(2017, 11, 13),
          allDay: true
        }, {
          start: new Date(2017, 11, 14),
          allDay: true
        }, {
          start: new Date(2017, 11, 19),
          allDay: true
        }, {
          start: new Date(2017, 11, 20),
          allDay: true
        }, {
          start: new Date(2017, 11, 24),
          allDay: true
        }, {
          start: new Date(2017, 11, 31),
          allDay: true
        }, {
          start: new Date(2018, 0, 16),
          allDay: true
        }, {
          start: new Date(2018, 0, 17),
          allDay: true
        }, {
          start: new Date(2018, 0, 18),
          allDay: true
        }, {
          start: new Date(2018, 0, 19),
          allDay: true
        }, {
          start: new Date(2018, 0, 20),
          allDay: true
        }, {
          start: new Date(2018, 0, 23),
          allDay: true
        }, {
          start: new Date(2018, 0, 24),
          allDay: true
        }, {
          start: new Date(2018, 0, 25),
          allDay: true
        }, {
          start: new Date(2018, 0, 26),
          allDay: true
        }, {
          start: new Date(2018, 0, 27),
          allDay: true
        }, {
          start: new Date(2018, 0, 30),
          allDay: true
        }, {
          start: new Date(2018, 0, 31),
          allDay: true
        }, {
          start: new Date(2018, 1, 1),
          allDay: true
        }, {
          start: new Date(2018, 1, 2),
          allDay: true
        }, {
          start: new Date(2018, 1, 3),
          allDay: true
        }, {
          start: new Date(2018, 1, 5),
          allDay: true
        }, {
          start: new Date(2018, 1, 6),
          allDay: true
        }, {
          start: new Date(2018, 1, 7),
          allDay: true
        }, {
          start: new Date(2018, 1, 8),
          allDay: true
        }, {
          start: new Date(2018, 1, 9),
          allDay: true
        }, {
          start: new Date(2018, 1, 10),
          allDay: true
        }, {
          start: new Date(2018, 1, 13),
          allDay: true
        }, {
          start: new Date(2018, 1, 14),
          allDay: true
        }, {
          start: new Date(2018, 1, 15),
          allDay: true
        }, {
          start: new Date(2018, 1, 16),
          allDay: true
        }, {
          start: new Date(2018, 1, 17),
          allDay: true
        }, {
          start: new Date(2018, 1, 19),
          allDay: true
        }, {
          start: new Date(2018, 1, 20),
          allDay: true
        }]
      ]
    }, {
      source: "Medellín",
      destination: "Cartagena",
      value: "COP 89900",
      eventSources: [
        [{
          start: new Date(2017, 11, 6),
          allDay: true
        }, {
          start: new Date(2018, 0, 6),
          allDay: true
        }, {
          start: new Date(2018, 0, 10),
          allDay: true
        }, {
          start: new Date(2018, 0, 11),
          allDay: true
        }, {
          start: new Date(2018, 0, 13),
          allDay: true
        }, {
          start: new Date(2018, 0, 14),
          allDay: true
        }, {
          start: new Date(2018, 0, 15),
          allDay: true
        }, {
          start: new Date(2018, 0, 16),
          allDay: true
        }, {
          start: new Date(2018, 0, 17),
          allDay: true
        }, {
          start: new Date(2018, 0, 18),
          allDay: true
        }, {
          start: new Date(2018, 0, 20),
          allDay: true
        }, {
          start: new Date(2018, 0, 21),
          allDay: true
        }, {
          start: new Date(2018, 0, 22),
          allDay: true
        }, {
          start: new Date(2018, 0, 23),
          allDay: true
        }, {
          start: new Date(2018, 0, 27),
          allDay: true
        }, {
          start: new Date(2018, 0, 28),
          allDay: true
        }, {
          start: new Date(2018, 0, 29),
          allDay: true
        }, {
          start: new Date(2018, 0, 30),
          allDay: true
        }, {
          start: new Date(2018, 0, 31),
          allDay: true
        }, {
          start: new Date(2018, 1, 1),
          allDay: true
        }, {
          start: new Date(2018, 1, 3),
          allDay: true
        }, {
          start: new Date(2018, 1, 4),
          allDay: true
        }, {
          start: new Date(2018, 1, 5),
          allDay: true
        }, {
          start: new Date(2018, 1, 6),
          allDay: true
        }, {
          start: new Date(2018, 1, 7),
          allDay: true
        }, {
          start: new Date(2018, 1, 8),
          allDay: true
        }, {
          start: new Date(2018, 1, 11),
          allDay: true
        }, {
          start: new Date(2018, 1, 12),
          allDay: true
        }, {
          start: new Date(2018, 1, 13),
          allDay: true
        }, {
          start: new Date(2018, 1, 14),
          allDay: true
        }, {
          start: new Date(2018, 1, 15),
          allDay: true
        }, {
          start: new Date(2018, 1, 17),
          allDay: true
        }, {
          start: new Date(2018, 1, 18),
          allDay: true
        }, {
          start: new Date(2018, 1, 19),
          allDay: true
        }, {
          start: new Date(2018, 1, 20),
          allDay: true
        }]
      ]
    }, {
      source: "Bogotá",
      destination: "Montería",
      value: "COP 79900",
      eventSources: [
        [{
          start: new Date(2018, 0, 6),
          allDay: true
        }, {
          start: new Date(2018, 0, 7),
          allDay: true
        }, {
          start: new Date(2018, 0, 9),
          allDay: true
        }, {
          start: new Date(2018, 0, 10),
          allDay: true
        }, {
          start: new Date(2018, 0, 11),
          allDay: true
        }, {
          start: new Date(2018, 0, 12),
          allDay: true
        }, {
          start: new Date(2018, 0, 13),
          allDay: true
        }, {
          start: new Date(2018, 0, 14),
          allDay: true
        }, {
          start: new Date(2018, 0, 15),
          allDay: true
        }, {
          start: new Date(2018, 0, 16),
          allDay: true
        }, {
          start: new Date(2018, 0, 17),
          allDay: true
        }, {
          start: new Date(2018, 0, 18),
          allDay: true
        }, {
          start: new Date(2018, 0, 21),
          allDay: true
        }, {
          start: new Date(2018, 0, 22),
          allDay: true
        }, {
          start: new Date(2018, 0, 23),
          allDay: true
        }, {
          start: new Date(2018, 0, 24),
          allDay: true
        }, {
          start: new Date(2018, 0, 25),
          allDay: true
        }, {
          start: new Date(2018, 0, 26),
          allDay: true
        }, {
          start: new Date(2018, 0, 27),
          allDay: true
        }, {
          start: new Date(2018, 0, 29),
          allDay: true
        }, {
          start: new Date(2018, 0, 30),
          allDay: true
        }, {
          start: new Date(2018, 0, 31),
          allDay: true
        }, {
          start: new Date(2018, 1, 1),
          allDay: true
        }, {
          start: new Date(2018, 1, 2),
          allDay: true
        }, {
          start: new Date(2018, 1, 3),
          allDay: true
        }, {
          start: new Date(2018, 1, 4),
          allDay: true
        }, {
          start: new Date(2018, 1, 5),
          allDay: true
        }, {
          start: new Date(2018, 1, 6),
          allDay: true
        }, {
          start: new Date(2018, 1, 7),
          allDay: true
        }, {
          start: new Date(2018, 1, 8),
          allDay: true
        }, {
          start: new Date(2018, 1, 9),
          allDay: true
        }, {
          start: new Date(2018, 1, 10),
          allDay: true
        }, {
          start: new Date(2018, 1, 11),
          allDay: true
        }, {
          start: new Date(2018, 1, 12),
          allDay: true
        }, {
          start: new Date(2018, 1, 13),
          allDay: true
        }, {
          start: new Date(2018, 1, 14),
          allDay: true
        }, {
          start: new Date(2018, 1, 15),
          allDay: true
        }, {
          start: new Date(2018, 1, 16),
          allDay: true
        }, {
          start: new Date(2018, 1, 18),
          allDay: true
        }, {
          start: new Date(2018, 1, 19),
          allDay: true
        }, {
          start: new Date(2018, 1, 20),
          allDay: true
        }]
      ]
    }, {
      source: "Bogotá",
      destination: "Valledupar",
      value: "COP 79900",
      eventSources: [
        [{
          start: new Date(2018, 0, 6),
          allDay: true
        }, {
          start: new Date(2018, 0, 7),
          allDay: true
        }, {
          start: new Date(2018, 0, 8),
          allDay: true
        }, {
          start: new Date(2018, 0, 9),
          allDay: true
        }, {
          start: new Date(2018, 0, 13),
          allDay: true
        }, {
          start: new Date(2018, 0, 14),
          allDay: true
        }, {
          start: new Date(2018, 0, 16),
          allDay: true
        }, {
          start: new Date(2018, 0, 17),
          allDay: true
        }, {
          start: new Date(2018, 0, 18),
          allDay: true
        }, {
          start: new Date(2018, 0, 21),
          allDay: true
        }, {
          start: new Date(2018, 0, 22),
          allDay: true
        }, {
          start: new Date(2018, 0, 23),
          allDay: true
        }, {
          start: new Date(2018, 0, 24),
          allDay: true
        }, {
          start: new Date(2018, 0, 25),
          allDay: true
        }, {
          start: new Date(2018, 0, 27),
          allDay: true
        }, {
          start: new Date(2018, 0, 28),
          allDay: true
        }, {
          start: new Date(2018, 0, 30),
          allDay: true
        }, {
          start: new Date(2018, 0, 31),
          allDay: true
        }, {
          start: new Date(2018, 1, 1),
          allDay: true
        }, {
          start: new Date(2018, 1, 3),
          allDay: true
        }, {
          start: new Date(2018, 1, 4),
          allDay: true
        }, {
          start: new Date(2018, 1, 5),
          allDay: true
        }, {
          start: new Date(2018, 1, 6),
          allDay: true
        }, {
          start: new Date(2018, 1, 7),
          allDay: true
        }, {
          start: new Date(2018, 1, 10),
          allDay: true
        }, {
          start: new Date(2018, 1, 11),
          allDay: true
        }, {
          start: new Date(2018, 1, 12),
          allDay: true
        }, {
          start: new Date(2018, 1, 13),
          allDay: true
        }, {
          start: new Date(2018, 1, 14),
          allDay: true
        }, {
          start: new Date(2018, 1, 17),
          allDay: true
        }, {
          start: new Date(2018, 1, 18),
          allDay: true
        }, {
          start: new Date(2018, 1, 20),
          allDay: true
        }]
      ]
    }, {
      source: "Valledupar",
      destination: "Bogotá",
      value: "COP 79900",
      eventSources: [
        [{
          start: new Date(2018, 0, 27),
          allDay: true
        }, {
          start: new Date(2018, 0, 29),
          allDay: true
        }, {
          start: new Date(2018, 1, 3),
          allDay: true
        }, {
          start: new Date(2018, 1, 5),
          allDay: true
        }, {
          start: new Date(2018, 1, 10),
          allDay: true
        }, {
          start: new Date(2018, 1, 12),
          allDay: true
        }, {
          start: new Date(2018, 1, 17),
          allDay: true
        }, {
          start: new Date(2018, 1, 19),
          allDay: true
        }]
      ]
    }];

    function main() {
      $scope.sourceCities = _.uniq(_.pluck($scope.events, 'source'));
      $scope.destinationCities = [];
    };

    main();

    $scope.showdestinations = function functionName() {
      $scope.hideCalendar()

      $scope.destinationCities = _.pluck(_.filter($scope.events, function (obj) {
        return obj.source === $scope.selectedSource;
      }), 'destination');

    }

    $scope.hideCalendar = function () {
      $scope.showCalendar = false;
    }

    $scope.searchPromos = function () {
      $scope.departureEventSource = [];
      $scope.arriveEventSource = [];
      $scope.sourceIndex = null;
      $scope.destinationIndex = null;
      $scope.showCalendar1 = false;
      $scope.showCalendar2 = false;
      for (var i = 0; i < $scope.events.length; i++) {
        if ($scope.events[i].source === $scope.selectedSource && $scope.events[i].destination === $scope.selectedDestination) {
          $scope.departureEventSource = $scope.events[i].eventSources;
          $scope.sourceIndex = i;
          $scope.showCalendar1 = true;
          for (var j = 0; j < $scope.events.length; j++) {
            if ($scope.events[j].destination === $scope.selectedSource && $scope.events[j].source === $scope.selectedDestination) {
              $scope.arriveEventSource = $scope.events[j].eventSources;
              $scope.destinationIndex = j;
              $scope.showFrom = true;
              $scope.showCalendar2 = true;
              break;
            }
          }
        }
        $scope.showCalendar = true;
      }
    }

    $scope.uiConfig = {
      calendar: {
        editable: false,
        header: {
          left: 'title',
          center: '',
          right: 'prev,next',
        },
      },
    };

    $scope.uiConfig.calendar.dayNames = ['Domingo', 'Lunes', 'Mertes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', ];
    $scope.uiConfig.calendar.dayNamesShort = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', ];
    $scope.uiConfig.calendar.monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre', ];
  });
