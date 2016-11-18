/*
	广告消失
*/
$(function(){
	//alert(1);
	var $ad = $('#ad');
	var $exit = $('#ad-exit');
	$exit.click(function(){
		$ad.css('display','none');
	});
});

$(function(){
	var $software = $('.l-sub>ul>li .software-list');
	var $sub = $('.l-sub>ul>li#software');
	var $icon = $('.software-icon');

	var $net = $('.main>ul>li.net-nav');
	var $netList = $('.net-nav-list');
	var $netIcon = $('.net-icon');
	
	var $txt = $('.searchBar .searchBar-form .text');
	var $key = $('.searchBar .search-key');
	$sub.hover(function(){
		$software.css('display','block');
		$icon.css('background-position','-19px -61px')
	},function(){
		$software.css('display','none');
		$icon.css('background-position','-19px -66px')
	});

	$net.hover(function(){
		$net.css('background','#fff');
		$netList.css('display','block');
		$netIcon.css('background-position','-19px -61px');
	},function(){
		$netList.css('display','none');
		$netIcon.css('background-position','-19px -66px');
	});
	$txt.focus(function(){
		$key.css('display','none');
	});
	$txt.blur(function(){
		$key.css('display','block');
	});
});

/*
	my mall and shopping cart
*/
$(function(){
	var $hover = $('.header-toolbar .i-mall-hover');
	var $myMall = $('#header-toolbar-mall');
	var $navImg = $('.header-toolbar .i-mall .h>span.i-mall-nav');
	var $a1 = $('.header-toolbar .i-mall .h>a');

	var $event = $('#header-toolbar-event');
	var $cart = $('.shopping-cart');
	var $evImg= $('.mall-event-img');
	var $a2 = $('.header-toolbar .i-mall-event .e>a');
	$myMall.hover(function(){
		$a1.css({
			'text-decoration': 'underline',
			'color': 'rgb(255,0,0)',
		});
		$hover.css('display','block');
		$navImg.css('background-position','0px -70px');
	},function(){
		$hover.css('display','none');
		$navImg.css('background-position','0px -75px');
		$a1.css({
			'text-decoration': 'none',
			'color': '#c8c8c8',
		});
	});

	$event.hover(function(){
		$cart.css('display','block');
		$evImg.css('background-position','0px -70px');
		$a2.css({
			'text-decoration': 'underline',
			'color': 'rgb(255,0,0)',
		});
	},function(){
		$cart.css('display','none');
		$evImg.css('background-position','0px -75px');
		$a2.css({
			'text-decoration': 'none',
			'color': '#c8c8c8',
		});
	});
});

/*
	header qrcode
*/
$(function(){
	var $qrcode = ('.qr-slider-item');
	var $btn = $('.btn>div');
	var index = 0;
	$btn.hover(function(){
		$(this).addClass("on").siblings().removeClass("on");
		index = $(this).index();
		$('.qr-slider-item').eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
	});
});

/*
	category and nav
*/
(function(){
	var $list = $('.category .b>ul>li');
	var $item = $('.category .category-info-item');
	var $itemList = $('.category .category-info-item>ul>li');
	var $commod = $('.category .category-info-item>ul>li.item-commod');
	
	var $navList = $('.naver>ul>li');

	for(var i = 0;i<$list.length;i++){
		$list[i].index = i;
		$list[i].onmouseenter = function(){
			$item[this.index].style.display = 'block';
			this.style.background = '#eee';
		};
		$list[i].onmouseleave = function(){
			$item[this.index].style.display = 'none';
			this.style.background = '';
		};
	};
	$itemList.hover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$commod.css('background','none');
	});
	$navList.hover(function(){
		$(this).addClass("on").siblings().removeClass("on");
	},function(){
		$(this).removeClass('on');
	});
})();

/*
	ads 轮播
*/
(function(){
	var $Ec = $('.hot-board');
	var $Pli = $('.ec-slider-item');
	var $tab = $('#ec-slider-tab>ul>li');
	var index = 0;
	var timer;
	auto();
	$tab.hover(function(){
		var index = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$Pli.eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
	});
	function auto(){
		timer = setInterval(function(){
			$tab[index].className = '';
			$Pli[index].style.display = 'none';
			index++;
			index %= $tab.length;
			$tab[index].className = 'active';
			$Pli[index].style.display = 'list-item';
		},2000);
	};
	$Ec.hover(function(){
		clearInterval(timer);
	},function(){
		auto();
	});
})();
/*
	口号
*/
$(function(){
	var $slist = $('.slogan>ul>li');
	var $t1 = $('.slogan>ul>li>i');
	
	$slist.hover(function(){
		var index = $(this).index();
		$t1.eq(index).css('background-position',-54*index + 'px 0');
	},function(){
		var index = $(this).index();
		$t1.eq(index).css('background-position',(-216 + (-54*index)) + 'px 0');
	});
});

/*
	right slider
*/
$(function(){
	var $top = $('.right-slider-list>div.item-top');
	var $div = $('.right-slider-list>div');
	$(document).bind('scroll',function(){
		var len = $(this).scrollTop();
		if( len>=500 ){
			$top.stop().fadeIn(1000);
		}else{
			$top.stop().fadeOut(1000);
		}
		$top.click(function(){
			$(document).scrollTop(0);
		});
	});
	$div.hover(function(){
		$(this).addClass('on').siblings().removeClass('on');
	},function(){
		$(this).removeClass('on');
	});
});