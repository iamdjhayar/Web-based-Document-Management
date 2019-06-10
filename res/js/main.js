$(document).ready(function(){

    $(".content-main").html("<div class='container'><div class='row'><div class='col col-lg-4 folder-count'><i class='fa fa-file-o'></i>25</div>"+
        "<div class='col col-lg-3 file-count'>25</div>"+
        "<div class='col col-lg-4 user-count'>+1000</div></div></div><hr>");

});
    function hideRNavAction() {
        $('.rightnav-action').css('display','none');
      }
    function addDocument(){
        var directory=$(".folderDir").val();
        console.log(directory);
        $('.rightnav').append("<div class='rightnav-action'></div>")
        $('.rightnav-action').css('position','fixed');
        $('.rightnav-action').css('display','block');

            $('.rightnav-action').html("<button class='btn-close' onclick='closeFileAction();'><i class='fa fa-close fa-btn-close'></i></button>");
            $('.rightnav-action').append("<form class='dragDrop' method='POST' id='document' enctype='multipart/form-data'>"+
            "<input type='file' name='fileDocument' multiple>"+
            "<p>Drag your files here or click in this area.</p>"+
            "<input type='hidden' id='file_directory' name='fileDirectory' value='"+ directory +"'"+
                "<div class='col-lg-12' id='addFileForm'>"+ 
            "<div class='input-group input-group-sm file-action'>"+
              "<input type='text' class='form-control file-name' name='fileName' placeholder='File Name'>"+
              "<span class='input-group-btn'>"+
                "<button class='btn btn-secondary btn-file' type='submit'><i class='fa fa-upload file-upload'></i></button>"+
              "</span>"+
            "</div>"+
          "</div>"+
        "</div>"+
          "</form>");
        }

        function closeFileAction(){
            $('.rightnav-action').css('display','none');
        }

        
        
    function readURL(input) {
        if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                $('#previewDocument').attr('src', e.target.result);
                };
                reader.readAsDataURL(input.files[0]);
                }
        }

        function loginFunction(){
            var userName=$("#username").val();
            var passWord=$("#password").val();
            var dataString="username=" + userName + "&password=" + passWord + "&login=";

            if(userName=="" || passWord==""){
                $('#errorMsg').html("<font color='red'>Please supply all needed data!</font>");
            }
            else{
                if($.trim(userName).length > 0)
            {
                $.ajax({
                    type: "POST",
                    url: "main.php",
                    data: dataString,
                    crossDomain: true,
                    cache: false,
                    dataType:'text',
                    processData:false,
                    success:function(data){
                        

                        if(data=='success'){
                            $('#btn-login').html('Logging in...');
                            window.location.href="home.php";
                        }
                        else{
                            $('#errorMsg').html("<font color='red'>Please check your username and password</font>");  
                        }
                    }

                });

            }
            }   
        }
        function removeDocument(obj){
            var fileIdRemove = obj.value;
            var categoryID = obj.id;
            var data = "fileId=" + fileIdRemove + "&removeDocument=";
            $.ajax({
                url: "main.php",
                type: "GET",
                data: data,
                dataType: "text",
                contentType: false,
                cache: false,
                processData: false,
                success:function(data){
                    
                    $('#'+categoryID).click();

                }

            });
        }
        function searchDocument(){
            var searchInput=$("#searchIDocumentInput").val();
            var dataString="searchInput=" + searchInput +"&searchDocument=";
            $('#properties').html('');
            if($.trim(searchInput).length > 0){
                $.ajax({
                    url: "main.php",
                    type: "GET",
                    data: dataString,
                    dataType: "json",
                    contentType: false,
                    cache: false,
                    processData: false,
                    success:function(data){
                        $.each(data,function(i,file){
                            var fileName=file.namef;
                            $('#properties').append("<a href='document_preview.php?location=./My Files/"+ fileName +"' target='_blank'>"+ fileName+"</a><br>");
                        });   
                    }
                });
            }
        }

        function manageUsers(){
            $('.selectFileAction').css('display','none');  
            $('.content-main').html("<div class='row'><div class='col col-lg-6'><div class='list-of-user'>"+
                    "<p class='addUserHeader'>List Of User</p><button class='btn btn-default w-100'>admin 27</button></div></div>"+
                    "<div class='col col-lg-6'><form><p class='addUserHeader'>Add User</p>"+
                    "<input type='text' class='form-control addUser' placeholder='Username'>"+
                    "<input type='password' class='form-control addUser' placeholder='Password'>"+
                    "<input type='password' class='form-control addUser' placeholder='Confirm Password'>"+
                    "<select class='form-control addUser'><option value='admin'>ADMIN</option><option value='staff'>STAFF</option></select>"+
                    "<button class='btn btn-success w-100'>ADD USER</button></form></div></div>");
        }

        function columnView(){
            $(".content-main").html("<div class='searchForm'><i class='fa fa-th list-view' onclick='columnView();'></i><i class='fa fa-th-list list-view' onclick='directoryAction();'></i><form class='form-inline my-2 my-lg-0 searchInput'>"+
            "<input class='form-control mr-sm-2' id='searchIDocumentInput' type='search' onkeyup='searchDocument();' placeholder='Search Document...'>"+
          "</form></div><div id='breadCrumb'></div><hr>");
        }
    $(document).ready(function(){
        $('.content-main').on('change','#customView',function(){
            var view = $("input[name='customView']:checked").val();
            if(view=="listView"){
                listView();
            }
            else if(view=="gridView"){
                gridView();
            }
        });
    }); 
    $(document).ready(function(){
        $(".content-main").html("<input type='hidden' id='folderCategory'><div class='searchForm'><div class='form-check form-check-inline'>"+
           "<label class='form-check-label'>"+
             "<input class='form-check-input' type='radio' name='customView' id='customView' value='listView' checked> List View </label> </div>"+
             "<div class='form-check form-check-inline'>"+
           "<label class='form-check-label'>"+
             "<input class='form-check-input' type='radio' name='customView' id='customView' value='gridView'> Grid View </label></div>"+
             "<form class='form-inline my-2 my-lg-0 searchInput'>"+
             "<input class='form-control mr-sm-2' id='searchIDocumentInput' type='search' onkeyup='searchDocument();' placeholder='Search Document...'>"+
           "</form></div><div id='breadCrumb'></div><hr><div class='container'><div class='row listGridView'></div></div>");   
    });
       function directoryAction(){
           
           var view = $("input[name='customView']:checked").val(); 
           if(view=="listView"){
                listView();
                    }
                else if(view=="gridView"){
                    gridView();
                }
            }
             $(document).ready(function(){
                $('.content-main').on('click','.renameFile', function(event) {
                    event.preventDefault();
                    alert("sjdhfjdf");
                });
            });
       
       function listView(){
        var directory=$('#folderCategory').val();  
        $(".listGridView").html("<div class='tableFixHead id='style-1'><table class='record_table'>"+
        "<thead>"+
        "<tr class='tblHeading'>"+
        "<th align='center' style='padding-bottom:10px'><input type='checkbox' class='form-control checkbox-round'/></th>"+
        "<th></th>"+
        "<th>File Name</th>"+
        "<th>File Size</th>"+
        "<th>Uploader</th>"+
        "<th>Date Modefied</th>"+
            "</tr>"+
            "</thead>"+
            "<tbody class='fileTbody'></tbody></table></div>");  
        $(".content-main").append("");
            var dataString = "directory=" + directory + "&getFileInDirectory="
            $.ajax({
                url: "main.php",
                type: "GET",
                data: dataString,
                dataType: "json",
                contentType: false,
                cache: false,
                processData: false,
                success:function(data){
                    var id = 0;
                    $.each(data,function(i,element){
                        var fName = element.namef;
                        var uploader = element.uploader;
                        var datestamp = element.datestamp;
                        var fileId = element.id;
                        var size = element.size;
                        size = size+"MB";
                        $(".fileTbody").append("<tr class='clickRow' id='"+ id + "'><td><input id='file"+ id +"' type='hidden' value='"+ fileId +"'>"+
                        "<input type='checkbox' id='chk"+ id + "' class='form-control checkbox-round' name='fileSelect' value='"+ fileId +"'/></td>"+
                        "<td><a class='file-action-row'><i class='fa fa-download'></i></a><a class='file-action-row'></a></td>"+
                        "<td>"+ fName +"</td><td>"+size+"</td><td>"+uploader+"</td><td>"+datestamp+"</td></tr>");
                        id++;

                        function heloIt(){
                            console.log('shdjfhjf');
                        }

                        
                    });
                }
                
            });
       }
       function gridView(){
        var directory=$('#folderCategory').val();  
        $('.listGridView').html("");
            var dataString = "directory=" + directory + "&getFileInDirectory=";
            $.ajax({
                url: "main.php",
                type: "GET",
                data: dataString,
                dataType: "json",
                contentType: false,
                cache: false,
                processData: false,
                success:function(data){
                    var id = 0;
                    $.each(data,function(i,element){
                        var fName = element.namef;
                        var uploader = element.uploader;
                        var datestamp = element.datestamp;
                        var fileId = element.id;
                        var size = element.size;
                        size = size+"MB";
                        
                        $('.listGridView').append("<div class='col-lg-2 gridFileView' id='"+ fileId +"'><i class='fa fa-file-o fileCustomView'></i><br>"+ fName +"</div>");
                    });
                }
                
            });
       }
       function clickRow(event){
           if(event.target.type !== 'checkbox'){
            alert('asjdgs');
           }
       }
