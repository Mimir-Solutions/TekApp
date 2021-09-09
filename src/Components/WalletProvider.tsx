import React, { FunctionComponent, useContext, useEffect } from 'react';
import { useEtherBalance, useEthers, useTokenBalance } from '@usedapp/core'
import { formatEther, formatUnits } from '@ethersproject/units'
import { ConfigApp } from './../config'
import { useCoingeckoPrice } from '@usedapp/coingecko'
import { } from '@usedapp/core'
import { SwitchToMainnetAlert } from './SwitchToMainnetAlert'
import { utils } from 'ethers'
import { Contract } from '@ethersproject/contracts'


const serviceInterface = new utils.Interface(ConfigApp.ServiceAbi)
const serviceContract = new Contract(ConfigApp.ServiceContractAddress, serviceInterface)

type WalletProviderProps = {

}

type WalletContextState = {
    activateBrowserWallet: Function,
    account: string | null | undefined,
    deactivate: Function,
    useTokenBalance: Function,
    useEtherBalance: Function,
    NFY: string | number | undefined,
    ETH: string | number | undefined,
    BPP: string | number | undefined,
    DEFO: string | number | undefined,
    DAI: string | number | undefined,
    USDT: string | number | undefined,
    USDC: string | number | undefined,
    setNFY: Function,
    setDAI: Function,
    setUSDT: Function,
    setUSDC: Function,
    setETH: Function,
    setBPP: Function,
    setDEFO: Function,
    ETHPrice: string | number | undefined,
    setETHPrice: Function,
    serviceContract: Contract,
    serviceInterface: utils.Interface
}


const WalletContext = React.createContext<WalletContextState>({
    activateBrowserWallet: () => { },
    account: null,
    deactivate: () => { },
    useTokenBalance: () => { },
    useEtherBalance: () => { },
    NFY: '0.00',
    ETH: '0.00',
    BPP: '0.00',
    DEFO: '0.00',
    DAI: '0.00',
    USDT: '0.00',
    USDC: '0.00',
    setDAI: () => { },
    setUSDT: () => { },
    setUSDC: () => { },
    setNFY: () => { },
    setETH: () => { },
    setBPP: () => { },
    setDEFO: () => { },
    ETHPrice: '0.00',
    setETHPrice: () => { },
    serviceContract: serviceContract,
    serviceInterface: serviceInterface
});

export const useWallet = () => {
    const context = useContext(WalletContext);
    return context;
}

const allowedNetworkIds = [1]; // add 5 when prod



export const WalletProvider: FunctionComponent<WalletProviderProps> = (props) => {
    const { activateBrowserWallet, account, deactivate, chainId } = useEthers()

    const [NFY, setNFY] = React.useState<string | number | undefined>(0);
    const [ETH, setETH] = React.useState<string | number | undefined>(0);
    const [BPP, setBPP] = React.useState<string | number | undefined>(0);
    const [DEFO, setDEFO] = React.useState<string | number | undefined>(0);
    const [USDT, setUSDT] = React.useState<string | number | undefined>(0);
    const [USDC, setUSDC] = React.useState<string | number | undefined>(0);
    const [DAI, setDAI] = React.useState<string | number | undefined>(0);
    const [ETHPrice, setETHPrice] = React.useState<string | number | undefined>(0);

    let etherBalance = useEtherBalance(account)

    const NFY_Balance = useTokenBalance(ConfigApp.tokens_addresses.NFY, account)
    const DEFO_Balance = useTokenBalance(ConfigApp.tokens_addresses.DEFO, account)
    const BPP_Balance = useTokenBalance(ConfigApp.tokens_addresses.BPP, account)
    const USDT_Balance = useTokenBalance(ConfigApp.tokens_addresses.USDT, account)
    const USDC_Balance = useTokenBalance(ConfigApp.tokens_addresses.USDC, account)
    const DAI_Balance = useTokenBalance(ConfigApp.tokens_addresses.DAI, account)


    const etherPrice = useCoingeckoPrice('ethereum', 'usd')

    useEffect(() => {

        setETHPrice(etherPrice)
    }, [etherPrice]);


    useEffect(() => {
        if (etherBalance) {
            setETH(formatEther(etherBalance))
        }

        if (account) {
            setNFY(
                formatUnits(NFY_Balance ?? 0)
            )

            setBPP(
                formatUnits(BPP_Balance ?? 0)
            )

            setDEFO(
                formatUnits(BPP_Balance ?? 0)
            )

            setUSDC(formatUnits(USDC_Balance ?? 0));
            setUSDT(formatUnits(USDT_Balance ?? 0));
            setDAI(formatUnits(DAI_Balance ?? 0));
        }
    }, [etherBalance, setETH, setNFY, setBPP, setDEFO, account, NFY_Balance, DEFO_Balance, BPP_Balance, USDC_Balance, USDT_Balance, DAI_Balance]);

    return (

        <WalletContext.Provider value={{
            activateBrowserWallet, account, deactivate, useTokenBalance, useEtherBalance,
            NFY, setNFY,
            ETH, setETH,
            BPP, setBPP,
            DEFO, setDEFO,
            DAI, setDAI,
            USDC, setUSDC,
            USDT, setUSDT,
            ETHPrice, setETHPrice,
            serviceContract,
            serviceInterface

        }}>
            {(!allowedNetworkIds.includes(chainId as number)) &&
                <SwitchToMainnetAlert />
            }

            {props.children}
        </WalletContext.Provider>


    )
};