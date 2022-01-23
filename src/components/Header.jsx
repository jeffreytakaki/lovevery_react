import React from 'react'

const Header = () => {
    return (
        <header className="app-header">
            <div className="navBar">
                <div className="navItem navBar-left">
                    <a href="">Shop</a>
                    <a href="">About Us</a>
                </div>
                <div className="navItem navBar-center">
                    <a className="logo" href=""></a>
                </div>
                <div className="navItem navBar-right">
                    <a href="">Sign In</a>
                    <a href="">Cart</a>
                </div>
            </div>
            
        </header>
    )
}

export default Header
