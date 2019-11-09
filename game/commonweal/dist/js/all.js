/********游戏js**********/
var hastouch = "ontouchstart" in window?true:false;
touchstart = hastouch?"touchstart":"mousedown";
touchend = hastouch?"touchend":"mouseup";
document.ontouchstart=function (event){
    var e=arguments[0] || window.event;
    if (e && e.preventDefault){
        e.preventDefault();
    }else{
        window.event.returnValue = false;
    }

};

$(function() {
    //游戏资源加载模块
    var jsload = {
        img: [ 'loading.gif','logo.png','page1_hand.png','page1_bg2.png','page1_bgimg.png','page1_bgimg2.png','page1_cloud.png'
            ,'page1_hand.png','page1_over.png','page1_run.png','page1_startBtn.png','page1_title.png','page1_word.png'
            ,'page2_again.png','page2_bg1.png','page2_bg3.png','page2_body.png','page2_head.png','page2_man.png'
            ,'page2_tree.png','page2_word.png','page2_blackMan.png','page2_overword.png','page2_successword.png','page2_bug.png'
            ,'page2_card.png','page2_fish.png','page2_grass.png'
            ,'page3_hand.png','page3_bgimg2.png','page3_bgimg3.png','page3_lightning.png','page3_girl.png'
            ,'page3_over.png','page3_overgirl.png','page3_black.png','page3_fly.png','page3_next.png','page3_bgimg1.png','page3_girl1.png'
            ,'page4_bgImg1.png','page4_bgImg2.png','page4_bgImg3.png','page4_c.png','page4_caution.png'
            ,'page4_kid.png','page4_word2.png','page4_over.png','page4_next.png','page4_kid2.png','page4_hand.png'
            ,'page5_end.png','page5_title1.png','page5_title2.png','page5_word.png'
        ],
        count: 0,
        go: 0,
        init: function () {
            this.count += this.img.length;
            this.go = this.count;
            this.loadImg();
        },
        loadImg: function () {
            for (var i = 0; i < this.img.length; i++) {
                var img = new Image();
                var _this = this;
                img.onload = function () {
                    _this.move();
                };
                img.src = 'images/' + this.img[i];}
            return this;
        },
        move: function () {
            this.go--;
            var press = Math.round((this.count - this.go) / this.count * 100);
            if(press == 100){
                $('.load').remove();
                $('audio')[0].play();
                $('.page').eq(0).show();
            }
        }
    };
    jsload.init();

//游戏模块
    var start = {
        init: function () {
            this.$pages = $('.page'),
                this.$page1_over = $('.page1_over'),
                this.$startbtn = $('#startbtn'),
                this.$page2=$('.page2'),
                this.$page2_oldMan=$('.page2_oldMan'),
                this.$page2_tree1=$('.page2_tree1'),
                this.$page2_hand=$('.page2_hand'),
                this.$page2_bgcloud=$('.page2_bgcloud'),
                this.$page2_water=$('.page2_water'),
                this.$page2_oldManbody=$('.page2_oldManbody'),
                this.$page2_fish2=$('.page2_fish2'),
                this.$page2_oldManhead=$('.page2_oldManhead'),
                this.$page2_successMan=$('.page2_successMan'),
                this.$page2_sign=$('.page2_sign'),
                this.$page2_grass=$('.page2_grass'),
                this.$page2_bee=$('.page2_bee'),
                this.$page2_notice=$('.page2_notice'),
                this.$page2_over=$('.page2_over'),
                this.$page2_over1=$('.page2_over1'),
                this.$page2_success=$('.page2_success'),
                this.$page2_success1=$('.page2_success1'),
                this.$page2_blackMan=$('.page2_blackMan'),
                this.$page2_touchSuccess=$('.page2_touchSuccess'),
                this.$page2_again=$('.page2_again'),
                this.$page2_next=$('.page2_next'),
                this.manGo=null,
                this.hand=null,
                this.page2_start=null,
                this.$page3_btn=$('.page3_btn'),
                this.$page3_fly=$('.page3_fly'),
                this.$page3_again=$('.page3_again'),
                this.$page3_next=$('.page3_next'),
                this.$page3_girl=$('.page3_girl'),
                this.$page3_bg3=$('.page3_bg3'),
                this.$page3_againBtn=$('.page3_againBtn'),
                this.$page3_success=$('.page3_success'),
                this.$page3_nextBtn=$('.page3_nextBtn'),
                this.$page3_black=$('.page3_black'),
                this.die=null,
                this.$page3=$('.page3'),
                this.$page4_word2=$('.page4_word2'),
                this.$page4_btn = $('.page4_btn'),
                this.$page4_next = $('.page4_next'),
                this.$page4_nextBtn = $('.page4_nextBtn'),
                this.$page4_overBtn = $('.page4_overBtn'),
                this.$page4_over = $('.page4_over'),
                this.$page4_kid = $('.page4_kid'),
                this.$page4_c = $('.page4_c'),
                this.$page4_hand = $('.page4_hand'),
                this.$page4_caution=$('.page4_caution'),
                this.$page4_success=$('.page4_success'),
                this.$page6=$('.page6'),
                this.$page4_kid2 = $('.page4_kid2');

            var _this = this;
            //游戏开始
            this.$startbtn.on(touchstart, function () {
                _this.$page1_over.show();
                setTimeout(function(){
                    _this.$page1_over.hide();
                    _this.$pages.eq(0).hide();
                    _this.$pages.eq(1).show();
                    _this.$page2_tree1.show();
                    _this.$page2_bgcloud.show();
                    _this.$page2_water.show();
                    _this.$page2_oldMan.show();
                    _this.$page2_grass.show();
                    _this.$page2_bee.show();
                    _this.$page2_notice.show();
                    setTimeout(function () {
                        _this.$page2_touchSuccess.show();
                        _this.$page2_notice.hide()
                    }, 2000);
                    _this.page2_start = function () {
                        _this.$page2_touchSuccess.hide();
                        _this.$page2_oldMan.hide();
                        _this.$page2_hand.hide();
                        _this.$page2_oldManbody.show();
                        _this.$page2_oldManhead.show();
                        _this.$page2_blackMan.show();
                        _this.$page2_fish2.show();
                        setTimeout(function () {

                            _this.$page2_over.show();
                            _this.$page2_over1.show();
                            _this.$page2_again.show();
                        }, 2000)
                    };

                    _this.manGo = setTimeout(_this.page2_start, 8000);
                    _this.hand = setTimeout(function () {
                        _this.$page2_hand.show();

                    }, 3000)
                },4000);
            });
            this.$page2_touchSuccess.on(touchstart,function(){
                clearTimeout(_this.manGo);
                clearTimeout(_this.hand);
                _this.$page2_oldMan.hide();
                _this.$page2_successMan.show();
                _this.$page2_sign.show();
                _this.$page2_hand.hide();
                setTimeout(function () {
                    _this.$page2_next.show();
                    _this.$page2_success.show();
                    _this.$page2_success1.show();
                },2000);
            });
            this.$page2_again.on(touchstart,function(){
                setTimeout(function(){
                    _this.$page2_touchSuccess.show();
                },2000);
                _this.$pages.eq(1).hide();
                _this.$page2_over.hide();
                _this.$page2_over1.hide();
                _this.$page2_again.hide();
                _this.$page2_oldManbody.hide();
                _this.$page2_oldManhead.hide();
                _this.$page2_blackMan.hide();
                _this.$page2_fish2.hide();
                _this.$pages.eq(1).show();
                _this.$page2_oldMan.show();
                _this.$page2_notice.show();
                setTimeout(function(){
                    _this.$page2_touchSuccess.show();
                    _this.$page2_notice.hide()},2000);
                _this.manGo=setTimeout(_this.page2_start,8000);
                _this.hand=setTimeout(function () {
                    _this.$page2_hand.show();
                },3000)
            });

            this.$page2_next.on(touchstart,function(){
                _this.$pages.eq(1).hide();
                _this.$pages.eq(2).show();
                _this.$page3_fly.show();
                _this.die = setTimeout(function(){
                    _this.$page3_again.show();
                    _this.$page3_success.show();

                },6000);
                setTimeout(function(){_this.$page3_btn.hide()},5000);
                setTimeout(function(){
                    _this.$page3_bg3.hide();
                    _this.$page3_btn.show();
                },2000);
            });

            this.$page3_btn.on(touchstart,function(){
                _this.$page3_black.show();
                _this.$page3_btn.hide();
                setTimeout(function(){
                    _this.$page3_next.show();
                    _this.$page3_success.show();
                },1000);
                _this.$page3_girl.css('-webkit-animation-play-state','paused');
                _this.$page3_girl.css('animation-play-state','paused');
                _this.$page3_girl.css('background-image','url(images/page3_girl1.png)');
                clearTimeout(_this.die);
            });
            this.$page3_againBtn.on(touchstart,function(){
                _this.$page3_bg3.show();
                _this.$page3_again.hide();
                _this.$page3_success.hide();
                _this.$page3.hide();
                _this.$page3_fly.hide();
                _this.$page3_fly.hide();
                _this.$page3.show();
                _this.$page3_fly.show();
                _this.$page3_fly.show();
                clearTimeout(_this.die);
                setTimeout(function(){_this.$page3_btn.hide()},5000);
                _this.die = setTimeout(function(){
                    _this.$page3_again.show();
                    _this.$page3_success.show();
                },6000);
                setTimeout(function(){
                    _this.$page3_bg3.hide();
                    _this.$page3_btn.show()},2000);
            });


            this.$page3_nextBtn.on(touchstart,function(){
                clearTimeout(_this.die);
                _this.$pages.eq(2).hide();
                _this.$pages.eq(3).show();

                _this.$page4_kid.show();
                _this.$page4_kid.css({"animation-play-state" : "running","-webkit-animation-play-state" : "ruinning"});
                _this.page4_begin();

            });

            this.page4_begin = function(){
                _this.$page4_word2.show();
                setTimeout(function(){_this.$page4_word2.hide()},2000);
                _this.zhang3 = setTimeout(function(){
                    _this.$page4_btn.show();
                },2000);
                _this.zhang1 = setTimeout(function(){
                    _this.$page4_kid2.show();
                    _this.$page4_c.css("display","none");
                    _this.$page4_hand.css("display","none");
                    _this.$page4_btn.hide();
                },5000);
                _this.zhang2 = setTimeout(function(){
                    _this.$page4_over.show();
                    _this.$page4_success.show();
                },7000);
            };
            this.$page4_btn.on(touchstart,function(){

                _this.$page4_caution.css({"height":"13%","left":"50%"});
                setTimeout(function(){_this.$page4_next.show();
                    _this.$page4_success.show();

                },1000);
                clearTimeout(_this.zhang1);
                clearTimeout(_this.zhang2);
                _this.$page4_kid.css({"animation-play-state" : "paused","-webkit-animation-play-state" : "paused"});
                _this.$page4_c.css("display","none");
                _this.$page4_hand.css("display","none");
            });

            this.$page4_nextBtn.on(touchstart,function(){

                _this.$pages.eq(3).hide();
                _this.$pages.eq(4).show();
                setTimeout(function(){
                    _this.$pages.eq(4).hide();
                    _this.$pages.eq(5).show();
                    setTimeout(function(){
                        _this.$pages.eq(5).hide();
                        _this.$page1_over.hide();
                        _this.$page2.removeAttr("style");
                        _this.$page3_girl.removeAttr('style');
                        _this.$page3_nextBtn.hide();
                        _this.$page3_next.hide();
                        _this.$page3_success.hide();
                        _this.$page4_nextBtn.hide();
                        _this.$page4_next.hide();
                        _this.$page4_success.hide();
                        _this.$page4_btn.hide();
                        _this.$page3_black.hide();
                        _this.$page3_girl.css('background-image','url(images/page3_girl.png)');
                        _this.$page3_girl.hide();
                        _this.$page3_girl.show();
                        _this.$page3_fly.hide();
                        _this.$page4_kid.hide();
                        _this.$page4_caution.css({"height":"4%","left":"40%"});
                        _this.$page3_nextBtn.show();
                        _this.$page4_nextBtn.show();
                        _this.$pages.eq(0).show();



                    },5000);



                },3000)
            });

            this.$page4_overBtn.on(touchstart,function(){
                _this.$page4_success.hide();
                _this.$page4_kid.hide();
                _this.$page4_btn.show();
                _this.$pages.eq(3).hide().show();
                _this.$page4_over.hide();
                _this.$page4_kid2.hide();
                _this.$page4_c.show();
                _this.$page4_hand.show();
                _this.$page4_kid.show();
                _this.page4_begin();

            });




        }
    };
    start.init();
});