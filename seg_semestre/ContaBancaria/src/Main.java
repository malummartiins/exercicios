import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        System.out.println("Quantas contas vc deseja criar?");
        int quantContas = Integer.parseInt(s.nextLine());

        ContaBancaria [] contas = new ContaBancaria[quantContas];

        for (int i = 0; i < contas.length; i++){
            System.out.println("Digite  1 para CC ou 2 para CP ");

            if (Integer.parseInt(s.nextLine()) == 1){
                contas[i] = new ContaCorrente("123456", 0);

            }else{
                contas[i] = new ContaPoupança("123456", 0.5);
            }
        }

    }
}