import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.deel.test',
  appName: 'deel-test',
  webDir: 'build',
	bundledWebRuntime: false,
	server: {
		//url: 'http://192.168.50.145:3000',
    cleartext: true,
    androidScheme: 'https'
	},

};

export default config;
