import React, { useState } from "react";
import ProductQuantity from "./ProductQuantity";

function ProductRow({ selectedProduct }) {
    return (
    
        <tr>
            <td>{selectedProduct.product}</td>
            <td>{selectedProduct.company}</td>
            <td>{selectedProduct.price.toLocaleString('en-US', {     
                style: "currency",     
                currency: "USD",     
                currencyDisplay: "symbol",
                maximumFractionDigits: 6,     
                minimumFractionDigits: 2      
                })}
            </td>
            <td><ProductQuantity /></td>
        </tr>
    );
}

export default ProductRow