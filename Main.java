import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner leitor = new Scanner(System.in);

        int A,B, PROD;

        A = leitor.nextInt(3);
        B = leitor.nextInt(9);

        PROD = A * B; //implementar o codigo

        System.out.println("PROD = " +  PROD);

        leitor.close();
    }
}
