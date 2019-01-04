# create-pr

`Trello card` ➡️ `CodeCommit Pull Request` ➡️ `Slack message`


## Install

Create a `create-pr.json` file in your home directory.

``` json
{
  "trello": {
    "appKey": "....",
    "userToken": "....",
    "boards": {
      "sprint": "D2quJQE7",
      "bugs": "k7zvcnbs"
    }
  },
  "codeCommit": {
    "region": "eu-west-1",
    "remote": "origin",
    "targetBranch": "developers"
  },
  "slack": {
    "token": "....",
    "channel": "pull-requests"
  }
}
```

Get the Trello app key from the admin and your user token at [this url](https://trello.com/1/authorize?expiration=never&scope=read,write,account&response_type=token&name=Server%20Token&key=9db1e272ec74b493ee596730c350871e).

Generate a Slack token from [this url](https://api.slack.com/custom-integrations/legacy-tokens). Scroll down to `Legacy token generator` (you must be signed in).

## Usage

In the project directory run `npx sme-create-pr`. You must follow a specific naming conventions for Git branches in order for this to work. That is `developerName/sprint|bug/trelloCardNumber`.
