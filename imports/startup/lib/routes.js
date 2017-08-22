FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/blogs/new', {
    name: 'newblog',
    action() {
        BlazeLayout.render('MainLayout', {main: 'NewBlog'});
    }
});