public class Principal {
    public static void main(String[] args) {
       
        Ps pet = new Ps(5);
        System.out.println("*** INSERINDO PETS ***");
        for (int i=0; i<7; i++){
            double sorteio = Math.random();
            boolean inseriu = false;
            if (sorteio < 0.33)
                inseriu = pet.inserePet(new Cachorro("Cachorro "+i, i));
            else if (sorteio < 0.66)
                inseriu = pet.inserePet(new Gato("Gato "+i, i));
            else
                inseriu = pet.inserePet(new Papagaio("Papapaio "+i, i));
            if (inseriu)
                System.out.println("Pet inserido com sucesso!!");
            else
                System.out.println("Pet não inserido");
        }
        System.out.println("\n == PET DO PETSHOP == ");
        pet.imprimePets();

        System.out.println("\n*** REMOÇÃO DE PETS ***");
        Petshop removido = pet.removePet("Gato 3");
        if (removido == null)
            System.out.println("Pet não encontrado");
        else
            System.out.println("Pet removido: "+ removido);

        System.out.println("\n == PET DO PETSHOP == ");
        pet.imprimePets();
        System.out.println("\n*** FAZENDO CACHORROS LATIREM ***");
        pet.fazCachorrosLatirem();
    }
}
