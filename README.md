# metabase-react-poc

## Proof of Concept for Metabase analytics tool use proposal

> **This Proof of Concept is non production ready project, so is not recommended use it on public server any kind.**
### Requirements
> _This PoC is developed on Node v12.22.1 using Docker containers, so is recommended keep this instructions to make it work properly._

* Node v12+
* Docker
* Yarn package manager (recommended)

Steps to deploy project on local machine:
1. Clone [this](git@github.com:agudovitoria/metabase-nodejs-poc.git) repository
2. Download needed Docker containers or install on services
    * [MongoDB](https://hub.docker.com/_/mongo)
    > Remember create a new database and collection to use
    * [Metabase OSS](https://www.metabase.com/start/oss/)
        * `docker run -d -p 3000:3000 --name metabase-analytics-tool metabase/metabase`
    >Use MongoDB database and collection to configure data source
3. Configure required environment variables
    > Can add an `.env`file to the project root to define this variable values.
    * _SERVER_PORT_: Port to listen browser connections
    * _MONGO_HOST_: MongoDB service host
    * _MONGO_PORT_: MongoDB service port
    * _MONGO_DB_: Database name
4. Enter in project folder on a terminal
5. Execute `yarn install` on it
6. Execute `yarn start`
7. Open App in browser (localhost:$SERVER_PORT) to send test events
8. Open Metabase in browser (localhost:3000) to see event metrics

### Dashboards

| App dashboard      | Metabase metrics      |
|------------|-------------|
| <img src="https://i.imgur.com/5RBIWo0.png"> | <img src="https://i.imgur.com/ibuqKrd.png"> |


