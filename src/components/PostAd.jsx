import React from 'react'
import axiosClient from '../apiConfig';

export default function PostAd() {

    let postAd = (e) => {
        let data = new FormData(e.target);
        let files = data.get('image');
        console.log(files);
       
        var body = {
            title: data.get('title'),
            description: data.get('description'),
            price: data.get('price'),
            category: data.get('category')
        }

        axiosClient({
            method: 'post',
            url: '/ad/add',
            data: body,
            file:files
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
                    <input type="file" name="image" /><br />
                    <button>Post</button>
                </form>
            </div>
        </div>
    )
}
