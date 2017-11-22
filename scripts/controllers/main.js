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
    $scope.sourceCities = ['Bogotá', 'Cali', 'Cartagena', 'Medellín', 'Santiago de Chile', ];
    $scope.destinationCities = ['Aruba', 'Barcelona', 'Boston', 'Cancún', 'Cartagena', 'Ciudad de Guatemala', 'Ciudad de México', 'Cusco', 'Florencia', 'Lima', 'Los Ángeles', 'Madrid', 'Medellín', 'Miami', 'Montería', 'Pereira', 'Punta Cana', 'Quito', 'San José de Costa Rica', 'San Juan de Puerto Rico', 'Santa Marta', 'Valledupar', ];
    $scope.events = [{
      source: 'Bogotá',
      destination: 'Santa Marta',
      value: 'COP 119900',
      eventSources: [
        [{
          start: new Date(2017, 10, 21),
          allDay: true,
        }, {
          start: new Date(2017, 10, 22),
          allDay: true,
        }, {
          start: new Date(2017, 10, 23),
          allDay: true,
        }, {
          start: new Date(2017, 10, 25),
          allDay: true,
        }, {
          start: new Date(2017, 10, 26),
          allDay: true,
        }, {
          start: new Date(2017, 10, 27),
          allDay: true,
        }, {
          start: new Date(2017, 10, 28),
          allDay: true,
        }, {
          start: new Date(2017, 10, 29),
          allDay: true,
        }, {
          start: new Date(2017, 11, 2),
          allDay: true,
        }, {
          start: new Date(2017, 11, 3),
          allDay: true,
        }, {
          start: new Date(2017, 11, 4),
          allDay: true,
        }, {
          start: new Date(2017, 11, 5),
          allDay: true,
        }, {
          start: new Date(2017, 11, 6),
          allDay: true,
        }, {
          start: new Date(2017, 11, 9),
          allDay: true,
        }, {
          start: new Date(2017, 11, 10),
          allDay: true,
        }, {
          start: new Date(2017, 11, 11),
          allDay: true,
        }, {
          start: new Date(2017, 11, 12),
          allDay: true,
        }, {
          start: new Date(2017, 11, 13),
          allDay: true,
        }, {
          start: new Date(2018, 0, 7),
          allDay: true,
        }, {
          start: new Date(2018, 0, 8),
          allDay: true,
        }, {
          start: new Date(2018, 0, 9),
          allDay: true,
        }, {
          start: new Date(2018, 0, 10),
          allDay: true,
        }, {
          start: new Date(2018, 0, 11),
          allDay: true,
        }, {
          start: new Date(2018, 0, 12),
          allDay: true,
        }, {
          start: new Date(2018, 0, 13),
          allDay: true,
        }, {
          start: new Date(2018, 0, 14),
          allDay: true,
        }, {
          start: new Date(2018, 0, 15),
          allDay: true,
        }, {
          start: new Date(2018, 0, 16),
          allDay: true,
        }, {
          start: new Date(2018, 0, 17),
          allDay: true,
        }, {
          start: new Date(2018, 0, 18),
          allDay: true,
        }, {
          start: new Date(2018, 0, 19),
          allDay: true,
        }, {
          start: new Date(2018, 0, 20),
          allDay: true,
        }, {
          start: new Date(2018, 0, 21),
          allDay: true,
        }, {
          start: new Date(2018, 0, 22),
          allDay: true,
        }, {
          start: new Date(2018, 0, 23),
          allDay: true,
        }, {
          start: new Date(2018, 0, 24),
          allDay: true,
        }, {
          start: new Date(2018, 0, 25),
          allDay: true,
        }, {
          start: new Date(2018, 0, 26),
          allDay: true,
        }, {
          start: new Date(2018, 0, 27),
          allDay: true,
        }, {
          start: new Date(2018, 0, 28),
          allDay: true,
        }, {
          start: new Date(2018, 0, 29),
          allDay: true,
        }, {
          start: new Date(2018, 0, 30),
          allDay: true,
        }, {
          start: new Date(2018, 0, 31),
          allDay: true,
        }, {
          start: new Date(2018, 1, 1),
          allDay: true,
        }, {
          start: new Date(2018, 1, 2),
          allDay: true,
        }, {
          start: new Date(2018, 1, 3),
          allDay: true,
        }, {
          start: new Date(2018, 1, 4),
          allDay: true,
        }, {
          start: new Date(2018, 1, 5),
          allDay: true,
        }, {
          start: new Date(2018, 1, 6),
          allDay: true,
        }, {
          start: new Date(2018, 1, 7),
          allDay: true,
        }, {
          start: new Date(2018, 1, 10),
          allDay: true,
        }, {
          start: new Date(2018, 1, 11),
          allDay: true,
        }, {
          start: new Date(2018, 1, 12),
          allDay: true,
        }, {
          start: new Date(2018, 1, 13),
          allDay: true,
        }, {
          start: new Date(2018, 1, 14),
          allDay: true,
        }, {
          start: new Date(2018, 1, 17),
          allDay: true,
        }, {
          start: new Date(2018, 1, 18),
          allDay: true,
        }, {
          start: new Date(2018, 1, 19),
          allDay: true,
        }, ],
      ],
    }, {
      source: 'Bogotá',
      destination: 'Pereira',
      value: 'COP 79900',
      eventSources: [
        [{
          start: new Date(2017, 10, 25),
          allDay: true,
        }, {
          start: new Date(2017, 10, 26),
          allDay: true,
        }, {
          start: new Date(2017, 10, 27),
          allDay: true,
        }, {
          start: new Date(2017, 10, 28),
          allDay: true,
        }, {
          start: new Date(2017, 10, 29),
          allDay: true,
        }, {
          start: new Date(2017, 10, 30),
          allDay: true,
        }, {
          start: new Date(2017, 11, 2),
          allDay: true,
        }, {
          start: new Date(2017, 11, 3),
          allDay: true,
        }, {
          start: new Date(2017, 11, 4),
          allDay: true,
        }, {
          start: new Date(2017, 11, 5),
          allDay: true,
        }, {
          start: new Date(2017, 11, 10),
          allDay: true,
        }, {
          start: new Date(2017, 11, 11),
          allDay: true,
        }, {
          start: new Date(2017, 11, 12),
          allDay: true,
        }, {
          start: new Date(2017, 11, 13),
          allDay: true,
        }, {
          start: new Date(2018, 0, 9),
          allDay: true,
        }, {
          start: new Date(2018, 0, 10),
          allDay: true,
        }, {
          start: new Date(2018, 0, 11),
          allDay: true,
        }, {
          start: new Date(2018, 0, 12),
          allDay: true,
        }, {
          start: new Date(2018, 0, 13),
          allDay: true,
        }, {
          start: new Date(2018, 0, 14),
          allDay: true,
        }, {
          start: new Date(2018, 0, 15),
          allDay: true,
        }, {
          start: new Date(2018, 0, 16),
          allDay: true,
        }, {
          start: new Date(2018, 0, 17),
          allDay: true,
        }, {
          start: new Date(2018, 0, 18),
          allDay: true,
        }, {
          start: new Date(2018, 0, 19),
          allDay: true,
        }, {
          start: new Date(2018, 0, 20),
          allDay: true,
        }, {
          start: new Date(2018, 0, 21),
          allDay: true,
        }, {
          start: new Date(2018, 0, 22),
          allDay: true,
        }, {
          start: new Date(2018, 0, 23),
          allDay: true,
        }, {
          start: new Date(2018, 0, 24),
          allDay: true,
        }, {
          start: new Date(2018, 0, 25),
          allDay: true,
        }, {
          start: new Date(2018, 0, 26),
          allDay: true,
        }, {
          start: new Date(2018, 0, 27),
          allDay: true,
        }, {
          start: new Date(2018, 0, 28),
          allDay: true,
        }, {
          start: new Date(2018, 0, 29),
          allDay: true,
        }, {
          start: new Date(2018, 0, 30),
          allDay: true,
        }, {
          start: new Date(2018, 0, 31),
          allDay: true,
        }, {
          start: new Date(2018, 1, 1),
          allDay: true,
        }, {
          start: new Date(2018, 1, 2),
          allDay: true,
        }, {
          start: new Date(2018, 1, 3),
          allDay: true,
        }, {
          start: new Date(2018, 1, 4),
          allDay: true,
        }, {
          start: new Date(2018, 1, 5),
          allDay: true,
        }, {
          start: new Date(2018, 1, 6),
          allDay: true,
        }, {
          start: new Date(2018, 1, 7),
          allDay: true,
        }, {
          start: new Date(2018, 1, 8),
          allDay: true,
        }, {
          start: new Date(2018, 1, 9),
          allDay: true,
        }, {
          start: new Date(2018, 1, 10),
          allDay: true,
        }, {
          start: new Date(2018, 1, 11),
          allDay: true,
        }, {
          start: new Date(2018, 1, 12),
          allDay: true,
        }, {
          start: new Date(2018, 1, 13),
          allDay: true,
        }, {
          start: new Date(2018, 1, 14),
          allDay: true,
        }, {
          start: new Date(2018, 1, 15),
          allDay: true,
        }, {
          start: new Date(2018, 1, 16),
          allDay: true,
        }, {
          start: new Date(2018, 1, 17),
          allDay: true,
        }, {
          start: new Date(2018, 1, 18),
          allDay: true,
        }, {
          start: new Date(2018, 1, 19),
          allDay: true,
        }, ],
      ],
    }, {
      source: 'Bogotá',
      destination: 'Aruba',
      value: 'USD 269',
      eventSources: [
        [{
          start: new Date(2017, 10, 26),
          allDay: true,
        }, {
          start: new Date(2017, 10, 29),
          allDay: true,
        }, {
          start: new Date(2017, 11, 1),
          allDay: true,
        }, {
          start: new Date(2017, 11, 2),
          allDay: true,
        }, {
          start: new Date(2017, 11, 3),
          allDay: true,
        }, {
          start: new Date(2017, 11, 4),
          allDay: true,
        }, {
          start: new Date(2017, 11, 5),
          allDay: true,
        }, ],
      ],
    }, {
      source: 'Bogotá',
      destination: 'Ciudad de Guatemala',
      value: 'USD 419',
      eventSources: [
        [{
          start: new Date(2017, 11, 1),
          allDay: true,
        }, {
          start: new Date(2017, 11, 2),
          allDay: true,
        }, {
          start: new Date(2017, 11, 3),
          allDay: true,
        }, {
          start: new Date(2017, 11, 4),
          allDay: true,
        }, {
          start: new Date(2017, 11, 6),
          allDay: true,
        }, {
          start: new Date(2017, 11, 9),
          allDay: true,
        }, {
          start: new Date(2017, 11, 14),
          allDay: true,
        }, {
          start: new Date(2018, 0, 16),
          allDay: true,
        }, {
          start: new Date(2018, 0, 17),
          allDay: true,
        }, {
          start: new Date(2018, 0, 18),
          allDay: true,
        }, {
          start: new Date(2018, 0, 19),
          allDay: true,
        }, {
          start: new Date(2018, 0, 20),
          allDay: true,
        }, {
          start: new Date(2018, 0, 21),
          allDay: true,
        }, {
          start: new Date(2018, 0, 22),
          allDay: true,
        }, {
          start: new Date(2018, 0, 23),
          allDay: true,
        }, {
          start: new Date(2018, 0, 24),
          allDay: true,
        }, {
          start: new Date(2018, 0, 25),
          allDay: true,
        }, {
          start: new Date(2018, 0, 26),
          allDay: true,
        }, {
          start: new Date(2018, 0, 27),
          allDay: true,
        }, {
          start: new Date(2018, 0, 28),
          allDay: true,
        }, {
          start: new Date(2018, 0, 29),
          allDay: true,
        }, {
          start: new Date(2018, 0, 30),
          allDay: true,
        }, {
          start: new Date(2018, 0, 31),
          allDay: true,
        }, {
          start: new Date(2018, 1, 1),
          allDay: true,
        }, {
          start: new Date(2018, 1, 2),
          allDay: true,
        }, {
          start: new Date(2018, 1, 3),
          allDay: true,
        }, {
          start: new Date(2018, 1, 4),
          allDay: true,
        }, {
          start: new Date(2018, 1, 5),
          allDay: true,
        }, {
          start: new Date(2018, 1, 6),
          allDay: true,
        }, {
          start: new Date(2018, 1, 7),
          allDay: true,
        }, {
          start: new Date(2018, 1, 8),
          allDay: true,
        }, {
          start: new Date(2018, 1, 9),
          allDay: true,
        }, {
          start: new Date(2018, 1, 10),
          allDay: true,
        }, {
          start: new Date(2018, 1, 11),
          allDay: true,
        }, {
          start: new Date(2018, 1, 13),
          allDay: true,
        }, {
          start: new Date(2018, 1, 14),
          allDay: true,
        }, {
          start: new Date(2018, 1, 15),
          allDay: true,
        }, {
          start: new Date(2018, 1, 16),
          allDay: true,
        }, {
          start: new Date(2018, 1, 17),
          allDay: true,
        }, {
          start: new Date(2018, 1, 18),
          allDay: true,
        }, {
          start: new Date(2018, 1, 19),
          allDay: true,
        }, {
          start: new Date(2018, 1, 20),
          allDay: true,
        }, {
          start: new Date(2018, 1, 21),
          allDay: true,
        }, {
          start: new Date(2018, 1, 22),
          allDay: true,
        }, {
          start: new Date(2018, 1, 23),
          allDay: true,
        }, {
          start: new Date(2018, 1, 24),
          allDay: true,
        }, {
          start: new Date(2018, 1, 25),
          allDay: true,
        }, {
          start: new Date(2018, 1, 26),
          allDay: true,
        }, {
          start: new Date(2018, 1, 27),
          allDay: true,
        }, {
          start: new Date(2018, 1, 28),
          allDay: true,
        }, {
          start: new Date(2018, 2, 1),
          allDay: true,
        }, {
          start: new Date(2018, 2, 2),
          allDay: true,
        }, {
          start: new Date(2018, 2, 3),
          allDay: true,
        }, {
          start: new Date(2018, 2, 4),
          allDay: true,
        }, {
          start: new Date(2018, 2, 5),
          allDay: true,
        }, {
          start: new Date(2018, 2, 6),
          allDay: true,
        }, {
          start: new Date(2018, 2, 7),
          allDay: true,
        }, {
          start: new Date(2018, 2, 8),
          allDay: true,
        }, {
          start: new Date(2018, 2, 9),
          allDay: true,
        }, {
          start: new Date(2018, 2, 10),
          allDay: true,
        }, {
          start: new Date(2018, 2, 11),
          allDay: true,
        }, {
          start: new Date(2018, 2, 12),
          allDay: true,
        }, ],
      ],
    }, {
      source: 'Bogotá',
      destination: 'Medellín',
      value: 'COP 79900',
      eventSources: [
        [{
          start: new Date(2017, 11, 1),
          allDay: true,
        }, {
          start: new Date(2017, 11, 2),
          allDay: true,
        }, {
          start: new Date(2017, 11, 3),
          allDay: true,
        }, {
          start: new Date(2017, 11, 4),
          allDay: true,
        }, {
          start: new Date(2017, 11, 5),
          allDay: true,
        }, {
          start: new Date(2017, 11, 6),
          allDay: true,
        }, {
          start: new Date(2017, 11, 9),
          allDay: true,
        }, {
          start: new Date(2017, 11, 11),
          allDay: true,
        }, {
          start: new Date(2017, 11, 24),
          allDay: true,
        }, {
          start: new Date(2017, 11, 25),
          allDay: true,
        }, {
          start: new Date(2017, 11, 26),
          allDay: true,
        }, {
          start: new Date(2017, 11, 27),
          allDay: true,
        }, {
          start: new Date(2017, 11, 28),
          allDay: true,
        }, {
          start: new Date(2017, 11, 29),
          allDay: true,
        }, {
          start: new Date(2017, 11, 31),
          allDay: true,
        }, {
          start: new Date(2018, 0, 1),
          allDay: true,
        }, {
          start: new Date(2018, 0, 2),
          allDay: true,
        }, {
          start: new Date(2018, 0, 3),
          allDay: true,
        }, {
          start: new Date(2018, 0, 4),
          allDay: true,
        }, {
          start: new Date(2018, 0, 5),
          allDay: true,
        }, {
          start: new Date(2018, 0, 6),
          allDay: true,
        }, {
          start: new Date(2018, 0, 7),
          allDay: true,
        }, {
          start: new Date(2018, 0, 8),
          allDay: true,
        }, {
          start: new Date(2018, 0, 9),
          allDay: true,
        }, {
          start: new Date(2018, 0, 10),
          allDay: true,
        }, {
          start: new Date(2018, 0, 11),
          allDay: true,
        }, {
          start: new Date(2018, 0, 12),
          allDay: true,
        }, {
          start: new Date(2018, 0, 13),
          allDay: true,
        }, {
          start: new Date(2018, 0, 14),
          allDay: true,
        }, {
          start: new Date(2018, 0, 15),
          allDay: true,
        }, {
          start: new Date(2018, 1, 1),
          allDay: true,
        }, {
          start: new Date(2018, 1, 2),
          allDay: true,
        }, {
          start: new Date(2018, 1, 3),
          allDay: true,
        }, {
          start: new Date(2018, 1, 4),
          allDay: true,
        }, {
          start: new Date(2018, 1, 5),
          allDay: true,
        }, {
          start: new Date(2018, 1, 6),
          allDay: true,
        }, {
          start: new Date(2018, 1, 7),
          allDay: true,
        }, {
          start: new Date(2018, 1, 8),
          allDay: true,
        }, {
          start: new Date(2018, 1, 9),
          allDay: true,
        }, {
          start: new Date(2018, 1, 10),
          allDay: true,
        }, {
          start: new Date(2018, 1, 11),
          allDay: true,
        }, {
          start: new Date(2018, 1, 12),
          allDay: true,
        }, {
          start: new Date(2018, 1, 13),
          allDay: true,
        }, {
          start: new Date(2018, 1, 14),
          allDay: true,
        }, {
          start: new Date(2018, 1, 15),
          allDay: true,
        }, {
          start: new Date(2018, 1, 16),
          allDay: true,
        }, {
          start: new Date(2018, 1, 17),
          allDay: true,
        }, {
          start: new Date(2018, 1, 18),
          allDay: true,
        }, {
          start: new Date(2018, 1, 19),
          allDay: true,
        }, ],
      ],
    }, {
      source: 'Bogotá',
      destination: 'San José de Costa Rica',
      value: 'USD 339',
      eventSources: [
        [{
          start: new Date(2017, 11, 1),
          allDay: true,
        }, {
          start: new Date(2017, 11, 2),
          allDay: true,
        }, {
          start: new Date(2017, 11, 3),
          allDay: true,
        }, {
          start: new Date(2017, 11, 4),
          allDay: true,
        }, {
          start: new Date(2018, 0, 17),
          allDay: true,
        }, {
          start: new Date(2018, 0, 18),
          allDay: true,
        }, {
          start: new Date(2018, 0, 19),
          allDay: true,
        }, {
          start: new Date(2018, 0, 20),
          allDay: true,
        }, {
          start: new Date(2018, 0, 22),
          allDay: true,
        }, {
          start: new Date(2018, 0, 23),
          allDay: true,
        }, {
          start: new Date(2018, 0, 24),
          allDay: true,
        }, {
          start: new Date(2018, 0, 25),
          allDay: true,
        }, {
          start: new Date(2018, 0, 26),
          allDay: true,
        }, {
          start: new Date(2018, 0, 27),
          allDay: true,
        }, {
          start: new Date(2018, 0, 28),
          allDay: true,
        }, {
          start: new Date(2018, 0, 29),
          allDay: true,
        }, {
          start: new Date(2018, 0, 30),
          allDay: true,
        }, {
          start: new Date(2018, 0, 31),
          allDay: true,
        }, {
          start: new Date(2018, 1, 1),
          allDay: true,
        }, {
          start: new Date(2018, 1, 2),
          allDay: true,
        }, {
          start: new Date(2018, 1, 3),
          allDay: true,
        }, {
          start: new Date(2018, 1, 4),
          allDay: true,
        }, {
          start: new Date(2018, 1, 5),
          allDay: true,
        }, {
          start: new Date(2018, 1, 6),
          allDay: true,
        }, {
          start: new Date(2018, 1, 7),
          allDay: true,
        }, {
          start: new Date(2018, 1, 8),
          allDay: true,
        }, {
          start: new Date(2018, 1, 9),
          allDay: true,
        }, {
          start: new Date(2018, 1, 10),
          allDay: true,
        }, {
          start: new Date(2018, 1, 11),
          allDay: true,
        }, {
          start: new Date(2018, 1, 13),
          allDay: true,
        }, {
          start: new Date(2018, 1, 14),
          allDay: true,
        }, {
          start: new Date(2018, 1, 15),
          allDay: true,
        }, {
          start: new Date(2018, 1, 16),
          allDay: true,
        }, {
          start: new Date(2018, 1, 17),
          allDay: true,
        }, {
          start: new Date(2018, 1, 18),
          allDay: true,
        }, {
          start: new Date(2018, 1, 19),
          allDay: true,
        }, ],
      ],
    }, {
      source: 'Bogotá',
      destination: 'Florencia',
      value: 'COP 229900',
      eventSources: [
        [{
          start: new Date(2017, 11, 2),
          allDay: true,
        }, {
          start: new Date(2017, 11, 13),
          allDay: true,
        }, {
          start: new Date(2018, 0, 6),
          allDay: true,
        }, {
          start: new Date(2018, 0, 7),
          allDay: true,
        }, {
          start: new Date(2018, 0, 13),
          allDay: true,
        }, {
          start: new Date(2018, 0, 17),
          allDay: true,
        }, {
          start: new Date(2018, 0, 18),
          allDay: true,
        }, {
          start: new Date(2018, 0, 19),
          allDay: true,
        }, {
          start: new Date(2018, 0, 20),
          allDay: true,
        }, {
          start: new Date(2018, 0, 24),
          allDay: true,
        }, {
          start: new Date(2018, 0, 25),
          allDay: true,
        }, {
          start: new Date(2018, 0, 26),
          allDay: true,
        }, {
          start: new Date(2018, 0, 27),
          allDay: true,
        }, {
          start: new Date(2018, 0, 31),
          allDay: true,
        }, ],
      ],
    }, {
      source: 'Bogotá',
      destination: 'Montería',
      value: 'COP 79900',
      eventSources: [
        [{
          start: new Date(2017, 11, 2),
          allDay: true,
        }, {
          start: new Date(2017, 11, 4),
          allDay: true,
        }, {
          start: new Date(2017, 11, 5),
          allDay: true,
        }, {
          start: new Date(2017, 11, 6),
          allDay: true,
        }, {
          start: new Date(2018, 1, 1),
          allDay: true,
        }, {
          start: new Date(2018, 1, 2),
          allDay: true,
        }, {
          start: new Date(2018, 1, 3),
          allDay: true,
        }, {
          start: new Date(2018, 1, 4),
          allDay: true,
        }, {
          start: new Date(2018, 1, 5),
          allDay: true,
        }, {
          start: new Date(2018, 1, 6),
          allDay: true,
        }, {
          start: new Date(2018, 1, 7),
          allDay: true,
        }, {
          start: new Date(2018, 1, 8),
          allDay: true,
        }, {
          start: new Date(2018, 1, 9),
          allDay: true,
        }, {
          start: new Date(2018, 1, 10),
          allDay: true,
        }, {
          start: new Date(2018, 1, 11),
          allDay: true,
        }, {
          start: new Date(2018, 1, 12),
          allDay: true,
        }, {
          start: new Date(2018, 1, 13),
          allDay: true,
        }, {
          start: new Date(2018, 1, 14),
          allDay: true,
        }, {
          start: new Date(2018, 1, 15),
          allDay: true,
        }, {
          start: new Date(2018, 1, 16),
          allDay: true,
        }, {
          start: new Date(2018, 1, 17),
          allDay: true,
        }, {
          start: new Date(2018, 1, 18),
          allDay: true,
        }, {
          start: new Date(2018, 1, 19),
          allDay: true,
        }, ],
      ],
    }, {
      source: 'Bogotá',
      destination: 'San Juan de Puerto Rico',
      value: 'USD 329',
      eventSources: [
        [{
          start: new Date(2017, 11, 2),
          allDay: true,
        }, {
          start: new Date(2017, 11, 3),
          allDay: true,
        }, {
          start: new Date(2017, 11, 4),
          allDay: true,
        }, {
          start: new Date(2017, 11, 5),
          allDay: true,
        }, {
          start: new Date(2017, 11, 7),
          allDay: true,
        }, {
          start: new Date(2017, 11, 24),
          allDay: true,
        }, {
          start: new Date(2018, 0, 20),
          allDay: true,
        }, {
          start: new Date(2018, 0, 21),
          allDay: true,
        }, {
          start: new Date(2018, 0, 22),
          allDay: true,
        }, {
          start: new Date(2018, 0, 23),
          allDay: true,
        }, {
          start: new Date(2018, 0, 24),
          allDay: true,
        }, {
          start: new Date(2018, 0, 25),
          allDay: true,
        }, {
          start: new Date(2018, 0, 26),
          allDay: true,
        }, {
          start: new Date(2018, 0, 27),
          allDay: true,
        }, {
          start: new Date(2018, 0, 28),
          allDay: true,
        }, {
          start: new Date(2018, 0, 29),
          allDay: true,
        }, {
          start: new Date(2018, 0, 30),
          allDay: true,
        }, {
          start: new Date(2018, 0, 31),
          allDay: true,
        }, {
          start: new Date(2018, 1, 1),
          allDay: true,
        }, {
          start: new Date(2018, 1, 2),
          allDay: true,
        }, {
          start: new Date(2018, 1, 3),
          allDay: true,
        }, {
          start: new Date(2018, 1, 4),
          allDay: true,
        }, {
          start: new Date(2018, 1, 5),
          allDay: true,
        }, {
          start: new Date(2018, 1, 6),
          allDay: true,
        }, {
          start: new Date(2018, 1, 7),
          allDay: true,
        }, {
          start: new Date(2018, 1, 8),
          allDay: true,
        }, {
          start: new Date(2018, 1, 9),
          allDay: true,
        }, {
          start: new Date(2018, 1, 10),
          allDay: true,
        }, {
          start: new Date(2018, 1, 11),
          allDay: true,
        }, {
          start: new Date(2018, 1, 12),
          allDay: true,
        }, {
          start: new Date(2018, 1, 13),
          allDay: true,
        }, {
          start: new Date(2018, 1, 14),
          allDay: true,
        }, {
          start: new Date(2018, 1, 15),
          allDay: true,
        }, {
          start: new Date(2018, 1, 16),
          allDay: true,
        }, {
          start: new Date(2018, 1, 17),
          allDay: true,
        }, {
          start: new Date(2018, 1, 18),
          allDay: true,
        }, {
          start: new Date(2018, 1, 19),
          allDay: true,
        }, ],
      ],
    }, {
      source: 'Medellín',
      destination: 'Cartagena',
      value: 'COP 89900',
      eventSources: [
        [{
          start: new Date(2017, 11, 2),
          allDay: true,
        }, {
          start: new Date(2017, 11, 3),
          allDay: true,
        }, {
          start: new Date(2017, 11, 4),
          allDay: true,
        }, {
          start: new Date(2017, 11, 5),
          allDay: true,
        }, {
          start: new Date(2017, 11, 6),
          allDay: true,
        }, {
          start: new Date(2018, 1, 1),
          allDay: true,
        }, {
          start: new Date(2018, 1, 3),
          allDay: true,
        }, {
          start: new Date(2018, 1, 4),
          allDay: true,
        }, {
          start: new Date(2018, 1, 5),
          allDay: true,
        }, {
          start: new Date(2018, 1, 6),
          allDay: true,
        }, {
          start: new Date(2018, 1, 7),
          allDay: true,
        }, {
          start: new Date(2018, 1, 8),
          allDay: true,
        }, {
          start: new Date(2018, 1, 11),
          allDay: true,
        }, {
          start: new Date(2018, 1, 12),
          allDay: true,
        }, {
          start: new Date(2018, 1, 13),
          allDay: true,
        }, {
          start: new Date(2018, 1, 14),
          allDay: true,
        }, {
          start: new Date(2018, 1, 15),
          allDay: true,
        }, {
          start: new Date(2018, 1, 17),
          allDay: true,
        }, {
          start: new Date(2018, 1, 18),
          allDay: true,
        }, {
          start: new Date(2018, 1, 19),
          allDay: true,
        }, ],
      ],
    }, {
      source: 'Bogotá',
      destination: 'Punta Cana',
      value: 'USD 499',
      eventSources: [
        [{
          start: new Date(2017, 11, 5),
          allDay: true,
        }, {
          start: new Date(2017, 11, 17),
          allDay: true,
        }, {
          start: new Date(2017, 11, 18),
          allDay: true,
        }, {
          start: new Date(2017, 11, 19),
          allDay: true,
        }, {
          start: new Date(2017, 11, 20),
          allDay: true,
        }, {
          start: new Date(2017, 11, 21),
          allDay: true,
        }, {
          start: new Date(2017, 11, 22),
          allDay: true,
        }, {
          start: new Date(2017, 11, 24),
          allDay: true,
        }, {
          start: new Date(2018, 0, 11),
          allDay: true,
        }, {
          start: new Date(2018, 0, 12),
          allDay: true,
        }, {
          start: new Date(2018, 0, 14),
          allDay: true,
        }, {
          start: new Date(2018, 0, 16),
          allDay: true,
        }, {
          start: new Date(2018, 0, 19),
          allDay: true,
        }, {
          start: new Date(2018, 0, 21),
          allDay: true,
        }, {
          start: new Date(2018, 0, 23),
          allDay: true,
        }, {
          start: new Date(2018, 0, 24),
          allDay: true,
        }, {
          start: new Date(2018, 0, 25),
          allDay: true,
        }, {
          start: new Date(2018, 0, 26),
          allDay: true,
        }, {
          start: new Date(2018, 0, 27),
          allDay: true,
        }, {
          start: new Date(2018, 0, 28),
          allDay: true,
        }, {
          start: new Date(2018, 0, 30),
          allDay: true,
        }, {
          start: new Date(2018, 0, 31),
          allDay: true,
        }, {
          start: new Date(2018, 1, 1),
          allDay: true,
        }, {
          start: new Date(2018, 1, 2),
          allDay: true,
        }, {
          start: new Date(2018, 1, 4),
          allDay: true,
        }, {
          start: new Date(2018, 1, 6),
          allDay: true,
        }, {
          start: new Date(2018, 1, 7),
          allDay: true,
        }, {
          start: new Date(2018, 1, 8),
          allDay: true,
        }, {
          start: new Date(2018, 1, 11),
          allDay: true,
        }, {
          start: new Date(2018, 1, 12),
          allDay: true,
        }, {
          start: new Date(2018, 1, 13),
          allDay: true,
        }, {
          start: new Date(2018, 1, 14),
          allDay: true,
        }, {
          start: new Date(2018, 1, 15),
          allDay: true,
        }, {
          start: new Date(2018, 1, 16),
          allDay: true,
        }, {
          start: new Date(2018, 1, 18),
          allDay: true,
        }, {
          start: new Date(2018, 1, 19),
          allDay: true,
        }, {
          start: new Date(2018, 1, 20),
          allDay: true,
        }, {
          start: new Date(2018, 1, 21),
          allDay: true,
        }, {
          start: new Date(2018, 1, 22),
          allDay: true,
        }, {
          start: new Date(2018, 1, 23),
          allDay: true,
        }, {
          start: new Date(2018, 1, 24),
          allDay: true,
        }, {
          start: new Date(2018, 1, 25),
          allDay: true,
        }, {
          start: new Date(2018, 1, 26),
          allDay: true,
        }, {
          start: new Date(2018, 1, 27),
          allDay: true,
        }, {
          start: new Date(2018, 1, 28),
          allDay: true,
        }, ],
      ],
    }, {
      source: 'Bogotá',
      destination: 'Quito',
      value: 'USD 415',
      eventSources: [
        [{
          start: new Date(2017, 11, 6),
          allDay: true,
        }, ],
      ],
    }, {
      source: 'Bogotá',
      destination: 'Cusco',
      value: 'USD 289',
      eventSources: [
        [{
          start: new Date(2018, 0, 17),
          allDay: true,
        }, {
          start: new Date(2018, 0, 18),
          allDay: true,
        }, {
          start: new Date(2018, 0, 19),
          allDay: true,
        }, {
          start: new Date(2018, 0, 22),
          allDay: true,
        }, {
          start: new Date(2018, 0, 23),
          allDay: true,
        }, {
          start: new Date(2018, 0, 24),
          allDay: true,
        }, {
          start: new Date(2018, 0, 25),
          allDay: true,
        }, {
          start: new Date(2018, 0, 26),
          allDay: true,
        }, {
          start: new Date(2018, 0, 27),
          allDay: true,
        }, {
          start: new Date(2018, 0, 28),
          allDay: true,
        }, {
          start: new Date(2018, 0, 29),
          allDay: true,
        }, {
          start: new Date(2018, 0, 30),
          allDay: true,
        }, {
          start: new Date(2018, 0, 31),
          allDay: true,
        }, {
          start: new Date(2018, 1, 1),
          allDay: true,
        }, {
          start: new Date(2018, 1, 2),
          allDay: true,
        }, {
          start: new Date(2018, 1, 3),
          allDay: true,
        }, {
          start: new Date(2018, 1, 4),
          allDay: true,
        }, {
          start: new Date(2018, 1, 5),
          allDay: true,
        }, {
          start: new Date(2018, 1, 6),
          allDay: true,
        }, {
          start: new Date(2018, 1, 7),
          allDay: true,
        }, {
          start: new Date(2018, 1, 8),
          allDay: true,
        }, {
          start: new Date(2018, 1, 9),
          allDay: true,
        }, {
          start: new Date(2018, 1, 12),
          allDay: true,
        }, {
          start: new Date(2018, 1, 13),
          allDay: true,
        }, {
          start: new Date(2018, 1, 14),
          allDay: true,
        }, {
          start: new Date(2018, 1, 15),
          allDay: true,
        }, {
          start: new Date(2018, 1, 16),
          allDay: true,
        }, {
          start: new Date(2018, 1, 17),
          allDay: true,
        }, {
          start: new Date(2018, 1, 18),
          allDay: true,
        }, {
          start: new Date(2018, 1, 19),
          allDay: true,
        }, {
          start: new Date(2018, 1, 20),
          allDay: true,
        }, {
          start: new Date(2018, 1, 21),
          allDay: true,
        }, {
          start: new Date(2018, 1, 22),
          allDay: true,
        }, {
          start: new Date(2018, 1, 23),
          allDay: true,
        }, {
          start: new Date(2018, 1, 24),
          allDay: true,
        }, {
          start: new Date(2018, 1, 25),
          allDay: true,
        }, {
          start: new Date(2018, 1, 26),
          allDay: true,
        }, ],
      ],
    }, {
      source: 'Bogotá',
      destination: 'Ciudad de México',
      value: 'USD 399',
      eventSources: [
        [{
          start: new Date(2018, 0, 17),
          allDay: true,
        }, {
          start: new Date(2018, 0, 18),
          allDay: true,
        }, {
          start: new Date(2018, 0, 19),
          allDay: true,
        }, {
          start: new Date(2018, 0, 20),
          allDay: true,
        }, {
          start: new Date(2018, 0, 21),
          allDay: true,
        }, {
          start: new Date(2018, 0, 22),
          allDay: true,
        }, {
          start: new Date(2018, 0, 23),
          allDay: true,
        }, {
          start: new Date(2018, 0, 24),
          allDay: true,
        }, {
          start: new Date(2018, 0, 25),
          allDay: true,
        }, {
          start: new Date(2018, 0, 26),
          allDay: true,
        }, {
          start: new Date(2018, 0, 27),
          allDay: true,
        }, {
          start: new Date(2018, 0, 28),
          allDay: true,
        }, {
          start: new Date(2018, 0, 29),
          allDay: true,
        }, {
          start: new Date(2018, 0, 30),
          allDay: true,
        }, {
          start: new Date(2018, 0, 31),
          allDay: true,
        }, {
          start: new Date(2018, 1, 1),
          allDay: true,
        }, {
          start: new Date(2018, 1, 2),
          allDay: true,
        }, {
          start: new Date(2018, 1, 3),
          allDay: true,
        }, {
          start: new Date(2018, 1, 4),
          allDay: true,
        }, {
          start: new Date(2018, 1, 5),
          allDay: true,
        }, {
          start: new Date(2018, 1, 6),
          allDay: true,
        }, {
          start: new Date(2018, 1, 7),
          allDay: true,
        }, {
          start: new Date(2018, 1, 8),
          allDay: true,
        }, {
          start: new Date(2018, 1, 9),
          allDay: true,
        }, {
          start: new Date(2018, 1, 10),
          allDay: true,
        }, {
          start: new Date(2018, 1, 11),
          allDay: true,
        }, {
          start: new Date(2018, 1, 12),
          allDay: true,
        }, {
          start: new Date(2018, 1, 13),
          allDay: true,
        }, {
          start: new Date(2018, 1, 14),
          allDay: true,
        }, {
          start: new Date(2018, 1, 15),
          allDay: true,
        }, {
          start: new Date(2018, 1, 16),
          allDay: true,
        }, {
          start: new Date(2018, 1, 17),
          allDay: true,
        }, {
          start: new Date(2018, 1, 18),
          allDay: true,
        }, {
          start: new Date(2018, 1, 19),
          allDay: true,
        }, {
          start: new Date(2018, 1, 27),
          allDay: true,
        }, {
          start: new Date(2018, 2, 7),
          allDay: true,
        }, {
          start: new Date(2018, 2, 15),
          allDay: true,
        }, {
          start: new Date(2018, 3, 8),
          allDay: true,
        }, {
          start: new Date(2018, 3, 16),
          allDay: true,
        }, {
          start: new Date(2018, 3, 24),
          allDay: true,
        }, {
          start: new Date(2018, 4, 2),
          allDay: true,
        }, {
          start: new Date(2018, 4, 10),
          allDay: true,
        }, {
          start: new Date(2018, 4, 18),
          allDay: true,
        }, ],
      ],
    }, {
      source: 'Cartagena',
      destination: 'Miami',
      value: 'USD 299',
      eventSources: [
        [{
          start: new Date(2018, 0, 20),
          allDay: true,
        }, {
          start: new Date(2018, 0, 21),
          allDay: true,
        }, {
          start: new Date(2018, 0, 27),
          allDay: true,
        }, {
          start: new Date(2018, 0, 28),
          allDay: true,
        }, {
          start: new Date(2018, 1, 3),
          allDay: true,
        }, {
          start: new Date(2018, 1, 4),
          allDay: true,
        }, {
          start: new Date(2018, 1, 9),
          allDay: true,
        }, {
          start: new Date(2018, 1, 10),
          allDay: true,
        }, {
          start: new Date(2018, 1, 14),
          allDay: true,
        }, {
          start: new Date(2018, 1, 15),
          allDay: true,
        }, {
          start: new Date(2018, 1, 16),
          allDay: true,
        }, {
          start: new Date(2018, 1, 17),
          allDay: true,
        }, {
          start: new Date(2018, 1, 21),
          allDay: true,
        }, {
          start: new Date(2018, 1, 22),
          allDay: true,
        }, {
          start: new Date(2018, 1, 23),
          allDay: true,
        }, {
          start: new Date(2018, 1, 24),
          allDay: true,
        }, {
          start: new Date(2018, 1, 28),
          allDay: true,
        }, {
          start: new Date(2018, 2, 1),
          allDay: true,
        }, {
          start: new Date(2018, 2, 2),
          allDay: true,
        }, {
          start: new Date(2018, 2, 3),
          allDay: true,
        }, {
          start: new Date(2018, 2, 4),
          allDay: true,
        }, {
          start: new Date(2018, 2, 7),
          allDay: true,
        }, {
          start: new Date(2018, 2, 8),
          allDay: true,
        }, {
          start: new Date(2018, 2, 10),
          allDay: true,
        }, {
          start: new Date(2018, 3, 7),
          allDay: true,
        }, {
          start: new Date(2018, 3, 11),
          allDay: true,
        }, {
          start: new Date(2018, 3, 12),
          allDay: true,
        }, {
          start: new Date(2018, 3, 13),
          allDay: true,
        }, {
          start: new Date(2018, 3, 14),
          allDay: true,
        }, {
          start: new Date(2018, 3, 15),
          allDay: true,
        }, {
          start: new Date(2018, 3, 18),
          allDay: true,
        }, {
          start: new Date(2018, 3, 19),
          allDay: true,
        }, {
          start: new Date(2018, 3, 20),
          allDay: true,
        }, {
          start: new Date(2018, 3, 21),
          allDay: true,
        }, {
          start: new Date(2018, 3, 22),
          allDay: true,
        }, {
          start: new Date(2018, 3, 25),
          allDay: true,
        }, {
          start: new Date(2018, 3, 26),
          allDay: true,
        }, {
          start: new Date(2018, 3, 27),
          allDay: true,
        }, {
          start: new Date(2018, 3, 28),
          allDay: true,
        }, {
          start: new Date(2018, 3, 29),
          allDay: true,
        }, {
          start: new Date(2018, 4, 2),
          allDay: true,
        }, {
          start: new Date(2018, 4, 3),
          allDay: true,
        }, {
          start: new Date(2018, 4, 4),
          allDay: true,
        }, {
          start: new Date(2018, 4, 5),
          allDay: true,
        }, {
          start: new Date(2018, 4, 6),
          allDay: true,
        }, {
          start: new Date(2018, 4, 9),
          allDay: true,
        }, {
          start: new Date(2018, 4, 10),
          allDay: true,
        }, {
          start: new Date(2018, 4, 11),
          allDay: true,
        }, {
          start: new Date(2018, 4, 12),
          allDay: true,
        }, {
          start: new Date(2018, 4, 13),
          allDay: true,
        }, {
          start: new Date(2018, 4, 16),
          allDay: true,
        }, {
          start: new Date(2018, 4, 18),
          allDay: true,
        }, {
          start: new Date(2018, 4, 19),
          allDay: true,
        }, ],
      ],
    }, {
      source: 'Bogotá',
      destination: 'Los Ángeles',
      value: 'USD 469',
      eventSources: [
        [{
          start: new Date(2018, 0, 24),
          allDay: true,
        }, {
          start: new Date(2018, 0, 25),
          allDay: true,
        }, {
          start: new Date(2018, 0, 26),
          allDay: true,
        }, {
          start: new Date(2018, 0, 27),
          allDay: true,
        }, {
          start: new Date(2018, 0, 30),
          allDay: true,
        }, {
          start: new Date(2018, 0, 31),
          allDay: true,
        }, {
          start: new Date(2018, 1, 1),
          allDay: true,
        }, {
          start: new Date(2018, 1, 3),
          allDay: true,
        }, {
          start: new Date(2018, 1, 4),
          allDay: true,
        }, {
          start: new Date(2018, 1, 5),
          allDay: true,
        }, {
          start: new Date(2018, 1, 6),
          allDay: true,
        }, {
          start: new Date(2018, 1, 7),
          allDay: true,
        }, {
          start: new Date(2018, 1, 8),
          allDay: true,
        }, {
          start: new Date(2018, 1, 10),
          allDay: true,
        }, {
          start: new Date(2018, 1, 11),
          allDay: true,
        }, {
          start: new Date(2018, 1, 12),
          allDay: true,
        }, {
          start: new Date(2018, 1, 13),
          allDay: true,
        }, {
          start: new Date(2018, 1, 14),
          allDay: true,
        }, {
          start: new Date(2018, 1, 15),
          allDay: true,
        }, {
          start: new Date(2018, 1, 16),
          allDay: true,
        }, {
          start: new Date(2018, 1, 17),
          allDay: true,
        }, {
          start: new Date(2018, 1, 19),
          allDay: true,
        }, ],
      ],
    }, {
      source: 'Bogotá',
      destination: 'Valledupar',
      value: 'COP 79900',
      eventSources: [
        [{
          start: new Date(2018, 1, 1),
          allDay: true,
        }, {
          start: new Date(2018, 1, 3),
          allDay: true,
        }, {
          start: new Date(2018, 1, 4),
          allDay: true,
        }, {
          start: new Date(2018, 1, 5),
          allDay: true,
        }, {
          start: new Date(2018, 1, 6),
          allDay: true,
        }, {
          start: new Date(2018, 1, 7),
          allDay: true,
        }, {
          start: new Date(2018, 1, 10),
          allDay: true,
        }, {
          start: new Date(2018, 1, 11),
          allDay: true,
        }, {
          start: new Date(2018, 1, 12),
          allDay: true,
        }, {
          start: new Date(2018, 1, 13),
          allDay: true,
        }, {
          start: new Date(2018, 1, 14),
          allDay: true,
        }, {
          start: new Date(2018, 1, 17),
          allDay: true,
        }, {
          start: new Date(2018, 1, 18),
          allDay: true,
        }, ],
      ],
    }, {
      source: 'Bogotá',
      destination: 'Boston',
      value: 'USD 419',
      eventSources: [
        [{
          start: new Date(2018, 1, 3),
          allDay: true,
        }, {
          start: new Date(2018, 1, 5),
          allDay: true,
        }, {
          start: new Date(2018, 1, 12),
          allDay: true,
        }, {
          start: new Date(2018, 1, 14),
          allDay: true,
        }, {
          start: new Date(2018, 1, 17),
          allDay: true,
        }, ],
      ],
    }, {
      source: 'Bogotá',
      destination: 'Cancún',
      value: 'USD 369',
      eventSources: [
        [{
          start: new Date(2018, 1, 7),
          allDay: true,
        }, {
          start: new Date(2018, 1, 11),
          allDay: true,
        }, {
          start: new Date(2018, 1, 13),
          allDay: true,
        }, {
          start: new Date(2018, 1, 20),
          allDay: true,
        }, {
          start: new Date(2018, 1, 21),
          allDay: true,
        }, {
          start: new Date(2018, 1, 22),
          allDay: true,
        }, {
          start: new Date(2018, 1, 23),
          allDay: true,
        }, {
          start: new Date(2018, 1, 24),
          allDay: true,
        }, {
          start: new Date(2018, 1, 25),
          allDay: true,
        }, {
          start: new Date(2018, 1, 26),
          allDay: true,
        }, {
          start: new Date(2018, 2, 1),
          allDay: true,
        }, {
          start: new Date(2018, 2, 4),
          allDay: true,
        }, {
          start: new Date(2018, 2, 7),
          allDay: true,
        }, {
          start: new Date(2018, 2, 10),
          allDay: true,
        }, {
          start: new Date(2018, 2, 13),
          allDay: true,
        }, {
          start: new Date(2018, 2, 16),
          allDay: true,
        }, {
          start: new Date(2018, 2, 19),
          allDay: true,
        }, {
          start: new Date(2018, 2, 31),
          allDay: true,
        }, {
          start: new Date(2018, 3, 3),
          allDay: true,
        }, {
          start: new Date(2018, 3, 6),
          allDay: true,
        }, {
          start: new Date(2018, 3, 9),
          allDay: true,
        }, {
          start: new Date(2018, 3, 12),
          allDay: true,
        }, {
          start: new Date(2018, 3, 15),
          allDay: true,
        }, {
          start: new Date(2018, 3, 18),
          allDay: true,
        }, {
          start: new Date(2018, 3, 21),
          allDay: true,
        }, ],
      ],
    }, {
      source: 'Bogotá',
      destination: 'CUZ',
      value: 'USD 389',
      eventSources: [
        [{
          start: new Date(2018, 1, 17),
          allDay: true,
        }, ],
      ],
    }, {
      source: 'Santiago de Chile',
      destination: 'Madrid',
      value: 'USD 869',
      eventSources: [
        [{
          start: new Date(2018, 1, 22),
          allDay: true,
        }, {
          start: new Date(2018, 1, 25),
          allDay: true,
        }, {
          start: new Date(2018, 1, 26),
          allDay: true,
        }, {
          start: new Date(2018, 1, 27),
          allDay: true,
        }, {
          start: new Date(2018, 1, 28),
          allDay: true,
        }, {
          start: new Date(2018, 2, 1),
          allDay: true,
        }, {
          start: new Date(2018, 2, 2),
          allDay: true,
        }, {
          start: new Date(2018, 2, 3),
          allDay: true,
        }, {
          start: new Date(2018, 2, 4),
          allDay: true,
        }, {
          start: new Date(2018, 2, 5),
          allDay: true,
        }, {
          start: new Date(2018, 2, 6),
          allDay: true,
        }, {
          start: new Date(2018, 2, 7),
          allDay: true,
        }, {
          start: new Date(2018, 2, 8),
          allDay: true,
        }, {
          start: new Date(2018, 2, 9),
          allDay: true,
        }, {
          start: new Date(2018, 2, 10),
          allDay: true,
        }, {
          start: new Date(2018, 2, 11),
          allDay: true,
        }, {
          start: new Date(2018, 2, 12),
          allDay: true,
        }, {
          start: new Date(2018, 2, 13),
          allDay: true,
        }, {
          start: new Date(2018, 2, 14),
          allDay: true,
        }, {
          start: new Date(2018, 2, 28),
          allDay: true,
        }, {
          start: new Date(2018, 2, 29),
          allDay: true,
        }, {
          start: new Date(2018, 2, 30),
          allDay: true,
        }, {
          start: new Date(2018, 3, 2),
          allDay: true,
        }, {
          start: new Date(2018, 3, 3),
          allDay: true,
        }, {
          start: new Date(2018, 3, 4),
          allDay: true,
        }, {
          start: new Date(2018, 3, 5),
          allDay: true,
        }, {
          start: new Date(2018, 3, 6),
          allDay: true,
        }, {
          start: new Date(2018, 3, 8),
          allDay: true,
        }, {
          start: new Date(2018, 3, 9),
          allDay: true,
        }, {
          start: new Date(2018, 3, 10),
          allDay: true,
        }, {
          start: new Date(2018, 3, 11),
          allDay: true,
        }, {
          start: new Date(2018, 3, 12),
          allDay: true,
        }, {
          start: new Date(2018, 3, 13),
          allDay: true,
        }, {
          start: new Date(2018, 3, 15),
          allDay: true,
        }, ],
      ],
    }, {
      source: 'Cali',
      destination: 'Lima',
      value: 'USD 399',
      eventSources: [
        [{
          start: new Date(2018, 2, 5),
          allDay: true,
        }, {
          start: new Date(2018, 2, 6),
          allDay: true,
        }, {
          start: new Date(2018, 2, 7),
          allDay: true,
        }, {
          start: new Date(2018, 2, 8),
          allDay: true,
        }, {
          start: new Date(2018, 2, 9),
          allDay: true,
        }, {
          start: new Date(2018, 2, 10),
          allDay: true,
        }, {
          start: new Date(2018, 2, 11),
          allDay: true,
        }, {
          start: new Date(2018, 2, 12),
          allDay: true,
        }, ],
      ],
    }, {
      source: 'Santiago de Chile',
      destination: 'Barcelona',
      value: 'USD 979',
      eventSources: [
        [{
          start: new Date(2018, 3, 2),
          allDay: true,
        }, {
          start: new Date(2018, 3, 3),
          allDay: true,
        }, {
          start: new Date(2018, 4, 13),
          allDay: true,
        }, {
          start: new Date(2018, 4, 20),
          allDay: true,
        }, ],
      ],
    }, ];

    $scope.hideCalendar = function () {
      $scope.showCalendar = false;
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
