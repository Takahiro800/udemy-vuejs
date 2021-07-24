# docker file
[DockerでVue.jsの環境を作るまでの手順](https://zenn.dev/tet0h/articles/docker-vuejs)

# vscode で保存時に自動補完を走らせる
[VS Codeでprettier拡張機能を使ってvueファイルをフォーマットする | 株式会社FRINGE - みんなが楽しく働ける社会へ -][ref1]

# 初めてのvue開発
- `yarn run dev`

## componentの場合はdataも関数にして渡す
- 理由はオブジェクトを渡すと、使いまわしているコンポーネント内で同じメモリを共有して参照してしまい、同じデータを表示してしまう

## ローカル登録とグローバル登録

## scopedでコンポーネント単位でスタイルを当てる
``` javascript
<style scoped>
	div {
		border: 1px solid red
	}
</style>
```

## 親子コンポーネントのデータの受け渡し
- props 使う
  - 命名規則は
    - 指定時にはキャメルケース
    - 属性として利用する際にはケバブケース


### propsの渡し方
- 配列でもオブジェクトでも渡すことができる
-
```javascript
  props: {
    number: {
      type: Number,
      // 必須か？
      required: true,
	//   defaultの設定、requiredと共存できない
		default: 100
    },
  },
```

- defaultでオブジェクトや配列の場合は関数でreturnしなければならない

## $emitはカスタムイベントを定義しているもの
- propsで配列やオブジェクトを渡す場合は参照渡しになる。
- カスタムイベントを定義する際は、ケバブケースで命名する
  - カスタムイベントは定義する時以外はjs側で使われることがないために、htmlに合わせてケバブケースで命名する

## slotで子コンポーネントにhtmlタグを伝えることができる
- slotが空の場合、フォールバックコンテンツが使われる
- slotを複数渡したいときに `v-slot`で渡すことができる
- 名前付きスロットと呼ばれる
- `template v-slot:名前`で囲ってない部分はデフォルトスロットとして、活用される。名前がついてないものはデフォルトスロットとして、自動でひとまとめにする
- v-slotはtemplateで使用しないとエラーになる
-













[ref1]:(https://fringe.co.jp/vs-code%E3%81%A7prettier%E6%8B%A1%E5%BC%B5%E6%A9%9F%E8%83%BD%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6vue%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88/)