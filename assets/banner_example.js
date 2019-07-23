var banner = new window.banner({
    type: 'modal',
    content: {
        text: '<div>We notice that you are using an ad blocker.<br/> We use advertising to fund content creation for this site.  Please whitelist us.</div>',
        contentStyle: 'border-radius: 10px; line-height: 30px;'
    },
    logo: {
        image: 'https://www.apomaya.com:443/wp-content/uploads/2018/10/apomaya-logo1.png',
        style: 'margin-bottom: 20px',
        width: '',
    },
});
banner.showIfAdblockerDetected();