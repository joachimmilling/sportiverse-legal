/*
 * Shared behaviour for the deep-link fallback pages.
 *
 * Two jobs, both purely presentational — the page is fully usable with
 * JavaScript disabled, since the English copy and both store badges are in
 * the served HTML.
 *
 *   1. Swap to Norwegian when the browser asks for nb/no/nn.
 *   2. Lead with the viewer's own platform, keeping the other reachable.
 */
(function () {
    var lang = (navigator.language || 'en').toLowerCase();
    if (lang.indexOf('nb') === 0 || lang.indexOf('no') === 0 || lang.indexOf('nn') === 0) {
        document.documentElement.lang = 'no';
        var nodes = document.querySelectorAll('[data-nb]');
        for (var i = 0; i < nodes.length; i++) {
            nodes[i].innerHTML = nodes[i].getAttribute('data-nb');
        }
        if (document.title && document.documentElement.getAttribute('data-title-nb')) {
            document.title = document.documentElement.getAttribute('data-title-nb');
        }
    }

    var ua = navigator.userAgent || '';
    var badges = document.getElementById('badges');
    if (!badges) return;

    if (/android/i.test(ua)) {
        badges.className += ' android-first';
    } else if (/iPad|iPhone|iPod/.test(ua) || (ua.indexOf('Mac') > -1 && 'ontouchend' in document)) {
        // iPadOS reports as Mac; the touch check separates it from a desktop.
        badges.className += ' ios-first';
    }
})();
