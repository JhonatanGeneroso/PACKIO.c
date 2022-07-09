function myFunction(){
    var x = document.getElementById("topnav");

    if (x.className === "containernav"){
        x.className += " responsive";
    } else {
        x.className = "containernav";
    }

}