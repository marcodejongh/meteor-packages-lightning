if (Meteor.isClient) {
  Template.hello.events({
    'click button': function (e, template) {
      // increment the counter when button is clicked
      if (Awesome) {
				Awesome.addMessage(template.find('input').value);
			} else {
				console.log('Awesome to be implemented')
			}
    }
  });
}
