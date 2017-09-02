Template.Comments.onCreated(function() {
    // `this` is a TemplateInstance
    var self = this;

    // use a reactivevar to store if the author is editing
    self.isEditing = new ReactiveVar(false);

    // Subscribe comments only in this template
    var subs = self.subscribe('comments', self.data.blogId);

    self.autorun(function() {
        if (!subs.ready()) return;

        // Add anything below you want that subs has changed

    });
});

Template.Comments.helpers({
    'blogId': () => {
        return Template.instance().data.blogId;
    },
    'comments': () => {
        return Comments.find({});
    },
    'isAuthor': (authorId) => {
        return Meteor.userId() === authorId;
    }
});

Template.NewBlogComment.helpers({
    'blogId': () => {
        return Template.instance().data.blogId;
    }
});