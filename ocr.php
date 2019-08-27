<!--test code-->

<html>
    
    <?php
        include('inc/link.html');
    ?>
    <head>
        <script src='https://cdn.jsdelivr.net/gh/naptha/tesseract.js@v1.0.14/dist/tesseract.min.js'></script>
        <script>
            
        </script>
    </head>
    <body>
        <input type="file" onchange="Tesseract.recognize(this.files[0]).progress(function(data){console.log(data)}).then(function(data){console.log(data)})">
        <div class="result"></div>
    </body>
    <script>
    (function worker() {
        var dataString = "getDocumentOCR=" + 
        $.ajax({
            url: "/main.php",   	
            type: "GET",      				
            data:  dataString, 			
            dataType: "json",						
            success: function(data)  		
            {
                
            }	
        });
          setTimeout(worker, 1000);
      })();
    </script>
</html>