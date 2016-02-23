import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		return [
		{text: "Create Ember app"},
		{text: "Create Ember Igniter"},
		{text: "Master Ember"}
	  ]
	}
});
