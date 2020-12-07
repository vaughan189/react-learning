import React from 'react'
import { Link } from 'react-router-dom';
import { AccountConsumer } from './providers/AccountProvider'

const NavigationBar = (_props) => (
    <AccountConsumer>
        {({ username }) => (
            <div>
                <Link to='/'>Home</Link>
                <Link to='/account/profile'>{username}</Link>
            </div>
        )}
    </AccountConsumer>
)
export default NavigationBar;