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
        this.setPositions($poops);
    },

    setVisibilities: function ($poops) {
        var $first = $poops.first(),
            $rest = $poops.slice(1);

        $first.addClass('visible');
        $rest.addClass('hidden');
    },

    setPositions: function ($poops) {
        _.each($poops, function (poop) {
            var $poop = $(poop),
                viewPortDimensions = this.getViewPortDimensions();
            this.setPosition($poop, viewPortDimensions);
        }, this);
    },

    getViewPortDimensions: function () {
        var $document = $(document);

        return {
            height: $document.height(),
            width: $document.width()
        };
    },

    setPosition: function ($el, viewPortDimensions) {
        var elementDimensions = this.getElementDimensions($el);

        $el.css('position', 'relative');

        this.setMarginTop($el, elementDimensions.height, viewPortDimensions.height);
    },

    getElementDimensions: function ($el) {
        var $img = $el.find('img');

        return {
            height: $img.height(),
            width: $img.width()
        };
    },

    setMarginTop: function ($el, elementHeight, viewPortHeight) {
        var marginTop = (viewPortHeight - elementHeight) / 2;

        $el.css('margin-top', marginTop);
    }
};
