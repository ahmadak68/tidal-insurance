window.__TIDAL_APP_LOADED__ = true;
(function () {
  function ready(fn) {
    if (window.TIDAL_CUSTOMER_PUBLIC) return fn();
    var n = 0;
    var t = setInterval(function () {
      n++;
      if (window.TIDAL_CUSTOMER_PUBLIC || n > 40) {
        clearInterval(t);
        fn();
      }
    }, 50);
  }
  ready(function () {
    var cfg = window.TIDAL_CUSTOMER_PUBLIC || {};
    var apiOrigin = (cfg.apiOrigin || '').replace(/\/$/, '');
    var path = location.pathname || '';
    var m = path.match(/\/j\/([^\/?#]+)/i);
    var token = m ? decodeURIComponent(m[1]) : '';
    var boot = document.getElementById('boot');
    if (!boot) return;
    if (!token) {
      boot.innerHTML = '<div><h1>Tidal Insurance</h1><p class="err">This link is incomplete. Please open the secure link from WhatsApp again.</p></div>';
      return;
    }
    if (!apiOrigin) {
      boot.innerHTML = '<div><h1>Tidal Insurance</h1><p class="err">Advisor backend is not configured for this host.</p></div>';
      return;
    }
    var frame = document.createElement('iframe');
    frame.title = 'Tidal Insurance Advisor';
    frame.src = apiOrigin + '/insurance/' + encodeURIComponent(token);
    frame.onload = function () { if (boot) boot.remove(); };
    document.body.appendChild(frame);
  });
})();
