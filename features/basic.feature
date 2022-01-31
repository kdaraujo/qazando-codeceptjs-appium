Feature: Login
  Eu como usuario
  Gostaria de fazer Login na aplicação
  Para acessar o sistema
 
  Scenario: Login com sucesso
    Given Eu preencho o email
    And Eu preencho a senha
    When Eu clico no botão Entrar
    Then Eu vejo a exibição do botão Salvar
