import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosClient from '../apiConfig'

export default function Ads() {
    const [ads, setAds] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        try{
        axiosClient.get('/ad/all').then(resp => setAds(resp.data));
        }
        catch(error){
            navigate("/login");
        }
    });

    return (
        <div className='ads'>
            <h1>All Ads</h1>
            {ads.map(el => <p>{el.title}</p>)}
        </div>
    )
}
