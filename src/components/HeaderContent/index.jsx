import React from 'react'

export default function Header( props ) {
    return (
        <div className="header-wrapper flex flex-wrap animate__animated animate__fadeIn">
            <div className="box flex-[100%] lg:flex-[60%]">
                <h1 className="text-[36px] font-[400] uppercase">{ props.head }</h1>
                <p>{ props.desc }</p>
            </div>
            <div className="box flex-[100%] lg:flex-[40%]"></div>
        </div>
    )
}
