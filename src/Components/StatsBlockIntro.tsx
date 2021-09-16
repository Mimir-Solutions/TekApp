import React, { FunctionComponent, useEffect } from 'react'
import { Card, Table } from 'react-bootstrap'
import { useCoingeckoPrice } from '@usedapp/coingecko'
import { ConfigApp } from './../config'
import { useWallet } from './WalletProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { useContractCall } from '@usedapp/core'
import { utils } from 'ethers'
import USDC_logo from './../Assets/usdc_logo.png'
import USDT_logo from './../Assets/usdt_logo.png'
import ETH_Logo from './../Assets/ethereum.png'
import DAI_logo from './../Assets/dai_logo.png'
import NFY_logo from './../Assets/nfy_logo.png'
import BPP_logo from './../Assets/bitpower_logo.png'
import DEFO_logo from './../Assets/defhold_logo.png'
import IYF_logo from './../Assets/iyf_logo.png'

export const StatsBlockIntro: FunctionComponent<{}> = (props) => {

    const [lockedETH, setLockedETH] = React.useState(0);
    const [lockedNFY, setLockedNFY] = React.useState(0);
    const [lockedUSDT, setLockedUSDT] = React.useState(0);
    const [lockedUSDC, setLockedUSDC] = React.useState(0);
    const [lockedDAI, setLockedDAI] = React.useState(0);
    const [lockedBPP, setLockedBPP] = React.useState(0);
    const [lockedDEFO, setLockedDEFO] = React.useState(0);
    const [lockedIYF, setLockedIYF] = React.useState(0)

    const [TVL, setTVL] = React.useState(0);

    const NFY_PRICE = useCoingeckoPrice(ConfigApp.coinGeckoIds.NFY, 'usd')
    const USDT_PRICE = useCoingeckoPrice(ConfigApp.coinGeckoIds.USDT, 'usd')
    const USDC_PRICE = useCoingeckoPrice(ConfigApp.coinGeckoIds.USDC, 'usd')
    const DAI_PRICE = useCoingeckoPrice(ConfigApp.coinGeckoIds.DAI, 'usd')
    const BPP_Price = useCoingeckoPrice(ConfigApp.coinGeckoIds.BPP, 'usd')
    const DEFO_Price = useCoingeckoPrice(ConfigApp.coinGeckoIds.DEFO, 'usd')
    const { ETHPrice, serviceInterface } = useWallet()

    const [ETHLockedContract] = useContractCall({
        abi: serviceInterface,
        address: ConfigApp.ServiceContractAddress,
        method: 'totalLoanedForToken',
        args: [ConfigApp.tokens_addresses.ETH]
    }) ?? [];

    const [NFYLockedContract] = useContractCall({
        abi: serviceInterface,
        address: ConfigApp.ServiceContractAddress,
        method: 'totalLoanedForToken',
        args: [ConfigApp.tokens_addresses.NFY]
    }) ?? [];

    const [USDTLockedContract] = useContractCall({
        abi: serviceInterface,
        address: ConfigApp.ServiceContractAddress,
        method: 'totalLoanedForToken',
        args: [ConfigApp.tokens_addresses.USDT]
    }) ?? [];

    const [USDCLockedContract] = useContractCall({
        abi: serviceInterface,
        address: ConfigApp.ServiceContractAddress,
        method: 'totalLoanedForToken',
        args: [ConfigApp.tokens_addresses.USDC]
    }) ?? [];

    const [DAILockedContract] = useContractCall({
        abi: serviceInterface,
        address: ConfigApp.ServiceContractAddress,
        method: 'totalLoanedForToken',
        args: [ConfigApp.tokens_addresses.DAI]
    }) ?? [];

    const [BPPLockedContract] = useContractCall({
        abi: serviceInterface,
        address: ConfigApp.ServiceContractAddress,
        method: 'totalLoanedForToken',
        args: [ConfigApp.tokens_addresses.BPP]
    }) ?? [];

    const [DEFOLockedContract] = useContractCall({
        abi: serviceInterface,
        address: ConfigApp.ServiceContractAddress,
        method: 'totalLoanedForToken',
        args: [ConfigApp.tokens_addresses.DEFO]
    }) ?? [];

    const [IYFLockedContract] = useContractCall({
        abi: serviceInterface,
        address: ConfigApp.ServiceContractAddress,
        method: 'totalLoanedForToken',
        args: [ConfigApp.tokens_addresses.IYF]
    }) ?? [];


    useEffect(() => {
        if (ETHLockedContract) {
            setLockedETH(parseFloat(utils.formatEther((ETHLockedContract))));
        }
    }, [ETHLockedContract])

    useEffect(() => {
        if (NFYLockedContract) {
            setLockedNFY(parseFloat(utils.formatEther((NFYLockedContract))));
        }
    }, [NFYLockedContract])

    useEffect(() => {
        if (USDTLockedContract) {
            setLockedUSDT(parseFloat(utils.formatUnits((USDTLockedContract), 6)));
        }
    }, [USDTLockedContract])


    useEffect(() => {
        if (USDCLockedContract) {
            setLockedUSDC(parseFloat(utils.formatUnits((USDCLockedContract), 6)));
        }
    }, [USDCLockedContract])


    useEffect(() => {
        if (DAILockedContract) {
            setLockedDAI(parseFloat(utils.formatEther((DAILockedContract))));
        }
    }, [DAILockedContract])

    useEffect(() => {
        if (DEFOLockedContract) {
            setLockedDEFO(parseFloat(utils.formatEther((DEFOLockedContract))));
        }
    }, [DEFOLockedContract])

    useEffect(() => {
        if (BPPLockedContract) {
            setLockedBPP(parseFloat(utils.formatEther((BPPLockedContract))));
        }
    }, [BPPLockedContract])

    useEffect(() => {
        if (IYFLockedContract) {
            setLockedIYF(parseFloat(utils.formatEther((IYFLockedContract))));
        }
    }, [IYFLockedContract])

    useEffect(() => {
        let totals = 0;

        totals += parseFloat(ETHPrice as string) * lockedETH
        totals += parseFloat(NFY_PRICE as string) * lockedNFY
        totals += parseFloat(USDT_PRICE as string) * lockedUSDT
        totals += parseFloat(USDC_PRICE as string) * lockedUSDC
        totals += parseFloat(DAI_PRICE as string) * lockedDAI
        totals += parseFloat(DEFO_Price as string) * lockedDEFO
        totals += parseFloat(BPP_Price as string) * lockedBPP

        setTVL(totals)
    }, [ETHPrice, NFY_PRICE, lockedETH, lockedNFY, USDT_PRICE, lockedUSDT, USDC_PRICE, lockedUSDC, DAI_PRICE, lockedDAI, DEFO_Price, lockedDEFO, BPP_Price, lockedBPP]);

    return (
        <>
            <Card>
                <Card.Body>
                    <Table striped bordered hover variant="dark">
                        <tbody>
                            <tr className="tek-stats-block-header">
                                <td colSpan={2}>
                                    <h4 className="text-center">Statistics</h4>
                                </td>
                            </tr>
                            <tr>
                                <td><img src={ETH_Logo} alt="ETH" className="token-logo" /> ETH raised</td>
                                <td>{lockedETH.toFixed(4)}</td>
                            </tr>
                            <tr>
                                <td><img src={NFY_logo} alt="NFY" className="token-logo" /> NFY raised</td>
                                <td>{lockedNFY.toFixed(4)}</td>
                            </tr>
                            <tr>
                                <td><img src={USDT_logo} alt="USDT" className="token-logo" /> USDT raised</td>
                                <td>{lockedUSDT.toFixed(4)}</td>
                            </tr>
                            <tr>
                                <td><img src={USDC_logo} alt="USDC" className="token-logo" /> USDC raised</td>
                                <td>{lockedUSDC.toFixed(4)}</td>
                            </tr>
                            <tr>
                                <td><img src={DAI_logo} alt="DAI" className="token-logo" /> DAI raised</td>
                                <td>{lockedDAI.toFixed(4)}</td>
                            </tr>
                            <tr className="tek-stats-block-header">
                                <td colSpan={2}>
                                    <h4 className="text-center">Week 2</h4>
                                </td>
                            </tr>
                            <tr>
                                <td><img src={BPP_logo} alt="BPP" className="token-logo" /> BPP raised</td>
                                <td>{lockedBPP.toFixed(4)}</td>
                            </tr>
                            <tr>
                                <td><img src={DEFO_logo} alt="DEFO" className="token-logo" /> DEFO raised</td>
                                <td>{lockedDEFO.toFixed(4)}</td>
                            </tr>
                            <tr>
                                <td><img src={IYF_logo} alt="IYF" className="token-logo" /> IYF raised</td>
                                <td>{lockedIYF.toFixed(4)}</td>
                            </tr>
                            <tr className="tek-stats-block-header">
                                <td colSpan={2}>
                                    <h4 className="text-center">Totals</h4>
                                </td>
                            </tr>
                            <tr>
                                <td><FontAwesomeIcon icon={faLock} /> TVL~ $</td>
                                <td>{TVL.toLocaleString() ?? 0} $</td>
                            </tr>
                        </tbody>
                    </Table>

                    {/* <Table className="mt-3" striped bordered hover variant="dark">
                        <tbody>
                            <tr>
                                <td><FontAwesomeIcon icon={faUser} /> ~ number of active users</td>
                                <td>5 300</td>
                            </tr>
                            <tr>
                                <td><FontAwesomeIcon icon={faDollarSign} /> $TEK price</td>
                                <td>228.57 $</td>
                            </tr>
                        </tbody>
                    </Table> */}
                </Card.Body>
            </Card>
        </>
    )
}