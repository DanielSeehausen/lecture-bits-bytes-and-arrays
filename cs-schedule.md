# Overview

# Central Themes/Goal of Concentration
### Three considerations when writing data structures and algorithms:
  - Readability
  - Time complexity
  - Space complexity
  - "Feeling the pain" is something I tried to reference throughout the concentrations. What I mean is that it is hard to match solutions to problems/challenges if you haven't experienced the difficulty/speed issues they solve. When leaving students to work on code/algo challenges, they ideally struggled through them and either almost implemented a solution or implemented a non-ideal solution. This personalizes the problems (what are algorithms without the problems they solve) and frames what we are learning as a tool instead of academic nonsense.

# Format
  - Lectures are kept short and meant for introducing a concept and making it real (either via example/amping them up re: how awesome it is, etc.) Day one is the longest.
  - Group reviews are for seeing why/why not solutions work and refactoring. This is where we can get the most mileage out of teaching consideration for the readability/space/time complexity. Someone with a couple ideal solutions should be at the keyboard for this and quickly guiding the group towards refactored solutions with explanations for the changes.
  - Group work/individual work on problems is given to either explore a challenge related to something that was introduced in the short concept lecture OR to expose students to a problem so they can _feel_ the problem before seeing the known algorithm solution to it. The former helps them solidify concepts, the latter helps them recognize problems that may have ideal common solutions
  - During the specialties (with groups < 7 people) I would assign very very minor topics that students would present to their classmates the following morning (think a 2 minute stand up description). I used to get student buy-in and transition yesterday's problems to today's. Not sure if its appropriate with how things will be changing (especially with discussion questions) but I listed them in the schedule.

# Schedule (This was for the multi-day concentrations, each day was about 1.5 hours of group time)
## Day 1
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

