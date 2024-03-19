import java.util.Scanner;

public abstract class ContaBancaria {
    private String senha;
    private int numero;
    private double saldo;

    public ContaBancaria(String senha) {
        this.senha = senha;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public double getSaldo() {
        return saldo;
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }

    public abstract void saca(double valor);
    public abstract void deposita(double valor);
    public abstract void tiraExtrato();

    public void alteraSenha(String senha){
        Scanner s = new Scanner(System.in);
        System.out.println("Digite a senha anterior:");
        if (s.nextLine().equals(this.senha)){
            this.senha = senha;
            System.out.println("Senha alterada com sucesso");
        }
        else {
            System.out.println("Erro: senha incorreta");
        }
    }

    @Override
    public String toString() {
        return "ContaBancaria{" +
                "senha='" + senha + '\'' +
                ", numero=" + numero +
                ", saldo=" + saldo +
                '}';
    }


}
