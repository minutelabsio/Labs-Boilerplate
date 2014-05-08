define([
    'jquery',
    'moddef'
], function(
    $,
    M
) {
    'use strict';

    // Page-level Mediator
    var Mediator = M({

        // Mediator Constructor
        constructor: function(){

            var self = this;
            self.initEvents();

            $(function(){
                self.onDomReady();
                self.resolve('domready');
            });
        }

        // Initialize events
        ,initEvents: function(){

            var self = this;
        }

        // DomReady Callback
        ,onDomReady: function(){

            var self = this;
        }

    }, ['events']);

    return new Mediator();
});
