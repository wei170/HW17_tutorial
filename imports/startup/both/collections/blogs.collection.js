import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

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
    tags: {
        type: Array,
        label: 'Tags'
    },
    'tags.$': {
        type: String
    },
    author: {
        type: String,
        label: 'Author',
        autoform: {
            type: 'hidden'
        },
        autoValue: function() {
            return this.userId;
        }
    },
    createdAt: {
        type: Date,
        label: 'Created At',
        autoform: {
            type: 'hidden'
        },
        defaultValue: function() {
            return new Date();
        }
    }
});

Blogs.schema = BlogSchema;
Blogs.attachSchema(BlogSchema);

Blogs.allow({
    insert: function(userId, doc) {
        return !!userId;
    },
    update: function(userId, doc) {
        return !!userId;
    },
    delete: function(userId) {
        return !!userId;
    }
});