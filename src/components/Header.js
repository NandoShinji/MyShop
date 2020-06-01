import React from 'react'

export default function Header(props) {
    return (
        <div className="headers mt-4">
            <h3 className="text-center">Hệ thống quản lý bán hàng</h3>
            <p className="text-center">Nhập xuất hóa đơn</p>
            <hr></hr>
            <div className="text-center">
                <button type="button" className="btn btn-success" onClick={() => props.setBill(!props.bill)}>Tạo hóa đơn</button>
            </div>
            
        </div>
        
    );
};
