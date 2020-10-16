import React from 'react'

export default function Layout(props) {
    return (
        <div>
            <headers>Header</headers>
            {props.children}
        </div>
    )
}
