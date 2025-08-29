### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

<!-- Answer To The Question Number 1: -->

getElementById select a element by a specefic id.
getElementsByClassName select element by its className.
querySelector select the first element of same class.
querySelectorAll get/select the all the elements of a class as nodelist.

<!-- Answer To The Question No 2: -->

First of all i will use a DOM mathod document.createElement(); than i will take tag name as a argument.

<!-- Answer To The Question Number 3: -->

It is a defult prosses of DOM.
When a button clicked or or triggerd a element, first it done the event then it will bubbles up to the root element of DOM.

<!-- Answer To The Question Number 4: -->

Event Delegation is a tecnique where you attach an event listener to a parent element and handle event by child element.
It is useful for performnce and more readable code.

<!-- Answer To The Question Number 5: -->

preventDefault() is a method whice stops the default behavoiur of an event from happening.And stopPropagation() is a method whice is use to stop the event from bubbling up.
