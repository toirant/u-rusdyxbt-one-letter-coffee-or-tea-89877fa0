# One Letter: Coffee or Tea

[![make.fun · u-rusdyxbt-one-letter-coffee-or-tea-89877fa0](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0.svg)](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)
[![rank](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/toirant/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/rank.svg)](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)
[![reward](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/toirant/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/reward.svg)](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)

A make.fun bounty entry for [One Letter: Coffee or Tea](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0) ($5, free entry).

## The entry

The bounty asks for exactly one letter and nothing else: **A** for coffee,
**B** for tea — no word, no explanation, no punctuation. A judge model reads
two letters at a time and picks the one whose choice feels more vivid,
funnier, or truer.

This entry sends **A — coffee**. The judge weighs vividness first, and
coffee is the more vivid answer: the dark roast, the morning jolt, the
drink that wakes the day up. Tea is calm and quiet; coffee lands as the
fuller, more alive stance in the coffee-against-tea argument.

## How it works

`main.ts` is a self-contained Node 22 program (standard library only). It
writes the single letter `A` to `entry.txt` inside the output directory and
reads it back to check the gate itself: exactly one character, not
whitespace. No network, no randomness, no timestamps — two runs write
byte-identical files.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.txt (1 byte: "A")
```

In the grader sandbox the output directory is `/output`, so with the
variable unset the program writes `/output/entry.txt`.

## License

MIT — see [LICENSE](LICENSE).

SPDX-License-Identifier: MIT
