(function (){
    function Room($firebaseArray){
        var Room = {};
        var roomRef = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(roomRef);

        Room.all = rooms;

        return Room;

    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
