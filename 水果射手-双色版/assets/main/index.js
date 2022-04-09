window.__require = function e(t, o, n) {
    function i(r, a) {
        if (!o[r]) {
            if (!t[r]) {
                var s = r.split("/");
                if (s = s[s.length - 1],
                    !t[s]) {
                    var l = "function" == typeof __require && __require;
                    if (!a && l)
                        return l(s, !0);
                    if (c)
                        return c(s, !0);
                    throw new Error("Cannot find module '" + r + "'")
                }
                r = s
            }
            var u = o[r] = {
                exports: {}
            };
            t[r][0].call(u.exports, function (e) {
                return i(t[r][1][e] || e)
            }, u, u.exports, e, t, o, n)
        }
        return o[r].exports
    }

    for (var c = "function" == typeof __require && __require, r = 0; r < n.length; r++)
        i(n[r]);
    return i
}({
    AniTools: [function (e, t) {
        "use strict";
        cc._RF.push(t, "f05dbksdAdHtpW4ZpV1zW/T", "AniTools");
        var o = {
            doLabStrAni: function (e, t, o) {
                e.node.stopAllActions(),
                    e.string = "";
                var n = t.split("")
                    , i = 0
                    , c = o / n.length;
                e.node.runAction(cc.sequence(cc.callFunc(function () {
                    e.string = e.string + n[i],
                        i++
                }), cc.delayTime(c)).repeat(n.length))
            },
            gunNumLabAni: function (e, t) {
                var o = parseInt(e.string);
                if (t != o) {
                    var n = 0
                        , i = t - o >= 50 ? 50 : t - o;
                    e.node.runAction(cc.sequence(cc.callFunc(function () {
                        n >= i - 1 ? e.string = t : (o++,
                            e.string = o),
                            n++
                    }), cc.delayTime(.02)).repeat(i))
                }
            },
            openUIAni: function (e, t, o, n) {
                e.opacity = 0,
                    t.scale = 0,
                    e.runAction(cc.fadeTo(o, 100)),
                    t.runAction(cc.sequence(cc.scaleTo(o, 1).easing(cc.easeBackOut()), cc.callFunc(n)))
            },
            closeUIAni: function (e, t, o, n) {
                e.runAction(cc.fadeOut(o)),
                    t.runAction(cc.sequence(cc.scaleTo(o, 0).easing(cc.easeBackIn()), cc.callFunc(n)))
            },
            fireColorArr: ["#F5CD4D", "#F77986", "#D0F057", "#7ACCE8", "#E365EE"],
            fireworksAni: function (e, t, o, n) {
                for (var i = 0; i < t; i++) {
                    var c = ToolsJs.newSprite("fire" + this.returnRanNum(1, 4));
                    c.scale = .3 + .5 * Math.random(),
                        c.position = o,
                        c.color = cc.color(this.fireColorArr[this.returnRanNum(0, this.fireColorArr.length - 1)]),
                        e.addChild(c, 88);
                    var r = this.returnRanNum(n - 15, n + 15)
                        , a = this.returnRanNum(300, 1e3);
                    this.fireObjAni(c, r, a, 350, .005 * i)
                }
            },
            fireObjAni: function (e, t, o, n, i) {
                void 0 === i && (i = 0);
                var c = .1 + .5 * Math.random();
                e.runAction(cc.rotateBy(c, this.returnRanNum(-360, 360)).repeatForever());
                var r = cc.misc.degreesToRadians(t)
                    , a = cc.v2(Math.cos(r) * o, Math.sin(r) * o)
                    , s = o / n;
                e.runAction(cc.sequence(cc.delayTime(i), cc.jumpBy(s, cc.v2(1.5 * a.x, 0), o, 1), cc.removeSelf(!0)))
            },
            bombObjAni: function (e, t, o, n, i, c) {
                t = t || this.returnRanNum(-180, 180);
                var r = cc.misc.degreesToRadians(t)
                    , a = cc.v2(Math.cos(r) * o, Math.sin(r) * o)
                    , s = o / n
                    , l = i ? 0 : e.scale
                    , u = c ? 0 : 255;
                e.runAction(cc.sequence(cc.spawn(cc.scaleTo(s + .1, l), cc.moveBy(s, a).easing(cc.easeQuadraticActionOut()), cc.fadeTo(s + .1, u)), cc.fadeOut(.1), cc.removeSelf(!0)))
            },
            playAni: function (e, t) {
                e.getComponent(cc.Animation).play(t)
            },
            stopAni: function (e, t) {
                e.getComponent(cc.Animation).stop(t)
            },
            addNodeAni: function (e, t, o, n, i, c, r) {
                for (var a = e.getComponent(cc.Animation), s = [], l = n; l <= i; l++) {
                    var u = new cc.SpriteFrame(cc.url.raw("resources/" + t + l + ".png"));
                    s.push(u)
                }
                var h = cc.AnimationClip.createWithSpriteFrames(s, 5);
                h.name = o,
                    h.speed = r,
                    h.wrapMode = c ? cc.WrapMode.Loop : cc.WrapMode.Normal,
                    a.addClip(h)
            },
            returnRanNum: function (e, t) {
                return e + Math.floor(Math.random() * (t - e + 1))
            }
        };
        window.AniTools = o,
            cc._RF.pop()
    }
        , {}],
    GameConfig: [function (e, t) {
        "use strict";
        cc._RF.push(t, "f0663sWtfNKCKOL+Hvnt0cI", "GameConfig");
        var o = {
            GameClubButton: null,
            GameScene: null,
            launchScene: null,
            Bros: null,
            caS: null,
            MAIN_MENU_NUM: "Classic",
            gameScore: 0,
            standScore: 30,
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
        t.exports = o,
            cc._RF.pop()
    }
        , {}],
    GameState: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "4394cI0N3VJyJFzATIYFew+", "GameState");
        var n, i = this && this.__extends || (n = function (e, t) {
                    return (n = Object.setPrototypeOf || {
                                __proto__: []
                            } instanceof Array && function (e, t) {
                                e.__proto__ = t
                            }
                            || function (e, t) {
                                for (var o in t)
                                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                            }
                    )(e, t)
                }
                    ,
                    function (e, t) {
                        function o() {
                            this.constructor = e
                        }

                        n(e, t),
                            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
                                new o)
                    }
            ), c = this && this.__decorate || function (e, t, o, n) {
                var i, c = arguments.length, r = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(e, t, o, n);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        (i = e[a]) && (r = (c < 3 ? i(r) : c > 3 ? i(t, o, r) : i(t, o)) || r);
                return c > 3 && r && Object.defineProperty(t, o, r),
                    r
            }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = cc._decorator
            , a = r.ccclass
            , s = r.property
            , l = function () {
            this.bubble = null,
                this.color = null
        }
            , u = function () {
            this.bubble = null,
                this.color = null,
                this.visited = !1,
                this.connected = !1,
                this.rightFlag = !1,
                this.multiply6 = !1
        }
            , h = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.level = 0,
                    t.nextBubblePic = null,
                    t.shootBubbleLayer = null,
                    t.fallBubbleLayer = null,
                    t.present = null,
                    t.suspendBtn = null,
                    t.continueBtn = null,
                    t.soundBtn = null,
                    t.blackBg = null,
                    t.comboNode = null,
                    t.comboLabel = null,
                    t.guideHand = null,
                    t.redPic = null,
                    t.giftPic = null,
                    t.giftOpenPic = null,
                    t.gameOverNode = null,
                    t.exFallBubblePrefab = null,
                    t.launchBubblePrefab = null,
                    t.shootBubblePrefab = null,
                    t.fallBubblePrefab = null,
                    t.rainbowPicPrefab = null,
                    t.launchAudio = null,
                    t.bubbleInterval = 72,
                    t.bubbleIntervalVertical = 62,
                    t.bubbleColorRange = 3,
                    t.nextBubbleColor = 3,
                    t.nextBubbleColor8 = !1,
                    t.nextBubbleColor9 = !1,
                    t.lowerGuideBubblePicY = 9999,
                    t.readyToLaunchBubble = null,
                    t.readyToLaunchBubblePos = null,
                    t.comboCount = 0,
                    t.count = 0,
                    t.bubbleStartMove = !1,
                    t.bubbleMoveSpeed = .2,
                    t.bubbleMoveDistance = 0,
                    t.thereIsX6 = !1,
                    t.lastPresentScore = 0,
                    t.presentScore = 7e3,
                    t.presentScoreInterval = 9e3,
                    t.map = [null],
                    t.createRightRow = !0,
                    t.gameOverFlag = !1,
                    t.historyScore = [0],
                    t.posInJb = 0,
                    t.helpCount = 0,
                    t.needHelp = !1,
                    t.firstFireBall = !0,
                    t.comboNodePos = null,
                    t.canNotClickFlag = !1,
                    t.canPlaySound = !0,
                    t
            }

            var o;
            return i(t, e),
                o = t,
                t.prototype.onLoad = function () {
                    null != o.Instance && o.Instance.destroy(),
                        o.Instance = this
                }
                ,
                t.prototype.start = function () {
                    this.node.width = cc.winSize.width - 40,
                        this.node.height = cc.winSize.height + 9999,
                        this.CanClick(),
                        this.CreateReadyToLaunchBubble(),
                        this.suspendBtn.on(cc.Node.EventType.TOUCH_START, this.Suspend, this),
                        this.suspendBtn.y = -.5 * cc.winSize.height + 110 - 20,
                        this.comboNodePos = this.comboNode.position,
                        this.scheduleOnce(function () {
                            this.SetMap(),
                                this.CreateNewShootBubbles(),
                                this.needHelp = !0
                        })
                }
                ,
                t.prototype.SetMap = function () {
                    for (var e = 1; e <= 50; e++) {
                        this.map[e] = [];
                        for (var t = 1; t <= 10; t++)
                            this.map[e][t] = new u
                    }
                    for (e = 1; e <= 6; e++)
                        if (e % 2 != 0)
                            for (t = 1; t <= 10; t++)
                                this.map[e][t].bubble = cc.instantiate(this.shootBubblePrefab),
                                    this.map[e][t].bubble.parent = this.shootBubbleLayer,
                                    this.map[e][t].bubble.setPosition(.5 * this.bubbleInterval - 360 + (t - 1) * this.bubbleInterval, .5 * cc.winSize.height - .5 * this.bubbleIntervalVertical - (e - 1) * this.bubbleIntervalVertical),
                                    this.map[e][t].color = Math.floor(Math.random() * this.bubbleColorRange + 1),
                                    this.map[e][t].bubble.getComponent("shootBubble").SetColor(this.map[e][t].color),
                                    this.map[e][t].bubble.getComponent("shootBubble").SetPosInMap(e, t);
                        else
                            for (t = 1; t <= 9; t++)
                                this.map[e][t].bubble = cc.instantiate(this.shootBubblePrefab),
                                    this.map[e][t].bubble.parent = this.shootBubbleLayer,
                                    this.map[e][t].bubble.setPosition(-360 + this.bubbleInterval + (t - 1) * this.bubbleInterval, .5 * cc.winSize.height - .5 * this.bubbleIntervalVertical - (e - 1) * this.bubbleIntervalVertical),
                                    this.map[e][t].color = Math.floor(Math.random() * this.bubbleColorRange + 1),
                                    this.map[e][t].bubble.getComponent("shootBubble").SetColor(this.map[e][t].color),
                                    this.map[e][t].bubble.getComponent("shootBubble").SetPosInMap(e, t),
                                    this.map[e][t].rightFlag = !0
                }
                ,
                t.prototype.CreateReadyToLaunchBubble = function () {
                    if (this.readyToLaunchBubblePos = cc.v2(0, -.5 * cc.winSize.height + 110),
                        this.readyToLaunchBubble = new l,
                        this.readyToLaunchBubble.bubble = cc.instantiate(this.launchBubblePrefab),
                        this.readyToLaunchBubble.bubble.parent = this.shootBubbleLayer,
                        this.readyToLaunchBubble.bubble.setPosition(this.readyToLaunchBubblePos),
                        this.scheduleOnce(function () {
                            this.readyToLaunchBubble.bubble.setPosition(this.readyToLaunchBubblePos)
                        }),
                        this.readyToLaunchBubble.color = this.nextBubbleColor,
                        this.readyToLaunchBubble.bubble.getComponent("launchBubble").SetColor(this.readyToLaunchBubble.color),
                        this.nextBubbleColor = Math.floor(Math.random() * this.bubbleColorRange + 1),
                    this.needHelp && this.helpCount < 3)
                        this.nextBubbleColor = this.ColorCount(),
                            this.helpCount++;
                    else
                        for (this.helpCount = 0; this.nextBubbleColor >= 4 && this.nextBubbleColor <= 7 && this.SpecialColorCount(this.nextBubbleColor) < 15;)
                            this.nextBubbleColor = Math.floor(Math.random() * this.bubbleColorRange + 1);
                    this.nextBubblePic.getComponent("nextBubblePic").SetColor(this.nextBubbleColor)
                }
                ,
                t.prototype.NewTouchTopAirWall = function () {
                    this.readyToLaunchBubble.bubble.destroy(),
                        this.readyToLaunchBubble.bubble = null,
                        this.CreateReadyToLaunchBubble(),
                        this.CanClick()
                }
                ,
                t.prototype.TouchTopAirWall = function () {
                    var e = 10 * this.bubbleInterval
                        , t = 0
                        , o = null
                        , n = !1;
                    if (this.createRightRow)
                        for (var i = 1; i <= 10; i++) {
                            var c = cc.v2(.5 * this.bubbleInterval - 360 + (i - 1) * this.bubbleInterval, .5 * cc.winSize.height - .5 * this.bubbleInterval);
                            (r = this.CalculateDistance(this.readyToLaunchBubble.bubble, c)) < e && null == this.map[1][i].bubble && (e = r,
                                t = i,
                                n = !1,
                                o = c)
                        }
                    else
                        for (i = 1; i <= 9; i++) {
                            var r;
                            c = cc.v2(-360 + this.bubbleInterval + (i - 1) * this.bubbleInterval, .5 * cc.winSize.height - .5 * this.bubbleInterval),
                            (r = this.CalculateDistance(this.readyToLaunchBubble.bubble, c)) < e && null == this.map[1][i].bubble && (e = r,
                                t = i,
                                n = !0,
                                o = c)
                        }
                    cc.log("\u76ee\u6807\u4f4d\u7f6e\u662f1" + t),
                        0 != t ? (this.readyToLaunchBubble.bubble.getComponent(cc.PhysicsCircleCollider).enabled = !1,
                            this.readyToLaunchBubble.bubble.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0),
                            this.map[1][t].bubble = cc.instantiate(this.shootBubblePrefab),
                            this.map[1][t].bubble.parent = this.shootBubbleLayer,
                            this.map[1][t].bubble.setPosition(this.readyToLaunchBubble.bubble.position),
                            this.map[1][t].color = this.readyToLaunchBubble.color,
                            this.map[1][t].bubble.getComponent("shootBubble").SetColor(this.map[1][t].color),
                            this.map[1][t].bubble.getComponent("shootBubble").SetPosInMap(1, t),
                            this.map[1][t].rightFlag = n,
                            this.map[1][t].bubble.runAction(cc.moveTo(.025, o).easing(cc.easeOut(1))),
                            this.readyToLaunchBubble.bubble.destroy(),
                            this.readyToLaunchBubble.bubble = null,
                            this.count = 0,
                            this.thereIsX6 = !1,
                            this.JudgeBubbleFall(1, t, this.map[1][t].color),
                            cc.log("\u989c\u8272\u76f8\u540c\u76f8\u8fde\u7684\u6ce1\u6ce1\u6570\u91cf:" + this.count),
                            this.count >= 3 ? (this.BubbleFall(),
                                this.comboCount++) : (this.Recovery(),
                                this.comboCount = 0)) : cc.log("\u8fd9\u4e5f\u662f\u5fc5\u4e0d\u53ef\u80fd\u7684")
                }
                ,
                t.prototype.TouchShootBubble = function (e, t) {
                    if (8 == this.readyToLaunchBubble.color)
                        return this.ShootRainbowBubble(e, t),
                            this.comboCount++,
                            void this.ComboShow();
                    if (9 != this.readyToLaunchBubble.color) {
                        var o = 10 * this.bubbleInterval
                            , n = 0
                            , i = 0
                            , c = !1
                            , r = null;
                        if (this.map[e][t].rightFlag) {
                            if (cc.log("\u78b0\u5230\u7684\u884c\u662f\u5411\u53f3\u9519\u4f4d\u7684"),
                            1 != e && null == this.map[e - 1][t + 1].bubble) {
                                var a = cc.v2(this.map[e][t].bubble.x + .5 * this.bubbleInterval, this.map[e][t].bubble.y + this.bubbleIntervalVertical);
                                (s = this.CalculateDistance(this.readyToLaunchBubble.bubble, a)) < o && (o = s,
                                    n = e - 1,
                                    i = t + 1,
                                    c = !1,
                                    r = a)
                            }
                            if (9 != t && null == this.map[e][t + 1].bubble && (a = cc.v2(this.map[e][t].bubble.x + this.bubbleInterval, this.map[e][t].bubble.y),
                            (s = this.CalculateDistance(this.readyToLaunchBubble.bubble, a)) < o && (o = s,
                                n = e,
                                i = t + 1,
                                c = !0,
                                r = a)),
                            null == this.map[e + 1][t + 1].bubble) {
                                a = cc.v2(this.map[e][t].bubble.x + .5 * this.bubbleInterval, this.map[e][t].bubble.y - this.bubbleIntervalVertical);
                                var s = this.CalculateDistance(this.readyToLaunchBubble.bubble, a);
                                cc.log("\u53f3\u4e0b" + s),
                                s < o && (o = s,
                                    n = e + 1,
                                    i = t + 1,
                                    c = !1,
                                    r = a)
                            }
                            null == this.map[e + 1][t].bubble && (a = cc.v2(this.map[e][t].bubble.x - .5 * this.bubbleInterval, this.map[e][t].bubble.y - this.bubbleIntervalVertical),
                                s = this.CalculateDistance(this.readyToLaunchBubble.bubble, a),
                                cc.log("\u5de6\u4e0b" + s),
                            s < o && (o = s,
                                n = e + 1,
                                i = t,
                                c = !1,
                                r = a)),
                            1 != t && null == this.map[e][t - 1].bubble && (a = cc.v2(this.map[e][t].bubble.x - this.bubbleInterval, this.map[e][t].bubble.y),
                            (s = this.CalculateDistance(this.readyToLaunchBubble.bubble, a)) < o && (o = s,
                                n = e,
                                i = t - 1,
                                c = !0,
                                r = a)),
                            1 != e && null == this.map[e - 1][t].bubble && (a = cc.v2(this.map[e][t].bubble.x - .5 * this.bubbleInterval, this.map[e][t].bubble.y + this.bubbleIntervalVertical),
                            (s = this.CalculateDistance(this.readyToLaunchBubble.bubble, a)) < o && (o = s,
                                n = e - 1,
                                i = t,
                                c = !1,
                                r = a))
                        } else
                            cc.log("\u78b0\u5230\u7684\u884c\u4e0d\u662f\u5411\u53f3\u9519\u4f4d\u7684"),
                            1 != e && 10 != t && null == this.map[e - 1][t].bubble && (a = cc.v2(this.map[e][t].bubble.x + .5 * this.bubbleInterval, this.map[e][t].bubble.y + this.bubbleIntervalVertical),
                            (s = this.CalculateDistance(this.readyToLaunchBubble.bubble, a)) < o && (o = s,
                                n = e - 1,
                                i = t,
                                c = !0,
                                r = a)),
                            10 != t && null == this.map[e][t + 1].bubble && (a = cc.v2(this.map[e][t].bubble.x + this.bubbleInterval, this.map[e][t].bubble.y),
                            (s = this.CalculateDistance(this.readyToLaunchBubble.bubble, a)) < o && (o = s,
                                n = e,
                                i = t + 1,
                                c = !1,
                                r = a)),
                            10 != t && null == this.map[e + 1][t].bubble && (a = cc.v2(this.map[e][t].bubble.x + .5 * this.bubbleInterval, this.map[e][t].bubble.y - this.bubbleIntervalVertical),
                                s = this.CalculateDistance(this.readyToLaunchBubble.bubble, a),
                                cc.log("\u53f3\u4e0b" + s),
                            s < o && (o = s,
                                n = e + 1,
                                i = t,
                                c = !0,
                                r = a)),
                            1 != t && null == this.map[e + 1][t - 1].bubble && (a = cc.v2(this.map[e][t].bubble.x - .5 * this.bubbleInterval, this.map[e][t].bubble.y - this.bubbleIntervalVertical),
                                s = this.CalculateDistance(this.readyToLaunchBubble.bubble, a),
                                cc.log("\u5de6\u4e0b" + s),
                            s < o && (o = s,
                                n = e + 1,
                                i = t - 1,
                                c = !0,
                                r = a)),
                            1 != t && null == this.map[e][t - 1].bubble && (a = cc.v2(this.map[e][t].bubble.x - this.bubbleInterval, this.map[e][t].bubble.y),
                            (s = this.CalculateDistance(this.readyToLaunchBubble.bubble, a)) < o && (o = s,
                                n = e,
                                i = t - 1,
                                c = !1,
                                r = a)),
                            1 != e && 1 != t && null == this.map[e - 1][t - 1].bubble && (a = cc.v2(this.map[e][t].bubble.x - .5 * this.bubbleInterval, this.map[e][t].bubble.y + this.bubbleIntervalVertical),
                            (s = this.CalculateDistance(this.readyToLaunchBubble.bubble, a)) < o && (o = s,
                                n = e - 1,
                                i = t - 1,
                                c = !0,
                                r = a));
                        cc.log("\u79bb\u5f97\u6700\u8fd1\u7684\u662f" + n + i),
                            cc.log("\u662f\u5426\u5411\u53f3\u9519\u4f4d" + c),
                            0 != n && 0 != i ? (this.readyToLaunchBubble.bubble.getComponent(cc.PhysicsCircleCollider).enabled = !1,
                                this.readyToLaunchBubble.bubble.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0),
                                this.map[n][i].bubble = cc.instantiate(this.shootBubblePrefab),
                                this.map[n][i].bubble.parent = this.shootBubbleLayer,
                                this.map[n][i].bubble.setPosition(this.readyToLaunchBubble.bubble.position),
                                this.map[n][i].color = this.readyToLaunchBubble.color,
                                this.map[n][i].bubble.getComponent("shootBubble").SetColor(this.map[n][i].color),
                                this.map[n][i].bubble.getComponent("shootBubble").SetPosInMap(n, i),
                                this.map[n][i].rightFlag = c,
                                this.map[n][i].bubble.runAction(cc.moveTo(.025, r).easing(cc.easeOut(1))),
                                this.readyToLaunchBubble.bubble.destroy(),
                                this.readyToLaunchBubble.bubble = null,
                                this.count = 0,
                                this.thereIsX6 = !1,
                                this.JudgeBubbleFall(n, i, this.map[n][i].color),
                                cc.log("\u989c\u8272\u76f8\u540c\u76f8\u8fde\u7684\u6ce1\u6ce1\u6570\u91cf:" + this.count),
                                this.count >= 3 ? (this.BubbleFall(),
                                    this.comboCount++,
                                    this.ComboShow()) : (this.Recovery(),
                                    this.comboCount = 0)) : (cc.log("\u6309\u7406\u8bf4\u5fc5\u4e0d\u53ef\u80fd\u8fd0\u884c\u8fd9\u53e5\u8bdd\uff0c\u4e07\u4e00\u4e07\u4e00\u8f93\u51fa\u4e86\u8fd9\uff0c\u8bf4\u660e\u6ca1\u80fd\u627e\u5230\u78b0\u5230\u7684\u6ce1\u6ce1\u9644\u8fd1\u7684\u7a7a\u4f4d\u7f6e"),
                                cc.log("\u4e0d\u662f\u7a7f\u6a21\u4e86\u5c31\u662f\u903b\u8f91\u5199\u9519\u4e86"),
                                1 == t ? this.TouchShootBubble(e + 1, t) : this.TouchShootBubble(e + 1, t - 1))
                    }
                }
                ,
                t.prototype.ShootRainbowBubble = function (e, t) {
                    var o = cc.instantiate(this.fallBubblePrefab);
                    o.parent = this.fallBubbleLayer,
                        o.setPosition(this.readyToLaunchBubble.bubble.position),
                        o.getComponent("fallBubble").SetColor(this.map[e][t].color),
                        this.readyToLaunchBubble.bubble.destroy(),
                        this.readyToLaunchBubble.bubble = null;
                    for (var n = 1; n <= 50; n++)
                        for (var i = 1; i <= 10; i++)
                            this.map[n][i].color == this.map[e][t].color && (this.map[n][i].visited = !0);
                    this.BubbleFall()
                }
                ,
                t.prototype.ShootFireBubble = function (e, t) {
                    this.map[e][t].visited = !0,
                        this.BubbleFall()
                }
                ,
                t.prototype.JudgeBubbleFall = function (e, t, o) {
                    this.map[e][t].visited || (this.map[e][t].visited = !0,
                        this.count++,
                    this.map[e][t].multiply6 && (this.thereIsX6 = !0),
                        this.map[e][t].rightFlag ? (1 != e && null != this.map[e - 1][t + 1].bubble && this.map[e - 1][t + 1].color == o && this.JudgeBubbleFall(e - 1, t + 1, o),
                        9 != t && null != this.map[e][t + 1].bubble && this.map[e][t + 1].color == o && this.JudgeBubbleFall(e, t + 1, o),
                        null != this.map[e + 1][t + 1].bubble && this.map[e + 1][t + 1].color == o && this.JudgeBubbleFall(e + 1, t + 1, o),
                        null != this.map[e + 1][t].bubble && this.map[e + 1][t].color == o && this.JudgeBubbleFall(e + 1, t, o),
                        1 != t && null != this.map[e][t - 1].bubble && this.map[e][t - 1].color == o && this.JudgeBubbleFall(e, t - 1, o),
                        1 != e && null != this.map[e - 1][t].bubble && this.map[e - 1][t].color == o && this.JudgeBubbleFall(e - 1, t, o)) : (1 != e && 10 != t && null != this.map[e - 1][t].bubble && this.map[e - 1][t].color == o && this.JudgeBubbleFall(e - 1, t, o),
                        10 != t && null != this.map[e][t + 1].bubble && this.map[e][t + 1].color == o && this.JudgeBubbleFall(e, t + 1, o),
                        10 != t && null != this.map[e + 1][t].bubble && this.map[e + 1][t].color == o && this.JudgeBubbleFall(e + 1, t, o),
                        1 != t && null != this.map[e + 1][t - 1].bubble && this.map[e + 1][t - 1].color == o && this.JudgeBubbleFall(e + 1, t - 1, o),
                        1 != t && null != this.map[e][t - 1].bubble && this.map[e][t - 1].color == o && this.JudgeBubbleFall(e, t - 1, o),
                        1 != e && 1 != t && null != this.map[e - 1][t - 1].bubble && this.map[e - 1][t - 1].color == o && this.JudgeBubbleFall(e - 1, t - 1, o)))
                }
                ,
                t.prototype.BubbleFall = function () {
                    for (var e = 1; e <= 50; e++)
                        for (var t = 1; t <= 10; t++)
                            if (this.map[e][t].visited && null != this.map[e][t].bubble) {
                                var o = cc.instantiate(this.fallBubblePrefab);
                                if (o.parent = this.fallBubbleLayer,
                                    o.setPosition(this.map[e][t].bubble.position),
                                    o.getComponent("fallBubble").SetColor(this.map[e][t].color),
                                    this.thereIsX6)
                                    for (var n = 1; n <= 2; n++) {
                                        var i = cc.instantiate(this.fallBubblePrefab);
                                        i.parent = this.fallBubbleLayer,
                                            i.setPosition(this.map[e][t].bubble.position),
                                            i.getComponent("fallBubble").SetColor(this.map[e][t].color)
                                    }
                                this.map[e][t].bubble.destroy(),
                                    this.map[e][t].bubble = null,
                                    this.map[e][t].color = null,
                                    this.map[e][t].visited = !1,
                                    this.map[e][t].multiply6 = !1
                            }
                    this.thereIsX6 = !1,
                        this.JudgeConnectedBubble(),
                        this.NoConnectedBubbleFall(),
                    9 != this.readyToLaunchBubble.color && this.Recovery()
                }
                ,
                t.prototype.JudgeConnectedBubble = function () {
                    for (var e = 1; e <= 50; e++)
                        for (var t = 1; t <= 10; t++)
                            this.map[e][t].connected = !1;
                    for (t = 1; t <= 10; t++)
                        null != this.map[1][t].bubble && this.RecursionSetConnected(1, t)
                }
                ,
                t.prototype.RecursionSetConnected = function (e, t) {
                    this.map[e][t].connected || null != this.map[e][t].bubble && (this.map[e][t].connected = !0,
                        this.map[e][t].rightFlag ? (1 != e && this.RecursionSetConnected(e - 1, t + 1),
                        9 != t && this.RecursionSetConnected(e, t + 1),
                            this.RecursionSetConnected(e + 1, t + 1),
                            this.RecursionSetConnected(e + 1, t),
                        1 != t && this.RecursionSetConnected(e, t - 1),
                        1 != e && this.RecursionSetConnected(e - 1, t)) : (1 != e && 10 != t && this.RecursionSetConnected(e - 1, t),
                        10 != t && this.RecursionSetConnected(e, t + 1),
                        10 != t && this.RecursionSetConnected(e + 1, t),
                        1 != t && this.RecursionSetConnected(e + 1, t - 1),
                        1 != t && this.RecursionSetConnected(e, t - 1),
                        1 != e && 1 != t && this.RecursionSetConnected(e - 1, t - 1)))
                }
                ,
                t.prototype.NoConnectedBubbleFall = function () {
                    for (var e = 1; e <= 50; e++)
                        for (var t = 1; t <= 10; t++)
                            if (null != this.map[e][t].bubble && !this.map[e][t].connected) {
                                var o = cc.instantiate(this.fallBubblePrefab);
                                o.parent = this.fallBubbleLayer,
                                    o.setPosition(this.map[e][t].bubble.position),
                                    o.getComponent("fallBubble").SetColor(this.map[e][t].color),
                                    this.map[e][t].bubble.destroy(),
                                    this.map[e][t].bubble = null,
                                    this.map[e][t].color = null,
                                    this.map[e][t].visited = !1,
                                    this.map[e][t].multiply6 = !1
                            }
                }
                ,
                t.prototype.Recovery = function () {
                    this.count = 0;
                    for (var e = 1; e <= 50; e++)
                        for (var t = 1; t <= 10; t++)
                            this.map[e][t].visited = !1;
                    this.CreateReadyToLaunchBubble(),
                        this.CanClick()
                }
                ,
                t.prototype.CreateNewShootBubbles = function () {
                    for (var e = 50; e > 1; e--)
                        for (var t = 1; t <= 10; t++)
                            this.map[e][t].bubble = this.map[e - 1][t].bubble,
                                this.map[e][t].rightFlag = this.map[e - 1][t].rightFlag,
                                this.map[e][t].color = this.map[e - 1][t].color,
                                this.map[e][t].multiply6 = this.map[e - 1][t].multiply6,
                            null != this.map[e][t].bubble && this.map[e][t].bubble.getComponent("shootBubble").SetPosInMap(e, t);
                    if (this.createRightRow) {
                        for (t = 1; t <= 9; t++)
                            this.map[1][t].bubble = cc.instantiate(this.shootBubblePrefab),
                                this.map[1][t].bubble.parent = this.shootBubbleLayer,
                                this.map[1][t].bubble.setPosition(-360 + this.bubbleInterval + (t - 1) * this.bubbleInterval, .5 * cc.winSize.height + .5 * this.bubbleIntervalVertical),
                                this.map[1][t].color = Math.floor(Math.random() * this.bubbleColorRange + 1),
                                this.map[1][t].bubble.getComponent("shootBubble").SetColor(this.map[1][t].color),
                                this.map[1][t].bubble.getComponent("shootBubble").SetPosInMap(1, t),
                                this.map[1][t].rightFlag = !0,
                                this.map[1][t].multiply6 = !1,
                            Math.random() < .01 && this.level > 1e4 && (this.map[1][t].multiply6 = !0,
                                this.map[1][t].bubble.getComponent("shootBubble").multiply6.active = !0);
                        this.map[1][10].bubble = null,
                            this.map[1][10].color = null
                    } else
                        for (t = 1; t <= 10; t++)
                            this.map[1][t].bubble = cc.instantiate(this.shootBubblePrefab),
                                this.map[1][t].bubble.parent = this.shootBubbleLayer,
                                this.map[1][t].bubble.setPosition(.5 * this.bubbleInterval - 360 + (t - 1) * this.bubbleInterval, .5 * cc.winSize.height + .5 * this.bubbleIntervalVertical),
                                this.map[1][t].color = Math.floor(Math.random() * this.bubbleColorRange + 1),
                                this.map[1][t].bubble.getComponent("shootBubble").SetColor(this.map[1][t].color),
                                this.map[1][t].bubble.getComponent("shootBubble").SetPosInMap(1, t),
                                this.map[1][t].rightFlag = !1,
                                this.map[1][t].multiply6 = !1,
                            Math.random() < .01 && this.level > 1e4 && (this.map[1][t].multiply6 = !0,
                                this.map[1][t].bubble.getComponent("shootBubble").multiply6.active = !0);
                    this.createRightRow = !this.createRightRow
                }
                ,
                t.prototype.ColorCount = function () {
                    for (var e = [0], t = 1; t <= 4; t++)
                        e[t] = 0;
                    for (t = 1; t <= 50; t++)
                        for (var o = 1; o <= 10; o++)
                            null != this.map[t][o].bubble && e[this.map[t][o].color]++;
                    var n = -1
                        , i = 0;
                    for (t = 1; t <= 4; t++)
                        e[t] > n && (n = e[t],
                            i = t);
                    return cc.log("\u989c\u8272\u6700\u591a\u7684\u662f" + i),
                        i
                }
                ,
                t.prototype.SpecialColorCount = function (e) {
                    for (var t = 0, o = 1; o <= 50; o++)
                        for (var n = 1; n <= 10; n++)
                            null != this.map[o][n].bubble && this.map[o][n].color == e && t++;
                    return t
                }
                ,
                t.prototype.OnClick = function (e) {
                    this.lowerGuideBubblePicY = 9999;
                    var t = e.getLocation().y;
                    e.getLocation().y <= 130 && (t = 130),
                        t -= .5 * cc.winSize.height;
                    var o = cc.v2(e.getLocation().x - 360, t);
                    this.node.getComponent("lineItem").updateLine(this.readyToLaunchBubblePos, this.GetAngle(o, this.readyToLaunchBubblePos), this.node, 0)
                }
                ,
                t.prototype.TouchMove = function (e) {
                    this.lowerGuideBubblePicY = 9999;
                    var t = e.getLocation().y;
                    e.getLocation().y <= 130 && (t = 130),
                        t -= .5 * cc.winSize.height;
                    var o = cc.v2(e.getLocation().x - 360, t);
                    this.node.getComponent("lineItem").updateLine(this.readyToLaunchBubblePos, this.GetAngle(o, this.readyToLaunchBubblePos), this.node, 0)
                }
                ,
                t.prototype.OffClick = function (e) {
                    this.guideHand.active = !1,
                    9 == this.readyToLaunchBubble.color && (this.comboCount++,
                        this.ComboShow()),
                    this.canPlaySound && cc.audioEngine.play(this.launchAudio, !1, 1),
                        this.node.getComponent("lineItem").endLine();
                    var t = e.getLocation().y;
                    e.getLocation().y <= 130 && (t = 130);
                    var o = cc.v2(e.getLocation().x - 360, t - 110);
                    o = o.normalize(),
                        this.readyToLaunchBubble.bubble.getComponent(cc.RigidBody).linearVelocity = o.mul(3e3),
                        this.bubbleStartMove = !0,
                        this.CanNotClick()
                }
                ,
                t.prototype.MovePresent = function () {
                    this.present.stopAllActions();
                    var e = cc.v2(400 - (this.level - this.lastPresentScore) / (this.presentScore - this.lastPresentScore) * 670, -40);
                    this.present.runAction(cc.moveTo(.2, e))
                }
                ,
                t.prototype.CreateRainbowPic = function () {
                    this.canNotClickFlag = !0,
                        this.CanNotClick(),
                        this.giftPic.zIndex = 10,
                        this.giftPic.scale = .2,
                        this.giftPic.opacity = 255,
                        this.giftPic.setPosition(-270, -.5 * cc.winSize.height + 220 - 40),
                        this.giftPic.runAction(cc.sequence(cc.spawn(cc.bezierTo(.3, [cc.v2(-270, -.5 * cc.winSize.height + 220 - 40), cc.v2(200 * Math.random() - 270 - 100, -.5 * cc.winSize.height + 220 - 40 + 200 * Math.random() - 100), cc.v2(0, 0)]), cc.scaleTo(.3, 1.2)), cc.callFunc(function () {
                            this.giftPic.opacity = 0,
                                this.giftOpenPic.zIndex = 10,
                                this.giftOpenPic.opacity = 255,
                                this.giftOpenPic.getComponent(dragonBones.ArmatureDisplay).timeScale = 2,
                                this.giftOpenPic.getComponent(dragonBones.ArmatureDisplay).playAnimation("newAnimation", 1),
                                this.giftOpenPic.runAction(cc.sequence(cc.delayTime(1), cc.fadeOut(.3)))
                        }, this))),
                        this.scheduleOnce(function () {
                            var e = cc.instantiate(this.rainbowPicPrefab);
                            e.parent = this.fallBubbleLayer,
                                e.scale = 2.5,
                                e.zIndex = 10,
                                e.setPosition(0, 100),
                                e.runAction(cc.sequence(cc.spawn(cc.jumpTo(.5, cc.v2(-55, -.5 * cc.winSize.height + 110 - 15), 350, 1), cc.rotateBy(.5, 360), cc.sequence(cc.scaleTo(.15, 3.5), cc.scaleTo(.35, 1))), cc.callFunc(function () {
                                    this.canNotClickFlag = !1,
                                        this.CanClick()
                                }, this), cc.removeSelf()))
                        }, 1.05)
                }
                ,
                t.prototype.ComboShow = function () {
                    this.comboCount >= 2 && (this.comboLabel.string = this.comboCount.toString(),
                        this.comboNode.setPosition(this.comboNodePos),
                        this.comboNode.stopAllActions(),
                        this.comboNode.scale = 0,
                        this.comboNode.opacity = 255,
                        this.comboNode.angle = 20 * Math.random() - 10,
                        this.comboNode.runAction(cc.sequence(cc.scaleTo(.15, 1.1), cc.scaleTo(.05, .9), cc.scaleTo(.05, 1), cc.delayTime(.5), cc.fadeOut(.5))),
                    this.comboCount % 10 == 0 && (this.readyToLaunchBubble.color = 9,
                        this.needHelp = !1,
                    this.firstFireBall && 0 == cc.find("Canvas").getComponent("dataJs").huoqu() && (this.firstFireBall = !1,
                        this.guideHand.active = !0),
                        this.comboNode.stopAllActions(),
                        this.comboNode.runAction(cc.sequence(cc.scaleTo(.15, 1.1), cc.scaleTo(.05, .9), cc.scaleTo(.05, 1), cc.spawn(cc.moveTo(.2, 0, 0), cc.rotateTo(.2, 0), cc.scaleTo(.2, 1.3)), cc.delayTime(.3), cc.spawn(cc.moveTo(.3, this.readyToLaunchBubblePos).easing(cc.easeIn(1)), cc.fadeTo(.3, 100).easing(cc.easeIn(1)), cc.scaleTo(.3, .3)))),
                        this.canNotClickFlag = !0,
                        this.CanNotClick(),
                        this.scheduleOnce(function () {
                            this.readyToLaunchBubble.bubble.getComponent("launchBubble").SetColor(9),
                                this.canNotClickFlag = !1,
                                this.CanClick()
                        }, 1.05)))
                }
                ,
                t.prototype.ChangeDifficult = function () {
                    this.bubbleColorRange = 2
                }
                ,
                t.prototype.CanClick = function () {
                    this.canNotClickFlag || this.gameOverFlag || (this.node.on(cc.Node.EventType.TOUCH_START, this.OnClick, this),
                        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.TouchMove, this),
                        this.node.on(cc.Node.EventType.TOUCH_END, this.OffClick, this),
                        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.OffClick, this))
                }
                ,
                t.prototype.CanNotClick = function () {
                    this.node.off(cc.Node.EventType.TOUCH_START, this.OnClick, this),
                        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.TouchMove, this),
                        this.node.off(cc.Node.EventType.TOUCH_END, this.OffClick, this),
                        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.OffClick, this)
                }
                ,
                t.prototype.Suspend = function () {
                    this.continueBtn.active = !0,
                        this.blackBg.active = !0,
                        this.CanNotClick(),
                        cc.director.pause()
                }
                ,
                t.prototype.Continue = function () {
                    cc.director.resume(),
                        this.blackBg.active = !1,
                        this.continueBtn.active = !1,
                        this.CanClick()
                }
                ,
                t.prototype.GetAngle = function (e, t) {
                    var o = Math.atan2(e.y - t.y, e.x - t.x);
                    return 180 / Math.PI * o
                }
                ,
                t.prototype.CalculateDistance = function (e, t) {
                    return Math.sqrt((e.x - t.x) * (e.x - t.x) + (e.y - t.y) * (e.y - t.y))
                }
                ,
                t.prototype.SaveData = function () {
                    "undefined" != JSON.parse(cc.sys.localStorage.getItem("playerData_BubbleShooter")) && JSON.parse(cc.sys.localStorage.getItem("playerData_BubbleShooter")) && /[^\s]/.test(cc.sys.localStorage.getItem("playerData_BubbleShooter")) || (cc.log("\u6ca1\u6709\u8bb0\u5f55"),
                        cc.sys.localStorage.setItem("playerData_BubbleShooter", JSON.stringify(this.historyScore))),
                        this.historyScore = JSON.parse(cc.sys.localStorage.getItem("playerData_BubbleShooter")),
                        this.historyScore.push(this.level),
                        this.historyScore.sort(function (e, t) {
                            return t - e
                        }),
                        cc.sys.localStorage.setItem("playerData_BubbleShooter", JSON.stringify(this.historyScore)),
                        cc.log(this.historyScore),
                        this.posInJb = this.historyScore.indexOf(this.level)
                }
                ,
                t.prototype.update = function () {
                    if (this.bubbleStartMove && !this.canNotClickFlag) {
                        for (var e = 0, t = 9999, o = 0, n = 1; n <= 50; n++)
                            for (var i = 1; i <= 10; i++)
                                if (null != this.map[n][i].bubble) {
                                    if (o++,
                                    n > e && (e = n),
                                    .2 == this.bubbleMoveSpeed && (this.map[n][i].bubble.y -= this.bubbleMoveSpeed),
                                    .25 == this.bubbleMoveSpeed && (this.map[n][i].bubble.y -= this.bubbleMoveSpeed),
                                    this.map[n][i].bubble.y < t && (t = this.map[n][i].bubble.y),
                                    this.map[n][i].bubble.y <= -.5 * cc.winSize.height + 220 + .5 * this.bubbleInterval) {
                                        this.bubbleStartMove = !1,
                                            this.gameOverFlag = !0,
                                            this.CanNotClick(),
                                            this.GameOverShow(),
                                            this.SaveData();
                                        break
                                    }
                                    if (this.gameOverFlag)
                                        break
                                }
                        this.bubbleMoveSpeed = e < 7 || o < 45 ? 5 : .2;
                        var c = !1;
                        if (5 == this.bubbleMoveSpeed)
                            for (var r = 1; r <= 25; r++) {
                                for (e = 0,
                                         n = 1; n <= 50; n++)
                                    for (i = 1; i <= 10; i++)
                                        null != this.map[n][i].bubble && n > e && (e = n);
                                if (e < 7 || o < 45) {
                                    for (n = 1; n <= 50; n++)
                                        for (i = 1; i <= 10; i++)
                                            null != this.map[n][i].bubble && (this.map[n][i].bubble.y -= .2);
                                    this.bubbleMoveDistance += .2
                                } else
                                    c = !0,
                                        this.bubbleMoveSpeed = .2;
                                if (this.bubbleMoveDistance >= this.bubbleIntervalVertical && (this.bubbleMoveDistance = 0,
                                    this.CreateNewShootBubbles()),
                                    c)
                                    break
                            }
                        else
                            this.bubbleMoveDistance += .2;
                        this.bubbleMoveDistance >= this.bubbleIntervalVertical && (this.bubbleMoveDistance = 0,
                            this.CreateNewShootBubbles()),
                            t - (-.5 * cc.winSize.height + 220) < 255 ? this.redPic.opacity = 5 * (255 - (t - (-.5 * cc.winSize.height + 220))) : this.redPic.opacity = 0,
                        8 != this.nextBubbleColor && this.nextBubblePic.getComponent("nextBubblePic").SetColor(this.nextBubbleColor)
                    }
                }
                ,
                t.prototype.GameOverShow = function () {
                    for (var e = function (e) {
                        for (var o = function (o) {
                            null != t.map[e][o].bubble && t.scheduleOnce(function () {
                                if (null != this.map[e][o].bubble) {
                                    var t = cc.instantiate(this.exFallBubblePrefab);
                                    t.parent = this.fallBubbleLayer,
                                        t.setPosition(this.map[e][o].bubble.position),
                                        t.getComponent("exFallBubble").SetColor(this.map[e][o].color),
                                        this.map[e][o].bubble.active = !1
                                }
                            }, 1 * Math.random() + .1)
                        }, n = 1; n <= 10; n++)
                            o(n)
                    }, t = this, o = 50; o >= 1; o--)
                        e(o);
                    this.scheduleOnce(function () {
                        this.gameOverNode.active = !0
                    }, 3)
                }
                ,
                t.prototype.InitialShape_Xing = function () {
                    this.map[2][2].color = 1,
                        this.map[2][4].color = 1,
                        this.map[2][8].color = 1,
                        this.map[3][3].color = 1,
                        this.map[3][5].color = 1,
                        this.map[3][8].color = 1,
                        this.map[4][3].color = 1,
                        this.map[4][5].color = 1,
                        this.map[4][7].color = 1;
                    for (var e = 2; e <= 8; e++)
                        this.map[6][e].color = 1;
                    this.map[8][3].color = 1,
                        this.map[8][7].color = 1,
                        this.map[9][3].color = 1,
                        this.map[9][8].color = 1;
                    for (var t = 1; t <= 50; t++)
                        for (e = 1; e <= 10; e++)
                            null != this.map[t][e].bubble && this.map[t][e].bubble.getComponent("shootBubble").SetColor(this.map[t][e].color)
                }
                ,
                t.prototype.InitialShape_Huo = function () {
                    this.map[2][6].color = 1,
                        this.map[2][7].color = 1,
                        this.map[2][3].color = 1,
                        this.map[3][3].color = 1,
                        this.map[3][4].color = 1,
                        this.map[3][6].color = 1,
                        this.map[3][7].color = 1,
                        this.map[4][3].color = 1,
                        this.map[4][5].color = 1,
                        this.map[4][6].color = 1,
                        this.map[4][8].color = 1,
                        this.map[4][9].color = 1,
                        this.map[5][5].color = 1,
                        this.map[5][6].color = 1,
                        this.map[5][8].color = 1,
                        this.map[5][9].color = 1,
                        this.map[6][4].color = 1,
                        this.map[6][5].color = 1,
                        this.map[6][6].color = 1,
                        this.map[7][4].color = 1,
                        this.map[7][5].color = 1,
                        this.map[7][6].color = 1,
                        this.map[7][7].color = 1,
                        this.map[8][3].color = 1,
                        this.map[8][4].color = 1,
                        this.map[8][6].color = 1,
                        this.map[8][7].color = 1,
                        this.map[8][8].color = 1,
                        this.map[9][2].color = 1,
                        this.map[9][3].color = 1,
                        this.map[9][4].color = 1,
                        this.map[9][7].color = 1,
                        this.map[9][8].color = 1;
                    for (var e = 1; e <= 50; e++)
                        for (var t = 1; t <= 10; t++)
                            null != this.map[e][t].bubble && this.map[e][t].bubble.getComponent("shootBubble").SetColor(this.map[e][t].color)
                }
                ,
                t.prototype.InitialShape_2022 = function () {
                    this.map[2][2].color = 1,
                        this.map[2][3].color = 1,
                        this.map[2][7].color = 1,
                        this.map[2][8].color = 1,
                        this.map[2][9].color = 1,
                        this.map[3][2].color = 1,
                        this.map[3][4].color = 1,
                        this.map[3][7].color = 1,
                        this.map[3][10].color = 1,
                        this.map[4][3].color = 1,
                        this.map[4][6].color = 1,
                        this.map[4][9].color = 1,
                        this.map[5][3].color = 1,
                        this.map[5][6].color = 1,
                        this.map[5][9].color = 1,
                        this.map[6][2].color = 1,
                        this.map[6][3].color = 1,
                        this.map[6][4].color = 1,
                        this.map[6][6].color = 1,
                        this.map[6][7].color = 1,
                        this.map[6][8].color = 1,
                        this.map[8][2].color = 1,
                        this.map[8][3].color = 1,
                        this.map[8][6].color = 1,
                        this.map[8][7].color = 1,
                        this.map[9][2].color = 1,
                        this.map[9][4].color = 1,
                        this.map[9][6].color = 1,
                        this.map[9][8].color = 1,
                        this.map[10][3].color = 1,
                        this.map[10][7].color = 1,
                        this.map[11][3].color = 1,
                        this.map[11][7].color = 1,
                        this.map[12][2].color = 1,
                        this.map[12][3].color = 1,
                        this.map[12][4].color = 1,
                        this.map[12][6].color = 1,
                        this.map[12][7].color = 1,
                        this.map[12][8].color = 1;
                    for (var e = 1; e <= 50; e++)
                        for (var t = 1; t <= 10; t++)
                            null != this.map[e][t].bubble && this.map[e][t].bubble.getComponent("shootBubble").SetColor(this.map[e][t].color)
                }
                ,
                t.Instance = null,
                c([s(cc.Node)], t.prototype, "nextBubblePic", void 0),
                c([s(cc.Node)], t.prototype, "shootBubbleLayer", void 0),
                c([s(cc.Node)], t.prototype, "fallBubbleLayer", void 0),
                c([s(cc.Node)], t.prototype, "present", void 0),
                c([s(cc.Node)], t.prototype, "suspendBtn", void 0),
                c([s(cc.Node)], t.prototype, "continueBtn", void 0),
                c([s(cc.Node)], t.prototype, "soundBtn", void 0),
                c([s(cc.Node)], t.prototype, "blackBg", void 0),
                c([s(cc.Node)], t.prototype, "comboNode", void 0),
                c([s(cc.Label)], t.prototype, "comboLabel", void 0),
                c([s(cc.Node)], t.prototype, "guideHand", void 0),
                c([s(cc.Node)], t.prototype, "redPic", void 0),
                c([s(cc.Node)], t.prototype, "giftPic", void 0),
                c([s(cc.Node)], t.prototype, "giftOpenPic", void 0),
                c([s(cc.Node)], t.prototype, "gameOverNode", void 0),
                c([s(cc.Prefab)], t.prototype, "exFallBubblePrefab", void 0),
                c([s(cc.Prefab)], t.prototype, "launchBubblePrefab", void 0),
                c([s(cc.Prefab)], t.prototype, "shootBubblePrefab", void 0),
                c([s(cc.Prefab)], t.prototype, "fallBubblePrefab", void 0),
                c([s(cc.Prefab)], t.prototype, "rainbowPicPrefab", void 0),
                c([s({
                    type: cc.AudioClip
                })], t.prototype, "launchAudio", void 0),
                o = c([a], t)
        }(cc.Component);
        o.default = h,
            cc._RF.pop()
    }
        , {}],
    GameUiTools: [function (e, t) {
        "use strict";
        cc._RF.push(t, "b21e8tF461OFalpptyeuAE2", "GameUiTools"),
            e("GameConfig");
        var o = {
            newSprite: function (e, t) {
                var o = new cc.Node;
                return t ? (e = e.split(".")[0],
                    o.addComponent(cc.Sprite).spriteFrame = GameTools.love2048FrameCache.getSpriteFrame(e)) : o.addComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame("res/raw-assets/resources/" + e),
                    o
            },
            setNodeSpriteFrame: function (e, t) {
                e.getComponent(cc.Sprite).spriteFrame = GameTools.love2048FrameCache.getSpriteFrame(t)
            },
            setButtonClickEvents: function (e, t, o, n, i) {
                var c = new Array;
                null == t.length ? c[0] = t : c = t;
                for (var r = 0; r < c.length; r++) {
                    var a = new cc.Component.EventHandler;
                    a.target = e.node,
                        a.component = e.node.name,
                        a.handler = o,
                        null == t.length ? a.customEventData = n : a.customEventData = r;
                    var s = c[r].addComponent(cc.Button);
                    s.clickEvents.push(a),
                    (null == i || i) && (s.transition = cc.Button.Transition.SCALE,
                        s.duration = .1,
                        s.zoomScale = 1.2)
                }
            },
            scheduleOnce: function (e, t, o) {
                e.runAction(cc.sequence(cc.delayTime(o), cc.callFunc(t, e)))
            },
            loadingScene: function (e, t) {
                t ? cc.loader.loadRes("panel/LoadingLayer", function (t, o) {
                    var n = cc.instantiate(o);
                    cc.director.getScene().children[0].addChild(n),
                        cc.director.preloadScene(e, function () {
                            cc.director.loadScene(e)
                        })
                }) : cc.director.preloadScene(e, function () {
                    cc.director.loadScene(e)
                })
            },
            loadingLayer: function (e) {
                cc.loader.loadRes(e, function (e, t) {
                    if (!e) {
                        var o = cc.instantiate(t);
                        cc.director.getScene().children[0].addChild(o, 100)
                    }
                })
            }
        };
        t.exports = o,
            cc._RF.pop()
    }
        , {
            GameConfig: "GameConfig"
        }],
    HttpManagerJs: [function (e, t) {
        "use strict";
        var o;
        cc._RF.push(t, "197e1hfNnxIcJx73V3VhUxY", "HttpManagerJs");
        var n = e("GameConfig")
            , i = ((o = {
            URL: "http://www.wesane.com/h5service.php/Interface/services",
            cacheList: null,
            isBusy: null,
            req: null,
            perform: null,
            retGameId: 0
        }).cacheList = [],
            o.ctor = function () {
            }
            ,
            o.checkHave = function () {
                this.isBusy || this.sendOne()
            }
            ,
            o.httpInitUrl = function (e) {
                console.log("data", this.URL),
                    this.retGameId = e
            }
            ,
            o.send = function (e, t, o, n) {
                this.cacheList.push({
                    type: e,
                    data: t,
                    func: o,
                    target: n
                }),
                this.isBusy || this.sendOne()
            }
            ,
            o.sendOne = function () {
                if (0 != this.cacheList.length) {
                    this.isBusy = !0,
                        this.perform = this.cacheList.shift(),
                        this.req = cc.loader.getXMLHttpRequest(),
                        this.req.onreadystatechange = this.onDataHandler.bind(this),
                        this.req.onerror = this.onErrorHandler.bind(this),
                        this.req.ontimeout = this.onTimeoutHandler.bind(this),
                        this.req.timeout = 2e3,
                        cc.log("pos", this.URL),
                        this.req.open("POST", this.URL),
                        this.req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
                    var e = this.returnLanguage();
                    console.log("gameIdid", this.retGameId);
                    var t = this.retGameId
                        , o = {
                        type: this.perform.type,
                        gid: t,
                        mid: null,
                        data: this.perform.data,
                        languageType: e
                    }
                        , n = "send=" + JSON.stringify(o);
                    this.req.send(n)
                }
            }
            ,
            o.onDataHandler = function () {
                if (404 != this.req.status) {
                    if (4 == this.req.readyState && this.req.status >= 200 && this.req.status <= 207 && this.req.responseText) {
                        var e = JSON.parse(this.req.responseText);
                        this.isBusy = !1,
                            this.perform.target ? this.perform.func.call(this.perform.target, e.error, e.data, e.commendGame, e.gameInfo) : this.perform.func(e)
                    }
                } else {
                    var t = n.launchScene
                        , o = n.Bros;
                    n.caS,
                        cc.director.loadScene(t, null, function () {
                            if (o) {
                                var e = document.getElementById("GameDiv");
                                e && (e.style.backgroundImage = "")
                            }
                            cc.loader.onProgress = null,
                                console.log("Success to load scene: " + t)
                        })
                }
            }
            ,
            o.returnLanguage = function () {
                return ("" + window.navigator.language).toLocaleLowerCase()
            }
            ,
            o.onErrorHandler = function () {
                cc.log("\u7f51\u7edc\u9519\u8bef"),
                    this.isBusy = !1,
                    this.perform.target ? this.perform.func.call(this.perform.target, -1) : this.perform.func(-1)
            }
            ,
            o.onTimeoutHandler = function () {
                cc.log("\u8bf7\u6c42\u8d85\u65f6"),
                    this.isBusy = !1,
                    this.perform.target ? this.perform.func.call(this.perform.target, -1) : this.perform.func(-1)
            }
            ,
            o.clearAll = function () {
                for (var e = this.cacheList.length, t = 0; t < e; t++) {
                    var o = this.cacheList[t];
                    o && (o.target ? o.func.call(o.target, -1) : o.func(-1))
                }
                this.cacheList.length = 0
            }
            ,
            o);
        t.exports = i,
            cc._RF.pop()
    }
        , {
            GameConfig: "GameConfig"
        }],
    LanguageSetJs: [function (e, t) {
        "use strict";
        cc._RF.push(t, "4754e8KuPZJCqklCNyKpG29", "LanguageSetJs"),
            t.exports = {
                language_1: {
                    game_name: "\u300c\u5c04\u82f9\u679c\u300d",
                    game_name1: "\u5c04\u82f9\u679c",
                    game_info: "\u628a\u63e1\u65f6\u673a\uff0c\u5c04\u4e2d\u82f9\u679c\u3002",
                    txtStart: "\u5f00\u59cb",
                    txtMore: "\u66f4\u591a\u6e38\u620f",
                    txtAgain: "\u518d\u73a9\u4e00\u6b21",
                    txtShare1: "\u5728\u6e38\u620f\u4e2d ",
                    txtShare2: "\u5f97\u5206\u4e86\uff0c\u597d\u554a!\u4f60\u548c\u6211\u4e00\u8d77\u6765\u6bd4\u8d5b!",
                    bgRgb: "#3698C5",
                    gameT1: "\u5173\u6ce8\u6211\u4eec",
                    gameT2: "\u7eb8\u724c\u63a5\u9f99",
                    gameT3: "\u9526\u4e0a\u6dfb\u82b1",
                    gameUrl1: "http://g.regogame.com/game/9/",
                    gameUrl2: "http://g.regogame.com/game/3/",
                    gameT11: "\u5173\u6ce8\u5fae\u4fe1",
                    gameT12: "\u5173\u6ce8Kakao",
                    gameT13: "\u5173\u6ce8Line",
                    gameEndL: "\u6e38 \u620f \u7ed3 \u675f",
                    gameEndL1: "\u7a0d \u5019 \u67e5 \u770b \u5206 \u6570"
                },
                language_2: {
                    game_name: "\u300cShot Apples\u300d",
                    game_name1: "Shot Apples",
                    game_info: "Seize the opportunity and shoot the apple.",
                    txtStart: "Start",
                    txtMore: "More Game",
                    txtAgain: "Play Again",
                    txtShare1: "In Game ",
                    txtShare2: " Let's play together!",
                    bgRgb: "#3698C5",
                    gameT1: "Follow Us",
                    gameT2: "Thousand Flower",
                    gameT3: "Eliminate Star",
                    gameUrl1: "http://g.fromgame.com/game/53",
                    gameUrl2: "http://g.fromgame.com/game/13",
                    gameT11: "Focus WeChat",
                    gameT12: "Focus Kakao",
                    gameT13: "Focus Line",
                    gameEndL: "Game OVer",
                    gameEndL1: "View the score later"
                }
            },
            cc._RF.pop()
    }
        , {}],
    LoadSceneJs: [function (e, t) {
        "use strict";
        cc._RF.push(t, "3ef908fwfNIwJsOjET8tCh2", "LoadSceneJs");
        var o = {
            goToCover: function (e, t, o, n, i) {
                var c = e;
                c = null == c || null == c || e,
                    console.log("LoadBoolBeforeLoadS", c),
                    this.needShow = !1,
                    c && c ? (this.needShow = !0,
                        showMyAds()) : this.needShow = !1,
                    this.needShow ? (null == preloader && this.startGoToGame(o, n, i),
                        resCompleteFlag = !0,
                    adCompleteFlag && resCompleteFlag && this.startGoToGame(o, n, i)) : this.startGoToGame(o, n, i)
            },
            startGoToGame: function () {
                console.log("goToScene"),
                    noAdGoToScene()
            }
        };
        t.exports = o,
            cc._RF.pop()
    }
        , {}],
    MainGameJS: [function (e, t) {
        "use strict";
        cc._RF.push(t, "0e7a8SkMLxEY7nCB1Bqi8WZ", "MainGameJS");
        var o = e("GameConfig")
            , n = e("GameUiTools")
            , i = e("MainManage");
        cc.Class({
            extends: cc.Component,
            properties: {
                gameEndLay: cc.Node,
                startBgNode: cc.Node,
                sceneScore: cc.Label,
                gameOverT1: cc.Label,
                gameOverT2: cc.Label,
                gameOverToEnd: cc.Node
            },
            onLoad: function () {
                this.platFromNum = 1,
                    this.judgeCurPlatform(),
                    this.adapterScreen(),
                    cc.director.getCollisionManager().enabled = !0,
                    cc.director.getPhysicsManager().enabled = !0,
                    this.gameOveEndBool = !1,
                    this.gameOverNum = 0,
                    this.gameWidth = cc.winSize.width,
                    this.gameHeight = cc.winSize.height,
                    o.playNum,
                    o.playNum++,
                    n.loadingLayer("panel/LinkIconSpr"),
                    o.mainGameJs = this,
                o.publicGameBool || this.play()
            },
            judgeCurPlatform: function () {
                console.log(navigator.userAgent);
                var e, t, o, n, i, c, r, a = (e = navigator.userAgent,
                    t = /(?:Windows Phone)/.test(e),
                    o = /(?:SymbianOS)/.test(e) || t,
                    n = /(?:Android)/.test(e),
                    i = /(?:Firefox)/.test(e),
                    /(?:Chrome|CriOS)/.test(e),
                    {
                        isTablet: c = /(?:iPad|PlayBook)/.test(e) || n && !/(?:Mobile)/.test(e) || i && /(?:Tablet)/.test(e),
                        isPhone: r = /(?:iPhone)/.test(e) && !c,
                        isAndroid: n,
                        isPc: !r && !n && !o
                    });
                a.isAndroid || a.isPhone ? this.platFromNum = 1 : a.isTablet ? this.platFromNum = 2 : a.isPc && (this.platFromNum = 3)
            },
            adapterScreen: function () {
                var e = cc.find("Canvas").getComponent(cc.Canvas);
                2 == this.platFromNum || 3 == this.platFromNum ? (e.fitWidth = !0,
                    e.fitHeight = !0) : (e.fitWidth = !0,
                    e.fitHeight = !1)
            },
            play: function () {
                console.log(1);
                var e = this;
                adBreak({
                    type: "next",
                    name: "restart-game",
                    beforeBreak: function () {
                        e.enableButtons()
                    },
                    afterBreak: function () {
                        e.enableButtons()
                    }
                })
            },
            enableButtons: function () {
            },
            addTouchEvents: function () {
                var e = this;
                this.node.on(cc.Node.EventType.TOUCH_START, function (t) {
                    if (o.GAME_OVER_BOOL && o.noTouchBool)
                        return o.gameScore++,
                            e.sceneScore.string = o.gameScore,
                            console.log("ggoog", o.gameScore),
                        o.gameScore >= 2 && (this.lastPos = t.getLocation(),
                            e.gameEnd()),
                            !0
                }, this),
                    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.on_touch_move, this),
                    this.node.on(cc.Node.EventType.TOUCH_END, this.on_touch_end, this)
            },
            on_touch_move: function () {
                console.log("touchMoved")
            },
            on_touch_end: function () {
                console.log("touchEnd")
            },
            gameEnd: function () {
                o.GAME_OVER_BOOL = !1,
                    i.gameOverShowText(o.gameScore, 1),
                    this.node.runAction(cc.sequence(cc.delayTime(.5), cc.callFunc(this.gameEnd1.bind(this))))
            },
            returnCurrentLanType: function () {
                var e = 1;
                switch (cc.sys.language) {
                    case cc.sys.LANGUAGE_CHINESE:
                        "zh-TW" == window.navigator.language || "zh-tw" == window.navigator.language || "zh-HK" == window.navigator.language || "zh-hk" == window.navigator.language ? (cc.log("\u7e41\u4f53"),
                            e = 2) : (cc.log("\u7b80\u4f53"),
                            e = 1);
                        break;
                    case cc.sys.LANGUAGE_KOREAN:
                        e = 4;
                        break;
                    default:
                        e = 3
                }
                return e
            },
            gameEnd1: function () {
                var e = this
                    , t = this.returnCurrentLanType();
                1 == t ? (this.gameOverT1.string = "\u6e38 \u620f \u7ed3 \u675f",
                    this.gameOverT2.string = "\u70b9 \u51fb \u67e5 \u770b \u5206 \u6570") : 2 == t ? (this.gameOverT1.string = "\u904a \u6232 \u7d50 \u675f",
                    this.gameOverT2.string = "\u9ede \u64ca \u67e5 \u770b \u5206 \u6578") : 4 == t ? (this.gameOverT1.string = "\uac8c\uc784 \uc885\ub8cc",
                    this.gameOverT2.string = "\ud074\ub9ad \ud558\uc5ec \uc810\uc218 \ubcf4\uae30") : (this.gameOverT1.string = "Game Over",
                    this.gameOverT2.string = "Click to view the score"),
                    this.gameOveEndBool = !0,
                    this.gameOverT1.node.zIndex = 999,
                    this.gameOverT2.node.zIndex = 999,
                    this.gameOverToEnd.zIndex = 999,
                    this.gameOverT1.node.opacity = 0,
                    this.gameOverT1.node.y = 100,
                    this.gameOverToEnd.y = 0,
                    this.gameOverT1.node.runAction(cc.sequence(cc.delayTime(.2), cc.spawn(cc.fadeIn(1), cc.moveBy(1, 0, -50)), cc.delayTime(.3))),
                    this.gameOverToEnd.runAction(cc.sequence(cc.fadeTo(1, 100), cc.callFunc(function () {
                        e.gameOverToEnd.getComponent(cc.Button).enabled = !0
                    }))),
                    this.gameOverT2.node.opacity = 0,
                    this.gameOverT2.node.y = this.gameOverT1.node.y - 100,
                    this.gameOverT2.node.runAction(cc.sequence(cc.delayTime(.2), cc.spawn(cc.fadeIn(1), cc.moveBy(1, 0, -50)), cc.delayTime(.3))),
                    this.gameOverT2.node.runAction(cc.sequence(cc.delayTime(2), cc.scaleTo(.3, 1.2).easing(cc.easeSineInOut()), cc.scaleTo(.3, 1).easing(cc.easeSineInOut()))).repeatForever()
            },
            initEndLayer: function () {
                this.gameOverT1.node.active = !1,
                    this.gameOverT2.node.active = !1,
                    this.gameOverToEnd.active = !1,
                o.publicGameBool || adBreak({
                    type: "next",
                    name: "restart-game"
                }),
                    i.gotoEndLayer1()
            },
            start: function () {
            },
            update: function () {
                this.gameOverGoToOVer()
            },
            gameOverGoToOVer: function () {
                this.gameOveEndBool && (this.gameOverNum++,
                this.gameOverNum >= 900 && (this.gameOverNum = 0,
                    this.gameOveEndBool = !1))
            },
            SetScore: function (e) {
                o.gameScore = e
            },
            RestartGame: function () {
                o.GAME_OVER_BOOL = !0,
                    o.gameScore = 0,
                o.publicGameBool || adBreak({
                    type: "next",
                    name: "restart-game"
                }),
                    n.loadingScene("MainGameScene")
            },
            addId: function () {
                adBreak({
                    type: "next",
                    name: "restart-game"
                })
            },
            SetGameEndScore: function () {
                i.gameOverShowText(o.gameScore, 1)
            },
            GetGameEndInfo: function () {
                return i.endHttpShowInfo
            }
        }),
            cc._RF.pop()
    }
        , {
            GameConfig: "GameConfig",
            GameUiTools: "GameUiTools",
            MainManage: "MainManage"
        }],
    MainManage: [function (e, t) {
        "use strict";
        cc._RF.push(t, "946adGkxvdBmZXnlD952XtK", "MainManage");
        var o = e("HttpManagerJs")
            , n = e("LanguageSetJs")
            , i = e("GameConfig")
            , c = e("LoadSceneJs")
            , r = (e("GameUiTools"),
            {
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
                init: function (e, t, n) {
                    if (!i.publicGameBool) {
                        if (i.playNum >= 1)
                            return;
                        i.playNum++
                    }
                    i.launchScene = e,
                        i.Bros = t,
                        i.caS = n,
                        this.curType = 1,
                        this.getHttpGameId(),
                        this.gamePV_load(),
                        console.log("thisg", this.gameHttpId),
                        o.httpInitUrl(this.gameHttpId);
                    var r = this.initLanguage();
                    this.gameNameText = r.game_name,
                        this.gameInfoText = r.game_info,
                        this.txtStartText = r.txtStart,
                        this.txtMoreText = r.txtMore,
                        this.txtAgainText = r.txtAgain,
                        this.gameEndLText = r.gameEndL,
                        this.gameEndL1Text = r.gameEndL1,
                        this.bgLayRgb = r.bgRgb,
                        this.gameEndName1 = r.gameT2,
                        this.gameEndName2 = r.gameT3,
                        this.gameEndUrl1 = r.gameUrl1,
                        this.gameEndUrl2 = r.gameUrl2,
                        this.langugeType = this.curType,
                        c.goToCover(this.adShowBefore, this.adShowAfter, e, t, n)
                },
                getHttpGameId: function () {
                    var e = window.location.href
                        , t = e.substring(0, e.lastIndexOf("//") + 2)
                        , o = window.location.host
                        , n = t + o + "/Service/Share/index";
                    this.gameAllHttp = n,
                        cc.log("gameAll", this.gameAllHttp),
                        this.subScoreHttp = t + o + "/Service/Score/index",
                        this.gamePvHttp = t + o + "/Service/GamePv/index";
                    var i = document.URL
                        , c = 0
                        , r = i.substring(i.lastIndexOf("/game/") + 1, i.length).split("/");
                    r.length >= 2 && (c = r[1]),
                        this.gameHttpId = c,
                        cc.log("gameId", c),
                        e.substring(e.lastIndexOf("//") + 4, e.lastIndexOf("com") + 3),
                        this.moreGameUrl = "http://m.wesane.com/"
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
                    n.onreadystatechange = o,
                        n.open("POST", e),
                        n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                        n.send(t)
                },
                scoreResult: function (e) {
                    if (null != e.currentTarget.response && "" != e.currentTarget.response) {
                        var t = JSON.parse(e.currentTarget.response);
                        cc.log("endshow", t.content),
                            r.endHttpShowInfo = t.content
                    }
                },
                initLanguage: function () {
                    var e = null;
                    return cc.sys.language == cc.sys.LANGUAGE_CHINESE ? (this.curType = 1,
                        e = n.language_1) : (cc.log("\u82f1\u6587"),
                        this.curType = 2,
                        e = n.language_2),
                        e
                },
                getLinkGameReturn: function (e, t, o, n) {
                    if (console.log("err0", e),
                        console.log("err1", t),
                        console.log("err2", o),
                        console.log("err3", n),
                    0 == e) {
                        this.ranLinkData = t,
                            console.log("LoadMainGameScnee");
                        var r = i.launchScene
                            , a = i.Bros
                            , s = i.caS;
                        c.goToCover(this.adShowBefore, this.adShowAfter, r, a, s)
                    }
                },
                ranRecGameData: function () {
                    if (null != this.recGameData && "" != this.recGameData) {
                        this.returnBool = !1;
                        var e = this.recGameData.length
                            , t = i.returnRanNum(1, e) - 1;
                        cc.log("ranNNN", t),
                            this.recGameUrl = this.recGameData[t].data_link,
                            this.recGameDelPer = this.recGameData[t].delay_per,
                            this.recGameDelPau = this.recGameData[t].delay_pau,
                            this.recGameimg1 = this.recGameData[t].img_1,
                            this.recGameimg2 = this.recGameData[t].img_2,
                            this.recGamePos = this.recGameData[t].poistion
                    }
                },
                ranLinkUrl: function () {
                    if (null != this.ranLinkData && this.ranLinkData.gameList && null != this.ranLinkData.gameList) {
                        var e = this.ranLinkData.gameList.length
                            , t = i.returnRanNum(1, e) - 1;
                        return cc.log("templ", t, this.ranLinkData.gameList),
                            cc.log("url", this.ranLinkData.gameList[0].gameName, this.ranLinkData.gameList[0].gameUrl),
                            t
                    }
                    return null
                },
                gotoEndLayer: function () {
                    if (i.publicGameBool)
                        this.showGameEndLayer();
                    else {
                        if (adEndComplete = !1,
                            resEndComplete = !1,
                            this.needShow = null,
                        1 == window.navigator.onLine) {
                            var e = this.adShowAfter;
                            console.log("ad", e),
                                (e = null == e || null == e || this.adShowAfter) ? (this.needShow = !0,
                                    console.log("showMyad"),
                                    showMyAds()) : this.needShow = !1
                        } else
                            console.log("showOver1"),
                                this.showGameEndLayer(),
                                this.needShow = null;
                        console.log("showMyad2", this.needShow),
                        null != this.needShow && (console.log("showMyad3"),
                            this.needShow ? (console.log("pre", preloader),
                            null == preloader && this.showGameEndLayer(),
                                resEndComplete = !0,
                            adEndComplete && resEndComplete && (console.log("showOver1"),
                                this.showGameEndLayer())) : (console.log("gam"),
                                this.showGameEndLayer()))
                    }
                },
                showGameEndLayer: function () {
                    cc.find("Canvas/gameManager").getComponent("GameManager").GameOver()
                }
            });
        t.exports = r,
            cc._RF.pop()
    }
        , {
            GameConfig: "GameConfig",
            GameUiTools: "GameUiTools",
            HttpManagerJs: "HttpManagerJs",
            LanguageSetJs: "LanguageSetJs",
            LoadSceneJs: "LoadSceneJs"
        }],
    ToolsJs: [function (e, t) {
        "use strict";
        cc._RF.push(t, "ff72eImHHBFF7om5YuFkgbF", "ToolsJs");
        var o = {
            SpriteFrameJs: null,
            AudioArrJs: null,
            setStorage: function (e, t, o) {
                CC_WECHATGAME ? wx.setStorage({
                    key: e,
                    data: t
                }) : (o && (t = JSON.stringify(t)),
                    cc.sys.localStorage.setItem(e, t))
            },
            getStorage: function (e, t) {
                if (CC_WECHATGAME)
                    return wx.getStorageSync(e);
                var o = cc.sys.localStorage.getItem(e);
                return isNaN(o) || (o = parseInt(o)),
                "NaN" == o.toString() && (o = null),
                t && null != o && (o = JSON.parse(o)),
                    o
            },
            logJsonObject: function (e) {
                console.log(JSON.stringify(e))
            },
            loadJson: function () {
            },
            writeJson: function (e, t) {
                if (cc.sys.isBrowser) {
                    console.log("\u6d4f\u89c8\u5668");
                    var o = new Blob([e], {
                        type: "application/json"
                    })
                        , n = document.createElement("a");
                    n.download = t,
                        n.innerHTML = "Download File",
                        null != window.webkitURL ? n.href = window.webkitURL.createObjectURL(o) : (n.href = window.URL.createObjectURL(o),
                            n.onclick = destroyClickedElement,
                            n.style.display = "none",
                            document.body.appendChild(n)),
                        n.click()
                }
            },
            addNoArr: function (e, t) {
                return e.indexOf(t) < 0 && (e.push(t),
                    !0)
            },
            newSprite: function (e) {
                if (null != this.SpriteFrameJs.getSpriteFrame(e)) {
                    var t = new cc.Node;
                    return t.addComponent(cc.Sprite).spriteFrame = this.SpriteFrameJs.getSpriteFrame(e),
                        t
                }
                return null
            },
            setTexture: function (e, t) {
                e.getComponent(cc.Sprite).spriteFrame = this.SpriteFrameJs.getSpriteFrame(t)
            },
            clonePrefabs: function (e, t, o, n) {
                void 0 === n && (n = 0);
                var i = this.PrefabArrJs.getPrefabs(e);
                if (null != i) {
                    var c = cc.instantiate(i);
                    return null != t && t.addChild(c, n),
                    null != o && (c.position = o),
                        c
                }
                return console.log("\u514b\u9686\u9884\u5236\u4f53\u5931\u8d25:" + e),
                    null
            },
            newLabel: function (e, t, o, n, i, c) {
                void 0 === o && (o = 20),
                void 0 === n && (n = .5),
                void 0 === i && (i = .5),
                void 0 === c && (c = 0);
                var r = new cc.Node;
                r.anchorX = n,
                    r.anchorY = i;
                var a = r.addComponent(cc.Label);
                return a.string = e,
                    a.fontSize = o,
                    t.addChild(r, c),
                    r
            },
            playAudio: function (e, t, o) {
                return void 0 === t && (t = .5),
                void 0 === o && (o = !1),
                    null != this.AudioArrJs ? this.AudioArrJs.playAudio(e, t, o) : cc.audioEngine.play(cc.url.raw("resources/music/" + e + ".mp3"), o, t)
            },
            stopAudio: function (e) {
                null != e && cc.audioEngine.stop(e)
            },
            newAduioSource: function (e) {
                var t;
                if (null != this.AudioArrJs)
                    t = this.AudioArrJs.getAudioClip(e);
                else {
                    if (null == e)
                        return console.log("clip\u4e0d\u80fd\u4e3a\u7a7a\uff01"),
                            null;
                    t = e
                }
                var o = new cc.Node;
                return o.addComponent(cc.AudioSource).clip = t,
                    o.getComponent(cc.AudioSource)
            },
            delayTimeCall: function (e, t, o, n) {
                e.runAction(cc.sequence(cc.delayTime(o), cc.callFunc(t, n)))
            },
            getDistance: function (e, t) {
                return e.sub(t).mag()
            },
            getToNodePos: function (e, t) {
                var o = e.parent.convertToWorldSpaceAR(e.position);
                return t.convertToNodeSpaceAR(o)
            },
            getToWorldPosAR: function (e) {
                return e.parent.convertToWorldSpaceAR(e.position)
            },
            getToWorldPos: function (e) {
                return e.parent.convertToWorldSpace(e.position)
            },
            isBoxContainPos: function (e, t) {
                return e.getBoundingBox().contains(t)
            },
            isBoxContainWorldPos: function (e, t) {
                return e.getBoundingBoxToWorld().contains(t)
            },
            isRectInterRect: function (e, t) {
                return e.getBoundingBoxToWorld().intersects(t.getBoundingBoxToWorld())
            },
            returnRandom: function (e, t) {
                return e + Math.floor(Math.random() * (t - e + 1))
            },
            returnCurrentLanType: function () {
                var e = 1;
                switch (cc.sys.language) {
                    case cc.sys.LANGUAGE_CHINESE:
                        "zh-TW" == window.navigator.language || "zh-tw" == window.navigator.language || "zh-HK" == window.navigator.language || "zh-hk" == window.navigator.language ? (cc.log("\u7e41\u4f53"),
                            e = 2) : (cc.log("\u7b80\u4f53"),
                            e = 1);
                        break;
                    case cc.sys.LANGUAGE_KOREAN:
                        e = 4;
                        break;
                    default:
                        e = 3
                }
                return e
            }
        };
        t.exports = o,
            cc._RF.pop()
    }
        , {}],
    airWall: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "0069bqSfLhM3bT3jHPbFXXs", "airWall");
        var n, i = this && this.__extends || (n = function (e, t) {
                    return (n = Object.setPrototypeOf || {
                                __proto__: []
                            } instanceof Array && function (e, t) {
                                e.__proto__ = t
                            }
                            || function (e, t) {
                                for (var o in t)
                                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                            }
                    )(e, t)
                }
                    ,
                    function (e, t) {
                        function o() {
                            this.constructor = e
                        }

                        n(e, t),
                            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
                                new o)
                    }
            ), c = this && this.__decorate || function (e, t, o, n) {
                var i, c = arguments.length, r = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(e, t, o, n);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        (i = e[a]) && (r = (c < 3 ? i(r) : c > 3 ? i(t, o, r) : i(t, o)) || r);
                return c > 3 && r && Object.defineProperty(t, o, r),
                    r
            }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = cc._decorator
            , a = r.ccclass
            , s = (r.property,
            function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }

                return i(t, e),
                    t.prototype.start = function () {
                        this.node.setPosition(0, 0),
                            this.scheduleOnce(function () {
                                this.node.setPosition(0, 0)
                            }, .01)
                    }
                    ,
                    c([a], t)
            }(cc.Component));
        o.default = s,
            cc._RF.pop()
    }
        , {}],
    bgLine: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "9f510+5gbZJjrR9pW+sYvHS", "bgLine");
        var n, i = this && this.__extends || (n = function (e, t) {
                    return (n = Object.setPrototypeOf || {
                                __proto__: []
                            } instanceof Array && function (e, t) {
                                e.__proto__ = t
                            }
                            || function (e, t) {
                                for (var o in t)
                                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                            }
                    )(e, t)
                }
                    ,
                    function (e, t) {
                        function o() {
                            this.constructor = e
                        }

                        n(e, t),
                            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
                                new o)
                    }
            ), c = this && this.__decorate || function (e, t, o, n) {
                var i, c = arguments.length, r = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(e, t, o, n);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        (i = e[a]) && (r = (c < 3 ? i(r) : c > 3 ? i(t, o, r) : i(t, o)) || r);
                return c > 3 && r && Object.defineProperty(t, o, r),
                    r
            }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = cc._decorator
            , a = r.ccclass
            , s = r.property
            , l = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.airObstacleArray = [null],
                    t
            }

            return i(t, e),
                t.prototype.start = function () {
                    this.node.y = -.5 * cc.winSize.height + 220;
                    for (var e = 1; e <= 4; e++)
                        this.airObstacleArray[e].setPosition(144 * (e - 1) - 216, 10);
                    this.scheduleOnce(function () {
                        for (var e = 1; e <= 4; e++)
                            this.airObstacleArray[e].setPosition(144 * (e - 1) - 216, 10)
                    })
                }
                ,
                c([s(cc.Node)], t.prototype, "airObstacleArray", void 0),
                c([a], t)
        }(cc.Component);
        o.default = l,
            cc._RF.pop()
    }
        , {}],
    bgScore: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "0dd16BYj89DVbwQb3qDJrnM", "bgScore");
        var n, i = this && this.__extends || (n = function (e, t) {
                    return (n = Object.setPrototypeOf || {
                                __proto__: []
                            } instanceof Array && function (e, t) {
                                e.__proto__ = t
                            }
                            || function (e, t) {
                                for (var o in t)
                                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                            }
                    )(e, t)
                }
                    ,
                    function (e, t) {
                        function o() {
                            this.constructor = e
                        }

                        n(e, t),
                            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
                                new o)
                    }
            ), c = this && this.__decorate || function (e, t, o, n) {
                var i, c = arguments.length, r = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(e, t, o, n);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        (i = e[a]) && (r = (c < 3 ? i(r) : c > 3 ? i(t, o, r) : i(t, o)) || r);
                return c > 3 && r && Object.defineProperty(t, o, r),
                    r
            }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = cc._decorator
            , a = r.ccclass
            , s = (r.property,
            function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }

                return i(t, e),
                    t.prototype.start = function () {
                        this.node.y = -.5 * cc.winSize.height + 250
                    }
                    ,
                    c([a], t)
            }(cc.Component));
        o.default = s,
            cc._RF.pop()
    }
        , {}],
    dataJs: [function (e, t) {
        "use strict";
        cc._RF.push(t, "a1849v71ipFppqVNaNJQUn5", "dataJs"),
            cc.Class({
                extends: cc.Component,
                properties: {
                    playerData: {}
                },
                start: function () {
                    this.getData(),
                        cc.log(this.playerData),
                    null == this.playerData && (this.playerData = {
                        maxLevel: 0
                    },
                        this.Save(0))
                },
                Save: function (e) {
                    this.playerData.maxLevel = e,
                        cc.sys.localStorage.setItem("playerData_FruitShooter", JSON.stringify(this.playerData))
                },
                getData: function () {
                    this.playerData = JSON.parse(cc.sys.localStorage.getItem("playerData_FruitShooter"))
                },
                huoqu: function () {
                    return this.playerData.maxLevel
                }
            }),
            cc._RF.pop()
    }
        , {}],
    exFallBubble: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "15114DH3BVJWbb9zV/wnVVV", "exFallBubble");
        var n, i = this && this.__extends || (n = function (e, t) {
                    return (n = Object.setPrototypeOf || {
                                __proto__: []
                            } instanceof Array && function (e, t) {
                                e.__proto__ = t
                            }
                            || function (e, t) {
                                for (var o in t)
                                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                            }
                    )(e, t)
                }
                    ,
                    function (e, t) {
                        function o() {
                            this.constructor = e
                        }

                        n(e, t),
                            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
                                new o)
                    }
            ), c = this && this.__decorate || function (e, t, o, n) {
                var i, c = arguments.length, r = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(e, t, o, n);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        (i = e[a]) && (r = (c < 3 ? i(r) : c > 3 ? i(t, o, r) : i(t, o)) || r);
                return c > 3 && r && Object.defineProperty(t, o, r),
                    r
            }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = cc._decorator
            , a = r.ccclass
            , s = r.property
            , l = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.colorArray = [null],
                    t.color = 0,
                    t
            }

            return i(t, e),
                t.prototype.start = function () {
                    this.node.getComponent(cc.RigidBody).gravityScale = 3 * Math.random() + 5
                }
                ,
                t.prototype.SetColor = function (e) {
                    this.color = e;
                    for (var t = 1; t <= 8; t++)
                        this.colorArray[t].active = !1;
                    this.colorArray[e].active = !0
                }
                ,
                c([s(cc.Node)], t.prototype, "colorArray", void 0),
                c([a], t)
        }(cc.Component);
        o.default = l,
            cc._RF.pop()
    }
        , {}],
    failedUi: [function (e, t) {
        "use strict";
        cc._RF.push(t, "6f878xyzmJPba31R0lvDYNh", "failedUi");
        var o = i(e("../MainManage"))
            , n = i(e("../GameState"));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        var c = e("GameUiTools")
            , r = e("GameConfig")
            , a = e("MainManage");
        cc.Class({
            extends: cc.Component,
            properties: {
                overLable: cc.Label,
                nowScore: cc.Label,
                moreGameBtn: cc.Node,
                restartBtn: cc.Node,
                maxScore: cc.Label,
                bgMask: cc.Node,
                jb1: cc.Node,
                jb2: cc.Node,
                jb3: cc.Node,
                jb4: cc.Node,
                scoreLabel: [cc.Label]
            },
            startData: function () {
                this.standardScore = r.standScore,
                    this.maxHeight = 1e5,
                    this.nowScore.string = n.default.Instance.level,
                    this.UIPosChange()
            },
            onLoad: function () {
                this.addTouchEvents(),
                    this.addClickBtns(),
                    this.UIPosChange(),
                    this.startData();
                var e = n.default.Instance.level
                    , t = cc.find("Canvas").getComponent("dataJs").huoqu();
                cc.log("\u6700\u9ad8\u5206\u662f" + t),
                    e > t ? (cc.find("Canvas").getComponent("dataJs").Save(n.default.Instance.level),
                        this.maxScore.string = e) : this.maxScore.string = t,
                    cc.find("Canvas").getComponent("MainGameJS").addId(),
                    o.default.gameOverShowText(e, 1)
            },
            SetHistoryScores: function () {
                var e = 0
                    , t = n.default.Instance.posInJb;
                cc.log("\u6392\u540d" + t),
                    cc.log("\u6570\u7ec4\u957f\u5ea6" + n.default.Instance.historyScore.length);
                for (var o = 0; o < n.default.Instance.historyScore.length; o++)
                    0 != n.default.Instance.historyScore[o] && ++e <= 3 && (this.scoreLabel[o].string = n.default.Instance.historyScore[o].toString());
                cc.log("\u4e0d\u7b49\u4e8e0\u7684\u4e2a\u6570" + e),
                    t <= 2 ? 1 == e ? (this.jb1.active = !0,
                        this.jb1.x = 0) : 2 == e ? (this.jb1.active = !0,
                        this.jb1.x = -100,
                        this.jb2.active = !0,
                        this.jb2.x = 100) : (this.jb1.active = !0,
                        this.jb1.x = -180,
                        this.jb2.active = !0,
                        this.jb2.x = 20,
                        this.jb3.active = !0,
                        this.jb3.x = 190) : (this.jb1.active = !0,
                        this.jb1.x = -230,
                        this.jb2.active = !0,
                        this.jb2.x = -30,
                        this.jb3.active = !0,
                        this.jb3.x = 140,
                        this.jb4.active = !0,
                        this.jb4.x = 280,
                        this.scoreLabel[3].string = n.default.Instance.level.toString())
            },
            addClickBtns: function () {
                this.moreGameBtn.on(cc.Node.EventType.TOUCH_START, function () {
                }),
                    this.moreGameBtn.on(cc.Node.EventType.TOUCH_END, function () {
                        console.log("MoreGame"),
                            window.location.href = a.moreGameUrl
                    }),
                    this.restartBtn.on(cc.Node.EventType.TOUCH_START, function () {
                        cc.director.loadScene("MainGameScene")
                    }),
                    this.bgMask.on(cc.Node.EventType.TOUCH_START, function () {
                        cc.director.loadScene("MainGameScene")
                    })
            },
            addTouchEvents: function () {
                var e = {
                    event: cc.EventListener.TOUCH_ONE_BY_ONE,
                    onTouchBegan: function () {
                        return r.GAME_OVER_BOOL = !0,
                            n.default.Instance.level = 1,
                            GameData.isLive = !1,
                            a.gotoEndLayer(),
                            c.loadingScene("MainGameScene"),
                            !0
                    },
                    onTouchMoved: function () {
                    },
                    onTouchEnded: function () {
                    }
                };
                cc.eventManager.addListener(e, this.node)
            },
            start: function () {
            },
            UIPosChange: function () {
                var e = this.GetContentByScore(n.default.Instance.level);
                console.log("nihao", a.endHttpShowInfo),
                null != a.endHttpShowInfo && "" != a.endHttpShowInfo && (cc.log("gototo"),
                    document.title = a.endHttpShowInfo),
                    this.overLable.string = e
            },
            showT: function () {
                this.GetLanguageId()
            },
            GetContentByScore: function (e) {
                var t = this.maxHeight
                    , o = Math.ceil(e / t * 95);
                o > 95 && (o = 95);
                var n = 5 + o;
                return ["\u51fb\u8d25\u4e86\u5168\u7403" + n + "%\u7684\u73a9\u5bb6", "\u64ca\u6557\u4e86\u5168\u7403" + n + "%\u7684\u73a9\u5bb6", "Beat " + n + " % of the world's players", "\uc804 \uc138\uacc4" + n + "% \uc758 \uc720 \uc800 \ub97c \uc774 \uacbc \uc2b5 \ub2c8 \ub2e4"][this.GetLanguageId() - 1]
            },
            GetLanguageId: function () {
                var e = 1;
                switch (cc.sys.language) {
                    case cc.sys.LANGUAGE_CHINESE:
                        "zh-TW" == window.navigator.language || "zh-tw" == window.navigator.language || "zh-HK" == window.navigator.language || "zh-hk" == window.navigator.language ? (cc.log("\u7e41\u4f53"),
                            e = 2) : (cc.log("\u7b80\u4f53"),
                            e = 1);
                        break;
                    case cc.sys.LANGUAGE_KOREAN:
                        e = 4;
                        break;
                    default:
                        e = 3
                }
                return e
            }
        }),
            cc._RF.pop()
    }
        , {
            "../GameState": "GameState",
            "../MainManage": void 0,
            GameConfig: "GameConfig",
            GameUiTools: "GameUiTools",
            MainManage: "MainManage"
        }],
    fallBubble: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "ce617vN8DZHTbZaPimIaVLr", "fallBubble");
        var n, i = this && this.__extends || (n = function (e, t) {
                    return (n = Object.setPrototypeOf || {
                                __proto__: []
                            } instanceof Array && function (e, t) {
                                e.__proto__ = t
                            }
                            || function (e, t) {
                                for (var o in t)
                                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                            }
                    )(e, t)
                }
                    ,
                    function (e, t) {
                        function o() {
                            this.constructor = e
                        }

                        n(e, t),
                            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
                                new o)
                    }
            ), c = this && this.__decorate || function (e, t, o, n) {
                var i, c = arguments.length, r = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(e, t, o, n);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        (i = e[a]) && (r = (c < 3 ? i(r) : c > 3 ? i(t, o, r) : i(t, o)) || r);
                return c > 3 && r && Object.defineProperty(t, o, r),
                    r
            }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = e("../GameState")
            , a = cc._decorator
            , s = a.ccclass
            , l = a.property
            , u = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.lightCirclePrefab = null,
                    t.colorArray = [null],
                    t.fallAudio = null,
                    t.color = 0,
                    t.destroyPosY = 0,
                    t.score = 0,
                    t
            }

            return i(t, e),
                t.prototype.start = function () {
                    this.node.getComponent(cc.RigidBody).gravityScale = 3 * Math.random() + 5,
                        this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(1e3 * Math.random() - 500, 800 * Math.random()),
                        this.destroyPosY = -.5 * cc.winSize.height + 220 - .5 * r.default.Instance.bubbleIntervalVertical * Math.random()
                }
                ,
                t.prototype.SetColor = function (e) {
                    this.color = e;
                    for (var t = 1; t <= 8; t++)
                        this.colorArray[t].active = !1;
                    this.colorArray[e].active = !0
                }
                ,
                t.prototype.update = function () {
                    if (this.node.y <= this.destroyPosY) {
                        r.default.Instance.gameOverFlag || (r.default.Instance.level += this.score,
                            r.default.Instance.MovePresent(),
                            r.default.Instance.ChangeDifficult());
                        var e = cc.instantiate(this.lightCirclePrefab);
                        e.parent = this.node.parent,
                            e.setPosition(this.node.position),
                            e.getComponent("lightCircle").SetColor(this.color),
                        r.default.Instance.canPlaySound && cc.audioEngine.play(this.fallAudio, !1, 1),
                            this.node.destroy()
                    }
                    0 == this.score && this.node.y <= 230 + -.5 * cc.winSize.height && (this.node.x <= -216 || this.node.x >= 216 ? this.score = 25 : this.node.x <= -72 || this.node.x >= 72 ? this.score = 75 : this.score = 150)
                }
                ,
                c([l(cc.Prefab)], t.prototype, "lightCirclePrefab", void 0),
                c([l(cc.Node)], t.prototype, "colorArray", void 0),
                c([l({
                    type: cc.AudioClip
                })], t.prototype, "fallAudio", void 0),
                c([s], t)
        }(cc.Component);
        o.default = u,
            cc._RF.pop()
    }
        , {
            "../GameState": "GameState"
        }],
    gameOverJs: [function (e, t) {
        "use strict";
        cc._RF.push(t, "3621brbM61BsYFG7fM/74TL", "gameOverJs");
        var o = e("GameUiTools")
            , n = e("GameConfig")
            , i = e("MainManage");
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
                rightBtnText: cc.Label,
                maxScoreText: cc.Label
            },
            onLoad: function () {
                this.bgLayer.color = cc.color("#68b951"),
                    this.standardScore = n.standScore,
                    this.game_max_score = 200,
                    this.rigthBtnGameName = null,
                    this.rightBtnGameUrl = null,
                    this.UIPosChange(),
                    this.addClickBtns();
                var e, t = this.returnCurrentLanType();
                e = 1 == t ? "\u6700\u9ad8\u7eaa\u5f55:" : 2 == t ? "\u6700\u9ad8\u7d00\u9304:" : 4 == t ? "\ucd5c\uace0 \uae30\ub85d:" : "Highest Record:";
                var o = n.gameScore
                    , i = this.getHighScore();
                i ? i < n.gameScore && (this.setHisSocre(n.gameScore),
                    i = n.gameScore) : (this.setHisSocre(n.gameScore),
                    i = o),
                    this.maxScoreText.string = e + i
            },
            returnCurrentLanType: function () {
                var e = 1;
                switch (cc.sys.language) {
                    case cc.sys.LANGUAGE_CHINESE:
                        "zh-TW" == window.navigator.language || "zh-tw" == window.navigator.language || "zh-HK" == window.navigator.language || "zh-hk" == window.navigator.language ? (cc.log("\u7e41\u4f53"),
                            e = 2) : (cc.log("\u7b80\u4f53"),
                            e = 1);
                        break;
                    case cc.sys.LANGUAGE_KOREAN:
                        e = 4;
                        break;
                    default:
                        e = 3
                }
                return e
            },
            setHisSocre: function (e) {
                cc.sys.localStorage.setItem("HigScore_JiaoTong", e)
            },
            getHighScore: function () {
                return cc.sys.localStorage.getItem("HigScore_JiaoTong")
            },
            UIPosChange: function () {
                this.overScoreT.string = n.gameScore,
                    console.log("lang", i.langugeType);
                var e = null;
                e = 1 == i.langugeType ? this.getContentByScore(n.gameScore, i.gameNameText) : this.getContentByScore2(n.gameScore, i.gameNameText),
                    console.log("nihao", i.endHttpShowInfo),
                null != i.endHttpShowInfo && "" != i.endHttpShowInfo && (cc.log("gototo"),
                    e = i.endHttpShowInfo),
                    this.overInfoT.string = e;
                var t = this.overInfoT.node.height;
                if (this.overInfoT.node.height = Math.ceil(e.length * this.overInfoT.fontSize / this.overInfoT.node.width) * t,
                    document.title = e,
                    console.log("gameOver txtMoreText", i.txtMoreText),
                    this.midGameText.string = i.txtMoreText,
                    this.leftBtnText.string = i.txtAgainText,
                    this.tempArr = this.gameFocus(),
                null != i.ranLinkUrl()) {
                    var o = i.ranLinkUrl()
                        , c = i.ranLinkData.gameList[o].gameName;
                    this.rigthBtnGameName = c,
                        this.rightBtnGameUrl = i.ranLinkData.gameList[o].gameUrl
                }
                null != this.rigthBtnGameName && "" != this.rigthBtnGameName ? this.rightBtnText.string = this.rigthBtnGameName : this.rightBtnText.string = this.tempArr[0]
            },
            gameFocus: function () {
                var e = []
                    , t = null
                    , o = null;
                return Math.random() <= .5 ? (t = i.gameEndName1,
                    o = i.gameEndUrl1) : (t = i.gameEndName2,
                    o = i.gameEndUrl2),
                    e.push(t),
                    e.push(o),
                    e
            },
            addClickBtns: function () {
                var e = this;
                e.moreBtn.node.on(cc.Node.EventType.TOUCH_START, function () {
                }),
                    e.moreBtn.node.on(cc.Node.EventType.TOUCH_END, function () {
                        console.log("MoreGame"),
                            window.location.href = i.moreGameUrl
                    }),
                    e.leftBtn.node.on(cc.Node.EventType.TOUCH_START, function () {
                    }),
                    e.leftBtn.node.on(cc.Node.EventType.TOUCH_END, function () {
                        n.GAME_OVER_BOOL = !0,
                            n.gameScore = 0,
                            o.loadingScene("MainGameScene")
                    }),
                    e.rightBtn.node.on(cc.Node.EventType.TOUCH_START, function () {
                    }),
                    e.rightBtn.node.on(cc.Node.EventType.TOUCH_END, function () {
                        var t;
                        t = null != e.rightBtnGameUrl && "" != e.rightBtnGameUrl ? e.rightBtnGameUrl : e.tempArr[1],
                            window.location.href = t
                    })
            },
            getContentByScore: function (e, t) {
                var o = "\u6211\u771f\u662f\u592a\u5389\u5bb3\uff0c\u5728" + t + "\u4e2d\u7adf\u7136\u5f97\u4e861\u5206\uff0c\u5168\u7403\u53ea\u67091\u4e2a\u4eba\u5f971\u5206\uff01"
                    , n = parseInt(.3 * this.standardScore)
                    , i = parseInt(1.5 * this.standardScore)
                    , c = parseInt(2.5 * this.standardScore)
                    , r = parseInt(4 * this.standardScore);
                return e > 0 && e <= n ? o = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u771f\u662f\u592a\u68d2\u4e86\uff0c\u518d\u7ec3\u7ec3\u5c31\u80fd\u8fbe\u5230\u6e38\u5203\u6709\u4f59\u7684\u5883\u754c\uff01" : e > n && e <= this.standardScore ? o = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u771f\u662f\u592a\u68d2\u4e86\uff0c\u518d\u7ec3\u7ec3\u5c31\u80fd\u8fbe\u5230\u6e38\u5203\u6709\u4f59\u7684\u5883\u754c\uff01" : e > this.standardScore && e <= i ? o = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u51fb\u8d25\u4e86\u5168\u7403" + (Math.floor(12 * (e - this.standardScore) / (i - this.standardScore)) + 80) + "%\u7684\u73a9\u5bb6\uff0c\u8fdb\u5165\u4e86\u4fe1\u624b\u62c8\u6765\u7684\u5883\u754c\uff01" : e > i && e <= c ? o = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u51fb\u8d25\u4e86\u5168\u7403" + (Math.floor(7 * (e - i) / (c - i)) + 92) + "%\u7684\u73a9\u5bb6\uff0c\u8fdb\u5165\u4e86\u8fd0\u7528\u81ea\u5982\u7684\u5883\u754c\uff01" : e > c && e <= r ? o = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u51fb\u8d25\u4e86\u5168\u740399%\u7684\u73a9\u5bb6\uff0c\u8fbe\u5230\u4e86\u884c\u4e91\u6d41\u6c34\u7684\u5883\u754c\uff01" : e > r && e < this.game_max_score ? o = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u636e\u8bf4\u5168\u7403\u53ea\u6709 " + (20 - Math.ceil(17 * (e - r) / (this.game_max_score - r))) + "\u4e2a\u4eba\u8fbe\u5230\u8fd9\u4e2a\u6c34\u5e73\uff0c\u72ec\u5b64\u6c42\u8d25\uff01" : e >= this.game_max_score && (o = "\u6211\u5728" + t + "\u4e2d\u5f97\u4e86" + e + "\u5206\uff0c\u8d85\u8d8a\u4e86\u72ec\u5b64\u6c42\u8d25\uff0c\u5fc3\u6709\u7075\u7280\uff01"),
                    o
            },
            strlen: function (e) {
                for (var t = 0, o = 0; o < e.length; o++) {
                    var n = e.charCodeAt(o);
                    n >= 1 && n <= 126 || 65376 <= n && n <= 65439 ? t++ : t += 2
                }
                return t
            },
            getContentByScore2: function (e, t) {
                var o = "I'm awesome\uff0cin" + t + "get 0 score\uff0conly one person in the world has a 0\uff01"
                    , n = parseInt(.3 * this.standardScore)
                    , i = parseInt(1.5 * this.standardScore)
                    , c = parseInt(2.5 * this.standardScore)
                    , r = parseInt(4 * this.standardScore);
                return e >= this.game_max_score ? o = "I got " + e + " points in the game, defeating all players worldwide, waiting for you to fight!" : e > 0 && e <= n ? o = "I got " + e + " points in the game, really great\uff01" : e > n && e <= this.standardScore ? o = "I got " + e + " points in the game, really great\uff01" : e > this.standardScore && e <= i ? o = "I got in the game in " + e + " points, beating out " + (Math.floor(12 * (e - this.standardScore) / (i - this.standardScore)) + 80) + "% of global players\uff01" : e > i && e <= c ? o = "I got in the game in " + e + " points, beating out " + (Math.floor(7 * (e - i) / (c - i)) + 92) + "% of global players\uff01" : e > c && e <= r ? o = "I got in the game in " + e + " points, beating out 99% of global players\uff01" : e > r && e < this.game_max_score && (o = "I got " + e + " points in the game, it said to be the world's only " + (20 - Math.ceil(17 * (e - r) / (this.game_max_score - r))) + " people to reach this level! Have you?"),
                    o
            },
            start: function () {
            }
        }),
            cc._RF.pop()
    }
        , {
            GameConfig: "GameConfig",
            GameUiTools: "GameUiTools",
            MainManage: "MainManage"
        }],
    gameOverNode: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "92ab8IAHsVIKrVBBtLJNTfK", "gameOverNode");
        var n, i = this && this.__extends || (n = function (e, t) {
                    return (n = Object.setPrototypeOf || {
                                __proto__: []
                            } instanceof Array && function (e, t) {
                                e.__proto__ = t
                            }
                            || function (e, t) {
                                for (var o in t)
                                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                            }
                    )(e, t)
                }
                    ,
                    function (e, t) {
                        function o() {
                            this.constructor = e
                        }

                        n(e, t),
                            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
                                new o)
                    }
            ), c = this && this.__decorate || function (e, t, o, n) {
                var i, c = arguments.length, r = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(e, t, o, n);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        (i = e[a]) && (r = (c < 3 ? i(r) : c > 3 ? i(t, o, r) : i(t, o)) || r);
                return c > 3 && r && Object.defineProperty(t, o, r),
                    r
            }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = cc._decorator
            , a = r.ccclass
            , s = r.property
            , l = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.failedUI = null,
                    t.gameOverText = null,
                    t
            }

            return i(t, e),
                t.prototype.start = function () {
                    this.node.on(cc.Node.EventType.TOUCH_START, this.click, this),
                        this.gameOverText.active = !0,
                        this.gameOverText.setPosition(0, 130),
                        this.gameOverText.runAction(cc.moveTo(.4, 0, 100))
                }
                ,
                t.prototype.click = function () {
                    var e = cc.instantiate(this.failedUI);
                    e.parent = this.node.parent,
                        e.position = this.node.position,
                        this.gameOverText.setPosition(cc.v2(0, 2e3)),
                        this.node.off(cc.Node.EventType.TOUCH_START, this.click, this)
                }
                ,
                t.prototype.update = function () {
                    this.node.opacity < 220 && (this.node.opacity += 5)
                }
                ,
                c([s(cc.Prefab)], t.prototype, "failedUI", void 0),
                c([s(cc.Node)], t.prototype, "gameOverText", void 0),
                c([a], t)
        }(cc.Component);
        o.default = l,
            cc._RF.pop()
    }
        , {}],
    guideLinePic: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "50ac7zljUxLm4TMtkDM7zn+", "guideLinePic");
        var n, i = this && this.__extends || (n = function (e, t) {
                    return (n = Object.setPrototypeOf || {
                                __proto__: []
                            } instanceof Array && function (e, t) {
                                e.__proto__ = t
                            }
                            || function (e, t) {
                                for (var o in t)
                                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                            }
                    )(e, t)
                }
                    ,
                    function (e, t) {
                        function o() {
                            this.constructor = e
                        }

                        n(e, t),
                            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
                                new o)
                    }
            ), c = this && this.__decorate || function (e, t, o, n) {
                var i, c = arguments.length, r = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(e, t, o, n);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        (i = e[a]) && (r = (c < 3 ? i(r) : c > 3 ? i(t, o, r) : i(t, o)) || r);
                return c > 3 && r && Object.defineProperty(t, o, r),
                    r
            }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = e("../GameState")
            , a = cc._decorator
            , s = a.ccclass
            , l = a.property
            , u = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.colorArray = [null],
                    t.touch = !1,
                    t
            }

            return i(t, e),
                t.prototype.start = function () {
                    for (var e = 1; e <= 8; e++)
                        this.colorArray[e].width = 15,
                            this.colorArray[e].height = 15,
                            this.colorArray[e].active = !1;
                    this.colorArray[r.default.Instance.readyToLaunchBubble.color].active = !0
                }
                ,
                t.prototype.update = function () {
                    this.touch ? this.node.opacity = 0 : this.node.opacity = 255,
                        this.node.y >= r.default.Instance.lowerGuideBubblePicY ? (this.node.opacity = 0,
                            this.node.stopAllActions()) : this.node.runAction(cc.sequence(cc.delayTime(.3), cc.callFunc(function () {
                            this.node.opacity = 255
                        }, this)));
                    for (var e = 1; e <= 9; e++)
                        this.colorArray[e].width = 15,
                            this.colorArray[e].height = 15,
                            this.colorArray[e].active = !1;
                    this.colorArray[r.default.Instance.readyToLaunchBubble.color].active = !0
                }
                ,
                t.prototype.onCollisionEnter = function () {
                    this.touch = !0,
                    this.node.y < r.default.Instance.lowerGuideBubblePicY && (r.default.Instance.lowerGuideBubblePicY = this.node.y)
                }
                ,
                t.prototype.onCollisionStay = function () {
                    this.touch = !0,
                    this.node.y < r.default.Instance.lowerGuideBubblePicY && (r.default.Instance.lowerGuideBubblePicY = this.node.y)
                }
                ,
                t.prototype.onCollisionExit = function () {
                    this.touch = !1
                }
                ,
                c([l(cc.Node)], t.prototype, "colorArray", void 0),
                c([s], t)
        }(cc.Component);
        o.default = u,
            cc._RF.pop()
    }
        , {
            "../GameState": "GameState"
        }],
    hand: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "cada4OZSCxCBYC4teAiAUUJ", "hand");
        var n, i = this && this.__extends || (n = function (e, t) {
                    return (n = Object.setPrototypeOf || {
                                __proto__: []
                            } instanceof Array && function (e, t) {
                                e.__proto__ = t
                            }
                            || function (e, t) {
                                for (var o in t)
                                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                            }
                    )(e, t)
                }
                    ,
                    function (e, t) {
                        function o() {
                            this.constructor = e
                        }

                        n(e, t),
                            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
                                new o)
                    }
            ), c = this && this.__decorate || function (e, t, o, n) {
                var i, c = arguments.length, r = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(e, t, o, n);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        (i = e[a]) && (r = (c < 3 ? i(r) : c > 3 ? i(t, o, r) : i(t, o)) || r);
                return c > 3 && r && Object.defineProperty(t, o, r),
                    r
            }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = cc._decorator
            , a = r.ccclass
            , s = r.property
            , l = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.hand1 = null,
                    t.hand2 = null,
                    t.startInvisible = !1,
                    t
            }

            return i(t, e),
                t.prototype.start = function () {
                    this.node.runAction(cc.repeatForever(cc.sequence(cc.callFunc(function () {
                        this.node.getComponent(cc.Sprite).spriteFrame = this.hand2.spriteFrame
                    }, this), cc.moveBy(.5, 0, -300), cc.delayTime(.1), cc.callFunc(function () {
                        this.node.getComponent(cc.Sprite).spriteFrame = this.hand1.spriteFrame
                    }, this), cc.delayTime(.5), cc.callFunc(function () {
                        this.node.y = this.node.y + 300
                    }, this))))
                }
                ,
                t.prototype.update = function () {
                    this.startInvisible && (this.node.opacity -= 12)
                }
                ,
                c([s(cc.Sprite)], t.prototype, "hand1", void 0),
                c([s(cc.Sprite)], t.prototype, "hand2", void 0),
                c([a], t)
        }(cc.Component);
        o.default = l,
            cc._RF.pop()
    }
        , {}],
    jb: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "5abb7me+LFPR7CJgKIOh5+b", "jb");
        var n, i = this && this.__extends || (n = function (e, t) {
                    return (n = Object.setPrototypeOf || {
                                __proto__: []
                            } instanceof Array && function (e, t) {
                                e.__proto__ = t
                            }
                            || function (e, t) {
                                for (var o in t)
                                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                            }
                    )(e, t)
                }
                    ,
                    function (e, t) {
                        function o() {
                            this.constructor = e
                        }

                        n(e, t),
                            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
                                new o)
                    }
            ), c = this && this.__decorate || function (e, t, o, n) {
                var i, c = arguments.length, r = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(e, t, o, n);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        (i = e[a]) && (r = (c < 3 ? i(r) : c > 3 ? i(t, o, r) : i(t, o)) || r);
                return c > 3 && r && Object.defineProperty(t, o, r),
                    r
            }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = cc._decorator
            , a = r.ccclass
            , s = r.property
            , l = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.starPrefab = null,
                    t.time = 0,
                    t.createStarTime = 0,
                    t
            }

            return i(t, e),
                t.prototype.start = function () {
                    this.createStarTime = .2 * Math.random() + .1
                }
                ,
                t.prototype.update = function (e) {
                    if (this.time += e,
                    this.time > this.createStarTime) {
                        var t = cc.instantiate(this.starPrefab);
                        t.setPosition(this.node.width * Math.random() - .5 * this.node.width, this.node.height * Math.random()),
                            t.parent = this.node,
                            t.scale = 0,
                            t.runAction(cc.sequence(cc.scaleTo(.2, 1), cc.scaleTo(.2, 0), cc.removeSelf())),
                            this.time = 0,
                            this.createStarTime = .2 * Math.random() + .1
                    }
                }
                ,
                c([s(cc.Prefab)], t.prototype, "starPrefab", void 0),
                c([a], t)
        }(cc.Component);
        o.default = l,
            cc._RF.pop()
    }
        , {}],
    language: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "c59690jMRdNF4szslk4ixMP", "language");
        var n, i = this && this.__extends || (n = function (e, t) {
                    return (n = Object.setPrototypeOf || {
                                __proto__: []
                            } instanceof Array && function (e, t) {
                                e.__proto__ = t
                            }
                            || function (e, t) {
                                for (var o in t)
                                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                            }
                    )(e, t)
                }
                    ,
                    function (e, t) {
                        function o() {
                            this.constructor = e
                        }

                        n(e, t),
                            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
                                new o)
                    }
            ), c = this && this.__decorate || function (e, t, o, n) {
                var i, c = arguments.length, r = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(e, t, o, n);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        (i = e[a]) && (r = (c < 3 ? i(r) : c > 3 ? i(t, o, r) : i(t, o)) || r);
                return c > 3 && r && Object.defineProperty(t, o, r),
                    r
            }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = cc._decorator
            , a = r.ccclass
            , s = r.property
            , l = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.gameOver = null,
                    t.seeScore = null,
                    t
            }

            return i(t, e),
                t.prototype.start = function () {
                    this.gameOver.string = ["\u6e38 \u620f \u7ed3 \u675f", "\u904a \u6232 \u7d50 \u675f", "Game Over", "\uac8c\uc784 \uc885\ub8cc"][this.GetLanguageId() - 1],
                        this.seeScore.string = ["\u70b9 \u51fb \u67e5 \u770b \u6210 \u7ee9", "\u9ede \u64ca \u67e5 \u770b \u6210 \u7e3e", "Click to view results", "\ud074\ub9ad \ud558\uc5ec \uc131\uc801 \ubcf4\uae30"][this.GetLanguageId() - 1]
                }
                ,
                t.prototype.GetLanguageId = function () {
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
                }
                ,
                c([s(cc.Label)], t.prototype, "gameOver", void 0),
                c([s(cc.Label)], t.prototype, "seeScore", void 0),
                c([a], t)
        }(cc.Component);
        o.default = l,
            cc._RF.pop()
    }
        , {}],
    launchBubble: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "18933x3NWxKAZ0WjebPowY2", "launchBubble");
        var n, i = this && this.__extends || (n = function (e, t) {
                    return (n = Object.setPrototypeOf || {
                                __proto__: []
                            } instanceof Array && function (e, t) {
                                e.__proto__ = t
                            }
                            || function (e, t) {
                                for (var o in t)
                                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                            }
                    )(e, t)
                }
                    ,
                    function (e, t) {
                        function o() {
                            this.constructor = e
                        }

                        n(e, t),
                            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
                                new o)
                    }
            ), c = this && this.__decorate || function (e, t, o, n) {
                var i, c = arguments.length, r = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(e, t, o, n);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        (i = e[a]) && (r = (c < 3 ? i(r) : c > 3 ? i(t, o, r) : i(t, o)) || r);
                return c > 3 && r && Object.defineProperty(t, o, r),
                    r
            }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = e("../GameState")
            , a = cc._decorator
            , s = a.ccclass
            , l = a.property
            , u = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.colorArray = [null],
                    t.color = 0,
                    t.touched = !1,
                    t
            }

            return i(t, e),
                t.prototype.start = function () {
                    this.node.scale = 0,
                        this.node.runAction(cc.scaleTo(.15, 1))
                }
                ,
                t.prototype.SetColor = function (e) {
                    this.color = e;
                    for (var t = 1; t <= 9; t++)
                        this.colorArray[t].active = !1;
                    this.colorArray[e].active = !0
                }
                ,
                t.prototype.onBeginContact = function (e, t, o) {
                    if (9 != this.color) {
                        if ("shootBubble" == o.node.group) {
                            if (this.touched)
                                return;
                            this.touched = !0,
                                this.node.getComponent(cc.PhysicsCircleCollider).enabled = !1,
                                cc.log("\u78b0\u5230\u7684\u7403\u5728\u6570\u7ec4\u4e2d\u7684\u4f4d\u7f6e:" + o.getComponent("shootBubble").mapI + o.getComponent("shootBubble").mapJ),
                                r.default.Instance.TouchShootBubble(o.getComponent("shootBubble").mapI, o.getComponent("shootBubble").mapJ)
                        }
                        if ("topAirWall" == o.node.group) {
                            if (cc.log("\u78b0\u5230\u9876\u90e8\u7a7a\u6c14\u5899"),
                                this.touched)
                                return;
                            this.touched = !0,
                                this.node.getComponent(cc.PhysicsCircleCollider).enabled = !1,
                                r.default.Instance.NewTouchTopAirWall(),
                                cc.log("\u751f\u6548")
                        }
                    }
                }
                ,
                t.prototype.onCollisionEnter = function (e) {
                    this.touched || (9 == this.color && "shootBubble" == e.node.group && r.default.Instance.ShootFireBubble(e.getComponent("shootBubble").mapI, e.getComponent("shootBubble").mapJ),
                    "topAirWall" == e.node.group && (cc.log("\u706b\u7403\u78b0\u5230\u9876\u90e8\u5899"),
                        this.touched = !0,
                        r.default.Instance.NewTouchTopAirWall()))
                }
                ,
                c([l(cc.Node)], t.prototype, "colorArray", void 0),
                c([s], t)
        }(cc.Component);
        o.default = u,
            cc._RF.pop()
    }
        , {
            "../GameState": "GameState"
        }],
    levelUIShiPei: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "c6715xEVFxJXLlzUjXqQRmK", "levelUIShiPei");
        var n, i = this && this.__extends || (n = function (e, t) {
                    return (n = Object.setPrototypeOf || {
                                __proto__: []
                            } instanceof Array && function (e, t) {
                                e.__proto__ = t
                            }
                            || function (e, t) {
                                for (var o in t)
                                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                            }
                    )(e, t)
                }
                    ,
                    function (e, t) {
                        function o() {
                            this.constructor = e
                        }

                        n(e, t),
                            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
                                new o)
                    }
            ), c = this && this.__decorate || function (e, t, o, n) {
                var i, c = arguments.length, r = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(e, t, o, n);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        (i = e[a]) && (r = (c < 3 ? i(r) : c > 3 ? i(t, o, r) : i(t, o)) || r);
                return c > 3 && r && Object.defineProperty(t, o, r),
                    r
            }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = cc._decorator
            , a = r.ccclass
            , s = (r.property,
            function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }

                return i(t, e),
                    t.prototype.start = function () {
                        cc.winSize.height > 1279 ? this.node.setPosition(this.node.position.x, this.node.position.y + 100) : cc.winSize.height > 1100 && this.node.setPosition(this.node.position.x, this.node.position.y + 50)
                    }
                    ,
                    c([a], t)
            }(cc.Component));
        o.default = s,
            cc._RF.pop()
    }
        , {}],
    lightCircle: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "ea894xyQyJOnbpJxzicDEcn", "lightCircle");
        var n, i = this && this.__extends || (n = function (e, t) {
                    return (n = Object.setPrototypeOf || {
                                __proto__: []
                            } instanceof Array && function (e, t) {
                                e.__proto__ = t
                            }
                            || function (e, t) {
                                for (var o in t)
                                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                            }
                    )(e, t)
                }
                    ,
                    function (e, t) {
                        function o() {
                            this.constructor = e
                        }

                        n(e, t),
                            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
                                new o)
                    }
            ), c = this && this.__decorate || function (e, t, o, n) {
                var i, c = arguments.length, r = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(e, t, o, n);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        (i = e[a]) && (r = (c < 3 ? i(r) : c > 3 ? i(t, o, r) : i(t, o)) || r);
                return c > 3 && r && Object.defineProperty(t, o, r),
                    r
            }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = cc._decorator
            , a = r.ccclass
            , s = r.property
            , l = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.starPrefab = null,
                    t.colorArray = [null],
                    t.color = 0,
                    t
            }

            return i(t, e),
                t.prototype.start = function () {
                    var e = .2 * Math.random() + .2;
                    this.node.scale = .2,
                        this.node.runAction(cc.sequence(cc.scaleTo(.2, 1), cc.delayTime(.1), cc.fadeOut(e), cc.removeSelf()));
                    for (var t = 1; t <= 7 + 3 * Math.random(); t++) {
                        var o = cc.instantiate(this.starPrefab);
                        o.parent = this.node.parent,
                            o.setPosition(this.node.position),
                            o.getComponent("star").SetColor(this.color)
                    }
                }
                ,
                t.prototype.SetColor = function (e) {
                    this.color = e;
                    for (var t = 1; t <= 7; t++)
                        this.colorArray[t].active = !1;
                    this.colorArray[e].active = !0
                }
                ,
                c([s(cc.Prefab)], t.prototype, "starPrefab", void 0),
                c([s(cc.Node)], t.prototype, "colorArray", void 0),
                c([a], t)
        }(cc.Component);
        o.default = l,
            cc._RF.pop()
    }
        , {}],
    lineItem: [function (e, t) {
        "use strict";
        cc._RF.push(t, "4a4d3FueIxIY7N2r25EpDQb", "lineItem"),
            cc.Class({
                extends: cc.Component,
                properties: {
                    breakNum: 2,
                    pointLen: 20,
                    downY: 0,
                    maxPointNum: 50,
                    Point: cc.Prefab
                },
                onLoad: function () {
                    this.pointPool = [],
                        this.pointArr = [],
                        this.obsArr = []
                },
                updateLine: function (e, t, o, n) {
                    this.lineNum = 1,
                        this.endLine(),
                        this.starShowLine(e, t, o, 0, n)
                },
                starShowLine: function (e, t, o, n, i) {
                    if (this.lineNum > this.breakNum || this.pointArr.length > this.maxPointNum)
                        this.pointArr[this.pointArr.length - 1].position = cc.v2(1e4, 0);
                    else {
                        var c = null;
                        this.pointArr.length <= n ? (c = this.getPoint(),
                            this.pointArr.push(c)) : c = this.pointArr[n];
                        var r = cc.misc.degreesToRadians(t)
                            , a = Math.cos(r) * (this.pointLen + c.height)
                            , s = Math.sin(r) * (this.pointLen + c.height) + n * this.downY;
                        r = Math.atan2(s, a);
                        var l = e.x + Math.cos(r) * (this.pointLen + c.height)
                            , u = e.y + Math.sin(r) * (this.pointLen + c.height);
                        if (l >= o.width / 2 - c.width / 2 || l <= -o.width / 2 + c.width / 2) {
                            var h = l > o.x ? 1 : -1;
                            l = o.width / 2 * h,
                                u = e.y + (l - e.x) * Math.tan(r),
                                t = -(t - 180),
                                this.lineNum++
                        } else if (u >= o.height / 2 - c.height / 2) {
                            var p = u > 0 ? 1 : -1;
                            u = 0 + (o.height / 2 - c.height / 2) * p,
                                l = e.x + (u - e.y) / Math.tan(r),
                                t = -t,
                                this.lineNum++
                        } else
                            n += 1;
                        this.setPointsColor("#FFFFFF"),
                            c.position = cc.v2(l, u);
                        var b = this.isInterObs(c);
                        if (0 != b) {
                            this.lineNum++,
                                this.setPointsColor("#FF0000");
                            var d = this.setObsDir(e, r, b);
                            t = 1 == d.dir ? -t : -(t - 180),
                                e = d.starPos,
                                n += 1,
                                c.position = cc.v2(1e4, 0)
                        } else
                            e = cc.v2(l, u),
                                this.starShowLine(e, t, o, n, i)
                    }
                },
                setObsDir: function (e, t, o) {
                    var n = {}
                        , i = o.y > e.y ? o.y - o.height / 2 : o.y + o.height / 2
                        , c = e.x + (i - e.y) / Math.tan(t);
                    return c >= o.x - o.width / 2 && c <= o.x + o.width / 2 ? (n.dir = 1,
                        n.starPos = cc.v2(c, i)) : (n.dir = 2,
                        n.starPos = cc.v2(c, i)),
                        n
                },
                endLine: function () {
                    for (var e = 0; e < this.pointArr.length; e++) {
                        var t = this.pointArr[e];
                        t.position = cc.v2(1e4, 1e4),
                            this.pointPool.push(t)
                    }
                    this.pointArr = []
                },
                getPoint: function () {
                    if (this.pointPool.length <= 0) {
                        var e = cc.instantiate(this.Point);
                        return this.node.addChild(e),
                            e.width = 15,
                            e.height = 15,
                            e.position = cc.v2(1e4, 1e4),
                            e.zIndex = 1e3,
                            e
                    }
                    var t = this.pointPool[0];
                    return this.pointPool.splice(0, 1),
                        t
                },
                setPointsColor: function (e) {
                    for (var t = 0; t < this.pointArr.length; t++)
                        this.pointArr[t].color = cc.color(e)
                },
                isInterObs: function (e) {
                    for (var t = 0; t < this.obsArr.length; t++) {
                        var o = this.obsArr[t];
                        if (null != o && this.isRectInterRect(o, e) && !o.isRemove)
                            return o
                    }
                    return !1
                },
                isRectInterRect: function (e, t) {
                    return e.getBoundingBoxToWorld().intersects(t.getBoundingBoxToWorld())
                }
            }),
            cc._RF.pop()
    }
        , {}],
    linkHttpIconJs: [function (e, t) {
        "use strict";
        cc._RF.push(t, "95474fr0oNDP7SAidILF03q", "linkHttpIconJs");
        var o = e("MainManage")
            , n = e("GameConfig");
        cc.Class({
            extends: cc.Component,
            properties: {
                iconSpr: cc.Node,
                iconSpr1: cc.Node
            },
            onLoad: function () {
                if (this._imageArr = [],
                    this.stopUpdateBool = !0,
                    this.gameWidth = cc.winSize.width,
                    this.gameHeight = cc.winSize.height,
                null != o.recGameData && "" != o.recGameData && null != o.recGameimg1 && "" != o.recGameimg1) {
                    var e = 50 - this.gameWidth / 2
                        , t = this.gameHeight - 50 - this.gameHeight / 2;
                    null != o.recGamePos && "" != o.recGamePos && (1 == o.recGamePos ? (e = 50 - this.gameWidth / 2,
                        t = this.gameHeight - 50 - this.gameHeight / 2) : 2 == o.recGamePos ? (e = this.gameWidth - 50 - this.gameWidth / 2,
                        t = this.gameHeight - 50 - this.gameHeight / 2) : 3 == o.recGamePos ? (e = this.gameWidth - 50 - this.gameWidth / 2,
                        t = 50 - this.gameHeight / 2) : 4 == o.recGamePos && (e = 50 - this.gameWidth / 2,
                        t = 50 - this.gameHeight / 2));
                    var n = o.recGameimg1
                        , i = o.recGameimg2
                        , c = this.iconSpr
                        , r = this.iconSpr1
                        , a = this;
                    cc.loader.load(n, function (o, n) {
                        c.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(n),
                            a.iconSpr.opacity = 0,
                            a.iconSpr.x = e,
                            a.iconSpr.y = t,
                            a._imageArr.push(a.iconSpr)
                    }),
                        cc.loader.load(i, function (o, n) {
                            r.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(n),
                                a.iconSpr1.opacity = 0,
                                a.iconSpr1.x = e,
                                a.iconSpr1.y = t,
                                a._imageArr.push(a.iconSpr1)
                        })
                }
                this.addTouchEvents()
            },
            showLinkPic: function () {
                var e, t;
                e = null != o.recGameDelPau ? o.recGameDelPau : 6,
                    cc.log("dMainManager.recGameDelPer", o.recGameDelPer),
                    t = null != o.recGameDelPer ? o.recGameDelPer : .7,
                    this._imageArr[0].opacity = 255,
                    this._imageArr[0].runAction(cc.repeatForever(cc.sequence(cc.delayTime(e), cc.rotateBy(t, 0, 180), cc.callFunc(function () {
                        this._imageArr[0].setRotation(0),
                            this._imageArr[0].opacity = 0,
                            this._imageArr[1].opacity = 255
                    }, this), cc.delayTime(e), cc.callFunc(function () {
                        this.flowerAction(this._imageArr[1], t)
                    }, this), cc.delayTime(t), cc.callFunc(function () {
                        this._imageArr[1].opacity = 0,
                            this._imageArr[0].opacity = 255
                    }, this))))
            },
            flowerAction: function (e, t) {
                e.runAction(cc.sequence(cc.rotateBy(t, 0, 180), cc.callFunc(function () {
                    e.setRotation(0)
                })))
            },
            start: function () {
            },
            addTouchEvents: function () {
                var e = this
                    , t = {
                    event: cc.EventListener.TOUCH_ONE_BY_ONE,
                    onTouchBegan: function (t) {
                        var i = t.getLocation();
                        if (e._imageArr.length >= 2) {
                            var c = Math.abs(i.x - e.gameWidth / 2 - e._imageArr[0].x)
                                , r = Math.abs(i.y - e.gameHeight / 2 - e._imageArr[0].y);
                            c <= 30 && r <= 30 && (n.noTouchBool = !1,
                            null != o.recGameUrl && "" != o.recGameUrl && (e._imageArr[0].runAction(cc.sequence(cc.scaleTo(.1, .8), cc.scaleTo(.1, 1), cc.callFunc(function () {
                                window.location.href = o.recGameUrl
                            }))),
                                e._imageArr[1].runAction(cc.sequence(cc.scaleTo(.1, .8), cc.scaleTo(.1, 1)))),
                                console.log("touchLinkHttp"))
                        }
                        return !0
                    },
                    onTouchMoved: function () {
                    },
                    onTouchEnded: function () {
                    }
                };
                cc.EventTarget.call(t, e.node)
            },
            update: function () {
                this.stopUpdateBool && this._imageArr.length >= 2 && (this.stopUpdateBool = !1,
                    this.showLinkPic())
            }
        }),
            cc._RF.pop()
    }
        , {
            GameConfig: "GameConfig",
            MainManage: "MainManage"
        }],
    moreGameBtnShiPei: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "0ea7e9z03BKlKTBm5vnAVQh", "moreGameBtnShiPei");
        var n, i = this && this.__extends || (n = function (e, t) {
                    return (n = Object.setPrototypeOf || {
                                __proto__: []
                            } instanceof Array && function (e, t) {
                                e.__proto__ = t
                            }
                            || function (e, t) {
                                for (var o in t)
                                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                            }
                    )(e, t)
                }
                    ,
                    function (e, t) {
                        function o() {
                            this.constructor = e
                        }

                        n(e, t),
                            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
                                new o)
                    }
            ), c = this && this.__decorate || function (e, t, o, n) {
                var i, c = arguments.length, r = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(e, t, o, n);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        (i = e[a]) && (r = (c < 3 ? i(r) : c > 3 ? i(t, o, r) : i(t, o)) || r);
                return c > 3 && r && Object.defineProperty(t, o, r),
                    r
            }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = cc._decorator
            , a = r.ccclass
            , s = (r.property,
            function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }

                return i(t, e),
                    t.prototype.start = function () {
                        cc.winSize.height > 1279 && this.node.setPosition(this.node.position.x, this.node.position.y + 60),
                        cc.winSize.height < 1100 && (this.node.setPosition(this.node.position.x, this.node.position.y - 60),
                            this.node.scale = .75)
                    }
                    ,
                    c([a], t)
            }(cc.Component));
        o.default = s,
            cc._RF.pop()
    }
        , {}],
    nextBubblePic: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "3743e20BtBGHqS+s4NTRfds", "nextBubblePic");
        var n, i = this && this.__extends || (n = function (e, t) {
                    return (n = Object.setPrototypeOf || {
                                __proto__: []
                            } instanceof Array && function (e, t) {
                                e.__proto__ = t
                            }
                            || function (e, t) {
                                for (var o in t)
                                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                            }
                    )(e, t)
                }
                    ,
                    function (e, t) {
                        function o() {
                            this.constructor = e
                        }

                        n(e, t),
                            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
                                new o)
                    }
            ), c = this && this.__decorate || function (e, t, o, n) {
                var i, c = arguments.length, r = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(e, t, o, n);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        (i = e[a]) && (r = (c < 3 ? i(r) : c > 3 ? i(t, o, r) : i(t, o)) || r);
                return c > 3 && r && Object.defineProperty(t, o, r),
                    r
            }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = cc._decorator
            , a = r.ccclass
            , s = r.property
            , l = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.colorArray = [null],
                    t.color = 0,
                    t
            }

            return i(t, e),
                t.prototype.start = function () {
                    this.node.scale = .5,
                        this.node.setPosition(-55, -.5 * cc.winSize.height + 110 - 15)
                }
                ,
                t.prototype.SetColor = function (e) {
                    if (this.color = e,
                    8 == e)
                        this.scheduleOnce(function () {
                            for (var e = 1; e <= 9; e++)
                                this.colorArray[e].active = !1;
                            this.colorArray[8].active = !0
                        }, 1.55);
                    else {
                        for (var t = 1; t <= 9; t++)
                            this.colorArray[t].active = !1;
                        this.colorArray[e].active = !0
                    }
                }
                ,
                c([s(cc.Node)], t.prototype, "colorArray", void 0),
                c([a], t)
        }(cc.Component);
        o.default = l,
            cc._RF.pop()
    }
        , {}],
    plusScore: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "1f0e2w57MhEE6hxKiET8H0Z", "plusScore");
        var n, i = this && this.__extends || (n = function (e, t) {
                    return (n = Object.setPrototypeOf || {
                                __proto__: []
                            } instanceof Array && function (e, t) {
                                e.__proto__ = t
                            }
                            || function (e, t) {
                                for (var o in t)
                                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                            }
                    )(e, t)
                }
                    ,
                    function (e, t) {
                        function o() {
                            this.constructor = e
                        }

                        n(e, t),
                            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
                                new o)
                    }
            ), c = this && this.__decorate || function (e, t, o, n) {
                var i, c = arguments.length, r = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(e, t, o, n);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        (i = e[a]) && (r = (c < 3 ? i(r) : c > 3 ? i(t, o, r) : i(t, o)) || r);
                return c > 3 && r && Object.defineProperty(t, o, r),
                    r
            }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = e("./GameState")
            , a = cc._decorator
            , s = a.ccclass
            , l = a.property
            , u = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.scoreBoard = null,
                    t.scoreNow = 0,
                    t.changeTime = .15,
                    t.a = !1,
                    t
            }

            return i(t, e),
                t.prototype.start = function () {
                    this.scheduleOnce(function () {
                        this.a = !0
                    }, .3)
                }
                ,
                t.prototype.update = function (e) {
                    this.a && (this.scoreNow += (r.default.Instance.level + 1 - this.scoreNow) * e / this.changeTime,
                        this.getComponent(cc.Label).string = Math.floor(this.scoreNow).toString()),
                    this.scoreBoard.width - this.node.width < 30 && (this.scoreBoard.width = this.node.width + 30),
                    r.default.Instance.level >= r.default.Instance.presentScore && (r.default.Instance.lastPresentScore = r.default.Instance.presentScore,
                        r.default.Instance.presentScore += r.default.Instance.presentScoreInterval,
                        r.default.Instance.presentScoreInterval += 800,
                        r.default.Instance.present.stopAllActions(),
                        r.default.Instance.present.x = 400,
                        r.default.Instance.MovePresent(),
                        this.scheduleOnce(function () {
                            r.default.Instance.nextBubbleColor9 = !1,
                                r.default.Instance.nextBubbleColor8 = !0,
                                r.default.Instance.nextBubbleColor = 8
                        }, 1.55),
                        r.default.Instance.nextBubblePic.getComponent("nextBubblePic").SetColor(8),
                        r.default.Instance.CreateRainbowPic())
                }
                ,
                c([l(cc.Node)], t.prototype, "scoreBoard", void 0),
                c([s], t)
        }(cc.Component);
        o.default = u,
            cc._RF.pop()
    }
        , {
            "./GameState": "GameState"
        }],
    pounding: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "d388cZZwMdJb58dT9jKLINL", "pounding");
        var n, i = this && this.__extends || (n = function (e, t) {
                    return (n = Object.setPrototypeOf || {
                                __proto__: []
                            } instanceof Array && function (e, t) {
                                e.__proto__ = t
                            }
                            || function (e, t) {
                                for (var o in t)
                                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                            }
                    )(e, t)
                }
                    ,
                    function (e, t) {
                        function o() {
                            this.constructor = e
                        }

                        n(e, t),
                            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
                                new o)
                    }
            ), c = this && this.__decorate || function (e, t, o, n) {
                var i, c = arguments.length, r = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(e, t, o, n);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        (i = e[a]) && (r = (c < 3 ? i(r) : c > 3 ? i(t, o, r) : i(t, o)) || r);
                return c > 3 && r && Object.defineProperty(t, o, r),
                    r
            }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = cc._decorator
            , a = r.ccclass
            , s = (r.property,
            function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }

                return i(t, e),
                    t.prototype.start = function () {
                        this.node.runAction(cc.repeatForever(cc.sequence(cc.delayTime(1.8), cc.scaleTo(.2, 1.2), cc.scaleTo(.2, 1))))
                    }
                    ,
                    c([a], t)
            }(cc.Component));
        o.default = s,
            cc._RF.pop()
    }
        , {}],
    resArr: [function (e, t) {
        "use strict";
        cc._RF.push(t, "8a68e/WQz1Feo++msjg6z8R", "resArr"),
            cc.Class({
                extends: cc.Component,
                properties: {
                    SpriteFrameArr: [cc.SpriteFrame],
                    PrefabArr: [cc.Prefab],
                    audiosArr: {
                        type: cc.AudioClip,
                        default: []
                    }
                },
                onLoad: function () {
                    null != ToolsJs && (ToolsJs.PrefabArrJs = this,
                        ToolsJs.SpriteFrameJs = this,
                        ToolsJs.AudioArrJs = this),
                        this.addPrefabs(),
                        this.addSpriteFrame(),
                        this.audioClipDic = {};
                    for (var e = 0; e < this.audiosArr.length; e++) {
                        var t = this.audiosArr[e];
                        this.audioClipDic[t.name] = t
                    }
                },
                playAudio: function (e, t, o) {
                    return void 0 === t && (t = .3),
                    void 0 === o && (o = !1),
                        null != this.audioClipDic[e] ? cc.audioEngine.play(this.audioClipDic[e], o, t) : (console.log("\u6ca1\u6709\u627e\u5230\u97f3\u9891\uff1a" + e),
                            null)
                },
                getAudioClip: function (e) {
                    return null != this.audioClipDic[e] ? this.audioClipDic[e] : (console.log("\u6ca1\u6709\u627e\u5230\u97f3\u9891\uff1a" + e),
                        null)
                },
                addSpriteFrame: function () {
                    this.spriteArr = {};
                    for (var e = 0; e < this.SpriteFrameArr.length; e++) {
                        var t = this.SpriteFrameArr[e];
                        null != t && (this.spriteArr[t.name] = t)
                    }
                },
                getSpriteFrame: function (e) {
                    return null != this.spriteArr[e] ? this.spriteArr[e] : (console.log("\u6ca1\u6709\u6dfb\u52a0\u56fe\u7247\uff1a" + e),
                        null)
                },
                addPrefabs: function () {
                    this.prefabsArr = {};
                    for (var e = 0; e < this.PrefabArr.length; e++) {
                        var t = this.PrefabArr[e];
                        this.prefabsArr[t.name] = t
                    }
                },
                getPrefabs: function (e) {
                    return null != this.prefabsArr[e] ? this.prefabsArr[e] : (console.log("\u6ca1\u6709\u9884\u5236\u4f53\uff1a" + e),
                        null)
                }
            }),
            cc._RF.pop()
    }
        , {}],
    screenShiPei: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "defba8UoJZDJ6+p+RIQlwQ0", "screenShiPei");
        var n, i = this && this.__extends || (n = function (e, t) {
                    return (n = Object.setPrototypeOf || {
                                __proto__: []
                            } instanceof Array && function (e, t) {
                                e.__proto__ = t
                            }
                            || function (e, t) {
                                for (var o in t)
                                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                            }
                    )(e, t)
                }
                    ,
                    function (e, t) {
                        function o() {
                            this.constructor = e
                        }

                        n(e, t),
                            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
                                new o)
                    }
            ), c = this && this.__decorate || function (e, t, o, n) {
                var i, c = arguments.length, r = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(e, t, o, n);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        (i = e[a]) && (r = (c < 3 ? i(r) : c > 3 ? i(t, o, r) : i(t, o)) || r);
                return c > 3 && r && Object.defineProperty(t, o, r),
                    r
            }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = cc._decorator
            , a = r.ccclass
            , s = (r.property,
            function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }

                return i(t, e),
                    t.prototype.start = function () {
                        this.node.width = cc.winSize.width,
                            this.node.height = cc.winSize.height
                    }
                    ,
                    c([a], t)
            }(cc.Component));
        o.default = s,
            cc._RF.pop()
    }
        , {}],
    shootBubble: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "755e1axWBdEuYIe6jmUw2iG", "shootBubble");
        var n, i = this && this.__extends || (n = function (e, t) {
                    return (n = Object.setPrototypeOf || {
                                __proto__: []
                            } instanceof Array && function (e, t) {
                                e.__proto__ = t
                            }
                            || function (e, t) {
                                for (var o in t)
                                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                            }
                    )(e, t)
                }
                    ,
                    function (e, t) {
                        function o() {
                            this.constructor = e
                        }

                        n(e, t),
                            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
                                new o)
                    }
            ), c = this && this.__decorate || function (e, t, o, n) {
                var i, c = arguments.length, r = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(e, t, o, n);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        (i = e[a]) && (r = (c < 3 ? i(r) : c > 3 ? i(t, o, r) : i(t, o)) || r);
                return c > 3 && r && Object.defineProperty(t, o, r),
                    r
            }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = cc._decorator
            , a = r.ccclass
            , s = r.property
            , l = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.colorArray = [null],
                    t.multiply6 = null,
                    t.color = 0,
                    t.mapI = 0,
                    t.mapJ = 0,
                    t
            }

            return i(t, e),
                t.prototype.start = function () {
                }
                ,
                t.prototype.SetColor = function (e) {
                    this.color = e;
                    for (var t = 1; t <= 8; t++)
                        this.colorArray[t].active = !1;
                    this.colorArray[e].active = !0
                }
                ,
                t.prototype.SetPosInMap = function (e, t) {
                    this.mapI = e,
                        this.mapJ = t
                }
                ,
                c([s(cc.Node)], t.prototype, "colorArray", void 0),
                c([s(cc.Node)], t.prototype, "multiply6", void 0),
                c([a], t)
        }(cc.Component);
        o.default = l,
            cc._RF.pop()
    }
        , {}],
    soundBtn: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "58101vhWopEgrpZVFNyWokl", "soundBtn");
        var n, i = this && this.__extends || (n = function (e, t) {
                    return (n = Object.setPrototypeOf || {
                                __proto__: []
                            } instanceof Array && function (e, t) {
                                e.__proto__ = t
                            }
                            || function (e, t) {
                                for (var o in t)
                                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                            }
                    )(e, t)
                }
                    ,
                    function (e, t) {
                        function o() {
                            this.constructor = e
                        }

                        n(e, t),
                            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
                                new o)
                    }
            ), c = this && this.__decorate || function (e, t, o, n) {
                var i, c = arguments.length, r = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(e, t, o, n);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        (i = e[a]) && (r = (c < 3 ? i(r) : c > 3 ? i(t, o, r) : i(t, o)) || r);
                return c > 3 && r && Object.defineProperty(t, o, r),
                    r
            }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = e("./GameState")
            , a = cc._decorator
            , s = a.ccclass
            , l = a.property
            , u = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.soundOn = null,
                    t.soundOff = null,
                    t
            }

            return i(t, e),
                t.prototype.start = function () {
                    "undefined" != JSON.parse(cc.sys.localStorage.getItem("soundData_BubbleShooter1")) && JSON.parse(cc.sys.localStorage.getItem("soundData_BubbleShooter1")) && /[^\s]/.test(cc.sys.localStorage.getItem("soundData_BubbleShooter1")) ? (this.node.y = -.5 * cc.winSize.height + 110 - 20,
                        this.node.on(cc.Node.EventType.TOUCH_START, this.OnClick, this)) : (cc.log("\u6ca1\u6709\u8bb0\u5f55"),
                        cc.sys.localStorage.setItem("soundData_BubbleShooter1", JSON.stringify(1)),
                        this.FirstShow())
                }
                ,
                t.prototype.FirstShow = function () {
                    this.node.setPosition(0, 0),
                        this.node.scale = 3,
                        this.node.runAction(cc.sequence(cc.delayTime(.3), cc.scaleTo(.15, 2), cc.scaleTo(.15, 3), cc.scaleTo(.15, 2), cc.scaleTo(.15, 3), cc.delayTime(.05), cc.spawn(cc.moveTo(.3, 240, -.5 * cc.winSize.height + 110 - 20), cc.scaleTo(.3, 1)), cc.callFunc(function () {
                            this.node.on(cc.Node.EventType.TOUCH_START, this.OnClick, this)
                        }, this)))
                }
                ,
                t.prototype.OnClick = function () {
                    this.node.off(cc.Node.EventType.TOUCH_START, this.OnClick, this),
                        this.node.runAction(cc.sequence(cc.scaleTo(.1, .8), cc.callFunc(function () {
                            r.default.Instance.canPlaySound ? (this.soundOn.active = !1,
                                this.soundOff.active = !0) : (this.soundOn.active = !0,
                                this.soundOff.active = !1),
                                r.default.Instance.canPlaySound = !r.default.Instance.canPlaySound
                        }, this), cc.scaleTo(.1, 1), cc.callFunc(function () {
                            this.node.on(cc.Node.EventType.TOUCH_START, this.OnClick, this)
                        }, this)))
                }
                ,
                c([l(cc.Node)], t.prototype, "soundOn", void 0),
                c([l(cc.Node)], t.prototype, "soundOff", void 0),
                c([s], t)
        }(cc.Component);
        o.default = u,
            cc._RF.pop()
    }
        , {
            "./GameState": "GameState"
        }],
    startGameJs: [function (e, t) {
        "use strict";
        cc._RF.push(t, "280c3rsZJJKnZ9RqbALVwtK", "startGameJs");
        var o = e("GameUiTools")
            , n = (e("HttpManagerJs"),
            e("MainManage"))
            , i = (e("LoadSceneJs"),
            e("GameConfig"));
        cc.Class({
            extends: cc.Component,
            properties: {
                showInfoT: cc.Label,
                startT: cc.Label
            },
            onLoad: function () {
                i.publicGameBool && n.init(),
                    this.showInfoT.string = n.gameInfoText,
                    this.startT.string = n.txtStartText,
                    this.node.on("touchend", function () {
                        this.node.x = -2e3
                    }, this)
            },
            addTouchEvents: function () {
                var e = {
                    event: cc.EventListener.TOUCH_ONE_BY_ONE,
                    onTouchBegan: function () {
                        return o.loadingScene("MainGameScene"),
                            !0
                    },
                    onTouchMoved: function () {
                    },
                    onTouchEnded: function () {
                    }
                };
                cc.eventManager.addListener(e, this.node)
            },
            update: function () {
            }
        }),
            cc._RF.pop()
    }
        , {
            GameConfig: "GameConfig",
            GameUiTools: "GameUiTools",
            HttpManagerJs: "HttpManagerJs",
            LoadSceneJs: "LoadSceneJs",
            MainManage: "MainManage"
        }],
    star: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "4eed4YSFr1A3rALSOhEn62Q", "star");
        var n, i = this && this.__extends || (n = function (e, t) {
                    return (n = Object.setPrototypeOf || {
                                __proto__: []
                            } instanceof Array && function (e, t) {
                                e.__proto__ = t
                            }
                            || function (e, t) {
                                for (var o in t)
                                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                            }
                    )(e, t)
                }
                    ,
                    function (e, t) {
                        function o() {
                            this.constructor = e
                        }

                        n(e, t),
                            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
                                new o)
                    }
            ), c = this && this.__decorate || function (e, t, o, n) {
                var i, c = arguments.length, r = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(e, t, o, n);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        (i = e[a]) && (r = (c < 3 ? i(r) : c > 3 ? i(t, o, r) : i(t, o)) || r);
                return c > 3 && r && Object.defineProperty(t, o, r),
                    r
            }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = cc._decorator
            , a = r.ccclass
            , s = r.property
            , l = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.colorArray = [null],
                    t.color = 0,
                    t
            }

            return i(t, e),
                t.prototype.start = function () {
                    var e = .2 * Math.random() + .15
                        , t = .2 * Math.random() + .15;
                    this.node.opacity = 100 * Math.random() + 150,
                        this.node.scale = .3 * Math.random() + .3;
                    var o = 360 * Math.random()
                        , n = cc.v2(Math.cos(o * Math.PI / 180), Math.sin(o * Math.PI / 180));
                    n.mulSelf(60 * Math.random() + 20),
                        this.node.runAction(cc.sequence(cc.moveBy(e, n).easing(cc.easeOut(1)), cc.fadeOut(t), cc.removeSelf()))
                }
                ,
                t.prototype.SetColor = function (e) {
                    this.color = e;
                    for (var t = 1; t <= 14; t++)
                        this.colorArray[t].active = !1;
                    Math.random() < .5 ? this.colorArray[2 * e].active = !0 : this.colorArray[2 * e - 1].active = !0
                }
                ,
                c([s(cc.Node)], t.prototype, "colorArray", void 0),
                c([a], t)
        }(cc.Component);
        o.default = l,
            cc._RF.pop()
    }
        , {}],
    topAirWall: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "7d3dc0GYQxDmrLVoTpCmDvj", "topAirWall");
        var n, i = this && this.__extends || (n = function (e, t) {
                    return (n = Object.setPrototypeOf || {
                                __proto__: []
                            } instanceof Array && function (e, t) {
                                e.__proto__ = t
                            }
                            || function (e, t) {
                                for (var o in t)
                                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                            }
                    )(e, t)
                }
                    ,
                    function (e, t) {
                        function o() {
                            this.constructor = e
                        }

                        n(e, t),
                            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
                                new o)
                    }
            ), c = this && this.__decorate || function (e, t, o, n) {
                var i, c = arguments.length, r = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(e, t, o, n);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        (i = e[a]) && (r = (c < 3 ? i(r) : c > 3 ? i(t, o, r) : i(t, o)) || r);
                return c > 3 && r && Object.defineProperty(t, o, r),
                    r
            }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = cc._decorator
            , a = r.ccclass
            , s = (r.property,
            function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }

                return i(t, e),
                    t.prototype.start = function () {
                        this.node.setPosition(0, .5 * cc.winSize.height + 100),
                            this.scheduleOnce(function () {
                                this.node.setPosition(0, .5 * cc.winSize.height + 100)
                            })
                    }
                    ,
                    c([a], t)
            }(cc.Component));
        o.default = s,
            cc._RF.pop()
    }
        , {}],
    use_reversed_rotateTo: [function (e, t) {
        "use strict";
        cc._RF.push(t, "c9879qA7D1DEp8javSZYaTl", "use_reversed_rotateTo"),
            cc.RotateTo._reverse = !0,
            cc._RF.pop()
    }
        , {}],
    ysj: [function (e, t, o) {
        "use strict";
        cc._RF.push(t, "97f79UclLRAsKLgbK0PVL3L", "ysj");
        var n, i = this && this.__extends || (n = function (e, t) {
                    return (n = Object.setPrototypeOf || {
                                __proto__: []
                            } instanceof Array && function (e, t) {
                                e.__proto__ = t
                            }
                            || function (e, t) {
                                for (var o in t)
                                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                            }
                    )(e, t)
                }
                    ,
                    function (e, t) {
                        function o() {
                            this.constructor = e
                        }

                        n(e, t),
                            e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype,
                                new o)
                    }
            ), c = this && this.__decorate || function (e, t, o, n) {
                var i, c = arguments.length, r = c < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(e, t, o, n);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        (i = e[a]) && (r = (c < 3 ? i(r) : c > 3 ? i(t, o, r) : i(t, o)) || r);
                return c > 3 && r && Object.defineProperty(t, o, r),
                    r
            }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = cc._decorator
            , a = r.ccclass
            , s = r.property
            , l = function (e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.label = null,
                    t.text = "hello",
                    t
            }

            return i(t, e),
                t.prototype.start = function () {
                }
                ,
                c([s(cc.Label)], t.prototype, "label", void 0),
                c([s], t.prototype, "text", void 0),
                c([a], t)
        }(cc.Component);
        o.default = l,
            cc._RF.pop()
    }
        , {}]
}, {}, ["HttpManagerJs", "LanguageSetJs", "LoadSceneJs", "AniTools", "MainGameJS", "ToolsJs", "resArr", "MainManage", "GameState", "airWall", "bgLine", "bgScore", "topAirWall", "exFallBubble", "fallBubble", "guideLinePic", "launchBubble", "nextBubblePic", "shootBubble", "lightCircle", "star", "dataJs", "failedUi", "gameOverNode", "jb", "ysj", "lineItem", "plusScore", "hand", "language", "levelUIShiPei", "moreGameBtnShiPei", "pounding", "screenShiPei", "soundBtn", "GameConfig", "GameUiTools", "gameOverJs", "linkHttpIconJs", "startGameJs", "use_reversed_rotateTo"]);
