import React, { useState } from 'react'
import axiosClient from '../apiConfig';

export default function PostAd() {
    let [file,setFile] = useState(null)

    let postAd = (e) => {
        let data = new FormData(e.currentTarget);
        let files = data.get('image');
        console.log(files.name);

        data.append('title', data.get('title'));
        data.append('description', data.get('description'));
        data.append('price', data.get('price'));
        data.append('category', data.get('category'));
        data.append('image',file);
        console.log(data.get('title'));
        var body = {
            title: data.get('title'),
            description: data.get('description'),
            price: data.get('price'),
            category: data.get('category')
        }

        axiosClient({
            method: 'post',
            url: '/ad/add',
            data: data
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className='newadd'>
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    postAd(e);
                }}>
                    <label htmlFor="title">Name of Product:</label>
                    <input type="text" name="title" /><br />
                    <label htmlFor="description">Product Details:</label>
                    <input type="text" name="description" /><br />
                    <label htmlFor="price">Price: </label>
                    <input type="text" name="price" /><br />
                    <label htmlFor="category">Category:</label>
                    <input type="text" name="category" /><br />
                    <label htmlFor="image">Upload Product Image: </label>
                    <input onChange={(e)=>setFile(e.target.files[0])} type="file" name="image" /><br />
                    <button>Post</button>
                </form>
            </div>
        </div>
    )
}
