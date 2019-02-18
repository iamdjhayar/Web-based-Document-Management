<?php include('main.php');?>
<html>
<head>
    <?php include('inc/link.html');?>
</head>
<body>
    <?php include('inc/navbar.html');?>
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

        <table class="table table-hover w-100">
        <thead class="fileheader">
            <tr>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Size</th>
            <th scope="col">Date</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
            </tr>
        </tbody>
        </table>
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