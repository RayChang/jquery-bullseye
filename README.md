![bullseye icon](assets/images/bullseye.png)
# jquery-bullseye
Making your picture absolute center, also scaling and cropping perfectly.

##How to Install
1. Clone this repository via command line `git clone https://github.com/RayChang/jquery-bullseye.git`
2. Install through Bower `bower install jquery-bullseye --save`
3. Download zip file [zip](https://github.com/RayChang/jquery-bullseye/archive/master.zip)

##How to use
Baisc HTML structure

	<div class="element">
      <img src="yourImage.jpg">
    </div>
Use HTML Data attribute 

	<div class="element" data-bullseye-image="yourImage.jpg"></div>

Programatically initialize with JavaScript

	$('.element').bullseye();
	
##Default Options
the default options is as follows:

	fadeEffect: true
	effectTime: 0.5
