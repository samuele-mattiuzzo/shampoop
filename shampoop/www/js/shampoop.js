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

        this.setPositions($poops);
        this.setVisibilities($poops);
    },

    setVisibilities: function ($poops) {
        var $first = $poops.first(),
            $rest = $poops.slice(1);

        $first.addClass('visible');
        $rest.addClass('hidden');
    },

    setPositions: function ($poops) {
        var $previousPoop = null;
        _.each($poops, function (poop, index) {
            var $poop = $(poop),
                viewPortDimensions = this.getViewPortDimensions();
            this.setPosition($poop, index, viewPortDimensions);
            $previousPoop = $poop;
        }, this);
    },

    getViewPortDimensions: function () {
        var $window = $(window);

        return {
            height: $window.height(),
            width: $window.width()
        };
    },

    setPosition: function ($el, index, viewPortDimensions) {
        var elementDimensions = this.getElementDimensions($el);

        $el.css('position', 'absolute');

        this.setTop($el, elementDimensions, viewPortDimensions);
        this.setLeft($el, index, elementDimensions, viewPortDimensions);

        return elementDimensions;
    },

    getElementDimensions: function ($el) {
        var $img = $el.find('img');

        return {
            height: $img.height(),
            width: $img.width()
        };
    },

    setTop: function ($el, elementDimensions, viewPortDimensions) {
        var viewPortHeight = viewPortDimensions.height,
            elementHeight = elementDimensions.height,
            top = (viewPortHeight - elementHeight) / 2;

        $el.css({
            'top': 0,
            'margin-top': top,
            'margin-bottom': top
        });
    },

    setLeft: function ($el, index, elementDimensions, viewPortDimensions) {
        var viewPortWidth = viewPortDimensions.width,
            elementWidth = elementDimensions.width,
            left;

        left = (viewPortWidth - elementWidth) / 2 + (index * viewPortWidth);

        $el.css('left', left);
    }

};
