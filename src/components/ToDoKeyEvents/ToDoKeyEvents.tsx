

const ToDoKeyEvents = (e:KeyboardEvent) => {
    e = e || window.event;

    
    switch(e.which) {
      case 37: // left
      var direction = 'LEFT';
      break;

      case 38: // up
      var direction = 'UP';
      break;

      case 39: // right
      var direction = 'RIGHT';
      break;

      case 40: // down
      var direction = 'DOWN';
      break;

      default: return; // exit this handler for other keys

  }

  e.preventDefault(); // prevent the default action (scroll / move caret)
  return direction;

};

export default ToDoKeyEvents;
