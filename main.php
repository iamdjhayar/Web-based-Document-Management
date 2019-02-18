<?php
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
    if(isset($_POST['displayCategory'])){
        
        $query=mysqli_query($conn,"SELECT * FROM category") or die(mysqli_error($conn));
        $data=array();
        while($row=mysqli_fetch_object($query)){
            $data[]=$row;
            }
            echo json_encode($data);
            
    }
?>