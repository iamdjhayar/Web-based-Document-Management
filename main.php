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
    if(isset($_POST['folderCategory'])){
        $folder=$_POST['folderCategory'];
        $uploader=$_SESSION['userdata']['username'];
        $directory="./My Files/";
        for($i=0;$i<count($_FILES["fileDocument"]["name"]);$i++){
            $file=$_FILES['fileDocument']['name'][$i];
            $size=$_FILES['fileDocument']['size'][$i];
            $size=$size/1000000;
            $file_loc = $_FILES['fileDocument']['tmp_name'][$i];
			$new_file_name = strtolower($file);
			move_uploaded_file($file_loc,$directory.$new_file_name);
            $query=$conn->query("INSERT INTO files(namef,uploader,location,size) VALUES ('$new_file_name','$uploader','$folder','$size')") or die($conn->error()); 
    }
    if($query){
        echo('success');
    } 
	exit();
        
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

        $query=$conn->query("UPDATE `files` SET `status`='recycle_bin' WHERE id='$id'");
        
        if($query){
            exit('Success Delete');
        }else
            exit('Dalete Failed');
    }
    if(isset($_GET['searchDocument'])){
        $searchInput=$_GET['searchInput'];
        $query=$conn->query("SELECT * FROM files WHERE namef LIKE '%$searchInput%' OR ocrscan LIKE '%$searchInput%'");
        $searchFile=array();
        while($row=$query->fetch_object()){
            $searchFile[]=$row;
        }
        echo json_encode($searchFile);
    }
    if(isset($_GET['getFileInDirectory'])){
        $directory=$_GET['directory'];
        $query=$conn->query("SELECT * FROM files WHERE location='$directory' AND status='active'");
        $file_in_directory=array();
        while($row=$query->fetch_object()){
            $file_in_directory[]=$row;
            }
            echo json_encode($file_in_directory);
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
            $query=$conn->query("UPDATE `files` SET `status`='recycle_bin' WHERE id='$f'");
        }
        if($query){
            echo('success');
        }

    }
    if(isset($_GET['recoverSelectedFile'])){
        $fileId = json_decode(stripslashes($_GET['selectedFile']));      
       
         foreach($fileId as $f){
             $query=$conn->query("UPDATE `files` SET `status`='active' WHERE id='$f'");
         }
         if($query){
             echo('success');
         }
 
     }
    if(isset($_POST['addnote'])){
        $content=$_POST['note'];
        $author=$_SESSION['userdata']['id'];

        $query = $conn->query("INSERT INTO note(content,author) VALUES ('$content','$author')");
        if($query){
            echo('success');
        }
        else{
            echo('failed');
        }
    }
    //display list of folder/category
    if(isset($_GET['operation'])) {
        try {
          $result = null;
          switch($_GET['operation']) {
            case 'get_node':
              $node = isset($_GET['id']) && $_GET['id'] !== '#' ? (int)$_GET['id'] : 0;
              $sql = "SELECT * FROM `folder` ";
              $res = mysqli_query($conn, $sql) or die("database error:". mysqli_error($conn));
                //iterate on results row and create new index array of data
                while( $row = mysqli_fetch_assoc($res) ) { 
                  $data[] = $row;
                }
                $itemsByReference = array();
       
              // Build array of item references:
              foreach($data as $key => &$item) {
                 $itemsByReference[$item['id']] = &$item;
                 // Children array:
                 $itemsByReference[$item['id']]['children'] = array();
                 // Empty data class (so that json_encode adds "data: {}" ) 
                 $itemsByReference[$item['id']]['data'] = new StdClass();
              }
       
              // Set items as children of the relevant parent item.
              foreach($data as $key => &$item)
                 if($item['parent_id'] && isset($itemsByReference[$item['parent_id']]))
                  $itemsByReference [$item['parent_id']]['children'][] = &$item;
       
              // Remove items that were added to parents elsewhere:
              foreach($data as $key => &$item) {
                 if($item['parent_id'] && isset($itemsByReference[$item['parent_id']]))
                  unset($data[$key]);
              }
              $result = $data;
              break;
            case 'create_node':
              $node = isset($_GET['id']) && $_GET['id'] !== '#' ? (int)$_GET['id'] : 0;
              
              $nodeText = isset($_GET['text']) && $_GET['text'] !== '' ? $_GET['text'] : '';
              $sql ="INSERT INTO `folder` (`name`, `text`, `parent_id`) VALUES('".$nodeText."', '".$nodeText."', '".$node."')";
              mysqli_query($conn, $sql);
              
              $result = array('id' => mysqli_insert_id($conn));
       
              break;
            case 'rename_node':
              $node = isset($_GET['id']) && $_GET['id'] !== '#' ? (int)$_GET['id'] : 0;
              //print_R($_GET);
              $nodeText = isset($_GET['text']) && $_GET['text'] !== '' ? $_GET['text'] : '';
              $sql ="UPDATE `folder` SET `name`='".$nodeText."',`text`='".$nodeText."' WHERE `id`= '".$node."'";
              mysqli_query($conn, $sql);
              break;
            case 'delete_node':
              $node = isset($_GET['id']) && $_GET['id'] !== '#' ? (int)$_GET['id'] : 0;
              $sql ="DELETE FROM `folder` WHERE `id`= '".$node."'";
              mysqli_query($conn, $sql);
              break;
            default:
              throw new Exception('Unsupported operation: ' . $_GET['operation']);
              break;
          }
          header('Content-Type: application/json; charset=utf-8');
          echo json_encode($result);
        }
        catch (Exception $e) {
          header($_SERVER["SERVER_PROTOCOL"] . ' 500 Server Error');
          header('Status:  500 Server Error');
          echo $e->getMessage();
        }
        die();
      }
    if(isset($_GET['getDocumentOCR'])) {
        $query=$conn->query("SELECT * FROM files WHERE ocrscan=''");
        $documentOCR=array();
        while($row=$query->fetch_object()){
            $documentOCR[]=$row;
            }
        echo json_encode($documentOCR);
    }
    if(isset($_POST['ocrResult'])){
        $id = $_POST['id'];
        $result = $_POST['ocrResult'];
        echo($result);
        $query=$conn->query("UPDATE `files` SET `ocrscan`='$result' WHERE id='$id'");
        trigger_error($conn->error);
        if($query){
            echo("SUCCESS");
        }
    }
    if(isset($_GET['logOut'])){
        session_unset($_SESSION["userdata"]); 
        header("location:index.php");
        session_destroy();
    }
    if(isset($_GET['getRecycleBin'])){
        $query=$conn->query("SELECT * FROM files WHERE status='recycle_bin'");
        $recycleBin=array();
        while($row=$query->fetch_object()){
            $recycleBin[]=$row;
            }
        echo json_encode($recycleBin);
    }
?>