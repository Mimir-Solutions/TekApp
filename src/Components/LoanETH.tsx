import React, { FC, useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { ConfigApp } from './../config'
import { useWallet } from './WalletProvider'
import { useContractFunction, useEthers } from '@usedapp/core'
import { Contract } from '@ethersproject/contracts'
import { utils } from 'ethers'
import { ServiceAbi } from './../ABI/ServiceAbi'


interface LoanETHPropsInterface {
    amount: string | React.ReactNode,
}

export const LoanETH: FC<LoanETHPropsInterface> = ({ amount }) => {
    const serviceContract: string = ConfigApp.ServiceContractAddress;
    const ServiceInterface = new utils.Interface(ServiceAbi);
    const ServiceContractInstance = new Contract(serviceContract, ServiceInterface);
    const [haveActiveLendTx, setHaveActiveLendTx] = React.useState<boolean>(false);
    const { library } = useEthers();

    const { state: stateService, send: sendService } = useContractFunction(ServiceContractInstance, 'lendETHLiquidity',
        { transactionName: "Lend Ether liquidity", signer: library?.getSigner() }
    )

    useEffect(() => {
        if (stateService.status === 'Success' || stateService.status === 'Exception' || stateService.status === 'None') {
            setHaveActiveLendTx(false);
        } else if (stateService.status === 'Mining') {
            setHaveActiveLendTx(true)
        }
        console.log("Lending result")
        console.log(stateService)
    }, [stateService]);


    const lendLiquidity = () => {
        setHaveActiveLendTx(true);

        sendService(
            {value: utils.parseUnits(amount as string, 18)}
        );
    }




    return (
        <>
            <div className="d-grid gap-2">
                <Button size="lg" variant="primary" disabled={haveActiveLendTx} onClick={() => lendLiquidity()}>
                    {haveActiveLendTx && "Processing..."}
                    {!haveActiveLendTx && "Lend ETH"}
                </Button>
            </div>
        </>
    )
}