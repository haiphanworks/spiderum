// On Load

window.onload = function () {
	navbarPlaceholder();
};

// On Scroll

window.onscroll = function () {
	navbarPlaceholder();
};

// Navbar Toggle

$('.toggle').click(function (e) {
	e.preventDefault();
	if ($(this).hasClass('is-active')) {
		$(this).removeClass('is-active');
		if ($(this).parents('.navbar-search').length) {
			$('.navbar-search-form').removeClass('is-active');
		}
	} else {
		$('.navbar-toggle').removeClass('is-active');
		$(this).addClass('is-active');
		if ($(this).parents('.navbar-search').length) {
			$('.navbar-search-form').addClass('is-active');
		} else {
			$('.navbar-search-form').removeClass('is-active');
		}
	}
});

// Navbar Scroll

$(document).ready(function () {
	var previousScroll = 0;
	$(window).scroll(function () {
		var currentScroll = $(this).scrollTop();
		if (currentScroll < 0) {
			showTopNav();
		} else if (
			currentScroll > 0 &&
			currentScroll < $(document).height() - $(window).height()
		) {
			if (currentScroll > previousScroll) {
				hideNav();
			} else {
				showNav();
			}
			previousScroll = currentScroll;
		} else if ($(window).scrollTop() === 0) {
			showTopNav();
			previousScroll = currentScroll;
		}
	});

	function hideNav() {
		$('.navbar')
			.removeClass('is:scrollup')
			.removeClass('is:scrolltop')
			.addClass('is:scrolldown')
			.addClass('is:scrolling');
		$('.navbar-toggle').removeClass('is-active');
		$('.navbar-search-form').removeClass('is-active');
	}

	function showNav() {
		$('.navbar')
			.removeClass('is:scrolldown')
			.removeClass('is:scrolltop')
			.addClass('is:scrollup')
			.addClass('is:scrolling');
	}

	function showTopNav() {
		$('.navbar')
			.removeClass('is:scrolldown')
			.removeClass('is:scrollup')
			.removeClass('is:scrolling')
			.addClass('is:scrolltop');
	}
});

// Navbar Placeholder

function navbarPlaceholder() {
	var navbarPlaceholder = $('.navbar').outerHeight(true);
	$('.navbar-placeholder').css('height', `${navbarPlaceholder}px`);
}

// Feed Filter

$('.filter\\:view .item').click(function (e) {
	e.preventDefault();
	view = $(this).data('view');
	console.log(view);
	$(this).parent().children().removeClass('is-active');
	$(this).addClass('is-active');
	$('.feed-wrapper')
		.removeClass('is-small')
		.removeClass('is-medium')
		.removeClass('is-large')
		.addClass(`is-${view}`);
});

$('.filter\\:sort .item').click(function (e) {
	e.preventDefault();
	view = $(this).data('view');
	console.log(view);
	$(this).parent().children().removeClass('is-active');
	$(this).addClass('is-active');
});

// Chat Active Switch

$('.global-chat .chat-active .chat-box').click(function (e) {
	e.preventDefault();
	var clickTarget = $(e.target);
	if (
		clickTarget.closest('.item.hide').length ||
		clickTarget.closest('.item.close').length
	) {
		if (clickTarget.closest('.item.hide').length) {
			$(this).removeClass('is:closed');
			$(this).addClass('is:hidden');
		} else if (clickTarget.closest('.item.close').length) {
			$(this).removeClass('is:hidden');
			$(this).addClass('is:closed');
		}
	} else {
		if ($(this).hasClass('is:focus')) {
		} else {
			$('.global-chat .chat-active .chat-box').removeClass('is:focus');
			$(this).addClass('is:focus');
		}
	}
});

