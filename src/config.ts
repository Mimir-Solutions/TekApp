import { ServiceAbi } from './ABI/ServiceAbi'

interface KvObjectStorage {
    [key: string]: string
}

const tokens_addresses: KvObjectStorage = {
    ETH: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    NFY: "0x1cbb83ebcd552d5ebf8131ef8c9cd9d9bab342bc",
    BPP: "0x52d904eff2605463c2f0b338d34abc9b7c3e3b08",
    DEFO: "0xe481f2311c774564d517d015e678c2736a25ddd3",
    USDT: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    DAI: "0x6b175474e89094c44da98b954eedeac495271d0f",
    USDC: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    IYF: "0x5D762F76b9E91F71cc4F94391BDFe6333dB8519c"
};

export const ConfigApp = {
    tokens_addresses: tokens_addresses,
    coinGeckoIds: {
        ETH: "ethereum",
        NFY: "non-fungible-yearn",
        BPP: "bitpower",
        DEFO: "defhold",
        USDT: "tether",
        DAI: "dai",
        USDC: "usd-coin"

    },
    ServiceContractAddress: "0xec6c55a4423dd088df40a5eed3cba85d7ce992c7",
    ServiceAbi: ServiceAbi
}