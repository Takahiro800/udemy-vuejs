# docker file
[DockerでVue.jsの環境を作るまでの手順](https://zenn.dev/tet0h/articles/docker-vuejs)

# vscode で保存時に自動補完を走らせる
[VS Codeでprettier拡張機能を使ってvueファイルをフォーマットする | 株式会社FRINGE - みんなが楽しく働ける社会へ -][ref1]

# 初めてのvue開発
- `yarn run dev`
- `yarn run serve`

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

## v-bind
- 省略形は `:`で開始する
- `v-slot` は`#`で省略することができる

## component タグを利用してコンポーネントを動的に切り替える
```javascript
    <component :is="currentComponent"></component>
```
- 切り替える度にコンポネントはdestroyされる
- componentタグを`keep-alive`タグで囲んであげることでdestroyedを防ぐことができる
- ライフサイクルは`acrivated`,`deactivated`が使われる

# v-model
- フォームを構築する際に利用する機能
- `v-on`と`v-bind`をまとめて一行で書くためのシンタックスシュガー
- 以下のようにフォームを作成すると、リアルタイムに入力値を反映させる
```javascript
      <label for="title">タイトル</label>
      <input id="title" type="text" v-model="eventData.title" />
      <p>{{ eventData.title }}</p>
```
- フォーカスを外した際に反映したい場合は`v-model.lazy`とすれば良い
- DOM操作に`input`,`change`がある
## 修飾子`.number`
- inputタグで`type="number"`とすることで,数値のみの入力に制限することはできるが、値としてはstringで処理されてしまう。それを防ぐために`v-model.number`としてあげる

## trim
- 入力値の先頭と末尾の空白をのぞいてくれる
- <p>タグでは、表現されないが`<pre>タグ`を使うことで、実際の空白も表現してくれる

## v-model
- v-modelの初期値を`data`で設定する
- あとは`type`によってv-modelがよしなにやってくれる
``` javascript
      <p>参加費</p>
      <input type="radio" id="free" value="無料" v-model="eventData.price" />
      <label for="free">無料</label>
      <input type="radio" id="paid" value="有料" v-model="eventData.price" />
      <label for="paid">有料</label>
```

### select-box
```javascript
      <select v-model="eventData.location">
        <option v-for="location in locations" :key="location">{{ location }}</option>
      </select>
      <p>{{ eventData.location }}</p>
```

# カスタムコンポーネントにv-modelを当てたい
- 理解できてないけど、使えるらしい
- カスタムコンポーネント側で調整してあげる必要がある？

# オリジナルのvue-directiveを作成する
- main.jsに記述する
- 例）`v-border`を自作する場合
```javascript
Vue.directive("border", {
  bind() {
	//   ディレクティブが初めて対象の要素に紐ついた時
  },
  inserted() {
	//   親Nodeに挿入されたとき
  },
  update() {
	//   コンポーネントが更新される度。子コンポーネントが更新される前
  },
  componentUpdated() {
	//   コンポーネントが更新される度。子コンポーネントが更新される後

  },
  unbind() {
	//   ディレクティブが紐ついている要素から取り除かれたとき
  },
});
```
以下のように、関数を記述することもできる
```javascript
Vue.directive("border", function(el, binding){

})
// el,bindingは`bind`と`update`
```
- ５つのメソッドを定義する
- 引数は
  - el
  - binding
  - vnode
- bindとupdateはよく使う。基本的には同じ処理を書くことが多い

## 引数`el`について
- そのカスタムディレクティブが紐づく要素のこと

## 引数`binding`について
- 渡したいデータ・オブジェクトのことを指す
- 複数渡した場合はオブジェクトで渡す











[ref1]:(https://fringe.co.jp/vs-code%E3%81%A7prettier%E6%8B%A1%E5%BC%B5%E6%A9%9F%E8%83%BD%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6vue%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%83%E3%83%88/)