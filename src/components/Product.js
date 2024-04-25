import { useEffect, useState } from 'react';
import { Card } from "flowbite-react";

const Product = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const cards = products.map(product => (
        
        <div key={product.id} className='sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-8'>
            <Card className="w-72 h-full" key={product.id}>
                <div className="h-72 overflow-hidden">
                    <img className="object-contain w-full h-full" src={product.image} alt={product.title} />
                </div>
                <div className="">
                    <a href="#">
                        <h5 className="font-semibold tracking-tight text-gray-900 dark:text-white">
                            {product.title}
                        </h5>
                    </a>
                    <div className="flex items-center justify-between mt-4">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">₹{product.price}</span>
                        <a
                            href="#"
                            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                        >
                            Add to cart
                        </a>
                    </div>
                </div>
            </Card>
        </div>
    ));
    
    return (
        <div className='flex flex-wrap justify-center'>
            {cards}
        </div>
    );
}

export default Product;
