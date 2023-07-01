var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


let saveFile = () => {
    // Get the data from each element on the form.
    const name = document.getElementById("name");
    const email = document.getElementById("clientemail");
    const phone= document.getElementById("clientphone");
    const enquery = document.getElementById("enquery");

    // This variable stores all the data.
    let data = "\r Name: " + name.value + " \r\n " + "mail,: " + clientemail.value + " \r\n " + "Phone: " + clientphone.value + " \r\n " + "Enquery: " + country.value + " \r\n " + "Message: " + msg.value;
    enquery.value; //printing form data into the console
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: "text/plain" });
    var filename = new Date();
    var month =new Date(); //months from 1-12
    month = month.getMonth();

    var day = new Date();
    var day = day.getUTCDate();

    var year = new Date();
    var year = year.getUTCFullYear();

    newdate = year + "/" + month + "/" + day;
    const sFileName = filename; // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = new Date();

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    } else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();
};