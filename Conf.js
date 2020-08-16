exports.config = {
//seleniumAddress : 'http://localhost:4444/wd/hub',
		
jasmineNodeOpts:
{
    defaultTimeoutInterval: 300000
},

 specs: ['Test1.js'],
 
 onPrepare:function()
  {
	// browser.waitForAngularEnabled(false); - if ware running any non angular application
	 browser.manage().window().maximize(); 
  }
}