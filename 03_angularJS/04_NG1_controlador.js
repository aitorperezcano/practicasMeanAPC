function ControladorSimple($scope) {
    $scope.tituloDiv = "App Gestión Clientes";
    $scope.misClientes = [{ nombre: 'Fran', ciudad: 'Cádiz' },
        { nombre: 'Sergio', ciudad: 'Madrid' },
        { nombre: 'Jorge', ciudad: 'Bilbao' },
        { nombre: 'Fran 2', ciudad: 'Sevilla' },
        { nombre: 'Sergio 2', ciudad: 'Aranjuez' },
        { nombre: 'Jorge 2', ciudad: 'San Sebastián' }
    ];
}

function ControladorSimple2($scope) {
    $scope.tituloDiv = "App Gestión Clientes 2";
    $scope.misClientes = [{ nombre: 'Fran', ciudad: 'Cádiz' },
        { nombre: 'Sergio', ciudad: 'Madrid' },
        { nombre: 'Jorge', ciudad: 'Bilbao' }
    ];
}

var moduloAplicacion = angular.module("miAppClientes", []);
moduloAplicacion.controller("controladorSimple", ControladorSimple);
moduloAplicacion.controller("controladorSimpleDos", ControladorSimple2);