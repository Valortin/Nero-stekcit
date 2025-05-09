import { useNeroTransaction } from '@nero/aa-sdk';

export function useTicketTransaction(txHash: string) {
  const { status, receipt } = useNeroTransaction(txHash, {
    showGasInfo: false, // Hide gas details for sponsored txns
    pollingInterval: 2000
  });

  return { status, receipt };
}