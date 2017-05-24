(function (){
    function Room($firebaseArray){
        var roomRef = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(roomRef);

        return {
            all: rooms
        };
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
