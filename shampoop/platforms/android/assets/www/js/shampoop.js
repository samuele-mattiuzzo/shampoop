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
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        
        $.event.special.swipe.horizontalDistanceThreshold = 120;
        
        // randomizing on right swipe
        $(document).on("swiperight", "#swipoop", function() {
            // random pick
            var item = poops[Math.floor(Math.random()*poops.length)];
            
            $('#currentpoop').attr('src', item);
        });

        // randomizing on left swipe
        $(document).on("swipeleft", "#swipoop", function() {
            // random pick
            var item = poops[Math.floor(Math.random()*poops.length)];
            
            $('#currentpoop').attr('src', item);
        });
    }
};