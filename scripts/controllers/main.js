
'use strict';

/**
 * @ngdoc function
 * @name ofertasCalendarioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ofertasCalendarioApp
 */
angular.module('ofertasCalendarioApp')
  .controller('MainCtrl', function($scope, _) {
    $scope.events = 		[{source:"Tumaco",
		destination:"Cali",
		value:"COP 199900",
		eventSources:[[{
		start:new Date(2018, 3, 6),
		allDay:true
		},
		{
		start:new Date(2018, 3, 7),
		allDay:true
		},
		{
		start:new Date(2018, 3, 8),
		allDay:true
		},
		{
		start:new Date(2018, 3, 9),
		allDay:true
		},
		{
		start:new Date(2018, 3, 10),
		allDay:true
		},
		{
		start:new Date(2018, 3, 11),
		allDay:true
		},
		{
		start:new Date(2018, 3, 12),
		allDay:true
		},
		{
		start:new Date(2018, 3, 13),
		allDay:true
		},
		{
		start:new Date(2018, 3, 14),
		allDay:true
		},
		{
		start:new Date(2018, 3, 15),
		allDay:true
		},
		{
		start:new Date(2018, 3, 16),
		allDay:true
		},
		{
		start:new Date(2018, 3, 17),
		allDay:true
		},
		{
		start:new Date(2018, 3, 18),
		allDay:true
		},
		{
		start:new Date(2018, 3, 19),
		allDay:true
		},
		{
		start:new Date(2018, 3, 20),
		allDay:true
		},
		{
		start:new Date(2018, 3, 21),
		allDay:true
		},
		{
		start:new Date(2018, 3, 22),
		allDay:true
		},
		{
		start:new Date(2018, 3, 23),
		allDay:true
		},
		{
		start:new Date(2018, 3, 24),
		allDay:true
		},
		{
		start:new Date(2018, 3, 25),
		allDay:true
		},
		{
		start:new Date(2018, 3, 26),
		allDay:true
		},
		{
		start:new Date(2018, 3, 27),
		allDay:true
		},
		{
		start:new Date(2018, 3, 28),
		allDay:true
		},
		{
		start:new Date(2018, 3, 29),
		allDay:true
		},
		{
		start:new Date(2018, 3, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 2),
		allDay:true
		},
		{
		start:new Date(2018, 4, 3),
		allDay:true
		},
		{
		start:new Date(2018, 4, 4),
		allDay:true
		},
		{
		start:new Date(2018, 4, 5),
		allDay:true
		},
		{
		start:new Date(2018, 4, 6),
		allDay:true
		},
		{
		start:new Date(2018, 4, 7),
		allDay:true
		},
		{
		start:new Date(2018, 4, 8),
		allDay:true
		},
		{
		start:new Date(2018, 4, 9),
		allDay:true
		},
		{
		start:new Date(2018, 4, 10),
		allDay:true
		},
		{
		start:new Date(2018, 4, 11),
		allDay:true
		},
		{
		start:new Date(2018, 4, 12),
		allDay:true
		},
		{
		start:new Date(2018, 4, 13),
		allDay:true
		},
		{
		start:new Date(2018, 4, 15),
		allDay:true
		},
		{
		start:new Date(2018, 4, 16),
		allDay:true
		},
		{
		start:new Date(2018, 4, 17),
		allDay:true
		},
		{
		start:new Date(2018, 4, 18),
		allDay:true
		},
		{
		start:new Date(2018, 4, 19),
		allDay:true
		},
		{
		start:new Date(2018, 4, 20),
		allDay:true
		},
		{
		start:new Date(2018, 4, 21),
		allDay:true
		},
		{
		start:new Date(2018, 4, 22),
		allDay:true
		},
		{
		start:new Date(2018, 4, 23),
		allDay:true
		},
		{
		start:new Date(2018, 4, 24),
		allDay:true
		},
		{
		start:new Date(2018, 4, 25),
		allDay:true
		},
		{
		start:new Date(2018, 4, 26),
		allDay:true
		},
		{
		start:new Date(2018, 4, 27),
		allDay:true
		},
		{
		start:new Date(2018, 4, 28),
		allDay:true
		},
		{
		start:new Date(2018, 4, 29),
		allDay:true
		},
		{
		start:new Date(2018, 4, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 31),
		allDay:true
		},
		{
		start:new Date(2018, 5, 1),
		allDay:true
		},
		{
		start:new Date(2018, 5, 2),
		allDay:true
		},
		{
		start:new Date(2018, 5, 3),
		allDay:true
		},
		{
		start:new Date(2018, 5, 5),
		allDay:true
		},
		{
		start:new Date(2018, 5, 6),
		allDay:true
		},
		{
		start:new Date(2018, 5, 7),
		allDay:true
		},
		{
		start:new Date(2018, 5, 8),
		allDay:true
		},
		{
		start:new Date(2018, 5, 9),
		allDay:true
		},
		{
		start:new Date(2018, 5, 10),
		allDay:true
		},
		{
		start:new Date(2018, 5, 12),
		allDay:true
		},
		{
		start:new Date(2018, 5, 13),
		allDay:true
		},
		{
		start:new Date(2018, 5, 14),
		allDay:true
		},
		{
		start:new Date(2018, 5, 15),
		allDay:true
		},
		{
		start:new Date(2018, 5, 16),
		allDay:true
		},
		{
		start:new Date(2018, 5, 17),
		allDay:true
		},
		{
		start:new Date(2018, 5, 18),
		allDay:true
		},
		{
		start:new Date(2018, 5, 19),
		allDay:true
		},
		{
		start:new Date(2018, 5, 20),
		allDay:true
		},
		{
		start:new Date(2018, 5, 21),
		allDay:true
		},
		{
		start:new Date(2018, 5, 22),
		allDay:true
		},
		{
		start:new Date(2018, 5, 23),
		allDay:true
		},
		{
		start:new Date(2018, 5, 24),
		allDay:true
		},
		{
		start:new Date(2018, 5, 25),
		allDay:true
		},
		{
		start:new Date(2018, 5, 26),
		allDay:true
		},
		{
		start:new Date(2018, 5, 27),
		allDay:true
		},
		{
		start:new Date(2018, 5, 28),
		allDay:true
		},
		{
		start:new Date(2018, 5, 29),
		allDay:true
		},
		{
		start:new Date(2018, 5, 30),
		allDay:true
		}]]},
		{source:"Bogotá",
		destination:"Pereira",
		value:"COP 109900",
		eventSources:[[{
		start:new Date(2018, 3, 6),
		allDay:true
		},
		{
		start:new Date(2018, 3, 7),
		allDay:true
		},
		{
		start:new Date(2018, 3, 8),
		allDay:true
		},
		{
		start:new Date(2018, 3, 9),
		allDay:true
		},
		{
		start:new Date(2018, 3, 10),
		allDay:true
		},
		{
		start:new Date(2018, 3, 11),
		allDay:true
		},
		{
		start:new Date(2018, 3, 12),
		allDay:true
		},
		{
		start:new Date(2018, 3, 13),
		allDay:true
		},
		{
		start:new Date(2018, 3, 14),
		allDay:true
		},
		{
		start:new Date(2018, 3, 15),
		allDay:true
		},
		{
		start:new Date(2018, 3, 16),
		allDay:true
		},
		{
		start:new Date(2018, 3, 17),
		allDay:true
		},
		{
		start:new Date(2018, 3, 18),
		allDay:true
		},
		{
		start:new Date(2018, 3, 19),
		allDay:true
		},
		{
		start:new Date(2018, 3, 20),
		allDay:true
		},
		{
		start:new Date(2018, 3, 21),
		allDay:true
		},
		{
		start:new Date(2018, 3, 22),
		allDay:true
		},
		{
		start:new Date(2018, 3, 23),
		allDay:true
		},
		{
		start:new Date(2018, 3, 24),
		allDay:true
		},
		{
		start:new Date(2018, 3, 25),
		allDay:true
		},
		{
		start:new Date(2018, 3, 26),
		allDay:true
		},
		{
		start:new Date(2018, 3, 29),
		allDay:true
		},
		{
		start:new Date(2018, 3, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 1),
		allDay:true
		},
		{
		start:new Date(2018, 4, 2),
		allDay:true
		},
		{
		start:new Date(2018, 4, 3),
		allDay:true
		},
		{
		start:new Date(2018, 4, 4),
		allDay:true
		},
		{
		start:new Date(2018, 4, 5),
		allDay:true
		},
		{
		start:new Date(2018, 4, 6),
		allDay:true
		},
		{
		start:new Date(2018, 4, 7),
		allDay:true
		},
		{
		start:new Date(2018, 4, 8),
		allDay:true
		},
		{
		start:new Date(2018, 4, 9),
		allDay:true
		},
		{
		start:new Date(2018, 4, 10),
		allDay:true
		},
		{
		start:new Date(2018, 4, 12),
		allDay:true
		},
		{
		start:new Date(2018, 4, 13),
		allDay:true
		},
		{
		start:new Date(2018, 4, 14),
		allDay:true
		},
		{
		start:new Date(2018, 4, 15),
		allDay:true
		},
		{
		start:new Date(2018, 4, 16),
		allDay:true
		},
		{
		start:new Date(2018, 4, 17),
		allDay:true
		},
		{
		start:new Date(2018, 4, 18),
		allDay:true
		},
		{
		start:new Date(2018, 4, 19),
		allDay:true
		},
		{
		start:new Date(2018, 4, 20),
		allDay:true
		},
		{
		start:new Date(2018, 4, 21),
		allDay:true
		},
		{
		start:new Date(2018, 4, 22),
		allDay:true
		},
		{
		start:new Date(2018, 4, 23),
		allDay:true
		},
		{
		start:new Date(2018, 4, 24),
		allDay:true
		},
		{
		start:new Date(2018, 4, 25),
		allDay:true
		},
		{
		start:new Date(2018, 4, 26),
		allDay:true
		},
		{
		start:new Date(2018, 4, 27),
		allDay:true
		},
		{
		start:new Date(2018, 4, 28),
		allDay:true
		},
		{
		start:new Date(2018, 4, 29),
		allDay:true
		},
		{
		start:new Date(2018, 4, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 31),
		allDay:true
		},
		{
		start:new Date(2018, 5, 2),
		allDay:true
		},
		{
		start:new Date(2018, 5, 3),
		allDay:true
		},
		{
		start:new Date(2018, 5, 4),
		allDay:true
		},
		{
		start:new Date(2018, 5, 5),
		allDay:true
		},
		{
		start:new Date(2018, 5, 6),
		allDay:true
		},
		{
		start:new Date(2018, 5, 10),
		allDay:true
		},
		{
		start:new Date(2018, 5, 11),
		allDay:true
		},
		{
		start:new Date(2018, 5, 12),
		allDay:true
		},
		{
		start:new Date(2018, 5, 13),
		allDay:true
		},
		{
		start:new Date(2018, 5, 14),
		allDay:true
		},
		{
		start:new Date(2018, 5, 15),
		allDay:true
		},
		{
		start:new Date(2018, 5, 16),
		allDay:true
		},
		{
		start:new Date(2018, 5, 17),
		allDay:true
		},
		{
		start:new Date(2018, 5, 18),
		allDay:true
		},
		{
		start:new Date(2018, 5, 19),
		allDay:true
		},
		{
		start:new Date(2018, 5, 20),
		allDay:true
		},
		{
		start:new Date(2018, 5, 21),
		allDay:true
		},
		{
		start:new Date(2018, 5, 22),
		allDay:true
		},
		{
		start:new Date(2018, 5, 23),
		allDay:true
		},
		{
		start:new Date(2018, 5, 24),
		allDay:true
		},
		{
		start:new Date(2018, 5, 25),
		allDay:true
		},
		{
		start:new Date(2018, 5, 26),
		allDay:true
		},
		{
		start:new Date(2018, 5, 27),
		allDay:true
		},
		{
		start:new Date(2018, 5, 28),
		allDay:true
		}]]},
		{source:"Bogotá",
		destination:"Cúcuta",
		value:"COP 129900",
		eventSources:[[{
		start:new Date(2018, 3, 6),
		allDay:true
		},
		{
		start:new Date(2018, 3, 7),
		allDay:true
		},
		{
		start:new Date(2018, 3, 8),
		allDay:true
		},
		{
		start:new Date(2018, 3, 9),
		allDay:true
		},
		{
		start:new Date(2018, 3, 10),
		allDay:true
		},
		{
		start:new Date(2018, 3, 11),
		allDay:true
		},
		{
		start:new Date(2018, 3, 12),
		allDay:true
		},
		{
		start:new Date(2018, 3, 13),
		allDay:true
		},
		{
		start:new Date(2018, 3, 14),
		allDay:true
		},
		{
		start:new Date(2018, 3, 15),
		allDay:true
		},
		{
		start:new Date(2018, 3, 16),
		allDay:true
		},
		{
		start:new Date(2018, 3, 17),
		allDay:true
		},
		{
		start:new Date(2018, 3, 18),
		allDay:true
		},
		{
		start:new Date(2018, 3, 19),
		allDay:true
		},
		{
		start:new Date(2018, 3, 20),
		allDay:true
		},
		{
		start:new Date(2018, 3, 21),
		allDay:true
		},
		{
		start:new Date(2018, 3, 22),
		allDay:true
		},
		{
		start:new Date(2018, 3, 23),
		allDay:true
		},
		{
		start:new Date(2018, 3, 24),
		allDay:true
		},
		{
		start:new Date(2018, 3, 25),
		allDay:true
		},
		{
		start:new Date(2018, 3, 26),
		allDay:true
		},
		{
		start:new Date(2018, 3, 28),
		allDay:true
		},
		{
		start:new Date(2018, 3, 29),
		allDay:true
		},
		{
		start:new Date(2018, 3, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 1),
		allDay:true
		},
		{
		start:new Date(2018, 4, 2),
		allDay:true
		},
		{
		start:new Date(2018, 4, 3),
		allDay:true
		},
		{
		start:new Date(2018, 4, 4),
		allDay:true
		},
		{
		start:new Date(2018, 4, 5),
		allDay:true
		},
		{
		start:new Date(2018, 4, 6),
		allDay:true
		},
		{
		start:new Date(2018, 4, 7),
		allDay:true
		},
		{
		start:new Date(2018, 4, 8),
		allDay:true
		},
		{
		start:new Date(2018, 4, 9),
		allDay:true
		},
		{
		start:new Date(2018, 4, 10),
		allDay:true
		},
		{
		start:new Date(2018, 4, 13),
		allDay:true
		},
		{
		start:new Date(2018, 4, 14),
		allDay:true
		},
		{
		start:new Date(2018, 4, 16),
		allDay:true
		},
		{
		start:new Date(2018, 4, 17),
		allDay:true
		},
		{
		start:new Date(2018, 4, 18),
		allDay:true
		},
		{
		start:new Date(2018, 4, 19),
		allDay:true
		},
		{
		start:new Date(2018, 4, 20),
		allDay:true
		},
		{
		start:new Date(2018, 4, 21),
		allDay:true
		},
		{
		start:new Date(2018, 4, 22),
		allDay:true
		},
		{
		start:new Date(2018, 4, 23),
		allDay:true
		},
		{
		start:new Date(2018, 4, 24),
		allDay:true
		},
		{
		start:new Date(2018, 4, 25),
		allDay:true
		},
		{
		start:new Date(2018, 4, 26),
		allDay:true
		},
		{
		start:new Date(2018, 4, 27),
		allDay:true
		},
		{
		start:new Date(2018, 4, 28),
		allDay:true
		},
		{
		start:new Date(2018, 4, 29),
		allDay:true
		},
		{
		start:new Date(2018, 4, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 31),
		allDay:true
		},
		{
		start:new Date(2018, 5, 3),
		allDay:true
		},
		{
		start:new Date(2018, 5, 4),
		allDay:true
		},
		{
		start:new Date(2018, 5, 5),
		allDay:true
		},
		{
		start:new Date(2018, 5, 6),
		allDay:true
		},
		{
		start:new Date(2018, 5, 7),
		allDay:true
		},
		{
		start:new Date(2018, 5, 10),
		allDay:true
		},
		{
		start:new Date(2018, 5, 11),
		allDay:true
		},
		{
		start:new Date(2018, 5, 13),
		allDay:true
		},
		{
		start:new Date(2018, 5, 14),
		allDay:true
		},
		{
		start:new Date(2018, 5, 15),
		allDay:true
		},
		{
		start:new Date(2018, 5, 16),
		allDay:true
		},
		{
		start:new Date(2018, 5, 17),
		allDay:true
		},
		{
		start:new Date(2018, 5, 18),
		allDay:true
		},
		{
		start:new Date(2018, 5, 19),
		allDay:true
		},
		{
		start:new Date(2018, 5, 20),
		allDay:true
		},
		{
		start:new Date(2018, 5, 21),
		allDay:true
		},
		{
		start:new Date(2018, 5, 22),
		allDay:true
		},
		{
		start:new Date(2018, 5, 23),
		allDay:true
		},
		{
		start:new Date(2018, 5, 24),
		allDay:true
		},
		{
		start:new Date(2018, 5, 25),
		allDay:true
		},
		{
		start:new Date(2018, 5, 26),
		allDay:true
		},
		{
		start:new Date(2018, 5, 27),
		allDay:true
		},
		{
		start:new Date(2018, 5, 28),
		allDay:true
		}]]},
		{source:"Pereira",
		destination:"Bogotá",
		value:"COP 109900",
		eventSources:[[{
		start:new Date(2018, 3, 6),
		allDay:true
		},
		{
		start:new Date(2018, 3, 7),
		allDay:true
		},
		{
		start:new Date(2018, 3, 8),
		allDay:true
		},
		{
		start:new Date(2018, 3, 9),
		allDay:true
		},
		{
		start:new Date(2018, 3, 10),
		allDay:true
		},
		{
		start:new Date(2018, 3, 11),
		allDay:true
		},
		{
		start:new Date(2018, 3, 12),
		allDay:true
		},
		{
		start:new Date(2018, 3, 13),
		allDay:true
		},
		{
		start:new Date(2018, 3, 14),
		allDay:true
		},
		{
		start:new Date(2018, 3, 15),
		allDay:true
		},
		{
		start:new Date(2018, 3, 16),
		allDay:true
		},
		{
		start:new Date(2018, 3, 17),
		allDay:true
		},
		{
		start:new Date(2018, 3, 18),
		allDay:true
		},
		{
		start:new Date(2018, 3, 19),
		allDay:true
		},
		{
		start:new Date(2018, 3, 20),
		allDay:true
		},
		{
		start:new Date(2018, 3, 21),
		allDay:true
		},
		{
		start:new Date(2018, 3, 22),
		allDay:true
		},
		{
		start:new Date(2018, 3, 23),
		allDay:true
		},
		{
		start:new Date(2018, 3, 24),
		allDay:true
		},
		{
		start:new Date(2018, 3, 25),
		allDay:true
		},
		{
		start:new Date(2018, 3, 26),
		allDay:true
		},
		{
		start:new Date(2018, 3, 27),
		allDay:true
		},
		{
		start:new Date(2018, 3, 28),
		allDay:true
		},
		{
		start:new Date(2018, 3, 29),
		allDay:true
		},
		{
		start:new Date(2018, 4, 2),
		allDay:true
		},
		{
		start:new Date(2018, 4, 3),
		allDay:true
		},
		{
		start:new Date(2018, 4, 4),
		allDay:true
		},
		{
		start:new Date(2018, 4, 5),
		allDay:true
		},
		{
		start:new Date(2018, 4, 6),
		allDay:true
		},
		{
		start:new Date(2018, 4, 7),
		allDay:true
		},
		{
		start:new Date(2018, 4, 8),
		allDay:true
		},
		{
		start:new Date(2018, 4, 9),
		allDay:true
		},
		{
		start:new Date(2018, 4, 10),
		allDay:true
		},
		{
		start:new Date(2018, 4, 11),
		allDay:true
		},
		{
		start:new Date(2018, 4, 12),
		allDay:true
		},
		{
		start:new Date(2018, 4, 13),
		allDay:true
		},
		{
		start:new Date(2018, 4, 15),
		allDay:true
		},
		{
		start:new Date(2018, 4, 16),
		allDay:true
		},
		{
		start:new Date(2018, 4, 17),
		allDay:true
		},
		{
		start:new Date(2018, 4, 18),
		allDay:true
		},
		{
		start:new Date(2018, 4, 19),
		allDay:true
		},
		{
		start:new Date(2018, 4, 20),
		allDay:true
		},
		{
		start:new Date(2018, 4, 21),
		allDay:true
		},
		{
		start:new Date(2018, 4, 22),
		allDay:true
		},
		{
		start:new Date(2018, 4, 23),
		allDay:true
		},
		{
		start:new Date(2018, 4, 24),
		allDay:true
		},
		{
		start:new Date(2018, 4, 25),
		allDay:true
		},
		{
		start:new Date(2018, 4, 26),
		allDay:true
		},
		{
		start:new Date(2018, 4, 27),
		allDay:true
		},
		{
		start:new Date(2018, 4, 28),
		allDay:true
		},
		{
		start:new Date(2018, 4, 29),
		allDay:true
		},
		{
		start:new Date(2018, 4, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 31),
		allDay:true
		},
		{
		start:new Date(2018, 5, 1),
		allDay:true
		},
		{
		start:new Date(2018, 5, 2),
		allDay:true
		},
		{
		start:new Date(2018, 5, 5),
		allDay:true
		},
		{
		start:new Date(2018, 5, 6),
		allDay:true
		},
		{
		start:new Date(2018, 5, 7),
		allDay:true
		},
		{
		start:new Date(2018, 5, 8),
		allDay:true
		},
		{
		start:new Date(2018, 5, 9),
		allDay:true
		},
		{
		start:new Date(2018, 5, 12),
		allDay:true
		},
		{
		start:new Date(2018, 5, 13),
		allDay:true
		},
		{
		start:new Date(2018, 5, 14),
		allDay:true
		},
		{
		start:new Date(2018, 5, 15),
		allDay:true
		},
		{
		start:new Date(2018, 5, 16),
		allDay:true
		},
		{
		start:new Date(2018, 5, 17),
		allDay:true
		},
		{
		start:new Date(2018, 5, 18),
		allDay:true
		},
		{
		start:new Date(2018, 5, 19),
		allDay:true
		},
		{
		start:new Date(2018, 5, 20),
		allDay:true
		},
		{
		start:new Date(2018, 5, 21),
		allDay:true
		},
		{
		start:new Date(2018, 5, 22),
		allDay:true
		},
		{
		start:new Date(2018, 5, 23),
		allDay:true
		},
		{
		start:new Date(2018, 5, 24),
		allDay:true
		},
		{
		start:new Date(2018, 5, 25),
		allDay:true
		},
		{
		start:new Date(2018, 5, 26),
		allDay:true
		},
		{
		start:new Date(2018, 5, 27),
		allDay:true
		},
		{
		start:new Date(2018, 5, 28),
		allDay:true
		},
		{
		start:new Date(2018, 5, 29),
		allDay:true
		},
		{
		start:new Date(2018, 5, 30),
		allDay:true
		}]]},
		{source:"San Andrés",
		destination:"Bogotá",
		value:"COP 169900",
		eventSources:[[{
		start:new Date(2018, 3, 6),
		allDay:true
		},
		{
		start:new Date(2018, 3, 7),
		allDay:true
		},
		{
		start:new Date(2018, 3, 11),
		allDay:true
		},
		{
		start:new Date(2018, 3, 12),
		allDay:true
		},
		{
		start:new Date(2018, 3, 13),
		allDay:true
		},
		{
		start:new Date(2018, 3, 18),
		allDay:true
		},
		{
		start:new Date(2018, 3, 19),
		allDay:true
		},
		{
		start:new Date(2018, 3, 20),
		allDay:true
		},
		{
		start:new Date(2018, 3, 27),
		allDay:true
		},
		{
		start:new Date(2018, 4, 4),
		allDay:true
		},
		{
		start:new Date(2018, 4, 5),
		allDay:true
		},
		{
		start:new Date(2018, 4, 8),
		allDay:true
		},
		{
		start:new Date(2018, 4, 9),
		allDay:true
		},
		{
		start:new Date(2018, 4, 10),
		allDay:true
		},
		{
		start:new Date(2018, 4, 11),
		allDay:true
		},
		{
		start:new Date(2018, 4, 16),
		allDay:true
		},
		{
		start:new Date(2018, 4, 17),
		allDay:true
		},
		{
		start:new Date(2018, 4, 18),
		allDay:true
		},
		{
		start:new Date(2018, 4, 19),
		allDay:true
		},
		{
		start:new Date(2018, 4, 22),
		allDay:true
		},
		{
		start:new Date(2018, 4, 23),
		allDay:true
		},
		{
		start:new Date(2018, 4, 24),
		allDay:true
		},
		{
		start:new Date(2018, 4, 25),
		allDay:true
		},
		{
		start:new Date(2018, 4, 29),
		allDay:true
		},
		{
		start:new Date(2018, 4, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 31),
		allDay:true
		},
		{
		start:new Date(2018, 5, 1),
		allDay:true
		},
		{
		start:new Date(2018, 5, 6),
		allDay:true
		},
		{
		start:new Date(2018, 5, 7),
		allDay:true
		},
		{
		start:new Date(2018, 5, 8),
		allDay:true
		},
		{
		start:new Date(2018, 5, 13),
		allDay:true
		},
		{
		start:new Date(2018, 5, 15),
		allDay:true
		},
		{
		start:new Date(2018, 5, 22),
		allDay:true
		},
		{
		start:new Date(2018, 5, 29),
		allDay:true
		}]]},
		{source:"Medellín",
		destination:"Bucaramanga",
		value:"COP 139800",
		eventSources:[[{
		start:new Date(2018, 3, 6),
		allDay:true
		},
		{
		start:new Date(2018, 3, 7),
		allDay:true
		},
		{
		start:new Date(2018, 3, 9),
		allDay:true
		},
		{
		start:new Date(2018, 3, 10),
		allDay:true
		},
		{
		start:new Date(2018, 3, 11),
		allDay:true
		},
		{
		start:new Date(2018, 3, 12),
		allDay:true
		},
		{
		start:new Date(2018, 3, 13),
		allDay:true
		},
		{
		start:new Date(2018, 3, 14),
		allDay:true
		},
		{
		start:new Date(2018, 3, 16),
		allDay:true
		},
		{
		start:new Date(2018, 3, 17),
		allDay:true
		},
		{
		start:new Date(2018, 3, 18),
		allDay:true
		},
		{
		start:new Date(2018, 3, 19),
		allDay:true
		},
		{
		start:new Date(2018, 3, 20),
		allDay:true
		},
		{
		start:new Date(2018, 3, 21),
		allDay:true
		},
		{
		start:new Date(2018, 3, 23),
		allDay:true
		},
		{
		start:new Date(2018, 3, 24),
		allDay:true
		},
		{
		start:new Date(2018, 3, 25),
		allDay:true
		},
		{
		start:new Date(2018, 3, 26),
		allDay:true
		},
		{
		start:new Date(2018, 3, 27),
		allDay:true
		},
		{
		start:new Date(2018, 3, 28),
		allDay:true
		},
		{
		start:new Date(2018, 3, 30),
		allDay:true
		}]]},
		{source:"Cali",
		destination:"Tumaco",
		value:"COP 199900",
		eventSources:[[{
		start:new Date(2018, 3, 6),
		allDay:true
		},
		{
		start:new Date(2018, 3, 7),
		allDay:true
		},
		{
		start:new Date(2018, 3, 8),
		allDay:true
		},
		{
		start:new Date(2018, 3, 9),
		allDay:true
		},
		{
		start:new Date(2018, 3, 10),
		allDay:true
		},
		{
		start:new Date(2018, 3, 11),
		allDay:true
		},
		{
		start:new Date(2018, 3, 12),
		allDay:true
		},
		{
		start:new Date(2018, 3, 13),
		allDay:true
		},
		{
		start:new Date(2018, 3, 14),
		allDay:true
		},
		{
		start:new Date(2018, 3, 15),
		allDay:true
		},
		{
		start:new Date(2018, 3, 16),
		allDay:true
		},
		{
		start:new Date(2018, 3, 17),
		allDay:true
		},
		{
		start:new Date(2018, 3, 18),
		allDay:true
		},
		{
		start:new Date(2018, 3, 19),
		allDay:true
		},
		{
		start:new Date(2018, 3, 20),
		allDay:true
		},
		{
		start:new Date(2018, 3, 21),
		allDay:true
		},
		{
		start:new Date(2018, 3, 22),
		allDay:true
		},
		{
		start:new Date(2018, 3, 23),
		allDay:true
		},
		{
		start:new Date(2018, 3, 24),
		allDay:true
		},
		{
		start:new Date(2018, 3, 25),
		allDay:true
		},
		{
		start:new Date(2018, 3, 26),
		allDay:true
		},
		{
		start:new Date(2018, 3, 29),
		allDay:true
		},
		{
		start:new Date(2018, 3, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 1),
		allDay:true
		},
		{
		start:new Date(2018, 4, 2),
		allDay:true
		},
		{
		start:new Date(2018, 4, 3),
		allDay:true
		},
		{
		start:new Date(2018, 4, 4),
		allDay:true
		},
		{
		start:new Date(2018, 4, 5),
		allDay:true
		},
		{
		start:new Date(2018, 4, 6),
		allDay:true
		},
		{
		start:new Date(2018, 4, 7),
		allDay:true
		},
		{
		start:new Date(2018, 4, 8),
		allDay:true
		},
		{
		start:new Date(2018, 4, 9),
		allDay:true
		},
		{
		start:new Date(2018, 4, 10),
		allDay:true
		},
		{
		start:new Date(2018, 4, 12),
		allDay:true
		},
		{
		start:new Date(2018, 4, 13),
		allDay:true
		},
		{
		start:new Date(2018, 4, 14),
		allDay:true
		},
		{
		start:new Date(2018, 4, 15),
		allDay:true
		},
		{
		start:new Date(2018, 4, 16),
		allDay:true
		},
		{
		start:new Date(2018, 4, 17),
		allDay:true
		},
		{
		start:new Date(2018, 4, 18),
		allDay:true
		},
		{
		start:new Date(2018, 4, 19),
		allDay:true
		},
		{
		start:new Date(2018, 4, 20),
		allDay:true
		},
		{
		start:new Date(2018, 4, 21),
		allDay:true
		},
		{
		start:new Date(2018, 4, 22),
		allDay:true
		},
		{
		start:new Date(2018, 4, 23),
		allDay:true
		},
		{
		start:new Date(2018, 4, 24),
		allDay:true
		},
		{
		start:new Date(2018, 4, 25),
		allDay:true
		},
		{
		start:new Date(2018, 4, 26),
		allDay:true
		},
		{
		start:new Date(2018, 4, 27),
		allDay:true
		},
		{
		start:new Date(2018, 4, 28),
		allDay:true
		},
		{
		start:new Date(2018, 4, 29),
		allDay:true
		},
		{
		start:new Date(2018, 4, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 31),
		allDay:true
		},
		{
		start:new Date(2018, 5, 2),
		allDay:true
		},
		{
		start:new Date(2018, 5, 3),
		allDay:true
		},
		{
		start:new Date(2018, 5, 4),
		allDay:true
		},
		{
		start:new Date(2018, 5, 5),
		allDay:true
		},
		{
		start:new Date(2018, 5, 6),
		allDay:true
		},
		{
		start:new Date(2018, 5, 7),
		allDay:true
		},
		{
		start:new Date(2018, 5, 9),
		allDay:true
		},
		{
		start:new Date(2018, 5, 10),
		allDay:true
		},
		{
		start:new Date(2018, 5, 11),
		allDay:true
		},
		{
		start:new Date(2018, 5, 12),
		allDay:true
		},
		{
		start:new Date(2018, 5, 13),
		allDay:true
		},
		{
		start:new Date(2018, 5, 14),
		allDay:true
		},
		{
		start:new Date(2018, 5, 15),
		allDay:true
		},
		{
		start:new Date(2018, 5, 16),
		allDay:true
		},
		{
		start:new Date(2018, 5, 17),
		allDay:true
		},
		{
		start:new Date(2018, 5, 18),
		allDay:true
		},
		{
		start:new Date(2018, 5, 19),
		allDay:true
		},
		{
		start:new Date(2018, 5, 20),
		allDay:true
		},
		{
		start:new Date(2018, 5, 21),
		allDay:true
		},
		{
		start:new Date(2018, 5, 22),
		allDay:true
		},
		{
		start:new Date(2018, 5, 23),
		allDay:true
		},
		{
		start:new Date(2018, 5, 24),
		allDay:true
		},
		{
		start:new Date(2018, 5, 25),
		allDay:true
		},
		{
		start:new Date(2018, 5, 26),
		allDay:true
		},
		{
		start:new Date(2018, 5, 27),
		allDay:true
		},
		{
		start:new Date(2018, 5, 28),
		allDay:true
		},
		{
		start:new Date(2018, 5, 30),
		allDay:true
		}]]},
		{source:"Cali",
		destination:"Bogotá",
		value:"COP 149900",
		eventSources:[[{
		start:new Date(2018, 3, 6),
		allDay:true
		},
		{
		start:new Date(2018, 3, 7),
		allDay:true
		},
		{
		start:new Date(2018, 3, 8),
		allDay:true
		},
		{
		start:new Date(2018, 3, 9),
		allDay:true
		},
		{
		start:new Date(2018, 3, 10),
		allDay:true
		},
		{
		start:new Date(2018, 3, 12),
		allDay:true
		},
		{
		start:new Date(2018, 3, 13),
		allDay:true
		},
		{
		start:new Date(2018, 3, 14),
		allDay:true
		},
		{
		start:new Date(2018, 3, 16),
		allDay:true
		},
		{
		start:new Date(2018, 3, 17),
		allDay:true
		},
		{
		start:new Date(2018, 3, 18),
		allDay:true
		},
		{
		start:new Date(2018, 3, 19),
		allDay:true
		},
		{
		start:new Date(2018, 3, 20),
		allDay:true
		},
		{
		start:new Date(2018, 3, 21),
		allDay:true
		},
		{
		start:new Date(2018, 3, 22),
		allDay:true
		},
		{
		start:new Date(2018, 3, 23),
		allDay:true
		},
		{
		start:new Date(2018, 3, 25),
		allDay:true
		},
		{
		start:new Date(2018, 3, 26),
		allDay:true
		},
		{
		start:new Date(2018, 3, 27),
		allDay:true
		},
		{
		start:new Date(2018, 4, 3),
		allDay:true
		},
		{
		start:new Date(2018, 4, 4),
		allDay:true
		},
		{
		start:new Date(2018, 4, 5),
		allDay:true
		},
		{
		start:new Date(2018, 4, 6),
		allDay:true
		},
		{
		start:new Date(2018, 4, 7),
		allDay:true
		},
		{
		start:new Date(2018, 4, 8),
		allDay:true
		},
		{
		start:new Date(2018, 4, 9),
		allDay:true
		},
		{
		start:new Date(2018, 4, 10),
		allDay:true
		},
		{
		start:new Date(2018, 4, 11),
		allDay:true
		},
		{
		start:new Date(2018, 4, 16),
		allDay:true
		},
		{
		start:new Date(2018, 4, 17),
		allDay:true
		},
		{
		start:new Date(2018, 4, 18),
		allDay:true
		},
		{
		start:new Date(2018, 4, 19),
		allDay:true
		},
		{
		start:new Date(2018, 4, 20),
		allDay:true
		},
		{
		start:new Date(2018, 4, 21),
		allDay:true
		},
		{
		start:new Date(2018, 4, 22),
		allDay:true
		},
		{
		start:new Date(2018, 4, 23),
		allDay:true
		},
		{
		start:new Date(2018, 4, 24),
		allDay:true
		},
		{
		start:new Date(2018, 4, 25),
		allDay:true
		},
		{
		start:new Date(2018, 4, 26),
		allDay:true
		},
		{
		start:new Date(2018, 4, 27),
		allDay:true
		},
		{
		start:new Date(2018, 4, 28),
		allDay:true
		},
		{
		start:new Date(2018, 4, 29),
		allDay:true
		},
		{
		start:new Date(2018, 4, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 31),
		allDay:true
		},
		{
		start:new Date(2018, 5, 1),
		allDay:true
		},
		{
		start:new Date(2018, 5, 6),
		allDay:true
		},
		{
		start:new Date(2018, 5, 7),
		allDay:true
		},
		{
		start:new Date(2018, 5, 8),
		allDay:true
		},
		{
		start:new Date(2018, 5, 13),
		allDay:true
		},
		{
		start:new Date(2018, 5, 14),
		allDay:true
		},
		{
		start:new Date(2018, 5, 15),
		allDay:true
		},
		{
		start:new Date(2018, 5, 16),
		allDay:true
		},
		{
		start:new Date(2018, 5, 17),
		allDay:true
		},
		{
		start:new Date(2018, 5, 18),
		allDay:true
		},
		{
		start:new Date(2018, 5, 19),
		allDay:true
		},
		{
		start:new Date(2018, 5, 20),
		allDay:true
		},
		{
		start:new Date(2018, 5, 21),
		allDay:true
		},
		{
		start:new Date(2018, 5, 22),
		allDay:true
		},
		{
		start:new Date(2018, 5, 23),
		allDay:true
		},
		{
		start:new Date(2018, 5, 24),
		allDay:true
		},
		{
		start:new Date(2018, 5, 25),
		allDay:true
		},
		{
		start:new Date(2018, 5, 26),
		allDay:true
		},
		{
		start:new Date(2018, 5, 27),
		allDay:true
		},
		{
		start:new Date(2018, 5, 28),
		allDay:true
		},
		{
		start:new Date(2018, 5, 29),
		allDay:true
		}]]},
		{source:"Barranquilla",
		destination:"Bogotá",
		value:"COP 109900",
		eventSources:[[{
		start:new Date(2018, 3, 6),
		allDay:true
		},
		{
		start:new Date(2018, 3, 7),
		allDay:true
		},
		{
		start:new Date(2018, 3, 8),
		allDay:true
		},
		{
		start:new Date(2018, 3, 9),
		allDay:true
		},
		{
		start:new Date(2018, 3, 10),
		allDay:true
		},
		{
		start:new Date(2018, 3, 11),
		allDay:true
		},
		{
		start:new Date(2018, 3, 12),
		allDay:true
		},
		{
		start:new Date(2018, 3, 13),
		allDay:true
		},
		{
		start:new Date(2018, 3, 14),
		allDay:true
		},
		{
		start:new Date(2018, 3, 15),
		allDay:true
		},
		{
		start:new Date(2018, 3, 16),
		allDay:true
		},
		{
		start:new Date(2018, 3, 17),
		allDay:true
		},
		{
		start:new Date(2018, 3, 18),
		allDay:true
		},
		{
		start:new Date(2018, 3, 19),
		allDay:true
		},
		{
		start:new Date(2018, 3, 20),
		allDay:true
		},
		{
		start:new Date(2018, 3, 21),
		allDay:true
		},
		{
		start:new Date(2018, 3, 22),
		allDay:true
		},
		{
		start:new Date(2018, 3, 23),
		allDay:true
		},
		{
		start:new Date(2018, 3, 24),
		allDay:true
		},
		{
		start:new Date(2018, 3, 25),
		allDay:true
		},
		{
		start:new Date(2018, 3, 26),
		allDay:true
		},
		{
		start:new Date(2018, 3, 27),
		allDay:true
		},
		{
		start:new Date(2018, 3, 28),
		allDay:true
		},
		{
		start:new Date(2018, 3, 29),
		allDay:true
		},
		{
		start:new Date(2018, 3, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 3),
		allDay:true
		},
		{
		start:new Date(2018, 4, 4),
		allDay:true
		},
		{
		start:new Date(2018, 4, 5),
		allDay:true
		},
		{
		start:new Date(2018, 4, 6),
		allDay:true
		},
		{
		start:new Date(2018, 4, 7),
		allDay:true
		},
		{
		start:new Date(2018, 4, 8),
		allDay:true
		},
		{
		start:new Date(2018, 4, 9),
		allDay:true
		},
		{
		start:new Date(2018, 4, 10),
		allDay:true
		},
		{
		start:new Date(2018, 4, 11),
		allDay:true
		},
		{
		start:new Date(2018, 4, 12),
		allDay:true
		},
		{
		start:new Date(2018, 4, 13),
		allDay:true
		},
		{
		start:new Date(2018, 4, 16),
		allDay:true
		},
		{
		start:new Date(2018, 4, 17),
		allDay:true
		},
		{
		start:new Date(2018, 4, 18),
		allDay:true
		},
		{
		start:new Date(2018, 4, 19),
		allDay:true
		},
		{
		start:new Date(2018, 4, 20),
		allDay:true
		},
		{
		start:new Date(2018, 4, 21),
		allDay:true
		},
		{
		start:new Date(2018, 4, 22),
		allDay:true
		},
		{
		start:new Date(2018, 4, 23),
		allDay:true
		},
		{
		start:new Date(2018, 4, 24),
		allDay:true
		},
		{
		start:new Date(2018, 4, 25),
		allDay:true
		},
		{
		start:new Date(2018, 4, 26),
		allDay:true
		},
		{
		start:new Date(2018, 4, 27),
		allDay:true
		},
		{
		start:new Date(2018, 4, 28),
		allDay:true
		},
		{
		start:new Date(2018, 4, 29),
		allDay:true
		},
		{
		start:new Date(2018, 4, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 31),
		allDay:true
		},
		{
		start:new Date(2018, 5, 1),
		allDay:true
		},
		{
		start:new Date(2018, 5, 2),
		allDay:true
		},
		{
		start:new Date(2018, 5, 3),
		allDay:true
		},
		{
		start:new Date(2018, 5, 6),
		allDay:true
		},
		{
		start:new Date(2018, 5, 7),
		allDay:true
		},
		{
		start:new Date(2018, 5, 8),
		allDay:true
		},
		{
		start:new Date(2018, 5, 9),
		allDay:true
		},
		{
		start:new Date(2018, 5, 10),
		allDay:true
		},
		{
		start:new Date(2018, 5, 13),
		allDay:true
		},
		{
		start:new Date(2018, 5, 14),
		allDay:true
		},
		{
		start:new Date(2018, 5, 15),
		allDay:true
		},
		{
		start:new Date(2018, 5, 16),
		allDay:true
		},
		{
		start:new Date(2018, 5, 17),
		allDay:true
		},
		{
		start:new Date(2018, 5, 18),
		allDay:true
		},
		{
		start:new Date(2018, 5, 19),
		allDay:true
		},
		{
		start:new Date(2018, 5, 20),
		allDay:true
		},
		{
		start:new Date(2018, 5, 21),
		allDay:true
		},
		{
		start:new Date(2018, 5, 22),
		allDay:true
		},
		{
		start:new Date(2018, 5, 23),
		allDay:true
		},
		{
		start:new Date(2018, 5, 24),
		allDay:true
		},
		{
		start:new Date(2018, 5, 25),
		allDay:true
		},
		{
		start:new Date(2018, 5, 26),
		allDay:true
		},
		{
		start:new Date(2018, 5, 27),
		allDay:true
		},
		{
		start:new Date(2018, 5, 28),
		allDay:true
		},
		{
		start:new Date(2018, 5, 29),
		allDay:true
		},
		{
		start:new Date(2018, 5, 30),
		allDay:true
		}]]},
		{source:"Bogotá",
		destination:"Cartagena",
		value:"COP 109900",
		eventSources:[[{
		start:new Date(2018, 3, 6),
		allDay:true
		},
		{
		start:new Date(2018, 3, 7),
		allDay:true
		},
		{
		start:new Date(2018, 3, 8),
		allDay:true
		},
		{
		start:new Date(2018, 3, 9),
		allDay:true
		},
		{
		start:new Date(2018, 3, 10),
		allDay:true
		},
		{
		start:new Date(2018, 3, 11),
		allDay:true
		},
		{
		start:new Date(2018, 3, 12),
		allDay:true
		},
		{
		start:new Date(2018, 3, 13),
		allDay:true
		},
		{
		start:new Date(2018, 3, 14),
		allDay:true
		},
		{
		start:new Date(2018, 3, 15),
		allDay:true
		},
		{
		start:new Date(2018, 3, 16),
		allDay:true
		},
		{
		start:new Date(2018, 3, 17),
		allDay:true
		},
		{
		start:new Date(2018, 3, 18),
		allDay:true
		},
		{
		start:new Date(2018, 3, 19),
		allDay:true
		},
		{
		start:new Date(2018, 3, 20),
		allDay:true
		},
		{
		start:new Date(2018, 3, 21),
		allDay:true
		},
		{
		start:new Date(2018, 3, 22),
		allDay:true
		},
		{
		start:new Date(2018, 3, 23),
		allDay:true
		},
		{
		start:new Date(2018, 3, 24),
		allDay:true
		},
		{
		start:new Date(2018, 3, 25),
		allDay:true
		},
		{
		start:new Date(2018, 3, 26),
		allDay:true
		},
		{
		start:new Date(2018, 3, 28),
		allDay:true
		},
		{
		start:new Date(2018, 3, 29),
		allDay:true
		},
		{
		start:new Date(2018, 3, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 1),
		allDay:true
		},
		{
		start:new Date(2018, 4, 2),
		allDay:true
		},
		{
		start:new Date(2018, 4, 3),
		allDay:true
		},
		{
		start:new Date(2018, 4, 5),
		allDay:true
		},
		{
		start:new Date(2018, 4, 6),
		allDay:true
		},
		{
		start:new Date(2018, 4, 7),
		allDay:true
		},
		{
		start:new Date(2018, 4, 8),
		allDay:true
		},
		{
		start:new Date(2018, 4, 9),
		allDay:true
		},
		{
		start:new Date(2018, 4, 10),
		allDay:true
		},
		{
		start:new Date(2018, 4, 12),
		allDay:true
		},
		{
		start:new Date(2018, 4, 13),
		allDay:true
		},
		{
		start:new Date(2018, 4, 14),
		allDay:true
		},
		{
		start:new Date(2018, 4, 15),
		allDay:true
		},
		{
		start:new Date(2018, 4, 16),
		allDay:true
		},
		{
		start:new Date(2018, 4, 17),
		allDay:true
		},
		{
		start:new Date(2018, 4, 19),
		allDay:true
		},
		{
		start:new Date(2018, 4, 20),
		allDay:true
		},
		{
		start:new Date(2018, 4, 21),
		allDay:true
		},
		{
		start:new Date(2018, 4, 22),
		allDay:true
		},
		{
		start:new Date(2018, 4, 23),
		allDay:true
		},
		{
		start:new Date(2018, 4, 24),
		allDay:true
		},
		{
		start:new Date(2018, 4, 26),
		allDay:true
		},
		{
		start:new Date(2018, 4, 27),
		allDay:true
		},
		{
		start:new Date(2018, 4, 28),
		allDay:true
		},
		{
		start:new Date(2018, 4, 29),
		allDay:true
		},
		{
		start:new Date(2018, 4, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 31),
		allDay:true
		},
		{
		start:new Date(2018, 5, 2),
		allDay:true
		},
		{
		start:new Date(2018, 5, 3),
		allDay:true
		},
		{
		start:new Date(2018, 5, 4),
		allDay:true
		},
		{
		start:new Date(2018, 5, 5),
		allDay:true
		},
		{
		start:new Date(2018, 5, 6),
		allDay:true
		},
		{
		start:new Date(2018, 5, 7),
		allDay:true
		},
		{
		start:new Date(2018, 5, 9),
		allDay:true
		},
		{
		start:new Date(2018, 5, 10),
		allDay:true
		},
		{
		start:new Date(2018, 5, 11),
		allDay:true
		},
		{
		start:new Date(2018, 5, 12),
		allDay:true
		},
		{
		start:new Date(2018, 5, 13),
		allDay:true
		},
		{
		start:new Date(2018, 5, 14),
		allDay:true
		},
		{
		start:new Date(2018, 5, 16),
		allDay:true
		},
		{
		start:new Date(2018, 5, 17),
		allDay:true
		},
		{
		start:new Date(2018, 5, 18),
		allDay:true
		},
		{
		start:new Date(2018, 5, 19),
		allDay:true
		},
		{
		start:new Date(2018, 5, 20),
		allDay:true
		},
		{
		start:new Date(2018, 5, 21),
		allDay:true
		},
		{
		start:new Date(2018, 5, 23),
		allDay:true
		},
		{
		start:new Date(2018, 5, 24),
		allDay:true
		},
		{
		start:new Date(2018, 5, 25),
		allDay:true
		},
		{
		start:new Date(2018, 5, 26),
		allDay:true
		},
		{
		start:new Date(2018, 5, 27),
		allDay:true
		},
		{
		start:new Date(2018, 5, 28),
		allDay:true
		},
		{
		start:new Date(2018, 5, 30),
		allDay:true
		}]]},
		{source:"Cúcuta",
		destination:"Bogotá",
		value:"COP 129900",
		eventSources:[[{
		start:new Date(2018, 3, 6),
		allDay:true
		},
		{
		start:new Date(2018, 3, 7),
		allDay:true
		},
		{
		start:new Date(2018, 3, 8),
		allDay:true
		},
		{
		start:new Date(2018, 3, 9),
		allDay:true
		},
		{
		start:new Date(2018, 3, 10),
		allDay:true
		},
		{
		start:new Date(2018, 3, 11),
		allDay:true
		},
		{
		start:new Date(2018, 3, 12),
		allDay:true
		},
		{
		start:new Date(2018, 3, 13),
		allDay:true
		},
		{
		start:new Date(2018, 3, 14),
		allDay:true
		},
		{
		start:new Date(2018, 3, 15),
		allDay:true
		},
		{
		start:new Date(2018, 3, 16),
		allDay:true
		},
		{
		start:new Date(2018, 3, 17),
		allDay:true
		},
		{
		start:new Date(2018, 3, 18),
		allDay:true
		},
		{
		start:new Date(2018, 3, 19),
		allDay:true
		},
		{
		start:new Date(2018, 3, 20),
		allDay:true
		},
		{
		start:new Date(2018, 3, 21),
		allDay:true
		},
		{
		start:new Date(2018, 3, 22),
		allDay:true
		},
		{
		start:new Date(2018, 3, 23),
		allDay:true
		},
		{
		start:new Date(2018, 3, 24),
		allDay:true
		},
		{
		start:new Date(2018, 3, 25),
		allDay:true
		},
		{
		start:new Date(2018, 3, 26),
		allDay:true
		},
		{
		start:new Date(2018, 3, 27),
		allDay:true
		},
		{
		start:new Date(2018, 3, 28),
		allDay:true
		},
		{
		start:new Date(2018, 3, 29),
		allDay:true
		},
		{
		start:new Date(2018, 3, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 3),
		allDay:true
		},
		{
		start:new Date(2018, 4, 4),
		allDay:true
		},
		{
		start:new Date(2018, 4, 5),
		allDay:true
		},
		{
		start:new Date(2018, 4, 6),
		allDay:true
		},
		{
		start:new Date(2018, 4, 7),
		allDay:true
		},
		{
		start:new Date(2018, 4, 8),
		allDay:true
		},
		{
		start:new Date(2018, 4, 10),
		allDay:true
		},
		{
		start:new Date(2018, 4, 11),
		allDay:true
		},
		{
		start:new Date(2018, 4, 12),
		allDay:true
		},
		{
		start:new Date(2018, 4, 13),
		allDay:true
		},
		{
		start:new Date(2018, 4, 17),
		allDay:true
		},
		{
		start:new Date(2018, 4, 18),
		allDay:true
		},
		{
		start:new Date(2018, 4, 19),
		allDay:true
		},
		{
		start:new Date(2018, 4, 20),
		allDay:true
		},
		{
		start:new Date(2018, 4, 21),
		allDay:true
		},
		{
		start:new Date(2018, 4, 22),
		allDay:true
		},
		{
		start:new Date(2018, 4, 24),
		allDay:true
		},
		{
		start:new Date(2018, 4, 25),
		allDay:true
		},
		{
		start:new Date(2018, 4, 26),
		allDay:true
		},
		{
		start:new Date(2018, 4, 27),
		allDay:true
		},
		{
		start:new Date(2018, 4, 28),
		allDay:true
		},
		{
		start:new Date(2018, 4, 29),
		allDay:true
		},
		{
		start:new Date(2018, 4, 31),
		allDay:true
		},
		{
		start:new Date(2018, 5, 1),
		allDay:true
		},
		{
		start:new Date(2018, 5, 2),
		allDay:true
		},
		{
		start:new Date(2018, 5, 6),
		allDay:true
		},
		{
		start:new Date(2018, 5, 7),
		allDay:true
		},
		{
		start:new Date(2018, 5, 8),
		allDay:true
		},
		{
		start:new Date(2018, 5, 9),
		allDay:true
		},
		{
		start:new Date(2018, 5, 10),
		allDay:true
		},
		{
		start:new Date(2018, 5, 13),
		allDay:true
		},
		{
		start:new Date(2018, 5, 14),
		allDay:true
		},
		{
		start:new Date(2018, 5, 15),
		allDay:true
		},
		{
		start:new Date(2018, 5, 16),
		allDay:true
		},
		{
		start:new Date(2018, 5, 17),
		allDay:true
		},
		{
		start:new Date(2018, 5, 18),
		allDay:true
		},
		{
		start:new Date(2018, 5, 19),
		allDay:true
		},
		{
		start:new Date(2018, 5, 20),
		allDay:true
		},
		{
		start:new Date(2018, 5, 21),
		allDay:true
		},
		{
		start:new Date(2018, 5, 22),
		allDay:true
		},
		{
		start:new Date(2018, 5, 23),
		allDay:true
		},
		{
		start:new Date(2018, 5, 24),
		allDay:true
		},
		{
		start:new Date(2018, 5, 25),
		allDay:true
		},
		{
		start:new Date(2018, 5, 26),
		allDay:true
		},
		{
		start:new Date(2018, 5, 27),
		allDay:true
		},
		{
		start:new Date(2018, 5, 28),
		allDay:true
		},
		{
		start:new Date(2018, 5, 30),
		allDay:true
		}]]},
		{source:"Bogotá",
		destination:"Barranquilla",
		value:"COP 109900",
		eventSources:[[{
		start:new Date(2018, 3, 6),
		allDay:true
		},
		{
		start:new Date(2018, 3, 7),
		allDay:true
		},
		{
		start:new Date(2018, 3, 8),
		allDay:true
		},
		{
		start:new Date(2018, 3, 9),
		allDay:true
		},
		{
		start:new Date(2018, 3, 10),
		allDay:true
		},
		{
		start:new Date(2018, 3, 11),
		allDay:true
		},
		{
		start:new Date(2018, 3, 12),
		allDay:true
		},
		{
		start:new Date(2018, 3, 13),
		allDay:true
		},
		{
		start:new Date(2018, 3, 14),
		allDay:true
		},
		{
		start:new Date(2018, 3, 15),
		allDay:true
		},
		{
		start:new Date(2018, 3, 16),
		allDay:true
		},
		{
		start:new Date(2018, 3, 17),
		allDay:true
		},
		{
		start:new Date(2018, 3, 18),
		allDay:true
		},
		{
		start:new Date(2018, 3, 19),
		allDay:true
		},
		{
		start:new Date(2018, 3, 20),
		allDay:true
		},
		{
		start:new Date(2018, 3, 21),
		allDay:true
		},
		{
		start:new Date(2018, 3, 22),
		allDay:true
		},
		{
		start:new Date(2018, 3, 23),
		allDay:true
		},
		{
		start:new Date(2018, 3, 24),
		allDay:true
		},
		{
		start:new Date(2018, 3, 25),
		allDay:true
		},
		{
		start:new Date(2018, 3, 28),
		allDay:true
		},
		{
		start:new Date(2018, 3, 29),
		allDay:true
		},
		{
		start:new Date(2018, 3, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 1),
		allDay:true
		},
		{
		start:new Date(2018, 4, 2),
		allDay:true
		},
		{
		start:new Date(2018, 4, 3),
		allDay:true
		},
		{
		start:new Date(2018, 4, 4),
		allDay:true
		},
		{
		start:new Date(2018, 4, 5),
		allDay:true
		},
		{
		start:new Date(2018, 4, 6),
		allDay:true
		},
		{
		start:new Date(2018, 4, 7),
		allDay:true
		},
		{
		start:new Date(2018, 4, 8),
		allDay:true
		},
		{
		start:new Date(2018, 4, 9),
		allDay:true
		},
		{
		start:new Date(2018, 4, 10),
		allDay:true
		},
		{
		start:new Date(2018, 4, 12),
		allDay:true
		},
		{
		start:new Date(2018, 4, 13),
		allDay:true
		},
		{
		start:new Date(2018, 4, 14),
		allDay:true
		},
		{
		start:new Date(2018, 4, 15),
		allDay:true
		},
		{
		start:new Date(2018, 4, 16),
		allDay:true
		},
		{
		start:new Date(2018, 4, 17),
		allDay:true
		},
		{
		start:new Date(2018, 4, 18),
		allDay:true
		},
		{
		start:new Date(2018, 4, 19),
		allDay:true
		},
		{
		start:new Date(2018, 4, 20),
		allDay:true
		},
		{
		start:new Date(2018, 4, 21),
		allDay:true
		},
		{
		start:new Date(2018, 4, 22),
		allDay:true
		},
		{
		start:new Date(2018, 4, 23),
		allDay:true
		},
		{
		start:new Date(2018, 4, 24),
		allDay:true
		},
		{
		start:new Date(2018, 4, 25),
		allDay:true
		},
		{
		start:new Date(2018, 4, 26),
		allDay:true
		},
		{
		start:new Date(2018, 4, 27),
		allDay:true
		},
		{
		start:new Date(2018, 4, 28),
		allDay:true
		},
		{
		start:new Date(2018, 4, 29),
		allDay:true
		},
		{
		start:new Date(2018, 4, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 31),
		allDay:true
		},
		{
		start:new Date(2018, 5, 2),
		allDay:true
		},
		{
		start:new Date(2018, 5, 3),
		allDay:true
		},
		{
		start:new Date(2018, 5, 4),
		allDay:true
		},
		{
		start:new Date(2018, 5, 5),
		allDay:true
		},
		{
		start:new Date(2018, 5, 6),
		allDay:true
		},
		{
		start:new Date(2018, 5, 7),
		allDay:true
		},
		{
		start:new Date(2018, 5, 9),
		allDay:true
		},
		{
		start:new Date(2018, 5, 10),
		allDay:true
		},
		{
		start:new Date(2018, 5, 11),
		allDay:true
		},
		{
		start:new Date(2018, 5, 12),
		allDay:true
		},
		{
		start:new Date(2018, 5, 13),
		allDay:true
		},
		{
		start:new Date(2018, 5, 14),
		allDay:true
		},
		{
		start:new Date(2018, 5, 15),
		allDay:true
		},
		{
		start:new Date(2018, 5, 16),
		allDay:true
		},
		{
		start:new Date(2018, 5, 17),
		allDay:true
		},
		{
		start:new Date(2018, 5, 18),
		allDay:true
		},
		{
		start:new Date(2018, 5, 19),
		allDay:true
		},
		{
		start:new Date(2018, 5, 20),
		allDay:true
		},
		{
		start:new Date(2018, 5, 21),
		allDay:true
		},
		{
		start:new Date(2018, 5, 22),
		allDay:true
		},
		{
		start:new Date(2018, 5, 23),
		allDay:true
		},
		{
		start:new Date(2018, 5, 24),
		allDay:true
		},
		{
		start:new Date(2018, 5, 25),
		allDay:true
		},
		{
		start:new Date(2018, 5, 26),
		allDay:true
		},
		{
		start:new Date(2018, 5, 27),
		allDay:true
		},
		{
		start:new Date(2018, 5, 28),
		allDay:true
		},
		{
		start:new Date(2018, 5, 30),
		allDay:true
		}]]},
		{source:"Medellín",
		destination:"Bogotá",
		value:"COP 109900",
		eventSources:[[{
		start:new Date(2018, 3, 6),
		allDay:true
		},
		{
		start:new Date(2018, 3, 7),
		allDay:true
		},
		{
		start:new Date(2018, 3, 8),
		allDay:true
		},
		{
		start:new Date(2018, 3, 9),
		allDay:true
		},
		{
		start:new Date(2018, 3, 10),
		allDay:true
		},
		{
		start:new Date(2018, 3, 11),
		allDay:true
		},
		{
		start:new Date(2018, 3, 12),
		allDay:true
		},
		{
		start:new Date(2018, 3, 13),
		allDay:true
		},
		{
		start:new Date(2018, 3, 14),
		allDay:true
		},
		{
		start:new Date(2018, 3, 15),
		allDay:true
		},
		{
		start:new Date(2018, 3, 16),
		allDay:true
		},
		{
		start:new Date(2018, 3, 17),
		allDay:true
		},
		{
		start:new Date(2018, 3, 18),
		allDay:true
		},
		{
		start:new Date(2018, 3, 19),
		allDay:true
		},
		{
		start:new Date(2018, 3, 20),
		allDay:true
		},
		{
		start:new Date(2018, 3, 21),
		allDay:true
		},
		{
		start:new Date(2018, 3, 22),
		allDay:true
		},
		{
		start:new Date(2018, 3, 23),
		allDay:true
		},
		{
		start:new Date(2018, 3, 24),
		allDay:true
		},
		{
		start:new Date(2018, 3, 25),
		allDay:true
		},
		{
		start:new Date(2018, 3, 26),
		allDay:true
		},
		{
		start:new Date(2018, 3, 27),
		allDay:true
		},
		{
		start:new Date(2018, 3, 28),
		allDay:true
		},
		{
		start:new Date(2018, 3, 29),
		allDay:true
		},
		{
		start:new Date(2018, 4, 2),
		allDay:true
		},
		{
		start:new Date(2018, 4, 3),
		allDay:true
		},
		{
		start:new Date(2018, 4, 4),
		allDay:true
		},
		{
		start:new Date(2018, 4, 5),
		allDay:true
		},
		{
		start:new Date(2018, 4, 6),
		allDay:true
		},
		{
		start:new Date(2018, 4, 7),
		allDay:true
		},
		{
		start:new Date(2018, 4, 8),
		allDay:true
		},
		{
		start:new Date(2018, 4, 9),
		allDay:true
		},
		{
		start:new Date(2018, 4, 10),
		allDay:true
		},
		{
		start:new Date(2018, 4, 11),
		allDay:true
		},
		{
		start:new Date(2018, 4, 12),
		allDay:true
		},
		{
		start:new Date(2018, 4, 13),
		allDay:true
		},
		{
		start:new Date(2018, 4, 15),
		allDay:true
		},
		{
		start:new Date(2018, 4, 16),
		allDay:true
		},
		{
		start:new Date(2018, 4, 17),
		allDay:true
		},
		{
		start:new Date(2018, 4, 18),
		allDay:true
		},
		{
		start:new Date(2018, 4, 19),
		allDay:true
		},
		{
		start:new Date(2018, 4, 20),
		allDay:true
		},
		{
		start:new Date(2018, 4, 21),
		allDay:true
		},
		{
		start:new Date(2018, 4, 22),
		allDay:true
		},
		{
		start:new Date(2018, 4, 23),
		allDay:true
		},
		{
		start:new Date(2018, 4, 24),
		allDay:true
		},
		{
		start:new Date(2018, 4, 25),
		allDay:true
		},
		{
		start:new Date(2018, 4, 26),
		allDay:true
		},
		{
		start:new Date(2018, 4, 27),
		allDay:true
		},
		{
		start:new Date(2018, 4, 28),
		allDay:true
		},
		{
		start:new Date(2018, 4, 29),
		allDay:true
		},
		{
		start:new Date(2018, 4, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 31),
		allDay:true
		},
		{
		start:new Date(2018, 5, 1),
		allDay:true
		},
		{
		start:new Date(2018, 5, 2),
		allDay:true
		},
		{
		start:new Date(2018, 5, 3),
		allDay:true
		},
		{
		start:new Date(2018, 5, 5),
		allDay:true
		},
		{
		start:new Date(2018, 5, 6),
		allDay:true
		},
		{
		start:new Date(2018, 5, 7),
		allDay:true
		},
		{
		start:new Date(2018, 5, 8),
		allDay:true
		},
		{
		start:new Date(2018, 5, 9),
		allDay:true
		},
		{
		start:new Date(2018, 5, 10),
		allDay:true
		},
		{
		start:new Date(2018, 5, 12),
		allDay:true
		},
		{
		start:new Date(2018, 5, 13),
		allDay:true
		},
		{
		start:new Date(2018, 5, 14),
		allDay:true
		},
		{
		start:new Date(2018, 5, 15),
		allDay:true
		},
		{
		start:new Date(2018, 5, 16),
		allDay:true
		},
		{
		start:new Date(2018, 5, 17),
		allDay:true
		},
		{
		start:new Date(2018, 5, 18),
		allDay:true
		},
		{
		start:new Date(2018, 5, 19),
		allDay:true
		},
		{
		start:new Date(2018, 5, 20),
		allDay:true
		},
		{
		start:new Date(2018, 5, 21),
		allDay:true
		},
		{
		start:new Date(2018, 5, 22),
		allDay:true
		},
		{
		start:new Date(2018, 5, 23),
		allDay:true
		},
		{
		start:new Date(2018, 5, 24),
		allDay:true
		},
		{
		start:new Date(2018, 5, 25),
		allDay:true
		},
		{
		start:new Date(2018, 5, 26),
		allDay:true
		},
		{
		start:new Date(2018, 5, 27),
		allDay:true
		},
		{
		start:new Date(2018, 5, 28),
		allDay:true
		},
		{
		start:new Date(2018, 5, 29),
		allDay:true
		},
		{
		start:new Date(2018, 5, 30),
		allDay:true
		}]]},
		{source:"Bucaramanga",
		destination:"Bogotá",
		value:"COP 139900",
		eventSources:[[{
		start:new Date(2018, 3, 6),
		allDay:true
		},
		{
		start:new Date(2018, 3, 7),
		allDay:true
		},
		{
		start:new Date(2018, 3, 8),
		allDay:true
		},
		{
		start:new Date(2018, 3, 9),
		allDay:true
		},
		{
		start:new Date(2018, 3, 10),
		allDay:true
		},
		{
		start:new Date(2018, 3, 11),
		allDay:true
		},
		{
		start:new Date(2018, 3, 12),
		allDay:true
		},
		{
		start:new Date(2018, 3, 13),
		allDay:true
		},
		{
		start:new Date(2018, 3, 14),
		allDay:true
		},
		{
		start:new Date(2018, 3, 15),
		allDay:true
		},
		{
		start:new Date(2018, 3, 16),
		allDay:true
		},
		{
		start:new Date(2018, 3, 17),
		allDay:true
		},
		{
		start:new Date(2018, 3, 18),
		allDay:true
		},
		{
		start:new Date(2018, 3, 19),
		allDay:true
		},
		{
		start:new Date(2018, 3, 20),
		allDay:true
		},
		{
		start:new Date(2018, 3, 21),
		allDay:true
		},
		{
		start:new Date(2018, 3, 22),
		allDay:true
		},
		{
		start:new Date(2018, 3, 23),
		allDay:true
		},
		{
		start:new Date(2018, 3, 24),
		allDay:true
		},
		{
		start:new Date(2018, 3, 25),
		allDay:true
		},
		{
		start:new Date(2018, 3, 26),
		allDay:true
		},
		{
		start:new Date(2018, 3, 27),
		allDay:true
		},
		{
		start:new Date(2018, 3, 28),
		allDay:true
		},
		{
		start:new Date(2018, 3, 29),
		allDay:true
		},
		{
		start:new Date(2018, 3, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 2),
		allDay:true
		},
		{
		start:new Date(2018, 4, 3),
		allDay:true
		},
		{
		start:new Date(2018, 4, 4),
		allDay:true
		},
		{
		start:new Date(2018, 4, 5),
		allDay:true
		},
		{
		start:new Date(2018, 4, 6),
		allDay:true
		},
		{
		start:new Date(2018, 4, 7),
		allDay:true
		},
		{
		start:new Date(2018, 4, 8),
		allDay:true
		},
		{
		start:new Date(2018, 4, 9),
		allDay:true
		},
		{
		start:new Date(2018, 4, 10),
		allDay:true
		},
		{
		start:new Date(2018, 4, 11),
		allDay:true
		},
		{
		start:new Date(2018, 4, 12),
		allDay:true
		},
		{
		start:new Date(2018, 4, 13),
		allDay:true
		},
		{
		start:new Date(2018, 4, 16),
		allDay:true
		},
		{
		start:new Date(2018, 4, 17),
		allDay:true
		},
		{
		start:new Date(2018, 4, 18),
		allDay:true
		},
		{
		start:new Date(2018, 4, 19),
		allDay:true
		},
		{
		start:new Date(2018, 4, 20),
		allDay:true
		},
		{
		start:new Date(2018, 4, 21),
		allDay:true
		},
		{
		start:new Date(2018, 4, 22),
		allDay:true
		},
		{
		start:new Date(2018, 4, 23),
		allDay:true
		},
		{
		start:new Date(2018, 4, 24),
		allDay:true
		},
		{
		start:new Date(2018, 4, 25),
		allDay:true
		},
		{
		start:new Date(2018, 4, 26),
		allDay:true
		},
		{
		start:new Date(2018, 4, 27),
		allDay:true
		},
		{
		start:new Date(2018, 4, 28),
		allDay:true
		},
		{
		start:new Date(2018, 4, 29),
		allDay:true
		},
		{
		start:new Date(2018, 4, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 31),
		allDay:true
		},
		{
		start:new Date(2018, 5, 1),
		allDay:true
		},
		{
		start:new Date(2018, 5, 2),
		allDay:true
		},
		{
		start:new Date(2018, 5, 3),
		allDay:true
		},
		{
		start:new Date(2018, 5, 5),
		allDay:true
		},
		{
		start:new Date(2018, 5, 6),
		allDay:true
		},
		{
		start:new Date(2018, 5, 7),
		allDay:true
		},
		{
		start:new Date(2018, 5, 8),
		allDay:true
		},
		{
		start:new Date(2018, 5, 9),
		allDay:true
		},
		{
		start:new Date(2018, 5, 10),
		allDay:true
		},
		{
		start:new Date(2018, 5, 12),
		allDay:true
		},
		{
		start:new Date(2018, 5, 13),
		allDay:true
		},
		{
		start:new Date(2018, 5, 14),
		allDay:true
		},
		{
		start:new Date(2018, 5, 15),
		allDay:true
		},
		{
		start:new Date(2018, 5, 16),
		allDay:true
		},
		{
		start:new Date(2018, 5, 17),
		allDay:true
		},
		{
		start:new Date(2018, 5, 18),
		allDay:true
		},
		{
		start:new Date(2018, 5, 19),
		allDay:true
		},
		{
		start:new Date(2018, 5, 20),
		allDay:true
		},
		{
		start:new Date(2018, 5, 21),
		allDay:true
		},
		{
		start:new Date(2018, 5, 22),
		allDay:true
		},
		{
		start:new Date(2018, 5, 23),
		allDay:true
		},
		{
		start:new Date(2018, 5, 24),
		allDay:true
		},
		{
		start:new Date(2018, 5, 25),
		allDay:true
		},
		{
		start:new Date(2018, 5, 26),
		allDay:true
		},
		{
		start:new Date(2018, 5, 27),
		allDay:true
		},
		{
		start:new Date(2018, 5, 28),
		allDay:true
		},
		{
		start:new Date(2018, 5, 29),
		allDay:true
		},
		{
		start:new Date(2018, 5, 30),
		allDay:true
		}]]},
		{source:"Cartagena",
		destination:"Bogotá",
		value:"COP 109900",
		eventSources:[[{
		start:new Date(2018, 3, 6),
		allDay:true
		},
		{
		start:new Date(2018, 3, 7),
		allDay:true
		},
		{
		start:new Date(2018, 3, 8),
		allDay:true
		},
		{
		start:new Date(2018, 3, 9),
		allDay:true
		},
		{
		start:new Date(2018, 3, 10),
		allDay:true
		},
		{
		start:new Date(2018, 3, 11),
		allDay:true
		},
		{
		start:new Date(2018, 3, 12),
		allDay:true
		},
		{
		start:new Date(2018, 3, 13),
		allDay:true
		},
		{
		start:new Date(2018, 3, 14),
		allDay:true
		},
		{
		start:new Date(2018, 3, 15),
		allDay:true
		},
		{
		start:new Date(2018, 3, 16),
		allDay:true
		},
		{
		start:new Date(2018, 3, 17),
		allDay:true
		},
		{
		start:new Date(2018, 3, 18),
		allDay:true
		},
		{
		start:new Date(2018, 3, 19),
		allDay:true
		},
		{
		start:new Date(2018, 3, 20),
		allDay:true
		},
		{
		start:new Date(2018, 3, 21),
		allDay:true
		},
		{
		start:new Date(2018, 3, 22),
		allDay:true
		},
		{
		start:new Date(2018, 3, 23),
		allDay:true
		},
		{
		start:new Date(2018, 3, 24),
		allDay:true
		},
		{
		start:new Date(2018, 3, 25),
		allDay:true
		},
		{
		start:new Date(2018, 3, 26),
		allDay:true
		},
		{
		start:new Date(2018, 3, 27),
		allDay:true
		},
		{
		start:new Date(2018, 3, 28),
		allDay:true
		},
		{
		start:new Date(2018, 3, 29),
		allDay:true
		},
		{
		start:new Date(2018, 3, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 3),
		allDay:true
		},
		{
		start:new Date(2018, 4, 4),
		allDay:true
		},
		{
		start:new Date(2018, 4, 5),
		allDay:true
		},
		{
		start:new Date(2018, 4, 7),
		allDay:true
		},
		{
		start:new Date(2018, 4, 8),
		allDay:true
		},
		{
		start:new Date(2018, 4, 9),
		allDay:true
		},
		{
		start:new Date(2018, 4, 10),
		allDay:true
		},
		{
		start:new Date(2018, 4, 11),
		allDay:true
		},
		{
		start:new Date(2018, 4, 12),
		allDay:true
		},
		{
		start:new Date(2018, 4, 13),
		allDay:true
		},
		{
		start:new Date(2018, 4, 16),
		allDay:true
		},
		{
		start:new Date(2018, 4, 17),
		allDay:true
		},
		{
		start:new Date(2018, 4, 18),
		allDay:true
		},
		{
		start:new Date(2018, 4, 19),
		allDay:true
		},
		{
		start:new Date(2018, 4, 20),
		allDay:true
		},
		{
		start:new Date(2018, 4, 21),
		allDay:true
		},
		{
		start:new Date(2018, 4, 22),
		allDay:true
		},
		{
		start:new Date(2018, 4, 23),
		allDay:true
		},
		{
		start:new Date(2018, 4, 24),
		allDay:true
		},
		{
		start:new Date(2018, 4, 25),
		allDay:true
		},
		{
		start:new Date(2018, 4, 26),
		allDay:true
		},
		{
		start:new Date(2018, 4, 27),
		allDay:true
		},
		{
		start:new Date(2018, 4, 28),
		allDay:true
		},
		{
		start:new Date(2018, 4, 29),
		allDay:true
		},
		{
		start:new Date(2018, 4, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 31),
		allDay:true
		},
		{
		start:new Date(2018, 5, 1),
		allDay:true
		},
		{
		start:new Date(2018, 5, 2),
		allDay:true
		},
		{
		start:new Date(2018, 5, 3),
		allDay:true
		},
		{
		start:new Date(2018, 5, 6),
		allDay:true
		},
		{
		start:new Date(2018, 5, 7),
		allDay:true
		},
		{
		start:new Date(2018, 5, 8),
		allDay:true
		},
		{
		start:new Date(2018, 5, 9),
		allDay:true
		},
		{
		start:new Date(2018, 5, 13),
		allDay:true
		},
		{
		start:new Date(2018, 5, 14),
		allDay:true
		},
		{
		start:new Date(2018, 5, 15),
		allDay:true
		},
		{
		start:new Date(2018, 5, 16),
		allDay:true
		},
		{
		start:new Date(2018, 5, 18),
		allDay:true
		},
		{
		start:new Date(2018, 5, 19),
		allDay:true
		},
		{
		start:new Date(2018, 5, 20),
		allDay:true
		},
		{
		start:new Date(2018, 5, 21),
		allDay:true
		},
		{
		start:new Date(2018, 5, 22),
		allDay:true
		},
		{
		start:new Date(2018, 5, 25),
		allDay:true
		},
		{
		start:new Date(2018, 5, 26),
		allDay:true
		},
		{
		start:new Date(2018, 5, 27),
		allDay:true
		},
		{
		start:new Date(2018, 5, 28),
		allDay:true
		},
		{
		start:new Date(2018, 5, 29),
		allDay:true
		},
		{
		start:new Date(2018, 5, 30),
		allDay:true
		}]]},
		{source:"Bogotá",
		destination:"Medellín",
		value:"COP 109900",
		eventSources:[[{
		start:new Date(2018, 3, 6),
		allDay:true
		},
		{
		start:new Date(2018, 3, 7),
		allDay:true
		},
		{
		start:new Date(2018, 3, 8),
		allDay:true
		},
		{
		start:new Date(2018, 3, 9),
		allDay:true
		},
		{
		start:new Date(2018, 3, 10),
		allDay:true
		},
		{
		start:new Date(2018, 3, 11),
		allDay:true
		},
		{
		start:new Date(2018, 3, 12),
		allDay:true
		},
		{
		start:new Date(2018, 3, 13),
		allDay:true
		},
		{
		start:new Date(2018, 3, 14),
		allDay:true
		},
		{
		start:new Date(2018, 3, 15),
		allDay:true
		},
		{
		start:new Date(2018, 3, 16),
		allDay:true
		},
		{
		start:new Date(2018, 3, 17),
		allDay:true
		},
		{
		start:new Date(2018, 3, 18),
		allDay:true
		},
		{
		start:new Date(2018, 3, 19),
		allDay:true
		},
		{
		start:new Date(2018, 3, 20),
		allDay:true
		},
		{
		start:new Date(2018, 3, 21),
		allDay:true
		},
		{
		start:new Date(2018, 3, 22),
		allDay:true
		},
		{
		start:new Date(2018, 3, 23),
		allDay:true
		},
		{
		start:new Date(2018, 3, 24),
		allDay:true
		},
		{
		start:new Date(2018, 3, 25),
		allDay:true
		},
		{
		start:new Date(2018, 3, 26),
		allDay:true
		},
		{
		start:new Date(2018, 3, 28),
		allDay:true
		},
		{
		start:new Date(2018, 3, 29),
		allDay:true
		},
		{
		start:new Date(2018, 3, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 1),
		allDay:true
		},
		{
		start:new Date(2018, 4, 2),
		allDay:true
		},
		{
		start:new Date(2018, 4, 3),
		allDay:true
		},
		{
		start:new Date(2018, 4, 4),
		allDay:true
		},
		{
		start:new Date(2018, 4, 5),
		allDay:true
		},
		{
		start:new Date(2018, 4, 6),
		allDay:true
		},
		{
		start:new Date(2018, 4, 7),
		allDay:true
		},
		{
		start:new Date(2018, 4, 8),
		allDay:true
		},
		{
		start:new Date(2018, 4, 9),
		allDay:true
		},
		{
		start:new Date(2018, 4, 10),
		allDay:true
		},
		{
		start:new Date(2018, 4, 12),
		allDay:true
		},
		{
		start:new Date(2018, 4, 13),
		allDay:true
		},
		{
		start:new Date(2018, 4, 14),
		allDay:true
		},
		{
		start:new Date(2018, 4, 15),
		allDay:true
		},
		{
		start:new Date(2018, 4, 16),
		allDay:true
		},
		{
		start:new Date(2018, 4, 17),
		allDay:true
		},
		{
		start:new Date(2018, 4, 18),
		allDay:true
		},
		{
		start:new Date(2018, 4, 19),
		allDay:true
		},
		{
		start:new Date(2018, 4, 20),
		allDay:true
		},
		{
		start:new Date(2018, 4, 21),
		allDay:true
		},
		{
		start:new Date(2018, 4, 22),
		allDay:true
		},
		{
		start:new Date(2018, 4, 23),
		allDay:true
		},
		{
		start:new Date(2018, 4, 24),
		allDay:true
		},
		{
		start:new Date(2018, 4, 25),
		allDay:true
		},
		{
		start:new Date(2018, 4, 26),
		allDay:true
		},
		{
		start:new Date(2018, 4, 27),
		allDay:true
		},
		{
		start:new Date(2018, 4, 28),
		allDay:true
		},
		{
		start:new Date(2018, 4, 29),
		allDay:true
		},
		{
		start:new Date(2018, 4, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 31),
		allDay:true
		},
		{
		start:new Date(2018, 5, 2),
		allDay:true
		},
		{
		start:new Date(2018, 5, 3),
		allDay:true
		},
		{
		start:new Date(2018, 5, 4),
		allDay:true
		},
		{
		start:new Date(2018, 5, 5),
		allDay:true
		},
		{
		start:new Date(2018, 5, 6),
		allDay:true
		},
		{
		start:new Date(2018, 5, 7),
		allDay:true
		},
		{
		start:new Date(2018, 5, 9),
		allDay:true
		},
		{
		start:new Date(2018, 5, 10),
		allDay:true
		},
		{
		start:new Date(2018, 5, 11),
		allDay:true
		},
		{
		start:new Date(2018, 5, 12),
		allDay:true
		},
		{
		start:new Date(2018, 5, 13),
		allDay:true
		},
		{
		start:new Date(2018, 5, 14),
		allDay:true
		},
		{
		start:new Date(2018, 5, 15),
		allDay:true
		},
		{
		start:new Date(2018, 5, 16),
		allDay:true
		},
		{
		start:new Date(2018, 5, 17),
		allDay:true
		},
		{
		start:new Date(2018, 5, 18),
		allDay:true
		},
		{
		start:new Date(2018, 5, 19),
		allDay:true
		},
		{
		start:new Date(2018, 5, 20),
		allDay:true
		},
		{
		start:new Date(2018, 5, 21),
		allDay:true
		},
		{
		start:new Date(2018, 5, 22),
		allDay:true
		},
		{
		start:new Date(2018, 5, 23),
		allDay:true
		},
		{
		start:new Date(2018, 5, 24),
		allDay:true
		},
		{
		start:new Date(2018, 5, 25),
		allDay:true
		},
		{
		start:new Date(2018, 5, 26),
		allDay:true
		},
		{
		start:new Date(2018, 5, 27),
		allDay:true
		},
		{
		start:new Date(2018, 5, 28),
		allDay:true
		},
		{
		start:new Date(2018, 5, 30),
		allDay:true
		}]]},
		{source:"Bogotá",
		destination:"Cali",
		value:"COP 149900",
		eventSources:[[{
		start:new Date(2018, 3, 6),
		allDay:true
		},
		{
		start:new Date(2018, 3, 7),
		allDay:true
		},
		{
		start:new Date(2018, 3, 8),
		allDay:true
		},
		{
		start:new Date(2018, 3, 9),
		allDay:true
		},
		{
		start:new Date(2018, 3, 10),
		allDay:true
		},
		{
		start:new Date(2018, 3, 12),
		allDay:true
		},
		{
		start:new Date(2018, 3, 13),
		allDay:true
		},
		{
		start:new Date(2018, 3, 14),
		allDay:true
		},
		{
		start:new Date(2018, 3, 15),
		allDay:true
		},
		{
		start:new Date(2018, 3, 16),
		allDay:true
		},
		{
		start:new Date(2018, 3, 17),
		allDay:true
		},
		{
		start:new Date(2018, 3, 19),
		allDay:true
		},
		{
		start:new Date(2018, 3, 20),
		allDay:true
		},
		{
		start:new Date(2018, 3, 21),
		allDay:true
		},
		{
		start:new Date(2018, 3, 22),
		allDay:true
		},
		{
		start:new Date(2018, 3, 23),
		allDay:true
		},
		{
		start:new Date(2018, 3, 24),
		allDay:true
		},
		{
		start:new Date(2018, 3, 26),
		allDay:true
		},
		{
		start:new Date(2018, 4, 2),
		allDay:true
		},
		{
		start:new Date(2018, 4, 3),
		allDay:true
		},
		{
		start:new Date(2018, 4, 4),
		allDay:true
		},
		{
		start:new Date(2018, 4, 5),
		allDay:true
		},
		{
		start:new Date(2018, 4, 6),
		allDay:true
		},
		{
		start:new Date(2018, 4, 7),
		allDay:true
		},
		{
		start:new Date(2018, 4, 8),
		allDay:true
		},
		{
		start:new Date(2018, 4, 12),
		allDay:true
		},
		{
		start:new Date(2018, 4, 15),
		allDay:true
		},
		{
		start:new Date(2018, 4, 16),
		allDay:true
		},
		{
		start:new Date(2018, 4, 17),
		allDay:true
		},
		{
		start:new Date(2018, 4, 18),
		allDay:true
		},
		{
		start:new Date(2018, 4, 19),
		allDay:true
		},
		{
		start:new Date(2018, 4, 20),
		allDay:true
		},
		{
		start:new Date(2018, 4, 21),
		allDay:true
		},
		{
		start:new Date(2018, 4, 22),
		allDay:true
		},
		{
		start:new Date(2018, 4, 24),
		allDay:true
		},
		{
		start:new Date(2018, 4, 25),
		allDay:true
		},
		{
		start:new Date(2018, 4, 26),
		allDay:true
		},
		{
		start:new Date(2018, 4, 27),
		allDay:true
		},
		{
		start:new Date(2018, 4, 28),
		allDay:true
		},
		{
		start:new Date(2018, 4, 29),
		allDay:true
		},
		{
		start:new Date(2018, 5, 2),
		allDay:true
		},
		{
		start:new Date(2018, 5, 5),
		allDay:true
		},
		{
		start:new Date(2018, 5, 6),
		allDay:true
		},
		{
		start:new Date(2018, 5, 7),
		allDay:true
		},
		{
		start:new Date(2018, 5, 9),
		allDay:true
		},
		{
		start:new Date(2018, 5, 12),
		allDay:true
		},
		{
		start:new Date(2018, 5, 14),
		allDay:true
		},
		{
		start:new Date(2018, 5, 15),
		allDay:true
		},
		{
		start:new Date(2018, 5, 16),
		allDay:true
		},
		{
		start:new Date(2018, 5, 17),
		allDay:true
		},
		{
		start:new Date(2018, 5, 18),
		allDay:true
		},
		{
		start:new Date(2018, 5, 19),
		allDay:true
		},
		{
		start:new Date(2018, 5, 20),
		allDay:true
		},
		{
		start:new Date(2018, 5, 21),
		allDay:true
		},
		{
		start:new Date(2018, 5, 22),
		allDay:true
		},
		{
		start:new Date(2018, 5, 23),
		allDay:true
		},
		{
		start:new Date(2018, 5, 24),
		allDay:true
		},
		{
		start:new Date(2018, 5, 25),
		allDay:true
		},
		{
		start:new Date(2018, 5, 26),
		allDay:true
		},
		{
		start:new Date(2018, 5, 30),
		allDay:true
		}]]},
		{source:"Cali",
		destination:"Pasto",
		value:"COP 199900",
		eventSources:[[{
		start:new Date(2018, 3, 6),
		allDay:true
		},
		{
		start:new Date(2018, 3, 7),
		allDay:true
		},
		{
		start:new Date(2018, 3, 8),
		allDay:true
		},
		{
		start:new Date(2018, 3, 12),
		allDay:true
		},
		{
		start:new Date(2018, 3, 13),
		allDay:true
		},
		{
		start:new Date(2018, 3, 14),
		allDay:true
		},
		{
		start:new Date(2018, 3, 15),
		allDay:true
		},
		{
		start:new Date(2018, 3, 19),
		allDay:true
		},
		{
		start:new Date(2018, 3, 20),
		allDay:true
		},
		{
		start:new Date(2018, 3, 21),
		allDay:true
		},
		{
		start:new Date(2018, 3, 22),
		allDay:true
		},
		{
		start:new Date(2018, 3, 26),
		allDay:true
		},
		{
		start:new Date(2018, 3, 29),
		allDay:true
		},
		{
		start:new Date(2018, 3, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 3),
		allDay:true
		},
		{
		start:new Date(2018, 4, 4),
		allDay:true
		},
		{
		start:new Date(2018, 4, 5),
		allDay:true
		},
		{
		start:new Date(2018, 4, 6),
		allDay:true
		},
		{
		start:new Date(2018, 4, 10),
		allDay:true
		},
		{
		start:new Date(2018, 4, 12),
		allDay:true
		},
		{
		start:new Date(2018, 4, 13),
		allDay:true
		},
		{
		start:new Date(2018, 4, 14),
		allDay:true
		},
		{
		start:new Date(2018, 4, 17),
		allDay:true
		},
		{
		start:new Date(2018, 4, 18),
		allDay:true
		},
		{
		start:new Date(2018, 4, 19),
		allDay:true
		},
		{
		start:new Date(2018, 4, 20),
		allDay:true
		},
		{
		start:new Date(2018, 4, 24),
		allDay:true
		},
		{
		start:new Date(2018, 4, 25),
		allDay:true
		},
		{
		start:new Date(2018, 4, 26),
		allDay:true
		},
		{
		start:new Date(2018, 4, 27),
		allDay:true
		},
		{
		start:new Date(2018, 4, 31),
		allDay:true
		},
		{
		start:new Date(2018, 5, 2),
		allDay:true
		},
		{
		start:new Date(2018, 5, 3),
		allDay:true
		},
		{
		start:new Date(2018, 5, 4),
		allDay:true
		},
		{
		start:new Date(2018, 5, 7),
		allDay:true
		},
		{
		start:new Date(2018, 5, 9),
		allDay:true
		},
		{
		start:new Date(2018, 5, 10),
		allDay:true
		},
		{
		start:new Date(2018, 5, 11),
		allDay:true
		},
		{
		start:new Date(2018, 5, 14),
		allDay:true
		},
		{
		start:new Date(2018, 5, 15),
		allDay:true
		},
		{
		start:new Date(2018, 5, 16),
		allDay:true
		},
		{
		start:new Date(2018, 5, 17),
		allDay:true
		},
		{
		start:new Date(2018, 5, 21),
		allDay:true
		},
		{
		start:new Date(2018, 5, 22),
		allDay:true
		},
		{
		start:new Date(2018, 5, 23),
		allDay:true
		},
		{
		start:new Date(2018, 5, 24),
		allDay:true
		},
		{
		start:new Date(2018, 5, 28),
		allDay:true
		},
		{
		start:new Date(2018, 5, 30),
		allDay:true
		}]]},
		{source:"Cartagena",
		destination:"Medellín",
		value:"COP 119900",
		eventSources:[[{
		start:new Date(2018, 3, 6),
		allDay:true
		},
		{
		start:new Date(2018, 3, 8),
		allDay:true
		},
		{
		start:new Date(2018, 3, 10),
		allDay:true
		},
		{
		start:new Date(2018, 3, 11),
		allDay:true
		},
		{
		start:new Date(2018, 3, 12),
		allDay:true
		},
		{
		start:new Date(2018, 3, 13),
		allDay:true
		},
		{
		start:new Date(2018, 3, 14),
		allDay:true
		},
		{
		start:new Date(2018, 3, 15),
		allDay:true
		},
		{
		start:new Date(2018, 3, 17),
		allDay:true
		},
		{
		start:new Date(2018, 3, 18),
		allDay:true
		},
		{
		start:new Date(2018, 3, 19),
		allDay:true
		},
		{
		start:new Date(2018, 3, 20),
		allDay:true
		},
		{
		start:new Date(2018, 3, 21),
		allDay:true
		},
		{
		start:new Date(2018, 3, 22),
		allDay:true
		},
		{
		start:new Date(2018, 3, 24),
		allDay:true
		},
		{
		start:new Date(2018, 3, 25),
		allDay:true
		},
		{
		start:new Date(2018, 3, 26),
		allDay:true
		},
		{
		start:new Date(2018, 3, 27),
		allDay:true
		},
		{
		start:new Date(2018, 3, 28),
		allDay:true
		},
		{
		start:new Date(2018, 4, 3),
		allDay:true
		},
		{
		start:new Date(2018, 4, 4),
		allDay:true
		},
		{
		start:new Date(2018, 4, 5),
		allDay:true
		},
		{
		start:new Date(2018, 4, 8),
		allDay:true
		},
		{
		start:new Date(2018, 4, 9),
		allDay:true
		},
		{
		start:new Date(2018, 4, 10),
		allDay:true
		},
		{
		start:new Date(2018, 4, 11),
		allDay:true
		},
		{
		start:new Date(2018, 4, 12),
		allDay:true
		},
		{
		start:new Date(2018, 4, 13),
		allDay:true
		},
		{
		start:new Date(2018, 4, 16),
		allDay:true
		},
		{
		start:new Date(2018, 4, 17),
		allDay:true
		},
		{
		start:new Date(2018, 4, 18),
		allDay:true
		},
		{
		start:new Date(2018, 4, 19),
		allDay:true
		},
		{
		start:new Date(2018, 4, 22),
		allDay:true
		},
		{
		start:new Date(2018, 4, 23),
		allDay:true
		},
		{
		start:new Date(2018, 4, 24),
		allDay:true
		},
		{
		start:new Date(2018, 4, 25),
		allDay:true
		},
		{
		start:new Date(2018, 4, 26),
		allDay:true
		},
		{
		start:new Date(2018, 4, 29),
		allDay:true
		},
		{
		start:new Date(2018, 4, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 31),
		allDay:true
		}]]},
		{source:"Santa Marta",
		destination:"Bogotá",
		value:"COP 129900",
		eventSources:[[{
		start:new Date(2018, 3, 6),
		allDay:true
		},
		{
		start:new Date(2018, 3, 10),
		allDay:true
		},
		{
		start:new Date(2018, 3, 11),
		allDay:true
		},
		{
		start:new Date(2018, 3, 12),
		allDay:true
		},
		{
		start:new Date(2018, 3, 13),
		allDay:true
		},
		{
		start:new Date(2018, 3, 14),
		allDay:true
		},
		{
		start:new Date(2018, 3, 15),
		allDay:true
		},
		{
		start:new Date(2018, 3, 17),
		allDay:true
		},
		{
		start:new Date(2018, 3, 18),
		allDay:true
		},
		{
		start:new Date(2018, 3, 19),
		allDay:true
		},
		{
		start:new Date(2018, 3, 20),
		allDay:true
		},
		{
		start:new Date(2018, 3, 21),
		allDay:true
		},
		{
		start:new Date(2018, 3, 24),
		allDay:true
		},
		{
		start:new Date(2018, 3, 25),
		allDay:true
		},
		{
		start:new Date(2018, 3, 26),
		allDay:true
		},
		{
		start:new Date(2018, 3, 27),
		allDay:true
		},
		{
		start:new Date(2018, 3, 28),
		allDay:true
		},
		{
		start:new Date(2018, 4, 2),
		allDay:true
		},
		{
		start:new Date(2018, 4, 3),
		allDay:true
		},
		{
		start:new Date(2018, 4, 4),
		allDay:true
		},
		{
		start:new Date(2018, 4, 5),
		allDay:true
		},
		{
		start:new Date(2018, 4, 7),
		allDay:true
		},
		{
		start:new Date(2018, 4, 8),
		allDay:true
		},
		{
		start:new Date(2018, 4, 9),
		allDay:true
		},
		{
		start:new Date(2018, 4, 10),
		allDay:true
		},
		{
		start:new Date(2018, 4, 11),
		allDay:true
		},
		{
		start:new Date(2018, 4, 12),
		allDay:true
		},
		{
		start:new Date(2018, 4, 16),
		allDay:true
		},
		{
		start:new Date(2018, 4, 17),
		allDay:true
		},
		{
		start:new Date(2018, 4, 18),
		allDay:true
		},
		{
		start:new Date(2018, 4, 19),
		allDay:true
		},
		{
		start:new Date(2018, 4, 22),
		allDay:true
		},
		{
		start:new Date(2018, 4, 23),
		allDay:true
		},
		{
		start:new Date(2018, 4, 24),
		allDay:true
		},
		{
		start:new Date(2018, 4, 25),
		allDay:true
		},
		{
		start:new Date(2018, 4, 26),
		allDay:true
		},
		{
		start:new Date(2018, 4, 28),
		allDay:true
		},
		{
		start:new Date(2018, 4, 29),
		allDay:true
		},
		{
		start:new Date(2018, 4, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 31),
		allDay:true
		},
		{
		start:new Date(2018, 5, 1),
		allDay:true
		},
		{
		start:new Date(2018, 5, 2),
		allDay:true
		},
		{
		start:new Date(2018, 5, 6),
		allDay:true
		},
		{
		start:new Date(2018, 5, 7),
		allDay:true
		},
		{
		start:new Date(2018, 5, 8),
		allDay:true
		},
		{
		start:new Date(2018, 5, 9),
		allDay:true
		},
		{
		start:new Date(2018, 5, 13),
		allDay:true
		},
		{
		start:new Date(2018, 5, 14),
		allDay:true
		},
		{
		start:new Date(2018, 5, 15),
		allDay:true
		},
		{
		start:new Date(2018, 5, 16),
		allDay:true
		},
		{
		start:new Date(2018, 5, 18),
		allDay:true
		},
		{
		start:new Date(2018, 5, 19),
		allDay:true
		},
		{
		start:new Date(2018, 5, 20),
		allDay:true
		},
		{
		start:new Date(2018, 5, 21),
		allDay:true
		},
		{
		start:new Date(2018, 5, 22),
		allDay:true
		},
		{
		start:new Date(2018, 5, 23),
		allDay:true
		},
		{
		start:new Date(2018, 5, 25),
		allDay:true
		},
		{
		start:new Date(2018, 5, 26),
		allDay:true
		},
		{
		start:new Date(2018, 5, 27),
		allDay:true
		},
		{
		start:new Date(2018, 5, 28),
		allDay:true
		},
		{
		start:new Date(2018, 5, 29),
		allDay:true
		},
		{
		start:new Date(2018, 5, 30),
		allDay:true
		}]]},
		{source:"Bogotá",
		destination:"Pasto",
		value:"COP 219900",
		eventSources:[[{
		start:new Date(2018, 3, 6),
		allDay:true
		},
		{
		start:new Date(2018, 3, 7),
		allDay:true
		},
		{
		start:new Date(2018, 3, 8),
		allDay:true
		},
		{
		start:new Date(2018, 3, 9),
		allDay:true
		},
		{
		start:new Date(2018, 3, 10),
		allDay:true
		},
		{
		start:new Date(2018, 3, 11),
		allDay:true
		},
		{
		start:new Date(2018, 3, 12),
		allDay:true
		},
		{
		start:new Date(2018, 3, 13),
		allDay:true
		},
		{
		start:new Date(2018, 3, 14),
		allDay:true
		},
		{
		start:new Date(2018, 3, 15),
		allDay:true
		},
		{
		start:new Date(2018, 3, 18),
		allDay:true
		},
		{
		start:new Date(2018, 3, 20),
		allDay:true
		},
		{
		start:new Date(2018, 3, 21),
		allDay:true
		},
		{
		start:new Date(2018, 3, 22),
		allDay:true
		},
		{
		start:new Date(2018, 3, 24),
		allDay:true
		},
		{
		start:new Date(2018, 3, 25),
		allDay:true
		},
		{
		start:new Date(2018, 4, 2),
		allDay:true
		},
		{
		start:new Date(2018, 4, 4),
		allDay:true
		},
		{
		start:new Date(2018, 4, 5),
		allDay:true
		},
		{
		start:new Date(2018, 4, 6),
		allDay:true
		},
		{
		start:new Date(2018, 4, 8),
		allDay:true
		},
		{
		start:new Date(2018, 4, 9),
		allDay:true
		},
		{
		start:new Date(2018, 4, 15),
		allDay:true
		},
		{
		start:new Date(2018, 4, 16),
		allDay:true
		},
		{
		start:new Date(2018, 4, 18),
		allDay:true
		},
		{
		start:new Date(2018, 4, 19),
		allDay:true
		},
		{
		start:new Date(2018, 4, 20),
		allDay:true
		},
		{
		start:new Date(2018, 4, 23),
		allDay:true
		},
		{
		start:new Date(2018, 4, 24),
		allDay:true
		},
		{
		start:new Date(2018, 4, 25),
		allDay:true
		},
		{
		start:new Date(2018, 4, 26),
		allDay:true
		},
		{
		start:new Date(2018, 4, 27),
		allDay:true
		},
		{
		start:new Date(2018, 4, 29),
		allDay:true
		},
		{
		start:new Date(2018, 4, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 31),
		allDay:true
		},
		{
		start:new Date(2018, 5, 5),
		allDay:true
		},
		{
		start:new Date(2018, 5, 12),
		allDay:true
		},
		{
		start:new Date(2018, 5, 13),
		allDay:true
		},
		{
		start:new Date(2018, 5, 14),
		allDay:true
		},
		{
		start:new Date(2018, 5, 17),
		allDay:true
		},
		{
		start:new Date(2018, 5, 19),
		allDay:true
		},
		{
		start:new Date(2018, 5, 21),
		allDay:true
		},
		{
		start:new Date(2018, 5, 23),
		allDay:true
		},
		{
		start:new Date(2018, 5, 24),
		allDay:true
		},
		{
		start:new Date(2018, 5, 28),
		allDay:true
		}]]},
		{source:"Pasto",
		destination:"Bogotá",
		value:"COP 219900",
		eventSources:[[{
		start:new Date(2018, 3, 6),
		allDay:true
		},
		{
		start:new Date(2018, 3, 7),
		allDay:true
		},
		{
		start:new Date(2018, 3, 8),
		allDay:true
		},
		{
		start:new Date(2018, 3, 9),
		allDay:true
		},
		{
		start:new Date(2018, 3, 10),
		allDay:true
		},
		{
		start:new Date(2018, 3, 14),
		allDay:true
		},
		{
		start:new Date(2018, 3, 15),
		allDay:true
		},
		{
		start:new Date(2018, 3, 16),
		allDay:true
		},
		{
		start:new Date(2018, 3, 17),
		allDay:true
		},
		{
		start:new Date(2018, 3, 19),
		allDay:true
		},
		{
		start:new Date(2018, 3, 21),
		allDay:true
		},
		{
		start:new Date(2018, 3, 23),
		allDay:true
		},
		{
		start:new Date(2018, 3, 28),
		allDay:true
		},
		{
		start:new Date(2018, 4, 5),
		allDay:true
		},
		{
		start:new Date(2018, 4, 6),
		allDay:true
		},
		{
		start:new Date(2018, 4, 7),
		allDay:true
		},
		{
		start:new Date(2018, 4, 8),
		allDay:true
		},
		{
		start:new Date(2018, 4, 12),
		allDay:true
		},
		{
		start:new Date(2018, 4, 19),
		allDay:true
		},
		{
		start:new Date(2018, 4, 20),
		allDay:true
		},
		{
		start:new Date(2018, 4, 22),
		allDay:true
		},
		{
		start:new Date(2018, 4, 26),
		allDay:true
		},
		{
		start:new Date(2018, 4, 27),
		allDay:true
		},
		{
		start:new Date(2018, 4, 28),
		allDay:true
		},
		{
		start:new Date(2018, 4, 29),
		allDay:true
		},
		{
		start:new Date(2018, 5, 2),
		allDay:true
		},
		{
		start:new Date(2018, 5, 9),
		allDay:true
		},
		{
		start:new Date(2018, 5, 16),
		allDay:true
		},
		{
		start:new Date(2018, 5, 17),
		allDay:true
		},
		{
		start:new Date(2018, 5, 18),
		allDay:true
		},
		{
		start:new Date(2018, 5, 19),
		allDay:true
		},
		{
		start:new Date(2018, 5, 23),
		allDay:true
		},
		{
		start:new Date(2018, 5, 24),
		allDay:true
		},
		{
		start:new Date(2018, 5, 25),
		allDay:true
		},
		{
		start:new Date(2018, 5, 26),
		allDay:true
		}]]},
		{source:"Bogotá",
		destination:"Barrancabermeja",
		value:"COP 159900",
		eventSources:[[{
		start:new Date(2018, 3, 6),
		allDay:true
		},
		{
		start:new Date(2018, 3, 7),
		allDay:true
		},
		{
		start:new Date(2018, 3, 9),
		allDay:true
		},
		{
		start:new Date(2018, 3, 11),
		allDay:true
		},
		{
		start:new Date(2018, 3, 12),
		allDay:true
		},
		{
		start:new Date(2018, 3, 13),
		allDay:true
		},
		{
		start:new Date(2018, 3, 14),
		allDay:true
		},
		{
		start:new Date(2018, 3, 18),
		allDay:true
		},
		{
		start:new Date(2018, 3, 19),
		allDay:true
		},
		{
		start:new Date(2018, 3, 20),
		allDay:true
		},
		{
		start:new Date(2018, 3, 21),
		allDay:true
		},
		{
		start:new Date(2018, 3, 26),
		allDay:true
		},
		{
		start:new Date(2018, 3, 28),
		allDay:true
		},
		{
		start:new Date(2018, 4, 3),
		allDay:true
		},
		{
		start:new Date(2018, 4, 4),
		allDay:true
		},
		{
		start:new Date(2018, 4, 5),
		allDay:true
		},
		{
		start:new Date(2018, 4, 7),
		allDay:true
		},
		{
		start:new Date(2018, 4, 10),
		allDay:true
		},
		{
		start:new Date(2018, 4, 12),
		allDay:true
		},
		{
		start:new Date(2018, 4, 17),
		allDay:true
		},
		{
		start:new Date(2018, 4, 18),
		allDay:true
		},
		{
		start:new Date(2018, 4, 19),
		allDay:true
		},
		{
		start:new Date(2018, 4, 24),
		allDay:true
		},
		{
		start:new Date(2018, 4, 25),
		allDay:true
		},
		{
		start:new Date(2018, 4, 26),
		allDay:true
		},
		{
		start:new Date(2018, 4, 31),
		allDay:true
		},
		{
		start:new Date(2018, 5, 2),
		allDay:true
		},
		{
		start:new Date(2018, 5, 7),
		allDay:true
		},
		{
		start:new Date(2018, 5, 9),
		allDay:true
		},
		{
		start:new Date(2018, 5, 14),
		allDay:true
		},
		{
		start:new Date(2018, 5, 15),
		allDay:true
		},
		{
		start:new Date(2018, 5, 16),
		allDay:true
		},
		{
		start:new Date(2018, 5, 21),
		allDay:true
		},
		{
		start:new Date(2018, 5, 22),
		allDay:true
		},
		{
		start:new Date(2018, 5, 23),
		allDay:true
		},
		{
		start:new Date(2018, 5, 28),
		allDay:true
		},
		{
		start:new Date(2018, 5, 30),
		allDay:true
		}]]},
		{source:"Medellín",
		destination:"Cartagena",
		value:"COP 119900",
		eventSources:[[{
		start:new Date(2018, 3, 6),
		allDay:true
		},
		{
		start:new Date(2018, 3, 7),
		allDay:true
		},
		{
		start:new Date(2018, 3, 8),
		allDay:true
		},
		{
		start:new Date(2018, 3, 9),
		allDay:true
		},
		{
		start:new Date(2018, 3, 10),
		allDay:true
		},
		{
		start:new Date(2018, 3, 11),
		allDay:true
		},
		{
		start:new Date(2018, 3, 12),
		allDay:true
		},
		{
		start:new Date(2018, 3, 13),
		allDay:true
		},
		{
		start:new Date(2018, 3, 14),
		allDay:true
		},
		{
		start:new Date(2018, 3, 15),
		allDay:true
		},
		{
		start:new Date(2018, 3, 16),
		allDay:true
		},
		{
		start:new Date(2018, 3, 17),
		allDay:true
		},
		{
		start:new Date(2018, 3, 18),
		allDay:true
		},
		{
		start:new Date(2018, 3, 19),
		allDay:true
		},
		{
		start:new Date(2018, 3, 20),
		allDay:true
		},
		{
		start:new Date(2018, 3, 21),
		allDay:true
		},
		{
		start:new Date(2018, 3, 22),
		allDay:true
		},
		{
		start:new Date(2018, 3, 23),
		allDay:true
		},
		{
		start:new Date(2018, 3, 24),
		allDay:true
		},
		{
		start:new Date(2018, 3, 25),
		allDay:true
		},
		{
		start:new Date(2018, 3, 26),
		allDay:true
		},
		{
		start:new Date(2018, 3, 29),
		allDay:true
		},
		{
		start:new Date(2018, 3, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 1),
		allDay:true
		},
		{
		start:new Date(2018, 4, 3),
		allDay:true
		},
		{
		start:new Date(2018, 4, 4),
		allDay:true
		},
		{
		start:new Date(2018, 4, 5),
		allDay:true
		},
		{
		start:new Date(2018, 4, 6),
		allDay:true
		},
		{
		start:new Date(2018, 4, 7),
		allDay:true
		},
		{
		start:new Date(2018, 4, 8),
		allDay:true
		},
		{
		start:new Date(2018, 4, 9),
		allDay:true
		},
		{
		start:new Date(2018, 4, 10),
		allDay:true
		},
		{
		start:new Date(2018, 4, 13),
		allDay:true
		},
		{
		start:new Date(2018, 4, 14),
		allDay:true
		},
		{
		start:new Date(2018, 4, 16),
		allDay:true
		},
		{
		start:new Date(2018, 4, 19),
		allDay:true
		},
		{
		start:new Date(2018, 4, 20),
		allDay:true
		},
		{
		start:new Date(2018, 4, 21),
		allDay:true
		},
		{
		start:new Date(2018, 4, 22),
		allDay:true
		},
		{
		start:new Date(2018, 4, 23),
		allDay:true
		},
		{
		start:new Date(2018, 4, 24),
		allDay:true
		},
		{
		start:new Date(2018, 4, 26),
		allDay:true
		},
		{
		start:new Date(2018, 4, 27),
		allDay:true
		},
		{
		start:new Date(2018, 4, 29),
		allDay:true
		},
		{
		start:new Date(2018, 4, 30),
		allDay:true
		}]]},
		{source:"Cartagena",
		destination:"Cali",
		value:"COP 149900",
		eventSources:[[{
		start:new Date(2018, 3, 6),
		allDay:true
		},
		{
		start:new Date(2018, 3, 7),
		allDay:true
		},
		{
		start:new Date(2018, 3, 8),
		allDay:true
		},
		{
		start:new Date(2018, 3, 9),
		allDay:true
		},
		{
		start:new Date(2018, 3, 10),
		allDay:true
		},
		{
		start:new Date(2018, 3, 11),
		allDay:true
		},
		{
		start:new Date(2018, 3, 12),
		allDay:true
		},
		{
		start:new Date(2018, 3, 13),
		allDay:true
		},
		{
		start:new Date(2018, 3, 14),
		allDay:true
		},
		{
		start:new Date(2018, 3, 15),
		allDay:true
		},
		{
		start:new Date(2018, 3, 17),
		allDay:true
		},
		{
		start:new Date(2018, 3, 18),
		allDay:true
		},
		{
		start:new Date(2018, 3, 19),
		allDay:true
		},
		{
		start:new Date(2018, 3, 20),
		allDay:true
		},
		{
		start:new Date(2018, 3, 21),
		allDay:true
		},
		{
		start:new Date(2018, 3, 22),
		allDay:true
		},
		{
		start:new Date(2018, 3, 23),
		allDay:true
		},
		{
		start:new Date(2018, 3, 24),
		allDay:true
		},
		{
		start:new Date(2018, 3, 25),
		allDay:true
		},
		{
		start:new Date(2018, 3, 26),
		allDay:true
		},
		{
		start:new Date(2018, 3, 27),
		allDay:true
		},
		{
		start:new Date(2018, 3, 29),
		allDay:true
		},
		{
		start:new Date(2018, 4, 4),
		allDay:true
		},
		{
		start:new Date(2018, 4, 6),
		allDay:true
		},
		{
		start:new Date(2018, 4, 9),
		allDay:true
		},
		{
		start:new Date(2018, 4, 10),
		allDay:true
		},
		{
		start:new Date(2018, 4, 11),
		allDay:true
		},
		{
		start:new Date(2018, 4, 13),
		allDay:true
		},
		{
		start:new Date(2018, 4, 16),
		allDay:true
		},
		{
		start:new Date(2018, 4, 17),
		allDay:true
		},
		{
		start:new Date(2018, 4, 18),
		allDay:true
		},
		{
		start:new Date(2018, 4, 20),
		allDay:true
		},
		{
		start:new Date(2018, 4, 22),
		allDay:true
		},
		{
		start:new Date(2018, 4, 23),
		allDay:true
		},
		{
		start:new Date(2018, 4, 24),
		allDay:true
		},
		{
		start:new Date(2018, 4, 25),
		allDay:true
		},
		{
		start:new Date(2018, 4, 27),
		allDay:true
		},
		{
		start:new Date(2018, 4, 29),
		allDay:true
		},
		{
		start:new Date(2018, 4, 30),
		allDay:true
		},
		{
		start:new Date(2018, 5, 1),
		allDay:true
		},
		{
		start:new Date(2018, 5, 3),
		allDay:true
		},
		{
		start:new Date(2018, 5, 6),
		allDay:true
		},
		{
		start:new Date(2018, 5, 8),
		allDay:true
		},
		{
		start:new Date(2018, 5, 10),
		allDay:true
		},
		{
		start:new Date(2018, 5, 13),
		allDay:true
		}]]},
		{source:"Bucaramanga",
		destination:"Medellín",
		value:"COP 139800",
		eventSources:[[{
		start:new Date(2018, 3, 6),
		allDay:true
		},
		{
		start:new Date(2018, 3, 8),
		allDay:true
		},
		{
		start:new Date(2018, 3, 9),
		allDay:true
		},
		{
		start:new Date(2018, 3, 10),
		allDay:true
		},
		{
		start:new Date(2018, 3, 11),
		allDay:true
		},
		{
		start:new Date(2018, 3, 12),
		allDay:true
		},
		{
		start:new Date(2018, 3, 13),
		allDay:true
		},
		{
		start:new Date(2018, 3, 15),
		allDay:true
		},
		{
		start:new Date(2018, 3, 16),
		allDay:true
		},
		{
		start:new Date(2018, 3, 17),
		allDay:true
		},
		{
		start:new Date(2018, 3, 18),
		allDay:true
		},
		{
		start:new Date(2018, 3, 19),
		allDay:true
		},
		{
		start:new Date(2018, 3, 20),
		allDay:true
		},
		{
		start:new Date(2018, 3, 22),
		allDay:true
		},
		{
		start:new Date(2018, 3, 23),
		allDay:true
		},
		{
		start:new Date(2018, 3, 24),
		allDay:true
		},
		{
		start:new Date(2018, 3, 25),
		allDay:true
		},
		{
		start:new Date(2018, 3, 26),
		allDay:true
		},
		{
		start:new Date(2018, 3, 29),
		allDay:true
		}]]},
		{source:"Bogotá",
		destination:"Bucaramanga",
		value:"COP 139900",
		eventSources:[[{
		start:new Date(2018, 3, 6),
		allDay:true
		},
		{
		start:new Date(2018, 3, 7),
		allDay:true
		},
		{
		start:new Date(2018, 3, 8),
		allDay:true
		},
		{
		start:new Date(2018, 3, 9),
		allDay:true
		},
		{
		start:new Date(2018, 3, 10),
		allDay:true
		},
		{
		start:new Date(2018, 3, 11),
		allDay:true
		},
		{
		start:new Date(2018, 3, 12),
		allDay:true
		},
		{
		start:new Date(2018, 3, 13),
		allDay:true
		},
		{
		start:new Date(2018, 3, 14),
		allDay:true
		},
		{
		start:new Date(2018, 3, 15),
		allDay:true
		},
		{
		start:new Date(2018, 3, 16),
		allDay:true
		},
		{
		start:new Date(2018, 3, 17),
		allDay:true
		},
		{
		start:new Date(2018, 3, 18),
		allDay:true
		},
		{
		start:new Date(2018, 3, 19),
		allDay:true
		},
		{
		start:new Date(2018, 3, 20),
		allDay:true
		},
		{
		start:new Date(2018, 3, 21),
		allDay:true
		},
		{
		start:new Date(2018, 3, 22),
		allDay:true
		},
		{
		start:new Date(2018, 3, 23),
		allDay:true
		},
		{
		start:new Date(2018, 3, 24),
		allDay:true
		},
		{
		start:new Date(2018, 3, 25),
		allDay:true
		},
		{
		start:new Date(2018, 3, 26),
		allDay:true
		},
		{
		start:new Date(2018, 3, 28),
		allDay:true
		},
		{
		start:new Date(2018, 3, 29),
		allDay:true
		},
		{
		start:new Date(2018, 3, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 1),
		allDay:true
		},
		{
		start:new Date(2018, 4, 2),
		allDay:true
		},
		{
		start:new Date(2018, 4, 3),
		allDay:true
		},
		{
		start:new Date(2018, 4, 4),
		allDay:true
		},
		{
		start:new Date(2018, 4, 5),
		allDay:true
		},
		{
		start:new Date(2018, 4, 6),
		allDay:true
		},
		{
		start:new Date(2018, 4, 7),
		allDay:true
		},
		{
		start:new Date(2018, 4, 8),
		allDay:true
		},
		{
		start:new Date(2018, 4, 9),
		allDay:true
		},
		{
		start:new Date(2018, 4, 10),
		allDay:true
		},
		{
		start:new Date(2018, 4, 12),
		allDay:true
		},
		{
		start:new Date(2018, 4, 14),
		allDay:true
		},
		{
		start:new Date(2018, 4, 15),
		allDay:true
		},
		{
		start:new Date(2018, 4, 16),
		allDay:true
		},
		{
		start:new Date(2018, 4, 17),
		allDay:true
		},
		{
		start:new Date(2018, 4, 18),
		allDay:true
		},
		{
		start:new Date(2018, 4, 19),
		allDay:true
		},
		{
		start:new Date(2018, 4, 20),
		allDay:true
		},
		{
		start:new Date(2018, 4, 21),
		allDay:true
		},
		{
		start:new Date(2018, 4, 22),
		allDay:true
		},
		{
		start:new Date(2018, 4, 23),
		allDay:true
		},
		{
		start:new Date(2018, 4, 24),
		allDay:true
		},
		{
		start:new Date(2018, 4, 25),
		allDay:true
		},
		{
		start:new Date(2018, 4, 26),
		allDay:true
		},
		{
		start:new Date(2018, 4, 27),
		allDay:true
		},
		{
		start:new Date(2018, 4, 28),
		allDay:true
		},
		{
		start:new Date(2018, 4, 29),
		allDay:true
		},
		{
		start:new Date(2018, 4, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 31),
		allDay:true
		},
		{
		start:new Date(2018, 5, 2),
		allDay:true
		},
		{
		start:new Date(2018, 5, 3),
		allDay:true
		},
		{
		start:new Date(2018, 5, 4),
		allDay:true
		},
		{
		start:new Date(2018, 5, 5),
		allDay:true
		},
		{
		start:new Date(2018, 5, 6),
		allDay:true
		},
		{
		start:new Date(2018, 5, 7),
		allDay:true
		},
		{
		start:new Date(2018, 5, 9),
		allDay:true
		},
		{
		start:new Date(2018, 5, 10),
		allDay:true
		},
		{
		start:new Date(2018, 5, 11),
		allDay:true
		},
		{
		start:new Date(2018, 5, 12),
		allDay:true
		},
		{
		start:new Date(2018, 5, 13),
		allDay:true
		},
		{
		start:new Date(2018, 5, 14),
		allDay:true
		},
		{
		start:new Date(2018, 5, 15),
		allDay:true
		},
		{
		start:new Date(2018, 5, 16),
		allDay:true
		},
		{
		start:new Date(2018, 5, 17),
		allDay:true
		},
		{
		start:new Date(2018, 5, 18),
		allDay:true
		},
		{
		start:new Date(2018, 5, 19),
		allDay:true
		},
		{
		start:new Date(2018, 5, 20),
		allDay:true
		},
		{
		start:new Date(2018, 5, 21),
		allDay:true
		},
		{
		start:new Date(2018, 5, 22),
		allDay:true
		},
		{
		start:new Date(2018, 5, 23),
		allDay:true
		},
		{
		start:new Date(2018, 5, 24),
		allDay:true
		},
		{
		start:new Date(2018, 5, 25),
		allDay:true
		},
		{
		start:new Date(2018, 5, 26),
		allDay:true
		},
		{
		start:new Date(2018, 5, 27),
		allDay:true
		},
		{
		start:new Date(2018, 5, 28),
		allDay:true
		},
		{
		start:new Date(2018, 5, 30),
		allDay:true
		}]]},
		{source:"Bogotá",
		destination:"Santa Marta",
		value:"COP 129900",
		eventSources:[[{
		start:new Date(2018, 3, 6),
		allDay:true
		},
		{
		start:new Date(2018, 3, 7),
		allDay:true
		},
		{
		start:new Date(2018, 3, 8),
		allDay:true
		},
		{
		start:new Date(2018, 3, 9),
		allDay:true
		},
		{
		start:new Date(2018, 3, 10),
		allDay:true
		},
		{
		start:new Date(2018, 3, 11),
		allDay:true
		},
		{
		start:new Date(2018, 3, 12),
		allDay:true
		},
		{
		start:new Date(2018, 3, 13),
		allDay:true
		},
		{
		start:new Date(2018, 3, 14),
		allDay:true
		},
		{
		start:new Date(2018, 3, 15),
		allDay:true
		},
		{
		start:new Date(2018, 3, 16),
		allDay:true
		},
		{
		start:new Date(2018, 3, 17),
		allDay:true
		},
		{
		start:new Date(2018, 3, 18),
		allDay:true
		},
		{
		start:new Date(2018, 3, 19),
		allDay:true
		},
		{
		start:new Date(2018, 3, 21),
		allDay:true
		},
		{
		start:new Date(2018, 3, 22),
		allDay:true
		},
		{
		start:new Date(2018, 3, 23),
		allDay:true
		},
		{
		start:new Date(2018, 3, 24),
		allDay:true
		},
		{
		start:new Date(2018, 3, 25),
		allDay:true
		},
		{
		start:new Date(2018, 3, 29),
		allDay:true
		},
		{
		start:new Date(2018, 3, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 1),
		allDay:true
		},
		{
		start:new Date(2018, 4, 2),
		allDay:true
		},
		{
		start:new Date(2018, 4, 3),
		allDay:true
		},
		{
		start:new Date(2018, 4, 5),
		allDay:true
		},
		{
		start:new Date(2018, 4, 6),
		allDay:true
		},
		{
		start:new Date(2018, 4, 7),
		allDay:true
		},
		{
		start:new Date(2018, 4, 8),
		allDay:true
		},
		{
		start:new Date(2018, 4, 9),
		allDay:true
		},
		{
		start:new Date(2018, 4, 10),
		allDay:true
		},
		{
		start:new Date(2018, 4, 12),
		allDay:true
		},
		{
		start:new Date(2018, 4, 13),
		allDay:true
		},
		{
		start:new Date(2018, 4, 14),
		allDay:true
		},
		{
		start:new Date(2018, 4, 15),
		allDay:true
		},
		{
		start:new Date(2018, 4, 16),
		allDay:true
		},
		{
		start:new Date(2018, 4, 17),
		allDay:true
		},
		{
		start:new Date(2018, 4, 19),
		allDay:true
		},
		{
		start:new Date(2018, 4, 20),
		allDay:true
		},
		{
		start:new Date(2018, 4, 21),
		allDay:true
		},
		{
		start:new Date(2018, 4, 22),
		allDay:true
		},
		{
		start:new Date(2018, 4, 23),
		allDay:true
		},
		{
		start:new Date(2018, 4, 24),
		allDay:true
		},
		{
		start:new Date(2018, 4, 25),
		allDay:true
		},
		{
		start:new Date(2018, 4, 26),
		allDay:true
		},
		{
		start:new Date(2018, 4, 27),
		allDay:true
		},
		{
		start:new Date(2018, 4, 28),
		allDay:true
		},
		{
		start:new Date(2018, 4, 29),
		allDay:true
		},
		{
		start:new Date(2018, 4, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 31),
		allDay:true
		},
		{
		start:new Date(2018, 5, 3),
		allDay:true
		},
		{
		start:new Date(2018, 5, 4),
		allDay:true
		},
		{
		start:new Date(2018, 5, 5),
		allDay:true
		},
		{
		start:new Date(2018, 5, 6),
		allDay:true
		},
		{
		start:new Date(2018, 5, 10),
		allDay:true
		},
		{
		start:new Date(2018, 5, 11),
		allDay:true
		},
		{
		start:new Date(2018, 5, 12),
		allDay:true
		},
		{
		start:new Date(2018, 5, 13),
		allDay:true
		},
		{
		start:new Date(2018, 5, 14),
		allDay:true
		},
		{
		start:new Date(2018, 5, 15),
		allDay:true
		},
		{
		start:new Date(2018, 5, 16),
		allDay:true
		},
		{
		start:new Date(2018, 5, 17),
		allDay:true
		},
		{
		start:new Date(2018, 5, 18),
		allDay:true
		},
		{
		start:new Date(2018, 5, 19),
		allDay:true
		},
		{
		start:new Date(2018, 5, 20),
		allDay:true
		},
		{
		start:new Date(2018, 5, 21),
		allDay:true
		},
		{
		start:new Date(2018, 5, 22),
		allDay:true
		},
		{
		start:new Date(2018, 5, 23),
		allDay:true
		},
		{
		start:new Date(2018, 5, 24),
		allDay:true
		},
		{
		start:new Date(2018, 5, 25),
		allDay:true
		},
		{
		start:new Date(2018, 5, 26),
		allDay:true
		},
		{
		start:new Date(2018, 5, 27),
		allDay:true
		}]]},
		{source:"Valledupar",
		destination:"Bogotá",
		value:"COP 149900",
		eventSources:[[{
		start:new Date(2018, 3, 7),
		allDay:true
		},
		{
		start:new Date(2018, 3, 8),
		allDay:true
		},
		{
		start:new Date(2018, 3, 9),
		allDay:true
		},
		{
		start:new Date(2018, 3, 10),
		allDay:true
		},
		{
		start:new Date(2018, 3, 11),
		allDay:true
		},
		{
		start:new Date(2018, 3, 12),
		allDay:true
		},
		{
		start:new Date(2018, 3, 14),
		allDay:true
		},
		{
		start:new Date(2018, 3, 15),
		allDay:true
		},
		{
		start:new Date(2018, 3, 16),
		allDay:true
		},
		{
		start:new Date(2018, 3, 17),
		allDay:true
		},
		{
		start:new Date(2018, 3, 18),
		allDay:true
		},
		{
		start:new Date(2018, 3, 21),
		allDay:true
		},
		{
		start:new Date(2018, 3, 22),
		allDay:true
		},
		{
		start:new Date(2018, 4, 5),
		allDay:true
		},
		{
		start:new Date(2018, 4, 8),
		allDay:true
		},
		{
		start:new Date(2018, 4, 10),
		allDay:true
		},
		{
		start:new Date(2018, 4, 17),
		allDay:true
		},
		{
		start:new Date(2018, 4, 19),
		allDay:true
		},
		{
		start:new Date(2018, 4, 22),
		allDay:true
		},
		{
		start:new Date(2018, 4, 24),
		allDay:true
		},
		{
		start:new Date(2018, 4, 26),
		allDay:true
		},
		{
		start:new Date(2018, 4, 29),
		allDay:true
		},
		{
		start:new Date(2018, 4, 31),
		allDay:true
		},
		{
		start:new Date(2018, 5, 6),
		allDay:true
		},
		{
		start:new Date(2018, 5, 13),
		allDay:true
		},
		{
		start:new Date(2018, 5, 16),
		allDay:true
		},
		{
		start:new Date(2018, 5, 19),
		allDay:true
		},
		{
		start:new Date(2018, 5, 23),
		allDay:true
		},
		{
		start:new Date(2018, 5, 26),
		allDay:true
		}]]},
		{source:"Bogotá",
		destination:"Valledupar",
		value:"COP 149900",
		eventSources:[[{
		start:new Date(2018, 3, 7),
		allDay:true
		},
		{
		start:new Date(2018, 3, 8),
		allDay:true
		},
		{
		start:new Date(2018, 3, 9),
		allDay:true
		},
		{
		start:new Date(2018, 3, 10),
		allDay:true
		},
		{
		start:new Date(2018, 3, 11),
		allDay:true
		},
		{
		start:new Date(2018, 3, 12),
		allDay:true
		},
		{
		start:new Date(2018, 3, 13),
		allDay:true
		},
		{
		start:new Date(2018, 3, 14),
		allDay:true
		},
		{
		start:new Date(2018, 3, 15),
		allDay:true
		},
		{
		start:new Date(2018, 3, 16),
		allDay:true
		},
		{
		start:new Date(2018, 3, 17),
		allDay:true
		},
		{
		start:new Date(2018, 3, 18),
		allDay:true
		},
		{
		start:new Date(2018, 3, 19),
		allDay:true
		},
		{
		start:new Date(2018, 4, 3),
		allDay:true
		},
		{
		start:new Date(2018, 4, 4),
		allDay:true
		},
		{
		start:new Date(2018, 4, 5),
		allDay:true
		},
		{
		start:new Date(2018, 4, 6),
		allDay:true
		},
		{
		start:new Date(2018, 4, 7),
		allDay:true
		},
		{
		start:new Date(2018, 4, 8),
		allDay:true
		},
		{
		start:new Date(2018, 4, 12),
		allDay:true
		},
		{
		start:new Date(2018, 4, 17),
		allDay:true
		},
		{
		start:new Date(2018, 4, 18),
		allDay:true
		},
		{
		start:new Date(2018, 4, 19),
		allDay:true
		},
		{
		start:new Date(2018, 4, 20),
		allDay:true
		},
		{
		start:new Date(2018, 4, 21),
		allDay:true
		},
		{
		start:new Date(2018, 4, 22),
		allDay:true
		},
		{
		start:new Date(2018, 4, 24),
		allDay:true
		},
		{
		start:new Date(2018, 4, 25),
		allDay:true
		},
		{
		start:new Date(2018, 4, 26),
		allDay:true
		},
		{
		start:new Date(2018, 4, 27),
		allDay:true
		},
		{
		start:new Date(2018, 4, 28),
		allDay:true
		},
		{
		start:new Date(2018, 4, 29),
		allDay:true
		},
		{
		start:new Date(2018, 5, 2),
		allDay:true
		},
		{
		start:new Date(2018, 5, 13),
		allDay:true
		},
		{
		start:new Date(2018, 5, 15),
		allDay:true
		},
		{
		start:new Date(2018, 5, 16),
		allDay:true
		},
		{
		start:new Date(2018, 5, 17),
		allDay:true
		},
		{
		start:new Date(2018, 5, 18),
		allDay:true
		},
		{
		start:new Date(2018, 5, 19),
		allDay:true
		},
		{
		start:new Date(2018, 5, 23),
		allDay:true
		},
		{
		start:new Date(2018, 5, 25),
		allDay:true
		},
		{
		start:new Date(2018, 5, 26),
		allDay:true
		}]]},
		{source:"Santa Marta",
		destination:"Medellín",
		value:"COP 149800",
		eventSources:[[{
		start:new Date(2018, 3, 7),
		allDay:true
		},
		{
		start:new Date(2018, 3, 28),
		allDay:true
		},
		{
		start:new Date(2018, 4, 5),
		allDay:true
		},
		{
		start:new Date(2018, 4, 12),
		allDay:true
		},
		{
		start:new Date(2018, 4, 19),
		allDay:true
		},
		{
		start:new Date(2018, 4, 26),
		allDay:true
		},
		{
		start:new Date(2018, 5, 2),
		allDay:true
		},
		{
		start:new Date(2018, 5, 9),
		allDay:true
		}]]},
		{source:"Medellín",
		destination:"Santa Marta",
		value:"COP 149800",
		eventSources:[[{
		start:new Date(2018, 3, 7),
		allDay:true
		},
		{
		start:new Date(2018, 3, 8),
		allDay:true
		},
		{
		start:new Date(2018, 3, 14),
		allDay:true
		},
		{
		start:new Date(2018, 3, 15),
		allDay:true
		},
		{
		start:new Date(2018, 3, 21),
		allDay:true
		},
		{
		start:new Date(2018, 3, 22),
		allDay:true
		},
		{
		start:new Date(2018, 3, 29),
		allDay:true
		},
		{
		start:new Date(2018, 4, 5),
		allDay:true
		},
		{
		start:new Date(2018, 4, 6),
		allDay:true
		},
		{
		start:new Date(2018, 4, 19),
		allDay:true
		},
		{
		start:new Date(2018, 4, 20),
		allDay:true
		},
		{
		start:new Date(2018, 4, 26),
		allDay:true
		},
		{
		start:new Date(2018, 4, 27),
		allDay:true
		},
		{
		start:new Date(2018, 5, 3),
		allDay:true
		},
		{
		start:new Date(2018, 5, 10),
		allDay:true
		},
		{
		start:new Date(2018, 5, 16),
		allDay:true
		},
		{
		start:new Date(2018, 5, 17),
		allDay:true
		},
		{
		start:new Date(2018, 5, 24),
		allDay:true
		}]]},
		{source:"Pasto",
		destination:"Cali",
		value:"COP 199900",
		eventSources:[[{
		start:new Date(2018, 3, 7),
		allDay:true
		},
		{
		start:new Date(2018, 3, 8),
		allDay:true
		},
		{
		start:new Date(2018, 3, 9),
		allDay:true
		},
		{
		start:new Date(2018, 3, 10),
		allDay:true
		},
		{
		start:new Date(2018, 3, 14),
		allDay:true
		},
		{
		start:new Date(2018, 3, 15),
		allDay:true
		},
		{
		start:new Date(2018, 3, 16),
		allDay:true
		},
		{
		start:new Date(2018, 3, 17),
		allDay:true
		},
		{
		start:new Date(2018, 3, 18),
		allDay:true
		},
		{
		start:new Date(2018, 3, 21),
		allDay:true
		},
		{
		start:new Date(2018, 3, 22),
		allDay:true
		},
		{
		start:new Date(2018, 3, 23),
		allDay:true
		},
		{
		start:new Date(2018, 3, 24),
		allDay:true
		},
		{
		start:new Date(2018, 3, 25),
		allDay:true
		},
		{
		start:new Date(2018, 3, 28),
		allDay:true
		},
		{
		start:new Date(2018, 3, 29),
		allDay:true
		},
		{
		start:new Date(2018, 3, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 2),
		allDay:true
		},
		{
		start:new Date(2018, 4, 5),
		allDay:true
		},
		{
		start:new Date(2018, 4, 6),
		allDay:true
		},
		{
		start:new Date(2018, 4, 7),
		allDay:true
		},
		{
		start:new Date(2018, 4, 8),
		allDay:true
		},
		{
		start:new Date(2018, 4, 9),
		allDay:true
		},
		{
		start:new Date(2018, 4, 12),
		allDay:true
		},
		{
		start:new Date(2018, 4, 13),
		allDay:true
		},
		{
		start:new Date(2018, 4, 15),
		allDay:true
		},
		{
		start:new Date(2018, 4, 16),
		allDay:true
		},
		{
		start:new Date(2018, 4, 19),
		allDay:true
		},
		{
		start:new Date(2018, 4, 20),
		allDay:true
		},
		{
		start:new Date(2018, 4, 21),
		allDay:true
		},
		{
		start:new Date(2018, 4, 22),
		allDay:true
		},
		{
		start:new Date(2018, 4, 23),
		allDay:true
		},
		{
		start:new Date(2018, 4, 26),
		allDay:true
		},
		{
		start:new Date(2018, 4, 27),
		allDay:true
		},
		{
		start:new Date(2018, 4, 28),
		allDay:true
		},
		{
		start:new Date(2018, 4, 29),
		allDay:true
		},
		{
		start:new Date(2018, 4, 30),
		allDay:true
		},
		{
		start:new Date(2018, 5, 2),
		allDay:true
		},
		{
		start:new Date(2018, 5, 3),
		allDay:true
		},
		{
		start:new Date(2018, 5, 5),
		allDay:true
		},
		{
		start:new Date(2018, 5, 6),
		allDay:true
		},
		{
		start:new Date(2018, 5, 9),
		allDay:true
		},
		{
		start:new Date(2018, 5, 10),
		allDay:true
		},
		{
		start:new Date(2018, 5, 12),
		allDay:true
		},
		{
		start:new Date(2018, 5, 13),
		allDay:true
		},
		{
		start:new Date(2018, 5, 16),
		allDay:true
		},
		{
		start:new Date(2018, 5, 17),
		allDay:true
		},
		{
		start:new Date(2018, 5, 18),
		allDay:true
		},
		{
		start:new Date(2018, 5, 19),
		allDay:true
		},
		{
		start:new Date(2018, 5, 20),
		allDay:true
		},
		{
		start:new Date(2018, 5, 23),
		allDay:true
		},
		{
		start:new Date(2018, 5, 24),
		allDay:true
		},
		{
		start:new Date(2018, 5, 25),
		allDay:true
		},
		{
		start:new Date(2018, 5, 26),
		allDay:true
		},
		{
		start:new Date(2018, 5, 27),
		allDay:true
		},
		{
		start:new Date(2018, 5, 30),
		allDay:true
		}]]},
		{source:"Barrancabermeja",
		destination:"Bogotá",
		value:"COP 159900",
		eventSources:[[{
		start:new Date(2018, 3, 7),
		allDay:true
		},
		{
		start:new Date(2018, 3, 8),
		allDay:true
		},
		{
		start:new Date(2018, 3, 9),
		allDay:true
		},
		{
		start:new Date(2018, 3, 10),
		allDay:true
		},
		{
		start:new Date(2018, 3, 11),
		allDay:true
		},
		{
		start:new Date(2018, 3, 12),
		allDay:true
		},
		{
		start:new Date(2018, 3, 14),
		allDay:true
		},
		{
		start:new Date(2018, 3, 15),
		allDay:true
		},
		{
		start:new Date(2018, 3, 16),
		allDay:true
		},
		{
		start:new Date(2018, 3, 17),
		allDay:true
		},
		{
		start:new Date(2018, 3, 18),
		allDay:true
		},
		{
		start:new Date(2018, 3, 19),
		allDay:true
		},
		{
		start:new Date(2018, 3, 21),
		allDay:true
		},
		{
		start:new Date(2018, 3, 22),
		allDay:true
		},
		{
		start:new Date(2018, 3, 23),
		allDay:true
		},
		{
		start:new Date(2018, 3, 24),
		allDay:true
		},
		{
		start:new Date(2018, 3, 25),
		allDay:true
		},
		{
		start:new Date(2018, 3, 26),
		allDay:true
		},
		{
		start:new Date(2018, 3, 28),
		allDay:true
		},
		{
		start:new Date(2018, 3, 29),
		allDay:true
		},
		{
		start:new Date(2018, 3, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 2),
		allDay:true
		},
		{
		start:new Date(2018, 4, 3),
		allDay:true
		},
		{
		start:new Date(2018, 4, 5),
		allDay:true
		},
		{
		start:new Date(2018, 4, 7),
		allDay:true
		},
		{
		start:new Date(2018, 4, 8),
		allDay:true
		},
		{
		start:new Date(2018, 4, 9),
		allDay:true
		},
		{
		start:new Date(2018, 4, 10),
		allDay:true
		},
		{
		start:new Date(2018, 4, 12),
		allDay:true
		},
		{
		start:new Date(2018, 4, 15),
		allDay:true
		},
		{
		start:new Date(2018, 4, 16),
		allDay:true
		},
		{
		start:new Date(2018, 4, 17),
		allDay:true
		},
		{
		start:new Date(2018, 4, 19),
		allDay:true
		},
		{
		start:new Date(2018, 4, 20),
		allDay:true
		},
		{
		start:new Date(2018, 4, 21),
		allDay:true
		},
		{
		start:new Date(2018, 4, 22),
		allDay:true
		},
		{
		start:new Date(2018, 4, 23),
		allDay:true
		},
		{
		start:new Date(2018, 4, 24),
		allDay:true
		},
		{
		start:new Date(2018, 4, 26),
		allDay:true
		},
		{
		start:new Date(2018, 4, 27),
		allDay:true
		},
		{
		start:new Date(2018, 4, 28),
		allDay:true
		},
		{
		start:new Date(2018, 4, 29),
		allDay:true
		},
		{
		start:new Date(2018, 4, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 31),
		allDay:true
		},
		{
		start:new Date(2018, 5, 2),
		allDay:true
		},
		{
		start:new Date(2018, 5, 5),
		allDay:true
		},
		{
		start:new Date(2018, 5, 6),
		allDay:true
		},
		{
		start:new Date(2018, 5, 7),
		allDay:true
		},
		{
		start:new Date(2018, 5, 9),
		allDay:true
		},
		{
		start:new Date(2018, 5, 12),
		allDay:true
		},
		{
		start:new Date(2018, 5, 13),
		allDay:true
		},
		{
		start:new Date(2018, 5, 14),
		allDay:true
		},
		{
		start:new Date(2018, 5, 16),
		allDay:true
		},
		{
		start:new Date(2018, 5, 18),
		allDay:true
		},
		{
		start:new Date(2018, 5, 19),
		allDay:true
		},
		{
		start:new Date(2018, 5, 20),
		allDay:true
		},
		{
		start:new Date(2018, 5, 21),
		allDay:true
		},
		{
		start:new Date(2018, 5, 23),
		allDay:true
		},
		{
		start:new Date(2018, 5, 24),
		allDay:true
		},
		{
		start:new Date(2018, 5, 25),
		allDay:true
		},
		{
		start:new Date(2018, 5, 26),
		allDay:true
		},
		{
		start:new Date(2018, 5, 27),
		allDay:true
		},
		{
		start:new Date(2018, 5, 28),
		allDay:true
		},
		{
		start:new Date(2018, 5, 30),
		allDay:true
		}]]},
		{source:"Bogotá",
		destination:"San Andrés",
		value:"COP 169900",
		eventSources:[[{
		start:new Date(2018, 3, 8),
		allDay:true
		},
		{
		start:new Date(2018, 3, 10),
		allDay:true
		},
		{
		start:new Date(2018, 3, 14),
		allDay:true
		},
		{
		start:new Date(2018, 3, 15),
		allDay:true
		},
		{
		start:new Date(2018, 3, 17),
		allDay:true
		},
		{
		start:new Date(2018, 3, 22),
		allDay:true
		},
		{
		start:new Date(2018, 3, 24),
		allDay:true
		},
		{
		start:new Date(2018, 3, 29),
		allDay:true
		},
		{
		start:new Date(2018, 3, 30),
		allDay:true
		},
		{
		start:new Date(2018, 4, 1),
		allDay:true
		},
		{
		start:new Date(2018, 4, 2),
		allDay:true
		},
		{
		start:new Date(2018, 4, 6),
		allDay:true
		},
		{
		start:new Date(2018, 4, 7),
		allDay:true
		},
		{
		start:new Date(2018, 4, 8),
		allDay:true
		},
		{
		start:new Date(2018, 4, 15),
		allDay:true
		},
		{
		start:new Date(2018, 4, 16),
		allDay:true
		},
		{
		start:new Date(2018, 4, 19),
		allDay:true
		},
		{
		start:new Date(2018, 4, 20),
		allDay:true
		},
		{
		start:new Date(2018, 4, 21),
		allDay:true
		},
		{
		start:new Date(2018, 4, 22),
		allDay:true
		},
		{
		start:new Date(2018, 4, 23),
		allDay:true
		},
		{
		start:new Date(2018, 4, 27),
		allDay:true
		},
		{
		start:new Date(2018, 4, 28),
		allDay:true
		},
		{
		start:new Date(2018, 4, 29),
		allDay:true
		},
		{
		start:new Date(2018, 4, 30),
		allDay:true
		},
		{
		start:new Date(2018, 5, 5),
		allDay:true
		},
		{
		start:new Date(2018, 5, 6),
		allDay:true
		},
		{
		start:new Date(2018, 5, 12),
		allDay:true
		},
		{
		start:new Date(2018, 5, 13),
		allDay:true
		},
		{
		start:new Date(2018, 5, 17),
		allDay:true
		},
		{
		start:new Date(2018, 5, 19),
		allDay:true
		}]]},
		{source:"Cali",
		destination:"Cartagena",
		value:"COP 149900",
		eventSources:[[{
		start:new Date(2018, 3, 15),
		allDay:true
		},
		{
		start:new Date(2018, 3, 22),
		allDay:true
		},
		{
		start:new Date(2018, 3, 24),
		allDay:true
		},
		{
		start:new Date(2018, 3, 25),
		allDay:true
		},
		{
		start:new Date(2018, 3, 29),
		allDay:true
		},
		{
		start:new Date(2018, 4, 2),
		allDay:true
		},
		{
		start:new Date(2018, 4, 6),
		allDay:true
		},
		{
		start:new Date(2018, 4, 9),
		allDay:true
		},
		{
		start:new Date(2018, 4, 13),
		allDay:true
		},
		{
		start:new Date(2018, 4, 16),
		allDay:true
		},
		{
		start:new Date(2018, 4, 20),
		allDay:true
		},
		{
		start:new Date(2018, 4, 23),
		allDay:true
		},
		{
		start:new Date(2018, 4, 27),
		allDay:true
		},
		{
		start:new Date(2018, 4, 30),
		allDay:true
		},
		{
		start:new Date(2018, 5, 3),
		allDay:true
		},
		{
		start:new Date(2018, 5, 10),
		allDay:true
		},
		{
		start:new Date(2018, 5, 17),
		allDay:true
		},
		{
		start:new Date(2018, 5, 24),
		allDay:true
		}]]

	}];
	
	
	function main() {
      $scope.sourceCities = _.uniq(_.pluck(_.sortBy($scope.events, 'source'), 'source'));
      $scope.destinationCities = [];
    }

    main();

    $scope.showdestinations = function functionName() {
      $scope.hideCalendar()

      $scope.destinationCities = _.pluck(_.sortBy(_.filter($scope.events, function(obj) {
        return obj.source === $scope.selectedSource;
      }), 'destination'), 'destination');
    }

    $scope.hideCalendar = function() {
      $scope.showCalendar = false;
    }

    $scope.searchPromos = function() {
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
        defaultDate: '2018-04-01',
      },
    };

    $scope.uiConfig.calendar.dayNames = ['Domingo', 'Lunes', 'Mertes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', ];
    $scope.uiConfig.calendar.dayNamesShort = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', ];
    $scope.uiConfig.calendar.monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre', ];
  });
