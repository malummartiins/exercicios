# Prática | Classes Abstratas e Interfaces

## Exercício 1 - 
* Implemente a hierarquia de classes ContaBancaria (superclasse), ContaCorrente (com senha, número, saldo e quantidade de transações realizadas) e ContaPoupanca (com senha, número, saldo e taxa de rendimento).

* quando uma ContaBancaria for criada, informe a senha da conta por parâmetro
na classe ContaBancaria, crie os seguintes métodos abstratos (os métodos devem simular as situações acontecendo na conta corrente):
saca(double valor)
deposita(double valor)
tiraExtrato()
* nesta mesma classe, crie o método alteraSenha, que recebe uma senha por parâmetro e deve confirmar a senha anterior (via teclado), e somente se a senha anterior estiver correta a senha recebida por parâmetro deve ser atribuída
implemente os métodos abstratos nas classes ContaCorrente e ContaPoupanca
* crie os métodos de acesso para os atributos de ContaCorrente e ContaPoupanca

## Exercício 2 - 
* Crie uma classe de teste para testar a hierarquia do exercício acima.

* pergunte (via teclado) quantas contas o usuário deseja criar e crie-as (com a utilização de arrays para armazenar as contas)
a cada conta criada, pergunte ao usuário se trata-se de uma ContaCorrente ou de uma ContaPoupanca, e crie a conta de acordo com o informado pelo usuário
após as contas terem sido criadas, informe a taxa de rendimento de cada ContaPoupanca armazenada
realize saques, depósitos e extratos nestas contas
* imprima a quantidade de transações realizadas nas contas correntes e as taxas de rendimento das contas poupança