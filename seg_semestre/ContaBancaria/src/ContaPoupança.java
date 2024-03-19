public class ContaPoupança  extends ContaBancaria{

    private double taxaRend;

    public ContaPoupança(String senha, double taxaRend) {
        super(senha);
        this.taxaRend = taxaRend;
    }

    @Override
    public void saca(double valor) {

    }

    @Override
    public void deposita(double valor) {

    }

    @Override
    public void tiraExtrato() {

    }
}
