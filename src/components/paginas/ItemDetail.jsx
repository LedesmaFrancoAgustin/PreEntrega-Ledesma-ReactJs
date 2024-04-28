import React from 'react';


const ItemDetail = ({ product }) => { 
  return ( 
    <>  
   
                <div className="card w-100">
                    <div className="image-container">
                        <div className="first">

                        <div class="d-flex justify-content-between align-items-center">
                            <span className=" "></span> 
                        </div>
                        </div>

                        <img src={product.Image} className="img-fluid rounded thumbnail-image"/>

                    </div>

                    <div className="product-detail-container p-2">

                        <div className="d-flex justify-content-between align-items-center border-bottom border-black">

                                <h5 className="dress-name">{product.name}</h5>
                                <div className="d-flex flex-column mb-2">

                                    <span className="new-price">Precio: ${product.price}</span>
                                    <small className="old-price text-right"></small>
                                </div>

                        </div>

                        <div className="d-flex justify-content-center align-items-center pt-1">
                            <div>
                                <i className="fa fa-star-o rating-star"></i>
                                <p className="rating-number p-1">{product.description}</p>
                            </div>
                        
                        </div>

                    </div>
                </div>

                <div className=" mt-3 ">
            <div className=" voutchers w-100  ">

                <div className=" voutcher-divider " >

                                    <div class=" voutcher-left ">

                        <p class="voutcher-code  ">Comprar</p>

                    </div>

                    <div class="voutcher-right text-center border-left pt-2 iconoZoomCarritoHover">

                        
                    </div>

                </div>
            </div>
                </div>

    </>
  );
}

export default ItemDetail;