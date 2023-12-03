import React, { useMemo } from 'react';
import { SliderButton } from './SliderButtonTheme.styled';

export const SliderButtonTheme = ({ themes, currentTheme, onChange }) => {
  const themeKeys = useMemo(() => themes && Object.keys(themes), [themes]);

  const handleThemeChange = () => {
    if (themeKeys) {
      const currentIndex = themeKeys.indexOf(currentTheme);

      const nextIndex = (currentIndex + 1) % themeKeys.length;
      onChange(themeKeys[nextIndex]);
    }
  };

  return <SliderButton onClick={handleThemeChange}>Switch Theme</SliderButton>;
};
