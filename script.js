function myFunction() {
    // Get the text field
    var copyText = document.getElementById("myInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    console.log("Copied the text: " + copyText.value);
    
  }


  let css = document.querySelector("#myInput");
  let color1 = document.querySelector("#color1");
  let color2 = document.querySelector("#color2");
  let body = document.querySelector("#gradient");

  color1.addEventListener("input", function(){
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    css.value = body.style.background;
  })
  color2.addEventListener("input", function(){
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    css.value = body.style.background;
  })

const rgbToHex = (r, g, b) => {
return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

 