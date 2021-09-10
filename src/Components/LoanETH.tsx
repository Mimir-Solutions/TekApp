import React, { FC, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { ConfigApp } from './../config'
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
            { value: utils.parseEther(amount as string), gasLimit: 95000 }
        );
    }

    if (parseFloat(amount as string) < 0 || parseFloat(amount as string) === 0) {
        return (
            <div className="d-grid gap-2">
                <Button size="lg" variant="primary" disabled={true}>
                    Please enter amount
                </Button>
            </div>
        )
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