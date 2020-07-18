(function () {
    'use strict';

    // var shoppingList1 = [
    //     "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
    // ];
    //


    angular.module('ShoppingListCheckOffApp', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy =this;
        toBuy.countItem=function(){
            return ShoppingListCheckOffService.itemCount();
        }
        toBuy.items=ShoppingListCheckOffService.getToBuyItems();
        toBuy.buy=function(Index) {
            ShoppingListCheckOffService.buyItems(Index);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought=this;
        bought.items=ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var service=this;
        var toBuyItems = [
            {
                name: "Milk",
                quantity: "2",
                sold: false
            },
            {
                name: "Donuts",
                quantity: "200",
                sold: false
            },
            {
                name: "Cookies",
                quantity: "300",
                sold: false
            },
            {
                name: "Chocolate",
                quantity: "5",
                sold: false
            },
            {
                name: "Egg",
                quantity: "10",
                sold: false
            }
        ];
        var boughtItems=[];


        service.buyItems=function (index) {
            boughtItems.push(toBuyItems[index]);
            toBuyItems[index].sold=true;
        };

        service.getToBuyItems = function () {
            return toBuyItems;
        };

        service.getBoughtItems = function () {
            return boughtItems;
        };

        service.itemCount=function () {
            return toBuyItems.length-boughtItems.length;
        }
    }

})();
