var Layout=function(){function l(){var e,a=$(".page-content"),t=$(".page-sidebar"),i=$("body");if(!0===i.hasClass("page-footer-fixed")&&!1===i.hasClass("page-sidebar-fixed")){var s=App.getViewPort().height-$(".page-footer").outerHeight()-$(".page-header").outerHeight();a.height()<s&&a.attr("style","min-height:"+s+"px")}else{if(i.hasClass("page-sidebar-fixed"))e=r(),!1===i.hasClass("page-footer-fixed")&&(e-=$(".page-footer").outerHeight());else{var o=$(".page-header").outerHeight(),n=$(".page-footer").outerHeight();(e=App.getViewPort().width<d?App.getViewPort().height-o-n:t.height()+20)+o+n<=App.getViewPort().height&&(e=App.getViewPort().height-o-n)}a.attr("style","min-height:"+e+"px")}}function t(e,a){var t=location.hash.toLowerCase(),i=$(".page-sidebar-menu");if("click"===e||"set"===e?a=$(a):"match"===e&&i.find("li > a").each(function(){var e=$(this).attr("href").toLowerCase();1<e.length&&t.substr(1,e.length-1)==e.substr(1)&&(a=$(this))}),a&&0!=a.size()&&"javascript:;"!==a.attr("href").toLowerCase()&&"#"!==a.attr("href").toLowerCase()){parseInt(i.data("slide-speed")),i.data("keep-expanded");i.find("li.active").removeClass("active"),i.find("li > a > .selected").remove(),!1===i.hasClass("page-sidebar-menu-hover-submenu")?i.find("li.open").each(function(){0===$(this).children(".sub-menu").size()&&($(this).removeClass("open"),$(this).find("> a > .arrow.open").removeClass("open"))}):i.find("li.open").removeClass("open"),a.parents("li").each(function(){$(this).addClass("active"),$(this).find("> a > span.arrow").addClass("open"),1===$(this).parent("ul.page-sidebar-menu").size()&&$(this).find("> a").append('<span class="selected"></span>'),1===$(this).children("ul.sub-menu").size()&&$(this).addClass("open")}),"click"===e&&App.getViewPort().width<d&&$(".page-sidebar").hasClass("in")&&$(".page-header .responsive-toggler").click()}}function e(){var e=$(".page-sidebar-menu");App.destroySlimScroll(e),0!==$(".page-sidebar-fixed").size()?App.getViewPort().width>=d&&(e.attr("data-height",r()),App.initSlimScroll(e),l()):l()}function a(){$(".full-height-content").each(function(){var e,a=$(this);if(e=App.getViewPort().height-$(".page-header").outerHeight(!0)-$(".page-footer").outerHeight(!0)-$(".page-title").outerHeight(!0)-$(".page-bar").outerHeight(!0),a.hasClass("portlet")){var t=a.find(".portlet-body");App.destroySlimScroll(t.find(".full-height-content-body")),e=e-a.find(".portlet-title").outerHeight(!0)-parseInt(a.find(".portlet-body").css("padding-top"))-parseInt(a.find(".portlet-body").css("padding-bottom"))-2,App.getViewPort().width>=d&&a.hasClass("full-height-content-scrollable")?(e-=35,t.find(".full-height-content-body").css("height",e),App.initSlimScroll(t.find(".full-height-content-body"))):t.css("min-height",e)}else App.destroySlimScroll(a.find(".full-height-content-body")),App.getViewPort().width>=d&&a.hasClass("full-height-content-scrollable")?(e-=35,a.find(".full-height-content-body").css("height",e),App.initSlimScroll(a.find(".full-height-content-body"))):a.css("min-height",e)})}var d=App.getResponsiveBreakpoint("md"),r=function(){var e=App.getViewPort().height-$(".page-header").outerHeight();return $("body").hasClass("page-footer-fixed")&&(e-=$(".page-footer").outerHeight()),e},i=function(){var e=$("body");e.hasClass("page-sidebar-fixed")&&$(".page-sidebar").on("mouseenter",function(){e.hasClass("page-sidebar-closed")&&$(this).find(".page-sidebar-menu").removeClass("page-sidebar-menu-closed")}).on("mouseleave",function(){e.hasClass("page-sidebar-closed")&&$(this).find(".page-sidebar-menu").addClass("page-sidebar-menu-closed")})};return{initHeader:function(){$(".page-header").on("click",".search-form",function(e){$(this).addClass("open"),$(this).find(".form-control").focus(),$(".page-header .search-form .form-control").on("blur",function(e){$(this).closest(".search-form").removeClass("open"),$(this).unbind("blur")})}),$(".page-header").on("keypress",".hor-menu .search-form .form-control",function(e){if(13==e.which)return $(this).closest(".search-form").submit(),!1}),$(".page-header").on("mousedown",".search-form.open .submit",function(e){e.preventDefault(),e.stopPropagation(),$(this).closest(".search-form").submit()})},setSidebarMenuActiveLink:function(e,a){t(e,a)},initSidebar:function(){e(),$(".page-sidebar-menu").on("click","li > a.nav-toggle, li > a > span.nav-toggle",function(e){var a=$(this).closest(".nav-item").children(".nav-link");if(!(App.getViewPort().width>=d&&!$(".page-sidebar-menu").attr("data-initialized")&&$("body").hasClass("page-sidebar-closed")&&1===a.parent("li").parent(".page-sidebar-menu").size())){var t=a.next().hasClass("sub-menu");if(!(App.getViewPort().width>=d&&1===a.parents(".page-sidebar-menu-hover-submenu").size()))if(!1!==t){if(!a.next().hasClass("sub-menu always-open")){var i=a.parent().parent(),s=a,o=$(".page-sidebar-menu"),n=a.next(),r=o.data("auto-scroll"),p=parseInt(o.data("slide-speed"));!0!==o.data("keep-expanded")&&(i.children("li.open").children("a").children(".arrow").removeClass("open"),i.children("li.open").children(".sub-menu:not(.always-open)").slideUp(p),i.children("li.open").removeClass("open"));n.is(":visible")?($(".arrow",s).removeClass("open"),s.parent().removeClass("open"),n.slideUp(p,function(){!0===r&&!1===$("body").hasClass("page-sidebar-closed")&&($("body").hasClass("page-sidebar-fixed")?o.slimScroll({scrollTo:s.position().top}):App.scrollTo(s,-200)),l()})):t&&($(".arrow",s).addClass("open"),s.parent().addClass("open"),n.slideDown(p,function(){!0===r&&!1===$("body").hasClass("page-sidebar-closed")&&($("body").hasClass("page-sidebar-fixed")?o.slimScroll({scrollTo:s.position().top}):App.scrollTo(s,-200)),l()})),e.preventDefault()}}else App.getViewPort().width<d&&$(".page-sidebar").hasClass("in")&&$(".page-header .responsive-toggler").click()}}),App.isAngularJsApp()&&$(".page-sidebar-menu li > a").on("click",function(e){App.getViewPort().width<d&&!1===$(this).next().hasClass("sub-menu")&&$(".page-header .responsive-toggler").click()}),$(".page-sidebar").on("click"," li > a.ajaxify",function(e){e.preventDefault(),App.scrollTop();var a=$(this).attr("href"),t=$(".page-sidebar ul"),i=($(".page-content"),$(".page-content .page-content-body"));t.children("li.active").removeClass("active"),t.children("arrow.open").removeClass("open"),$(this).parents("li").each(function(){$(this).addClass("active"),$(this).children("a > span.arrow").addClass("open")}),$(this).parents("li").addClass("active"),App.getViewPort().width<d&&$(".page-sidebar").hasClass("in")&&$(".page-header .responsive-toggler").click(),App.startPageLoading();var s=$(this);$.ajax({type:"GET",cache:!1,url:a,dataType:"html",success:function(e){0===s.parents("li.open").size()&&$(".page-sidebar-menu > li.open > a").click(),App.stopPageLoading(),i.html(e),Layout.fixContentHeight(),App.initAjax()},error:function(){App.stopPageLoading(),i.html("<h4>Could not load the requested content.</h4>")}})}),$(".page-content").on("click",".ajaxify",function(e){e.preventDefault(),App.scrollTop();var a=$(this).attr("href"),t=($(".page-content"),$(".page-content .page-content-body"));App.startPageLoading(),App.getViewPort().width<d&&$(".page-sidebar").hasClass("in")&&$(".page-header .responsive-toggler").click(),$.ajax({type:"GET",cache:!1,url:a,dataType:"html",success:function(e){App.stopPageLoading(),t.html(e),Layout.fixContentHeight(),App.initAjax()},error:function(){t.html("<h4>Could not load the requested content.</h4>"),App.stopPageLoading()}})}),$(document).on("click",".page-header-fixed-mobile .page-header .responsive-toggler",function(){App.scrollTop()}),i(),$(".page-sidebar").on("click",".sidebar-search .remove",function(e){e.preventDefault(),$(".sidebar-search").removeClass("open")}),$(".page-sidebar .sidebar-search").on("keypress","input.form-control",function(e){if(13==e.which)return $(".sidebar-search").submit(),!1}),$(".sidebar-search .submit").on("click",function(e){e.preventDefault(),$("body").hasClass("page-sidebar-closed")&&!1===$(".sidebar-search").hasClass("open")?(1===$(".page-sidebar-fixed").size()&&$(".page-sidebar .sidebar-toggler").click(),$(".sidebar-search").addClass("open")):$(".sidebar-search").submit()}),0!==$(".sidebar-search").size()&&($(".sidebar-search .input-group").on("click",function(e){e.stopPropagation()}),$("body").on("click",function(){$(".sidebar-search").hasClass("open")&&$(".sidebar-search").removeClass("open")})),function(){var i=$("body");$.cookie&&"1"===$.cookie("sidebar_closed")&&App.getViewPort().width>=d&&($("body").addClass("page-sidebar-closed"),$(".page-sidebar-menu").addClass("page-sidebar-menu-closed")),$("body").on("click",".sidebar-toggler",function(e){var a=$(".page-sidebar"),t=$(".page-sidebar-menu");$(".sidebar-search",a).removeClass("open"),i.hasClass("page-sidebar-closed")?(i.removeClass("page-sidebar-closed"),t.removeClass("page-sidebar-menu-closed"),$.cookie&&$.cookie("sidebar_closed","0")):(i.addClass("page-sidebar-closed"),t.addClass("page-sidebar-menu-closed"),i.hasClass("page-sidebar-fixed")&&t.trigger("mouseleave"),$.cookie&&$.cookie("sidebar_closed","1")),$(window).trigger("resize")})}(),App.isAngularJsApp()&&t("match"),App.addResizeHandler(e)},initContent:function(){a(),$("body").on("shown.bs.tab",'a[data-toggle="tab"]',function(){l()}),App.addResizeHandler(l),App.addResizeHandler(a)},initFooter:function(){navigator.userAgent.match(/iPhone|iPad|iPod/i)?$(window).bind("touchend touchcancel touchleave",function(e){300<$(this).scrollTop()?$(".scroll-to-top").fadeIn(500):$(".scroll-to-top").fadeOut(500)}):$(window).scroll(function(){300<$(this).scrollTop()?$(".scroll-to-top").fadeIn(500):$(".scroll-to-top").fadeOut(500)}),$(".scroll-to-top").click(function(e){return e.preventDefault(),$("html, body").animate({scrollTop:0},500),!1})},init:function(){this.initHeader(),this.initSidebar(),this.initContent(),this.initFooter()},fixContentHeight:function(){l()},initFixedSidebarHoverEffect:function(){i()},initFixedSidebar:function(){e()},getLayoutImgPath:function(){return App.getAssetsPath()+"layouts/layout2/img/"},getLayoutCssPath:function(){return App.getAssetsPath()+"layouts/layout2/css/"}}}();!1===App.isAngularJsApp()&&jQuery(document).ready(function(){Layout.init()});