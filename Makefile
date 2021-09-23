include .env
export $(shell sed 's/=.*//' .env)

bash: 
	docker-compose exec web bash

redis: 
	docker-compose exec redis bash -c "redis-cli -p ${REDIS_DEV_PORT}"

dev: 
	docker-compose stop
	docker-compose up

restart: 
	docker-compose up --build	

logs:
	docker-compose logs -f --tail=$* web		
