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
                        type: "POST",
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
                                " Remane</button></div></div></div>");
                                i++;
                    });
                }
                
                    });    
});
}
/*$(document).ready(function(){
    $('#category').onclick(function(){
        var clickCategory = document.getElementsByClassName('category');
*/
        function displayFiles(obj){
           var idCategory = obj.value;
           console.log(idCategory);
           $('.maincontent').html();
        }
        function addDocument(obj){
            var category=obj.value;
            $('.filecontent').html("<i class='fa fa-folder-o'></i>"+category+"/..."+
            "<input type='hidden' id='category' value='"+category+"'/>"+
            "<button class='btn btn-success adddocument' onclick='submitDocument();'>Add Document</button>"+
            "<form class='file' id='document' enctype='multipart/form-data'><div class='row'><div class='col-lg-4'><input type='text' class='form-control' id='docuName' placeholder='Document Name'></div>"+
            "<div class='col-lg-4'><input type='text' id='designate' class='form-control' placeholder='Designation'></div>"+
            "<div class='col-lg-4'><input type='text' id='addInfo' class='form-control' placeholder='Additional Details'></div></div>"+
            "<input type='file' class='form-control fileInput' id='document' placeholder='Additional Details' onchange='readURL(this);'><hr>"+
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
        function submitDocument(){
            /*var documentName=$("#docuName").val();
            var designation=$("#designate").val();
            var addInfo=$("#addInfo").val();
            var document=$("#document").val();
            var category=$("#category").val();

            var dataString="docuName="+documentName+"&designate="+
                designation+"&addInfo="+addInfo+"&category="+category+"&document="+document+
                "&addDocument=";*/
            var data=$('#document')[0];
            var formData= new FormData(data);
            
            console.log(formData);
            /*if ($.trim(documentName).length > 0 && (document.length) > 0) {
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
    }*/

            //console.log(documentName+designation+addInfo+document+category);
        }

                        
/*    });
});*/