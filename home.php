<html>
<head>
    <?php 
    include('inc/link.html');
    ?>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
</head>
<body>
    <?php include('inc/navbar.php');?>
    <div class="container-fluid">
    <div class="row">
    <div class="col-lg-2 sidenav">
        <button class='uploadModal btn btn-info w-100' type="button" data-toggle="modal" data-target="#uploadModal">NEW FILE</button>
        <div class='btn-spacing'></div>
        <hr>
        <h5>Main Directory</h5>
        <div id="fieldCategory"></div>
        <ul class="nav flex-column">
        <li>
            <a class="" href="#"><i class='fa fa-trash-o recBin'></i>Recycle Bin</a>
        </li>
        </ul>
        <div id="categories"></div>
    </div>
    <div class="col-lg-7 centercon" id="centercon">
          
        <div class='selectFileAction bg-warning text-white'></div>
        <div class="content-main"></div>
        <input type="hidden" id="folderCategory">
        </div>
    <div class="col-lg-3 rightnav">
        <div class="rightnav-action">
        </div>
       <div id="properties">   
        </div>     
    </div>
    <footer class='fixed-bottom'> 
    <div class='row'>
    <div class='col-lg-2'></div>
    <div class='col-lg-7 footerCenter'>
        <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-end">
            <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1">Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
            <a class="page-link" href="#">Next</a>
            </li>
        </ul>
        </nav>
    </div>
    <div class='col-lg-3'></div>
        </div>
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