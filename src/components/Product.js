import React, { useState } from 'react'

const Product = (props) => {
    const [quantity, setQuantity] = useState(1)
    const [cost, setCost] = useState(props.price)

    const getCost = (event) => {
        setCost(props.price * event.target.value)
        if (event.target.value > quantity) {
            setQuantity(event.target.value)
            props.setCost(props.cost + props.price * (event.target.value - quantity))
            props.setPoint(parseInt((props.cost + props.price * (event.target.value - quantity)) * 0.00005))
        } else {
            setQuantity(event.target.value)
            props.setCost(props.cost - props.price * (quantity - event.target.value))
            props.setPoint(parseInt((props.cost - props.price * (quantity - event.target.value)) * 0.00005))
        }
    }

    const deleteProduct = () => {
        props.setCost(props.cost - cost)
        props.setPoint(parseInt((props.cost - cost) * 0.00005))
        setCost(quantity * props.price)
        props.deleteProduct(props.id)
        
    }

    return (
        <tr>
            <th scope="row">{props.stt}</th>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.origin}</td>
            <td>
                <input type="number" defaultValue="1" min="1" max="500" className="text-center" onChange={(event) => getCost(event)}></input>
            </td>
            <td>{props.price}</td>
            <td>{cost}</td>
            <td>
                <button style={{ border: 'none', background: 'none' }} onClick={() => deleteProduct()}><i className="far fa-trash-alt"></i></button>
            
            </td>
        </tr>
    )
}

export default Product