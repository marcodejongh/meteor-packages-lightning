// Write your package code here!
var constructor = (function () {
	var Awesome = function () {
		this.messages = new Meteor.Collection(null);
	};

	Awesome.prototype.addMessage = function (value) {
		return this.messages.insert({value: value});
	};

	return Awesome;
} ());


Awesome = new constructor();