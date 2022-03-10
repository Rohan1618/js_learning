/*function x()
{

    for (var i =1; i<=5; i++)
    {

        function close(i)
        {
            setTimeout (function()
            {
                console.log(i);
            }, i * 1000);
        }
        close(i);
    }
    console.log("Namaste Javascript");

}

x();*/
function logTabs(tabs) {
    console.log(tabs)
  }
  if (typeof browser === "undefined") {
    var browser = chrome;
}
  browser.tabs.query({currentWindow: true}, logTabs)
  function logCookie(c) {
    console.log(c)
  }
  
  function logError(e) {
    console.error(e)
  }
  
  let setCookie = browser.cookies.set(
    {url: "https://developer.mozilla.org/"}
  );
  setCookie.then(logCookie, logError)