import { Meteor } from 'meteor/meteor';
// Routes
import '../imports/startup/lib/routes.js';
// Collections
import '../imports/startup/both/collections/blogs.collection.js';

Meteor.startup(() => {
  // code to run on client at startup
});
