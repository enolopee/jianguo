window.__require = function e(t, o, n) {
    function a(r, c) {
        if (!o[r]) {
            if (!t[r]) {
                var s = r.split("/");
                if (s = s[s.length - 1], !t[s]) {
                    var l = "function" == typeof __require && __require;
                    if (!c && l) return l(s, !0);
                    if (i) return i(s, !0);
                    throw new Error("Cannot find module '" + r + "'")
                }
                r = s
            }
            var u = o[r] = {exports: {}};
            t[r][0].call(u.exports, function (e) {
                return a(t[r][1][e] || e)
            }, u, u.exports, e, t, o, n)
        }
        return o[r].exports
    }

    for (var i = "function" == typeof __require && __require, r = 0; r < n.length; r++) a(n[r]);
    return a
}({
    AdjusWithHeight: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "d3f2eFz6IZEIblqXy4/Eo/Z", "AdjusWithHeight");
        var n, a = this && this.__extends || (n = function (e, t) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            })(e, t)
        }, function (e, t) {
            function o() {
                this.constructor = e
            }

            n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        }), i = this && this.__decorate || function (e, t, o, n) {
            var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
            return i > 3 && r && Object.defineProperty(t, o, r), r
        };
        Object.defineProperty(o, "__esModule", {value: !0});
        var r = cc.Enum({TOP: 0, BOTTOM: 1}), c = cc._decorator, s = c.ccclass, l = c.property, u = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.type = r.TOP, t.offset = 0, t
            }

            return a(t, e), t.prototype.onLoad = function () {
                var e = 0;
                this.type == r.TOP ? (e = cc.winSize.height / 2, this.offset = -this.offset) : e = -cc.winSize.height / 2, this.node.y = e + this.offset + 0
            }, i([l({
                type: cc.Enum(r),
                displayName: "AdjustType"
            })], t.prototype, "type", void 0), i([l], t.prototype, "offset", void 0), i([s], t)
        }(cc.Component);
        o.default = u, cc._RF.pop()
    }, {}],
    AutoParentSize: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "9ad9fUZJWJP0LoYhGcOaJ5l", "AutoParentSize");
        var n, a = this && this.__extends || (n = function (e, t) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            })(e, t)
        }, function (e, t) {
            function o() {
                this.constructor = e
            }

            n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        }), i = this && this.__decorate || function (e, t, o, n) {
            var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
            return i > 3 && r && Object.defineProperty(t, o, r), r
        };
        Object.defineProperty(o, "__esModule", {value: !0});
        var r = cc._decorator, c = r.ccclass, s = (r.property, function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }

            return a(t, e), t.prototype.onLoad = function () {
                this.autoSetSize()
            }, t.prototype.autoSetSize = function () {
                for (var e = this.node.children, t = 1e8, o = 1e8, n = -1e8, a = -1e8, i = 0; i < e.length; i++) {
                    var r = (p = e[i]).x, c = p.y, s = p.width / 2, l = p.height / 2;
                    r - s < t && (t = r - s), c - l < o && (o = c - l), r + s > n && (n = r + s), c + l > a && (a = c + l)
                }
                var u = cc.v2((n + t) / 2, (a + o) / 2), h = u.x - 0, d = u.y - 0;
                for (i = 0; i < e.length; i++) {
                    var p;
                    (p = e[i]).x -= h, p.y -= d
                }
                var f = cc.v2(n - t, a - o);
                this.node.width = f.x, this.node.height = f.y
            }, i([c], t)
        }(cc.Component));
        o.default = s, cc._RF.pop()
    }, {}],
    AutoSetSize: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "b33e6mn5UdAqKHuigJBRxQi", "AutoSetSize");
        var n, a = this && this.__extends || (n = function (e, t) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            })(e, t)
        }, function (e, t) {
            function o() {
                this.constructor = e
            }

            n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        }), i = this && this.__decorate || function (e, t, o, n) {
            var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
            return i > 3 && r && Object.defineProperty(t, o, r), r
        };
        Object.defineProperty(o, "__esModule", {value: !0});
        var r = cc._decorator, c = r.ccclass, s = r.property, l = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.spriteNode = null, t
            }

            return a(t, e), t.prototype.start = function () {
                this.spriteNode = this.spriteNode || this.node.getChildByName("spriteNode"), this.node.width = this.spriteNode.width, this.node.height = this.spriteNode.height
            }, i([s(cc.Node)], t.prototype, "spriteNode", void 0), i([c], t)
        }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    BestScore: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "b7b68Icp0dK/ZivtoQhxJDo", "BestScore"), Object.defineProperty(o, "__esModule", {value: !0});
        var n = e("../MyScript/GS"), a = "DongWuJuGaoGao_gameScore_1";
        o.default = {
            getBestScore: function () {
                var e = Number(n.default.KVStorage.loadStr(a, null));
                return e || (e = n.default.Constants.currentScore, n.default.KVStorage.saveStr(a, "" + e)), e
            }, setBestScore: function (e) {
                n.default.KVStorage.saveStr(a, "" + e)
            }, removeBestScore: function () {
                n.default.Constants.currentScore = null, n.default.KVStorage.remove(a)
            }
        }, cc._RF.pop()
    }, {"../MyScript/GS": "GS"}],
    Bottle: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "f6735qxf2pJWIc2QIqZkPgK", "Bottle");
        var n, a = this && this.__extends || (n = function (e, t) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            })(e, t)
        }, function (e, t) {
            function o() {
                this.constructor = e
            }

            n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        }), i = this && this.__decorate || function (e, t, o, n) {
            var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
            return i > 3 && r && Object.defineProperty(t, o, r), r
        };
        Object.defineProperty(o, "__esModule", {value: !0});
        var r = e("../commons/DataManager"), c = cc._decorator, s = c.ccclass, l = c.property, u = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.imgs = [], t.itemPercent = null, t.currentFillLevle = 0, t
            }

            return a(t, e), t.prototype.start = function () {
            }, t.prototype.fill = function () {
                if (!(this.currentFillLevle >= 5)) {
                    var e = r.default.fillTime;
                    this.currentFillLevle += 1;
                    var t = this.itemPercent.height, o = this.imgs[this.currentFillLevle - 1],
                        n = this.itemPercent.getComponent(cc.Sprite);
                    n.spriteFrame = o;
                    var a = t / this.itemPercent.height;
                    return n.fillRange = a, cc.tween(n).to(e, {fillRange: 1}).start(), cc.log("\u586b\u5145\u7b49\u7ea7\uff1a", this.currentFillLevle), !(this.currentFillLevle >= 5)
                }
            }, i([l([cc.SpriteFrame])], t.prototype, "imgs", void 0), i([l(cc.Node)], t.prototype, "itemPercent", void 0), i([s], t)
        }(cc.Component);
        o.default = u, cc._RF.pop()
    }, {"../commons/DataManager": "DataManager"}],
    DataManager: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "2e4b3w9dsFJ95gnyizOmxqP", "DataManager"), Object.defineProperty(o, "__esModule", {value: !0});
        var n = function () {
            function e() {
            }

            return e.setCellL = function (e) {
                this.cellL = this.cellSize.x * e / 2
            }, e.cellSize = cc.v2(161, 140), e.cellScale = 1, e.cellL = e.cellSize.x * e.cellScale / 2, e.rowCount = 6, e.colCount = 5, e.top = 200, e.moveDownTime = .07, e.fillTime = 1, e.targetBottleScale = .25, e.beeMoveV = 1700, e.bottleSize = cc.v2(191, 212), e.bottleScale = 1, e
        }();
        o.default = n, cc._RF.pop()
    }, {}],
    Fragment: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "a9bc0SI8+pLyrszRbgRxADS", "Fragment");
        var n, a = this && this.__extends || (n = function (e, t) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            })(e, t)
        }, function (e, t) {
            function o() {
                this.constructor = e
            }

            n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        }), i = this && this.__decorate || function (e, t, o, n) {
            var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
            return i > 3 && r && Object.defineProperty(t, o, r), r
        };
        Object.defineProperty(o, "__esModule", {value: !0});
        var r = cc._decorator, c = r.ccclass, s = r.property, l = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.fragmentSprite = null, t.fragments = [], t
            }

            return a(t, e), t.prototype.onLoad = function () {
                this.setSpriteFrame()
            }, t.prototype.setSpriteFrame = function () {
                var e = this.fragments[Math.floor(Math.random() * this.fragments.length)];
                this.fragmentSprite.spriteFrame = e
            }, i([s(cc.Sprite)], t.prototype, "fragmentSprite", void 0), i([s([cc.SpriteFrame])], t.prototype, "fragments", void 0), i([c], t)
        }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    GSAudioManager: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "354d7BxAM1CS7CAdSgCWnNA", "GSAudioManager"), Object.defineProperty(o, "__esModule", {value: !0});
        var n = e("../MyScript/GS"), a = null, i = function () {
            function e() {
            }

            return e.getInstance = function () {
                return a || (a = new e), a
            }, e.prototype.init = function (e, t) {
                this.bgMusicCache = new Map, this.soundCache = new Map, this.isMute = !1, this.soundConfig = e, this.musicConfig = t, this.currentPlayMusicPath = "", this.audioIDMap = new Map;
                var o = n.default.KVStorage.loadStr(n.default.Constants.AUDIO_MUTE_KEY, "0");
                this.isMute = "0" !== o
            }, e.prototype.loadRes = function () {
                var e = this;
                this.soundConfig && Reflect.ownKeys(this.soundConfig).forEach(function (t) {
                    if ("length" != t) for (var o in e.soundConfig[t]) {
                        var n = e.soundConfig[t][o];
                        !e.soundCache.has(n) && e.addSoundByPath(n)
                    }
                }), this.musicConfig && Reflect.ownKeys(this.musicConfig).forEach(function (t) {
                    if ("length" != t) for (var o in e.musicConfig[t]) {
                        var n = e.musicConfig[t][o];
                        !e.bgMusicCache.has(n) && e.addMusicByPath(n)
                    }
                })
            }, e.prototype.addSoundByPath = function (e, t, o, n) {
                var a = this;
                void 0 === t && (t = !1), void 0 === o && (o = !1), void 0 === n && (n = 1);
                try {
                    this.soundCache.has(e) ? t && this.playSound(e, o, n) : cc.resources.load(e.split(".")[0], function (i, r) {
                        i ? a.log.error("addSoundByPath", e) : (a.soundCache.set(e, r), t && a.playSound(e, o, n))
                    })
                } catch (i) {
                    this.log.error("addSoundByPath", e)
                }
            }, e.prototype.addMusicByPath = function (e, t) {
                var o = this;
                void 0 === t && (t = !1);
                try {
                    this.bgMusicCache.has(e) ? t && this.playMusic(e) : cc.resources.load(e, function (n, a) {
                        n ? o.log.error("addMusicByPath", e) : (o.bgMusicCache.set(e, a), t && o.playMusic(e))
                    })
                } catch (n) {
                    this.log.error("addMusicByPath", e)
                }
            }, e.prototype.playMusic = function (e, t, o) {
                void 0 === t && (t = !0), void 0 === o && (o = 1), this.currentPlayMusicPath = e, this.stopMusic(), this.isMute || (this.bgMusicCache.has(e) ? cc.audioEngine.play(this.bgMusicCache.get(e), t, o) : this.addMusicByPath(e, !0))
            }, e.prototype.stopMusic = function () {
                cc.audioEngine.stopAll()
            }, e.prototype.playSound = function (e, t, o) {
                void 0 === t && (t = !1), void 0 === o && (o = 1);
                var a = null;
                this.isMute || (this.soundCache.has(e) ? (a = cc.audioEngine.play(this.soundCache.get(e), t, o), this.audioIDMap.set(e, a), n.default.Constants.audioIDMap = this.audioIDMap) : this.addSoundByPath(e, !0, t, o))
            }, e.prototype.setMute = function (e) {
                this.isMute = e;
                var t = this.isMute ? "1" : "0";
                n.default.KVStorage.saveStr(n.default.Constants.AUDIO_MUTE_KEY, t)
            }, e
        }();
        o.default = i.getInstance(), cc._RF.pop()
    }, {"../MyScript/GS": "GS"}],
    GSConstants: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "5c3723zimpMU4/GiLV+pIuq", "GSConstants"), Object.defineProperty(o, "__esModule", {value: !0});
        var n = function () {
            function e() {
            }

            return e.currentScore = 0, e.currentLevel = 0, e.prefabMap = null, e.atlasMap = null, e.spriteFrameMap = null, e.showAD = !1, e.AUDIO_MUTE_KEY = null, e.bestHistory = -1, e.currentPercent = 0, e
        }();
        o.default = n, cc._RF.pop()
    }, {}],
    GSDate: [function (e, t) {
        "use strict";
        cc._RF.push(t, "b26a2riWG9D1q9tML0FSLZ8", "GSDate");
        var o = {
            timeStamp: function () {
                return (new Date).getTime()
            }, formatTime: function (e) {
                var t = new Date(e), o = t.getFullYear(), n = t.getMonth() + 1, a = t.getDate();
                return t.getHours(), t.getMinutes(), t.getSeconds(), o + "-" + add0(n) + "-" + add0(a)
            }, dateDifference: function () {
                var e = o.formatTime(ts1), t = o.formatTime(ts2);
                ts1 = new Date(e.replace(/-/g, "/")), ts2 = new Date(t.replace(/-/g, "/"));
                var n = ts1.getTime() - ts2.getTime();
                return parseInt(n / 864e5)
            }, formatCountDownTime: function (e) {
                var t = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"], o = parseInt(e / 36e5),
                    n = parseInt((e - 36e5 * o) / 6e4), a = parseInt((e - 36e5 * o - 6e4 * n) / 1e3);
                return (o = o < 10 ? t[o] : o + "") + ":" + (n = n < 10 ? t[n] : n + "") + ":" + (a < 10 ? t[a] : a + "")
            }, getTodayDayTag: function () {
                return o.formatTime((new Date).getTime())
            }, getTimeByDateTag: function (e) {
                var t = e.split("-"), o = parseInt(t[0]), n = parseInt(t[1]), a = parseInt(t[2]), i = new Date;
                return i.setFullYear(o), i.setMonth(n - 1), i.setDate(a), i.getTime()
            }
        };
        t.exports = o, cc._RF.pop()
    }, {}],
    GSKVStorage: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "52d22CBv0JAPLBAvAmt/L9/", "GSKVStorage"), Object.defineProperty(o, "__esModule", {value: !0});
        var n = null, a = function () {
            function e() {
            }

            return e.getInstance = function () {
                return n || (n = new e), n
            }, e.prototype.saveStr = function (e, t) {
                cc.sys.localStorage.setItem(e, t)
            }, e.prototype.loadStr = function (e, t) {
                return void 0 === t && (t = ""), cc.sys.localStorage.getItem(e) || t
            }, e.prototype.saveObj = function (e, t) {
                var o = JSON.stringify(t);
                this.saveStr(e, o)
            }, e.prototype.loadObj = function (e, t) {
                void 0 === t && (t = "");
                var o = this.loadStr(e, t);
                return o ? JSON.parse(o) : o
            }, e.prototype.remove = function (e) {
                cc.sys.localStorage.removeItem(e)
            }, e
        }();
        o.default = a.getInstance(), cc._RF.pop()
    }, {}],
    GSLog: [function (e, t) {
        "use strict";
        cc._RF.push(t, "fba9e7ZZ1JL7asBteLsY+EI", "GSLog");
        var o = function () {
            function e(e) {
                this._config = e, this._showTimeStamp = this._config.timeStamp, this._logList = [], this._tag = e.TAG
            }

            var t = e.prototype;
            return t._getLogInfo = function (e, t) {
                var o, n;
                return (this._showTimeStamp ? (n = (o = (o = new Date) || new Date).getFullYear() + "-", n += o.getMonth() + 1 + "-", n += o.getDate() + "-", n += o.getHours() + ":", n += o.getMinutes() + ":", n += o.getSeconds(), n += " " + o.getMilliseconds()) : "") + " [" + e + "] " + this._tag + " " + t.join(" ")
            }, t.debug = function () {
                if (!(this._config.logLevel > 0)) {
                    for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                    var n = this._getLogInfo("DEUBG", t);
                    console.log(n), this._config.saveLevel <= 0 && this._logList.push(n)
                }
            }, t.warn = function () {
                if (!(this._config.logLevel > 1)) {
                    for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                    var n = this._getLogInfo("WARN", t);
                    console.log(n), this._config.saveLevel <= 1 && this._logList.push(n)
                }
            }, t.error = function () {
                for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                var n = this._getLogInfo("ERROR", t);
                console.log(n), this._config.saveLevel <= 2 && this._logList.push(n)
            }, t.getLogList = function () {
                return this._logList
            }, t.getLogInfoObject = function () {
                return {tag: this._config.TAG, list: this._logList}
            }, t.getLogInfoString = function () {
                return JSON.stringify(this.getLogInfoObject())
            }, e
        }(), n = function (e, t) {
            var o = e + "  " + t.join(" ");
            console.log(o)
        }, a = {
            debug: function () {
                for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                n("DEBUG", t)
            }, error: function () {
                for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                n("ERROR", t)
            }, warn: function () {
                for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                n("WARN", t)
            }
        };
        t.exports = {
            create: function (e) {
                var t = e.TAG, n = void 0 === t ? "LOG" : t, a = e.timeStamp, i = void 0 === a || a, r = e.saveLevel,
                    c = void 0 === r ? 2 : r, s = e.logLevel;
                return new o({TAG: n, timeStamp: i, saveLevel: c, logLevel: void 0 === s ? 0 : s})
            }, Log: o, GLOG: a
        }, cc._RF.pop()
    }, {}],
    GSRandom: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "ca11fabWK5J3pxt3Vqs9NJm", "GSRandom"), Object.defineProperty(o, "__esModule", {value: !0});
        var n = {
            getRandom: function (e, t, o) {
                void 0 === o && (o = !0);
                var n = t - e;
                o && (n = (t = Math.floor(t)) - (e = Math.floor(e)), n += 1);
                var a = e;
                return o ? Math.floor(Math.random() * n) + a : Math.random() * n + a
            }, getPNRandom: function (e, t, o) {
                void 0 === o && (o = !0);
                var n = this.getRandom(e, t, o);
                return 0 == Math.floor(2 * Math.random()) && (n = -n), n
            }, getRandoms: function (e, t, o, a) {
                void 0 === a && (a = !0);
                for (var i = [], r = 0; r < e; r++) i.push(n.getRandom(t, o, a));
                return i
            }, getDiffRandoms: function (e, t, o, a) {
                void 0 === a && (a = !0);
                var i = o - t;
                if (!(a && e > (i += 1))) {
                    for (var r = [], c = 0; c < e; c++) {
                        var s = n.getRandom(t, o, a);
                        for (var l in r) r[l] == s && (s = null, c--);
                        null != s && r.push(s)
                    }
                    return r
                }
                cc.log("\u8d85\u8fc7\u4e86\u8303\u56f4", "n:" + e + ",bound:" + i)
            }
        };
        o.default = n, cc._RF.pop()
    }, {}],
    GS: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "135bdRnPGVO1o1VqHUvWYia", "GS"), Object.defineProperty(o, "__esModule", {value: !0}), cc.log("GS IS LOAD");
        var n = e("../commonJs/GSConstants"), a = e("../commonJs/GSKVStorage"), i = e("../commonJs/GSAudioManager"),
            r = e("../commonJs/PoolManager"), c = e("../commonJs/GSLog"), s = e("../commonJs/GSRandom"),
            l = e("../commonJs/GSDate"), u = e("../commonJs/GetCurrentLevel"), h = e("../commonJs/BestScore"), d = {
                Constants: n.default,
                KVStorage: a.default,
                AudioManager: i.default,
                PoolManager: r.default,
                LOG: c,
                Random: s.default,
                Date: l,
                GetCurrentLevel: u.default,
                BestScore: h.default
            };
        o.default = d, cc.log("GS IS END"), cc._RF.pop()
    }, {
        "../commonJs/BestScore": "BestScore",
        "../commonJs/GSAudioManager": "GSAudioManager",
        "../commonJs/GSConstants": "GSConstants",
        "../commonJs/GSDate": "GSDate",
        "../commonJs/GSKVStorage": "GSKVStorage",
        "../commonJs/GSLog": "GSLog",
        "../commonJs/GSRandom": "GSRandom",
        "../commonJs/GetCurrentLevel": "GetCurrentLevel",
        "../commonJs/PoolManager": "PoolManager"
    }],
    GameConfig: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "c29d2QhQg5H05lLQe1mCMNG", "GameConfig"), Object.defineProperty(o, "__esModule", {value: !0});
        var n = {
            GameClubButton: null,
            GameScene: null,
            launchScene: null,
            Bros: null,
            caS: null,
            MAIN_MENU_NUM: "Classic",
            gameScore: 0,
            standScore: 16e3,
            GAME_OVER_BOOL: !0,
            publicGameBool: !1,
            ranLinkData: null,
            recGameData: null,
            InfoData: null,
            endShow0: null,
            endShow1: null,
            endShow2: null,
            endShow3: null,
            infoGameName: null,
            showText: null,
            startText: null,
            moreGameText: null,
            playAgainText: null,
            playNum: 0,
            noTouchBool: !0,
            returnRanNum: function (e, t) {
                return e + Math.floor(Math.random() * (t - e + 1))
            }
        };
        o.default = n, cc._RF.pop()
    }, {}],
    GameUiTools: [function (e, t) {
        "use strict";
        cc._RF.push(t, "b21e8tF461OFalpptyeuAE2", "GameUiTools"), e("GameConfig");
        var o = {
            newSprite: function (e, t) {
                var o = new cc.Node;
                return t ? (e = e.split(".")[0], o.addComponent(cc.Sprite).spriteFrame = GameTools.love2048FrameCache.getSpriteFrame(e)) : o.addComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame("res/raw-assets/resources/" + e), o
            }, setNodeSpriteFrame: function (e, t) {
                e.getComponent(cc.Sprite).spriteFrame = GameTools.love2048FrameCache.getSpriteFrame(t)
            }, setButtonClickEvents: function (e, t, o, n, a) {
                var i = new Array;
                null == t.length ? i[0] = t : i = t;
                for (var r = 0; r < i.length; r++) {
                    var c = new cc.Component.EventHandler;
                    c.target = e.node, c.component = e.node.name, c.handler = o, null == t.length ? c.customEventData = n : c.customEventData = r;
                    var s = i[r].addComponent(cc.Button);
                    s.clickEvents.push(c), (null == a || a) && (s.transition = cc.Button.Transition.SCALE, s.duration = .1, s.zoomScale = 1.2)
                }
            }, scheduleOnce: function (e, t, o) {
                e.runAction(cc.sequence(cc.delayTime(o), cc.callFunc(t, e)))
            }, loadingScene: function (e, t) {
                t ? cc.loader.loadRes("panel/LoadingLayer", function (t, o) {
                    var n = cc.instantiate(o);
                    cc.director.getScene().children[0].addChild(n), cc.director.preloadScene(e, function () {
                        cc.director.loadScene(e)
                    })
                }) : cc.director.preloadScene(e, function () {
                    cc.director.loadScene(e)
                })
            }, loadingLayer: function (e) {
                cc.loader.loadRes(e, function (e, t) {
                    if (!e) {
                        var o = cc.instantiate(t);
                        cc.director.getScene().children[0].addChild(o, 100)
                    }
                })
            }
        };
        t.exports = o, cc._RF.pop()
    }, {GameConfig: "GameConfig"}],
    GetCurrentLevel: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "7ab43nRrm5KkZroml6VJvmp", "GetCurrentLevel"), Object.defineProperty(o, "__esModule", {value: !0});
        var n = e("../MyScript/GS"), a = "zhuanZhuanSaiChe_gameLevel_3";
        o.default = {
            getCurrentLevel: function () {
                var e = Number(n.default.KVStorage.loadStr(a, null));
                return e || (e = n.default.Constants.currentLevel, n.default.KVStorage.saveStr(a, "" + e)), n.default.Constants.currentLevel = e, e
            }, setCurrentLevel: function (e) {
                n.default.Constants.currentLevel = e, n.default.KVStorage.saveStr(a, e)
            }, removeCurrentLevel: function () {
                n.default.Constants.currentLevel = null, n.default.KVStorage.remove(a)
            }
        }, cc._RF.pop()
    }, {"../MyScript/GS": "GS"}],
    HttpManagerJs: [function (e, t) {
        "use strict";
        var o;
        cc._RF.push(t, "3d2b5C+QBpJYI8iXeCRHZo8", "HttpManagerJs");
        var n = e("GameConfig"), a = ((o = {
            URL: "http://www.wesane.com/h5service.php/Interface/services",
            cacheList: null,
            isBusy: null,
            req: null,
            perform: null,
            retGameId: 0
        }).cacheList = [], o.ctor = function () {
        }, o.checkHave = function () {
            this.isBusy || this.sendOne()
        }, o.httpInitUrl = function (e) {
            console.log("data", this.URL), this.retGameId = e
        }, o.send = function (e, t, o, n) {
            this.cacheList.push({type: e, data: t, func: o, target: n}), this.isBusy || this.sendOne()
        }, o.sendOne = function () {
            if (0 != this.cacheList.length) {
                this.isBusy = !0, this.perform = this.cacheList.shift(), this.req = cc.loader.getXMLHttpRequest(), this.req.onreadystatechange = this.onDataHandler.bind(this), this.req.onerror = this.onErrorHandler.bind(this), this.req.ontimeout = this.onTimeoutHandler.bind(this), this.req.timeout = 2e3, cc.log("pos", this.URL), this.req.open("POST", this.URL), this.req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
                var e = this.returnLanguage();
                console.log("gameIdid", this.retGameId);
                var t = this.retGameId,
                    o = {type: this.perform.type, gid: t, mid: null, data: this.perform.data, languageType: e},
                    n = "send=" + JSON.stringify(o);
                this.req.send(n)
            }
        }, o.onDataHandler = function () {
            if (404 != this.req.status) {
                if (4 == this.req.readyState && this.req.status >= 200 && this.req.status <= 207 && this.req.responseText) {
                    var e = JSON.parse(this.req.responseText);
                    this.isBusy = !1, this.perform.target ? this.perform.func.call(this.perform.target, e.error, e.data, e.commendGame, e.gameInfo) : this.perform.func(e)
                }
            } else {
                var t = n.launchScene, o = n.Bros;
                n.caS, cc.director.loadScene(t, null, function () {
                    if (o) {
                        var e = document.getElementById("GameDiv");
                        e && (e.style.backgroundImage = "")
                    }
                    cc.loader.onProgress = null, console.log("Success to load scene: " + t)
                })
            }
        }, o.returnLanguage = function () {
            return ("" + window.navigator.language).toLocaleLowerCase()
        }, o.onErrorHandler = function () {
            cc.log("\u7f51\u7edc\u9519\u8bef"), this.isBusy = !1, this.perform.target ? this.perform.func.call(this.perform.target, -1) : this.perform.func(-1)
        }, o.onTimeoutHandler = function () {
            cc.log("\u8bf7\u6c42\u8d85\u65f6"), this.isBusy = !1, this.perform.target ? this.perform.func.call(this.perform.target, -1) : this.perform.func(-1)
        }, o.clearAll = function () {
            for (var e = this.cacheList.length, t = 0; t < e; t++) {
                var o = this.cacheList[t];
                o && (o.target ? o.func.call(o.target, -1) : o.func(-1))
            }
            this.cacheList.length = 0
        }, o);
        t.exports = a, cc._RF.pop()
    }, {GameConfig: "GameConfig"}],
    Item: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "dbe51mtwBtIm50mVLeH04pm", "Item");
        var n, a = this && this.__extends || (n = function (e, t) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            })(e, t)
        }, function (e, t) {
            function o() {
                this.constructor = e
            }

            n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        }), i = this && this.__decorate || function (e, t, o, n) {
            var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
            return i > 3 && r && Object.defineProperty(t, o, r), r
        };
        Object.defineProperty(o, "__esModule", {value: !0});
        var r = e("../../commonJs/utils"), c = cc._decorator, s = c.ccclass, l = (c.property, function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.itemLevel = -2, t.cellPos = [], t.spriteCom = null, t.isOperabel = !0, t.root = null, t.rootJS = null, t.gameLayer = null, t.prePos = null, t
            }

            return a(t, e), t.prototype.onLoad = function () {
                this.initData()
            }, t.prototype.initData = function () {
                this.gameLayer = this.node.parent.parent, this.root = this.gameLayer.parent, this.rootJS = this.root.getComponent("Root"), this.spriteCom = this.node.getChildByName("SpriteNode").getComponent(cc.Sprite), this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)
            }, t.prototype.start = function () {
            }, t.prototype.initByCellConfig = function (e, t) {
                if (null != e) {
                    var o = e.position, n = e.cellPos;
                    this.node.setPosition(o), this.cellPos = n, e.item = this.node
                }
                this.itemLevel = t;
                var a = "item" + t;
                -1 == t && (a = "honey");
                var i = r.default.getSpriteFrame(a);
                this.spriteCom.spriteFrame = i
            }, t.prototype.onTouchStart = function () {
                var e = this;
                if (-1 != this.itemLevel && 6 != this.itemLevel && this.rootJS.isOperable && this.isOperabel) if (this.rootJS.isNeedTip && (this.rootJS.isNeedTip = !1, this.rootJS.tipFinger.destroy()), cc.log("touch", this.itemLevel), this.rootJS.getSame(this)) {
                    var t = this.node.getChildByName("SpriteNode"), o = t.scale;
                    cc.tween(t).to(.1 / 3, {scale: o + .5}).to(.2 / 3, {scale: o}).start()
                } else {
                    var n = this.node.getPosition().x;
                    this.isOperabel = !1, cc.tween(this.node).tag(1).to(.05, {x: n - 5}).to(.1, {x: n + 5}).to(.05, {x: n}).call(function () {
                        e.isOperabel = !0
                    }).start()
                }
            }, t.prototype.levelUp = function () {
                if (!(this.itemLevel >= 6)) return this.itemLevel += 1, this.initByCellConfig(void 0, this.itemLevel), this.itemLevel
            }, i([s], t)
        }(cc.Component));
        o.default = l, cc._RF.pop()
    }, {"../../commonJs/utils": "utils"}],
    LoadSceneJs: [function (e, t) {
        "use strict";
        cc._RF.push(t, "e853ffGogxOFotXwuZwJURd", "LoadSceneJs");
        var o = {
            goToCover: function (e, t, o, n, a) {
                var i = e;
                i = null == i || null == i || e, console.log("LoadBoolBeforeLoadS", i), this.needShow = !1, i && i ? (this.needShow = !0, showMyAds()) : this.needShow = !1, this.needShow ? (null == preloader && this.startGoToGame(o, n, a), resCompleteFlag = !0, adCompleteFlag && resCompleteFlag && this.startGoToGame(o, n, a)) : this.startGoToGame(o, n, a)
            }, startGoToGame: function () {
                console.log("goToScene"), noAdGoToScene()
            }
        };
        t.exports = o, cc._RF.pop()
    }, {}],
    MainGameJS: [function (e, t) {
        "use strict";
        cc._RF.push(t, "0e7a8SkMLxEY7nCB1Bqi8WZ", "MainGameJS");
        var o, n, a = (o = e("../MyScript/GS")) && o.__esModule ? o : {default: o}, i = e("GameConfig"),
            r = (e("GameUiTools"), e("MainManage"));
        cc.Class(((n = {
            extends: cc.Component, properties: {showAD: cc.Boolean}, onLoad: function () {
                a.default.Constants.showAD = this.showAD, a.default.Constants.showAD && (cc.log("\u5c55\u793a\u5e7f\u544a"), this.play()), this.platFromNum = 1, this.judgeCurPlatform(), this.adapterScreen()
            }, addTouchEvents: function () {
                var e = this;
                this.node.on(cc.Node.EventType.TOUCH_START, function () {
                    if (i.GAME_OVER_BOOL && i.noTouchBool) return i.gameScore++, e.sceneScore.string = i.gameScore, console.log("ggoog", i.gameScore), i.gameScore >= 2 && e.gameEnd(), !0
                }, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.on_touch_move, this), this.node.on(cc.Node.EventType.TOUCH_END, this.on_touch_end, this)
            }, on_touch_move: function () {
                console.log("touchMoved")
            }, on_touch_end: function () {
                console.log("touchEnd")
            }, gameEnd: function () {
                i.GAME_OVER_BOOL = !1, r.gameOverShowText(i.gameScore, 1), this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(this.gameEnd1.bind(this))))
            }, gameEnd1: function () {
                this.gameOveEndBool = !0, this.gameOverT1.string = r.gameEndLText, this.gameOverT2.string = r.gameEndL1Text, this.gameOverT1.node.zIndex = 999, this.gameOverT2.node.zIndex = 999, this.gameOverT1.node.opacity = 0, this.gameOverT1.node.y = 100, this.gameOverT1.node.runAction(cc.sequence(cc.delayTime(.2), cc.spawn(cc.fadeIn(1), cc.moveBy(1, 0, -50)), cc.delayTime(.3), cc.callFunc(this.initEndLayer.bind(this)), cc.removeSelf())), this.gameOverT2.node.opacity = 0, this.gameOverT2.node.y = this.gameOverT1.node.y - 100, this.gameOverT2.node.runAction(cc.sequence(cc.delayTime(.2), cc.spawn(cc.fadeIn(1), cc.moveBy(1, 0, -50)), cc.delayTime(.3), cc.removeSelf()))
            }, initEndLayer: function () {
                r.gotoEndLayer()
            }, start: function () {
            }, play: function () {
                console.log(1);
                var e = this;
                adBreak({
                    type: "next", name: "restart-game", beforeBreak: function () {
                        e.enableButtons()
                    }, afterBreak: function () {
                        e.enableButtons()
                    }
                })
            }, enableButtons: function () {
            }, judgeCurPlatform: function () {
                console.log(navigator.userAgent);
                var e, t, o, n, a, i, r,
                    c = (e = navigator.userAgent, t = /(?:Windows Phone)/.test(e), o = /(?:SymbianOS)/.test(e) || t, n = /(?:Android)/.test(e), a = /(?:Firefox)/.test(e), /(?:Chrome|CriOS)/.test(e), {
                        isTablet: i = /(?:iPad|PlayBook)/.test(e) || n && !/(?:Mobile)/.test(e) || a && /(?:Tablet)/.test(e),
                        isPhone: r = /(?:iPhone)/.test(e) && !i,
                        isAndroid: n,
                        isPc: !r && !n && !o
                    });
                c.isAndroid || c.isPhone ? this.platFromNum = 1 : c.isTablet ? this.platFromNum = 2 : c.isPc && (this.platFromNum = 3)
            }, adapterScreen: function () {
                var e = cc.find("Canvas").getComponent(cc.Canvas);
                2 == this.platFromNum || 3 == this.platFromNum ? (e.fitWidth = !0, e.fitHeight = !0) : (e.fitWidth = !0, e.fitHeight = !1)
            }, update: function () {
            }, gameOverGoToOVer: function () {
                this.gameOveEndBool && (this.gameOverNum++, this.gameOverNum >= 900 && (this.gameOverNum = 0, this.gameOveEndBool = !1))
            }
        }).play = function () {
            console.log(1);
            var e = this;
            adBreak({
                type: "next", name: "restart-game", beforeBreak: function () {
                    e.enableButtons()
                }, afterBreak: function () {
                    e.enableButtons()
                }
            })
        }, n.enableButtons = function () {
        }, n)), cc._RF.pop()
    }, {"../MyScript/GS": "GS", GameConfig: "GameConfig", GameUiTools: "GameUiTools", MainManage: "MainManage"}],
    MainManage: [function (e, t) {
        "use strict";
        cc._RF.push(t, "78d72lidtZH/J0j5e4yvuvX", "MainManage");
        var o = e("HttpManagerJs"), n = e("GameConfig"), a = e("LoadSceneJs"), i = e("GameUiTools"), r = {
            gameHttpId: 0,
            subScoreHttp: null,
            gameNameText: null,
            gameInfoText: null,
            txtStartText: null,
            txtMoreText: null,
            txtAgainText: null,
            gameEndLText: null,
            gameEndL1Text: null,
            bgLayRgb: null,
            gameEndName1: null,
            gameEndName2: null,
            gameEndUrl1: null,
            gameEndUrl2: null,
            langugeType: 1,
            ranLinkData: null,
            adShowBefore: !1,
            adShowAfter: !0,
            endLayCol: null,
            moreBtnBgCol: null,
            moreBtnTextCol: null,
            recGameData: null,
            recGameUrl: null,
            recGameDelPau: null,
            recGameDelPer: null,
            recGameimg1: null,
            recGameimg2: null,
            recGamePos: null,
            InfoData: null,
            endShow0: null,
            endShow1: null,
            endShow2: null,
            endShow3: null,
            infoGameName: null,
            showText: null,
            startText: null,
            moreGameText: null,
            playAgainText: null,
            endHttpShowInfo: null,
            moreGameUrl: null,
            init: function (e, t, a) {
                if (!n.publicGameBool) {
                    if (n.playNum >= 1) return;
                    n.playNum++
                }
                n.launchScene = e, n.Bros = t, n.caS = a, this.curType = 1, this.getHttpGameId(), this.gamePV_load(), console.log("thisg", this.gameHttpId), o.httpInitUrl(this.gameHttpId), o.send("103", null, this.getLinkGameReturn, this);
                var i = this.initLanguage();
                this.gameNameText = i.game_name, this.gameInfoText = i.game_info, this.txtStartText = i.txtStart, this.txtMoreText = i.txtMore, this.txtAgainText = i.txtAgain, this.gameEndLText = i.gameEndL, this.gameEndL1Text = i.gameEndL1, this.bgLayRgb = i.bgRgb, this.gameEndName1 = i.gameT2, this.gameEndName2 = i.gameT3, this.gameEndUrl1 = i.gameUrl1, this.gameEndUrl2 = i.gameUrl2, this.langugeType = this.curType
            },
            getHttpGameId: function () {
                var e = window.location.href, t = e.substring(0, e.lastIndexOf("//") + 2), o = window.location.host,
                    n = t + o + "/Service/Share/index";
                this.gameAllHttp = n, cc.log("gameAll", this.gameAllHttp), this.subScoreHttp = t + o + "/Service/Score/index", this.gamePvHttp = t + o + "/Service/GamePv/index";
                var a = document.URL, i = 0, r = a.substring(a.lastIndexOf("/game/") + 1, a.length).split("/");
                r.length >= 2 && (i = r[1]), this.gameHttpId = i, cc.log("gameId", i), e.substring(e.lastIndexOf("//") + 4, e.lastIndexOf("com") + 3), this.moreGameUrl = "http://m.wesane.com/"
            },
            gameOverShowText: function (e, t) {
                this.ajaxLoad("http://www.wesane.com/admin.php/Gamescore/saveGamescore", "gameScore=" + e + "&gameId=" + this.gameHttpId + "&gameType=" + t, this.scoreResult)
            },
            gamePV_load: function () {
                this.ajaxLoad("http://www.wesane.com/admin.php/Activityshow/gamelogo", "gameID=" + this.gameHttpId, this.ajaxOnLogoResult)
            },
            ajaxOnLogoResult: function () {
            },
            ajaxLoad: function (e, t, o) {
                var n = cc.loader.getXMLHttpRequest();
                n.onreadystatechange = o, n.open("POST", e), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n.send(t)
            },
            scoreResult: function (e) {
                if (null != e.currentTarget.response && "" != e.currentTarget.response) {
                    var t = JSON.parse(e.currentTarget.response);
                    cc.log("endshow", t.content), r.endHttpShowInfo = t.content
                }
            },
            initLanguage: function () {
                var e = 1;
                switch (cc.sys.language) {
                    case cc.sys.LANGUAGE_CHINESE:
                        e = "zh-TW" == window.navigator.language || "zh-tw" == window.navigator.language || "zh-HK" == window.navigator.language || "zh-hk" == window.navigator.language ? 2 : 1;
                        break;
                    case cc.sys.LANGUAGE_KOREAN:
                        e = 4;
                        break;
                    default:
                        e = 3
                }
                return e
            },
            getLinkGameReturn: function (e, t, o, i) {
                if (console.log("err0", e), console.log("err1", t), console.log("err2", o), console.log("err3", i), 0 == e) {
                    this.ranLinkData = t, console.log("LoadMainGameScnee");
                    var r = n.launchScene, c = n.Bros, s = n.caS;
                    a.goToCover(this.adShowBefore, this.adShowAfter, r, c, s)
                }
            },
            ranRecGameData: function () {
                if (null != this.recGameData && "" != this.recGameData) {
                    this.returnBool = !1;
                    var e = this.recGameData.length, t = n.returnRanNum(1, e) - 1;
                    cc.log("ranNNN", t), this.recGameUrl = this.recGameData[t].data_link, this.recGameDelPer = this.recGameData[t].delay_per, this.recGameDelPau = this.recGameData[t].delay_pau, this.recGameimg1 = this.recGameData[t].img_1, this.recGameimg2 = this.recGameData[t].img_2, this.recGamePos = this.recGameData[t].poistion
                }
            },
            ranLinkUrl: function () {
                if (null != this.ranLinkData && this.ranLinkData.gameList && null != this.ranLinkData.gameList) {
                    var e = this.ranLinkData.gameList.length, t = n.returnRanNum(1, e) - 1;
                    return cc.log("templ", t, this.ranLinkData.gameList), cc.log("url", this.ranLinkData.gameList[0].gameName, this.ranLinkData.gameList[0].gameUrl), t
                }
                return null
            },
            gotoEndLayer: function () {
                if (n.publicGameBool) this.showGameEndLayer(); else {
                    if (adEndComplete = !1, resEndComplete = !1, this.needShow = null, 1 == window.navigator.onLine) {
                        var e = this.adShowAfter;
                        console.log("ad", e), (e = null == e || null == e || this.adShowAfter) ? (this.needShow = !0, console.log("showMyad"), showMyAds()) : this.needShow = !1
                    } else console.log("showOver1"), this.showGameEndLayer(), this.needShow = null;
                    console.log("showMyad2", this.needShow), null != this.needShow && (console.log("showMyad3"), this.needShow ? (console.log("pre", preloader), null == preloader && this.showGameEndLayer(), resEndComplete = !0, adEndComplete && resEndComplete && (console.log("showOver1"), this.showGameEndLayer())) : (console.log("gam"), this.showGameEndLayer()))
                }
            },
            showGameEndLayer: function () {
                i.loadingLayer("panel/GameOverLayer")
            }
        };
        t.exports = r, cc._RF.pop()
    }, {
        GameConfig: "GameConfig",
        GameUiTools: "GameUiTools",
        HttpManagerJs: "HttpManagerJs",
        LoadSceneJs: "LoadSceneJs"
    }],
    ObjectManager: [function (e, t) {
        "use strict";
        cc._RF.push(t, "fabb7iI8ZNNQLqdz0VrKiGG", "ObjectManager"), cc._RF.pop()
    }, {}],
    Particle: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "e86892ObvlBqrgIYxIQDabj", "Particle"), Object.defineProperty(o, "__esModule", {value: !0});
        var n = e("../../commonJs/utils"), a = e("../commons/DataManager"), i = e("../GS"), r = function () {
            function e() {
            }

            return e.Bomb = function (e, t) {
                i.default.PoolManager.setPool("BombSplash"), i.default.PoolManager.setPool("BombWave"), i.default.PoolManager.setPool("BombPoint");
                for (var o = 0, a = t.getPosition(), r = 0, c = function () {
                    var t = i.default.PoolManager.getNodeByName("BombPoint"),
                        o = (r += 360 / 7) + Math.random() * (360 / 7) - 360 / 7 / 2,
                        c = a.add(n.default.getPosByAngle(50 * Math.random() + 50, o)).mul(3);
                    t.setParent(e), t.setPosition(a.add(n.default.getPosByAngle(20 * Math.random(), o))), cc.tween(t).to(.2, {position: c}, {easing: cc.easing.sineIn}).delay(.2 * Math.random() + .2).call(function () {
                        i.default.PoolManager.setNodeToPool(t)
                    }).start()
                }, s = 0; s < 7; s++) c();
                .5 > o && (o = .5);
                var l = i.default.PoolManager.getNodeByName("BombWave");
                return l.setParent(e), l.setPosition(a), l.scale = .2, l.opacity = 200, cc.tween(l).repeat(20, cc.tween().by(.015, {scale: .5})).call(function () {
                    i.default.PoolManager.setNodeToPool(l)
                }).start(), .4 > o && (o = .4), o
            }, e.mixParticle = function (e, t) {
                i.default.PoolManager.setPool("MixLight");
                var o = e.getPosition(), n = i.default.PoolManager.getNodeByName("MixLight");
                return n.setPosition(o), n.setParent(t), n.scale = .2, cc.tween(n).delay(.15).to(.1, {scale: 1.3}, {easing: cc.easing.backOut}).by(.3, {angle: 15}).call(function () {
                    i.default.PoolManager.setNodeToPool(n)
                }).start(), e.scale = .3, cc.tween(e).to(.2, {scale: .9 * a.default.cellScale}).start(), .45
            }, e.fillHoney = function (e, t, o) {
                i.default.PoolManager.setPool("HoneyFragment");
                for (var n = i.default.Random.getRandom(2, 3), r = a.default.fillTime, c = r / 5, s = 0; s < 5; s++) for (var l = function () {
                    var n = i.default.PoolManager.getNodeByName("HoneyFragment");
                    n.setPosition(e), n.setParent(t), n.scale = .5, n.y -= a.default.cellSize.y / 2 + 20 * Math.random() - 10, n.x += 100 * Math.random() - 50, n.active = !1, cc.tween(n).delay(c * s).call(function () {
                        n.active = !0
                    }).to(r, {position: o, scale: .1}).call(function () {
                        i.default.PoolManager.setNodeToPool(n)
                    }).start()
                }, u = 0; u < n; u++) l()
            }, e.beBombedParticle = function (e, t) {
                var o = e.position;
                i.default.AudioManager.playSound("sounds/beBomb", !1, .5);
                for (var a, r, c, s, l, u = n.default.getPrefabByName("Fragment"), h = function () {
                    var e = cc.instantiate(u);
                    e.setPosition(o), e.setParent(t);
                    var n = e;
                    n.active = !0, n.opacity = 255, n.angle = 360 * Math.random(), a = 359 * Math.random(), r = 300 * Math.random() + 120, c = cc.v2(Math.sin(a * Math.PI / 180) * r, Math.cos(a * Math.PI / 180) * r), n.scale = Math.random() > .3 ? .7 + .3 * Math.random() : .2 * Math.random() + .2, n.zIndex = 3, n.runAction(cc.sequence(cc.delayTime(2 / 3 * .5), cc.fadeOut(1 / 3 * .5))), s = Math.floor(100 * Math.random()) > 49, l = s ? 1 : -1, n.runAction(cc.sequence(cc.spawn(cc.moveBy(.5, c), cc.rotateBy(.5, 540 * l)), cc.callFunc(function () {
                        n.active = !1, n.destroy()
                    }, d)))
                }, d = this, p = 0; p < 10; p++) h()
            }, e
        }();
        o.default = r, cc._RF.pop()
    }, {"../../commonJs/utils": "utils", "../GS": "GS", "../commons/DataManager": "DataManager"}],
    PoolManager: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "a7a8e51JOtKoan9dkt6EyIj", "PoolManager"), Object.defineProperty(o, "__esModule", {value: !0});
        var n = e("./utils"), a = function () {
            function e() {
            }

            return e.getInstance = function () {
                return i || (i = new e).init(), i
            }, e.prototype.init = function () {
                this.poolMap = new Map
            }, e.prototype.setPool = function (e, t, o) {
                if (o || (o = e + "_pool"), !this.poolMap.has(o)) {
                    var a = null;
                    a = t ? new cc.NodePool(t) : new cc.NodePool;
                    for (var i = n.default.getPrefabByName(e), r = 0; r < 5; r++) {
                        var c = cc.instantiate(i);
                        a.put(c)
                    }
                    this.poolMap.set(o, a)
                }
            }, e.prototype.getPool = function (e) {
                if (this.poolMap.has(e)) return this.poolMap.get(e)
            }, e.prototype.getNodeByName = function (e, t) {
                t || (t = e + "_pool");
                var o = this.getPool(t);
                if (o.size() > 0) return o.get();
                var a = n.default.getPrefabByName(e), i = cc.instantiate(a);
                return this.setNodeToPool(i, t), o.get()
            }, e.prototype.setNodeToPool = function (e, t) {
                t || (t = e.name + "_pool"), this.getPool(t).put(e)
            }, e
        }(), i = null;
        o.default = a.getInstance(), cc._RF.pop()
    }, {"./utils": "utils"}],
    PrefabManager: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "8c065/tnslK84XY8r5fQZoo", "PrefabManager");
        var n, a = this && this.__extends || (n = function (e, t) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            })(e, t)
        }, function (e, t) {
            function o() {
                this.constructor = e
            }

            n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        }), i = this && this.__decorate || function (e, t, o, n) {
            var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
            return i > 3 && r && Object.defineProperty(t, o, r), r
        };
        Object.defineProperty(o, "__esModule", {value: !0});
        var r = e("../MyScript/GS"), c = cc._decorator, s = c.ccclass, l = c.property, u = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.prefabs = [], t.prefabMap = new Map, t
            }

            return a(t, e), t.prototype.onLoad = function () {
                console.log("\u9884\u5236\u4f53\u7ba1\u7406\u811a\u672c\u5df2\u52a0\u8f7d"), this.setPrefab(), r.default.Constants.prefabMap = this.prefabMap
            }, t.prototype.setPrefab = function () {
                for (var e = 0; e < this.prefabs.length; e++) {
                    var t = this.prefabs[e], o = t.name;
                    this.prefabMap.set(o, t)
                }
            }, i([l([cc.Prefab])], t.prototype, "prefabs", void 0), i([s], t)
        }(cc.Component);
        o.default = u, cc._RF.pop()
    }, {"../MyScript/GS": "GS"}],
    QueenBee: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "34b6egnQuBA/b0BaMBDBKVl", "QueenBee");
        var n, a = this && this.__extends || (n = function (e, t) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            })(e, t)
        }, function (e, t) {
            function o() {
                this.constructor = e
            }

            n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        }), i = this && this.__decorate || function (e, t, o, n) {
            var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
            return i > 3 && r && Object.defineProperty(t, o, r), r
        };
        Object.defineProperty(o, "__esModule", {value: !0});
        var r = cc._decorator, c = r.ccclass, s = (r.property, function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }

            return a(t, e), t.prototype.start = function () {
            }, t.prototype.randomMove = function () {
                var e = this, t = cc.winSize, o = 3 * t.width / 2, n = 3 * t.height / 2, a = 100 * Math.random() + 300,
                    i = cc.v2(Math.random() * o - o / 2, Math.random() * n - n / 2), r = i.sub(this.node.getPosition()),
                    c = r.mag() / a, s = Math.abs(this.node.scaleX);
                r.x > 0 ? this.node.scaleX = -s : this.node.scaleX = s, cc.tween(this.node).to(c, {position: i}).call(function () {
                    e.randomMove()
                }).start()
            }, i([c], t)
        }(cc.Component));
        o.default = s, cc._RF.pop()
    }, {}],
    Root: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "d97eboqXgRAeJa7WdrlyYPQ", "Root");
        var n, a = this && this.__extends || (n = function (e, t) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            })(e, t)
        }, function (e, t) {
            function o() {
                this.constructor = e
            }

            n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        }), i = this && this.__decorate || function (e, t, o, n) {
            var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
            return i > 3 && r && Object.defineProperty(t, o, r), r
        }, r = this && this.__spreadArrays || function () {
            for (var e = 0, t = 0, o = arguments.length; t < o; t++) e += arguments[t].length;
            var n = Array(e), a = 0;
            for (t = 0; t < o; t++) for (var i = arguments[t], r = 0, c = i.length; r < c; r++, a++) n[a] = i[r];
            return n
        };
        Object.defineProperty(o, "__esModule", {value: !0});
        var c = e("../../commonJs/GameConfig"), s = e("../../commonJs/utils"), l = e("../commons/DataManager"),
            u = e("../GS"), h = e("./Particle"), d = cc._decorator, p = d.ccclass, f = d.property, g = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.maskPre = null, t.defeatPre = null, t.scoreNumLabel = null, t.playNum = 0, t.rowCount = -1, t.colCount = -1, t.gameLayer = null, t.allCell = null, t.allCellSpriteNode = [], t.sameItems = null, t.currentBottle = null, t.floor = null, t.bottlePagoda = [], t.allBottle = [], t.initItemLevel = [], t.isNeedTip = !1, t.tipFinger = null, t.bottomSpace = 0, t.currentBottleIndex = 0, t.isOperable = !0, t
                }

                return a(t, e), t.prototype.onLoad = function () {
                    var e = cc.v2(-cc.winSize.width / 2 - 1e3, 0),
                        t = (s.default.createNodeByPrefab(this.maskPre, e, this.node.parent), cc.v2(cc.winSize.width / 2 + 1e3, 0));
                    s.default.createNodeByPrefab(this.maskPre, t, this.node.parent), c.default.playNum++, u.default.AudioManager.init([], []), this.playNum = Number(u.default.KVStorage.loadStr("ShouJiFengMi_playNum_3", "0")), this.playNum <= 0 && (this.isNeedTip = !0), this.initData()
                }, t.prototype.start = function () {
                    this.adaptBottle(), this.createCellMap(), this.createFloor(), this.createBottle(), this.createInitItem(), this.createBottlePagoda()
                }, t.prototype.initData = function () {
                    this.gameLayer = this.node.getChildByName("GameLayer"), this.colCount = l.default.colCount, this.rowCount = l.default.rowCount;
                    var e = this.gameLayer.getChildByName("HoneyFlow"), t = cc.winSize;
                    e.width = t.width, e.height = t.height, u.default.Constants.currentScore = 0
                }, t.prototype.adaptBottle = function () {
                    var e = cc.winSize, t = e.height, o = (e.width, l.default.top), n = 52 + .5 * l.default.bottleSize.y,
                        a = l.default.cellL, i = Math.cos(Math.PI / 180 * 30) * a * 2, r = t / 2 - o - a,
                        c = r - i * (this.rowCount - 1) - i / 2;
                    if (c - -t / 2 < n) {
                        l.default.bottleScale = .5;
                        var s = r - c, u = r - (-t / 2 + n);
                        l.default.cellScale = u / s, l.default.setCellL(l.default.cellScale)
                    } else {
                        var h = c - -t / 2, d = c - -640;
                        l.default.bottleScale = h / d
                    }
                    l.default.bottleScale *= .8
                }, t.prototype.showTip = function () {
                    var e = s.default.getPrefabByName("tipFinger");
                    this.tipFinger = cc.instantiate(e), this.tipFinger.setParent(this.node);
                    var t = this.getCellByCellPos([2, 2]).position;
                    this.tipFinger.setPosition(t);
                    for (var o = 0; o < this.rowCount; o++) for (var n = 0; n < this.colCount; n++) {
                        var a = this.allCell[o][n];
                        if (2 != o || 2 != n) {
                            var i = a.item;
                            i && (i.getComponent("Item").isOperabel = !1)
                        }
                    }
                }, t.prototype.createCellMap = function () {
                    var e = this.gameLayer.getChildByName("Cell"), t = this.colCount, o = this.rowCount, n = cc.winSize,
                        a = n.width, i = n.height, r = l.default.cellScale, c = 1 * r, u = l.default.cellL, h = 1.5 * u - c,
                        d = -a / 2 + (a - 2 * u * t - (-.5 * u - c) * (t - 1)) / 2 + u, p = l.default.top,
                        f = i / 2 - p - u;
                    i > 1280 && (f = 640 - p - u);
                    var g = Math.cos(Math.PI / 180 * 30) * u * 2, m = this.gameLayer.getChildByName("CellBg");
                    m.scale = r - .05, m.y = f + 3 * g / 2 - 15 * r - .05 * g;
                    for (var y = g / 2, v = 1, S = [], C = Math.floor(t / 2), _ = -1 * r, w = 0; w < o; w++) {
                        var M = f - (g + _) * w;
                        S[w] = [], v = 1;
                        for (var b = 0; b < t; b++) {
                            var P = !0;
                            if (o - w <= C) {
                                for (var B = C - (o - w) + 1, N = 0; N < B; N++) b == N && (P = !1);
                                for (N = t - B; N < t; N++) b == N && (P = !1)
                            }
                            var L = d + h * b, T = cc.v2(L, M), O = s.default.getPrefabByName("Cell"),
                                G = cc.instantiate(O);
                            G.scale = r, G.active = P, G.parent = e, G.setPosition(T), this.allCellSpriteNode.push(G);
                            var I = {position: T, isShow: P, cellPos: [w, b], item: null};
                            S[w].push(I), b == Math.floor(t / 2) && (v = -1), M += y * v
                        }
                    }
                    this.allCell = S
                }, t.prototype.createBottlePagoda = function () {
                    var e, t = cc.winSize, o = t.width, n = t.height,
                        a = o / 2 - (this.currentBottle.width * l.default.bottleScale + 50) / 2,
                        i = this.currentBottle.width, c = this.currentBottle.height + 20, s = (a - 20) / (5 * i + 12);
                    l.default.targetBottleScale = s;
                    for (var u = l.default.targetBottleScale, h = i * u, d = c * u, p = (a - (5 * h + 12)) / 2, f = -o / 2 + p + h / 2, g = this.floor.y + this.floor.height / 2 + d / 2, m = 5, y = g, v = [], S = [], C = (n / 2 - 30 - g) / d, _ = C, w = 0; _ > 0;) {
                        S[w] = [];
                        for (var M = 0; M < m; M++) {
                            var b = f + (h + 3) * M, P = cc.v2(b, y);
                            v.push(P), S[w].push(P)
                        }
                        y += d, _ -= 1, w += 1
                    }
                    f = o / 2 - p - h / 2, y = g, m = 5;
                    for (var B = C, N = [], L = 0; B > 0;) {
                        for (N[L] = [], M = 0; M < m; M++) b = f - (h + 3) * M, P = cc.v2(b, y), v.push(P), N[L].push(P);
                        y += d, B -= 1, L += 1
                    }
                    for (M = 0; M < C; M++) {
                        for (var T = S[M], O = N[M], G = [], I = 4; I >= 0; I--) G.push(O[I]);
                        O = G, (e = this.bottlePagoda).push.apply(e, r(T, O))
                    }
                }, t.prototype.createFloor = function () {
                    var e = s.default.getPrefabByName("Floor"), t = cc.instantiate(e);
                    t.width = cc.winSize.width;
                    var o = this.gameLayer.getChildByName("Floor");
                    t.setParent(o), t.y = -cc.winSize.height / 2 + t.height / 2, this.floor = t
                }, t.prototype.createBottle = function () {
                    var e = this.gameLayer.getChildByName("Floor").getChildByName("Floor"),
                        t = this.gameLayer.getChildByName("Bottle"), o = s.default.getPrefabByName("Bottle"),
                        n = cc.instantiate(o);
                    n.setParent(t);
                    var a = l.default.bottleScale;
                    n.scale = a, n.y = e.y + e.height / 2 + n.height * a / 2 - 3, this.currentBottle = n
                }, t.prototype.createInitItem = function () {
                    this.initItemLevel.length = 24;
                    for (var e = 0; e < 24; e++) 15 == e || 19 == e || 20 == e || 22 == e || 23 == e ? this.initItemLevel[e] = -1 : this.isNeedTip ? this.initItemLevel[e] = 1 : this.initItemLevel[e] = u.default.Random.getRandom(1, 2);
                    this.judgeCreateNew()
                }, t.prototype.judgeCreateNew = function () {
                    for (var e = this, t = l.default.moveDownTime, o = 0, n = function (n) {
                        for (var i = 0, r = 0; r < a.rowCount; r++) {
                            var c = a.allCell[r][n], s = c.item;
                            c.isShow && null == s && (i += 1)
                        }
                        var u = a.allCell[0][n].position.y + l.default.cellSize.y * l.default.cellScale;
                        if (i > 0) for (var h = function (o) {
                            var r = i - 1 - o, c = a.allCell[r][n], s = c.position, l = (i - o) * t;
                            a.scheduleOnce(function () {
                                var t = void 0;
                                e.initItemLevel.length > 0 && (t = e.initItemLevel.shift());
                                var o = t;
                                if (null == t) {
                                    o = e.getCreateLevel();
                                    for (var n = !1, a = 0; a < e.rowCount; a++) {
                                        for (var i = 0; i < e.colCount; i++) {
                                            var r = e.allCell[a][i].item;
                                            if (r && -1 == r.getComponent("Item").itemLevel) {
                                                n = !0;
                                                break
                                            }
                                        }
                                        if (n) break
                                    }
                                    n || (o = Math.random() > .7 ? -1 : o)
                                }
                                var h = e.createItem(c, o);
                                h.y = u, cc.tween(h).to(l, {y: s.y - 25}).to(.1, {y: s.y}).start()
                            }, t * o)
                        }, d = 0; d < i; d++) h(d);
                        var p = i * t;
                        p > o && (o = p)
                    }, a = this, i = 0; i < this.colCount; i++) n(i);
                    this.scheduleOnce(function () {
                        if (e.judgeDefeat()) {
                            e.gameLayer.getChildByName("CellBg").active = !1;
                            for (var t = 0; t < e.allCellSpriteNode.length; t++) {
                                var o = e.allCellSpriteNode[t];
                                cc.tween(o.getChildByName("SpriteNode")).repeat(3, cc.tween().to(.3, {
                                    color: cc.color(255, 0, 0),
                                    opacity: 123
                                }, {easing: cc.easing.sineIn}).to(.2, {
                                    color: cc.color(255, 255, 255),
                                    opacity: 255
                                }, {easing: cc.easing.sineOut})).start()
                            }
                            e.scheduleOnce(function () {
                                e.defeat()
                            }, 1.6)
                        } else e.isOperable = !0, e.isNeedTip && e.showTip()
                    }, o)
                }, t.prototype.getCreateLevel = function () {
                    var e, t = u.default.Constants.currentScore;
                    e = t < 3e3 ? [.01, .5, .5, 0, 0, 0, 0] : t < 6e3 ? [.02, .3, .4, .3, 0, 0, 0] : t < 12e3 ? [.03, .4, .4, .15, .05, 0, 0] : t < 15e3 ? [.04, .35, .3, .25, .05, .05, 0] : t < 17e3 ? [.05, .35, .25, .2, .15, .05, 0] : t < 2e4 ? [.06, .2, .35, .3, .1, .05, 0] : [.07, .3, .32, .25, .1, .03, 0];
                    for (var o = Math.random(), n = -1e4, a = 0, i = 0; i < e.length; i++) if (o <= (a += e[i])) {
                        n = i;
                        break
                    }
                    var r = n;
                    return 0 == r && (r = -1), r
                }, t.prototype.createItem = function (e, t) {
                    var o = this.gameLayer.getChildByName("Item"), n = s.default.getPrefabByName("Item"),
                        a = cc.instantiate(n);
                    return a.setParent(o), a.scale = .9 * l.default.cellScale, null != e && this.setConfigToItem(a, e, t), a
                }, t.prototype.setConfigToItem = function (e, t, o) {
                    e.getComponent("Item").initByCellConfig(t, o)
                }, t.prototype.honeyFall = function () {
                    var e = this;
                    if (!this.judgeLastCellIsHoney()) {
                        for (var t = 0, o = this.rowCount - 2; o >= 0; o--) for (var n = 0; n < this.colCount; n++) {
                            var a = this.allCell[o][n], i = a.item;
                            if (a.isShow && i && -1 == i.getComponent("Item").itemLevel) {
                                var r = this.getLowestCellRoad(a), c = this.honeyMove(a, r);
                                c > t && (t = c)
                            }
                        }
                        this.scheduleOnce(function () {
                            cc.log("\u68c0\u6d4b"), 0 == t ? e.judgeBePressed() || e.judgeFall() : e.honeyFall()
                        }, t)
                    }
                }, t.prototype.judgeLastCellIsHoney = function () {
                    var e = this, t = this.rowCount - 1, o = Math.floor(this.colCount / 2), n = this.allCell[t][o],
                        a = n.item;
                    if (a && -1 == a.getComponent("Item").itemLevel) {
                        n.item = null;
                        var i = 0;
                        u.default.AudioManager.playSound("sounds/fill", !1, .3), a.getChildByName("Fill").getComponent(cc.Animation).play().speed = 2.5, cc.log("\u6ef4\u5165\u871c\u7f50\u4e2d"), this.currentBottle.getComponent("Bottle").fill() || (i = l.default.fillTime, this.scheduleOnce(function () {
                            e.changeBottle(!0)
                        }, i));
                        var r = a.getChildByName("SpriteNode").getComponent(cc.Sprite).node;
                        r.setAnchorPoint(.5, 0), r.y = -118 * l.default.cellScale / 2;
                        var c = r.getComponent(cc.Animation).play().duration;
                        return this.scheduleOnce(function () {
                            a.active = !1, e.showAddScore(a.getPosition(), 200), e.scheduleOnce(function () {
                                a.destroy(), e.honeyFall()
                            }, 2 * i)
                        }, c), !0
                    }
                    return !1
                }, t.prototype.judgeBePressed = function () {
                    var e = this, t = this.rowCount - 1, o = Math.floor(this.colCount / 2), n = this.allCell[t][o],
                        a = n.item, i = n.cellPos, r = i[0], c = i[1], s = !0;
                    if (a && (-1 != a.getComponent("Item").itemLevel && (s = !1), !s)) {
                        for (var l = !0, u = [[r - 1, c - 1], [r - 1, c], [r - 1, c + 1]], d = 0; d < u.length; d++) {
                            var p = u[d], f = this.getCellByCellPos(p).item;
                            if (!f) {
                                l = !1;
                                break
                            }
                            if (-1 != f.getComponent("Item").itemLevel) {
                                l = !1;
                                break
                            }
                        }
                        if (l) return cc.tween(a).by(.5, {scale: -.3}).call(function () {
                            h.default.beBombedParticle(a, e.gameLayer), n.item = null, e.honeyFall(), a.destroy()
                        }).start(), !0
                    }
                    return !1
                }, t.prototype.changeBottle = function (e) {
                    var t = this, o = l.default.fillTime, n = this.currentBottle.getChildByName("Lid"), a = n.getPosition();
                    if (n.y = cc.winSize.height / 2 + 20, n.active = !0, cc.tween(n).to(.1, {y: a.y}).call(function () {
                        u.default.AudioManager.playSound("sounds/lid")
                    }).start(), cc.tween(this.currentBottle).delay(o / 2).to(o / 2, {scale: l.default.targetBottleScale}).start(), this.bottlePagoda.length > 1) {
                        this.currentBottleIndex += 1, this.allBottle.push(this.currentBottle);
                        var i = this.bottlePagoda.shift();
                        cc.tween(this.currentBottle).delay(o / 2).to(o, {position: i}).call(function () {
                            var o = t.currentBottle;
                            o.setParent(t.gameLayer.getChildByName("DisplayBottle"));
                            for (var n = 0; n < o.children.length; n++) {
                                var a = o.children[n];
                                "Index" != a.name && (a.opacity *= .8)
                            }
                            var i = o.getComponentInChildren(cc.Label);
                            i.node.parent.active = !0, i.string = "" + t.currentBottleIndex, t.currentBottle = null, e && t.createBottle()
                        }).start()
                    } else this.currentBottle.destroy(), this.currentBottle = null, this.createBottle();
                    return 3 * o / 2
                }, t.prototype.honeyMove = function (e, t) {
                    var o = l.default.moveDownTime, n = 0, a = e.item;
                    e.item = null;
                    var i = a.getComponent("Item"), r = t[0];
                    if (r.item = a, i.cellPos = r.cellPos, t.length > 1) {
                        n += .12;
                        for (var c = cc.tween(a), s = t.length - 2; s >= 1; s--) {
                            var u = t[s].position;
                            c.to(o, {position: u}), n += o
                        }
                        var h = t[0].position, d = t[1].position, p = h.sub(d).normalize();
                        c.to(o, {position: h.add(p.mul(30)), scale: .9 * l.default.cellScale - .2}), c.to(.1, {
                            position: h,
                            scale: .9 * l.default.cellScale
                        }), c.to(.05, {
                            position: h.add(p.mul(15)),
                            scale: .9 * l.default.cellScale - .1
                        }), c.to(.05, {position: h, scale: .9 * l.default.cellScale}), c.start(), n += .2
                    }
                    return n
                }, t.prototype.getLowestCellRoad = function (e) {
                    var t = [];
                    t.push([e]), this.judgeEmpty(t);
                    for (var o = -1, n = t[t.length - 1], a = 0; a < n.length; a++) {
                        var i = n[a].cellPos, r = i[0];
                        i[1], r > o && (o = r)
                    }
                    var c = [];
                    for (a = 0; a < n.length; a++) {
                        var s = n[a], l = s.cellPos;
                        r = l[0], l[1], r == o && c.push(s)
                    }
                    var u = [];
                    for (a = 0; a < c.length; a++) {
                        var h = [], d = c[a];
                        h.push(d);
                        for (var p = d.preCell; p;) h.push(p), p = p.preCell;
                        u.push(h)
                    }
                    for (a = 0; a < this.rowCount; a++) for (var f = 0; f < this.colCount; f++) this.allCell[a][f].preCell = null;
                    var g = 1e4, m = null;
                    for (a = 0; a < u.length; a++) {
                        var y = u[a], v = y.length;
                        v < g && (g = v, m = y)
                    }
                    return m
                }, t.prototype.judgeEmpty = function (e) {
                    for (var t = e[e.length - 1], o = [], n = 0; n < t.length; n++) {
                        var a = t[n], i = a.cellPos, r = i[0], c = i[1], s = Math.floor(this.colCount / 2) + 1,
                            l = [r, c - 1], u = [r + 1, c], h = [r + 1, c + 1];
                        c == s - 1 && (l = [r, c - 1], u = [r + 1, c], h = [r, c + 1]), c > s - 1 && (l = [r + 1, c - 1], u = [r + 1, c], h = [r, c + 1]);
                        for (var d = [l, u, h], p = 0; p < d.length; p++) {
                            var f = d[p], g = this.getCellByCellPos(f);
                            if (null != g && g.isShow && !g.item) {
                                var m = this.existEmpty(e, g);
                                -1 != o.indexOf(g) || m || (g.preCell = a, o.push(g))
                            }
                        }
                    }
                    o.length > 0 && (e.push(o), this.judgeEmpty(e))
                }, t.prototype.existEmpty = function (e, t) {
                    for (var o = !1, n = 0; n < e.length; n++) -1 != e[n].indexOf(t) && (o = !0);
                    return o
                }, t.prototype.getSame = function (e) {
                    var t = this;
                    this.sameItems = [];
                    var o = [];
                    o.push(e), this.sameItems.push(o), this.judgeSame(this.sameItems);
                    for (var n = 0, a = 0; a < this.sameItems.length; a++) n += this.sameItems[a].length;
                    if (n >= 3) {
                        this.isOperable = !1;
                        var i = l.default.moveDownTime, r = this.sameItems.length, c = e.itemLevel - 5 + 10;
                        for (u.default.AudioManager.playSound("sounds/sou"), a = r - 1; a > 0; a--) for (var d = function (e) {
                            var o = p.sameItems[a][e], n = o.node;
                            cc.tween(n).delay((r - 1 - a) * i).call(function () {
                                t.addScore(c)
                            }).to(i, {position: o.prePos}).call(function () {
                                t.cleanItem(o)
                            }).start()
                        }, p = this, f = 0; f < this.sameItems[a].length; f++) d(f);
                        var g = i * r;
                        return this.scheduleOnce(function () {
                            t.addScore(c);
                            var e = t.sameItems[0][0], o = e.node.getChildByName("SpriteNode");
                            cc.tween(o).to(.075, {scale: 1.5}).to(.075, {scaleX: .6, scaleY: 1.4}).to(.075, {
                                scaleX: 1.2,
                                scaleY: .8
                            }).to(.075, {scale: 1}).start();
                            var n = e.levelUp(), a = 0, i = 0, r = 0;
                            if (n < 5 ? u.default.AudioManager.playSound("sounds/maxMix") : u.default.AudioManager.playSound("sounds/peng"), 6 == n) {
                                var l = t.gameLayer.getChildByName("Bomb");
                                cc.log("\u6ee1\u7ea7\u4e86\uff0c\u7206\u70b8");
                                var d = e.cellPos;
                                t.getCellByCellPos(d).item = null, r = .3, e.node.zIndex = 1, cc.tween(e.node).to(r - .1, {position: cc.v2(0, 300)}).start();
                                var p = (i = 1) / 10 / 10;
                                i *= 1, i += .15, t.scheduleOnce(function () {
                                    var o = e.node;
                                    o.position, cc.tween(o).repeat(10, cc.tween().by(1 * p, {position: cc.v2(4, 6)}).by(1 * p, {position: cc.v2(2, -4)}).by(1 * p, {position: cc.v2(-1, 3)}).by(1 * p, {position: cc.v2(-2, -1)}).by(1 * p, {position: cc.v2(4, -4)}).by(1 * p, {position: cc.v2(-4, 3)}).by(1 * p, {position: cc.v2(-4, -3)}).by(1 * p, {position: cc.v2(3, 4)}).by(1 * p, {position: cc.v2(-4, -3)}).by(1 * p, {position: cc.v2(2, -1)})).start(), cc.tween(o).to(i, {
                                        scale: 2,
                                        opacity: 123
                                    }).delay(.15).call(function () {
                                        o.destroy()
                                    }).start(), t.scheduleOnce(function () {
                                        t.showAddScore(e.node.getPosition(), 200), a = h.default.Bomb(l, e.node), u.default.AudioManager.playSound("sounds/bomb"), h.default.beBombedParticle(o, t.gameLayer);
                                        var n = t.gameLayer.getChildByName("HoneyFlow");
                                        n.active = !0, n.scale = 0, cc.tween(n).to(a / 2, {scale: 1}).delay(.1).call(function () {
                                            var e = n.getComponent(cc.Animation).play().duration;
                                            t.scheduleOnce(function () {
                                                var e = t.gameLayer.getChildByName("HoneyFlow");
                                                cc.tween(e).to(.3, {opacity: 0}).call(function () {
                                                    e.scale = 0, e.active = !1, e.getComponent(cc.Sprite).spriteFrame = s.default.getSpriteFrame("1"), e.opacity = 255
                                                }).start()
                                            }, e)
                                        }).start(), cc.tween(t.gameLayer).to(.03, {x: -20}).to(.06, {x: 20}).to(.06, {x: -20}).to(.03, {x: 0}).start();
                                        var i = t.showQueen(e);
                                        i > a && (a = i), a += i
                                    }, i)
                                }, r)
                            }
                            var f = 0;
                            6 != n && (f = h.default.mixParticle(e.node, t.gameLayer.getChildByName("Mix")), t.scheduleOnce(function () {
                                t.scheduleOnce(function () {
                                    var o = !1;
                                    6 != n && (o = t.getSame(e)), o || t.honeyFall()
                                }, a + f)
                            }, i + .05 + r))
                        }, g), !0
                    }
                    return !1
                }, t.prototype.judgeSame = function (e) {
                    for (var t = e[e.length - 1], o = [], n = 0; n < t.length; n++) {
                        var a = t[n];
                        if (a.node) {
                            a.node;
                            var i = a.itemLevel, r = a.cellPos, c = r[0], s = r[1], l = this.allCell[c][s],
                                u = Math.floor(this.colCount / 2) + 1, h = [c - 1, s - 1], d = [c - 1, s], p = [c, s + 1],
                                f = [c, s - 1], g = [c + 1, s], m = [c + 1, s + 1];
                            s == u - 1 && (h = [c - 1, s - 1], d = [c - 1, s], p = [c - 1, s + 1], f = [c, s - 1], g = [c + 1, s], m = [c, s + 1]), s > u - 1 && (h = [c, s - 1], d = [c - 1, s], p = [c - 1, s + 1], f = [c + 1, s - 1], g = [c + 1, s], m = [c, s + 1]);
                            for (var y = [h, d, p, f, g, m], v = 0; v < y.length; v++) {
                                var S = y[v], C = this.getCellByCellPos(S);
                                if (null != C) {
                                    var _ = C.item;
                                    if (_) {
                                        var w = _.getComponent("Item"), M = w.itemLevel, b = this.judgeExist(w);
                                        -1 != o.indexOf(w) || b || M != i || (w.prePos = l.position, o.push(w))
                                    }
                                }
                            }
                        }
                    }
                    o.length > 0 && (e.push(o), this.judgeSame(e))
                }, t.prototype.judgeExist = function (e) {
                    for (var t = 0; t < this.sameItems.length; t++) if (-1 != this.sameItems[t].indexOf(e)) return !0;
                    return !1
                }, t.prototype.judgeFall = function () {
                    for (var e = l.default.moveDownTime, t = 0; t < this.colCount; t++) for (var o = this.rowCount - 1; o >= 0; o--) {
                        var n = this.allCell[o][t], a = n.cellPos, i = n.item;
                        if (n.isShow && null == i) for (var r = a[0], c = (a[1], r - 1); c >= 0; c--) {
                            var s = this.allCell[c][t], u = (s.cellPos, s.item);
                            if (s.isShow && null != u) {
                                var h = Math.abs(c - o), d = e * h;
                                return this.itemMove(s, n, d), void this.judgeFall()
                            }
                        }
                    }
                    this.judgeCreateNew()
                }, t.prototype.itemMove = function (e, t, o) {
                    var n = e.item;
                    e.item = null;
                    var a = t.position, i = t.cellPos;
                    n.getComponent("Item").cellPos = i, t.item = n, cc.tween(n).to(o, {
                        x: a.x,
                        y: a.y - 25
                    }).to(.05, {y: a.y}).start()
                }, t.prototype.getCellByCellPos = function (e) {
                    var t = e[0], o = e[1];
                    return t >= 0 && t < this.rowCount && o >= 0 && o < this.colCount ? this.allCell[t][o] : null
                }, t.prototype.cleanItem = function (e) {
                    var t = e.node;
                    this.getCellByCellPos(e.cellPos).item = null, t.destroy()
                }, t.prototype.showBee = function (e) {
                    for (var t = [], o = e.node.getPosition(), n = this.gameLayer.getChildByName("Bee"), a = 0; a < 4; a++) {
                        u.default.PoolManager.setPool("Bee");
                        var i = u.default.PoolManager.getNodeByName("Bee");
                        i.getChildByName("Honey").active = !0, i.scale = .3, i.setPosition(o);
                        var r = 90 * a + 60 * Math.random() - 30,
                            c = o.add(s.default.getPosByAngle(30 * Math.random() + 70, r));
                        i.setParent(n), cc.tween(i).to(.2, {scale: 1}, {easing: cc.easing.quadIn}).start(), cc.tween(i).to(.2, {position: c}, {easing: cc.easing.quadIn}).start(), t.push(i)
                    }
                    var h = 0, d = l.default.beeMoveV, p = [[4, 1], [4, 2], [4, 3], [5, 2]], f = function (e) {
                        var o = p[e], n = g.getCellByCellPos(o), a = n.item;
                        if (a) {
                            var i = !1;
                            if (-1 == a.getComponent("Item").itemLevel) for (var r = g.rowCount - 3; r >= 0; r--) {
                                for (var c = 0; c < g.colCount; c++) {
                                    var s = g.allCell[r][c], f = s.item;
                                    if (!f) {
                                        n = s, i = !0;
                                        break
                                    }
                                    if (-1 != f.getComponent("Item").itemLevel) {
                                        n = s, i = !0;
                                        break
                                    }
                                }
                                if (i) break
                            }
                        }
                        var m = n.position, y = t[e], v = m.sub(y.getPosition()).mag() / d;
                        v > h && (h = v);
                        var S = 1;
                        m.x > y.x && (S = -1);
                        var C = n.item, _ = g.createItem(n, -1);
                        _.scale = .5, _.active = !1, cc.tween(y).delay(v / 2 * e).call(function () {
                            u.default.AudioManager.playSound("sounds/bee"), y.scaleX *= S
                        }).to(v, {position: m}).call(function () {
                            C && C.destroy(), _.active = !0, cc.tween(_).to(.3, {scale: .9 * l.default.cellScale}).start(), y.getChildByName("Honey").active = !1
                        }).to(.7, {x: -S * (cc.winSize.width / 2 + 20)}).call(function () {
                            u.default.PoolManager.setNodeToPool(y)
                        }).start()
                    }, g = this;
                    for (a = 0; a < t.length; a++) f(a);
                    return .2 + h / 2 * 3 + h + .7
                }, t.prototype.showQueen = function (e) {
                    var t = this, o = e.node, n = s.default.getPrefabByName("QueenBee"), a = cc.instantiate(n),
                        i = o.getPosition();
                    s.default.getPosByAngle(20 * Math.random() + 10, 360 * Math.random()), a.parent = this.gameLayer, a.setPosition(i), a.scale = .1;
                    var r = 6.2;
                    return cc.tween(a).to(.2, {scale: 1}, {easing: cc.easing.quadOut}).start(), this.scheduleOnce(function () {
                        cc.tween(a).to(.5, {x: -cc.winSize.width / 2 - 100}).start(), t.scheduleOnce(function () {
                            for (var e = [], o = s.default.getPrefabByName("Bee"), n = 0; n < 4; n++) {
                                e[n] = [];
                                for (var i = 0; i < 20; i++) {
                                    var c = a.x - 250, l = a.y, u = c + 250 * Math.random() - 125,
                                        h = l + 200 * Math.random() - 100, d = cc.instantiate(o);
                                    d.parent = t.gameLayer, d.setPosition(u, h), d.scaleX *= -1, e[n].push(d);
                                    var p = 100 - a.x;
                                    cc.tween(d).by(.5, {x: p}).start()
                                }
                            }
                            a.scaleX *= -1, cc.tween(a).to(.5, {x: 100}).start(), t.scheduleOnce(function () {
                                var o = t.placeHoney(e);
                                r += o, t.scheduleOnce(function () {
                                    cc.log("\u653e\u7f6e\u597d\u4e86"), t.honeyFall(), cc.tween(a).to(1, {position: cc.v2(cc.winSize.width / 2 + 100, 0)}).call(function () {
                                        a.destroy()
                                    }).start()
                                }, o)
                            }, .5)
                        }, .5)
                    }, .2), r
                }, t.prototype.placeHoney = function (e) {
                    for (var t = 0, o = l.default.beeMoveV, n = [[4, 1], [4, 2], [4, 3], [5, 2], [4, 1], [4, 2], [4, 3], [5, 2]], a = e.length, i = function (a) {
                        var i = n[a], c = r.getCellByCellPos(i), s = e[a], h = c.item;
                        if (h) {
                            var d = !1;
                            if (-1 == h.getComponent("Item").itemLevel) for (var p = r.rowCount - 3; p >= 0; p--) {
                                for (var f = 0; f < r.colCount; f++) {
                                    var g = r.allCell[p][f], m = g.item;
                                    if (!m) {
                                        c = g, d = !0;
                                        break
                                    }
                                    if (-1 != m.getComponent("Item").itemLevel) {
                                        c = g, d = !0;
                                        break
                                    }
                                }
                                if (d) break
                            }
                        }
                        var y = c.position, v = s.length, S = c.item, C = r.createItem(c, -1);
                        C.scale = 0, C.active = !1;
                        var _ = .9 * l.default.cellScale / v, w = function (e) {
                            var n = s.shift(), i = y.sub(n.getPosition()).mag() / o;
                            i > t && (t = i);
                            var r = 1;
                            y.x > n.x && (r = -1), cc.tween(n).delay(i / 2 * a + .1 * e).call(function () {
                                u.default.AudioManager.playSound("sounds/bee"), n.scaleX *= r
                            }).to(i, {position: y}).call(function () {
                                S && (S.destroy(), S = null), C.active = !0, C.scale += _, n.getChildByName("Honey").active = !1, n.scaleX = -Math.abs(n.scaleX)
                            }).to((cc.winSize.width / 2 + 100 - n.x) / o, {x: cc.winSize.width / 2 + 100}).call(function () {
                                n.destroy()
                            }).start()
                        };
                        for (f = 0; f < v; f++) w(f)
                    }, r = this, c = 0; c < a; c++) i(c);
                    return t + t / 2 * 16 + .1 * e.length
                }, t.prototype.judgeDefeat = function () {
                    for (var e = 0; e < this.rowCount; e++) for (var t = 0; t < this.colCount; t++) {
                        var o = this.allCell[e][t].item;
                        if (o) {
                            var n = o.getComponent("Item");
                            if (-1 != n.itemLevel && 6 != n.itemLevel) {
                                this.sameItems = [];
                                var a = [];
                                a.push(n), this.sameItems.push(a), this.judgeSame(this.sameItems);
                                for (var i = 0, r = 0; r < this.sameItems.length; r++) i += this.sameItems[r].length;
                                if (i >= 3) return !1
                            }
                        }
                    }
                    return !0
                }, t.prototype.addScore = function (e) {
                    var t = this;
                    this.scoreNumLabel.node.parent.zIndex = 103, this.scoreNumLabel.string = String(u.default.Constants.currentScore), this.scoreNumLabel.node.active || (this.scoreNumLabel.node.active = !0), this.scoreNumLabel.node.parent.zIndex = 103, cc.tween(this.scoreNumLabel.node).to(.1, {scale: 1.5}, {easing: "sineIn"}).call(function () {
                        u.default.Constants.currentScore += e, t.scoreNumLabel.string = String(u.default.Constants.currentScore)
                    }).to(.1, {scale: 1}, {easing: "sineOut"}).start()
                }, t.prototype.showAddScore = function (e, t) {
                    var o = this, n = this.scoreNumLabel.node.parent, a = s.default.convertToNodePos(n, this.node),
                        i = s.default.getPrefabByName("AddScore"), r = s.default.createNodeByPrefab(i, e, this.node);
                    r.getChildByName("Score").getComponent(cc.Label).string = String(t), cc.tween(r).by(.2, {
                        y: 150,
                        scale: .4
                    }, {easing: "sineOut"}).delay(.1).to(.35, {position: a}, {easing: "sineOut"}).call(function () {
                        o.addScore(t)
                    }).to(.1, {opacity: 0}).removeSelf().start()
                }, t.prototype.defeat = function () {
                    this.playNum += 1, u.default.KVStorage.saveStr("ShouJiFengMi_playNum_3", "" + this.playNum);
                    var e, t = u.default.Constants.currentScore;
                    t > (e = u.default.BestScore.getBestScore()) && u.default.BestScore.setBestScore(t), u.default.Constants.bestHistory = e, this.showBottle(function () {
                        var e = cc.instantiate(this.defeatPre);
                        e.parent = this.node, e.getComponent("view_showDefeat").defeat()
                    }.bind(this))
                }, t.prototype.showBottle = function (e) {
                    var t = this, o = l.default.fillTime, n = this.currentBottle, a = !0;
                    0 == n.getComponent("Bottle").currentFillLevle && this.allBottle.length > 0 && (a = !1, n.active = !1), a && this.changeBottle(!1), cc.tween(this.gameLayer).delay(2 * o).call(function () {
                        t.gameLayer.getChildByName("DisplayBottle").setParent(t.node), t.gameLayer.getChildByName("Floor").setParent(t.node)
                    }).to(.3, {x: -cc.winSize.width}).call(function () {
                        var o = cc.winSize, n = o.width, a = o.height, i = t.allBottle.length,
                            r = (cc.winSize.height, 2 * cc.winSize.width / 3), c = Math.ceil(Math.sqrt(i)),
                            s = Math.ceil(i / c), h = l.default.bottleSize, d = h.x, p = h.y, f = d * c, g = r / f;
                        g > 1 && (g = 1);
                        for (var m = d * g, y = p * g, v = -n / 2 + (n / 2 - f * g / 2) + m / 2, S = -a / 2 + (a / 2 - p * s * g / 2) + y / 2, C = [], _ = 0; _ < s; _++) for (var w = S + _ * (y + 10), M = 0; M < c; M++) {
                            var b = v + M * m;
                            C.push(cc.v2(b, w))
                        }
                        for (_ = 0; _ < i; _++) {
                            var P = t.allBottle[_];
                            cc.tween(P).delay(.1 * _).call(function () {
                                u.default.AudioManager.playSound("sounds/sou", !1, .2)
                            }).to(.1, {position: C[_], scale: g}).start()
                        }
                        t.scheduleOnce(function () {
                            e()
                        }, .1 * i + 1.5)
                    }).start()
                }, t.prototype.CollisionFun = function (e) {
                    var t = e, o = cc.director.getPhysicsManager();
                    o.enabled = t, o.gravity = cc.v2(0, -3e3), cc.director.getCollisionManager().enabled = t, t && (cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit | cc.PhysicsManager.DrawBits.e_jointBit | cc.PhysicsManager.DrawBits.e_shapeBit, cc.director.getPhysicsManager().debugDrawFlags = 0, cc.director.getCollisionManager().enabledDebugDraw = !1)
                }, i([f(cc.Prefab)], t.prototype, "maskPre", void 0), i([f(cc.Prefab)], t.prototype, "defeatPre", void 0), i([f(cc.Label)], t.prototype, "scoreNumLabel", void 0), i([p], t)
            }(cc.Component);
        o.default = g, cc._RF.pop()
    }, {
        "../../commonJs/GameConfig": "GameConfig",
        "../../commonJs/utils": "utils",
        "../GS": "GS",
        "../commons/DataManager": "DataManager",
        "./Particle": "Particle"
    }],
    RotatePos: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "b9afbJcFElJ5KruJbK9Qfq9", "RotatePos");
        var n, a = this && this.__extends || (n = function (e, t) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            })(e, t)
        }, function (e, t) {
            function o() {
                this.constructor = e
            }

            n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        }), i = this && this.__decorate || function (e, t, o, n) {
            var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
            return i > 3 && r && Object.defineProperty(t, o, r), r
        };
        Object.defineProperty(o, "__esModule", {value: !0});
        var r = cc._decorator, c = r.ccclass, s = r.property, l = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.rotateAngle = 90, t
            }

            return a(t, e), t.prototype.start = function () {
                for (var e = this.node.children, t = 0; t < e.length; t++) {
                    var o = e[t], n = o.getPosition(), a = n.sub(cc.v2(0, 0)).mag(),
                        i = 180 * Math.atan2(n.y, n.x) / Math.PI, r = Utils.getPosByAngle(a, i + this.rotateAngle);
                    o.position = r
                }
            }, i([s], t.prototype, "rotateAngle", void 0), i([c], t)
        }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    SetSizeByNode: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "093339TFqNOOKoBiHWC4mfa", "SetSizeByNode");
        var n, a = this && this.__extends || (n = function (e, t) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            })(e, t)
        }, function (e, t) {
            function o() {
                this.constructor = e
            }

            n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        }), i = this && this.__decorate || function (e, t, o, n) {
            var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
            return i > 3 && r && Object.defineProperty(t, o, r), r
        };
        Object.defineProperty(o, "__esModule", {value: !0});
        var r = cc._decorator, c = r.ccclass, s = r.property, l = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.targetNode = null, t
            }

            return a(t, e), t.prototype.onLoad = function () {
                this.node.width = this.targetNode.width, this.node.height = this.targetNode.height
            }, t.prototype.start = function () {
            }, i([s(cc.Node)], t.prototype, "targetNode", void 0), i([c], t)
        }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    SpriteManager: [function (e, t) {
        "use strict";
        cc._RF.push(t, "7ff55ALr6dL9Iih0jskUVHo", "SpriteManager");
        var o = a(e("../MainManage")), n = a(e("../MyScript/GS"));

        function a(e) {
            return e && e.__esModule ? e : {default: e}
        }

        cc.Class({
            extends: cc.Component,
            properties: {atlas: [cc.SpriteAtlas], allSpriteFrame: [cc.SpriteFrame]},
            onLoad: function () {
                this.initData()
            },
            initData: function () {
                this.atlasMap = new Map, this.spriteFrameMap = new Map, this.setAtlasMap(), this.setSpriteFrameMap(), n.default.Constants.atlasMap = this.atlasMap, n.default.Constants.spriteFrameMap = this.spriteFrameMap
            },
            setAtlasMap: function () {
                for (var e = 0; e < this.atlas.length; e++) {
                    var t = this.atlas[e].name.split(".", 1);
                    this.atlasMap.set(t[0], this.atlas[e])
                }
            },
            setSpriteFrameMap: function () {
                for (var e = 0; e < this.allSpriteFrame.length; e++) {
                    var t = this.allSpriteFrame[e].name.split(".", 1);
                    this.spriteFrameMap.set(t[0], this.allSpriteFrame[e])
                }
            },
            start: function () {
            },
            GetSpriteFrameFromAtlas: function (e, t) {
                return this.atlasMap.has(e) ? this.atlasMap.get(e).getSpriteFrame(t) : null
            },
            GetSpriteFrame: function (e) {
                return this.spriteFrameMap.has(e) ? this.spriteFrameMap.get(e) : null
            },
            adaptLanguage: function (e, t) {
                var n = o.default.initLanguage();
                if (3 != n) {
                    var a = this.GetSpriteFrame(t + n);
                    e.spriteFrame = a
                } else if ("guan_" == t) e.node.active = !1; else {
                    var i = this.GetSpriteFrame(t + n);
                    e.spriteFrame = i
                }
            }
        }), cc._RF.pop()
    }, {"../MainManage": "MainManage", "../MyScript/GS": "GS"}],
    Widget: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "38c61vg5HlIEraq7uWonPKs", "Widget");
        var n, a = this && this.__extends || (n = function (e, t) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            })(e, t)
        }, function (e, t) {
            function o() {
                this.constructor = e
            }

            n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        }), i = this && this.__decorate || function (e, t, o, n) {
            var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
            return i > 3 && r && Object.defineProperty(t, o, r), r
        };
        Object.defineProperty(o, "__esModule", {value: !0});
        var r, c = cc._decorator, s = c.ccclass, l = c.property;
        (function (e) {
            e[e.TOP = 0] = "TOP", e[e.BOTTOM = 1] = "BOTTOM", e[e.LEFT = 2] = "LEFT", e[e.RIGHT = 3] = "RIGHT"
        })(r || (r = {}));
        var u = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.targetNode = null, t.size = cc.v2(-1, -1), t.dir = r.TOP, t.offset = 0, t.targetPos = cc.v2(0, 0), t
            }

            return a(t, e), t.prototype.onLoad = function () {
                switch (this.initData(), this.dir) {
                    case r.TOP:
                        this.adaptTop();
                        break;
                    case r.BOTTOM:
                        this.adaptBottom();
                        break;
                    case r.LEFT:
                        this.adaptLeft();
                        break;
                    case r.RIGHT:
                        this.adaptRight()
                }
            }, t.prototype.initData = function () {
                this.targetPos = cc.v2(0, 0), this.targetWidth = cc.winSize.width, this.targetHeight = cc.winSize.height, this.targetNode && (this.targetPos = this.targetNode.getPosition(), this.targetWidth = this.targetNode.width, this.targetHeight = this.targetNode.height), -1 == this.size.x && (this.size = cc.v2(this.node.width, this.node.height))
            }, t.prototype.adaptTop = function () {
                var e = this.targetPos.y + this.targetHeight / 2 - this.offset - this.size.y / 2;
                this.targetNode && (e = this.convertPos(cc.v2(0, e)).y), this.node.y = e
            }, t.prototype.adaptBottom = function () {
                var e = this.targetPos.y - this.targetHeight / 2 + this.offset + this.size.y / 2;
                this.targetNode && (e = this.convertPos(cc.v2(0, e)).y), this.node.y = e
            }, t.prototype.adaptLeft = function () {
                var e = this.targetPos.x - this.targetWidth / 2 + this.offset + this.size.x / 2;
                this.targetNode && (e = this.convertPos(cc.v2(e, 0)).x), this.node.x = e
            }, t.prototype.adaptRight = function () {
                var e = this.targetPos.x + this.targetWidth / 2 - this.offset - this.size.x / 2;
                this.targetNode && (e = this.convertPos(cc.v2(e, 0)).x), this.node.x = e
            }, t.prototype.convertPos = function (e) {
                var t = this.targetNode.parent.convertToWorldSpaceAR(e);
                return this.node.parent.convertToNodeSpaceAR(t)
            }, t.prototype.start = function () {
            }, i([l(cc.Node)], t.prototype, "targetNode", void 0), i([l], t.prototype, "size", void 0), i([l({
                type: cc.Enum(r),
                displayName: "\u9002\u914d\u8fb9"
            })], t.prototype, "dir", void 0), i([l], t.prototype, "offset", void 0), i([s], t)
        }(cc.Component);
        o.default = u, cc._RF.pop()
    }, {}],
    animationCtr: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "b6e49LUtUZK86cvAIhsuPau", "animationCtr");
        var n, a = this && this.__extends || (n = function (e, t) {
            return (n = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            })(e, t)
        }, function (e, t) {
            function o() {
                this.constructor = e
            }

            n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
        }), i = this && this.__decorate || function (e, t, o, n) {
            var a, i = arguments.length, r = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, n); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (r = (i < 3 ? a(r) : i > 3 ? a(t, o, r) : a(t, o)) || r);
            return i > 3 && r && Object.defineProperty(t, o, r), r
        };
        Object.defineProperty(o, "__esModule", {value: !0});
        var r = cc._decorator, c = r.ccclass, s = (r.property, function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.animationList = [], t
            }

            return a(t, e), t.prototype.initDate = function (e) {
                this.anima = this.node.getComponent(dragonBones.ArmatureDisplay), this.anima.armatureName = e, this.armature = this.anima.armature(), this.animationList = this.armature.animation.animationNames
            }, t.prototype.playAnimation = function (e, t) {
                return void 0 === t && (t = 1), this.localAnimation = e, this.anima.timeScale = 1, this.anima.playAnimation(e, t), this.anima.armature().armatureData.animations[e]
            }, t.prototype.stopAnimate = function (e) {
                void 0 === e && (e = ""), this.localAnimation = "", "" == e ? this.armature.animation.stop() : this.armature.animation.stop(e)
            }, t.prototype.resumeAnimate = function () {
                this.anima.timeScale = 1
            }, t.prototype.setTimeScale = function (e) {
                this.anima.timeScale = e
            }, t.prototype.getTimeScale = function () {
                return this.anima.timeScale
            }, t.prototype.getAnimationNames = function () {
                return this.anima.armature().armatureData.animationNames
            }, t.prototype.getActionDuration = function (e) {
                return this.anima.armature().armatureData.animations[e].duration
            }, t.prototype.getArmature = function () {
                return this.armature
            }, t.prototype.getDisplay = function () {
                return this.anima
            }, t.prototype.frameEventRegist = function (e, t) {
                this.anima.on(dragonBones.EventObject.FRAME_EVENT, e, t)
            }, t.prototype.fadeIn = function (e, t, o, n, a, i) {
                return void 0 === n && (n = 1), void 0 === a && (a = "default"), void 0 === i && (i = null), this.localAnimation = e, null != i ? this.armature.animation.fadeIn(e, t, o, n, a, i) : this.armature.animation.fadeIn(e, t, o, n, a)
            }, t.prototype.have = function (e) {
                return -1 != this.animationList.indexOf(e)
            }, t.prototype.getPlayingAnimation = function () {
                return this.localAnimation
            }, i([c], t)
        }(cc.Component));
        o.default = s, cc._RF.pop()
    }, {}],
    gameOverJs: [function (e, t) {
        "use strict";
        cc._RF.push(t, "97b99QMpX9MBa7ZZ+qHxhWM", "gameOverJs");
        var o = e("GameUiTools"), n = e("GameConfig"), a = e("MainManage");
        cc.Class({
            extends: cc.Component,
            properties: {
                bgLayer: cc.Node,
                scoreBg: cc.Node,
                overScoreT: cc.Label,
                overInfoT: cc.Label,
                moreBtn: cc.Button,
                leftBtn: cc.Button,
                rightBtn: cc.Button,
                midGameText: cc.Label,
                leftBtnText: cc.Label,
                rightBtnText: cc.Label
            },
            onLoad: function () {
                this.bgLayer.color = cc.color(a.bgLayRgb), this.standardScore = n.standScore, this.game_max_score = 200, this.rigthBtnGameName = null, this.rightBtnGameUrl = null, this.UIPosChange(), this.addClickBtns()
            },
            UIPosChange: function () {
                this.overScoreT.string = n.gameScore, console.log("lang", a.langugeType);
                var e = null;
                e = 1 == a.langugeType ? this.getContentByScore(n.gameScore, a.gameNameText) : this.getContentByScore2(n.gameScore, a.gameNameText), console.log("nihao", a.endHttpShowInfo), null != a.endHttpShowInfo && "" != a.endHttpShowInfo && (cc.log("gototo"), e = a.endHttpShowInfo), this.overInfoT.string = e;
                var t = this.overInfoT.node.height;
                if (this.overInfoT.node.height = Math.ceil(e.length * this.overInfoT.fontSize / this.overInfoT.node.width) * t, document.title = e, this.moreBtn.node.y = this.scoreBg.y - this.overInfoT.node.height - this.scoreBg.height - 20, this.leftBtn.node.y = this.moreBtn.node.y - 130, this.rightBtn.node.y = this.moreBtn.node.y - 130, console.log("gameOver txtMoreText", a.txtMoreText), this.midGameText.string = a.txtMoreText, this.leftBtnText.string = a.txtAgainText, this.tempArr = this.gameFocus(), null != a.ranLinkUrl()) {
                    var o = a.ranLinkUrl(), i = a.ranLinkData.gameList[o].gameName;
                    this.rigthBtnGameName = i, this.rightBtnGameUrl = a.ranLinkData.gameList[o].gameUrl
                }
                null != this.rigthBtnGameName && "" != this.rigthBtnGameName ? this.rightBtnText.string = this.rigthBtnGameName : this.rightBtnText.string = this.tempArr[0]
            },
            gameFocus: function () {
                var e = [], t = null, o = null;
                return Math.random() <= .5 ? (t = a.gameEndName1, o = a.gameEndUrl1) : (t = a.gameEndName2, o = a.gameEndUrl2), e.push(t), e.push(o), e
            },
            addClickBtns: function () {
                var e = this;
                e.moreBtn.node.on(cc.Node.EventType.TOUCH_START, function () {
                }), e.moreBtn.node.on(cc.Node.EventType.TOUCH_END, function () {
                    console.log("MoreGame"), window.location.href = a.moreGameUrl
                }), e.leftBtn.node.on(cc.Node.EventType.TOUCH_START, function () {
                }), e.leftBtn.node.on(cc.Node.EventType.TOUCH_END, function () {
                    n.GAME_OVER_BOOL = !0, n.gameScore = 0, o.loadingScene("MainGameScene")
                }), e.rightBtn.node.on(cc.Node.EventType.TOUCH_START, function () {
                }), e.rightBtn.node.on(cc.Node.EventType.TOUCH_END, function () {
                    var t;
                    t = null != e.rightBtnGameUrl && "" != e.rightBtnGameUrl ? e.rightBtnGameUrl : e.tempArr[1], window.location.href = t
                })
            },
            getContentByScore: function (e, t) {
                var o = "\u6211\u771f\u662f\u592a\u5389\u5bb3\uff0c\u5728" + t + "\u4e2d\u7adf\u7136\u5f97\u4e860\u5206\uff0c\u5168\u7403\u53ea\u67091\u4e2a\u4eba\u5f970\u5206\uff01",
                    n = parseInt(.3 * this.standardScore), a = parseInt(1.5 * this.standardScore),
                    i = parseInt(2.5 * this.standardScore), r = parseInt(4 * this.standardScore);
                return e > 0 && e <= n ? o = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u771f\u662f\u592a\u68d2\u4e86\uff0c\u518d\u7ec3\u7ec3\u5c31\u80fd\u8fbe\u5230\u5f97\u5fc3\u5e94\u624b\u4e86\uff01" : e > n && e <= this.standardScore ? o = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u771f\u662f\u592a\u68d2\u4e86\uff0c\u518d\u7ec3\u7ec3\u5c31\u80fd\u8fbe\u5230\u6e38\u5203\u6709\u4f59\u7684\u5883\u754c\uff01" : e > this.standardScore && e <= a ? o = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u51fb\u8d25\u4e86\u5168\u7403" + (Math.floor(12 * (e - this.standardScore) / (a - this.standardScore)) + 80) + "%\u7684\u73a9\u5bb6\uff0c\u8fdb\u5165\u4e86\u4fe1\u624b\u62c8\u6765\u7684\u5883\u754c\uff01" : e > a && e <= i ? o = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u51fb\u8d25\u4e86\u5168\u7403" + (Math.floor(7 * (e - a) / (i - a)) + 92) + "%\u7684\u73a9\u5bb6\uff0c\u8fdb\u5165\u4e86\u8fd0\u7528\u81ea\u5982\u7684\u5883\u754c\uff01" : e > i && e <= r ? o = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u51fb\u8d25\u4e86\u5168\u740399%\u7684\u73a9\u5bb6\uff0c\u8fbe\u5230\u4e86\u884c\u4e91\u6d41\u6c34\u7684\u5883\u754c\uff01" : e > r && e < this.game_max_score ? o = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u636e\u8bf4\u5168\u7403\u53ea\u6709 " + (20 - Math.ceil(17 * (e - r) / (this.game_max_score - r))) + "\u4e2a\u4eba\u8fbe\u5230\u8fd9\u4e2a\u6c34\u5e73\uff0c\u72ec\u5b64\u6c42\u8d25\uff01" : e >= this.game_max_score && (o = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u8d85\u8d8a\u4e86\u72ec\u5b64\u6c42\u8d25\uff0c\u5fc3\u6709\u7075\u7280\uff01"), o
            },
            strlen: function (e) {
                for (var t = 0, o = 0; o < e.length; o++) {
                    var n = e.charCodeAt(o);
                    n >= 1 && n <= 126 || 65376 <= n && n <= 65439 ? t++ : t += 2
                }
                return t
            },
            getContentByScore2: function (e, t) {
                var o = "I'm awesome\uff0cin" + t + "get 0 score\uff0conly one person in the world has a 0\uff01",
                    n = parseInt(.3 * this.standardScore), a = parseInt(1.5 * this.standardScore),
                    i = parseInt(2.5 * this.standardScore), r = parseInt(4 * this.standardScore);
                return e >= this.game_max_score ? o = "I got " + e + " points in the game, defeating all players worldwide, waiting for you to fight!" : e > 0 && e <= n ? o = "I got " + e + " points in the game, really great\uff01" : e > n && e <= this.standardScore ? o = "I got " + e + " points in the game, really great\uff01" : e > this.standardScore && e <= a ? o = "I got in the game in " + e + " points, beating out " + (Math.floor(12 * (e - this.standardScore) / (a - this.standardScore)) + 80) + "% of global players\uff01" : e > a && e <= i ? o = "I got in the game in " + e + " points, beating out " + (Math.floor(7 * (e - a) / (i - a)) + 92) + "% of global players\uff01" : e > i && e <= r ? o = "I got in the game in " + e + " points, beating out 99% of global players\uff01" : e > r && e < this.game_max_score && (o = "I got " + e + " points in the game, it said to be the world's only " + (20 - Math.ceil(17 * (e - r) / (this.game_max_score - r))) + " people to reach this level! Have you?"), o
            },
            start: function () {
            }
        }), cc._RF.pop()
    }, {GameConfig: "GameConfig", GameUiTools: "GameUiTools", MainManage: "MainManage"}],
    linkHttpIconJs: [function (e, t) {
        "use strict";
        cc._RF.push(t, "b239dat3uhI0oI/y0BCMeMg", "linkHttpIconJs");
        var o = e("MainManage"), n = e("GameConfig");
        cc.Class({
            extends: cc.Component, properties: {iconSpr: cc.Node, iconSpr1: cc.Node}, onLoad: function () {
                if (this._imageArr = [], this.stopUpdateBool = !0, this.gameWidth = cc.director.getWinSize().width, this.gameHeight = cc.director.getWinSize().height, null != o.recGameData && "" != o.recGameData && null != o.recGameimg1 && "" != o.recGameimg1) {
                    var e = 50 - this.gameWidth / 2, t = this.gameHeight - 50 - this.gameHeight / 2;
                    null != o.recGamePos && "" != o.recGamePos && (1 == o.recGamePos ? (e = 50 - this.gameWidth / 2, t = this.gameHeight - 50 - this.gameHeight / 2) : 2 == o.recGamePos ? (e = this.gameWidth - 50 - this.gameWidth / 2, t = this.gameHeight - 50 - this.gameHeight / 2) : 3 == o.recGamePos ? (e = this.gameWidth - 50 - this.gameWidth / 2, t = 50 - this.gameHeight / 2) : 4 == o.recGamePos && (e = 50 - this.gameWidth / 2, t = 50 - this.gameHeight / 2));
                    var n = o.recGameimg1, a = o.recGameimg2, i = this.iconSpr, r = this.iconSpr1, c = this;
                    cc.loader.load(n, function (o, n) {
                        i.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(n), c.iconSpr.opacity = 0, c.iconSpr.x = e, c.iconSpr.y = t, c._imageArr.push(c.iconSpr)
                    }), cc.loader.load(a, function (o, n) {
                        r.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(n), c.iconSpr1.opacity = 0, c.iconSpr1.x = e, c.iconSpr1.y = t, c._imageArr.push(c.iconSpr1)
                    })
                }
                this.addTouchEvents()
            }, showLinkPic: function () {
                var e, t;
                e = null != o.recGameDelPau ? o.recGameDelPau : 6, cc.log("dMainManager.recGameDelPer", o.recGameDelPer), t = null != o.recGameDelPer ? o.recGameDelPer : .7, this._imageArr[0].opacity = 255, this._imageArr[0].runAction(cc.repeatForever(cc.sequence(cc.delayTime(e), cc.rotateBy(t, 0, 180), cc.callFunc(function () {
                    this._imageArr[0].setRotation(0), this._imageArr[0].opacity = 0, this._imageArr[1].opacity = 255
                }, this), cc.delayTime(e), cc.callFunc(function () {
                    this.flowerAction(this._imageArr[1], t)
                }, this), cc.delayTime(t), cc.callFunc(function () {
                    this._imageArr[1].opacity = 0, this._imageArr[0].opacity = 255
                }, this))))
            }, flowerAction: function (e, t) {
                e.runAction(cc.sequence(cc.rotateBy(t, 0, 180), cc.callFunc(function () {
                    e.setRotation(0)
                })))
            }, start: function () {
            }, addTouchEvents: function () {
                var e = this, t = {
                    event: cc.EventListener.TOUCH_ONE_BY_ONE, onTouchBegan: function (t) {
                        var a = t.getLocation();
                        if (e._imageArr.length >= 2) {
                            var i = Math.abs(a.x - e.gameWidth / 2 - e._imageArr[0].x),
                                r = Math.abs(a.y - e.gameHeight / 2 - e._imageArr[0].y);
                            i <= 30 && r <= 30 && (n.noTouchBool = !1, null != o.recGameUrl && "" != o.recGameUrl && (e._imageArr[0].runAction(cc.sequence(cc.scaleTo(.1, .8), cc.scaleTo(.1, 1), cc.callFunc(function () {
                                window.location.href = o.recGameUrl
                            }))), e._imageArr[1].runAction(cc.sequence(cc.scaleTo(.1, .8), cc.scaleTo(.1, 1)))), console.log("touchLinkHttp"))
                        }
                        return !0
                    }, onTouchMoved: function () {
                    }, onTouchEnded: function () {
                    }
                };
                cc.eventManager.addListener(t, e.node)
            }, update: function () {
                this.stopUpdateBool && this._imageArr.length >= 2 && (this.stopUpdateBool = !1, this.showLinkPic())
            }
        }), cc._RF.pop()
    }, {GameConfig: "GameConfig", MainManage: "MainManage"}],
    pause: [function (e, t) {
        "use strict";
        cc._RF.push(t, "fe4d8X6YzZExbfG0ULRQo0/", "pause"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                this.state = "down", this.flag = !0, this.node.opacity = 255
            },
            start: function () {
            },
            update: function () {
                var e = this;
                "down" == this.state && this.flag ? (this.state = "up", this.flag = !1, cc.tween(this.node).to(.7, {opacity: 0}).call(function () {
                    e.flag = !0
                }).start()) : "up" == this.state && this.flag && (this.state = "down", this.flag = !1, cc.tween(this.node).to(.7, {opacity: 255}).call(function () {
                    e.flag = !0
                }).start())
            }
        }), cc._RF.pop()
    }, {}],
    startGame: [function (e, t) {
        "use strict";
        cc._RF.push(t, "82821B3/DxNYK8X1Jy33Mu+", "startGame");
        var o = e("../../MainManage");
        cc.Class({
            extends: cc.Component,
            properties: {playNode: cc.Node, coinPre: cc.Prefab, flowers: [cc.SpriteFrame]},
            onLoad: function () {
                var e = this;
                this.adaptScreen(), this.adaptLanguage(), this.showPlayAction(), this.coinParticleNode = this.node.getChildByName("coinParticle"), this.root = this.node.parent, this.rootJS = this.root.getComponent("view_root"), this.node.getChildByName("bg").on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this), this.node.getChildByName("bg").on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this), this.node.getChildByName("bg").on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
                for (var t = function (t) {
                    e.scheduleOnce(function () {
                        2 != t && e.showCoinParticle(t)
                    }, .5 * t)
                }, o = 0; o < 5; o++) t(o)
            },
            showCoinParticle: function (e) {
                this.node.parent.getChildByName("particleNode").zIndex = 1e4;
                var t = 120 * e - 275, o = cc.winSize.height / 2 + 200, n = cc.v2(t, o), a = .2 * Math.random() + .1,
                    i = cc.instantiate(this.coinPre);
                i.getChildByName("coin").getComponent(cc.Sprite).spriteFrame = this.flowers[Math.floor(Math.random() * this.flowers.length)], i.position = n, i.scale = a, i.angle = 360 * Math.random(), i.parent = this.node.parent.getChildByName("particleNode"), cc.tween(i).repeatForever(cc.tween().by(.1, {angle: 20 * Math.random() - 10})).start(), cc.tween(i).to(1 * Math.random() + 1, {
                    y: 200 * Math.random() + 300,
                    scale: .1 * Math.random() + .3,
                    opacity: 255
                }, {easing: "sineIn"}).by(1, {y: -(50 * Math.random() + 10)}, {easing: "sineOut"}).start()
            },
            showPlayAction: function () {
                var e = this.playNode;
                cc.tween(e).repeatForever(cc.tween().delay(2).to(.3, {scale: 1.2}, {easing: "sineInOut"}).to(.3, {scale: 1}, {easing: "sineInOut"})).start()
            },
            removePlayAction: function () {
                this.playNode.stopAllActions()
            },
            onTouchStart: function () {
                this.removePlayAction(), cc.tween(this.playNode).to(.1, {scale: 1.2}, {easing: "sineInOut"}).start()
            },
            onTouchEnd: function () {
                this.rootJS.defeat(), cc.tween(this.playNode).to(.1, {scale: 1}, {easing: "sineInOut"}).start();
                var e = this.rootJS.scoreNumLabel.node;
                cc.tween(e).to(.3, {y: -100}).to(.1, {y: 0}).start(), cc.tween(this.node).to(.2, {
                    x: -1e3,
                    scale: .3
                }).call(function () {
                }).removeSelf().start(), cc.tween(this.node.parent.getChildByName("particleNode")).to(.2, {
                    x: -1e3,
                    scale: .3
                }).call(function () {
                }).removeSelf().start()
            },
            onTouchCancel: function () {
                this.showPlayAction(), cc.tween(this.playNode).to(.1, {scale: 1}, {easing: "sineInOut"}).start()
            },
            start: function () {
            },
            adaptLanguage: function () {
                var e = o.initLanguage();
                e = String(e), this.node.getChildByName("title").getChildByName(e).active = !0
            },
            adaptScreen: function () {
                var e = 1, t = cc.winSize, o = t.height;
                t.width, this.node.height > o && (e = o / this.node.height), this.node.scale = this.node.scale * e
            }
        }), cc._RF.pop()
    }, {"../../MainManage": "MainManage"}],
    utils: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "603f6q68qZK1riRf1y8rwL1", "utils"), Object.defineProperty(o, "__esModule", {value: !0});
        var n = e("../MyScript/GS"), a = e("../MainManage"), i = function () {
            function e() {
            }

            return e.getPosByAngle = function (e, t) {
                var o = t * Math.PI / 180, n = e * Math.cos(o), a = e * Math.sin(o);
                return cc.v2(n, a)
            }, e.convertToWorldPos = function (e, t) {
                return t ? e.convertToWorldSpaceAR(t) : e.convertToWorldSpaceAR(cc.v2(0, 0))
            }, e.convertToNodePos = function (t, o, n) {
                void 0 === n && (n = null);
                var a = e.convertToWorldPos(t, n);
                return o.convertToNodeSpaceAR(a)
            }, e.createNodeByPrefab = function (e, t, o) {
                var n = cc.instantiate(e);
                return n.setPosition(t), n.parent = o, n
            }, e.getPrefabByName = function (e) {
                var t = n.default.Constants.prefabMap;
                return t.has(e) ? t.get(e) : null
            }, e.getSpriteFrame = function (e) {
                var t = n.default.Constants.spriteFrameMap;
                return t.has(e) ? t.get(e) : null
            }, e.adaptLanguage = function (e, t) {
                var o = a.initLanguage();
                if (3 != o) {
                    var n = this.getSpriteFrame(t + o);
                    e.spriteFrame = n
                } else "guan_" == t ? e.node.active = !1 : (n = this.getSpriteFrame(t + o), e.spriteFrame = n)
            }, e.getJSByName = function (e, t) {
                return void 0 === t && (t = e.name), e.getComponent(t)
            }, e.getSpriteFrameFromAtlas = function (e, t) {
                var o = n.default.Constants.atlasMap;
                return o.has(e) ? o.get(e).getSpriteFrame(t) : null
            }, e
        }();
        o.default = i, cc._RF.pop()
    }, {"../MainManage": "MainManage", "../MyScript/GS": "GS"}],
    view_defeat: [function (e, t) {
        "use strict";
        cc._RF.push(t, "04d80DQ5wRBqZhH5go7vxUA", "view_defeat");
        var o = a(e("../GS")), n = a(e("../../commonJs/GameConfig"));

        function a(e) {
            return e && e.__esModule ? e : {default: e}
        }

        e("../../commonJs/GameUiTools");
        var i = e("MainManage");
        e("../../HttpManagerJs").onTimeoutHandler, cc.Class({
            extends: cc.Component,
            properties: {
                overLabel: cc.Label,
                bestScore: cc.Label,
                decorate: cc.Node,
                resultLabel: cc.Label,
                clickGetScore: cc.Label,
                clickToPause: cc.Node
            },
            onLoad: function () {
                this.centerNode = this.node.getChildByName("center"), this.playNode = this.node.getChildByName("bottom"), this.moreGameTouchStart(), this.moreGameTouchEnd(), this.moreGameTouchCancel(), this.standardScore = n.default.standScore, this.game_max_score = 200, this.onTouchEnd(), this.showAction(this.playNode), o.default.Constants.currentPercent = 0, o.default.Constants.currentPercent = this.getPercent(o.default.Constants.currentScore)
            },
            showAction: function (e) {
                cc.tween(e).repeatForever(cc.tween().delay(2).by(.3, {scale: .2}, {easing: "sineInOut"}).by(.3, {scale: -.2}, {easing: "sineInOut"})).start()
            },
            showDefeat: function () {
                this.UIPosChange()
            },
            moreGameTouchStart: function () {
                var e = this;
                this.initScale = this.centerNode.scale, this.centerNode.on(cc.Node.EventType.TOUCH_START, function () {
                    e.centerNode.stopAllActions(), cc.tween(e.centerNode).by(.1, {scale: .1}).start()
                })
            },
            moreGameTouchEnd: function () {
                var e = this;
                this.centerNode.on(cc.Node.EventType.TOUCH_END, function () {
                    cc.tween(e.centerNode).to(.01, {scale: e.initScale}).start(), console.log("MoreGame"), window.location.href = i.moreGameUrl
                })
            },
            moreGameTouchCancel: function () {
                var e = this;
                this.centerNode.on(cc.Node.EventType.TOUCH_CANCEL, function () {
                    cc.tween(e.centerNode).to(.01, {scale: e.initScale}).start()
                })
            },
            UIPosChange: function () {
                n.default.gameScore = o.default.Constants.currentScore, this.bestScore.string = o.default.Constants.bestHistory;
                var e = i.initLanguage(), t = null;
                1 == e ? t = this.getContentByScore1(1) : 3 == e ? t = this.getContentByScore3(1) : 2 == e ? t = this.getContentByScore2(1) : 4 == e && (t = this.getContentByScore4(1)), cc.log(t), console.log("nihao", i.endHttpShowInfo), null != i.endHttpShowInfo && "" != i.endHttpShowInfo && (cc.log("gototo"), i.endHttpShowInfo), this.overLabel.string = t
            },
            getContentByScore1: function () {
                return this.standardScore, this.standardScore, this.standardScore, this.standardScore, "\u51fb\u8d25\u4e86\u5168\u7403" + this.getPercent1() + "%\u73a9\u5bb6"
            },
            getContentByScore3: function () {
                return this.standardScore, this.standardScore, this.standardScore, this.standardScore, "Defeat " + this.getPercent1() + "% of the world's players"
            },
            getContentByScore2: function () {
                return this.standardScore, this.standardScore, this.standardScore, this.standardScore, "\u64ca\u6557\u4e86\u5168\u7403" + this.getPercent1() + "%\u7684\u73a9\u5bb6"
            },
            getContentByScore4: function () {
                return this.standardScore, this.standardScore, this.standardScore, this.standardScore, "\uc804 \uc138\uacc4 " + this.getPercent1() + "% \uc720 \uc800 \ub97c \uaca9\ud30c \ud558 \uc600 \uc2b5 \ub2c8 \ub2e4"
            },
            getPercent1: function () {
                var e = o.default.Constants.currentScore, t = 5,
                    n = (this.standardScore, this.standardScore, this.standardScore, this.standardScore, 5);
                return t = 5, (t = n += e / (this.standardScore / 40) + n) > 100 && (t = 100), Math.floor(t)
            },
            getPercent: function (e) {
                var t = 5, o = (this.standardScore, this.standardScore, this.standardScore, this.standardScore, 5);
                return t = 5, (t = o += e / (this.standardScore / 40) + o) > 100 && (t = 100), t
            },
            adaptLabelLanguage: function () {
                var e = i.initLanguage();
                1 == e || (2 == e ? (this.resultLabel.string = "\u6e38 \u6232 \u7d50 \u675f", this.clickGetScore.string = "\u9ede \u64ca \u67e5 \u770b \u5206 \u6578", this.clickToPause.getChildByName("touchImg").active = !1, this.clickToPause.getChildByName("touchLabel").getComponent(cc.Label).string = "\u9ede\u64ca\u7e7c\u7e8c", this.clickToPause.getChildByName("touchLabel").active = !0) : 3 == e ? (this.resultLabel.string = "Game Over", this.clickGetScore.string = "Click to view the score", this.clickToPause.getChildByName("touchImg").active = !1, this.clickToPause.getChildByName("touchLabel").active = !0) : 4 == e && (this.resultLabel.string = "\uac8c\uc784 \uc885\ub8cc", this.clickGetScore.string = "\ud074\ub9ad \ud558\uc5ec \uc810\uc218 \ubcf4\uae30", this.clickToPause.getChildByName("touchImg").active = !1, this.clickToPause.getChildByName("touchLabel").getComponent(cc.Label).string = "\ud074\ub9ad \ud558\uc5ec \uacc4\uc18d", this.clickToPause.getChildByName("touchLabel").active = !0))
            },
            start: function () {
            },
            onTouchEnd: function () {
                var e = this, t = this.node.position;
                this.node.on(cc.Node.EventType.TOUCH_START, function () {
                    e.playNode.stopAllActions(), e.initScale = e.playNode.scale, cc.tween(e.playNode).by(.2, {scale: .2}).start()
                }), this.node.on(cc.Node.EventType.TOUCH_END, function () {
                    cc.tween(e.playNode).to(.2, {scale: e.initScale}).start();
                    for (var o = e.node.children, a = 0; a < o.length; a++) "bg" != o[a].name ? cc.tween(o[a]).to(.1, {position: t}).call(function () {
                        n.default.GAME_OVER_BOOL = !0, n.default.gameScore = 0, cc.director.loadScene("MainGame")
                    }).start() : cc.tween(o[a]).then(cc.fadeOut(1)).start()
                }), this.node.on(cc.Node.EventType.TOUCH_CANCEL, function () {
                    cc.tween(e.playNode).to(.01, {scale: e.initScale}).start()
                })
            }
        }), cc._RF.pop()
    }, {
        "../../HttpManagerJs": "HttpManagerJs",
        "../../commonJs/GameConfig": "GameConfig",
        "../../commonJs/GameUiTools": "GameUiTools",
        "../GS": "GS",
        MainManage: "MainManage"
    }],
    view_showDefeat: [function (e, t) {
        "use strict";
        cc._RF.push(t, "45f7d1T43VJhb84juNwtI9w", "view_showDefeat");
        var o, n = (o = e("./GS")) && o.__esModule ? o : {default: o}, a = e("GameConfig"), i = e("MainManage");
        cc.Class({
            extends: cc.Component,
            properties: {
                clickGetScore: cc.Node,
                moreGameNode: cc.Node,
                playGameNode: cc.Node,
                click: cc.Node,
                clickRound: cc.Node,
                gameOver: cc.Node,
                percents: cc.Node
            },
            onLoad: function () {
                this.showClickNodeAction(), this.clickRound = this.node.getChildByName("bg").getChildByName("clickRound"), this.click = this.node.getChildByName("bg").getChildByName("click"), this.gameOver = this.node.getChildByName("bg").getChildByName("gameOver");
                var e = this.node.getChildByName("center");
                e.y = cc.winSize.height / 2 - e.height / 2 - 10, this.GameLayer = this.node.parent.getChildByName("GameLayer")
            },
            start: function () {
            },
            defeat: function () {
                var e = this;
                this.levelNode = this.node.parent.getChildByName("UI").getChildByName("Level"), cc.tween(this.node).call(function () {
                    e.node.opacity = 0, e.node.position = cc.v2(0, 0), a.gameScore = n.default.Constants.currentScore, a.GAME_OVER_BOOL = !1, i.gameOverShowText(a.gameScore, 1), e.node.zIndex = 100, e.node.getChildByName("top").getChildByName("level").getChildByName("score").getComponent(cc.Label).string = n.default.Constants.currentScore, e.node.getChildByName("top").getChildByName("bestHis").getChildByName("score").getComponent(cc.Label).string = 333, e.node.getComponent("view_defeat").showDefeat()
                }).to(.2, {opacity: 255}).start(), cc.tween(this.node.getChildByName("bg").getChildByName("bg")).to(.2, {opacity: 200}).start(), cc.tween(this.levelNode).by(.25, {position: cc.v2(-(this.node.parent.width / 2 + this.node.width / 2), 0)}).start(), this.clickRound.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
            },
            onTouchEnd: function () {
                n.default.Constants.showAD && adBreak({
                    type: "next",
                    name: "restart-game"
                }), this.clickRound.active = !1, this.click.active = !1, this.gameOver.active = !1, cc.tween(this.node.getChildByName("top")).to(.25, {position: cc.v2(-100, this.node.getChildByName("top").y)}).to(.25, {position: cc.v2(0, this.node.getChildByName("top").y)}).start(), cc.tween(this.node.getChildByName("center")).to(.25, {x: -cc.winSize.width / 2}).to(.25, {x: -cc.winSize.width / 2 + 100}).start(), cc.tween(this.node.getChildByName("bottom")).to(.25, {position: cc.v2(-100, this.node.getChildByName("bottom").y)}).to(.25, {position: cc.v2(0, this.node.getChildByName("bottom").y)}).start(), cc.tween(this.node.getChildByName("top").getChildByName("bg")).to(.25, {opacity: 123}).to(1, {opacity: 255}).start(), cc.tween(this.node.getChildByName("center").getChildByName("bg")).to(.25, {opacity: 123}).to(1, {opacity: 255}).start()
            },
            showClickNodeAction: function () {
                cc.tween(this.clickGetScore).repeatForever(cc.tween().delay(2).to(.3, {scale: 1.2}, {easing: "sineInOut"}).to(.3, {scale: 1}, {easing: "sineInOut"})).start()
            },
            adaptScreen: function () {
                var e = cc.winSize.height;
                if (e > 1280) {
                    var t = e / 1280;
                    this.node.getChildByName("bg").getChildByName("bgScene").scale *= t
                }
            }
        }), t.exports = void 0, cc._RF.pop()
    }, {"./GS": "GS", GameConfig: "GameConfig", MainManage: "MainManage"}],
    view_showSuccess: [function (e, t) {
        "use strict";
        cc._RF.push(t, "94cbbHnWHFDuqnLrdBqxCjn", "view_showSuccess");
        var o, n = (o = e("../MainManage")) && o.__esModule ? o : {default: o};
        cc.Class({
            extends: cc.Component,
            properties: {
                congratulationsSprite: cc.Sprite,
                diSprite: cc.Sprite,
                guanSprite: cc.Sprite,
                clickToPause: cc.Node
            },
            onLoad: function () {
                this.adaptLanguage(), this.adaptLabelLanguage()
            },
            start: function () {
            },
            success: function () {
                var e = this;
                this.levelNode = this.node.parent.getChildByName("level"), this.node.opacity = 0, this.node.position = cc.v2(0, 0), cc.tween(this.node).call(function () {
                    e.node.zIndex = 100, e.node.getChildByName("success").getChildByName("levelNode").getChildByName("levelNum").getComponent(cc.Label).string = GS.GetCurrentLevel()
                }).to(.2, {opacity: 255}).start(), cc.tween(this.node.getChildByName("success")).to(.25, {
                    position: cc.v2(0, -100),
                    opacity: 200
                }).to(.05, {
                    position: cc.v2(0, 100),
                    opacity: 255
                }).start(), cc.tween(this.node.getChildByName("bg")).to(.2, {opacity: 255}).start(), cc.tween(this.node.getChildByName("success").getChildByName("bg")).to(.25, {opacity: 123}).to(1, {opacity: 255}).start(), cc.tween(this.levelNode).by(.25, {position: cc.v2(0, 300)}).start()
            },
            adaptLabelLanguage: function () {
                var e = n.default.initLanguage();
                1 == e || (2 == e ? (this.clickToPause.getChildByName("touchImg").active = !1, this.clickToPause.getChildByName("touchLabel").getComponent(cc.Label).string = "\u9ede\u64ca\u7e7c\u7e8c", this.clickToPause.getChildByName("touchLabel").active = !0) : 3 == e ? (this.clickToPause.getChildByName("touchImg").active = !1, this.clickToPause.getChildByName("touchLabel").active = !0) : 4 == e && (this.clickToPause.getChildByName("touchImg").active = !1, this.clickToPause.getChildByName("touchLabel").getComponent(cc.Label).string = "\ud074\ub9ad \ud558\uc5ec \uacc4\uc18d", this.clickToPause.getChildByName("touchLabel").active = !0))
            },
            adaptLanguage: function () {
                var e = this.node.getComponent("SpriteManager");
                e.adaptLanguage(this.congratulationsSprite, "Congratulations_"), e.adaptLanguage(this.diSprite, "di_"), e.adaptLanguage(this.guanSprite, "guan_")
            }
        }), cc._RF.pop()
    }, {"../MainManage": "MainManage"}],
    view_success: [function (e, t) {
        "use strict";
        cc._RF.push(t, "03691b05ulA+orD2tG2Uatx", "view_success");
        var o = a(e("../../commonJs/GameConfig")), n = a(e("../../MainManage"));

        function a(e) {
            return e && e.__esModule ? e : {default: e}
        }

        cc.Class({
            extends: cc.Component, properties: {overLabel: cc.Label}, onLoad: function () {
                var e = this;
                this.standardScore = o.default.standScore, this.game_max_score = 200, this.UIPosChange(), this.initPos = this.node.position, this.node.on(cc.Node.EventType.TOUCH_END, function () {
                    cc.tween(e.node).to(.1, {position: e.initPos}).call(function () {
                        var e = Number(GS.GetCurrentLevel());
                        e += 1, GS.SetCurrentLevel(e), cc.director.loadScene("MainGame")
                    }).start()
                })
            }, start: function () {
            }, UIPosChange: function () {
                o.default.gameScore = GS.Constants.currentLevel;
                var e = n.default.initLanguage(), t = null;
                cc.log("\u6e38\u620f\u5f97\u5206:", o.default.gameScore), 1 == e ? t = this.getContentByScore1(5 * o.default.gameScore + 5) : 3 == e ? t = this.getContentByScore3(5 * o.default.gameScore + 5) : 2 == e ? t = this.getContentByScore2(5 * o.default.gameScore + 5) : 4 == e && (t = this.getContentByScore4(5 * o.default.gameScore + 5)), console.log("nihao", n.default.endHttpShowInfo), null != n.default.endHttpShowInfo && "" != n.default.endHttpShowInfo && cc.log("gototo"), this.overLabel.string = t
            }, getContentByScore1: function (e) {
                var t = "\u4e00\u5173\u4e5f\u6ca1\u8fc7\uff0c\u5168\u7403\u72ec\u4e00\u4e2a",
                    o = .3 * this.standardScore, n = 1.5 * this.standardScore, a = 2.5 * this.standardScore,
                    i = 4 * this.standardScore, r = 5;
                return cc.log(this.standardScore), 10 == e ? t = "\u51fb\u8d25\u4e86\u5168\u74035%\u73a9\u5bb6" : e > o && e <= this.standardScore ? t = "\u51fb\u8d25\u4e86\u5168\u7403" + (r += e / 2) + "%\u73a9\u5bb6" : e > this.standardScore && e <= n ? t = "\u51fb\u8d25\u4e86\u5168\u7403" + (Math.floor((e - this.standardScore) * (92 - r) / (n - this.standardScore)) + r) + "%\u73a9\u5bb6" : e > n && e <= a ? t = "\u51fb\u8d25\u4e86\u5168\u7403" + (Math.floor(7 * (e - n) / (a - n)) + 92) + "%\u73a9\u5bb6" : e > a && e <= i ? t = "\u51fb\u8d25\u4e86\u5168\u740398%\u73a9\u5bb6" : e > i && e < 6600 ? (Math.ceil(17 * (e - i) / (6600 - i)), t = "\u51fb\u8d25\u4e86\u5168\u740399%\u73a9\u5bb6") : e >= 6600 && (t = "\u51fb\u8d25\u4e86\u5168\u7403100%\u73a9\u5bb6"), t
            }, getContentByScore3: function (e) {
                var t = "The only you in the world", o = .3 * this.standardScore, n = 1.5 * this.standardScore,
                    a = 2.5 * this.standardScore, i = 4 * this.standardScore, r = 80;
                return 10 == e ? t = "Defeat 5% of the world's players" : e > o && e <= this.standardScore ? t = "Defeat " + (r += e / 2) + "% of the world's players" : e > this.standardScore && e <= n ? t = "Defeat " + (Math.floor((e - this.standardScore) * (92 - r) / (n - this.standardScore)) + r) + "% of the world's players" : e > n && e <= a ? t = "Defeat " + (Math.floor(7 * (e - n) / (a - n)) + 92) + "% of the world's players" : e > a && e <= i ? t = "Defeat 98% of the world's players" : e > i && e < 6600 ? (Math.ceil(17 * (e - i) / (6600 - i)), t = "Defeat 99% of the world's players") : e >= 6600 && (t = "Defeat 100% of the world's players"), t
            }, getContentByScore2: function (e) {
                var t = "\u4e00\u95dc\u4e5f\u6c92\u904e\uff0c\u5168\u7403\u7368\u4e00\u500b",
                    o = .3 * this.standardScore, n = 1.5 * this.standardScore, a = 2.5 * this.standardScore,
                    i = 4 * this.standardScore, r = 80;
                return 10 == e ? t = "\u64ca\u6557\u4e86\u5168\u74035%\u7684\u73a9\u5bb6" : e > o && e <= this.standardScore ? t = "\u64ca\u6557\u4e86\u5168\u7403" + (r += e / 2) + "%\u7684\u73a9\u5bb6" : e > this.standardScore && e <= n ? t = "\u64ca\u6557\u4e86\u5168\u7403" + (Math.floor((e - this.standardScore) * (92 - r) / (n - this.standardScore)) + r) + "%\u7684\u73a9\u5bb6" : e > n && e <= a ? t = "\u64ca\u6557\u4e86\u5168\u7403" + (Math.floor(7 * (e - n) / (a - n)) + 92) + "%\u7684\u73a9\u5bb6" : e > a && e <= i ? t = "\u64ca\u6557\u4e86\u5168\u740398%\u7684\u73a9\u5bb6" : e > i && e < 6600 ? (Math.ceil(17 * (e - i) / (6600 - i)), t = "\u64ca\u6557\u4e86\u5168\u740399%\u7684\u73a9\u5bb6") : e >= 6600 && (t = "\u64ca\u6557\u4e86\u5168\u7403100%\u7684\u73a9\u5bb6"), t
            }, getContentByScore4: function (e) {
                var t = "\uc804 \uc138\uacc4 \uc5d0\uc11c \uc720\uc77c \ud558 \ub2e4", o = .3 * this.standardScore,
                    n = 1.5 * this.standardScore, a = 2.5 * this.standardScore, i = 4 * this.standardScore, r = 80;
                return 10 == e ? t = "\uc804 \uc138\uacc4 5% \uc720 \uc800 \ub97c \uaca9\ud30c \ud558 \uc600 \uc2b5 \ub2c8 \ub2e4" : e > o && e <= this.standardScore ? t = "\uc804 \uc138\uacc4 " + (r += e / 2) + "% \uc720 \uc800 \ub97c \uaca9\ud30c \ud558 \uc600 \uc2b5 \ub2c8 \ub2e4" : e > this.standardScore && e <= n ? t = "\uc804 \uc138\uacc4 " + (Math.floor((e - this.standardScore) * (92 - r) / (n - this.standardScore)) + r) + "% \uc720 \uc800 \ub97c \uaca9\ud30c \ud558 \uc600 \uc2b5 \ub2c8 \ub2e4" : e > n && e <= a ? t = "\uc804 \uc138\uacc4 " + (Math.floor(7 * (e - n) / (a - n)) + 92) + "% \uc720 \uc800 \ub97c \uaca9\ud30c \ud558 \uc600 \uc2b5 \ub2c8 \ub2e4" : e > a && e <= i ? t = "\uc804 \uc138\uacc4 98% \uc720 \uc800 \ub97c \uaca9\ud30c \ud558 \uc600 \uc2b5 \ub2c8 \ub2e4" : e > i && e < 6600 ? (Math.ceil(17 * (e - i) / (6600 - i)), t = "\uc804 \uc138\uacc4 99% \uc720 \uc800 \ub97c \uaca9\ud30c \ud558 \uc600 \uc2b5 \ub2c8 \ub2e4") : e >= 6600 && (t = "\uc804 \uc138\uacc4 100% \uc720 \uc800 \ub97c \uaca9\ud30c \ud558 \uc600 \uc2b5 \ub2c8 \ub2e4"), t
            }, adaptScreen: function () {
                var e = 1, t = cc.winSize, o = t.height, n = (t.width, this.node.getChildByName("bg"));
                this.node.height > o && (e = o / n.height), this.node.scale = this.node.scale * e
            }
        }), cc._RF.pop()
    }, {"../../MainManage": "MainManage", "../../commonJs/GameConfig": "GameConfig"}]
}, {}, ["HttpManagerJs", "LoadSceneJs", "MainGameJS", "MainManage", "GS", "DataManager", "ObjectManager", "pause", "startGame", "view_defeat", "view_success", "Particle", "Root", "Bottle", "Fragment", "Item", "QueenBee", "view_showDefeat", "view_showSuccess", "AdjusWithHeight", "AutoParentSize", "AutoSetSize", "BestScore", "GSAudioManager", "GSConstants", "GSDate", "GSKVStorage", "GSLog", "GSRandom", "GameConfig", "GameUiTools", "GetCurrentLevel", "PoolManager", "PrefabManager", "RotatePos", "SetSizeByNode", "SpriteManager", "Widget", "animationCtr", "utils", "gameOverJs", "linkHttpIconJs"]);