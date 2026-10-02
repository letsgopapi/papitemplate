import StripeCheckout from '../components/StripeCheckout';

export default function Pricing() {
  return (
    <div className="p-8">
      <h1>Pricing</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 border">
          <h2>Starter</h2>
          <p>$12/yr domain + $10/mo hosting</p>
          <StripeCheckout price="price_123" />
        </div>
      </div>
    </div>
  );
}
