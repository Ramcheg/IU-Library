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
  ``` $('.active').off('click', sayHello);
    function sayHello() {
    console.log('hello');
  ```
<b> .off('eventName', function) </b>= offEventListener in selector<br>
<b> .click(function) </b>= addEventListener in selector<br>

<b>.html(content)</b>  = innerHTML

### Search

<b>.eq(number)</b>  - Getting a specific button
<b>.index(selector)</b>  - Element number in order among all neighbors of the common parent (Номер элемента по порядку среди всех соседей общего родителя)
<b>.find(selector)</b>  - Finds among all the selected items using a specific selector (Находит среди всех выбранных элементов с помощью определенного селектора)
<b>.closest(selector)</b> - Determining the closest block by a given selector (Определение ближайшего блока по заданному селектору)
<b>.siblings()</b> - By referring to all adjacent elements except the element itself
  (Ссылаясь на все смежные элементы, кроме самого элемента)




