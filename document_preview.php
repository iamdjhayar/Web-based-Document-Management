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
        <div class="col-lg-3 docSettings">
            <form>
            <div class="form-group">
                <h4>Process Image/Document</h4>
                <label for="formControlBr">Brightness</label>
                <input type="range" class="form-control-range formControlBr" min="-100" max="100" step="1">
                <div class="brightnessValue"></div>
                <label for="formControlRange">Contrast</label>
                <input type="range" class="form-control-range formControlCon" min="-100" max="100" step="1">
                <div class="contrastValue"></div>
            </div>
            </form>
            <button class="btn btn-success saveDocBtn">SAVE</button>
        </div>

        <div class="col-lg-7 docPreview">
            <div class="imgDocument">
            <canvas id="imgCanvas"></canvas>
            </div>  
        </div>

        <div class="col-lg-2">
            <div class="docThumb"></div>
        </div>       
    </div>
</div>
</body>
<script type="text/javascript" src="res/js/caman/caman.full.min.js"></script>
<script type="text/javascript" src="res/js/caman/caman.min.js"></script>
</html>