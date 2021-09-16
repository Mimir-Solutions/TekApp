import React, { FunctionComponent } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import Logo from './../Assets/logo.png'
import { useWallet } from './WalletProvider'
import { ConnectedAccountNavs } from './ConnectedAccountNavs'
import { ConfigApp } from './../config'
import { NotificationsContainer } from './NotificationsContainer'


export const Header: FunctionComponent<{}> = (props) => {
    const { activateBrowserWallet, account, ETHPrice } = useWallet();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={Logo}
                            width="40"
                            height="30"
                            className="d-inline-block align-top"
                            alt="$TEK"
                        />
                        GET $TEK <span className="text-danger text-small">week 2</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className="justify-content-end" id="navbarScroll">
                        <Nav className="mr-auto" navbarScroll>
                            <Nav.Link className="tek-header-bordered-block mr-3">
                                1 ETH = ${ETHPrice}
                            </Nav.Link>
                            <Nav.Link href={"https://etherscan.io/address/" + ConfigApp.ServiceContractAddress} target="_blank" rel="noreferrer" className="tek-header-bordered-block mr-3">
                                Contract
                            </Nav.Link>
                            {(!account) &&
                                <Nav.Link href="#" className="tek-header-bordered-block" onClick={() => {
                                    activateBrowserWallet()
                                }}>
                                    <span className="text-center">Connect wallet</span>
                                </Nav.Link>
                            }

                            {
                                (account) && <ConnectedAccountNavs />
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <NotificationsContainer />
        </>
    )
};