import { useNeroWallet } from 'nero-aa-widget';

export default function ConnectButton() {
  const { connect, smartAccount } = useNeroWallet({
    sessionKeys: true, // Enable 1-click recurring transactions
    socialLogins: ['google', 'twitter'] // Web2 onboarding
  });

  return (
    <button onClick={connect}>
      {smartAccount ? "Connected" : "Connect AA Wallet"}
    </button>
  );
}