Template.Blogs.helpers({
    blogs: function() {
        // Mongodb : find all Blogs
        return Blogs.find({});
    }
});

Template.Blog.helpers({
    blog: function() {
        return Blogs.findOne({_id: FlowRouter.getParam('id')});
    }
});