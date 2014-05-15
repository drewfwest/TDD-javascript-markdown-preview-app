$(document).ready(function() {
  controller = new Controller
  controller.textListener();
})


function Controller() {
  this.view = new View
}

Controller.prototype = {
  recordText: function(input){
    // console.log(input)
    // $.ajax({
    //   url: ,
    //   type: ,
    //   data: {input: input}
    })
  },

  textListener: function() {
    this.view.getForm.keyup(this.recordText.bind(this))
  }
}