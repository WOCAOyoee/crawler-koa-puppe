// const pt =require('puppeteer');

// ;(async() => {
//   //启动程序
//   const bs = await pt.launch();
//   url = "https://msiwei.ke.qq.com/";
//   //启动一个新的页面
//   pg = await bs.newPage();
//   //去一个页面
//   await pg.goto(url,{
//     //超时
//     timeout : 30 * 1000,
//     //在500毫秒未发出连接,代表当次爬取完成
//     waitUtil: 'networkidle2'
//   });
//   const result = await pg.evaluate(() => {
//     //当前爬取的url环境有jQuery 声明变量接收它
//     const $  = window.$;
//     const $item = $(".agency-big-banner-ul .agency-big-banner-li")

//     let data = [];

//     $item.each((index,item) => {
//       const $el = $(item);
//       const $elLink = $el.find(".js-banner-btnqq");
//       // 接收数据 变量保存
//       const dataItem = {
//         cid: $elLink.attr("data-id"),
//         href: $elLink.prop("href"),
//         imgUrl: $elLink.find('img').prop('src'),
//         title: $elLink.prop("title")
//       }
//       //每次都push给data
//       data.push(dataItem);
//     });
//     return data;
//   });
//   await bs.close();

//   process.send(result);

//   setTimeout(() => {
//     process.exit(0);
//   });
// })();