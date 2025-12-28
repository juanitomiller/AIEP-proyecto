import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ products, onAddProduct }) => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) return <div>Producto no encontrado</div>;

    const formatPrice = (price) => {
        return new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", minimumFractionDigits: 0 }).format(price);
    };

    return (
        <div className="container my-5">
            <div className="row">
                {/* Columna Izquierda - Imagen */}
                <div className="col-md-4">
                    <img 
                        src={product.image} 
                        alt={product.name} 
                        className="img-fluid rounded shadow"
                    />
                </div>

                {/* Columna Central - Detalles del producto */}
                <div className="col-md-4">
                    <h2 className="mb-3">{product.name}</h2>
                    {product.sale ? (
                        <>
                            <p className="text-muted text-decoration-line-through mb-1">{formatPrice(product.originalPrice)}</p>
                            <p className="h3 mb-3">{formatPrice(product.price)}</p>
                        </>
                    ) : (
                        <p className="h3 mb-3">{formatPrice(product.price)}</p>
                    )}
                    <div className="mb-3">
                        {product.rating && (
                            <div className="d-flex text-warning mb-2">
                                {Array(product.rating).fill().map((_, i) => (
                                    <div key={i} className="bi-star-fill me-1"></div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="mb-3">
                        <h4>Descripción:</h4>
                        <p className="text-muted">
                            {product.description || "Producto de alta calidad con excelente sabor y textura."}
                        </p>
                    </div>
                    <button 
                        className="btn btn-outline-warning"
                        onClick={() => onAddProduct(product)}
                    >
                        Añadir al Carrito
                    </button>
                </div>

                {/* Columna Derecha - Información adicional */}
                <div className="col-md-4">
                    <h4>Información del Producto</h4>
                    <ul className="list-unstyled">
                        <li className="mb-2"><strong>Precio:</strong> {formatPrice(product.price)}</li>
                        {product.sale && (
                            <li className="mb-2"><strong>Descuento:</strong> {Math.round((1 - product.price / product.originalPrice) * 100)}%</li>
                        )}
                        <li className="mb-2"><strong>Calificación:</strong> {product.rating} estrellas</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;

