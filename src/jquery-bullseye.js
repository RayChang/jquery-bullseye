!function ($) {
  "use strict";
  var defaults = {
    fadeEffect: true,
    effectTime: 0.5
  };
  var $window = $(window);
  var setupImageContainer = function($element, settings) {
    var _imageSrc,
        image = document.createElement('img');
    if($element.data('bullseyeImage')) {
      $element.html('<img src="' + $element.data('bullseyeImage') + '">');
      _imageSrc = $element.data('bullseyeImage');
    } else {
      _imageSrc = $element.find('img').first().attr('src');
      $element.data('bullseyeImage', _imageSrc);
    }
    settings.fadeEffect ? $element.find('img').first().css({'opacity': 0}) : null;

    image.src = _imageSrc;
    image.onload = function() {
      adjustImage($element, settings);
    };
  };
  var adjustImage = function($element, settings) {
    var $image = $element.find('img').first(),
        _scale,
        _imageW,
        _imageH,
        _elementW = $element.innerWidth(),
        _elementH = $element.innerHeight(),
        _elementStyle = {
          'position': 'relative',
          'overflow': 'hidden'
        },
        _imageStyle = {
          'position': 'absolute',
          'top': 0,
          'right': 0,
          'bottom': 0,
          'left': 0,
          'margin': 'auto',
          'width': '100%',
          'height': 'auto'
        },
        _fadeCss = {
          start: {
            'opacity': 1,
            '-webkit-transition': 'opacity ' + settings.effectTime + 's ease-in-out',
            '-moz-transition': 'opacity ' + settings.effectTime + 's ease-in-out',
            '-o-transition': 'opacity ' + settings.effectTime + 's ease-in-out',
            'transition': 'opacity ' + settings.effectTime + 's ease-in-out'
          },
          end: {
            'opacity': '',
            '-webkit-transition': '',
            '-moz-transition': '',
            '-o-transition': '',
            'transition': ''
          }
        };

    $element.css(_elementStyle);
    $image.css(_imageStyle);
    _imageW = $image.width();
    _imageH = $image.height();
    if(_imageH < _elementH) {
      _scale = _elementH / _imageH
      $image.css({
        '-webkit-transform': 'scale(' + _scale + ')',
        '-moz-transform': 'scale(' + _scale + ')',
        '-o-transform': 'scale(' + _scale + ')',
        'transform': 'scale(' + _scale + ')'
      });
    } else {
      $image.css({
        '-webkit-transform': '',
        '-moz-transform': '',
        '-o-transform': '',
        'transform': ''
      });
    }
    if(settings.fadeEffect) {
      $image.css(_fadeCss.start).on('transitionend', function() {
        $(this).css(_fadeCss.end);
      });
    };
  };
  var bullseye = function($element, settings) {
    setupImageContainer($element, settings);
    $window.on('resize', function(event) {
      adjustImage($element, settings);
    });
  };
  $.fn.bullseye = function(options) {
    var settings = $.extend({}, defaults, options);
    return this.each(function() {
      var $element = $(this);
      bullseye($element, settings);
    });
  };
}(window.jQuery);