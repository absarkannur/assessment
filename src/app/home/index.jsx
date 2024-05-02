'use client';
import React, { useEffect, useState } from 'react';

// Components
import Header from '@/components/HeaderContent';
import ListOfUniversities from '@/components/UniversList';
import FilterBar from '@/components/filterBar';

// Utils
import { handleDataCollection } from './actions';
import { setLocalStorage, getLocalStorage } from '@/utils/functions';

export default function HomePage() {

    // Data sets
    const [ data, setData ] = useState([]);
    const [ network, setNetwork ] = useState( true );
    const [ search, setSearch ] = useState('');
    const [ sort, setSort ] = useState('A-Z');

    useEffect(() => {
        
        if( data.length === 0 ){
            handleFetchData();
        }

    });

    const handleFetchData = function() {

        handleDataCollection().then((res) => {
    
            switch ( res.status ) {
                case 200:
                    
                    setData( fn__SortFilter( res.data ) );
                    
                    // Save to LCS
                    setLocalStorage( res.data );
                    setNetwork( true );
                    break;
                default:
                    console.log( res.statusText );
                    break;
            }

        }).catch((err) => {

            if( err.code === "ERR_NETWORK" ) {

                // Data from LCS
                let tempData = getLocalStorage();
                setData( tempData );
                setNetwork( false );

            }

        });
    }

    const handleSearch = function( e ) {

        let searchText = e.target.value;
        let tempData = data;
        
        if( searchText == "" ) {

            handleFetchData();
            return true;
            
        } else {

            let newData = fn__SeachFilter( tempData, searchText );

            if( newData.length == 0 ) {
                setData( [{ 'name': '', 'country': '', 'web_pages': [] }] );
            } else {
                setData( fn__SortFilter( newData, sort ) );
            }

        }

    }

    const handleSort = function( e ) {
        let sortValue = e.target.value;
        let tempData = data;

        setSort( sortValue );
        setData( fn__SortFilter( tempData, sortValue ) );

    }

    const handleDelete = function( e, index ){
        
        let newData = [];
        let tempData = data;
        tempData.splice(index, 1)[0];
        
        tempData.map((item, i) => {
            newData.push( item );
        });

        setData( newData );


    }

    const fn__SeachFilter = function( data, search ){
        const newArr = data.filter(item => item.name.toLowerCase().includes( search.toLowerCase() ) );
        return newArr;
    }

    const fn__SortFilter = function( data, sort ){

        let newArr;

        if( sort == 'Z-A' ){
            newArr = data.sort( ( a, b ) => b.name.localeCompare(a.name) );
        } else {
            newArr = data.sort( ( a, b ) => a.name.localeCompare(b.name) );
        }

        return newArr;

    }

    return (
        <section className="container mx-auto p-4">
            <div className="py-10">

                <Header 
                    head={ "uae's top universities" }
                    desc={ "Studying in the United Arab Emirates can certainly have its benefits: sun, sea, sand, potential tax-free earnings after graduation."} />

            </div>

            <FilterBar 
                sort={ sort }
                search={ search }
                onChangeText={ ( e ) => handleSearch( e ) }
                onChangeSort={ ( e ) => handleSort( e ) }
                network={ network } />

            <div className="py-10">
                {
                    data.map( (item, index) => <ListOfUniversities onClick={ (e) => handleDelete( e, index ) } key={ index } data={ item } /> )
                }
            </div>


        </section>
    )
}
