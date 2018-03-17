$(function(){
function TableData(list){
        this.listOfSongs = list;
        this.tbody = $("#tbody");

        this.populateTable = function(sortingFunction){
            if(sortingFunction != null){
                this.listOfSongs = this.listOfSongs.sort(sortingFunction);
            }


            //  function minMax(){
            //        let min = 1;
               
            //        for(i=0;i<this.listOfSongs.length;i++){

            //           if(this.listOfSongs[i].length < min){
            //               min = this.listOfSongs[i];
            //               return min;
            //            }

            //          return this.listOfSongs[i];
            //          console.log(this.listOfSongs[i] + "<br />");
  
            //       }
                
            // }
            
            //   function maxMin(){
                 
            //        let max = 0;
            //        for(i=0;i<this.listOfSongs.length;i++){

                      
            //            if(this.listOfSongs[i].length > max){
            //                max = this.listOfSongs[i];    
            //                return max;
            //            }
            //        } 
            //     console.log(this.listOfSongs.reverse(i) + "<br />");  
            //  }
             


            this.tbody.html("");
            this.listOfSongs.forEach(song => {
                let row = $("<tr>");
                $("<td>").text(song.rank).appendTo(row);
                $("<td>").text(song.song).appendTo(row);
                $("<td>").text(song.artist).appendTo(row);
                $("<td>").text(song.releaseYear).appendTo(row);
                $("<td>").text(song.duration).appendTo(row);
                this.tbody.append(row);
            });
        }
    }

    var table = new TableData([]);


    function getData(){

        $.ajax({
            method:"GET",
            url:"http://demo6418849.mockable.io/songs",
            success:function(data){
                table.listOfSongs = data;
                table.populateTable();
            },
            error: function(error){
                console.log(error);
            }
        })
    }


    $("#pull").on("click", () => {
        getData();
    });
    
    $("#sort").on("change", (e) => {
       let pickedValue = e.target.value;
       let sortingFunction = null;
       switch(pickedValue){
        case '1': // sort by Rank
		    if($('#one').is(':checked')){
                sortingFunction = (song1, song2) => {
					return parseInt(song1.rank) - parseInt(song2.rank);
				};
			} else {
				sortingFunction = (song1, song2) => {
					return parseInt(song2.rank) - parseInt(song1.rank);
				};
			}
            
            break;
        case '2': // sort by Artist Name
		    if($('#one').is(':checked')){
				sortingFunction = (song1, song2) => {
					return song1.artist.localeCompare(song2.artist);
				};
			} else {
				sortingFunction = (song1, song2) => {
					return song2.artist.localeCompare(song1.artist);
				};
			}
            break;
        case '3': // sort by Song Name
		    if($('#one').is(':checked')){
				sortingFunction = (song1, song2) => {
					return song1.song.localeCompare(song2.song);
				};
			} else {
				sortingFunction = (song1, song2) => {
					return song2.song.localeCompare(song1.song);
				};
			}
            break;
        case '4': // sort Release Year 
		    if($('#one').is(':checked')){ 
                sortingFunction = (song1, song2) => {
                    return parseInt(song1.releaseYear) 
                    - parseInt(song2.releaseYear);
				};
            } else {
                sortingFunction = (song1, song2) => {
                    return parseInt(song2.releaseYear) 
                    - parseInt(song1.releaseYear);
				};
			}
            break;
        case '5': // sort by Duration
		    if($('#one').is(':checked')){ 
                sortingFunction = (song1, song2) => {
					return evaluateMinutesToSeconds(song1.duration)
					- evaluateMinutesToSeconds(song2.duration);
				};
			} else {
                sortingFunction = (song1, song2) => {
					return evaluateMinutesToSeconds(song2.duration)
					- evaluateMinutesToSeconds(song1.duration);
				};
			}
            break;
        default:
            break;
       }
       table.populateTable(sortingFunction);

    });

    function evaluateMinutesToSeconds(minutes){
        var minutesArray = minutes.split(":");
        return (minutesArray[0] * 60) + minutesArray[1];
    }

    
    $("#one").on("change", () => {
       let pickedValue = $("#sort").find(":selected").val();
       let sortingFunction = null;
       switch(pickedValue){
        case '1': // sort by Rank
                sortingFunction = (song1, song2) => {
					return parseInt(song1.rank) - parseInt(song2.rank);
				};        
            break;
        case '2': // sort by Artist Name
				sortingFunction = (song1, song2) => {
					return song1.artist.localeCompare(song2.artist);
				};
            break;
        case '3': // sort by Song Name
				sortingFunction = (song1, song2) => {
					return song1.song.localeCompare(song2.song);
				};
            break;
        case '4': // sort Release Year 
                sortingFunction = (song1, song2) => {
                    return parseInt(song1.releaseYear) 
                    - parseInt(song2.releaseYear);
				};
            break;
        case '5': // sort by Duration
                sortingFunction = (song1, song2) => {
					return evaluateMinutesToSeconds(song1.duration)
					- evaluateMinutesToSeconds(song2.duration);
				};

            break;
        default:
            break;
       }
       table.populateTable(sortingFunction);

    });
    
    $("#two").on("change", () => {
       let pickedValue = $("#sort").find(":selected").val();
       let sortingFunction = null;
       switch(pickedValue){
        case '1': // sort by Rank
				sortingFunction = (song1, song2) => {
					return parseInt(song2.rank) - parseInt(song1.rank);
				};
            break;
        case '2': // sort by Artist Name
				sortingFunction = (song1, song2) => {
					return song2.artist.localeCompare(song1.artist);
				};
            break;
        case '3': // sort by Song Name
				sortingFunction = (song1, song2) => {
					return song2.song.localeCompare(song1.song);
				};
            break;
        case '4': // sort Release Year 
                sortingFunction = (song1, song2) => {
                    return parseInt(song2.releaseYear) 
                    - parseInt(song1.releaseYear);
				};
            break;
        case '5': // sort by Duration
                sortingFunction = (song1, song2) => {
					return evaluateMinutesToSeconds(song2.duration)
					- evaluateMinutesToSeconds(song1.duration);
				};
            break;
        default:
            break;
       }
       table.populateTable(sortingFunction);

	});
});




