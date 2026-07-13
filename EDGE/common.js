// ------ D R A G G A B L E -------
function Drag() {
    var selected = null, // Object of the element to be moved
        x_pos = 0,
        y_pos = 0, // Stores x & y coordinates of the mouse pointer
        x_elem = 0,
        y_elem = 0; // Stores top, left values (edge) of the element

    // Will be called when user starts dragging an element
    function _drag_init(elem) {
        // Store the object of the element which needs to be moved
        selected = elem;
        x_elem = x_pos - selected.offsetLeft;
        y_elem = y_pos - selected.offsetTop;
    }

    // Will be called when user dragging an element
    function _move_elem(e) {
        x_pos = e.pageX;
        y_pos = e.pageY;
        if (selected !== null) {
            selected.style.left = (x_pos - x_elem) + 'px';
            selected.style.top = (y_pos - y_elem) + 'px';
        }
    }

    // Destroy the object when we are done
    function _destroy() {
        selected = null;
    }

    // Bind the functions...
    var els = document.querySelectorAll('.mydrg, ._mydrg, ._mydrg_');
    for (var el of els) el.onmousedown = function(e) {
        if (e.button != 0) return;
        if (e.target != this) return;
        if (this.style.cssText.includes('scale')) this.style.transition = '';
        if (this.matches('._mydrg') && e.ctrlKey) return;
        if (this.matches('._mydrg_') && !e.ctrlKey) return;
        _drag_init(this);
        return false;
    };
    document.onmousemove = _move_elem;
    document.onmouseup = _destroy;
}



 // ------ S C A L E ------ //
  var count;
  function Scale(e, img) {
   e.preventDefault();
     if(img.style.transform=='') count = 1;
     else count = Number(img.style.transform.match(/\((.*)\)/)[1]);
     if(e.deltaY>0){
        count=1.1*count;
        img.style.transform='scale(' +count+ ')';
        img.style.transition = "all 0.3s";
     }
     if(e.deltaY<0){
         count=count/1.1;
         img.style.transform='scale(' +count+ ')';
         img.style.transition = "all 0.3s";
     }
  }