//function for displaying preview of the document//
       $(document).ready(function(){
        $('.content-main').on('click', '.record_table .clickRow', function(event) {
            $('.rightnav').html("<div id='properties'></div>");
            $('#properties').css('display','block'); 
            var id = this.id;
            var fileId = $('#file'+id).val();
            var dataString = "fileId=" + fileId + "&displayFileProperty=";
            $.ajax({
                url: "main.php",
                type: "GET",
                data: dataString,
                dataType: "json",
                contentType: false,
                cache: false,
                processData: false,
                success:function(data){
                    $.each(data,function(i,file){
                        var filename = file.namef;
                        var location = file.location;
                        var extension = filename.substr( (filename.lastIndexOf('.') +1) );
                        var uploader = file.uploader;
                        //$('#properties').html("<a class='nav-link docPropBtn' href='#' onclick='maxDoc();'><i class='fa fa-expand'></i></a>");
                        switch(extension) {
                            case 'jpg':
                            case 'png':
                            case 'gif':
                                $('#properties').append("<a href='document_preview.php?location=./My Files/"+ filename +"' target='_blank'><img src='./My Files/"+ filename +"' width='100%'/></a>");
                            break;                        
                            case 'zip':
                            case 'rar':
                                $('#properties').append("<div class='file-preview'><i class='fa fa-file-zip-o'</div>");
                            break;
                            case 'pdf':
                                $('#properties').append("<object scrolling='no' data='./My Files/"+filename+"' type='application/pdf'>"+
                                    "<embed scrolling='no' src='./My Files/"+filename+"' type='application/pdf'/>"+
                                "</object>");
                            break;
                            case 'docx':
                            case 'doc':
                                $('#properties').append("<div class='file-preview'><i class='fa fa-file-word-o'></i></div>");
                            break;
                            default:
                                $('#properties').append("<div class='file-preview'><i class='fa fa-ban'></i></div>");
                        }
                        
                        $('#properties').append("<table class='file-property'><tr><td>File Name:</td><td>"+filename+"</td></tr>"+
                                "<tr><td>Location:</td><td>"+location+"</td></tr>"+
                                "<tr><td>Uploader:</td><td>"+uploader+"</td></tr></table>");
                    });                
            }

            });
            
       });
    });
