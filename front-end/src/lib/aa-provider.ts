import { createNeroAAProvider } from '@nero/aa-sdk';
import { PaymasterMode } from '@nero/paymaster-kit';

export const aaProvider = createNeroAAProvider({
  chainId: process.env.NEXT_PUBLIC_NERO_CHAIN_ID,
  entryPoint: process.env.NEXT_PUBLIC_ENTRYPOINT_ADDRESS,
  paymasterConfig: {
    mode: PaymasterMode.SPONSORED, // Default sponsorship
    apiKey: process.env.NEXT_PUBLIC_PAYMASTER_API_KEY
  }
});