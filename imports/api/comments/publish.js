Meteor.publish('comments', (blogId) => {
    return Comments.find({blogId: blogId});
});