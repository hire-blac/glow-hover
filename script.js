// select all box elements
const boxes = document.querySelectorAll(".box");
// get the root element
let r = document.querySelector(":root")

boxes.forEach(box => {
  // add hover event handler to every box element
  box.addEventListener('mouseover', () => {
    // get position of current box
    let rect = box.getBoundingClientRect();
    
    // add mouse move event handler to box
    box.addEventListener('mousemove', e => {
      // set values of root css variables = currentPointerPosition - position of box
      r.style.setProperty("--x-position", ((e.clientX - rect.x) + "px"));
      r.style.setProperty("--y-position", ((e.clientY - rect.y) + "px"));
    });
  });
});