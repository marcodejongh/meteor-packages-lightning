if (Meteor.isClient) {
  Template.hello.events({
    'click button': function (e, template) {
      // increment the counter when button is clicked
      Awesome.addMessage(template.find('input').value);
    }
  });
}
