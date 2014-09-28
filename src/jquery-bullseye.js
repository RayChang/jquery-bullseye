!function ($) {
  "use strict";

  $.fn.bullseye = function(options) {
    return this.each(function() {
      var $element,
          $elementImage,
          $image,
          _initial,
          _fadeCss,
          _elementInlineStyle,
          _elementWidth,
          _elementHeight,
          _imageInlineStyle,
          _imageWidth,
          _imageHeight,
          _scale,
          imageLoadComplete;

      _initial = {
        windowResponse: false,
        fadeEffect: false,
        effectTime: .5
      };

      _initial = $.extend(true, _initial, options);

      _fadeCss = {
        start: {
          'opacity': 1,
          '-webkit-transition': 'opacity ' + _initial.effectTime + 's ease-in-out',
          '-moz-transition': 'opacity ' + _initial.effectTime + 's ease-in-out',
          '-o-transition': 'opacity ' + _initial.effectTime + 's ease-in-out',
          'transition': 'opacity ' + _initial.effectTime + 's ease-in-out'
        },
        end: {
          'opacity': '',
          '-webkit-transition': '',
          '-moz-transition': '',
          '-o-transition': '',
          'transition': ''
        }
      }

      $element = $(this);
      _elementWidth = $element.innerWidth();
      _elementHeight = $element.innerHeight();

      $image = document.createElement('img');

      if($element.data('bullseyeImage')) {
        $element.append('<img src="' + $element.data('bullseyeImage') + '">');
        $image.src = $element.data('bullseyeImage');
      } else {
        $image.src = $element.children('img').eq(0).attr('src');
      }

      $elementImage = $element.children('img').eq(0);
      _initial.fadeEffect ? $elementImage.css({'opacity': 0}) : null;

      _elementInlineStyle = {
        'position': 'relative',
        'overflow': 'hidden'
      };
      _imageInlineStyle = {
        'position': 'absolute',
        'top': 0,
        'right': 0,
        'bottom': 0,
        'left': 0,
        'margin': 'auto',
        'width': '100%',
        'height': 'auto'
      }

      $element.css(_elementInlineStyle);
      $elementImage.css(_imageInlineStyle)
      imageLoadComplete = function() {
        _imageWidth = $elementImage.innerWidth();
        _imageHeight = $elementImage.innerHeight()*(_elementWidth/$elementImage.innerWidth());

        if(_imageHeight < _elementHeight) {
          _scale = _elementHeight / _imageHeight
          $elementImage.css({
            '-webkit-transform': 'scale(' + _scale + ')',
            '-moz-transform': 'scale(' + _scale + ')',
            '-o-transform': 'scale(' + _scale + ')',
            'transform': 'scale(' + _scale + ')'
          });
        } else {
          $elementImage.css({
            '-webkit-transform': '',
            '-moz-transform': '',
            '-o-transform': '',
            'transform': ''
          });
        }

        if(_initial.fadeEffect) {
          $elementImage.css(_fadeCss.start).on('transitionend', function() {
            $(this).css(_fadeCss.end)
          });
        };
      }
      $image.onload = imageLoadComplete;
    });
  };
}(window.jQuery);