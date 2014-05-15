// describe('Foo', function() {
//   it("does something", function() {
//     expect(1 + 1).toBe(2);
//   });
// });

controller = new Controller;

describe ("recordText", function(){
  it("is defined", function() {
    expect(controller.recordText).toBeDefined();
  });

  it("returns text", function(){
    var text = "Maggy's dog is black"
    expect(controller.recordText(text)).toContain("black");
  })
});

// describe("textListener", function() {
//   it("binds text form to keyup", function() {
//     var form = $("<form/>");
//     var evt = jQuery.Event("keyup", { keyCode: 64 });

//     controller.textListener.bind(form);
//     form.trigger( evt );

//     expect(form).toContain('R');
//   });
// });

// describe("textlistener", function() {
//   it ("binds text form to keyup", function() {
//     var form = $("<form/>");
//     var spyEvent = spyOnEvent(form, 'keyup');

//     controller.textListener.bind(form);
//     form.keyup();

//     expect(spyEvent).toHaveBeenTriggered();

//   });
// });