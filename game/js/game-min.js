var hastouch="ontouchstart"in window;touchstart=hastouch?"touchstart":"mousedown",touchend=hastouch?"touchend":"mouseup",document.ontouchstart=function(e){var a=arguments[0]||window.event;a&&a.preventDefault?a.preventDefault():window.event.returnValue=!1},$(function(){({img:["loading.gif","logo.png","page1_hand.png","page1_bg2.png","page1_bgimg.png","page1_bgimg2.png","page1_cloud.png","page1_hand.png","page1_over.png","page1_run.png","page1_startBtn.png","page1_title.png","page1_word.png","page2_again.png","page2_bg1.png","page2_bg3.png","page2_body.png","page2_head.png","page2_man.png","page2_tree.png","page2_word.png","page2_blackMan.png","page2_overword.png","page2_successword.png","page2_bug.png","page2_card.png","page2_fish.png","page2_grass.png","page3_hand.png","page3_bgimg2.png","page3_bgimg3.png","page3_lightning.png","page3_girl.png","page3_over.png","page3_overgirl.png","page3_black.png","page3_fly.png","page3_next.png","page3_bgimg1.png","page3_girl1.png","page4_bgImg1.png","page4_bgImg2.png","page4_bgImg3.png","page4_c.png","page4_caution.png","page4_kid.png","page4_word2.png","page4_over.png","page4_next.png","page4_kid2.png","page4_hand.png","page5_end.png","page5_title1.png","page5_title2.png","page5_word.png"],count:0,go:0,init:function(){this.count+=this.img.length,this.go=this.count,this.loadImg()},loadImg:function(){for(var e=0;e<this.img.length;e++){var a=new Image,g=this;a.onload=function(){g.move()},a.src="images/"+this.img[e]}return this},move:function(){this.go--,100==Math.round((this.count-this.go)/this.count*100)&&($(".load").remove(),$("audio")[0].play(),$(".page").eq(0).show())}}).init(),{init:function(){this.$pages=$(".page"),this.$page1_over=$(".page1_over"),this.$startbtn=$("#startbtn"),this.$page2=$(".page2"),this.$page2_oldMan=$(".page2_oldMan"),this.$page2_tree1=$(".page2_tree1"),this.$page2_hand=$(".page2_hand"),this.$page2_bgcloud=$(".page2_bgcloud"),this.$page2_water=$(".page2_water"),this.$page2_oldManbody=$(".page2_oldManbody"),this.$page2_fish2=$(".page2_fish2"),this.$page2_oldManhead=$(".page2_oldManhead"),this.$page2_successMan=$(".page2_successMan"),this.$page2_sign=$(".page2_sign"),this.$page2_grass=$(".page2_grass"),this.$page2_bee=$(".page2_bee"),this.$page2_notice=$(".page2_notice"),this.$page2_over=$(".page2_over"),this.$page2_over1=$(".page2_over1"),this.$page2_success=$(".page2_success"),this.$page2_success1=$(".page2_success1"),this.$page2_blackMan=$(".page2_blackMan"),this.$page2_touchSuccess=$(".page2_touchSuccess"),this.$page2_again=$(".page2_again"),this.$page2_next=$(".page2_next"),this.manGo=null,this.hand=null,this.page2_start=null,this.$page3_btn=$(".page3_btn"),this.$page3_fly=$(".page3_fly"),this.$page3_again=$(".page3_again"),this.$page3_next=$(".page3_next"),this.$page3_girl=$(".page3_girl"),this.$page3_bg3=$(".page3_bg3"),this.$page3_againBtn=$(".page3_againBtn"),this.$page3_success=$(".page3_success"),this.$page3_nextBtn=$(".page3_nextBtn"),this.$page3_black=$(".page3_black"),this.die=null,this.$page3=$(".page3"),this.$page4_word2=$(".page4_word2"),this.$page4_btn=$(".page4_btn"),this.$page4_next=$(".page4_next"),this.$page4_nextBtn=$(".page4_nextBtn"),this.$page4_overBtn=$(".page4_overBtn"),this.$page4_over=$(".page4_over"),this.$page4_kid=$(".page4_kid"),this.$page4_c=$(".page4_c"),this.$page4_hand=$(".page4_hand"),this.$page4_caution=$(".page4_caution"),this.$page4_success=$(".page4_success"),this.$page6=$(".page6"),this.$page4_kid2=$(".page4_kid2");var e=this;this.$startbtn.on(touchstart,function(){e.$page1_over.show(),setTimeout(function(){e.$page1_over.hide(),e.$pages.eq(0).hide(),e.$pages.eq(1).show(),e.$page2_tree1.show(),e.$page2_bgcloud.show(),e.$page2_water.show(),e.$page2_oldMan.show(),e.$page2_grass.show(),e.$page2_bee.show(),e.$page2_notice.show(),setTimeout(function(){e.$page2_touchSuccess.show(),e.$page2_notice.hide()},2e3),e.page2_start=function(){e.$page2_touchSuccess.hide(),e.$page2_oldMan.hide(),e.$page2_hand.hide(),e.$page2_oldManbody.show(),e.$page2_oldManhead.show(),e.$page2_blackMan.show(),e.$page2_fish2.show(),setTimeout(function(){e.$page2_over.show(),e.$page2_over1.show(),e.$page2_again.show()},2e3)},e.manGo=setTimeout(e.page2_start,8e3),e.hand=setTimeout(function(){e.$page2_hand.show()},3e3)},4e3)}),this.$page2_touchSuccess.on(touchstart,function(){clearTimeout(e.manGo),clearTimeout(e.hand),e.$page2_oldMan.hide(),e.$page2_successMan.show(),e.$page2_sign.show(),e.$page2_hand.hide(),setTimeout(function(){e.$page2_next.show(),e.$page2_success.show(),e.$page2_success1.show()},2e3)}),this.$page2_again.on(touchstart,function(){setTimeout(function(){e.$page2_touchSuccess.show()},2e3),e.$pages.eq(1).hide(),e.$page2_over.hide(),e.$page2_over1.hide(),e.$page2_again.hide(),e.$page2_oldManbody.hide(),e.$page2_oldManhead.hide(),e.$page2_blackMan.hide(),e.$page2_fish2.hide(),e.$pages.eq(1).show(),e.$page2_oldMan.show(),e.$page2_notice.show(),setTimeout(function(){e.$page2_touchSuccess.show(),e.$page2_notice.hide()},2e3),e.manGo=setTimeout(e.page2_start,8e3),e.hand=setTimeout(function(){e.$page2_hand.show()},3e3)}),this.$page2_next.on(touchstart,function(){e.$pages.eq(1).hide(),e.$pages.eq(2).show(),e.$page3_fly.show(),e.die=setTimeout(function(){e.$page3_again.show(),e.$page3_success.show()},6e3),setTimeout(function(){e.$page3_btn.hide()},5e3),setTimeout(function(){e.$page3_bg3.hide(),e.$page3_btn.show()},2e3)}),this.$page3_btn.on(touchstart,function(){e.$page3_black.show(),e.$page3_btn.hide(),setTimeout(function(){e.$page3_next.show(),e.$page3_success.show()},1e3),e.$page3_girl.css("-webkit-animation-play-state","paused"),e.$page3_girl.css("animation-play-state","paused"),e.$page3_girl.css("background-image","url(images/page3_girl1.png)"),clearTimeout(e.die)}),this.$page3_againBtn.on(touchstart,function(){e.$page3_bg3.show(),e.$page3_again.hide(),e.$page3_success.hide(),e.$page3.hide(),e.$page3_fly.hide(),e.$page3_fly.hide(),e.$page3.show(),e.$page3_fly.show(),e.$page3_fly.show(),clearTimeout(e.die),setTimeout(function(){e.$page3_btn.hide()},5e3),e.die=setTimeout(function(){e.$page3_again.show(),e.$page3_success.show()},6e3),setTimeout(function(){e.$page3_bg3.hide(),e.$page3_btn.show()},2e3)}),this.$page3_nextBtn.on(touchstart,function(){clearTimeout(e.die),e.$pages.eq(2).hide(),e.$pages.eq(3).show(),e.$page4_kid.show(),e.$page4_kid.css({"animation-play-state":"running","-webkit-animation-play-state":"ruinning"}),e.page4_begin()}),this.page4_begin=function(){e.$page4_word2.show(),setTimeout(function(){e.$page4_word2.hide()},2e3),e.zhang3=setTimeout(function(){e.$page4_btn.show()},2e3),e.zhang1=setTimeout(function(){e.$page4_kid2.show(),e.$page4_c.css("display","none"),e.$page4_hand.css("display","none"),e.$page4_btn.hide()},5e3),e.zhang2=setTimeout(function(){e.$page4_over.show(),e.$page4_success.show()},7e3)},this.$page4_btn.on(touchstart,function(){e.$page4_caution.css({height:"13%",left:"50%"}),setTimeout(function(){e.$page4_next.show(),e.$page4_success.show()},1e3),clearTimeout(e.zhang1),clearTimeout(e.zhang2),e.$page4_kid.css({"animation-play-state":"paused","-webkit-animation-play-state":"paused"}),e.$page4_c.css("display","none"),e.$page4_hand.css("display","none")}),this.$page4_nextBtn.on(touchstart,function(){e.$pages.eq(3).hide(),e.$pages.eq(4).show(),setTimeout(function(){e.$pages.eq(4).hide(),e.$pages.eq(5).show(),setTimeout(function(){e.$pages.eq(5).hide(),e.$page1_over.hide(),e.$page2.removeAttr("style"),e.$page3_girl.removeAttr("style"),e.$page3_nextBtn.hide(),e.$page3_next.hide(),e.$page3_success.hide(),e.$page4_nextBtn.hide(),e.$page4_next.hide(),e.$page4_success.hide(),e.$page4_btn.hide(),e.$page3_black.hide(),e.$page3_girl.css("background-image","url(images/page3_girl.png)"),e.$page3_girl.hide(),e.$page3_girl.show(),e.$page3_fly.hide(),e.$page4_kid.hide(),e.$page4_caution.css({height:"4%",left:"40%"}),e.$page3_nextBtn.show(),e.$page4_nextBtn.show(),e.$pages.eq(0).show()},5e3)},3e3)}),this.$page4_overBtn.on(touchstart,function(){e.$page4_success.hide(),e.$page4_kid.hide(),e.$page4_btn.show(),e.$pages.eq(3).hide().show(),e.$page4_over.hide(),e.$page4_kid2.hide(),e.$page4_c.show(),e.$page4_hand.show(),e.$page4_kid.show(),e.page4_begin()})}}.init()});