import { ColorRing } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';

import { fechServisSearchImg } from '../API';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button.jsx';
import { Container } from './Container/Container.styled';
import { ContainerLoader } from './ContainerLoader/ContainerLoader';
import { SliderButtonTheme } from 'components/SliderButtonTheme/SliderButtonTheme';

import Particles from 'react-tsparticles';
import { loadBigCirclesPreset } from 'tsparticles-preset-big-circles';
import { loadSeaAnemonePreset } from 'tsparticles-preset-sea-anemone';

export const App = () => {
  const [currentTheme, setCurrentTheme] = useState('default');
  const [gallery, setGallery] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

  // Записую до стану значення пошуку, скидаю поточну сторінку та масив зображень
  const uppdateSearchbar = searchName => {
    setSearchValue(searchName);
    setGallery([]);
    setPage(1);
    setLoadMore(false);
  };

  //При кліку по Завантажити ще, змінюю стейт
  const handlerButton = () => {
    setPage(prevState => prevState + 1);
  };

  const themes = {
    default: {
      preset: 'big-circles',
    },
    anotherTheme: {
      preset: 'seaAnemone',
    },
  };

  const handleThemeChange = newTheme => {
    setCurrentTheme(newTheme);
  };

  //Ініт бібліотеки анімації
  async function particlesInit(tsParticles) {
    if (currentTheme === 'default') {
      await loadBigCirclesPreset(tsParticles);
    } else if (currentTheme === 'anotherTheme') {
      await loadSeaAnemonePreset(tsParticles);
    }
  }

  useEffect(() => {
    if (searchValue === '') {
      return;
    }
    async function fechImgs() {
      try {
        setIsLoading(true);
        setError(false);
        const searchImg = await fechServisSearchImg(searchValue, page);
        toast.success('Images found successfully!');
        setGallery(prevState =>
          page === 1 ? searchImg.hits : [...prevState, ...searchImg.hits]
        );
        setLoadMore(page < Math.ceil(searchImg.totalHits / 12));
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fechImgs();
  }, [searchValue, page]);

  return (
    <Container>
      <Searchbar onSubmit={uppdateSearchbar} />
      <SliderButtonTheme
        themes={themes}
        currentTheme={currentTheme}
        onChange={handleThemeChange}
      ></SliderButtonTheme>
      {gallery.length > 0 && <ImageGallery galleryImages={gallery} />}

      {isLoading && (
        <ContainerLoader>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </ContainerLoader>
      )}

      {loadMore && <Button onClickButton={handlerButton} />}

      {error && <span>Whoops... Error! Please, reload this page!</span>}
      <Toaster position="top-right" />

      <Particles
        options={{
          preset: currentTheme === 'default' ? 'big-circles' : 'seaAnemone',
          backgroundMode:
            currentTheme === 'anotherTheme'
              ? { enable: true, zIndex: -1 }
              : undefined,
        }}
        init={particlesInit}
      />
    </Container>
  );
};
