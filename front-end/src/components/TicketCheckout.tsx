import { usePaymaster } from '@nero/paymaster-kit';

export function TicketCheckout({ eventId }) {
  const { 
    estimateGas,
    sponsorTransaction,
    paymentTypes 
  } = usePaymaster(eventId);

  const handleCheckout = async (paymentType) => {
    const userOp = await buildTicketPurchaseOp(eventId);
    const sponsoredOp = await sponsorTransaction(userOp, paymentType);
    
    // Submit to NERO bundler
    const txHash = await aaProvider.sendUserOp(sponsoredOp);
    return txHash;
  };

  return (
    <div>
      <h3>Select Payment Option:</h3>
      {paymentTypes.map(type => (
        <button key={type} onClick={() => handleCheckout(type)}>
          {type === 0 ? "Sponsor Pays Gas" : 
           type === 1 ? "Pay with Any Token" : 
           "Hybrid (80% Sponsor)"}
        </button>
      ))}
    </div>
  );
}