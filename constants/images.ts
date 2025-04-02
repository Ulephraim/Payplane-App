/** @format */
import payplaneLogo from '../assets/images/payplane-logo.png';
import airtelLogo from '../assets/images/airtel.png';
import mtnLogo from '../assets/images/MTN.png';
import ninemobileLogo from '../assets/images/9mobile.png';
import dstvLogo from '../assets/images/DSTV.png';
import gotvLogo from '../assets/images/GOTV.png';
import spectranetLogo from '../assets/images/spectranet.png';
import showmaxLogo from '../assets/images/showmax.png';
import startimesLogo from '../assets/images/startimes.png';
import gloLogo from '../assets/images/GLO.png';

const mtnnewLogo = require('../assets/images/mtn-new-logo.svg');

export default {
  payplaneLogo,
  airtelLogo,
  mtnLogo,
  ninemobileLogo,
  dstvLogo,
  gotvLogo,
  spectranetLogo,
  showmaxLogo,
  startimesLogo,
  gloLogo,
  mtnnewLogo,
};

export const sliderImages = [
  { id: '1', src: require('../assets/images/payplaneAds1.jpg') },
  { id: '2', src: require('../assets/images/payplaneAds2.jpg') },
  { id: '3', src: require('../assets/images/payplaneAds3.jpg') },
];

export const sliderImagesData = {
  sliderImages,
};

export const onboarding = [
  {
    id: 1,
    title: 'Pay Bills in Seconds!',
    description:
      'Settle your electricity, water, and internet bills effortlessly from your phone, anytime, anywhere.',
    image: require('../assets/images/onboarding1.jpg'),
  },
  {
    id: 2,
    title: 'Get Loans When You Need Them!',
    description:
      'Access instant loans with flexible repayment options to support your financial goals.',
    image: require('../assets/images/onboarding2.jpg'),
  },
  {
    id: 3,
    title: 'Earn Rewards & Cashback!',
    description:
      'Every transaction earns you points! Redeem them for discounts, cashback, and exclusive offers.',
    image: require('../assets/images/onboarding3.jpg'),
  },
];

export const data = {
  onboarding,
};
