import { Meteor } from 'meteor/meteor';
// Collections
import '../imports/startup/both/collections/blogs.collection.js';

// Publish
import '../imports/api/blogs/publish.js';

Meteor.startup(() => {
  // code to run on server at startup
});
