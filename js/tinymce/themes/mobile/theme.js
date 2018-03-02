(function () {
var mobile = (function () {
  'use strict';

  var noop = function () {
  };
  var noarg = function (f) {
    return function () {
      return f();
    };
  };
  var compose = function (fa, fb) {
    return function () {
      return fa(fb.apply(null, arguments));
    };
  };
  var constant = function (value) {
    return function () {
      return value;
    };
  };
  var identity = function (x) {
    return x;
  };
  var tripleEquals = function (a, b) {
    return a === b;
  };
  var curry = function (f) {
    var args = new Array(arguments.length - 1);
    for (var i = 1; i < arguments.length; i++)
      args[i - 1] = arguments[i];
    return function () {
      var newArgs = new Array(arguments.length);
      for (var j = 0; j < newArgs.length; j++)
        newArgs[j] = arguments[j];
      var all = args.concat(newArgs);
      return f.apply(null, all);
    };
  };
  var not = function (f) {
    return function () {
      return !f.apply(null, arguments);
    };
  };
  var die = function (msg) {
    return function () {
      throw new Error(msg);
    };
  };
  var apply = function (f) {
    return f();
  };
  var call = function (f) {
    f();
  };
  var never = constant(false);
  var always = constant(true);
  var $_ddy4s3wjjeajomls = {
    noop: noop,
    noarg: noarg,
    compose: compose,
    constant: constant,
    identity: identity,
    tripleEquals: tripleEquals,
    curry: curry,
    not: not,
    die: die,
    apply: apply,
    call: call,
    never: never,
    always: always
  };

  var $_9ndt8owijeajomlo = {
    contextmenu: $_ddy4s3wjjeajomls.constant('contextmenu'),
    touchstart: $_ddy4s3wjjeajomls.constant('touchstart'),
    touchmove: $_ddy4s3wjjeajomls.constant('touchmove'),
    touchend: $_ddy4s3wjjeajomls.constant('touchend'),
    gesturestart: $_ddy4s3wjjeajomls.constant('gesturestart'),
    mousedown: $_ddy4s3wjjeajomls.constant('mousedown'),
    mousemove: $_ddy4s3wjjeajomls.constant('mousemove'),
    mouseout: $_ddy4s3wjjeajomls.constant('mouseout'),
    mouseup: $_ddy4s3wjjeajomls.constant('mouseup'),
    mouseover: $_ddy4s3wjjeajomls.constant('mouseover'),
    focusin: $_ddy4s3wjjeajomls.constant('focusin'),
    keydown: $_ddy4s3wjjeajomls.constant('keydown'),
    input: $_ddy4s3wjjeajomls.constant('input'),
    change: $_ddy4s3wjjeajomls.constant('change'),
    focus: $_ddy4s3wjjeajomls.constant('focus'),
    click: $_ddy4s3wjjeajomls.constant('click'),
    transitionend: $_ddy4s3wjjeajomls.constant('transitionend'),
    selectstart: $_ddy4s3wjjeajomls.constant('selectstart')
  };

  var cached = function (f) {
    var called = false;
    var r;
    return function () {
      if (!called) {
        called = true;
        r = f.apply(null, arguments);
      }
      return r;
    };
  };
  var $_2add5nwljeajomlz = { cached: cached };

  var firstMatch = function (regexes, s) {
    for (var i = 0; i < regexes.length; i++) {
      var x = regexes[i];
      if (x.test(s))
        return x;
    }
    return undefined;
  };
  var find = function (regexes, agent) {
    var r = firstMatch(regexes, agent);
    if (!r)
      return {
        major: 0,
        minor: 0
      };
    var group = function (i) {
      return Number(agent.replace(r, '$' + i));
    };
    return nu(group(1), group(2));
  };
  var detect = function (versionRegexes, agent) {
    var cleanedAgent = String(agent).toLowerCase();
    if (versionRegexes.length === 0)
      return unknown();
    return find(versionRegexes, cleanedAgent);
  };
  var unknown = function () {
    return nu(0, 0);
  };
  var nu = function (major, minor) {
    return {
      major: major,
      minor: minor
    };
  };
  var $_9o26kkwojeajommb = {
    nu: nu,
    detect: detect,
    unknown: unknown
  };

  var edge = 'Edge';
  var chrome = 'Chrome';
  var ie = 'IE';
  var opera = 'Opera';
  var firefox = 'Firefox';
  var safari = 'Safari';
  var isBrowser = function (name, current) {
    return function () {
      return current === name;
    };
  };
  var unknown$1 = function () {
    return nu$1({
      current: undefined,
      version: $_9o26kkwojeajommb.unknown()
    });
  };
  var nu$1 = function (info) {
    var current = info.current;
    var version = info.version;
    return {
      current: current,
      version: version,
      isEdge: isBrowser(edge, current),
      isChrome: isBrowser(chrome, current),
      isIE: isBrowser(ie, current),
      isOpera: isBrowser(opera, current),
      isFirefox: isBrowser(firefox, current),
      isSafari: isBrowser(safari, current)
    };
  };
  var $_83k9qpwnjeajomm2 = {
    unknown: unknown$1,
    nu: nu$1,
    edge: $_ddy4s3wjjeajomls.constant(edge),
    chrome: $_ddy4s3wjjeajomls.constant(chrome),
    ie: $_ddy4s3wjjeajomls.constant(ie),
    opera: $_ddy4s3wjjeajomls.constant(opera),
    firefox: $_ddy4s3wjjeajomls.constant(firefox),
    safari: $_ddy4s3wjjeajomls.constant(safari)
  };

  var windows = 'Windows';
  var ios = 'iOS';
  var android = 'Android';
  var linux = 'Linux';
  var osx = 'OSX';
  var solaris = 'Solaris';
  var freebsd = 'FreeBSD';
  var isOS = function (name, current) {
    return function () {
      return current === name;
    };
  };
  var unknown$2 = function () {
    return nu$2({
      current: undefined,
      version: $_9o26kkwojeajommb.unknown()
    });
  };
  var nu$2 = function (info) {
    var current = info.current;
    var version = info.version;
    return {
      current: current,
      version: version,
      isWindows: isOS(windows, current),
      isiOS: isOS(ios, current),
      isAndroid: isOS(android, current),
      isOSX: isOS(osx, current),
      isLinux: isOS(linux, current),
      isSolaris: isOS(solaris, current),
      isFreeBSD: isOS(freebsd, current)
    };
  };
  var $_867mlfwpjeajommd = {
    unknown: unknown$2,
    nu: nu$2,
    windows: $_ddy4s3wjjeajomls.constant(windows),
    ios: $_ddy4s3wjjeajomls.constant(ios),
    android: $_ddy4s3wjjeajomls.constant(android),
    linux: $_ddy4s3wjjeajomls.constant(linux),
    osx: $_ddy4s3wjjeajomls.constant(osx),
    solaris: $_ddy4s3wjjeajomls.constant(solaris),
    freebsd: $_ddy4s3wjjeajomls.constant(freebsd)
  };

  function DeviceType (os, browser, userAgent) {
    var isiPad = os.isiOS() && /ipad/i.test(userAgent) === true;
    var isiPhone = os.isiOS() && !isiPad;
    var isAndroid3 = os.isAndroid() && os.version.major === 3;
    var isAndroid4 = os.isAndroid() && os.version.major === 4;
    var isTablet = isiPad || isAndroid3 || isAndroid4 && /mobile/i.test(userAgent) === true;
    var isTouch = os.isiOS() || os.isAndroid();
    var isPhone = isTouch && !isTablet;
    var iOSwebview = browser.isSafari() && os.isiOS() && /safari/i.test(userAgent) === false;
    return {
      isiPad: $_ddy4s3wjjeajomls.constant(isiPad),
      isiPhone: $_ddy4s3wjjeajomls.constant(isiPhone),
      isTablet: $_ddy4s3wjjeajomls.constant(isTablet),
      isPhone: $_ddy4s3wjjeajomls.constant(isPhone),
      isTouch: $_ddy4s3wjjeajomls.constant(isTouch),
      isAndroid: os.isAndroid,
      isiOS: os.isiOS,
      isWebView: $_ddy4s3wjjeajomls.constant(iOSwebview)
    };
  }

  var never$1 = $_ddy4s3wjjeajomls.never;
  var always$1 = $_ddy4s3wjjeajomls.always;
  var none = function () {
    return NONE;
  };
  var NONE = function () {
    var eq = function (o) {
      return o.isNone();
    };
    var call = function (thunk) {
      return thunk();
    };
    var id = function (n) {
      return n;
    };
    var noop = function () {
    };
    var me = {
      fold: function (n, s) {
        return n();
      },
      is: never$1,
      isSome: never$1,
      isNone: always$1,
      getOr: id,
      getOrThunk: call,
      getOrDie: function (msg) {
        throw new Error(msg || 'error: getOrDie called on none.');
      },
      or: id,
      orThunk: call,
      map: none,
      ap: none,
      each: noop,
      bind: none,
      flatten: none,
      exists: never$1,
      forall: always$1,
      filter: none,
      equals: eq,
      equals_: eq,
      toArray: function () {
        return [];
      },
      toString: $_ddy4s3wjjeajomls.constant('none()')
    };
    if (Object.freeze)
      Object.freeze(me);
    return me;
  }();
  var some = function (a) {
    var constant_a = function () {
      return a;
    };
    var self = function () {
      return me;
    };
    var map = function (f) {
      return some(f(a));
    };
    var bind = function (f) {
      return f(a);
    };
    var me = {
      fold: function (n, s) {
        return s(a);
      },
      is: function (v) {
        return a === v;
      },
      isSome: always$1,
      isNone: never$1,
      getOr: constant_a,
      getOrThunk: constant_a,
      getOrDie: constant_a,
      or: self,
      orThunk: self,
      map: map,
      ap: function (optfab) {
        return optfab.fold(none, function (fab) {
          return some(fab(a));
        });
      },
      each: function (f) {
        f(a);
      },
      bind: bind,
      flatten: constant_a,
      exists: bind,
      forall: bind,
      filter: function (f) {
        return f(a) ? me : NONE;
      },
      equals: function (o) {
        return o.is(a);
      },
      equals_: function (o, elementEq) {
        return o.fold(never$1, function (b) {
          return elementEq(a, b);
        });
      },
      toArray: function () {
        return [a];
      },
      toString: function () {
        return 'some(' + a + ')';
      }
    };
    return me;
  };
  var from = function (value) {
    return value === null || value === undefined ? NONE : some(value);
  };
  var Option = {
    some: some,
    none: none,
    from: from
  };

  var rawIndexOf = function () {
    var pIndexOf = Array.prototype.indexOf;
    var fastIndex = function (xs, x) {
      return pIndexOf.call(xs, x);
    };
    var slowIndex = function (xs, x) {
      return slowIndexOf(xs, x);
    };
    return pIndexOf === undefined ? slowIndex : fastIndex;
  }();
  var indexOf = function (xs, x) {
    var r = rawIndexOf(xs, x);
    return r === -1 ? Option.none() : Option.some(r);
  };
  var contains = function (xs, x) {
    return rawIndexOf(xs, x) > -1;
  };
  var exists = function (xs, pred) {
    return findIndex(xs, pred).isSome();
  };
  var range = function (num, f) {
    var r = [];
    for (var i = 0; i < num; i++) {
      r.push(f(i));
    }
    return r;
  };
  var chunk = function (array, size) {
    var r = [];
    for (var i = 0; i < array.length; i += size) {
      var s = array.slice(i, i + size);
      r.push(s);
    }
    return r;
  };
  var map = function (xs, f) {
    var len = xs.length;
    var r = new Array(len);
    for (var i = 0; i < len; i++) {
      var x = xs[i];
      r[i] = f(x, i, xs);
    }
    return r;
  };
  var each = function (xs, f) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      f(x, i, xs);
    }
  };
  var eachr = function (xs, f) {
    for (var i = xs.length - 1; i >= 0; i--) {
      var x = xs[i];
      f(x, i, xs);
    }
  };
  var partition = function (xs, pred) {
    var pass = [];
    var fail = [];
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      var arr = pred(x, i, xs) ? pass : fail;
      arr.push(x);
    }
    return {
      pass: pass,
      fail: fail
    };
  };
  var filter = function (xs, pred) {
    var r = [];
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      if (pred(x, i, xs)) {
        r.push(x);
      }
    }
    return r;
  };
  var groupBy = function (xs, f) {
    if (xs.length === 0) {
      return [];
    } else {
      var wasType = f(xs[0]);
      var r = [];
      var group = [];
      for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];
        var type = f(x);
        if (type !== wasType) {
          r.push(group);
          group = [];
        }
        wasType = type;
        group.push(x);
      }
      if (group.length !== 0) {
        r.push(group);
      }
      return r;
    }
  };
  var foldr = function (xs, f, acc) {
    eachr(xs, function (x) {
      acc = f(acc, x);
    });
    return acc;
  };
  var foldl = function (xs, f, acc) {
    each(xs, function (x) {
      acc = f(acc, x);
    });
    return acc;
  };
  var find$1 = function (xs, pred) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      if (pred(x, i, xs)) {
        return Option.some(x);
      }
    }
    return Option.none();
  };
  var findIndex = function (xs, pred) {
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      if (pred(x, i, xs)) {
        return Option.some(i);
      }
    }
    return Option.none();
  };
  var slowIndexOf = function (xs, x) {
    for (var i = 0, len = xs.length; i < len; ++i) {
      if (xs[i] === x) {
        return i;
      }
    }
    return -1;
  };
  var push = Array.prototype.push;
  var flatten = function (xs) {
    var r = [];
    for (var i = 0, len = xs.length; i < len; ++i) {
      if (!Array.prototype.isPrototypeOf(xs[i]))
        throw new Error('Arr.flatten item ' + i + ' was not an array, input: ' + xs);
      push.apply(r, xs[i]);
    }
    return r;
  };
  var bind = function (xs, f) {
    var output = map(xs, f);
    return flatten(output);
  };
  var forall = function (xs, pred) {
    for (var i = 0, len = xs.length; i < len; ++i) {
      var x = xs[i];
      if (pred(x, i, xs) !== true) {
        return false;
      }
    }
    return true;
  };
  var equal = function (a1, a2) {
    return a1.length === a2.length && forall(a1, function (x, i) {
      return x === a2[i];
    });
  };
  var slice = Array.prototype.slice;
  var reverse = function (xs) {
    var r = slice.call(xs, 0);
    r.reverse();
    return r;
  };
  var difference = function (a1, a2) {
    return filter(a1, function (x) {
      return !contains(a2, x);
    });
  };
  var mapToObject = function (xs, f) {
    var r = {};
    for (var i = 0, len = xs.length; i < len; i++) {
      var x = xs[i];
      r[String(x)] = f(x, i);
    }
    return r;
  };
  var pure = function (x) {
    return [x];
  };
  var sort = function (xs, comparator) {
    var copy = slice.call(xs, 0);
    copy.sort(comparator);
    return copy;
  };
  var head = function (xs) {
    return xs.length === 0 ? Option.none() : Option.some(xs[0]);
  };
  var last = function (xs) {
    return xs.length === 0 ? Option.none() : Option.some(xs[xs.length - 1]);
  };
  var $_5r3pikwsjeajommo = {
    map: map,
    each: each,
    eachr: eachr,
    partition: partition,
    filter: filter,
    groupBy: groupBy,
    indexOf: indexOf,
    foldr: foldr,
    foldl: foldl,
    find: find$1,
    findIndex: findIndex,
    flatten: flatten,
    bind: bind,
    forall: forall,
    exists: exists,
    contains: contains,
    equal: equal,
    reverse: reverse,
    chunk: chunk,
    difference: difference,
    mapToObject: mapToObject,
    pure: pure,
    sort: sort,
    range: range,
    head: head,
    last: last
  };

  var detect$1 = function (candidates, userAgent) {
    var agent = String(userAgent).toLowerCase();
    return $_5r3pikwsjeajommo.find(candidates, function (candidate) {
      return candidate.search(agent);
    });
  };
  var detectBrowser = function (browsers, userAgent) {
    return detect$1(browsers, userAgent).map(function (browser) {
      var version = $_9o26kkwojeajommb.detect(browser.versionRegexes, userAgent);
      return {
        current: browser.name,
        version: version
      };
    });
  };
  var detectOs = function (oses, userAgent) {
    return detect$1(oses, userAgent).map(function (os) {
      var version = $_9o26kkwojeajommb.detect(os.versionRegexes, userAgent);
      return {
        current: os.name,
        version: version
      };
    });
  };
  var $_8akp1gwrjeajommk = {
    detectBrowser: detectBrowser,
    detectOs: detectOs
  };

  var addToStart = function (str, prefix) {
    return prefix + str;
  };
  var addToEnd = function (str, suffix) {
    return str + suffix;
  };
  var removeFromStart = function (str, numChars) {
    return str.substring(numChars);
  };
  var removeFromEnd = function (str, numChars) {
    return str.substring(0, str.length - numChars);
  };
  var $_fx0pxuwwjeajomn6 = {
    addToStart: addToStart,
    addToEnd: addToEnd,
    removeFromStart: removeFromStart,
    removeFromEnd: removeFromEnd
  };

  var first = function (str, count) {
    return str.substr(0, count);
  };
  var last$1 = function (str, count) {
    return str.substr(str.length - count, str.length);
  };
  var head$1 = function (str) {
    return str === '' ? Option.none() : Option.some(str.substr(0, 1));
  };
  var tail = function (str) {
    return str === '' ? Option.none() : Option.some(str.substring(1));
  };
  var $_5w6wwpwxjeajomn7 = {
    first: first,
    last: last$1,
    head: head$1,
    tail: tail
  };

  var checkRange = function (str, substr, start) {
    if (substr === '')
      return true;
    if (str.length < substr.length)
      return false;
    var x = str.substr(start, start + substr.length);
    return x === substr;
  };
  var supplant = function (str, obj) {
    var isStringOrNumber = function (a) {
      var t = typeof a;
      return t === 'string' || t === 'number';
    };
    return str.replace(/\${([^{}]*)}/g, function (a, b) {
      var value = obj[b];
      return isStringOrNumber(value) ? value : a;
    });
  };
  var removeLeading = function (str, prefix) {
    return startsWith(str, prefix) ? $_fx0pxuwwjeajomn6.removeFromStart(str, prefix.length) : str;
  };
  var removeTrailing = function (str, prefix) {
    return endsWith(str, prefix) ? $_fx0pxuwwjeajomn6.removeFromEnd(str, prefix.length) : str;
  };
  var ensureLeading = function (str, prefix) {
    return startsWith(str, prefix) ? str : $_fx0pxuwwjeajomn6.addToStart(str, prefix);
  };
  var ensureTrailing = function (str, prefix) {
    return endsWith(str, prefix) ? str : $_fx0pxuwwjeajomn6.addToEnd(str, prefix);
  };
  var contains$1 = function (str, substr) {
    return str.indexOf(substr) !== -1;
  };
  var capitalize = function (str) {
    return $_5w6wwpwxjeajomn7.head(str).bind(function (head) {
      return $_5w6wwpwxjeajomn7.tail(str).map(function (tail) {
        return head.toUpperCase() + tail;
      });
    }).getOr(str);
  };
  var startsWith = function (str, prefix) {
    return checkRange(str, prefix, 0);
  };
  var endsWith = function (str, suffix) {
    return checkRange(str, suffix, str.length - suffix.length);
  };
  var trim = function (str) {
    return str.replace(/^\s+|\s+$/g, '');
  };
  var lTrim = function (str) {
    return str.replace(/^\s+/g, '');
  };
  var rTrim = function (str) {
    return str.replace(/\s+$/g, '');
  };
  var $_4ur2nuwvjeajomn4 = {
    supplant: supplant,
    startsWith: startsWith,
    removeLeading: removeLeading,
    removeTrailing: removeTrailing,
    ensureLeading: ensureLeading,
    ensureTrailing: ensureTrailing,
    endsWith: endsWith,
    contains: contains$1,
    trim: trim,
    lTrim: lTrim,
    rTrim: rTrim,
    capitalize: capitalize
  };

  var normalVersionRegex = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/;
  var checkContains = function (target) {
    return function (uastring) {
      return $_4ur2nuwvjeajomn4.contains(uastring, target);
    };
  };
  var browsers = [
    {
      name: 'Edge',
      versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
      search: function (uastring) {
        var monstrosity = $_4ur2nuwvjeajomn4.contains(uastring, 'edge/') && $_4ur2nuwvjeajomn4.contains(uastring, 'chrome') && $_4ur2nuwvjeajomn4.contains(uastring, 'safari') && $_4ur2nuwvjeajomn4.contains(uastring, 'applewebkit');
        return monstrosity;
      }
    },
    {
      name: 'Chrome',
      versionRegexes: [
        /.*?chrome\/([0-9]+)\.([0-9]+).*/,
        normalVersionRegex
      ],
      search: function (uastring) {
        return $_4ur2nuwvjeajomn4.contains(uastring, 'chrome') && !$_4ur2nuwvjeajomn4.contains(uastring, 'chromeframe');
      }
    },
    {
      name: 'IE',
      versionRegexes: [
        /.*?msie\ ?([0-9]+)\.([0-9]+).*/,
        /.*?rv:([0-9]+)\.([0-9]+).*/
      ],
      search: function (uastring) {
        return $_4ur2nuwvjeajomn4.contains(uastring, 'msie') || $_4ur2nuwvjeajomn4.contains(uastring, 'trident');
      }
    },
    {
      name: 'Opera',
      versionRegexes: [
        normalVersionRegex,
        /.*?opera\/([0-9]+)\.([0-9]+).*/
      ],
      search: checkContains('opera')
    },
    {
      name: 'Firefox',
      versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
      search: checkContains('firefox')
    },
    {
      name: 'Safari',
      versionRegexes: [
        normalVersionRegex,
        /.*?cpu os ([0-9]+)_([0-9]+).*/
      ],
      search: function (uastring) {
        return ($_4ur2nuwvjeajomn4.contains(uastring, 'safari') || $_4ur2nuwvjeajomn4.contains(uastring, 'mobile/')) && $_4ur2nuwvjeajomn4.contains(uastring, 'applewebkit');
      }
    }
  ];
  var oses = [
    {
      name: 'Windows',
      search: checkContains('win'),
      versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
    },
    {
      name: 'iOS',
      search: function (uastring) {
        return $_4ur2nuwvjeajomn4.contains(uastring, 'iphone') || $_4ur2nuwvjeajomn4.contains(uastring, 'ipad');
      },
      versionRegexes: [
        /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
        /.*cpu os ([0-9]+)_([0-9]+).*/,
        /.*cpu iphone os ([0-9]+)_([0-9]+).*/
      ]
    },
    {
      name: 'Android',
      search: checkContains('android'),
      versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
    },
    {
      name: 'OSX',
      search: checkContains('os x'),
      versionRegexes: [/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]
    },
    {
      name: 'Linux',
      search: checkContains('linux'),
      versionRegexes: []
    },
    {
      name: 'Solaris',
      search: checkContains('sunos'),
      versionRegexes: []
    },
    {
      name: 'FreeBSD',
      search: checkContains('freebsd'),
      versionRegexes: []
    }
  ];
  var $_1592dewujeajommz = {
    browsers: $_ddy4s3wjjeajomls.constant(browsers),
    oses: $_ddy4s3wjjeajomls.constant(oses)
  };

  var detect$2 = function (userAgent) {
    var browsers = $_1592dewujeajommz.browsers();
    var oses = $_1592dewujeajommz.oses();
    var browser = $_8akp1gwrjeajommk.detectBrowser(browsers, userAgent).fold($_83k9qpwnjeajomm2.unknown, $_83k9qpwnjeajomm2.nu);
    var os = $_8akp1gwrjeajommk.detectOs(oses, userAgent).fold($_867mlfwpjeajommd.unknown, $_867mlfwpjeajommd.nu);
    var deviceType = DeviceType(os, browser, userAgent);
    return {
      browser: browser,
      os: os,
      deviceType: deviceType
    };
  };
  var $_9mw8wnwmjeajomm1 = { detect: detect$2 };

  var detect$3 = $_2add5nwljeajomlz.cached(function () {
    var userAgent = navigator.userAgent;
    return $_9mw8wnwmjeajomm1.detect(userAgent);
  });
  var $_g80fw1wkjeajomlw = { detect: detect$3 };

  var alloy = { tap: $_ddy4s3wjjeajomls.constant('alloy.tap') };
  var $_bckj1uwhjeajomli = {
    focus: $_ddy4s3wjjeajomls.constant('alloy.focus'),
    postBlur: $_ddy4s3wjjeajomls.constant('alloy.blur.post'),
    receive: $_ddy4s3wjjeajomls.constant('alloy.receive'),
    execute: $_ddy4s3wjjeajomls.constant('alloy.execute'),
    focusItem: $_ddy4s3wjjeajomls.constant('alloy.focus.item'),
    tap: alloy.tap,
    tapOrClick: $_g80fw1wkjeajomlw.detect().deviceType.isTouch() ? alloy.tap : $_9ndt8owijeajomlo.click,
    longpress: $_ddy4s3wjjeajomls.constant('alloy.longpress'),
    sandboxClose: $_ddy4s3wjjeajomls.constant('alloy.sandbox.close'),
    systemInit: $_ddy4s3wjjeajomls.constant('alloy.system.init'),
    windowScroll: $_ddy4s3wjjeajomls.constant('alloy.system.scroll'),
    attachedToDom: $_ddy4s3wjjeajomls.constant('alloy.system.attached'),
    detachedFromDom: $_ddy4s3wjjeajomls.constant('alloy.system.detached'),
    changeTab: $_ddy4s3wjjeajomls.constant('alloy.change.tab'),
    dismissTab: $_ddy4s3wjjeajomls.constant('alloy.dismiss.tab')
  };

  var typeOf = function (x) {
    if (x === null)
      return 'null';
    var t = typeof x;
    if (t === 'object' && Array.prototype.isPrototypeOf(x))
      return 'array';
    if (t === 'object' && String.prototype.isPrototypeOf(x))
      return 'string';
    return t;
  };
  var isType = function (type) {
    return function (value) {
      return typeOf(value) === type;
    };
  };
  var $_6vgadjwzjeajomnb = {
    isString: isType('string'),
    isObject: isType('object'),
    isArray: isType('array'),
    isNull: isType('null'),
    isBoolean: isType('boolean'),
    isUndefined: isType('undefined'),
    isFunction: isType('function'),
    isNumber: isType('number')
  };

  var shallow = function (old, nu) {
    return nu;
  };
  var deep = function (old, nu) {
    var bothObjects = $_6vgadjwzjeajomnb.isObject(old) && $_6vgadjwzjeajomnb.isObject(nu);
    return bothObjects ? deepMerge(old, nu) : nu;
  };
  var baseMerge = function (merger) {
    return function () {
      var objects = new Array(arguments.length);
      for (var i = 0; i < objects.length; i++)
        objects[i] = arguments[i];
      if (objects.length === 0)
        throw new Error('Can\'t merge zero objects');
      var ret = {};
      for (var j = 0; j < objects.length; j++) {
        var curObject = objects[j];
        for (var key in curObject)
          if (curObject.hasOwnProperty(key)) {
            ret[key] = merger(ret[key], curObject[key]);
          }
      }
      return ret;
    };
  };
  var deepMerge = baseMerge(deep);
  var merge = baseMerge(shallow);
  var $_2yrejjwyjeajomn9 = {
    deepMerge: deepMerge,
    merge: merge
  };

  var keys = function () {
    var fastKeys = Object.keys;
    var slowKeys = function (o) {
      var r = [];
      for (var i in o) {
        if (o.hasOwnProperty(i)) {
          r.push(i);
        }
      }
      return r;
    };
    return fastKeys === undefined ? slowKeys : fastKeys;
  }();
  var each$1 = function (obj, f) {
    var props = keys(obj);
    for (var k = 0, len = props.length; k < len; k++) {
      var i = props[k];
      var x = obj[i];
      f(x, i, obj);
    }
  };
  var objectMap = function (obj, f) {
    return tupleMap(obj, function (x, i, obj) {
      return {
        k: i,
        v: f(x, i, obj)
      };
    });
  };
  var tupleMap = function (obj, f) {
    var r = {};
    each$1(obj, function (x, i) {
      var tuple = f(x, i, obj);
      r[tuple.k] = tuple.v;
    });
    return r;
  };
  var bifilter = function (obj, pred) {
    var t = {};
    var f = {};
    each$1(obj, function (x, i) {
      var branch = pred(x, i) ? t : f;
      branch[i] = x;
    });
    return {
      t: t,
      f: f
    };
  };
  var mapToArray = function (obj, f) {
    var r = [];
    each$1(obj, function (value, name) {
      r.push(f(value, name));
    });
    return r;
  };
  var find$2 = function (obj, pred) {
    var props = keys(obj);
    for (var k = 0, len = props.length; k < len; k++) {
      var i = props[k];
      var x = obj[i];
      if (pred(x, i, obj)) {
        return Option.some(x);
      }
    }
    return Option.none();
  };
  var values = function (obj) {
    return mapToArray(obj, function (v) {
      return v;
    });
  };
  var size = function (obj) {
    return values(obj).length;
  };
  var $_9s6ha1x0jeajomnc = {
    bifilter: bifilter,
    each: each$1,
    map: objectMap,
    mapToArray: mapToArray,
    tupleMap: tupleMap,
    find: find$2,
    keys: keys,
    values: values,
    size: size
  };

  var emit = function (component, event) {
    dispatchWith(component, component.element(), event, {});
  };
  var emitWith = function (component, event, properties) {
    dispatchWith(component, component.element(), event, properties);
  };
  var emitExecute = function (component) {
    emit(component, $_bckj1uwhjeajomli.execute());
  };
  var dispatch = function (component, target, event) {
    dispatchWith(component, target, event, {});
  };
  var dispatchWith = function (component, target, event, properties) {
    var data = $_2yrejjwyjeajomn9.deepMerge({ target: target }, properties);
    component.getSystem().triggerEvent(event, target, $_9s6ha1x0jeajomnc.map(data, $_ddy4s3wjjeajomls.constant));
  };
  var dispatchEvent = function (component, target, event, simulatedEvent) {
    component.getSystem().triggerEvent(event, target, simulatedEvent.event());
  };
  var dispatchFocus = function (component, target) {
    component.getSystem().triggerFocus(target, component.element());
  };
  var $_30e2nlwgjeajomlb = {
    emit: emit,
    emitWith: emitWith,
    emitExecute: emitExecute,
    dispatch: dispatch,
    dispatchWith: dispatchWith,
    dispatchEvent: dispatchEvent,
    dispatchFocus: dispatchFocus
  };

  function Immutable () {
    var fields = arguments;
    return function () {
      var values = new Array(arguments.length);
      for (var i = 0; i < values.length; i++)
        values[i] = arguments[i];
      if (fields.length !== values.length)
        throw new Error('Wrong number of arguments to struct. Expected "[' + fields.length + ']", got ' + values.length + ' arguments');
      var struct = {};
      $_5r3pikwsjeajommo.each(fields, function (name, i) {
        struct[name] = $_ddy4s3wjjeajomls.constant(values[i]);
      });
      return struct;
    };
  }

  var sort$1 = function (arr) {
    return arr.slice(0).sort();
  };
  var reqMessage = function (required, keys) {
    throw new Error('All required keys (' + sort$1(required).join(', ') + ') were not specified. Specified keys were: ' + sort$1(keys).join(', ') + '.');
  };
  var unsuppMessage = function (unsupported) {
    throw new Error('Unsupported keys for object: ' + sort$1(unsupported).join(', '));
  };
  var validateStrArr = function (label, array) {
    if (!$_6vgadjwzjeajomnb.isArray(array))
      throw new Error('The ' + label + ' fields must be an array. Was: ' + array + '.');
    $_5r3pikwsjeajommo.each(array, function (a) {
      if (!$_6vgadjwzjeajomnb.isString(a))
        throw new Error('The value ' + a + ' in the ' + label + ' fields was not a string.');
    });
  };
  var invalidTypeMessage = function (incorrect, type) {
    throw new Error('All values need to be of type: ' + type + '. Keys (' + sort$1(incorrect).join(', ') + ') were not.');
  };
  var checkDupes = function (everything) {
    var sorted = sort$1(everything);
    var dupe = $_5r3pikwsjeajommo.find(sorted, function (s, i) {
      return i < sorted.length - 1 && s === sorted[i + 1];
    });
    dupe.each(function (d) {
      throw new Error('The field: ' + d + ' occurs more than once in the combined fields: [' + sorted.join(', ') + '].');
    });
  };
  var $_6ysf6ax7jeajomof = {
    sort: sort$1,
    reqMessage: reqMessage,
    unsuppMessage: unsuppMessage,
    validateStrArr: validateStrArr,
    invalidTypeMessage: invalidTypeMessage,
    checkDupes: checkDupes
  };

  function MixedBag (required, optional) {
    var everything = required.concat(optional);
    if (everything.length === 0)
      throw new Error('You must specify at least one required or optional field.');
    $_6ysf6ax7jeajomof.validateStrArr('required', required);
    $_6ysf6ax7jeajomof.validateStrArr('optional', optional);
    $_6ysf6ax7jeajomof.checkDupes(everything);
    return function (obj) {
      var keys = $_9s6ha1x0jeajomnc.keys(obj);
      var allReqd = $_5r3pikwsjeajommo.forall(required, function (req) {
        return $_5r3pikwsjeajommo.contains(keys, req);
      });
      if (!allReqd)
        $_6ysf6ax7jeajomof.reqMessage(required, keys);
      var unsupported = $_5r3pikwsjeajommo.filter(keys, function (key) {
        return !$_5r3pikwsjeajommo.contains(everything, key);
      });
      if (unsupported.length > 0)
        $_6ysf6ax7jeajomof.unsuppMessage(unsupported);
      var r = {};
      $_5r3pikwsjeajommo.each(required, function (req) {
        r[req] = $_ddy4s3wjjeajomls.constant(obj[req]);
      });
      $_5r3pikwsjeajommo.each(optional, function (opt) {
        r[opt] = $_ddy4s3wjjeajomls.constant(Object.prototype.hasOwnProperty.call(obj, opt) ? Option.some(obj[opt]) : Option.none());
      });
      return r;
    };
  }

  var $_6725fkx4jeajomoa = {
    immutable: Immutable,
    immutableBag: MixedBag
  };

  var toArray = function (target, f) {
    var r = [];
    var recurse = function (e) {
      r.push(e);
      return f(e);
    };
    var cur = f(target);
    do {
      cur = cur.bind(recurse);
    } while (cur.isSome());
    return r;
  };
  var $_794m5wx8jeajomoh = { toArray: toArray };

  var global = typeof window !== 'undefined' ? window : Function('return this;')();

  var path = function (parts, scope) {
    var o = scope !== undefined && scope !== null ? scope : global;
    for (var i = 0; i < parts.length && o !== undefined && o !== null; ++i)
      o = o[parts[i]];
    return o;
  };
  var resolve = function (p, scope) {
    var parts = p.split('.');
    return path(parts, scope);
  };
  var step = function (o, part) {
    if (o[part] === undefined || o[part] === null)
      o[part] = {};
    return o[part];
  };
  var forge = function (parts, target) {
    var o = target !== undefined ? target : global;
    for (var i = 0; i < parts.length; ++i)
      o = step(o, parts[i]);
    return o;
  };
  var namespace = function (name, target) {
    var parts = name.split('.');
    return forge(parts, target);
  };
  var $_1otqzqxcjeajomot = {
    path: path,
    resolve: resolve,
    forge: forge,
    namespace: namespace
  };

  var unsafe = function (name, scope) {
    return $_1otqzqxcjeajomot.resolve(name, scope);
  };
  var getOrDie = function (name, scope) {
    var actual = unsafe(name, scope);
    if (actual === undefined || actual === null)
      throw name + ' not available on this browser';
    return actual;
  };
  var $_6scm2kxbjeajomor = { getOrDie: getOrDie };

  var node = function () {
    var f = $_6scm2kxbjeajomor.getOrDie('Node');
    return f;
  };
  var compareDocumentPosition = function (a, b, match) {
    return (a.compareDocumentPosition(b) & match) !== 0;
  };
  var documentPositionPreceding = function (a, b) {
    return compareDocumentPosition(a, b, node().DOCUMENT_POSITION_PRECEDING);
  };
  var documentPositionContainedBy = function (a, b) {
    return compareDocumentPosition(a, b, node().DOCUMENT_POSITION_CONTAINED_BY);
  };
  var $_390c8cxajeajomop = {
    documentPositionPreceding: documentPositionPreceding,
    documentPositionContainedBy: documentPositionContainedBy
  };

  var fromHtml = function (html, scope) {
    var doc = scope || document;
    var div = doc.createElement('div');
    div.innerHTML = html;
    if (!div.hasChildNodes() || div.childNodes.length > 1) {
      console.error('HTML does not have a single root node', html);
      throw 'HTML must have a single root node';
    }
    return fromDom(div.childNodes[0]);
  };
  var fromTag = function (tag, scope) {
    var doc = scope || document;
    var node = doc.createElement(tag);
    return fromDom(node);
  };
  var fromText = function (text, scope) {
    var doc = scope || document;
    var node = doc.createTextNode(text);
    return fromDom(node);
  };
  var fromDom = function (node) {
    if (node === null || node === undefined)
      throw new Error('Node cannot be null or undefined');
    return { dom: $_ddy4s3wjjeajomls.constant(node) };
  };
  var fromPoint = function (doc, x, y) {
    return Option.from(doc.dom().elementFromPoint(x, y)).map(fromDom);
  };
  var $_8icwg5xfjeajomp0 = {
    fromHtml: fromHtml,
    fromTag: fromTag,
    fromText: fromText,
    fromDom: fromDom,
    fromPoint: fromPoint
  };

  var $_2kgeafxgjeajomp5 = {
    ATTRIBUTE: 2,
    CDATA_SECTION: 4,
    COMMENT: 8,
    DOCUMENT: 9,
    DOCUMENT_TYPE: 10,
    DOCUMENT_FRAGMENT: 11,
    ELEMENT: 1,
    TEXT: 3,
    PROCESSING_INSTRUCTION: 7,
    ENTITY_REFERENCE: 5,
    ENTITY: 6,
    NOTATION: 12
  };

  var ELEMENT = $_2kgeafxgjeajomp5.ELEMENT;
  var DOCUMENT = $_2kgeafxgjeajomp5.DOCUMENT;
  var is = function (element, selector) {
    var elem = element.dom();
    if (elem.nodeType !== ELEMENT)
      return false;
    else if (elem.matches !== undefined)
      return elem.matches(selector);
    else if (elem.msMatchesSelector !== undefined)
      return elem.msMatchesSelector(selector);
    else if (elem.webkitMatchesSelector !== undefined)
      return elem.webkitMatchesSelector(selector);
    else if (elem.mozMatchesSelector !== undefined)
      return elem.mozMatchesSelector(selector);
    else
      throw new Error('Browser lacks native selectors');
  };
  var bypassSelector = function (dom) {
    return dom.nodeType !== ELEMENT && dom.nodeType !== DOCUMENT || dom.childElementCount === 0;
  };
  var all = function (selector, scope) {
    var base = scope === undefined ? document : scope.dom();
    return bypassSelector(base) ? [] : $_5r3pikwsjeajommo.map(base.querySelectorAll(selector), $_8icwg5xfjeajomp0.fromDom);
  };
  var one = function (selector, scope) {
    var base = scope === undefined ? document : scope.dom();
    return bypassSelector(base) ? Option.none() : Option.from(base.querySelector(selector)).map($_8icwg5xfjeajomp0.fromDom);
  };
  var $_bokbooxejeajomow = {
    all: all,
    is: is,
    one: one
  };

  var eq = function (e1, e2) {
    return e1.dom() === e2.dom();
  };
  var isEqualNode = function (e1, e2) {
    return e1.dom().isEqualNode(e2.dom());
  };
  var member = function (element, elements) {
    return $_5r3pikwsjeajommo.exists(elements, $_ddy4s3wjjeajomls.curry(eq, element));
  };
  var regularContains = function (e1, e2) {
    var d1 = e1.dom(), d2 = e2.dom();
    return d1 === d2 ? false : d1.contains(d2);
  };
  var ieContains = function (e1, e2) {
    return $_390c8cxajeajomop.documentPositionContainedBy(e1.dom(), e2.dom());
  };
  var browser = $_g80fw1wkjeajomlw.detect().browser;
  var contains$2 = browser.isIE() ? ieContains : regularContains;
  var $_a12rd3x9jeajomoj = {
    eq: eq,
    isEqualNode: isEqualNode,
    member: member,
    contains: contains$2,
    is: $_bokbooxejeajomow.is
  };

  var owner = function (element) {
    return $_8icwg5xfjeajomp0.fromDom(element.dom().ownerDocument);
  };
  var documentElement = function (element) {
    var doc = owner(element);
    return $_8icwg5xfjeajomp0.fromDom(doc.dom().documentElement);
  };
  var defaultView = function (element) {
    var el = element.dom();
    var defaultView = el.ownerDocument.defaultView;
    return $_8icwg5xfjeajomp0.fromDom(defaultView);
  };
  var parent = function (element) {
    var dom = element.dom();
    return Option.from(dom.parentNode).map($_8icwg5xfjeajomp0.fromDom);
  };
  var findIndex$1 = function (element) {
    return parent(element).bind(function (p) {
      var kin = children(p);
      return $_5r3pikwsjeajommo.findIndex(kin, function (elem) {
        return $_a12rd3x9jeajomoj.eq(element, elem);
      });
    });
  };
  var parents = function (element, isRoot) {
    var stop = $_6vgadjwzjeajomnb.isFunction(isRoot) ? isRoot : $_ddy4s3wjjeajomls.constant(false);
    var dom = element.dom();
    var ret = [];
    while (dom.parentNode !== null && dom.parentNode !== undefined) {
      var rawParent = dom.parentNode;
      var parent = $_8icwg5xfjeajomp0.fromDom(rawParent);
      ret.push(parent);
      if (stop(parent) === true)
        break;
      else
        dom = rawParent;
    }
    return ret;
  };
  var siblings = function (element) {
    var filterSelf = function (elements) {
      return $_5r3pikwsjeajommo.filter(elements, function (x) {
        return !$_a12rd3x9jeajomoj.eq(element, x);
      });
    };
    return parent(element).map(children).map(filterSelf).getOr([]);
  };
  var offsetParent = function (element) {
    var dom = element.dom();
    return Option.from(dom.offsetParent).map($_8icwg5xfjeajomp0.fromDom);
  };
  var prevSibling = function (element) {
    var dom = element.dom();
    return Option.from(dom.previousSibling).map($_8icwg5xfjeajomp0.fromDom);
  };
  var nextSibling = function (element) {
    var dom = element.dom();
    return Option.from(dom.nextSibling).map($_8icwg5xfjeajomp0.fromDom);
  };
  var prevSiblings = function (element) {
    return $_5r3pikwsjeajommo.reverse($_794m5wx8jeajomoh.toArray(element, prevSibling));
  };
  var nextSiblings = function (element) {
    return $_794m5wx8jeajomoh.toArray(element, nextSibling);
  };
  var children = function (element) {
    var dom = element.dom();
    return $_5r3pikwsjeajommo.map(dom.childNodes, $_8icwg5xfjeajomp0.fromDom);
  };
  var child = function (element, index) {
    var children = element.dom().childNodes;
    return Option.from(children[index]).map($_8icwg5xfjeajomp0.fromDom);
  };
  var firstChild = function (element) {
    return child(element, 0);
  };
  var lastChild = function (element) {
    return child(element, element.dom().childNodes.length - 1);
  };
  var childNodesCount = function (element) {
    return element.dom().childNodes.length;
  };
  var hasChildNodes = function (element) {
    return element.dom().hasChildNodes();
  };
  var spot = $_6725fkx4jeajomoa.immutable('element', 'offset');
  var leaf = function (element, offset) {
    var cs = children(element);
    return cs.length > 0 && offset < cs.length ? spot(cs[offset], 0) : spot(element, offset);
  };
  var $_6xy0ax3jeajomo0 = {
    owner: owner,
    defaultView: defaultView,
    documentElement: documentElement,
    parent: parent,
    findIndex: findIndex$1,
    parents: parents,
    siblings: siblings,
    prevSibling: prevSibling,
    offsetParent: offsetParent,
    prevSiblings: prevSiblings,
    nextSibling: nextSibling,
    nextSiblings: nextSiblings,
    children: children,
    child: child,
    firstChild: firstChild,
    lastChild: lastChild,
    childNodesCount: childNodesCount,
    hasChildNodes: hasChildNodes,
    leaf: leaf
  };

  var before = function (marker, element) {
    var parent = $_6xy0ax3jeajomo0.parent(marker);
    parent.each(function (v) {
      v.dom().insertBefore(element.dom(), marker.dom());
    });
  };
  var after = function (marker, element) {
    var sibling = $_6xy0ax3jeajomo0.nextSibling(marker);
    sibling.fold(function () {
      var parent = $_6xy0ax3jeajomo0.parent(marker);
      parent.each(function (v) {
        append(v, element);
      });
    }, function (v) {
      before(v, element);
    });
  };
  var prepend = function (parent, element) {
    var firstChild = $_6xy0ax3jeajomo0.firstChild(parent);
    firstChild.fold(function () {
      append(parent, element);
    }, function (v) {
      parent.dom().insertBefore(element.dom(), v.dom());
    });
  };
  var append = function (parent, element) {
    parent.dom().appendChild(element.dom());
  };
  var appendAt = function (parent, element, index) {
    $_6xy0ax3jeajomo0.child(parent, index).fold(function () {
      append(parent, element);
    }, function (v) {
      before(v, element);
    });
  };
  var wrap = function (element, wrapper) {
    before(element, wrapper);
    append(wrapper, element);
  };
  var $_efdcljx2jeajomny = {
    before: before,
    after: after,
    prepend: prepend,
    append: append,
    appendAt: appendAt,
    wrap: wrap
  };

  var before$1 = function (marker, elements) {
    $_5r3pikwsjeajommo.each(elements, function (x) {
      $_efdcljx2jeajomny.before(marker, x);
    });
  };
  var after$1 = function (marker, elements) {
    $_5r3pikwsjeajommo.each(elements, function (x, i) {
      var e = i === 0 ? marker : elements[i - 1];
      $_efdcljx2jeajomny.after(e, x);
    });
  };
  var prepend$1 = function (parent, elements) {
    $_5r3pikwsjeajommo.each(elements.slice().reverse(), function (x) {
      $_efdcljx2jeajomny.prepend(parent, x);
    });
  };
  var append$1 = function (parent, elements) {
    $_5r3pikwsjeajommo.each(elements, function (x) {
      $_efdcljx2jeajomny.append(parent, x);
    });
  };
  var $_98m20vxijeajomp8 = {
    before: before$1,
    after: after$1,
    prepend: prepend$1,
    append: append$1
  };

  var empty = function (element) {
    element.dom().textContent = '';
    $_5r3pikwsjeajommo.each($_6xy0ax3jeajomo0.children(element), function (rogue) {
      remove(rogue);
    });
  };
  var remove = function (element) {
    var dom = element.dom();
    if (dom.parentNode !== null)
      dom.parentNode.removeChild(dom);
  };
  var unwrap = function (wrapper) {
    var children = $_6xy0ax3jeajomo0.children(wrapper);
    if (children.length > 0)
      $_98m20vxijeajomp8.before(wrapper, children);
    remove(wrapper);
  };
  var $_di46q7xhjeajomp6 = {
    empty: empty,
    remove: remove,
    unwrap: unwrap
  };

  var name = function (element) {
    var r = element.dom().nodeName;
    return r.toLowerCase();
  };
  var type = function (element) {
    return element.dom().nodeType;
  };
  var value = function (element) {
    return element.dom().nodeValue;
  };
  var isType$1 = function (t) {
    return function (element) {
      return type(element) === t;
    };
  };
  var isComment = function (element) {
    return type(element) === $_2kgeafxgjeajomp5.COMMENT || name(element) === '#comment';
  };
  var isElement = isType$1($_2kgeafxgjeajomp5.ELEMENT);
  var isText = isType$1($_2kgeafxgjeajomp5.TEXT);
  var isDocument = isType$1($_2kgeafxgjeajomp5.DOCUMENT);
  var $_bsb5vnxkjeajompc = {
    name: name,
    type: type,
    value: value,
    isElement: isElement,
    isText: isText,
    isDocument: isDocument,
    isComment: isComment
  };

  var inBody = function (element) {
    var dom = $_bsb5vnxkjeajompc.isText(element) ? element.dom().parentNode : element.dom();
    return dom !== undefined && dom !== null && dom.ownerDocument.body.contains(dom);
  };
  var body = $_2add5nwljeajomlz.cached(function () {
    return getBody($_8icwg5xfjeajomp0.fromDom(document));
  });
  var getBody = function (doc) {
    var body = doc.dom().body;
    if (body === null || body === undefined)
      throw 'Body is not available yet';
    return $_8icwg5xfjeajomp0.fromDom(body);
  };
  var $_6p2xg0xjjeajompa = {
    body: body,
    getBody: getBody,
    inBody: inBody
  };

  var fireDetaching = function (component) {
    $_30e2nlwgjeajomlb.emit(component, $_bckj1uwhjeajomli.detachedFromDom());
    var children = component.components();
    $_5r3pikwsjeajommo.each(children, fireDetaching);
  };
  var fireAttaching = function (component) {
    var children = component.components();
    $_5r3pikwsjeajommo.each(children, fireAttaching);
    $_30e2nlwgjeajomlb.emit(component, $_bckj1uwhjeajomli.attachedToDom());
  };
  var attach = function (parent, child) {
    attachWith(parent, child, $_efdcljx2jeajomny.append);
  };
  var attachWith = function (parent, child, insertion) {
    parent.getSystem().addToWorld(child);
    insertion(parent.element(), child.element());
    if ($_6p2xg0xjjeajompa.inBody(parent.element()))
      fireAttaching(child);
    parent.syncComponents();
  };
  var doDetach = function (component) {
    fireDetaching(component);
    $_di46q7xhjeajomp6.remove(component.element());
    component.getSystem().removeFromWorld(component);
  };
  var detach = function (component) {
    var parent = $_6xy0ax3jeajomo0.parent(component.element()).bind(function (p) {
      return component.getSystem().getByDom(p).fold(Option.none, Option.some);
    });
    doDetach(component);
    parent.each(function (p) {
      p.syncComponents();
    });
  };
  var detachChildren = function (component) {
    var subs = component.components();
    $_5r3pikwsjeajommo.each(subs, doDetach);
    $_di46q7xhjeajomp6.empty(component.element());
    component.syncComponents();
  };
  var attachSystem = function (element, guiSystem) {
    $_efdcljx2jeajomny.append(element, guiSystem.element());
    var children = $_6xy0ax3jeajomo0.children(guiSystem.element());
    $_5r3pikwsjeajommo.each(children, function (child) {
      guiSystem.getByDom(child).each(fireAttaching);
    });
  };
  var detachSystem = function (guiSystem) {
    var children = $_6xy0ax3jeajomo0.children(guiSystem.element());
    $_5r3pikwsjeajommo.each(children, function (child) {
      guiSystem.getByDom(child).each(fireDetaching);
    });
    $_di46q7xhjeajomp6.remove(guiSystem.element());
  };
  var $_f0icc0x1jeajomnf = {
    attach: attach,
    attachWith: attachWith,
    detach: detach,
    detachChildren: detachChildren,
    attachSystem: attachSystem,
    detachSystem: detachSystem
  };

  var fromHtml$1 = function (html, scope) {
    var doc = scope || document;
    var div = doc.createElement('div');
    div.innerHTML = html;
    return $_6xy0ax3jeajomo0.children($_8icwg5xfjeajomp0.fromDom(div));
  };
  var fromTags = function (tags, scope) {
    return $_5r3pikwsjeajommo.map(tags, function (x) {
      return $_8icwg5xfjeajomp0.fromTag(x, scope);
    });
  };
  var fromText$1 = function (texts, scope) {
    return $_5r3pikwsjeajommo.map(texts, function (x) {
      return $_8icwg5xfjeajomp0.fromText(x, scope);
    });
  };
  var fromDom$1 = function (nodes) {
    return $_5r3pikwsjeajommo.map(nodes, $_8icwg5xfjeajomp0.fromDom);
  };
  var $_9x8c87xpjeajomq9 = {
    fromHtml: fromHtml$1,
    fromTags: fromTags,
    fromText: fromText$1,
    fromDom: fromDom$1
  };

  var get = function (element) {
    return element.dom().innerHTML;
  };
  var set = function (element, content) {
    var owner = $_6xy0ax3jeajomo0.owner(element);
    var docDom = owner.dom();
    var fragment = $_8icwg5xfjeajomp0.fromDom(docDom.createDocumentFragment());
    var contentElements = $_9x8c87xpjeajomq9.fromHtml(content, docDom);
    $_98m20vxijeajomp8.append(fragment, contentElements);
    $_di46q7xhjeajomp6.empty(element);
    $_efdcljx2jeajomny.append(element, fragment);
  };
  var getOuter = function (element) {
    var container = $_8icwg5xfjeajomp0.fromTag('div');
    var clone = $_8icwg5xfjeajomp0.fromDom(element.dom().cloneNode(true));
    $_efdcljx2jeajomny.append(container, clone);
    return get(container);
  };
  var $_7pjouqxojeajomq7 = {
    get: get,
    set: set,
    getOuter: getOuter
  };

  var rawSet = function (dom, key, value) {
    if ($_6vgadjwzjeajomnb.isString(value) || $_6vgadjwzjeajomnb.isBoolean(value) || $_6vgadjwzjeajomnb.isNumber(value)) {
      dom.setAttribute(key, value + '');
    } else {
      console.error('Invalid call to Attr.set. Key ', key, ':: Value ', value, ':: Element ', dom);
      throw new Error('Attribute value was not simple');
    }
  };
  var set$1 = function (element, key, value) {
    rawSet(element.dom(), key, value);
  };
  var setAll = function (element, attrs) {
    var dom = element.dom();
    $_9s6ha1x0jeajomnc.each(attrs, function (v, k) {
      rawSet(dom, k, v);
    });
  };
  var get$1 = function (element, key) {
    var v = element.dom().getAttribute(key);
    return v === null ? undefined : v;
  };
  var has = function (element, key) {
    var dom = element.dom();
    return dom && dom.hasAttribute ? dom.hasAttribute(key) : false;
  };
  var remove$1 = function (element, key) {
    element.dom().removeAttribute(key);
  };
  var hasNone = function (element) {
    var attrs = element.dom().attributes;
    return attrs === undefined || attrs === null || attrs.length === 0;
  };
  var clone = function (element) {
    return $_5r3pikwsjeajommo.foldl(element.dom().attributes, function (acc, attr) {
      acc[attr.name] = attr.value;
      return acc;
    }, {});
  };
  var transferOne = function (source, destination, attr) {
    if (has(source, attr) && !has(destination, attr))
      set$1(destination, attr, get$1(source, attr));
  };
  var transfer = function (source, destination, attrs) {
    if (!$_bsb5vnxkjeajompc.isElement(source) || !$_bsb5vnxkjeajompc.isElement(destination))
      return;
    $_5r3pikwsjeajommo.each(attrs, function (attr) {
      transferOne(source, destination, attr);
    });
  };
  var $_a7s3osxrjeajomqe = {
    clone: clone,
    set: set$1,
    setAll: setAll,
    get: get$1,
    has: has,
    remove: remove$1,
    hasNone: hasNone,
    transfer: transfer
  };

  var clone$1 = function (original, deep) {
    return $_8icwg5xfjeajomp0.fromDom(original.dom().cloneNode(deep));
  };
  var shallow$1 = function (original) {
    return clone$1(original, false);
  };
  var deep$1 = function (original) {
    return clone$1(original, true);
  };
  var shallowAs = function (original, tag) {
    var nu = $_8icwg5xfjeajomp0.fromTag(tag);
    var attributes = $_a7s3osxrjeajomqe.clone(original);
    $_a7s3osxrjeajomqe.setAll(nu, attributes);
    return nu;
  };
  var copy = function (original, tag) {
    var nu = shallowAs(original, tag);
    var cloneChildren = $_6xy0ax3jeajomo0.children(deep$1(original));
    $_98m20vxijeajomp8.append(nu, cloneChildren);
    return nu;
  };
  var mutate = function (original, tag) {
    var nu = shallowAs(original, tag);
    $_efdcljx2jeajomny.before(original, nu);
    var children = $_6xy0ax3jeajomo0.children(original);
    $_98m20vxijeajomp8.append(nu, children);
    $_di46q7xhjeajomp6.remove(original);
    return nu;
  };
  var $_qty3sxqjeajomqc = {
    shallow: shallow$1,
    shallowAs: shallowAs,
    deep: deep$1,
    copy: copy,
    mutate: mutate
  };

  var getHtml = function (element) {
    var clone = $_qty3sxqjeajomqc.shallow(element);
    return $_7pjouqxojeajomq7.getOuter(clone);
  };
  var $_6q6iy4xnjeajomq4 = { getHtml: getHtml };

  var element = function (elem) {
    return $_6q6iy4xnjeajomq4.getHtml(elem);
  };
  var $_74y4xnxmjeajomq3 = { element: element };

  var value$1 = function (o) {
    var is = function (v) {
      return o === v;
    };
    var or = function (opt) {
      return value$1(o);
    };
    var orThunk = function (f) {
      return value$1(o);
    };
    var map = function (f) {
      return value$1(f(o));
    };
    var each = function (f) {
      f(o);
    };
    var bind = function (f) {
      return f(o);
    };
    var fold = function (_, onValue) {
      return onValue(o);
    };
    var exists = function (f) {
      return f(o);
    };
    var forall = function (f) {
      return f(o);
    };
    var toOption = function () {
      return Option.some(o);
    };
    return {
      is: is,
      isValue: $_ddy4s3wjjeajomls.always,
      isError: $_ddy4s3wjjeajomls.never,
      getOr: $_ddy4s3wjjeajomls.constant(o),
      getOrThunk: $_ddy4s3wjjeajomls.constant(o),
      getOrDie: $_ddy4s3wjjeajomls.constant(o),
      or: or,
      orThunk: orThunk,
      fold: fold,
      map: map,
      each: each,
      bind: bind,
      exists: exists,
      forall: forall,
      toOption: toOption
    };
  };
  var error = function (message) {
    var getOrThunk = function (f) {
      return f();
    };
    var getOrDie = function () {
      return $_ddy4s3wjjeajomls.die(message)();
    };
    var or = function (opt) {
      return opt;
    };
    var orThunk = function (f) {
      return f();
    };
    var map = function (f) {
      return error(message);
    };
    var bind = function (f) {
      return error(message);
    };
    var fold = function (onError, _) {
      return onError(message);
    };
    return {
      is: $_ddy4s3wjjeajomls.never,
      isValue: $_ddy4s3wjjeajomls.never,
      isError: $_ddy4s3wjjeajomls.always,
      getOr: $_ddy4s3wjjeajomls.identity,
      getOrThunk: getOrThunk,
      getOrDie: getOrDie,
      or: or,
      orThunk: orThunk,
      fold: fold,
      map: map,
      each: $_ddy4s3wjjeajomls.noop,
      bind: bind,
      exists: $_ddy4s3wjjeajomls.never,
      forall: $_ddy4s3wjjeajomls.always,
      toOption: Option.none
    };
  };
  var Result = {
    value: value$1,
    error: error
  };

  var generate = function (cases) {
    if (!$_6vgadjwzjeajomnb.isArray(cases)) {
      throw new Error('cases must be an array');
    }
    if (cases.length === 0) {
      throw new Error('there must be at least one case');
    }
    var constructors = [];
    var adt = {};
    $_5r3pikwsjeajommo.each(cases, function (acase, count) {
      var keys = $_9s6ha1x0jeajomnc.keys(acase);
      if (keys.length !== 1) {
        throw new Error('one and only one name per case');
      }
      var key = keys[0];
      var value = acase[key];
      if (adt[key] !== undefined) {
        throw new Error('duplicate key detected:' + key);
      } else if (key === 'cata') {
        throw new Error('cannot have a case named cata (sorry)');
      } else if (!$_6vgadjwzjeajomnb.isArray(value)) {
        throw new Error('case arguments must be an array');
      }
      constructors.push(key);
      adt[key] = function () {
        var argLength = arguments.length;
        if (argLength !== value.length) {
          throw new Error('Wrong number of arguments to case ' + key + '. Expected ' + value.length + ' (' + value + '), got ' + argLength);
        }
        var args = new Array(argLength);
        for (var i = 0; i < args.length; i++)
          args[i] = arguments[i];
        var match = function (branches) {
          var branchKeys = $_9s6ha1x0jeajomnc.keys(branches);
          if (constructors.length !== branchKeys.length) {
            throw new Error('Wrong number of arguments to match. Expected: ' + constructors.join(',') + '\nActual: ' + branchKeys.join(','));
          }
          var allReqd = $_5r3pikwsjeajommo.forall(constructors, function (reqKey) {
            return $_5r3pikwsjeajommo.contains(branchKeys, reqKey);
          });
          if (!allReqd)
            throw new Error('Not all branches were specified when using match. Specified: ' + branchKeys.join(', ') + '\nRequired: ' + constructors.join(', '));
          return branches[key].apply(null, args);
        };
        return {
          fold: function () {
            if (arguments.length !== cases.length) {
              throw new Error('Wrong number of arguments to fold. Expected ' + cases.length + ', got ' + arguments.length);
            }
            var target = arguments[count];
            return target.apply(null, args);
          },
          match: match,
          log: function (label) {
            console.log(label, {
              constructors: constructors,
              constructor: key,
              params: args
            });
          }
        };
      };
    });
    return adt;
  };
  var $_d1vtuwxwjeajomr2 = { generate: generate };

  var comparison = $_d1vtuwxwjeajomr2.generate([
    {
      bothErrors: [
        'error1',
        'error2'
      ]
    },
    {
      firstError: [
        'error1',
        'value2'
      ]
    },
    {
      secondError: [
        'value1',
        'error2'
      ]
    },
    {
      bothValues: [
        'value1',
        'value2'
      ]
    }
  ]);
  var partition$1 = function (results) {
    var errors = [];
    var values = [];
    $_5r3pikwsjeajommo.each(results, function (result) {
      result.fold(function (err) {
        errors.push(err);
      }, function (value) {
        values.push(value);
      });
    });
    return {
      errors: errors,
      values: values
    };
  };
  var compare = function (result1, result2) {
    return result1.fold(function (err1) {
      return result2.fold(function (err2) {
        return comparison.bothErrors(err1, err2);
      }, function (val2) {
        return comparison.firstError(err1, val2);
      });
    }, function (val1) {
      return result2.fold(function (err2) {
        return comparison.secondError(val1, err2);
      }, function (val2) {
        return comparison.bothValues(val1, val2);
      });
    });
  };
  var $_52xos1xvjeajomr0 = {
    partition: partition$1,
    compare: compare
  };

  var mergeValues = function (values, base) {
    return Result.value($_2yrejjwyjeajomn9.deepMerge.apply(undefined, [base].concat(values)));
  };
  var mergeErrors = function (errors) {
    return $_ddy4s3wjjeajomls.compose(Result.error, $_5r3pikwsjeajommo.flatten)(errors);
  };
  var consolidateObj = function (objects, base) {
    var partitions = $_52xos1xvjeajomr0.partition(objects);
    return partitions.errors.length > 0 ? mergeErrors(partitions.errors) : mergeValues(partitions.values, base);
  };
  var consolidateArr = function (objects) {
    var partitions = $_52xos1xvjeajomr0.partition(objects);
    return partitions.errors.length > 0 ? mergeErrors(partitions.errors) : Result.value(partitions.values);
  };
  var $_cqa0ixtjeajomqp = {
    consolidateObj: consolidateObj,
    consolidateArr: consolidateArr
  };

  var narrow = function (obj, fields) {
    var r = {};
    $_5r3pikwsjeajommo.each(fields, function (field) {
      if (obj[field] !== undefined && obj.hasOwnProperty(field))
        r[field] = obj[field];
    });
    return r;
  };
  var indexOnKey = function (array, key) {
    var obj = {};
    $_5r3pikwsjeajommo.each(array, function (a) {
      var keyValue = a[key];
      obj[keyValue] = a;
    });
    return obj;
  };
  var exclude = function (obj, fields) {
    var r = {};
    $_9s6ha1x0jeajomnc.each(obj, function (v, k) {
      if (!$_5r3pikwsjeajommo.contains(fields, k)) {
        r[k] = v;
      }
    });
    return r;
  };
  var $_cdnn67xxjeajomr5 = {
    narrow: narrow,
    exclude: exclude,
    indexOnKey: indexOnKey
  };

  var readOpt = function (key) {
    return function (obj) {
      return obj.hasOwnProperty(key) ? Option.from(obj[key]) : Option.none();
    };
  };
  var readOr = function (key, fallback) {
    return function (obj) {
      return readOpt(key)(obj).getOr(fallback);
    };
  };
  var readOptFrom = function (obj, key) {
    return readOpt(key)(obj);
  };
  var hasKey = function (obj, key) {
    return obj.hasOwnProperty(key) && obj[key] !== undefined && obj[key] !== null;
  };
  var $_c6c1vsxyjeajomr9 = {
    readOpt: readOpt,
    readOr: readOr,
    readOptFrom: readOptFrom,
    hasKey: hasKey
  };

  var wrap$1 = function (key, value) {
    var r = {};
    r[key] = value;
    return r;
  };
  var wrapAll = function (keyvalues) {
    var r = {};
    $_5r3pikwsjeajommo.each(keyvalues, function (kv) {
      r[kv.key] = kv.value;
    });
    return r;
  };
  var $_42176kxzjeajomrc = {
    wrap: wrap$1,
    wrapAll: wrapAll
  };

  var narrow$1 = function (obj, fields) {
    return $_cdnn67xxjeajomr5.narrow(obj, fields);
  };
  var exclude$1 = function (obj, fields) {
    return $_cdnn67xxjeajomr5.exclude(obj, fields);
  };
  var readOpt$1 = function (key) {
    return $_c6c1vsxyjeajomr9.readOpt(key);
  };
  var readOr$1 = function (key, fallback) {
    return $_c6c1vsxyjeajomr9.readOr(key, fallback);
  };
  var readOptFrom$1 = function (obj, key) {
    return $_c6c1vsxyjeajomr9.readOptFrom(obj, key);
  };
  var wrap$2 = function (key, value) {
    return $_42176kxzjeajomrc.wrap(key, value);
  };
  var wrapAll$1 = function (keyvalues) {
    return $_42176kxzjeajomrc.wrapAll(keyvalues);
  };
  var indexOnKey$1 = function (array, key) {
    return $_cdnn67xxjeajomr5.indexOnKey(array, key);
  };
  var consolidate = function (objs, base) {
    return $_cqa0ixtjeajomqp.consolidateObj(objs, base);
  };
  var hasKey$1 = function (obj, key) {
    return $_c6c1vsxyjeajomr9.hasKey(obj, key);
  };
  var $_6rmcx0xsjeajomqm = {
    narrow: narrow$1,
    exclude: exclude$1,
    readOpt: readOpt$1,
    readOr: readOr$1,
    readOptFrom: readOptFrom$1,
    wrap: wrap$2,
    wrapAll: wrapAll$1,
    indexOnKey: indexOnKey$1,
    hasKey: hasKey$1,
    consolidate: consolidate
  };

  var cat = function (arr) {
    var r = [];
    var push = function (x) {
      r.push(x);
    };
    for (var i = 0; i < arr.length; i++) {
      arr[i].each(push);
    }
    return r;
  };
  var findMap = function (arr, f) {
    for (var i = 0; i < arr.length; i++) {
      var r = f(arr[i], i);
      if (r.isSome()) {
        return r;
      }
    }
    return Option.none();
  };
  var liftN = function (arr, f) {
    var r = [];
    for (var i = 0; i < arr.length; i++) {
      var x = arr[i];
      if (x.isSome()) {
        r.push(x.getOrDie());
      } else {
        return Option.none();
      }
    }
    return Option.some(f.apply(null, r));
  };
  var $_62h1oqy0jeajomre = {
    cat: cat,
    findMap: findMap,
    liftN: liftN
  };

  var unknown$3 = 'unknown';
  var debugging = true;
  var CHROME_INSPECTOR_GLOBAL = '__CHROME_INSPECTOR_CONNECTION_TO_ALLOY__';
  var eventsMonitored = [];
  var path$1 = [
    'alloy/data/Fields',
    'alloy/debugging/Debugging'
  ];
  var getTrace = function () {
    if (debugging === false)
      return unknown$3;
    var err = new Error();
    if (err.stack !== undefined) {
      var lines = err.stack.split('\n');
      return $_5r3pikwsjeajommo.find(lines, function (line) {
        return line.indexOf('alloy') > 0 && !$_5r3pikwsjeajommo.exists(path$1, function (p) {
          return line.indexOf(p) > -1;
        });
      }).getOr(unknown$3);
    } else {
      return unknown$3;
    }
  };
  var logHandler = function (label, handlerName, trace) {
  };
  var ignoreEvent = {
    logEventCut: $_ddy4s3wjjeajomls.noop,
    logEventStopped: $_ddy4s3wjjeajomls.noop,
    logNoParent: $_ddy4s3wjjeajomls.noop,
    logEventNoHandlers: $_ddy4s3wjjeajomls.noop,
    logEventResponse: $_ddy4s3wjjeajomls.noop,
    write: $_ddy4s3wjjeajomls.noop
  };
  var monitorEvent = function (eventName, initialTarget, f) {
    var logger = debugging && (eventsMonitored === '*' || $_5r3pikwsjeajommo.contains(eventsMonitored, eventName)) ? function () {
      var sequence = [];
      return {
        logEventCut: function (name, target, purpose) {
          sequence.push({
            outcome: 'cut',
            target: target,
            purpose: purpose
          });
        },
        logEventStopped: function (name, target, purpose) {
          sequence.push({
            outcome: 'stopped',
            target: target,
            purpose: purpose
          });
        },
        logNoParent: function (name, target, purpose) {
          sequence.push({
            outcome: 'no-parent',
            target: target,
            purpose: purpose
          });
        },
        logEventNoHandlers: function (name, target) {
          sequence.push({
            outcome: 'no-handlers-left',
            target: target
          });
        },
        logEventResponse: function (name, target, purpose) {
          sequence.push({
            outcome: 'response',
            purpose: purpose,
            target: target
          });
        },
        write: function () {
          if ($_5r3pikwsjeajommo.contains([
              'mousemove',
              'mouseover',
              'mouseout',
              $_bckj1uwhjeajomli.systemInit()
            ], eventName))
            return;
          console.log(eventName, {
            event: eventName,
            target: initialTarget.dom(),
            sequence: $_5r3pikwsjeajommo.map(sequence, function (s) {
              if (!$_5r3pikwsjeajommo.contains([
                  'cut',
                  'stopped',
                  'response'
                ], s.outcome))
                return s.outcome;
              else
                return '{' + s.purpose + '} ' + s.outcome + ' at (' + $_74y4xnxmjeajomq3.element(s.target) + ')';
            })
          });
        }
      };
    }() : ignoreEvent;
    var output = f(logger);
    logger.write();
    return output;
  };
  var inspectorInfo = function (comp) {
    var go = function (c) {
      var cSpec = c.spec();
      return {
        '(original.spec)': cSpec,
        '(dom.ref)': c.element().dom(),
        '(element)': $_74y4xnxmjeajomq3.element(c.element()),
        '(initComponents)': $_5r3pikwsjeajommo.map(cSpec.components !== undefined ? cSpec.components : [], go),
        '(components)': $_5r3pikwsjeajommo.map(c.components(), go),
        '(bound.events)': $_9s6ha1x0jeajomnc.mapToArray(c.events(), function (v, k) {
          return [k];
        }).join(', '),
        '(behaviours)': cSpec.behaviours !== undefined ? $_9s6ha1x0jeajomnc.map(cSpec.behaviours, function (v, k) {
          return v === undefined ? '--revoked--' : {
            config: v.configAsRaw(),
            'original-config': v.initialConfig,
            state: c.readState(k)
          };
        }) : 'none'
      };
    };
    return go(comp);
  };
  var getOrInitConnection = function () {
    if (window[CHROME_INSPECTOR_GLOBAL] !== undefined)
      return window[CHROME_INSPECTOR_GLOBAL];
    else {
      window[CHROME_INSPECTOR_GLOBAL] = {
        systems: {},
        lookup: function (uid) {
          var systems = window[CHROME_INSPECTOR_GLOBAL].systems;
          var connections = $_9s6ha1x0jeajomnc.keys(systems);
          return $_62h1oqy0jeajomre.findMap(connections, function (conn) {
            var connGui = systems[conn];
            return connGui.getByUid(uid).toOption().map(function (comp) {
              return $_6rmcx0xsjeajomqm.wrap($_74y4xnxmjeajomq3.element(comp.element()), inspectorInfo(comp));
            });
          });
        }
      };
      return window[CHROME_INSPECTOR_GLOBAL];
    }
  };
  var registerInspector = function (name, gui) {
    var connection = getOrInitConnection();
    connection.systems[name] = gui;
  };
  var $_9igfqbxljeajompe = {
    logHandler: logHandler,
    noLogger: $_ddy4s3wjjeajomls.constant(ignoreEvent),
    getTrace: getTrace,
    monitorEvent: monitorEvent,
    isDebugging: $_ddy4s3wjjeajomls.constant(debugging),
    registerInspector: registerInspector
  };

  var isSource = function (component, simulatedEvent) {
    return $_a12rd3x9jeajomoj.eq(component.element(), simulatedEvent.event().target());
  };
  var $_378566y5jeajoms9 = { isSource: isSource };

  var adt = $_d1vtuwxwjeajomr2.generate([
    { strict: [] },
    { defaultedThunk: ['fallbackThunk'] },
    { asOption: [] },
    { asDefaultedOptionThunk: ['fallbackThunk'] },
    { mergeWithThunk: ['baseThunk'] }
  ]);
  var defaulted = function (fallback) {
    return adt.defaultedThunk($_ddy4s3wjjeajomls.constant(fallback));
  };
  var asDefaultedOption = function (fallback) {
    return adt.asDefaultedOptionThunk($_ddy4s3wjjeajomls.constant(fallback));
  };
  var mergeWith = function (base) {
    return adt.mergeWithThunk($_ddy4s3wjjeajomls.constant(base));
  };
  var $_6n8cmyy8jeajomsp = {
    strict: adt.strict,
    asOption: adt.asOption,
    defaulted: defaulted,
    defaultedThunk: adt.defaultedThunk,
    asDefaultedOption: asDefaultedOption,
    asDefaultedOptionThunk: adt.asDefaultedOptionThunk,
    mergeWith: mergeWith,
    mergeWithThunk: adt.mergeWithThunk
  };

  var typeAdt = $_d1vtuwxwjeajomr2.generate([
    {
      setOf: [
        'validator',
        'valueType'
      ]
    },
    { arrOf: ['valueType'] },
    { objOf: ['fields'] },
    { itemOf: ['validator'] },
    {
      choiceOf: [
        'key',
        'branches'
      ]
    },
    { thunk: ['description'] },
    {
      func: [
        'args',
        'outputSchema'
      ]
    }
  ]);
  var fieldAdt = $_d1vtuwxwjeajomr2.generate([
    {
      field: [
        'name',
        'presence',
        'type'
      ]
    },
    { state: ['name'] }
  ]);
  var $_g00d6kyajeajomt8 = {
    typeAdt: typeAdt,
    fieldAdt: fieldAdt
  };

  var json = function () {
    return $_6scm2kxbjeajomor.getOrDie('JSON');
  };
  var parse = function (obj) {
    return json().parse(obj);
  };
  var stringify = function (obj, replacer, space) {
    return json().stringify(obj, replacer, space);
  };
  var $_ax19tpydjeajomtj = {
    parse: parse,
    stringify: stringify
  };

  var formatObj = function (input) {
    return $_6vgadjwzjeajomnb.isObject(input) && $_9s6ha1x0jeajomnc.keys(input).length > 100 ? ' removed due to size' : $_ax19tpydjeajomtj.stringify(input, null, 2);
  };
  var formatErrors = function (errors) {
    var es = errors.length > 10 ? errors.slice(0, 10).concat([{
        path: [],
        getErrorInfo: function () {
          return '... (only showing first ten failures)';
        }
      }]) : errors;
    return $_5r3pikwsjeajommo.map(es, function (e) {
      return 'Failed path: (' + e.path.join(' > ') + ')\n' + e.getErrorInfo();
    });
  };
  var $_b5cy4tycjeajomtd = {
    formatObj: formatObj,
    formatErrors: formatErrors
  };

  var nu$3 = function (path, getErrorInfo) {
    return Result.error([{
        path: path,
        getErrorInfo: getErrorInfo
      }]);
  };
  var missingStrict = function (path, key, obj) {
    return nu$3(path, function () {
      return 'Could not find valid *strict* value for "' + key + '" in ' + $_b5cy4tycjeajomtd.formatObj(obj);
    });
  };
  var missingKey = function (path, key) {
    return nu$3(path, function () {
      return 'Choice schema did not contain choice key: "' + key + '"';
    });
  };
  var missingBranch = function (path, branches, branch) {
    return nu$3(path, function () {
      return 'The chosen schema: "' + branch + '" did not exist in branches: ' + $_b5cy4tycjeajomtd.formatObj(branches);
    });
  };
  var unsupportedFields = function (path, unsupported) {
    return nu$3(path, function () {
      return 'There are unsupported fields: [' + unsupported.join(', ') + '] specified';
    });
  };
  var custom = function (path, err) {
    return nu$3(path, function () {
      return err;
    });
  };
  var toString = function (error) {
    return 'Failed path: (' + error.path.join(' > ') + ')\n' + error.getErrorInfo();
  };
  var $_1t4pttybjeajomta = {
    missingStrict: missingStrict,
    missingKey: missingKey,
    missingBranch: missingBranch,
    unsupportedFields: unsupportedFields,
    custom: custom,
    toString: toString
  };

  var adt$1 = $_d1vtuwxwjeajomr2.generate([
    {
      field: [
        'key',
        'okey',
        'presence',
        'prop'
      ]
    },
    {
      state: [
        'okey',
        'instantiator'
      ]
    }
  ]);
  var output = function (okey, value) {
    return adt$1.state(okey, $_ddy4s3wjjeajomls.constant(value));
  };
  var snapshot = function (okey) {
    return adt$1.state(okey, $_ddy4s3wjjeajomls.identity);
  };
  var strictAccess = function (path, obj, key) {
    return $_c6c1vsxyjeajomr9.readOptFrom(obj, key).fold(function () {
      return $_1t4pttybjeajomta.missingStrict(path, key, obj);
    }, Result.value);
  };
  var fallbackAccess = function (obj, key, fallbackThunk) {
    var v = $_c6c1vsxyjeajomr9.readOptFrom(obj, key).fold(function () {
      return fallbackThunk(obj);
    }, $_ddy4s3wjjeajomls.identity);
    return Result.value(v);
  };
  var optionAccess = function (obj, key) {
    return Result.value($_c6c1vsxyjeajomr9.readOptFrom(obj, key));
  };
  var optionDefaultedAccess = function (obj, key, fallback) {
    var opt = $_c6c1vsxyjeajomr9.readOptFrom(obj, key).map(function (val) {
      return val === true ? fallback(obj) : val;
    });
    return Result.value(opt);
  };
  var cExtractOne = function (path, obj, field, strength) {
    return field.fold(function (key, okey, presence, prop) {
      var bundle = function (av) {
        return prop.extract(path.concat([key]), strength, av).map(function (res) {
          return $_42176kxzjeajomrc.wrap(okey, strength(res));
        });
      };
      var bundleAsOption = function (optValue) {
        return optValue.fold(function () {
          var outcome = $_42176kxzjeajomrc.wrap(okey, strength(Option.none()));
          return Result.value(outcome);
        }, function (ov) {
          return prop.extract(path.concat([key]), strength, ov).map(function (res) {
            return $_42176kxzjeajomrc.wrap(okey, strength(Option.some(res)));
          });
        });
      };
      return function () {
        return presence.fold(function () {
          return strictAccess(path, obj, key).bind(bundle);
        }, function (fallbackThunk) {
          return fallbackAccess(obj, key, fallbackThunk).bind(bundle);
        }, function () {
          return optionAccess(obj, key).bind(bundleAsOption);
        }, function (fallbackThunk) {
          return optionDefaultedAccess(obj, key, fallbackThunk).bind(bundleAsOption);
        }, function (baseThunk) {
          var base = baseThunk(obj);
          return fallbackAccess(obj, key, $_ddy4s3wjjeajomls.constant({})).map(function (v) {
            return $_2yrejjwyjeajomn9.deepMerge(base, v);
          }).bind(bundle);
        });
      }();
    }, function (okey, instantiator) {
      var state = instantiator(obj);
      return Result.value($_42176kxzjeajomrc.wrap(okey, strength(state)));
    });
  };
  var cExtract = function (path, obj, fields, strength) {
    var results = $_5r3pikwsjeajommo.map(fields, function (field) {
      return cExtractOne(path, obj, field, strength);
    });
    return $_cqa0ixtjeajomqp.consolidateObj(results, {});
  };
  var value$2 = function (validator) {
    var extract = function (path, strength, val) {
      return validator(val, strength).fold(function (err) {
        return $_1t4pttybjeajomta.custom(path, err);
      }, Result.value);
    };
    var toString = function () {
      return 'val';
    };
    var toDsl = function () {
      return $_g00d6kyajeajomt8.typeAdt.itemOf(validator);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var getSetKeys = function (obj) {
    var keys = $_9s6ha1x0jeajomnc.keys(obj);
    return $_5r3pikwsjeajommo.filter(keys, function (k) {
      return $_6rmcx0xsjeajomqm.hasKey(obj, k);
    });
  };
  var objOnly = function (fields) {
    var delegate = obj(fields);
    var fieldNames = $_5r3pikwsjeajommo.foldr(fields, function (acc, f) {
      return f.fold(function (key) {
        return $_2yrejjwyjeajomn9.deepMerge(acc, $_6rmcx0xsjeajomqm.wrap(key, true));
      }, $_ddy4s3wjjeajomls.constant(acc));
    }, {});
    var extract = function (path, strength, o) {
      var keys = $_6vgadjwzjeajomnb.isBoolean(o) ? [] : getSetKeys(o);
      var extra = $_5r3pikwsjeajommo.filter(keys, function (k) {
        return !$_6rmcx0xsjeajomqm.hasKey(fieldNames, k);
      });
      return extra.length === 0 ? delegate.extract(path, strength, o) : $_1t4pttybjeajomta.unsupportedFields(path, extra);
    };
    return {
      extract: extract,
      toString: delegate.toString,
      toDsl: delegate.toDsl
    };
  };
  var obj = function (fields) {
    var extract = function (path, strength, o) {
      return cExtract(path, o, fields, strength);
    };
    var toString = function () {
      var fieldStrings = $_5r3pikwsjeajommo.map(fields, function (field) {
        return field.fold(function (key, okey, presence, prop) {
          return key + ' -> ' + prop.toString();
        }, function (okey, instantiator) {
          return 'state(' + okey + ')';
        });
      });
      return 'obj{\n' + fieldStrings.join('\n') + '}';
    };
    var toDsl = function () {
      return $_g00d6kyajeajomt8.typeAdt.objOf($_5r3pikwsjeajommo.map(fields, function (f) {
        return f.fold(function (key, okey, presence, prop) {
          return $_g00d6kyajeajomt8.fieldAdt.field(key, presence, prop);
        }, function (okey, instantiator) {
          return $_g00d6kyajeajomt8.fieldAdt.state(okey);
        });
      }));
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var arr = function (prop) {
    var extract = function (path, strength, array) {
      var results = $_5r3pikwsjeajommo.map(array, function (a, i) {
        return prop.extract(path.concat(['[' + i + ']']), strength, a);
      });
      return $_cqa0ixtjeajomqp.consolidateArr(results);
    };
    var toString = function () {
      return 'array(' + prop.toString() + ')';
    };
    var toDsl = function () {
      return $_g00d6kyajeajomt8.typeAdt.arrOf(prop);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var setOf = function (validator, prop) {
    var validateKeys = function (path, keys) {
      return arr(value$2(validator)).extract(path, $_ddy4s3wjjeajomls.identity, keys);
    };
    var extract = function (path, strength, o) {
      var keys = $_9s6ha1x0jeajomnc.keys(o);
      return validateKeys(path, keys).bind(function (validKeys) {
        var schema = $_5r3pikwsjeajommo.map(validKeys, function (vk) {
          return adt$1.field(vk, vk, $_6n8cmyy8jeajomsp.strict(), prop);
        });
        return obj(schema).extract(path, strength, o);
      });
    };
    var toString = function () {
      return 'setOf(' + prop.toString() + ')';
    };
    var toDsl = function () {
      return $_g00d6kyajeajomt8.typeAdt.setOf(validator, prop);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var func = function (args, schema, retriever) {
    var delegate = value$2(function (f, strength) {
      return $_6vgadjwzjeajomnb.isFunction(f) ? Result.value(function () {
        var gArgs = Array.prototype.slice.call(arguments, 0);
        var allowedArgs = gArgs.slice(0, args.length);
        var o = f.apply(null, allowedArgs);
        return retriever(o, strength);
      }) : Result.error('Not a function');
    });
    return {
      extract: delegate.extract,
      toString: function () {
        return 'function';
      },
      toDsl: function () {
        return $_g00d6kyajeajomt8.typeAdt.func(args, schema);
      }
    };
  };
  var thunk = function (desc, processor) {
    var getP = $_2add5nwljeajomlz.cached(function () {
      return processor();
    });
    var extract = function (path, strength, val) {
      return getP().extract(path, strength, val);
    };
    var toString = function () {
      return getP().toString();
    };
    var toDsl = function () {
      return $_g00d6kyajeajomt8.typeAdt.thunk(desc);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var anyValue = value$2(Result.value);
  var arrOfObj = $_ddy4s3wjjeajomls.compose(arr, obj);
  var $_9i86u1y9jeajomsu = {
    anyValue: $_ddy4s3wjjeajomls.constant(anyValue),
    value: value$2,
    obj: obj,
    objOnly: objOnly,
    arr: arr,
    setOf: setOf,
    arrOfObj: arrOfObj,
    state: adt$1.state,
    field: adt$1.field,
    output: output,
    snapshot: snapshot,
    thunk: thunk,
    func: func
  };

  var strict = function (key) {
    return $_9i86u1y9jeajomsu.field(key, key, $_6n8cmyy8jeajomsp.strict(), $_9i86u1y9jeajomsu.anyValue());
  };
  var strictOf = function (key, schema) {
    return $_9i86u1y9jeajomsu.field(key, key, $_6n8cmyy8jeajomsp.strict(), schema);
  };
  var strictFunction = function (key) {
    return $_9i86u1y9jeajomsu.field(key, key, $_6n8cmyy8jeajomsp.strict(), $_9i86u1y9jeajomsu.value(function (f) {
      return $_6vgadjwzjeajomnb.isFunction(f) ? Result.value(f) : Result.error('Not a function');
    }));
  };
  var forbid = function (key, message) {
    return $_9i86u1y9jeajomsu.field(key, key, $_6n8cmyy8jeajomsp.asOption(), $_9i86u1y9jeajomsu.value(function (v) {
      return Result.error('The field: ' + key + ' is forbidden. ' + message);
    }));
  };
  var strictArrayOf = function (key, prop) {
    return strictOf(key, prop);
  };
  var strictObjOf = function (key, objSchema) {
    return $_9i86u1y9jeajomsu.field(key, key, $_6n8cmyy8jeajomsp.strict(), $_9i86u1y9jeajomsu.obj(objSchema));
  };
  var strictArrayOfObj = function (key, objFields) {
    return $_9i86u1y9jeajomsu.field(key, key, $_6n8cmyy8jeajomsp.strict(), $_9i86u1y9jeajomsu.arrOfObj(objFields));
  };
  var option = function (key) {
    return $_9i86u1y9jeajomsu.field(key, key, $_6n8cmyy8jeajomsp.asOption(), $_9i86u1y9jeajomsu.anyValue());
  };
  var optionOf = function (key, schema) {
    return $_9i86u1y9jeajomsu.field(key, key, $_6n8cmyy8jeajomsp.asOption(), schema);
  };
  var optionObjOf = function (key, objSchema) {
    return $_9i86u1y9jeajomsu.field(key, key, $_6n8cmyy8jeajomsp.asOption(), $_9i86u1y9jeajomsu.obj(objSchema));
  };
  var optionObjOfOnly = function (key, objSchema) {
    return $_9i86u1y9jeajomsu.field(key, key, $_6n8cmyy8jeajomsp.asOption(), $_9i86u1y9jeajomsu.objOnly(objSchema));
  };
  var defaulted$1 = function (key, fallback) {
    return $_9i86u1y9jeajomsu.field(key, key, $_6n8cmyy8jeajomsp.defaulted(fallback), $_9i86u1y9jeajomsu.anyValue());
  };
  var defaultedOf = function (key, fallback, schema) {
    return $_9i86u1y9jeajomsu.field(key, key, $_6n8cmyy8jeajomsp.defaulted(fallback), schema);
  };
  var defaultedObjOf = function (key, fallback, objSchema) {
    return $_9i86u1y9jeajomsu.field(key, key, $_6n8cmyy8jeajomsp.defaulted(fallback), $_9i86u1y9jeajomsu.obj(objSchema));
  };
  var field = function (key, okey, presence, prop) {
    return $_9i86u1y9jeajomsu.field(key, okey, presence, prop);
  };
  var state = function (okey, instantiator) {
    return $_9i86u1y9jeajomsu.state(okey, instantiator);
  };
  var $_8qbqu2y7jeajomsl = {
    strict: strict,
    strictOf: strictOf,
    strictObjOf: strictObjOf,
    strictArrayOf: strictArrayOf,
    strictArrayOfObj: strictArrayOfObj,
    strictFunction: strictFunction,
    forbid: forbid,
    option: option,
    optionOf: optionOf,
    optionObjOf: optionObjOf,
    optionObjOfOnly: optionObjOfOnly,
    defaulted: defaulted$1,
    defaultedOf: defaultedOf,
    defaultedObjOf: defaultedObjOf,
    field: field,
    state: state
  };

  var chooseFrom = function (path, strength, input, branches, ch) {
    var fields = $_6rmcx0xsjeajomqm.readOptFrom(branches, ch);
    return fields.fold(function () {
      return $_1t4pttybjeajomta.missingBranch(path, branches, ch);
    }, function (fs) {
      return $_9i86u1y9jeajomsu.obj(fs).extract(path.concat(['branch: ' + ch]), strength, input);
    });
  };
  var choose = function (key, branches) {
    var extract = function (path, strength, input) {
      var choice = $_6rmcx0xsjeajomqm.readOptFrom(input, key);
      return choice.fold(function () {
        return $_1t4pttybjeajomta.missingKey(path, key);
      }, function (chosen) {
        return chooseFrom(path, strength, input, branches, chosen);
      });
    };
    var toString = function () {
      return 'chooseOn(' + key + '). Possible values: ' + $_9s6ha1x0jeajomnc.keys(branches);
    };
    var toDsl = function () {
      return $_g00d6kyajeajomt8.typeAdt.choiceOf(key, branches);
    };
    return {
      extract: extract,
      toString: toString,
      toDsl: toDsl
    };
  };
  var $_5penbuyfjeajomtq = { choose: choose };

  var anyValue$1 = $_9i86u1y9jeajomsu.value(Result.value);
  var arrOfObj$1 = function (objFields) {
    return $_9i86u1y9jeajomsu.arrOfObj(objFields);
  };
  var arrOfVal = function () {
    return $_9i86u1y9jeajomsu.arr(anyValue$1);
  };
  var arrOf = $_9i86u1y9jeajomsu.arr;
  var objOf = $_9i86u1y9jeajomsu.obj;
  var objOfOnly = $_9i86u1y9jeajomsu.objOnly;
  var setOf$1 = $_9i86u1y9jeajomsu.setOf;
  var valueOf = function (validator) {
    return $_9i86u1y9jeajomsu.value(function (v) {
      return validator(v);
    });
  };
  var extract = function (label, prop, strength, obj) {
    return prop.extract([label], strength, obj).fold(function (errs) {
      return Result.error({
        input: obj,
        errors: errs
      });
    }, Result.value);
  };
  var asStruct = function (label, prop, obj) {
    return extract(label, prop, $_ddy4s3wjjeajomls.constant, obj);
  };
  var asRaw = function (label, prop, obj) {
    return extract(label, prop, $_ddy4s3wjjeajomls.identity, obj);
  };
  var getOrDie$1 = function (extraction) {
    return extraction.fold(function (errInfo) {
      throw new Error(formatError(errInfo));
    }, $_ddy4s3wjjeajomls.identity);
  };
  var asRawOrDie = function (label, prop, obj) {
    return getOrDie$1(asRaw(label, prop, obj));
  };
  var asStructOrDie = function (label, prop, obj) {
    return getOrDie$1(asStruct(label, prop, obj));
  };
  var formatError = function (errInfo) {
    return 'Errors: \n' + $_b5cy4tycjeajomtd.formatErrors(errInfo.errors) + '\n\nInput object: ' + $_b5cy4tycjeajomtd.formatObj(errInfo.input);
  };
  var choose$1 = function (key, branches) {
    return $_5penbuyfjeajomtq.choose(key, branches);
  };
  var thunkOf = function (desc, schema) {
    return $_9i86u1y9jeajomsu.thunk(desc, schema);
  };
  var funcOrDie = function (args, schema) {
    var retriever = function (output, strength) {
      return getOrDie$1(extract('()', schema, strength, output));
    };
    return $_9i86u1y9jeajomsu.func(args, schema, retriever);
  };
  var $_8qt2pyyejeajomtl = {
    anyValue: $_ddy4s3wjjeajomls.constant(anyValue$1),
    arrOfObj: arrOfObj$1,
    arrOf: arrOf,
    arrOfVal: arrOfVal,
    valueOf: valueOf,
    setOf: setOf$1,
    objOf: objOf,
    objOfOnly: objOfOnly,
    asStruct: asStruct,
    asRaw: asRaw,
    asStructOrDie: asStructOrDie,
    asRawOrDie: asRawOrDie,
    getOrDie: getOrDie$1,
    formatError: formatError,
    choose: choose$1,
    thunkOf: thunkOf,
    funcOrDie: funcOrDie
  };

  var nu$4 = function (parts) {
    if (!$_6rmcx0xsjeajomqm.hasKey(parts, 'can') && !$_6rmcx0xsjeajomqm.hasKey(parts, 'abort') && !$_6rmcx0xsjeajomqm.hasKey(parts, 'run'))
      throw new Error('EventHandler defined by: ' + $_ax19tpydjeajomtj.stringify(parts, null, 2) + ' does not have can, abort, or run!');
    return $_8qt2pyyejeajomtl.asRawOrDie('Extracting event.handler', $_8qt2pyyejeajomtl.objOfOnly([
      $_8qbqu2y7jeajomsl.defaulted('can', $_ddy4s3wjjeajomls.constant(true)),
      $_8qbqu2y7jeajomsl.defaulted('abort', $_ddy4s3wjjeajomls.constant(false)),
      $_8qbqu2y7jeajomsl.defaulted('run', $_ddy4s3wjjeajomls.noop)
    ]), parts);
  };
  var all$1 = function (handlers, f) {
    return function () {
      var args = Array.prototype.slice.call(arguments, 0);
      return $_5r3pikwsjeajommo.foldl(handlers, function (acc, handler) {
        return acc && f(handler).apply(undefined, args);
      }, true);
    };
  };
  var any = function (handlers, f) {
    return function () {
      var args = Array.prototype.slice.call(arguments, 0);
      return $_5r3pikwsjeajommo.foldl(handlers, function (acc, handler) {
        return acc || f(handler).apply(undefined, args);
      }, false);
    };
  };
  var read = function (handler) {
    return $_6vgadjwzjeajomnb.isFunction(handler) ? {
      can: $_ddy4s3wjjeajomls.constant(true),
      abort: $_ddy4s3wjjeajomls.constant(false),
      run: handler
    } : handler;
  };
  var fuse = function (handlers) {
    var can = all$1(handlers, function (handler) {
      return handler.can;
    });
    var abort = any(handlers, function (handler) {
      return handler.abort;
    });
    var run = function () {
      var args = Array.prototype.slice.call(arguments, 0);
      $_5r3pikwsjeajommo.each(handlers, function (handler) {
        handler.run.apply(undefined, args);
      });
    };
    return nu$4({
      can: can,
      abort: abort,
      run: run
    });
  };
  var $_8ilecey6jeajomsc = {
    read: read,
    fuse: fuse,
    nu: nu$4
  };

  var derive = $_6rmcx0xsjeajomqm.wrapAll;
  var abort = function (name, predicate) {
    return {
      key: name,
      value: $_8ilecey6jeajomsc.nu({ abort: predicate })
    };
  };
  var can = function (name, predicate) {
    return {
      key: name,
      value: $_8ilecey6jeajomsc.nu({ can: predicate })
    };
  };
  var preventDefault = function (name) {
    return {
      key: name,
      value: $_8ilecey6jeajomsc.nu({
        run: function (component, simulatedEvent) {
          simulatedEvent.event().prevent();
        }
      })
    };
  };
  var run = function (name, handler) {
    return {
      key: name,
      value: $_8ilecey6jeajomsc.nu({ run: handler })
    };
  };
  var runActionExtra = function (name, action, extra) {
    return {
      key: name,
      value: $_8ilecey6jeajomsc.nu({
        run: function (component) {
          action.apply(undefined, [component].concat(extra));
        }
      })
    };
  };
  var runOnName = function (name) {
    return function (handler) {
      return run(name, handler);
    };
  };
  var runOnSourceName = function (name) {
    return function (handler) {
      return {
        key: name,
        value: $_8ilecey6jeajomsc.nu({
          run: function (component, simulatedEvent) {
            if ($_378566y5jeajoms9.isSource(component, simulatedEvent))
              handler(component, simulatedEvent);
          }
        })
      };
    };
  };
  var redirectToUid = function (name, uid) {
    return run(name, function (component, simulatedEvent) {
      component.getSystem().getByUid(uid).each(function (redirectee) {
        $_30e2nlwgjeajomlb.dispatchEvent(redirectee, redirectee.element(), name, simulatedEvent);
      });
    });
  };
  var redirectToPart = function (name, detail, partName) {
    var uid = detail.partUids()[partName];
    return redirectToUid(name, uid);
  };
  var runWithTarget = function (name, f) {
    return run(name, function (component, simulatedEvent) {
      component.getSystem().getByDom(simulatedEvent.event().target()).each(function (target) {
        f(component, target, simulatedEvent);
      });
    });
  };
  var cutter = function (name) {
    return run(name, function (component, simulatedEvent) {
      simulatedEvent.cut();
    });
  };
  var stopper = function (name) {
    return run(name, function (component, simulatedEvent) {
      simulatedEvent.stop();
    });
  };
  var $_2vhl2dy4jeajoms5 = {
    derive: derive,
    run: run,
    preventDefault: preventDefault,
    runActionExtra: runActionExtra,
    runOnAttached: runOnSourceName($_bckj1uwhjeajomli.attachedToDom()),
    runOnDetached: runOnSourceName($_bckj1uwhjeajomli.detachedFromDom()),
    runOnInit: runOnSourceName($_bckj1uwhjeajomli.systemInit()),
    runOnExecute: runOnName($_bckj1uwhjeajomli.execute()),
    redirectToUid: redirectToUid,
    redirectToPart: redirectToPart,
    runWithTarget: runWithTarget,
    abort: abort,
    can: can,
    cutter: cutter,
    stopper: stopper
  };

  var markAsBehaviourApi = function (f, apiName, apiFunction) {
    return f;
  };
  var markAsExtraApi = function (f, extraName) {
    return f;
  };
  var markAsSketchApi = function (f, apiFunction) {
    return f;
  };
  var getAnnotation = Option.none;
  var $_fr899xygjeajomty = {
    markAsBehaviourApi: markAsBehaviourApi,
    markAsExtraApi: markAsExtraApi,
    markAsSketchApi: markAsSketchApi,
    getAnnotation: getAnnotation
  };

  var nu$5 = $_6725fkx4jeajomoa.immutableBag(['tag'], [
    'classes',
    'attributes',
    'styles',
    'value',
    'innerHtml',
    'domChildren',
    'defChildren'
  ]);
  var defToStr = function (defn) {
    var raw = defToRaw(defn);
    return $_ax19tpydjeajomtj.stringify(raw, null, 2);
  };
  var defToRaw = function (defn) {
    return {
      tag: defn.tag(),
      classes: defn.classes().getOr([]),
      attributes: defn.attributes().getOr({}),
      styles: defn.styles().getOr({}),
      value: defn.value().getOr('<none>'),
      innerHtml: defn.innerHtml().getOr('<none>'),
      defChildren: defn.defChildren().getOr('<none>'),
      domChildren: defn.domChildren().fold(function () {
        return '<none>';
      }, function (children) {
        return children.length === 0 ? '0 children, but still specified' : String(children.length);
      })
    };
  };
  var $_6vb723yijeajomua = {
    nu: nu$5,
    defToStr: defToStr,
    defToRaw: defToRaw
  };

  var fields = [
    'classes',
    'attributes',
    'styles',
    'value',
    'innerHtml',
    'defChildren',
    'domChildren'
  ];
  var nu$6 = $_6725fkx4jeajomoa.immutableBag([], fields);
  var derive$1 = function (settings) {
    var r = {};
    var keys = $_9s6ha1x0jeajomnc.keys(settings);
    $_5r3pikwsjeajommo.each(keys, function (key) {
      settings[key].each(function (v) {
        r[key] = v;
      });
    });
    return nu$6(r);
  };
  var modToStr = function (mod) {
    var raw = modToRaw(mod);
    return $_ax19tpydjeajomtj.stringify(raw, null, 2);
  };
  var modToRaw = function (mod) {
    return {
      classes: mod.classes().getOr('<none>'),
      attributes: mod.attributes().getOr('<none>'),
      styles: mod.styles().getOr('<none>'),
      value: mod.value().getOr('<none>'),
      innerHtml: mod.innerHtml().getOr('<none>'),
      defChildren: mod.defChildren().getOr('<none>'),
      domChildren: mod.domChildren().fold(function () {
        return '<none>';
      }, function (children) {
        return children.length === 0 ? '0 children, but still specified' : String(children.length);
      })
    };
  };
  var clashingOptArrays = function (key, oArr1, oArr2) {
    return oArr1.fold(function () {
      return oArr2.fold(function () {
        return {};
      }, function (arr2) {
        return $_6rmcx0xsjeajomqm.wrap(key, arr2);
      });
    }, function (arr1) {
      return oArr2.fold(function () {
        return $_6rmcx0xsjeajomqm.wrap(key, arr1);
      }, function (arr2) {
        return $_6rmcx0xsjeajomqm.wrap(key, arr2);
      });
    });
  };
  var merge$1 = function (defnA, mod) {
    var raw = $_2yrejjwyjeajomn9.deepMerge({
      tag: defnA.tag(),
      classes: mod.classes().getOr([]).concat(defnA.classes().getOr([])),
      attributes: $_2yrejjwyjeajomn9.merge(defnA.attributes().getOr({}), mod.attributes().getOr({})),
      styles: $_2yrejjwyjeajomn9.merge(defnA.styles().getOr({}), mod.styles().getOr({}))
    }, mod.innerHtml().or(defnA.innerHtml()).map(function (innerHtml) {
      return $_6rmcx0xsjeajomqm.wrap('innerHtml', innerHtml);
    }).getOr({}), clashingOptArrays('domChildren', mod.domChildren(), defnA.domChildren()), clashingOptArrays('defChildren', mod.defChildren(), defnA.defChildren()), mod.value().or(defnA.value()).map(function (value) {
      return $_6rmcx0xsjeajomqm.wrap('value', value);
    }).getOr({}));
    return $_6vb723yijeajomua.nu(raw);
  };
  var $_zcg1fyhjeajomu1 = {
    nu: nu$6,
    derive: derive$1,
    merge: merge$1,
    modToStr: modToStr,
    modToRaw: modToRaw
  };

  var executeEvent = function (bConfig, bState, executor) {
    return $_2vhl2dy4jeajoms5.runOnExecute(function (component) {
      executor(component, bConfig, bState);
    });
  };
  var loadEvent = function (bConfig, bState, f) {
    return $_2vhl2dy4jeajoms5.runOnInit(function (component, simulatedEvent) {
      f(component, bConfig, bState);
    });
  };
  var create = function (schema, name, active, apis, extra, state) {
    var configSchema = $_8qt2pyyejeajomtl.objOfOnly(schema);
    var schemaSchema = $_8qbqu2y7jeajomsl.optionObjOf(name, [$_8qbqu2y7jeajomsl.optionObjOfOnly('config', schema)]);
    return doCreate(configSchema, schemaSchema, name, active, apis, extra, state);
  };
  var createModes = function (modes, name, active, apis, extra, state) {
    var configSchema = modes;
    var schemaSchema = $_8qbqu2y7jeajomsl.optionObjOf(name, [$_8qbqu2y7jeajomsl.optionOf('config', modes)]);
    return doCreate(configSchema, schemaSchema, name, active, apis, extra, state);
  };
  var wrapApi = function (bName, apiFunction, apiName) {
    var f = function (component) {
      var args = arguments;
      return component.config({ name: $_ddy4s3wjjeajomls.constant(bName) }).fold(function () {
        throw new Error('We could not find any behaviour configuration for: ' + bName + '. Using API: ' + apiName);
      }, function (info) {
        var rest = Array.prototype.slice.call(args, 1);
        return apiFunction.apply(undefined, [
          component,
          info.config,
          info.state
        ].concat(rest));
      });
    };
    return $_fr899xygjeajomty.markAsBehaviourApi(f, apiName, apiFunction);
  };
  var revokeBehaviour = function (name) {
    return {
      key: name,
      value: undefined
    };
  };
  var doCreate = function (configSchema, schemaSchema, name, active, apis, extra, state) {
    var getConfig = function (info) {
      return $_6rmcx0xsjeajomqm.hasKey(info, name) ? info[name]() : Option.none();
    };
    var wrappedApis = $_9s6ha1x0jeajomnc.map(apis, function (apiF, apiName) {
      return wrapApi(name, apiF, apiName);
    });
    var wrappedExtra = $_9s6ha1x0jeajomnc.map(extra, function (extraF, extraName) {
      return $_fr899xygjeajomty.markAsExtraApi(extraF, extraName);
    });
    var me = $_2yrejjwyjeajomn9.deepMerge(wrappedExtra, wrappedApis, {
      revoke: $_ddy4s3wjjeajomls.curry(revokeBehaviour, name),
      config: function (spec) {
        var prepared = $_8qt2pyyejeajomtl.asStructOrDie(name + '-config', configSchema, spec);
        return {
          key: name,
          value: {
            config: prepared,
            me: me,
            configAsRaw: $_2add5nwljeajomlz.cached(function () {
              return $_8qt2pyyejeajomtl.asRawOrDie(name + '-config', configSchema, spec);
            }),
            initialConfig: spec,
            state: state
          }
        };
      },
      schema: function () {
        return schemaSchema;
      },
      exhibit: function (info, base) {
        return getConfig(info).bind(function (behaviourInfo) {
          return $_6rmcx0xsjeajomqm.readOptFrom(active, 'exhibit').map(function (exhibitor) {
            return exhibitor(base, behaviourInfo.config, behaviourInfo.state);
          });
        }).getOr($_zcg1fyhjeajomu1.nu({}));
      },
      name: function () {
        return name;
      },
      handlers: function (info) {
        return getConfig(info).bind(function (behaviourInfo) {
          return $_6rmcx0xsjeajomqm.readOptFrom(active, 'events').map(function (events) {
            return events(behaviourInfo.config, behaviourInfo.state);
          });
        }).getOr({});
      }
    });
    return me;
  };
  var $_83rbg8y3jeajomro = {
    executeEvent: executeEvent,
    loadEvent: loadEvent,
    create: create,
    createModes: createModes
  };

  var base = function (handleUnsupported, required) {
    return baseWith(handleUnsupported, required, {
      validate: $_6vgadjwzjeajomnb.isFunction,
      label: 'function'
    });
  };
  var baseWith = function (handleUnsupported, required, pred) {
    if (required.length === 0)
      throw new Error('You must specify at least one required field.');
    $_6ysf6ax7jeajomof.validateStrArr('required', required);
    $_6ysf6ax7jeajomof.checkDupes(required);
    return function (obj) {
      var keys = $_9s6ha1x0jeajomnc.keys(obj);
      var allReqd = $_5r3pikwsjeajommo.forall(required, function (req) {
        return $_5r3pikwsjeajommo.contains(keys, req);
      });
      if (!allReqd)
        $_6ysf6ax7jeajomof.reqMessage(required, keys);
      handleUnsupported(required, keys);
      var invalidKeys = $_5r3pikwsjeajommo.filter(required, function (key) {
        return !pred.validate(obj[key], key);
      });
      if (invalidKeys.length > 0)
        $_6ysf6ax7jeajomof.invalidTypeMessage(invalidKeys, pred.label);
      return obj;
    };
  };
  var handleExact = function (required, keys) {
    var unsupported = $_5r3pikwsjeajommo.filter(keys, function (key) {
      return !$_5r3pikwsjeajommo.contains(required, key);
    });
    if (unsupported.length > 0)
      $_6ysf6ax7jeajomof.unsuppMessage(unsupported);
  };
  var allowExtra = $_ddy4s3wjjeajomls.noop;
  var $_jjzweyljeajomug = {
    exactly: $_ddy4s3wjjeajomls.curry(base, handleExact),
    ensure: $_ddy4s3wjjeajomls.curry(base, allowExtra),
    ensureWith: $_ddy4s3wjjeajomls.curry(baseWith, allowExtra)
  };

  var BehaviourState = $_jjzweyljeajomug.ensure(['readState']);

  var init = function () {
    return BehaviourState({
      readState: function () {
        return 'No State required';
      }
    });
  };
  var $_8yipm6yjjeajomue = { init: init };

  var derive$2 = function (capabilities) {
    return $_6rmcx0xsjeajomqm.wrapAll(capabilities);
  };
  var simpleSchema = $_8qt2pyyejeajomtl.objOfOnly([
    $_8qbqu2y7jeajomsl.strict('fields'),
    $_8qbqu2y7jeajomsl.strict('name'),
    $_8qbqu2y7jeajomsl.defaulted('active', {}),
    $_8qbqu2y7jeajomsl.defaulted('apis', {}),
    $_8qbqu2y7jeajomsl.defaulted('extra', {}),
    $_8qbqu2y7jeajomsl.defaulted('state', $_8yipm6yjjeajomue)
  ]);
  var create$1 = function (data) {
    var value = $_8qt2pyyejeajomtl.asRawOrDie('Creating behaviour: ' + data.name, simpleSchema, data);
    return $_83rbg8y3jeajomro.create(value.fields, value.name, value.active, value.apis, value.extra, value.state);
  };
  var modeSchema = $_8qt2pyyejeajomtl.objOfOnly([
    $_8qbqu2y7jeajomsl.strict('branchKey'),
    $_8qbqu2y7jeajomsl.strict('branches'),
    $_8qbqu2y7jeajomsl.strict('name'),
    $_8qbqu2y7jeajomsl.defaulted('active', {}),
    $_8qbqu2y7jeajomsl.defaulted('apis', {}),
    $_8qbqu2y7jeajomsl.defaulted('extra', {}),
    $_8qbqu2y7jeajomsl.defaulted('state', $_8yipm6yjjeajomue)
  ]);
  var createModes$1 = function (data) {
    var value = $_8qt2pyyejeajomtl.asRawOrDie('Creating behaviour: ' + data.name, modeSchema, data);
    return $_83rbg8y3jeajomro.createModes($_8qt2pyyejeajomtl.choose(value.branchKey, value.branches), value.name, value.active, value.apis, value.extra, value.state);
  };
  var $_cwu2vpy2jeajomrh = {
    derive: derive$2,
    revoke: $_ddy4s3wjjeajomls.constant(undefined),
    noActive: $_ddy4s3wjjeajomls.constant({}),
    noApis: $_ddy4s3wjjeajomls.constant({}),
    noExtra: $_ddy4s3wjjeajomls.constant({}),
    noState: $_ddy4s3wjjeajomls.constant($_8yipm6yjjeajomue),
    create: create$1,
    createModes: createModes$1
  };

  function Toggler (turnOff, turnOn, initial) {
    var active = initial || false;
    var on = function () {
      turnOn();
      active = true;
    };
    var off = function () {
      turnOff();
      active = false;
    };
    var toggle = function () {
      var f = active ? off : on;
      f();
    };
    var isOn = function () {
      return active;
    };
    return {
      on: on,
      off: off,
      toggle: toggle,
      isOn: isOn
    };
  }

  var read$1 = function (element, attr) {
    var value = $_a7s3osxrjeajomqe.get(element, attr);
    return value === undefined || value === '' ? [] : value.split(' ');
  };
  var add = function (element, attr, id) {
    var old = read$1(element, attr);
    var nu = old.concat([id]);
    $_a7s3osxrjeajomqe.set(element, attr, nu.join(' '));
  };
  var remove$2 = function (element, attr, id) {
    var nu = $_5r3pikwsjeajommo.filter(read$1(element, attr), function (v) {
      return v !== id;
    });
    if (nu.length > 0)
      $_a7s3osxrjeajomqe.set(element, attr, nu.join(' '));
    else
      $_a7s3osxrjeajomqe.remove(element, attr);
  };
  var $_7699ggyqjeajomup = {
    read: read$1,
    add: add,
    remove: remove$2
  };

  var supports = function (element) {
    return element.dom().classList !== undefined;
  };
  var get$2 = function (element) {
    return $_7699ggyqjeajomup.read(element, 'class');
  };
  var add$1 = function (element, clazz) {
    return $_7699ggyqjeajomup.add(element, 'class', clazz);
  };
  var remove$3 = function (element, clazz) {
    return $_7699ggyqjeajomup.remove(element, 'class', clazz);
  };
  var toggle = function (element, clazz) {
    if ($_5r3pikwsjeajommo.contains(get$2(element), clazz)) {
      remove$3(element, clazz);
    } else {
      add$1(element, clazz);
    }
  };
  var $_cadkw7ypjeajomun = {
    get: get$2,
    add: add$1,
    remove: remove$3,
    toggle: toggle,
    supports: supports
  };

  var add$2 = function (element, clazz) {
    if ($_cadkw7ypjeajomun.supports(element))
      element.dom().classList.add(clazz);
    else
      $_cadkw7ypjeajomun.add(element, clazz);
  };
  var cleanClass = function (element) {
    var classList = $_cadkw7ypjeajomun.supports(element) ? element.dom().classList : $_cadkw7ypjeajomun.get(element);
    if (classList.length === 0) {
      $_a7s3osxrjeajomqe.remove(element, 'class');
    }
  };
  var remove$4 = function (element, clazz) {
    if ($_cadkw7ypjeajomun.supports(element)) {
      var classList = element.dom().classList;
      classList.remove(clazz);
    } else
      $_cadkw7ypjeajomun.remove(element, clazz);
    cleanClass(element);
  };
  var toggle$1 = function (element, clazz) {
    return $_cadkw7ypjeajomun.supports(element) ? element.dom().classList.toggle(clazz) : $_cadkw7ypjeajomun.toggle(element, clazz);
  };
  var toggler = function (element, clazz) {
    var hasClasslist = $_cadkw7ypjeajomun.supports(element);
    var classList = element.dom().classList;
    var off = function () {
      if (hasClasslist)
        classList.remove(clazz);
      else
        $_cadkw7ypjeajomun.remove(element, clazz);
    };
    var on = function () {
      if (hasClasslist)
        classList.add(clazz);
      else
        $_cadkw7ypjeajomun.add(element, clazz);
    };
    return Toggler(off, on, has$1(element, clazz));
  };
  var has$1 = function (element, clazz) {
    return $_cadkw7ypjeajomun.supports(element) && element.dom().classList.contains(clazz);
  };
  var $_65t2ydynjeajomul = {
    add: add$2,
    remove: remove$4,
    toggle: toggle$1,
    toggler: toggler,
    has: has$1
  };

  var swap = function (element, addCls, removeCls) {
    $_65t2ydynjeajomul.remove(element, removeCls);
    $_65t2ydynjeajomul.add(element, addCls);
  };
  var toAlpha = function (component, swapConfig, swapState) {
    swap(component.element(), swapConfig.alpha(), swapConfig.omega());
  };
  var toOmega = function (component, swapConfig, swapState) {
    swap(component.element(), swapConfig.omega(), swapConfig.alpha());
  };
  var clear = function (component, swapConfig, swapState) {
    $_65t2ydynjeajomul.remove(component.element(), swapConfig.alpha());
    $_65t2ydynjeajomul.remove(component.element(), swapConfig.omega());
  };
  var isAlpha = function (component, swapConfig, swapState) {
    return $_65t2ydynjeajomul.has(component.element(), swapConfig.alpha());
  };
  var isOmega = function (component, swapConfig, swapState) {
    return $_65t2ydynjeajomul.has(component.element(), swapConfig.omega());
  };
  var $_9ckvgpymjeajomui = {
    toAlpha: toAlpha,
    toOmega: toOmega,
    isAlpha: isAlpha,
    isOmega: isOmega,
    clear: clear
  };

  var SwapSchema = [
    $_8qbqu2y7jeajomsl.strict('alpha'),
    $_8qbqu2y7jeajomsl.strict('omega')
  ];

  var Swapping = $_cwu2vpy2jeajomrh.create({
    fields: SwapSchema,
    name: 'swapping',
    apis: $_9ckvgpymjeajomui
  });

  var Cell = function (initial) {
    var value = initial;
    var get = function () {
      return value;
    };
    var set = function (v) {
      value = v;
    };
    var clone = function () {
      return Cell(get());
    };
    return {
      get: get,
      set: set,
      clone: clone
    };
  };

  function ClosestOrAncestor (is, ancestor, scope, a, isRoot) {
    return is(scope, a) ? Option.some(scope) : $_6vgadjwzjeajomnb.isFunction(isRoot) && isRoot(scope) ? Option.none() : ancestor(scope, a, isRoot);
  }

  var first$1 = function (predicate) {
    return descendant($_6p2xg0xjjeajompa.body(), predicate);
  };
  var ancestor = function (scope, predicate, isRoot) {
    var element = scope.dom();
    var stop = $_6vgadjwzjeajomnb.isFunction(isRoot) ? isRoot : $_ddy4s3wjjeajomls.constant(false);
    while (element.parentNode) {
      element = element.parentNode;
      var el = $_8icwg5xfjeajomp0.fromDom(element);
      if (predicate(el))
        return Option.some(el);
      else if (stop(el))
        break;
    }
    return Option.none();
  };
  var closest = function (scope, predicate, isRoot) {
    var is = function (scope) {
      return predicate(scope);
    };
    return ClosestOrAncestor(is, ancestor, scope, predicate, isRoot);
  };
  var sibling = function (scope, predicate) {
    var element = scope.dom();
    if (!element.parentNode)
      return Option.none();
    return child$1($_8icwg5xfjeajomp0.fromDom(element.parentNode), function (x) {
      return !$_a12rd3x9jeajomoj.eq(scope, x) && predicate(x);
    });
  };
  var child$1 = function (scope, predicate) {
    var result = $_5r3pikwsjeajommo.find(scope.dom().childNodes, $_ddy4s3wjjeajomls.compose(predicate, $_8icwg5xfjeajomp0.fromDom));
    return result.map($_8icwg5xfjeajomp0.fromDom);
  };
  var descendant = function (scope, predicate) {
    var descend = function (element) {
      for (var i = 0; i < element.childNodes.length; i++) {
        if (predicate($_8icwg5xfjeajomp0.fromDom(element.childNodes[i])))
          return Option.some($_8icwg5xfjeajomp0.fromDom(element.childNodes[i]));
        var res = descend(element.childNodes[i]);
        if (res.isSome())
          return res;
      }
      return Option.none();
    };
    return descend(scope.dom());
  };
  var $_6tkhs7yvjeajomuy = {
    first: first$1,
    ancestor: ancestor,
    closest: closest,
    sibling: sibling,
    child: child$1,
    descendant: descendant
  };

  var any$1 = function (predicate) {
    return $_6tkhs7yvjeajomuy.first(predicate).isSome();
  };
  var ancestor$1 = function (scope, predicate, isRoot) {
    return $_6tkhs7yvjeajomuy.ancestor(scope, predicate, isRoot).isSome();
  };
  var closest$1 = function (scope, predicate, isRoot) {
    return $_6tkhs7yvjeajomuy.closest(scope, predicate, isRoot).isSome();
  };
  var sibling$1 = function (scope, predicate) {
    return $_6tkhs7yvjeajomuy.sibling(scope, predicate).isSome();
  };
  var child$2 = function (scope, predicate) {
    return $_6tkhs7yvjeajomuy.child(scope, predicate).isSome();
  };
  var descendant$1 = function (scope, predicate) {
    return $_6tkhs7yvjeajomuy.descendant(scope, predicate).isSome();
  };
  var $_6r78teyujeajomux = {
    any: any$1,
    ancestor: ancestor$1,
    closest: closest$1,
    sibling: sibling$1,
    child: child$2,
    descendant: descendant$1
  };

  var focus = function (element) {
    element.dom().focus();
  };
  var blur = function (element) {
    element.dom().blur();
  };
  var hasFocus = function (element) {
    var doc = $_6xy0ax3jeajomo0.owner(element).dom();
    return element.dom() === doc.activeElement;
  };
  var active = function (_doc) {
    var doc = _doc !== undefined ? _doc.dom() : document;
    return Option.from(doc.activeElement).map($_8icwg5xfjeajomp0.fromDom);
  };
  var focusInside = function (element) {
    var doc = $_6xy0ax3jeajomo0.owner(element);
    var inside = active(doc).filter(function (a) {
      return $_6r78teyujeajomux.closest(a, $_ddy4s3wjjeajomls.curry($_a12rd3x9jeajomoj.eq, element));
    });
    inside.fold(function () {
      focus(element);
    }, $_ddy4s3wjjeajomls.noop);
  };
  var search = function (element) {
    return active($_6xy0ax3jeajomo0.owner(element)).filter(function (e) {
      return element.dom().contains(e.dom());
    });
  };
  var $_gc8hiiytjeajomut = {
    hasFocus: hasFocus,
    focus: focus,
    blur: blur,
    active: active,
    search: search,
    focusInside: focusInside
  };

  var DOMUtils = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');

  var ThemeManager = tinymce.util.Tools.resolve('tinymce.ThemeManager');

  var openLink = function (target) {
    var link = document.createElement('a');
    link.target = '_blank';
    link.href = target.href;
    link.rel = 'noreferrer noopener';
    var nuEvt = document.createEvent('MouseEvents');
    nuEvt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    document.body.appendChild(link);
    link.dispatchEvent(nuEvt);
    document.body.removeChild(link);
  };
  var $_7vu5f2yzjeajomv7 = { openLink: openLink };

  var isSkinDisabled = function (editor) {
    return editor.settings.skin === false;
  };
  var $_8uhiq4z0jeajomv8 = { isSkinDisabled: isSkinDisabled };

  var formatChanged = 'formatChanged';
  var orientationChanged = 'orientationChanged';
  var dropupDismissed = 'dropupDismissed';
  var $_8rcy7qz1jeajomv8 = {
    formatChanged: $_ddy4s3wjjeajomls.constant(formatChanged),
    orientationChanged: $_ddy4s3wjjeajomls.constant(orientationChanged),
    dropupDismissed: $_ddy4s3wjjeajomls.constant(dropupDismissed)
  };

  var chooseChannels = function (channels, message) {
    return message.universal() ? channels : $_5r3pikwsjeajommo.filter(channels, function (ch) {
      return $_5r3pikwsjeajommo.contains(message.channels(), ch);
    });
  };
  var events = function (receiveConfig) {
    return $_2vhl2dy4jeajoms5.derive([$_2vhl2dy4jeajoms5.run($_bckj1uwhjeajomli.receive(), function (component, message) {
        var channelMap = receiveConfig.channels();
        var channels = $_9s6ha1x0jeajomnc.keys(channelMap);
        var targetChannels = chooseChannels(channels, message);
        $_5r3pikwsjeajommo.each(targetChannels, function (ch) {
          var channelInfo = channelMap[ch]();
          var channelSchema = channelInfo.schema();
          var data = $_8qt2pyyejeajomtl.asStructOrDie('channel[' + ch + '] data\nReceiver: ' + $_74y4xnxmjeajomq3.element(component.element()), channelSchema, message.data());
          channelInfo.onReceive()(component, data);
        });
      })]);
  };
  var $_32wjftz4jeajomvp = { events: events };

  var menuFields = [
    $_8qbqu2y7jeajomsl.strict('menu'),
    $_8qbqu2y7jeajomsl.strict('selectedMenu')
  ];
  var itemFields = [
    $_8qbqu2y7jeajomsl.strict('item'),
    $_8qbqu2y7jeajomsl.strict('selectedItem')
  ];
  var schema = $_8qt2pyyejeajomtl.objOfOnly(itemFields.concat(menuFields));
  var itemSchema = $_8qt2pyyejeajomtl.objOfOnly(itemFields);
  var $_38td0lz7jeajomw7 = {
    menuFields: $_ddy4s3wjjeajomls.constant(menuFields),
    itemFields: $_ddy4s3wjjeajomls.constant(itemFields),
    schema: $_ddy4s3wjjeajomls.constant(schema),
    itemSchema: $_ddy4s3wjjeajomls.constant(itemSchema)
  };

  var initSize = $_8qbqu2y7jeajomsl.strictObjOf('initSize', [
    $_8qbqu2y7jeajomsl.strict('numColumns'),
    $_8qbqu2y7jeajomsl.strict('numRows')
  ]);
  var itemMarkers = function () {
    return $_8qbqu2y7jeajomsl.strictOf('markers', $_38td0lz7jeajomw7.itemSchema());
  };
  var menuMarkers = function () {
    return $_8qbqu2y7jeajomsl.strictOf('markers', $_38td0lz7jeajomw7.schema());
  };
  var tieredMenuMarkers = function () {
    return $_8qbqu2y7jeajomsl.strictObjOf('markers', [$_8qbqu2y7jeajomsl.strict('backgroundMenu')].concat($_38td0lz7jeajomw7.menuFields()).concat($_38td0lz7jeajomw7.itemFields()));
  };
  var markers = function (required) {
    return $_8qbqu2y7jeajomsl.strictObjOf('markers', $_5r3pikwsjeajommo.map(required, $_8qbqu2y7jeajomsl.strict));
  };
  var onPresenceHandler = function (label, fieldName, presence) {
    var trace = $_9igfqbxljeajompe.getTrace();
    return $_8qbqu2y7jeajomsl.field(fieldName, fieldName, presence, $_8qt2pyyejeajomtl.valueOf(function (f) {
      return Result.value(function () {
        $_9igfqbxljeajompe.logHandler(label, fieldName, trace);
        return f.apply(undefined, arguments);
      });
    }));
  };
  var onHandler = function (fieldName) {
    return onPresenceHandler('onHandler', fieldName, $_6n8cmyy8jeajomsp.defaulted($_ddy4s3wjjeajomls.noop));
  };
  var onKeyboardHandler = function (fieldName) {
    return onPresenceHandler('onKeyboardHandler', fieldName, $_6n8cmyy8jeajomsp.defaulted(Option.none));
  };
  var onStrictHandler = function (fieldName) {
    return onPresenceHandler('onHandler', fieldName, $_6n8cmyy8jeajomsp.strict());
  };
  var onStrictKeyboardHandler = function (fieldName) {
    return onPresenceHandler('onKeyboardHandler', fieldName, $_6n8cmyy8jeajomsp.strict());
  };
  var output$1 = function (name, value) {
    return $_8qbqu2y7jeajomsl.state(name, $_ddy4s3wjjeajomls.constant(value));
  };
  var snapshot$1 = function (name) {
    return $_8qbqu2y7jeajomsl.state(name, $_ddy4s3wjjeajomls.identity);
  };
  var $_apbxenz6jeajomvz = {
    initSize: $_ddy4s3wjjeajomls.constant(initSize),
    itemMarkers: itemMarkers,
    menuMarkers: menuMarkers,
    tieredMenuMarkers: tieredMenuMarkers,
    markers: markers,
    onHandler: onHandler,
    onKeyboardHandler: onKeyboardHandler,
    onStrictHandler: onStrictHandler,
    onStrictKeyboardHandler: onStrictKeyboardHandler,
    output: output$1,
    snapshot: snapshot$1
  };

  var ReceivingSchema = [$_8qbqu2y7jeajomsl.strictOf('channels', $_8qt2pyyejeajomtl.setOf(Result.value, $_8qt2pyyejeajomtl.objOfOnly([
      $_apbxenz6jeajomvz.onStrictHandler('onReceive'),
      $_8qbqu2y7jeajomsl.defaulted('schema', $_8qt2pyyejeajomtl.anyValue())
    ])))];

  var Receiving = $_cwu2vpy2jeajomrh.create({
    fields: ReceivingSchema,
    name: 'receiving',
    active: $_32wjftz4jeajomvp
  });

  var updateAriaState = function (component, toggleConfig) {
    var pressed = isOn(component, toggleConfig);
    var ariaInfo = toggleConfig.aria();
    ariaInfo.update()(component, ariaInfo, pressed);
  };
  var toggle$2 = function (component, toggleConfig, toggleState) {
    $_65t2ydynjeajomul.toggle(component.element(), toggleConfig.toggleClass());
    updateAriaState(component, toggleConfig);
  };
  var on = function (component, toggleConfig, toggleState) {
    $_65t2ydynjeajomul.add(component.element(), toggleConfig.toggleClass());
    updateAriaState(component, toggleConfig);
  };
  var off = function (component, toggleConfig, toggleState) {
    $_65t2ydynjeajomul.remove(component.element(), toggleConfig.toggleClass());
    updateAriaState(component, toggleConfig);
  };
  var isOn = function (component, toggleConfig) {
    return $_65t2ydynjeajomul.has(component.element(), toggleConfig.toggleClass());
  };
  var onLoad = function (component, toggleConfig, toggleState) {
    var api = toggleConfig.selected() ? on : off;
    api(component, toggleConfig, toggleState);
  };
  var $_fm4jbazajeajomwi = {
    onLoad: onLoad,
    toggle: toggle$2,
    isOn: isOn,
    on: on,
    off: off
  };

  var exhibit = function (base, toggleConfig, toggleState) {
    return $_zcg1fyhjeajomu1.nu({});
  };
  var events$1 = function (toggleConfig, toggleState) {
    var execute = $_83rbg8y3jeajomro.executeEvent(toggleConfig, toggleState, $_fm4jbazajeajomwi.toggle);
    var load = $_83rbg8y3jeajomro.loadEvent(toggleConfig, toggleState, $_fm4jbazajeajomwi.onLoad);
    return $_2vhl2dy4jeajoms5.derive($_5r3pikwsjeajommo.flatten([
      toggleConfig.toggleOnExecute() ? [execute] : [],
      [load]
    ]));
  };
  var $_4heifnz9jeajomwf = {
    exhibit: exhibit,
    events: events$1
  };

  var updatePressed = function (component, ariaInfo, status) {
    $_a7s3osxrjeajomqe.set(component.element(), 'aria-pressed', status);
    if (ariaInfo.syncWithExpanded())
      updateExpanded(component, ariaInfo, status);
  };
  var updateSelected = function (component, ariaInfo, status) {
    $_a7s3osxrjeajomqe.set(component.element(), 'aria-selected', status);
  };
  var updateChecked = function (component, ariaInfo, status) {
    $_a7s3osxrjeajomqe.set(component.element(), 'aria-checked', status);
  };
  var updateExpanded = function (component, ariaInfo, status) {
    $_a7s3osxrjeajomqe.set(component.element(), 'aria-expanded', status);
  };
  var tagAttributes = {
    button: ['aria-pressed'],
    'input:checkbox': ['aria-checked']
  };
  var roleAttributes = {
    'button': ['aria-pressed'],
    'listbox': [
      'aria-pressed',
      'aria-expanded'
    ],
    'menuitemcheckbox': ['aria-checked']
  };
  var detectFromTag = function (component) {
    var elem = component.element();
    var rawTag = $_bsb5vnxkjeajompc.name(elem);
    var suffix = rawTag === 'input' && $_a7s3osxrjeajomqe.has(elem, 'type') ? ':' + $_a7s3osxrjeajomqe.get(elem, 'type') : '';
    return $_6rmcx0xsjeajomqm.readOptFrom(tagAttributes, rawTag + suffix);
  };
  var detectFromRole = function (component) {
    var elem = component.element();
    if (!$_a7s3osxrjeajomqe.has(elem, 'role'))
      return Option.none();
    else {
      var role = $_a7s3osxrjeajomqe.get(elem, 'role');
      return $_6rmcx0xsjeajomqm.readOptFrom(roleAttributes, role);
    }
  };
  var updateAuto = function (component, ariaInfo, status) {
    var attributes = detectFromRole(component).orThunk(function () {
      return detectFromTag(component);
    }).getOr([]);
    $_5r3pikwsjeajommo.each(attributes, function (attr) {
      $_a7s3osxrjeajomqe.set(component.element(), attr, status);
    });
  };
  var $_8746h5zcjeajomwp = {
    updatePressed: updatePressed,
    updateSelected: updateSelected,
    updateChecked: updateChecked,
    updateExpanded: updateExpanded,
    updateAuto: updateAuto
  };

  var ToggleSchema = [
    $_8qbqu2y7jeajomsl.defaulted('selected', false),
    $_8qbqu2y7jeajomsl.strict('toggleClass'),
    $_8qbqu2y7jeajomsl.defaulted('toggleOnExecute', true),
    $_8qbqu2y7jeajomsl.defaultedOf('aria', { mode: 'none' }, $_8qt2pyyejeajomtl.choose('mode', {
      'pressed': [
        $_8qbqu2y7jeajomsl.defaulted('syncWithExpanded', false),
        $_apbxenz6jeajomvz.output('update', $_8746h5zcjeajomwp.updatePressed)
      ],
      'checked': [$_apbxenz6jeajomvz.output('update', $_8746h5zcjeajomwp.updateChecked)],
      'expanded': [$_apbxenz6jeajomvz.output('update', $_8746h5zcjeajomwp.updateExpanded)],
      'selected': [$_apbxenz6jeajomvz.output('update', $_8746h5zcjeajomwp.updateSelected)],
      'none': [$_apbxenz6jeajomvz.output('update', $_ddy4s3wjjeajomls.noop)]
    }))
  ];

  var Toggling = $_cwu2vpy2jeajomrh.create({
    fields: ToggleSchema,
    name: 'toggling',
    active: $_4heifnz9jeajomwf,
    apis: $_fm4jbazajeajomwi
  });

  var format = function (command, update) {
    return Receiving.config({
      channels: $_6rmcx0xsjeajomqm.wrap($_8rcy7qz1jeajomv8.formatChanged(), {
        onReceive: function (button, data) {
          if (data.command === command) {
            update(button, data.state);
          }
        }
      })
    });
  };
  var orientation = function (onReceive) {
    return Receiving.config({ channels: $_6rmcx0xsjeajomqm.wrap($_8rcy7qz1jeajomv8.orientationChanged(), { onReceive: onReceive }) });
  };
  var receive = function (channel, onReceive) {
    return {
      key: channel,
      value: { onReceive: onReceive }
    };
  };
  var $_8qo6opzdjeajomwx = {
    format: format,
    orientation: orientation,
    receive: receive
  };

  var prefix = 'tinymce-mobile';
  var resolve$1 = function (p) {
    return prefix + '-' + p;
  };
  var $_eanbiezejeajomx0 = {
    resolve: resolve$1,
    prefix: $_ddy4s3wjjeajomls.constant(prefix)
  };

  var focus$1 = function (component, focusConfig) {
    if (!focusConfig.ignore()) {
      $_gc8hiiytjeajomut.focus(component.element());
      focusConfig.onFocus()(component);
    }
  };
  var blur$1 = function (component, focusConfig) {
    if (!focusConfig.ignore()) {
      $_gc8hiiytjeajomut.blur(component.element());
    }
  };
  var isFocused = function (component) {
    return $_gc8hiiytjeajomut.hasFocus(component.element());
  };
  var $_fxqbg1zjjeajomxd = {
    focus: focus$1,
    blur: blur$1,
    isFocused: isFocused
  };

  var exhibit$1 = function (base, focusConfig) {
    if (focusConfig.ignore())
      return $_zcg1fyhjeajomu1.nu({});
    else
      return $_zcg1fyhjeajomu1.nu({ attributes: { 'tabindex': '-1' } });
  };
  var events$2 = function (focusConfig) {
    return $_2vhl2dy4jeajoms5.derive([$_2vhl2dy4jeajoms5.run($_bckj1uwhjeajomli.focus(), function (component, simulatedEvent) {
        $_fxqbg1zjjeajomxd.focus(component, focusConfig);
        simulatedEvent.stop();
      })]);
  };
  var $_1ao3lgzijeajomxc = {
    exhibit: exhibit$1,
    events: events$2
  };

  var FocusSchema = [
    $_apbxenz6jeajomvz.onHandler('onFocus'),
    $_8qbqu2y7jeajomsl.defaulted('ignore', false)
  ];

  var Focusing = $_cwu2vpy2jeajomrh.create({
    fields: FocusSchema,
    name: 'focusing',
    active: $_1ao3lgzijeajomxc,
    apis: $_fxqbg1zjjeajomxd
  });

  var $_1meuo5zpjeajomy3 = {
    BACKSPACE: $_ddy4s3wjjeajomls.constant([8]),
    TAB: $_ddy4s3wjjeajomls.constant([9]),
    ENTER: $_ddy4s3wjjeajomls.constant([13]),
    SHIFT: $_ddy4s3wjjeajomls.constant([16]),
    CTRL: $_ddy4s3wjjeajomls.constant([17]),
    ALT: $_ddy4s3wjjeajomls.constant([18]),
    CAPSLOCK: $_ddy4s3wjjeajomls.constant([20]),
    ESCAPE: $_ddy4s3wjjeajomls.constant([27]),
    SPACE: $_ddy4s3wjjeajomls.constant([32]),
    PAGEUP: $_ddy4s3wjjeajomls.constant([33]),
    PAGEDOWN: $_ddy4s3wjjeajomls.constant([34]),
    END: $_ddy4s3wjjeajomls.constant([35]),
    HOME: $_ddy4s3wjjeajomls.constant([36]),
    LEFT: $_ddy4s3wjjeajomls.constant([37]),
    UP: $_ddy4s3wjjeajomls.constant([38]),
    RIGHT: $_ddy4s3wjjeajomls.constant([39]),
    DOWN: $_ddy4s3wjjeajomls.constant([40]),
    INSERT: $_ddy4s3wjjeajomls.constant([45]),
    DEL: $_ddy4s3wjjeajomls.constant([46]),
    META: $_ddy4s3wjjeajomls.constant([
      91,
      93,
      224
    ]),
    F10: $_ddy4s3wjjeajomls.constant([121])
  };

  var cycleBy = function (value, delta, min, max) {
    var r = value + delta;
    if (r > max)
      return min;
    else
      return r < min ? max : r;
  };
  var cap = function (value, min, max) {
    if (value <= min)
      return min;
    else
      return value >= max ? max : value;
  };
  var $_fj0mkfzujeajomyp = {
    cycleBy: cycleBy,
    cap: cap
  };

  var all$2 = function (predicate) {
    return descendants($_6p2xg0xjjeajompa.body(), predicate);
  };
  var ancestors = function (scope, predicate, isRoot) {
    return $_5r3pikwsjeajommo.filter($_6xy0ax3jeajomo0.parents(scope, isRoot), predicate);
  };
  var siblings$1 = function (scope, predicate) {
    return $_5r3pikwsjeajommo.filter($_6xy0ax3jeajomo0.siblings(scope), predicate);
  };
  var children$1 = function (scope, predicate) {
    return $_5r3pikwsjeajommo.filter($_6xy0ax3jeajomo0.children(scope), predicate);
  };
  var descendants = function (scope, predicate) {
    var result = [];
    $_5r3pikwsjeajommo.each($_6xy0ax3jeajomo0.children(scope), function (x) {
      if (predicate(x)) {
        result = result.concat([x]);
      }
      result = result.concat(descendants(x, predicate));
    });
    return result;
  };
  var $_cdtuyjzwjeajomys = {
    all: all$2,
    ancestors: ancestors,
    siblings: siblings$1,
    children: children$1,
    descendants: descendants
  };

  var all$3 = function (selector) {
    return $_bokbooxejeajomow.all(selector);
  };
  var ancestors$1 = function (scope, selector, isRoot) {
    return $_cdtuyjzwjeajomys.ancestors(scope, function (e) {
      return $_bokbooxejeajomow.is(e, selector);
    }, isRoot);
  };
  var siblings$2 = function (scope, selector) {
    return $_cdtuyjzwjeajomys.siblings(scope, function (e) {
      return $_bokbooxejeajomow.is(e, selector);
    });
  };
  var children$2 = function (scope, selector) {
    return $_cdtuyjzwjeajomys.children(scope, function (e) {
      return $_bokbooxejeajomow.is(e, selector);
    });
  };
  var descendants$1 = function (scope, selector) {
    return $_bokbooxejeajomow.all(selector, scope);
  };
  var $_62qkn1zvjeajomyr = {
    all: all$3,
    ancestors: ancestors$1,
    siblings: siblings$2,
    children: children$2,
    descendants: descendants$1
  };

  var first$2 = function (selector) {
    return $_bokbooxejeajomow.one(selector);
  };
  var ancestor$2 = function (scope, selector, isRoot) {
    return $_6tkhs7yvjeajomuy.ancestor(scope, function (e) {
      return $_bokbooxejeajomow.is(e, selector);
    }, isRoot);
  };
  var sibling$2 = function (scope, selector) {
    return $_6tkhs7yvjeajomuy.sibling(scope, function (e) {
      return $_bokbooxejeajomow.is(e, selector);
    });
  };
  var child$3 = function (scope, selector) {
    return $_6tkhs7yvjeajomuy.child(scope, function (e) {
      return $_bokbooxejeajomow.is(e, selector);
    });
  };
  var descendant$2 = function (scope, selector) {
    return $_bokbooxejeajomow.one(selector, scope);
  };
  var closest$2 = function (scope, selector, isRoot) {
    return ClosestOrAncestor($_bokbooxejeajomow.is, ancestor$2, scope, selector, isRoot);
  };
  var $_3vna6mzxjeajomyv = {
    first: first$2,
    ancestor: ancestor$2,
    sibling: sibling$2,
    child: child$3,
    descendant: descendant$2,
    closest: closest$2
  };

  var dehighlightAll = function (component, hConfig, hState) {
    var highlighted = $_62qkn1zvjeajomyr.descendants(component.element(), '.' + hConfig.highlightClass());
    $_5r3pikwsjeajommo.each(highlighted, function (h) {
      $_65t2ydynjeajomul.remove(h, hConfig.highlightClass());
      component.getSystem().getByDom(h).each(function (target) {
        hConfig.onDehighlight()(component, target);
      });
    });
  };
  var dehighlight = function (component, hConfig, hState, target) {
    var wasHighlighted = isHighlighted(component, hConfig, hState, target);
    $_65t2ydynjeajomul.remove(target.element(), hConfig.highlightClass());
    if (wasHighlighted)
      hConfig.onDehighlight()(component, target);
  };
  var highlight = function (component, hConfig, hState, target) {
    var wasHighlighted = isHighlighted(component, hConfig, hState, target);
    dehighlightAll(component, hConfig, hState);
    $_65t2ydynjeajomul.add(target.element(), hConfig.highlightClass());
    if (!wasHighlighted)
      hConfig.onHighlight()(component, target);
  };
  var highlightFirst = function (component, hConfig, hState) {
    getFirst(component, hConfig, hState).each(function (firstComp) {
      highlight(component, hConfig, hState, firstComp);
    });
  };
  var highlightLast = function (component, hConfig, hState) {
    getLast(component, hConfig, hState).each(function (lastComp) {
      highlight(component, hConfig, hState, lastComp);
    });
  };
  var highlightAt = function (component, hConfig, hState, index) {
    getByIndex(component, hConfig, hState, index).fold(function (err) {
      throw new Error(err);
    }, function (firstComp) {
      highlight(component, hConfig, hState, firstComp);
    });
  };
  var highlightBy = function (component, hConfig, hState, predicate) {
    var items = $_62qkn1zvjeajomyr.descendants(component.element(), '.' + hConfig.itemClass());
    var itemComps = $_62h1oqy0jeajomre.cat($_5r3pikwsjeajommo.map(items, function (i) {
      return component.getSystem().getByDom(i).toOption();
    }));
    var targetComp = $_5r3pikwsjeajommo.find(itemComps, predicate);
    targetComp.each(function (c) {
      highlight(component, hConfig, hState, c);
    });
  };
  var isHighlighted = function (component, hConfig, hState, queryTarget) {
    return $_65t2ydynjeajomul.has(queryTarget.element(), hConfig.highlightClass());
  };
  var getHighlighted = function (component, hConfig, hState) {
    return $_3vna6mzxjeajomyv.descendant(component.element(), '.' + hConfig.highlightClass()).bind(component.getSystem().getByDom);
  };
  var getByIndex = function (component, hConfig, hState, index) {
    var items = $_62qkn1zvjeajomyr.descendants(component.element(), '.' + hConfig.itemClass());
    return Option.from(items[index]).fold(function () {
      return Result.error('No element found with index ' + index);
    }, component.getSystem().getByDom);
  };
  var getFirst = function (component, hConfig, hState) {
    return $_3vna6mzxjeajomyv.descendant(component.element(), '.' + hConfig.itemClass()).bind(component.getSystem().getByDom);
  };
  var getLast = function (component, hConfig, hState) {
    var items = $_62qkn1zvjeajomyr.descendants(component.element(), '.' + hConfig.itemClass());
    var last = items.length > 0 ? Option.some(items[items.length - 1]) : Option.none();
    return last.bind(component.getSystem().getByDom);
  };
  var getDelta = function (component, hConfig, hState, delta) {
    var items = $_62qkn1zvjeajomyr.descendants(component.element(), '.' + hConfig.itemClass());
    var current = $_5r3pikwsjeajommo.findIndex(items, function (item) {
      return $_65t2ydynjeajomul.has(item, hConfig.highlightClass());
    });
    return current.bind(function (selected) {
      var dest = $_fj0mkfzujeajomyp.cycleBy(selected, delta, 0, items.length - 1);
      return component.getSystem().getByDom(items[dest]);
    });
  };
  var getPrevious = function (component, hConfig, hState) {
    return getDelta(component, hConfig, hState, -1);
  };
  var getNext = function (component, hConfig, hState) {
    return getDelta(component, hConfig, hState, +1);
  };
  var $_4p6y0bztjeajomye = {
    dehighlightAll: dehighlightAll,
    dehighlight: dehighlight,
    highlight: highlight,
    highlightFirst: highlightFirst,
    highlightLast: highlightLast,
    highlightAt: highlightAt,
    highlightBy: highlightBy,
    isHighlighted: isHighlighted,
    getHighlighted: getHighlighted,
    getFirst: getFirst,
    getLast: getLast,
    getPrevious: getPrevious,
    getNext: getNext
  };

  var HighlightSchema = [
    $_8qbqu2y7jeajomsl.strict('highlightClass'),
    $_8qbqu2y7jeajomsl.strict('itemClass'),
    $_apbxenz6jeajomvz.onHandler('onHighlight'),
    $_apbxenz6jeajomvz.onHandler('onDehighlight')
  ];

  var Highlighting = $_cwu2vpy2jeajomrh.create({
    fields: HighlightSchema,
    name: 'highlighting',
    apis: $_4p6y0bztjeajomye
  });

  var dom = function () {
    var get = function (component) {
      return $_gc8hiiytjeajomut.search(component.element());
    };
    var set = function (component, focusee) {
      component.getSystem().triggerFocus(focusee, component.element());
    };
    return {
      get: get,
      set: set
    };
  };
  var highlights = function () {
    var get = function (component) {
      return Highlighting.getHighlighted(component).map(function (item) {
        return item.element();
      });
    };
    var set = function (component, element) {
      component.getSystem().getByDom(element).fold($_ddy4s3wjjeajomls.noop, function (item) {
        Highlighting.highlight(component, item);
      });
    };
    return {
      get: get,
      set: set
    };
  };
  var $_6ixkh6zrjeajomy9 = {
    dom: dom,
    highlights: highlights
  };

  var inSet = function (keys) {
    return function (event) {
      return $_5r3pikwsjeajommo.contains(keys, event.raw().which);
    };
  };
  var and = function (preds) {
    return function (event) {
      return $_5r3pikwsjeajommo.forall(preds, function (pred) {
        return pred(event);
      });
    };
  };
  var is$1 = function (key) {
    return function (event) {
      return event.raw().which === key;
    };
  };
  var isShift = function (event) {
    return event.raw().shiftKey === true;
  };
  var isControl = function (event) {
    return event.raw().ctrlKey === true;
  };
  var $_84obuk100jeajomz0 = {
    inSet: inSet,
    and: and,
    is: is$1,
    isShift: isShift,
    isNotShift: $_ddy4s3wjjeajomls.not(isShift),
    isControl: isControl,
    isNotControl: $_ddy4s3wjjeajomls.not(isControl)
  };

  var basic = function (key, action) {
    return {
      matches: $_84obuk100jeajomz0.is(key),
      classification: action
    };
  };
  var rule = function (matches, action) {
    return {
      matches: matches,
      classification: action
    };
  };
  var choose$2 = function (transitions, event) {
    var transition = $_5r3pikwsjeajommo.find(transitions, function (t) {
      return t.matches(event);
    });
    return transition.map(function (t) {
      return t.classification;
    });
  };
  var $_fcjcmzzjeajomyy = {
    basic: basic,
    rule: rule,
    choose: choose$2
  };

  var typical = function (infoSchema, stateInit, getRules, getEvents, getApis, optFocusIn) {
    var schema = function () {
      return infoSchema.concat([
        $_8qbqu2y7jeajomsl.defaulted('focusManager', $_6ixkh6zrjeajomy9.dom()),
        $_apbxenz6jeajomvz.output('handler', me),
        $_apbxenz6jeajomvz.output('state', stateInit)
      ]);
    };
    var processKey = function (component, simulatedEvent, keyingConfig, keyingState) {
      var rules = getRules(component, simulatedEvent, keyingConfig, keyingState);
      return $_fcjcmzzjeajomyy.choose(rules, simulatedEvent.event()).bind(function (rule) {
        return rule(component, simulatedEvent, keyingConfig, keyingState);
      });
    };
    var toEvents = function (keyingConfig, keyingState) {
      var otherEvents = getEvents(keyingConfig, keyingState);
      var keyEvents = $_2vhl2dy4jeajoms5.derive(optFocusIn.map(function (focusIn) {
        return $_2vhl2dy4jeajoms5.run($_bckj1uwhjeajomli.focus(), function (component, simulatedEvent) {
          focusIn(component, keyingConfig, keyingState, simulatedEvent);
          simulatedEvent.stop();
        });
      }).toArray().concat([$_2vhl2dy4jeajoms5.run($_9ndt8owijeajomlo.keydown(), function (component, simulatedEvent) {
          processKey(component, simulatedEvent, keyingConfig, keyingState).each(function (_) {
            simulatedEvent.stop();
          });
        })]));
      return $_2yrejjwyjeajomn9.deepMerge(otherEvents, keyEvents);
    };
    var me = {
      schema: schema,
      processKey: processKey,
      toEvents: toEvents,
      toApis: getApis
    };
    return me;
  };
  var $_avb3yozqjeajomy5 = { typical: typical };

  var cyclePrev = function (values, index, predicate) {
    var before = $_5r3pikwsjeajommo.reverse(values.slice(0, index));
    var after = $_5r3pikwsjeajommo.reverse(values.slice(index + 1));
    return $_5r3pikwsjeajommo.find(before.concat(after), predicate);
  };
  var tryPrev = function (values, index, predicate) {
    var before = $_5r3pikwsjeajommo.reverse(values.slice(0, index));
    return $_5r3pikwsjeajommo.find(before, predicate);
  };
  var cycleNext = function (values, index, predicate) {
    var before = values.slice(0, index);
    var after = values.slice(index + 1);
    return $_5r3pikwsjeajommo.find(after.concat(before), predicate);
  };
  var tryNext = function (values, index, predicate) {
    var after = values.slice(index + 1);
    return $_5r3pikwsjeajommo.find(after, predicate);
  };
  var $_dfte6v101jeajomz3 = {
    cyclePrev: cyclePrev,
    cycleNext: cycleNext,
    tryPrev: tryPrev,
    tryNext: tryNext
  };

  var isSupported = function (dom) {
    return dom.style !== undefined;
  };
  var $_erw4u5104jeajomzj = { isSupported: isSupported };

  var internalSet = function (dom, property, value) {
    if (!$_6vgadjwzjeajomnb.isString(value)) {
      console.error('Invalid call to CSS.set. Property ', property, ':: Value ', value, ':: Element ', dom);
      throw new Error('CSS value must be a string: ' + value);
    }
    if ($_erw4u5104jeajomzj.isSupported(dom))
      dom.style.setProperty(property, value);
  };
  var internalRemove = function (dom, property) {
    if ($_erw4u5104jeajomzj.isSupported(dom))
      dom.style.removeProperty(property);
  };
  var set$2 = function (element, property, value) {
    var dom = element.dom();
    internalSet(dom, property, value);
  };
  var setAll$1 = function (element, css) {
    var dom = element.dom();
    $_9s6ha1x0jeajomnc.each(css, function (v, k) {
      internalSet(dom, k, v);
    });
  };
  var setOptions = function (element, css) {
    var dom = element.dom();
    $_9s6ha1x0jeajomnc.each(css, function (v, k) {
      v.fold(function () {
        internalRemove(dom, k);
      }, function (value) {
        internalSet(dom, k, value);
      });
    });
  };
  var get$3 = function (element, property) {
    var dom = element.dom();
    var styles = window.getComputedStyle(dom);
    var r = styles.getPropertyValue(property);
    var v = r === '' && !$_6p2xg0xjjeajompa.inBody(element) ? getUnsafeProperty(dom, property) : r;
    return v === null ? undefined : v;
  };
  var getUnsafeProperty = function (dom, property) {
    return $_erw4u5104jeajomzj.isSupported(dom) ? dom.style.getPropertyValue(property) : '';
  };
  var getRaw = function (element, property) {
    var dom = element.dom();
    var raw = getUnsafeProperty(dom, property);
    return Option.from(raw).filter(function (r) {
      return r.length > 0;
    });
  };
  var getAllRaw = function (element) {
    var css = {};
    var dom = element.dom();
    if ($_erw4u5104jeajomzj.isSupported(dom)) {
      for (var i = 0; i < dom.style.length; i++) {
        var ruleName = dom.style.item(i);
        css[ruleName] = dom.style[ruleName];
      }
    }
    return css;
  };
  var isValidValue = function (tag, property, value) {
    var element = $_8icwg5xfjeajomp0.fromTag(tag);
    set$2(element, property, value);
    var style = getRaw(element, property);
    return style.isSome();
  };
  var remove$5 = function (element, property) {
    var dom = element.dom();
    internalRemove(dom, property);
    if ($_a7s3osxrjeajomqe.has(element, 'style') && $_4ur2nuwvjeajomn4.trim($_a7s3osxrjeajomqe.get(element, 'style')) === '') {
      $_a7s3osxrjeajomqe.remove(element, 'style');
    }
  };
  var preserve = function (element, f) {
    var oldStyles = $_a7s3osxrjeajomqe.get(element, 'style');
    var result = f(element);
    var restore = oldStyles === undefined ? $_a7s3osxrjeajomqe.remove : $_a7s3osxrjeajomqe.set;
    restore(element, 'style', oldStyles);
    return result;
  };
  var copy$1 = function (source, target) {
    var sourceDom = source.dom();
    var targetDom = target.dom();
    if ($_erw4u5104jeajomzj.isSupported(sourceDom) && $_erw4u5104jeajomzj.isSupported(targetDom)) {
      targetDom.style.cssText = sourceDom.style.cssText;
    }
  };
  var reflow = function (e) {
    return e.dom().offsetWidth;
  };
  var transferOne$1 = function (source, destination, style) {
    getRaw(source, style).each(function (value) {
      if (getRaw(destination, style).isNone())
        set$2(destination, style, value);
    });
  };
  var transfer$1 = function (source, destination, styles) {
    if (!$_bsb5vnxkjeajompc.isElement(source) || !$_bsb5vnxkjeajompc.isElement(destination))
      return;
    $_5r3pikwsjeajommo.each(styles, function (style) {
      transferOne$1(source, destination, style);
    });
  };
  var $_64rfd7103jeajomzb = {
    copy: copy$1,
    set: set$2,
    preserve: preserve,
    setAll: setAll$1,
    setOptions: setOptions,
    remove: remove$5,
    get: get$3,
    getRaw: getRaw,
    getAllRaw: getAllRaw,
    isValidValue: isValidValue,
    reflow: reflow,
    transfer: transfer$1
  };

  function Dimension (name, getOffset) {
    var set = function (element, h) {
      if (!$_6vgadjwzjeajomnb.isNumber(h) && !h.match(/^[0-9]+$/))
        throw name + '.set accepts only positive integer values. Value was ' + h;
      var dom = element.dom();
      if ($_erw4u5104jeajomzj.isSupported(dom))
        dom.style[name] = h + 'px';
    };
    var get = function (element) {
      var r = getOffset(element);
      if (r <= 0 || r === null) {
        var css = $_64rfd7103jeajomzb.get(element, name);
        return parseFloat(css) || 0;
      }
      return r;
    };
    var getOuter = get;
    var aggregate = function (element, properties) {
      return $_5r3pikwsjeajommo.foldl(properties, function (acc, property) {
        var val = $_64rfd7103jeajomzb.get(element, property);
        var value = val === undefined ? 0 : parseInt(val, 10);
        return isNaN(value) ? acc : acc + value;
      }, 0);
    };
    var max = function (element, value, properties) {
      var cumulativeInclusions = aggregate(element, properties);
      var absoluteMax = value > cumulativeInclusions ? value - cumulativeInclusions : 0;
      return absoluteMax;
    };
    return {
      set: set,
      get: get,
      getOuter: getOuter,
      aggregate: aggregate,
      max: max
    };
  }

  var api = Dimension('height', function (element) {
    return $_6p2xg0xjjeajompa.inBody(element) ? element.dom().getBoundingClientRect().height : element.dom().offsetHeight;
  });
  var set$3 = function (element, h) {
    api.set(element, h);
  };
  var get$4 = function (element) {
    return api.get(element);
  };
  var getOuter$1 = function (element) {
    return api.getOuter(element);
  };
  var setMax = function (element, value) {
    var inclusions = [
      'margin-top',
      'border-top-width',
      'padding-top',
      'padding-bottom',
      'border-bottom-width',
      'margin-bottom'
    ];
    var absMax = api.max(element, value, inclusions);
    $_64rfd7103jeajomzb.set(element, 'max-height', absMax + 'px');
  };
  var $_3aphev102jeajomz6 = {
    set: set$3,
    get: get$4,
    getOuter: getOuter$1,
    setMax: setMax
  };

  var create$2 = function (cyclicField) {
    var schema = [
      $_8qbqu2y7jeajomsl.option('onEscape'),
      $_8qbqu2y7jeajomsl.option('onEnter'),
      $_8qbqu2y7jeajomsl.defaulted('selector', '[data-alloy-tabstop="true"]'),
      $_8qbqu2y7jeajomsl.defaulted('firstTabstop', 0),
      $_8qbqu2y7jeajomsl.defaulted('useTabstopAt', $_ddy4s3wjjeajomls.constant(true)),
      $_8qbqu2y7jeajomsl.option('visibilitySelector')
    ].concat([cyclicField]);
    var isVisible = function (tabbingConfig, element) {
      var target = tabbingConfig.visibilitySelector().bind(function (sel) {
        return $_3vna6mzxjeajomyv.closest(element, sel);
      }).getOr(element);
      return $_3aphev102jeajomz6.get(target) > 0;
    };
    var findInitial = function (component, tabbingConfig) {
      var tabstops = $_62qkn1zvjeajomyr.descendants(component.element(), tabbingConfig.selector());
      var visibles = $_5r3pikwsjeajommo.filter(tabstops, function (elem) {
        return isVisible(tabbingConfig, elem);
      });
      return Option.from(visibles[tabbingConfig.firstTabstop()]);
    };
    var findCurrent = function (component, tabbingConfig) {
      return tabbingConfig.focusManager().get(component).bind(function (elem) {
        return $_3vna6mzxjeajomyv.closest(elem, tabbingConfig.selector());
      });
    };
    var isTabstop = function (tabbingConfig, element) {
      return isVisible(tabbingConfig, element) && tabbingConfig.useTabstopAt()(element);
    };
    var focusIn = function (component, tabbingConfig, tabbingState) {
      findInitial(component, tabbingConfig).each(function (target) {
        tabbingConfig.focusManager().set(component, target);
      });
    };
    var goFromTabstop = function (component, tabstops, stopIndex, tabbingConfig, cycle) {
      return cycle(tabstops, stopIndex, function (elem) {
        return isTabstop(tabbingConfig, elem);
      }).fold(function () {
        return tabbingConfig.cyclic() ? Option.some(true) : Option.none();
      }, function (target) {
        tabbingConfig.focusManager().set(component, target);
        return Option.some(true);
      });
    };
    var go = function (component, simulatedEvent, tabbingConfig, cycle) {
      var tabstops = $_62qkn1zvjeajomyr.descendants(component.element(), tabbingConfig.selector());
      return findCurrent(component, tabbingConfig).bind(function (tabstop) {
        var optStopIndex = $_5r3pikwsjeajommo.findIndex(tabstops, $_ddy4s3wjjeajomls.curry($_a12rd3x9jeajomoj.eq, tabstop));
        return optStopIndex.bind(function (stopIndex) {
          return goFromTabstop(component, tabstops, stopIndex, tabbingConfig, cycle);
        });
      });
    };
    var goBackwards = function (component, simulatedEvent, tabbingConfig, tabbingState) {
      var navigate = tabbingConfig.cyclic() ? $_dfte6v101jeajomz3.cyclePrev : $_dfte6v101jeajomz3.tryPrev;
      return go(component, simulatedEvent, tabbingConfig, navigate);
    };
    var goForwards = function (component, simulatedEvent, tabbingConfig, tabbingState) {
      var navigate = tabbingConfig.cyclic() ? $_dfte6v101jeajomz3.cycleNext : $_dfte6v101jeajomz3.tryNext;
      return go(component, simulatedEvent, tabbingConfig, navigate);
    };
    var execute = function (component, simulatedEvent, tabbingConfig, tabbingState) {
      return tabbingConfig.onEnter().bind(function (f) {
        return f(component, simulatedEvent);
      });
    };
    var exit = function (component, simulatedEvent, tabbingConfig, tabbingState) {
      return tabbingConfig.onEscape().bind(function (f) {
        return f(component, simulatedEvent);
      });
    };
    var getRules = $_ddy4s3wjjeajomls.constant([
      $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.and([
        $_84obuk100jeajomz0.isShift,
        $_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.TAB())
      ]), goBackwards),
      $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.TAB()), goForwards),
      $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.ESCAPE()), exit),
      $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.and([
        $_84obuk100jeajomz0.isNotShift,
        $_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.ENTER())
      ]), execute)
    ]);
    var getEvents = $_ddy4s3wjjeajomls.constant({});
    var getApis = $_ddy4s3wjjeajomls.constant({});
    return $_avb3yozqjeajomy5.typical(schema, $_8yipm6yjjeajomue.init, getRules, getEvents, getApis, Option.some(focusIn));
  };
  var $_geav95zojeajomxs = { create: create$2 };

  var AcyclicType = $_geav95zojeajomxs.create($_8qbqu2y7jeajomsl.state('cyclic', $_ddy4s3wjjeajomls.constant(false)));

  var CyclicType = $_geav95zojeajomxs.create($_8qbqu2y7jeajomsl.state('cyclic', $_ddy4s3wjjeajomls.constant(true)));

  var inside = function (target) {
    return $_bsb5vnxkjeajompc.name(target) === 'input' && $_a7s3osxrjeajomqe.get(target, 'type') !== 'radio' || $_bsb5vnxkjeajompc.name(target) === 'textarea';
  };
  var $_248cfh108jeajomzy = { inside: inside };

  var doDefaultExecute = function (component, simulatedEvent, focused) {
    $_30e2nlwgjeajomlb.dispatch(component, focused, $_bckj1uwhjeajomli.execute());
    return Option.some(true);
  };
  var defaultExecute = function (component, simulatedEvent, focused) {
    return $_248cfh108jeajomzy.inside(focused) && $_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.SPACE())(simulatedEvent.event()) ? Option.none() : doDefaultExecute(component, simulatedEvent, focused);
  };
  var $_bt4zer109jeajon02 = { defaultExecute: defaultExecute };

  var schema$1 = [
    $_8qbqu2y7jeajomsl.defaulted('execute', $_bt4zer109jeajon02.defaultExecute),
    $_8qbqu2y7jeajomsl.defaulted('useSpace', false),
    $_8qbqu2y7jeajomsl.defaulted('useEnter', true),
    $_8qbqu2y7jeajomsl.defaulted('useControlEnter', false),
    $_8qbqu2y7jeajomsl.defaulted('useDown', false)
  ];
  var execute = function (component, simulatedEvent, executeConfig, executeState) {
    return executeConfig.execute()(component, simulatedEvent, component.element());
  };
  var getRules = function (component, simulatedEvent, executeConfig, executeState) {
    var spaceExec = executeConfig.useSpace() && !$_248cfh108jeajomzy.inside(component.element()) ? $_1meuo5zpjeajomy3.SPACE() : [];
    var enterExec = executeConfig.useEnter() ? $_1meuo5zpjeajomy3.ENTER() : [];
    var downExec = executeConfig.useDown() ? $_1meuo5zpjeajomy3.DOWN() : [];
    var execKeys = spaceExec.concat(enterExec).concat(downExec);
    return [$_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.inSet(execKeys), execute)].concat(executeConfig.useControlEnter() ? [$_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.and([
        $_84obuk100jeajomz0.isControl,
        $_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.ENTER())
      ]), execute)] : []);
  };
  var getEvents = $_ddy4s3wjjeajomls.constant({});
  var getApis = $_ddy4s3wjjeajomls.constant({});
  var ExecutionType = $_avb3yozqjeajomy5.typical(schema$1, $_8yipm6yjjeajomue.init, getRules, getEvents, getApis, Option.none());

  var flatgrid = function (spec) {
    var dimensions = Cell(Option.none());
    var setGridSize = function (numRows, numColumns) {
      dimensions.set(Option.some({
        numRows: $_ddy4s3wjjeajomls.constant(numRows),
        numColumns: $_ddy4s3wjjeajomls.constant(numColumns)
      }));
    };
    var getNumRows = function () {
      return dimensions.get().map(function (d) {
        return d.numRows();
      });
    };
    var getNumColumns = function () {
      return dimensions.get().map(function (d) {
        return d.numColumns();
      });
    };
    return BehaviourState({
      readState: $_ddy4s3wjjeajomls.constant({}),
      setGridSize: setGridSize,
      getNumRows: getNumRows,
      getNumColumns: getNumColumns
    });
  };
  var init$1 = function (spec) {
    return spec.state()(spec);
  };
  var $_2xr37k10bjeajon0b = {
    flatgrid: flatgrid,
    init: init$1
  };

  var onDirection = function (isLtr, isRtl) {
    return function (element) {
      return getDirection(element) === 'rtl' ? isRtl : isLtr;
    };
  };
  var getDirection = function (element) {
    return $_64rfd7103jeajomzb.get(element, 'direction') === 'rtl' ? 'rtl' : 'ltr';
  };
  var $_52l3ss10djeajon0h = {
    onDirection: onDirection,
    getDirection: getDirection
  };

  var useH = function (movement) {
    return function (component, simulatedEvent, config, state) {
      var move = movement(component.element());
      return use(move, component, simulatedEvent, config, state);
    };
  };
  var west = function (moveLeft, moveRight) {
    var movement = $_52l3ss10djeajon0h.onDirection(moveLeft, moveRight);
    return useH(movement);
  };
  var east = function (moveLeft, moveRight) {
    var movement = $_52l3ss10djeajon0h.onDirection(moveRight, moveLeft);
    return useH(movement);
  };
  var useV = function (move) {
    return function (component, simulatedEvent, config, state) {
      return use(move, component, simulatedEvent, config, state);
    };
  };
  var use = function (move, component, simulatedEvent, config, state) {
    var outcome = config.focusManager().get(component).bind(function (focused) {
      return move(component.element(), focused, config, state);
    });
    return outcome.map(function (newFocus) {
      config.focusManager().set(component, newFocus);
      return true;
    });
  };
  var $_5xnokt10cjeajon0g = {
    east: east,
    west: west,
    north: useV,
    south: useV,
    move: useV
  };

  var indexInfo = $_6725fkx4jeajomoa.immutableBag([
    'index',
    'candidates'
  ], []);
  var locate = function (candidates, predicate) {
    return $_5r3pikwsjeajommo.findIndex(candidates, predicate).map(function (index) {
      return indexInfo({
        index: index,
        candidates: candidates
      });
    });
  };
  var $_dhalv510fjeajon0o = { locate: locate };

  var visibilityToggler = function (element, property, hiddenValue, visibleValue) {
    var initial = $_64rfd7103jeajomzb.get(element, property);
    if (initial === undefined)
      initial = '';
    var value = initial === hiddenValue ? visibleValue : hiddenValue;
    var off = $_ddy4s3wjjeajomls.curry($_64rfd7103jeajomzb.set, element, property, initial);
    var on = $_ddy4s3wjjeajomls.curry($_64rfd7103jeajomzb.set, element, property, value);
    return Toggler(off, on, false);
  };
  var toggler$1 = function (element) {
    return visibilityToggler(element, 'visibility', 'hidden', 'visible');
  };
  var displayToggler = function (element, value) {
    return visibilityToggler(element, 'display', 'none', value);
  };
  var isHidden = function (dom) {
    return dom.offsetWidth <= 0 && dom.offsetHeight <= 0;
  };
  var isVisible = function (element) {
    var dom = element.dom();
    return !isHidden(dom);
  };
  var $_ezjjc110gjeajon0r = {
    toggler: toggler$1,
    displayToggler: displayToggler,
    isVisible: isVisible
  };

  var locateVisible = function (container, current, selector) {
    var filter = $_ezjjc110gjeajon0r.isVisible;
    return locateIn(container, current, selector, filter);
  };
  var locateIn = function (container, current, selector, filter) {
    var predicate = $_ddy4s3wjjeajomls.curry($_a12rd3x9jeajomoj.eq, current);
    var candidates = $_62qkn1zvjeajomyr.descendants(container, selector);
    var visible = $_5r3pikwsjeajommo.filter(candidates, $_ezjjc110gjeajon0r.isVisible);
    return $_dhalv510fjeajon0o.locate(visible, predicate);
  };
  var findIndex$2 = function (elements, target) {
    return $_5r3pikwsjeajommo.findIndex(elements, function (elem) {
      return $_a12rd3x9jeajomoj.eq(target, elem);
    });
  };
  var $_9y0spv10ejeajon0i = {
    locateVisible: locateVisible,
    locateIn: locateIn,
    findIndex: findIndex$2
  };

  var withGrid = function (values, index, numCols, f) {
    var oldRow = Math.floor(index / numCols);
    var oldColumn = index % numCols;
    return f(oldRow, oldColumn).bind(function (address) {
      var newIndex = address.row() * numCols + address.column();
      return newIndex >= 0 && newIndex < values.length ? Option.some(values[newIndex]) : Option.none();
    });
  };
  var cycleHorizontal = function (values, index, numRows, numCols, delta) {
    return withGrid(values, index, numCols, function (oldRow, oldColumn) {
      var onLastRow = oldRow === numRows - 1;
      var colsInRow = onLastRow ? values.length - oldRow * numCols : numCols;
      var newColumn = $_fj0mkfzujeajomyp.cycleBy(oldColumn, delta, 0, colsInRow - 1);
      return Option.some({
        row: $_ddy4s3wjjeajomls.constant(oldRow),
        column: $_ddy4s3wjjeajomls.constant(newColumn)
      });
    });
  };
  var cycleVertical = function (values, index, numRows, numCols, delta) {
    return withGrid(values, index, numCols, function (oldRow, oldColumn) {
      var newRow = $_fj0mkfzujeajomyp.cycleBy(oldRow, delta, 0, numRows - 1);
      var onLastRow = newRow === numRows - 1;
      var colsInRow = onLastRow ? values.length - newRow * numCols : numCols;
      var newCol = $_fj0mkfzujeajomyp.cap(oldColumn, 0, colsInRow - 1);
      return Option.some({
        row: $_ddy4s3wjjeajomls.constant(newRow),
        column: $_ddy4s3wjjeajomls.constant(newCol)
      });
    });
  };
  var cycleRight = function (values, index, numRows, numCols) {
    return cycleHorizontal(values, index, numRows, numCols, +1);
  };
  var cycleLeft = function (values, index, numRows, numCols) {
    return cycleHorizontal(values, index, numRows, numCols, -1);
  };
  var cycleUp = function (values, index, numRows, numCols) {
    return cycleVertical(values, index, numRows, numCols, -1);
  };
  var cycleDown = function (values, index, numRows, numCols) {
    return cycleVertical(values, index, numRows, numCols, +1);
  };
  var $_2uu8a110hjeajon0t = {
    cycleDown: cycleDown,
    cycleUp: cycleUp,
    cycleLeft: cycleLeft,
    cycleRight: cycleRight
  };

  var schema$2 = [
    $_8qbqu2y7jeajomsl.strict('selector'),
    $_8qbqu2y7jeajomsl.defaulted('execute', $_bt4zer109jeajon02.defaultExecute),
    $_apbxenz6jeajomvz.onKeyboardHandler('onEscape'),
    $_8qbqu2y7jeajomsl.defaulted('captureTab', false),
    $_apbxenz6jeajomvz.initSize()
  ];
  var focusIn = function (component, gridConfig, gridState) {
    $_3vna6mzxjeajomyv.descendant(component.element(), gridConfig.selector()).each(function (first) {
      gridConfig.focusManager().set(component, first);
    });
  };
  var findCurrent = function (component, gridConfig) {
    return gridConfig.focusManager().get(component).bind(function (elem) {
      return $_3vna6mzxjeajomyv.closest(elem, gridConfig.selector());
    });
  };
  var execute$1 = function (component, simulatedEvent, gridConfig, gridState) {
    return findCurrent(component, gridConfig).bind(function (focused) {
      return gridConfig.execute()(component, simulatedEvent, focused);
    });
  };
  var doMove = function (cycle) {
    return function (element, focused, gridConfig, gridState) {
      return $_9y0spv10ejeajon0i.locateVisible(element, focused, gridConfig.selector()).bind(function (identified) {
        return cycle(identified.candidates(), identified.index(), gridState.getNumRows().getOr(gridConfig.initSize().numRows()), gridState.getNumColumns().getOr(gridConfig.initSize().numColumns()));
      });
    };
  };
  var handleTab = function (component, simulatedEvent, gridConfig, gridState) {
    return gridConfig.captureTab() ? Option.some(true) : Option.none();
  };
  var doEscape = function (component, simulatedEvent, gridConfig, gridState) {
    return gridConfig.onEscape()(component, simulatedEvent);
  };
  var moveLeft = doMove($_2uu8a110hjeajon0t.cycleLeft);
  var moveRight = doMove($_2uu8a110hjeajon0t.cycleRight);
  var moveNorth = doMove($_2uu8a110hjeajon0t.cycleUp);
  var moveSouth = doMove($_2uu8a110hjeajon0t.cycleDown);
  var getRules$1 = $_ddy4s3wjjeajomls.constant([
    $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.LEFT()), $_5xnokt10cjeajon0g.west(moveLeft, moveRight)),
    $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.RIGHT()), $_5xnokt10cjeajon0g.east(moveLeft, moveRight)),
    $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.UP()), $_5xnokt10cjeajon0g.north(moveNorth)),
    $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.DOWN()), $_5xnokt10cjeajon0g.south(moveSouth)),
    $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.and([
      $_84obuk100jeajomz0.isShift,
      $_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.TAB())
    ]), handleTab),
    $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.and([
      $_84obuk100jeajomz0.isNotShift,
      $_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.TAB())
    ]), handleTab),
    $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.ESCAPE()), doEscape),
    $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.SPACE().concat($_1meuo5zpjeajomy3.ENTER())), execute$1)
  ]);
  var getEvents$1 = $_ddy4s3wjjeajomls.constant({});
  var getApis$1 = {};
  var FlatgridType = $_avb3yozqjeajomy5.typical(schema$2, $_2xr37k10bjeajon0b.flatgrid, getRules$1, getEvents$1, getApis$1, Option.some(focusIn));

  var horizontal = function (container, selector, current, delta) {
    return $_9y0spv10ejeajon0i.locateVisible(container, current, selector, $_ddy4s3wjjeajomls.constant(true)).bind(function (identified) {
      var index = identified.index();
      var candidates = identified.candidates();
      var newIndex = $_fj0mkfzujeajomyp.cycleBy(index, delta, 0, candidates.length - 1);
      return Option.from(candidates[newIndex]);
    });
  };
  var $_9x11uz10jjeajon16 = { horizontal: horizontal };

  var schema$3 = [
    $_8qbqu2y7jeajomsl.strict('selector'),
    $_8qbqu2y7jeajomsl.defaulted('getInitial', Option.none),
    $_8qbqu2y7jeajomsl.defaulted('execute', $_bt4zer109jeajon02.defaultExecute),
    $_8qbqu2y7jeajomsl.defaulted('executeOnMove', false)
  ];
  var findCurrent$1 = function (component, flowConfig) {
    return flowConfig.focusManager().get(component).bind(function (elem) {
      return $_3vna6mzxjeajomyv.closest(elem, flowConfig.selector());
    });
  };
  var execute$2 = function (component, simulatedEvent, flowConfig) {
    return findCurrent$1(component, flowConfig).bind(function (focused) {
      return flowConfig.execute()(component, simulatedEvent, focused);
    });
  };
  var focusIn$1 = function (component, flowConfig) {
    flowConfig.getInitial()(component).or($_3vna6mzxjeajomyv.descendant(component.element(), flowConfig.selector())).each(function (first) {
      flowConfig.focusManager().set(component, first);
    });
  };
  var moveLeft$1 = function (element, focused, info) {
    return $_9x11uz10jjeajon16.horizontal(element, info.selector(), focused, -1);
  };
  var moveRight$1 = function (element, focused, info) {
    return $_9x11uz10jjeajon16.horizontal(element, info.selector(), focused, +1);
  };
  var doMove$1 = function (movement) {
    return function (component, simulatedEvent, flowConfig) {
      return movement(component, simulatedEvent, flowConfig).bind(function () {
        return flowConfig.executeOnMove() ? execute$2(component, simulatedEvent, flowConfig) : Option.some(true);
      });
    };
  };
  var getRules$2 = function (_) {
    return [
      $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.LEFT().concat($_1meuo5zpjeajomy3.UP())), doMove$1($_5xnokt10cjeajon0g.west(moveLeft$1, moveRight$1))),
      $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.RIGHT().concat($_1meuo5zpjeajomy3.DOWN())), doMove$1($_5xnokt10cjeajon0g.east(moveLeft$1, moveRight$1))),
      $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.ENTER()), execute$2),
      $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.SPACE()), execute$2)
    ];
  };
  var getEvents$2 = $_ddy4s3wjjeajomls.constant({});
  var getApis$2 = $_ddy4s3wjjeajomls.constant({});
  var FlowType = $_avb3yozqjeajomy5.typical(schema$3, $_8yipm6yjjeajomue.init, getRules$2, getEvents$2, getApis$2, Option.some(focusIn$1));

  var outcome = $_6725fkx4jeajomoa.immutableBag([
    'rowIndex',
    'columnIndex',
    'cell'
  ], []);
  var toCell = function (matrix, rowIndex, columnIndex) {
    return Option.from(matrix[rowIndex]).bind(function (row) {
      return Option.from(row[columnIndex]).map(function (cell) {
        return outcome({
          rowIndex: rowIndex,
          columnIndex: columnIndex,
          cell: cell
        });
      });
    });
  };
  var cycleHorizontal$1 = function (matrix, rowIndex, startCol, deltaCol) {
    var row = matrix[rowIndex];
    var colsInRow = row.length;
    var newColIndex = $_fj0mkfzujeajomyp.cycleBy(startCol, deltaCol, 0, colsInRow - 1);
    return toCell(matrix, rowIndex, newColIndex);
  };
  var cycleVertical$1 = function (matrix, colIndex, startRow, deltaRow) {
    var nextRowIndex = $_fj0mkfzujeajomyp.cycleBy(startRow, deltaRow, 0, matrix.length - 1);
    var colsInNextRow = matrix[nextRowIndex].length;
    var nextColIndex = $_fj0mkfzujeajomyp.cap(colIndex, 0, colsInNextRow - 1);
    return toCell(matrix, nextRowIndex, nextColIndex);
  };
  var moveHorizontal = function (matrix, rowIndex, startCol, deltaCol) {
    var row = matrix[rowIndex];
    var colsInRow = row.length;
    var newColIndex = $_fj0mkfzujeajomyp.cap(startCol + deltaCol, 0, colsInRow - 1);
    return toCell(matrix, rowIndex, newColIndex);
  };
  var moveVertical = function (matrix, colIndex, startRow, deltaRow) {
    var nextRowIndex = $_fj0mkfzujeajomyp.cap(startRow + deltaRow, 0, matrix.length - 1);
    var colsInNextRow = matrix[nextRowIndex].length;
    var nextColIndex = $_fj0mkfzujeajomyp.cap(colIndex, 0, colsInNextRow - 1);
    return toCell(matrix, nextRowIndex, nextColIndex);
  };
  var cycleRight$1 = function (matrix, startRow, startCol) {
    return cycleHorizontal$1(matrix, startRow, startCol, +1);
  };
  var cycleLeft$1 = function (matrix, startRow, startCol) {
    return cycleHorizontal$1(matrix, startRow, startCol, -1);
  };
  var cycleUp$1 = function (matrix, startRow, startCol) {
    return cycleVertical$1(matrix, startCol, startRow, -1);
  };
  var cycleDown$1 = function (matrix, startRow, startCol) {
    return cycleVertical$1(matrix, startCol, startRow, +1);
  };
  var moveLeft$2 = function (matrix, startRow, startCol) {
    return moveHorizontal(matrix, startRow, startCol, -1);
  };
  var moveRight$2 = function (matrix, startRow, startCol) {
    return moveHorizontal(matrix, startRow, startCol, +1);
  };
  var moveUp = function (matrix, startRow, startCol) {
    return moveVertical(matrix, startCol, startRow, -1);
  };
  var moveDown = function (matrix, startRow, startCol) {
    return moveVertical(matrix, startCol, startRow, +1);
  };
  var $_64nzo310ljeajon1i = {
    cycleRight: cycleRight$1,
    cycleLeft: cycleLeft$1,
    cycleUp: cycleUp$1,
    cycleDown: cycleDown$1,
    moveLeft: moveLeft$2,
    moveRight: moveRight$2,
    moveUp: moveUp,
    moveDown: moveDown
  };

  var schema$4 = [
    $_8qbqu2y7jeajomsl.strictObjOf('selectors', [
      $_8qbqu2y7jeajomsl.strict('row'),
      $_8qbqu2y7jeajomsl.strict('cell')
    ]),
    $_8qbqu2y7jeajomsl.defaulted('cycles', true),
    $_8qbqu2y7jeajomsl.defaulted('previousSelector', Option.none),
    $_8qbqu2y7jeajomsl.defaulted('execute', $_bt4zer109jeajon02.defaultExecute)
  ];
  var focusIn$2 = function (component, matrixConfig) {
    var focused = matrixConfig.previousSelector()(component).orThunk(function () {
      var selectors = matrixConfig.selectors();
      return $_3vna6mzxjeajomyv.descendant(component.element(), selectors.cell());
    });
    focused.each(function (cell) {
      matrixConfig.focusManager().set(component, cell);
    });
  };
  var execute$3 = function (component, simulatedEvent, matrixConfig) {
    return $_gc8hiiytjeajomut.search(component.element()).bind(function (focused) {
      return matrixConfig.execute()(component, simulatedEvent, focused);
    });
  };
  var toMatrix = function (rows, matrixConfig) {
    return $_5r3pikwsjeajommo.map(rows, function (row) {
      return $_62qkn1zvjeajomyr.descendants(row, matrixConfig.selectors().cell());
    });
  };
  var doMove$2 = function (ifCycle, ifMove) {
    return function (element, focused, matrixConfig) {
      var move = matrixConfig.cycles() ? ifCycle : ifMove;
      return $_3vna6mzxjeajomyv.closest(focused, matrixConfig.selectors().row()).bind(function (inRow) {
        var cellsInRow = $_62qkn1zvjeajomyr.descendants(inRow, matrixConfig.selectors().cell());
        return $_9y0spv10ejeajon0i.findIndex(cellsInRow, focused).bind(function (colIndex) {
          var allRows = $_62qkn1zvjeajomyr.descendants(element, matrixConfig.selectors().row());
          return $_9y0spv10ejeajon0i.findIndex(allRows, inRow).bind(function (rowIndex) {
            var matrix = toMatrix(allRows, matrixConfig);
            return move(matrix, rowIndex, colIndex).map(function (next) {
              return next.cell();
            });
          });
        });
      });
    };
  };
  var moveLeft$3 = doMove$2($_64nzo310ljeajon1i.cycleLeft, $_64nzo310ljeajon1i.moveLeft);
  var moveRight$3 = doMove$2($_64nzo310ljeajon1i.cycleRight, $_64nzo310ljeajon1i.moveRight);
  var moveNorth$1 = doMove$2($_64nzo310ljeajon1i.cycleUp, $_64nzo310ljeajon1i.moveUp);
  var moveSouth$1 = doMove$2($_64nzo310ljeajon1i.cycleDown, $_64nzo310ljeajon1i.moveDown);
  var getRules$3 = $_ddy4s3wjjeajomls.constant([
    $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.LEFT()), $_5xnokt10cjeajon0g.west(moveLeft$3, moveRight$3)),
    $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.RIGHT()), $_5xnokt10cjeajon0g.east(moveLeft$3, moveRight$3)),
    $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.UP()), $_5xnokt10cjeajon0g.north(moveNorth$1)),
    $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.DOWN()), $_5xnokt10cjeajon0g.south(moveSouth$1)),
    $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.SPACE().concat($_1meuo5zpjeajomy3.ENTER())), execute$3)
  ]);
  var getEvents$3 = $_ddy4s3wjjeajomls.constant({});
  var getApis$3 = $_ddy4s3wjjeajomls.constant({});
  var MatrixType = $_avb3yozqjeajomy5.typical(schema$4, $_8yipm6yjjeajomue.init, getRules$3, getEvents$3, getApis$3, Option.some(focusIn$2));

  var schema$5 = [
    $_8qbqu2y7jeajomsl.strict('selector'),
    $_8qbqu2y7jeajomsl.defaulted('execute', $_bt4zer109jeajon02.defaultExecute),
    $_8qbqu2y7jeajomsl.defaulted('moveOnTab', false)
  ];
  var execute$4 = function (component, simulatedEvent, menuConfig) {
    return menuConfig.focusManager().get(component).bind(function (focused) {
      return menuConfig.execute()(component, simulatedEvent, focused);
    });
  };
  var focusIn$3 = function (component, menuConfig, simulatedEvent) {
    $_3vna6mzxjeajomyv.descendant(component.element(), menuConfig.selector()).each(function (first) {
      menuConfig.focusManager().set(component, first);
    });
  };
  var moveUp$1 = function (element, focused, info) {
    return $_9x11uz10jjeajon16.horizontal(element, info.selector(), focused, -1);
  };
  var moveDown$1 = function (element, focused, info) {
    return $_9x11uz10jjeajon16.horizontal(element, info.selector(), focused, +1);
  };
  var fireShiftTab = function (component, simulatedEvent, menuConfig) {
    return menuConfig.moveOnTab() ? $_5xnokt10cjeajon0g.move(moveUp$1)(component, simulatedEvent, menuConfig) : Option.none();
  };
  var fireTab = function (component, simulatedEvent, menuConfig) {
    return menuConfig.moveOnTab() ? $_5xnokt10cjeajon0g.move(moveDown$1)(component, simulatedEvent, menuConfig) : Option.none();
  };
  var getRules$4 = $_ddy4s3wjjeajomls.constant([
    $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.UP()), $_5xnokt10cjeajon0g.move(moveUp$1)),
    $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.DOWN()), $_5xnokt10cjeajon0g.move(moveDown$1)),
    $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.and([
      $_84obuk100jeajomz0.isShift,
      $_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.TAB())
    ]), fireShiftTab),
    $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.and([
      $_84obuk100jeajomz0.isNotShift,
      $_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.TAB())
    ]), fireTab),
    $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.ENTER()), execute$4),
    $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.SPACE()), execute$4)
  ]);
  var getEvents$4 = $_ddy4s3wjjeajomls.constant({});
  var getApis$4 = $_ddy4s3wjjeajomls.constant({});
  var MenuType = $_avb3yozqjeajomy5.typical(schema$5, $_8yipm6yjjeajomue.init, getRules$4, getEvents$4, getApis$4, Option.some(focusIn$3));

  var schema$6 = [
    $_apbxenz6jeajomvz.onKeyboardHandler('onSpace'),
    $_apbxenz6jeajomvz.onKeyboardHandler('onEnter'),
    $_apbxenz6jeajomvz.onKeyboardHandler('onShiftEnter'),
    $_apbxenz6jeajomvz.onKeyboardHandler('onLeft'),
    $_apbxenz6jeajomvz.onKeyboardHandler('onRight'),
    $_apbxenz6jeajomvz.onKeyboardHandler('onTab'),
    $_apbxenz6jeajomvz.onKeyboardHandler('onShiftTab'),
    $_apbxenz6jeajomvz.onKeyboardHandler('onUp'),
    $_apbxenz6jeajomvz.onKeyboardHandler('onDown'),
    $_apbxenz6jeajomvz.onKeyboardHandler('onEscape'),
    $_8qbqu2y7jeajomsl.option('focusIn')
  ];
  var getRules$5 = function (component, simulatedEvent, executeInfo) {
    return [
      $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.SPACE()), executeInfo.onSpace()),
      $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.and([
        $_84obuk100jeajomz0.isNotShift,
        $_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.ENTER())
      ]), executeInfo.onEnter()),
      $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.and([
        $_84obuk100jeajomz0.isShift,
        $_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.ENTER())
      ]), executeInfo.onShiftEnter()),
      $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.and([
        $_84obuk100jeajomz0.isShift,
        $_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.TAB())
      ]), executeInfo.onShiftTab()),
      $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.and([
        $_84obuk100jeajomz0.isNotShift,
        $_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.TAB())
      ]), executeInfo.onTab()),
      $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.UP()), executeInfo.onUp()),
      $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.DOWN()), executeInfo.onDown()),
      $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.LEFT()), executeInfo.onLeft()),
      $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.RIGHT()), executeInfo.onRight()),
      $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.SPACE()), executeInfo.onSpace()),
      $_fcjcmzzjeajomyy.rule($_84obuk100jeajomz0.inSet($_1meuo5zpjeajomy3.ESCAPE()), executeInfo.onEscape())
    ];
  };
  var focusIn$4 = function (component, executeInfo) {
    return executeInfo.focusIn().bind(function (f) {
      return f(component, executeInfo);
    });
  };
  var getEvents$5 = $_ddy4s3wjjeajomls.constant({});
  var getApis$5 = $_ddy4s3wjjeajomls.constant({});
  var SpecialType = $_avb3yozqjeajomy5.typical(schema$6, $_8yipm6yjjeajomue.init, getRules$5, getEvents$5, getApis$5, Option.some(focusIn$4));

  var $_3xt1s4zmjeajomxo = {
    acyclic: AcyclicType.schema(),
    cyclic: CyclicType.schema(),
    flow: FlowType.schema(),
    flatgrid: FlatgridType.schema(),
    matrix: MatrixType.schema(),
    execution: ExecutionType.schema(),
    menu: MenuType.schema(),
    special: SpecialType.schema()
  };

  var Keying = $_cwu2vpy2jeajomrh.createModes({
    branchKey: 'mode',
    branches: $_3xt1s4zmjeajomxo,
    name: 'keying',
    active: {
      events: function (keyingConfig, keyingState) {
        var handler = keyingConfig.handler();
        return handler.toEvents(keyingConfig, keyingState);
      }
    },
    apis: {
      focusIn: function (component) {
        component.getSystem().triggerFocus(component.element(), component.element());
      },
      setGridSize: function (component, keyConfig, keyState, numRows, numColumns) {
        if (!$_6rmcx0xsjeajomqm.hasKey(keyState, 'setGridSize')) {
          console.error('Layout does not support setGridSize');
        } else {
          keyState.setGridSize(numRows, numColumns);
        }
      }
    },
    state: $_2xr37k10bjeajon0b
  });

  var field$1 = function (name, forbidden) {
    return $_8qbqu2y7jeajomsl.defaultedObjOf(name, {}, $_5r3pikwsjeajommo.map(forbidden, function (f) {
      return $_8qbqu2y7jeajomsl.forbid(f.name(), 'Cannot configure ' + f.name() + ' for ' + name);
    }).concat([$_8qbqu2y7jeajomsl.state('dump', $_ddy4s3wjjeajomls.identity)]));
  };
  var get$5 = function (data) {
    return data.dump();
  };
  var $_2ioems10ojeajon1y = {
    field: field$1,
    get: get$5
  };

  var unique = 0;
  var generate$1 = function (prefix) {
    var date = new Date();
    var time = date.getTime();
    var random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
  };
  var $_cxs1c110rjeajon2f = { generate: generate$1 };

  var premadeTag = $_cxs1c110rjeajon2f.generate('alloy-premade');
  var apiConfig = $_cxs1c110rjeajon2f.generate('api');
  var premade = function (comp) {
    return $_6rmcx0xsjeajomqm.wrap(premadeTag, comp);
  };
  var getPremade = function (spec) {
    return $_6rmcx0xsjeajomqm.readOptFrom(spec, premadeTag);
  };
  var makeApi = function (f) {
    return $_fr899xygjeajomty.markAsSketchApi(function (component) {
      var args = Array.prototype.slice.call(arguments, 0);
      var spi = component.config(apiConfig);
      return f.apply(undefined, [spi].concat(args));
    }, f);
  };
  var $_ebzw1210qjeajon2a = {
    apiConfig: $_ddy4s3wjjeajomls.constant(apiConfig),
    makeApi: makeApi,
    premade: premade,
    getPremade: getPremade
  };

  var adt$2 = $_d1vtuwxwjeajomr2.generate([
    { required: ['data'] },
    { external: ['data'] },
    { optional: ['data'] },
    { group: ['data'] }
  ]);
  var fFactory = $_8qbqu2y7jeajomsl.defaulted('factory', { sketch: $_ddy4s3wjjeajomls.identity });
  var fSchema = $_8qbqu2y7jeajomsl.defaulted('schema', []);
  var fName = $_8qbqu2y7jeajomsl.strict('name');
  var fPname = $_8qbqu2y7jeajomsl.field('pname', 'pname', $_6n8cmyy8jeajomsp.defaultedThunk(function (typeSpec) {
    return '<alloy.' + $_cxs1c110rjeajon2f.generate(typeSpec.name) + '>';
  }), $_8qt2pyyejeajomtl.anyValue());
  var fDefaults = $_8qbqu2y7jeajomsl.defaulted('defaults', $_ddy4s3wjjeajomls.constant({}));
  var fOverrides = $_8qbqu2y7jeajomsl.defaulted('overrides', $_ddy4s3wjjeajomls.constant({}));
  var requiredSpec = $_8qt2pyyejeajomtl.objOf([
    fFactory,
    fSchema,
    fName,
    fPname,
    fDefaults,
    fOverrides
  ]);
  var externalSpec = $_8qt2pyyejeajomtl.objOf([
    fFactory,
    fSchema,
    fName,
    fDefaults,
    fOverrides
  ]);
  var optionalSpec = $_8qt2pyyejeajomtl.objOf([
    fFactory,
    fSchema,
    fName,
    fPname,
    fDefaults,
    fOverrides
  ]);
  var groupSpec = $_8qt2pyyejeajomtl.objOf([
    fFactory,
    fSchema,
    fName,
    $_8qbqu2y7jeajomsl.strict('unit'),
    fPname,
    fDefaults,
    fOverrides
  ]);
  var asNamedPart = function (part) {
    return part.fold(Option.some, Option.none, Option.some, Option.some);
  };
  var name$1 = function (part) {
    var get = function (data) {
      return data.name();
    };
    return part.fold(get, get, get, get);
  };
  var asCommon = function (part) {
    return part.fold($_ddy4s3wjjeajomls.identity, $_ddy4s3wjjeajomls.identity, $_ddy4s3wjjeajomls.identity, $_ddy4s3wjjeajomls.identity);
  };
  var convert = function (adtConstructor, partSpec) {
    return function (spec) {
      var data = $_8qt2pyyejeajomtl.asStructOrDie('Converting part type', partSpec, spec);
      return adtConstructor(data);
    };
  };
  var $_7m3s6v10vjeajon34 = {
    required: convert(adt$2.required, requiredSpec),
    external: convert(adt$2.external, externalSpec),
    optional: convert(adt$2.optional, optionalSpec),
    group: convert(adt$2.group, groupSpec),
    asNamedPart: asNamedPart,
    name: name$1,
    asCommon: asCommon,
    original: $_ddy4s3wjjeajomls.constant('entirety')
  };

  var placeholder = 'placeholder';
  var adt$3 = $_d1vtuwxwjeajomr2.generate([
    {
      single: [
        'required',
        'valueThunk'
      ]
    },
    {
      multiple: [
        'required',
        'valueThunks'
      ]
    }
  ]);
  var isSubstitute = function (uiType) {
    return $_5r3pikwsjeajommo.contains([placeholder], uiType);
  };
  var subPlaceholder = function (owner, detail, compSpec, placeholders) {
    if (owner.exists(function (o) {
        return o !== compSpec.owner;
      }))
      return adt$3.single(true, $_ddy4s3wjjeajomls.constant(compSpec));
    return $_6rmcx0xsjeajomqm.readOptFrom(placeholders, compSpec.name).fold(function () {
      throw new Error('Unknown placeholder component: ' + compSpec.name + '\nKnown: [' + $_9s6ha1x0jeajomnc.keys(placeholders) + ']\nNamespace: ' + owner.getOr('none') + '\nSpec: ' + $_ax19tpydjeajomtj.stringify(compSpec, null, 2));
    }, function (newSpec) {
      return newSpec.replace();
    });
  };
  var scan = function (owner, detail, compSpec, placeholders) {
    if (compSpec.uiType === placeholder)
      return subPlaceholder(owner, detail, compSpec, placeholders);
    else
      return adt$3.single(false, $_ddy4s3wjjeajomls.constant(compSpec));
  };
  var substitute = function (owner, detail, compSpec, placeholders) {
    var base = scan(owner, detail, compSpec, placeholders);
    return base.fold(function (req, valueThunk) {
      var value = valueThunk(detail, compSpec.config, compSpec.validated);
      var childSpecs = $_6rmcx0xsjeajomqm.readOptFrom(value, 'components').getOr([]);
      var substituted = $_5r3pikwsjeajommo.bind(childSpecs, function (c) {
        return substitute(owner, detail, c, placeholders);
      });
      return [$_2yrejjwyjeajomn9.deepMerge(value, { components: substituted })];
    }, function (req, valuesThunk) {
      var values = valuesThunk(detail, compSpec.config, compSpec.validated);
      return values;
    });
  };
  var substituteAll = function (owner, detail, components, placeholders) {
    return $_5r3pikwsjeajommo.bind(components, function (c) {
      return substitute(owner, detail, c, placeholders);
    });
  };
  var oneReplace = function (label, replacements) {
    var called = false;
    var used = function () {
      return called;
    };
    var replace = function () {
      if (called === true)
        throw new Error('Trying to use the same placeholder more than once: ' + label);
      called = true;
      return replacements;
    };
    var required = function () {
      return replacements.fold(function (req, _) {
        return req;
      }, function (req, _) {
        return req;
      });
    };
    return {
      name: $_ddy4s3wjjeajomls.constant(label),
      required: required,
      used: used,
      replace: replace
    };
  };
  var substitutePlaces = function (owner, detail, components, placeholders) {
    var ps = $_9s6ha1x0jeajomnc.map(placeholders, function (ph, name) {
      return oneReplace(name, ph);
    });
    var outcome = substituteAll(owner, detail, components, ps);
    $_9s6ha1x0jeajomnc.each(ps, function (p) {
      if (p.used() === false && p.required()) {
        throw new Error('Placeholder: ' + p.name() + ' was not found in components list\nNamespace: ' + owner.getOr('none') + '\nComponents: ' + $_ax19tpydjeajomtj.stringify(detail.components(), null, 2));
      }
    });
    return outcome;
  };
  var singleReplace = function (detail, p) {
    var replacement = p;
    return replacement.fold(function (req, valueThunk) {
      return [valueThunk(detail)];
    }, function (req, valuesThunk) {
      return valuesThunk(detail);
    });
  };
  var $_aiqyv010wjeajon3d = {
    single: adt$3.single,
    multiple: adt$3.multiple,
    isSubstitute: isSubstitute,
    placeholder: $_ddy4s3wjjeajomls.constant(placeholder),
    substituteAll: substituteAll,
    substitutePlaces: substitutePlaces,
    singleReplace: singleReplace
  };

  var combine = function (detail, data, partSpec, partValidated) {
    var spec = partSpec;
    return $_2yrejjwyjeajomn9.deepMerge(data.defaults()(detail, partSpec, partValidated), partSpec, { uid: detail.partUids()[data.name()] }, data.overrides()(detail, partSpec, partValidated), { 'debug.sketcher': $_6rmcx0xsjeajomqm.wrap('part-' + data.name(), spec) });
  };
  var subs = function (owner, detail, parts) {
    var internals = {};
    var externals = {};
    $_5r3pikwsjeajommo.each(parts, function (part) {
      part.fold(function (data) {
        internals[data.pname()] = $_aiqyv010wjeajon3d.single(true, function (detail, partSpec, partValidated) {
          return data.factory().sketch(combine(detail, data, partSpec, partValidated));
        });
      }, function (data) {
        var partSpec = detail.parts()[data.name()]();
        externals[data.name()] = $_ddy4s3wjjeajomls.constant(combine(detail, data, partSpec[$_7m3s6v10vjeajon34.original()]()));
      }, function (data) {
        internals[data.pname()] = $_aiqyv010wjeajon3d.single(false, function (detail, partSpec, partValidated) {
          return data.factory().sketch(combine(detail, data, partSpec, partValidated));
        });
      }, function (data) {
        internals[data.pname()] = $_aiqyv010wjeajon3d.multiple(true, function (detail, _partSpec, _partValidated) {
          var units = detail[data.name()]();
          return $_5r3pikwsjeajommo.map(units, function (u) {
            return data.factory().sketch($_2yrejjwyjeajomn9.deepMerge(data.defaults()(detail, u), u, data.overrides()(detail, u)));
          });
        });
      });
    });
    return {
      internals: $_ddy4s3wjjeajomls.constant(internals),
      externals: $_ddy4s3wjjeajomls.constant(externals)
    };
  };
  var $_2xuoy310ujeajon2z = { subs: subs };

  var generate$2 = function (owner, parts) {
    var r = {};
    $_5r3pikwsjeajommo.each(parts, function (part) {
      $_7m3s6v10vjeajon34.asNamedPart(part).each(function (np) {
        var g = doGenerateOne(owner, np.pname());
        r[np.name()] = function (config) {
          var validated = $_8qt2pyyejeajomtl.asRawOrDie('Part: ' + np.name() + ' in ' + owner, $_8qt2pyyejeajomtl.objOf(np.schema()), config);
          return $_2yrejjwyjeajomn9.deepMerge(g, {
            config: config,
            validated: validated
          });
        };
      });
    });
    return r;
  };
  var doGenerateOne = function (owner, pname) {
    return {
      uiType: $_aiqyv010wjeajon3d.placeholder(),
      owner: owner,
      name: pname
    };
  };
  var generateOne = function (owner, pname, config) {
    return {
      uiType: $_aiqyv010wjeajon3d.placeholder(),
      owner: owner,
      name: pname,
      config: config,
      validated: {}
    };
  };
  var schemas = function (parts) {
    return $_5r3pikwsjeajommo.bind(parts, function (part) {
      return part.fold(Option.none, Option.some, Option.none, Option.none).map(function (data) {
        return $_8qbqu2y7jeajomsl.strictObjOf(data.name(), data.schema().concat([$_apbxenz6jeajomvz.snapshot($_7m3s6v10vjeajon34.original())]));
      }).toArray();
    });
  };
  var names = function (parts) {
    return $_5r3pikwsjeajommo.map(parts, $_7m3s6v10vjeajon34.name);
  };
  var substitutes = function (owner, detail, parts) {
    return $_2xuoy310ujeajon2z.subs(owner, detail, parts);
  };
  var components = function (owner, detail, internals) {
    return $_aiqyv010wjeajon3d.substitutePlaces(Option.some(owner), detail, detail.components(), internals);
  };
  var getPart = function (component, detail, partKey) {
    var uid = detail.partUids()[partKey];
    return component.getSystem().getByUid(uid).toOption();
  };
  var getPartOrDie = function (component, detail, partKey) {
    return getPart(component, detail, partKey).getOrDie('Could not find part: ' + partKey);
  };
  var getParts = function (component, detail, partKeys) {
    var r = {};
    var uids = detail.partUids();
    var system = component.getSystem();
    $_5r3pikwsjeajommo.each(partKeys, function (pk) {
      r[pk] = system.getByUid(uids[pk]);
    });
    return $_9s6ha1x0jeajomnc.map(r, $_ddy4s3wjjeajomls.constant);
  };
  var getAllParts = function (component, detail) {
    var system = component.getSystem();
    return $_9s6ha1x0jeajomnc.map(detail.partUids(), function (pUid, k) {
      return $_ddy4s3wjjeajomls.constant(system.getByUid(pUid));
    });
  };
  var getPartsOrDie = function (component, detail, partKeys) {
    var r = {};
    var uids = detail.partUids();
    var system = component.getSystem();
    $_5r3pikwsjeajommo.each(partKeys, function (pk) {
      r[pk] = system.getByUid(uids[pk]).getOrDie();
    });
    return $_9s6ha1x0jeajomnc.map(r, $_ddy4s3wjjeajomls.constant);
  };
  var defaultUids = function (baseUid, partTypes) {
    var partNames = names(partTypes);
    return $_6rmcx0xsjeajomqm.wrapAll($_5r3pikwsjeajommo.map(partNames, function (pn) {
      return {
        key: pn,
        value: baseUid + '-' + pn
      };
    }));
  };
  var defaultUidsSchema = function (partTypes) {
    return $_8qbqu2y7jeajomsl.field('partUids', 'partUids', $_6n8cmyy8jeajomsp.mergeWithThunk(function (spec) {
      return defaultUids(spec.uid, partTypes);
    }), $_8qt2pyyejeajomtl.anyValue());
  };
  var $_opzv410tjeajon2o = {
    generate: generate$2,
    generateOne: generateOne,
    schemas: schemas,
    names: names,
    substitutes: substitutes,
    components: components,
    defaultUids: defaultUids,
    defaultUidsSchema: defaultUidsSchema,
    getAllParts: getAllParts,
    getPart: getPart,
    getPartOrDie: getPartOrDie,
    getParts: getParts,
    getPartsOrDie: getPartsOrDie
  };

  var prefix$1 = 'alloy-id-';
  var idAttr = 'data-alloy-id';
  var $_9nl78t10yjeajon3t = {
    prefix: $_ddy4s3wjjeajomls.constant(prefix$1),
    idAttr: $_ddy4s3wjjeajomls.constant(idAttr)
  };

  var prefix$2 = $_9nl78t10yjeajon3t.prefix();
  var idAttr$1 = $_9nl78t10yjeajon3t.idAttr();
  var write = function (label, elem) {
    var id = $_cxs1c110rjeajon2f.generate(prefix$2 + label);
    $_a7s3osxrjeajomqe.set(elem, idAttr$1, id);
    return id;
  };
  var writeOnly = function (elem, uid) {
    $_a7s3osxrjeajomqe.set(elem, idAttr$1, uid);
  };
  var read$2 = function (elem) {
    var id = $_bsb5vnxkjeajompc.isElement(elem) ? $_a7s3osxrjeajomqe.get(elem, idAttr$1) : null;
    return Option.from(id);
  };
  var find$3 = function (container, id) {
    return $_3vna6mzxjeajomyv.descendant(container, id);
  };
  var generate$3 = function (prefix) {
    return $_cxs1c110rjeajon2f.generate(prefix);
  };
  var revoke = function (elem) {
    $_a7s3osxrjeajomqe.remove(elem, idAttr$1);
  };
  var $_dbn7mh10xjeajon3m = {
    revoke: revoke,
    write: write,
    writeOnly: writeOnly,
    read: read$2,
    find: find$3,
    generate: generate$3,
    attribute: $_ddy4s3wjjeajomls.constant(idAttr$1)
  };

  var getPartsSchema = function (partNames, _optPartNames, _owner) {
    var owner = _owner !== undefined ? _owner : 'Unknown owner';
    var fallbackThunk = function () {
      return [$_apbxenz6jeajomvz.output('partUids', {})];
    };
    var optPartNames = _optPartNames !== undefined ? _optPartNames : fallbackThunk();
    if (partNames.length === 0 && optPartNames.length === 0)
      return fallbackThunk();
    var partsSchema = $_8qbqu2y7jeajomsl.strictObjOf('parts', $_5r3pikwsjeajommo.flatten([
      $_5r3pikwsjeajommo.map(partNames, $_8qbqu2y7jeajomsl.strict),
      $_5r3pikwsjeajommo.map(optPartNames, function (optPart) {
        return $_8qbqu2y7jeajomsl.defaulted(optPart, $_aiqyv010wjeajon3d.single(false, function () {
          throw new Error('The optional part: ' + optPart + ' was not specified in the config, but it was used in components');
        }));
      })
    ]));
    var partUidsSchema = $_8qbqu2y7jeajomsl.state('partUids', function (spec) {
      if (!$_6rmcx0xsjeajomqm.hasKey(spec, 'parts')) {
        throw new Error('Part uid definition for owner: ' + owner + ' requires "parts"\nExpected parts: ' + partNames.join(', ') + '\nSpec: ' + $_ax19tpydjeajomtj.stringify(spec, null, 2));
      }
      var uids = $_9s6ha1x0jeajomnc.map(spec.parts, function (v, k) {
        return $_6rmcx0xsjeajomqm.readOptFrom(v, 'uid').getOrThunk(function () {
          return spec.uid + '-' + k;
        });
      });
      return uids;
    });
    return [
      partsSchema,
      partUidsSchema
    ];
  };
  var base$1 = function (label, partSchemas, partUidsSchemas, spec) {
    var ps = partSchemas.length > 0 ? [$_8qbqu2y7jeajomsl.strictObjOf('parts', partSchemas)] : [];
    return ps.concat([
      $_8qbqu2y7jeajomsl.strict('uid'),
      $_8qbqu2y7jeajomsl.defaulted('dom', {}),
      $_8qbqu2y7jeajomsl.defaulted('components', []),
      $_apbxenz6jeajomvz.snapshot('originalSpec'),
      $_8qbqu2y7jeajomsl.defaulted('debug.sketcher', {})
    ]).concat(partUidsSchemas);
  };
  var asRawOrDie$1 = function (label, schema, spec, partSchemas, partUidsSchemas) {
    var baseS = base$1(label, partSchemas, spec, partUidsSchemas);
    return $_8qt2pyyejeajomtl.asRawOrDie(label + ' [SpecSchema]', $_8qt2pyyejeajomtl.objOfOnly(baseS.concat(schema)), spec);
  };
  var asStructOrDie$1 = function (label, schema, spec, partSchemas, partUidsSchemas) {
    var baseS = base$1(label, partSchemas, partUidsSchemas, spec);
    return $_8qt2pyyejeajomtl.asStructOrDie(label + ' [SpecSchema]', $_8qt2pyyejeajomtl.objOfOnly(baseS.concat(schema)), spec);
  };
  var extend = function (builder, original, nu) {
    var newSpec = $_2yrejjwyjeajomn9.deepMerge(original, nu);
    return builder(newSpec);
  };
  var addBehaviours = function (original, behaviours) {
    return $_2yrejjwyjeajomn9.deepMerge(original, behaviours);
  };
  var $_9mgdso10zjeajon3v = {
    asRawOrDie: asRawOrDie$1,
    asStructOrDie: asStructOrDie$1,
    addBehaviours: addBehaviours,
    getPartsSchema: getPartsSchema,
    extend: extend
  };

  var single = function (owner, schema, factory, spec) {
    var specWithUid = supplyUid(spec);
    var detail = $_9mgdso10zjeajon3v.asStructOrDie(owner, schema, specWithUid, [], []);
    return $_2yrejjwyjeajomn9.deepMerge(factory(detail, specWithUid), { 'debug.sketcher': $_6rmcx0xsjeajomqm.wrap(owner, spec) });
  };
  var composite = function (owner, schema, partTypes, factory, spec) {
    var specWithUid = supplyUid(spec);
    var partSchemas = $_opzv410tjeajon2o.schemas(partTypes);
    var partUidsSchema = $_opzv410tjeajon2o.defaultUidsSchema(partTypes);
    var detail = $_9mgdso10zjeajon3v.asStructOrDie(owner, schema, specWithUid, partSchemas, [partUidsSchema]);
    var subs = $_opzv410tjeajon2o.substitutes(owner, detail, partTypes);
    var components = $_opzv410tjeajon2o.components(owner, detail, subs.internals());
    return $_2yrejjwyjeajomn9.deepMerge(factory(detail, components, specWithUid, subs.externals()), { 'debug.sketcher': $_6rmcx0xsjeajomqm.wrap(owner, spec) });
  };
  var supplyUid = function (spec) {
    return $_2yrejjwyjeajomn9.deepMerge({ uid: $_dbn7mh10xjeajon3m.generate('uid') }, spec);
  };
  var $_277wio10sjeajon2g = {
    supplyUid: supplyUid,
    single: single,
    composite: composite
  };

  var singleSchema = $_8qt2pyyejeajomtl.objOfOnly([
    $_8qbqu2y7jeajomsl.strict('name'),
    $_8qbqu2y7jeajomsl.strict('factory'),
    $_8qbqu2y7jeajomsl.strict('configFields'),
    $_8qbqu2y7jeajomsl.defaulted('apis', {}),
    $_8qbqu2y7jeajomsl.defaulted('extraApis', {})
  ]);
  var compositeSchema = $_8qt2pyyejeajomtl.objOfOnly([
    $_8qbqu2y7jeajomsl.strict('name'),
    $_8qbqu2y7jeajomsl.strict('factory'),
    $_8qbqu2y7jeajomsl.strict('configFields'),
    $_8qbqu2y7jeajomsl.strict('partFields'),
    $_8qbqu2y7jeajomsl.defaulted('apis', {}),
    $_8qbqu2y7jeajomsl.defaulted('extraApis', {})
  ]);
  var single$1 = function (rawConfig) {
    var config = $_8qt2pyyejeajomtl.asRawOrDie('Sketcher for ' + rawConfig.name, singleSchema, rawConfig);
    var sketch = function (spec) {
      return $_277wio10sjeajon2g.single(config.name, config.configFields, config.factory, spec);
    };
    var apis = $_9s6ha1x0jeajomnc.map(config.apis, $_ebzw1210qjeajon2a.makeApi);
    var extraApis = $_9s6ha1x0jeajomnc.map(config.extraApis, function (f, k) {
      return $_fr899xygjeajomty.markAsExtraApi(f, k);
    });
    return $_2yrejjwyjeajomn9.deepMerge({
      name: $_ddy4s3wjjeajomls.constant(config.name),
      partFields: $_ddy4s3wjjeajomls.constant([]),
      configFields: $_ddy4s3wjjeajomls.constant(config.configFields),
      sketch: sketch
    }, apis, extraApis);
  };
  var composite$1 = function (rawConfig) {
    var config = $_8qt2pyyejeajomtl.asRawOrDie('Sketcher for ' + rawConfig.name, compositeSchema, rawConfig);
    var sketch = function (spec) {
      return $_277wio10sjeajon2g.composite(config.name, config.configFields, config.partFields, config.factory, spec);
    };
    var parts = $_opzv410tjeajon2o.generate(config.name, config.partFields);
    var apis = $_9s6ha1x0jeajomnc.map(config.apis, $_ebzw1210qjeajon2a.makeApi);
    var extraApis = $_9s6ha1x0jeajomnc.map(config.extraApis, function (f, k) {
      return $_fr899xygjeajomty.markAsExtraApi(f, k);
    });
    return $_2yrejjwyjeajomn9.deepMerge({
      name: $_ddy4s3wjjeajomls.constant(config.name),
      partFields: $_ddy4s3wjjeajomls.constant(config.partFields),
      configFields: $_ddy4s3wjjeajomls.constant(config.configFields),
      sketch: sketch,
      parts: $_ddy4s3wjjeajomls.constant(parts)
    }, apis, extraApis);
  };
  var $_fp614n10pjeajon23 = {
    single: single$1,
    composite: composite$1
  };

  var events$3 = function (optAction) {
    var executeHandler = function (action) {
      return $_2vhl2dy4jeajoms5.run($_bckj1uwhjeajomli.execute(), function (component, simulatedEvent) {
        action(component);
        simulatedEvent.stop();
      });
    };
    var onClick = function (component, simulatedEvent) {
      simulatedEvent.stop();
      $_30e2nlwgjeajomlb.emitExecute(component);
    };
    var onMousedown = function (component, simulatedEvent) {
      simulatedEvent.cut();
    };
    var pointerEvents = $_g80fw1wkjeajomlw.detect().deviceType.isTouch() ? [$_2vhl2dy4jeajoms5.run($_bckj1uwhjeajomli.tap(), onClick)] : [
      $_2vhl2dy4jeajoms5.run($_9ndt8owijeajomlo.click(), onClick),
      $_2vhl2dy4jeajoms5.run($_9ndt8owijeajomlo.mousedown(), onMousedown)
    ];
    return $_2vhl2dy4jeajoms5.derive($_5r3pikwsjeajommo.flatten([
      optAction.map(executeHandler).toArray(),
      pointerEvents
    ]));
  };
  var $_fcqgw110jeajon46 = { events: events$3 };

  var factory = function (detail, spec) {
    var events = $_fcqgw110jeajon46.events(detail.action());
    var optType = $_6rmcx0xsjeajomqm.readOptFrom(detail.dom(), 'attributes').bind($_6rmcx0xsjeajomqm.readOpt('type'));
    var optTag = $_6rmcx0xsjeajomqm.readOptFrom(detail.dom(), 'tag');
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      components: detail.components(),
      events: events,
      behaviours: $_2yrejjwyjeajomn9.deepMerge($_cwu2vpy2jeajomrh.derive([
        Focusing.config({}),
        Keying.config({
          mode: 'execution',
          useSpace: true,
          useEnter: true
        })
      ]), $_2ioems10ojeajon1y.get(detail.buttonBehaviours())),
      domModification: {
        attributes: $_2yrejjwyjeajomn9.deepMerge(optType.fold(function () {
          return optTag.is('button') ? { type: 'button' } : {};
        }, function (t) {
          return {};
        }), { role: detail.role().getOr('button') })
      },
      eventOrder: detail.eventOrder()
    };
  };
  var Button = $_fp614n10pjeajon23.single({
    name: 'Button',
    factory: factory,
    configFields: [
      $_8qbqu2y7jeajomsl.defaulted('uid', undefined),
      $_8qbqu2y7jeajomsl.strict('dom'),
      $_8qbqu2y7jeajomsl.defaulted('components', []),
      $_2ioems10ojeajon1y.field('buttonBehaviours', [
        Focusing,
        Keying
      ]),
      $_8qbqu2y7jeajomsl.option('action'),
      $_8qbqu2y7jeajomsl.option('role'),
      $_8qbqu2y7jeajomsl.defaulted('eventOrder', {})
    ]
  });

  var exhibit$2 = function (base, unselectConfig) {
    return $_zcg1fyhjeajomu1.nu({
      styles: {
        '-webkit-user-select': 'none',
        'user-select': 'none',
        '-ms-user-select': 'none',
        '-moz-user-select': '-moz-none'
      },
      attributes: { 'unselectable': 'on' }
    });
  };
  var events$4 = function (unselectConfig) {
    return $_2vhl2dy4jeajoms5.derive([$_2vhl2dy4jeajoms5.abort($_9ndt8owijeajomlo.selectstart(), $_ddy4s3wjjeajomls.constant(true))]);
  };
  var $_3qv7ir112jeajon4h = {
    events: events$4,
    exhibit: exhibit$2
  };

  var Unselecting = $_cwu2vpy2jeajomrh.create({
    fields: [],
    name: 'unselecting',
    active: $_3qv7ir112jeajon4h
  });

  var getAttrs = function (elem) {
    var attributes = elem.dom().attributes !== undefined ? elem.dom().attributes : [];
    return $_5r3pikwsjeajommo.foldl(attributes, function (b, attr) {
      if (attr.name === 'class')
        return b;
      else
        return $_2yrejjwyjeajomn9.deepMerge(b, $_6rmcx0xsjeajomqm.wrap(attr.name, attr.value));
    }, {});
  };
  var getClasses = function (elem) {
    return Array.prototype.slice.call(elem.dom().classList, 0);
  };
  var fromHtml$2 = function (html) {
    var elem = $_8icwg5xfjeajomp0.fromHtml(html);
    var children = $_6xy0ax3jeajomo0.children(elem);
    var attrs = getAttrs(elem);
    var classes = getClasses(elem);
    var contents = children.length === 0 ? {} : { innerHtml: $_7pjouqxojeajomq7.get(elem) };
    return $_2yrejjwyjeajomn9.deepMerge({
      tag: $_bsb5vnxkjeajompc.name(elem),
      classes: classes,
      attributes: attrs
    }, contents);
  };
  var sketch = function (sketcher, html, config) {
    return sketcher.sketch($_2yrejjwyjeajomn9.deepMerge({ dom: fromHtml$2(html) }, config));
  };
  var $_627m5o114jeajon4m = {
    fromHtml: fromHtml$2,
    sketch: sketch
  };

  var dom$1 = function (rawHtml) {
    var html = $_4ur2nuwvjeajomn4.supplant(rawHtml, { prefix: $_eanbiezejeajomx0.prefix() });
    return $_627m5o114jeajon4m.fromHtml(html);
  };
  var spec = function (rawHtml) {
    var sDom = dom$1(rawHtml);
    return { dom: sDom };
  };
  var $_52n2w4113jeajon4k = {
    dom: dom$1,
    spec: spec
  };

  var forToolbarCommand = function (editor, command) {
    return forToolbar(command, function () {
      editor.execCommand(command);
    }, {});
  };
  var getToggleBehaviours = function (command) {
    return $_cwu2vpy2jeajomrh.derive([
      Toggling.config({
        toggleClass: $_eanbiezejeajomx0.resolve('toolbar-button-selected'),
        toggleOnExecute: false,
        aria: { mode: 'pressed' }
      }),
      $_8qo6opzdjeajomwx.format(command, function (button, status) {
        var toggle = status ? Toggling.on : Toggling.off;
        toggle(button);
      })
    ]);
  };
  var forToolbarStateCommand = function (editor, command) {
    var extraBehaviours = getToggleBehaviours(command);
    return forToolbar(command, function () {
      editor.execCommand(command);
    }, extraBehaviours);
  };
  var forToolbarStateAction = function (editor, clazz, command, action) {
    var extraBehaviours = getToggleBehaviours(command);
    return forToolbar(clazz, action, extraBehaviours);
  };
  var forToolbar = function (clazz, action, extraBehaviours) {
    return Button.sketch({
      dom: $_52n2w4113jeajon4k.dom('<span class="${prefix}-toolbar-button ${prefix}-icon-' + clazz + ' ${prefix}-icon"></span>'),
      action: action,
      buttonBehaviours: $_2yrejjwyjeajomn9.deepMerge($_cwu2vpy2jeajomrh.derive([Unselecting.config({})]), extraBehaviours)
    });
  };
  var $_ccxdx6zfjeajomx1 = {
    forToolbar: forToolbar,
    forToolbarCommand: forToolbarCommand,
    forToolbarStateAction: forToolbarStateAction,
    forToolbarStateCommand: forToolbarStateCommand
  };

  var reduceBy = function (value, min, max, step) {
    if (value < min)
      return value;
    else if (value > max)
      return max;
    else if (value === min)
      return min - 1;
    else
      return Math.max(min, value - step);
  };
  var increaseBy = function (value, min, max, step) {
    if (value > max)
      return value;
    else if (value < min)
      return min;
    else if (value === max)
      return max + 1;
    else
      return Math.min(max, value + step);
  };
  var capValue = function (value, min, max) {
    return Math.max(min, Math.min(max, value));
  };
  var snapValueOfX = function (bounds, value, min, max, step, snapStart) {
    return snapStart.fold(function () {
      var initValue = value - min;
      var extraValue = Math.round(initValue / step) * step;
      return capValue(min + extraValue, min - 1, max + 1);
    }, function (start) {
      var remainder = (value - start) % step;
      var adjustment = Math.round(remainder / step);
      var rawSteps = Math.floor((value - start) / step);
      var maxSteps = Math.floor((max - start) / step);
      var numSteps = Math.min(maxSteps, rawSteps + adjustment);
      var r = start + numSteps * step;
      return Math.max(start, r);
    });
  };
  var findValueOfX = function (bounds, min, max, xValue, step, snapToGrid, snapStart) {
    var range = max - min;
    if (xValue < bounds.left)
      return min - 1;
    else if (xValue > bounds.right)
      return max + 1;
    else {
      var xOffset = Math.min(bounds.right, Math.max(xValue, bounds.left)) - bounds.left;
      var newValue = capValue(xOffset / bounds.width * range + min, min - 1, max + 1);
      var roundedValue = Math.round(newValue);
      return snapToGrid && newValue >= min && newValue <= max ? snapValueOfX(bounds, newValue, min, max, step, snapStart) : roundedValue;
    }
  };
  var $_7r9bva119jeajon5g = {
    reduceBy: reduceBy,
    increaseBy: increaseBy,
    findValueOfX: findValueOfX
  };

  var changeEvent = 'slider.change.value';
  var isTouch = $_g80fw1wkjeajomlw.detect().deviceType.isTouch();
  var getEventSource = function (simulatedEvent) {
    var evt = simulatedEvent.event().raw();
    if (isTouch && evt.touches !== undefined && evt.touches.length === 1)
      return Option.some(evt.touches[0]);
    else if (isTouch && evt.touches !== undefined)
      return Option.none();
    else if (!isTouch && evt.clientX !== undefined)
      return Option.some(evt);
    else
      return Option.none();
  };
  var getEventX = function (simulatedEvent) {
    var spot = getEventSource(simulatedEvent);
    return spot.map(function (s) {
      return s.clientX;
    });
  };
  var fireChange = function (component, value) {
    $_30e2nlwgjeajomlb.emitWith(component, changeEvent, { value: value });
  };
  var moveRightFromLedge = function (ledge, detail) {
    fireChange(ledge, detail.min());
  };
  var moveLeftFromRedge = function (redge, detail) {
    fireChange(redge, detail.max());
  };
  var setToRedge = function (redge, detail) {
    fireChange(redge, detail.max() + 1);
  };
  var setToLedge = function (ledge, detail) {
    fireChange(ledge, detail.min() - 1);
  };
  var setToX = function (spectrum, spectrumBounds, detail, xValue) {
    var value = $_7r9bva119jeajon5g.findValueOfX(spectrumBounds, detail.min(), detail.max(), xValue, detail.stepSize(), detail.snapToGrid(), detail.snapStart());
    fireChange(spectrum, value);
  };
  var setXFromEvent = function (spectrum, detail, spectrumBounds, simulatedEvent) {
    return getEventX(simulatedEvent).map(function (xValue) {
      setToX(spectrum, spectrumBounds, detail, xValue);
      return xValue;
    });
  };
  var moveLeft$4 = function (spectrum, detail) {
    var newValue = $_7r9bva119jeajon5g.reduceBy(detail.value().get(), detail.min(), detail.max(), detail.stepSize());
    fireChange(spectrum, newValue);
  };
  var moveRight$4 = function (spectrum, detail) {
    var newValue = $_7r9bva119jeajon5g.increaseBy(detail.value().get(), detail.min(), detail.max(), detail.stepSize());
    fireChange(spectrum, newValue);
  };
  var $_eqkx5u118jeajon5b = {
    setXFromEvent: setXFromEvent,
    setToLedge: setToLedge,
    setToRedge: setToRedge,
    moveLeftFromRedge: moveLeftFromRedge,
    moveRightFromLedge: moveRightFromLedge,
    moveLeft: moveLeft$4,
    moveRight: moveRight$4,
    changeEvent: $_ddy4s3wjjeajomls.constant(changeEvent)
  };

  var platform = $_g80fw1wkjeajomlw.detect();
  var isTouch$1 = platform.deviceType.isTouch();
  var edgePart = function (name, action) {
    return $_7m3s6v10vjeajon34.optional({
      name: '' + name + '-edge',
      overrides: function (detail) {
        var touchEvents = $_2vhl2dy4jeajoms5.derive([$_2vhl2dy4jeajoms5.runActionExtra($_9ndt8owijeajomlo.touchstart(), action, [detail])]);
        var mouseEvents = $_2vhl2dy4jeajoms5.derive([
          $_2vhl2dy4jeajoms5.runActionExtra($_9ndt8owijeajomlo.mousedown(), action, [detail]),
          $_2vhl2dy4jeajoms5.runActionExtra($_9ndt8owijeajomlo.mousemove(), function (l, det) {
            if (det.mouseIsDown().get())
              action(l, det);
          }, [detail])
        ]);
        return { events: isTouch$1 ? touchEvents : mouseEvents };
      }
    });
  };
  var ledgePart = edgePart('left', $_eqkx5u118jeajon5b.setToLedge);
  var redgePart = edgePart('right', $_eqkx5u118jeajon5b.setToRedge);
  var thumbPart = $_7m3s6v10vjeajon34.required({
    name: 'thumb',
    defaults: $_ddy4s3wjjeajomls.constant({ dom: { styles: { position: 'absolute' } } }),
    overrides: function (detail) {
      return {
        events: $_2vhl2dy4jeajoms5.derive([
          $_2vhl2dy4jeajoms5.redirectToPart($_9ndt8owijeajomlo.touchstart(), detail, 'spectrum'),
          $_2vhl2dy4jeajoms5.redirectToPart($_9ndt8owijeajomlo.touchmove(), detail, 'spectrum'),
          $_2vhl2dy4jeajoms5.redirectToPart($_9ndt8owijeajomlo.touchend(), detail, 'spectrum')
        ])
      };
    }
  });
  var spectrumPart = $_7m3s6v10vjeajon34.required({
    schema: [$_8qbqu2y7jeajomsl.state('mouseIsDown', function () {
        return Cell(false);
      })],
    name: 'spectrum',
    overrides: function (detail) {
      var moveToX = function (spectrum, simulatedEvent) {
        var spectrumBounds = spectrum.element().dom().getBoundingClientRect();
        $_eqkx5u118jeajon5b.setXFromEvent(spectrum, detail, spectrumBounds, simulatedEvent);
      };
      var touchEvents = $_2vhl2dy4jeajoms5.derive([
        $_2vhl2dy4jeajoms5.run($_9ndt8owijeajomlo.touchstart(), moveToX),
        $_2vhl2dy4jeajoms5.run($_9ndt8owijeajomlo.touchmove(), moveToX)
      ]);
      var mouseEvents = $_2vhl2dy4jeajoms5.derive([
        $_2vhl2dy4jeajoms5.run($_9ndt8owijeajomlo.mousedown(), moveToX),
        $_2vhl2dy4jeajoms5.run($_9ndt8owijeajomlo.mousemove(), function (spectrum, se) {
          if (detail.mouseIsDown().get())
            moveToX(spectrum, se);
        })
      ]);
      return {
        behaviours: $_cwu2vpy2jeajomrh.derive(isTouch$1 ? [] : [
          Keying.config({
            mode: 'special',
            onLeft: function (spectrum) {
              $_eqkx5u118jeajon5b.moveLeft(spectrum, detail);
              return Option.some(true);
            },
            onRight: function (spectrum) {
              $_eqkx5u118jeajon5b.moveRight(spectrum, detail);
              return Option.some(true);
            }
          }),
          Focusing.config({})
        ]),
        events: isTouch$1 ? touchEvents : mouseEvents
      };
    }
  });
  var SliderParts = [
    ledgePart,
    redgePart,
    thumbPart,
    spectrumPart
  ];

  var onLoad$1 = function (component, repConfig, repState) {
    repConfig.store().manager().onLoad(component, repConfig, repState);
  };
  var onUnload = function (component, repConfig, repState) {
    repConfig.store().manager().onUnload(component, repConfig, repState);
  };
  var setValue = function (component, repConfig, repState, data) {
    repConfig.store().manager().setValue(component, repConfig, repState, data);
  };
  var getValue = function (component, repConfig, repState) {
    return repConfig.store().manager().getValue(component, repConfig, repState);
  };
  var $_6u68e311djeajon5s = {
    onLoad: onLoad$1,
    onUnload: onUnload,
    setValue: setValue,
    getValue: getValue
  };

  var events$5 = function (repConfig, repState) {
    var es = repConfig.resetOnDom() ? [
      $_2vhl2dy4jeajoms5.runOnAttached(function (comp, se) {
        $_6u68e311djeajon5s.onLoad(comp, repConfig, repState);
      }),
      $_2vhl2dy4jeajoms5.runOnDetached(function (comp, se) {
        $_6u68e311djeajon5s.onUnload(comp, repConfig, repState);
      })
    ] : [$_83rbg8y3jeajomro.loadEvent(repConfig, repState, $_6u68e311djeajon5s.onLoad)];
    return $_2vhl2dy4jeajoms5.derive(es);
  };
  var $_6l8kuw11cjeajon5r = { events: events$5 };

  var memory = function () {
    var data = Cell(null);
    var readState = function () {
      return {
        mode: 'memory',
        value: data.get()
      };
    };
    var isNotSet = function () {
      return data.get() === null;
    };
    var clear = function () {
      data.set(null);
    };
    return BehaviourState({
      set: data.set,
      get: data.get,
      isNotSet: isNotSet,
      clear: clear,
      readState: readState
    });
  };
  var manual = function () {
    var readState = function () {
    };
    return BehaviourState({ readState: readState });
  };
  var dataset = function () {
    var data = Cell({});
    var readState = function () {
      return {
        mode: 'dataset',
        dataset: data.get()
      };
    };
    return BehaviourState({
      readState: readState,
      set: data.set,
      get: data.get
    });
  };
  var init$2 = function (spec) {
    return spec.store().manager().state(spec);
  };
  var $_b552ul11gjeajon60 = {
    memory: memory,
    dataset: dataset,
    manual: manual,
    init: init$2
  };

  var setValue$1 = function (component, repConfig, repState, data) {
    var dataKey = repConfig.store().getDataKey();
    repState.set({});
    repConfig.store().setData()(component, data);
    repConfig.onSetValue()(component, data);
  };
  var getValue$1 = function (component, repConfig, repState) {
    var key = repConfig.store().getDataKey()(component);
    var dataset = repState.get();
    return $_6rmcx0xsjeajomqm.readOptFrom(dataset, key).fold(function () {
      return repConfig.store().getFallbackEntry()(key);
    }, function (data) {
      return data;
    });
  };
  var onLoad$2 = function (component, repConfig, repState) {
    repConfig.store().initialValue().each(function (data) {
      setValue$1(component, repConfig, repState, data);
    });
  };
  var onUnload$1 = function (component, repConfig, repState) {
    repState.set({});
  };
  var DatasetStore = [
    $_8qbqu2y7jeajomsl.option('initialValue'),
    $_8qbqu2y7jeajomsl.strict('getFallbackEntry'),
    $_8qbqu2y7jeajomsl.strict('getDataKey'),
    $_8qbqu2y7jeajomsl.strict('setData'),
    $_apbxenz6jeajomvz.output('manager', {
      setValue: setValue$1,
      getValue: getValue$1,
      onLoad: onLoad$2,
      onUnload: onUnload$1,
      state: $_b552ul11gjeajon60.dataset
    })
  ];

  var getValue$2 = function (component, repConfig, repState) {
    return repConfig.store().getValue()(component);
  };
  var setValue$2 = function (component, repConfig, repState, data) {
    repConfig.store().setValue()(component, data);
    repConfig.onSetValue()(component, data);
  };
  var onLoad$3 = function (component, repConfig, repState) {
    repConfig.store().initialValue().each(function (data) {
      repConfig.store().setValue()(component, data);
    });
  };
  var ManualStore = [
    $_8qbqu2y7jeajomsl.strict('getValue'),
    $_8qbqu2y7jeajomsl.defaulted('setValue', $_ddy4s3wjjeajomls.noop),
    $_8qbqu2y7jeajomsl.option('initialValue'),
    $_apbxenz6jeajomvz.output('manager', {
      setValue: setValue$2,
      getValue: getValue$2,
      onLoad: onLoad$3,
      onUnload: $_ddy4s3wjjeajomls.noop,
      state: $_8yipm6yjjeajomue.init
    })
  ];

  var setValue$3 = function (component, repConfig, repState, data) {
    repState.set(data);
    repConfig.onSetValue()(component, data);
  };
  var getValue$3 = function (component, repConfig, repState) {
    return repState.get();
  };
  var onLoad$4 = function (component, repConfig, repState) {
    repConfig.store().initialValue().each(function (initVal) {
      if (repState.isNotSet())
        repState.set(initVal);
    });
  };
  var onUnload$2 = function (component, repConfig, repState) {
    repState.clear();
  };
  var MemoryStore = [
    $_8qbqu2y7jeajomsl.option('initialValue'),
    $_apbxenz6jeajomvz.output('manager', {
      setValue: setValue$3,
      getValue: getValue$3,
      onLoad: onLoad$4,
      onUnload: onUnload$2,
      state: $_b552ul11gjeajon60.memory
    })
  ];

  var RepresentSchema = [
    $_8qbqu2y7jeajomsl.defaultedOf('store', { mode: 'memory' }, $_8qt2pyyejeajomtl.choose('mode', {
      memory: MemoryStore,
      manual: ManualStore,
      dataset: DatasetStore
    })),
    $_apbxenz6jeajomvz.onHandler('onSetValue'),
    $_8qbqu2y7jeajomsl.defaulted('resetOnDom', false)
  ];

  var me = $_cwu2vpy2jeajomrh.create({
    fields: RepresentSchema,
    name: 'representing',
    active: $_6l8kuw11cjeajon5r,
    apis: $_6u68e311djeajon5s,
    extra: {
      setValueFrom: function (component, source) {
        var value = me.getValue(source);
        me.setValue(component, value);
      }
    },
    state: $_b552ul11gjeajon60
  });

  var isTouch$2 = $_g80fw1wkjeajomlw.detect().deviceType.isTouch();
  var SliderSchema = [
    $_8qbqu2y7jeajomsl.strict('min'),
    $_8qbqu2y7jeajomsl.strict('max'),
    $_8qbqu2y7jeajomsl.defaulted('stepSize', 1),
    $_8qbqu2y7jeajomsl.defaulted('onChange', $_ddy4s3wjjeajomls.noop),
    $_8qbqu2y7jeajomsl.defaulted('onInit', $_ddy4s3wjjeajomls.noop),
    $_8qbqu2y7jeajomsl.defaulted('onDragStart', $_ddy4s3wjjeajomls.noop),
    $_8qbqu2y7jeajomsl.defaulted('onDragEnd', $_ddy4s3wjjeajomls.noop),
    $_8qbqu2y7jeajomsl.defaulted('snapToGrid', false),
    $_8qbqu2y7jeajomsl.option('snapStart'),
    $_8qbqu2y7jeajomsl.strict('getInitialValue'),
    $_2ioems10ojeajon1y.field('sliderBehaviours', [
      Keying,
      me
    ]),
    $_8qbqu2y7jeajomsl.state('value', function (spec) {
      return Cell(spec.min);
    })
  ].concat(!isTouch$2 ? [$_8qbqu2y7jeajomsl.state('mouseIsDown', function () {
      return Cell(false);
    })] : []);

  var api$1 = Dimension('width', function (element) {
    return element.dom().offsetWidth;
  });
  var set$4 = function (element, h) {
    api$1.set(element, h);
  };
  var get$6 = function (element) {
    return api$1.get(element);
  };
  var getOuter$2 = function (element) {
    return api$1.getOuter(element);
  };
  var setMax$1 = function (element, value) {
    var inclusions = [
      'margin-left',
      'border-left-width',
      'padding-left',
      'padding-right',
      'border-right-width',
      'margin-right'
    ];
    var absMax = api$1.max(element, value, inclusions);
    $_64rfd7103jeajomzb.set(element, 'max-width', absMax + 'px');
  };
  var $_515ubo11kjeajon6n = {
    set: set$4,
    get: get$6,
    getOuter: getOuter$2,
    setMax: setMax$1
  };

  var isTouch$3 = $_g80fw1wkjeajomlw.detect().deviceType.isTouch();
  var sketch$1 = function (detail, components, spec, externals) {
    var range = detail.max() - detail.min();
    var getXCentre = function (component) {
      var rect = component.element().dom().getBoundingClientRect();
      return (rect.left + rect.right) / 2;
    };
    var getThumb = function (component) {
      return $_opzv410tjeajon2o.getPartOrDie(component, detail, 'thumb');
    };
    var getXOffset = function (slider, spectrumBounds, detail) {
      var v = detail.value().get();
      if (v < detail.min()) {
        return $_opzv410tjeajon2o.getPart(slider, detail, 'left-edge').fold(function () {
          return 0;
        }, function (ledge) {
          return getXCentre(ledge) - spectrumBounds.left;
        });
      } else if (v > detail.max()) {
        return $_opzv410tjeajon2o.getPart(slider, detail, 'right-edge').fold(function () {
          return spectrumBounds.width;
        }, function (redge) {
          return getXCentre(redge) - spectrumBounds.left;
        });
      } else {
        return (detail.value().get() - detail.min()) / range * spectrumBounds.width;
      }
    };
    var getXPos = function (slider) {
      var spectrum = $_opzv410tjeajon2o.getPartOrDie(slider, detail, 'spectrum');
      var spectrumBounds = spectrum.element().dom().getBoundingClientRect();
      var sliderBounds = slider.element().dom().getBoundingClientRect();
      var xOffset = getXOffset(slider, spectrumBounds, detail);
      return spectrumBounds.left - sliderBounds.left + xOffset;
    };
    var refresh = function (component) {
      var pos = getXPos(component);
      var thumb = getThumb(component);
      var thumbRadius = $_515ubo11kjeajon6n.get(thumb.element()) / 2;
      $_64rfd7103jeajomzb.set(thumb.element(), 'left', pos - thumbRadius + 'px');
    };
    var changeValue = function (component, newValue) {
      var oldValue = detail.value().get();
      var thumb = getThumb(component);
      if (oldValue !== newValue || $_64rfd7103jeajomzb.getRaw(thumb.element(), 'left').isNone()) {
        detail.value().set(newValue);
        refresh(component);
        detail.onChange()(component, thumb, newValue);
        return Option.some(true);
      } else {
        return Option.none();
      }
    };
    var resetToMin = function (slider) {
      changeValue(slider, detail.min());
    };
    var resetToMax = function (slider) {
      changeValue(slider, detail.max());
    };
    var uiEventsArr = isTouch$3 ? [
      $_2vhl2dy4jeajoms5.run($_9ndt8owijeajomlo.touchstart(), function (slider, simulatedEvent) {
        detail.onDragStart()(slider, getThumb(slider));
      }),
      $_2vhl2dy4jeajoms5.run($_9ndt8owijeajomlo.touchend(), function (slider, simulatedEvent) {
        detail.onDragEnd()(slider, getThumb(slider));
      })
    ] : [
      $_2vhl2dy4jeajoms5.run($_9ndt8owijeajomlo.mousedown(), function (slider, simulatedEvent) {
        simulatedEvent.stop();
        detail.onDragStart()(slider, getThumb(slider));
        detail.mouseIsDown().set(true);
      }),
      $_2vhl2dy4jeajoms5.run($_9ndt8owijeajomlo.mouseup(), function (slider, simulatedEvent) {
        detail.onDragEnd()(slider, getThumb(slider));
        detail.mouseIsDown().set(false);
      })
    ];
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      components: components,
      behaviours: $_2yrejjwyjeajomn9.deepMerge($_cwu2vpy2jeajomrh.derive($_5r3pikwsjeajommo.flatten([
        !isTouch$3 ? [Keying.config({
            mode: 'special',
            focusIn: function (slider) {
              return $_opzv410tjeajon2o.getPart(slider, detail, 'spectrum').map(Keying.focusIn).map($_ddy4s3wjjeajomls.constant(true));
            }
          })] : [],
        [me.config({
            store: {
              mode: 'manual',
              getValue: function (_) {
                return detail.value().get();
              }
            }
          })]
      ])), $_2ioems10ojeajon1y.get(detail.sliderBehaviours())),
      events: $_2vhl2dy4jeajoms5.derive([
        $_2vhl2dy4jeajoms5.run($_eqkx5u118jeajon5b.changeEvent(), function (slider, simulatedEvent) {
          changeValue(slider, simulatedEvent.event().value());
        }),
        $_2vhl2dy4jeajoms5.runOnAttached(function (slider, simulatedEvent) {
          detail.value().set(detail.getInitialValue()());
          var thumb = getThumb(slider);
          refresh(slider);
          detail.onInit()(slider, thumb, detail.value().get());
        })
      ].concat(uiEventsArr)),
      apis: {
        resetToMin: resetToMin,
        resetToMax: resetToMax,
        refresh: refresh
      },
      domModification: { styles: { position: 'relative' } }
    };
  };
  var $_q5tzp11jjeajon6c = { sketch: sketch$1 };

  var Slider = $_fp614n10pjeajon23.composite({
    name: 'Slider',
    configFields: SliderSchema,
    partFields: SliderParts,
    factory: $_q5tzp11jjeajon6c.sketch,
    apis: {
      resetToMin: function (apis, slider) {
        apis.resetToMin(slider);
      },
      resetToMax: function (apis, slider) {
        apis.resetToMax(slider);
      },
      refresh: function (apis, slider) {
        apis.refresh(slider);
      }
    }
  });

  var button = function (realm, clazz, makeItems) {
    return $_ccxdx6zfjeajomx1.forToolbar(clazz, function () {
      var items = makeItems();
      realm.setContextToolbar([{
          label: clazz + ' group',
          items: items
        }]);
    }, {});
  };
  var $_buo8ac11ljeajon6o = { button: button };

  var BLACK = -1;
  var makeSlider = function (spec) {
    var getColor = function (hue) {
      if (hue < 0) {
        return 'black';
      } else if (hue > 360) {
        return 'white';
      } else {
        return 'hsl(' + hue + ', 100%, 50%)';
      }
    };
    var onInit = function (slider, thumb, value) {
      var color = getColor(value);
      $_64rfd7103jeajomzb.set(thumb.element(), 'background-color', color);
    };
    var onChange = function (slider, thumb, value) {
      var color = getColor(value);
      $_64rfd7103jeajomzb.set(thumb.element(), 'background-color', color);
      spec.onChange(slider, thumb, color);
    };
    return Slider.sketch({
      dom: $_52n2w4113jeajon4k.dom('<div class="${prefix}-slider ${prefix}-hue-slider-container"></div>'),
      components: [
        Slider.parts()['left-edge']($_52n2w4113jeajon4k.spec('<div class="${prefix}-hue-slider-black"></div>')),
        Slider.parts().spectrum({
          dom: $_52n2w4113jeajon4k.dom('<div class="${prefix}-slider-gradient-container"></div>'),
          components: [$_52n2w4113jeajon4k.spec('<div class="${prefix}-slider-gradient"></div>')],
          behaviours: $_cwu2vpy2jeajomrh.derive([Toggling.config({ toggleClass: $_eanbiezejeajomx0.resolve('thumb-active') })])
        }),
        Slider.parts()['right-edge']($_52n2w4113jeajon4k.spec('<div class="${prefix}-hue-slider-white"></div>')),
        Slider.parts().thumb({
          dom: $_52n2w4113jeajon4k.dom('<div class="${prefix}-slider-thumb"></div>'),
          behaviours: $_cwu2vpy2jeajomrh.derive([Toggling.config({ toggleClass: $_eanbiezejeajomx0.resolve('thumb-active') })])
        })
      ],
      onChange: onChange,
      onDragStart: function (slider, thumb) {
        Toggling.on(thumb);
      },
      onDragEnd: function (slider, thumb) {
        Toggling.off(thumb);
      },
      onInit: onInit,
      stepSize: 10,
      min: 0,
      max: 360,
      getInitialValue: spec.getInitialValue,
      sliderBehaviours: $_cwu2vpy2jeajomrh.derive([$_8qo6opzdjeajomwx.orientation(Slider.refresh)])
    });
  };
  var makeItems = function (spec) {
    return [makeSlider(spec)];
  };
  var sketch$2 = function (realm, editor) {
    var spec = {
      onChange: function (slider, thumb, color) {
        editor.undoManager.transact(function () {
          editor.formatter.apply('forecolor', { value: color });
          editor.nodeChanged();
        });
      },
      getInitialValue: function () {
        return BLACK;
      }
    };
    return $_buo8ac11ljeajon6o.button(realm, 'color', function () {
      return makeItems(spec);
    });
  };
  var $_2403uo115jeajon4w = {
    makeItems: makeItems,
    sketch: sketch$2
  };

  var schema$7 = $_8qt2pyyejeajomtl.objOfOnly([
    $_8qbqu2y7jeajomsl.strict('getInitialValue'),
    $_8qbqu2y7jeajomsl.strict('onChange'),
    $_8qbqu2y7jeajomsl.strict('category'),
    $_8qbqu2y7jeajomsl.strict('sizes')
  ]);
  var sketch$3 = function (rawSpec) {
    var spec = $_8qt2pyyejeajomtl.asRawOrDie('SizeSlider', schema$7, rawSpec);
    var isValidValue = function (valueIndex) {
      return valueIndex >= 0 && valueIndex < spec.sizes.length;
    };
    var onChange = function (slider, thumb, valueIndex) {
      if (isValidValue(valueIndex)) {
        spec.onChange(valueIndex);
      }
    };
    return Slider.sketch({
      dom: {
        tag: 'div',
        classes: [
          $_eanbiezejeajomx0.resolve('slider-' + spec.category + '-size-container'),
          $_eanbiezejeajomx0.resolve('slider'),
          $_eanbiezejeajomx0.resolve('slider-size-container')
        ]
      },
      onChange: onChange,
      onDragStart: function (slider, thumb) {
        Toggling.on(thumb);
      },
      onDragEnd: function (slider, thumb) {
        Toggling.off(thumb);
      },
      min: 0,
      max: spec.sizes.length - 1,
      stepSize: 1,
      getInitialValue: spec.getInitialValue,
      snapToGrid: true,
      sliderBehaviours: $_cwu2vpy2jeajomrh.derive([$_8qo6opzdjeajomwx.orientation(Slider.refresh)]),
      components: [
        Slider.parts().spectrum({
          dom: $_52n2w4113jeajon4k.dom('<div class="${prefix}-slider-size-container"></div>'),
          components: [$_52n2w4113jeajon4k.spec('<div class="${prefix}-slider-size-line"></div>')]
        }),
        Slider.parts().thumb({
          dom: $_52n2w4113jeajon4k.dom('<div class="${prefix}-slider-thumb"></div>'),
          behaviours: $_cwu2vpy2jeajomrh.derive([Toggling.config({ toggleClass: $_eanbiezejeajomx0.resolve('thumb-active') })])
        })
      ]
    });
  };
  var $_21v4gn11njeajon6q = { sketch: sketch$3 };

  var ancestor$3 = function (scope, transform, isRoot) {
    var element = scope.dom();
    var stop = $_6vgadjwzjeajomnb.isFunction(isRoot) ? isRoot : $_ddy4s3wjjeajomls.constant(false);
    while (element.parentNode) {
      element = element.parentNode;
      var el = $_8icwg5xfjeajomp0.fromDom(element);
      var transformed = transform(el);
      if (transformed.isSome())
        return transformed;
      else if (stop(el))
        break;
    }
    return Option.none();
  };
  var closest$3 = function (scope, transform, isRoot) {
    var current = transform(scope);
    return current.orThunk(function () {
      return isRoot(scope) ? Option.none() : ancestor$3(scope, transform, isRoot);
    });
  };
  var $_5rrpov11pjeajon72 = {
    ancestor: ancestor$3,
    closest: closest$3
  };

  var candidates = [
    '9px',
    '10px',
    '11px',
    '12px',
    '14px',
    '16px',
    '18px',
    '20px',
    '24px',
    '32px',
    '36px'
  ];
  var defaultSize = 'medium';
  var defaultIndex = 2;
  var indexToSize = function (index) {
    return Option.from(candidates[index]);
  };
  var sizeToIndex = function (size) {
    return $_5r3pikwsjeajommo.findIndex(candidates, function (v) {
      return v === size;
    });
  };
  var getRawOrComputed = function (isRoot, rawStart) {
    var optStart = $_bsb5vnxkjeajompc.isElement(rawStart) ? Option.some(rawStart) : $_6xy0ax3jeajomo0.parent(rawStart);
    return optStart.map(function (start) {
      var inline = $_5rrpov11pjeajon72.closest(start, function (elem) {
        return $_64rfd7103jeajomzb.getRaw(elem, 'font-size');
      }, isRoot);
      return inline.getOrThunk(function () {
        return $_64rfd7103jeajomzb.get(start, 'font-size');
      });
    }).getOr('');
  };
  var getSize = function (editor) {
    var node = editor.selection.getStart();
    var elem = $_8icwg5xfjeajomp0.fromDom(node);
    var root = $_8icwg5xfjeajomp0.fromDom(editor.getBody());
    var isRoot = function (e) {
      return $_a12rd3x9jeajomoj.eq(root, e);
    };
    var elemSize = getRawOrComputed(isRoot, elem);
    return $_5r3pikwsjeajommo.find(candidates, function (size) {
      return elemSize === size;
    }).getOr(defaultSize);
  };
  var applySize = function (editor, value) {
    var currentValue = getSize(editor);
    if (currentValue !== value) {
      editor.execCommand('fontSize', false, value);
    }
  };
  var get$7 = function (editor) {
    var size = getSize(editor);
    return sizeToIndex(size).getOr(defaultIndex);
  };
  var apply$1 = function (editor, index) {
    indexToSize(index).each(function (size) {
      applySize(editor, size);
    });
  };
  var $_cy84nb11ojeajon6v = {
    candidates: $_ddy4s3wjjeajomls.constant(candidates),
    get: get$7,
    apply: apply$1
  };

  var sizes = $_cy84nb11ojeajon6v.candidates();
  var makeSlider$1 = function (spec) {
    return $_21v4gn11njeajon6q.sketch({
      onChange: spec.onChange,
      sizes: sizes,
      category: 'font',
      getInitialValue: spec.getInitialValue
    });
  };
  var makeItems$1 = function (spec) {
    return [
      $_52n2w4113jeajon4k.spec('<span class="${prefix}-toolbar-button ${prefix}-icon-small-font ${prefix}-icon"></span>'),
      makeSlider$1(spec),
      $_52n2w4113jeajon4k.spec('<span class="${prefix}-toolbar-button ${prefix}-icon-large-font ${prefix}-icon"></span>')
    ];
  };
  var sketch$4 = function (realm, editor) {
    var spec = {
      onChange: function (value) {
        $_cy84nb11ojeajon6v.apply(editor, value);
      },
      getInitialValue: function () {
        return $_cy84nb11ojeajon6v.get(editor);
      }
    };
    return $_buo8ac11ljeajon6o.button(realm, 'font-size', function () {
      return makeItems$1(spec);
    });
  };
  var $_9x94ln11mjeajon6p = {
    makeItems: makeItems$1,
    sketch: sketch$4
  };

  var record = function (spec) {
    var uid = $_6rmcx0xsjeajomqm.hasKey(spec, 'uid') ? spec.uid : $_dbn7mh10xjeajon3m.generate('memento');
    var get = function (any) {
      return any.getSystem().getByUid(uid).getOrDie();
    };
    var getOpt = function (any) {
      return any.getSystem().getByUid(uid).fold(Option.none, Option.some);
    };
    var asSpec = function () {
      return $_2yrejjwyjeajomn9.deepMerge(spec, { uid: uid });
    };
    return {
      get: get,
      getOpt: getOpt,
      asSpec: asSpec
    };
  };
  var $_9mcsdr11rjeajon7c = { record: record };

  function create$3(width, height) {
    return resize(document.createElement('canvas'), width, height);
  }
  function clone$2(canvas) {
    var tCanvas, ctx;
    tCanvas = create$3(canvas.width, canvas.height);
    ctx = get2dContext(tCanvas);
    ctx.drawImage(canvas, 0, 0);
    return tCanvas;
  }
  function get2dContext(canvas) {
    return canvas.getContext('2d');
  }
  function get3dContext(canvas) {
    var gl = null;
    try {
      gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    } catch (e) {
    }
    if (!gl) {
      gl = null;
    }
    return gl;
  }
  function resize(canvas, width, height) {
    canvas.width = width;
    canvas.height = height;
    return canvas;
  }
  var $_387yrq11ujeajon7w = {
    create: create$3,
    clone: clone$2,
    resize: resize,
    get2dContext: get2dContext,
    get3dContext: get3dContext
  };

  function getWidth(image) {
    return image.naturalWidth || image.width;
  }
  function getHeight(image) {
    return image.naturalHeight || image.height;
  }
  var $_3qqxr311vjeajon7x = {
    getWidth: getWidth,
    getHeight: getHeight
  };

  var promise = function () {
    var Promise = function (fn) {
      if (typeof this !== 'object')
        throw new TypeError('Promises must be constructed via new');
      if (typeof fn !== 'function')
        throw new TypeError('not a function');
      this._state = null;
      this._value = null;
      this._deferreds = [];
      doResolve(fn, bind(resolve, this), bind(reject, this));
    };
    var asap = Promise.immediateFn || typeof setImmediate === 'function' && setImmediate || function (fn) {
      setTimeout(fn, 1);
    };
    function bind(fn, thisArg) {
      return function () {
        fn.apply(thisArg, arguments);
      };
    }
    var isArray = Array.isArray || function (value) {
      return Object.prototype.toString.call(value) === '[object Array]';
    };
    function handle(deferred) {
      var me = this;
      if (this._state === null) {
        this._deferreds.push(deferred);
        return;
      }
      asap(function () {
        var cb = me._state ? deferred.onFulfilled : deferred.onRejected;
        if (cb === null) {
          (me._state ? deferred.resolve : deferred.reject)(me._value);
          return;
        }
        var ret;
        try {
          ret = cb(me._value);
        } catch (e) {
          deferred.reject(e);
          return;
        }
        deferred.resolve(ret);
      });
    }
    function resolve(newValue) {
      try {
        if (newValue === this)
          throw new TypeError('A promise cannot be resolved with itself.');
        if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
          var then = newValue.then;
          if (typeof then === 'function') {
            doResolve(bind(then, newValue), bind(resolve, this), bind(reject, this));
            return;
          }
        }
        this._state = true;
        this._value = newValue;
        finale.call(this);
      } catch (e) {
        reject.call(this, e);
      }
    }
    function reject(newValue) {
      this._state = false;
      this._value = newValue;
      finale.call(this);
    }
    function finale() {
      for (var i = 0, len = this._deferreds.length; i < len; i++) {
        handle.call(this, this._deferreds[i]);
      }
      this._deferreds = null;
    }
    function Handler(onFulfilled, onRejected, resolve, reject) {
      this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
      this.onRejected = typeof onRejected === 'function' ? onRejected : null;
      this.resolve = resolve;
      this.reject = reject;
    }
    function doResolve(fn, onFulfilled, onRejected) {
      var done = false;
      try {
        fn(function (value) {
          if (done)
            return;
          done = true;
          onFulfilled(value);
        }, function (reason) {
          if (done)
            return;
          done = true;
          onRejected(reason);
        });
      } catch (ex) {
        if (done)
          return;
        done = true;
        onRejected(ex);
      }
    }
    Promise.prototype['catch'] = function (onRejected) {
      return this.then(null, onRejected);
    };
    Promise.prototype.then = function (onFulfilled, onRejected) {
      var me = this;
      return new Promise(function (resolve, reject) {
        handle.call(me, new Handler(onFulfilled, onRejected, resolve, reject));
      });
    };
    Promise.all = function () {
      var args = Array.prototype.slice.call(arguments.length === 1 && isArray(arguments[0]) ? arguments[0] : arguments);
      return new Promise(function (resolve, reject) {
        if (args.length === 0)
          return resolve([]);
        var remaining = args.length;
        function res(i, val) {
          try {
            if (val && (typeof val === 'object' || typeof val === 'function')) {
              var then = val.then;
              if (typeof then === 'function') {
                then.call(val, function (val) {
                  res(i, val);
                }, reject);
                return;
              }
            }
            args[i] = val;
            if (--remaining === 0) {
              resolve(args);
            }
          } catch (ex) {
            reject(ex);
          }
        }
        for (var i = 0; i < args.length; i++) {
          res(i, args[i]);
        }
      });
    };
    Promise.resolve = function (value) {
      if (value && typeof value === 'object' && value.constructor === Promise) {
        return value;
      }
      return new Promise(function (resolve) {
        resolve(value);
      });
    };
    Promise.reject = function (value) {
      return new Promise(function (resolve, reject) {
        reject(value);
      });
    };
    Promise.race = function (values) {
      return new Promise(function (resolve, reject) {
        for (var i = 0, len = values.length; i < len; i++) {
          values[i].then(resolve, reject);
        }
      });
    };
    return Promise;
  };
  var Promise = window.Promise ? window.Promise : promise();

  function Blob (parts, properties) {
    var f = $_6scm2kxbjeajomor.getOrDie('Blob');
    return new f(parts, properties);
  }

  function FileReader () {
    var f = $_6scm2kxbjeajomor.getOrDie('FileReader');
    return new f();
  }

  function Uint8Array (arr) {
    var f = $_6scm2kxbjeajomor.getOrDie('Uint8Array');
    return new f(arr);
  }

  var requestAnimationFrame = function (callback) {
    var f = $_6scm2kxbjeajomor.getOrDie('requestAnimationFrame');
    f(callback);
  };
  var atob = function (base64) {
    var f = $_6scm2kxbjeajomor.getOrDie('atob');
    return f(base64);
  };
  var $_9pwp2r120jeajon82 = {
    atob: atob,
    requestAnimationFrame: requestAnimationFrame
  };

  function loadImage(image) {
    return new Promise(function (resolve) {
      function loaded() {
        image.removeEventListener('load', loaded);
        resolve(image);
      }
      if (image.complete) {
        resolve(image);
      } else {
        image.addEventListener('load', loaded);
      }
    });
  }
  function imageToBlob(image) {
    return loadImage(image).then(function (image) {
      var src = image.src;
      if (src.indexOf('blob:') === 0) {
        return anyUriToBlob(src);
      }
      if (src.indexOf('data:') === 0) {
        return dataUriToBlob(src);
      }
      return anyUriToBlob(src);
    });
  }
  function blobToImage(blob) {
    return new Promise(function (resolve, reject) {
      var blobUrl = URL.createObjectURL(blob);
      var image = new Image();
      var removeListeners = function () {
        image.removeEventListener('load', loaded);
        image.removeEventListener('error', error);
      };
      function loaded() {
        removeListeners();
        resolve(image);
      }
      function error() {
        removeListeners();
        reject('Unable to load data of type ' + blob.type + ': ' + blobUrl);
      }
      image.addEventListener('load', loaded);
      image.addEventListener('error', error);
      image.src = blobUrl;
      if (image.complete) {
        loaded();
      }
    });
  }
  function anyUriToBlob(url) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'blob';
      xhr.onload = function () {
        if (this.status == 200) {
          resolve(this.response);
        }
      };
      xhr.onerror = function () {
        var _this = this;
        var corsError = function () {
          var obj = new Error('No access to download image');
          obj.code = 18;
          obj.name = 'SecurityError';
          return obj;
        };
        var genericError = function () {
          return new Error('Error ' + _this.status + ' downloading image');
        };
        reject(this.status === 0 ? corsError() : genericError());
      };
      xhr.send();
    });
  }
  function dataUriToBlobSync(uri) {
    var data = uri.split(',');
    var matches = /data:([^;]+)/.exec(data[0]);
    if (!matches)
      return Option.none();
    var mimetype = matches[1];
    var base64 = data[1];
    var sliceSize = 1024;
    var byteCharacters = $_9pwp2r120jeajon82.atob(base64);
    var bytesLength = byteCharacters.length;
    var slicesCount = Math.ceil(bytesLength / sliceSize);
    var byteArrays = new Array(slicesCount);
    for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
      var begin = sliceIndex * sliceSize;
      var end = Math.min(begin + sliceSize, bytesLength);
      var bytes = new Array(end - begin);
      for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
        bytes[i] = byteCharacters[offset].charCodeAt(0);
      }
      byteArrays[sliceIndex] = Uint8Array(bytes);
    }
    return Option.some(Blob(byteArrays, { type: mimetype }));
  }
  function dataUriToBlob(uri) {
    return new Promise(function (resolve, reject) {
      dataUriToBlobSync(uri).fold(function () {
        reject('uri is not base64: ' + uri);
      }, resolve);
    });
  }
  function uriToBlob(url) {
    if (url.indexOf('blob:') === 0) {
      return anyUriToBlob(url);
    }
    if (url.indexOf('data:') === 0) {
      return dataUriToBlob(url);
    }
    return null;
  }
  function canvasToBlob(canvas, type, quality) {
    type = type || 'image/png';
    if (HTMLCanvasElement.prototype.toBlob) {
      return new Promise(function (resolve) {
        canvas.toBlob(function (blob) {
          resolve(blob);
        }, type, quality);
      });
    } else {
      return dataUriToBlob(canvas.toDataURL(type, quality));
    }
  }
  function canvasToDataURL(getCanvas, type, quality) {
    type = type || 'image/png';
    return getCanvas.then(function (canvas) {
      return canvas.toDataURL(type, quality);
    });
  }
  function blobToCanvas(blob) {
    return blobToImage(blob).then(function (image) {
      revokeImageUrl(image);
      var context, canvas;
      canvas = $_387yrq11ujeajon7w.create($_3qqxr311vjeajon7x.getWidth(image), $_3qqxr311vjeajon7x.getHeight(image));
      context = $_387yrq11ujeajon7w.get2dContext(canvas);
      context.drawImage(image, 0, 0);
      return canvas;
    });
  }
  function blobToDataUri(blob) {
    return new Promise(function (resolve) {
      var reader = new FileReader();
      reader.onloadend = function () {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
  }
  function blobToArrayBuffer(blob) {
    return new Promise(function (resolve) {
      var reader = new FileReader();
      reader.onloadend = function () {
        resolve(reader.result);
      };
      reader.readAsArrayBuffer(blob);
    });
  }
  function blobToBase64(blob) {
    return blobToDataUri(blob).then(function (dataUri) {
      return dataUri.split(',')[1];
    });
  }
  function revokeImageUrl(image) {
    URL.revokeObjectURL(image.src);
  }
  var $_eeagxz11tjeajon7l = {
    blobToImage: blobToImage,
    imageToBlob: imageToBlob,
    blobToArrayBuffer: blobToArrayBuffer,
    blobToDataUri: blobToDataUri,
    blobToBase64: blobToBase64,
    dataUriToBlobSync: dataUriToBlobSync,
    canvasToBlob: canvasToBlob,
    canvasToDataURL: canvasToDataURL,
    blobToCanvas: blobToCanvas,
    uriToBlob: uriToBlob
  };

  var blobToImage$1 = function (image) {
    return $_eeagxz11tjeajon7l.blobToImage(image);
  };
  var imageToBlob$1 = function (blob) {
    return $_eeagxz11tjeajon7l.imageToBlob(blob);
  };
  var blobToDataUri$1 = function (blob) {
    return $_eeagxz11tjeajon7l.blobToDataUri(blob);
  };
  var blobToBase64$1 = function (blob) {
    return $_eeagxz11tjeajon7l.blobToBase64(blob);
  };
  var dataUriToBlobSync$1 = function (uri) {
    return $_eeagxz11tjeajon7l.dataUriToBlobSync(uri);
  };
  var uriToBlob$1 = function (uri) {
    return Option.from($_eeagxz11tjeajon7l.uriToBlob(uri));
  };
  var $_9wgr411sjeajon7i = {
    blobToImage: blobToImage$1,
    imageToBlob: imageToBlob$1,
    blobToDataUri: blobToDataUri$1,
    blobToBase64: blobToBase64$1,
    dataUriToBlobSync: dataUriToBlobSync$1,
    uriToBlob: uriToBlob$1
  };

  var addImage = function (editor, blob) {
    $_9wgr411sjeajon7i.blobToBase64(blob).then(function (base64) {
      editor.undoManager.transact(function () {
        var cache = editor.editorUpload.blobCache;
        var info = cache.create($_cxs1c110rjeajon2f.generate('mceu'), blob, base64);
        cache.add(info);
        var img = editor.dom.createHTML('img', { src: info.blobUri() });
        editor.insertContent(img);
      });
    });
  };
  var extractBlob = function (simulatedEvent) {
    var event = simulatedEvent.event();
    var files = event.raw().target.files || event.raw().dataTransfer.files;
    return Option.from(files[0]);
  };
  var sketch$5 = function (editor) {
    var pickerDom = {
      tag: 'input',
      attributes: {
        accept: 'image/*',
        type: 'file',
        title: ''
      },
      styles: {
        visibility: 'hidden',
        position: 'absolute'
      }
    };
    var memPicker = $_9mcsdr11rjeajon7c.record({
      dom: pickerDom,
      events: $_2vhl2dy4jeajoms5.derive([
        $_2vhl2dy4jeajoms5.cutter($_9ndt8owijeajomlo.click()),
        $_2vhl2dy4jeajoms5.run($_9ndt8owijeajomlo.change(), function (picker, simulatedEvent) {
          extractBlob(simulatedEvent).each(function (blob) {
            addImage(editor, blob);
          });
        })
      ])
    });
    return Button.sketch({
      dom: $_52n2w4113jeajon4k.dom('<span class="${prefix}-toolbar-button ${prefix}-icon-image ${prefix}-icon"></span>'),
      components: [memPicker.asSpec()],
      action: function (button) {
        var picker = memPicker.get(button);
        picker.element().dom().click();
      }
    });
  };
  var $_9f4m1x11qjeajon76 = { sketch: sketch$5 };

  var get$8 = function (element) {
    return element.dom().textContent;
  };
  var set$5 = function (element, value) {
    element.dom().textContent = value;
  };
  var $_ak5j31123jeajon8f = {
    get: get$8,
    set: set$5
  };

  var isNotEmpty = function (val) {
    return val.length > 0;
  };
  var defaultToEmpty = function (str) {
    return str === undefined || str === null ? '' : str;
  };
  var noLink = function (editor) {
    var text = editor.selection.getContent({ format: 'text' });
    return {
      url: '',
      text: text,
      title: '',
      target: '',
      link: Option.none()
    };
  };
  var fromLink = function (link) {
    var text = $_ak5j31123jeajon8f.get(link);
    var url = $_a7s3osxrjeajomqe.get(link, 'href');
    var title = $_a7s3osxrjeajomqe.get(link, 'title');
    var target = $_a7s3osxrjeajomqe.get(link, 'target');
    return {
      url: defaultToEmpty(url),
      text: text !== url ? defaultToEmpty(text) : '',
      title: defaultToEmpty(title),
      target: defaultToEmpty(target),
      link: Option.some(link)
    };
  };
  var getInfo = function (editor) {
    return query(editor).fold(function () {
      return noLink(editor);
    }, function (link) {
      return fromLink(link);
    });
  };
  var wasSimple = function (link) {
    var prevHref = $_a7s3osxrjeajomqe.get(link, 'href');
    var prevText = $_ak5j31123jeajon8f.get(link);
    return prevHref === prevText;
  };
  var getTextToApply = function (link, url, info) {
    return info.text.filter(isNotEmpty).fold(function () {
      return wasSimple(link) ? Option.some(url) : Option.none();
    }, Option.some);
  };
  var unlinkIfRequired = function (editor, info) {
    var activeLink = info.link.bind($_ddy4s3wjjeajomls.identity);
    activeLink.each(function (link) {
      editor.execCommand('unlink');
    });
  };
  var getAttrs$1 = function (url, info) {
    var attrs = {};
    attrs.href = url;
    info.title.filter(isNotEmpty).each(function (title) {
      attrs.title = title;
    });
    info.target.filter(isNotEmpty).each(function (target) {
      attrs.target = target;
    });
    return attrs;
  };
  var applyInfo = function (editor, info) {
    info.url.filter(isNotEmpty).fold(function () {
      unlinkIfRequired(editor, info);
    }, function (url) {
      var attrs = getAttrs$1(url, info);
      var activeLink = info.link.bind($_ddy4s3wjjeajomls.identity);
      activeLink.fold(function () {
        var text = info.text.filter(isNotEmpty).getOr(url);
        editor.insertContent(editor.dom.createHTML('a', attrs, editor.dom.encode(text)));
      }, function (link) {
        var text = getTextToApply(link, url, info);
        $_a7s3osxrjeajomqe.setAll(link, attrs);
        text.each(function (newText) {
          $_ak5j31123jeajon8f.set(link, newText);
        });
      });
    });
  };
  var query = function (editor) {
    var start = $_8icwg5xfjeajomp0.fromDom(editor.selection.getStart());
    return $_3vna6mzxjeajomyv.closest(start, 'a');
  };
  var $_a2wrld122jeajon87 = {
    getInfo: getInfo,
    applyInfo: applyInfo,
    query: query
  };

  var platform$1 = $_g80fw1wkjeajomlw.detect();
  var preserve$1 = function (f, editor) {
    var rng = editor.selection.getRng();
    f();
    editor.selection.setRng(rng);
  };
  var forAndroid = function (editor, f) {
    var wrapper = platform$1.os.isAndroid() ? preserve$1 : $_ddy4s3wjjeajomls.apply;
    wrapper(f, editor);
  };
  var $_8njofw124jeajon8g = { forAndroid: forAndroid };

  var events$6 = function (name, eventHandlers) {
    var events = $_2vhl2dy4jeajoms5.derive(eventHandlers);
    return $_cwu2vpy2jeajomrh.create({
      fields: [$_8qbqu2y7jeajomsl.strict('enabled')],
      name: name,
      active: { events: $_ddy4s3wjjeajomls.constant(events) }
    });
  };
  var config = function (name, eventHandlers) {
    var me = events$6(name, eventHandlers);
    return {
      key: name,
      value: {
        config: {},
        me: me,
        configAsRaw: $_ddy4s3wjjeajomls.constant({}),
        initialConfig: {},
        state: $_cwu2vpy2jeajomrh.noState()
      }
    };
  };
  var $_62oo9h126jeajon8w = {
    events: events$6,
    config: config
  };

  var getCurrent = function (component, composeConfig, composeState) {
    return composeConfig.find()(component);
  };
  var $_dxtc9p128jeajon91 = { getCurrent: getCurrent };

  var ComposeSchema = [$_8qbqu2y7jeajomsl.strict('find')];

  var Composing = $_cwu2vpy2jeajomrh.create({
    fields: ComposeSchema,
    name: 'composing',
    apis: $_dxtc9p128jeajon91
  });

  var factory$1 = function (detail, spec) {
    return {
      uid: detail.uid(),
      dom: $_2yrejjwyjeajomn9.deepMerge({
        tag: 'div',
        attributes: { role: 'presentation' }
      }, detail.dom()),
      components: detail.components(),
      behaviours: $_2ioems10ojeajon1y.get(detail.containerBehaviours()),
      events: detail.events(),
      domModification: detail.domModification(),
      eventOrder: detail.eventOrder()
    };
  };
  var Container = $_fp614n10pjeajon23.single({
    name: 'Container',
    factory: factory$1,
    configFields: [
      $_8qbqu2y7jeajomsl.defaulted('components', []),
      $_2ioems10ojeajon1y.field('containerBehaviours', []),
      $_8qbqu2y7jeajomsl.defaulted('events', {}),
      $_8qbqu2y7jeajomsl.defaulted('domModification', {}),
      $_8qbqu2y7jeajomsl.defaulted('eventOrder', {})
    ]
  });

  var factory$2 = function (detail, spec) {
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      behaviours: $_2yrejjwyjeajomn9.deepMerge($_cwu2vpy2jeajomrh.derive([
        me.config({
          store: {
            mode: 'memory',
            initialValue: detail.getInitialValue()()
          }
        }),
        Composing.config({ find: Option.some })
      ]), $_2ioems10ojeajon1y.get(detail.dataBehaviours())),
      events: $_2vhl2dy4jeajoms5.derive([$_2vhl2dy4jeajoms5.runOnAttached(function (component, simulatedEvent) {
          me.setValue(component, detail.getInitialValue()());
        })])
    };
  };
  var DataField = $_fp614n10pjeajon23.single({
    name: 'DataField',
    factory: factory$2,
    configFields: [
      $_8qbqu2y7jeajomsl.strict('uid'),
      $_8qbqu2y7jeajomsl.strict('dom'),
      $_8qbqu2y7jeajomsl.strict('getInitialValue'),
      $_2ioems10ojeajon1y.field('dataBehaviours', [
        me,
        Composing
      ])
    ]
  });

  var get$9 = function (element) {
    return element.dom().value;
  };
  var set$6 = function (element, value) {
    if (value === undefined)
      throw new Error('Value.set was undefined');
    element.dom().value = value;
  };
  var $_dp4jtt12ejeajon9o = {
    set: set$6,
    get: get$9
  };

  var schema$8 = [
    $_8qbqu2y7jeajomsl.option('data'),
    $_8qbqu2y7jeajomsl.defaulted('inputAttributes', {}),
    $_8qbqu2y7jeajomsl.defaulted('inputStyles', {}),
    $_8qbqu2y7jeajomsl.defaulted('type', 'input'),
    $_8qbqu2y7jeajomsl.defaulted('tag', 'input'),
    $_8qbqu2y7jeajomsl.defaulted('inputClasses', []),
    $_apbxenz6jeajomvz.onHandler('onSetValue'),
    $_8qbqu2y7jeajomsl.defaulted('styles', {}),
    $_8qbqu2y7jeajomsl.option('placeholder'),
    $_8qbqu2y7jeajomsl.defaulted('eventOrder', {}),
    $_2ioems10ojeajon1y.field('inputBehaviours', [
      me,
      Focusing
    ]),
    $_8qbqu2y7jeajomsl.defaulted('selectOnFocus', true)
  ];
  var behaviours = function (detail) {
    return $_2yrejjwyjeajomn9.deepMerge($_cwu2vpy2jeajomrh.derive([
      me.config({
        store: {
          mode: 'manual',
          initialValue: detail.data().getOr(undefined),
          getValue: function (input) {
            return $_dp4jtt12ejeajon9o.get(input.element());
          },
          setValue: function (input, data) {
            var current = $_dp4jtt12ejeajon9o.get(input.element());
            if (current !== data) {
              $_dp4jtt12ejeajon9o.set(input.element(), data);
            }
          }
        },
        onSetValue: detail.onSetValue()
      }),
      Focusing.config({
        onFocus: detail.selectOnFocus() === false ? $_ddy4s3wjjeajomls.noop : function (component) {
          var input = component.element();
          var value = $_dp4jtt12ejeajon9o.get(input);
          input.dom().setSelectionRange(0, value.length);
        }
      })
    ]), $_2ioems10ojeajon1y.get(detail.inputBehaviours()));
  };
  var dom$2 = function (detail) {
    return {
      tag: detail.tag(),
      attributes: $_2yrejjwyjeajomn9.deepMerge($_6rmcx0xsjeajomqm.wrapAll([{
          key: 'type',
          value: detail.type()
        }].concat(detail.placeholder().map(function (pc) {
        return {
          key: 'placeholder',
          value: pc
        };
      }).toArray())), detail.inputAttributes()),
      styles: detail.inputStyles(),
      classes: detail.inputClasses()
    };
  };
  var $_1l3w3e12djeajon9g = {
    schema: $_ddy4s3wjjeajomls.constant(schema$8),
    behaviours: behaviours,
    dom: dom$2
  };

  var factory$3 = function (detail, spec) {
    return {
      uid: detail.uid(),
      dom: $_1l3w3e12djeajon9g.dom(detail),
      components: [],
      behaviours: $_1l3w3e12djeajon9g.behaviours(detail),
      eventOrder: detail.eventOrder()
    };
  };
  var Input = $_fp614n10pjeajon23.single({
    name: 'Input',
    configFields: $_1l3w3e12djeajon9g.schema(),
    factory: factory$3
  });

  var exhibit$3 = function (base, tabConfig) {
    return $_zcg1fyhjeajomu1.nu({
      attributes: $_6rmcx0xsjeajomqm.wrapAll([{
          key: tabConfig.tabAttr(),
          value: 'true'
        }])
    });
  };
  var $_dskbmq12gjeajon9q = { exhibit: exhibit$3 };

  var TabstopSchema = [$_8qbqu2y7jeajomsl.defaulted('tabAttr', 'data-alloy-tabstop')];

  var Tabstopping = $_cwu2vpy2jeajomrh.create({
    fields: TabstopSchema,
    name: 'tabstopping',
    active: $_dskbmq12gjeajon9q
  });

  var clearInputBehaviour = 'input-clearing';
  var field$2 = function (name, placeholder) {
    var inputSpec = $_9mcsdr11rjeajon7c.record(Input.sketch({
      placeholder: placeholder,
      onSetValue: function (input, data) {
        $_30e2nlwgjeajomlb.emit(input, $_9ndt8owijeajomlo.input());
      },
      inputBehaviours: $_cwu2vpy2jeajomrh.derive([
        Composing.config({ find: Option.some }),
        Tabstopping.config({}),
        Keying.config({ mode: 'execution' })
      ]),
      selectOnFocus: false
    }));
    var buttonSpec = $_9mcsdr11rjeajon7c.record(Button.sketch({
      dom: $_52n2w4113jeajon4k.dom('<button class="${prefix}-input-container-x ${prefix}-icon-cancel-circle ${prefix}-icon"></button>'),
      action: function (button) {
        var input = inputSpec.get(button);
        me.setValue(input, '');
      }
    }));
    return {
      name: name,
      spec: Container.sketch({
        dom: $_52n2w4113jeajon4k.dom('<div class="${prefix}-input-container"></div>'),
        components: [
          inputSpec.asSpec(),
          buttonSpec.asSpec()
        ],
        containerBehaviours: $_cwu2vpy2jeajomrh.derive([
          Toggling.config({ toggleClass: $_eanbiezejeajomx0.resolve('input-container-empty') }),
          Composing.config({
            find: function (comp) {
              return Option.some(inputSpec.get(comp));
            }
          }),
          $_62oo9h126jeajon8w.config(clearInputBehaviour, [$_2vhl2dy4jeajoms5.run($_9ndt8owijeajomlo.input(), function (iContainer) {
              var input = inputSpec.get(iContainer);
              var val = me.getValue(input);
              var f = val.length > 0 ? Toggling.off : Toggling.on;
              f(iContainer);
            })])
        ])
      })
    };
  };
  var hidden = function (name) {
    return {
      name: name,
      spec: DataField.sketch({
        dom: {
          tag: 'span',
          styles: { display: 'none' }
        },
        getInitialValue: function () {
          return Option.none();
        }
      })
    };
  };
  var $_4hgwi4125jeajon8j = {
    field: field$2,
    hidden: hidden
  };

  var nativeDisabled = [
    'input',
    'button',
    'textarea'
  ];
  var onLoad$5 = function (component, disableConfig, disableState) {
    if (disableConfig.disabled())
      disable(component, disableConfig, disableState);
  };
  var hasNative = function (component) {
    return $_5r3pikwsjeajommo.contains(nativeDisabled, $_bsb5vnxkjeajompc.name(component.element()));
  };
  var nativeIsDisabled = function (component) {
    return $_a7s3osxrjeajomqe.has(component.element(), 'disabled');
  };
  var nativeDisable = function (component) {
    $_a7s3osxrjeajomqe.set(component.element(), 'disabled', 'disabled');
  };
  var nativeEnable = function (component) {
    $_a7s3osxrjeajomqe.remove(component.element(), 'disabled');
  };
  var ariaIsDisabled = function (component) {
    return $_a7s3osxrjeajomqe.get(component.element(), 'aria-disabled') === 'true';
  };
  var ariaDisable = function (component) {
    $_a7s3osxrjeajomqe.set(component.element(), 'aria-disabled', 'true');
  };
  var ariaEnable = function (component) {
    $_a7s3osxrjeajomqe.set(component.element(), 'aria-disabled', 'false');
  };
  var disable = function (component, disableConfig, disableState) {
    disableConfig.disableClass().each(function (disableClass) {
      $_65t2ydynjeajomul.add(component.element(), disableClass);
    });
    var f = hasNative(component) ? nativeDisable : ariaDisable;
    f(component);
  };
  var enable = function (component, disableConfig, disableState) {
    disableConfig.disableClass().each(function (disableClass) {
      $_65t2ydynjeajomul.remove(component.element(), disableClass);
    });
    var f = hasNative(component) ? nativeEnable : ariaEnable;
    f(component);
  };
  var isDisabled = function (component) {
    return hasNative(component) ? nativeIsDisabled(component) : ariaIsDisabled(component);
  };
  var $_60zfv712ljeajonak = {
    enable: enable,
    disable: disable,
    isDisabled: isDisabled,
    onLoad: onLoad$5
  };

  var exhibit$4 = function (base, disableConfig, disableState) {
    return $_zcg1fyhjeajomu1.nu({ classes: disableConfig.disabled() ? disableConfig.disableClass().map($_5r3pikwsjeajommo.pure).getOr([]) : [] });
  };
  var events$7 = function (disableConfig, disableState) {
    return $_2vhl2dy4jeajoms5.derive([
      $_2vhl2dy4jeajoms5.abort($_bckj1uwhjeajomli.execute(), function (component, simulatedEvent) {
        return $_60zfv712ljeajonak.isDisabled(component, disableConfig, disableState);
      }),
      $_83rbg8y3jeajomro.loadEvent(disableConfig, disableState, $_60zfv712ljeajonak.onLoad)
    ]);
  };
  var $_f0b7kx12kjeajonah = {
    exhibit: exhibit$4,
    events: events$7
  };

  var DisableSchema = [
    $_8qbqu2y7jeajomsl.defaulted('disabled', false),
    $_8qbqu2y7jeajomsl.option('disableClass')
  ];

  var Disabling = $_cwu2vpy2jeajomrh.create({
    fields: DisableSchema,
    name: 'disabling',
    active: $_f0b7kx12kjeajonah,
    apis: $_60zfv712ljeajonak
  });

  var owner$1 = 'form';
  var schema$9 = [$_2ioems10ojeajon1y.field('formBehaviours', [me])];
  var getPartName = function (name) {
    return '<alloy.field.' + name + '>';
  };
  var sketch$6 = function (fSpec) {
    var parts = function () {
      var record = [];
      var field = function (name, config) {
        record.push(name);
        return $_opzv410tjeajon2o.generateOne(owner$1, getPartName(name), config);
      };
      return {
        field: field,
        record: function () {
          return record;
        }
      };
    }();
    var spec = fSpec(parts);
    var partNames = parts.record();
    var fieldParts = $_5r3pikwsjeajommo.map(partNames, function (n) {
      return $_7m3s6v10vjeajon34.required({
        name: n,
        pname: getPartName(n)
      });
    });
    return $_277wio10sjeajon2g.composite(owner$1, schema$9, fieldParts, make, spec);
  };
  var make = function (detail, components, spec) {
    return $_2yrejjwyjeajomn9.deepMerge({
      'debug.sketcher': { 'Form': spec },
      uid: detail.uid(),
      dom: detail.dom(),
      components: components,
      behaviours: $_2yrejjwyjeajomn9.deepMerge($_cwu2vpy2jeajomrh.derive([me.config({
          store: {
            mode: 'manual',
            getValue: function (form) {
              var optPs = $_opzv410tjeajon2o.getAllParts(form, detail);
              return $_9s6ha1x0jeajomnc.map(optPs, function (optPThunk, pName) {
                return optPThunk().bind(Composing.getCurrent).map(me.getValue);
              });
            },
            setValue: function (form, values) {
              $_9s6ha1x0jeajomnc.each(values, function (newValue, key) {
                $_opzv410tjeajon2o.getPart(form, detail, key).each(function (wrapper) {
                  Composing.getCurrent(wrapper).each(function (field) {
                    me.setValue(field, newValue);
                  });
                });
              });
            }
          }
        })]), $_2ioems10ojeajon1y.get(detail.formBehaviours())),
      apis: {
        getField: function (form, key) {
          return $_opzv410tjeajon2o.getPart(form, detail, key).bind(Composing.getCurrent);
        }
      }
    });
  };
  var $_dlwo6a12njeajonat = {
    getField: $_ebzw1210qjeajon2a.makeApi(function (apis, component, key) {
      return apis.getField(component, key);
    }),
    sketch: sketch$6
  };

  var revocable = function (doRevoke) {
    var subject = Cell(Option.none());
    var revoke = function () {
      subject.get().each(doRevoke);
    };
    var clear = function () {
      revoke();
      subject.set(Option.none());
    };
    var set = function (s) {
      revoke();
      subject.set(Option.some(s));
    };
    var isSet = function () {
      return subject.get().isSome();
    };
    return {
      clear: clear,
      isSet: isSet,
      set: set
    };
  };
  var destroyable = function () {
    return revocable(function (s) {
      s.destroy();
    });
  };
  var unbindable = function () {
    return revocable(function (s) {
      s.unbind();
    });
  };
  var api$2 = function () {
    var subject = Cell(Option.none());
    var revoke = function () {
      subject.get().each(function (s) {
        s.destroy();
      });
    };
    var clear = function () {
      revoke();
      subject.set(Option.none());
    };
    var set = function (s) {
      revoke();
      subject.set(Option.some(s));
    };
    var run = function (f) {
      subject.get().each(f);
    };
    var isSet = function () {
      return subject.get().isSome();
    };
    return {
      clear: clear,
      isSet: isSet,
      set: set,
      run: run
    };
  };
  var value$3 = function () {
    var subject = Cell(Option.none());
    var clear = function () {
      subject.set(Option.none());
    };
    var set = function (s) {
      subject.set(Option.some(s));
    };
    var on = function (f) {
      subject.get().each(f);
    };
    var isSet = function () {
      return subject.get().isSome();
    };
    return {
      clear: clear,
      set: set,
      isSet: isSet,
      on: on
    };
  };
  var $_cfrzgh12ojeajonb2 = {
    destroyable: destroyable,
    unbindable: unbindable,
    api: api$2,
    value: value$3
  };

  var SWIPING_LEFT = 1;
  var SWIPING_RIGHT = -1;
  var SWIPING_NONE = 0;
  var init$3 = function (xValue) {
    return {
      xValue: xValue,
      points: []
    };
  };
  var move = function (model, xValue) {
    if (xValue === model.xValue) {
      return model;
    }
    var currentDirection = xValue - model.xValue > 0 ? SWIPING_LEFT : SWIPING_RIGHT;
    var newPoint = {
      direction: currentDirection,
      xValue: xValue
    };
    var priorPoints = function () {
      if (model.points.length === 0) {
        return [];
      } else {
        var prev = model.points[model.points.length - 1];
        return prev.direction === currentDirection ? model.points.slice(0, model.points.length - 1) : model.points;
      }
    }();
    return {
      xValue: xValue,
      points: priorPoints.concat([newPoint])
    };
  };
  var complete = function (model) {
    if (model.points.length === 0) {
      return SWIPING_NONE;
    } else {
      var firstDirection = model.points[0].direction;
      var lastDirection = model.points[model.points.length - 1].direction;
      return firstDirection === SWIPING_RIGHT && lastDirection === SWIPING_RIGHT ? SWIPING_RIGHT : firstDirection === SWIPING_LEFT && lastDirection === SWIPING_LEFT ? SWIPING_LEFT : SWIPING_NONE;
    }
  };
  var $_abhg8512pjeajonb9 = {
    init: init$3,
    move: move,
    complete: complete
  };

  var sketch$7 = function (rawSpec) {
    var navigateEvent = 'navigateEvent';
    var wrapperAdhocEvents = 'serializer-wrapper-events';
    var formAdhocEvents = 'form-events';
    var schema = $_8qt2pyyejeajomtl.objOf([
      $_8qbqu2y7jeajomsl.strict('fields'),
      $_8qbqu2y7jeajomsl.defaulted('maxFieldIndex', rawSpec.fields.length - 1),
      $_8qbqu2y7jeajomsl.strict('onExecute'),
      $_8qbqu2y7jeajomsl.strict('getInitialValue'),
      $_8qbqu2y7jeajomsl.state('state', function () {
        return {
          dialogSwipeState: $_cfrzgh12ojeajonb2.value(),
          currentScreen: Cell(0)
        };
      })
    ]);
    var spec = $_8qt2pyyejeajomtl.asRawOrDie('SerialisedDialog', schema, rawSpec);
    var navigationButton = function (direction, directionName, enabled) {
      return Button.sketch({
        dom: $_52n2w4113jeajon4k.dom('<span class="${prefix}-icon-' + directionName + ' ${prefix}-icon"></span>'),
        action: function (button) {
          $_30e2nlwgjeajomlb.emitWith(button, navigateEvent, { direction: direction });
        },
        buttonBehaviours: $_cwu2vpy2jeajomrh.derive([Disabling.config({
            disableClass: $_eanbiezejeajomx0.resolve('toolbar-navigation-disabled'),
            disabled: !enabled
          })])
      });
    };
    var reposition = function (dialog, message) {
      $_3vna6mzxjeajomyv.descendant(dialog.element(), '.' + $_eanbiezejeajomx0.resolve('serialised-dialog-chain')).each(function (parent) {
        $_64rfd7103jeajomzb.set(parent, 'left', -spec.state.currentScreen.get() * message.width + 'px');
      });
    };
    var navigate = function (dialog, direction) {
      var screens = $_62qkn1zvjeajomyr.descendants(dialog.element(), '.' + $_eanbiezejeajomx0.resolve('serialised-dialog-screen'));
      $_3vna6mzxjeajomyv.descendant(dialog.element(), '.' + $_eanbiezejeajomx0.resolve('serialised-dialog-chain')).each(function (parent) {
        if (spec.state.currentScreen.get() + direction >= 0 && spec.state.currentScreen.get() + direction < screens.length) {
          $_64rfd7103jeajomzb.getRaw(parent, 'left').each(function (left) {
            var currentLeft = parseInt(left, 10);
            var w = $_515ubo11kjeajon6n.get(screens[0]);
            $_64rfd7103jeajomzb.set(parent, 'left', currentLeft - direction * w + 'px');
          });
          spec.state.currentScreen.set(spec.state.currentScreen.get() + direction);
        }
      });
    };
    var focusInput = function (dialog) {
      var inputs = $_62qkn1zvjeajomyr.descendants(dialog.element(), 'input');
      var optInput = Option.from(inputs[spec.state.currentScreen.get()]);
      optInput.each(function (input) {
        dialog.getSystem().getByDom(input).each(function (inputComp) {
          $_30e2nlwgjeajomlb.dispatchFocus(dialog, inputComp.element());
        });
      });
      var dotitems = memDots.get(dialog);
      Highlighting.highlightAt(dotitems, spec.state.currentScreen.get());
    };
    var resetState = function () {
      spec.state.currentScreen.set(0);
      spec.state.dialogSwipeState.clear();
    };
    var memForm = $_9mcsdr11rjeajon7c.record($_dlwo6a12njeajonat.sketch(function (parts) {
      return {
        dom: $_52n2w4113jeajon4k.dom('<div class="${prefix}-serialised-dialog"></div>'),
        components: [Container.sketch({
            dom: $_52n2w4113jeajon4k.dom('<div class="${prefix}-serialised-dialog-chain" style="left: 0px; position: absolute;"></div>'),
            components: $_5r3pikwsjeajommo.map(spec.fields, function (field, i) {
              return i <= spec.maxFieldIndex ? Container.sketch({
                dom: $_52n2w4113jeajon4k.dom('<div class="${prefix}-serialised-dialog-screen"></div>'),
                components: $_5r3pikwsjeajommo.flatten([
                  [navigationButton(-1, 'previous', i > 0)],
                  [parts.field(field.name, field.spec)],
                  [navigationButton(+1, 'next', i < spec.maxFieldIndex)]
                ])
              }) : parts.field(field.name, field.spec);
            })
          })],
        formBehaviours: $_cwu2vpy2jeajomrh.derive([
          $_8qo6opzdjeajomwx.orientation(function (dialog, message) {
            reposition(dialog, message);
          }),
          Keying.config({
            mode: 'special',
            focusIn: function (dialog) {
              focusInput(dialog);
            },
            onTab: function (dialog) {
              navigate(dialog, +1);
              return Option.some(true);
            },
            onShiftTab: function (dialog) {
              navigate(dialog, -1);
              return Option.some(true);
            }
          }),
          $_62oo9h126jeajon8w.config(formAdhocEvents, [
            $_2vhl2dy4jeajoms5.runOnAttached(function (dialog, simulatedEvent) {
              resetState();
              var dotitems = memDots.get(dialog);
              Highlighting.highlightFirst(dotitems);
              spec.getInitialValue(dialog).each(function (v) {
                me.setValue(dialog, v);
              });
            }),
            $_2vhl2dy4jeajoms5.runOnExecute(spec.onExecute),
            $_2vhl2dy4jeajoms5.run($_9ndt8owijeajomlo.transitionend(), function (dialog, simulatedEvent) {
              if (simulatedEvent.event().raw().propertyName === 'left') {
                focusInput(dialog);
              }
            }),
            $_2vhl2dy4jeajoms5.run(navigateEvent, function (dialog, simulatedEvent) {
              var direction = simulatedEvent.event().direction();
              navigate(dialog, direction);
            })
          ])
        ])
      };
    }));
    var memDots = $_9mcsdr11rjeajon7c.record({
      dom: $_52n2w4113jeajon4k.dom('<div class="${prefix}-dot-container"></div>'),
      behaviours: $_cwu2vpy2jeajomrh.derive([Highlighting.config({
          highlightClass: $_eanbiezejeajomx0.resolve('dot-active'),
          itemClass: $_eanbiezejeajomx0.resolve('dot-item')
        })]),
      components: $_5r3pikwsjeajommo.bind(spec.fields, function (_f, i) {
        return i <= spec.maxFieldIndex ? [$_52n2w4113jeajon4k.spec('<div class="${prefix}-dot-item ${prefix}-icon-full-dot ${prefix}-icon"></div>')] : [];
      })
    });
    return {
      dom: $_52n2w4113jeajon4k.dom('<div class="${prefix}-serializer-wrapper"></div>'),
      components: [
        memForm.asSpec(),
        memDots.asSpec()
      ],
      behaviours: $_cwu2vpy2jeajomrh.derive([
        Keying.config({
          mode: 'special',
          focusIn: function (wrapper) {
            var form = memForm.get(wrapper);
            Keying.focusIn(form);
          }
        }),
        $_62oo9h126jeajon8w.config(wrapperAdhocEvents, [
          $_2vhl2dy4jeajoms5.run($_9ndt8owijeajomlo.touchstart(), function (wrapper, simulatedEvent) {
            spec.state.dialogSwipeState.set($_abhg8512pjeajonb9.init(simulatedEvent.event().raw().touches[0].clientX));
          }),
          $_2vhl2dy4jeajoms5.run($_9ndt8owijeajomlo.touchmove(), function (wrapper, simulatedEvent) {
            spec.state.dialogSwipeState.on(function (state) {
              simulatedEvent.event().prevent();
              spec.state.dialogSwipeState.set($_abhg8512pjeajonb9.move(state, simulatedEvent.event().raw().touches[0].clientX));
            });
          }),
          $_2vhl2dy4jeajoms5.run($_9ndt8owijeajomlo.touchend(), function (wrapper) {
            spec.state.dialogSwipeState.on(function (state) {
              var dialog = memForm.get(wrapper);
              var direction = -1 * $_abhg8512pjeajonb9.complete(state);
              navigate(dialog, direction);
            });
          })
        ])
      ])
    };
  };
  var $_973o8612ijeajon9u = { sketch: sketch$7 };

  var getGroups = $_2add5nwljeajomlz.cached(function (realm, editor) {
    return [{
        label: 'the link group',
        items: [$_973o8612ijeajon9u.sketch({
            fields: [
              $_4hgwi4125jeajon8j.field('url', 'Type or paste URL'),
              $_4hgwi4125jeajon8j.field('text', 'Link text'),
              $_4hgwi4125jeajon8j.field('title', 'Link title'),
              $_4hgwi4125jeajon8j.field('target', 'Link target'),
              $_4hgwi4125jeajon8j.hidden('link')
            ],
            maxFieldIndex: [
              'url',
              'text',
              'title',
              'target'
            ].length - 1,
            getInitialValue: function () {
              return Option.some($_a2wrld122jeajon87.getInfo(editor));
            },
            onExecute: function (dialog) {
              var info = me.getValue(dialog);
              $_a2wrld122jeajon87.applyInfo(editor, info);
              realm.restoreToolbar();
              editor.focus();
            }
          })]
      }];
  });
  var sketch$8 = function (realm, editor) {
    return $_ccxdx6zfjeajomx1.forToolbarStateAction(editor, 'link', 'link', function () {
      var groups = getGroups(realm, editor);
      realm.setContextToolbar(groups);
      $_8njofw124jeajon8g.forAndroid(editor, function () {
        realm.focusToolbar();
      });
      $_a2wrld122jeajon87.query(editor).each(function (link) {
        editor.selection.select(link.dom());
      });
    });
  };
  var $_3q7e7a121jeajon83 = { sketch: sketch$8 };

  var DefaultStyleFormats = [
    {
      title: 'Headings',
      items: [
        {
          title: 'Heading 1',
          format: 'h1'
        },
        {
          title: 'Heading 2',
          format: 'h2'
        },
        {
          title: 'Heading 3',
          format: 'h3'
        },
        {
          title: 'Heading 4',
          format: 'h4'
        },
        {
          title: 'Heading 5',
          format: 'h5'
        },
        {
          title: 'Heading 6',
          format: 'h6'
        }
      ]
    },
    {
      title: 'Inline',
      items: [
        {
          title: 'Bold',
          icon: 'bold',
          format: 'bold'
        },
        {
          title: 'Italic',
          icon: 'italic',
          format: 'italic'
        },
        {
          title: 'Underline',
          icon: 'underline',
          format: 'underline'
        },
        {
          title: 'Strikethrough',
          icon: 'strikethrough',
          format: 'strikethrough'
        },
        {
          title: 'Superscript',
          icon: 'superscript',
          format: 'superscript'
        },
        {
          title: 'Subscript',
          icon: 'subscript',
          format: 'subscript'
        },
        {
          title: 'Code',
          icon: 'code',
          format: 'code'
        }
      ]
    },
    {
      title: 'Blocks',
      items: [
        {
          title: 'Paragraph',
          format: 'p'
        },
        {
          title: 'Blockquote',
          format: 'blockquote'
        },
        {
          title: 'Div',
          format: 'div'
        },
        {
          title: 'Pre',
          format: 'pre'
        }
      ]
    },
    {
      title: 'Alignment',
      items: [
        {
          title: 'Left',
          icon: 'alignleft',
          format: 'alignleft'
        },
        {
          title: 'Center',
          icon: 'aligncenter',
          format: 'aligncenter'
        },
        {
          title: 'Right',
          icon: 'alignright',
          format: 'alignright'
        },
        {
          title: 'Justify',
          icon: 'alignjustify',
          format: 'alignjustify'
        }
      ]
    }
  ];

  var generateFrom = function (spec, all) {
    var schema = $_5r3pikwsjeajommo.map(all, function (a) {
      return $_8qbqu2y7jeajomsl.field(a.name(), a.name(), $_6n8cmyy8jeajomsp.asOption(), $_8qt2pyyejeajomtl.objOf([
        $_8qbqu2y7jeajomsl.strict('config'),
        $_8qbqu2y7jeajomsl.defaulted('state', $_8yipm6yjjeajomue)
      ]));
    });
    var validated = $_8qt2pyyejeajomtl.asStruct('component.behaviours', $_8qt2pyyejeajomtl.objOf(schema), spec.behaviours).fold(function (errInfo) {
      throw new Error($_8qt2pyyejeajomtl.formatError(errInfo) + '\nComplete spec:\n' + $_ax19tpydjeajomtj.stringify(spec, null, 2));
    }, $_ddy4s3wjjeajomls.identity);
    return {
      list: all,
      data: $_9s6ha1x0jeajomnc.map(validated, function (blobOptionThunk) {
        var blobOption = blobOptionThunk();
        return $_ddy4s3wjjeajomls.constant(blobOption.map(function (blob) {
          return {
            config: blob.config(),
            state: blob.state().init(blob.config())
          };
        }));
      })
    };
  };
  var getBehaviours = function (bData) {
    return bData.list;
  };
  var getData = function (bData) {
    return bData.data;
  };
  var $_8t9mm712wjeajoncw = {
    generateFrom: generateFrom,
    getBehaviours: getBehaviours,
    getData: getData
  };

  var getBehaviours$1 = function (spec) {
    var behaviours = $_6rmcx0xsjeajomqm.readOptFrom(spec, 'behaviours').getOr({});
    var keys = $_5r3pikwsjeajommo.filter($_9s6ha1x0jeajomnc.keys(behaviours), function (k) {
      return behaviours[k] !== undefined;
    });
    return $_5r3pikwsjeajommo.map(keys, function (k) {
      return spec.behaviours[k].me;
    });
  };
  var generateFrom$1 = function (spec, all) {
    return $_8t9mm712wjeajoncw.generateFrom(spec, all);
  };
  var generate$4 = function (spec) {
    var all = getBehaviours$1(spec);
    return generateFrom$1(spec, all);
  };
  var $_cisj2i12vjeajoncs = {
    generate: generate$4,
    generateFrom: generateFrom$1
  };

  var ComponentApi = $_jjzweyljeajomug.exactly([
    'getSystem',
    'config',
    'hasConfigured',
    'spec',
    'connect',
    'disconnect',
    'element',
    'syncComponents',
    'readState',
    'components',
    'events'
  ]);

  var SystemApi = $_jjzweyljeajomug.exactly([
    'debugInfo',
    'triggerFocus',
    'triggerEvent',
    'triggerEscape',
    'addToWorld',
    'removeFromWorld',
    'addToGui',
    'removeFromGui',
    'build',
    'getByUid',
    'getByDom',
    'broadcast',
    'broadcastOn'
  ]);

  function NoContextApi (getComp) {
    var fail = function (event) {
      return function () {
        throw new Error('The component must be in a context to send: ' + event + '\n' + $_74y4xnxmjeajomq3.element(getComp().element()) + ' is not in context.');
      };
    };
    return SystemApi({
      debugInfo: $_ddy4s3wjjeajomls.constant('fake'),
      triggerEvent: fail('triggerEvent'),
      triggerFocus: fail('triggerFocus'),
      triggerEscape: fail('triggerEscape'),
      build: fail('build'),
      addToWorld: fail('addToWorld'),
      removeFromWorld: fail('removeFromWorld'),
      addToGui: fail('addToGui'),
      removeFromGui: fail('removeFromGui'),
      getByUid: fail('getByUid'),
      getByDom: fail('getByDom'),
      broadcast: fail('broadcast'),
      broadcastOn: fail('broadcastOn')
    });
  }

  var byInnerKey = function (data, tuple) {
    var r = {};
    $_9s6ha1x0jeajomnc.each(data, function (detail, key) {
      $_9s6ha1x0jeajomnc.each(detail, function (value, indexKey) {
        var chain = $_6rmcx0xsjeajomqm.readOr(indexKey, [])(r);
        r[indexKey] = chain.concat([tuple(key, value)]);
      });
    });
    return r;
  };
  var $_dpeq15131jeajondq = { byInnerKey: byInnerKey };

  var behaviourDom = function (name, modification) {
    return {
      name: $_ddy4s3wjjeajomls.constant(name),
      modification: modification
    };
  };
  var concat = function (chain, aspect) {
    var values = $_5r3pikwsjeajommo.bind(chain, function (c) {
      return c.modification().getOr([]);
    });
    return Result.value($_6rmcx0xsjeajomqm.wrap(aspect, values));
  };
  var onlyOne = function (chain, aspect, order) {
    if (chain.length > 1)
      return Result.error('Multiple behaviours have tried to change DOM "' + aspect + '". The guilty behaviours are: ' + $_ax19tpydjeajomtj.stringify($_5r3pikwsjeajommo.map(chain, function (b) {
        return b.name();
      })) + '. At this stage, this ' + 'is not supported. Future releases might provide strategies for resolving this.');
    else if (chain.length === 0)
      return Result.value({});
    else
      return Result.value(chain[0].modification().fold(function () {
        return {};
      }, function (m) {
        return $_6rmcx0xsjeajomqm.wrap(aspect, m);
      }));
  };
  var duplicate = function (aspect, k, obj, behaviours) {
    return Result.error('Mulitple behaviours have tried to change the _' + k + '_ "' + aspect + '"' + '. The guilty behaviours are: ' + $_ax19tpydjeajomtj.stringify($_5r3pikwsjeajommo.bind(behaviours, function (b) {
      return b.modification().getOr({})[k] !== undefined ? [b.name()] : [];
    }), null, 2) + '. This is not currently supported.');
  };
  var safeMerge = function (chain, aspect) {
    var y = $_5r3pikwsjeajommo.foldl(chain, function (acc, c) {
      var obj = c.modification().getOr({});
      return acc.bind(function (accRest) {
        var parts = $_9s6ha1x0jeajomnc.mapToArray(obj, function (v, k) {
          return accRest[k] !== undefined ? duplicate(aspect, k, obj, chain) : Result.value($_6rmcx0xsjeajomqm.wrap(k, v));
        });
        return $_6rmcx0xsjeajomqm.consolidate(parts, accRest);
      });
    }, Result.value({}));
    return y.map(function (yValue) {
      return $_6rmcx0xsjeajomqm.wrap(aspect, yValue);
    });
  };
  var mergeTypes = {
    classes: concat,
    attributes: safeMerge,
    styles: safeMerge,
    domChildren: onlyOne,
    defChildren: onlyOne,
    innerHtml: onlyOne,
    value: onlyOne
  };
  var combine$1 = function (info, baseMod, behaviours, base) {
    var behaviourDoms = $_2yrejjwyjeajomn9.deepMerge({}, baseMod);
    $_5r3pikwsjeajommo.each(behaviours, function (behaviour) {
      behaviourDoms[behaviour.name()] = behaviour.exhibit(info, base);
    });
    var byAspect = $_dpeq15131jeajondq.byInnerKey(behaviourDoms, behaviourDom);
    var usedAspect = $_9s6ha1x0jeajomnc.map(byAspect, function (values, aspect) {
      return $_5r3pikwsjeajommo.bind(values, function (value) {
        return value.modification().fold(function () {
          return [];
        }, function (v) {
          return [value];
        });
      });
    });
    var modifications = $_9s6ha1x0jeajomnc.mapToArray(usedAspect, function (values, aspect) {
      return $_6rmcx0xsjeajomqm.readOptFrom(mergeTypes, aspect).fold(function () {
        return Result.error('Unknown field type: ' + aspect);
      }, function (merger) {
        return merger(values, aspect);
      });
    });
    var consolidated = $_6rmcx0xsjeajomqm.consolidate(modifications, {});
    return consolidated.map($_zcg1fyhjeajomu1.nu);
  };
  var $_63t0dk130jeajondh = { combine: combine$1 };

  var sortKeys = function (label, keyName, array, order) {
    var sliced = array.slice(0);
    try {
      var sorted = sliced.sort(function (a, b) {
        var aKey = a[keyName]();
        var bKey = b[keyName]();
        var aIndex = order.indexOf(aKey);
        var bIndex = order.indexOf(bKey);
        if (aIndex === -1)
          throw new Error('The ordering for ' + label + ' does not have an entry for ' + aKey + '.\nOrder specified: ' + $_ax19tpydjeajomtj.stringify(order, null, 2));
        if (bIndex === -1)
          throw new Error('The ordering for ' + label + ' does not have an entry for ' + bKey + '.\nOrder specified: ' + $_ax19tpydjeajomtj.stringify(order, null, 2));
        if (aIndex < bIndex)
          return -1;
        else if (bIndex < aIndex)
          return 1;
        else
          return 0;
      });
      return Result.value(sorted);
    } catch (err) {
      return Result.error([err]);
    }
  };
  var $_3eqq0h133jeajone3 = { sortKeys: sortKeys };

  var nu$7 = function (handler, purpose) {
    return {
      handler: handler,
      purpose: $_ddy4s3wjjeajomls.constant(purpose)
    };
  };
  var curryArgs = function (descHandler, extraArgs) {
    return {
      handler: $_ddy4s3wjjeajomls.curry.apply(undefined, [descHandler.handler].concat(extraArgs)),
      purpose: descHandler.purpose
    };
  };
  var getHandler = function (descHandler) {
    return descHandler.handler;
  };
  var $_at88ae134jeajone6 = {
    nu: nu$7,
    curryArgs: curryArgs,
    getHandler: getHandler
  };

  var behaviourTuple = function (name, handler) {
    return {
      name: $_ddy4s3wjjeajomls.constant(name),
      handler: $_ddy4s3wjjeajomls.constant(handler)
    };
  };
  var nameToHandlers = function (behaviours, info) {
    var r = {};
    $_5r3pikwsjeajommo.each(behaviours, function (behaviour) {
      r[behaviour.name()] = behaviour.handlers(info);
    });
    return r;
  };
  var groupByEvents = function (info, behaviours, base) {
    var behaviourEvents = $_2yrejjwyjeajomn9.deepMerge(base, nameToHandlers(behaviours, info));
    return $_dpeq15131jeajondq.byInnerKey(behaviourEvents, behaviourTuple);
  };
  var combine$2 = function (info, eventOrder, behaviours, base) {
    var byEventName = groupByEvents(info, behaviours, base);
    return combineGroups(byEventName, eventOrder);
  };
  var assemble = function (rawHandler) {
    var handler = $_8ilecey6jeajomsc.read(rawHandler);
    return function (component, simulatedEvent) {
      var args = Array.prototype.slice.call(arguments, 0);
      if (handler.abort.apply(undefined, args)) {
        simulatedEvent.stop();
      } else if (handler.can.apply(undefined, args)) {
        handler.run.apply(undefined, args);
      }
    };
  };
  var missingOrderError = function (eventName, tuples) {
    return Result.error(['The event (' + eventName + ') has more than one behaviour that listens to it.\nWhen this occurs, you must ' + 'specify an event ordering for the behaviours in your spec (e.g. [ "listing", "toggling" ]).\nThe behaviours that ' + 'can trigger it are: ' + $_ax19tpydjeajomtj.stringify($_5r3pikwsjeajommo.map(tuples, function (c) {
        return c.name();
      }), null, 2)]);
  };
  var fuse$1 = function (tuples, eventOrder, eventName) {
    var order = eventOrder[eventName];
    if (!order)
      return missingOrderError(eventName, tuples);
    else
      return $_3eqq0h133jeajone3.sortKeys('Event: ' + eventName, 'name', tuples, order).map(function (sortedTuples) {
        var handlers = $_5r3pikwsjeajommo.map(sortedTuples, function (tuple) {
          return tuple.handler();
        });
        return $_8ilecey6jeajomsc.fuse(handlers);
      });
  };
  var combineGroups = function (byEventName, eventOrder) {
    var r = $_9s6ha1x0jeajomnc.mapToArray(byEventName, function (tuples, eventName) {
      var combined = tuples.length === 1 ? Result.value(tuples[0].handler()) : fuse$1(tuples, eventOrder, eventName);
      return combined.map(function (handler) {
        var assembled = assemble(handler);
        var purpose = tuples.length > 1 ? $_5r3pikwsjeajommo.filter(eventOrder, function (o) {
          return $_5r3pikwsjeajommo.contains(tuples, function (t) {
            return t.name() === o;
          });
        }).join(' > ') : tuples[0].name();
        return $_6rmcx0xsjeajomqm.wrap(eventName, $_at88ae134jeajone6.nu(assembled, purpose));
      });
    });
    return $_6rmcx0xsjeajomqm.consolidate(r, {});
  };
  var $_61guiq132jeajondu = { combine: combine$2 };

  var toInfo = function (spec) {
    return $_8qt2pyyejeajomtl.asStruct('custom.definition', $_8qt2pyyejeajomtl.objOfOnly([
      $_8qbqu2y7jeajomsl.field('dom', 'dom', $_6n8cmyy8jeajomsp.strict(), $_8qt2pyyejeajomtl.objOfOnly([
        $_8qbqu2y7jeajomsl.strict('tag'),
        $_8qbqu2y7jeajomsl.defaulted('styles', {}),
        $_8qbqu2y7jeajomsl.defaulted('classes', []),
        $_8qbqu2y7jeajomsl.defaulted('attributes', {}),
        $_8qbqu2y7jeajomsl.option('value'),
        $_8qbqu2y7jeajomsl.option('innerHtml')
      ])),
      $_8qbqu2y7jeajomsl.strict('components'),
      $_8qbqu2y7jeajomsl.strict('uid'),
      $_8qbqu2y7jeajomsl.defaulted('events', {}),
      $_8qbqu2y7jeajomsl.defaulted('apis', $_ddy4s3wjjeajomls.constant({})),
      $_8qbqu2y7jeajomsl.field('eventOrder', 'eventOrder', $_6n8cmyy8jeajomsp.mergeWith({
        'alloy.execute': [
          'disabling',
          'alloy.base.behaviour',
          'toggling'
        ],
        'alloy.focus': [
          'alloy.base.behaviour',
          'focusing',
          'keying'
        ],
        'alloy.system.init': [
          'alloy.base.behaviour',
          'disabling',
          'toggling',
          'representing'
        ],
        'input': [
          'alloy.base.behaviour',
          'representing',
          'streaming',
          'invalidating'
        ],
        'alloy.system.detached': [
          'alloy.base.behaviour',
          'representing'
        ]
      }), $_8qt2pyyejeajomtl.anyValue()),
      $_8qbqu2y7jeajomsl.option('domModification'),
      $_apbxenz6jeajomvz.snapshot('originalSpec'),
      $_8qbqu2y7jeajomsl.defaulted('debug.sketcher', 'unknown')
    ]), spec);
  };
  var getUid = function (info) {
    return $_6rmcx0xsjeajomqm.wrap($_9nl78t10yjeajon3t.idAttr(), info.uid());
  };
  var toDefinition = function (info) {
    var base = {
      tag: info.dom().tag(),
      classes: info.dom().classes(),
      attributes: $_2yrejjwyjeajomn9.deepMerge(getUid(info), info.dom().attributes()),
      styles: info.dom().styles(),
      domChildren: $_5r3pikwsjeajommo.map(info.components(), function (comp) {
        return comp.element();
      })
    };
    return $_6vb723yijeajomua.nu($_2yrejjwyjeajomn9.deepMerge(base, info.dom().innerHtml().map(function (h) {
      return $_6rmcx0xsjeajomqm.wrap('innerHtml', h);
    }).getOr({}), info.dom().value().map(function (h) {
      return $_6rmcx0xsjeajomqm.wrap('value', h);
    }).getOr({})));
  };
  var toModification = function (info) {
    return info.domModification().fold(function () {
      return $_zcg1fyhjeajomu1.nu({});
    }, $_zcg1fyhjeajomu1.nu);
  };
  var toApis = function (info) {
    return info.apis();
  };
  var toEvents = function (info) {
    return info.events();
  };
  var $_aqhi3g135jeajone9 = {
    toInfo: toInfo,
    toDefinition: toDefinition,
    toModification: toModification,
    toApis: toApis,
    toEvents: toEvents
  };

  var add$3 = function (element, classes) {
    $_5r3pikwsjeajommo.each(classes, function (x) {
      $_65t2ydynjeajomul.add(element, x);
    });
  };
  var remove$6 = function (element, classes) {
    $_5r3pikwsjeajommo.each(classes, function (x) {
      $_65t2ydynjeajomul.remove(element, x);
    });
  };
  var toggle$3 = function (element, classes) {
    $_5r3pikwsjeajommo.each(classes, function (x) {
      $_65t2ydynjeajomul.toggle(element, x);
    });
  };
  var hasAll = function (element, classes) {
    return $_5r3pikwsjeajommo.forall(classes, function (clazz) {
      return $_65t2ydynjeajomul.has(element, clazz);
    });
  };
  var hasAny = function (element, classes) {
    return $_5r3pikwsjeajommo.exists(classes, function (clazz) {
      return $_65t2ydynjeajomul.has(element, clazz);
    });
  };
  var getNative = function (element) {
    var classList = element.dom().classList;
    var r = new Array(classList.length);
    for (var i = 0; i < classList.length; i++) {
      r[i] = classList.item(i);
    }
    return r;
  };
  var get$10 = function (element) {
    return $_cadkw7ypjeajomun.supports(element) ? getNative(element) : $_cadkw7ypjeajomun.get(element);
  };
  var $_9k06sz137jeajoneu = {
    add: add$3,
    remove: remove$6,
    toggle: toggle$3,
    hasAll: hasAll,
    hasAny: hasAny,
    get: get$10
  };

  var getChildren = function (definition) {
    if (definition.domChildren().isSome() && definition.defChildren().isSome()) {
      throw new Error('Cannot specify children and child specs! Must be one or the other.\nDef: ' + $_6vb723yijeajomua.defToStr(definition));
    } else {
      return definition.domChildren().fold(function () {
        var defChildren = definition.defChildren().getOr([]);
        return $_5r3pikwsjeajommo.map(defChildren, renderDef);
      }, function (domChildren) {
        return domChildren;
      });
    }
  };
  var renderToDom = function (definition) {
    var subject = $_8icwg5xfjeajomp0.fromTag(definition.tag());
    $_a7s3osxrjeajomqe.setAll(subject, definition.attributes().getOr({}));
    $_9k06sz137jeajoneu.add(subject, definition.classes().getOr([]));
    $_64rfd7103jeajomzb.setAll(subject, definition.styles().getOr({}));
    $_7pjouqxojeajomq7.set(subject, definition.innerHtml().getOr(''));
    var children = getChildren(definition);
    $_98m20vxijeajomp8.append(subject, children);
    definition.value().each(function (value) {
      $_dp4jtt12ejeajon9o.set(subject, value);
    });
    return subject;
  };
  var renderDef = function (spec) {
    var definition = $_6vb723yijeajomua.nu(spec);
    return renderToDom(definition);
  };
  var $_7ctd3136jeajonei = { renderToDom: renderToDom };

  var build = function (spec) {
    var getMe = function () {
      return me;
    };
    var systemApi = Cell(NoContextApi(getMe));
    var info = $_8qt2pyyejeajomtl.getOrDie($_aqhi3g135jeajone9.toInfo($_2yrejjwyjeajomn9.deepMerge(spec, { behaviours: undefined })));
    var bBlob = $_cisj2i12vjeajoncs.generate(spec);
    var bList = $_8t9mm712wjeajoncw.getBehaviours(bBlob);
    var bData = $_8t9mm712wjeajoncw.getData(bBlob);
    var definition = $_aqhi3g135jeajone9.toDefinition(info);
    var baseModification = { 'alloy.base.modification': $_aqhi3g135jeajone9.toModification(info) };
    var modification = $_63t0dk130jeajondh.combine(bData, baseModification, bList, definition).getOrDie();
    var modDefinition = $_zcg1fyhjeajomu1.merge(definition, modification);
    var item = $_7ctd3136jeajonei.renderToDom(modDefinition);
    var baseEvents = { 'alloy.base.behaviour': $_aqhi3g135jeajone9.toEvents(info) };
    var events = $_61guiq132jeajondu.combine(bData, info.eventOrder(), bList, baseEvents).getOrDie();
    var subcomponents = Cell(info.components());
    var connect = function (newApi) {
      systemApi.set(newApi);
    };
    var disconnect = function () {
      systemApi.set(NoContextApi(getMe));
    };
    var syncComponents = function () {
      var children = $_6xy0ax3jeajomo0.children(item);
      var subs = $_5r3pikwsjeajommo.bind(children, function (child) {
        return systemApi.get().getByDom(child).fold(function () {
          return [];
        }, function (c) {
          return [c];
        });
      });
      subcomponents.set(subs);
    };
    var config = function (behaviour) {
      if (behaviour === $_ebzw1210qjeajon2a.apiConfig())
        return info.apis();
      var b = bData;
      var f = $_6vgadjwzjeajomnb.isFunction(b[behaviour.name()]) ? b[behaviour.name()] : function () {
        throw new Error('Could not find ' + behaviour.name() + ' in ' + $_ax19tpydjeajomtj.stringify(spec, null, 2));
      };
      return f();
    };
    var hasConfigured = function (behaviour) {
      return $_6vgadjwzjeajomnb.isFunction(bData[behaviour.name()]);
    };
    var readState = function (behaviourName) {
      return bData[behaviourName]().map(function (b) {
        return b.state.readState();
      }).getOr('not enabled');
    };
    var me = ComponentApi({
      getSystem: systemApi.get,
      config: config,
      hasConfigured: hasConfigured,
      spec: $_ddy4s3wjjeajomls.constant(spec),
      readState: readState,
      connect: connect,
      disconnect: disconnect,
      element: $_ddy4s3wjjeajomls.constant(item),
      syncComponents: syncComponents,
      components: subcomponents.get,
      events: $_ddy4s3wjjeajomls.constant(events)
    });
    return me;
  };
  var $_16xkxv12ujeajonch = { build: build };

  var isRecursive = function (component, originator, target) {
    return $_a12rd3x9jeajomoj.eq(originator, component.element()) && !$_a12rd3x9jeajomoj.eq(originator, target);
  };
  var $_1lc6x5138jeajonex = {
    events: $_2vhl2dy4jeajoms5.derive([$_2vhl2dy4jeajoms5.can($_bckj1uwhjeajomli.focus(), function (component, simulatedEvent) {
        var originator = simulatedEvent.event().originator();
        var target = simulatedEvent.event().target();
        if (isRecursive(component, originator, target)) {
          console.warn($_bckj1uwhjeajomli.focus() + ' did not get interpreted by the desired target. ' + '\nOriginator: ' + $_74y4xnxmjeajomq3.element(originator) + '\nTarget: ' + $_74y4xnxmjeajomq3.element(target) + '\nCheck the ' + $_bckj1uwhjeajomli.focus() + ' event handlers');
          return false;
        } else {
          return true;
        }
      })])
  };

  var make$1 = function (spec) {
    return spec;
  };
  var $_gjawhw139jeajonf0 = { make: make$1 };

  var buildSubcomponents = function (spec) {
    var components = $_6rmcx0xsjeajomqm.readOr('components', [])(spec);
    return $_5r3pikwsjeajommo.map(components, build$1);
  };
  var buildFromSpec = function (userSpec) {
    var spec = $_gjawhw139jeajonf0.make(userSpec);
    var components = buildSubcomponents(spec);
    var completeSpec = $_2yrejjwyjeajomn9.deepMerge($_1lc6x5138jeajonex, spec, $_6rmcx0xsjeajomqm.wrap('components', components));
    return Result.value($_16xkxv12ujeajonch.build(completeSpec));
  };
  var text = function (textContent) {
    var element = $_8icwg5xfjeajomp0.fromText(textContent);
    return external({ element: element });
  };
  var external = function (spec) {
    var extSpec = $_8qt2pyyejeajomtl.asStructOrDie('external.component', $_8qt2pyyejeajomtl.objOfOnly([
      $_8qbqu2y7jeajomsl.strict('element'),
      $_8qbqu2y7jeajomsl.option('uid')
    ]), spec);
    var systemApi = Cell(NoContextApi());
    var connect = function (newApi) {
      systemApi.set(newApi);
    };
    var disconnect = function () {
      systemApi.set(NoContextApi(function () {
        return me;
      }));
    };
    extSpec.uid().each(function (uid) {
      $_dbn7mh10xjeajon3m.writeOnly(extSpec.element(), uid);
    });
    var me = ComponentApi({
      getSystem: systemApi.get,
      config: Option.none,
      hasConfigured: $_ddy4s3wjjeajomls.constant(false),
      connect: connect,
      disconnect: disconnect,
      element: $_ddy4s3wjjeajomls.constant(extSpec.element()),
      spec: $_ddy4s3wjjeajomls.constant(spec),
      readState: $_ddy4s3wjjeajomls.constant('No state'),
      syncComponents: $_ddy4s3wjjeajomls.noop,
      components: $_ddy4s3wjjeajomls.constant([]),
      events: $_ddy4s3wjjeajomls.constant({})
    });
    return $_ebzw1210qjeajon2a.premade(me);
  };
  var build$1 = function (rawUserSpec) {
    return $_ebzw1210qjeajon2a.getPremade(rawUserSpec).fold(function () {
      var userSpecWithUid = $_2yrejjwyjeajomn9.deepMerge({ uid: $_dbn7mh10xjeajon3m.generate('') }, rawUserSpec);
      return buildFromSpec(userSpecWithUid).getOrDie();
    }, function (prebuilt) {
      return prebuilt;
    });
  };
  var $_gcby0212tjeajonc2 = {
    build: build$1,
    premade: $_ebzw1210qjeajon2a.premade,
    external: external,
    text: text
  };

  var hoverEvent = 'alloy.item-hover';
  var focusEvent = 'alloy.item-focus';
  var onHover = function (item) {
    if ($_gc8hiiytjeajomut.search(item.element()).isNone() || Focusing.isFocused(item)) {
      if (!Focusing.isFocused(item))
        Focusing.focus(item);
      $_30e2nlwgjeajomlb.emitWith(item, hoverEvent, { item: item });
    }
  };
  var onFocus = function (item) {
    $_30e2nlwgjeajomlb.emitWith(item, focusEvent, { item: item });
  };
  var $_7dpr7a13djeajonfc = {
    hover: $_ddy4s3wjjeajomls.constant(hoverEvent),
    focus: $_ddy4s3wjjeajomls.constant(focusEvent),
    onHover: onHover,
    onFocus: onFocus
  };

  var builder = function (info) {
    return {
      dom: $_2yrejjwyjeajomn9.deepMerge(info.dom(), { attributes: { role: info.toggling().isSome() ? 'menuitemcheckbox' : 'menuitem' } }),
      behaviours: $_2yrejjwyjeajomn9.deepMerge($_cwu2vpy2jeajomrh.derive([
        info.toggling().fold(Toggling.revoke, function (tConfig) {
          return Toggling.config($_2yrejjwyjeajomn9.deepMerge({ aria: { mode: 'checked' } }, tConfig));
        }),
        Focusing.config({
          ignore: info.ignoreFocus(),
          onFocus: function (component) {
            $_7dpr7a13djeajonfc.onFocus(component);
          }
        }),
        Keying.config({ mode: 'execution' }),
        me.config({
          store: {
            mode: 'memory',
            initialValue: info.data()
          }
        })
      ]), info.itemBehaviours()),
      events: $_2vhl2dy4jeajoms5.derive([
        $_2vhl2dy4jeajoms5.runWithTarget($_bckj1uwhjeajomli.tapOrClick(), $_30e2nlwgjeajomlb.emitExecute),
        $_2vhl2dy4jeajoms5.cutter($_9ndt8owijeajomlo.mousedown()),
        $_2vhl2dy4jeajoms5.run($_9ndt8owijeajomlo.mouseover(), $_7dpr7a13djeajonfc.onHover),
        $_2vhl2dy4jeajoms5.run($_bckj1uwhjeajomli.focusItem(), Focusing.focus)
      ]),
      components: info.components(),
      domModification: info.domModification()
    };
  };
  var schema$10 = [
    $_8qbqu2y7jeajomsl.strict('data'),
    $_8qbqu2y7jeajomsl.strict('components'),
    $_8qbqu2y7jeajomsl.strict('dom'),
    $_8qbqu2y7jeajomsl.option('toggling'),
    $_8qbqu2y7jeajomsl.defaulted('itemBehaviours', {}),
    $_8qbqu2y7jeajomsl.defaulted('ignoreFocus', false),
    $_8qbqu2y7jeajomsl.defaulted('domModification', {}),
    $_apbxenz6jeajomvz.output('builder', builder)
  ];

  var builder$1 = function (detail) {
    return {
      dom: detail.dom(),
      components: detail.components(),
      events: $_2vhl2dy4jeajoms5.derive([$_2vhl2dy4jeajoms5.stopper($_bckj1uwhjeajomli.focusItem())])
    };
  };
  var schema$11 = [
    $_8qbqu2y7jeajomsl.strict('dom'),
    $_8qbqu2y7jeajomsl.strict('components'),
    $_apbxenz6jeajomvz.output('builder', builder$1)
  ];

  var owner$2 = 'item-widget';
  var partTypes = [$_7m3s6v10vjeajon34.required({
      name: 'widget',
      overrides: function (detail) {
        return {
          behaviours: $_cwu2vpy2jeajomrh.derive([me.config({
              store: {
                mode: 'manual',
                getValue: function (component) {
                  return detail.data();
                },
                setValue: function () {
                }
              }
            })])
        };
      }
    })];
  var $_3jx3ly13gjeajonfn = {
    owner: $_ddy4s3wjjeajomls.constant(owner$2),
    parts: $_ddy4s3wjjeajomls.constant(partTypes)
  };

  var builder$2 = function (info) {
    var subs = $_opzv410tjeajon2o.substitutes($_3jx3ly13gjeajonfn.owner(), info, $_3jx3ly13gjeajonfn.parts());
    var components = $_opzv410tjeajon2o.components($_3jx3ly13gjeajonfn.owner(), info, subs.internals());
    var focusWidget = function (component) {
      return $_opzv410tjeajon2o.getPart(component, info, 'widget').map(function (widget) {
        Keying.focusIn(widget);
        return widget;
      });
    };
    var onHorizontalArrow = function (component, simulatedEvent) {
      return $_248cfh108jeajomzy.inside(simulatedEvent.event().target()) ? Option.none() : function () {
        if (info.autofocus()) {
          simulatedEvent.setSource(component.element());
          return Option.none();
        } else {
          return Option.none();
        }
      }();
    };
    return $_2yrejjwyjeajomn9.deepMerge({
      dom: info.dom(),
      components: components,
      domModification: info.domModification(),
      events: $_2vhl2dy4jeajoms5.derive([
        $_2vhl2dy4jeajoms5.runOnExecute(function (component, simulatedEvent) {
          focusWidget(component).each(function (widget) {
            simulatedEvent.stop();
          });
        }),
        $_2vhl2dy4jeajoms5.run($_9ndt8owijeajomlo.mouseover(), $_7dpr7a13djeajonfc.onHover),
        $_2vhl2dy4jeajoms5.run($_bckj1uwhjeajomli.focusItem(), function (component, simulatedEvent) {
          if (info.autofocus())
            focusWidget(component);
          else
            Focusing.focus(component);
        })
      ]),
      behaviours: $_cwu2vpy2jeajomrh.derive([
        me.config({
          store: {
            mode: 'memory',
            initialValue: info.data()
          }
        }),
        Focusing.config({
          onFocus: function (component) {
            $_7dpr7a13djeajonfc.onFocus(component);
          }
        }),
        Keying.config({
          mode: 'special',
          onLeft: onHorizontalArrow,
          onRight: onHorizontalArrow,
          onEscape: function (component, simulatedEvent) {
            if (!Focusing.isFocused(component) && !info.autofocus()) {
              Focusing.focus(component);
              return Option.some(true);
            } else if (info.autofocus()) {
              simulatedEvent.setSource(component.element());
              return Option.none();
            } else {
              return Option.none();
            }
          }
        })
      ])
    });
  };
  var schema$12 = [
    $_8qbqu2y7jeajomsl.strict('uid'),
    $_8qbqu2y7jeajomsl.strict('data'),
    $_8qbqu2y7jeajomsl.strict('components'),
    $_8qbqu2y7jeajomsl.strict('dom'),
    $_8qbqu2y7jeajomsl.defaulted('autofocus', false),
    $_8qbqu2y7jeajomsl.defaulted('domModification', {}),
    $_opzv410tjeajon2o.defaultUidsSchema($_3jx3ly13gjeajonfn.parts()),
    $_apbxenz6jeajomvz.output('builder', builder$2)
  ];

  var itemSchema$1 = $_8qt2pyyejeajomtl.choose('type', {
    widget: schema$12,
    item: schema$10,
    separator: schema$11
  });
  var configureGrid = function (detail, movementInfo) {
    return {
      mode: 'flatgrid',
      selector: '.' + detail.markers().item(),
      initSize: {
        numColumns: movementInfo.initSize().numColumns(),
        numRows: movementInfo.initSize().numRows()
      },
      focusManager: detail.focusManager()
    };
  };
  var configureMenu = function (detail, movementInfo) {
    return {
      mode: 'menu',
      selector: '.' + detail.markers().item(),
      moveOnTab: movementInfo.moveOnTab(),
      focusManager: detail.focusManager()
    };
  };
  var parts = [$_7m3s6v10vjeajon34.group({
      factory: {
        sketch: function (spec) {
          var itemInfo = $_8qt2pyyejeajomtl.asStructOrDie('menu.spec item', itemSchema$1, spec);
          return itemInfo.builder()(itemInfo);
        }
      },
      name: 'items',
      unit: 'item',
      defaults: function (detail, u) {
        var fallbackUid = $_dbn7mh10xjeajon3m.generate('');
        return $_2yrejjwyjeajomn9.deepMerge({ uid: fallbackUid }, u);
      },
      overrides: function (detail, u) {
        return {
          type: u.type,
          ignoreFocus: detail.fakeFocus(),
          domModification: { classes: [detail.markers().item()] }
        };
      }
    })];
  var schema$13 = [
    $_8qbqu2y7jeajomsl.strict('value'),
    $_8qbqu2y7jeajomsl.strict('items'),
    $_8qbqu2y7jeajomsl.strict('dom'),
    $_8qbqu2y7jeajomsl.strict('components'),
    $_8qbqu2y7jeajomsl.defaulted('eventOrder', {}),
    $_2ioems10ojeajon1y.field('menuBehaviours', [
      Highlighting,
      me,
      Composing,
      Keying
    ]),
    $_8qbqu2y7jeajomsl.defaultedOf('movement', {
      mode: 'menu',
      moveOnTab: true
    }, $_8qt2pyyejeajomtl.choose('mode', {
      grid: [
        $_apbxenz6jeajomvz.initSize(),
        $_apbxenz6jeajomvz.output('config', configureGrid)
      ],
      menu: [
        $_8qbqu2y7jeajomsl.defaulted('moveOnTab', true),
        $_apbxenz6jeajomvz.output('config', configureMenu)
      ]
    })),
    $_apbxenz6jeajomvz.itemMarkers(),
    $_8qbqu2y7jeajomsl.defaulted('fakeFocus', false),
    $_8qbqu2y7jeajomsl.defaulted('focusManager', $_6ixkh6zrjeajomy9.dom()),
    $_apbxenz6jeajomvz.onHandler('onHighlight')
  ];
  var $_757ntk13bjeajonf1 = {
    name: $_ddy4s3wjjeajomls.constant('Menu'),
    schema: $_ddy4s3wjjeajomls.constant(schema$13),
    parts: $_ddy4s3wjjeajomls.constant(parts)
  };

  var focusEvent$1 = 'alloy.menu-focus';
  var $_1q6dsb13ijeajonfu = { focus: $_ddy4s3wjjeajomls.constant(focusEvent$1) };

  var make$2 = function (detail, components, spec, externals) {
    return $_2yrejjwyjeajomn9.deepMerge({
      dom: $_2yrejjwyjeajomn9.deepMerge(detail.dom(), { attributes: { role: 'menu' } }),
      uid: detail.uid(),
      behaviours: $_2yrejjwyjeajomn9.deepMerge($_cwu2vpy2jeajomrh.derive([
        Highlighting.config({
          highlightClass: detail.markers().selectedItem(),
          itemClass: detail.markers().item(),
          onHighlight: detail.onHighlight()
        }),
        me.config({
          store: {
            mode: 'memory',
            initialValue: detail.value()
          }
        }),
        Composing.config({ find: $_ddy4s3wjjeajomls.identity }),
        Keying.config(detail.movement().config()(detail, detail.movement()))
      ]), $_2ioems10ojeajon1y.get(detail.menuBehaviours())),
      events: $_2vhl2dy4jeajoms5.derive([
        $_2vhl2dy4jeajoms5.run($_7dpr7a13djeajonfc.focus(), function (menu, simulatedEvent) {
          var event = simulatedEvent.event();
          menu.getSystem().getByDom(event.target()).each(function (item) {
            Highlighting.highlight(menu, item);
            simulatedEvent.stop();
            $_30e2nlwgjeajomlb.emitWith(menu, $_1q6dsb13ijeajonfu.focus(), {
              menu: menu,
              item: item
            });
          });
        }),
        $_2vhl2dy4jeajoms5.run($_7dpr7a13djeajonfc.hover(), function (menu, simulatedEvent) {
          var item = simulatedEvent.event().item();
          Highlighting.highlight(menu, item);
        })
      ]),
      components: components,
      eventOrder: detail.eventOrder()
    });
  };
  var $_15pdtg13hjeajonfq = { make: make$2 };

  var Menu = $_fp614n10pjeajon23.composite({
    name: 'Menu',
    configFields: $_757ntk13bjeajonf1.schema(),
    partFields: $_757ntk13bjeajonf1.parts(),
    factory: $_15pdtg13hjeajonfq.make
  });

  var preserve$2 = function (f, container) {
    var ownerDoc = $_6xy0ax3jeajomo0.owner(container);
    var refocus = $_gc8hiiytjeajomut.active(ownerDoc).bind(function (focused) {
      var hasFocus = function (elem) {
        return $_a12rd3x9jeajomoj.eq(focused, elem);
      };
      return hasFocus(container) ? Option.some(container) : $_6tkhs7yvjeajomuy.descendant(container, hasFocus);
    });
    var result = f(container);
    refocus.each(function (oldFocus) {
      $_gc8hiiytjeajomut.active(ownerDoc).filter(function (newFocus) {
        return $_a12rd3x9jeajomoj.eq(newFocus, oldFocus);
      }).orThunk(function () {
        $_gc8hiiytjeajomut.focus(oldFocus);
      });
    });
    return result;
  };
  var $_f68cv613mjeajong8 = { preserve: preserve$2 };

  var set$7 = function (component, replaceConfig, replaceState, data) {
    $_f0icc0x1jeajomnf.detachChildren(component);
    $_f68cv613mjeajong8.preserve(function () {
      var children = $_5r3pikwsjeajommo.map(data, component.getSystem().build);
      $_5r3pikwsjeajommo.each(children, function (l) {
        $_f0icc0x1jeajomnf.attach(component, l);
      });
    }, component.element());
  };
  var insert = function (component, replaceConfig, insertion, childSpec) {
    var child = component.getSystem().build(childSpec);
    $_f0icc0x1jeajomnf.attachWith(component, child, insertion);
  };
  var append$2 = function (component, replaceConfig, replaceState, appendee) {
    insert(component, replaceConfig, $_efdcljx2jeajomny.append, appendee);
  };
  var prepend$2 = function (component, replaceConfig, replaceState, prependee) {
    insert(component, replaceConfig, $_efdcljx2jeajomny.prepend, prependee);
  };
  var remove$7 = function (component, replaceConfig, replaceState, removee) {
    var children = contents(component, replaceConfig);
    var foundChild = $_5r3pikwsjeajommo.find(children, function (child) {
      return $_a12rd3x9jeajomoj.eq(removee.element(), child.element());
    });
    foundChild.each($_f0icc0x1jeajomnf.detach);
  };
  var contents = function (component, replaceConfig) {
    return component.components();
  };
  var $_b2711d13ljeajong3 = {
    append: append$2,
    prepend: prepend$2,
    remove: remove$7,
    set: set$7,
    contents: contents
  };

  var Replacing = $_cwu2vpy2jeajomrh.create({
    fields: [],
    name: 'replacing',
    apis: $_b2711d13ljeajong3
  });

  var transpose = function (obj) {
    return $_9s6ha1x0jeajomnc.tupleMap(obj, function (v, k) {
      return {
        k: v,
        v: k
      };
    });
  };
  var trace = function (items, byItem, byMenu, finish) {
    return $_6rmcx0xsjeajomqm.readOptFrom(byMenu, finish).bind(function (triggerItem) {
      return $_6rmcx0xsjeajomqm.readOptFrom(items, triggerItem).bind(function (triggerMenu) {
        var rest = trace(items, byItem, byMenu, triggerMenu);
        return Option.some([triggerMenu].concat(rest));
      });
    }).getOr([]);
  };
  var generate$5 = function (menus, expansions) {
    var items = {};
    $_9s6ha1x0jeajomnc.each(menus, function (menuItems, menu) {
      $_5r3pikwsjeajommo.each(menuItems, function (item) {
        items[item] = menu;
      });
    });
    var byItem = expansions;
    var byMenu = transpose(expansions);
    var menuPaths = $_9s6ha1x0jeajomnc.map(byMenu, function (triggerItem, submenu) {
      return [submenu].concat(trace(items, byItem, byMenu, submenu));
    });
    return $_9s6ha1x0jeajomnc.map(items, function (path) {
      return $_6rmcx0xsjeajomqm.readOptFrom(menuPaths, path).getOr([path]);
    });
  };
  var $_8i81vx13pjeajonh9 = { generate: generate$5 };

  function LayeredState () {
    var expansions = Cell({});
    var menus = Cell({});
    var paths = Cell({});
    var primary = Cell(Option.none());
    var toItemValues = Cell($_ddy4s3wjjeajomls.constant([]));
    var clear = function () {
      expansions.set({});
      menus.set({});
      paths.set({});
      primary.set(Option.none());
    };
    var isClear = function () {
      return primary.get().isNone();
    };
    var setContents = function (sPrimary, sMenus, sExpansions, sToItemValues) {
      primary.set(Option.some(sPrimary));
      expansions.set(sExpansions);
      menus.set(sMenus);
      toItemValues.set(sToItemValues);
      var menuValues = sToItemValues(sMenus);
      var sPaths = $_8i81vx13pjeajonh9.generate(menuValues, sExpansions);
      paths.set(sPaths);
    };
    var expand = function (itemValue) {
      return $_6rmcx0xsjeajomqm.readOptFrom(expansions.get(), itemValue).map(function (menu) {
        var current = $_6rmcx0xsjeajomqm.readOptFrom(paths.get(), itemValue).getOr([]);
        return [menu].concat(current);
      });
    };
    var collapse = function (itemValue) {
      return $_6rmcx0xsjeajomqm.readOptFrom(paths.get(), itemValue).bind(function (path) {
        return path.length > 1 ? Option.some(path.slice(1)) : Option.none();
      });
    };
    var refresh = function (itemValue) {
      return $_6rmcx0xsjeajomqm.readOptFrom(paths.get(), itemValue);
    };
    var lookupMenu = function (menuValue) {
      return $_6rmcx0xsjeajomqm.readOptFrom(menus.get(), menuValue);
    };
    var otherMenus = function (path) {
      var menuValues = toItemValues.get()(menus.get());
      return $_5r3pikwsjeajommo.difference($_9s6ha1x0jeajomnc.keys(menuValues), path);
    };
    var getPrimary = function () {
      return primary.get().bind(lookupMenu);
    };
    var getMenus = function () {
      return menus.get();
    };
    return {
      setContents: setContents,
      expand: expand,
      refresh: refresh,
      collapse: collapse,
      lookupMenu: lookupMenu,
      otherMenus: otherMenus,
      getPrimary: getPrimary,
      getMenus: getMenus,
      clear: clear,
      isClear: isClear
    };
  }

  var make$3 = function (detail, rawUiSpec) {
    var buildMenus = function (container, menus) {
      return $_9s6ha1x0jeajomnc.map(menus, function (spec, name) {
        var data = Menu.sketch($_2yrejjwyjeajomn9.deepMerge(spec, {
          value: name,
          items: spec.items,
          markers: $_6rmcx0xsjeajomqm.narrow(rawUiSpec.markers, [
            'item',
            'selectedItem'
          ]),
          fakeFocus: detail.fakeFocus(),
          onHighlight: detail.onHighlight(),
          focusManager: detail.fakeFocus() ? $_6ixkh6zrjeajomy9.highlights() : $_6ixkh6zrjeajomy9.dom()
        }));
        return container.getSystem().build(data);
      });
    };
    var state = LayeredState();
    var setup = function (container) {
      var componentMap = buildMenus(container, detail.data().menus());
      state.setContents(detail.data().primary(), componentMap, detail.data().expansions(), function (sMenus) {
        return toMenuValues(container, sMenus);
      });
      return state.getPrimary();
    };
    var getItemValue = function (item) {
      return me.getValue(item).value;
    };
    var toMenuValues = function (container, sMenus) {
      return $_9s6ha1x0jeajomnc.map(detail.data().menus(), function (data, menuName) {
        return $_5r3pikwsjeajommo.bind(data.items, function (item) {
          return item.type === 'separator' ? [] : [item.data.value];
        });
      });
    };
    var setActiveMenu = function (container, menu) {
      Highlighting.highlight(container, menu);
      Highlighting.getHighlighted(menu).orThunk(function () {
        return Highlighting.getFirst(menu);
      }).each(function (item) {
        $_30e2nlwgjeajomlb.dispatch(container, item.element(), $_bckj1uwhjeajomli.focusItem());
      });
    };
    var getMenus = function (state, menuValues) {
      return $_62h1oqy0jeajomre.cat($_5r3pikwsjeajommo.map(menuValues, state.lookupMenu));
    };
    var updateMenuPath = function (container, state, path) {
      return Option.from(path[0]).bind(state.lookupMenu).map(function (activeMenu) {
        var rest = getMenus(state, path.slice(1));
        $_5r3pikwsjeajommo.each(rest, function (r) {
          $_65t2ydynjeajomul.add(r.element(), detail.markers().backgroundMenu());
        });
        if (!$_6p2xg0xjjeajompa.inBody(activeMenu.element())) {
          Replacing.append(container, $_gcby0212tjeajonc2.premade(activeMenu));
        }
        $_9k06sz137jeajoneu.remove(activeMenu.element(), [detail.markers().backgroundMenu()]);
        setActiveMenu(container, activeMenu);
        var others = getMenus(state, state.otherMenus(path));
        $_5r3pikwsjeajommo.each(others, function (o) {
          $_9k06sz137jeajoneu.remove(o.element(), [detail.markers().backgroundMenu()]);
          if (!detail.stayInDom())
            Replacing.remove(container, o);
        });
        return activeMenu;
      });
    };
    var expandRight = function (container, item) {
      var value = getItemValue(item);
      return state.expand(value).bind(function (path) {
        Option.from(path[0]).bind(state.lookupMenu).each(function (activeMenu) {
          if (!$_6p2xg0xjjeajompa.inBody(activeMenu.element())) {
            Replacing.append(container, $_gcby0212tjeajonc2.premade(activeMenu));
          }
          detail.onOpenSubmenu()(container, item, activeMenu);
          Highlighting.highlightFirst(activeMenu);
        });
        return updateMenuPath(container, state, path);
      });
    };
    var collapseLeft = function (container, item) {
      var value = getItemValue(item);
      return state.collapse(value).bind(function (path) {
        return updateMenuPath(container, state, path).map(function (activeMenu) {
          detail.onCollapseMenu()(container, item, activeMenu);
          return activeMenu;
        });
      });
    };
    var updateView = function (container, item) {
      var value = getItemValue(item);
      return state.refresh(value).bind(function (path) {
        return updateMenuPath(container, state, path);
      });
    };
    var onRight = function (container, item) {
      return $_248cfh108jeajomzy.inside(item.element()) ? Option.none() : expandRight(container, item);
    };
    var onLeft = function (container, item) {
      return $_248cfh108jeajomzy.inside(item.element()) ? Option.none() : collapseLeft(container, item);
    };
    var onEscape = function (container, item) {
      return collapseLeft(container, item).orThunk(function () {
        return detail.onEscape()(container, item);
      });
    };
    var keyOnItem = function (f) {
      return function (container, simulatedEvent) {
        return $_3vna6mzxjeajomyv.closest(simulatedEvent.getSource(), '.' + detail.markers().item()).bind(function (target) {
          return container.getSystem().getByDom(target).bind(function (item) {
            return f(container, item);
          });
        });
      };
    };
    var events = $_2vhl2dy4jeajoms5.derive([
      $_2vhl2dy4jeajoms5.run($_1q6dsb13ijeajonfu.focus(), function (sandbox, simulatedEvent) {
        var menu = simulatedEvent.event().menu();
        Highlighting.highlight(sandbox, menu);
      }),
      $_2vhl2dy4jeajoms5.runOnExecute(function (sandbox, simulatedEvent) {
        var target = simulatedEvent.event().target();
        return sandbox.getSystem().getByDom(target).bind(function (item) {
          var itemValue = getItemValue(item);
          if (itemValue.indexOf('collapse-item') === 0) {
            return collapseLeft(sandbox, item);
          }
          return expandRight(sandbox, item).orThunk(function () {
            return detail.onExecute()(sandbox, item);
          });
        });
      }),
      $_2vhl2dy4jeajoms5.runOnAttached(function (container, simulatedEvent) {
        setup(container).each(function (primary) {
          Replacing.append(container, $_gcby0212tjeajonc2.premade(primary));
          if (detail.openImmediately()) {
            setActiveMenu(container, primary);
            detail.onOpenMenu()(container, primary);
          }
        });
      })
    ].concat(detail.navigateOnHover() ? [$_2vhl2dy4jeajoms5.run($_7dpr7a13djeajonfc.hover(), function (sandbox, simulatedEvent) {
        var item = simulatedEvent.event().item();
        updateView(sandbox, item);
        expandRight(sandbox, item);
        detail.onHover()(sandbox, item);
      })] : []));
    var collapseMenuApi = function (container) {
      Highlighting.getHighlighted(container).each(function (currentMenu) {
        Highlighting.getHighlighted(currentMenu).each(function (currentItem) {
          collapseLeft(container, currentItem);
        });
      });
    };
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      behaviours: $_2yrejjwyjeajomn9.deepMerge($_cwu2vpy2jeajomrh.derive([
        Keying.config({
          mode: 'special',
          onRight: keyOnItem(onRight),
          onLeft: keyOnItem(onLeft),
          onEscape: keyOnItem(onEscape),
          focusIn: function (container, keyInfo) {
            state.getPrimary().each(function (primary) {
              $_30e2nlwgjeajomlb.dispatch(container, primary.element(), $_bckj1uwhjeajomli.focusItem());
            });
          }
        }),
        Highlighting.config({
          highlightClass: detail.markers().selectedMenu(),
          itemClass: detail.markers().menu()
        }),
        Composing.config({
          find: function (container) {
            return Highlighting.getHighlighted(container);
          }
        }),
        Replacing.config({})
      ]), $_2ioems10ojeajon1y.get(detail.tmenuBehaviours())),
      eventOrder: detail.eventOrder(),
      apis: { collapseMenu: collapseMenuApi },
      events: events
    };
  };
  var $_4hg57t13njeajongi = {
    make: make$3,
    collapseItem: $_ddy4s3wjjeajomls.constant('collapse-item')
  };

  var tieredData = function (primary, menus, expansions) {
    return {
      primary: primary,
      menus: menus,
      expansions: expansions
    };
  };
  var singleData = function (name, menu) {
    return {
      primary: name,
      menus: $_6rmcx0xsjeajomqm.wrap(name, menu),
      expansions: {}
    };
  };
  var collapseItem = function (text) {
    return {
      value: $_cxs1c110rjeajon2f.generate($_4hg57t13njeajongi.collapseItem()),
      text: text
    };
  };
  var TieredMenu = $_fp614n10pjeajon23.single({
    name: 'TieredMenu',
    configFields: [
      $_apbxenz6jeajomvz.onStrictKeyboardHandler('onExecute'),
      $_apbxenz6jeajomvz.onStrictKeyboardHandler('onEscape'),
      $_apbxenz6jeajomvz.onStrictHandler('onOpenMenu'),
      $_apbxenz6jeajomvz.onStrictHandler('onOpenSubmenu'),
      $_apbxenz6jeajomvz.onHandler('onCollapseMenu'),
      $_8qbqu2y7jeajomsl.defaulted('openImmediately', true),
      $_8qbqu2y7jeajomsl.strictObjOf('data', [
        $_8qbqu2y7jeajomsl.strict('primary'),
        $_8qbqu2y7jeajomsl.strict('menus'),
        $_8qbqu2y7jeajomsl.strict('expansions')
      ]),
      $_8qbqu2y7jeajomsl.defaulted('fakeFocus', false),
      $_apbxenz6jeajomvz.onHandler('onHighlight'),
      $_apbxenz6jeajomvz.onHandler('onHover'),
      $_apbxenz6jeajomvz.tieredMenuMarkers(),
      $_8qbqu2y7jeajomsl.strict('dom'),
      $_8qbqu2y7jeajomsl.defaulted('navigateOnHover', true),
      $_8qbqu2y7jeajomsl.defaulted('stayInDom', false),
      $_2ioems10ojeajon1y.field('tmenuBehaviours', [
        Keying,
        Highlighting,
        Composing,
        Replacing
      ]),
      $_8qbqu2y7jeajomsl.defaulted('eventOrder', {})
    ],
    apis: {
      collapseMenu: function (apis, tmenu) {
        apis.collapseMenu(tmenu);
      }
    },
    factory: $_4hg57t13njeajongi.make,
    extraApis: {
      tieredData: tieredData,
      singleData: singleData,
      collapseItem: collapseItem
    }
  });

  var findRoute = function (component, transConfig, transState, route) {
    return $_6rmcx0xsjeajomqm.readOptFrom(transConfig.routes(), route.start()).map($_ddy4s3wjjeajomls.apply).bind(function (sConfig) {
      return $_6rmcx0xsjeajomqm.readOptFrom(sConfig, route.destination()).map($_ddy4s3wjjeajomls.apply);
    });
  };
  var getTransition = function (comp, transConfig, transState) {
    var route = getCurrentRoute(comp, transConfig, transState);
    return route.bind(function (r) {
      return getTransitionOf(comp, transConfig, transState, r);
    });
  };
  var getTransitionOf = function (comp, transConfig, transState, route) {
    return findRoute(comp, transConfig, transState, route).bind(function (r) {
      return r.transition().map(function (t) {
        return {
          transition: $_ddy4s3wjjeajomls.constant(t),
          route: $_ddy4s3wjjeajomls.constant(r)
        };
      });
    });
  };
  var disableTransition = function (comp, transConfig, transState) {
    getTransition(comp, transConfig, transState).each(function (routeTransition) {
      var t = routeTransition.transition();
      $_65t2ydynjeajomul.remove(comp.element(), t.transitionClass());
      $_a7s3osxrjeajomqe.remove(comp.element(), transConfig.destinationAttr());
    });
  };
  var getNewRoute = function (comp, transConfig, transState, destination) {
    return {
      start: $_ddy4s3wjjeajomls.constant($_a7s3osxrjeajomqe.get(comp.element(), transConfig.stateAttr())),
      destination: $_ddy4s3wjjeajomls.constant(destination)
    };
  };
  var getCurrentRoute = function (comp, transConfig, transState) {
    var el = comp.element();
    return $_a7s3osxrjeajomqe.has(el, transConfig.destinationAttr()) ? Option.some({
      start: $_ddy4s3wjjeajomls.constant($_a7s3osxrjeajomqe.get(comp.element(), transConfig.stateAttr())),
      destination: $_ddy4s3wjjeajomls.constant($_a7s3osxrjeajomqe.get(comp.element(), transConfig.destinationAttr()))
    }) : Option.none();
  };
  var jumpTo = function (comp, transConfig, transState, destination) {
    disableTransition(comp, transConfig, transState);
    if ($_a7s3osxrjeajomqe.has(comp.element(), transConfig.stateAttr()) && $_a7s3osxrjeajomqe.get(comp.element(), transConfig.stateAttr()) !== destination)
      transConfig.onFinish()(comp, destination);
    $_a7s3osxrjeajomqe.set(comp.element(), transConfig.stateAttr(), destination);
  };
  var fasttrack = function (comp, transConfig, transState, destination) {
    if ($_a7s3osxrjeajomqe.has(comp.element(), transConfig.destinationAttr())) {
      $_a7s3osxrjeajomqe.set(comp.element(), transConfig.stateAttr(), $_a7s3osxrjeajomqe.get(comp.element(), transConfig.destinationAttr()));
      $_a7s3osxrjeajomqe.remove(comp.element(), transConfig.destinationAttr());
    }
  };
  var progressTo = function (comp, transConfig, transState, destination) {
    fasttrack(comp, transConfig, transState, destination);
    var route = getNewRoute(comp, transConfig, transState, destination);
    getTransitionOf(comp, transConfig, transState, route).fold(function () {
      jumpTo(comp, transConfig, transState, destination);
    }, function (routeTransition) {
      disableTransition(comp, transConfig, transState);
      var t = routeTransition.transition();
      $_65t2ydynjeajomul.add(comp.element(), t.transitionClass());
      $_a7s3osxrjeajomqe.set(comp.element(), transConfig.destinationAttr(), destination);
    });
  };
  var getState = function (comp, transConfig, transState) {
    var e = comp.element();
    return $_a7s3osxrjeajomqe.has(e, transConfig.stateAttr()) ? Option.some($_a7s3osxrjeajomqe.get(e, transConfig.stateAttr())) : Option.none();
  };
  var $_87igzm13sjeajonhn = {
    findRoute: findRoute,
    disableTransition: disableTransition,
    getCurrentRoute: getCurrentRoute,
    jumpTo: jumpTo,
    progressTo: progressTo,
    getState: getState
  };

  var events$8 = function (transConfig, transState) {
    return $_2vhl2dy4jeajoms5.derive([
      $_2vhl2dy4jeajoms5.run($_9ndt8owijeajomlo.transitionend(), function (component, simulatedEvent) {
        var raw = simulatedEvent.event().raw();
        $_87igzm13sjeajonhn.getCurrentRoute(component, transConfig, transState).each(function (route) {
          $_87igzm13sjeajonhn.findRoute(component, transConfig, transState, route).each(function (rInfo) {
            rInfo.transition().each(function (rTransition) {
              if (raw.propertyName === rTransition.property()) {
                $_87igzm13sjeajonhn.jumpTo(component, transConfig, transState, route.destination());
                transConfig.onTransition()(component, route);
              }
            });
          });
        });
      }),
      $_2vhl2dy4jeajoms5.runOnAttached(function (comp, se) {
        $_87igzm13sjeajonhn.jumpTo(comp, transConfig, transState, transConfig.initialState());
      })
    ]);
  };
  var $_coh2jz13rjeajonhm = { events: events$8 };

  var TransitionSchema = [
    $_8qbqu2y7jeajomsl.defaulted('destinationAttr', 'data-transitioning-destination'),
    $_8qbqu2y7jeajomsl.defaulted('stateAttr', 'data-transitioning-state'),
    $_8qbqu2y7jeajomsl.strict('initialState'),
    $_apbxenz6jeajomvz.onHandler('onTransition'),
    $_apbxenz6jeajomvz.onHandler('onFinish'),
    $_8qbqu2y7jeajomsl.strictOf('routes', $_8qt2pyyejeajomtl.setOf(Result.value, $_8qt2pyyejeajomtl.setOf(Result.value, $_8qt2pyyejeajomtl.objOfOnly([$_8qbqu2y7jeajomsl.optionObjOfOnly('transition', [
        $_8qbqu2y7jeajomsl.strict('property'),
        $_8qbqu2y7jeajomsl.strict('transitionClass')
      ])]))))
  ];

  var createRoutes = function (routes) {
    var r = {};
    $_9s6ha1x0jeajomnc.each(routes, function (v, k) {
      var waypoints = k.split('<->');
      r[waypoints[0]] = $_6rmcx0xsjeajomqm.wrap(waypoints[1], v);
      r[waypoints[1]] = $_6rmcx0xsjeajomqm.wrap(waypoints[0], v);
    });
    return r;
  };
  var createBistate = function (first, second, transitions) {
    return $_6rmcx0xsjeajomqm.wrapAll([
      {
        key: first,
        value: $_6rmcx0xsjeajomqm.wrap(second, transitions)
      },
      {
        key: second,
        value: $_6rmcx0xsjeajomqm.wrap(first, transitions)
      }
    ]);
  };
  var createTristate = function (first, second, third, transitions) {
    return $_6rmcx0xsjeajomqm.wrapAll([
      {
        key: first,
        value: $_6rmcx0xsjeajomqm.wrapAll([
          {
            key: second,
            value: transitions
          },
          {
            key: third,
            value: transitions
          }
        ])
      },
      {
        key: second,
        value: $_6rmcx0xsjeajomqm.wrapAll([
          {
            key: first,
            value: transitions
          },
          {
            key: third,
            value: transitions
          }
        ])
      },
      {
        key: third,
        value: $_6rmcx0xsjeajomqm.wrapAll([
          {
            key: first,
            value: transitions
          },
          {
            key: second,
            value: transitions
          }
        ])
      }
    ]);
  };
  var Transitioning = $_cwu2vpy2jeajomrh.create({
    fields: TransitionSchema,
    name: 'transitioning',
    active: $_coh2jz13rjeajonhm,
    apis: $_87igzm13sjeajonhn,
    extra: {
      createRoutes: createRoutes,
      createBistate: createBistate,
      createTristate: createTristate
    }
  });

  var scrollable = $_eanbiezejeajomx0.resolve('scrollable');
  var register = function (element) {
    $_65t2ydynjeajomul.add(element, scrollable);
  };
  var deregister = function (element) {
    $_65t2ydynjeajomul.remove(element, scrollable);
  };
  var $_9y1q7q13ujeajoni4 = {
    register: register,
    deregister: deregister,
    scrollable: $_ddy4s3wjjeajomls.constant(scrollable)
  };

  var getValue$4 = function (item) {
    return $_6rmcx0xsjeajomqm.readOptFrom(item, 'format').getOr(item.title);
  };
  var convert$1 = function (formats, memMenuThunk) {
    var mainMenu = makeMenu('Styles', [].concat($_5r3pikwsjeajommo.map(formats.items, function (k) {
      return makeItem(getValue$4(k), k.title, k.isSelected(), k.getPreview(), $_6rmcx0xsjeajomqm.hasKey(formats.expansions, getValue$4(k)));
    })), memMenuThunk, false);
    var submenus = $_9s6ha1x0jeajomnc.map(formats.menus, function (menuItems, menuName) {
      var items = $_5r3pikwsjeajommo.map(menuItems, function (item) {
        return makeItem(getValue$4(item), item.title, item.isSelected !== undefined ? item.isSelected() : false, item.getPreview !== undefined ? item.getPreview() : '', $_6rmcx0xsjeajomqm.hasKey(formats.expansions, getValue$4(item)));
      });
      return makeMenu(menuName, items, memMenuThunk, true);
    });
    var menus = $_2yrejjwyjeajomn9.deepMerge(submenus, $_6rmcx0xsjeajomqm.wrap('styles', mainMenu));
    var tmenu = TieredMenu.tieredData('styles', menus, formats.expansions);
    return { tmenu: tmenu };
  };
  var makeItem = function (value, text, selected, preview, isMenu) {
    return {
      data: {
        value: value,
        text: text
      },
      type: 'item',
      dom: {
        tag: 'div',
        classes: isMenu ? [$_eanbiezejeajomx0.resolve('styles-item-is-menu')] : []
      },
      toggling: {
        toggleOnExecute: false,
        toggleClass: $_eanbiezejeajomx0.resolve('format-matches'),
        selected: selected
      },
      itemBehaviours: $_cwu2vpy2jeajomrh.derive(isMenu ? [] : [$_8qo6opzdjeajomwx.format(value, function (comp, status) {
          var toggle = status ? Toggling.on : Toggling.off;
          toggle(comp);
        })]),
      components: [{
          dom: {
            tag: 'div',
            attributes: { style: preview },
            innerHtml: text
          }
        }]
    };
  };
  var makeMenu = function (value, items, memMenuThunk, collapsable) {
    return {
      value: value,
      dom: { tag: 'div' },
      components: [
        Button.sketch({
          dom: {
            tag: 'div',
            classes: [$_eanbiezejeajomx0.resolve('styles-collapser')]
          },
          components: collapsable ? [
            {
              dom: {
                tag: 'span',
                classes: [$_eanbiezejeajomx0.resolve('styles-collapse-icon')]
              }
            },
            $_gcby0212tjeajonc2.text(value)
          ] : [$_gcby0212tjeajonc2.text(value)],
          action: function (item) {
            if (collapsable) {
              var comp = memMenuThunk().get(item);
              TieredMenu.collapseMenu(comp);
            }
          }
        }),
        {
          dom: {
            tag: 'div',
            classes: [$_eanbiezejeajomx0.resolve('styles-menu-items-container')]
          },
          components: [Menu.parts().items({})],
          behaviours: $_cwu2vpy2jeajomrh.derive([$_62oo9h126jeajon8w.config('adhoc-scrollable-menu', [
              $_2vhl2dy4jeajoms5.runOnAttached(function (component, simulatedEvent) {
                $_64rfd7103jeajomzb.set(component.element(), 'overflow-y', 'auto');
                $_64rfd7103jeajomzb.set(component.element(), '-webkit-overflow-scrolling', 'touch');
                $_9y1q7q13ujeajoni4.register(component.element());
              }),
              $_2vhl2dy4jeajoms5.runOnDetached(function (component) {
                $_64rfd7103jeajomzb.remove(component.element(), 'overflow-y');
                $_64rfd7103jeajomzb.remove(component.element(), '-webkit-overflow-scrolling');
                $_9y1q7q13ujeajoni4.deregister(component.element());
              })
            ])])
        }
      ],
      items: items,
      menuBehaviours: $_cwu2vpy2jeajomrh.derive([Transitioning.config({
          initialState: 'after',
          routes: Transitioning.createTristate('before', 'current', 'after', {
            transition: {
              property: 'transform',
              transitionClass: 'transitioning'
            }
          })
        })])
    };
  };
  var sketch$9 = function (settings) {
    var dataset = convert$1(settings.formats, function () {
      return memMenu;
    });
    var memMenu = $_9mcsdr11rjeajon7c.record(TieredMenu.sketch({
      dom: {
        tag: 'div',
        classes: [$_eanbiezejeajomx0.resolve('styles-menu')]
      },
      components: [],
      fakeFocus: true,
      stayInDom: true,
      onExecute: function (tmenu, item) {
        var v = me.getValue(item);
        settings.handle(item, v.value);
      },
      onEscape: function () {
      },
      onOpenMenu: function (container, menu) {
        var w = $_515ubo11kjeajon6n.get(container.element());
        $_515ubo11kjeajon6n.set(menu.element(), w);
        Transitioning.jumpTo(menu, 'current');
      },
      onOpenSubmenu: function (container, item, submenu) {
        var w = $_515ubo11kjeajon6n.get(container.element());
        var menu = $_3vna6mzxjeajomyv.ancestor(item.element(), '[role="menu"]').getOrDie('hacky');
        var menuComp = container.getSystem().getByDom(menu).getOrDie();
        $_515ubo11kjeajon6n.set(submenu.element(), w);
        Transitioning.progressTo(menuComp, 'before');
        Transitioning.jumpTo(submenu, 'after');
        Transitioning.progressTo(submenu, 'current');
      },
      onCollapseMenu: function (container, item, menu) {
        var submenu = $_3vna6mzxjeajomyv.ancestor(item.element(), '[role="menu"]').getOrDie('hacky');
        var submenuComp = container.getSystem().getByDom(submenu).getOrDie();
        Transitioning.progressTo(submenuComp, 'after');
        Transitioning.progressTo(menu, 'current');
      },
      navigateOnHover: false,
      openImmediately: true,
      data: dataset.tmenu,
      markers: {
        backgroundMenu: $_eanbiezejeajomx0.resolve('styles-background-menu'),
        menu: $_eanbiezejeajomx0.resolve('styles-menu'),
        selectedMenu: $_eanbiezejeajomx0.resolve('styles-selected-menu'),
        item: $_eanbiezejeajomx0.resolve('styles-item'),
        selectedItem: $_eanbiezejeajomx0.resolve('styles-selected-item')
      }
    }));
    return memMenu.asSpec();
  };
  var $_8o0k4912sjeajonbk = { sketch: sketch$9 };

  var getFromExpandingItem = function (item) {
    var newItem = $_2yrejjwyjeajomn9.deepMerge($_6rmcx0xsjeajomqm.exclude(item, ['items']), { menu: true });
    var rest = expand(item.items);
    var newMenus = $_2yrejjwyjeajomn9.deepMerge(rest.menus, $_6rmcx0xsjeajomqm.wrap(item.title, rest.items));
    var newExpansions = $_2yrejjwyjeajomn9.deepMerge(rest.expansions, $_6rmcx0xsjeajomqm.wrap(item.title, item.title));
    return {
      item: newItem,
      menus: newMenus,
      expansions: newExpansions
    };
  };
  var getFromItem = function (item) {
    return $_6rmcx0xsjeajomqm.hasKey(item, 'items') ? getFromExpandingItem(item) : {
      item: item,
      menus: {},
      expansions: {}
    };
  };
  var expand = function (items) {
    return $_5r3pikwsjeajommo.foldr(items, function (acc, item) {
      var newData = getFromItem(item);
      return {
        menus: $_2yrejjwyjeajomn9.deepMerge(acc.menus, newData.menus),
        items: [newData.item].concat(acc.items),
        expansions: $_2yrejjwyjeajomn9.deepMerge(acc.expansions, newData.expansions)
      };
    }, {
      menus: {},
      expansions: {},
      items: []
    });
  };
  var $_bnk8xn13vjeajoni6 = { expand: expand };

  var register$1 = function (editor, settings) {
    var isSelectedFor = function (format) {
      return function () {
        return editor.formatter.match(format);
      };
    };
    var getPreview = function (format) {
      return function () {
        var styles = editor.formatter.getCssText(format);
        return styles;
      };
    };
    var enrichSupported = function (item) {
      return $_2yrejjwyjeajomn9.deepMerge(item, {
        isSelected: isSelectedFor(item.format),
        getPreview: getPreview(item.format)
      });
    };
    var enrichMenu = function (item) {
      return $_2yrejjwyjeajomn9.deepMerge(item, {
        isSelected: $_ddy4s3wjjeajomls.constant(false),
        getPreview: $_ddy4s3wjjeajomls.constant('')
      });
    };
    var enrichCustom = function (item) {
      var formatName = $_cxs1c110rjeajon2f.generate(item.title);
      var newItem = $_2yrejjwyjeajomn9.deepMerge(item, {
        format: formatName,
        isSelected: isSelectedFor(formatName),
        getPreview: getPreview(formatName)
      });
      editor.formatter.register(formatName, newItem);
      return newItem;
    };
    var formats = $_6rmcx0xsjeajomqm.readOptFrom(settings, 'style_formats').getOr(DefaultStyleFormats);
    var doEnrich = function (items) {
      return $_5r3pikwsjeajommo.map(items, function (item) {
        if ($_6rmcx0xsjeajomqm.hasKey(item, 'items')) {
          var newItems = doEnrich(item.items);
          return $_2yrejjwyjeajomn9.deepMerge(enrichMenu(item), { items: newItems });
        } else if ($_6rmcx0xsjeajomqm.hasKey(item, 'format')) {
          return enrichSupported(item);
        } else {
          return enrichCustom(item);
        }
      });
    };
    return doEnrich(formats);
  };
  var prune = function (editor, formats) {
    var doPrune = function (items) {
      return $_5r3pikwsjeajommo.bind(items, function (item) {
        if (item.items !== undefined) {
          var newItems = doPrune(item.items);
          return newItems.length > 0 ? [item] : [];
        } else {
          var keep = $_6rmcx0xsjeajomqm.hasKey(item, 'format') ? editor.formatter.canApply(item.format) : true;
          return keep ? [item] : [];
        }
      });
    };
    var prunedItems = doPrune(formats);
    return $_bnk8xn13vjeajoni6.expand(prunedItems);
  };
  var ui = function (editor, formats, onDone) {
    var pruned = prune(editor, formats);
    return $_8o0k4912sjeajonbk.sketch({
      formats: pruned,
      handle: function (item, value) {
        editor.undoManager.transact(function () {
          if (Toggling.isOn(item)) {
            editor.formatter.remove(value);
          } else {
            editor.formatter.apply(value);
          }
        });
        onDone();
      }
    });
  };
  var $_f0ccg912qjeajonbb = {
    register: register$1,
    ui: ui
  };

  var defaults = [
    'undo',
    'bold',
    'italic',
    'link',
    'image',
    'bullist',
    'styleselect'
  ];
  var extract$1 = function (rawToolbar) {
    var toolbar = rawToolbar.replace(/\|/g, ' ').trim();
    return toolbar.length > 0 ? toolbar.split(/\s+/) : [];
  };
  var identifyFromArray = function (toolbar) {
    return $_5r3pikwsjeajommo.bind(toolbar, function (item) {
      return $_6vgadjwzjeajomnb.isArray(item) ? identifyFromArray(item) : extract$1(item);
    });
  };
  var identify = function (settings) {
    var toolbar = settings.toolbar !== undefined ? settings.toolbar : defaults;
    return $_6vgadjwzjeajomnb.isArray(toolbar) ? identifyFromArray(toolbar) : extract$1(toolbar);
  };
  var setup = function (realm, editor) {
    var commandSketch = function (name) {
      return function () {
        return $_ccxdx6zfjeajomx1.forToolbarCommand(editor, name);
      };
    };
    var stateCommandSketch = function (name) {
      return function () {
        return $_ccxdx6zfjeajomx1.forToolbarStateCommand(editor, name);
      };
    };
    var actionSketch = function (name, query, action) {
      return function () {
        return $_ccxdx6zfjeajomx1.forToolbarStateAction(editor, name, query, action);
      };
    };
    var undo = commandSketch('undo');
    var redo = commandSketch('redo');
    var bold = stateCommandSketch('bold');
    var italic = stateCommandSketch('italic');
    var underline = stateCommandSketch('underline');
    var removeformat = commandSketch('removeformat');
    var link = function () {
      return $_3q7e7a121jeajon83.sketch(realm, editor);
    };
    var unlink = actionSketch('unlink', 'link', function () {
      editor.execCommand('unlink', null, false);
    });
    var image = function () {
      return $_9f4m1x11qjeajon76.sketch(editor);
    };
    var bullist = actionSketch('unordered-list', 'ul', function () {
      editor.execCommand('InsertUnorderedList', null, false);
    });
    var numlist = actionSketch('ordered-list', 'ol', function () {
      editor.execCommand('InsertOrderedList', null, false);
    });
    var fontsizeselect = function () {
      return $_9x94ln11mjeajon6p.sketch(realm, editor);
    };
    var forecolor = function () {
      return $_2403uo115jeajon4w.sketch(realm, editor);
    };
    var styleFormats = $_f0ccg912qjeajonbb.register(editor, editor.settings);
    var styleFormatsMenu = function () {
      return $_f0ccg912qjeajonbb.ui(editor, styleFormats, function () {
        editor.fire('scrollIntoView');
      });
    };
    var styleselect = function () {
      return $_ccxdx6zfjeajomx1.forToolbar('style-formats', function (button) {
        editor.fire('toReading');
        realm.dropup().appear(styleFormatsMenu, Toggling.on, button);
      }, $_cwu2vpy2jeajomrh.derive([
        Toggling.config({
          toggleClass: $_eanbiezejeajomx0.resolve('toolbar-button-selected'),
          toggleOnExecute: false,
          aria: { mode: 'pressed' }
        }),
        Receiving.config({
          channels: $_6rmcx0xsjeajomqm.wrapAll([
            $_8qo6opzdjeajomwx.receive($_8rcy7qz1jeajomv8.orientationChanged(), Toggling.off),
            $_8qo6opzdjeajomwx.receive($_8rcy7qz1jeajomv8.dropupDismissed(), Toggling.off)
          ])
        })
      ]));
    };
    var feature = function (prereq, sketch) {
      return {
        isSupported: function () {
          return prereq.forall(function (p) {
            return $_6rmcx0xsjeajomqm.hasKey(editor.buttons, p);
          });
        },
        sketch: sketch
      };
    };
    return {
      undo: feature(Option.none(), undo),
      redo: feature(Option.none(), redo),
      bold: feature(Option.none(), bold),
      italic: feature(Option.none(), italic),
      underline: feature(Option.none(), underline),
      removeformat: feature(Option.none(), removeformat),
      link: feature(Option.none(), link),
      unlink: feature(Option.none(), unlink),
      image: feature(Option.none(), image),
      bullist: feature(Option.some('bullist'), bullist),
      numlist: feature(Option.some('numlist'), numlist),
      fontsizeselect: feature(Option.none(), fontsizeselect),
      forecolor: feature(Option.none(), forecolor),
      styleselect: feature(Option.none(), styleselect)
    };
  };
  var detect$4 = function (settings, features) {
    var itemNames = identify(settings);
    var present = {};
    return $_5r3pikwsjeajommo.bind(itemNames, function (iName) {
      var r = !$_6rmcx0xsjeajomqm.hasKey(present, iName) && $_6rmcx0xsjeajomqm.hasKey(features, iName) && features[iName].isSupported() ? [features[iName].sketch()] : [];
      present[iName] = true;
      return r;
    });
  };
  var $_3vrd7rz2jeajomva = {
    identify: identify,
    setup: setup,
    detect: detect$4
  };

  var mkEvent = function (target, x, y, stop, prevent, kill, raw) {
    return {
      'target': $_ddy4s3wjjeajomls.constant(target),
      'x': $_ddy4s3wjjeajomls.constant(x),
      'y': $_ddy4s3wjjeajomls.constant(y),
      'stop': stop,
      'prevent': prevent,
      'kill': kill,
      'raw': $_ddy4s3wjjeajomls.constant(raw)
    };
  };
  var handle = function (filter, handler) {
    return function (rawEvent) {
      if (!filter(rawEvent))
        return;
      var target = $_8icwg5xfjeajomp0.fromDom(rawEvent.target);
      var stop = function () {
        rawEvent.stopPropagation();
      };
      var prevent = function () {
        rawEvent.preventDefault();
      };
      var kill = $_ddy4s3wjjeajomls.compose(prevent, stop);
      var evt = mkEvent(target, rawEvent.clientX, rawEvent.clientY, stop, prevent, kill, rawEvent);
      handler(evt);
    };
  };
  var binder = function (element, event, filter, handler, useCapture) {
    var wrapped = handle(filter, handler);
    element.dom().addEventListener(event, wrapped, useCapture);
    return { unbind: $_ddy4s3wjjeajomls.curry(unbind, element, event, wrapped, useCapture) };
  };
  var bind$1 = function (element, event, filter, handler) {
    return binder(element, event, filter, handler, false);
  };
  var capture = function (element, event, filter, handler) {
    return binder(element, event, filter, handler, true);
  };
  var unbind = function (element, event, handler, useCapture) {
    element.dom().removeEventListener(event, handler, useCapture);
  };
  var $_911any13yjeajonij = {
    bind: bind$1,
    capture: capture
  };

  var filter$1 = $_ddy4s3wjjeajomls.constant(true);
  var bind$2 = function (element, event, handler) {
    return $_911any13yjeajonij.bind(element, event, filter$1, handler);
  };
  var capture$1 = function (element, event, handler) {
    return $_911any13yjeajonij.capture(element, event, filter$1, handler);
  };
  var $_2x1yyu13xjeajonih = {
    bind: bind$2,
    capture: capture$1
  };

  var INTERVAL = 50;
  var INSURANCE = 1000 / INTERVAL;
  var get$11 = function (outerWindow) {
    var isPortrait = outerWindow.matchMedia('(orientation: portrait)').matches;
    return { isPortrait: $_ddy4s3wjjeajomls.constant(isPortrait) };
  };
  var getActualWidth = function (outerWindow) {
    var isIos = $_g80fw1wkjeajomlw.detect().os.isiOS();
    var isPortrait = get$11(outerWindow).isPortrait();
    return isIos && !isPortrait ? outerWindow.screen.height : outerWindow.screen.width;
  };
  var onChange = function (outerWindow, listeners) {
    var win = $_8icwg5xfjeajomp0.fromDom(outerWindow);
    var poller = null;
    var change = function () {
      clearInterval(poller);
      var orientation = get$11(outerWindow);
      listeners.onChange(orientation);
      onAdjustment(function () {
        listeners.onReady(orientation);
      });
    };
    var orientationHandle = $_2x1yyu13xjeajonih.bind(win, 'orientationchange', change);
    var onAdjustment = function (f) {
      clearInterval(poller);
      var flag = outerWindow.innerHeight;
      var insurance = 0;
      poller = setInterval(function () {
        if (flag !== outerWindow.innerHeight) {
          clearInterval(poller);
          f(Option.some(outerWindow.innerHeight));
        } else if (insurance > INSURANCE) {
          clearInterval(poller);
          f(Option.none());
        }
        insurance++;
      }, INTERVAL);
    };
    var destroy = function () {
      orientationHandle.unbind();
    };
    return {
      onAdjustment: onAdjustment,
      destroy: destroy
    };
  };
  var $_ekm71s13wjeajonia = {
    get: get$11,
    onChange: onChange,
    getActualWidth: getActualWidth
  };

  function DelayedFunction (fun, delay) {
    var ref = null;
    var schedule = function () {
      var args = arguments;
      ref = setTimeout(function () {
        fun.apply(null, args);
        ref = null;
      }, delay);
    };
    var cancel = function () {
      if (ref !== null) {
        clearTimeout(ref);
        ref = null;
      }
    };
    return {
      cancel: cancel,
      schedule: schedule
    };
  }

  var SIGNIFICANT_MOVE = 5;
  var LONGPRESS_DELAY = 400;
  var getTouch = function (event) {
    if (event.raw().touches === undefined || event.raw().touches.length !== 1)
      return Option.none();
    return Option.some(event.raw().touches[0]);
  };
  var isFarEnough = function (touch, data) {
    var distX = Math.abs(touch.clientX - data.x());
    var distY = Math.abs(touch.clientY - data.y());
    return distX > SIGNIFICANT_MOVE || distY > SIGNIFICANT_MOVE;
  };
  var monitor = function (settings) {
    var startData = Cell(Option.none());
    var longpress = DelayedFunction(function (event) {
      startData.set(Option.none());
      settings.triggerEvent($_bckj1uwhjeajomli.longpress(), event);
    }, LONGPRESS_DELAY);
    var handleTouchstart = function (event) {
      getTouch(event).each(function (touch) {
        longpress.cancel();
        var data = {
          x: $_ddy4s3wjjeajomls.constant(touch.clientX),
          y: $_ddy4s3wjjeajomls.constant(touch.clientY),
          target: event.target
        };
        longpress.schedule(data);
        startData.set(Option.some(data));
      });
      return Option.none();
    };
    var handleTouchmove = function (event) {
      longpress.cancel();
      getTouch(event).each(function (touch) {
        startData.get().each(function (data) {
          if (isFarEnough(touch, data))
            startData.set(Option.none());
        });
      });
      return Option.none();
    };
    var handleTouchend = function (event) {
      longpress.cancel();
      var isSame = function (data) {
        return $_a12rd3x9jeajomoj.eq(data.target(), event.target());
      };
      return startData.get().filter(isSame).map(function (data) {
        return settings.triggerEvent($_bckj1uwhjeajomli.tap(), event);
      });
    };
    var handlers = $_6rmcx0xsjeajomqm.wrapAll([
      {
        key: $_9ndt8owijeajomlo.touchstart(),
        value: handleTouchstart
      },
      {
        key: $_9ndt8owijeajomlo.touchmove(),
        value: handleTouchmove
      },
      {
        key: $_9ndt8owijeajomlo.touchend(),
        value: handleTouchend
      }
    ]);
    var fireIfReady = function (event, type) {
      return $_6rmcx0xsjeajomqm.readOptFrom(handlers, type).bind(function (handler) {
        return handler(event);
      });
    };
    return { fireIfReady: fireIfReady };
  };
  var $_4dsamc144jeajonja = { monitor: monitor };

  var monitor$1 = function (editorApi) {
    var tapEvent = $_4dsamc144jeajonja.monitor({
      triggerEvent: function (type, evt) {
        editorApi.onTapContent(evt);
      }
    });
    var onTouchend = function () {
      return $_2x1yyu13xjeajonih.bind(editorApi.body(), 'touchend', function (evt) {
        tapEvent.fireIfReady(evt, 'touchend');
      });
    };
    var onTouchmove = function () {
      return $_2x1yyu13xjeajonih.bind(editorApi.body(), 'touchmove', function (evt) {
        tapEvent.fireIfReady(evt, 'touchmove');
      });
    };
    var fireTouchstart = function (evt) {
      tapEvent.fireIfReady(evt, 'touchstart');
    };
    return {
      fireTouchstart: fireTouchstart,
      onTouchend: onTouchend,
      onTouchmove: onTouchmove
    };
  };
  var $_cehadv143jeajonj8 = { monitor: monitor$1 };

  var isAndroid6 = $_g80fw1wkjeajomlw.detect().os.version.major >= 6;
  var initEvents = function (editorApi, toolstrip, alloy) {
    var tapping = $_cehadv143jeajonj8.monitor(editorApi);
    var outerDoc = $_6xy0ax3jeajomo0.owner(toolstrip);
    var isRanged = function (sel) {
      return !$_a12rd3x9jeajomoj.eq(sel.start(), sel.finish()) || sel.soffset() !== sel.foffset();
    };
    var hasRangeInUi = function () {
      return $_gc8hiiytjeajomut.active(outerDoc).filter(function (input) {
        return $_bsb5vnxkjeajompc.name(input) === 'input';
      }).exists(function (input) {
        return input.dom().selectionStart !== input.dom().selectionEnd;
      });
    };
    var updateMargin = function () {
      var rangeInContent = editorApi.doc().dom().hasFocus() && editorApi.getSelection().exists(isRanged);
      alloy.getByDom(toolstrip).each((rangeInContent || hasRangeInUi()) === true ? Toggling.on : Toggling.off);
    };
    var listeners = [
      $_2x1yyu13xjeajonih.bind(editorApi.body(), 'touchstart', function (evt) {
        editorApi.onTouchContent();
        tapping.fireTouchstart(evt);
      }),
      tapping.onTouchmove(),
      tapping.onTouchend(),
      $_2x1yyu13xjeajonih.bind(toolstrip, 'touchstart', function (evt) {
        editorApi.onTouchToolstrip();
      }),
      editorApi.onToReading(function () {
        $_gc8hiiytjeajomut.blur(editorApi.body());
      }),
      editorApi.onToEditing($_ddy4s3wjjeajomls.noop),
      editorApi.onScrollToCursor(function (tinyEvent) {
        tinyEvent.preventDefault();
        editorApi.getCursorBox().each(function (bounds) {
          var cWin = editorApi.win();
          var isOutside = bounds.top() > cWin.innerHeight || bounds.bottom() > cWin.innerHeight;
          var cScrollBy = isOutside ? bounds.bottom() - cWin.innerHeight + 50 : 0;
          if (cScrollBy !== 0) {
            cWin.scrollTo(cWin.pageXOffset, cWin.pageYOffset + cScrollBy);
          }
        });
      })
    ].concat(isAndroid6 === true ? [] : [
      $_2x1yyu13xjeajonih.bind($_8icwg5xfjeajomp0.fromDom(editorApi.win()), 'blur', function () {
        alloy.getByDom(toolstrip).each(Toggling.off);
      }),
      $_2x1yyu13xjeajonih.bind(outerDoc, 'select', updateMargin),
      $_2x1yyu13xjeajonih.bind(editorApi.doc(), 'selectionchange', updateMargin)
    ]);
    var destroy = function () {
      $_5r3pikwsjeajommo.each(listeners, function (l) {
        l.unbind();
      });
    };
    return { destroy: destroy };
  };
  var $_az5l95142jeajoniy = { initEvents: initEvents };

  var safeParse = function (element, attribute) {
    var parsed = parseInt($_a7s3osxrjeajomqe.get(element, attribute), 10);
    return isNaN(parsed) ? 0 : parsed;
  };
  var $_ecimg0147jeajonjs = { safeParse: safeParse };

  function NodeValue (is, name) {
    var get = function (element) {
      if (!is(element))
        throw new Error('Can only get ' + name + ' value of a ' + name + ' node');
      return getOption(element).getOr('');
    };
    var getOptionIE10 = function (element) {
      try {
        return getOptionSafe(element);
      } catch (e) {
        return Option.none();
      }
    };
    var getOptionSafe = function (element) {
      return is(element) ? Option.from(element.dom().nodeValue) : Option.none();
    };
    var browser = $_g80fw1wkjeajomlw.detect().browser;
    var getOption = browser.isIE() && browser.version.major === 10 ? getOptionIE10 : getOptionSafe;
    var set = function (element, value) {
      if (!is(element))
        throw new Error('Can only set raw ' + name + ' value of a ' + name + ' node');
      element.dom().nodeValue = value;
    };
    return {
      get: get,
      getOption: getOption,
      set: set
    };
  }

  var api$3 = NodeValue($_bsb5vnxkjeajompc.isText, 'text');
  var get$12 = function (element) {
    return api$3.get(element);
  };
  var getOption = function (element) {
    return api$3.getOption(element);
  };
  var set$8 = function (element, value) {
    api$3.set(element, value);
  };
  var $_d7b16514ajeajonk3 = {
    get: get$12,
    getOption: getOption,
    set: set$8
  };

  var getEnd = function (element) {
    return $_bsb5vnxkjeajompc.name(element) === 'img' ? 1 : $_d7b16514ajeajonk3.getOption(element).fold(function () {
      return $_6xy0ax3jeajomo0.children(element).length;
    }, function (v) {
      return v.length;
    });
  };
  var isEnd = function (element, offset) {
    return getEnd(element) === offset;
  };
  var isStart = function (element, offset) {
    return offset === 0;
  };
  var NBSP = '\xA0';
  var isTextNodeWithCursorPosition = function (el) {
    return $_d7b16514ajeajonk3.getOption(el).filter(function (text) {
      return text.trim().length !== 0 || text.indexOf(NBSP) > -1;
    }).isSome();
  };
  var elementsWithCursorPosition = [
    'img',
    'br'
  ];
  var isCursorPosition = function (elem) {
    var hasCursorPosition = isTextNodeWithCursorPosition(elem);
    return hasCursorPosition || $_5r3pikwsjeajommo.contains(elementsWithCursorPosition, $_bsb5vnxkjeajompc.name(elem));
  };
  var $_5pistq149jeajonk1 = {
    getEnd: getEnd,
    isEnd: isEnd,
    isStart: isStart,
    isCursorPosition: isCursorPosition
  };

  var adt$4 = $_d1vtuwxwjeajomr2.generate([
    { 'before': ['element'] },
    {
      'on': [
        'element',
        'offset'
      ]
    },
    { after: ['element'] }
  ]);
  var cata = function (subject, onBefore, onOn, onAfter) {
    return subject.fold(onBefore, onOn, onAfter);
  };
  var getStart = function (situ) {
    return situ.fold($_ddy4s3wjjeajomls.identity, $_ddy4s3wjjeajomls.identity, $_ddy4s3wjjeajomls.identity);
  };
  var $_35lvni14djeajonka = {
    before: adt$4.before,
    on: adt$4.on,
    after: adt$4.after,
    cata: cata,
    getStart: getStart
  };

  var type$1 = $_d1vtuwxwjeajomr2.generate([
    { domRange: ['rng'] },
    {
      relative: [
        'startSitu',
        'finishSitu'
      ]
    },
    {
      exact: [
        'start',
        'soffset',
        'finish',
        'foffset'
      ]
    }
  ]);
  var range$1 = $_6725fkx4jeajomoa.immutable('start', 'soffset', 'finish', 'foffset');
  var exactFromRange = function (simRange) {
    return type$1.exact(simRange.start(), simRange.soffset(), simRange.finish(), simRange.foffset());
  };
  var getStart$1 = function (selection) {
    return selection.match({
      domRange: function (rng) {
        return $_8icwg5xfjeajomp0.fromDom(rng.startContainer);
      },
      relative: function (startSitu, finishSitu) {
        return $_35lvni14djeajonka.getStart(startSitu);
      },
      exact: function (start, soffset, finish, foffset) {
        return start;
      }
    });
  };
  var getWin = function (selection) {
    var start = getStart$1(selection);
    return $_6xy0ax3jeajomo0.defaultView(start);
  };
  var $_6or9k114cjeajonk7 = {
    domRange: type$1.domRange,
    relative: type$1.relative,
    exact: type$1.exact,
    exactFromRange: exactFromRange,
    range: range$1,
    getWin: getWin
  };

  var makeRange = function (start, soffset, finish, foffset) {
    var doc = $_6xy0ax3jeajomo0.owner(start);
    var rng = doc.dom().createRange();
    rng.setStart(start.dom(), soffset);
    rng.setEnd(finish.dom(), foffset);
    return rng;
  };
  var commonAncestorContainer = function (start, soffset, finish, foffset) {
    var r = makeRange(start, soffset, finish, foffset);
    return $_8icwg5xfjeajomp0.fromDom(r.commonAncestorContainer);
  };
  var after$2 = function (start, soffset, finish, foffset) {
    var r = makeRange(start, soffset, finish, foffset);
    var same = $_a12rd3x9jeajomoj.eq(start, finish) && soffset === foffset;
    return r.collapsed && !same;
  };
  var $_eo1xe414fjeajonkg = {
    after: after$2,
    commonAncestorContainer: commonAncestorContainer
  };

  var fromElements = function (elements, scope) {
    var doc = scope || document;
    var fragment = doc.createDocumentFragment();
    $_5r3pikwsjeajommo.each(elements, function (element) {
      fragment.appendChild(element.dom());
    });
    return $_8icwg5xfjeajomp0.fromDom(fragment);
  };
  var $_44xbwk14gjeajonki = { fromElements: fromElements };

  var selectNodeContents = function (win, element) {
    var rng = win.document.createRange();
    selectNodeContentsUsing(rng, element);
    return rng;
  };
  var selectNodeContentsUsing = function (rng, element) {
    rng.selectNodeContents(element.dom());
  };
  var isWithin = function (outerRange, innerRange) {
    return innerRange.compareBoundaryPoints(outerRange.END_TO_START, outerRange) < 1 && innerRange.compareBoundaryPoints(outerRange.START_TO_END, outerRange) > -1;
  };
  var create$4 = function (win) {
    return win.document.createRange();
  };
  var setStart = function (rng, situ) {
    situ.fold(function (e) {
      rng.setStartBefore(e.dom());
    }, function (e, o) {
      rng.setStart(e.dom(), o);
    }, function (e) {
      rng.setStartAfter(e.dom());
    });
  };
  var setFinish = function (rng, situ) {
    situ.fold(function (e) {
      rng.setEndBefore(e.dom());
    }, function (e, o) {
      rng.setEnd(e.dom(), o);
    }, function (e) {
      rng.setEndAfter(e.dom());
    });
  };
  var replaceWith = function (rng, fragment) {
    deleteContents(rng);
    rng.insertNode(fragment.dom());
  };
  var relativeToNative = function (win, startSitu, finishSitu) {
    var range = win.document.createRange();
    setStart(range, startSitu);
    setFinish(range, finishSitu);
    return range;
  };
  var exactToNative = function (win, start, soffset, finish, foffset) {
    var rng = win.document.createRange();
    rng.setStart(start.dom(), soffset);
    rng.setEnd(finish.dom(), foffset);
    return rng;
  };
  var deleteContents = function (rng) {
    rng.deleteContents();
  };
  var cloneFragment = function (rng) {
    var fragment = rng.cloneContents();
    return $_8icwg5xfjeajomp0.fromDom(fragment);
  };
  var toRect = function (rect) {
    return {
      left: $_ddy4s3wjjeajomls.constant(rect.left),
      top: $_ddy4s3wjjeajomls.constant(rect.top),
      right: $_ddy4s3wjjeajomls.constant(rect.right),
      bottom: $_ddy4s3wjjeajomls.constant(rect.bottom),
      width: $_ddy4s3wjjeajomls.constant(rect.width),
      height: $_ddy4s3wjjeajomls.constant(rect.height)
    };
  };
  var getFirstRect = function (rng) {
    var rects = rng.getClientRects();
    var rect = rects.length > 0 ? rects[0] : rng.getBoundingClientRect();
    return rect.width > 0 || rect.height > 0 ? Option.some(rect).map(toRect) : Option.none();
  };
  var getBounds = function (rng) {
    var rect = rng.getBoundingClientRect();
    return rect.width > 0 || rect.height > 0 ? Option.some(rect).map(toRect) : Option.none();
  };
  var toString$1 = function (rng) {
    return rng.toString();
  };
  var $_10zbi314hjeajonkk = {
    create: create$4,
    replaceWith: replaceWith,
    selectNodeContents: selectNodeContents,
    selectNodeContentsUsing: selectNodeContentsUsing,
    relativeToNative: relativeToNative,
    exactToNative: exactToNative,
    deleteContents: deleteContents,
    cloneFragment: cloneFragment,
    getFirstRect: getFirstRect,
    getBounds: getBounds,
    isWithin: isWithin,
    toString: toString$1
  };

  var adt$5 = $_d1vtuwxwjeajomr2.generate([
    {
      ltr: [
        'start',
        'soffset',
        'finish',
        'foffset'
      ]
    },
    {
      rtl: [
        'start',
        'soffset',
        'finish',
        'foffset'
      ]
    }
  ]);
  var fromRange = function (win, type, range) {
    return type($_8icwg5xfjeajomp0.fromDom(range.startContainer), range.startOffset, $_8icwg5xfjeajomp0.fromDom(range.endContainer), range.endOffset);
  };
  var getRanges = function (win, selection) {
    return selection.match({
      domRange: function (rng) {
        return {
          ltr: $_ddy4s3wjjeajomls.constant(rng),
          rtl: Option.none
        };
      },
      relative: function (startSitu, finishSitu) {
        return {
          ltr: $_2add5nwljeajomlz.cached(function () {
            return $_10zbi314hjeajonkk.relativeToNative(win, startSitu, finishSitu);
          }),
          rtl: $_2add5nwljeajomlz.cached(function () {
            return Option.some($_10zbi314hjeajonkk.relativeToNative(win, finishSitu, startSitu));
          })
        };
      },
      exact: function (start, soffset, finish, foffset) {
        return {
          ltr: $_2add5nwljeajomlz.cached(function () {
            return $_10zbi314hjeajonkk.exactToNative(win, start, soffset, finish, foffset);
          }),
          rtl: $_2add5nwljeajomlz.cached(function () {
            return Option.some($_10zbi314hjeajonkk.exactToNative(win, finish, foffset, start, soffset));
          })
        };
      }
    });
  };
  var doDiagnose = function (win, ranges) {
    var rng = ranges.ltr();
    if (rng.collapsed) {
      var reversed = ranges.rtl().filter(function (rev) {
        return rev.collapsed === false;
      });
      return reversed.map(function (rev) {
        return adt$5.rtl($_8icwg5xfjeajomp0.fromDom(rev.endContainer), rev.endOffset, $_8icwg5xfjeajomp0.fromDom(rev.startContainer), rev.startOffset);
      }).getOrThunk(function () {
        return fromRange(win, adt$5.ltr, rng);
      });
    } else {
      return fromRange(win, adt$5.ltr, rng);
    }
  };
  var diagnose = function (win, selection) {
    var ranges = getRanges(win, selection);
    return doDiagnose(win, ranges);
  };
  var asLtrRange = function (win, selection) {
    var diagnosis = diagnose(win, selection);
    return diagnosis.match({
      ltr: function (start, soffset, finish, foffset) {
        var rng = win.document.createRange();
        rng.setStart(start.dom(), soffset);
        rng.setEnd(finish.dom(), foffset);
        return rng;
      },
      rtl: function (start, soffset, finish, foffset) {
        var rng = win.document.createRange();
        rng.setStart(finish.dom(), foffset);
        rng.setEnd(start.dom(), soffset);
        return rng;
      }
    });
  };
  var $_6uqq6f14ijeajonko = {
    ltr: adt$5.ltr,
    rtl: adt$5.rtl,
    diagnose: diagnose,
    asLtrRange: asLtrRange
  };

  var searchForPoint = function (rectForOffset, x, y, maxX, length) {
    if (length === 0)
      return 0;
    else if (x === maxX)
      return length - 1;
    var xDelta = maxX;
    for (var i = 1; i < length; i++) {
      var rect = rectForOffset(i);
      var curDeltaX = Math.abs(x - rect.left);
      if (y > rect.bottom) {
      } else if (y < rect.top || curDeltaX > xDelta) {
        return i - 1;
      } else {
        xDelta = curDeltaX;
      }
    }
    return 0;
  };
  var inRect = function (rect, x, y) {
    return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
  };
  var $_88rwlw14ljeajonl1 = {
    inRect: inRect,
    searchForPoint: searchForPoint
  };

  var locateOffset = function (doc, textnode, x, y, rect) {
    var rangeForOffset = function (offset) {
      var r = doc.dom().createRange();
      r.setStart(textnode.dom(), offset);
      r.collapse(true);
      return r;
    };
    var rectForOffset = function (offset) {
      var r = rangeForOffset(offset);
      return r.getBoundingClientRect();
    };
    var length = $_d7b16514ajeajonk3.get(textnode).length;
    var offset = $_88rwlw14ljeajonl1.searchForPoint(rectForOffset, x, y, rect.right, length);
    return rangeForOffset(offset);
  };
  var locate$1 = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    r.selectNode(node.dom());
    var rects = r.getClientRects();
    var foundRect = $_62h1oqy0jeajomre.findMap(rects, function (rect) {
      return $_88rwlw14ljeajonl1.inRect(rect, x, y) ? Option.some(rect) : Option.none();
    });
    return foundRect.map(function (rect) {
      return locateOffset(doc, node, x, y, rect);
    });
  };
  var $_nvf0814mjeajonl2 = { locate: locate$1 };

  var searchInChildren = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    var nodes = $_6xy0ax3jeajomo0.children(node);
    return $_62h1oqy0jeajomre.findMap(nodes, function (n) {
      r.selectNode(n.dom());
      return $_88rwlw14ljeajonl1.inRect(r.getBoundingClientRect(), x, y) ? locateNode(doc, n, x, y) : Option.none();
    });
  };
  var locateNode = function (doc, node, x, y) {
    var locator = $_bsb5vnxkjeajompc.isText(node) ? $_nvf0814mjeajonl2.locate : searchInChildren;
    return locator(doc, node, x, y);
  };
  var locate$2 = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    r.selectNode(node.dom());
    var rect = r.getBoundingClientRect();
    var boundedX = Math.max(rect.left, Math.min(rect.right, x));
    var boundedY = Math.max(rect.top, Math.min(rect.bottom, y));
    return locateNode(doc, node, boundedX, boundedY);
  };
  var $_8fkvyn14kjeajonkx = { locate: locate$2 };

  var first$3 = function (element) {
    return $_6tkhs7yvjeajomuy.descendant(element, $_5pistq149jeajonk1.isCursorPosition);
  };
  var last$2 = function (element) {
    return descendantRtl(element, $_5pistq149jeajonk1.isCursorPosition);
  };
  var descendantRtl = function (scope, predicate) {
    var descend = function (element) {
      var children = $_6xy0ax3jeajomo0.children(element);
      for (var i = children.length - 1; i >= 0; i--) {
        var child = children[i];
        if (predicate(child))
          return Option.some(child);
        var res = descend(child);
        if (res.isSome())
          return res;
      }
      return Option.none();
    };
    return descend(scope);
  };
  var $_b36leg14ojeajonld = {
    first: first$3,
    last: last$2
  };

  var COLLAPSE_TO_LEFT = true;
  var COLLAPSE_TO_RIGHT = false;
  var getCollapseDirection = function (rect, x) {
    return x - rect.left < rect.right - x ? COLLAPSE_TO_LEFT : COLLAPSE_TO_RIGHT;
  };
  var createCollapsedNode = function (doc, target, collapseDirection) {
    var r = doc.dom().createRange();
    r.selectNode(target.dom());
    r.collapse(collapseDirection);
    return r;
  };
  var locateInElement = function (doc, node, x) {
    var cursorRange = doc.dom().createRange();
    cursorRange.selectNode(node.dom());
    var rect = cursorRange.getBoundingClientRect();
    var collapseDirection = getCollapseDirection(rect, x);
    var f = collapseDirection === COLLAPSE_TO_LEFT ? $_b36leg14ojeajonld.first : $_b36leg14ojeajonld.last;
    return f(node).map(function (target) {
      return createCollapsedNode(doc, target, collapseDirection);
    });
  };
  var locateInEmpty = function (doc, node, x) {
    var rect = node.dom().getBoundingClientRect();
    var collapseDirection = getCollapseDirection(rect, x);
    return Option.some(createCollapsedNode(doc, node, collapseDirection));
  };
  var search$1 = function (doc, node, x) {
    var f = $_6xy0ax3jeajomo0.children(node).length === 0 ? locateInEmpty : locateInElement;
    return f(doc, node, x);
  };
  var $_d874ud14njeajonl6 = { search: search$1 };

  var caretPositionFromPoint = function (doc, x, y) {
    return Option.from(doc.dom().caretPositionFromPoint(x, y)).bind(function (pos) {
      if (pos.offsetNode === null)
        return Option.none();
      var r = doc.dom().createRange();
      r.setStart(pos.offsetNode, pos.offset);
      r.collapse();
      return Option.some(r);
    });
  };
  var caretRangeFromPoint = function (doc, x, y) {
    return Option.from(doc.dom().caretRangeFromPoint(x, y));
  };
  var searchTextNodes = function (doc, node, x, y) {
    var r = doc.dom().createRange();
    r.selectNode(node.dom());
    var rect = r.getBoundingClientRect();
    var boundedX = Math.max(rect.left, Math.min(rect.right, x));
    var boundedY = Math.max(rect.top, Math.min(rect.bottom, y));
    return $_8fkvyn14kjeajonkx.locate(doc, node, boundedX, boundedY);
  };
  var searchFromPoint = function (doc, x, y) {
    return $_8icwg5xfjeajomp0.fromPoint(doc, x, y).bind(function (elem) {
      var fallback = function () {
        return $_d874ud14njeajonl6.search(doc, elem, x);
      };
      return $_6xy0ax3jeajomo0.children(elem).length === 0 ? fallback() : searchTextNodes(doc, elem, x, y).orThunk(fallback);
    });
  };
  var availableSearch = document.caretPositionFromPoint ? caretPositionFromPoint : document.caretRangeFromPoint ? caretRangeFromPoint : searchFromPoint;
  var fromPoint$1 = function (win, x, y) {
    var doc = $_8icwg5xfjeajomp0.fromDom(win.document);
    return availableSearch(doc, x, y).map(function (rng) {
      return $_6or9k114cjeajonk7.range($_8icwg5xfjeajomp0.fromDom(rng.startContainer), rng.startOffset, $_8icwg5xfjeajomp0.fromDom(rng.endContainer), rng.endOffset);
    });
  };
  var $_76xkhx14jjeajonku = { fromPoint: fromPoint$1 };

  var withinContainer = function (win, ancestor, outerRange, selector) {
    var innerRange = $_10zbi314hjeajonkk.create(win);
    var self = $_bokbooxejeajomow.is(ancestor, selector) ? [ancestor] : [];
    var elements = self.concat($_62qkn1zvjeajomyr.descendants(ancestor, selector));
    return $_5r3pikwsjeajommo.filter(elements, function (elem) {
      $_10zbi314hjeajonkk.selectNodeContentsUsing(innerRange, elem);
      return $_10zbi314hjeajonkk.isWithin(outerRange, innerRange);
    });
  };
  var find$4 = function (win, selection, selector) {
    var outerRange = $_6uqq6f14ijeajonko.asLtrRange(win, selection);
    var ancestor = $_8icwg5xfjeajomp0.fromDom(outerRange.commonAncestorContainer);
    return $_bsb5vnxkjeajompc.isElement(ancestor) ? withinContainer(win, ancestor, outerRange, selector) : [];
  };
  var $_ej37b314pjeajonlf = { find: find$4 };

  var beforeSpecial = function (element, offset) {
    var name = $_bsb5vnxkjeajompc.name(element);
    if ('input' === name)
      return $_35lvni14djeajonka.after(element);
    else if (!$_5r3pikwsjeajommo.contains([
        'br',
        'img'
      ], name))
      return $_35lvni14djeajonka.on(element, offset);
    else
      return offset === 0 ? $_35lvni14djeajonka.before(element) : $_35lvni14djeajonka.after(element);
  };
  var preprocessRelative = function (startSitu, finishSitu) {
    var start = startSitu.fold($_35lvni14djeajonka.before, beforeSpecial, $_35lvni14djeajonka.after);
    var finish = finishSitu.fold($_35lvni14djeajonka.before, beforeSpecial, $_35lvni14djeajonka.after);
    return $_6or9k114cjeajonk7.relative(start, finish);
  };
  var preprocessExact = function (start, soffset, finish, foffset) {
    var startSitu = beforeSpecial(start, soffset);
    var finishSitu = beforeSpecial(finish, foffset);
    return $_6or9k114cjeajonk7.relative(startSitu, finishSitu);
  };
  var preprocess = function (selection) {
    return selection.match({
      domRange: function (rng) {
        var start = $_8icwg5xfjeajomp0.fromDom(rng.startContainer);
        var finish = $_8icwg5xfjeajomp0.fromDom(rng.endContainer);
        return preprocessExact(start, rng.startOffset, finish, rng.endOffset);
      },
      relative: preprocessRelative,
      exact: preprocessExact
    });
  };
  var $_eio58414qjeajonli = {
    beforeSpecial: beforeSpecial,
    preprocess: preprocess,
    preprocessRelative: preprocessRelative,
    preprocessExact: preprocessExact
  };

  var doSetNativeRange = function (win, rng) {
    Option.from(win.getSelection()).each(function (selection) {
      selection.removeAllRanges();
      selection.addRange(rng);
    });
  };
  var doSetRange = function (win, start, soffset, finish, foffset) {
    var rng = $_10zbi314hjeajonkk.exactToNative(win, start, soffset, finish, foffset);
    doSetNativeRange(win, rng);
  };
  var findWithin = function (win, selection, selector) {
    return $_ej37b314pjeajonlf.find(win, selection, selector);
  };
  var setRangeFromRelative = function (win, relative) {
    return $_6uqq6f14ijeajonko.diagnose(win, relative).match({
      ltr: function (start, soffset, finish, foffset) {
        doSetRange(win, start, soffset, finish, foffset);
      },
      rtl: function (start, soffset, finish, foffset) {
        var selection = win.getSelection();
        if (selection.setBaseAndExtent) {
          selection.setBaseAndExtent(start.dom(), soffset, finish.dom(), foffset);
        } else if (selection.extend) {
          selection.collapse(start.dom(), soffset);
          selection.extend(finish.dom(), foffset);
        } else {
          doSetRange(win, finish, foffset, start, soffset);
        }
      }
    });
  };
  var setExact = function (win, start, soffset, finish, foffset) {
    var relative = $_eio58414qjeajonli.preprocessExact(start, soffset, finish, foffset);
    setRangeFromRelative(win, relative);
  };
  var setRelative = function (win, startSitu, finishSitu) {
    var relative = $_eio58414qjeajonli.preprocessRelative(startSitu, finishSitu);
    setRangeFromRelative(win, relative);
  };
  var toNative = function (selection) {
    var win = $_6or9k114cjeajonk7.getWin(selection).dom();
    var getDomRange = function (start, soffset, finish, foffset) {
      return $_10zbi314hjeajonkk.exactToNative(win, start, soffset, finish, foffset);
    };
    var filtered = $_eio58414qjeajonli.preprocess(selection);
    return $_6uqq6f14ijeajonko.diagnose(win, filtered).match({
      ltr: getDomRange,
      rtl: getDomRange
    });
  };
  var readRange = function (selection) {
    if (selection.rangeCount > 0) {
      var firstRng = selection.getRangeAt(0);
      var lastRng = selection.getRangeAt(selection.rangeCount - 1);
      return Option.some($_6or9k114cjeajonk7.range($_8icwg5xfjeajomp0.fromDom(firstRng.startContainer), firstRng.startOffset, $_8icwg5xfjeajomp0.fromDom(lastRng.endContainer), lastRng.endOffset));
    } else {
      return Option.none();
    }
  };
  var doGetExact = function (selection) {
    var anchorNode = $_8icwg5xfjeajomp0.fromDom(selection.anchorNode);
    var focusNode = $_8icwg5xfjeajomp0.fromDom(selection.focusNode);
    return $_eo1xe414fjeajonkg.after(anchorNode, selection.anchorOffset, focusNode, selection.focusOffset) ? Option.some($_6or9k114cjeajonk7.range($_8icwg5xfjeajomp0.fromDom(selection.anchorNode), selection.anchorOffset, $_8icwg5xfjeajomp0.fromDom(selection.focusNode), selection.focusOffset)) : readRange(selection);
  };
  var setToElement = function (win, element) {
    var rng = $_10zbi314hjeajonkk.selectNodeContents(win, element);
    doSetNativeRange(win, rng);
  };
  var forElement = function (win, element) {
    var rng = $_10zbi314hjeajonkk.selectNodeContents(win, element);
    return $_6or9k114cjeajonk7.range($_8icwg5xfjeajomp0.fromDom(rng.startContainer), rng.startOffset, $_8icwg5xfjeajomp0.fromDom(rng.endContainer), rng.endOffset);
  };
  var getExact = function (win) {
    var selection = win.getSelection();
    return selection.rangeCount > 0 ? doGetExact(selection) : Option.none();
  };
  var get$13 = function (win) {
    return getExact(win).map(function (range) {
      return $_6or9k114cjeajonk7.exact(range.start(), range.soffset(), range.finish(), range.foffset());
    });
  };
  var getFirstRect$1 = function (win, selection) {
    var rng = $_6uqq6f14ijeajonko.asLtrRange(win, selection);
    return $_10zbi314hjeajonkk.getFirstRect(rng);
  };
  var getBounds$1 = function (win, selection) {
    var rng = $_6uqq6f14ijeajonko.asLtrRange(win, selection);
    return $_10zbi314hjeajonkk.getBounds(rng);
  };
  var getAtPoint = function (win, x, y) {
    return $_76xkhx14jjeajonku.fromPoint(win, x, y);
  };
  var getAsString = function (win, selection) {
    var rng = $_6uqq6f14ijeajonko.asLtrRange(win, selection);
    return $_10zbi314hjeajonkk.toString(rng);
  };
  var clear$1 = function (win) {
    var selection = win.getSelection();
    selection.removeAllRanges();
  };
  var clone$3 = function (win, selection) {
    var rng = $_6uqq6f14ijeajonko.asLtrRange(win, selection);
    return $_10zbi314hjeajonkk.cloneFragment(rng);
  };
  var replace = function (win, selection, elements) {
    var rng = $_6uqq6f14ijeajonko.asLtrRange(win, selection);
    var fragment = $_44xbwk14gjeajonki.fromElements(elements, win.document);
    $_10zbi314hjeajonkk.replaceWith(rng, fragment);
  };
  var deleteAt = function (win, selection) {
    var rng = $_6uqq6f14ijeajonko.asLtrRange(win, selection);
    $_10zbi314hjeajonkk.deleteContents(rng);
  };
  var isCollapsed = function (start, soffset, finish, foffset) {
    return $_a12rd3x9jeajomoj.eq(start, finish) && soffset === foffset;
  };
  var $_ci1m4g14ejeajonkd = {
    setExact: setExact,
    getExact: getExact,
    get: get$13,
    setRelative: setRelative,
    toNative: toNative,
    setToElement: setToElement,
    clear: clear$1,
    clone: clone$3,
    replace: replace,
    deleteAt: deleteAt,
    forElement: forElement,
    getFirstRect: getFirstRect$1,
    getBounds: getBounds$1,
    getAtPoint: getAtPoint,
    findWithin: findWithin,
    getAsString: getAsString,
    isCollapsed: isCollapsed
  };

  var COLLAPSED_WIDTH = 2;
  var collapsedRect = function (rect) {
    return {
      left: rect.left,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      width: $_ddy4s3wjjeajomls.constant(COLLAPSED_WIDTH),
      height: rect.height
    };
  };
  var toRect$1 = function (rawRect) {
    return {
      left: $_ddy4s3wjjeajomls.constant(rawRect.left),
      top: $_ddy4s3wjjeajomls.constant(rawRect.top),
      right: $_ddy4s3wjjeajomls.constant(rawRect.right),
      bottom: $_ddy4s3wjjeajomls.constant(rawRect.bottom),
      width: $_ddy4s3wjjeajomls.constant(rawRect.width),
      height: $_ddy4s3wjjeajomls.constant(rawRect.height)
    };
  };
  var getRectsFromRange = function (range) {
    if (!range.collapsed) {
      return $_5r3pikwsjeajommo.map(range.getClientRects(), toRect$1);
    } else {
      var start_1 = $_8icwg5xfjeajomp0.fromDom(range.startContainer);
      return $_6xy0ax3jeajomo0.parent(start_1).bind(function (parent) {
        var selection = $_6or9k114cjeajonk7.exact(start_1, range.startOffset, parent, $_5pistq149jeajonk1.getEnd(parent));
        var optRect = $_ci1m4g14ejeajonkd.getFirstRect(range.startContainer.ownerDocument.defaultView, selection);
        return optRect.map(collapsedRect).map($_5r3pikwsjeajommo.pure);
      }).getOr([]);
    }
  };
  var getRectangles = function (cWin) {
    var sel = cWin.getSelection();
    return sel !== undefined && sel.rangeCount > 0 ? getRectsFromRange(sel.getRangeAt(0)) : [];
  };
  var $_1t52ss148jeajonju = { getRectangles: getRectangles };

  var autocompleteHack = function () {
    return function (f) {
      setTimeout(function () {
        f();
      }, 0);
    };
  };
  var resume = function (cWin) {
    cWin.focus();
    var iBody = $_8icwg5xfjeajomp0.fromDom(cWin.document.body);
    var inInput = $_gc8hiiytjeajomut.active().exists(function (elem) {
      return $_5r3pikwsjeajommo.contains([
        'input',
        'textarea'
      ], $_bsb5vnxkjeajompc.name(elem));
    });
    var transaction = inInput ? autocompleteHack() : $_ddy4s3wjjeajomls.apply;
    transaction(function () {
      $_gc8hiiytjeajomut.active().each($_gc8hiiytjeajomut.blur);
      $_gc8hiiytjeajomut.focus(iBody);
    });
  };
  var $_2epwkb14rjeajonlk = { resume: resume };

  var EXTRA_SPACING = 50;
  var data = 'data-' + $_eanbiezejeajomx0.resolve('last-outer-height');
  var setLastHeight = function (cBody, value) {
    $_a7s3osxrjeajomqe.set(cBody, data, value);
  };
  var getLastHeight = function (cBody) {
    return $_ecimg0147jeajonjs.safeParse(cBody, data);
  };
  var getBoundsFrom = function (rect) {
    return {
      top: $_ddy4s3wjjeajomls.constant(rect.top()),
      bottom: $_ddy4s3wjjeajomls.constant(rect.top() + rect.height())
    };
  };
  var getBounds$2 = function (cWin) {
    var rects = $_1t52ss148jeajonju.getRectangles(cWin);
    return rects.length > 0 ? Option.some(rects[0]).map(getBoundsFrom) : Option.none();
  };
  var findDelta = function (outerWindow, cBody) {
    var last = getLastHeight(cBody);
    var current = outerWindow.innerHeight;
    return last > current ? Option.some(last - current) : Option.none();
  };
  var calculate = function (cWin, bounds, delta) {
    var isOutside = bounds.top() > cWin.innerHeight || bounds.bottom() > cWin.innerHeight;
    return isOutside ? Math.min(delta, bounds.bottom() - cWin.innerHeight + EXTRA_SPACING) : 0;
  };
  var setup$1 = function (outerWindow, cWin) {
    var cBody = $_8icwg5xfjeajomp0.fromDom(cWin.document.body);
    var toEditing = function () {
      $_2epwkb14rjeajonlk.resume(cWin);
    };
    var onResize = $_2x1yyu13xjeajonih.bind($_8icwg5xfjeajomp0.fromDom(outerWindow), 'resize', function () {
      findDelta(outerWindow, cBody).each(function (delta) {
        getBounds$2(cWin).each(function (bounds) {
          var cScrollBy = calculate(cWin, bounds, delta);
          if (cScrollBy !== 0) {
            cWin.scrollTo(cWin.pageXOffset, cWin.pageYOffset + cScrollBy);
          }
        });
      });
      setLastHeight(cBody, outerWindow.innerHeight);
    });
    setLastHeight(cBody, outerWindow.innerHeight);
    var destroy = function () {
      onResize.unbind();
    };
    return {
      toEditing: toEditing,
      destroy: destroy
    };
  };
  var $_e5c5de146jeajonjk = { setup: setup$1 };

  var getBodyFromFrame = function (frame) {
    return Option.some($_8icwg5xfjeajomp0.fromDom(frame.dom().contentWindow.document.body));
  };
  var getDocFromFrame = function (frame) {
    return Option.some($_8icwg5xfjeajomp0.fromDom(frame.dom().contentWindow.document));
  };
  var getWinFromFrame = function (frame) {
    return Option.from(frame.dom().contentWindow);
  };
  var getSelectionFromFrame = function (frame) {
    var optWin = getWinFromFrame(frame);
    return optWin.bind($_ci1m4g14ejeajonkd.getExact);
  };
  var getFrame = function (editor) {
    return editor.getFrame();
  };
  var getOrDerive = function (name, f) {
    return function (editor) {
      var g = editor[name].getOrThunk(function () {
        var frame = getFrame(editor);
        return function () {
          return f(frame);
        };
      });
      return g();
    };
  };
  var getOrListen = function (editor, doc, name, type) {
    return editor[name].getOrThunk(function () {
      return function (handler) {
        return $_2x1yyu13xjeajonih.bind(doc, type, handler);
      };
    });
  };
  var toRect$2 = function (rect) {
    return {
      left: $_ddy4s3wjjeajomls.constant(rect.left),
      top: $_ddy4s3wjjeajomls.constant(rect.top),
      right: $_ddy4s3wjjeajomls.constant(rect.right),
      bottom: $_ddy4s3wjjeajomls.constant(rect.bottom),
      width: $_ddy4s3wjjeajomls.constant(rect.width),
      height: $_ddy4s3wjjeajomls.constant(rect.height)
    };
  };
  var getActiveApi = function (editor) {
    var frame = getFrame(editor);
    var tryFallbackBox = function (win) {
      var isCollapsed = function (sel) {
        return $_a12rd3x9jeajomoj.eq(sel.start(), sel.finish()) && sel.soffset() === sel.foffset();
      };
      var toStartRect = function (sel) {
        var rect = sel.start().dom().getBoundingClientRect();
        return rect.width > 0 || rect.height > 0 ? Option.some(rect).map(toRect$2) : Option.none();
      };
      return $_ci1m4g14ejeajonkd.getExact(win).filter(isCollapsed).bind(toStartRect);
    };
    return getBodyFromFrame(frame).bind(function (body) {
      return getDocFromFrame(frame).bind(function (doc) {
        return getWinFromFrame(frame).map(function (win) {
          var html = $_8icwg5xfjeajomp0.fromDom(doc.dom().documentElement);
          var getCursorBox = editor.getCursorBox.getOrThunk(function () {
            return function () {
              return $_ci1m4g14ejeajonkd.get(win).bind(function (sel) {
                return $_ci1m4g14ejeajonkd.getFirstRect(win, sel).orThunk(function () {
                  return tryFallbackBox(win);
                });
              });
            };
          });
          var setSelection = editor.setSelection.getOrThunk(function () {
            return function (start, soffset, finish, foffset) {
              $_ci1m4g14ejeajonkd.setExact(win, start, soffset, finish, foffset);
            };
          });
          var clearSelection = editor.clearSelection.getOrThunk(function () {
            return function () {
              $_ci1m4g14ejeajonkd.clear(win);
            };
          });
          return {
            body: $_ddy4s3wjjeajomls.constant(body),
            doc: $_ddy4s3wjjeajomls.constant(doc),
            win: $_ddy4s3wjjeajomls.constant(win),
            html: $_ddy4s3wjjeajomls.constant(html),
            getSelection: $_ddy4s3wjjeajomls.curry(getSelectionFromFrame, frame),
            setSelection: setSelection,
            clearSelection: clearSelection,
            frame: $_ddy4s3wjjeajomls.constant(frame),
            onKeyup: getOrListen(editor, doc, 'onKeyup', 'keyup'),
            onNodeChanged: getOrListen(editor, doc, 'onNodeChanged', 'selectionchange'),
            onDomChanged: editor.onDomChanged,
            onScrollToCursor: editor.onScrollToCursor,
            onScrollToElement: editor.onScrollToElement,
            onToReading: editor.onToReading,
            onToEditing: editor.onToEditing,
            onToolbarScrollStart: editor.onToolbarScrollStart,
            onTouchContent: editor.onTouchContent,
            onTapContent: editor.onTapContent,
            onTouchToolstrip: editor.onTouchToolstrip,
            getCursorBox: getCursorBox
          };
        });
      });
    });
  };
  var $_9tao1w14sjeajonlp = {
    getBody: getOrDerive('getBody', getBodyFromFrame),
    getDoc: getOrDerive('getDoc', getDocFromFrame),
    getWin: getOrDerive('getWin', getWinFromFrame),
    getSelection: getOrDerive('getSelection', getSelectionFromFrame),
    getFrame: getFrame,
    getActiveApi: getActiveApi
  };

  var attr = 'data-ephox-mobile-fullscreen-style';
  var siblingStyles = 'display:none!important;';
  var ancestorPosition = 'position:absolute!important;';
  var ancestorStyles = 'top:0!important;left:0!important;margin:0' + '!important;padding:0!important;width:100%!important;';
  var bgFallback = 'background-color:rgb(255,255,255)!important;';
  var isAndroid = $_g80fw1wkjeajomlw.detect().os.isAndroid();
  var matchColor = function (editorBody) {
    var color = $_64rfd7103jeajomzb.get(editorBody, 'background-color');
    return color !== undefined && color !== '' ? 'background-color:' + color + '!important' : bgFallback;
  };
  var clobberStyles = function (container, editorBody) {
    var gatherSibilings = function (element) {
      var siblings = $_62qkn1zvjeajomyr.siblings(element, '*');
      return siblings;
    };
    var clobber = function (clobberStyle) {
      return function (element) {
        var styles = $_a7s3osxrjeajomqe.get(element, 'style');
        var backup = styles === undefined ? 'no-styles' : styles.trim();
        if (backup === clobberStyle) {
          return;
        } else {
          $_a7s3osxrjeajomqe.set(element, attr, backup);
          $_a7s3osxrjeajomqe.set(element, 'style', clobberStyle);
        }
      };
    };
    var ancestors = $_62qkn1zvjeajomyr.ancestors(container, '*');
    var siblings = $_5r3pikwsjeajommo.bind(ancestors, gatherSibilings);
    var bgColor = matchColor(editorBody);
    $_5r3pikwsjeajommo.each(siblings, clobber(siblingStyles));
    $_5r3pikwsjeajommo.each(ancestors, clobber(ancestorPosition + ancestorStyles + bgColor));
    var containerStyles = isAndroid === true ? '' : ancestorPosition;
    clobber(containerStyles + ancestorStyles + bgColor)(container);
  };
  var restoreStyles = function () {
    var clobberedEls = $_62qkn1zvjeajomyr.all('[' + attr + ']');
    $_5r3pikwsjeajommo.each(clobberedEls, function (element) {
      var restore = $_a7s3osxrjeajomqe.get(element, attr);
      if (restore !== 'no-styles') {
        $_a7s3osxrjeajomqe.set(element, 'style', restore);
      } else {
        $_a7s3osxrjeajomqe.remove(element, 'style');
      }
      $_a7s3osxrjeajomqe.remove(element, attr);
    });
  };
  var $_3kxbuv14tjeajonlw = {
    clobberStyles: clobberStyles,
    restoreStyles: restoreStyles
  };

  var tag = function () {
    var head = $_3vna6mzxjeajomyv.first('head').getOrDie();
    var nu = function () {
      var meta = $_8icwg5xfjeajomp0.fromTag('meta');
      $_a7s3osxrjeajomqe.set(meta, 'name', 'viewport');
      $_efdcljx2jeajomny.append(head, meta);
      return meta;
    };
    var element = $_3vna6mzxjeajomyv.first('meta[name="viewport"]').getOrThunk(nu);
    var backup = $_a7s3osxrjeajomqe.get(element, 'content');
    var maximize = function () {
      $_a7s3osxrjeajomqe.set(element, 'content', 'width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0');
    };
    var restore = function () {
      if (backup !== undefined && backup !== null && backup.length > 0) {
        $_a7s3osxrjeajomqe.set(element, 'content', backup);
      } else {
        $_a7s3osxrjeajomqe.set(element, 'content', 'user-scalable=yes');
      }
    };
    return {
      maximize: maximize,
      restore: restore
    };
  };
  var $_4ekyh714ujeajonm1 = { tag: tag };

  var create$5 = function (platform, mask) {
    var meta = $_4ekyh714ujeajonm1.tag();
    var androidApi = $_cfrzgh12ojeajonb2.api();
    var androidEvents = $_cfrzgh12ojeajonb2.api();
    var enter = function () {
      mask.hide();
      $_65t2ydynjeajomul.add(platform.container, $_eanbiezejeajomx0.resolve('fullscreen-maximized'));
      $_65t2ydynjeajomul.add(platform.container, $_eanbiezejeajomx0.resolve('android-maximized'));
      meta.maximize();
      $_65t2ydynjeajomul.add(platform.body, $_eanbiezejeajomx0.resolve('android-scroll-reload'));
      androidApi.set($_e5c5de146jeajonjk.setup(platform.win, $_9tao1w14sjeajonlp.getWin(platform.editor).getOrDie('no')));
      $_9tao1w14sjeajonlp.getActiveApi(platform.editor).each(function (editorApi) {
        $_3kxbuv14tjeajonlw.clobberStyles(platform.container, editorApi.body());
        androidEvents.set($_az5l95142jeajoniy.initEvents(editorApi, platform.toolstrip, platform.alloy));
      });
    };
    var exit = function () {
      meta.restore();
      mask.show();
      $_65t2ydynjeajomul.remove(platform.container, $_eanbiezejeajomx0.resolve('fullscreen-maximized'));
      $_65t2ydynjeajomul.remove(platform.container, $_eanbiezejeajomx0.resolve('android-maximized'));
      $_3kxbuv14tjeajonlw.restoreStyles();
      $_65t2ydynjeajomul.remove(platform.body, $_eanbiezejeajomx0.resolve('android-scroll-reload'));
      androidEvents.clear();
      androidApi.clear();
    };
    return {
      enter: enter,
      exit: exit
    };
  };
  var $_d45vdn141jeajoniv = { create: create$5 };

  var adaptable = function (fn, rate) {
    var timer = null;
    var args = null;
    var cancel = function () {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
        args = null;
      }
    };
    var throttle = function () {
      args = arguments;
      if (timer === null) {
        timer = setTimeout(function () {
          fn.apply(null, args);
          timer = null;
          args = null;
        }, rate);
      }
    };
    return {
      cancel: cancel,
      throttle: throttle
    };
  };
  var first$4 = function (fn, rate) {
    var timer = null;
    var cancel = function () {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
    };
    var throttle = function () {
      var args = arguments;
      if (timer === null) {
        timer = setTimeout(function () {
          fn.apply(null, args);
          timer = null;
          args = null;
        }, rate);
      }
    };
    return {
      cancel: cancel,
      throttle: throttle
    };
  };
  var last$3 = function (fn, rate) {
    var timer = null;
    var cancel = function () {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
    };
    var throttle = function () {
      var args = arguments;
      if (timer !== null)
        clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(null, args);
        timer = null;
        args = null;
      }, rate);
    };
    return {
      cancel: cancel,
      throttle: throttle
    };
  };
  var $_9dwomk14wjeajonmb = {
    adaptable: adaptable,
    first: first$4,
    last: last$3
  };

  var sketch$10 = function (onView, translate) {
    var memIcon = $_9mcsdr11rjeajon7c.record(Container.sketch({
      dom: $_52n2w4113jeajon4k.dom('<div aria-hidden="true" class="${prefix}-mask-tap-icon"></div>'),
      containerBehaviours: $_cwu2vpy2jeajomrh.derive([Toggling.config({
          toggleClass: $_eanbiezejeajomx0.resolve('mask-tap-icon-selected'),
          toggleOnExecute: false
        })])
    }));
    var onViewThrottle = $_9dwomk14wjeajonmb.first(onView, 200);
    return Container.sketch({
      dom: $_52n2w4113jeajon4k.dom('<div class="${prefix}-disabled-mask"></div>'),
      components: [Container.sketch({
          dom: $_52n2w4113jeajon4k.dom('<div class="${prefix}-content-container"></div>'),
          components: [Button.sketch({
              dom: $_52n2w4113jeajon4k.dom('<div class="${prefix}-content-tap-section"></div>'),
              components: [memIcon.asSpec()],
              action: function (button) {
                onViewThrottle.throttle();
              },
              buttonBehaviours: $_cwu2vpy2jeajomrh.derive([Toggling.config({ toggleClass: $_eanbiezejeajomx0.resolve('mask-tap-icon-selected') })])
            })]
        })]
    });
  };
  var $_cade9414vjeajonm5 = { sketch: sketch$10 };

  var MobileSchema = $_8qt2pyyejeajomtl.objOf([
    $_8qbqu2y7jeajomsl.strictObjOf('editor', [
      $_8qbqu2y7jeajomsl.strict('getFrame'),
      $_8qbqu2y7jeajomsl.option('getBody'),
      $_8qbqu2y7jeajomsl.option('getDoc'),
      $_8qbqu2y7jeajomsl.option('getWin'),
      $_8qbqu2y7jeajomsl.option('getSelection'),
      $_8qbqu2y7jeajomsl.option('setSelection'),
      $_8qbqu2y7jeajomsl.option('clearSelection'),
      $_8qbqu2y7jeajomsl.option('cursorSaver'),
      $_8qbqu2y7jeajomsl.option('onKeyup'),
      $_8qbqu2y7jeajomsl.option('onNodeChanged'),
      $_8qbqu2y7jeajomsl.option('getCursorBox'),
      $_8qbqu2y7jeajomsl.strict('onDomChanged'),
      $_8qbqu2y7jeajomsl.defaulted('onTouchContent', $_ddy4s3wjjeajomls.noop),
      $_8qbqu2y7jeajomsl.defaulted('onTapContent', $_ddy4s3wjjeajomls.noop),
      $_8qbqu2y7jeajomsl.defaulted('onTouchToolstrip', $_ddy4s3wjjeajomls.noop),
      $_8qbqu2y7jeajomsl.defaulted('onScrollToCursor', $_ddy4s3wjjeajomls.constant({ unbind: $_ddy4s3wjjeajomls.noop })),
      $_8qbqu2y7jeajomsl.defaulted('onScrollToElement', $_ddy4s3wjjeajomls.constant({ unbind: $_ddy4s3wjjeajomls.noop })),
      $_8qbqu2y7jeajomsl.defaulted('onToEditing', $_ddy4s3wjjeajomls.constant({ unbind: $_ddy4s3wjjeajomls.noop })),
      $_8qbqu2y7jeajomsl.defaulted('onToReading', $_ddy4s3wjjeajomls.constant({ unbind: $_ddy4s3wjjeajomls.noop })),
      $_8qbqu2y7jeajomsl.defaulted('onToolbarScrollStart', $_ddy4s3wjjeajomls.identity)
    ]),
    $_8qbqu2y7jeajomsl.strict('socket'),
    $_8qbqu2y7jeajomsl.strict('toolstrip'),
    $_8qbqu2y7jeajomsl.strict('dropup'),
    $_8qbqu2y7jeajomsl.strict('toolbar'),
    $_8qbqu2y7jeajomsl.strict('container'),
    $_8qbqu2y7jeajomsl.strict('alloy'),
    $_8qbqu2y7jeajomsl.state('win', function (spec) {
      return $_6xy0ax3jeajomo0.owner(spec.socket).dom().defaultView;
    }),
    $_8qbqu2y7jeajomsl.state('body', function (spec) {
      return $_8icwg5xfjeajomp0.fromDom(spec.socket.dom().ownerDocument.body);
    }),
    $_8qbqu2y7jeajomsl.defaulted('translate', $_ddy4s3wjjeajomls.identity),
    $_8qbqu2y7jeajomsl.defaulted('setReadOnly', $_ddy4s3wjjeajomls.noop)
  ]);

  var produce = function (raw) {
    var mobile = $_8qt2pyyejeajomtl.asRawOrDie('Getting AndroidWebapp schema', MobileSchema, raw);
    $_64rfd7103jeajomzb.set(mobile.toolstrip, 'width', '100%');
    var onTap = function () {
      mobile.setReadOnly(true);
      mode.enter();
    };
    var mask = $_gcby0212tjeajonc2.build($_cade9414vjeajonm5.sketch(onTap, mobile.translate));
    mobile.alloy.add(mask);
    var maskApi = {
      show: function () {
        mobile.alloy.add(mask);
      },
      hide: function () {
        mobile.alloy.remove(mask);
      }
    };
    $_efdcljx2jeajomny.append(mobile.container, mask.element());
    var mode = $_d45vdn141jeajoniv.create(mobile, maskApi);
    return {
      setReadOnly: mobile.setReadOnly,
      refreshStructure: $_ddy4s3wjjeajomls.noop,
      enter: mode.enter,
      exit: mode.exit,
      destroy: $_ddy4s3wjjeajomls.noop
    };
  };
  var $_kbof7140jeajoniq = { produce: produce };

  var schema$14 = [
    $_8qbqu2y7jeajomsl.defaulted('shell', true),
    $_2ioems10ojeajon1y.field('toolbarBehaviours', [Replacing])
  ];
  var enhanceGroups = function (detail) {
    return { behaviours: $_cwu2vpy2jeajomrh.derive([Replacing.config({})]) };
  };
  var partTypes$1 = [$_7m3s6v10vjeajon34.optional({
      name: 'groups',
      overrides: enhanceGroups
    })];
  var $_dhllak150jeajonmz = {
    name: $_ddy4s3wjjeajomls.constant('Toolbar'),
    schema: $_ddy4s3wjjeajomls.constant(schema$14),
    parts: $_ddy4s3wjjeajomls.constant(partTypes$1)
  };

  var factory$4 = function (detail, components, spec, _externals) {
    var setGroups = function (toolbar, groups) {
      getGroupContainer(toolbar).fold(function () {
        console.error('Toolbar was defined to not be a shell, but no groups container was specified in components');
        throw new Error('Toolbar was defined to not be a shell, but no groups container was specified in components');
      }, function (container) {
        Replacing.set(container, groups);
      });
    };
    var getGroupContainer = function (component) {
      return detail.shell() ? Option.some(component) : $_opzv410tjeajon2o.getPart(component, detail, 'groups');
    };
    var extra = detail.shell() ? {
      behaviours: [Replacing.config({})],
      components: []
    } : {
      behaviours: [],
      components: components
    };
    return {
      uid: detail.uid(),
      dom: detail.dom(),
      components: extra.components,
      behaviours: $_2yrejjwyjeajomn9.deepMerge($_cwu2vpy2jeajomrh.derive(extra.behaviours), $_2ioems10ojeajon1y.get(detail.toolbarBehaviours())),
      apis: { setGroups: setGroups },
      domModification: { attributes: { role: 'group' } }
    };
  };
  var Toolbar = $_fp614n10pjeajon23.composite({
    name: 'Toolbar',
    configFields: $_dhllak150jeajonmz.schema(),
    partFields: $_dhllak150jeajonmz.parts(),
    factory: factory$4,
    apis: {
      setGroups: function (apis, toolbar, groups) {
        apis.setGroups(toolbar, groups);
      }
    }
  });

  var schema$15 = [
    $_8qbqu2y7jeajomsl.strict('items'),
    $_apbxenz6jeajomvz.markers(['itemClass']),
    $_2ioems10ojeajon1y.field('tgroupBehaviours', [Keying])
  ];
  var partTypes$2 = [$_7m3s6v10vjeajon34.group({
      name: 'items',
      unit: 'item',
      overrides: function (detail) {
        return { domModification: { classes: [detail.markers().itemClass()] } };
      }
    })];
  var $_3dpxoh152jeajonn5 = {
    name: $_ddy4s3wjjeajomls.constant('ToolbarGroup'),
    schema: $_ddy4s3wjjeajomls.constant(schema$15),
    parts: $_ddy4s3wjjeajomls.constant(partTypes$2)
  };

  var factory$5 = function (detail, components, spec, _externals) {
    return $_2yrejjwyjeajomn9.deepMerge({ dom: { attributes: { role: 'toolbar' } } }, {
      uid: detail.uid(),
      dom: detail.dom(),
      components: components,
      behaviours: $_2yrejjwyjeajomn9.deepMerge($_cwu2vpy2jeajomrh.derive([Keying.config({
          mode: 'flow',
          selector: '.' + detail.markers().itemClass()
        })]), $_2ioems10ojeajon1y.get(detail.tgroupBehaviours())),
      'debug.sketcher': spec['debug.sketcher']
    });
  };
  var ToolbarGroup = $_fp614n10pjeajon23.composite({
    name: 'ToolbarGroup',
    configFields: $_3dpxoh152jeajonn5.schema(),
    partFields: $_3dpxoh152jeajonn5.parts(),
    factory: factory$5
  });

  var dataHorizontal = 'data-' + $_eanbiezejeajomx0.resolve('horizontal-scroll');
  var canScrollVertically = function (container) {
    container.dom().scrollTop = 1;
    var result = container.dom().scrollTop !== 0;
    container.dom().scrollTop = 0;
    return result;
  };
  var canScrollHorizontally = function (container) {
    container.dom().scrollLeft = 1;
    var result = container.dom().scrollLeft !== 0;
    container.dom().scrollLeft = 0;
    return result;
  };
  var hasVerticalScroll = function (container) {
    return container.dom().scrollTop > 0 || canScrollVertically(container);
  };
  var hasHorizontalScroll = function (container) {
    return container.dom().scrollLeft > 0 || canScrollHorizontally(container);
  };
  var markAsHorizontal = function (container) {
    $_a7s3osxrjeajomqe.set(container, dataHorizontal, 'true');
  };
  var hasScroll = function (container) {
    return $_a7s3osxrjeajomqe.get(container, dataHorizontal) === 'true' ? hasHorizontalScroll : hasVerticalScroll;
  };
  var exclusive = function (scope, selector) {
    return $_2x1yyu13xjeajonih.bind(scope, 'touchmove', function (event) {
      $_3vna6mzxjeajomyv.closest(event.target(), selector).filter(hasScroll).fold(function () {
        event.raw().preventDefault();
      }, $_ddy4s3wjjeajomls.noop);
    });
  };
  var $_fb5557153jeajonn8 = {
    exclusive: exclusive,
    markAsHorizontal: markAsHorizontal
  };

  function ScrollingToolbar () {
    var makeGroup = function (gSpec) {
      var scrollClass = gSpec.scrollable === true ? '${prefix}-toolbar-scrollable-group' : '';
      return {
        dom: $_52n2w4113jeajon4k.dom('<div aria-label="' + gSpec.label + '" class="${prefix}-toolbar-group ' + scrollClass + '"></div>'),
        tgroupBehaviours: $_cwu2vpy2jeajomrh.derive([$_62oo9h126jeajon8w.config('adhoc-scrollable-toolbar', gSpec.scrollable === true ? [$_2vhl2dy4jeajoms5.runOnInit(function (component, simulatedEvent) {
              $_64rfd7103jeajomzb.set(component.element(), 'overflow-x', 'auto');
              $_fb5557153jeajonn8.markAsHorizontal(component.element());
              $_9y1q7q13ujeajoni4.register(component.element());
            })] : [])]),
        components: [Container.sketch({ components: [ToolbarGroup.parts().items({})] })],
        markers: { itemClass: $_eanbiezejeajomx0.resolve('toolbar-group-item') },
        items: gSpec.items
      };
    };
    var toolbar = $_gcby0212tjeajonc2.build(Toolbar.sketch({
      dom: $_52n2w4113jeajon4k.dom('<div class="${prefix}-toolbar"></div>'),
      components: [Toolbar.parts().groups({})],
      toolbarBehaviours: $_cwu2vpy2jeajomrh.derive([
        Toggling.config({
          toggleClass: $_eanbiezejeajomx0.resolve('context-toolbar'),
          toggleOnExecute: false,
          aria: { mode: 'none' }
        }),
        Keying.config({ mode: 'cyclic' })
      ]),
      shell: true
    }));
    var wrapper = $_gcby0212tjeajonc2.build(Container.sketch({
      dom: { classes: [$_eanbiezejeajomx0.resolve('toolstrip')] },
      components: [$_gcby0212tjeajonc2.premade(toolbar)],
      containerBehaviours: $_cwu2vpy2jeajomrh.derive([Toggling.config({
          toggleClass: $_eanbiezejeajomx0.resolve('android-selection-context-toolbar'),
          toggleOnExecute: false
        })])
    }));
    var resetGroups = function () {
      Toolbar.setGroups(toolbar, initGroups.get());
      Toggling.off(toolbar);
    };
    var initGroups = Cell([]);
    var setGroups = function (gs) {
      initGroups.set(gs);
      resetGroups();
    };
    var createGroups = function (gs) {
      return $_5r3pikwsjeajommo.map(gs, $_ddy4s3wjjeajomls.compose(ToolbarGroup.sketch, makeGroup));
    };
    var refresh = function () {
      Toolbar.refresh(toolbar);
    };
    var setContextToolbar = function (gs) {
      Toggling.on(toolbar);
      Toolbar.setGroups(toolbar, gs);
    };
    var restoreToolbar = function () {
      if (Toggling.isOn(toolbar)) {
        resetGroups();
      }
    };
    var focus = function () {
      Keying.focusIn(toolbar);
    };
    return {
      wrapper: $_ddy4s3wjjeajomls.constant(wrapper),
      toolbar: $_ddy4s3wjjeajomls.constant(toolbar),
      createGroups: createGroups,
      setGroups: setGroups,
      setContextToolbar: setContextToolbar,
      restoreToolbar: restoreToolbar,
      refresh: refresh,
      focus: focus
    };
  }

  var makeEditSwitch = function (webapp) {
    return $_gcby0212tjeajonc2.build(Button.sketch({
      dom: $_52n2w4113jeajon4k.dom('<div class="${prefix}-mask-edit-icon ${prefix}-icon"></div>'),
      action: function () {
        webapp.run(function (w) {
          w.setReadOnly(false);
        });
      }
    }));
  };
  var makeSocket = function () {
    return $_gcby0212tjeajonc2.build(Container.sketch({
      dom: $_52n2w4113jeajon4k.dom('<div class="${prefix}-editor-socket"></div>'),
      components: [],
      containerBehaviours: $_cwu2vpy2jeajomrh.derive([Replacing.config({})])
    }));
  };
  var showEdit = function (socket, switchToEdit) {
    Replacing.append(socket, $_gcby0212tjeajonc2.premade(switchToEdit));
  };
  var hideEdit = function (socket, switchToEdit) {
    Replacing.remove(socket, switchToEdit);
  };
  var updateMode = function (socket, switchToEdit, readOnly, root) {
    var swap = readOnly === true ? Swapping.toAlpha : Swapping.toOmega;
    swap(root);
    var f = readOnly ? showEdit : hideEdit;
    f(socket, switchToEdit);
  };
  var $_e383zh154jeajonnd = {
    makeEditSwitch: makeEditSwitch,
    makeSocket: makeSocket,
    updateMode: updateMode
  };

  var getAnimationRoot = function (component, slideConfig) {
    return slideConfig.getAnimationRoot().fold(function () {
      return component.element();
    }, function (get) {
      return get(component);
    });
  };
  var getDimensionProperty = function (slideConfig) {
    return slideConfig.dimension().property();
  };
  var getDimension = function (slideConfig, elem) {
    return slideConfig.dimension().getDimension()(elem);
  };
  var disableTransitions = function (component, slideConfig) {
    var root = getAnimationRoot(component, slideConfig);
    $_9k06sz137jeajoneu.remove(root, [
      slideConfig.shrinkingClass(),
      slideConfig.growingClass()
    ]);
  };
  var setShrunk = function (component, slideConfig) {
    $_65t2ydynjeajomul.remove(component.element(), slideConfig.openClass());
    $_65t2ydynjeajomul.add(component.element(), slideConfig.closedClass());
    $_64rfd7103jeajomzb.set(component.element(), getDimensionProperty(slideConfig), '0px');
    $_64rfd7103jeajomzb.reflow(component.element());
  };
  var measureTargetSize = function (component, slideConfig) {
    setGrown(component, slideConfig);
    var expanded = getDimension(slideConfig, component.element());
    setShrunk(component, slideConfig);
    return expanded;
  };
  var setGrown = function (component, slideConfig) {
    $_65t2ydynjeajomul.remove(component.element(), slideConfig.closedClass());
    $_65t2ydynjeajomul.add(component.element(), slideConfig.openClass());
    $_64rfd7103jeajomzb.remove(component.element(), getDimensionProperty(slideConfig));
  };
  var doImmediateShrink = function (component, slideConfig, slideState) {
    slideState.setCollapsed();
    $_64rfd7103jeajomzb.set(component.element(), getDimensionProperty(slideConfig), getDimension(slideConfig, component.element()));
    $_64rfd7103jeajomzb.reflow(component.element());
    disableTransitions(component, slideConfig);
    setShrunk(component, slideConfig);
    slideConfig.onStartShrink()(component);
    slideConfig.onShrunk()(component);
  };
  var doStartShrink = function (component, slideConfig, slideState) {
    slideState.setCollapsed();
    $_64rfd7103jeajomzb.set(component.element(), getDimensionProperty(slideConfig), getDimension(slideConfig, component.element()));
    $_64rfd7103jeajomzb.reflow(component.element());
    var root = getAnimationRoot(component, slideConfig);
    $_65t2ydynjeajomul.add(root, slideConfig.shrinkingClass());
    setShrunk(component, slideConfig);
    slideConfig.onStartShrink()(component);
  };
  var doStartGrow = function (component, slideConfig, slideState) {
    var fullSize = measureTargetSize(component, slideConfig);
    var root = getAnimationRoot(component, slideConfig);
    $_65t2ydynjeajomul.add(root, slideConfig.growingClass());
    setGrown(component, slideConfig);
    $_64rfd7103jeajomzb.set(component.element(), getDimensionProperty(slideConfig), fullSize);
    slideState.setExpanded();
    slideConfig.onStartGrow()(component);
  };
  var grow = function (component, slideConfig, slideState) {
    if (!slideState.isExpanded())
      doStartGrow(component, slideConfig, slideState);
  };
  var shrink = function (component, slideConfig, slideState) {
    if (slideState.isExpanded())
      doStartShrink(component, slideConfig, slideState);
  };
  var immediateShrink = function (component, slideConfig, slideState) {
    if (slideState.isExpanded())
      doImmediateShrink(component, slideConfig, slideState);
  };
  var hasGrown = function (component, slideConfig, slideState) {
    return slideState.isExpanded();
  };
  var hasShrunk = function (component, slideConfig, slideState) {
    return slideState.isCollapsed();
  };
  var isGrowing = function (component, slideConfig, slideState) {
    var root = getAnimationRoot(component, slideConfig);
    return $_65t2ydynjeajomul.has(root, slideConfig.growingClass()) === true;
  };
  var isShrinking = function (component, slideConfig, slideState) {
    var root = getAnimationRoot(component, slideConfig);
    return $_65t2ydynjeajomul.has(root, slideConfig.shrinkingClass()) === true;
  };
  var isTransitioning = function (component, slideConfig, slideState) {
    return isGrowing(component, slideConfig, slideState) === true || isShrinking(component, slideConfig, slideState) === true;
  };
  var toggleGrow = function (component, slideConfig, slideState) {
    var f = slideState.isExpanded() ? doStartShrink : doStartGrow;
    f(component, slideConfig, slideState);
  };
  var $_f93dpt158jeajono2 = {
    grow: grow,
    shrink: shrink,
    immediateShrink: immediateShrink,
    hasGrown: hasGrown,
    hasShrunk: hasShrunk,
    isGrowing: isGrowing,
    isShrinking: isShrinking,
    isTransitioning: isTransitioning,
    toggleGrow: toggleGrow,
    disableTransitions: disableTransitions
  };

  var exhibit$5 = function (base, slideConfig) {
    var expanded = slideConfig.expanded();
    return expanded ? $_zcg1fyhjeajomu1.nu({
      classes: [slideConfig.openClass()],
      styles: {}
    }) : $_zcg1fyhjeajomu1.nu({
      classes: [slideConfig.closedClass()],
      styles: $_6rmcx0xsjeajomqm.wrap(slideConfig.dimension().property(), '0px')
    });
  };
  var events$9 = function (slideConfig, slideState) {
    return $_2vhl2dy4jeajoms5.derive([$_2vhl2dy4jeajoms5.run($_9ndt8owijeajomlo.transitionend(), function (component, simulatedEvent) {
        var raw = simulatedEvent.event().raw();
        if (raw.propertyName === slideConfig.dimension().property()) {
          $_f93dpt158jeajono2.disableTransitions(component, slideConfig, slideState);
          if (slideState.isExpanded())
            $_64rfd7103jeajomzb.remove(component.element(), slideConfig.dimension().property());
          var notify = slideState.isExpanded() ? slideConfig.onGrown() : slideConfig.onShrunk();
          notify(component, simulatedEvent);
        }
      })]);
  };
  var $_5imp0o157jeajonnx = {
    exhibit: exhibit$5,
    events: events$9
  };

  var SlidingSchema = [
    $_8qbqu2y7jeajomsl.strict('closedClass'),
    $_8qbqu2y7jeajomsl.strict('openClass'),
    $_8qbqu2y7jeajomsl.strict('shrinkingClass'),
    $_8qbqu2y7jeajomsl.strict('growingClass'),
    $_8qbqu2y7jeajomsl.option('getAnimationRoot'),
    $_apbxenz6jeajomvz.onHandler('onShrunk'),
    $_apbxenz6jeajomvz.onHandler('onStartShrink'),
    $_apbxenz6jeajomvz.onHandler('onGrown'),
    $_apbxenz6jeajomvz.onHandler('onStartGrow'),
    $_8qbqu2y7jeajomsl.defaulted('expanded', false),
    $_8qbqu2y7jeajomsl.strictOf('dimension', $_8qt2pyyejeajomtl.choose('property', {
      width: [
        $_apbxenz6jeajomvz.output('property', 'width'),
        $_apbxenz6jeajomvz.output('getDimension', function (elem) {
          return $_515ubo11kjeajon6n.get(elem) + 'px';
        })
      ],
      height: [
        $_apbxenz6jeajomvz.output('property', 'height'),
        $_apbxenz6jeajomvz.output('getDimension', function (elem) {
          return $_3aphev102jeajomz6.get(elem) + 'px';
        })
      ]
    }))
  ];

  var init$4 = function (spec) {
    var state = Cell(spec.expanded());
    var readState = function () {
      return 'expanded: ' + state.get();
    };
    return BehaviourState({
      isExpanded: function () {
        return state.get() === true;
      },
      isCollapsed: function () {
        return state.get() === false;
      },
      setCollapsed: $_ddy4s3wjjeajomls.curry(state.set, false),
      setExpanded: $_ddy4s3wjjeajomls.curry(state.set, true),
      readState: readState
    });
  };
  var $_cw1mdm15ajeajonoe = { init: init$4 };

  var Sliding = $_cwu2vpy2jeajomrh.create({
    fields: SlidingSchema,
    name: 'sliding',
    active: $_5imp0o157jeajonnx,
    apis: $_f93dpt158jeajono2,
    state: $_cw1mdm15ajeajonoe
  });

  var build$2 = function (refresh, scrollIntoView) {
    var dropup = $_gcby0212tjeajonc2.build(Container.sketch({
      dom: {
        tag: 'div',
        classes: $_eanbiezejeajomx0.resolve('dropup')
      },
      components: [],
      containerBehaviours: $_cwu2vpy2jeajomrh.derive([
        Replacing.config({}),
        Sliding.config({
          closedClass: $_eanbiezejeajomx0.resolve('dropup-closed'),
          openClass: $_eanbiezejeajomx0.resolve('dropup-open'),
          shrinkingClass: $_eanbiezejeajomx0.resolve('dropup-shrinking'),
          growingClass: $_eanbiezejeajomx0.resolve('dropup-growing'),
          dimension: { property: 'height' },
          onShrunk: function (component) {
            refresh();
            scrollIntoView();
            Replacing.set(component, []);
          },
          onGrown: function (component) {
            refresh();
            scrollIntoView();
          }
        }),
        $_8qo6opzdjeajomwx.orientation(function (component, data) {
          disappear($_ddy4s3wjjeajomls.noop);
        })
      ])
    }));
    var appear = function (menu, update, component) {
      if (Sliding.hasShrunk(dropup) === true && Sliding.isTransitioning(dropup) === false) {
        window.requestAnimationFrame(function () {
          update(component);
          Replacing.set(dropup, [menu()]);
          Sliding.grow(dropup);
        });
      }
    };
    var disappear = function (onReadyToShrink) {
      window.requestAnimationFrame(function () {
        onReadyToShrink();
        Sliding.shrink(dropup);
      });
    };
    return {
      appear: appear,
      disappear: disappear,
      component: $_ddy4s3wjjeajomls.constant(dropup),
      element: dropup.element
    };
  };
  var $_3nkbfy155jeajonni = { build: build$2 };

  var isDangerous = function (event) {
    return event.raw().which === $_1meuo5zpjeajomy3.BACKSPACE()[0] && !$_5r3pikwsjeajommo.contains([
      'input',
      'textarea'
    ], $_bsb5vnxkjeajompc.name(event.target()));
  };
  var isFirefox = $_g80fw1wkjeajomlw.detect().browser.isFirefox();
  var settingsSchema = $_8qt2pyyejeajomtl.objOfOnly([
    $_8qbqu2y7jeajomsl.strictFunction('triggerEvent'),
    $_8qbqu2y7jeajomsl.strictFunction('broadcastEvent'),
    $_8qbqu2y7jeajomsl.defaulted('stopBackspace', true)
  ]);
  var bindFocus = function (container, handler) {
    if (isFirefox) {
      return $_2x1yyu13xjeajonih.capture(container, 'focus', handler);
    } else {
      return $_2x1yyu13xjeajonih.bind(container, 'focusin', handler);
    }
  };
  var bindBlur = function (container, handler) {
    if (isFirefox) {
      return $_2x1yyu13xjeajonih.capture(container, 'blur', handler);
    } else {
      return $_2x1yyu13xjeajonih.bind(container, 'focusout', handler);
    }
  };
  var setup$2 = function (container, rawSettings) {
    var settings = $_8qt2pyyejeajomtl.asRawOrDie('Getting GUI events settings', settingsSchema, rawSettings);
    var pointerEvents = $_g80fw1wkjeajomlw.detect().deviceType.isTouch() ? [
      'touchstart',
      'touchmove',
      'touchend',
      'gesturestart'
    ] : [
      'mousedown',
      'mouseup',
      'mouseover',
      'mousemove',
      'mouseout',
      'click'
    ];
    var tapEvent = $_4dsamc144jeajonja.monitor(settings);
    var simpleEvents = $_5r3pikwsjeajommo.map(pointerEvents.concat([
      'selectstart',
      'input',
      'contextmenu',
      'change',
      'transitionend',
      'dragstart',
      'dragover',
      'drop'
    ]), function (type) {
      return $_2x1yyu13xjeajonih.bind(container, type, function (event) {
        tapEvent.fireIfReady(event, type).each(function (tapStopped) {
          if (tapStopped)
            event.kill();
        });
        var stopped = settings.triggerEvent(type, event);
        if (stopped)
          event.kill();
      });
    });
    var onKeydown = $_2x1yyu13xjeajonih.bind(container, 'keydown', function (event) {
      var stopped = settings.triggerEvent('keydown', event);
      if (stopped)
        event.kill();
      else if (settings.stopBackspace === true && isDangerous(event)) {
        event.prevent();
      }
    });
    var onFocusIn = bindFocus(container, function (event) {
      var stopped = settings.triggerEvent('focusin', event);
      if (stopped)
        event.kill();
    });
    var onFocusOut = bindBlur(container, function (event) {
      var stopped = settings.triggerEvent('focusout', event);
      if (stopped)
        event.kill();
      setTimeout(function () {
        settings.triggerEvent($_bckj1uwhjeajomli.postBlur(), event);
      }, 0);
    });
    var defaultView = $_6xy0ax3jeajomo0.defaultView(container);
    var onWindowScroll = $_2x1yyu13xjeajonih.bind(defaultView, 'scroll', function (event) {
      var stopped = settings.broadcastEvent($_bckj1uwhjeajomli.windowScroll(), event);
      if (stopped)
        event.kill();
    });
    var unbind = function () {
      $_5r3pikwsjeajommo.each(simpleEvents, function (e) {
        e.unbind();
      });
      onKeydown.unbind();
      onFocusIn.unbind();
      onFocusOut.unbind();
      onWindowScroll.unbind();
    };
    return { unbind: unbind };
  };
  var $_a8uyxh15djeajonp1 = { setup: setup$2 };

  var derive$3 = function (rawEvent, rawTarget) {
    var source = $_6rmcx0xsjeajomqm.readOptFrom(rawEvent, 'target').map(function (getTarget) {
      return getTarget();
    }).getOr(rawTarget);
    return Cell(source);
  };
  var $_6bhm7w15fjeajonpf = { derive: derive$3 };

  var fromSource = function (event, source) {
    var stopper = Cell(false);
    var cutter = Cell(false);
    var stop = function () {
      stopper.set(true);
    };
    var cut = function () {
      cutter.set(true);
    };
    return {
      stop: stop,
      cut: cut,
      isStopped: stopper.get,
      isCut: cutter.get,
      event: $_ddy4s3wjjeajomls.constant(event),
      setSource: source.set,
      getSource: source.get
    };
  };
  var fromExternal = function (event) {
    var stopper = Cell(false);
    var stop = function () {
      stopper.set(true);
    };
    return {
      stop: stop,
      cut: $_ddy4s3wjjeajomls.noop,
      isStopped: stopper.get,
      isCut: $_ddy4s3wjjeajomls.constant(false),
      event: $_ddy4s3wjjeajomls.constant(event),
      setTarget: $_ddy4s3wjjeajomls.die(new Error('Cannot set target of a broadcasted event')),
      getTarget: $_ddy4s3wjjeajomls.die(new Error('Cannot get target of a broadcasted event'))
    };
  };
  var fromTarget = function (event, target) {
    var source = Cell(target);
    return fromSource(event, source);
  };
  var $_edt55915gjeajonph = {
    fromSource: fromSource,
    fromExternal: fromExternal,
    fromTarget: fromTarget
  };

  var adt$6 = $_d1vtuwxwjeajomr2.generate([
    { stopped: [] },
    { resume: ['element'] },
    { complete: [] }
  ]);
  var doTriggerHandler = function (lookup, eventType, rawEvent, target, source, logger) {
    var handler = lookup(eventType, target);
    var simulatedEvent = $_edt55915gjeajonph.fromSource(rawEvent, source);
    return handler.fold(function () {
      logger.logEventNoHandlers(eventType, target);
      return adt$6.complete();
    }, function (handlerInfo) {
      var descHandler = handlerInfo.descHandler();
      var eventHandler = $_at88ae134jeajone6.getHandler(descHandler);
      eventHandler(simulatedEvent);
      if (simulatedEvent.isStopped()) {
        logger.logEventStopped(eventType, handlerInfo.element(), descHandler.purpose());
        return adt$6.stopped();
      } else if (simulatedEvent.isCut()) {
        logger.logEventCut(eventType, handlerInfo.element(), descHandler.purpose());
        return adt$6.complete();
      } else
        return $_6xy0ax3jeajomo0.parent(handlerInfo.element()).fold(function () {
          logger.logNoParent(eventType, handlerInfo.element(), descHandler.purpose());
          return adt$6.complete();
        }, function (parent) {
          logger.logEventResponse(eventType, handlerInfo.element(), descHandler.purpose());
          return adt$6.resume(parent);
        });
    });
  };
  var doTriggerOnUntilStopped = function (lookup, eventType, rawEvent, rawTarget, source, logger) {
    return doTriggerHandler(lookup, eventType, rawEvent, rawTarget, source, logger).fold(function () {
      return true;
    }, function (parent) {
      return doTriggerOnUntilStopped(lookup, eventType, rawEvent, parent, source, logger);
    }, function () {
      return false;
    });
  };
  var triggerHandler = function (lookup, eventType, rawEvent, target, logger) {
    var source = $_6bhm7w15fjeajonpf.derive(rawEvent, target);
    return doTriggerHandler(lookup, eventType, rawEvent, target, source, logger);
  };
  var broadcast = function (listeners, rawEvent, logger) {
    var simulatedEvent = $_edt55915gjeajonph.fromExternal(rawEvent);
    $_5r3pikwsjeajommo.each(listeners, function (listener) {
      var descHandler = listener.descHandler();
      var handler = $_at88ae134jeajone6.getHandler(descHandler);
      handler(simulatedEvent);
    });
    return simulatedEvent.isStopped();
  };
  var triggerUntilStopped = function (lookup, eventType, rawEvent, logger) {
    var rawTarget = rawEvent.target();
    return triggerOnUntilStopped(lookup, eventType, rawEvent, rawTarget, logger);
  };
  var triggerOnUntilStopped = function (lookup, eventType, rawEvent, rawTarget, logger) {
    var source = $_6bhm7w15fjeajonpf.derive(rawEvent, rawTarget);
    return doTriggerOnUntilStopped(lookup, eventType, rawEvent, rawTarget, source, logger);
  };
  var $_5hr2iw15ejeajonpa = {
    triggerHandler: triggerHandler,
    triggerUntilStopped: triggerUntilStopped,
    triggerOnUntilStopped: triggerOnUntilStopped,
    broadcast: broadcast
  };

  var closest$4 = function (target, transform, isRoot) {
    var delegate = $_6tkhs7yvjeajomuy.closest(target, function (elem) {
      return transform(elem).isSome();
    }, isRoot);
    return delegate.bind(transform);
  };
  var $_7djsha15jjeajonpx = { closest: closest$4 };

  var eventHandler = $_6725fkx4jeajomoa.immutable('element', 'descHandler');
  var messageHandler = function (id, handler) {
    return {
      id: $_ddy4s3wjjeajomls.constant(id),
      descHandler: $_ddy4s3wjjeajomls.constant(handler)
    };
  };
  function EventRegistry () {
    var registry = {};
    var registerId = function (extraArgs, id, events) {
      $_9s6ha1x0jeajomnc.each(events, function (v, k) {
        var handlers = registry[k] !== undefined ? registry[k] : {};
        handlers[id] = $_at88ae134jeajone6.curryArgs(v, extraArgs);
        registry[k] = handlers;
      });
    };
    var findHandler = function (handlers, elem) {
      return $_dbn7mh10xjeajon3m.read(elem).fold(function (err) {
        return Option.none();
      }, function (id) {
        var reader = $_6rmcx0xsjeajomqm.readOpt(id);
        return handlers.bind(reader).map(function (descHandler) {
          return eventHandler(elem, descHandler);
        });
      });
    };
    var filterByType = function (type) {
      return $_6rmcx0xsjeajomqm.readOptFrom(registry, type).map(function (handlers) {
        return $_9s6ha1x0jeajomnc.mapToArray(handlers, function (f, id) {
          return messageHandler(id, f);
        });
      }).getOr([]);
    };
    var find = function (isAboveRoot, type, target) {
      var readType = $_6rmcx0xsjeajomqm.readOpt(type);
      var handlers = readType(registry);
      return $_7djsha15jjeajonpx.closest(target, function (elem) {
        return findHandler(handlers, elem);
      }, isAboveRoot);
    };
    var unregisterId = function (id) {
      $_9s6ha1x0jeajomnc.each(registry, function (handlersById, eventName) {
        if (handlersById.hasOwnProperty(id))
          delete handlersById[id];
      });
    };
    return {
      registerId: registerId,
      unregisterId: unregisterId,
      filterByType: filterByType,
      find: find
    };
  }

  function Registry () {
    var events = EventRegistry();
    var components = {};
    var readOrTag = function (component) {
      var elem = component.element();
      return $_dbn7mh10xjeajon3m.read(elem).fold(function () {
        return $_dbn7mh10xjeajon3m.write('uid-', component.element());
      }, function (uid) {
        return uid;
      });
    };
    var failOnDuplicate = function (component, tagId) {
      var conflict = components[tagId];
      if (conflict === component)
        unregister(component);
      else
        throw new Error('The tagId "' + tagId + '" is already used by: ' + $_74y4xnxmjeajomq3.element(conflict.element()) + '\nCannot use it for: ' + $_74y4xnxmjeajomq3.element(component.element()) + '\n' + 'The conflicting element is' + ($_6p2xg0xjjeajompa.inBody(conflict.element()) ? ' ' : ' not ') + 'already in the DOM');
    };
    var register = function (component) {
      var tagId = readOrTag(component);
      if ($_6rmcx0xsjeajomqm.hasKey(components, tagId))
        failOnDuplicate(component, tagId);
      var extraArgs = [component];
      events.registerId(extraArgs, tagId, component.events());
      components[tagId] = component;
    };
    var unregister = function (component) {
      $_dbn7mh10xjeajon3m.read(component.element()).each(function (tagId) {
        components[tagId] = undefined;
        events.unregisterId(tagId);
      });
    };
    var filter = function (type) {
      return events.filterByType(type);
    };
    var find = function (isAboveRoot, type, target) {
      return events.find(isAboveRoot, type, target);
    };
    var getById = function (id) {
      return $_6rmcx0xsjeajomqm.readOpt(id)(components);
    };
    return {
      find: find,
      filter: filter,
      register: register,
      unregister: unregister,
      getById: getById
    };
  }

  var create$6 = function () {
    var root = $_gcby0212tjeajonc2.build(Container.sketch({ dom: { tag: 'div' } }));
    return takeover(root);
  };
  var takeover = function (root) {
    var isAboveRoot = function (el) {
      return $_6xy0ax3jeajomo0.parent(root.element()).fold(function () {
        return true;
      }, function (parent) {
        return $_a12rd3x9jeajomoj.eq(el, parent);
      });
    };
    var registry = Registry();
    var lookup = function (eventName, target) {
      return registry.find(isAboveRoot, eventName, target);
    };
    var domEvents = $_a8uyxh15djeajonp1.setup(root.element(), {
      triggerEvent: function (eventName, event) {
        return $_9igfqbxljeajompe.monitorEvent(eventName, event.target(), function (logger) {
          return $_5hr2iw15ejeajonpa.triggerUntilStopped(lookup, eventName, event, logger);
        });
      },
      broadcastEvent: function (eventName, event) {
        var listeners = registry.filter(eventName);
        return $_5hr2iw15ejeajonpa.broadcast(listeners, event);
      }
    });
    var systemApi = SystemApi({
      debugInfo: $_ddy4s3wjjeajomls.constant('real'),
      triggerEvent: function (customType, target, data) {
        $_9igfqbxljeajompe.monitorEvent(customType, target, function (logger) {
          $_5hr2iw15ejeajonpa.triggerOnUntilStopped(lookup, customType, data, target, logger);
        });
      },
      triggerFocus: function (target, originator) {
        $_dbn7mh10xjeajon3m.read(target).fold(function () {
          $_gc8hiiytjeajomut.focus(target);
        }, function (_alloyId) {
          $_9igfqbxljeajompe.monitorEvent($_bckj1uwhjeajomli.focus(), target, function (logger) {
            $_5hr2iw15ejeajonpa.triggerHandler(lookup, $_bckj1uwhjeajomli.focus(), {
              originator: $_ddy4s3wjjeajomls.constant(originator),
              target: $_ddy4s3wjjeajomls.constant(target)
            }, target, logger);
          });
        });
      },
      triggerEscape: function (comp, simulatedEvent) {
        systemApi.triggerEvent('keydown', comp.element(), simulatedEvent.event());
      },
      getByUid: function (uid) {
        return getByUid(uid);
      },
      getByDom: function (elem) {
        return getByDom(elem);
      },
      build: $_gcby0212tjeajonc2.build,
      addToGui: function (c) {
        add(c);
      },
      removeFromGui: function (c) {
        remove(c);
      },
      addToWorld: function (c) {
        addToWorld(c);
      },
      removeFromWorld: function (c) {
        removeFromWorld(c);
      },
      broadcast: function (message) {
        broadcast(message);
      },
      broadcastOn: function (channels, message) {
        broadcastOn(channels, message);
      }
    });
    var addToWorld = function (component) {
      component.connect(systemApi);
      if (!$_bsb5vnxkjeajompc.isText(component.element())) {
        registry.register(component);
        $_5r3pikwsjeajommo.each(component.components(), addToWorld);
        systemApi.triggerEvent($_bckj1uwhjeajomli.systemInit(), component.element(), { target: $_ddy4s3wjjeajomls.constant(component.element()) });
      }
    };
    var removeFromWorld = function (component) {
      if (!$_bsb5vnxkjeajompc.isText(component.element())) {
        $_5r3pikwsjeajommo.each(component.components(), removeFromWorld);
        registry.unregister(component);
      }
      component.disconnect();
    };
    var add = function (component) {
      $_f0icc0x1jeajomnf.attach(root, component);
    };
    var remove = function (component) {
      $_f0icc0x1jeajomnf.detach(component);
    };
    var destroy = function () {
      domEvents.unbind();
      $_di46q7xhjeajomp6.remove(root.element());
    };
    var broadcastData = function (data) {
      var receivers = registry.filter($_bckj1uwhjeajomli.receive());
      $_5r3pikwsjeajommo.each(receivers, function (receiver) {
        var descHandler = receiver.descHandler();
        var handler = $_at88ae134jeajone6.getHandler(descHandler);
        handler(data);
      });
    };
    var broadcast = function (message) {
      broadcastData({
        universal: $_ddy4s3wjjeajomls.constant(true),
        data: $_ddy4s3wjjeajomls.constant(message)
      });
    };
    var broadcastOn = function (channels, message) {
      broadcastData({
        universal: $_ddy4s3wjjeajomls.constant(false),
        channels: $_ddy4s3wjjeajomls.constant(channels),
        data: $_ddy4s3wjjeajomls.constant(message)
      });
    };
    var getByUid = function (uid) {
      return registry.getById(uid).fold(function () {
        return Result.error(new Error('Could not find component with uid: "' + uid + '" in system.'));
      }, Result.value);
    };
    var getByDom = function (elem) {
      return $_dbn7mh10xjeajon3m.read(elem).bind(getByUid);
    };
    addToWorld(root);
    return {
      root: $_ddy4s3wjjeajomls.constant(root),
      element: root.element,
      destroy: destroy,
      add: add,
      remove: remove,
      getByUid: getByUid,
      getByDom: getByDom,
      addToWorld: addToWorld,
      removeFromWorld: removeFromWorld,
      broadcast: broadcast,
      broadcastOn: broadcastOn
    };
  };
  var $_49862c15cjeajonoq = {
    create: create$6,
    takeover: takeover
  };

  var READ_ONLY_MODE_CLASS = $_ddy4s3wjjeajomls.constant($_eanbiezejeajomx0.resolve('readonly-mode'));
  var EDIT_MODE_CLASS = $_ddy4s3wjjeajomls.constant($_eanbiezejeajomx0.resolve('edit-mode'));
  function OuterContainer (spec) {
    var root = $_gcby0212tjeajonc2.build(Container.sketch({
      dom: { classes: [$_eanbiezejeajomx0.resolve('outer-container')].concat(spec.classes) },
      containerBehaviours: $_cwu2vpy2jeajomrh.derive([Swapping.config({
          alpha: READ_ONLY_MODE_CLASS(),
          omega: EDIT_MODE_CLASS()
        })])
    }));
    return $_49862c15cjeajonoq.takeover(root);
  }

  function AndroidRealm (scrollIntoView) {
    var alloy = OuterContainer({ classes: [$_eanbiezejeajomx0.resolve('android-container')] });
    var toolbar = ScrollingToolbar();
    var webapp = $_cfrzgh12ojeajonb2.api();
    var switchToEdit = $_e383zh154jeajonnd.makeEditSwitch(webapp);
    var socket = $_e383zh154jeajonnd.makeSocket();
    var dropup = $_3nkbfy155jeajonni.build($_ddy4s3wjjeajomls.noop, scrollIntoView);
    alloy.add(toolbar.wrapper());
    alloy.add(socket);
    alloy.add(dropup.component());
    var setToolbarGroups = function (rawGroups) {
      var groups = toolbar.createGroups(rawGroups);
      toolbar.setGroups(groups);
    };
    var setContextToolbar = function (rawGroups) {
      var groups = toolbar.createGroups(rawGroups);
      toolbar.setContextToolbar(groups);
    };
    var focusToolbar = function () {
      toolbar.focus();
    };
    var restoreToolbar = function () {
      toolbar.restoreToolbar();
    };
    var init = function (spec) {
      webapp.set($_kbof7140jeajoniq.produce(spec));
    };
    var exit = function () {
      webapp.run(function (w) {
        w.exit();
        Replacing.remove(socket, switchToEdit);
      });
    };
    var updateMode = function (readOnly) {
      $_e383zh154jeajonnd.updateMode(socket, switchToEdit, readOnly, alloy.root());
    };
    return {
      system: $_ddy4s3wjjeajomls.constant(alloy),
      element: alloy.element,
      init: init,
      exit: exit,
      setToolbarGroups: setToolbarGroups,
      setContextToolbar: setContextToolbar,
      focusToolbar: focusToolbar,
      restoreToolbar: restoreToolbar,
      updateMode: updateMode,
      socket: $_ddy4s3wjjeajomls.constant(socket),
      dropup: $_ddy4s3wjjeajomls.constant(dropup)
    };
  }

  var input = function (parent, operation) {
    var input = $_8icwg5xfjeajomp0.fromTag('input');
    $_64rfd7103jeajomzb.setAll(input, {
      opacity: '0',
      position: 'absolute',
      top: '-1000px',
      left: '-1000px'
    });
    $_efdcljx2jeajomny.append(parent, input);
    $_gc8hiiytjeajomut.focus(input);
    operation(input);
    $_di46q7xhjeajomp6.remove(input);
  };
  var $_fe8fkw15ojeajonqo = { input: input };

  var refreshInput = function (input) {
    var start = input.dom().selectionStart;
    var end = input.dom().selectionEnd;
    var dir = input.dom().selectionDirection;
    setTimeout(function () {
      input.dom().setSelectionRange(start, end, dir);
      $_gc8hiiytjeajomut.focus(input);
    }, 50);
  };
  var refresh = function (winScope) {
    var sel = winScope.getSelection();
    if (sel.rangeCount > 0) {
      var br = sel.getRangeAt(0);
      var r = winScope.document.createRange();
      r.setStart(br.startContainer, br.startOffset);
      r.setEnd(br.endContainer, br.endOffset);
      sel.removeAllRanges();
      sel.addRange(r);
    }
  };
  var $_2qe2ji15qjeajonqw = {
    refreshInput: refreshInput,
    refresh: refresh
  };

  var resume$1 = function (cWin, frame) {
    $_gc8hiiytjeajomut.active().each(function (active) {
      if (!$_a12rd3x9jeajomoj.eq(active, frame)) {
        $_gc8hiiytjeajomut.blur(active);
      }
    });
    cWin.focus();
    $_gc8hiiytjeajomut.focus($_8icwg5xfjeajomp0.fromDom(cWin.document.body));
    $_2qe2ji15qjeajonqw.refresh(cWin);
  };
  var $_d63r2q15pjeajonqs = { resume: resume$1 };

  var stubborn = function (outerBody, cWin, page, frame) {
    var toEditing = function () {
      $_d63r2q15pjeajonqs.resume(cWin, frame);
    };
    var toReading = function () {
      $_fe8fkw15ojeajonqo.input(outerBody, $_gc8hiiytjeajomut.blur);
    };
    var captureInput = $_2x1yyu13xjeajonih.bind(page, 'keydown', function (evt) {
      if (!$_5r3pikwsjeajommo.contains([
          'input',
          'textarea'
        ], $_bsb5vnxkjeajompc.name(evt.target()))) {
        toEditing();
      }
    });
    var onToolbarTouch = function () {
    };
    var destroy = function () {
      captureInput.unbind();
    };
    return {
      toReading: toReading,
      toEditing: toEditing,
      onToolbarTouch: onToolbarTouch,
      destroy: destroy
    };
  };
  var timid = function (outerBody, cWin, page, frame) {
    var dismissKeyboard = function () {
      $_gc8hiiytjeajomut.blur(frame);
    };
    var onToolbarTouch = function () {
      dismissKeyboard();
    };
    var toReading = function () {
      dismissKeyboard();
    };
    var toEditing = function () {
      $_d63r2q15pjeajonqs.resume(cWin, frame);
    };
    return {
      toReading: toReading,
      toEditing: toEditing,
      onToolbarTouch: onToolbarTouch,
      destroy: $_ddy4s3wjjeajomls.noop
    };
  };
  var $_50kpki15njeajonqj = {
    stubborn: stubborn,
    timid: timid
  };

  var initEvents$1 = function (editorApi, iosApi, toolstrip, socket, dropup) {
    var saveSelectionFirst = function () {
      iosApi.run(function (api) {
        api.highlightSelection();
      });
    };
    var refreshIosSelection = function () {
      iosApi.run(function (api) {
        api.refreshSelection();
      });
    };
    var scrollToY = function (yTop, height) {
      var y = yTop - socket.dom().scrollTop;
      iosApi.run(function (api) {
        api.scrollIntoView(y, y + height);
      });
    };
    var scrollToElement = function (target) {
      scrollToY(iosApi, socket);
    };
    var scrollToCursor = function () {
      editorApi.getCursorBox().each(function (box) {
        scrollToY(box.top(), box.height());
      });
    };
    var clearSelection = function () {
      iosApi.run(function (api) {
        api.clearSelection();
      });
    };
    var clearAndRefresh = function () {
      clearSelection();
      refreshThrottle.throttle();
    };
    var refreshView = function () {
      scrollToCursor();
      iosApi.run(function (api) {
        api.syncHeight();
      });
    };
    var reposition = function () {
      var toolbarHeight = $_3aphev102jeajomz6.get(toolstrip);
      iosApi.run(function (api) {
        api.setViewportOffset(toolbarHeight);
      });
      refreshIosSelection();
      refreshView();
    };
    var toEditing = function () {
      iosApi.run(function (api) {
        api.toEditing();
      });
    };
    var toReading = function () {
      iosApi.run(function (api) {
        api.toReading();
      });
    };
    var onToolbarTouch = function (event) {
      iosApi.run(function (api) {
        api.onToolbarTouch(event);
      });
    };
    var tapping = $_cehadv143jeajonj8.monitor(editorApi);
    var refreshThrottle = $_9dwomk14wjeajonmb.last(refreshView, 300);
    var listeners = [
      editorApi.onKeyup(clearAndRefresh),
      editorApi.onNodeChanged(refreshIosSelection),
      editorApi.onDomChanged(refreshThrottle.throttle),
      editorApi.onDomChanged(refreshIosSelection),
      editorApi.onScrollToCursor(function (tinyEvent) {
        tinyEvent.preventDefault();
        refreshThrottle.throttle();
      }),
      editorApi.onScrollToElement(function (event) {
        scrollToElement(event.element());
      }),
      editorApi.onToEditing(toEditing),
      editorApi.onToReading(toReading),
      $_2x1yyu13xjeajonih.bind(editorApi.doc(), 'touchend', function (touchEvent) {
        if ($_a12rd3x9jeajomoj.eq(editorApi.html(), touchEvent.target()) || $_a12rd3x9jeajomoj.eq(editorApi.body(), touchEvent.target())) {
        }
      }),
      $_2x1yyu13xjeajonih.bind(toolstrip, 'transitionend', function (transitionEvent) {
        if (transitionEvent.raw().propertyName === 'height') {
          reposition();
        }
      }),
      $_2x1yyu13xjeajonih.capture(toolstrip, 'touchstart', function (touchEvent) {
        saveSelectionFirst();
        onToolbarTouch(touchEvent);
        editorApi.onTouchToolstrip();
      }),
      $_2x1yyu13xjeajonih.bind(editorApi.body(), 'touchstart', function (evt) {
        clearSelection();
        editorApi.onTouchContent();
        tapping.fireTouchstart(evt);
      }),
      tapping.onTouchmove(),
      tapping.onTouchend(),
      $_2x1yyu13xjeajonih.bind(editorApi.body(), 'click', function (event) {
        event.kill();
      }),
      $_2x1yyu13xjeajonih.bind(toolstrip, 'touchmove', function () {
        editorApi.onToolbarScrollStart();
      })
    ];
    var destroy = function () {
      $_5r3pikwsjeajommo.each(listeners, function (l) {
        l.unbind();
      });
    };
    return { destroy: destroy };
  };
  var $_egf7yg15rjeajonqz = { initEvents: initEvents$1 };

  function FakeSelection (win, frame) {
    var doc = win.document;
    var container = $_8icwg5xfjeajomp0.fromTag('div');
    $_65t2ydynjeajomul.add(container, $_eanbiezejeajomx0.resolve('unfocused-selections'));
    $_efdcljx2jeajomny.append($_8icwg5xfjeajomp0.fromDom(doc.documentElement), container);
    var onTouch = $_2x1yyu13xjeajonih.bind(container, 'touchstart', function (event) {
      event.prevent();
      $_d63r2q15pjeajonqs.resume(win, frame);
      clear();
    });
    var make = function (rectangle) {
      var span = $_8icwg5xfjeajomp0.fromTag('span');
      $_9k06sz137jeajoneu.add(span, [
        $_eanbiezejeajomx0.resolve('layer-editor'),
        $_eanbiezejeajomx0.resolve('unfocused-selection')
      ]);
      $_64rfd7103jeajomzb.setAll(span, {
        left: rectangle.left() + 'px',
        top: rectangle.top() + 'px',
        width: rectangle.width() + 'px',
        height: rectangle.height() + 'px'
      });
      return span;
    };
    var update = function () {
      clear();
      var rectangles = $_1t52ss148jeajonju.getRectangles(win);
      var spans = $_5r3pikwsjeajommo.map(rectangles, make);
      $_98m20vxijeajomp8.append(container, spans);
    };
    var clear = function () {
      $_di46q7xhjeajomp6.empty(container);
    };
    var destroy = function () {
      onTouch.unbind();
      $_di46q7xhjeajomp6.remove(container);
    };
    var isActive = function () {
      return $_6xy0ax3jeajomo0.children(container).length > 0;
    };
    return {
      update: update,
      isActive: isActive,
      destroy: destroy,
      clear: clear
    };
  }

  var nu$8 = function (baseFn) {
    var data = Option.none();
    var callbacks = [];
    var map = function (f) {
      return nu$8(function (nCallback) {
        get(function (data) {
          nCallback(f(data));
        });
      });
    };
    var get = function (nCallback) {
      if (isReady())
        call(nCallback);
      else
        callbacks.push(nCallback);
    };
    var set = function (x) {
      data = Option.some(x);
      run(callbacks);
      callbacks = [];
    };
    var isReady = function () {
      return data.isSome();
    };
    var run = function (cbs) {
      $_5r3pikwsjeajommo.each(cbs, call);
    };
    var call = function (cb) {
      data.each(function (x) {
        setTimeout(function () {
          cb(x);
        }, 0);
      });
    };
    baseFn(set);
    return {
      get: get,
      map: map,
      isReady: isReady
    };
  };
  var pure$1 = function (a) {
    return nu$8(function (callback) {
      callback(a);
    });
  };
  var LazyValue = {
    nu: nu$8,
    pure: pure$1
  };

  var bounce = function (f) {
    return function () {
      var args = Array.prototype.slice.call(arguments);
      var me = this;
      setTimeout(function () {
        f.apply(me, args);
      }, 0);
    };
  };
  var $_g2uara15xjeajons0 = { bounce: bounce };

  var nu$9 = function (baseFn) {
    var get = function (callback) {
      baseFn($_g2uara15xjeajons0.bounce(callback));
    };
    var map = function (fab) {
      return nu$9(function (callback) {
        get(function (a) {
          var value = fab(a);
          callback(value);
        });
      });
    };
    var bind = function (aFutureB) {
      return nu$9(function (callback) {
        get(function (a) {
          aFutureB(a).get(callback);
        });
      });
    };
    var anonBind = function (futureB) {
      return nu$9(function (callback) {
        get(function (a) {
          futureB.get(callback);
        });
      });
    };
    var toLazy = function () {
      return LazyValue.nu(get);
    };
    return {
      map: map,
      bind: bind,
      anonBind: anonBind,
      toLazy: toLazy,
      get: get
    };
  };
  var pure$2 = function (a) {
    return nu$9(function (callback) {
      callback(a);
    });
  };
  var Future = {
    nu: nu$9,
    pure: pure$2
  };

  var adjust = function (value, destination, amount) {
    if (Math.abs(value - destination) <= amount) {
      return Option.none();
    } else if (value < destination) {
      return Option.some(value + amount);
    } else {
      return Option.some(value - amount);
    }
  };
  var create$7 = function () {
    var interval = null;
    var animate = function (getCurrent, destination, amount, increment, doFinish, rate) {
      var finished = false;
      var finish = function (v) {
        finished = true;
        doFinish(v);
      };
      clearInterval(interval);
      var abort = function (v) {
        clearInterval(interval);
        finish(v);
      };
      interval = setInterval(function () {
        var value = getCurrent();
        adjust(value, destination, amount).fold(function () {
          clearInterval(interval);
          finish(destination);
        }, function (s) {
          increment(s, abort);
          if (!finished) {
            var newValue = getCurrent();
            if (newValue !== s || Math.abs(newValue - destination) > Math.abs(value - destination)) {
              clearInterval(interval);
              finish(destination);
            }
          }
        });
      }, rate);
    };
    return { animate: animate };
  };
  var $_clwug815yjeajons1 = {
    create: create$7,
    adjust: adjust
  };

  var findDevice = function (deviceWidth, deviceHeight) {
    var devices = [
      {
        width: 320,
        height: 480,
        keyboard: {
          portrait: 300,
          landscape: 240
        }
      },
      {
        width: 320,
        height: 568,
        keyboard: {
          portrait: 300,
          landscape: 240
        }
      },
      {
        width: 375,
        height: 667,
        keyboard: {
          portrait: 305,
          landscape: 240
        }
      },
      {
        width: 414,
        height: 736,
        keyboard: {
          portrait: 320,
          landscape: 240
        }
      },
      {
        width: 768,
        height: 1024,
        keyboard: {
          portrait: 320,
          landscape: 400
        }
      },
      {
        width: 1024,
        height: 1366,
        keyboard: {
          portrait: 380,
          landscape: 460
        }
      }
    ];
    return $_62h1oqy0jeajomre.findMap(devices, function (device) {
      return deviceWidth <= device.width && deviceHeight <= device.height ? Option.some(device.keyboard) : Option.none();
    }).getOr({
      portrait: deviceHeight / 5,
      landscape: deviceWidth / 4
    });
  };
  var $_7nc0j5161jeajonsg = { findDevice: findDevice };

  var softKeyboardLimits = function (outerWindow) {
    return $_7nc0j5161jeajonsg.findDevice(outerWindow.screen.width, outerWindow.screen.height);
  };
  var accountableKeyboardHeight = function (outerWindow) {
    var portrait = $_ekm71s13wjeajonia.get(outerWindow).isPortrait();
    var limits = softKeyboardLimits(outerWindow);
    var keyboard = portrait ? limits.portrait : limits.landscape;
    var visualScreenHeight = portrait ? outerWindow.screen.height : outerWindow.screen.width;
    return visualScreenHeight - outerWindow.innerHeight > keyboard ? 0 : keyboard;
  };
  var getGreenzone = function (socket, dropup) {
    var outerWindow = $_6xy0ax3jeajomo0.owner(socket).dom().defaultView;
    var viewportHeight = $_3aphev102jeajomz6.get(socket) + $_3aphev102jeajomz6.get(dropup);
    var acc = accountableKeyboardHeight(outerWindow);
    return viewportHeight - acc;
  };
  var updatePadding = function (contentBody, socket, dropup) {
    var greenzoneHeight = getGreenzone(socket, dropup);
    var deltaHeight = $_3aphev102jeajomz6.get(socket) + $_3aphev102jeajomz6.get(dropup) - greenzoneHeight;
    $_64rfd7103jeajomzb.set(contentBody, 'padding-bottom', deltaHeight + 'px');
  };
  var $_fd6we9160jeajonsc = {
    getGreenzone: getGreenzone,
    updatePadding: updatePadding
  };

  var fixture = $_d1vtuwxwjeajomr2.generate([
    {
      fixed: [
        'element',
        'property',
        'offsetY'
      ]
    },
    {
      scroller: [
        'element',
        'offsetY'
      ]
    }
  ]);
  var yFixedData = 'data-' + $_eanbiezejeajomx0.resolve('position-y-fixed');
  var yFixedProperty = 'data-' + $_eanbiezejeajomx0.resolve('y-property');
  var yScrollingData = 'data-' + $_eanbiezejeajomx0.resolve('scrolling');
  var windowSizeData = 'data-' + $_eanbiezejeajomx0.resolve('last-window-height');
  var getYFixedData = function (element) {
    return $_ecimg0147jeajonjs.safeParse(element, yFixedData);
  };
  var getYFixedProperty = function (element) {
    return $_a7s3osxrjeajomqe.get(element, yFixedProperty);
  };
  var getLastWindowSize = function (element) {
    return $_ecimg0147jeajonjs.safeParse(element, windowSizeData);
  };
  var classifyFixed = function (element, offsetY) {
    var prop = getYFixedProperty(element);
    return fixture.fixed(element, prop, offsetY);
  };
  var classifyScrolling = function (element, offsetY) {
    return fixture.scroller(element, offsetY);
  };
  var classify = function (element) {
    var offsetY = getYFixedData(element);
    var classifier = $_a7s3osxrjeajomqe.get(element, yScrollingData) === 'true' ? classifyScrolling : classifyFixed;
    return classifier(element, offsetY);
  };
  var findFixtures = function (container) {
    var candidates = $_62qkn1zvjeajomyr.descendants(container, '[' + yFixedData + ']');
    return $_5r3pikwsjeajommo.map(candidates, classify);
  };
  var takeoverToolbar = function (toolbar) {
    var oldToolbarStyle = $_a7s3osxrjeajomqe.get(toolbar, 'style');
    $_64rfd7103jeajomzb.setAll(toolbar, {
      position: 'absolute',
      top: '0px'
    });
    $_a7s3osxrjeajomqe.set(toolbar, yFixedData, '0px');
    $_a7s3osxrjeajomqe.set(toolbar, yFixedProperty, 'top');
    var restore = function () {
      $_a7s3osxrjeajomqe.set(toolbar, 'style', oldToolbarStyle || '');
      $_a7s3osxrjeajomqe.remove(toolbar, yFixedData);
      $_a7s3osxrjeajomqe.remove(toolbar, yFixedProperty);
    };
    return { restore: restore };
  };
  var takeoverViewport = function (toolbarHeight, height, viewport) {
    var oldViewportStyle = $_a7s3osxrjeajomqe.get(viewport, 'style');
    $_9y1q7q13ujeajoni4.register(viewport);
    $_64rfd7103jeajomzb.setAll(viewport, {
      position: 'absolute',
      height: height + 'px',
      width: '100%',
      top: toolbarHeight + 'px'
    });
    $_a7s3osxrjeajomqe.set(viewport, yFixedData, toolbarHeight + 'px');
    $_a7s3osxrjeajomqe.set(viewport, yScrollingData, 'true');
    $_a7s3osxrjeajomqe.set(viewport, yFixedProperty, 'top');
    var restore = function () {
      $_9y1q7q13ujeajoni4.deregister(viewport);
      $_a7s3osxrjeajomqe.set(viewport, 'style', oldViewportStyle || '');
      $_a7s3osxrjeajomqe.remove(viewport, yFixedData);
      $_a7s3osxrjeajomqe.remove(viewport, yScrollingData);
      $_a7s3osxrjeajomqe.remove(viewport, yFixedProperty);
    };
    return { restore: restore };
  };
  var takeoverDropup = function (dropup, toolbarHeight, viewportHeight) {
    var oldDropupStyle = $_a7s3osxrjeajomqe.get(dropup, 'style');
    $_64rfd7103jeajomzb.setAll(dropup, {
      position: 'absolute',
      bottom: '0px'
    });
    $_a7s3osxrjeajomqe.set(dropup, yFixedData, '0px');
    $_a7s3osxrjeajomqe.set(dropup, yFixedProperty, 'bottom');
    var restore = function () {
      $_a7s3osxrjeajomqe.set(dropup, 'style', oldDropupStyle || '');
      $_a7s3osxrjeajomqe.remove(dropup, yFixedData);
      $_a7s3osxrjeajomqe.remove(dropup, yFixedProperty);
    };
    return { restore: restore };
  };
  var deriveViewportHeight = function (viewport, toolbarHeight, dropupHeight) {
    var outerWindow = $_6xy0ax3jeajomo0.owner(viewport).dom().defaultView;
    var winH = outerWindow.innerHeight;
    $_a7s3osxrjeajomqe.set(viewport, windowSizeData, winH + 'px');
    return winH - toolbarHeight - dropupHeight;
  };
  var takeover$1 = function (viewport, contentBody, toolbar, dropup) {
    var outerWindow = $_6xy0ax3jeajomo0.owner(viewport).dom().defaultView;
    var toolbarSetup = takeoverToolbar(toolbar);
    var toolbarHeight = $_3aphev102jeajomz6.get(toolbar);
    var dropupHeight = $_3aphev102jeajomz6.get(dropup);
    var viewportHeight = deriveViewportHeight(viewport, toolbarHeight, dropupHeight);
    var viewportSetup = takeoverViewport(toolbarHeight, viewportHeight, viewport);
    var dropupSetup = takeoverDropup(dropup, toolbarHeight, viewportHeight);
    var isActive = true;
    var restore = function () {
      isActive = false;
      toolbarSetup.restore();
      viewportSetup.restore();
      dropupSetup.restore();
    };
    var isExpanding = function () {
      var currentWinHeight = outerWindow.innerHeight;
      var lastWinHeight = getLastWindowSize(viewport);
      return currentWinHeight > lastWinHeight;
    };
    var refresh = function () {
      if (isActive) {
        var newToolbarHeight = $_3aphev102jeajomz6.get(toolbar);
        var dropupHeight_1 = $_3aphev102jeajomz6.get(dropup);
        var newHeight = deriveViewportHeight(viewport, newToolbarHeight, dropupHeight_1);
        $_a7s3osxrjeajomqe.set(viewport, yFixedData, newToolbarHeight + 'px');
        $_64rfd7103jeajomzb.set(viewport, 'height', newHeight + 'px');
        $_64rfd7103jeajomzb.set(dropup, 'bottom', -(newToolbarHeight + newHeight + dropupHeight_1) + 'px');
        $_fd6we9160jeajonsc.updatePadding(contentBody, viewport, dropup);
      }
    };
    var setViewportOffset = function (newYOffset) {
      var offsetPx = newYOffset + 'px';
      $_a7s3osxrjeajomqe.set(viewport, yFixedData, offsetPx);
      refresh();
    };
    $_fd6we9160jeajonsc.updatePadding(contentBody, viewport, dropup);
    return {
      setViewportOffset: setViewportOffset,
      isExpanding: isExpanding,
      isShrinking: $_ddy4s3wjjeajomls.not(isExpanding),
      refresh: refresh,
      restore: restore
    };
  };
  var $_f74ss15zjeajons3 = {
    findFixtures: findFixtures,
    takeover: takeover$1,
    getYFixedData: getYFixedData
  };

  var animator = $_clwug815yjeajons1.create();
  var ANIMATION_STEP = 15;
  var NUM_TOP_ANIMATION_FRAMES = 10;
  var ANIMATION_RATE = 10;
  var lastScroll = 'data-' + $_eanbiezejeajomx0.resolve('last-scroll-top');
  var getTop = function (element) {
    var raw = $_64rfd7103jeajomzb.getRaw(element, 'top').getOr(0);
    return parseInt(raw, 10);
  };
  var getScrollTop = function (element) {
    return parseInt(element.dom().scrollTop, 10);
  };
  var moveScrollAndTop = function (element, destination, finalTop) {
    return Future.nu(function (callback) {
      var getCurrent = $_ddy4s3wjjeajomls.curry(getScrollTop, element);
      var update = function (newScroll) {
        element.dom().scrollTop = newScroll;
        $_64rfd7103jeajomzb.set(element, 'top', getTop(element) + ANIMATION_STEP + 'px');
      };
      var finish = function () {
        element.dom().scrollTop = destination;
        $_64rfd7103jeajomzb.set(element, 'top', finalTop + 'px');
        callback(destination);
      };
      animator.animate(getCurrent, destination, ANIMATION_STEP, update, finish, ANIMATION_RATE);
    });
  };
  var moveOnlyScroll = function (element, destination) {
    return Future.nu(function (callback) {
      var getCurrent = $_ddy4s3wjjeajomls.curry(getScrollTop, element);
      $_a7s3osxrjeajomqe.set(element, lastScroll, getCurrent());
      var update = function (newScroll, abort) {
        var previous = $_ecimg0147jeajonjs.safeParse(element, lastScroll);
        if (previous !== element.dom().scrollTop) {
          abort(element.dom().scrollTop);
        } else {
          element.dom().scrollTop = newScroll;
          $_a7s3osxrjeajomqe.set(element, lastScroll, newScroll);
        }
      };
      var finish = function () {
        element.dom().scrollTop = destination;
        $_a7s3osxrjeajomqe.set(element, lastScroll, destination);
        callback(destination);
      };
      var distance = Math.abs(destination - getCurrent());
      var step = Math.ceil(distance / NUM_TOP_ANIMATION_FRAMES);
      animator.animate(getCurrent, destination, step, update, finish, ANIMATION_RATE);
    });
  };
  var moveOnlyTop = function (element, destination) {
    return Future.nu(function (callback) {
      var getCurrent = $_ddy4s3wjjeajomls.curry(getTop, element);
      var update = function (newTop) {
        $_64rfd7103jeajomzb.set(element, 'top', newTop + 'px');
      };
      var finish = function () {
        update(destination);
        callback(destination);
      };
      var distance = Math.abs(destination - getCurrent());
      var step = Math.ceil(distance / NUM_TOP_ANIMATION_FRAMES);
      animator.animate(getCurrent, destination, step, update, finish, ANIMATION_RATE);
    });
  };
  var updateTop = function (element, amount) {
    var newTop = amount + $_f74ss15zjeajons3.getYFixedData(element) + 'px';
    $_64rfd7103jeajomzb.set(element, 'top', newTop);
  };
  var moveWindowScroll = function (toolbar, viewport, destY) {
    var outerWindow = $_6xy0ax3jeajomo0.owner(toolbar).dom().defaultView;
    return Future.nu(function (callback) {
      updateTop(toolbar, destY);
      updateTop(viewport, destY);
      outerWindow.scrollTo(0, destY);
      callback(destY);
    });
  };
  var $_3qt05y15ujeajonro = {
    moveScrollAndTop: moveScrollAndTop,
    moveOnlyScroll: moveOnlyScroll,
    moveOnlyTop: moveOnlyTop,
    moveWindowScroll: moveWindowScroll
  };

  function BackgroundActivity (doAction) {
    var action = Cell(LazyValue.pure({}));
    var start = function (value) {
      var future = LazyValue.nu(function (callback) {
        return doAction(value).get(callback);
      });
      action.set(future);
    };
    var idle = function (g) {
      action.get().get(function () {
        g();
      });
    };
    return {
      start: start,
      idle: idle
    };
  }

  var scrollIntoView = function (cWin, socket, dropup, top, bottom) {
    var greenzone = $_fd6we9160jeajonsc.getGreenzone(socket, dropup);
    var refreshCursor = $_ddy4s3wjjeajomls.curry($_2qe2ji15qjeajonqw.refresh, cWin);
    if (top > greenzone || bottom > greenzone) {
      $_3qt05y15ujeajonro.moveOnlyScroll(socket, socket.dom().scrollTop - greenzone + bottom).get(refreshCursor);
    } else if (top < 0) {
      $_3qt05y15ujeajonro.moveOnlyScroll(socket, socket.dom().scrollTop + top).get(refreshCursor);
    } else {
    }
  };
  var $_3mv165163jeajonsl = { scrollIntoView: scrollIntoView };

  var par = function (asyncValues, nu) {
    return nu(function (callback) {
      var r = [];
      var count = 0;
      var cb = function (i) {
        return function (value) {
          r[i] = value;
          count++;
          if (count >= asyncValues.length) {
            callback(r);
          }
        };
      };
      if (asyncValues.length === 0) {
        callback([]);
      } else {
        $_5r3pikwsjeajommo.each(asyncValues, function (asyncValue, i) {
          asyncValue.get(cb(i));
        });
      }
    });
  };
  var $_4wtjoh166jeajonst = { par: par };

  var par$1 = function (futures) {
    return $_4wtjoh166jeajonst.par(futures, Future.nu);
  };
  var mapM = function (array, fn) {
    var futures = $_5r3pikwsjeajommo.map(array, fn);
    return par$1(futures);
  };
  var compose$1 = function (f, g) {
    return function (a) {
      return g(a).bind(f);
    };
  };
  var $_dc6bzz165jeajonss = {
    par: par$1,
    mapM: mapM,
    compose: compose$1
  };

  var updateFixed = function (element, property, winY, offsetY) {
    var destination = winY + offsetY;
    $_64rfd7103jeajomzb.set(element, property, destination + 'px');
    return Future.pure(offsetY);
  };
  var updateScrollingFixed = function (element, winY, offsetY) {
    var destTop = winY + offsetY;
    var oldProp = $_64rfd7103jeajomzb.getRaw(element, 'top').getOr(offsetY);
    var delta = destTop - parseInt(oldProp, 10);
    var destScroll = element.dom().scrollTop + delta;
    return $_3qt05y15ujeajonro.moveScrollAndTop(element, destScroll, destTop);
  };
  var updateFixture = function (fixture, winY) {
    return fixture.fold(function (element, property, offsetY) {
      return updateFixed(element, property, winY, offsetY);
    }, function (element, offsetY) {
      return updateScrollingFixed(element, winY, offsetY);
    });
  };
  var updatePositions = function (container, winY) {
    var fixtures = $_f74ss15zjeajons3.findFixtures(container);
    var updates = $_5r3pikwsjeajommo.map(fixtures, function (fixture) {
      return updateFixture(fixture, winY);
    });
    return $_dc6bzz165jeajonss.par(updates);
  };
  var $_5iayb7164jeajonsn = { updatePositions: updatePositions };

  var VIEW_MARGIN = 5;
  var register$2 = function (toolstrip, socket, container, outerWindow, structure, cWin) {
    var scroller = BackgroundActivity(function (y) {
      return $_3qt05y15ujeajonro.moveWindowScroll(toolstrip, socket, y);
    });
    var scrollBounds = function () {
      var rects = $_1t52ss148jeajonju.getRectangles(cWin);
      return Option.from(rects[0]).bind(function (rect) {
        var viewTop = rect.top() - socket.dom().scrollTop;
        var outside = viewTop > outerWindow.innerHeight + VIEW_MARGIN || viewTop < -VIEW_MARGIN;
        return outside ? Option.some({
          top: $_ddy4s3wjjeajomls.constant(viewTop),
          bottom: $_ddy4s3wjjeajomls.constant(viewTop + rect.height())
        }) : Option.none();
      });
    };
    var scrollThrottle = $_9dwomk14wjeajonmb.last(function () {
      scroller.idle(function () {
        $_5iayb7164jeajonsn.updatePositions(container, outerWindow.pageYOffset).get(function () {
          var extraScroll = scrollBounds();
          extraScroll.each(function (extra) {
            socket.dom().scrollTop = socket.dom().scrollTop + extra.top();
          });
          scroller.start(0);
          structure.refresh();
        });
      });
    }, 1000);
    var onScroll = $_2x1yyu13xjeajonih.bind($_8icwg5xfjeajomp0.fromDom(outerWindow), 'scroll', function () {
      if (outerWindow.pageYOffset < 0) {
        return;
      }
      scrollThrottle.throttle();
    });
    $_5iayb7164jeajonsn.updatePositions(container, outerWindow.pageYOffset).get($_ddy4s3wjjeajomls.identity);
    return { unbind: onScroll.unbind };
  };
  var setup$3 = function (bag) {
    var cWin = bag.cWin();
    var ceBody = bag.ceBody();
    var socket = bag.socket();
    var toolstrip = bag.toolstrip();
    var toolbar = bag.toolbar();
    var contentElement = bag.contentElement();
    var keyboardType = bag.keyboardType();
    var outerWindow = bag.outerWindow();
    var dropup = bag.dropup();
    var structure = $_f74ss15zjeajons3.takeover(socket, ceBody, toolstrip, dropup);
    var keyboardModel = keyboardType(bag.outerBody(), cWin, $_6p2xg0xjjeajompa.body(), contentElement, toolstrip, toolbar);
    var toEditing = function () {
      keyboardModel.toEditing();
      clearSelection();
    };
    var toReading = function () {
      keyboardModel.toReading();
    };
    var onToolbarTouch = function (event) {
      keyboardModel.onToolbarTouch(event);
    };
    var onOrientation = $_ekm71s13wjeajonia.onChange(outerWindow, {
      onChange: $_ddy4s3wjjeajomls.noop,
      onReady: structure.refresh
    });
    onOrientation.onAdjustment(function () {
      structure.refresh();
    });
    var onResize = $_2x1yyu13xjeajonih.bind($_8icwg5xfjeajomp0.fromDom(outerWindow), 'resize', function () {
      if (structure.isExpanding()) {
        structure.refresh();
      }
    });
    var onScroll = register$2(toolstrip, socket, bag.outerBody(), outerWindow, structure, cWin);
    var unfocusedSelection = FakeSelection(cWin, contentElement);
    var refreshSelection = function () {
      if (unfocusedSelection.isActive()) {
        unfocusedSelection.update();
      }
    };
    var highlightSelection = function () {
      unfocusedSelection.update();
    };
    var clearSelection = function () {
      unfocusedSelection.clear();
    };
    var scrollIntoView = function (top, bottom) {
      $_3mv165163jeajonsl.scrollIntoView(cWin, socket, dropup, top, bottom);
    };
    var syncHeight = function () {
      $_64rfd7103jeajomzb.set(contentElement, 'height', contentElement.dom().contentWindow.document.body.scrollHeight + 'px');
    };
    var setViewportOffset = function (newYOffset) {
      structure.setViewportOffset(newYOffset);
      $_3qt05y15ujeajonro.moveOnlyTop(socket, newYOffset).get($_ddy4s3wjjeajomls.identity);
    };
    var destroy = function () {
      structure.restore();
      onOrientation.destroy();
      onScroll.unbind();
      onResize.unbind();
      keyboardModel.destroy();
      unfocusedSelection.destroy();
      $_fe8fkw15ojeajonqo.input($_6p2xg0xjjeajompa.body(), $_gc8hiiytjeajomut.blur);
    };
    return {
      toEditing: toEditing,
      toReading: toReading,
      onToolbarTouch: onToolbarTouch,
      refreshSelection: refreshSelection,
      clearSelection: clearSelection,
      highlightSelection: highlightSelection,
      scrollIntoView: scrollIntoView,
      updateToolbarPadding: $_ddy4s3wjjeajomls.noop,
      setViewportOffset: setViewportOffset,
      syncHeight: syncHeight,
      refreshStructure: structure.refresh,
      destroy: destroy
    };
  };
  var $_8dmhea15sjeajonr7 = { setup: setup$3 };

  var create$8 = function (platform, mask) {
    var meta = $_4ekyh714ujeajonm1.tag();
    var priorState = $_cfrzgh12ojeajonb2.value();
    var scrollEvents = $_cfrzgh12ojeajonb2.value();
    var iosApi = $_cfrzgh12ojeajonb2.api();
    var iosEvents = $_cfrzgh12ojeajonb2.api();
    var enter = function () {
      mask.hide();
      var doc = $_8icwg5xfjeajomp0.fromDom(document);
      $_9tao1w14sjeajonlp.getActiveApi(platform.editor).each(function (editorApi) {
        priorState.set({
          socketHeight: $_64rfd7103jeajomzb.getRaw(platform.socket, 'height'),
          iframeHeight: $_64rfd7103jeajomzb.getRaw(editorApi.frame(), 'height'),
          outerScroll: document.body.scrollTop
        });
        scrollEvents.set({ exclusives: $_fb5557153jeajonn8.exclusive(doc, '.' + $_9y1q7q13ujeajoni4.scrollable()) });
        $_65t2ydynjeajomul.add(platform.container, $_eanbiezejeajomx0.resolve('fullscreen-maximized'));
        $_3kxbuv14tjeajonlw.clobberStyles(platform.container, editorApi.body());
        meta.maximize();
        $_64rfd7103jeajomzb.set(platform.socket, 'overflow', 'scroll');
        $_64rfd7103jeajomzb.set(platform.socket, '-webkit-overflow-scrolling', 'touch');
        $_gc8hiiytjeajomut.focus(editorApi.body());
        var setupBag = $_6725fkx4jeajomoa.immutableBag([
          'cWin',
          'ceBody',
          'socket',
          'toolstrip',
          'toolbar',
          'dropup',
          'contentElement',
          'cursor',
          'keyboardType',
          'isScrolling',
          'outerWindow',
          'outerBody'
        ], []);
        iosApi.set($_8dmhea15sjeajonr7.setup(setupBag({
          cWin: editorApi.win(),
          ceBody: editorApi.body(),
          socket: platform.socket,
          toolstrip: platform.toolstrip,
          toolbar: platform.toolbar,
          dropup: platform.dropup.element(),
          contentElement: editorApi.frame(),
          cursor: $_ddy4s3wjjeajomls.noop,
          outerBody: platform.body,
          outerWindow: platform.win,
          keyboardType: $_50kpki15njeajonqj.stubborn,
          isScrolling: function () {
            return scrollEvents.get().exists(function (s) {
              return s.socket.isScrolling();
            });
          }
        })));
        iosApi.run(function (api) {
          api.syncHeight();
        });
        iosEvents.set($_egf7yg15rjeajonqz.initEvents(editorApi, iosApi, platform.toolstrip, platform.socket, platform.dropup));
      });
    };
    var exit = function () {
      meta.restore();
      iosEvents.clear();
      iosApi.clear();
      mask.show();
      priorState.on(function (s) {
        s.socketHeight.each(function (h) {
          $_64rfd7103jeajomzb.set(platform.socket, 'height', h);
        });
        s.iframeHeight.each(function (h) {
          $_64rfd7103jeajomzb.set(platform.editor.getFrame(), 'height', h);
        });
        document.body.scrollTop = s.scrollTop;
      });
      priorState.clear();
      scrollEvents.on(function (s) {
        s.exclusives.unbind();
      });
      scrollEvents.clear();
      $_65t2ydynjeajomul.remove(platform.container, $_eanbiezejeajomx0.resolve('fullscreen-maximized'));
      $_3kxbuv14tjeajonlw.restoreStyles();
      $_9y1q7q13ujeajoni4.deregister(platform.toolbar);
      $_64rfd7103jeajomzb.remove(platform.socket, 'overflow');
      $_64rfd7103jeajomzb.remove(platform.socket, '-webkit-overflow-scrolling');
      $_gc8hiiytjeajomut.blur(platform.editor.getFrame());
      $_9tao1w14sjeajonlp.getActiveApi(platform.editor).each(function (editorApi) {
        editorApi.clearSelection();
      });
    };
    var refreshStructure = function () {
      iosApi.run(function (api) {
        api.refreshStructure();
      });
    };
    return {
      enter: enter,
      refreshStructure: refreshStructure,
      exit: exit
    };
  };
  var $_9gt6o815mjeajonqb = { create: create$8 };

  var produce$1 = function (raw) {
    var mobile = $_8qt2pyyejeajomtl.asRawOrDie('Getting IosWebapp schema', MobileSchema, raw);
    $_64rfd7103jeajomzb.set(mobile.toolstrip, 'width', '100%');
    $_64rfd7103jeajomzb.set(mobile.container, 'position', 'relative');
    var onView = function () {
      mobile.setReadOnly(true);
      mode.enter();
    };
    var mask = $_gcby0212tjeajonc2.build($_cade9414vjeajonm5.sketch(onView, mobile.translate));
    mobile.alloy.add(mask);
    var maskApi = {
      show: function () {
        mobile.alloy.add(mask);
      },
      hide: function () {
        mobile.alloy.remove(mask);
      }
    };
    var mode = $_9gt6o815mjeajonqb.create(mobile, maskApi);
    return {
      setReadOnly: mobile.setReadOnly,
      refreshStructure: mode.refreshStructure,
      enter: mode.enter,
      exit: mode.exit,
      destroy: $_ddy4s3wjjeajomls.noop
    };
  };
  var $_bg45gy15ljeajonq4 = { produce: produce$1 };

  function IosRealm (scrollIntoView) {
    var alloy = OuterContainer({ classes: [$_eanbiezejeajomx0.resolve('ios-container')] });
    var toolbar = ScrollingToolbar();
    var webapp = $_cfrzgh12ojeajonb2.api();
    var switchToEdit = $_e383zh154jeajonnd.makeEditSwitch(webapp);
    var socket = $_e383zh154jeajonnd.makeSocket();
    var dropup = $_3nkbfy155jeajonni.build(function () {
      webapp.run(function (w) {
        w.refreshStructure();
      });
    }, scrollIntoView);
    alloy.add(toolbar.wrapper());
    alloy.add(socket);
    alloy.add(dropup.component());
    var setToolbarGroups = function (rawGroups) {
      var groups = toolbar.createGroups(rawGroups);
      toolbar.setGroups(groups);
    };
    var setContextToolbar = function (rawGroups) {
      var groups = toolbar.createGroups(rawGroups);
      toolbar.setContextToolbar(groups);
    };
    var focusToolbar = function () {
      toolbar.focus();
    };
    var restoreToolbar = function () {
      toolbar.restoreToolbar();
    };
    var init = function (spec) {
      webapp.set($_bg45gy15ljeajonq4.produce(spec));
    };
    var exit = function () {
      webapp.run(function (w) {
        Replacing.remove(socket, switchToEdit);
        w.exit();
      });
    };
    var updateMode = function (readOnly) {
      $_e383zh154jeajonnd.updateMode(socket, switchToEdit, readOnly, alloy.root());
    };
    return {
      system: $_ddy4s3wjjeajomls.constant(alloy),
      element: alloy.element,
      init: init,
      exit: exit,
      setToolbarGroups: setToolbarGroups,
      setContextToolbar: setContextToolbar,
      focusToolbar: focusToolbar,
      restoreToolbar: restoreToolbar,
      updateMode: updateMode,
      socket: $_ddy4s3wjjeajomls.constant(socket),
      dropup: $_ddy4s3wjjeajomls.constant(dropup)
    };
  }

  var EditorManager = tinymce.util.Tools.resolve('tinymce.EditorManager');

  var derive$4 = function (editor) {
    var base = $_6rmcx0xsjeajomqm.readOptFrom(editor.settings, 'skin_url').fold(function () {
      return EditorManager.baseURL + '/skins/' + 'lightgray';
    }, function (url) {
      return url;
    });
    return {
      content: base + '/content.mobile.min.css',
      ui: base + '/skin.mobile.min.css'
    };
  };
  var $_d0ewsb167jeajonsu = { derive: derive$4 };

  var fontSizes = [
    'x-small',
    'small',
    'medium',
    'large',
    'x-large'
  ];
  var fireChange$1 = function (realm, command, state) {
    realm.system().broadcastOn([$_8rcy7qz1jeajomv8.formatChanged()], {
      command: command,
      state: state
    });
  };
  var init$5 = function (realm, editor) {
    var allFormats = $_9s6ha1x0jeajomnc.keys(editor.formatter.get());
    $_5r3pikwsjeajommo.each(allFormats, function (command) {
      editor.formatter.formatChanged(command, function (state) {
        fireChange$1(realm, command, state);
      });
    });
    $_5r3pikwsjeajommo.each([
      'ul',
      'ol'
    ], function (command) {
      editor.selection.selectorChanged(command, function (state, data) {
        fireChange$1(realm, command, state);
      });
    });
  };
  var $_5st5m3169jeajonsw = {
    init: init$5,
    fontSizes: $_ddy4s3wjjeajomls.constant(fontSizes)
  };

  var fireSkinLoaded = function (editor) {
    var done = function () {
      editor._skinLoaded = true;
      editor.fire('SkinLoaded');
    };
    return function () {
      if (editor.initialized) {
        done();
      } else {
        editor.on('init', done);
      }
    };
  };
  var $_52hb0716ajeajonsz = { fireSkinLoaded: fireSkinLoaded };

  var READING = $_ddy4s3wjjeajomls.constant('toReading');
  var EDITING = $_ddy4s3wjjeajomls.constant('toEditing');
  ThemeManager.add('mobile', function (editor) {
    var renderUI = function (args) {
      var cssUrls = $_d0ewsb167jeajonsu.derive(editor);
      if ($_8uhiq4z0jeajomv8.isSkinDisabled(editor) === false) {
        editor.contentCSS.push(cssUrls.content);
        DOMUtils.DOM.styleSheetLoader.load(cssUrls.ui, $_52hb0716ajeajonsz.fireSkinLoaded(editor));
      } else {
        $_52hb0716ajeajonsz.fireSkinLoaded(editor)();
      }
      var doScrollIntoView = function () {
        editor.fire('scrollIntoView');
      };
      var wrapper = $_8icwg5xfjeajomp0.fromTag('div');
      var realm = $_g80fw1wkjeajomlw.detect().os.isAndroid() ? AndroidRealm(doScrollIntoView) : IosRealm(doScrollIntoView);
      var original = $_8icwg5xfjeajomp0.fromDom(args.targetNode);
      $_efdcljx2jeajomny.after(original, wrapper);
      $_f0icc0x1jeajomnf.attachSystem(wrapper, realm.system());
      var findFocusIn = function (elem) {
        return $_gc8hiiytjeajomut.search(elem).bind(function (focused) {
          return realm.system().getByDom(focused).toOption();
        });
      };
      var outerWindow = args.targetNode.ownerDocument.defaultView;
      var orientation = $_ekm71s13wjeajonia.onChange(outerWindow, {
        onChange: function () {
          var alloy = realm.system();
          alloy.broadcastOn([$_8rcy7qz1jeajomv8.orientationChanged()], { width: $_ekm71s13wjeajonia.getActualWidth(outerWindow) });
        },
        onReady: $_ddy4s3wjjeajomls.noop
      });
      var setReadOnly = function (readOnlyGroups, mainGroups, ro) {
        if (ro === false) {
          editor.selection.collapse();
        }
        realm.setToolbarGroups(ro ? readOnlyGroups.get() : mainGroups.get());
        editor.setMode(ro === true ? 'readonly' : 'design');
        editor.fire(ro === true ? READING() : EDITING());
        realm.updateMode(ro);
      };
      var bindHandler = function (label, handler) {
        editor.on(label, handler);
        return {
          unbind: function () {
            editor.off(label);
          }
        };
      };
      editor.on('init', function () {
        realm.init({
          editor: {
            getFrame: function () {
              return $_8icwg5xfjeajomp0.fromDom(editor.contentAreaContainer.querySelector('iframe'));
            },
            onDomChanged: function () {
              return { unbind: $_ddy4s3wjjeajomls.noop };
            },
            onToReading: function (handler) {
              return bindHandler(READING(), handler);
            },
            onToEditing: function (handler) {
              return bindHandler(EDITING(), handler);
            },
            onScrollToCursor: function (handler) {
              editor.on('scrollIntoView', function (tinyEvent) {
                handler(tinyEvent);
              });
              var unbind = function () {
                editor.off('scrollIntoView');
                orientation.destroy();
              };
              return { unbind: unbind };
            },
            onTouchToolstrip: function () {
              hideDropup();
            },
            onTouchContent: function () {
              var toolbar = $_8icwg5xfjeajomp0.fromDom(editor.editorContainer.querySelector('.' + $_eanbiezejeajomx0.resolve('toolbar')));
              findFocusIn(toolbar).each($_30e2nlwgjeajomlb.emitExecute);
              realm.restoreToolbar();
              hideDropup();
            },
            onTapContent: function (evt) {
              var target = evt.target();
              if ($_bsb5vnxkjeajompc.name(target) === 'img') {
                editor.selection.select(target.dom());
                evt.kill();
              } else if ($_bsb5vnxkjeajompc.name(target) === 'a') {
                var component = realm.system().getByDom($_8icwg5xfjeajomp0.fromDom(editor.editorContainer));
                component.each(function (container) {
                  if (Swapping.isAlpha(container)) {
                    $_7vu5f2yzjeajomv7.openLink(target.dom());
                  }
                });
              }
            }
          },
          container: $_8icwg5xfjeajomp0.fromDom(editor.editorContainer),
          socket: $_8icwg5xfjeajomp0.fromDom(editor.contentAreaContainer),
          toolstrip: $_8icwg5xfjeajomp0.fromDom(editor.editorContainer.querySelector('.' + $_eanbiezejeajomx0.resolve('toolstrip'))),
          toolbar: $_8icwg5xfjeajomp0.fromDom(editor.editorContainer.querySelector('.' + $_eanbiezejeajomx0.resolve('toolbar'))),
          dropup: realm.dropup(),
          alloy: realm.system(),
          translate: $_ddy4s3wjjeajomls.noop,
          setReadOnly: function (ro) {
            setReadOnly(readOnlyGroups, mainGroups, ro);
          }
        });
        var hideDropup = function () {
          realm.dropup().disappear(function () {
            realm.system().broadcastOn([$_8rcy7qz1jeajomv8.dropupDismissed()], {});
          });
        };
        $_9igfqbxljeajompe.registerInspector('remove this', realm.system());
        var backToMaskGroup = {
          label: 'The first group',
          scrollable: false,
          items: [$_ccxdx6zfjeajomx1.forToolbar('back', function () {
              editor.selection.collapse();
              realm.exit();
            }, {})]
        };
        var backToReadOnlyGroup = {
          label: 'Back to read only',
          scrollable: false,
          items: [$_ccxdx6zfjeajomx1.forToolbar('readonly-back', function () {
              setReadOnly(readOnlyGroups, mainGroups, true);
            }, {})]
        };
        var readOnlyGroup = {
          label: 'The read only mode group',
          scrollable: true,
          items: []
        };
        var features = $_3vrd7rz2jeajomva.setup(realm, editor);
        var items = $_3vrd7rz2jeajomva.detect(editor.settings, features);
        var actionGroup = {
          label: 'the action group',
          scrollable: true,
          items: items
        };
        var extraGroup = {
          label: 'The extra group',
          scrollable: false,
          items: []
        };
        var mainGroups = Cell([
          backToReadOnlyGroup,
          actionGroup,
          extraGroup
        ]);
        var readOnlyGroups = Cell([
          backToMaskGroup,
          readOnlyGroup,
          extraGroup
        ]);
        $_5st5m3169jeajonsw.init(realm, editor);
      });
      return {
        iframeContainer: realm.socket().element().dom(),
        editorContainer: realm.element().dom()
      };
    };
    return {
      getNotificationManagerImpl: function () {
        return {
          open: $_ddy4s3wjjeajomls.identity,
          close: $_ddy4s3wjjeajomls.noop,
          reposition: $_ddy4s3wjjeajomls.noop,
          getArgs: $_ddy4s3wjjeajomls.identity
        };
      },
      renderUI: renderUI
    };
  });
  function Theme () {
  }

  return Theme;

}());
})();
