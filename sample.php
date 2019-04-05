<?php
function treeArr($dir){
        //  First we get the directory
        $paths = scandir($dir, SCANDIR_SORT_NONE);
        //  We remove .. && . from our array
        unset($paths[array_search('.', $paths, true)]);
        unset($paths[array_search('..', $paths, true)]);
        //  Add empty array for our tree
        $arr = [];
        //  Check isour paths array empty
        if (count($paths) < 1)
            return;
        //  If not empty we get through all paths and add what we want
        foreach($paths as $path){
            $current_dir = $dir.'/'.$path;
            $isDir = is_dir($current_dir);
            $expandable = count( scandir( $current_dir ) ) > 2 ? true : false;
            //  In my case, I needed path name
            //  Is it expandable (as is it directory and does it contains or is it empty)
            //  Is it dir or file, if it is not dir it will be false so its file
            //  And path for that folder or file

            $path_data = [
                'name' => $path,
                'expandable' => $expandable,
                'isDir' => $isDir,
                'path' => $current_dir,
            ];

            if($expandable) $path_data['data'] = $this->treeArr($dir.'/'.$path);
            //  If our dir is expandable we go to read files and folders from in it and call self function with that path

            array_push($arr, $path_data);
            //  At the end we add everything into array
        }
        return $arr;
    }
   
?>
if(file.isHTML){
    <?php treeArr(); ?>
}