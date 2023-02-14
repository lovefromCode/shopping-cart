import React, { useEffect, useContext, useState } from 'react';
import { IProduct } from '../../model/Product';
import { StarIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';
import { GlobalContextObj } from '../../context/globalContext';
// import { UserContext } from '../../context/globalContext';

interface Props {
    product: IProduct
}

function Product({ product }: Props) {
    const { cartItem, globalChangeState } = useContext(GlobalContextObj);
    console.log(cartItem, globalChangeState);


    // const { user, setUser } = useContext(UserContext);
    // console.log({ user, setUser });

    const [toggle, settoggle] = useState<boolean>(false);

    const handleAddToBasket = () => {
        console.log("handleAddToBasket called...");
        settoggle(!toggle)
    }

    // useEffect(() => {
    //     if (toggle === true) {
    //         globalChangeState({ cartItem: [...cartItem[0]] })
    //     }
        //     // else {
        //     //     let productAfterRemoval = cartItem.filter(x => x.id !== id)
        //     //     globalChangeState({
        //     //         cartItem: [...productAfterRemoval]
        //     //     })
        //     // }
    // }, [toggle])

    return (
        <div className='relative flex flex-col m-5 bg-white p-10 z-30'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{product.category}</p>

            <img src={product.image} height={200} width={200} className='object-contain' />

            <h4 className='mt-5'>{product.title}</h4>

            <div className='flex justify-between items-center my-3'>
                <div className='flex items-center bg-yellow-300 px-1 rounded-sm'>
                    <StarIcon className='h-4 text-white' />
                    <span className='text-black text-sm pl-1'> {product.rating.rate}</span>
                </div>
                <div className='flex items-center text-gray-500'>
                    <CurrencyDollarIcon className='h-4' />
                    <span className='text-sm'> {product.price}</span>
                </div>
            </div>
            <p className='text-sm mb-5'>{product.description.length > 130 ? product.description.substring(0, 130) + "..." : product.description} </p>

            <button className='bg-yellow-500' onClick={handleAddToBasket}>
                {toggle ? "Added" : "Add to Basket"}
            </button>
        </div>
    )
}

export default Product