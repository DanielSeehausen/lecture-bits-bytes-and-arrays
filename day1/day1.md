# Why lecture/what is it about (section overview)
  - a couple of fundamentals
  - what does it mean to pass by reference and pass by value?
  - want to discuss bits/bytes memory usage
  - transition that into discussing true arrays
  - in comes a vector bjarne you are the man
  - then we forget everything and address javascript's abomination arrays

### Pass by Value/Reference
  - What does it mean?
  - Do some examples in pass-by-what.js (copy and paste from there into node terminal)
  - JS primitives: string, number, boolean, null, undefined, symbol (<-- introduced in es6)
  - what does ruby do with types? so those are 'wrapper classes?'
  - cool thing python does with storing common values


### Bits bytes
  - Well, when we are talking about 'pointing' to the actual value in memory...what are we talking about?
  - Let's talk about actual, physical memory
    - magnetized physical locations when stored
    - a single is a bit
    - a byte is often the standard smallest unit we deal with
    - how many values can we store in a byte?
  - what are types? How are they assigned bytes?
    - civ // sc1 example
    - do we have this limit in JS???
    - So how big are JavaScript number types?! (64 bit! (how many bytes is that?))
    - (in node) var k = 9999999999999999
    - Numbers up to 15 digits long are accurate

### Alright -- we are ready to talk about Arrays and Vectors
  - We are talking GENERAL now -- not javascript!
  - what is an array 'really'?
  - **contiguous memory -- no need for pointers to elements!**
  - talk more about resizing and show it more with array operations react application
  - Q: any ideas on how we can store a sequence of things outside of this contiguous paradigm???
### IN COME LINKED LISTS
  - use that to paint the contrast to linked list
  - show example in react project

### But JS arrays are fake arrays
  - js arrays aren't arrays stop lying to me scientists!
  - but we do have typed arrays!
  - Two prime considerations
    - memory required
    - reducing number of operations
    - etc.
