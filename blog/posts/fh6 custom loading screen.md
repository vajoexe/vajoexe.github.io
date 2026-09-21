have you ever gotten bored of the default loading transition screens in forza horizon 6?

if yes, then this blog post is for you! 

this is how i made my own transition screens relatively easily.

this guide works on the ms store, xbox app, xbox gamepass, and steam version so if you play on pc ive got you covered!

ㅤ

## ok so first we need to establish a few rules.

when you are going to be creating your animation it needs to be 1080p 30fps so you dont have any weird problems.

you will export your animation as png RGBA files.

aim for around 3sec for the intro, 1.5sec for the loop animation, and around 3sec again for the outro.

## 1. install all the tools needed

so the most important thing later down the line is going to be actually the encoder for the game, which RAD Video Tools is used. get it [here](https://www.radgametools.com/bnkdown.htm).

have your animation/production program installed that can export as png RGBA file.

## 2. make the animation

just basically have fun! just remember to stick to those time constraints as closely as possible. 

one is going to be the intro, so the thing that you see first (~3sec)

the second one is going to be a loop, the thing that repeats when the game is loading something (~1.5sec)

the third one is going to be the outro. basically the fadeout to the loaded scene. (~3sec)

## 3. export the animation

be sure to have your resolution be 1920x1080 at 30fps as said before, and the export are going to be png RGBA (the A stands for transparency), so one png file will be one frame of your animation.

## 4. convert your animation to a format the game understands

have your png files somewhere easy to access, then open RAD Video Tools that you installed. you should see this ui pop up. it may look intimidating, but dont worry its super easy.
![[/images/fh6_custom_loading_screen/Screenshot_20260921_174700.png]]

navigate to the folder you have the image sequence in, then click on the first frame file, then click "Bink it!" now you should see this popup automatically. click on yes.
![[/images/fh6_custom_loading_screen/Screenshot_20260921_174914.png]]
now this scary big thing of a user interface appears. but dont worry, you only have to change two things. force the frame rate control to 30, and check "Use alpha plane unchanged from input file.", then just click "Bink" and let it do its thing.
![[/images/fh6_custom_loading_screen/Screenshot_20260921_174955.png]]
after a bit it should say done, that means it spit out a working file for fh6! repeat this same process for the other two files. 
![[/images/fh6_custom_loading_screen/Screenshot_20260921_175214.png]]
when you have all the files, navigate to your forza horizon 6 install directory, go to media\UI\Videos. there you have some files you want to replace. 

the horizon_festival series of files are the "Horizon Festival" transition screens,

and the discover_forte series of files are the "Discover Japan" transition screens.

you can replace both of them by just renaming the original files with a prefix like "original_(filename)", and then renaming your own custom files to the ones you want to change.

this is how mine turned out, clearly accepted by the game. (even if the behind the scenes stuff that is usually hidden is fully shown here.)

![[/images/fh6_custom_loading_screen/gif/source.webp]]

and that is it, now you have your own custom loading transition screen!

note; updates might replace your custom files, i recommend keeping a copy somewhere just in case.

