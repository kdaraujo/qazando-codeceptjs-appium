exports.config = {
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      app: 'C:/Users/kdaraujo/Documents/appsqazando/app-release.apk',
      desiredCapabilities: {
        deviceName: 'Pixel',
        platformVersion: '9',
        appPackage: 'com.qazandoapp',
        appActivity: 'MainActivity'
      }
    }
  },
  include: {
    I: './steps_file.js',
    login_page: './pages/login_page.js',
    home_page: './pages/home_page.js'
  },
  mocha: {},
  //bootstrap: './server/server.js',
  //teardown: './server/server.js',
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },
  name: 'qazando-automation',
  tests: './steps/*_test.js'
}