import React, { FC } from 'react';
import { Row, Col, Button } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { ConfigApp } from './../config'


interface FooterProps {

}



export const Footer: FC<FooterProps> = (props) => {
    return (
        <>
            <hr />
            <Row className="mt-3">
                <Col md={4}>
                    <SocialIcon bgColor="#0d6efd" url="https://telegram.me/MimirSolutions" className="mr-3" />

                    <SocialIcon bgColor="#0d6efd" url="https://twitter.com/MimirSolutions" />

                    <SocialIcon bgColor="#0d6efd" url="https://discord.gg/JYBjEe3uXx" />

                    <SocialIcon bgColor="#0d6efd" url="https://github.com/Mimir-Solutions" />
                </Col>
                <Col md={2}>
                    <b className="text-primary">
                        &copy; Mimir Solutions 2021<br />
                        <span className="text-muted">v0.1</span>
                    </b>
                </Col>
                <Col md={3}>
                    <div className="d-grid gap-2">
                        <Button variant="outline-primary" href="https://tek.finance/The_TEK_Protocol_Whitepaper.pdf" target="_blank">
                            <FontAwesomeIcon icon={faNewspaper} /> Whitepaper
                        </Button>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="d-grid gap-2">
                        <Button variant="outline-info" href=" https://mimirsolutions.gitbook.io/tek/" target="_blank">
                            <FontAwesomeIcon icon={faBookOpen} /> Gitbook
                        </Button>
                    </div>
                </Col>
            </Row>
            <b className="mt-2">Contract address is <a href={"https://etherscan.io/address/" + ConfigApp.ServiceContractAddress} target="_blank" rel="noreferrer">{ConfigApp.ServiceContractAddress}</a></b>

        </>
    )
};