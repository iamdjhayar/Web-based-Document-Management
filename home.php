<html>
<head>
    <?php include('inc/link.html');?>
    <script>
    var categorize=getUrlVars();
    console.log(categorize);
    $.each(categorize, function(key, value) {
        var cat = value.category;
    console.log(cat);
    });
   
    </script>
</head>
<body>
    <?php include('inc/navbar.html'); 
    include('main.php');
    print_r($_SESSION['category']);?>
    <div class="container-fluid">
    <div class="row">
    <div class="col-lg-2 sidenav">
        <button class="btn btn-info w-100" onclick="addCategory();">NEW</button>
        <hr>
        <div id="fieldCategory"></div>
        <div id="categories"></div>
    </div>
    <div class="col-lg-7 centercon">
        <div class="contentmargin"></div>
        
        </div>
    <div class="col-lg-3 rightnav">
        sdjsdhfj
</div>
    </div>
    </div>
    </div>
</footer>
</body>
</html>