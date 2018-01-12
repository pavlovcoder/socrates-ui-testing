    //Dropdown menu:
    function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
    myDropdown.classList.remove('show');
    }
    }
    }

    //Dropdown menu for choose the language:
    function myFunction1() {
        document.getElementById("myDropdown1").classList.toggle("show1");
    }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(e) {
    if (!e.target.matches('.dropbtn1')) {
        var myDropdown = document.getElementById("myDropdown1");
        if (myDropdown.classList.contains('show1')) {
                myDropdown.classList.remove('show1');
            }
        }
    }

    //Dropdown menu for main page in around-section:

     //Dropdown menu for choose the language:
    function myFunction2() {
        document.getElementById("myDropdown2").classList.toggle("show2");
    }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(e) {
    if (!e.target.matches('.dropbtn2')) {
        var myDropdown = document.getElementById("myDropdown2");
        if (myDropdown.classList.contains('show2')) {
                myDropdown.classList.remove('show2');
            }
        }
    }

    //Dropdown menu for choose the language in around-section:
    function myFunction3() {
        document.getElementById("myDropdown3").classList.toggle("show3");
    }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(e) {
    if (!e.target.matches('.dropbtn3')) {
        var myDropdown = document.getElementById("myDropdown3");
        if (myDropdown.classList.contains('show3')) {
                myDropdown.classList.remove('show3');
            }
        }
    }

    //Login form script:
    var modal = document.getElementById('id01');

    window.onclick = function(event) {
        if(event.target==modal) {
            modal.style.display = "none";
        }
    }

    //Sign up form script:
    var modal2 = document.getElementById('id02');

    window.onclick = function(event) {
        if(event.target==modal2) {
            modal2.style.display = "none";
        }
    }

    //Recovery Password Form:
    var modal3 = document.getElementById('id03');

    window.onclick = function(event) {
        if(event.target==modal3) {
            modal3.style.display = "none";
        }
    }

    //Sign In Form:
    var modal4 = document.getElementById('id04');

    window.onclick = function(event) {
        if(event.target==modal4) {
            modal4.style.display = "none";
        }
    }

    //Scroll to top button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if(document.body.scrollTop>20||document.documentElement.scrollTop>20) {
            document.getElementById("TopBut").style.display="block";
        } else {
            document.getElementById("TopBut").style.display="none";
        }
    }

    function topFunction() {
        document.body.scrollTop=0;
        document.documentElement.scrollTop=0;
    }

    //Up and Down Arrow for button3:
    (function(document){
        
      var div2 = document.getElementById('button0');
      var icon2 = document.getElementById('icon2');
      var div3 = document.getElementById('button1');
      var icon3 = document.getElementById('icon3');
      var open2 = true;
      var open3 = true;

    div2.addEventListener('click', function() {
         if(open2) {
             icon2.className = 'fa fa-arrow-down open';
         } else {
             icon2.className = 'fa fa-arrow-down';
         }

         open2 = !open2;
     });

    div3.addEventListener('click', function() {
         if(open3) {
             icon3.className = 'fa fa-arrow-down open';
         } else {
             icon3.className = 'fa fa-arrow-down';
         }

         open3 = !open3;
     });

    })(document);