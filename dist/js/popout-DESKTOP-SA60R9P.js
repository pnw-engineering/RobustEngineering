function addListeners() {
  const elem = document.querySelectorAll(".expandable");
  // console.log("found", elem.length);
  for (var i = 0; i < elem.length; i++) {
    // elem[i].addEventListener("click", toggleElement);
    elem[i].addEventListener('click', (event) => {
      // console.log(event);
      var selection = event.target;
      // console.log(event.target.type);
      // console.log("type =", selection.type);
      var hidden = selection.childNodes[1];
      // console.log(hidden);
      // var elem = document.querySelectorAll(".expandable");
      for (const e of elem) {
        n = 0;
        if (e.style.position == "absolute") {
          shrink(e, hidden);
          n += 1;
        } 
      }
      // console.log("n=", n);
    
      if (hidden.style.opacity < "1") {
        console.log("expanding", selection)
        expand(selection);
      } 
    
      function expand(element, hidden) {
        // console.log(element);
        // console.log(hidden);
        hidden = element.querySelector(".hiddenText");
        hidden.style.position = "static";
        hidden.style.height = "max-content";
        element.style.height = "max-content";
        element.style.position = "absolute";
        element.style.top = "25vh";
        element.style.left = "25vw";
        element.style.right = "25vw;"
        element.style.boxShadow = "0px 0px 20px rgba(255, 255, 255, 0.5)";
        hidden.style.opacity = "1";
      }
    
      function shrink(element, hidden) {
        // hidden.classList.remove("hiddenText");
        // hidden.classList.add("visibleText");
        // element.classList.remove("expanded");
        // element.classList.add("expandable");
        hidden = element.querySelector(".hiddenText");
        hidden.style.opacity = "0";
        hidden.style.height = "0";
        hidden.style.position = "absolute";
        hidden.style.left = "-999px";
        element.style.position = "static";
        element.style.top = "0";
        element.style.left = "0";
        element.style.height = "2.5em";
        element.style.boxShadow = "none";
        hidden.style.transform = "translate(-500px, -100px)";
      }
    
      
    });
  }
}

addListeners();