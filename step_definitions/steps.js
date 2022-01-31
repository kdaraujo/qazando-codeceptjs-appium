const { I } = inject();

Given('Eu preencho o email', () => {
  I.fillField('~email','teste@teste.com')
});

Given('Eu preencho a senha', () => {
  I.fillField('~senha','123456')
});

When('Eu clico no botão Entrar', () => {
  I.tap('~entrar')
});

Then('Eu vejo a exibição do botão Salvar', () => {
  I.waitForElement('~salvar', 5)
  I.seeElement('~salvar')
});
