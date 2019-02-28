reloadCategory();
function hideFieldCategory(){
    //var inputCategory = document.getElementById('fieldCategory');

    //inputCategory.style.display='none';
    alert('onclick pressed');

}

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
}
     function displayFiles(obj){
        var idCategory = obj.value;
        console.log(idCategory);
           $('.centercon').html('');
           $('.centercon').html("<table class='table table-hover w-100'>"+
           "<thead class='fileheader'>"+
               "<tr>"+
               "<th scope='col'>Name</th>"+
               "<th scope='col'>Designate</th>"+
               "<th scope='col'>Additional Info</th>"+
               "<th scope='col'>Date</th>"+
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
                            var fileName=element.namef;
                            var date=element.datestamp;
                            var designate=element.designate;
                            var addinfo=element.addinfo;
                            $('#tbbody').append("<tr>"+
                            "<th scope='row'>"+fileName+"</th>"+
                            "<td>"+designate+"</td>"+
                            "<td>"+addinfo+"</td>"+
                            "<td>"+ date +"</td>"+
                            "</tr>");	 
                        }); 
                }


               });
           }
        }
    function addDocument(obj){
        var category=obj.value;
        var btnId=obj.id;
        console.log(obj.id);
            $('.centercon').html("<div class='maincontent'></div>"+
            "<div class='filecontent'><h1></h1></div>");

            $('.filecontent').html("<i class='fa fa-folder-o'></i>"+category+"/..."+
            "<form class='file' method='POST'' id='document' enctype='multipart/form-data'>"+
            "<input type='hidden' name='category' value='"+category+"'/>"+
            "<input type='hidden' name='buttonID' value='"+btnId+"'/>"+
            "<button class='btn btn-success adddocument' type='submit'>Add Document</button>"+
            "<div class='row'><div class='col-lg-4'><input type='text' class='form-control' name='docuName' placeholder='Document Name'></div>"+
            "<div class='col-lg-4'><input type='text' name='designate' class='form-control' placeholder='Designation'></div>"+
            "<div class='col-lg-4'><input type='text' name='addInfo' class='form-control' placeholder='Additional Details'></div></div>"+
            "<input type='file' class='form-control fileInput' name='document' placeholder='Additional Details' onchange='readURL(this);'><hr>"+
            " <img id='previewDocument' src='#' width='100%' alt='Preview Document'/></form>");
        }
    function submitForm(){
        var name=$('#docuName').val();
        var designate=$('#designate').val();
        var addInfo=$('#addInfo').val();
        var document=$('#document').val();
        var category=$('#category').val();
        var dataString="docuName="+name+"&designate="+designate+"&addInfo="+addInfo+"&document="+document+"&category="+category+"&submitDocument=";
        console.log(dataString);
        alert(dataString);
            $.ajax({
                type: "POST",
                url: "main.php",
                data: dataString,
                crossDomain: true,
                cache: false,
                dataType:'json', 			
                success: function(data)  		
                {     
                    alert('sucess');  
                }	 

            });
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

        function removeCategory(category){
            var category = category.value;
           alert(category);
        }

        function loginFunction(){
            var userName=$("#username").val();
            var passWord=$("#password").val();
            var dataString="username=" + userName + "&password=" + passWord + "&login=";
            
            if($.trim(userName).length > 0)
            {
                $.ajax({
                    type: "GET",
                    url: "main.php",
                    data: dataString,
                    crossDomain: true,
                    cache: false,
                    dataType:'json',
                    processData:false,
                    success:function(data){
                        $.each(data, function(i,element) {
                            var msg=element.msg;
                            console.log(element.msg);
                            if(msg=='success'){
                                console.log('successfull!!');
                                window.location.href="home.php";
                            }
                            else{
                                console.log('error');
                            }
                        });

                    }

                });

            }
        }
        $(document).ready(function (e) {
            $("#document").on('submit',(function(e) {
                e.preventDefault();
                $.ajax({
                    url: "/main.php",   	// Url to which the request is send
                    type: "POST",      				// Type of request to be send, called as method
                    data:  new FormData(this), 		// Data sent to server, a set of key/value pairs representing form fields and values 
                    contentType: false,       		// The content type used when sending data to the server. Default is: "application/x-www-form-urlencoded"
                    cache: false,					// To unable request pages to be cached
                    processData:false,  			// To send DOMDocument or non processed data file it is set to false (i.e. data should not be in the form of string)
                    success: function(data)  		// A function to be called if request succeeds
                    {

                            
                    }	        
               });
            }));
        });
        function getUrlVars() {
            var vars = [], hash;
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
            }
            return vars;
           }