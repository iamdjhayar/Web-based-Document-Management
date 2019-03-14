
function hideFieldCategory(){
    //var inputCategory = document.getElementById('fieldCategory');

    //inputCategory.style.display='none';
    alert('onclick pressed');

}
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
        $('.rightnav').append("<div class='rightnav-action'></div>")
        $('.rightnav-action').css('position','fixed');
        $('.rightnav-action').css('display','block');

            $('.rightnav-action').html("<button class='btn-close' onclick='closeFileAction();'><i class='fa fa-close fa-btn-close'></i></button>");
            $('.rightnav-action').append("<form class='dragDrop' method='POST' id='document' enctype='multipart/form-data'>"+
            "<input type='file' name='fileDocument' multiple>"+
            "<p>Drag your files here or click in this area.</p>"+
                "<div class='col-lg-12'>"+
            "<div class='input-group input-group-sm file-action'>"+
              "<input type='text' class='form-control file-name' name='fileName' placeholder='File Name'>"+
              "<span class='input-group-btn'>"+
                "<button class='btn btn-secondary btn-file' type='submit'><i class='fa fa-upload file-upload'></i></button>"+
              "</span>"+
            "</div>"+
          "</div>"+
        "</div>"+
          "</form>");

          $(document).ready(function(){
            $(".dragDrop input[type='file'").change(function (e) {
                var fileName = e. target. files[0]. name;
                $('.file-name').val(fileName);
              $('.dragDrop p').text(this.files.length + " file(s) selected");
            });
          });
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
            var dataString = "displayFolderAndFiles=";
            $.ajax({
                url: "main.php",
                type: "GET",
                data: dataString,
                dataType: "html",
                contentType: false,
                cache: false,
                processData: false,
                success:function(data){
                    
                    $('#fieldCategory').append("<script>var toggler = document.getElementsByClassName('caret');"+
                    "var i;"+
                    
                    "for (i = 0; i < toggler.length; i++) {"+
                      "toggler[i].addEventListener('click', function() {"+
                        "this.parentElement.querySelector('.nested').classList.toggle('active');"+
                        "this.classList.toggle('caret-down');"+
                      "});"+
                    "}</script><ul class='list'>"+data+"</ul>");  
                    
                    
                }
            });

        });
       function directoryAction(obj){
           var directory = obj.value
           var editDer = directory.replace("./","");
           $(".content-main").html("<button class='btn btn-default'><i class='fa fa-folder-o'></i></button>"+
                "<button class='btn btn-default' onclick='addDocument(this);'><i class='fa fa-upload'></i></button>");
           $(".content-main").append("<h5>"+editDer+"</h5>");
           $(".content-main").append("<table class='table table-hover'>"+
           "<thead class='thead-light'>"+
           "<tr>"+
           "<th scope='col' class='check' style='padding-bottom:10px'><input type='checkbox' class='form-control '/></th>"+
           "<th scope='col'>First Name</th>"+
           "<th scope='col'>Last Name</th>"+
           "<th scope='col'>Username</th>"+
             "</tr>"+
             "</thead>"+
             "<tbody class='fileTbody'></tbody></table");
            var dataString = "directory=" + directory + "&getFileFolder="
             $.ajax({
                url: "main.php",
                type: "GET",
                data: dataString,
                dataType: "text",
                contentType: false,
                cache: false,
                processData: false,
                success:function(data){
                    $(".fileTbody").append(data);
                }
             });
           
       }
       
        


        