//end of function oreview///////
//function for displaying preview of the document//
$(document).ready(function(){
    $('.listGridView').on('click','.gridFileView',function(event) {
        $('.rightnav').html("<div id='properties'></div>");
        $('#properties').css('display','block'); 
        var id = this.id;
        console.log(id);
        var dataString = "fileId=" + id + "&displayFileProperty=";
        $.ajax({
            url: "main.php",
            type: "GET",
            data: dataString,
            dataType: "json",
            contentType: false,
            cache: false,
            processData: false,
            success:function(data){
                $.each(data,function(i,file){
                    var filename = file.namef;
                    var location = file.location;
                    var extension = filename.substr( (filename.lastIndexOf('.') +1) );
                    var uploader = file.uploader;
                    //$('#properties').html("<a class='nav-link docPropBtn' href='#' onclick='maxDoc();'><i class='fa fa-expand'></i></a>");
                    switch(extension) {
                        case 'jpg':
                        case 'png':
                        case 'gif':
                            $('#properties').append("<a href='document_preview.php?location=./My Files/"+ filename +"' target='_blank'><img src='./My Files/"+ filename +"' width='100%'/></a>");
                        break;                        
                        case 'zip':
                        case 'rar':
                            $('#properties').append("<div class='file-preview'><i class='fa fa-file-zip-o'</div>");
                        break;
                        case 'pdf':
                            $('#properties').append("<object scrolling='no' data='./My Files/"+filename+"' type='application/pdf'>"+
                                "<embed scrolling='no' src='./My Files/"+filename+"' type='application/pdf'/>"+
                            "</object>");
                        break;
                        case 'docx':
                        case 'doc':
                            $('#properties').append("<div class='file-preview'><i class='fa fa-file-word-o'></i></div>");
                        break;
                        default:
                            $('#properties').append("<div class='file-preview'><i class='fa fa-ban'></i></div>");
                    }
                    
                    $('#properties').append("<table class='file-property'><tr><td>File Name:</td><td>"+filename+"</td></tr>"+
                            "<tr><td>Location:</td><td>"+location+"</td></tr>"+
                            "<tr><td>Uploader:</td><td>"+uploader+"</td></tr></table>");
                });                
        }

        });
        
   });
});
//end of function oreview///////