// ACTIVE CHAT
// CHAT 1
$('.global-chat .chat-active .chat-1 .actions .hide').click(function (e) {
	e.preventDefault();
	$('.global-chat .chat-active .chat-1')
		.addClass('is:hidden')
		.removeClass('is-active')
		.removeClass('is:closed');
	$('.global-chat .chat-inactive .chat-1')
		.addClass('is:hidden')
		.removeClass('is-active')
		.removeClass('is:closed');
});
$('.global-chat .chat-active .chat-1 .actions .close').click(function (e) {
	e.preventDefault();
	$('.global-chat .chat-active .chat-1')
		.addClass('is:closed')
		.removeClass('is-active')
		.removeClass('is:hidden');
	$('.global-chat .chat-inactive .chat-1')
		.addClass('is:closed')
		.removeClass('is-active')
		.removeClass('is:hidden');
});
// CHAT 2
$('.global-chat .chat-active .chat-2 .actions .hide').click(function (e) {
	e.preventDefault();
	$('.global-chat .chat-active .chat-2')
		.addClass('is:hidden')
		.removeClass('is-active')
		.removeClass('is:closed');
	$('.global-chat .chat-inactive .chat-2')
		.addClass('is:hidden')
		.removeClass('is-active')
		.removeClass('is:closed');
});
$('.global-chat .chat-active .chat-2 .actions .close').click(function (e) {
	e.preventDefault();
	$('.global-chat .chat-active .chat-2')
		.addClass('is:closed')
		.removeClass('is-active')
		.removeClass('is:hidden');
	$('.global-chat .chat-inactive .chat-2')
		.addClass('is:closed')
		.removeClass('is-active')
		.removeClass('is:hidden');
});
// CHAT 3
$('.global-chat .chat-active .chat-3 .actions .hide').click(function (e) {
	e.preventDefault();
	$('.global-chat .chat-active .chat-3')
		.addClass('is:hidden')
		.removeClass('is-active')
		.removeClass('is:closed');
	$('.global-chat .chat-inactive .chat-3')
		.addClass('is:hidden')
		.removeClass('is-active')
		.removeClass('is:closed');
});
$('.global-chat .chat-active .chat-3 .actions .close').click(function (e) {
	e.preventDefault();
	$('.global-chat .chat-active .chat-3')
		.addClass('is:closed')
		.removeClass('is-active')
		.removeClass('is:hidden');
	$('.global-chat .chat-inactive .chat-3')
		.addClass('is:closed')
		.removeClass('is-active')
		.removeClass('is:hidden');
});

// INACTIVE CHAT
// CHAT 1
$('.global-chat .chat-inactive .chat-1 .avatar').click(function (e) {
	e.preventDefault();
	$('.global-chat .chat-inactive .chat-1')
		.addClass('is-active')
		.removeClass('is:hidden')
		.removeClass('is:closed');
	$('.global-chat .chat-active .chat-1')
		.addClass('is-active')
		.removeClass('is:hidden')
		.removeClass('is:closed');
});
$('.global-chat .chat-inactive .chat-1 .close').click(function (e) {
	e.preventDefault();
	$('.global-chat .chat-inactive .chat-1')
		.addClass('is:closed')
		.removeClass('is:hidden')
		.removeClass('is-active');
});
// CHAT 2
$('.global-chat .chat-inactive .chat-2 .avatar').click(function (e) {
	e.preventDefault();
	$('.global-chat .chat-inactive .chat-2')
		.addClass('is-active')
		.removeClass('is:hidden')
		.removeClass('is:closed');
	$('.global-chat .chat-active .chat-2')
		.addClass('is-active')
		.removeClass('is:hidden')
		.removeClass('is:closed');
});
$('.global-chat .chat-inactive .chat-2 .close').click(function (e) {
	e.preventDefault();
	$('.global-chat .chat-inactive .chat-2')
		.addClass('is:closed')
		.removeClass('is:hidden')
		.removeClass('is-active');
});
// CHAT 3
$('.global-chat .chat-inactive .chat-3 .avatar').click(function (e) {
	e.preventDefault();
	$('.global-chat .chat-inactive .chat-3')
		.addClass('is-active')
		.removeClass('is:hidden')
		.removeClass('is:closed');
	$('.global-chat .chat-active .chat-3')
		.addClass('is-active')
		.removeClass('is:hidden')
		.removeClass('is:closed');
});
$('.global-chat .chat-inactive .chat-3 .close').click(function (e) {
	e.preventDefault();
	$('.global-chat .chat-inactive .chat-3')
		.addClass('is:closed')
		.removeClass('is:hidden')
		.removeClass('is-active');
});
