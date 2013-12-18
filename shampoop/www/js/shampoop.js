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

        this.setContainerStyles($poops);
        this.setContainerWidth($poops);

        this.setPoopStyles($poops);
        this.setPoopWidths($poops);
        this.setPoopMargins($poops);

        this.initializeEvents($poops);
    },

    setContainerStyles: function ($container) {
        $container.css({
            '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
            '-webkit-user-drag': 'none',
            '-webkit-user-select': 'none'
        });
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
    },

    setPoopStyles: function ($container) {
        var $imgs = $container.find('li > img');

        _.each($imgs, function (img) {
            var $img = $(img);

            $img.css('-webkit-user-drag', 'none');
        });
    },

    setPoopWidths: function ($container) {
        var $children = $container.find('li'),
            containerWidth = this.getDesiredContainerWidth($container),
            poopWidth = containerWidth / $children.length;

        _.each($children, function (child) {
            var $child = $(child);

            $child.css({
                'overflow': 'hidden',
                'width': poopWidth + 'px'
            });
        });
    },

    setPoopMargins: function ($container) {
        var $children = $container.find('li'),
            viewportDimensions = this.getViewPortDimensions(),
            viewportHeight = viewportDimensions.height;

        _.each($children, function (child) {
            var $child = $(child),
                height = $child.height(),
                marginTop = (viewportHeight - height) / 2;

            $child.css('margin-top', marginTop);
        });
    },

    initializeEvents: function ($container) {
        var hammer = Hammer($container.get(0));

        _.bindAll(this, 'handleDrag', 'handleDragRight', 'handleDragLeft');

        hammer.on('dragright', this.handleDragRight, this);
        hammer.on('dragleft', this.handleDragLeft, this);
    },

    handleDragRight: function (evt) {
        this.handleDrag(evt, 'right');
    },

    handleDragLeft: function (evt) {
        this.handleDrag(evt, 'left');
    },

    handleDrag: function (evt, direction) {
        var gesture = evt.gesture;

        evt.gesture.preventDefault();

        console.log(evt);
    }

};
