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
    public static void main(String[] args) {
 //       System.out.println(new ExerciciosArrays().exercicio1d());
    }
}
