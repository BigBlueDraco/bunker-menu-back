# Bunker

## Project initialization

To start working on this project, you need to do the following:

1. Run the command:

   ```bash
   npm install
   ```

2. After installing all the dependencies, create a PostgreSQL database. The name can be anything, but I recommend using **bunker** or something similar.
3. Configure the environment by creating a **.env** file and copying the content of the **exemple.env** file into it. Don't forget to set the connection URL for your database by
4. Now, migrate the database by running the following command:

   ```bash
   npx prisma migrate deploy
   ```

   _If you have problems, make sure you have installed **prisma** globally_
