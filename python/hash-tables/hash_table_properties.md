What are Hash Tables?

In JavaScript, a hash table is an object that stores key-value pairs.
In Python, a hash table is a dictionary that stores key-value pairs.
In Java, a hash table is a Map that stores key-value pairs.

Hash tables are extremely useful and are used widely in programming. They are used in databases, caching, and more.

For key-value pairs, the key is being used as an index. Remember that in Arrays, we don't set an index for a particular value in the array. For HashTables, we have the ability to choose what index to assign a value to. 

One limitation of HashTables is that every input has to go through a hash function, which means that the hash function has to be fast. Assuming that the hash function is fast, the time complexity of accessing a value in a hash table is O(1).


---
Let's take a further look at how HashTables work.
- When it comes to inserting a value into a hash table, the time complexity is O(1).
- When it comes to accessing a value in a hash table, the time complexity is O(1).
- When it comes to deleting a value in a hash table, the time complexity is O(1).

If you want to see a visual representation of how HashTables work, you can check out this website: https://www.cs.usfca.edu/~galles/visualization/OpenHash.html
One thing that we notice by using that tool is that hash functions are not perfect as they can cause collisions. Let's take a look at what a collision is.

A collision is when two different inputs have the same hash. This is a problem because it means that we can't store two different inputs in the same index. This is why we need to use a technique called chaining. However, chaining makes the time complexity of accessing a value in a hash table O(n).

To solve this problem, we can use a technique called chaining. Chaining is a technique where we store the key-value pairs in the same index in a linked list. This way, we can store multiple key-value pairs in the same index.


---
In JavaScript, other than an object, we also have a Map and a Set.
- A Map() allows you to store any data type as the key, while an object only allows strings as the key. Another benefit of using a Map() is that it maintains insertion order.
- A Set() is very similar to a Map(), but it only stores keys.
At the end of the day, a Map and a Set are both hash tables.
--
What are hash buckets?
