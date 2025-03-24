/** @format */

// types/expo-router.d.ts
import { Href } from 'expo-router';

declare module 'expo-router' {
  interface Href {
    '/services/buy-airtime': never;
    '/services/buy-data': never;
    '/services/buy-electricity': never;
    '/services/buy-tv': never;
    '/services/buy-internet': never;
    '/services/buy-esim': never;
    '/services/buy-betting': never;
    '/services/more-services': never;
  }
}
