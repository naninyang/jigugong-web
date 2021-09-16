(function () {
  "use strict";
  var url = '/assets/fonts/pretendard-subset.css';

  function on(el, ev, callback) {
    if (el.addEventListener) {
      el.addEventListener(ev, callback, false);
    } else if (el.attachEvent) {
      el.attachEvent("on" + ev, callback);
    }
  }

  if (
    (window.localStorage && localStorage.fontCssCache)
    || document.cookie.indexOf('fontCssCache') > -1
  ) {
    injectFontsStylesheet();
  } else {
    on(window, "load", injectFontsStylesheet);
  }

  function isFileCached(href) {
    return (
      window.localStorage
      && localStorage.fontCssCache
      && (localStorage.fontCssCacheFile === href)
    );
  }

  function injectFontsStylesheet() {
    if (isFileCached(url)) {
      injectRawStyle(localStorage.fontCssCache);
    } else {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          injectRawStyle(xhr.responseText);
          localStorage.fontCssCache = xhr.responseText;
          localStorage.fontCssCacheFile = url;
        }
      };
      xhr.send();
    }
  }

  function injectRawStyle(text) {
    var style = document.createElement('style');
    style.setAttribute("type", "text/css");
    style.innerHTML = text;
    document.getElementsByTagName('head')[0].appendChild(style);
  }

}());
