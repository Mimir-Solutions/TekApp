import React, { FC } from 'react';
import { Row, Col, Card } from 'react-bootstrap'
import { StatsBlockIntro } from './../Components/StatsBlockIntro'
import { UserStatsBlockIntro } from './../Components/UserStatsBlockIntro'
import { TokenBuyForm } from './../Components/TokenBuyForm'


interface IntroPageProps {

}

export const Intro: FC<IntroPageProps> = (props) => {
    return (
        <>
            <Row className="mt-3 mb-3">
                <Col md={12}>
                    <Card>
                        <Card.Body>
                            <p className="text-center">
                                <b>THE PRESALE IS OFFICIALLY CLOSED</b>. $TEK WILL BE LIVE ON 🍣SUSHI SWAP FRIDAY AT <b>11:59PM PST</b>. <br/>
                                Halsey Will be doing a <b>livestream</b> AMA Saturday at 10:00pm EST
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className=" mb-3">
                <Col md={6}>
                    <StatsBlockIntro />
                </Col>
                <Col md={6}>
                    <UserStatsBlockIntro />
                </Col>
            </Row>
            
        </>
    )
}