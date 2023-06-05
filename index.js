function findbmi(){
    event.preventDefault();
    var w = document.getElementById("weight").value;
    var h = document.getElementById("height").value;
    var answer = (w/(h*h));
    var a = answer.toFixed(2);
    var image = document.getElementById('image')
    document.getElementById("foranswer").innerHTML =  a;
    if ((a>=19) && (a<=24)) {
        document.getElementById("status").innerHTML =  "Normal";
        image.src = "normal.jpg";
        }
        else if((a>24) && (a<=29)){
            document.getElementById("status").innerHTML =  "Over weight";
            image.src = "over.jpeg";
            }
            else if((29<a) && (a<60)){
                    document.getElementById("status").innerHTML =  "Obese";
                    image.src = "obese.jpeg";
                    }
            return false;
}