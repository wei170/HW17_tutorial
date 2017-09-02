// Login/Logout trigger
if (Meteor.isClient) {
    Accounts.onLogin(function() {
        FlowRouter.go('blogs');
    });

    Accounts.onLogout(function() {
        FlowRouter.go('home');
    });
}

FlowRouter.triggers.enter([function() {
    if (!Meteor.userId()) {
        FlowRouter.go('home');
    }
}]);

/* ---------------- Routes ---------------- */

FlowRouter.route('/', {
    name: 'home',
    action() {
        if (Meteor.userId()) {
            FlowRouter.go('blogs');
        }
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/newblog', {
    name: 'newblog',
    action() {
        BlazeLayout.render('MainLayout', {main: 'NewBlog'});
    }
});

FlowRouter.route('/blogs', {
    name: 'blogs',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Blogs'});
    }
});

FlowRouter.route('/blogs/:id', {
    name: 'blog',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Blog'});
    }
});