//function trigger when checkbox is checked
       $(document).ready(function(){
            $('.content-main').on('change','.clickRow input[type=checkbox]', function(){
                $('#properties').css('display','none');
                var countCheckedCheckboxes = $('.clickRow input[type=checkbox]').filter(':checked').length;
                if(countCheckedCheckboxes == 0){
                    $('.selectFileAction').css('display','none'); 
                }else{
                    $('.selectFileAction').css('display','block');
                    $('.selectFileAction').html(countCheckedCheckboxes + " file/s selected<button type='button' class='btn btn-file-action btn-delete' data-toggle='modal' data-target='#deleteModal'><u>DELETE</u></button>"+
                            "<button class='btn btn-file-action'><u>COPY</u></button>"+
                            "<button class='btn btn-file-action'><u>MOVE</u></button>");   
                }   
            });
       });
///////////////////////////////////////////////

//function for deleting selected document
       $(document).ready(function(){
            $("#deleteSelectedFile").on('click',function(){
                var selectedFile = [];
                $.each($("input[name='fileSelect']:checked"), function(){            
                    selectedFile.push($(this).val());
                });
                var toBeDeleted = JSON.stringify(selectedFile);
                var dataString = "selectedFile=" + toBeDeleted + "&deleteSelectedFile=";
                $("#deleteModal .close").click()
                $.ajax({
                    url: "main.php",
                    type: "GET",
                    data: dataString,
                    dataType: "text",
                    contentType: false,
                    cache: false,
                    processData: false,
                    success:function(data){
                        if (data=='success'){
                            var dirId=$("#directoryID").val();
                        }

                    }

                });

            });
       });
