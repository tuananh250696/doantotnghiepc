angular.module('DATNDPU', [
    'ngRoute',
    'mobile-angular-ui',
	'btford.socket-io'
]).config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'home.html',
        controller: 'Home'
    });
}).factory('mySocket', function (socketFactory) {
	var myIoSocket = io.connect('/webapp');	//Tên namespace webapp

	mySocket = socketFactory({
		ioSocket: myIoSocket
	});
	return mySocket;
}).controller('Home', function($scope, mySocket) {
	
	////Khu 2 -- Cài đặt các sự kiện khi tương tác với người dùng
	//các sự kiện ng-click, nhấn nút
	$scope.updateSensor  = function() {
		mySocket.emit("RAIN")
	}
	

	}
	
	
	

	 $scope.upt5  = function(){
	var ip = document.getElementById('ip').value;
		mySocket.emit("LED1ON"+ip)
    
	}
	$scope.upt51  = function(){
	     var ip = document.getElementById('ip').value;
		mySocket.emit("LED1OFF"+ip)
	}
	$scope.upt6  = function(){
		var ip = document.getElementById('ip').value;
		mySocket.emit("LED2ON"+ip)
	}
	$scope.upt61  = function(){
		var ip = document.getElementById('ip').value;
		mySocket.emit("LED2OFF"+ip)
	}
	$scope.upt7  = function(){
		var ip = document.getElementById('ip').value;
		mySocket.emit("LED3ON"+ip)
	}
	$scope.upt71  = function(){
		var ip = document.getElementById('ip').value;
		mySocket.emit("LED3OFF"+ip)
	}
	$scope.upt8  = function(){
		var ip = document.getElementById('ip').value;
		mySocket.emit("LED4ON"+ip)
	}
	$scope.upt81  = function(){
		var ip = document.getElementById('ip').value;
		mySocket.emit("LED4OFF"+ip)
	}

	

	//khi nhận được lệnh Button
	mySocket.on('BUTTON', function(json) {
		//Nhận được thì in ra thôi hihi.
		console.log("recv BUTTON", json)
		$scope.buttons = json.data
	})

		
});
