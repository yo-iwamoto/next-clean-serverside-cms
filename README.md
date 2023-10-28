# cms-example

## サーバーサイド

クラスを使用しない簡潔なクリーンアーキテクチャ。

```
action ← service ← repo
```

それぞれの関数への依存注入のため、ファクトリー関数を export する形式。

## フロントエンド

App Router。  
サーバーサイドへは、Server Component または Server Actions で `action` を通してのみアクセスする。
