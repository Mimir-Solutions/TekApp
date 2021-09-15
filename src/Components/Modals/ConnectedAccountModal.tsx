import React, { FC } from 'react'
import { Modal, ModalProps, Row, Col, Card } from 'react-bootstrap'
import { useWallet } from './../WalletProvider'
import { TokenBalance } from './../TokenBalance'
import { shortenAddress } from '@usedapp/core'
import USDC_logo from './../../Assets/usdc_logo.png'
import USDT_logo from './../../Assets/usdt_logo.png'
import ETHLogo from './../../Assets/ethereum.png'
import DAI_logo from './../../Assets/dai_logo.png'
import NFY_logo from './../../Assets/nfy_logo.png'

interface ConnectedAccountModalProps extends ModalProps {

}

export const ConnectedAccountModal: FC<ConnectedAccountModalProps> = (props) => {
    const { account, ETH, ETHPrice } = useWallet()

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Welcome {shortenAddress(account as string)}!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body bsPrefix="tek-modal-account">

                <Card className="tek-border-light mb-3">
                    <Card.Header>
                        Wallet balances
                    </Card.Header>
                </Card>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col className="tek-border-light mr-1" md={6}>
                                <img src={ETHLogo} width="25"
                                    height="25"
                                    className="d-inline-block align-top"
                                    alt="*" />$ETH 
                            </Col>
                            <Col className="tek-border-light ml-1"  md={6}>
                                {parseFloat(ETH as string)?.toFixed(4)}
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <img src={NFY_logo} width="25"
                                    height="25"
                                    className="d-inline-block align-top"
                                    alt="*" /> <TokenBalance tokenKey="NFY" />
                            </Col>
                            <Col md={12}>
                                <img src={USDC_logo} width="25"
                                    height="25"
                                    className="d-inline-block align-top"
                                    alt="*" /> <TokenBalance tokenKey="USDC" />
                            </Col>
                            <Col md={12}>
                                <img src={USDT_logo} width="25"
                                    height="25"
                                    className="d-inline-block align-top"
                                    alt="*" /> <TokenBalance tokenKey="USDT" />
                            </Col>
                            <Col md={12}>
                                <img src={DAI_logo} width="25"
                                    height="25"
                                    className="d-inline-block align-top"
                                    alt="*" /> <TokenBalance tokenKey="DAI" />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Modal.Body>
        </Modal >
    )
}

