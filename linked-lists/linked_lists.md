Linked List Visualization: https://visualgo.net/en/list?slide=1

What are the advantages of linked lists over arrays and hash tables?
Let's think about the most common operations that we perform and how linked lists compare to arrays and hash tables.

1. Lookup
- Arrays: O(1)
- Hash Tables: O(1)
- Linked Lists: O(n)

2. Insert
- Arrays: O(n) why? because we need to shift the elements like in an array, we can just add the element to the end of the list.
- Hash Tables: O(1) 
- Linked Lists: O(N) worst case scenario, we need to traverse the entire list to find the position to insert the new element.

3. Delete
- Arrays: O(n) once again, we need to shift the elements during deletion in an array.
- Hash Tables: O(1)
- Linked Lists: O(N) worst case scenario, we need to traverse the entire list to find the position to delete the element.

4. Append
- Arrays: O(1)
- Hash Tables: O(1)
- Linked Lists: O(1)


5. Prepend
- Arrays: O(n)
- Hash Tables: O(1)
- Linked Lists: O(1)