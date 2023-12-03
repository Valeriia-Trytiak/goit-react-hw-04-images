import React, { useMemo, useState, useEffect } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

import { SliderButton } from './SliderButtonTheme.styled';

export const SliderButtonTheme = ({ themes, currentTheme, onChange }) => {
  const themeKeys = useMemo(() => themes && Object.keys(themes), [themes]);
  const [isSunIcon, setIsSunIcon] = useState(true);

  useEffect(() => {
    setIsSunIcon(currentTheme === 'default');
  }, [currentTheme]);

  const handleThemeChange = () => {
    if (themeKeys) {
      const currentIndex = themeKeys.indexOf(currentTheme);

      const nextIndex = (currentIndex + 1) % themeKeys.length;
      setIsSunIcon(themeKeys[nextIndex] === 'default');
      onChange(themeKeys[nextIndex]);
    }
  };

  return (
    <SliderButton onClick={handleThemeChange}>
      {isSunIcon ? <BsSun /> : <BsMoon />}
    </SliderButton>
  );
};
