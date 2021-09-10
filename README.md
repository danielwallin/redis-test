#### Description

Simple demo of a Redis cache layer infront of a node application.

To run the application, create a .env file with following:

```
APP_NAME=$name
APP_PORT=$port
REDIS_HOST_NAME=$name
REDIS_DEV_PORT=$port
```

#### Commands

`make dev`

Start the node and redis container.

`make redis`

Create an interactive shell in the redis container.

`make logs`

Tail logs of the node container.
