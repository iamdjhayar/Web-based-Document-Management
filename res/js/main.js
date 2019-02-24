//funtion for collapsable menu
/*$(document).ready(function(){
    var coll = document.getElementsByClassName("collapsible");
    var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
});*/
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
                                "<button class='dropdown-item' href='#' value='"+categoryName+"' onclick='addDocument(this);'><i class='fa fa-plus-square-o'></i>"+
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
               "<th scope='col'>Type</th>"+
               "<th scope='col'>Size</th>"+
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
                            $('#tbbody').append("<tr>"+
                            "<th scope='row'>"+fileName+"</th>"+
                            "<td>Mark</td>"+
                            "<td>Otto</td>"+
                            "<td>"+ date +"</td>"+
                            "</tr>");	 
                        }); 
                }


               });
           }
        }
        function addDocument(obj){
            var category=obj.value;
            $('.filecontent').html("<i class='fa fa-folder-o'></i>"+category+"/..."+
            "<form class='file' method='POST' id='document' enctype='multipart/form-data'>"+
            "<input type='hidden' name='category' value='"+category+"'/>"+
            "<button class='btn btn-success adddocument' type='submit' id='submitForm'>Add Document</button>"+
            "<div class='row'><div class='col-lg-4'><input type='text' class='form-control' name='docuName' placeholder='Document Name' required></div>"+
            "<div class='col-lg-4'><input type='text' name='designate' class='form-control' placeholder='Designation' required></div>"+
            "<div class='col-lg-4'><input type='text' name='addInfo' class='form-control' placeholder='Additional Details' required></div></div>"+
            "<input type='file' class='form-control fileInput' name='document' placeholder='Additional Details' onchange='readURL(this);' required><hr>"+
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

        function removeCategory(category){
            var category = category.value;
           alert(category);
        }

        function submitForm(){
            alert('success');
        }

        $("#submitForm").on('submit',(function(e) { 
                $.ajax({
                    url: "/main.php",   	// Url to which the request is send
                    type: "POST",      				// Type of request to be send, called as method
                    data:  new FormData(this), 		// Data sent to server, a set of key/value pairs representing form fields and values 
                    contentType: false,       		// The content type used when sending data to the server. Default is: "application/x-www-form-urlencoded"
                    cache: false,					// To unable request pages to be cached
                    processData:false,  			// To send DOMDocument or non processed data file it is set to false (i.e. data should not be in the form of string)
                    success: function(data)  		// A function to be called if request succeeds
                    {     
                        alert('sucess');  
                    }	        
               });
               e.preventDefault();
            }));

        function loginFunction(){
            var userName=$("#username").val();
            var passWord=$("#password").val();
            var dataString="username=" + userName + "&password=" + passWord + "&login=";
            
            if($.trim(userName).length > 0)
            {
                $.ajax({
                    type: "POST",
                    url: "main.php",
                    data: dataString,
                    crossDomain: true,
                    cache: false,
                    dataType:'json',
                    success:function(data){
                        $.each(data, function(i, element) {
                            var msg=element.msg;

                            if(msg=='success'){
                                console.log('successfull!!');
                                window.location.href="home.php";
                            }
                            else{
                                alert('failed!!!')
                            }
                        });

                    }

                });

            }
        }