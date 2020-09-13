defautlt: up

init:
	docker-compose build

up:
	docker-compose run --service-ports vue yarn dev