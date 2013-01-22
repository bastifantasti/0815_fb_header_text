define([], function() {
    $(".btn").click(function() {
        $(this).toggleClass('active');
        count();
    });

    function count(){
        var bgcol;
        var txtcol;
        var numItems = $('.active').length
        var percent;
        if(numItems <= 5){
            console.log("smaler");
            bgcol = "#7fff00";
            txtcol = "#000";

        }else{
            bgcol = "#ff0000";
            txtcol = "#ffffff";
        }
        percent = 100/25*numItems;
        console.log(percent);
        $("#output").html("<p>~"+percent+" % Text.</p>");
        $("#output").css('background-color', bgcol);
        $("#output").css('color', txtcol);

    }
    var dropbox = document.getElementById("dropbox")

    // init event handlers
    dropbox.addEventListener("dragenter", dragEnter, false);
    dropbox.addEventListener("dragexit", dragExit, false);
    dropbox.addEventListener("dragover", dragOver, false);
    dropbox.addEventListener("drop", drop, false);

    // init the widgets
   // $("#progressbar").progressbar();


    function dragEnter(evt) {
        evt.stopPropagation();
        evt.preventDefault();
    }

    function dragExit(evt) {
        evt.stopPropagation();
        evt.preventDefault();
    }

    function dragOver(evt) {
        evt.stopPropagation();
        evt.preventDefault();
    }

    function drop(evt) {
        evt.stopPropagation();
        evt.preventDefault();

        var files = evt.dataTransfer.files;
        var count = files.length;

        // Only call the handler if 1 or more files was dropped.
        if (count > 0)
            handleFiles(files);
    }


    function handleFiles(files) {
        var file = files[0];

        document.getElementById("droplabel").innerHTML = "Processing " + file.name;

        var reader = new FileReader();

        // init the reader event handlers
        reader.onprogress = handleReaderProgress;
        reader.onloadend = handleReaderLoadEnd;

        // begin the read operation
        reader.readAsDataURL(file);
    }

    function handleReaderProgress(evt) {
        if (evt.lengthComputable) {
            var loaded = (evt.loaded / evt.total);

          //  $("#progressbar").progressbar({ value: loaded * 100 });
        }
    }

    function handleReaderLoadEnd(evt) {
      //  $("#progressbar").progressbar({ value: 100 });
        document.getElementById("droplabel").innerHTML = "Drop file here...";
        var img = document.getElementById("headerimg");
        img.src = evt.target.result;
    }


  return 'Hello from Yeoman!';
});