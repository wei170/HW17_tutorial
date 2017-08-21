Blogs = new Mongo.Collection('blogs');

BlogSchema = new SimpleSchema({
    title: {
        type: String,
        label: 'Title'
    },
    content: {
        type: String,
        label: 'Content'
    },
    author: {
        type: String,
        label: 'Author',
        autoValue: function() {
            return this.userId;
        }
    },
    createdAt: {
        type: Date,
        label: 'Created At',
        defaultValue: function() {
            return new Date();
        }
    }
});

Blogs.schema = BlogSchema;
Blogs.attachSchema(BlogSchema);