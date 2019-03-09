
function hideFieldCategory(){
    //var inputCategory = document.getElementById('fieldCategory');

    //inputCategory.style.display='none';
    alert('onclick pressed');

}

/*reloadCategory();
function addCategory(){
    var inputCategory = document.getElementById('fieldCategory');
    inputCategory.innerHTML="<input id='category' placeholder='Add Category...' class='form-control' type='text'/>";
    inputCategory.addEventListener("keyup",function(event){
        if(event.keyCode == 13){
            var category=$("#category").val();
            var dataString="catName=" + category + "&addCategory=";
        if ($.trim(category).length > 0 ) {
                    $.ajax({
                        type: "POST",
                        url: "main.php",
                        data: dataString,
                        crossDomain: true,
                        cache: false,
                        dataType:'json',
                        success: function(data) {
                            console.log(data);
                    }   
                    });
        }
        $("#categories").html("");
        reloadCategory();
        $('#sidenav').load('#sidenav>*');
        inputCategory.innerHTML="";
        }
    });
}
//dispaly list of category
function reloadCategory(){
$(document).ready(function(){
    var dataString="displayCategory=";
                    $.ajax({
                        type: "GET",
                        url: "main.php",
                        data: dataString,
                        crossDomain: true,
                        cache: false,
                        dataType:'json',
                        success: function(data) {
                            $.each(data, function(i, element) {
                                var i;
                                var id=element.id;
                                var categoryName=element.catname;
                                $("#categories").append("<div class='btn-group w-100' role='group'>"+
                                "<button type='button' onclick='displayFiles(this);' class='btn btn-secondary w-100 btncategory' id='category"+i+"' value='"+categoryName+"'><i class='fa fa-folder-o'></i>" + categoryName + "</button>"+
                                "<div class='btn-group' role='group'><button id='btnGroupDrop1' type='button' class='btn btn-secondary dropdown-toggle w-100' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'></button>"+
                                "<div class='dropdown-menu' aria-labelledby='btnGroupDrop1'>"+
                                "<button class='dropdown-item' href='#' value='"+categoryName+"' onclick='addDocument(this);' id='category"+i+"'><i class='fa fa-plus-square-o'></i>"+
                                " Add Document</button><button value='"+categoryName+"' class='dropdown-item' href='#' onclick='removeCategory(this);'><i class='fa fa-trash-o'>"+
                                "</i> Remove Category</button>"+
                                "<button class='dropdown-item' href='#' value='"+categoryName+"' ><i class='fa fa-eye-slash'></i>"+
                                " Change View</button>"+
                                "<button class='dropdown-item' href='#' value='"+categoryName+"' ><i class='fa fa-edit'></i>"+
                                " Rename</button></div></div></div>");
                                i++;
                    });
                }
                
                    });    
});
}*/
     function displayFiles(obj){
        var idCategory = obj.value;
        var catId=obj.id;
        $('#properties').html('');//Empty properties DIV content and element
           $('.centercon').html('');
           $('.centercon').html("<div><p class='category'>"+ idCategory +
           "<button class='table-action' id='"+ catId +"' value='"+ idCategory +"' onclick='addDocument(this);'><i class='fa fa-plus'></i></button>"+
           "<button class='table-action'><i class='fa fa-trash'></i></button>"+
           "<button class='table-action' id='chkToggle' onclick='chkToggle();'><i class='fa fa-check-square-o'></i></button>"+
           "</p></div>"+
           "<table class='table table-hover w-100'>"+
           "<thead class='fileheader'>"+
               "<tr>"+
               "<th class='check' scope='col'><input type='checkbox' class='form-control'></th>"+
               "<th scope='col'>Name</th>"+
               "<th scope='col'>Designate</th>"+
               "<th scope='col'>Additional Info</th>"+
               "<th scope='col'>Date</th>"+
               "<th scope='col'></th>"+
               "</tr>"+
           "</thead>"+
           "<tbody id='tbbody'>"+    
           "</tbody>"+
           "</table>");
        var dataString="category="+idCategory+"&getFiles=";
        console.log(dataString);
           if($.trim(idCategory).length>0){
               $.ajax({
                   url: "main.php",
                   type: "GET",
                   data: dataString,
                   contentType: false,       		// The content type used when sending data to the server. Default is: "application/x-www-form-urlencoded"
                    cache: false,	
                    dataType: "json",			// To unable request pages to be cached
                    processData:false,  			// To send DOMDocument or non processed data file it is set to false (i.e. data should not be in the form of string)
                    success: function(data){ 
                        $.each(data, function(i, element) {
                            var fileId=element.id;
                            var fileName=element.namef;
                            var date=element.datestamp;
                            var designate=element.designate;
                            var addinfo=element.addinfo;
                            var fileCategory=element.category;
                            $('#tbbody').append("<tr>"+
                            "<td class='check' scope='row'><input type='checkbox' class='form-control'></td>"+
                            "<td>"+fileName+"</td>"+
                            "<td>"+designate+"</td>"+
                            "<td>"+addinfo+"</td>"+
                            "<td>"+ date +"</td>"+
                            "<td><div id='drp-menu' class='dropdown show'>"+
                            "<button class='btn btn-secondary dropdown-toggle' href='#' role='button' id='dropdownMenuLink'"+
                            "data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'></button>"+
                            "<div class='dropdown-menu dropdown-menu-right' aria-labelledby='dropdownMenuLink'>"+
                              "<input type='hidden' id='fileCategory' value='"+fileCategory+"'>"+
                              "<button onclick='displayProperties(this);' value='"+ fileId +"' class='dropdown-item' href='#'><i class='fa fa-list'></i> Properties</button>"+
                              "<button class='dropdown-item' href='#'><i class='fa fa-pencil-square-o'></i> Update Properties</button>"+
                              "<button onclick='removeDocument(this);' id='"+ catId +"' value='"+ fileId +"' class='dropdown-item' href='#'><i class='fa fa-trash-o'></i> Remove Document</button></div></div></td>"+
                            "</tr>");	 
                        }); 
                }


               });
           }
        }
    function sample(){
        alert('jsdhgfdshf');
    }
    function hideRNavAction() {
        $('.rightnav-action').css('display','none');
      }
    function addDocument(obj){
        var category=obj.value;
        var btnId=obj.id;
        $('.rightnav').html('');
        $('.rightnav').html("<div class='rightnav-action'></div>")
        $('.rightnav-action').css('display','block');
        $('.rightnav-action').css('right','0px');
            $('.rightnav-action').html("<i class='fa fa-folder-o'></i>"+category+"/..."+
            "<button class='btn float-right' onclick='hideRNavAction();'><i class='fa fa-close' style='font-size:10pt;'></i></button>"+
            "<form class='file' method='POST' action='' id='document' enctype='multipart/form-data'>"+
            "<input type='hidden' name='category' value='"+category+"'/>"+
            "<input type='hidden' id='btnID' name='buttonID' value='"+btnId+"'/>"+
            "<button class='btn btn-success w-100 adddocument' type='submit'>Add Document</button>"+
            "<input type='text' class='form-control  fileInput' name='docuName' placeholder='Document Name'>"+
            "<input type='text' name='designate' class='form-control fileInput' placeholder='Designation'>"+
            "<input type='text' name='addInfo' class='form-control fileInput' placeholder='Additional Details'>"+
            "<input type='file' class='form-control fileInput' name='document' placeholder='Additional Details' onchange='readURL(this);'><hr>"+
            " <img id='previewDocument' src='#' width='100%' alt='Preview Document'/></form>");
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
        $(function () {
            $(document).on('submit', '#document', function (e) {
                var btnID = $('#btnID').val();
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
                        if(data=="success"){
                            $('#'+btnID).click();
                        }

                            
                    }	        
               });
            });
        });
        function displayProperties(obj) {
            var fileId = obj.value;
            var dataString = "fileId=" + fileId + "&getFileProperties=";
            
            $('.rightnav').html("");
            $('.rightnav').html("<div id='properties'></div>");
            

            $.ajax({
                url: "main.php",
                type: "GET",
                data : dataString,
                dataType: "JSON",
                contentType: false,
                cache: false,
                processData: false,
                success:function(data){
                    $.each(data,function(i,prop){
                        var fName = prop.namef;
                        var fDesig = prop.designate;
                        var fDate = prop.datestamp;
                        var fAddInfo = prop.addinfo;
                        var fCategory = prop.category;
                        var fUploader = prop.uploader;
                        var file = prop.location;
                        $('#properties').append("<table id='tblProp'><tr><td colspan=2><img width='100%' src='uploads/"+ file +"'></td></tr>"+
                        "<tr><td id='rightAlign'>File Name: </td><td>"+fName+"</td></tr>"+
                        "<tr><td id='rightAlign'>Designate: </td><td>"+fDesig+"</td></tr>"+
                        "<tr><td id='rightAlign'>Additional Info: </td><td>"+fAddInfo+"</td></tr>"+
                        "<tr><td id='rightAlign'>Date: </td><td>"+fDate+"</td></tr>"+
                        "<tr><td id='rightAlign'>Category: </td><td>"+fCategory+"</td></tr>"+
                        "<tr><td id='rightAlign'>Uploader: </td><td>"+fUploader+"</td></tr>"+
                        "</table><hr>");
                    });

                }
            });
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
                            $('#properties').append(fileName+"<br>");
                        });   
                    }

                });
            }
        }
        function addNote(){
            alert('note added');
        }
        function manageUsers(){
            $('.centercon').html('');
            $('.centercon').html("<div class='content-main'></div>");

            $('.content-main').append("<div class='row'><div class='col col-lg-6'><div class='list-of-user'>"+
                    "<p class='addUserHeader'>List Of User</p><button class='btn btn-default w-100'>admin 27</button></div></div>"+
                    "<div class='col col-lg-6'><form><p class='addUserHeader'>Add User</p>"+
                    "<input type='text' class='form-control addUser' placeholder='Username'>"+
                    "<input type='password' class='form-control addUser' placeholder='Password'>"+
                    "<input type='password' class='form-control addUser' placeholder='Confirm Password'>"+
                    "<select class='form-control addUser'><option value='admin'>ADMIN</option><option value='staff'>STAFF</option></select>"+
                    "<button class='btn btn-success w-100'>ADD USER</button></form></div></div>");
        }
        $(document).ready(function(){
            var dataString = "display"

        });


        
