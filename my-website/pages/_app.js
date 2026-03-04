import { NextUIProvider } from '@nextui-org/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
      <SpeedInsights />
    </NextUIProvider>
  );
}

export default MyApp;