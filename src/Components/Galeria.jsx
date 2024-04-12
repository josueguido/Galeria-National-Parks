import PropTypes from 'prop-types';

// Componente GalleryItem: Renderiza una sola imagen en un contenedor con fondo gris.

function GalleryItem({ image }) {
    return (
        <div className="relative bg-gray-100">
            <img alt="gallery" className="w-full h-44 object-cover sm:h-64 rounded-md transition duration-300 ease-in-out opacity-100 hover:opacity-60" src={image} />
        </div>
    );
}

// Definición de los tipos de props esperados para GalleryItem.
GalleryItem.propTypes = {
    // La prop 'image' debe ser una cadena (URL de la imagen) y es requerida.
    image: PropTypes.string.isRequired,
};

// Componente Gallery: Renderiza una sección de imágenes en una cuadrícula.
// Props:
// - items: Una lista de objetos, cada uno representando una imagen con su URL.
function Gallery({ items }) {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-10 px-6 mx-6">
            {/* Mapea sobre cada objeto en 'items' y renderiza un GalleryItem para cada uno */}
            {items.map((item, index) => (
                <GalleryItem key={index} image={item.image} />
            ))}
        </section>
    );
}

// Definición de los tipos de props esperados para Gallery.
Gallery.propTypes = {
    // La prop 'items' debe ser un array de objetos, donde cada objeto tiene una propiedad 'image'.
    items: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
        })
    ).isRequired, // El prop 'items' es requerido.
};

export default Gallery;
