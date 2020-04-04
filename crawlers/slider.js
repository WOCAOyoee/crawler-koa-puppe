const crawler = require('../libs/crawler');

crawler({
  url: 'https://msiwei.ke.qq.com/',
  callback(){
    const $ = window.$;
    const $item = $('.agency-big-banner-ul .agency-big-banner-li');

    const data = [];

    $item.each((index,item) => {
      const $el = $(item);
      const $elLink = $el.find('.js-banner-btnqq');

      const dataItem = {
        cid: $elLink.attr('data-id'),
        href: $elLink.prop('href'),
        title: $elLink.prop('title'),
        imgUrl: $elLink.find('img').prop('src')
      }

      data.push(dataItem);
    });
    return data;
  }
})