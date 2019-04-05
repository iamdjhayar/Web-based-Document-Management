<!DOCTYPE html>
<head><title>Displays Folder Contents</title></head>
<?php

function frmtFolder($Entity){
 echo '<li style="font-weight:bold;color:black;list-style-type:none">' . $Entity;
}

function frmtFile($dEntry, $fEntry){
echo '<li style="list-style-type:square">' . '<a href="' . $dEntry . '/' . $fEntry . 
'"> ' . $fEntry . ' </a>';
}

function listFolderFiles($dir) {
$ffs = scandir($dir);

$id=0;

unset($ffs[array_search('.', $ffs, true)]);
unset($ffs[array_search('..', $ffs, true)]);
unset($ffs[array_search('index.html', $ffs, true)]);
// prevent empty ordered elements
if (count($ffs) < 1) {return;}
echo '<ul>';
foreach ($ffs as $ff) {
    if (is_dir($dir . '/' . $ff)) {
     frmtFolder($dir);
    } else {
     frmtFile($dir, $ff);
    }
    if (is_dir($dir . '/' . $ff)) {
        echo $id;
        listFolderFiles($dir . '/' . $ff);
    }
    echo '</li>';
    $id++;
}
echo '</ul>';
}
listFolderFiles('./My Files');

$startfolder="./My Files";
$files=array();
$id=0;


foreach( new RecursiveIteratorIterator( new RecursiveDirectoryIterator( $startfolder, RecursiveDirectoryIterator::KEY_AS_PATHNAME ), RecursiveIteratorIterator::CHILD_FIRST ) as $file => $info ) {
    if( $info->isFile() && $info->isReadable() ){
        $files[]=array('id'=>$id,'path'=>$info);
    }
    $id++;
}

echo '<pre>',print_r($files,true),'</pre>';

$it = new RecursiveTreeIterator(new RecursiveDirectoryIterator("./My Files", RecursiveDirectoryIterator::SKIP_DOTS));
foreach($it as $path) {
  echo $path."<br>";
}
?>