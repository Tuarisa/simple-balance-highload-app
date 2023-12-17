# simple-balance-highload-app

In order to configure your environment variables, you should copy the `.env.example` file under the name `.env`. You should then fill in this file with your Postgres database connection parameters.

For example, your `.env` may look something like this:

```markdown
APP_PORT=3000
DB_HOST=your_host
DB_USER=your_user
DB_PASS=your_password
DB_NAME=your_database
```

Make sure to replace `your_host`, `your_user`, `your_password`, `your_database` with your actual Postgres database details.

The application will initialize with a migration that creates the `users` table and inserts an initial user row.

To update a user's balance, make a POST request to `http://localhost:3000/user/update-balance` with the following parameters in your request body:

`userId` The id of the user you wish to update (id of first user should be 1 after migrations passed),

`amount` The amount to add or subtract from the user's balance,

Below is an example of such request:
```javascript
fetch('http://localhost:3000/user/update-balance', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    userId: user_id_goes_here,
    amount: integer_amount_goes_here
  }),
});
```