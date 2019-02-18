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
//adding a category
$(document).ready(function(){
    
});

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
            inputCategory.innerHTML="";
           
        }
    });
}
//dispaly list of category
$(document).ready(function(){
    var dataString="&displayCategory=";
                    $.ajax({
                        type: "POST",
                        url: "main.php",
                        data: dataString,
                        crossDomain: true,
                        cache: false,
                        dataType:'json',
                        success: function(data) {
                            $.each(data, function(i, element) {
                                var id=element.id;
                                var categoryName=element.catname;
                                $("#categories").append("<div class='btn-group w-100' role='group'><button type='button' onclick='displayFiles();' class='btn btn-secondary w-100 btncategory category'><i class='fa fa-folder-o'></i>" + categoryName + "</button><div class='btn-group' role='group'><button id='btnGroupDrop1' type='button' class='btn btn-secondary dropdown-toggle w-100' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'></button><div class='dropdown-menu' aria-labelledby='btnGroupDrop1'><a class='dropdown-item' href='#'><i class='fa fa-plus-square-o'></i> Add Document</a><a class='dropdown-item' href='#'><i class='fa fa-trash-o'></i> Remove Category</a></div></div></div>");
                                
                    });
                }
                
                    });    
});

/*$(document).ready(function(){
    $('#category').onclick(function(){
        var clickCategory = document.getElementsByClassName('category');
*/
        function displayFiles(){
            alert('category is clicked');
        }
/*    });
});*/