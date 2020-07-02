function bible(Book,chapter,verseStart,verseEnd){
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

            document.getElementById("bibleVerse").innerHTML = "<h3>" + data['text'] + "<b></h3>"
		});
    }