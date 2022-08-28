exports.init = function () {
try{

var requestjarviswsrnodejs = require('request') ; var cheerio = require('cheerio')

console.log('passage par wikiiiii stopppppppppp')

var temp=JarvisIA.reco ; var reg=["de ","qui est","recherche","  ","qui était"]

for(var a=0;a<reg.length;a++){ temp=temp.replace(reg[a],"") }

temp=temp.replace('€','euros') ; temp=temp.replace("œ","oe") ; temp=temp.trim()
//temp=temp.replace(new RegExp(" ", 'ig'),"-")

var url="https://www.google.fr/search?q="+temp
console.log(url)

        requestjarviswsrnodejs({'uri':url, 'headers':{'Accept-Charset': 'utf-8'},'encoding':'binary'}, function (error, response, html) {
             var $ = cheerio.load(html);
            
             var search=$(".BNeawe .iBp4i").text()
             console.log(search," first ")
             var search1=$(".BNeawe .s3v9rd").eq(0).text()
             console.log(search1," second ") ;
             if (search.length!==0){console.log('FIND : ',search) ; JarvisIASpeech(search);return}
             if (search1.length!==0){console.log('FIND : ',search1) ; JarvisIASpeech(search1);return}
             else(JarvisIASpeech("je n'ai rien trouvé"))
        });//fin request

return

}catch(err){console.log(err)}
}
