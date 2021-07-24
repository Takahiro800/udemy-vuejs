# docker file
[DockerでVue.jsの環境を作るまでの手順](https://zenn.dev/tet0h/articles/docker-vuejs)
# 初めてのvue開発
- `yarn run dev`

## componentの場合はdataも関数にして渡す
- 理由はオブジェクトを渡すと、使いまわしているコンポーネント内で同じメモリを共有して参照してしまい、同じデータを表示してしまう

## ローカル登録とグローバル登録