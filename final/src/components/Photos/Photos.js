import React, { useEffect, useState } from 'react'

export default function Photos({ id }) {
    const [loaded, setLoaded] = useState(false)
    const [photos, setPhotos] = useState([])
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    useEffect(() =>{
        fetch(`${baseUrl}/albums/${id}/photos`, {
            method: 'GET',
        }).then((raw) => raw.json())
        .then((res) => {
            setPhotos({photos: res});
            setLoaded({loaded: true});
        })
    }, [])
    return (
        <div>
            {!loaded ? 
                <h1>Loading...</h1> : 
                photos.photos.map(photo => (
                    <img src={photo.url} key={photo.id} alt=''/>
                ))
                }
        </div>
    )
}
