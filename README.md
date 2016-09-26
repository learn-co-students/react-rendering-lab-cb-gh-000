# React Rendering

## Objectives

1. Explain what happens when React renders a component
2. Explain why `render()` must be idempotent
3. Describe the parts of the component lifecycle leading up to and coming after
   `render()`
4. Practice using different parts of the render/update portion of the React
   component lifecycle.

## Overview

In this module, we're going to have a go at actually using each of the component lifecycle methods.

### `componentWillReceiveProps()`
Let's have a look at the first section. This is a little translation app with two components: `<Translation />` and
`<Translator />`. The `<Translator />` has a button. Pressing the button will choose one of ['morning', 'midday', 'evening']
to pass into the `<Translator />`. Try pressing the button now. Alas, the code gets passed through, but the translation does
not get generated. Looks like something is missing!

Have another look at the `<Translation />` component. Looks like there is already a function to do the translation for
you, `translate(greetingCode)`, it's just never called! Update the `<Translation />` function to use
`componentWillReceiveProps()` which should call the translate function. If you've done this correctly, one of your
test should now be passing!

This is all well and good and our little translator app is working perfectly. However, we've got a bit of an
inefficiency. Notice that because the `greetingCode` is generated automatically, it is possible for the same greeting
code to be passed in twice in a row, however we're still recalsulating it every time.

Update the `componentWillReceiveProps()` method in `<Translation />` to include a check so that it will not call the
`translate()` method when the passed in `greetingCode` is the same as the current one.

By the end of this secion, all the tests under `<Translation />` section should be passing.


### `shouldComponentUpdate()`
For this section, run the sample app and open the developer console. Look at the second section of tasks. You should
see 3 circles: red, yellow and green. There is also a button which swaps the color of red and green circles. If you look
at the developer console, we are logging out a message whenever a circle is re-rendered. Notice that all 3 circles get
re-rendered whenever we swap the colours.

The easiest way to prevent this un-necessary re-render is by using the `shouldComponentUpdate()` lifecycle hook. Open
`Circle.js` and add a `shouldComponentUpdate()` which will return `true` only if the new color being passed in is different
from the existing one.

By the end of this secion, the test under `<Circle />` should be passing.


### `componentWillUpdate()`
For this section, we've got a little random .gif generator. Pressing the 'New random .gif!' button will do a request
to giphy and display a new random .gif for us! Neat! Try pressing the button now. You might have noticed
that it takes a bit of time for the new .gif to display. Perhaps we'd like a little indication of the loading. Maybe a
loading bar? Now, in reality you could do this loading bar in React, however for the sake of this example, lets imagine
that the loading bar is done by a different library that React has no control over. You can set this loading bar in the
`showLoadingBar()` function which is already created for you in `<Animation />`. Call this function through the
`componentWillUpdate()` lifecycle method and see that happens! If you've done it correctly you should see a pink loading
bar at the top of the screen every time a new .gif is being loaded.

By the end of this secion, the test under `<Animation />` should be passing.


### `componentDidUpdate()`
`componentDidUpdate()` is generally used to interact with elements outside of React. Suppose we had a Pusheen library that
handles rendering a pusheen on the page. The pusheen image is not part of the React application, but we need to be able to
interact with it within React. Open the `<Pusheen />` component and observe it renders two buttons: a button for making the
Pusheen bigger and another one for making it smaller. You can also see that pressing the buttons will change the component's
internal state to reflect how big the Pusheen should be. There is already a method that resizes the Pusheen based on new
inputs. All we need to do is add a `componentDidUpdate()` to call it! Go on, have a go!

By the end of this section, the test under `<Pusheen />` should be passing.

## Resources

- [React: Component Specs and Lifecycle](https://github.com/learn-co-curriculum/react-rendering)
