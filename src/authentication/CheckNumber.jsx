import react from "react";

var myTextbox = document.getElementById('my-textbox');
myTextbox.addEventListener('keypress', checkName, false);

function CheckName(evt) {
    var charCode = evt.charCode;
    if (charCode != 0) {
      if (charCode < 97 || charCode > 122) {
        evt.preventDefault();
        displayWarning(
          "Please use lowercase letters only."
          + "\n" + "charCode: " + charCode + "\n"
        );
      }
    }
  

  
var warningTimeout;
var warningBox = document.createElement("div");
warningBox.className = "warning";

function displayWarning(msg) {
  warningBox.innerHTML = msg;

  if (document.body.contains(warningBox)) {
    window.clearTimeout(warningTimeout);
  } else {
   
    myTextbox.parentNode.insertBefore(warningBox, myTextbox.nextSibling);
  }

  warningTimeout = window.setTimeout(function() {
      warningBox.parentNode.removeChild(warningBox);
      warningTimeout = -1;
    }, 2000);
}
return (
<div class="container">
  <p>Please enter your name using lowercase letters only.</p>

  <form>
    <input type="text" id="my-textbox"></input>
  </form>
</div>
)
}
export default CheckName;