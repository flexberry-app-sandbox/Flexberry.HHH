docker build --no-cache -f SQL\Dockerfile.PostgreSql -t hhh/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t hhh/app ../..
