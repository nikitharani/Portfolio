const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "HTML5",
				weight: 12.3
			}, {
				text: "css3",
				weight: 8
			}, {
				text: "JavaScript",
				weight: 14
			}, {
				text: "jquery",
				weight: 3
			}, {
				text: "C#",
				weight: 7
			}, {
				text: "Selenium",
				weight: 10
			}, {
				text: "Java",
				weight: 9
			}, {
				text: "Agile",
				weight: 15
			}, {
				text: "Python",
				weight: 7
			},
			{
				text: "php",
				weight: 7
			},{
				text: "React",
				weight: 7
			}
			
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.about_me-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Test Analyst.", "love everything about code.", "solve problems.","Moving  steps to become a Full Stack Developer"
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
