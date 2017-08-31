Meteor.publish('blogs', () => {
    return Blogs.find({});
});