////////////////////////////////////////////////////////////////
//folder Upload//
$(document).ready(function(){
    $('.modal-body').on('click', '#folder', function(event) {
        $(".uploadType").html("Folder Upload");
    });
});

$(document).ready(function(){
    $(document).on('click','.uploadModal',function(event){
        var directory=$("#folderCategory").val();
        $(".uploadType").html("<form class='dragDrop' method='POST' id='document' enctype='multipart/form-data'>"+
        "<input type='file' name='fileDocument[]' multiple>"+
        "<p>Drag your files here or click in this area.</p>"+
        "<input type='hidden' id='file_directory' name='folderCategory' value='"+directory+"'>"+
        "<div class='col-lg-12' id='addFileForm'>"+ 
            "<div class='file-action'>"+
        "<button class='btn btn-info w-100 btnUpload'>Upload File/s</button>"+
    "</form></div></div>");
    $(document).ready(function(){
        $(".dragDrop input[type='file'").change(function (e) {
            var fileName = this.files.length;
            var totalSize = 0;
            var i;
            for (i = 0; i < fileName; ++i) {
                var fileSize = this.files[i].size / 1024 / 1024;
                totalSize = totalSize + fileSize;    
            }  
          $('.dragDrop p').html(fileName + " file(s) selected [" + totalSize.toFixed(2) + "MB]");

        });
      });
    });
});

$(document).ready(function(){
    $('.modal-body').on('click', '#bulkSingle', function(event) {
        var directory=$("#folderCategory").val();
        $(".uploadType").html("<form class='dragDrop' method='POST' id='document' enctype='multipart/form-data'>"+
        "<input type='file' name='fileDocument[]' multiple>"+
        "<p>Drag your files here or click in this area.</p>"+
        "<input type='hidden' id='file_directory' name='folderCategory' value='"+directory+"'>"+
        "<div class='col-lg-12' id='addFileForm'>"+ 
            "<div class='file-action'>"+
        "<button class='btn btn-info w-100 btnUpload'>Upload File/s</button>"+
    "</form></div></div>");
    $(document).ready(function(){
        $(".dragDrop input[type='file'").change(function (e) {
            var fileName = e. target. files[0]. name;
          $('.dragDrop p').html(this.files.length + " file(s) selected");
        });
      });
});  
});

$(document).ready(function(){
    $('.modal-body').on('click', '#multiPage', function(event) {
        var directory=$("#folderCategory").val();
        $(".uploadType").html("<form class='dragDrop' method='POST' id='document' enctype='multipart/form-data'>"+
        "<input type='file' name='fileDocument[]' multiple>"+
        "<p>Drag your files here or click in this area.(Multi-page)</p>"+
        "<input type='hidden' id='file_directory' name='folderCategory' value='"+directory+"'>"+
        "<div class='col-lg-12' id='addFileForm'>"+ 
            "<div class='file-action'>"+
        "<button class='btn btn-info w-100 btnUpload'>Upload File/s</button>"+
    "</form></div></div>");
    $(document).ready(function(){
        $(".dragDrop input[type='file'").change(function (e) {
            var fileName = e. target. files[0]. name;
          $('.dragDrop p').html(this.files.length + " file(s) selected");
        });
      });
    });
});

$("button").click(function() {
    $("#test").click();
})

