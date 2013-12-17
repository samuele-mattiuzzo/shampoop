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
        var previousPoopDimensions = null;
        _.each($poops, function (poop) {
            var $poop = $(poop),
                viewPortDimensions = this.getViewPortDimensions();
            previousPoopDimensions = this.setPosition($poop, previousPoopDimensions, viewPortDimensions);
        }, this);
    },

    getViewPortDimensions: function () {
        var $document = $(document);

        return {
            height: $document.height(),
            width: $document.width()
        };
    },

    setPosition: function ($el, previousPoopDimensions, viewPortDimensions) {
        var elementDimensions = this.getElementDimensions($el),
            viewPortHeight = viewPortDimensions.height,
            elementHeight = elementDimensions.height,
            top = (viewPortHeight - elementHeight) / 2;

        $el.css('position', 'absolute');

        $el.css({
            'top': top
        });

        return elementDimensions;
    },

    getElementDimensions: function ($el) {
        var $img = $el.find('img');

        return {
            height: $img.height(),
            width: $img.width()
        };
    }

};
