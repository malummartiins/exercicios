package exercJava;

public class Petshop {
    private String nome;
    private int idade;

    public Petshop (String nome, int idade){
        this.nome = nome;
        this.idade = idade;
    }

    public String getNome() {
        return nome;
    }

    public int getIdade() {
        return idade;
    }

    public String toString(){
        return "Nome: "+nome+ " | Idade: "+ idade;
    }
}
