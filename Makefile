
dev: dcompose
	pnpm run dev

# run the docker compose file
dcompose:
	docker-compose up -d

stop:
	docker-compose down --remove-orphans 

# delete. everything.
nuke:
	docker-compose down --volumes --remove-orphans 
