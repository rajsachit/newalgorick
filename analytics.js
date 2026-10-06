// Paste your IDs here. Leave empty to disable.
(function () {
  var GA4_ID = '';      // Google Analytics 4, e.g. 'G-ABC123XYZ'
  var CLARITY_ID = '';  // Microsoft Clarity, e.g. 'abcd1234ef'
  if (window.__algoAnalytics) return; window.__algoAnalytics = true;
  if (GA4_ID) {
    var s = document.createElement('script'); s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag('js', new Date()); gtag('config', GA4_ID);
  }
  if (CLARITY_ID) {
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', CLARITY_ID);
  }
})();
