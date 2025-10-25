import { useState } from "react";
import Link from "next/link";
import { FaFilm, FaCamera } from "react-icons/fa";
import QuickViewtModal from "@/components/modals/quickViewModal";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/slices/cart-slice";
import {
  addToWishlist,
  deleteFromWishlist,
} from "@/store/slices/wishlist-slice";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const ProductItem = ({
  productData,
  slug,
  baseUrl,
  discountedPrice,
  productPrice,
  cartItem,
  wishlistItem,
  compareItem,
}) => {
  let badgeText = "";

  if (productData.rent) {
    badgeText = "For Rent";
  } else {
    badgeText = "For Sale";
  }

  const dispatch = useDispatch();

  const [modalShow, setModalShow] = useState(false);

  const wishListTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Wishlist
    </Tooltip>
  );
  const quickViewTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Quick View
    </Tooltip>
  );
  const addToCartTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
     Add To Cart
    </Tooltip>
  );

  return (
    <>
      <div className="ltn__product-item ltn__product-item-4">
        <div className="product-img">
          <Link href={`/${baseUrl}/${slug}`}>
            <img
              src={`/img/product-3/${productData.productImg}`}
              alt={`${productData.title}`}
            />
          </Link>
          <div className="product-badge">
            <ul>
              <li
                className={`sale-badge ${productData.rent ? "bg-green" : ""}`}
              >
                {badgeText}
              </li>
            </ul>
          </div>
          <div className="product-img-location-gallery">
            <div className="product-img-location">
              
            </div>
            <div className="product-img-gallery">
             
            </div>
          </div>
        </div>
        <div className="product-info">
         
          <h2 className="product-title">
            <Link href={`/${baseUrl}/${slug}`}>{productData.title}</Link>
          </h2>
          <div className="product-description">
            <p>{productData.fullDescription}</p>
          </div>
          <ul className="ltn__list-item-2 ltn__list-item-2-before">
            <li>
              <span>
                {productData.propertyDetails.bedrooms}
                <i className="flaticon-bed"></i>
              </span>
              Bedrooms
            </li>
            <li>
              <span>
                {productData.propertyDetails.baths}
                <i className="flaticon-clean"></i>
              </span>
              Bathrooms
            </li>
            <li>
              <span>
                {productData.propertyDetails.area}
                <i className="flaticon-square-shape-design-interface-tool-symbol"></i>
              </span>
              square Ft
            </li>
          </ul>
        </div>
        
      </div>

      <QuickViewtModal
        productData={productData}
        show={modalShow}
        onHide={() => setModalShow(false)}
        slug={slug}
        discountedprice={discountedPrice}
        productprice={productPrice}
        cartitem={cartItem}
        wishlistitem={wishlistItem}
        compareitem={compareItem}
      />
    </>
  );
};

export default ProductItem;
