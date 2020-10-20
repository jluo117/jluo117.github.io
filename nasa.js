import{Heap} from 'heap-js'
function loadData(){
	$.getJSON('https://api.nasa.gov/planetary/apod?api_key=i4WERS5Lp8YotCxpWV7l07nsblcJ0vm69nauMGcK', function(data) {
        	console.log(data);
		});

}
var ary = [];
Heap.heapify(ary);
Heap.heappush(ary,(1,2));
Heap.heappush(ary,(3,1));
console.log(ary)
