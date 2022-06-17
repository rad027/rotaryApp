import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'rotary_district.app',
  appName: 'Rotary District 2520',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
      "SplashScreen": {
          "launchShowDuration": 0
      }
  },
  cordova: {}
};

export default config;
