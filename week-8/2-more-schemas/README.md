[Week 8 Home](../)

# U3.W8: More Schemas

## Learning Competencies
-
-
-

## Summary


## Releases

## Release 0: One to One Relationships
One-to-one relationships are used when two things have a single relationship to one another. Essentially, they are a pair.  One example is a country and its capital. A country has a capital city, and the capital city is only in one country. If this were drawn into a schema, it could look something like this:

<pre>
+---------------------+        +-------------------+
|      countries      |        | capital_cities    |
+---------------------+        +-------------------+
| id                  |     /--| id                |
| name                |    /   | name              |
| continent           |   /    | created_at        |
| president           |  /     | updated_at        |
| capital_city_id     |-/      +-------------------+
| created_at          |
| updated_at          |
+---------------------+
</pre>

This design demonstrates a one-to-one relationship because a country can have at most one capital city. The capital city does not need to have a field for it's country id. Using SQL, it would be easy to query the country a capital city belonged to based on this schema.

One-to-one relationships are especially difficult because it's difficult to see when you would use one. For example,  you could create a field for a capital_city_name in the countries table rather than making a separate table for it.

The general rule of thumb is that if you have a relationship where a group of fields can all optionally be empty (signified by `NULL`), you should separate it into a one-to-one relationship.

For the example above, all countries now have capital cities, but prior to the late eighteenth/ early nineteenth centuries, many countries (or places where a group of similar people lived) did not have a capital city. So it would be possible to have a lot of information about the country, and have `NULL` for any `capital_city_name` field.

## Release 1: Your One-to-one Schema
Create your own schema using [SQL Designer](https://socrates.devbootcamp.com/sql) to model a one-to-one relationship. You can create your own or use some of the examples listed [here](http://examples.yourdictionary.com/one-to-one-relationship-examples.html). Each table should have at least four fields. When you are finished creating your schema, take a screenshot, upload it to the imgs directory in this challenge, and link to it in the [my_solution.md](my_solution.md) file.


## Release 2: Many to Many Relationships


## Release 3: Grocery List


## Release 4:


## Release 6: [Reflect](https://github.com/Devbootcamp/phase-0-handbook/blob/master/coding-references/reflection-guidelines.md)
in the reflection section of your [my_solution.md](my_solution.md) file.

## Release 7: [Review](https://github.com/Devbootcamp/phase-0-handbook/blob/master/coding-references/review.md) (Optional)
**Optional but HIGHLY encouraged!**