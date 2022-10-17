function addListeners() {
  const elem = document.querySelectorAll(".expandable");
  for (var i = 0; i < elem.length; i++) {
    elem[i].addEventListener('click', (event) => {
      var selection = event.target;
      var typ = window.getComputedStyle(selection)
      var hidden = event.target.querySelector('.hiddenText');
      n = 0;

      /* Shrink all elemnts before expanding (if needed) */
      for (var i = 0; i < elem.length; i++) {
        hid = elem[i].querySelector(".hiddenText");
        var hiddenOpacity = window.getComputedStyle(hid).getPropertyValue('opacity');
        if (hiddenOpacity == "1") {
          shrink(elem[i], hid);
          n += 1;
        } 
      }

      hiddenOpacity = window.getComputedStyle(hidden).getPropertyValue('opacity');
      if (hiddenOpacity < "1") {
        expand(selection, hidden);
      } else {
        shrink(selection, hidden);
      }
    
      function expand(element, hidden) {
        hidden.style.height = "80vh";
        hidden.style.width = "90vw";
        hidden.style.left = "5vwx";
        hidden.style.right = "5vw";
        hidden.style.position = "absolute";
        hidden.style.top = "10vh";
        // element.style.height = "max-content";
        // element.style.position = "absolute";
        // element.style.top = "25vh";
        // element.style.left = "25vw";
        // element.style.right = "25vw;"
        // hidden.style.background = "black";
        hidden.style.boxShadow = "0px 0px 20px rgba(255, 255, 255, 0.5)";
        hidden.style.opacity = "1";
      }
    
      function shrink(element, hidden) {
        hidden.style.opacity = "0";
        hidden.style.height = "0";
        // element.style.position = "static";
        // element.style.height = "2.5em";
        hidden.style.boxShadow = "none";
      }
    
      
    });
  }
}

addListeners();