import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

const useScreenSize = () => {
  const window = Dimensions.get('window');

  const [dimensions, setDimensions] = useState(window);

  useEffect(() => {
    const subscriber = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
    });
    return () => subscriber?.remove();
  });

  return dimensions;
};

export default useScreenSize;
