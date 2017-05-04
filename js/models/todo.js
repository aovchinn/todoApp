/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Todo Model
	// ----------

	// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
	app.Todo = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		defaults: {
			title: '',
			completed: false,
            priority: 0
		},


		// Toggle the `completed` state of this todo item.
		toggle: function () {
			this.save({
				completed: !this.get('completed')
			});
		},

        // Toggle the `priority` level of this todo item.
		togglePriority: function (level) {
            level === this.get('priority') ?
            this.save({ priority: 0 }) :
            this.save({ priority: level });
            console.log('level: ' + level);
            console.log('priority: ' + this.get('priority'));
		},
	});
})();
