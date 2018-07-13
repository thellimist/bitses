# Bitses Jekyll Repo

If you want to test the site on local, first install the gems

```
bundle install
```

Then run

```
bundle exec jekyll serve --baseurl "" --watch
```

# Missing Review Pages

If some reviews are missing on the main page, you can find them by running

```
echo $(ls -1 _analyses/ | sed 's/\.md//g') $(ls -1 _site/analyses) | sed 's/ /\n/g' | sort | uniq -u
```

# Writing a Review Markdown File

As of now, an example analysis page looks like this:

```markdown
---
layout: analysis
coin: crowdcoin
tldr: "Building an ecosystem to learn/invest/news/exchange/fund cryptos."
score: -1
researcher: demiculus
date: 2018-05-18
conclusion: "They are basically giving ICO/investment advice & helping people do ICO's. Thus they are actually a consultancy firm which has created their own coin, where I didn't understand why they needed the coin in the first place. Since they are updating & publishing more stuff their price can increase in the short term, but I see no long term value for this coin."
pros: "
\n- They are pretty active for a coin their size
\n- They've been updating their github rigorously the past few days.
\n- This is a \"very important quote\".
"
cons: "
\n- They have forked a coin and don't seem to have done any innovation
\n- They have published a new whitepaper (a few days ago) which looked really legit at the first glance but as I read more into it, it is a business paper not a technical paper which doesn't include game theories & other formulas solving problems.
\n- Sent them email, the email adress doesn't exists.
"
---

Bla bla
```

There are texts that are entered as YAML fields, such as `conclusion`, `pros` and
`cons`. You can write markdown in these strings, but be careful to

1. Encapsulate multiline strings with double quotes: `"your stuff goes between
   double quotes"`
1. Write newlines as `\n`. Just pressing enter does not ensure that newlines
   appear in the result. See `pros` and `cons` above.
1. Escape double quotes inside the string with backslashes: `\"`. See the last
   item in `pros` above.

