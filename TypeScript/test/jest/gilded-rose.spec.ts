import { Item, GildedRose } from '@/gilded-rose';


/*describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('fixme');
  });
});     */

describe('Normal item test', () => {

  it('Should return the name, sellIn and quality values of the object pre-sellIn date', () =>{
    const test_item_1 = new GildedRose([new Item('Generic Test Item', 2, 20)]);
    const generic_normal_test_item = test_item_1.updateQuality();
    expect(generic_normal_test_item[0].name).toBe('Generic Test Item');
    expect(generic_normal_test_item[0].sellIn).toBe(1);
    expect(generic_normal_test_item[0].quality).toBe(19);
  })

  it('Should return the correct updated sellIn and quality values for on sellIn date', () => {
    const test_item_1 = new GildedRose([new Item('Generic Test Item', 1, 19)]);
    const generic_normal_test_item = test_item_1.updateQuality();
    expect(generic_normal_test_item[0].sellIn).toBe(0);
    expect(generic_normal_test_item[0].quality).toBe(18);
  })

  it("Should return the corret updated sellIn and quality values for post-sellIn date", () => {
    const test_item_1 = new GildedRose([new Item('Generic Test Item', 0, 18)]);
    const generic_normal_test_item = test_item_1.updateQuality();
    expect(generic_normal_test_item[0].sellIn).toBe(-1);
    expect(generic_normal_test_item[0].quality).toBe(16);
  })

  it("Should return the corret updated quality value for approaching post zero quality", () => {
    const test_item_1 = new GildedRose([new Item('Generic Test Item', 0, 1)]);
    const generic_normal_test_item = test_item_1.updateQuality();
    expect(generic_normal_test_item[0].quality).toBe(0);
  })
  it('Should return the correct updated quality value zero quality', () => {
    const test_item_1 = new GildedRose([new Item('Generic Test Item', 3, 0)]);
    const generic_normal_test_item = test_item_1.updateQuality();
    expect(generic_normal_test_item[0].quality).toBe(0);
  })
})

describe('Aged Brie test', () => {

  it('Should return the name, sellIn and quality values of the aged brie pre-sellIn date', () =>{
    const test_item_1 = new GildedRose([new Item('Aged Brie', 2, 0)]);
    const generic_normal_test_item = test_item_1.updateQuality();
    expect(generic_normal_test_item[0].name).toBe('Aged Brie');
    expect(generic_normal_test_item[0].sellIn).toBe(1);
    expect(generic_normal_test_item[0].quality).toBe(1);
  })

  it('Should return the correct updated sellIn and quality values for on sellIn date and quality equals 50', () => {
    const test_item_1 = new GildedRose([new Item('Aged Brie', 0, 50)]);
    const generic_normal_test_item = test_item_1.updateQuality();
    expect(generic_normal_test_item[0].sellIn).toBe(-1);
    expect(generic_normal_test_item[0].quality).toBe(50);
  })
})

describe('Backstage passes to a TAFKAL80ETC concert test', () => {

  it('Should return the name, sellIn and quality values of the backstage passes pre-10 days before sellIn date', () =>{
    const test_item_1 = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 11, 15)]);
    const generic_normal_test_item = test_item_1.updateQuality();
    expect(generic_normal_test_item[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(generic_normal_test_item[0].sellIn).toBe(10);
    expect(generic_normal_test_item[0].quality).toBe(16);
  })

  it('Should return the correct updated sellIn and quality values pre-5 days before sellIn date', () => {
    const test_item_1 = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 6, 20)]);
    const generic_normal_test_item = test_item_1.updateQuality();
    expect(generic_normal_test_item[0].sellIn).toBe(5);
    expect(generic_normal_test_item[0].quality).toBe(22);
  })

  it('Should return the correct updated sellIn and quality values immediately pre-sellIn date', () => {
    const test_item_1 = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 2, 30)]);
    const generic_normal_test_item = test_item_1.updateQuality();
    expect(generic_normal_test_item[0].sellIn).toBe(1);
    expect(generic_normal_test_item[0].quality).toBe(33);
  })

  it('Should return the correct updated quality value for quality approaching 50', () => {
    const test_item_1 = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 2, 49)]);
    const generic_normal_test_item = test_item_1.updateQuality();
    expect(generic_normal_test_item[0].quality).toBe(50);
  })

  it('Should return the correct updated quality value for on concert date', () => {
    const test_item_1 = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 1, 35)]);
    const generic_normal_test_item = test_item_1.updateQuality();
    expect(generic_normal_test_item[0].quality).toBe(38);
  })

  it('Should return the correct updated quality value for after concert date', () => {
    const test_item_1 = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 38)]);
    const generic_normal_test_item = test_item_1.updateQuality();
    expect(generic_normal_test_item[0].quality).toBe(0);
  })

  it('Should return the correct updated quality value for quality of 50', () => {
    const test_item_1 = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 2, 50)]);
    const generic_normal_test_item = test_item_1.updateQuality();
    expect(generic_normal_test_item[0].quality).toBe(50);
  })
})

describe('Sulfuras, Hand of Ragnaros test', () => {

  it('Should return the name, sellIn and quality values of the Sulfuras, Hand of Ragnaros before sellIn date', () =>{
    const test_item_1 = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 14, 30)]);
    const generic_normal_test_item = test_item_1.updateQuality();
    expect(generic_normal_test_item[0].name).toBe('Sulfuras, Hand of Ragnaros');
    expect(generic_normal_test_item[0].sellIn).toBe(14);
    expect(generic_normal_test_item[0].quality).toBe(30);
  })
})
