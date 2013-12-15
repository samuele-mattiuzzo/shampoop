// initializes the images list
var poops = [
        'img/shampoo_img_1.jpg',
        'img/shampoo_img_2.jpg',
        'img/shampoo_img_3.jpg',
        'img/shampoo_img_4.jpg',
        'img/shampoo_img_5.jpg',
    ];

var shampoop = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        shampoop.receivedEvent('deviceready');
    },

    // Fires menu events
    fireMenuAction: function(menu_el) {
        var menu_events = ['tap', 'touch'],
            menuEl = $(menu_el).get(0),
            i;
        
        for (i = 0; i< menu_events.length; i++) {
            console.log(menu_events[i]);
            Hammer(menuEl).on(menu_events[i], function () {
                if (menu_el === '#exit') { navigator.app.exitApp(); }

                if (menu_el === '#about') { console.log(menu_el); }

                if (menu_el === '#lectures') { console.log(menu_el); }
            });
        }
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {

        $('#navbar-button').on("click", function(){
            $('#navbar-list').slideToggle();
            $(this).toggleClass("active");
        });

        var swipoopEl = $('#swipoop').get(0),
            $currentPoop = $('#currentpoop'),
            events = ['swiperight', 'swipeleft', 'dragright', 'dragleft'],
            menu_elements = ['#exit', '#about', '#app'],
            i, j;

        for (i = 0; i < events.length; i++) {
            console.log(events[i]);
            Hammer(swipoopEl).on(events[i], function () {
                var item = poops[Math.floor(Math.random() * poops.length)];

                $currentPoop.prop('src', item);
            });
        }

        for (j = 0; j < menu_elements.length; j++) {
            console.log(menu_elements[j]);
            this.fireMenuAction(menu_elements[j]);
        }
    }
};
