
# GITHUB-CLI

Command Line Application created for easier access to github users and repository info using the Github API
https://docs.github.com/en/rest/.

Created with
- Node.js


# Features

The following commands are available

Displays github-cli credits

```sh
github-cli credits
```

Displays current version of the github-cli

<pre> <b> version</b></pre>

```sh
github-cli version
```

Creates configuration

```sh
github-cli create
```

Displays user information - Name, Company, Email, Number of followers

```sh
github-cli username **username**
```

Displays list of user repositories

```sh
github-cli repositories **username**
```

Displays specific repository info

```sh
github-cli repostiory **username** / **repository**
```

Displays list of repository pull requests

```sh
github-cli pull-requests **username** / **repository**
```

Displays list of repository issues 

```sh
github-cli issues **username** / **repository**
```

Displays list of repository packages
```sh
github-cli package 
```

Displays repository license info - Name, URL

```sh
github-cli licence **username** / **repository**
```

Displays repository releases

```sh
github-cli releases **username** / **repository**
```
