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
                                <b>The Presale is officially closed.</b>.<br/>
                                <b>$TEK</b> will be <b>live</b> soon. Stay tuned and join our Telegram - Discord!
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