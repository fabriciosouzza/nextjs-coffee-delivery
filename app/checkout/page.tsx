import AddressForm from "../components/AddressForm";

export default function Checkout() {
  return (
    <section className="container mx-auto flex gap-8 mt-10">
      <div>
        <h4 className="font-Baloo_2 text-lg font-bold text-base-subtitle">Complete seu pedido</h4>
        <AddressForm />
      </div>

      <div>
        <h4>Cafés selecionados</h4>
        <div></div>
      </div>

    </section>
  );
}
