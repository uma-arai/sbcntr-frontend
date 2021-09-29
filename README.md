# sbcntr-frontend

書籍用のフロントエンドアプリケーション用のダウンロードリポジトリです。

1. Run below commands to launch db
    
    ```bash
    docker-compose up
    ```

2. Login to mysql on docker by root and create user for migration

    ```bash
    $ docker exec -it mysql_host mysql -u root -p
    Enter password: 
    Welcome to the MySQL monitor.  Commands end with ; or \g.
    Your MySQL connection id is 14
    Server version: 5.7.34 MySQL Community Server (GPL)
    
    Copyright (c) 2000, 2021, Oracle and/or its affiliates.
    
    Oracle is a registered trademark of Oracle Corporation and/or its
    affiliates. Other names may be trademarks of their respective
    owners.
    
    Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.
    
    mysql> create user 'sbcntr-migrate'@'%' identified by 'sbcntrmig';
    Query OK, 0 rows affected (0.02 sec)
    
    mysql> GRANT ALL PRIVILEGES ON *.* TO 'sbcntr-migrate'@'%' WITH GRANT OPTION;
    Query OK, 0 rows affected (0.00 sec)
   
    mysql> exit
    Bye
    ```

3. Migrate

    ```bash
    $ npm run migrate:dev

    > sbcntr-frontend@1.0.0 migrate:dev xxx/sbcntr-frontend
    > DATABASE_URL=mysql://sbcntr-migrate:sbcntrmig@127.0.0.1:3306/sbcntrapp npx blitz prisma migrate dev --preview-feature

    You are using beta software - if you have any problems, please open an issue here:
    https://github.com/blitz-js/blitz/issues/new/choose
    
    Environment variables loaded from .env
    Prisma schema loaded from db/schema.prisma
    Datasource "db": MySQL database "sbcntrapp" at "127.0.0.1:3306"
    
    Already in sync, no schema change or pending migration was found.
    
    ✔ Generated Prisma Client (2.19.0) to ./node_modules/@prisma/client in 99ms
    ```
