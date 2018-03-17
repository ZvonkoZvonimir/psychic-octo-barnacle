$(function(){
    function TableData(list){
        this.list = list;
        this.tbody = $("#tbody");
        this.sortingFunction = null

        this.populateTable = function(){
            if(this.sortingFunction != null){
                this.list = this.list.sort(this.sortingFunction);
            }
            // one more if for MIN ~ MAX / MAX ~ MIN
            //
            // use reverse() on list array
            //
            //
            this.tbody.html("");
            this.list.forEach(song => {
                let row = $("<tr>");
                $("<td>").text(song.rank).appendTo(row);
                $("<td>").text(song.song).appendTo(row);
                $("<td>").text(song.artist).appendTo(row);
                $("<td>").text(song.releaseYear).appendTo(row);
                $("<td>").text(song.duration).appendTo(row);
                this.tbody.append(row);
            });
        };

        this.setList = function(list){
            this.list = list;
            this.populateTable();
        }
        this.setSortingFunction = function(sortingFunction){
            this.sortingFunction = sortingFunction;
            // this.populateTable();
        }
    }

    let table = new TableData([]);


    $("#pull").on("click", function(){
        $.ajax({
            method:"GET",
            url:"http://demo6418849.mockable.io/songs",
            success:function(data){
                console.log(data);
                table.setList(data);
            },
            error:function(error){
                console.log(error);
            }
        })
    });

    $("#sort").on("change", function(event){
        var pickedValue = event.target.value;
        var sortingFunction = null;
        switch(pickedValue){
            case '1': //sort by rank
                sortingFunction = (a, b) => 
                        (parseInt(a.rank) - parseInt(b.rank));
                break;
            case '2': // sort by song name
                sortingFunction = (a, b) => 
                        (a.song.localeCompare(b.song));
                break;
            case '3': // sort by artist name
                sortingFunction = (a, b) => 
                    (a.artist.localeCompare(b.artist));
                break;
            case '4': // sort by release date
                sortingFunction = (a, b) => 
                    (parseInt(a.releaseYear) - parseInt(b.releaseYear));
                break;
            case '5': // sort by duration
                sortingFunction = (a, b) => 
                    (evaluateMinutesToSeconds(a.duration) - 
                    evaluateMinutesToSeconds(b.duration));
                break;
            default:
                break;
        }
        table.setSortingFunction(sortingFunction);
        table.populateTable();
    });

    function evaluateMinutesToSeconds(duration){
        
        let durationArray = duration.split(":").map(x => parseInt(x));
        return (durationArray[0] * 60) + durationArray[1];
    }

    $("input[name='minmax']").on('change',function(){
        alert('asdasd');
        let pickedValue = $("#sort").find(":selected").val();
        if (pickedValue == 1)
        {
            alert("rank is picked");
            
            if($('#one').is(':checked')){
                // sortingFunction = (song1, song2) => {
				// 	return parseInt(song1.rank) - parseInt(song2.rank);
                // };
                alert("one is checked");
			} else {
                alert("two is checked");
				// sortingFunction = (song1, song2) => {
				// 	return parseInt(song2.rank) - parseInt(song1.rank);
				// };
            }
            table.populateTable(sortingFunction);
        }
        if (pickedValue == 2)
        {
            alert("song name is picked");
        }
        if (pickedValue == 3)
        {
            alert("artist name is picked");
        }
        if (pickedValue == 4)
        {
            alert("release year is picked");
        }
        if (pickedValue == 5)
        {
            alert("dong duration year is picked");
        }
        
    })
    


    // $("#one").on("change", function(){
    // $("#one").on("click", function(){

    //     if($('#one').is(':checked'))
    //     {
    //         alert("Min-Max");
    //         // sortingFunction = (song1, song2) => {
    //         //     return song1.artist.localeCompare(song2.artist);
    //         // };
    //     }
    //     if ($('#two').is(':checked')) 
    //     {
    //         // sortingFunction = (song1, song2) => {
    //         //     return song2.artist.localeCompare(song1.artist);
    //         // };
    //         alert("Max-Min");
    //     }
    // });

});

// http://introduction-to-functions.surge.sh/