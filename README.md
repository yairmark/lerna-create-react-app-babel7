This is a sample repository on how to use Lerna, create react app and server side node together. The aim of this setup is to allow a shared component to be defined in one sub-repo and be used by another within the same monorepo. The shared repo also defines constants which are used on both the ui repo (cra-1) and the server repo.

## Getting Started

### After A Fresh Clone

Run the following:

```bash
## Install our dependencies
npm install

## Call the bootstrap script which calls lerna to bootstrap the monorepo
npm run bootstrap
```

### Running the UI and Server

Simply run:

```bash
npm run start
```

The UI can be access from [http://localhost:3000](http://localhost:3000) while the server can be accessed at [http://localhost:3002](http://localhost:3002). The server has the following route (which uses the shared constants from the common module) [http://localhost:3002/users](http://localhost:3002/users).

