import React, { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext'
import {getFirestore, addDoc, collection} from "firebase/firestore"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CartDetail = () => {
    const { cart, clearCart, deleteFromCart, getTotalQuantity, getTotal } = useContext(CartContext)

    const [buyerName, setBuyerName] = useState("")
    const [buyerLastName, setBuyerLastName] = useState("")
    const [buyerEmail, setBuyerEmail] = useState("")
    const [buyerPhone, setBuyerPhone] = useState("")

    const toastAlert = () => {
        toast.success("¡Gracias por tu compra!",{
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };

    const order = {
            buyer: {
                name: buyerName,
                lastName: buyerLastName,
                email: buyerEmail,
                phone: buyerPhone,
            },
            items: cart,
            total: getTotal()
    }


    const handleClick = (e) => {
       
        const db = getFirestore();
        const orderCollection = collection(db, "orders")
        addDoc(orderCollection, order)
        .then(({id}) => console.log(id))
        clearCart()
        toastAlert()
        e.preventDefault()
        
        

    };


    return (
        <>

            <section style={{
                display: "flex",
                justifyContent: "center",
            }}>

                <div style={{
                    margin: "20px",
                    padding: "20px",
                    border: "1px solid #000",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "column",
                    width: "800px",
                }} >
                    <h2 style={{
                        margin: "10px",
                        fontSize: "30px",
                        color: "blue"



                    }}>Tu Carrito:</h2>

                    {
                        cart.map(i => (
                            <>
                                <div key={i.id}>
                                    <li style={{
                                        border: "1px solid #000",
                                        margin: "10px",
                                        borderRadius: "20px",
                                        width: "550px",
                                        padding: "10px",
                                        display: "flex",
                                        gap: "10px",

                                    }}>
                                        <button style={{
                                            border: "2px solid red",
                                            borderRadius: "50%",
                                            color: "white",
                                            background: "red",
                                            marginRight: "10px",
                                            fontSize: "12px",
                                        }}
                                        // onClick={() => deleteFromCart(i.id)} 
                                        >X</button>
                                        <span><b>Producto:</b> {i.name}</span> ┃
                                        <span><b>Precio:</b> usd ${i.price}</span> ┃
                                        <span><b>Cantidad:</b> {i.quantity}</span>


                                    </li>
                                </div>
                            </>
                        ))
                    }


                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "10px"
                    }}>
                        <span style={{
                            fontSize: "20px",
                            padding: "5px"
                        }}><b>Total compra:</b> usd ${getTotal(cart)}</span>



                        <button style={{
                            border: "2px solid red",
                            background: "red",
                            color: "#fff",
                            borderRadius: "10px",
                            padding: "5px",
                        }}
                            onClick={clearCart}
                        >Vaciar carrito</button>
                    </div>
                </div>


                <div style={{
                    margin: "10px",
                    padding: "20px",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: "column",


                }}>
                    <h2 style={{ fontSize: "22px" }}>Tus datos:</h2>
                    <p style={{ fontWeight: "400", fontStyle: "italic" }}>Porfavor, brindanos tus datos así podemos generarte una orden de compra</p>
                    <form>

                        <div className="mb-3">
                            <input required type="text" value={buyerName} onChange={(e) => setBuyerName(e.target.value)} className="form-control" id="userName" placeholder="Nombre" />
                        </div>

                        <div className="mb-3">
                            <input required type="text" value={buyerLastName} onChange={(e) => setBuyerLastName(e.target.value)} className="form-control" id="userLastName" placeholder="Apellido" />
                        </div>

                        <div className="mb-3">
                            <input required type="email" value={buyerEmail} onChange={(e) => setBuyerEmail(e.target.value)} className="form-control"  placeholder="E-mail" />
                        </div>

                        <div className="mb-3">
                            <input required type="text" value={buyerPhone} onChange={(e) => setBuyerPhone(e.target.value)} className="form-control"  placeholder="Teléfono" />
                        </div>

                        <div style={{display:"flex", justifyContent:"space-between"}}>
                        <button type="submit" className="btn" style={{ background: "green", color: "#fff" }}
                        onClick={handleClick}
                        >Finalizar compra</button>
                        <ToastContainer/>
                        </div>
                    </form>

                </div>   

            </section>
        </>

    )
}

export default CartDetail