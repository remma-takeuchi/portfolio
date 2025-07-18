# はこピタ

「はこピタ」は、収納ケースや棚をサイズ・素材・色などの条件で検索・比較できるモバイルアプリです。  
ニトリ、無印良品、DAISOなど複数のブランドやECサイトの商品をまとめて一括検索でき、自宅の収納スペースにぴったりのアイテムを見つけることができます。

**ストアリンク**: [AppStore](https://apps.apple.com/jp/app/id1644135792), [GooglePlay](https://play.google.com/store/apps/details?id=net.ddns.rtapps.hako_pita)

---

## 着眼した課題

私が引っ越しや新生活で家の収納を考える際に、**収納スペースと収納ケースのサイズが合わずに困った**経験がありました。
- 棚の奥行きや高さが合わず、「買ったけど入らなかった」という失敗
- 買い物時、収納ケースを購入したいが、自分の収納スペースのサイズを忘れてしまった
- 店舗やECサイトを回らないとサイズや材質の違いを比較できない

このことから **「自分にあった収納商品をもっと簡単に見つけられたら」** と強く感じました。

また、SNS等で調べると多くの方が同じ悩みを持っていることがわかりましたが、当時この悩みを解決できるようなサービスはありませんでした。

---

## 解決アプローチ

以下の機能を搭載し、「収納スペースを可視化」し、「最適な収納アイテムを選ぶ」流れをアプリ上で完結できるようにしました。
- 自分の収納スペース（棚や押入れなど）を、写真＋サイズ＋メモで記録
- 記録したサイズをもとに、複数ブランドの収納アイテムを一括検索・比較
- 気になるアイテムはお気に入り登録し、一覧で管理・比較

---

## 技術構成と工夫

- **フロントエンド**
  - Flutter（Dart）でクロスプラットフォーム開発（iOS / Android）
- **バックエンド**：
  - AWS（API Gateway, Lambda, RDS）＋ Python / FastAPI
  - Firebase Firestore（ユーザーの棚データや設定情報の保存）
  - OpenAI API を活用し、収納アイテムの説明文から「分類タグ」や「検索補助情報」を自動生成
- **分析・運用**：
  - Firebase Analytics / Remote Config によるユーザー行動分析と A/B テスト
  - RevenueCat によるサブスクリプション管理・収益化
  - AdMob による広告収益化

---

## グロースのための取り組み

- **機能追加・改善**：ユーザレビュー・問い合わせで寄せられる意見を参考に、継続的な機能追加・改善を実施
- **ASO（App Store Optimization）対策**：AppTweakツールを活用し、キーワード最適化・スクリーンショット改善を継続的に実施
- **SNS・インフルエンサー活用**：プロモーションコードを活用し、インフルエンサーによる投稿や、紹介ツイートによる自然拡散を促進
- **メディア対応**：テレビ番組や雑誌からの取材依頼にも柔軟に対応し、**第三者視点からの信頼性向上**に注力

---

## 成果と反響

- 累計ダウンロード：**70万超**
- 月間アクティブユーザー：約**7万人**
- App Store
  - 日本AppStoreで、総合ランク#3、ショップカテゴリランク#2を獲得
  - レビュー数1,600件以上、平均★4.2以上の高評価で、「無駄な買い物が減った」などの声も多数寄せられています。
- 複数のメディア（テレビ・雑誌）からの取材・掲載実績あり

---

## 今後の展望

今後は日本国内の利用者だけでなく、アメリカ（リリース済み）や韓国など**海外市場での展開**に注力します。  
また、検索結果の精度向上やレコメンド強化のため、引き続きAI技術やユーザー行動データを活用した改善にも注力していきます。
