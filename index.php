</<!DOCTYPE html>
<html>
<head>
    <?php include('inc/link.html'); ?>
</head>
<body class='login'>
    <center>
        <div class='col-lg-3 divlogin'>
           <form>
                <img class="img-fluid" src="res/img/user_icon.jpg">
                <hr>
                <div class='form-group'>
                    <input type="text" id="username" class="form-control" placeholder="Username" required>
                </div>
                <div class='form-group'>
                    <input type="password" id="password" class="form-control" placeholder="Password" required>
                </div>
                <div class='form-group'>
                    <button class='btn btn-info w-100' type="submit" onclick="loginFunction();" id="btn-login">SIGN IN</button>
                </div>
                <p>Forgot Password or Username? Please Contact System Administrator</p>


</form>
        </div>
</center>    
</body>
</html>