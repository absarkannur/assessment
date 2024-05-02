'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

import './style.css';

export default function page() {

    const searchParams = useSearchParams()
    const [ data, setData ] = useState([]);

    useEffect(() => {

        let siteData = {
            "name" : searchParams.get('name'),
            "state_province" : searchParams.get('state-province'),
            "domains" : searchParams.get('domains'),
            "web_pages" : searchParams.get('web_pages'),
            "alpha_two_code" : searchParams.get('alpha_two_code'),
            "country" : searchParams.get('country'),
        }


        if( data.length === 0 ){
            setData( siteData );
        }


    });

    return (


        <section className="container mx-auto">
            
            <div className="">
                <Image src="/header.jpg" alt="" width={1200} height={200} className="w-[100%] h-[200px]"/>
            </div>

            <div className="py-10 px-4">
                <h1 className="text-[44px] font-[600] animate__animated animate__fadeInUp">{ data.name }</h1>
                <h2 className="text-[22px] animate__animated animate__fadeInUp">{ data.country }</h2>
                <p className="animate__animated animate__fadeInUp"><Link href={ ( data.web_pages ) ? data.web_pages : '/' } target="_blank">{ data.web_pages }</Link></p>
            </div>

            <div className="pb-10 px-4">
                <Link href="/" className="primary-button">Back to Home</Link>
            </div>

        </section>
    )
}
