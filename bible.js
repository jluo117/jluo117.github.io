var hasClicked = false
function bible(Book,chapter,verseStart,verseEnd){
	var curOutPut = ""
	if (Book == ""){
		return;
	}
	if ((Book == "John") && (chapter == "3") && (verseStart == "16")){
		openInNewTab("https://www.youtube.com/watch?v=qtvQNzPHn-w");
		
	}
	if ((Book == "Psalms") && (chapter == "23")){
		openInNewTab("https://www.youtube.com/watch?v=8Qa6zZrYkZA");
	}
	var userInput = Book;
	if (chapter != ""){
		if (verseStart != ""){
			if (verseEnd != ""){
				userInput += ' ' + chapter + ':' + verseStart + '-' + verseEnd;
			}
			else{
				userInput += ' ' + chapter + ':' + verseStart;
			}
		}
		else{
			userInput += ' ' + chapter
		}
	}
        $.getJSON('https://bible-api.com/'+ userInput, function(data) {
        	var verses = (data["verses"]);
        	for (var verseNumber = 0; verseNumber < verses.length; verseNumber ++){
        		curOutPut += (verses[verseNumber]['verse'] +' ' +verses[verseNumber]['text']);
        	}
            document.getElementById("bibleVerse").innerHTML = "<h3>" + curOutPut + "<b></h3>"
		});
    }
function secretMsg(){
	if (hasClicked){
		document.getElementById("secret").innerHTML = "<h1>" + "Jesus is King" + "<b></h1>";
		hasClicked = false;
		return;
	}
	hasClicked = true;
	document.getElementById("secret").innerHTML = "<h1>" + "Go to Church" + "<b></h1>";
}
function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
