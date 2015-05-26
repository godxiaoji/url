/**
 * url.js (Mobile Slide)
 * @Author  Travis
 * @Contact https://github.com/godxiaoji
 * @Version 0.0.1
 */
(function(undefined) {
    var loc = window.location,
        href = loc.href,
        rHash = /\#.*$/;

    var Url = {
        removeHash: function(url) {
            return (url || href).replace(rHash, '');
        },
        getHash: function(url) {
            var match = (url || href).match(rHash);
            return match && match[0] ? match[0] : '';
        },
        removeParams: function(params, url) {
            url = url || href;

            var hash = Url.getHash(url),
                url = this.removeHash(url),
                i;

            for(i = params.length - 1; i >= 0; i--) {
                url = url.replace(new RegExp("(?:[\\?\\&](" + params[i] + "=[^&]*))", "g"), "");
            }

            url = url.replace(/\&+/, "&").replace(/[\&]+$/, "").replace(/[\?]+$/, "") + hash;
            return /^[^?]*\&/.test(url) ? url.replace("&", "?") : url;
        },
        addParams: function(params, url) {
            url = url || href;

            var removeArr = [],
                addArr = [],
                hash = Url.getHash(url),
                url = this.removeHash(url),
                i;

            for(i in params) {
                if(params.hasOwnProperty(i)) {
                    removeArr.push(i);
                    addArr.push(i + "=" + encodeURIComponent(params[i]));
                }
            }

            url = this.removeParams(removeArr, url);
            return url + (addArr[0] ? (url.indexOf('?') === -1 ? '?' : '&') + addArr.join('&') : '') + hash;
        },
        queryString: function(name) {
            var params = this.getParams();
            return params[name] != null ? params[name] : undefined;
        },
        getParams: function() {
            var search = loc.search ? loc.search.substr(1).split("&") : [],
                i = 0,
                len = search.length,
                params = {},
                pos;

            for (; i < len; i++) {
                pos = search[i].indexOf("=");
                if (pos > 0) {
                    params[search[i].substring(0, pos)] = decodeURIComponent(search[i].substring(pos + 1));
                }
            }
            return params;
        },
        getUrl: function() {
            return loc.protocol + "//" + loc.host + loc.pathname;
        },
        redirect: function(url) {
            loc.href = url;
            try {
                window.event.returnValue = false;
            } catch(e) {}
        }
    };

    window.Url = Url;
})();