package exerciciosArrays;

public class exerciciosArrays{
    public static void main(String[] args) {
        double [] d = new double[100];

        d[3] = 19;
        d[75] = 32;

        System.out.println("=> Tamanho do array: "+d.length);

        for (int i = 0; i < 100; i++){
            d[i] = i;
        }
        for (int i = 0; i<100; i++){
            System.out.println(d[i]);
        }
    }
}