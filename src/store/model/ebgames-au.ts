import {Store} from './store';

export const EbGamesau: Store = {
  currency: '$',
  labels: {
    maxPrice: {
      container: '.singleVariantText .prodPriceCont',
    },
    outOfStock: {
      container: '#btnAddToCart[style*="display:none;"] ',
      text: ['add to cart'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.ebgames.com.au/product/nintendo-switch/217626-mario-kart-8-deluxe',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.ebgames.com.au/product/267678',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.ebgames.com.au/product/267679',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url:
        'https://www.ebgames.com.au/product/267773',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url:
        'https://www.ebgames.com.au/product/267774',
    },
  ],
  name: 'ebgames-au',
};
