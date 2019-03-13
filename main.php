<?php

    header("Access-Control-Allow-Origin: *");

        session_start();

		error_reporting( ~E_DEPRECATED & ~E_NOTICE );
	
		$conn = new mysqli("localhost","root","","documgmt");
		if ( !$conn ) {
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
    if(isset($_POST['login'])){
       
        $username=$conn->real_escape_string($_POST['username']);
        $password=$conn->real_escape_string($_POST['password']);

        $query=$conn->query("SELECT * FROM `user` WHERE username='$username' AND password='$password'");

        if ($query->num_rows>0){
            $_SESSION['userdata']=mysqli_fetch_assoc($query) or die(mysqli_error($conn));
            exit('success');
        }else
            exit('failed');
        
             
           
    }
    if(isset($_GET['getFiles'])){ 
            
        $category=$_GET['category'];

        $query=mysqli_query($conn,"SELECT * FROM files WHERE category='$category' ORDER BY datestamp DESC");
        $files=array();
        while($row=mysqli_fetch_object($query)){
            $files[]=$row;
            }
            echo json_encode($files);
    }
    if(isset($_POST['docuName'])){
        
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
        $query=$conn->query("INSERT INTO files(namef,uploader,category,
            addinfo,designate,location) VALUES ('$namef','$uploader','$category','$addinfo','$designate',
            '$final_file')") or die($conn->error()); 
            if($query){
                echo('success');
            } 
    }
    if(isset($_GET['getFileProperties'])){
        $id=$_GET['fileId'];
        
        $query=$conn->query("SELECT * FROM files WHERE id='$id'");
        $fileProp=array();
        while($row=$query->fetch_object()){
            $fileProp[]=$row;
            }
            echo json_encode($fileProp);
    }
    if(isset($_GET['removeDocument'])){
        $id=$_GET['fileId'];

        $query=$conn->query("DELETE FROM files WHERE id='$id'") or die($conn->error());
        
        if($query){
            exit('Success Delete');
        }else
            exit('Dalete Failed');
    }
    if(isset($_GET['searchDocument'])){
        $searchInput=$_GET['searchInput'];
        $query=$conn->query("SELECT * FROM files WHERE namef LIKE '%$searchInput%' OR designate LIKE '%$searchInput%' OR addinfo LIKE'%$searchInput%'");
        $searchFile=array();
        while($row=$query->fetch_object()){
            $searchFile[]=$row;
        }
        echo json_encode($searchFile);
    }
    
    

    if(isset($_GET['displayFolderAndFiles'])){
        function listIt($path) {
            $items = scandir($path);
            
            foreach($items as $item) {
            
                // Ignore the . and .. folders
                if($item != "." AND $item != "..") {
                    if (is_file($path . $item)) {
                        // this is the file
                        echo "<li class='li-file'><i class='fa fa-file-o'></i><a href='".$path.$item."'>".$item."</a></li>";
                    } else {
                        // this is the directory
            
                        // do the list it again!
                        
                        echo "<li><span class='fa fa-chevron-right caret'></span><button class='btn-der' onclick='directoryAction(this);' value='".$path.$item."/'>".$item."</button>";
                        echo "<ul class='nested'>";
                        listIt($path . $item . "/");
                        //echo("<input type='text' value='".$path.$item."/'>");
                        echo "</ul></li>"; 
                    }
                }
              }
            }
            
            listIt("./My Files/");
    }
?>