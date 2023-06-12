# run docker compose file, then run prisma migrations, then start api & ui servers
start: dcompose
	pnpm run start

# run docker compose file, then start api & ui servers
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
