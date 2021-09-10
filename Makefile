include .env
export $(shell sed 's/=.*//' .env)

bash: 
	@docker exec -it ${APP_NAME} bash

redis: 
	@docker exec -it ${REDIS_HOST_NAME} bash -c "redis-cli -p ${REDIS_DEV_PORT}"

dev: 
	docker-compose stop
	docker-compose up

restart: 
	docker-compose up --build	

logs:
	@docker logs -f --tail=$* ${APP_NAME}		
