
  $("#submit").on("click", function (event) {
    event.preventDefault();
    console.log("clicked")
    

    var scoreArray = [
      $("#q1 input[type='radio']:checked").val(),
      $("#q2 input[type='radio']:checked").val(),
      $("#q3 input[type='radio']:checked").val(),
      $("#q4 input[type='radio']:checked").val(),
      $("#q5 input[type='radio']:checked").val(),
      $("#q6 input[type='radio']:checked").val(),
      $("#q7 input[type='radio']:checked").val(),
      $("#q8 input[type='radio']:checked").val(),
      $("#q9 input[type='radio']:checked").val(),
    ]
    
    var usrScore = scoreArray.map(function (x) { 
      return parseInt(x, 10); 
    });

    var friendData = {
      name: $("#name").val(),
      photo: $("#photo").val(),
      score: usrScore
    };

  
    // AJAX post the data to the friends API.
    $.ajax({
      method: "POST",
      url: "/api/friends",
      data: friendData, // convert array to JSON
      dataType: 'json'
    }).then(function (data) { 

      for (i=0; i <data.length; i++){
      

        var mName = data[i].name
        var mPhoto = data[i].photo
        var mScore = data[i].score.reduce((sum, val, i) => sum + (val % usrScore[i]), 0)

        //I cant get the alogrithm to work

        
        // var compatability = mScore.reduce((sum, val, i) => sum + (val % usrScore[i]), 0)
        console.log(mName, mScore)
       
      }

      
      // Grab the result from the AJAX post so that the best match's name and photo are displayed.
      $("#match-name").text(data[0].name);
      $("#match-img").attr("src", data[0].photo);
  
      // Show the modal with the best match
      $("#results-modal").modal("toggle");

     
  
    })
    
 
  });
