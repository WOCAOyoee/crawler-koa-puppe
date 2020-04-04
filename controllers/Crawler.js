const {startProcess} = require('../libs/utils');

class Crawler{
  crawlSliderData(){
    startProcess({
      path: '../crawlers/slider.js',
      async message(data){
        console.log(data);
      },
      async exit(code){
        console.log(code);
      },
      async error(error){
        console.log(error);
      }
    });
  }

}
module.exports = new Crawler();