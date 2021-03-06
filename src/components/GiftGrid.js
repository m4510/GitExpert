import React from 'react';
import PropTypes from 'prop-types';
import { GifGridItem } from './GifGridItem';
import { useFetchGifts } from '../hooks/useFetchGifts';

export const GiftGrid = ({ category }) => {
  const { loading, data: images } = useFetchGifts(category);

  return (
    <>
      <h3>{category}</h3>

      {loading && 'Loading...'}

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

GiftGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
