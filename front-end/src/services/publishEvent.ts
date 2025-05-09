import { stekcitBMContractABI } from "@/utils/abis/stekcitBMContractABI";
import { stekcitBMContractAddress } from "@/utils/addresses/stekcitBMContractAddress";
import {
    createPublicClient,
    createWalletClient,
    custom
} from "viem";
import { avalancheFuji } from "viem/chains";

export const publishEvent = async (
    _signerAddress: `0x${string}` | undefined,
    { _eventId }: PublishEventProps
): Promise<boolean> => {
    if (window.ethereum) {

        const privateClient = createWalletClient({
            chain: avalancheFuji,
            transport: custom(window.ethereum),
        });
        const publicClient = createPublicClient({
            chain: avalancheFuji,
            transport: custom(window.ethereum),
        });
        const [address] = await privateClient.getAddresses();
        try {
            const publishEventTxnHash = await privateClient.writeContract({
                account: address,
                address: stekcitBMContractAddress,
                abi: stekcitBMContractABI,
                functionName: "publishEvent",
                args: [_eventId],
            });

            const publishEventTxnReceipt =
                await publicClient.waitForTransactionReceipt({
                    hash: publishEventTxnHash,
                });

            if (publishEventTxnReceipt.status == "success") {
                return true;
            }
            return false;

        } catch (error) {
            return false;
        }
    }
    return false;
};

type PublishEventProps = {
    _eventId: number;
};