$('#test').change(function() {
    $('#test_form').submit();
})
$(function () {
    $(document).on('submit', '#document', function (e) {
        var directory = $('#file_directory').val();
        e.preventDefault();  
        $.ajax({
            url: "/main.php",   	// Url to which the request is send
            type: "POST",      				// Type of request to be send, called as method
            data:  new FormData(this), 		// Data sent to server, a set of key/value pairs representing form fields and values 
            contentType: false,       		// The content type used when sending data to the server. Default is: "application/x-www-form-urlencoded"
            cache: false,	
            dataType: "text",				// To unable request pages to be cached
            processData:false,  			// To send DOMDocument or non processed data file it is set to false (i.e. data should not be in the form of string)
            success: function(data)  		// A function to be called if request succeeds
            {
                $('.rightnav-action').css('display','none'); 
                directoryAction(directory);
            }	        
       });
    });
});
////////////////////////////////////////////
//contro Panel/////
//This will be loaded first when control panel is opened/////////////
var userList = "<button class='btn btn-default btnAddUser'>Add New</button>"+
                    "<table class='table'>"+
                    "<thead>"+
                    "<tr>"+
                        "<th scope='col'>#</th>"+
                        "<th scope='col'>Username</th>"+
                        "<th scope='col'>Password</th>"+
                        "<th scope='col'>Role Type</th>"+
                    "</tr>"+
                    "</thead>"+
                    "<tbody>"+
                    "<tr>"+
                        "<th scope='row'>1</th>"+
                        "<td>Mark</td>"+
                        "<td>Otto</td>"+
                        "<td>@mdo</td>"+
                    "</tr>"+
                    "</tbody>"+
                    "</table>";
var navPill = "<nav class='nav nav-pills flex-column flex-sm-row navPill'></nav><hr><div class='mainPillCon'></div>";

$(document).ready(function(){
    $(".ctrlPanelSettings").html(navPill);
    $('.navPill').html("<a class='flex-sm-fill text-sm-center nav-link userList' href='#'>Users</a>");
    $('.mainPillCon').html(userList);
});

$(document).ready(function(){
    $('.navPill').html("<a class='flex-sm-fill text-sm-center nav-link userList' href='#'>Users</a>");
    $('.mainPillCon').html(userList);
})

$(document).ready(function(){
    $('.navPill').html("<a class='flex-sm-fill text-sm-center nav-link userList' href='#'>Users</a>");
    $('.mainPillCon').html(userList);
})
 
//////////////////////////////////////////////////////////////////
$(document).ready(function(){
    $('.ctrlPanelSettings').on('click','.btnAddUser',function(event){
        $('.navPill').append("<a class='flex-sm-fill text-sm-center nav-link addUserPill' href='#'>Add User</a>");
        $('.mainPillCon').html("ahsgdhsgd");
    });
});
$(document).ready(function(){
    $('.ctrlPanelSettings').on('click','.userList',function(event){
        $('.mainPillCon').html(userList);
    });
});

$(document).ready(function(){
    $(".roleSettings").on('click',function(){
        $(".ctrlPanelSettings").html("");
    });
});

$(document).ready(function(){
    $(".userSettings").on('click',function(){
        $(".ctrlPanelSettings").html(navPill);
    });
});
///ADD NOTE///
function addNote(){
    $(".rightnav").html("MY NOTES<a class='nav-link btnAddNote' href='#' data-toggle='modal' data-target='#addNoteModalLg'><i class='fa fa-plus navlink'></i></a>");
    $(".rightnav").append("<hr>");
}
$(document).ready(function(){
    $('.btnAdd').on('click',function(event){
       var note = $('#textAreaNote').val();
       var noteData = "note=" + note + "&addnote=";
       console.log(noteData);
       $.ajax({
        url: "/main.php",   	
        type: "POST",      				
        data:  noteData, 			
        dataType: "text",						
        success: function(data)  		
        {
            console.log("note successfully added!");
        }	    
        });
    });
});
//fetch notes in the database
$(document).ready(function(){
    $.ajax({
        url: "/main.php",   	
        type: "GET",      				
        data:  noteData, 			
        dataType: "text",						
        success: function(data)  		
        {
            
        }	    
        });
});
//maximize document
function maxDoc() {
    document.getElementById("maxDocument").style.display = "block";
  }
function minDoc() {
    document.getElementById("maxDocument").style.display = "none";
  }
