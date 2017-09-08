/*      chrome.devtools.network.onRequestFinished.addListener(
          function(request) {
            if (request.response.bodySize > 40*1024) {
              chrome.devtools.inspectedWindow.eval(
                  'console.log("Large image: " + unescape("' +
                  escape(request.request.url) + '"))');
            }
      });*/
//$('.gsc-wrapper').toggle();
//$('.gsc-wrapper').show();

 var cb = document.getElementById('cse-hosted'); 
//console.log(cb.innerHTML);

$('.gsc-resultsRoot.gsc-tabData.gsc-tabdActive').hide(); //hide content

var div=document.getElementsByTagName('div');
/*
for(var conetnt in div)
{
    console.log(conetnt);
}*/
for(var i=0;i<div.length;i++)
{
    console.log(div[i]);
}
$(window).load(function()
{
console.log('yeee');
alert('yeee');


});


