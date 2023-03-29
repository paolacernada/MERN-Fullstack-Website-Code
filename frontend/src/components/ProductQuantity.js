import React, { useState } from "react";
import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";

function ProductQuantity() {

    const [purchaseAmount, setPurchaseAmount] = useState(0);
    const buyMore = () => {setPurchaseAmount(purchaseAmount === 10 ? purchaseAmount : purchaseAmount + 1)};
    const buyLess = () => {setPurchaseAmount(purchaseAmount === 0 ? 0 : purchaseAmount - 1)};

    return (

        <div className="iconEnlarge">
            <CiSquareMinus onClick={buyLess} />
            <span>{purchaseAmount}</span>
            <CiSquarePlus onClick={buyMore} />
        </div>
    );
}

export default ProductQuantity;