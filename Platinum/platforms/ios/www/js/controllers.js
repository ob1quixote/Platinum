angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})


.controller("ItemsCtrl", function ($scope, $ionicListDelegate, Items) {

    $scope.items = Items;

    $scope.addItem = function () {
        var name = prompt("What do you need to buy?");
        if (name) {
            $scope.items.$add({
                "name": name
            });
        }
    };

    $scope.purchaseItem = function (item) {
        var itemRef = new Firebase('https://popping-heat-9032.firebaseio.com/items/' + item.$id);
        itemRef.child('status').set('purchased');
        $ionicListDelegate.closeOptionButtons();
    };
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
