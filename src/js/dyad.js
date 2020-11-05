(function ($) {
    "use strict";
    $(function () {
        function a(e, s) {
            e.children(".submenu-content").show().slideUp(200, function () {
                $(this).css("display", "");
                $(this).find(".menu-item").removeClass("is-shown");
                e.removeClass("open");
                s && s();
            })
        };

        var n = $(".app-sidebar"),
            t = $(".sidebar-content"),
            l = $(".wrapper"),
            o = document.querySelector(".sidebar-content");

        new PerfectScrollbar(o, {
            //wheelSpeed: 2,
            swipeEasing: true,
            wheelPropagation: false,
            minScrollbarLength: 20
        });

        t.on("click", ".navigation-main .nav-item a", function () {
            var e = $(this).parent(".nav-item");
            if (e.hasClass("has-sub") && e.hasClass("open")) a(e);
            else {
                if (e.hasClass("has-sub") && function (e, s) {
                    var a = e.children(".submenu-content"),
                        n = a.children(".menu-item").addClass("is-hidden");
                    e.addClass("open"), a.hide().slideDown(200, function () {
                        $(this).css("display", ""), s && s()
                    }), setTimeout(function () {
                        n.addClass("is-shown"), n.removeClass("is-hidden")
                    }, 0)
                }(e), t.data("collapsible")) return false;
                a(e.siblings(".open")), e.siblings(".open").find(".nav-item.open").removeClass("open")
            }
        });

        $(".nav-toggle").on("click", function () {
            var e = $(this).find(".toggle-icon");
            "expanded" === e.attr("data-toggle") ? (l.addClass("nav-collapsed"), $(".nav-toggle").find(".toggle-icon").removeClass("ik-toggle-right").addClass("ik-toggle-left"), e.attr("data-toggle", "collapsed")) : (l.removeClass("nav-collapsed menu-collapsed"), $(".nav-toggle").find(".toggle-icon").removeClass("ik-toggle-left").addClass("ik-toggle-right"), e.attr("data-toggle", "expanded"))
        }), n.on("mouseenter", function () {
            if (l.hasClass("nav-collapsed")) {
                l.removeClass("menu-collapsed");
                var e = $(".navigation-main .nav-item.nav-collapsed-open");
                e.children(".submenu-content").hide().slideDown(300, function () {
                    $(this).css("display", "")
                }), t.find(".nav-item.active").parents(".nav-item").addClass("open"), e.addClass("open").removeClass("nav-collapsed-open")
            }
        }).on("mouseleave", function (e) {
            if (l.hasClass("nav-collapsed")) {
                l.addClass("menu-collapsed");
                var s = $(".navigation-main .nav-item.open"),
                    a = s.children(".submenu-content");
                s.addClass("nav-collapsed-open"), a.show().slideUp(300, function () {
                    $(this).css("display", "")
                }), s.removeClass("open")
            }
        });

        $(window).width() < 992 && (n.addClass("hide-sidebar"), l.removeClass("nav-collapsed menu-collapsed")), $(window).on('resize', function () {
            $(window).width() < 992 && (n.addClass("hide-sidebar"), l.removeClass("nav-collapsed menu-collapsed")), $(window).width() > 992 && (n.removeClass("hide-sidebar"), "collapsed" === $(".toggle-icon").attr("data-toggle") && l.not(".nav-collapsed menu-collapsed") && l.addClass("nav-collapsed menu-collapsed"))
        });

        $(document).on("click", ".navigation li:not(.has-sub)", function () {
            $(window).width() < 992 && n.addClass("hide-sidebar")
        });
        $(document).on("click", ".logo-text", function () {
            $(window).width() < 992 && n.addClass("hide-sidebar")
        });
        $(".mobile-nav-toggle").on("click", function (e) {
            e.stopPropagation(), n.toggleClass("hide-sidebar")
        });
        $("html").on("click", function (s) {
            $(window).width() < 992 && (n.hasClass("hide-sidebar") || 0 !== n.has(s.target).length || n.addClass("hide-sidebar"))
        });
        $("#sidebarClose").on("click", function () {
            n.addClass("hide-sidebar")
        });
        $('[data-toggle="tooltip"]').tooltip();
        $("#checkbox_select_all").on("click", function () {
            for (var e = document.getElementsByName("item_checkbox"), a = 0; a < e.length; a++) "checkbox" == e[a].type && (e[a].checked = !0), $(e).parent().parent().addClass("selected")
        });
        $("#checkbox_deselect_all").on("click", function () {
            for (var e = document.getElementsByName("item_checkbox"), a = 0; a < e.length; a++) "checkbox" == e[a].type && (e[a].checked = !1), $(e).parent().parent().removeClass("selected")
        });
        $("#quick-search").on("keyup", function () {
            var e = $(this).val().trim().toLowerCase();
            $(".app-item").hide().filter(function () {
                return -1 != $(this).html().trim().toLowerCase().indexOf(e)
            }).show()
        });
        $(".list-item input:checkbox").change(function () {
            $(this).is(":checked") ? $(this).parent().parent().addClass("selected") : $(this).parent().parent().removeClass("selected")
        }), $("#navbar-fullscreen").on("click", function (e) {
            "undefined" != typeof screenfull && screenfull.enabled && screenfull.toggle()
        });
        $("#selectall").on('click', function () {
            $(this).is(":checked") ? $(".select_all_child:checkbox").attr("checked", !0) : $(".select_all_child:checkbox").attr("checked", !1)
        });
        $(".list-item-wrap .list-item .list-title a").on("click", function (e) {
            $(".list-item.quick-view-opened").not(this).removeClass("quick-view-opened"), $(this).parents().parent(".list-item").toggleClass("quick-view-opened")
        });
        $(document).on("click", function (e) {
            $(e.target).closest(".list-item").length || $(".list-item").removeClass("quick-view-opened")
        });
        "undefined" != typeof screenfull && screenfull.enabled && $(document).on(screenfull.raw.fullscreenchange, function () {
            screenfull.isFullscreen ? $("#navbar-fullscreen").find("i").toggleClass("ik-minimize ik-maximize") : $("#navbar-fullscreen").find("i").toggleClass("ik-maximize ik-minimize")
        });
        $(".minimize-widget").on("click", function () {
            var e = $(this),
                s = $(e.parents(".widget"));
            $(s).children(".widget-body").slideToggle();
            $(this).toggleClass("ik-minus").fadeIn("slow"), $(this).toggleClass("ik-plus").fadeIn("slow")
        }), $(".remove-widget").on("click", function () {
            var e = $(this);
            e.parents(".widget").animate({
                opacity: "0",
                "-webkit-transform": "scale3d(.3, .3, .3)",
                transform: "scale3d(.3, .3, .3)"
            }), setTimeout(function () {
                e.parents(".widget").remove()
            }, 800)
        });
        $(".card-header-right .card-option .action-toggle").on("click", function () {
            var e = $(this);
            e.hasClass("ik-chevron-right") ? e.parents(".card-option").animate({
                width: "28px"
            }) : e.parents(".card-option").animate({
                width: "90px"
            }), $(this).toggleClass("ik-chevron-right").fadeIn("slow")
        });
        $(".card-header-right .close-card").on("click", function () {
            var e = $(this);
            e.parents(".card").animate({
                opacity: "0",
                "-webkit-transform": "scale3d(.3, .3, .3)",
                transform: "scale3d(.3, .3, .3)"
            }), setTimeout(function () {
                e.parents(".card").remove()
            }, 800)
        });
        $(".card-header-right .minimize-card").on("click", function () {
            var e = $(this),
                s = $(e.parents(".card"));
            $(s).children(".card-body").slideToggle();
            $(this).toggleClass("ik-minus").fadeIn("slow"), $(this).toggleClass("ik-plus").fadeIn("slow")
        });
        $(".task-list").on("click", "li.list", function () {
            $(this).toggleClass("completed")
        });
        $(".search-btn").on('click', function () {
            $(".header-search").addClass('open');
            $('.header-search .form-control').animate({
                'width': '200px',
            });
        });
        $(".search-close").on('click', function () {
            $('.header-search .form-control').animate({
                'width': '0',
            });
            setTimeout(function () {
                $(".header-search").removeClass('open');
            }, 300);
        });

        var ps = new PerfectScrollbar(".right-sidebar", {
            wheelSpeed: 10,
            wheelPropagation: true,
            minScrollbarLength: 5
        });

        var ps = new PerfectScrollbar(".messages", {
            wheelSpeed: 10,
            wheelPropagation: true,
            minScrollbarLength: 5
        });

        $(".right-sidebar-toggle").on("click", function (e) {
            this.classList.toggle("active");
            $(".wrapper").toggleClass('right-sidebar-expand');
            return false;
        });

        document.addEventListener("click", function (event) {
            var $rightSidebar = document.getElementsByClassName('right-sidebar')[0],
                $chatPanel = document.getElementsByClassName('chat-panel')[0];
            var isInsideContainer = $rightSidebar.contains(event.target) || $chatPanel.contains(event.target);
            if (!isInsideContainer) {
                document.body.classList.remove('right-sidebar-expand');
                var toggle = document.getElementsByClassName('right-sidebar-toggle');
                for (var i = 0; i < toggle.length; i++) {
                    toggle[i].classList.remove('active');
                }
                $chatPanel.hidden = 'hidden';
            }
        });

        var el = $('[data-plugin="chat-sidebar"]');
        if (!el.length) return;
        var chatList = el.find('.chat-list');
        chatList.each(function (index) {
            var $this = $(this);
            $(this).find('.list-group a').on('click', function () {
                $this.find('.list-group a.active').removeClass('active');
                $(this).addClass('active');
                var el = $('.chat-panel');
                if (!el.length) return;
                el.removeAttr('hidden');

                var messages = el.find('.messages');
                messages[0].scrollTop = messages[0].scrollHeight;
                if (messages[0].classList.contains('scrollbar-enabled')) {
                    messages.perfectScrollbar('update');
                }
                el.find('.user-name').html($(this).data('chat-user'));
            });
        });

        var el = $('.chat-panel');
        if (!el.length) return;
        el.find('.close').on('click', function () {
            el.attr('hidden', true);
            el.find('.panel-body').removeClass('hide');
        });

        el.find('.minimize').on('click', function () {
            el.find('.card-block').attr('hidden', !el.find('.card-block').attr('hidden'));
            if (el.find('.card-block').attr('hidden') === 'hidden')
                $(this).find('.material-icons').html('expand_less');
            else
                $(this).find('.material-icons').html('expand_more');
        });

        var gridButton = $('a.view-grid'),
            thumbButton = $('a.view-thumb'),
            listButton = $('a.view-list'),
            items = $('ul.view-as'),
            displayButtons = $('.dispaly-option-buttons a');

        gridButton.on("click", function () {
            $('#layout-wrap .list-item').attr('class', 'col-xl-3 col-lg-4 col-12 col-sm-6 mb-4 list-item list-item-grid');
        });
        listButton.on("click", function () {
            $('#layout-wrap .list-item').attr('class', 'col-12 list-item');
        });
        thumbButton.on("click", function () {
            $('#layout-wrap .list-item').attr('class', 'col-12 list-item list-item-thumb');
        });

        $(displayButtons).on("click", function () {
            $(displayButtons).removeClass('active');
            $(this).addClass("active");
        });
    })
})(jQuery);