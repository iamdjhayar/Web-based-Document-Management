<?php

        session_start();

		error_reporting( ~E_DEPRECATED & ~E_NOTICE );
		define('DBHOST', 'localhost');
		define('DBUSER', 'root');
		define('DBPASS', '');
		define('DBNAME', 'documgmt');
	
		$conn = mysqli_connect(DBHOST,DBUSER,DBPASS);
		$dbcon = mysqli_select_db($conn,DBNAME);
	
		if ( !$dbcon ) {
		die("Database Connection failed : " . mysqli_error($conn));
        }

    if(isset($_POST['addCategory'])){
        $category=$_POST['catName'];

        $query=mysqli_query($conn,"INSERT INTO category(catname) VALUES('$category')") or die(mysqli_error($conn));

        if($query){
            echo($category." category successfully added!");
        }
        else{
            echo($category." category failed to add!");
        }

    }

    if(isset($_GET['displayCategory'])){
        
        $query=mysqli_query($conn,"SELECT * FROM category") or die(mysqli_error($conn));
        $data=array();
        while($row=mysqli_fetch_object($query)){
            $data[]=$row;
            }
            echo json_encode($data);
            
    }
    if(isset($_GET['login'])){
        $msg=array();
        $username=$_GET['username'];
        $password=$_GET['password'];

        $query=mysqli_query($conn,"SELECT * FROM `user` WHERE username='$username' AND password='$password'");

        $matched=mysqli_num_rows($query) or die(mysqli_error($conn));

        if ($matched>0){
            $_SESSION['userdata']=mysqli_fetch_assoc($query) or die(mysqli_error($conn));
            $msg['msg']='success';
            $data[]=$msg;

            echo json_encode($data);
        }
             
           
    }
    if(isset($_GET['getFiles'])){ 
            
        $category=$_GET['category'];

        $query=mysqli_query($conn,"SELECT * FROM files WHERE category='$category'");
        $files=array();
        while($row=mysqli_fetch_object($query)){
            $files[]=$row;
            }
            echo json_encode($files);
    }
    if(isset($_POST['docuName'])){
        $btnID=$_POST['buttonID'];
        
        $namef=$_POST['docuName'];
        $uploader='admin';
        $category=$_POST['category'];
        $addinfo=$_POST['addInfo'];
        $designate=$_POST['designate'];
            $file = rand(1000,100000)."-".$_FILES['document']['name'];
			$file_loc = $_FILES['document']['tmp_name'];
			$new_file_name = strtolower($file);
			$final_file=str_replace(' ','-',$new_file_name);
			$folder="uploads/";
			move_uploaded_file($file_loc,$folder.$final_file);
        $query=mysqli_query($conn,"INSERT INTO files(namef,uploader,category,
            addinfo,designate,location) VALUES ('$namef','$uploader','$category','$addinfo','$designate',
            '$final_file')") or die(mysqli_error($conn));  
    }
?>