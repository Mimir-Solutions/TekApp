import React, { FC } from 'react'
import { Modal, ModalProps, Row, Col, Card, Button } from 'react-bootstrap'
import { useWallet } from './../WalletProvider'
import { TokenBalance } from './../TokenBalance'
import { shortenAddress } from '@usedapp/core'
import USDC_logo from './../../Assets/usdc_logo.png'
import USDT_logo from './../../Assets/usdt_logo.png'
import ETHLogo from './../../Assets/ethereum.png'
import DAI_logo from './../../Assets/dai_logo.png'
import NFY_logo from './../../Assets/nfy_logo.png'
import BPP_logo from './../../Assets/bitpower_logo.png'
import DEFO_logo from './../../Assets/defhold_logo.png'
import IYF_logo from './../../Assets/iyf_logo.png'

interface ConnectedAccountModalProps extends ModalProps {

}

export const ConnectedAccountModal: FC<ConnectedAccountModalProps> = (props) => {
    const { account, ETH, deactivate } = useWallet()

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
                <Card className="tek-border-light">
                    <Card.Header>
                        Assets in wallet
                    </Card.Header>
                </Card>
                <Card>
                    <Card.Body>
                        <Row className="mb-1">
                            <Col className="tek-border-token-balance-token-name mr-1" md={6} xs={6}>
                                <img src={ETHLogo} width="25"
                                    height="25"
                                    className="d-inline-block align-top"
                                    alt="*" /> $ETH
                            </Col>
                            <Col className="tek-border-token-balance-value ml-1" md={6} xs={6}>
                                {parseFloat(ETH as string)?.toFixed(4)}
                            </Col>
                        </Row>
                        <Row className="mb-1">
                            <Col className="tek-border-token-balance-token-name mr-1" md={6} xs={6}>
                                <img src={NFY_logo} width="25"
                                    height="25"
                                    className="d-inline-block align-top"
                                    alt="*" /> $NFY
                            </Col>
                            <Col className="tek-border-token-balance-value ml-1" md={6} xs={6}>
                                <TokenBalance tokenKey="NFY" />
                            </Col>
                        </Row>
                        <Row className="mb-1">
                            <Col className="tek-border-token-balance-token-name mr-1" md={6} xs={6}>
                                <img src={USDC_logo} width="25"
                                    height="25"
                                    className="d-inline-block align-top"
                                    alt="*" /> $USDC
                            </Col>
                            <Col className="tek-border-token-balance-value ml-1" md={6} xs={6}>
                                <TokenBalance tokenKey="USDC" />
                            </Col>
                        </Row>
                        <Row className="mb-1">
                            <Col className="tek-border-token-balance-token-name mr-1" md={6} xs={6}>
                                <img src={USDT_logo} width="25"
                                    height="25"
                                    className="d-inline-block align-top"
                                    alt="*" /> $USDT
                            </Col>
                            <Col className="tek-border-token-balance-value ml-1" md={6} xs={6}>
                                <TokenBalance tokenKey="USDT" />
                            </Col>
                        </Row>
                        <Row className="mb-1">
                            <Col className="tek-border-token-balance-token-name mr-1" md={6} xs={6}>
                                <img src={DAI_logo} width="25"
                                    height="25"
                                    className="d-inline-block align-top"
                                    alt="*" /> $DAI
                            </Col>
                            <Col className="tek-border-token-balance-value ml-1" md={6} xs={6}>
                                <TokenBalance tokenKey="DAI" />
                            </Col>
                        </Row>
                        <Row className="mb-1">
                            <Col className="tek-border-token-balance-token-name mr-1" md={6} xs={6}>
                                <img src={BPP_logo} width="25"
                                    height="25"
                                    className="d-inline-block align-top"
                                    alt="*" /> $BPP
                            </Col>
                            <Col className="tek-border-token-balance-value ml-1" md={6} xs={6}>
                                <TokenBalance tokenKey="BPP" />
                            </Col>
                        </Row>
                        <Row className="mb-1">
                            <Col className="tek-border-token-balance-token-name mr-1" md={6} xs={6}>
                                <img src={DEFO_logo} width="25"
                                    height="25"
                                    className="d-inline-block align-top"
                                    alt="*" /> $DEFO
                            </Col>
                            <Col className="tek-border-token-balance-value ml-1" md={6} xs={6}>
                                <TokenBalance tokenKey="DEFO" />
                            </Col>
                        </Row>
                        <Row className="mb-1">
                            <Col className="tek-border-token-balance-token-name mr-1" md={6} xs={6}>
                                <img src={IYF_logo} width="25"
                                    height="25"
                                    className="d-inline-block align-top"
                                    alt="*" /> $IYF
                            </Col>
                            <Col className="tek-border-token-balance-value ml-1" md={6} xs={6}>
                                <TokenBalance tokenKey="IYF" />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <div className="d-grid gap-2">
                    <Button size="lg" variant="danger" onClick={() => deactivate()}>
                        Logout
                    </Button>
                </div>
            </Modal.Body>
        </Modal >
    )
}

