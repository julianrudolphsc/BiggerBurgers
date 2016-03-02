Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function(){
    this.route('home', {
       path: '/',
       template: 'home'
    });
    
    this.route('menu',{
        path: '/menu',
        template: 'menu'
    });
});