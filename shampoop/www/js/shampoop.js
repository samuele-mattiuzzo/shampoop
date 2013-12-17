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
        var $poops = $('.poops');
        this.setContainerWidth($poops);
    },

    setContainerWidth: function ($container) {
        $container.css('width', this.getDesiredContainerWidth($container) + 'px');
    },

    getDesiredContainerWidth: function ($container) {
        var $children = $container.find('li'),
            viewportDimensions = this.getViewPortDimensions(),
            viewportWidth = viewportDimensions.width;

        return $children.length * viewportWidth;
    },

    getViewPortDimensions: function () {
        var $window = $(window);

        return {
            'height': $window.height(),
            'width': $window.width()
        };
    }

};
