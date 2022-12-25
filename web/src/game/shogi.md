## クラス・コンポーネント図

### 初期実装

先手と後手が自身の駒を動かすので、直感的に実装できる。
拡張性がある（気がしている。）

```
review
moveは駒をnextPlaceに動かす方が自然。
{角1: 'place, owner'} 型の方が検索しやすい。
```

```mermaid
classDiagram
  class Board
  Board : Player sente
  Board : Player gote
  Board : view()
  Board : move(currentPlace, nextPlace)

  class Player
  Player : +Koma[] komas
  Player : -move(currentPlace, nextPlace)

  class Sente
  Sente : +move(currentPlace, nextPlace)
  class Gote
  Gote : +move(currentPlace, nextPlace)

  class Koma
  Koma : +KomaType komaType
  Koma : +Place place

  class Place
  Place : +[number, number] place

  Board <.. Player

  Player <|-- Sente
  Player <|-- Gote

  Player <.. Koma
  Player <.. Place
  Koma <.. Place
```

### 今後の課題

駒全体を固定し、駒の配置のみを変更する。データ構造は単純にできる。
同じ駒が、複数の配置を持つことがなくなる。

```mermaid
classDiagram
  class Board
  Board : Koma[] komas
  Board : view()
  Board : move(currentPlace, nextPlace)

  class Koma
  Koma : #KomaType komaType
  Koma : +Place place
  Koma : +Owner owner
  Koma : +move(currentPlace, nextPlace)

  class Place
  Place : +[number, number] place

  Board <.. Koma

  Koma <.. Place
```

盤の配置を固定し、配置されている駒のみを変更する。データ構造は単純にできる。
同じ配置が、複数の駒を持つことがなくなる。

```mermaid
classDiagram
  class Board
  Board : KomaPlace[] places
  Board : view()
  Board : move(currentKomaPlace, nextKomaPlace)

  class KomaPlace
  KomaPlace : #Place place
  KomaPlace : +KomaType komaType
  KomaPlace : +Owner owner
  KomaPlace : +move(currentKomaPlace, nextKomaPlace)

  class Place
  Place : +[number, number] place

  Board <.. KomaPlace

  KomaPlace <.. Place
```
