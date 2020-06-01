import React from 'react'

export default function Pay(props) {
    return (
        <div className="mt-2">
            <div className="d-flex justify-content-between">
                <h6>Tổng số tiền thanh toán</h6>
                <h5>{props.cost} VNĐ</h5>
            </div>
            <div className="d-flex justify-content-between">
                <h6>Điểm tích lũy (1 Point = 1000 VNĐ)</h6>
                <h5>{props.point} Point</h5>
            </div>
        </div>
    );
};
