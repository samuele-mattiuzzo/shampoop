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
        this.initializePoops();
    },

    initializePoops: function () {
        var $poopList = $('.poops'),
            $poops = $poopList.find('li');

        this.setVisibilities($poops);
    },

    setVisibilities: function ($poops) {
        var $first = $poops.first(),
            $rest = $poops.slice(1);

        $first.addClass('visible');
        $rest.addClass('hidden');
    }
};
