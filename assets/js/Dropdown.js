jQuery(document).ready(function($){
    if($('.list_baitap').length>0){

        let dropdown=document.getElementsByClassName("item_baitap-btn");
        let i;
        for (i = 0; i < dropdown.length; i++) {
            dropdown[i].addEventListener("click", function() {

            var dropdownContent = this.nextElementSibling; // gét dom bên cạnh
                if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
                } else {
                dropdownContent.style.display = "block";
                }
            });
        }
    }
});

 