import { Meteor } from 'meteor/meteor';
// Collections
import '../imports/startup/both/collections/blogs.collection.js';
import '../imports/startup/both/collections/comments.collection.js';

// Publish
import '../imports/api/blogs/publish.js';
import '../imports/api/comments/publish.js';

Meteor.startup(() => {
  // code to run on server at startup
});
