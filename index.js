const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const url  = 'https://www.reddit.com/r/Bitcoin/';


puppeteer
.launch()
.then((browser) => {
  return browser.newPage();
})


.then((page) => {
  return page.goto(url).then(function(){
    return page.content()
  });
})
.then(html => {
  const $ = cheerio.load(html);
  const subRedditDataPoints = []
  $('._3_HlHJ56dAfStT19Jgl1bF ._3XFx6CfPlg-4Usgxm0gK8R').each(function(){
    subRedditDataPoints.push({
      online: $(this).text()
    })
    $('.nEdqRRzLEN43xauwtgTmj ._3XFx6CfPlg-4Usgxm0gK8R').each(function(){
      subRedditDataPoints.push({
        members: $(this).text()
      })
    })
  })
$('#IdCard--CakeDay--undefined--t5_2s3qj').each(function(){
  subRedditDataPoints.push({
    timeStamp: new Date()
  })
})


  console.log(subRedditDataPoints)

})
.catch(function(err){
  console.log(err)
})


