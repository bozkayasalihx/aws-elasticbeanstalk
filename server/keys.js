module.exports = {
    redisHost: process.env.REDIS_HOST,
    redisPort: process.env.REDIS_PORT,
    pgUser: process.env.PGUSER,
    pgHost: process.env.PGHOST,
    pgDatabase: process.env.PGDATABASE,
    pgPassword: process.env.PGPASSWORD,
    pgPort: process.env.PGPORT,
};

// worker:
//   build:
//     dockerfile: Dockerfile.dev
//     context: ./worker
//   volumes:
//     - /app/node_modules
//     - ./worker:/app
//   environment:
//     - REDIS_HOST=redis
//     - REDIS_PORT=6379
