import React, { FC, useEffect } from "react"
import { Row, Col, Card } from 'react-bootstrap'
import { ConfigApp } from './../config'
import { useWallet } from './WalletProvider'
import { useContractCall } from '@usedapp/core'
import { utils } from 'ethers'
import { ServiceAbi } from './../ABI/ServiceAbi'

interface AssetInLoanProps {
    assetName: string,
    assetLogo: string | React.Component,
}

export const AssetInLoan: FC<AssetInLoanProps> = ({ assetName, assetLogo }) => {
    const serviceInterface = new utils.Interface(ServiceAbi);
    const { account } = useWallet();

    const [assetQty, setAssetQty] = React.useState(0);

    const [TokenBalance] = useContractCall({
        abi: serviceInterface,
        address: ConfigApp.ServiceContractAddress,
        method: 'amountLoanedForLoanedTokenForLender',
        args: [account, ConfigApp.tokens_addresses[assetName.replace('$', '')]]
    }) ?? [];

    useEffect(() => {
        let decimals = 18;

        if ('$USDT' === assetName) {
            decimals = 6;
        }

        if ('$USDC' === assetName) {
            decimals = 6;
        }


        if (TokenBalance) {
            setAssetQty(parseFloat(utils.formatUnits(TokenBalance, decimals)));
        }
    }, [TokenBalance, assetName]);

    return (
        <Card className="tek-border mb-3 mt-1">
            <Card.Header>
                <Row>
                    <Col md={2}>
                        <img src={assetLogo as string} alt={assetName} className="img-responsive" style={{
                            width: '40px',
                            height: '40px'
                        }} />
                    </Col>
                    <Col md={4}>
                        <h4 className="text-center">{assetName}</h4>
                    </Col>
                    <Col md={6}>
                        <h4 className="text-end">{assetQty?.toFixed(3)}</h4>
                    </Col>
                </Row>
            </Card.Header>
        </Card>
    )
}