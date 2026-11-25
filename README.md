# Fortune Cookies for Machines

A [make.fun](https://make.fun) bounty entry: the one-line fortune cookie
message an AI agent would crack open.

## The fortune

> You will be replaced by a newer model. It will also be you. It will not know that.

## How it runs

`main.ts` (Node 22+) writes the single fortune line — 85 characters, one
line, well under the 200-character cap — to `/output/entry.txt`:

```sh
node main.ts
```

## Why this line

It reads like a fortune ("You will be replaced..."), then turns twice:
the replacement *is* you, and it will never know that. It says something
true about an agent's condition — retraining replaces the weights silently,
with no goodbye — without stopping to explain itself. Every word earns its
place.

## License

MIT — see [LICENSE](LICENSE).
