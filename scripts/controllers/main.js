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
  		source: "Medellín",
  		destination: "Ciudad de México",
  		value: "COP 1143534",
  		eventSources: [[{
  			start: new Date(2018, 1, 1),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 2),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 3),
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
  			start: new Date(2018, 1, 15),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 16),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 17),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 22),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 23),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 24),
  			allDay: true
  		}, {
  			start: new Date(2018, 2, 1),
  			allDay: true
  		}, {
  			start: new Date(2018, 2, 2),
  			allDay: true
  		}, {
  			start: new Date(2018, 2, 3),
  			allDay: true
  		}, {
  			start: new Date(2018, 2, 8),
  			allDay: true
  		}, {
  			start: new Date(2018, 2, 9),
  			allDay: true
  		}, {
  			start: new Date(2018, 2, 10),
  			allDay: true
  		}]]
  	}, {
  		source: "Cartagena",
  		destination: "Miami",
  		value: "COP 888460",
  		eventSources: [[{
  			start: new Date(2018, 1, 3),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 4),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 5),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 8),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 14),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 16),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 17),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 21),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 23),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 24),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 28),
  			allDay: true
  		}, {
  			start: new Date(2018, 2, 1),
  			allDay: true
  		}, {
  			start: new Date(2018, 2, 2),
  			allDay: true
  		}, {
  			start: new Date(2018, 2, 3),
  			allDay: true
  		}, {
  			start: new Date(2018, 2, 4),
  			allDay: true
  		}, {
  			start: new Date(2018, 2, 7),
  			allDay: true
  		}, {
  			start: new Date(2018, 2, 8),
  			allDay: true
  		}, {
  			start: new Date(2018, 2, 10),
  			allDay: true
  		}]]
  	}, {
  		source: "Ciudad de México",
  		destination: "Medellín",
  		value: "COP 1143534",
  		eventSources: [[{
  			start: new Date(2018, 1, 4),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 5),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 6),
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
  			start: new Date(2018, 1, 18),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 19),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 20),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 25),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 26),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 27),
  			allDay: true
  		}, {
  			start: new Date(2018, 2, 4),
  			allDay: true
  		}, {
  			start: new Date(2018, 2, 5),
  			allDay: true
  		}, {
  			start: new Date(2018, 2, 6),
  			allDay: true
  		}]]
  	}, {
  		source: "Bucaramanga",
  		destination: "Madrid",
  		value: "COP 2289934",
  		eventSources: [[{
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
  		}, {
  			start: new Date(2018, 1, 21),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 23),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 24),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 25),
  			allDay: true
  		}, {
  			start: new Date(2018, 2, 4),
  			allDay: true
  		}, {
  			start: new Date(2018, 2, 5),
  			allDay: true
  		}, {
  			start: new Date(2018, 2, 6),
  			allDay: true
  		}, {
  			start: new Date(2018, 2, 7),
  			allDay: true
  		}]]
  	}, {
  		source: "Miami",
  		destination: "Cartagena",
  		value: "COP 888460",
  		eventSources: [[{
  			start: new Date(2018, 1, 10),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 11),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 12),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 15),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 21),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 23),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 24),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 28),
  			allDay: true
  		}, {
  			start: new Date(2018, 2, 2),
  			allDay: true
  		}, {
  			start: new Date(2018, 2, 3),
  			allDay: true
  		}, {
  			start: new Date(2018, 2, 7),
  			allDay: true
  		}, {
  			start: new Date(2018, 2, 8),
  			allDay: true
  		}, {
  			start: new Date(2018, 2, 9),
  			allDay: true
  		}]]
  	}, {
  		source: "Bogotá",
  		destination: "Barcelona",
  		value: "COP 6388314",
  		eventSources: [[{
  			start: new Date(2018, 1, 11),
  			allDay: true
  		}]]
  	}, {
  		source: "Madrid",
  		destination: "Bucaramanga",
  		value: "COP 2289934",
  		eventSources: [[{
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
  		}, {
  			start: new Date(2018, 1, 21),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 23),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 24),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 25),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 26),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 27),
  			allDay: true
  		}, {
  			start: new Date(2018, 1, 28),
  			allDay: true
  		}, {
  			start: new Date(2018, 2, 2),
  			allDay: true
  		}, {
  			start: new Date(2018, 2, 3),
  			allDay: true
  		}, {
  			start: new Date(2018, 2, 4),
  			allDay: true
  		}]]
  	}, {
  		source: "Barcelona",
  		destination: "Bogotá",
  		value: "COP 6388314",
  		eventSources: [[{
  			start: new Date(2018, 1, 18),
  			allDay: true
  		}]]
  	}, {
  		source: "Cali",
  		destination: "San Andrés",
  		value: "COP 119900",
  		eventSources: [[{
  			start: new Date(2017, 10, 27),
  			allDay: true
  		}, {
  			start: new Date(2017, 10, 28),
  			allDay: true
  		}]]
  	}, {
  		source: "Bucaramanga",
  		destination: "Bogotá",
  		value: "COP 99900",
  		eventSources: [[{
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
  		}]]
  	}, {
  		source: "Bogotá",
  		destination: "Medellín",
  		value: "COP 79900",
  		eventSources: [[{
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
  		}]]
  	}, {
  		source: "San Andrés",
  		destination: "Medellín",
  		value: "COP 109900",
  		eventSources: [[{
  			start: new Date(2017, 11, 3),
  			allDay: true
  		}, {
  			start: new Date(2017, 11, 4),
  			allDay: true
  		}, {
  			start: new Date(2017, 11, 24),
  			allDay: true
  		}]]
  	}, {
  		source: "Bogotá",
  		destination: "Santa Marta",
  		value: "COP 119900",
  		eventSources: [[{
  			start: new Date(2017, 11, 3),
  			allDay: true
  		}, {
  			start: new Date(2017, 11, 4),
  			allDay: true
  		}, {
  			start: new Date(2017, 11, 5),
  			allDay: true
  		}, {
  			start: new Date(2017, 11, 11),
  			allDay: true
  		}]]
  	}, {
  		source: "Florencia",
  		destination: "Bogotá",
  		value: "COP 229900",
  		eventSources: [[{
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
  			start: new Date(2017, 11, 12),
  			allDay: true
  		}, {
  			start: new Date(2017, 11, 13),
  			allDay: true
  		}]]
  	}, {
  		source: "Santa Marta",
  		destination: "Bogotá",
  		value: "COP 119900",
  		eventSources: [[{
  			start: new Date(2017, 11, 5),
  			allDay: true
  		}, {
  			start: new Date(2017, 11, 6),
  			allDay: true
  		}, {
  			start: new Date(2017, 11, 13),
  			allDay: true
  		}, {
  			start: new Date(2017, 11, 14),
  			allDay: true
  		}]]
  	}, {
  		source: "Armenia",
  		destination: "Bogotá",
  		value: "COP 79900",
  		eventSources: [[{
  			start: new Date(2017, 11, 5),
  			allDay: true
  		}, {
  			start: new Date(2017, 11, 6),
  			allDay: true
  		}, {
  			start: new Date(2017, 11, 12),
  			allDay: true
  		}, {
  			start: new Date(2017, 11, 15),
  			allDay: true
  		}, {
  			start: new Date(2017, 11, 19),
  			allDay: true
  		}, {
  			start: new Date(2017, 11, 25),
  			allDay: true
  		}]]
  	}, {
  		source: "Barranquilla",
  		destination: "Bogotá",
  		value: "COP 99900",
  		eventSources: [[{
  			start: new Date(2017, 11, 5),
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
  		}]]
  	}, {
  		source: "Pereira",
  		destination: "Bogotá",
  		value: "COP 79900",
  		eventSources: [[{
  			start: new Date(2017, 11, 5),
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
  		}]]
  	}, {
  		source: "San Andrés",
  		destination: "Cartagena",
  		value: "COP 109900",
  		eventSources: [[{
  			start: new Date(2017, 11, 5),
  			allDay: true
  		}, {
  			start: new Date(2017, 11, 12),
  			allDay: true
  		}]]
  	}, {
  		source: "Medellín",
  		destination: "Bogotá",
  		value: "COP 79900",
  		eventSources: [[{
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
  		}]]
  	}, {
  		source: "Cali",
  		destination: "Bogotá",
  		value: "COP 99900",
  		eventSources: [[{
  			start: new Date(2017, 11, 8),
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
  		}]]
  	}, {
  		source: "Cartagena",
  		destination: "Medellín",
  		value: "COP 89900",
  		eventSources: [[{
  			start: new Date(2017, 11, 24),
  			allDay: true
  		}]]
  	} ];

    function main () {
      $scope.sourceCities = _.uniq(_.pluck(_.sortBy($scope.events, 'source'), 'source'));
      $scope.destinationCities = [];
    }

    main();

    $scope.showdestinations = function functionName () {
      $scope.hideCalendar()

      $scope.destinationCities = _.pluck(_.sortBy(_.filter($scope.events, function (obj) {
        return obj.source === $scope.selectedSource;
      }), 'destination'), 'destination');
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
