docker build --no-cache -f SQL\Dockerfile.PostgreSql -t hhh-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t hhh-java/app ../../..
