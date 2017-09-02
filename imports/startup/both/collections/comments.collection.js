import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Comments = new Mongo.Collection('comments');

CommentsSchema = new SimpleSchema({
    blogId: {
        type: String,
        autoform: {
            type: 'hidden'
        }
    },
    createdBy: {
        type: String,
        autoValue: function() {
            return this.userId;
        },
        autoform: {
            type: 'hidden'
        }
    },
    content: {
        type: String
    },
    createdAt: {
        type: Date,
        autoValue: function() {
            return new Date();
        },
        autoform: {
            type: 'hidden'
        }
    }
});

Comments.schema = CommentsSchema;
Comments.attachSchema(CommentsSchema);

Comments.allow({
    insert: function(userId, doc) {
        return !!userId;
    }
});