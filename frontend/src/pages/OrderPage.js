import React, { useState } from "react";
import ProductRow from "../components/ProductRow.js";
import { FaRegHandPointDown } from "react-icons/fa";


function OrderPage({ products }) {
  return (

    <>
      <h2>Order</h2>

        <article>
            <p>Place your order below <i alt="hand pointing down icon"><FaRegHandPointDown/> </i></p>

                    <table className="petProductTable">
                        <caption>You can order no more than <strong>10</strong> of each of the below products from us</caption>

                        <thead>
                            <tr>
                                <th scope="col">Company</th>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Choice</th>
                            </tr>
                        </thead>

                        <tbody>
                          {products.map((selectedProduct, position) => <ProductRow selectedProduct={selectedProduct} key={position} />)}
                        </tbody>
                    </table>

        </article>
    </>
  );
}

export default OrderPage;