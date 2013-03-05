var wordCount = function() {
	var wordCount = 0;
	var text = document.wordcounter.thewords.value;
	var words = text.match(/\w+\W*/g);

	if (words) {
		wordCount = words.length;
	}

	if (wordCount === 0) {
		results.innerHTML = "C'mon now, you can count to zero! Put in some text.";
	} else if (wordCount > 0 && wordCount < 20) {
		results.innerHTML = "Your text consists of <i>"+ wordCount + " words</i> and  <i>"+ text.length+ " characters</i>. <br /><br /> Sorry, not impressed! <br /> <br /> <img src='http://media.tumblr.com/tumblr_m8tmyoMNZA1ruser4.jpg' />";
	} else if (wordCount > 20) {
		results.innerHTML = wordCount + " words. Damn, that's a lot of words.";
	}
}

