INSTRUCTOR NOTES:

I generally have a non-mirror setup for the lecture
this is more an outline for me to stay on queue

there are videos that are backup in case one can't get:
`https://github.com/DanielSeehausen/array-resizing-react`
running, but I haven't had a problem or heard complaints so far. (`npm install & npm start`)

the pass-by-what in snippets is used in the early sections, to play with some assumptions/reality differences. (here I display an empty terminal running node while looking at the snippets on my screen to make sure I don't make a fool of myself)

the starcraft and dank-ghandi images are to augment the discussion around what a type really means re: reserved memory, by talking about fun examples of type bounds and integer overflow. the starcraft example was because certain values only incremented to 255, and the ghandi one was because his nice score incremented, then overflowed, and he became a jerk and started nuking everyone in game.

then the visual representations I generally do alongside a whiteboard/chalkboard representation of linked lists. helps to make the point of the cost of resizing an array/fragmented memory, etc. There are a lot of things not complete about the example (i.e. in the linked list memory blocks, they shouldn't be able to hold as large of integers as the array example, because of the overhead of holding the pointer to next element as well). Stuff like that should be explored on the fly, depending on student interest. We are assuming a singly linked list, where the nodes own their pointers, not some external map.

if there is somehow time left over, I try to do some pair/group coding on implementing a rudimentary linked list. I give them the template, then ask them to slack me solutions after some time and put it up on the big screen and explore it!

# Why lecture/what is it about (section overview)
  - a couple of fundamentals
  - what does it mean to pass by reference and pass by value?
  - want to discuss bits/bytes memory usage
  - transition that into discussing arrays
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
  - what is an array really?
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
