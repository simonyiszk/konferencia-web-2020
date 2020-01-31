import { useLayoutEffect } from 'react';
import { useController } from 'react-scroll-parallax';

const ParallaxCache = () => {
  const { parallaxController } = useController();

  useLayoutEffect(() => {
    const handler = () => {
      setTimeout(() => {
        parallaxController.update();
      }, 300);
    };
    handler();
    return () => {
      // this console.log makes a difference :
      console.log(window.pageYOffset);
    };
  }, [parallaxController]);

  return null;
};

export default ParallaxCache;
