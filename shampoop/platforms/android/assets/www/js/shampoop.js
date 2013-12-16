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
            Hammer(menuEl).on(menu_events[i], function (ev) {

                // Exits the app
                if (menu_el === '#menu_exit') { navigator.app.exitApp(); }

                // About page
                if (menu_el === '#menu_about') {
                    $('#about').css('display', 'block');
                    $('#labels').css('display', 'none');
                }

                // Labels page
                if (menu_el === '#menu_labels') {
                    $('#labels').css('display', 'block');
                    $('#about').css('display', 'none');
                }
            });
        }
    },

    menuHandler: function() {

        var menu_elements = ['#menu_exit', '#menu_about', '#menu_labels'],
            i;
        
        $('#navbar-button').on("click", function(){
            $('#navbar-list').slideToggle("fast");
            $(this).toggleClass("active");
        });

        // Menu actions
        for (i = 0; i < menu_elements.length; i++) { this.fireMenuAction(menu_elements[i]); }
    },

    labelAnimate: function(direction, currentpoop) {

        var modifier,
            screen_offset = (screen.width/2.5),
            $currentPoop = $('#currentpoop'),
            $labels = $('#labels');

        // Gets the offset
        var offset = $labels.offset().left;

        if (direction === 'left') { modifier = '-'; }
        if (direction === 'right') { modifier = '+'; }

        // Animates
        $labels.animate({
            left: modifier + '=' + screen_offset,
            opacity: 0.7,
        }, 500, function() {
            //Complete callback: reset position, replace content
            $currentPoop.prop('src', currentpoop);
            $labels.offset({ left: offset });
        });

    },

    gestureHandler: function() {
        var self = this,
            swipoopEl = $('#swipoop').get(0),
            events = ['swiperight', 'swipeleft', 'dragright', 'dragleft'],
            i;

        // Swipe handling
        for (i = 0; i < events.length; i++) {
            Hammer(swipoopEl).on(events[i], function (ev) {
                var item = poops[Math.floor(Math.random() * poops.length)];
                console.log('This is item ' + item);

                // Animates the sliding label, replaces the content
                self.labelAnimate(ev.gesture.direction, item);
            });
        }
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {

        setTimeout(function(){
            navigator.splashscreen.hide();
        }, 1500);

        this.menuHandler();
        this.gestureHandler();

    }
};
