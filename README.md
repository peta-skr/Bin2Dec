# Bin2Dec

[florinpop17/app-ideas](https://github.com/florinpop17/app-ideas) の課題「[Bin2Dec](https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Bin2Dec-App.md)」（Tier 1-Beginner）をReactとTypeScriptで解いたもの。8桁までの2進数を入力すると10進数に変換して表示する。アプリ本体は `my-app/` にある。

## 課題の要件

| 要件 | 状態 |
| --- | --- |
| 1つの入力欄に2進数を8桁まで入力できる | 満たす（`maxLength` と正規表現 `^[01]{1,8}$` で確かめる） |
| 0と1以外を入力したら知らせる | 満たす。Convertボタンを押したときにエラーメッセージを出す |
| 結果を1つの出力欄に10進数で表示する | 満たす |
| 制約: 入力した桁を配列に入れない | 満たす。文字列を添字で後ろから読む |
| 制約: 各桁の値を1つの数学関数で求める | 満たす（`Math.pow(2, i)`） |
| ボーナス: 桁数の制限をなくす | 未実装 |

## 動かし方

```sh
cd my-app
npm install
npm run dev      # Vite の開発サーバ
```

## 使った技術

- React 19、TypeScript、Vite
- Jest、React Testing Library（`my-app/src/Bin2Dec.test.tsx`）。ただし設定ファイル名の不一致（`jest.config.js` は `jest.setup.ts` を読むが、実際のファイルは `hest.setup.ts`）と、期待する表示文字列のずれがあり、現状のテストは通らない
