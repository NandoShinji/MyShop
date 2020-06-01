import React from 'react'
import Product from './Product'

export default function Table(props) {
    return (
        <table className="table table-striped text-center">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Mã sản phẩm</th>
                    <th scope="col">Tên sản phẩm</th>
                    <th scope="col">Xuất sứ</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Giá tiền</th>
                    <th scope="col">Thanh toán</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {
                    props.product.map((value, key) => (
                        <Product key={key} stt={value.stt} id={value.id} name={value.name} origin={value.origin} price={value.price} cost={props.cost} setCost={props.setCost} setPoint={props.setPoint} deleteProduct={props.deleteProduct} />
                    ))
                }
            </tbody>
        </table>
    );
};
