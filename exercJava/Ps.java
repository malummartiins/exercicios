package exercJava;

import exercJava.Cachorro;
import exercJava.Petshop;

public class Ps {
    private Petshop[] pets;

    public Ps(int quantMax){
        pets = new Petshop[quantMax];
    }

    public boolean inserePet (Petshop p){ //exemplo de um upcasting, onde uma referencia da super classer vai apontar para um objeto da sub
        for (int i = 0; i<pets.length; i++){
            if (pets [i] == null){
                pets[i] = p;
                return true;
            }
        }
        return false;
    }

    public Petshop removePet(String nome){
        Petshop retorno = null;
        for (int i = 0; i<pets.length; i++){
            if(pets [i] != null && pets[i].getNome().equalsIgnoreCase(nome)){
                retorno = pets[i];
                pets[i]= null;
                break;
            }
        }
        return retorno;
    }
    public void fazCachorrosLatirem(){
        for (int i =0; i<pets.length; i++){
            if (pets[i] != null && pets [i] instanceof Cachorro){
               ((Cachorro)pets[i]).latir(); //exemplo de downcasting
            }
        }
    }
    public void imprimePets(){
        for (int i = 0; i<pets.length; i++){
            if (pets[i]!= null);
            System.out.println(pets[i]);
        }
    }
}
