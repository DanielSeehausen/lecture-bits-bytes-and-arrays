# Overview

This used to be a repo for the cs-concentration I designed for Flatiron to be run in tandem with module 5. As we have long since moved away from that format and it is no longer being taught, I am using it as a repo to hold materials for a lecture I continue to give to students in their final module.

# Central Themes/Goal of Lecture
  - Readability
  - Time complexity
  - Space complexity
  - "Feeling the pain" is something I tried to reference throughout the concentrations. What I mean is that it is hard to match solutions to problems/challenges if you haven't experienced the difficulty/speed issues they solve. When leaving students to work on code/algo challenges, they ideally struggled through them and either almost implemented a solution or implemented a non-ideal solution. This personalizes the problems (what are algorithms without the problems they solve) and frames what we are learning as a tool instead of academic nonsense.


## General lecture notes
  - Introduction Lecture:
    - What is a bit? What is a byte? (Simple drawing of a byte and mapping decimal values/showing powers of 2)
    - What are types? How does Ruby handle types?
      - Use anecdotes "As a kid, I was not programming. Video games were my closest exposure to the actual code, and I remember a few funny things that never made sense until I actually started programming. Now, in hindsight certain behavior and limitations has context" (make it real yeah buddayh):
        - Integer overflow in the original Civilization game: Ghandi's India was the nicest country in the game, and as the game progressed his niceness score would continue to increase. The programming team was storing this variable as an unsigned int. As his 'nice' score increased, eventually it overflowed and reset to 0. All of a sudden Ghandi's nature swapped and he started nuking everyone. While a bug, it tickled everyone so much that they continued to pay homage to the behavior in later Civilization games. Show dank memes this spawned. Students love dank memes: ![](/dank-ghandi.png)
        - Blizzard's Starcraft (one of course you savage) had a seemingly arbitrary limit of 255 on several counters belonging to units in the game. Turns out this was a result of them choosing to allocate a single byte to these variables. (Here I circle back on the byte example that was drawn to illustrate how the sum of all combinations is 255.) Though they did not screw it up like Sid Meier's Civilization, it did put a hard limit on how large it could grow. ![](https://track5.mixtape.moe/tbzqfk.png)

    - In a general sense, what is an array (assuming perfect world typed array).
      - Tie this into the ongoing trending dank meme about "arrays start at 0/1". Why, from a computer science and memory management perspective is it appropriate to start arrays at 0? Describe: when an array is initialized, it's meta/header data has a pointer to a place in memory where the actual contiguous block of memory begins. In order to achieve its O(1) lookup by index, it performs a very simple operation: take the index requested (i.e. arr[1]) and multiply that index by its known data type size (i.e. 1 byte). Then, return 1 unit of array element data (in this case a byte), starting at the place in memory the product from the previous calculation yielded. To tie it back (assuming we are using an array that stores byte sized data): if I were to request arr[0], the computer would know what data to return to me from the contiguous block in memory by doing the following: ```return 1 byte starting at (arr.startPosition + (byte * 0))``` In conclusion, computer scientists weren't just nutbags when deciding arrays should "start at 0" (flash quick image of Richard Stallman).
      - Briefly, how is a JavaScript array different? Why can we throw w/e we want into them? (This is priming them for a transition into linked list) Blast them with a "what do you think this will return?": ```typeof [1, 2, 3]```. Remind them of Array.isArray() (common interview 'gotcha')
      - JavaScript has typed arrays though!: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays
      - Use example of react thing I threw together for how an array may resize in a contrived example (chars can be stored as single bytes, so assume each block represents a single byte in memory. See array-resizing.mov) This primes for both space and time complexity, as we must describe why the array is repositioning when it can no longer grow contiguously, and the obvious cost (represented by a sound and screen shake MAKE IT REAL BUDDAYH) when it must do that: https://github.com/danielseehausen/array-resizing-react. It can be used in real-time, not just shown a video of.

    - Introducing linked Lists
      - Linked lists do not store in contiguous memory!
      - Describe how every node of a linked list is actually (at minimum) two different values (the value of w/e we are trying to store, and a pointer to the next node).
      - Show resizing with the react application
        - Describe the value and the 'pointer' (represented here as an x & y coordinate) separated by the ||.
        - Show how each node points to the next, and how the last node of the linked list always has a 'null' pointer (consequentially how we can determine we are finished iterating through a LL).
        - Note that this is a _singly_ linked list, and why that is an important distinction.
      - Very important: go into where and why linked lists are (academically) worse/better than arrays (e.g. the tradeoffs).
      - Describe how in actuality (though not theory) they don't even outperform arrays in the areas they are assumed to be faster in (See Stroustrup's online lecture on vectors vs. linked lists speeds) because of how computer's are optimized to manage cache values and how hardware plays into actual runtime considerations re: memory management.  

    - Pair or individual work
      - Implement a singly linked list. Provide classes for a Linked List as well as Node.
      - The Linked List should implement methods/attributes for:
        - constructor
        - find(@value)
        - add(value || node insqtance)
        - delete(@value) // remember to change the previous node's pointer
        - getSize (Let them take a crack at this without guidance. this should be incrementing on add node and simply return the class variable that is keeping track of the counter, instead of iterating every time. Use it to describe how iteration can be expensive and how things like this have opportunities to avoid it at the cost of more meta/header data.)
        - bonus: have your linked list insert nodes elements in order assuming we are just doing integers as values. (i.e. if we have [1 - 3 - 7], 4 would be succesfully inserted before 4 and 7) This is important priming for trees and we can later discuss how they do it much better and why (log N lookup)





      - For this I don't provide any guidance beyond the description and video of a linked list. Students do pretty well regardless and I would rather they get 80% of it right and struggle (so we can review optimal solutions the following day together) than know what to do without feeling the pain.
    - (At some point during this I also jumped into the important distinction of passing by reference or by value which is an extremely important distinction that many students aren't really solid on yet. I would pull up interactive JS (via node) and give a few examples when passing javascript types around. The word 'pointer' is used a lot in the specialty and I want to make sure everyone is on board with what we are really saying. They loved the 'why is [1] !== [1]')
  - Student presents discussion questions (one per student):
    - What are the advantages/disadvantages of linked lists beyond what we discussed?
    - What misconception does Stroustrup debunk in his description of LL vs. vector/array runtime in the video?
    - How could we implement the LL find(value) method recursively?
    - What are sentinel nodes?
    - What is a 'loop' in a linked list, why is it bad, and how can we find one programmatically?
