import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'



const Product = () => {
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState(null)
    const {productID} = useParams()
    console.log(productID);
    const fetchData = async ()=>{
        try {
            const {data} = await axios.get(`/api/products?id=${productID}`)
            setProduct(data)
        } catch (error) {
            
        }
        setLoading(false)
    }
    useEffect(()=>{
        fetchData()
    },[])
    if(loading){
        return (
            <section className='section section-center'>
            <h2>Loading</h2>
            </section>
            )
    }
    const {fields} = product
    const {name, desc, price, image } =fields
    

        return (
            <section className='section section-center'>
                <Link to="/" className='link'>
                back home</Link>
                <div className='title'>
                <h1 class="title">{name}</h1>
                <div className='title-underline'></div>

                </div>
                    <article className='single-product'>
                        <img className="single-product-img"
                        src={image[0].url}
                        alt={name}
                        />
                        <div className="product-info">
                        <h5 className="title">{name}</h5>
                        <h5 className="price">${price}</h5>
                        <p className="desc">{desc}</p>
                        </div>
                    </article>

            </section>
        )
}

export default Product
