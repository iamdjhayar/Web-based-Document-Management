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
    if(isset($_POST['tempFileName'])){
        $new_name=$_POST['fileName'];
        $file="";
        if(strlen($new_name)>0){
            $name=$_FILES['fileDocument']['name'];
            $ext=end((explode(".",$name)));
            $file = $new_name.".".$ext;
        }else{
            $file=$_FILES['fileDocument']['name'];
        }
        
        $directory=$_POST['fileDirectory'];
        $uploader='admin';
            
			$file_loc = $_FILES['fileDocument']['tmp_name'];
			$new_file_name = strtolower($file);
			move_uploaded_file($file_loc,$directory.$new_file_name);
        $query=$conn->query("INSERT INTO files(namef,uploader,location) VALUES ('$new_file_name','$uploader','$directory')") or die($conn->error()); 
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
    if(isset($_GET['getFileInDirectory'])){
        $directory=$_GET['directory'];
        $query=$conn->query("SELECT * FROM files WHERE location='$directory'") or die($conn->error());
        $file_in_directory=array();
        while($row=$query->fetch_object()){
            $file_in_directory[]=$row;
            }
            echo json_encode($file_in_directory);
    }
    
    

    if(isset($_GET['displayFolderAndFiles'])){
        function listIt($path) {
            $items = scandir($path);
            $id = 1;
            
            foreach($items as $item) {
                
                // Ignore the . and .. folders
                if($item != "." AND $item != "..") {
                    if (is_file($path . $item)) {
                        // this is the file
                    } else {
                        // this is the directory
            
                        // do the list it again!
                        
                        echo "<li><span class='fa fa-chevron-right caret'></span><button class='btn-der' id='directory".$id."' onclick='directoryAction(this);' value='".$path.$item."/'>".$item."</button>";
                        echo "<ul class='nested'>";
                        listIt($path . $item . "/");
                        //echo("<input type='text' value='".$path.$item."/'>");
                        echo "</ul></li>"; 
                        
                    }
                    $id++;    
                }
                
            
                
                
              }
            }
            
            listIt("./My Files/");
    }
    if(isset($_GET['displayFileProperty'])){
        $fileId = $_GET['fileId'];

        $query = $conn ->query("SELECT * FROM files WHERE id='$fileId'");

        $fileProperty=array();
        while($row=$query->fetch_object()){
            $fileProperty[]=$row;
            }
            echo json_encode($fileProperty);

    }
    if(isset($_GET['deleteSelectedFile'])){
       $fileId = json_decode(stripslashes($_GET['selectedFile']));      
      
        foreach($fileId as $f){
           $query = $conn->query("DELETE FROM files WHERE id='$f'");
        }
        if($query){
            echo('success');
        }

    }
?>