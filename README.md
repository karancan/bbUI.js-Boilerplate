bbUI.js-Boilerplate
===================

A boilerplate application built with bbUI.js as a framework to facilitate easy building of BlackBerry10 applications.

> This application will soon be part of the [BB10-Webworks-Community-Samples](https://github.com/karancan/BB10-WebWorks-Community-Samples)

Read on if you want to write the code for your application using a boilerplate as your launch pad. However, there are tools out there such as the [BlackBerry App Generator](http://www.blackberryappgenerator.com/blackberry/) that can create your application for you quickly albeit with less flexibility.

## Step 1 of 3: Before building your application

Now that you've decided to build an application for BlackBerry 10 devices, there are a few steps to be taken in order to ensure that you can build your application successfully:

* For most applications and developers, the use of a service such as [GitHub](http://www.github.com) is recommended. This allows you to track the progress of your application as it is developed, share your code with other developers and handle issue tracking. Since private repositories on GitHub are not free, an alternative to consider would be [Bitbucket](http://www.bitbucket.org).
* Once you have your project repository set up, you can start track your application ideas and requirements using built in issue tracking tools. This helps the [agile](http://en.wikipedia.org/wiki/Agile_software_development) development process.
* To test your applications concept and to make some of your ideas more concrete, it could be useful to prototpe the screens of your application using a tool [such as WireFrameSketcher](http://wireframesketcher.com/). There are several such tools out there depending on what your looking for.
* And finally, some of you first time developers out there may wish to brush up on your [HTML, CSS and JavaScript](http://www.webappers.com/2009/08/10/70-must-have-css3-and-html5-tutorials-and-resources/) skills. Recently, there have been some powerful new features added to HTML (in the form of [HTML 5](http://www.html5rocks.com/)) and to CSS (in the form of [CSS 3](http://www.css3.info/)) so a quick read may be worthwhile.

## Step 2 of 3: Building your application

The easiest way to get up and running with this boilerplate is to:

* Download the [Ripple Emulator](http://developer.blackberry.com/html5/download/) (an extension for [Google Chrome](https://www.google.com/intl/en/chrome/browser/))- this allows you to emulate the BB10 application that you are about to build
* If you are going to be using Git to aid development, download it [here](http://git-scm.com/downloads)
* To access the boilerplate using the Ripple Emulator, follow the instructions [here](http://developer.blackberry.com/html5/documentation/accessing_a_local_project_in_ripple_1948645_11.html)
* If you are using Git, `cd` into your RippleSites folder and then type this into the Git shell: `git clone https://github.com/karancan/bbUI.js-Boilerplate.git`
* If you are not using Git, download the boilerplate as a `.zip` [here](https://github.com/karancan/bbUI.js-Boilerplate/archive/master.zip)

### Boilerplate contents

The following is a description of all files found in this project based on whether they are necessary for BB10 applications or not.

#### Mandatory/Recommended files and folders

* <b>config.xml:</b> specifies the applicatio name, application permissiongs, application starting point, author, description, namespace.
* <b>img/icon-114px-114px.png:</b> the application icon that will be visible on the phones menu screen. Must be 114px by 114px. 
* <b>img/splash-1280px-768px.png</b> and <b>img/splash-768px-1280px.png:</b> the application splash screens. The image that is 1280px by 768px is the horizontal orientation and the image that is 768px by 1280px is used in the vertical orientation. It is not necessary to have both. If there is no splash screen specified, the phone will revert to the default BB10 splash screen. If you are supporting multiple BB10 devices, you may want to add splash screens that cater to the screen sizes of each device type.
* <b>index.html:</b> this is the starting point of the application. Loads all the necessary scripts and stylesheets and then loads in content pages through AJAX.
* <b>menu.html:</b> this if the first content page to be loaded in through index.htm and contains a list of options. 
* <b>files in js directory:</b> all the scripts used by the applcation. It is not neccessary to have them in this folder but it makes things more organized. The bbui.js framework is in this folder.
* <b>files in css directory:</b> all the stylesheets used by the application. It is not necessary to have them in this folder but it makes things more organized. The bbui.css stylesheet that complements bbui.js is in this folder.
* <b>files in img directory:</b> contains all the images that are used including the app icon, the splash screen image and the native [BlackBerry 10 icons](http://developer.blackberry.com/design/bb10/) 

#### Optional files

* <b>user-interface.htm:</b> examples of some interesting UI elements as well as a link back to the [bbUI.js Wiki](https://github.com/blackberry/bbUI.js/wiki) which has documentation of all UI elements supported by it.
* <b>storage-websql.htm:</b> examples of how to use a WebSQL database within your application i.e. creating tables, adding data to tables, removing data from tables and selection data from tables.
* <b>storage-localstorage.htm:</b> examples of how to use HTML5 localstorage within your application i.e. setting and retreiving key value pairs.
* <b>invocations-social.htm:</b> examples of how to invoke and send text and other data from your app to apps like acebook, Twitter, BBM, etc.
* <b>invocations-system.htm:</b> examples of how to invoke system level features such as Settings, Wifi, Help menu, etc.
* <b>info-guide.htm:</b>
* <b>info-help.htm:</b>
* <b>README.md:</b> description and documentation of the project on GitHub.

## Step 3 of 3: After building your application

Now that you are satisfied with the way your application has come about, it is time to get it into the [BlackBerry App World](http://appworld.blackberry.com/). 

* It would be good to start off by requesting a [Vendor account](https://appworld.blackberry.com/isvportal/) as it can sometimes take a couple days for your Vendor account to be approved. You have to have a Vendor account in order to publish your application.
* While waiting for your Vendor account to be approved, you will want to make sure that you have your icons ready (as specified in Step 2). You should also get some screenshots of your application ready. When submitting the app to the App World, you will have the option to add these screenshots (these screenshots will be displayed in the App World on your product page).
* During the process of submitting your app to the App World, if you are representing a company, you would have to have a company logo. If you are an individual, you can submit your personal logo.
* If your app has any content that is the property of another invidual or organization, be sure that you have the right to use this content and that you have given credit where due.
* Download the [WebWorks SDK](http://developer.blackberry.com/html5/download/sdk/). The Ripple Emulator needs this to package your app.
* Register for your signing keys [here](https://www.blackberry.com/SignedKeys/codesigning.html). After you have recieved your signing keys, follow the instructions [here](http://developer.blackberry.com/html5/documentation/signing_setup_bb10_apps_2008396_11.html) to set up your computer to be able to sign your application.
* The Ripple Emulator helps you to quickly build and package your app without the need for any command line tools. Instructions are provided [here](http://developer.blackberry.com/html5/documentation/packaging_your_app_in_ripple_1904611_11.html).

You should now have your packaged application in the form of a `.bar` file- this is what you will submited to the App World using your [Vendor account](https://appworld.blackberry.com/isvportal/).

## Authors

* [Karan Khiani](https://github.com/karancan)

## Credit

### Disclaimer

THE CODE HERE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE