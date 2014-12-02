# Bootstrap3のSass版

BootstrapのSass版です。通常は [bootstrap-sass](https://github.com/twbs/bootstrap-sass) でやればいいのですが、これだと、Sassを個別に読み込めなかったり、icon-fontがうまく行かなかったので、もろもろをいい感じにしました。

利用するためには関連のファイルを[npm](https://www.npmjs.org/)と[bower](http://bower.io/)を利用して取得してください。
また、コンパイルには[compass](http://compass-style.org/)もしくは[gulp](http://gulpjs.com/)が利用できます。



## 使い方

- クローンする

```
git clone ここのリポジトリ
```

- 必要なパッケージをインストールする

```
npm install
```

- 関連ファイルをダウンロードする

```
bower install
```

- gulpでコンパイルする

```
gulp
```

- gulpで監視する

```
gulp watch
```

- compassで監視する

```
compass watch
```

## cssを編集したい場合

- sassディレクトリの中にある _variables.scss を修正すると、全体の設定を変更できます。
- style.scssにてBootstrapのsassファイルを読み込んでいますので、不要なものはコメントアウトするとファイル容量をダイエット出来ます。
- 追加のcssについては、style.scssに直接追記していくか、もしくは別途scssファイルを制作してstyle.scssから読み込んでください。

## 改善などなど募集中

- やってみた感想
- 改善提案
- ツッコミ
- などなど、お気軽にissueに書いていただければと思います。

## 今後

- WordPressのスターターテーマ [_s](http://underscores.me/)に組み合わせて、使いやすくしたいと思います。

## 謝辞

- gulpファイルの制作にあたり、[ericbarnes / bower.json](https://gist.github.com/ericbarnes/ac3ae075c97c1073869c)を参考にしました。感謝いたします。
