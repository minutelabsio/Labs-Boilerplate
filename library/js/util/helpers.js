define(function(){
    'use strict';

    return {
        lerp: function(a, b, p) {
            return (b-a)*p + a;
        }

        ,gauss: function( mean, stddev ){
            var r = 2 * (Math.random() + Math.random() + Math.random()) - 3;
            return r * stddev + mean;
        }

        ,debounce: function( fn, delay ){

            var to
                ,self
                ,args
                ,cb = function(){
                    fn.apply( self, args );
                }
                ;

            return function(){
                self = this;
                args = arguments;
                clearTimeout( to );
                to = setTimeout( cb, delay );
            };
        }

        ,adjustAlpha: function( color, alpha ){
            color = color.split(/[\(,\)]/);
            color.pop();
            color[4] = alpha;
            var type = color.shift().split('a')[0] + 'a';
            return type+'('+ color.join(',') +')';
        }
    };
});
