<?php
    $location=$_GET['location'];
?>
<html>
    <head>
        <?php
        include('inc/docPrevNavbar.html');
        include('inc/link.html');
        ?>
    </head>
<body>
<div class="container-fluid docPreviewContainer">
    <div class="row">
        <div class="col-lg-4 docSettings">
            <form>
            <div class="form-group">
                <label for="formControlBr">Brightness</label>
                <input type="range" class="form-control-range" id="formControlBr" min="-100" max="100" step="1" value="0" onchange="brightness();">
                <div class="brightnessValue"></div>
                <label for="formControlRange">Contrast</label>
                <input type="range" class="form-control-range" id="formControlCon" min="-100" max="100" step="1" value="0" onchange="contrast();">
                <div class="contrastValue"></div>
            </div>
            </form>
        </div>
        <div class="col-lg-8 docPreview">
            <div class="imgDocument">
            <canvas id="imgCanvas"></canvas>
            </div>  
        </div>
    </div>
</div>
</body>

</html>