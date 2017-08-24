Template.Blogs.helpers({
    blogs: function() {
        // Mongodb : find all Blogs
        return Blogs.find({});
    }
});