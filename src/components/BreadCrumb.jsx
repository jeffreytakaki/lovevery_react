import React from 'react'

const BreadCrumb = ({product}) => {
    return (
        <div className="breadcrumbs">
            <ul>
                <li>
                    <a href="">Shop</a>    
                </li>
                <li>
                    <a href="">The Play Kits</a>
                </li>
                <li className="current">
                    <a href="">{product.name}</a>
                </li>
            </ul>
        </div>
    )
}

export default BreadCrumb
