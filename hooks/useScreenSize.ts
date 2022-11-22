import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

const useScreenSize = () => {
  const screen = Dimensions.get('screen');

  const [dimensions, setDimensions] = useState(screen);

  useEffect(() => {
    const subscriber = Dimensions.addEventListener('change', ({ screen }) => {
      setDimensions(screen);
    });
    return () => subscriber?.remove();
  });

  return dimensions;
};

export default useScreenSize;