## Day 2
  - Students do their brief summaries of their questions
  - Throw up a brave students code (ask them to self elect) on the big screen and review the methods with the class
    - Encourage participation
    - Refactor where appropriate
    - Ask for group buy in before moving on to the next method "How does this look? Can we improve it? Are there any corner cases or considerations we should be handling?"
    - Thank student who showed code, reiterate that its not easy presenting your code up for everyone to pick through, and that they did a great job (pick someone else other days)
  - Conclude how, while crap it turns out linked lists are pretty awful even where they are supposed to be good (think Stroustrup's description), they are still perhaps the third? (behind associative arrays/hashmaps/hashes/dicts, and arrays) data structure to know because of how they are an integral part of more complex data structures (think trees in terms of pointers to next nodes, graphs, etc.)
  - Introducing search! (this just a short intro, because we work together, then introduce sorting algorithm)
    - Why is it important?
    - What is linear search?
      - What is the time complexity of linear search?
      - Describe how we are talking about worst case here. Difference between actual performance and worst case? "well, if the card happened to be the one at the start/middle of the collection one was iterating through etc. etc."
    - Ask students to brainstorm a better search implementation assuming a sorted array
    - Bust out binary search
      - (I have a deck of cards which I use a few times, starting here)
      - Show contrived example of binary search with cards. Everyone huddles around a table, it's fun.
      - Describe time complexity of binary search (worst case log n)
      - WTF does log n even mean? Well if O(n) means the length of the collection (where n is a function of the collection's length) then O(log n) will take log base 2 of the length of the collection (the base two is implied almost always re: comp-sci time complexity) iterations until completion (or better!). But that is nonsense gamer jargon. In lay person terms: "With every iteration, or 'search' we are halving the total amount of possible results! Then we search that new collection (the previous half) and get the same 'halving' effect on that collection!"
      - Query "when do we know we are finished with binary search?"
        - they say when it's found
        - they maybe say when it's not found
        - "from an implementation standpoint, at what point do we _know_ it is not found?"
        - Couple of ways to skin that cat. Easiest: check if collection size <= 1 and if element is not target OR check if collection size == 0
  - Ask them to take a crack at binary search in class (groups or pairs)
  - Implement binary search together on big screen.
    - This is really a perfect/simple example to get them started on an algorithm. It has excellent starting off points for understanding recursion, how to return values out of a recursive stack, and it has deeper opportunity to describe a _major_ 'gotcha' that might be taken for granted by students (e.g. slicing an array, which unnecessarily creates new arrays).
    - Though lost now, I went through three iterations of a recursive solutions to this (from not-great to great) rapidly. We would slap out a solution, refactor, refactor, and find an agreeable final solution. I referenced my solution on SO: https://stackoverflow.com/questions/38323787/how-to-create-a-binary-search-with-recursion
  - With little time left, introduce the importance of SORTING! and how often it occurs. Prepped them to explore insertion sort and merge sort on the following day with a _very_ general overview of the two.
  - There are a couple videos linked in day 3 that I use a brief glimpse of to get them amped up for sorting.

## Day 3
  - Insertion sort!
    - Used cards, showed insertion sort.
    - Pretty straightforward and boring sort!
  - Described merge sort in depth, showed with cards. Usually this takes 2 or more examples (but the cards illustrate the sort very well).
  - This is a great next step algorithm for them to work on. We can build on our recursive implementation ability as merge sort makes use of the call-stack to manage itself. Again, it is a good example of returning recursive calls.
  - Describe in-place vs. out of place sort/assign to student for the student presentation questions.
  - After we work on this in groups/pairs then do as a class until solution complete (have students break up then bring them together, slap up some groups work in progress on big screen and complete together). Get tests written and ready to go for this one so we don't have to waste time or have an incomplete solution.
  - Time for the big hit with the students (NEED SOUNDS):
    - https://www.youtube.com/watch?v=kPRA0W1kECg
    - https://www.youtube.com/watch?v=y9Ecb43qw98
    - I parse out the minute/second timers and do that youtube url trick to open up directly to a time in a video for both of these for both insertion sort and merge sort. We look at the actual example and dissect what is happening and relate it back to our code implementation. Then, just because people freaking love it and it's the sexiest sort, I show them radix sort in both videos. As proof, here is the first comment on the color wheel one "
Admit it, you're here for Radix.﻿" Radix Sort, particularly Radix LSD in place on the color wheel, is a serious crowd pleaser...

## Day 4
  - Go into trees *briefly*, but I can't justify students building out implementations for them. To actually approach a meaningful use of them requires too much of a time sink and we have too much to cover and more valuable stuff to look at. I aim for them to understand generally what is occurring so they aren't intimidated when learning more on their own, but having them implement how to balance a binary tree is not worth the time investment. Relate them back to linked lists, describe how a balanced tree could use an array for _much_ more efficient data storage than objects. Show visually look up time and how it is O(log n) for a balanced tree, and potentially O(n) for perfectly imbalanced tree. Relate trees (non binary) to their implementation for spell checkers on their smart phones.
  - What is a queue, what is a stack? FILO vs FIFO? Which is a stack?
  - Describe a matrix/2d array
  - show how it is accessed and why its a nice way of representing 2d space (this is to build towards BFS/DFS)
  - Describe BFS (I use a grid on whiteboard, for these and use this website for BFS http://qiao.github.io/PathFinding.js/visual/). Also useful to use that site to show how there are far more efficient search algorithms. Fun for them to play with later.
  - Describe DFS and students break up to implement it. Usually they need more time to work on this and I leave them to it.
## Day 5
  - Depending on how the students are doing on the DFS implementation, we do almost a whole class of working together on this problem:
  https://en.wikipedia.org/wiki/Four_color_theorem
  in context of a matrix, where each cell has an integer 1-9 assigned to it. The result should return a new matrix (or the same one with color's attributed) where cells adjacent to other cells with the same integer should be colored the same (but no same color groups of non-same integers should be touching.)
  - This is a good problem to pull together some of the things we have done over the past several days. We are incorporating several of the discrete solutions/considerations we studied into one larger programmatic solution to a famous problem.

# Considerations/Justifications of content
  - need to finish this -- went to the Q&A instead
