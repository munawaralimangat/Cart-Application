import { useDispatch, useSelector } from "react-redux"
import { Card } from "flowbite-react";
import { removeFromCart,increment,decrement } from "../features/cartSlice";

const Cart = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.cartSlice);

    const handleRemoveFromCart = (id)=>{
        dispatch(removeFromCart(id))
    }

    const handleIncrementCount = (id)=>{
        dispatch(increment(id))
    }

    const handleDecrementCount = (id)=>{
        dispatch(decrement(id))
    }

    let cards = null;

    if (products.length === 0) {
        cards = <h1 className="text-4xl text-red-500 mt-10">Cart is empty</h1>;
    } else {
        cards = products.map(product => (
            <div key={product.id} className='sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-8'>
                <Card className="w-72 h-full" key={product.id}>
                    <div className="h-72 overflow-hidden">
                        <img className="object-contain w-full h-full" src={product.image} alt={product.title} />
                    </div>
                    <div className="">
                        <h5 className="font-semibold tracking-tight text-gray-900 dark:text-white">
                            {product.title}
                        </h5>
                        <div className="flex items-center justify-between mt-4">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">₹{product.price}</span>
                            <div className="text-3xl">
                                <button onClick={() => handleDecrementCount(product.id)}>-</button>
                                <span className="m-4">{product.quantity}</span>
                                <button onClick={() => handleIncrementCount(product.id)}>+</button>
                            </div>
                        </div>
                        <div className="mt-4">
                            <button onClick={() => handleRemoveFromCart(product.id)} className="text-red-500">Remove</button>
                        </div>
                    </div>
                </Card>
            </div>
        ));
    }

    return (
        <div className='flex flex-wrap justify-center'>
            {cards}
        </div>
    );
}

export default Cart;