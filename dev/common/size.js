    function get_hfs() {
        document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
    }
    get_hfs();
    function throttle(method, context) {
        clearTimeout(method.timer);
        method.timer = setTimeout(function() {
            method.call(context);
        }, 100);
    }
    window.onresize = function() {
        throttle(get_hfs);
    }