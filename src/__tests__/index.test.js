'use strict';

import axios from 'axios';

import { render, screen } from '@testing-library/react';
import { handleDataCollection } from '@/app/home/actions';

const mockResponse = [{ 
    "domains": [],
    "state-province": "Abu Dhabi",
    "name": "Mohamed bin Zayed University of Artificial Intelligence (MBZUAI)",
    "web_pages": [
        "https://mbzuai.ac.ae/"
    ],
    "country": "United Arab Emirates",
    "alpha_two_code": "AE"
}];

jest.mock('axios', () => jest.fn(() => Promise.resolve( mockResponse )));

describe( "Home - Fetch request", () => {
    
    it( 'should return a object response', async () => {
    
        const response = await handleDataCollection();
        expect(axios).toHaveBeenCalled();
        console.log( response );
        expect(response).toEqual( mockResponse );
        
    });

});
