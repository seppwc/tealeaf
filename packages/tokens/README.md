# Tealead

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

<center>
<img src="https://github.com/Phl3bas/Tealeaf/blob/main/assets/tealeaf-primary.svg" alt="tealeaf logo"/>
</center>
<center>A Beautifully modular Design System</center>
<br>
 <hr>
<br>

## @tealeaf/tokens

tokens provides the user with a stylesheet containing a set of design tokens (css custom properties/css variables), these tokens then give the user a curated set of values to use in their project. This gives the developers more consistancy when reaching for values for

1. colors
2. sizes
3. eases
4. radius'
5. box shadows
6. gradients (to be added)

### sets and scales

for reference in the rest of the document. We need explain the difference between what we define as `sets` and `scales`

we have decided to split token naming convensions into two catagories, `sets` : a defined grouping of curated values (which can be futher broken down into `numeric` and `named`); and `scales` : a linearly progressing set of values. The reason for doing so is to make the token names as easy to recall from memory to lower the need for developers to constantly crawl the docs just to remind themselves of the name value for a specific token.

`scales` will range from `0 - XX` incrementing by 1;
`numeric sets` will range from `000 - X00` incrementing by 100
`named sets` each value will have a specific associated name, this is used where a name for the value makes more associative sense than a number (eg eases)

### 1. Colors (numeric set)

Tealeaf provides users with a curated spectrum of colors to chose from, instead of wildy picking colors from a color picker, we provide a 10 scale tonal sets for Red,Pink,Purple,Indigo,Blue,Teal,Green,Yellow and various greys (grey, warm-grey and cool-grey)

color tokens follow the format of:

`--tl-{color}-[number 000 - 900]`

eg

`--tl-teal-500`
`--tl-indigo-900`

color sets range from `000` to `900` scaling in 100's `000` being the lightest shade and `900` being the darkest

the one exception for this is black and white, which scales from `000` to `300`

### 2. Size (scale)

Tokens also provides a sliding pixel scale going from 0px - 108rem (1rem = 16px), this helps the developer to pin down the distances, spacing and font sizes they want to use in a more refined, controlled and consistant manner across their project.

our sliding scale goes from 0 to 30, following a modified minor scale

scale tokens follow the format of

`--tl-size-[number 0 - 30]`

eg

`--tl-size-0` = `0px`

`--tl-size-7` = `0.5rem`

`--tl-size-10` = `1rem or 16px`

`--tl-size-13` = `2rem`

`--tl-size-22` = `18rem`

### 3. Eases (named set)

Tokens provides a wide range of curated set of cubic bezier eases for developers to use out of the box. These are all mathematically based easing curves and the names associated with the values are based on those mathematical formulas.

ease types available are

`sine`

`circ`

`cubic`

`quad`

`quart`

`quint`

`expo`

`back`

the naming convension for eases is

`--tl-ease-{easeName}-[in/out/inout]`

eg

`--tl-ease-quint-in`

`--tl-ease-quad-out`

`--tl-ease-circ-inout`

### 4. radius' (named-set)

We provide a named set of border radius, that conform to the reset for the design system scalings

token naming format goes as follows

`--tl-radius-[xs/sm/md/lg/xl/2xl/3xl/round]`

eg

`--tl-radius-none`

`--tl-radius-md`

`--tl-radius-round`

### 4. box-shadows (scale)

Box shadows are reguarly used in modern web design to aid providing visual heirarcy and depth within a page.

Tealeaf provides a curated collection of box shadows which have had inspiration drawn from my design systems and sites.

token naming format goes as follows

`--tl-shadow-[0-8]`
`--tl-insetshadow-[1-4]`

### 5 Gradients (to be included)
