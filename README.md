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
