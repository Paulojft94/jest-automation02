# DESOFT I - Lab Classes Support Project

Look at the docs folder for the documentation.

# How to prepare the environment?

```shell
$ npm install
```

# How to automatically compile the TypeScript files?

## With continual watch

```shell
$ tsc -w
```

# How to run the code for a file?

```shell
$ node dist/js/<file>.js
```

# How to run Jest Tests?

```shell
$ npm run test
```

Using a continual approach

```shell
$ npm run test-watch
```

# Mutation Testing for TypeScript

The installation steps are not required for this project. You can skip to the Run Stryker section.

# Configuring Mutation testing with Stryker

Either install stryker globally

```shell
$ npm install -g stryker-cli
```

or locally:

```shell
$ npm install --save-dev @stryker-mutator/core
$ npm install --save-dev @stryker-mutator/jest-runner
$ npm install --save-dev @stryker-mutator/typescript-checker
```

## Configure Stryker

If you want to configure Stryker, run the following command:

```shell
$ stryker init
```

Otherwise, look at the configuration file already provided on this project stryker.conf.json

## Git Ignore Stryker folder

Stryker also changes the .gitignore file to ignore the stryker folder: .stryker-tmp

## Run Stryker Mutation when globally installed

```shell
$ stryker run
```

## Run Stryker when locally installed

```shell
$ npx stryker run
```

# Who do I talk to about this repository?

Nuno Bettencourt
