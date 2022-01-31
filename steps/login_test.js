Feature('login');

const { I, login_page } = inject()

Before(()=>{
    console.log('Katia')
});

After(()=>{
    console.log('Araujo')
});


Scenario('login with success', ({home_page}) => {
    I.runOnIOS(() => {
        console.log('Estou no IOS')
    });

    login_page.doLogin('teste@teste.com','123456')
    home_page.checkLoginSucess()
});

Scenario('login with error', () => {
    login_page.doLogin('xteste@teste.com','123456')
    login_page.checkLoginError()
});
