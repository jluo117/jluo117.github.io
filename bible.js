function bible(Book,chapter,verseStart,verseEnd){
	var curOutPut = ""
	if (Book == ""){
		return;
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
	document.getElementById("secret").innerHTML = "<h1>" + "Go to Church" + "<b></h1>"

}
