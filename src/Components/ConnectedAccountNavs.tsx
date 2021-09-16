import React, { FunctionComponent } from 'react'
import { Nav } from 'react-bootstrap'
import { useWallet } from './WalletProvider'
import { shortenAddress } from '@usedapp/core'
import { ConnectedAccountModal } from './Modals/ConnectedAccountModal'

export const ConnectedAccountNavs: FunctionComponent<{}> = (props) => {
    const { account } = useWallet()
    const [accountModalShow, setAccountModalShow] = React.useState(false);

    if (!account) {
        return (
            <></>
        )
    }

    return (
        <>
            <ConnectedAccountModal show={accountModalShow} onHide={() => setAccountModalShow(false)} />
            <Nav.Link href="#" onClick={() => setAccountModalShow(true)} className="tek-header-bordered-block"

            >{shortenAddress(account)}</Nav.Link>
        </>
    )
}