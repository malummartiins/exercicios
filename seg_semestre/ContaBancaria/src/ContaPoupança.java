public class ContaPoupança  extends ContaBancaria{

    private double taxaRend;

    public ContaPoupança(String senha, double taxaRend) {
        super(senha);
        this.taxaRend = taxaRend;
    }

    @Override
    public void saca(double valor) {
        setSaldo(getSaldo() - valor);


    }

    @Override
    public void deposita(double valor) {
        setSaldo((getSaldo() + valor));

    }

    @Override
    public void tiraExtrato() {
        System.out.println(this.toString());

    }

    @Override
    public String toString() {
        return "ContaPoupança{" +
                "taxaRend=" + taxaRend +
                "} " + super.toString();
    }

    public double getTaxaRend() {
        return taxaRend;
    }

    public void setTaxaRend(double taxaRend) {
        this.taxaRend = taxaRend;
    }
}
