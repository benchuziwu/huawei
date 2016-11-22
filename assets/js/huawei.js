$(function() {
	/*banner图左右切换开始*/
	$('.am-slider').eq(0).find(".am-next").css({
		"right": "50px",
		"opacity": " 1"
	})

	$('.am-slider').eq(0).find(".am-prev").css({
		"left": "50px",
		"opacity": " 1"
	})

	$('.am-slider').eq(0).on('mouseenter', function() {
		$(this).addClass('am-slider-b1')
		$('.am-slider').eq(0).find(".am-next").animate({
			"right": "10px",
			'opacity': "0.5"
		}, 500)
		$('.am-slider').eq(0).find(".am-prev").animate({
			"left": "10px",
			"opacity": "0.5"
		}, 500)

	})
	$('.am-slider').eq(0).on('mouseleave', function() {
			$(this).removeClass('am-slider-b1')
			$('.am-slider').eq(0).find(".am-next").animate({
				"right": "50px"
			}, 500).css({
				'opacity': "1"
			})
			$('.am-slider').eq(0).find(".am-prev").animate({
				"left": "50px"
			}, 500).css({
				'opacity': "1"
			})

		})
		/*banner图左右切换结束*/

	/*寻找华为开始*/
	$('#wx').mouseover(function() {
		$('#weixinb').css("display", "block");
	});
	//鼠标移出
	$('#wx').mouseout(function() {
		$('#weixinb').css("display", "none");
	});
	/*寻找华为结束*/
	/*城市三级联动开始*/
	$('.listing').each(function(i, item) {
			$(item).on("click", function() {
				$(item).next('ul').removeClass('over');
				var tall = $(item).next('ul').height();
				console.log(tall)
				if (tall > 200) {
					$(item).next('ul').addClass('over');
				}

			})
		})
		/*产品介绍开始*/
	$("#picLsy li").hover(function() {
		$(this).find('.text:not(:animated)').animate({
			top: "0px"
		}, {
			easing: "easeInOutExpo"
		}, 50, function() {});
	}, function() {
		$(this).find('.text').animate({
			top: "149px"
		}, {
			easing: "easeInOutExpo"
		}, 50, function() {});
	});
	/*产品介绍结束*/

	/*智能手机下拉菜单开始*/
	$('.shouji1').hover(function() {
		$('.content').hide();
		$('.shouji').show();
		$('.shouji1').addClass('am-active').siblings().removeClass('am-active');
	})

	$('.pingban1').hover(function() {
		$('.content').hide();
		$('.bijiben').show();
		$('.pingban1').addClass('am-active').siblings().removeClass('am-active');
	})
	$('.shebei1').hover(function() {
		$('.content').hide();
		$('.shebei').show();
		$('.shebei1').addClass('am-active').siblings().removeClass('am-active');
	})
	$('.more1').hover(function() {
		$('.content').hide();
		$('.more').show();
		$('.more1').addClass('am-active').siblings().removeClass('am-active');
	})
	$('.ruanjian1').hover(function() {
		$('.content').hide();
		$('.ruanjian').show();
		$('.ruanjian1').addClass('am-active').siblings().removeClass('am-active');
	})
	$('.qita').hover(function() {
		$('.content').hide();
		$('.ruanjian').hide();
		$('.qita').addClass('am-active').siblings().removeClass('am-active');
	})
	$('.shouji').mouseout(function() {
		$('.content').hide();
	})
	$('.shouji').mouseover(function() {
		$('.content').hide();
		$('.shouji').show();
	})
	$('.bijiben').mouseover(function() {
		$('.content').hide();
		$('.bijiben').show();
	})
	$('.bijiben').mouseout(function() {
		$('.content').hide();
	})
	$('.shebei').mouseover(function() {
		$('.content').hide();
		$('.shebei').show();
	})
	$('.shebei').mouseout(function() {
		$('.content').hide();
	})
	$('.more').mouseover(function() {
		$('.content').hide();
		$('.more').show();
	})
	$('.more').mouseout(function() {
		$('.content').hide();
	})
	$('.ruanjian').mouseout(function() {
		$('.content').hide();
	})
	$('.ruanjian').mouseover(function() {
			$('.content').hide();
			$('.shouji').show();
		})
		/*$('.menu').each(function(i, item) {
			$(item).hover(function() {
				var _index = $(this).index();
				$(this).addClass("am-active").siblings().removeClass('am-active');
				$('.content').eq(_index).show().siblings().hide();
			})
		})*/

	/*智能手机下拉菜单结束*/
	/*下拉菜单了解更多开始*/
	$('.liaojie').hover(function() {
			$('.liaojie').find('a').hide();
			$(this).find('a').show();

		})
		/*下拉菜单了解更多结束*/
		/*背景图片视差滚动开始*/
	if ($.fn.parallax) {
		$('#cbg-stores .cbg-bg').parallax({
			scalarX: 1,
			scalarY: 5
		});
	}
	/*背景图片视差滚动结束*/

	/*视频全屏播放开始*/
	var fullscreen = $.AMUI.fullscreen;
	$('#full-img').on('click', function() {
		if (fullscreen.enabled) {
			fullscreen.request(this);
		}
	})

	/*视频全屏播放结束*/
	/*视频播放与暂停开始*/
	$('.play').on('click',function(){
		play();
		$(this).hide();	$('.pause').show();	
	})
	
	$('.pause').on('click',function(){
		pause();
	})
	
	/*视频播放与暂停结束*/
})
/*js部分*/
var video = document.querySelector('video');
function play() {
	video.play();
}

function pause() {
	video.pause();
}