import React, { FunctionComponent, useEffect } from 'react'
import { Card, Table } from 'react-bootstrap'
import { useCoingeckoPrice } from '@usedapp/coingecko'
import { ConfigApp } from './../config'
import { useWallet } from './WalletProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faLock } from '@fortawesome/free-solid-svg-icons'
import { useContractCall } from '@usedapp/core'
import { utils } from 'ethers'

export const StatsBlockIntro: FunctionComponent<{}> = (props) => {

    const [lockedETH, setLockedETH] = React.useState(0);
    const [lockedNFY, setLockedNFY] = React.useState(0);
    const [lockedUSDT, setLockedUSDT] = React.useState(0);
    const [lockedUSDC, setLockedUSDC] = React.useState(0);
    const [lockedDAI, setLockedDAI] = React.useState(0);

    const [TVL, setTVL] = React.useState(0);

    const NFY_PRICE = useCoingeckoPrice(ConfigApp.coinGeckoIds.NFY, 'usd')
    const USDT_PRICE = useCoingeckoPrice(ConfigApp.coinGeckoIds.USDT, 'usd')
    const USDC_PRICE = useCoingeckoPrice(ConfigApp.coinGeckoIds.USDC, 'usd')
    const DAI_PRICE = useCoingeckoPrice(ConfigApp.coinGeckoIds.DAI, 'usd')
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
        let totals = 0;

        totals += parseFloat(ETHPrice as string) * lockedETH
        totals += parseFloat(NFY_PRICE as string) * lockedNFY
        totals += parseFloat(USDT_PRICE as string) * lockedUSDT
        totals += parseFloat(USDC_PRICE as string) * lockedUSDC
        totals += parseFloat(DAI_PRICE as string) * lockedDAI

        setTVL(totals)
    }, [ETHPrice, NFY_PRICE, lockedETH, lockedNFY, USDT_PRICE, lockedUSDT, USDC_PRICE, lockedUSDC, DAI_PRICE, lockedDAI]);

    return (
        <>
            <Card>
                <Card.Body>
                    <Table striped bordered hover variant="dark">
                        <tbody>
                            <tr>
                                <td><FontAwesomeIcon icon={faInfoCircle} /> Total ETH raised</td>
                                <td>{lockedETH.toFixed(4)}</td>
                            </tr>
                            <tr>
                                <td><FontAwesomeIcon icon={faInfoCircle} /> Total NFY raised</td>
                                <td>{lockedNFY.toFixed(4)}</td>
                            </tr>
                            <tr>
                                <td><FontAwesomeIcon icon={faInfoCircle} /> Total USDT raised</td>
                                <td>{lockedUSDT.toFixed(4)}</td>
                            </tr>
                            <tr>
                                <td><FontAwesomeIcon icon={faInfoCircle} /> Total USDC raised</td>
                                <td>{lockedUSDC.toFixed(4)}</td>
                            </tr>
                            <tr>
                                <td><FontAwesomeIcon icon={faInfoCircle} /> Total DAI raised</td>
                                <td>{lockedDAI.toFixed(4)}</td>
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