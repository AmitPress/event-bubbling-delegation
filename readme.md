### A simple demonstration on how the event bubbling and delegation happens

In javascript, event bubbling is a very crucial concept. 

As we can see, when a click event is triggered on the button, the event bubbles up to the outter div as well. This can cause serious issues. With our app we can see the issue in itself. When we have defined click for separate elements to trigger on separate individual clicks, the click is triggered on all the elements that are in the parent level.

This way various discrepancy can occur.

It is recommended that we handle the event with proper delegation.