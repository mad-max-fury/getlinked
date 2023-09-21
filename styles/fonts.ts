import { Montserrat} from 'next/font/google';
import localFont from 'next/font/local';

// ClashDisplay Font Setup
export const clashDisplay = localFont({
  src: [
    {
      path: '../public/font/clash_display/ClashDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },

    {
      path: '../public/font/clash_display/ClashDisplay-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/font/clash_display/ClashDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/font/clash_display/ClashDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/font/clash_display/ClashDisplay-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/font/clash_display/ClashDisplay-Extralight.woff2',
      weight: '200',
      style: 'normal',
    },
  ],
  variable:'--font-clashDisplay',
  display: 'swap',
});

// inter Font Setup
export const montserrat = Montserrat({ subsets: ['latin'], variable:'--font-montserrat'});

