

document.getElementById("accept-cooki").addEventListener("click", function(){
        document.getElementsByClassName("popUpCooki")[0].style.display = "none";
    });

    document.getElementById("show-nav").addEventListener("click", function(){
        let element = document.getElementById("main-nav");
        toggliCSS(element);

    });
    let allClose = document.getElementsByClassName('close');
    console.log(typeof allClose);
    

    
    Array.from(allClose).forEach(function(element) {
        element.addEventListener('click', function(){
            this.parentNode.closest(".modal").style.display = 'none';           
        });
      });


    function toggliCSS(element) {

        if (element.style.display === "none") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }   

  