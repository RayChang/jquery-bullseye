![bullseye icon](assets/images/bullseye.png)
# jquery-bullseye
Making your picture absolute center, also scaling and cropping perfectly.

##How to Install
1. This github repository, using `git clone https://github.com/RayChang/jquery-bullseye.git`
2. Using bower `bower install jquery-bullseye --save`
3. Download [zip](https://github.com/RayChang/jquery-bullseye/archive/master.zip)

##How to use
HTML

	<div class="element">
      <img src="yourImage.jpg">
    </div>
or

	<div class="element" data-bullseye-image="yourImage.jpg"></div>

Javascript

	$('.element').bullseye();
	
##default Options
the default options is as follows:

	fadeEffect: true
	effectTime: 0.5