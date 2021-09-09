import { ServiceAbi } from './ABI/ServiceAbi'

interface KvObjectStorage {
    [key: string]: string
}

const tokens_addresses: KvObjectStorage = {
    WETH: "0x7f68cff269f57fa018027811089e2fba31f84a58",
    NFY: "0xed02b6915588108576d251b6627e396923282eb1",
    BPP: "0x52d904eff2605463c2f0b338d34abc9b7c3e3b08",
    DEFO: "0xe481f2311c774564d517d015e678c2736a25ddd3",
    //USDT: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    USDT: '0xf6f86bc288b71113bb8918b1fe757327061f9824',
    DAI: "0x6b175474e89094c44da98b954eedeac495271d0f",
    USDC: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
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
    TEKContractAddress: "0x36f0a5c1f6b51d50fb67526f3def4a3ee2670cd2",
    TEKAbi: "todo add ABI HERE",
    INFURAKEY: "0",
    ServiceContractAddress: "0x6e5724582a883b012b419f73ec07db27916f9651",
    ServiceAbi: ServiceAbi
}