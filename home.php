<html>
<head>
    <?php 
    include('inc/link.html');
    ?>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
</head>
<body>
    <?php include('inc/navbar.php'); ?>
    <div id="maxDocument" onclick="minDoc()">
    <div id="documentMaximize">
        <img src='./My Files/High School Cards/img_20190311_141518.jpg' width='100%'>
    </div>
    </div>
    <div class="container-fluid">
    <div class="row">
    <div class="col-lg-2 sidenav">
        <button class='uploadModal btn btn-warning w-100' type="button" data-toggle="modal" data-target="#uploadModal">NEW FILE</button>
        <div class='btn-spacing'></div>
        <button class='btn btn-info w-100'>NEW FOLDER</button>
        <hr>
        <h5>Main Directory</h5>
        <div id="fieldCategory"></div>
        <div id="categories"></div>
    </div>
    <div class="col-lg-7 centercon" id="centercon">
        <div class='selectFileAction bg-warning text-white'></div>
        <div class="content-main"></div>
        </div>
    <div class="col-lg-3 rightnav">
        <div class="rightnav-action">
        </div>
       <div id="properties">   
        </div>     
    </div>
    </div>
    </div>
    <?php 
    include('inc/deleteModal.html');
    include('inc/addNoteModal.html');
    include('inc/uploadModal.html'); 
    
    ?>
</body>

</html>