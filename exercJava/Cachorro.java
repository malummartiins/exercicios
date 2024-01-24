package exercJava;

public class Cachorro extends Petshop {
    public Cachorro (String nome, int idade){
        super(nome, idade);
    }

    public void latir (){
        System.out.println("AU-AU");
    }
}
