import java.util.Scanner;

public class ExerciciosArrays {
    public int [][] exercicio1a(){
            /*0 1 2 3 4 5 6 7 8 9
			  0 1 2 3 4 5 6 7 8 9
			  0 1 2 3 4 5 6 7 8 9*/
        int [][] array = new int[3][10];
        for ( int i = 0; i < array.length; i++)
            for (int j = 0; j < array[i].length; j++)
                array[i][j] = j;

        return array;

    }

    public int [][] exercicio1b(){
            /*0 1 4 9 16 25 36 49 64 81
			0 1 4 9 16 25 36 49 64 81
			0 1 4 9 16 25 36 49 64 81
			0 1 4 9 16 25 36 49 64 81
			0 1 4 9 16 25 36 49 64 81*/

        int [][] array = new int[5][10];
        for (int i = 0; i < array.length; i++)
            for (int j = 0; j < array[i].length; j++)
                array[i][j]= j*j;
        return array;
    }

    public int [][] exercicio1c(){
            /*0 0 0 0 0 0
			1 1 1 1 1 1
			2 2 2 2 2 2
			3 3 3 3 3 3
			4 4 4 4 4 4
			5 5 5 5 5 5*/
        int [][] array = new int [6][6];
        for (int i = 0; i < array.length; i++)
            for (int j = 0; j < array[i].length; j++)
                array [i][j] = i;
        return array;
    }

    public int [][] exercicio1d(){
             /*-1 -1 -1 -1 -1 -1
			  0  0  0  0  0  0
			 -1 -1 -1 -1 -1 -1
			  0  0  0  0  0  0
			 -1 -1 -1 -1 -1 -1
			  0  0  0  0  0  0
			 -1 -1 -1 -1 -1 -1
			  0  0  0  0  0  0
			 -1 -1 -1 -1 -1 -1*/
        int [][] array = new int[9][6];
        for (int i = 0; i < array.length; i++)
            for (int j = 0; j < array[i].length; j++)
                array[i][j]= i % 2 == 0 ? -1 : 0;
        return array;
    }

    public  int [][] exerc2(){

//      Exercício 2: Crie um método que retorna uma matriz de inteiros com números aleatórios positivos
//      menores que 100. O tamanho da matriz deve ser solicitado pelo teclado dentro do método.

        Scanner scanner = new Scanner(System.in);
        System.out.println("Informe o número de linhas");
        int linhas = Integer.parseInt(scanner.next());
        System.out.println("Informe o numero de colunas:");
        int colunas = Integer.parseInt(scanner.next());

        int [][] retorno = new int [linhas][colunas];

        for (int i = 0; i < retorno.length; i++)
            for (int j = 0; j < retorno[i].length; j++)
                retorno[i][j]= (int)(Math.random()*100);

        return retorno;
    }

    public void imprimeArray (int [][] array){
        for (int i = 0; i < array.length; i++){
            for (int j = 0; j < array[i].length; j++)
                System.out.print(array[i][j] + " ");
            System.out.println();
        }
    }

    public double [][] exerc3 (){
        Scanner scanner = new Scanner(System.in);
        double [][] array = new double[2][5];

        for (int i = 0; i < array.length; i++)
            for (int j = 0; j < array[i].length; i++){
                System.out.println("Digite o próximo valor:");
                array[i][j]= Double.parseDouble(scanner.next());
            }
        return  array;


    }

    public static void main(String[] args) {
 //       System.out.println(new ExerciciosArrays().exercicio1d());
        ExerciciosArrays ex = new ExerciciosArrays();
        ex.imprimeArray(ex.exercicio1d());
    }
}