//fetch list of folder/category
$(document).ready(function(){ 
    //fill data to tree  with AJAX call
    $('#fieldCategory').jstree({
        'core' : {
      'data' : {
              'url' : 'main.php?operation=get_node',
              'data' : function (node) {
                return { 'id' : node.id };
              },
              "dataType" : "json"
            }
            ,'check_callback' : true,
            'themes' : {
              'responsive' : false
            }
      },
      'plugins' : ['state','contextmenu','wholerow']
    }).on('create_node.jstree', function (e, data) {     
        $.get('main.php?operation=create_node', { 'id' : data.node.parent, 'position' : data.position, 'text' : data.node.text })
          .done(function (d) {
            data.instance.set_id(data.node, d.id);
          })
          .fail(function () {
            data.instance.refresh();
          });
        }).on('rename_node.jstree', function (e, data) {
            $.get('main.php?operation=rename_node', { 'id' : data.node.id, 'text' : data.text })
              .fail(function () {
                data.instance.refresh();
              });
          }).on('delete_node.jstree', function (e, data) {
            $.get('main.php?operation=delete_node', { 'id' : data.node.id })
              .fail(function () {
                data.instance.refresh();
              });
        });
});
$(document).ready(function(){
    $('#fieldCategory')
  // listen for event
  .on('changed.jstree', function (e, data) {
      e.preventDefault();
    var i, j, r = [];
    for(i = 0, j = data.selected.length; i < j; i++) {
      r.push(data.instance.get_node(data.selected[i]).text);
    }
    $('#folderCategory').val(r);
    var folder=$('#folderCategory').val();
    directoryAction();
    
  })
  // create the instance
  .jstree();
})

//for image processing

