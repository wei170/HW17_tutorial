FlowRouter.route('/', {
    name: 'home',
    action() {
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