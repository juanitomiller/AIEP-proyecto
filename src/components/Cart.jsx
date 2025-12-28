import React from 'react';
import './Cart.css';
import { FaTrash, FaShoppingCart } from 'react-icons/fa';

export const Cart = ({ allProducts, countProducts, total, onAddProduct, onDeleteProduct, onCleanCart }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", minimumFractionDigits: 0 }).format(price);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">
        <FaShoppingCart className="cart-icon" /> Carrito de Compras
      </h2>
      {allProducts.length ? (
        <>
          <ul className="cart-items">
            {allProducts.map(product => (
              <li key={product.id} className="cart-item">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3>{product.name}</h3>
                  <p className="cart-item-quantity">Cantidad: {product.quantity}</p>
                  <p className="cart-item-price">{formatPrice(product.price)}</p>
                  <p className="cart-item-subtotal">Subtotal: {formatPrice(parseInt(product.price) * product.quantity)}</p>
                </div>
                <button 
                  className="delete-button bg-warning"
                  onClick={() => onDeleteProduct(product)}
                >
                  <FaTrash />
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p className="cart-total">Total: <span>{formatPrice(total)}</span></p>
            <p className="cart-count">Productos: <span>{countProducts}</span></p>
            <button 
              className="clean-cart-button bg-black"
              onClick={onCleanCart}
            >
              Limpiar Carrito
            </button>
            <button 
              className="pay-button bg-black"
              onClick={() => alert('Funcionalidad de pago próximamente')}
            >
              Ir a pagar
            </button>
          </div>
        </>
      ) : (
        <p className="empty-cart">Tu carrito está vacío</p>
      )}
    </div>
  );
};