$(document).ready(function(){

    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;
    
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
    
            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
    };

    var imgURL = getUrlParameter('location');
    $('.documentFileName').html("<h5>"+imgURL+"</h5>");

    $('.docThumb').html("<img width='100%' src='"+ imgURL+"'>")

    const canvas = document.getElementById('imgCanvas');
    const ctx = canvas.getContext('2d');
    let img = new Image();

    img = new Image();
    img.src=imgURL;

    img.onload = function () {
    canvas.width=img.width;
    canvas.height=img.height;
    ctx.drawImage(img,0,0,img.width,img.height);
    canvas.removeAttribute('data-caman-id');
    };

    document.addEventListener('change',(e)=>{

        if(e.target.classList.contains('formControlBr')){
            var brValue=$('.formControlBr').val();
            console.log(brValue);
            console.log(img);
            Caman("#imgCanvas",img,function(){
                this.brightness(brValue).render();
            });
        }
        if(e.target.classList.contains('formControlCon')){
            var conValue=$('.formControlCon').val();
            console.log(conValue);
            console.log(img);
            Caman("#imgCanvas",img,function(){
                this.contrast(conValue).render();
            });
        }

    });
});
$(document).ready(function(){
    (function worker() {
        var dataString = "getDocumentOCR="; 
        $.ajax({
            url: "/main.php",   	
            type: "GET",      				
            data:  dataString, 			
            dataType: "json",						
            success: function(data)  		
            {
                $.each(data,function(i,file){
                    var fileName = file.namef;
                    var id = file.id;
                        fileName = "./My Files/" + fileName;

                        Tesseract.recognize(fileName)
                        .progress(function(data){
                            console.log(data)})
                            .then(function(data){
                                var ocrResult = data.text;
                                var finalOcr=ocrResult.replace(/[^a-zA-Z ]/g, "");
                                documentOCR(id,finalOcr);
                            })
                });
            }	
        });
          setTimeout(worker, 1000);
      })();
    
});
function documentOCR(id,ocrResult){
    var dataString = "id=" + id + "&ocrResult=" + ocrResult;
    console.log(ocrResult);
    $.ajax({
        url: "/main.php",   	
        type: "POST",      				
        data:  dataString, 			
        dataType: "text",						
        success: function(data)  		
        {

        }
    });
}
$(document).ready(function(){
    var dataString = "logOut=";
    $('.logOut').on('click',function(){
        $.ajax({
            url: "/main.php",   	
            type: "GET",      				
            data:  dataString, 			
            dataType: "json",						
            success: function(data)  		
            {
            }
        });
    });
});
$(document).ready(function(){ 
    $('.recycleBin').on('click',function(){
        $(".content-main").html("<div id='breadCrumb'><h5>Recycle Bin</h5></div>");
        $(".content-main").append("<div class='tableFixHead id='style-1'><table class='record_table'>"+
           "<thead>"+
           "<tr class='tblHeading'>"+
           "<th align='center' style='padding-bottom:10px'><input type='checkbox' class='form-control checkbox-round'/></th>"+
           "<th></th>"+
           "<th>File Name</th>"+
           "<th>File Size</th>"+
           "<th>Uploader</th>"+
           "<th>Date Modefied</th>"+
             "</tr>"+
             "</thead>"+
             "<tbody class='fileTbody'></tbody></table></div>");
            var dataString = "&getRecycleBin="
             $.ajax({
                url: "main.php",
                type: "GET",
                data: dataString,
                dataType: "json",
                contentType: false,
                cache: false,
                processData: false,
                success:function(data){
                    var id = 0;
                    $.each(data,function(i,element){
                        var fName = element.namef;
                        var uploader = element.uploader;
                        var datestamp = element.datestamp;
                        var fileId = element.id;
                        var size = element.size;
                        size = size+"MB";
                        $(".fileTbody").append("<tr class='clickRowRecover' id='"+ id + "'><td><input id='file"+ id +"' type='hidden' value='"+ fileId +"'>"+
                        "<input type='checkbox' id='chk"+ id + "' class='form-control checkbox-round' name='fileSelect' value='"+ fileId +"'/></td>"+
                        "<td><a class='file-action-row'><i class='fa fa-download'></i></a><a class='file-action-row'></a></td>"+
                        "<td>"+ fName +"</td><td>"+size+"</td><td>"+uploader+"</td><td>"+datestamp+"</td></tr>");
                        id++;

                        function heloIt(){
                            console.log('shdjfhjf');
                        }

                        
                    });
                }
                
             });
    });
});
$(document).ready(function(){
    $('.content-main').on('change','.clickRowRecover input[type=checkbox]', function(){
        $('#properties').css('display','none');
        var countCheckedCheckboxes = $('.clickRowRecover input[type=checkbox]').filter(':checked').length;
        if(countCheckedCheckboxes == 0){
            $('.selectFileAction').css('display','none'); 
        }else{
            $('.selectFileAction').css('display','block');
            $('.selectFileAction').html(countCheckedCheckboxes + " file/s selected<button type='button' class='btn btn-file-action btn-delete' data-toggle='modal' data-target='#recoverModal'><u>RECOVER</u></button>");
                     
        }   
    });
});
///////////////////////////////////////////////

//function for deleting selected document
$(document).ready(function(){
    $("#recoverSelectedFile").on('click',function(){
        var selectedFile = [];
        $.each($("input[name='fileSelect']:checked"), function(){            
            selectedFile.push($(this).val());
        });
        var toBeRecover = JSON.stringify(selectedFile);
        var dataString = "selectedFile=" + toBeRecover + "&recoverSelectedFile=";
        $("#recoverModal .close").click()
        $.ajax({
            url: "main.php",
            type: "GET",
            data: dataString,
            dataType: "text",
            contentType: false,
            cache: false,
            processData: false,
            success:function(data){
                if (data=='success'){
                    var dirId=$("#directoryID").val();
                }

            }

        });

    });
});
///////////document full view choices//////
$(document).ready(function(){
    $(".printDocument").on('click',function(){
        window.print();
    });
});

  
  
  
  


       
       
       
        


        
