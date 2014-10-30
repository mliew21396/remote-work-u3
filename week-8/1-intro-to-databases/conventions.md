## Conventions

We can use any field names and table names we want, but there are some conventions that we follow for sanity.

1. Table names are pluralized, e.g., "students," "products," "todos," etc.
2. Each row is uniquely identified by an automatically-incrementing integer field called <code>id</code>.  [ActiveRecord migrations](http://guides.rubyonrails.org/migrations.html) do this for you automatically, but you'll have to be explicit when designing your tables by hand.
3. We use snake_case_like_this to name fields, rather than camelCaseLikeThis &mdash; the latter looks weird and out of place in Ruby.
4. Fields that involve dates or times end in <code>&#95;at</code> or <code>&#95;on</code> (<code>created&#95;at</code>, <code>updated&#95;at</code>, <code>completed&#95;at</code>, etc.) unless it's really obvious they already refer to something time-related.  We'd say <code>birthday</code> rather than <code>born_on</code>, for example.
5. When in doubt, make your field and table names as self-explanatory as possible.  Avoid field names like <code>type</code>, <code>kind</code>, <code>status</code>, etc.  They could refer to anything!  Err on the side of clarity, even if it seems verbose.  Other coders will appreciate it, and computers don't care if your field name is 20 characters long rather than 5 characters long.
6. Rails includes <code>created&#95;at</code> and <code>updated&#95;at</code> fields by default, which record when a row is first added to a table and when it was last updated.  This is good record-keeping, so we'll generally include the same fields in our tables.


## Primary Keys

Each row in a database table should have a **primary key**.  This is a field (or collection of fields) which uniquely identify that row from all other rows.  Rails defaults to using a **synthetic primary key**, which is just an arbitrary, auto-incrementing integer usually denoted by the field name `id`.  It's called "synthetic" because it doesn't have any inherent meaning.

The assumption that the primary key is an auto-incrementing integer called `id` is baked deeply into Rails.  Most web apps follow this convention, and we will, too.