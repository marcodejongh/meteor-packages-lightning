// Write your tests here!
// Here is an example.
Tinytest.add('example', function (test) {
  test.equal(true, true);
});

Tinytest.add('Awesome', function (test) {
	test.equal(typeof Awesome, 'object', 'Should export Awesome');
	test.equal(typeof Awesome.messages, 'object', 'Should have a messages');
});

Tinytest.add('Awesome - #addMessage', function (test) {
	Awesome.addMessage('Test');
	test.equal(Awesome.messages.findOne().value, 'Test', 'Should add the given value to messages');

	Awesome.addMessage('Test2');
	test.equal(Awesome.messages.find().count(), 2, 'Should now have 2 messages in messages')
});