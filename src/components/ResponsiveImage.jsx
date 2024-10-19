import React from 'react';
import PropTypes from 'prop-types';

const ResponsiveImage = ({
    basePath,  // Ruta base para las imágenes
    imageName, // Nombre de la imagen (sin extensión)
    alt,
    loading = 'lazy',
    className = '',
}) => {
    return (
        <picture>
            {/* Small */}
            <source media="(max-width: 576px)" srcSet={`${basePath}/small/webp/${imageName}.webp`} type="image/webp" />
            <source media="(max-width: 576px)" srcSet={`${basePath}/small/jpg/${imageName}.jpg`} type="image/jpeg" />
            {/* Medium */}
            <source media="(min-width: 577px) and (max-width: 1200px)" srcSet={`${basePath}/medium/webp/${imageName}.webp`} type="image/webp" />
            <source media="(min-width: 577px) and (max-width: 1200px)" srcSet={`${basePath}/medium/jpg/${imageName}.jpg`} type="image/jpeg" />
            {/* Large */}
            <source media="(min-width: 1201px)" srcSet={`${basePath}/large/webp/${imageName}.webp`} type="image/webp" />
            <source media="(min-width: 1201px)" srcSet={`${basePath}/large/jpg/${imageName}.jpg`} type="image/jpeg" />
            {/* Fallback */}
            <img
                src={`${basePath}/medium/jpg/${imageName}.jpg`} // Fallback image
                alt={alt}
                loading={loading}
                className={className}
                style={{ width: '100%' }}
            />
        </picture>
    );
};

// PropTypes para validar las propiedades
ResponsiveImage.propTypes = {
    basePath: PropTypes.string.isRequired, // Ruta base
    imageName: PropTypes.string.isRequired, // Nombre de la imagen
    alt: PropTypes.string.isRequired,
    loading: PropTypes.string,
    className: PropTypes.string,
};

export default ResponsiveImage;
