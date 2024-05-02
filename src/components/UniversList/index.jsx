import React from 'react';
import Link from 'next/link';
import './style.css';

export default function ListOfUniversities( props ) {

    let tempData = props.data;

    return (
        <div className="univ-list animate__animated animate__fadeIn" >
            <div className="w-[80%]">
                <Link href={{ pathname: '/details', query: props.data }}>
                    <h2 className="text-[20px]">{ (tempData.name) ? tempData.name : 'No Result' }</h2>
                    <h3 className="">{ tempData.country }</h3>
                    {
                        tempData.web_pages.map((item, l) => <Link key={l} href={ item }>{ item }</Link> )
                    }
                </Link>
            </div>
            <button className="icon-delete univ-delete-list" { ...props } ></button>
        </div>
    )
}
