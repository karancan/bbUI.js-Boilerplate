bbUI.js-Boilerplate
===================

A boilerplate application built with bbUI.js as a framework to facilitate easy building of BlackBerry10 applications.

Read on if you want to write the code for your application using a boilerplate as your lanch pad. However, there are tools out there such as the [BlackBerry App Generator](http://www.blackberryappgenerator.com/blackberry/) that create your application for you quickly albeit with less flexibility.

<hr>

## Step 1 of 3: Before building your application

Now that you've decided to build an application for BlackBerry 10 devices, there are a few steps to be taken in order to ensure that you can build your application successfully:

* For most applications and developers, the use of a service such as [GitHub](http://www.github.com) is recommended. This allows you to track the progress of your application as it is developed, share your code with other developers and also track issues. Since private repositories on GitHub are not free, an alternative to consider would be [Bitbucket](http://www.bitbucket.org).
* Once you have your porject repository set up, you can start track your application ideas and requirements using built in issue tracking tools. This helps the [agile](http://en.wikipedia.org/wiki/Agile_software_development) development process.
* To test your application idea and to make some of those ideas more concrete, it could be useful to prototpe the screens of your application using a tool [such as WireFrameSketcher](http://wireframesketcher.com/). There are several such tools out there depending on what your looking for.
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
* <b>img/splash-1280px-768px.png and img/splash-768px-1280px.png:</b> the application splash screens. The image that is 1280px by 768px is the horizontal orientation and the image that is 768px by 1280px is used in the vertical orientation. It is not necessary to have both. If there is no splash screen specified, the phone will revert to the default BB10 splash screen.
* <b>index.html:</b> this is the starting point of the application. Loads all the necessary scripts and stylesheets and then loads in content pages through AJAX.
* <b>menu.html:</b> this if the first content page to be loaded in through index.htm and contains a list of options. 
* <b>js directory:</b> all the scripts used by the applcation. It is not neccessary to have them in this folder but it makes things more organized. The bbui.js framework is in this folder.
* <b>css directory:</b> all the stylesheets used by the application. It is not necessary to have them in this folder but it makes things more organized. The bbui.css stylesheet that complements bbui.js is in this folder.
* <b>img directory:</b> contains all the images that are used including the app icon, the splash screen image and the native [BlackBerry 10 icons](http://developer.blackberry.com/design/bb10/) 

#### Optional files

* <b>README.md:</b> description and documentation of the project on GitHub.

## Step 3 of 3: After building your application

### Coming soon

## Authors

* [Karan Khiani](https://github.com/karancan)

## Credit

### Disclaimer

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE 