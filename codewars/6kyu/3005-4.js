function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = [];
``
items.push(new Item("+5 Dexterity Vest", 10, 20));
items.push(new Item("Aged Brie", 2, 0));
items.push(new Item("Elixir of the Mongoose", 5, 7));
items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Item("Conjured Mana Cake", 3, 6));

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    let exp = /(.*aged\sbrie.*)|(sulfuras)|(backstage\spasses)|(conjured)/i;
    let str = items[i].name.match(exp);
    str = str === null ? "temp" : str[0].toLowerCase();

    if (str !== "sulfuras") {
      let decrease = items[i].sell_in <= 0 ? 2 : 1; // CHANGED

      if (str === "aged brie") {
        let oldQ = items[i].quality;
        items[i].quality += decrease;
        items[i].sell_in -= 1;
        if (oldQ < 50 && items[i].quality > 50) {
          items[i].quality = 50;
        }
      } else if (str === "backstage passes") {
        items[i].sell_in -= 1;
        let oldQ = items[i].quality;

        if (items[i].sell_in <= 0) {
          items[i].quality = 0;
        } else if (items[i].sell_in <= 5) {
          items[i].quality += 3;
        } else if (items[i].sell_in <= 10) {
          items[i].quality += 2;
        } else {
          items[i].quality += 1;
        }
        if (oldQ < 50 && items[i].quality > 50) {
          items[i].quality = 50;
        }
      } else if (str === "conjured") {
        items[i].quality -= decrease * 2;
        items[i].sell_in -= 1;
      } else {
        items[i].sell_in -= 1;
        items[i].quality -= decrease;
      }

      if (items[i].quality < 0) {
        items[i].quality = 0;
      }
    } else {
      if (items[i].quality < 0) {
        items[i].quality = 0;
      }
    }
  }
}
