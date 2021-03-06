import React, { FC, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { ConfigApp } from './../config'
import { useWallet } from './WalletProvider'
import { useContractFunction, useTokenAllowance, useEthers } from '@usedapp/core'
import { Contract } from '@ethersproject/contracts'
import { utils } from 'ethers'
import { ERC20Abi } from './../ABI/ERC20Abi'
import { ServiceAbi } from './../ABI/ServiceAbi'

interface LoanTokenPropsInterface {
    amount: string | React.ReactNode,
    tokenName: string
}

export const LoanToken: FC<LoanTokenPropsInterface> = ({ amount, tokenName }) => {

    const tokenAddress: string = ConfigApp.tokens_addresses[tokenName];
    const serviceContract: string = ConfigApp.ServiceContractAddress;
    const { account } = useWallet();
    const allowance = useTokenAllowance(tokenAddress, account, serviceContract);
    const ERC20Interface = new utils.Interface(ERC20Abi);
    const ERC20Contract = new Contract(tokenAddress, ERC20Interface);
    const ServiceInterface = new utils.Interface(ServiceAbi);
    const ServiceContractInstance = new Contract(serviceContract, ServiceInterface);
    const [haveActiveApprovalTx, setHaveActiveApprovalTx] = React.useState<boolean>(false);
    const [haveActiveLendTx, setHaveActiveLendTx] = React.useState<boolean>(false);
    const { library } = useEthers();
    const decimals = tokenName === 'USDT' || tokenName === 'USDC' ? 6 : 18;

    console.log(`${tokenName} - ${decimals}`)

    const { state: stateApproval, send: sendApproval } = useContractFunction(ERC20Contract, 'approve', { transactionName: "Approve" })


    const { state: stateService, send: sendService } = useContractFunction(ServiceContractInstance, 'lendLiquidity',
        { transactionName: "Lend liquidity", signer: library?.getSigner() }
    )

    useEffect(() => {
        if (stateService.status === 'Success' || stateService.status === 'Exception' || stateService.status === 'None') {
            setHaveActiveLendTx(false);
        } else if (stateService.status === 'Mining') {
            setHaveActiveLendTx(true)
        }

        if (stateService.status !== 'None') {
            console.log("Lending result")
            console.log(stateService)
        }
    }, [stateService]);

    useEffect(() => {
        if (stateApproval.status === 'Success' || stateApproval.status === 'Exception' || stateApproval.status === 'None') {
            setHaveActiveApprovalTx(false);
        } else if (stateApproval.status === 'Mining') {
            setHaveActiveApprovalTx(true)
        }
        if (stateApproval.status !== 'None') {
            console.log("Approval result")
            console.log(stateApproval)
        }
    }, [stateApproval])

    const lendLiquidity = () => {
        setHaveActiveLendTx(true);

        sendService(
            tokenAddress,
            utils.parseUnits(amount as string, decimals),
        );
    }

    const approveLiquidity = () => {
        setHaveActiveApprovalTx(false);
        sendApproval(
            serviceContract,
            utils.parseUnits(amount as string, decimals)
        );
    };

    if (null === tokenAddress) {
        return (<>
            <div className="d-grid gap-2">
                <b>Invalid token</b>
            </div>
        </>)
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

    if (allowance && amount && utils.formatUnits(allowance, decimals) < amount)
        return (
            <>
                <div className="d-grid gap-2">
                    <Button size="lg" variant="primary" onClick={() => approveLiquidity()} disabled={haveActiveApprovalTx}>
                        {(amount && utils.formatUnits(allowance, decimals) < amount && haveActiveApprovalTx) && <>Approving {tokenName}</>}
                        {(amount && utils.formatUnits(allowance, decimals) < amount && !haveActiveApprovalTx) && <>Approve {tokenName}</>}
                    </Button>
                </div>
            </>
        )

    return (
        <div className="d-grid gap-2">
            <Button size="lg" variant="primary" disabled={haveActiveLendTx} onClick={() => lendLiquidity()}>
                {haveActiveLendTx && "Processing..."}
                {!haveActiveLendTx && "Lend liqiudity"}
            </Button>
        </div>
    )
}