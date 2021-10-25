# IU-Library


## Works commands

  <b>$ </b>= document.querySelectorAll(selector);<br>

  <b> .show(selector) </b>=  <b>show</b> selector <br>
  <b> .hide(selector) </b>= <b>hide</b> selector <br>
  <b> .toggle(selector) </b>= if <b>hide</b> then <b>show</b> or if <b>show</b> then <b>hide</b><br>

  <b> .addClass(...selector) </b>= add class in selector<br>
  <b> .removeClass(...selector) </b>= remove class in selector<br>
  <b> .toggleClass(selector) </b>= toggle <b>one</b> class in selector<br>

  ### EventListener
  <b> on('eventName', function) </b>= addEventListener in selector<br>
  Exapmle:
  ```
  $('.active').on('click', sayHello);
    function sayHello() {
    console.log('hello');
  ```
<b> .off('eventName', function) </b>= offEventListener in selector<br>
<b> .click(function) </b>= addEventListener in selector<br>

<b>.html(content)</b>  = innerHTML

### Search

<b>.eq(number)</b>  - Getting a specific button <br>
<b>.index(selector)</b>  - Element number in order among all neighbors of the common parent (Номер элемента по порядку среди всех соседей общего родителя) <br>
<b>.find(selector)</b>  - Finds among all the selected items using a specific selector (Находит среди всех выбранных элементов с помощью определенного селектора) <br>
<b>.closest(selector)</b> - Determining the closest block by a given selector (Определение ближайшего блока по заданному селектору) <br>
<b>.siblings()</b> - By referring to all adjacent elements except the element itself (Ссылаясь на все смежные элементы, кроме самого элемента) <br>

### Effects

<b>.fadeIn(time)</b> - animation <b>show</b> element <br>
<b>.fadeOut(time)</b>  - animation <b>hide</b> element <br>

_______

### CSS styles

#### Buttons

    >container - 1140px

    > btn   - classic btn
    >> btn-primary
    >> btn-success
    >> btn-danger
    >> btn-warning
    >> btn-dark
    >> btn-outline-primary
    >> btn-outline-success
    >> btn-outline-danger
    >> btn-outline-warning
    >> btn-outline-dark
    >> btn-block *- display: block*


#### Display

  >hidden  *- (visibility)*
  >visible
  >d-none   *- (display)*
  >d-block
  >d-flex
  >f-centered  *- (flex)*
  >f-space-around
  >f-space-between

#### Text
  > text-center
  > block-center

#### Font
  > fz-16
  > fz-20   *- (font-size)*
  > fz-24
  > bold
  > thin
  > italic

##### Color
  >text-color-primary
  >text-color-danger
  >text-color-success
  >text-color-warning
  >text-color-dark

#### Margin (px)
  >m10
  >m20
  >mt-10
  >mb-10
  >mr-10
  >ml-10
  >mt-20
  >mb-20
  >mr-20
  >ml-20

#### Padding (px)

  >p10
  >p20
  >pt-10
  >pb-10
  >pr-10
  >pl-10
  >pt-20
  >pb-20
  >pr-20
  >pl-20

#### Sizes  (w - width || h - height)
  >w-50   *- (%)*
  >w-100  *- (%)*
  >h-50   *- (%)*
  >h-100  *- (%)*
  >w-300  *- (px)*
  >w-500  *- (px)*
  >h-300  *- (px)*
  >h-500  *- (px)*