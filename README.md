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
<b>.fadeToggle(time)</b>  - animation <b>hide</b> or <b>show</b> element <br>

_______

### CSS styles

#### Buttons
##### Components btn
  >container *- 1140px* <br>

  > btn   *- classic btn* <br>

  >> btn-primary  <br>
  >> btn-success  <br>
  >> btn-danger <br>
  >> btn-warning  <br>
  >> btn-dark <br>
  >> btn-outline-primary  <br>
  >> btn-outline-success  <br>
  >> btn-outline-danger <br>
  >> btn-outline-warning  <br>
  >> btn-outline-dark <br>
  >> btn-block *- display: block* <br>


#### Display

  >hidden  *- (visibility)* <br>
  >visible  <br>
  >d-none   *- (display)* <br>
  >d-block  <br>
  >d-flex <br>
  >f-centered  *- (flex)* <br>
  >f-space-around <br>
  >f-space-between  <br>

#### Text
  > text-center <br>
  > block-center <br>

#### Font
  > fz-16 <br>
  > fz-20   *- (font-size)* <br>
  > fz-24 <br>
  > bold  <br>
  > thin  <br>
  > italic  <br>

##### Color
  >text-color-primary <br>
  >text-color-danger  <br>
  >text-color-success <br>
  >text-color-warning <br>
  >text-color-dark  <br>

#### Margin (px)
  >m10  <br>
  >m20  <br>
  >mt-10  <br>
  >mb-10  <br>
  >mr-10  <br>
  >ml-10  <br>
  >mt-20  <br>
  >mb-20  <br>
  >mr-20  <br>
  >ml-20  <br>

#### Padding (px)

  >p10  <br>
  >p20  <br>
  >pt-10  <br>
  >pb-10  <br>
  >pr-10  <br>
  >pl-10  <br>
  >pt-20  <br>
  >pb-20  <br>
  >pr-20  <br>
  >pl-20  <br>

#### Sizes  (w - width || h - height)
  >w-50   *- (%)* <br>
  >w-100  *- (%)* <br>
  >h-50   *- (%)* <br>
  >h-100  *- (%)* <br>
  >w-300  *- (px)*  <br>
  >w-500  *- (px)*  <br>
  >h-300  *- (px)*  <br>
  >h-500  *- (px)*  <br>


_______
### Components

#### Dropdown

*Exapmle* (html) <br>
<b>Required:</b><br>
(id="dropdownMenuButton") and (data-toggle-id="dropdownMenuButton") <br>
```
<div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
    <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
        <a href="#" class="dropdown-item">Action</a>
        <a href="#" class="dropdown-item">Action #2</a>
        <a href="#" class="dropdown-item">Action #3</a>
    </div>
</div>
```
*Exapmle* for Server <br>
where <b>$('.wrap').html(...)</b> - Server <br>
```
$('.wrap').html(
    `
    <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
        <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
            <a href="#" class="dropdown-item">Action</a>
            <a href="#" class="dropdown-item">Action #2</a>
            <a href="#" class="dropdown-item">Action #3</a>
        </div>
    </div>
`
);
$('.dropdown-toggle').dropdown();
```


#### Card

*Exapmle* (html) <br>
```
<div class="card">
    <img class="card-img"
        src="https://images.pexels.com/photos/556666/pexels-photo-556666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="photo">
    <div class="card-body">
        <div class="card-title">Card title #2</div>
        <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem labore quo alias!Amet,corrupti nihil nobis beatae illo maxime vitae dolores magni commodi, repellendus eaque odit esseiste veniam architecto?</p>
        <a class="btn btn-primary" data-toggle="modal" data-target="#exempleModal" href="#" >Link to</a>
    </div>
</div>
```


#### Modal

*Exapmle* (html) <br>
<b>Calling modal:  [data-toggle="modal"]</b><br>
<b>Target modal:  [data-target="#exempleModal"]</b><br>
```
<div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
    <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
        <a href="#" class="dropdown-item">Action</a>
        <a href="#" class="dropdown-item">Action #2</a>
        <a href="#" class="dropdown-item">Action #3</a>
    </div>
</div>
```


