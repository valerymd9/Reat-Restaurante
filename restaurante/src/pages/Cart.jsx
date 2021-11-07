import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet'
import CartItem from '../components/CartItem'
import Button from '../components/Button'

import productData from '../assets/fake-data/products'
import numberWithCommas from '../utils/numberWithCommas'

const Cart = () => {

    const cartItems = useSelector((state) => state.cartItems.value)

    const [cartProducts, setCartProducts] = useState(productData.getCartItemsInfo(cartItems))

    const [totalProducts, setTotalProducts] = useState(0)

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setCartProducts(productData.getCartItemsInfo(cartItems))
        setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
        setTotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0))
    }, [cartItems])

    return (
        <Helmet title="Carrito">
            <div className="cart">
                <div className="cart__info">
                    <div className="cart__info__txt">
                        <p>
                            Tienes un total de  {totalProducts} productos
                        </p>
                        <div className="cart__info__txt__price">
                            <span>Precio total</span> <span>{numberWithCommas(Number(totalPrice))}</span>
                        </div>
                    </div>
                    <div className="cart__info__btn">
                        <Button size="block">
                            Terminar compra
                        </Button>
                        <Link to="/Carta">
                            <Button size="block">
                                Seguir comprando
                            </Button>
                        </Link>
                        
                    </div>
                </div>
                <div className="cart__list">
                    {
                        cartProducts.map((item, index) => (
                            <CartItem item={item} key={index}/>
                        ))
                    }
                </div>
            </div>
        </Helmet>
    )
}

export default Cart
