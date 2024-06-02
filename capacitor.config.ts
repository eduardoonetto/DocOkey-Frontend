import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'docOkey',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      backgroundColor: '#000000',
      androidScaleType: 'CENTER_CROP',
      androidSpinnerStyle: 'large',
      showSpinner: true,
      spinnerStyle: 'small',
      spinnerColor: '#000000',
      launchAutoHide: true,
      launchAutoHideDuration: 2000,

    }
  }
};

export default config;
