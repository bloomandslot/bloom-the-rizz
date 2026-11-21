/* ══════════════════════════════════════
   BLOOM-THE-RIZZ — Main Script
══════════════════════════════════════ */

// ── PRODUCT DATA ─────────────────────
var P = {
 bouquets:[
  {id:'b1',name:'Dutch Red Roses',desc:'Hand-tied lush red roses, timeless romance',price:300,e:'🌹',bg:'bg-rose',t:'Best Seller',tg:true,cat:'Bouquet',sub:'Rose',img:'assets/image-02.jpg',isNew:false},
  {id:'b2',name:'Sunshine Sunflowers',desc:'Bright sunflowers, uplifting & cheerful',price:350,e:'🌻',bg:'bg-gold',t:null,tg:false,cat:'Bouquet',sub:'Sunflower',img:'assets/image-03.jpg',isNew:false},
  {id:'b4',name:'Orchid Elegance',desc:'White phalaenopsis orchids with blush blooms, elegant & long-lasting',price:550,e:'🌸',bg:'bg-purp',t:'Premium',tg:true,cat:'Bouquet',sub:'Orchid',img:'assets/image-04.jpg',isNew:false},
  {id:'b5',name:'Green Santini Bouquet',desc:'Lush green santini blooms with eucalyptus, fresh & modern',price:450,e:'💐',bg:'bg-grn',t:'New',tg:false,cat:'Bouquet',sub:'Santini',img:'assets/image-05.jpg',isNew:true},
  {id:'b6',name:'Lavender Rose Bouquet',desc:'Soft lilac roses with eucalyptus & gypsophila',price:480,e:'🌹',bg:'bg-lav',t:'New',tg:false,cat:'Bouquet',sub:'Rose',img:'assets/image-06.jpg',isNew:true},
  {id:'b7',name:'Orange Celosia Bouquet',desc:'Fiery orange feather celosia with fresh greens',price:400,e:'🌾',bg:'bg-peach',t:'New',tg:false,cat:'Bouquet',sub:'Celosia',img:'assets/image-07.jpg',isNew:true},
  {id:'b8',name:'Magenta Celosia Bouquet',desc:'Bold magenta feather celosia, richly textured',price:400,e:'🌾',bg:'bg-rose',t:'New',tg:false,cat:'Bouquet',sub:'Celosia',img:'assets/image-08.jpg',isNew:true},
  {id:'b9',name:'White Orchid Cascade',desc:'Cascading white phalaenopsis orchids with ribbon',price:650,e:'🌸',bg:'bg-wht',t:'New',tg:false,cat:'Bouquet',sub:'Orchid',img:'assets/image-09.jpg',isNew:true},
  {id:'b10',name:'Orchid & Dendrobium Bouquet',desc:'White orchids, dendrobium sprays & cream roses',price:700,e:'🌸',bg:'bg-wht',t:'New',tg:false,cat:'Bouquet',sub:'Orchid',img:'assets/image-10.jpg',isNew:true},
  {id:'b11',name:'Pink & White Orchid Kraft',desc:'Pink cymbidium & white orchids in kraft wrap',price:600,e:'🌸',bg:'bg-blush',t:'New',tg:false,cat:'Bouquet',sub:'Orchid',img:'assets/image-11.jpg',isNew:true},
  {id:'b12',name:'Orchid Garden Kraft Bouquet',desc:'Magenta, pink & white orchids with ferns in kraft wrap',price:620,e:'🌸',bg:'bg-purp',t:'New',tg:false,cat:'Bouquet',sub:'Orchid',img:'assets/image-12.jpg',isNew:true},
  {id:'b17',name:'Pink Gerbera Bouquet',desc:'Cheerful pink gerberas with gypsophila & ferns',price:380,e:'🌼',bg:'bg-blush',t:'New',tg:false,cat:'Bouquet',sub:'Gerbera',img:'assets/image-13.jpg',isNew:true},
  {id:'b18',name:'Pink Lisianthus Bouquet',desc:'Ruffled pink lisianthus with fresh greens',price:400,e:'🌸',bg:'bg-blush',t:'New',tg:false,cat:'Bouquet',sub:'Lisianthus',img:'assets/image-14.jpg',isNew:true},
  {id:'b19',name:'Pink Rose Bouquet',desc:'Pink spray roses with eucalyptus & wax flower',price:480,e:'🌹',bg:'bg-blush',t:'New',tg:false,cat:'Bouquet',sub:'Rose',img:'assets/image-15.jpg',isNew:true},
  {id:'b20',name:'Pink Santini Bouquet',desc:'Dainty pink santini blooms in soft paper wrap',price:420,e:'🌼',bg:'bg-blush',t:'New',tg:false,cat:'Bouquet',sub:'Santini',img:'assets/image-16.jpg',isNew:true},
  {id:'b21',name:'Purple Lisianthus Bouquet',desc:'Rich purple & lilac lisianthus with gypsophila',price:450,e:'🌸',bg:'bg-purp',t:'New',tg:false,cat:'Bouquet',sub:'Lisianthus',img:'assets/image-17.jpg',isNew:true},
  {id:'b22',name:'Purple Santini Bouquet',desc:'Deep purple & violet santini blooms in cream wrap',price:420,e:'🌼',bg:'bg-purp',t:'New',tg:false,cat:'Bouquet',sub:'Santini',img:'assets/image-18.jpg',isNew:true},
  {id:'b23',name:'Red Gerbera Bouquet',desc:'Vibrant red gerberas with gypsophila & eucalyptus',price:380,e:'🌼',bg:'bg-rose',t:'New',tg:false,cat:'Bouquet',sub:'Gerbera',img:'assets/image-19.jpg',isNew:true},
  {id:'b24',name:'Red Mini Rose Bouquet',desc:'Dozens of red spray roses in a soft paper wrap',price:450,e:'🌹',bg:'bg-rose',t:'New',tg:false,cat:'Bouquet',sub:'Rose',img:'assets/image-20.jpg',isNew:true},
  {id:'b25',name:'Red Rose Luxe Bouquet',desc:'Long-stem red roses with eucalyptus, ribbon-tied',price:550,e:'🌹',bg:'bg-rose',t:'New',tg:false,cat:'Bouquet',sub:'Rose',img:'assets/image-21.jpg',isNew:true},
  {id:'b26',name:'Classic Red Rose Bunch',desc:'Hand-tied long-stem red roses with twine',price:400,e:'🌹',bg:'bg-rose',t:'New',tg:false,cat:'Bouquet',sub:'Rose',img:'assets/image-22.jpg',isNew:true},
  {id:'b27',name:'Red Rose Kraft Bouquet',desc:'Classic red roses in rustic kraft wrap',price:480,e:'🌹',bg:'bg-rose',t:'New',tg:false,cat:'Bouquet',sub:'Rose',img:'assets/image-23.jpg',isNew:true},
  {id:'b28',name:'Red Rose Vase Bouquet',desc:'Red roses styled for a vase, rich & romantic',price:450,e:'🌹',bg:'bg-rose',t:'New',tg:false,cat:'Bouquet',sub:'Rose',img:'assets/image-24.jpg',isNew:true},
  {id:'b29',name:'Red Rose Twine Bouquet',desc:'Red roses wrapped in kraft & tied with jute twine',price:480,e:'🌹',bg:'bg-rose',t:'New',tg:false,cat:'Bouquet',sub:'Rose',img:'assets/image-25.jpg',isNew:true},
  {id:'b30',name:'Sunflower Hand-Tied Bunch',desc:'Fresh sunflowers, hand-tied with jute twine',price:380,e:'🌻',bg:'bg-gold',t:'New',tg:false,cat:'Bouquet',sub:'Sunflower',img:'assets/image-26.jpg',isNew:true},
  {id:'b31',name:'Two-Tone Rose Bouquet',desc:'Blush-pink & cream roses with wax flower & ribbon',price:520,e:'🌹',bg:'bg-blush',t:'New',tg:false,cat:'Bouquet',sub:'Rose',img:'assets/image-27.jpg',isNew:true},
  {id:'b32',name:'White Gerbera Bouquet',desc:'Crisp white gerberas with eucalyptus in paper wrap',price:380,e:'🌼',bg:'bg-wht',t:'New',tg:false,cat:'Bouquet',sub:'Gerbera',img:'assets/image-28.jpg',isNew:true},
  {id:'b33',name:'White Lisianthus Bouquet',desc:'Elegant white lisianthus with silvery eucalyptus',price:450,e:'🌸',bg:'bg-wht',t:'New',tg:false,cat:'Bouquet',sub:'Lisianthus',img:'assets/image-29.jpg',isNew:true},
  {id:'b34',name:'White Rose Bouquet',desc:'Creamy white roses with gypsophila & eucalyptus',price:500,e:'🌹',bg:'bg-wht',t:'New',tg:false,cat:'Bouquet',sub:'Rose',img:'assets/image-30.jpg',isNew:true},
  {id:'b35',name:'White Santini Bouquet',desc:'Fluffy white santini blooms with fresh greens',price:420,e:'🌼',bg:'bg-wht',t:'New',tg:false,cat:'Bouquet',sub:'Santini',img:'assets/image-31.jpg',isNew:true},
  {id:'b36',name:'Yellow Gerbera Bouquet',desc:'Sunny yellow gerberas with ferns & gypsophila',price:380,e:'🌼',bg:'bg-gold',t:'New',tg:false,cat:'Bouquet',sub:'Gerbera',img:'assets/image-32.jpg',isNew:true},
  {id:'b37',name:'Yellow Rose Bouquet',desc:'Butter-yellow roses with gypsophila & eucalyptus',price:480,e:'🌹',bg:'bg-gold',t:'New',tg:false,cat:'Bouquet',sub:'Rose',img:'assets/image-33.jpg',isNew:true},
 ],
 vase:[
  {id:'vr1',name:'Rose Bunch - Red',desc:'Premium red rose, bunch of 13 stems',price:249,e:'🌹',bg:'bg-rose',t:'Popular',tg:true,cat:'Vase',sub:'Rose',img:'assets/image-34.jpg',isNew:false},
  {id:'vr2',name:'Rose Bunch - Yellow',desc:'Cheerful yellow rose, bunch of 13 stems',price:249,e:'🌹',bg:'bg-gold',t:null,tg:false,cat:'Vase',sub:'Rose',img:'assets/image-35.jpg',isNew:false},
  {id:'vr3',name:'Rose Bunch - Pink',desc:'Soft pink rose, bunch of 13 stems',price:249,e:'🌹',bg:'bg-blush',t:null,tg:false,cat:'Vase',sub:'Rose',img:'assets/image-36.jpg',isNew:false},
  {id:'vr4',name:'Rose Bunch - Light Purple',desc:'Delicate lilac rose, bunch of 13 stems',price:249,e:'🌹',bg:'bg-lav',t:null,tg:false,cat:'Vase',sub:'Rose',img:'assets/image-37.jpg',isNew:false},
  {id:'vr5',name:'Rose Bunch - White & Pink',desc:'Two-tone white-pink rose, bunch of 13',price:249,e:'🌹',bg:'bg-wht',t:null,tg:false,cat:'Vase',sub:'Rose',img:'assets/image-38.jpg',isNew:false},
  {id:'vr6',name:'Rose Bunch - White',desc:'Pure white rose, bunch of 13 stems',price:249,e:'🌹',bg:'bg-wht',t:null,tg:false,cat:'Vase',sub:'Rose',img:'assets/image-39.jpg',isNew:false},
  {id:'vr7',name:'Mini Rose (Chindu Rose) - Red',desc:'Loose bunch of tiny spray roses, red',price:100,e:'🌹',bg:'bg-rose',t:null,tg:false,cat:'Vase',sub:'Rose',img:'assets/image-40.jpg',isNew:true},
  {id:'vl1',name:'Lisianthus - Pink',desc:'Delicate ruffled pink lisianthus blooms',price:100,e:'🌸',bg:'bg-blush',t:null,tg:false,cat:'Vase',sub:'Lisianthus',img:'assets/image-41.jpg',isNew:true},
  {id:'vl2',name:'Lisianthus - White',desc:'Elegant white lisianthus, rose-like petals',price:100,e:'🌸',bg:'bg-wht',t:null,tg:false,cat:'Vase',sub:'Lisianthus',img:'assets/image-42.jpg',isNew:true},
  {id:'vl3',name:'Lisianthus - Purple',desc:'Rich purple lisianthus blooms',price:100,e:'🌸',bg:'bg-purp',t:null,tg:false,cat:'Vase',sub:'Lisianthus',img:'assets/image-43.jpg',isNew:true},
  {id:'vs1',name:'Santini Doria - Pink',desc:'Petite multi-headed santini spray, pink',price:379,e:'🌼',bg:'bg-blush',t:null,tg:false,cat:'Vase',sub:'Santini',img:'assets/image-44.jpg',isNew:false},
  {id:'vs2',name:'Santini Doria - White',desc:'Petite multi-headed santini spray, white',price:379,e:'🌼',bg:'bg-wht',t:null,tg:false,cat:'Vase',sub:'Santini',img:'assets/image-45.jpg',isNew:false},
  {id:'vs3',name:'Santini Doria - Purple',desc:'Petite multi-headed santini spray, purple',price:379,e:'🌼',bg:'bg-purp',t:null,tg:false,cat:'Vase',sub:'Santini',img:'assets/image-46.jpg',isNew:false},
  {id:'vs4',name:'Santini Doria - Green',desc:'Petite multi-headed santini spray, green',price:379,e:'🌼',bg:'bg-grn',t:null,tg:false,cat:'Vase',sub:'Santini',img:'assets/image-47.jpg',isNew:false},
  {id:'vce1',name:'Feather Celosia - Orange',desc:'Plume-like feathery celosia, orange',price:249,e:'🌾',bg:'bg-peach',t:null,tg:false,cat:'Vase',sub:'Celosia',img:'assets/image-48.jpg',isNew:false},
  {id:'vce2',name:'Feather Celosia - Magenta',desc:'Plume-like feathery celosia, magenta',price:249,e:'🌾',bg:'bg-rose',t:null,tg:false,cat:'Vase',sub:'Celosia',img:'assets/image-49.jpg',isNew:false},
  {id:'vg1',name:'Gerbera - Pink',desc:'Cheerful pink gerbera daisy, full bunch',price:179,e:'🌼',bg:'bg-blush',t:null,tg:false,cat:'Vase',sub:'Gerbera',img:'assets/image-50.jpg',isNew:false},
  {id:'vg2',name:'Gerbera - Red',desc:'Bold red gerbera daisy, full bunch',price:179,e:'🌼',bg:'bg-rose',t:null,tg:false,cat:'Vase',sub:'Gerbera',img:'assets/image-51.jpg',isNew:false},
  {id:'vg3',name:'Gerbera - Yellow',desc:'Bright yellow gerbera daisy, full bunch',price:179,e:'🌼',bg:'bg-gold',t:null,tg:false,cat:'Vase',sub:'Gerbera',img:'assets/image-52.jpg',isNew:false},
  {id:'vg4',name:'Gerbera - White',desc:'Crisp white gerbera daisy, full bunch',price:179,e:'🌼',bg:'bg-wht',t:null,tg:false,cat:'Vase',sub:'Gerbera',img:'assets/image-53.jpg',isNew:false},
  {id:'vg5',name:'Gerbera - Orange',desc:'Vibrant orange gerbera daisy, full bunch',price:179,e:'🌼',bg:'bg-peach',t:null,tg:false,cat:'Vase',sub:'Gerbera',img:'assets/image-54.jpg',isNew:false},
  {id:'vla1',name:'Asiatic Lily - Yellow',desc:'Fragrant yellow Asiatic lily, full bunch',price:597,e:'🌸',bg:'bg-gold',t:null,tg:false,cat:'Vase',sub:'Lily',img:'assets/image-55.jpg',isNew:false},
  {id:'val1',name:'Alstroemeria',desc:'Long-lasting Peruvian lily, full bunch',price:239,e:'🌷',bg:'bg-peach',t:null,tg:false,cat:'Vase',sub:'Alstroemeria',img:'assets/image-56.jpg',isNew:false},
  {id:'vh1',name:'Heliconia \'Sexy Pink\'',desc:'Exotic tropical heliconia, statement stem',price:699,e:'🌺',bg:'bg-blush',t:'Exotic',tg:true,cat:'Vase',sub:'Heliconia',img:'assets/image-57.jpg',isNew:false},
  {id:'vh2',name:'Heliconia Blossom - Bright Yellow-Red',desc:'Vivid tropical heliconia blossom',price:100,e:'🌺',bg:'bg-peach',t:null,tg:false,cat:'Vase',sub:'Heliconia',img:'assets/image-58.jpg',isNew:false},
  {id:'vgy1',name:'Gypsophila / Baby\'s Breath (Glossifia)',desc:'Airy white filler flower, big bunch',price:413,e:'🤍',bg:'bg-wht',t:null,tg:false,cat:'Vase',sub:'Gypsophila',img:'assets/image-59.jpg',isNew:false},
  {id:'vo1',name:'Blue Thai Orchid',desc:'Exotic blue-hued orchid, full bunch',price:750,e:'🌸',bg:'bg-purp',t:'Premium',tg:true,cat:'Vase',sub:'Orchid',img:'assets/image-60.jpg',isNew:false},
  {id:'vo2',name:'Dendrobium Orchid - Purple-White',desc:'Delicate dendrobium orchid sprays',price:100,e:'🌸',bg:'bg-purp',t:null,tg:false,cat:'Vase',sub:'Orchid',img:'assets/image-61.jpg',isNew:true},
  {id:'vsf1',name:'Sunflower',desc:'Classic loose sunflower, full bunch',price:100,e:'🌻',bg:'bg-gold',t:null,tg:false,cat:'Vase',sub:'Sunflower',img:'assets/image-62.jpg',isNew:true},
  {id:'vcn1',name:'Carnation - Magenta',desc:'Ruffled magenta carnation, full bunch',price:100,e:'🌷',bg:'bg-rose',t:null,tg:false,cat:'Vase',sub:'Carnation',img:'assets/image-63.jpg',isNew:true},
 ],
 stems:[
  {id:'s1',name:'Anthurium - Red',desc:'Premium single red anthurium stem',price:57,e:'🌺',bg:'bg-rose',t:null,tg:false,cat:'Stem',sub:'Anthurium',img:'assets/image-64.jpg',isNew:false},
  {id:'s2',name:'Gladiolus - Pink',desc:'Single tall pink gladiolus stem',price:25,e:'🌺',bg:'bg-blush',t:null,tg:false,cat:'Stem',sub:'Gladiolus',img:'assets/image-65.jpg',isNew:false},
  {id:'s3',name:'Gladiolus - Red',desc:'Single tall red gladiolus stem',price:25,e:'🌺',bg:'bg-rose',t:null,tg:false,cat:'Stem',sub:'Gladiolus',img:'assets/image-66.jpg',isNew:false},
  {id:'s4',name:'Gladiolus - White',desc:'Single tall white gladiolus stem',price:25,e:'🌺',bg:'bg-wht',t:null,tg:false,cat:'Stem',sub:'Gladiolus',img:'assets/image-67.jpg',isNew:false},
 ],
 pooja:[
  {id:'p1',name:'Mogra Loose Flowers',desc:'Fragrant white jasmine mogra, sold loose for pooja',price:40,e:'🌼',bg:'bg-wht',t:'Fragrant',tg:false,cat:'Pooja',sub:'Jasmine',img:'assets/image-68.jpg',isNew:false},
  {id:'p2',name:'Rose Petals (Loose)',desc:'Fresh loose rose petals for pooja & rituals',price:50,e:'🌹',bg:'bg-rose',t:null,tg:false,cat:'Pooja',sub:'Rose',img:'assets/image-69.jpg',isNew:false},
  {id:'p3',name:'Tuberose Loose Flowers',desc:'Fragrant loose tuberose for daily pooja',price:45,e:'🌾',bg:'bg-grn',t:null,tg:false,cat:'Pooja',sub:'Tuberose',img:'assets/image-70.jpg',isNew:false},
  {id:'p4',name:'Chrysanthemum Loose - White',desc:'Compact loose white chrysanthemum, bagged fresh',price:100,e:'🌻',bg:'bg-wht',t:null,tg:false,cat:'Pooja',sub:'Chrysanthemum',img:'assets/image-71.jpg',isNew:true},
  {id:'p5',name:'Chrysanthemum Loose - Pink-White',desc:'Loose bicolor pink-white chrysanthemum, bagged fresh',price:100,e:'🌻',bg:'bg-blush',t:null,tg:false,cat:'Pooja',sub:'Chrysanthemum',img:'assets/image-72.jpg',isNew:true},
  {id:'p6',name:'Chrysanthemum Loose - Yellow',desc:'Loose golden-yellow chrysanthemum, bagged fresh',price:100,e:'🌻',bg:'bg-gold',t:null,tg:false,cat:'Pooja',sub:'Chrysanthemum',img:'assets/image-73.jpg',isNew:true},
  {id:'p7',name:'Chrysanthemum Loose - Purple',desc:'Loose purple aster-style chrysanthemum, bagged fresh',price:100,e:'🌻',bg:'bg-purp',t:null,tg:false,cat:'Pooja',sub:'Chrysanthemum',img:'assets/image-74.jpg',isNew:true},
  {id:'p8',name:'Chrysanthemum Loose - Magenta',desc:'Loose deep magenta chrysanthemum, bagged fresh',price:100,e:'🌻',bg:'bg-rose',t:null,tg:false,cat:'Pooja',sub:'Chrysanthemum',img:'assets/image-75.jpg',isNew:true},
  {id:'p9',name:'Lotus Bud',desc:'Sacred pink-cream lotus bud, sold loose for pooja',price:100,e:'🪷',bg:'bg-blush',t:null,tg:false,cat:'Pooja',sub:'Lotus',img:'assets/image-76.jpg',isNew:true},
  {id:'p10',name:'Kanakambaram (Crossandra)',desc:'Vivid orange-red crossandra, loose for pooja',price:100,e:'🌼',bg:'bg-peach',t:null,tg:false,cat:'Pooja',sub:'Kanakambaram',img:'assets/image-77.jpg',isNew:true},
  {id:'p11',name:'Marigold Loose - Orange',desc:'Bright orange marigold, loose for pooja & garlands',price:100,e:'🌼',bg:'bg-peach',t:null,tg:false,cat:'Pooja',sub:'Marigold',img:'assets/image-78.jpg',isNew:true},
  {id:'p12',name:'Marigold Loose - Yellow',desc:'Golden yellow marigold, loose for pooja & garlands',price:100,e:'🌼',bg:'bg-gold',t:null,tg:false,cat:'Pooja',sub:'Marigold',img:'assets/image-79.jpg',isNew:true},
 ],
 gajara:[
  {id:'g1',name:'Mogra Gajra (1ft)',desc:'Fragrant white jasmine mogra hair gajara',price:37,e:'🌼',bg:'bg-wht',t:'Fragrant',tg:false,cat:'Gajara',sub:'Jasmine',img:'assets/image-80.jpg',isNew:false},
 ],
 decor:[
  {id:'d1',name:'Bamboo Leaves',desc:'Decoration bundle, full',price:150,e:'🎋',bg:'bg-grn',t:null,tg:false,cat:'Decor',sub:'Foliage',img:'assets/image-81.jpg',isNew:false},
  {id:'d2',name:'Philodendron Xanadu Leaves',desc:'Decoration bundle, full',price:150,e:'🍃',bg:'bg-grn',t:null,tg:false,cat:'Decor',sub:'Foliage',img:'assets/image-82.jpg',isNew:false},
  {id:'d3',name:'Fishtail Palm',desc:'Decoration bundle, full',price:160,e:'🍃',bg:'bg-grn',t:null,tg:false,cat:'Decor',sub:'Foliage',img:'assets/image-83.jpg',isNew:false},
  {id:'d4',name:'Dracaena Massangeana Leaves',desc:'Decoration bundle, full',price:113,e:'🍃',bg:'bg-grn',t:null,tg:false,cat:'Decor',sub:'Foliage',img:'assets/image-84.jpg',isNew:false},
  {id:'d5',name:'Floral Foam Cage - Square',desc:'Standard floral foam cage for arrangements',price:32,e:'🧊',bg:'bg-wht',t:null,tg:false,cat:'Decor',sub:'Supplies',img:'assets/image-85.jpg',isNew:false},
  {id:'d6',name:'Floral Foam with Mesh (4in x 4ft)',desc:'Wide floral foam roll with mesh support',price:160,e:'🧊',bg:'bg-wht',t:null,tg:false,cat:'Decor',sub:'Supplies',img:'assets/image-86.jpg',isNew:false},
 ]
};
var ALL = P.bouquets.concat(P.vase, P.stems, P.pooja, P.gajara, P.decor);
var P_LOOKUP = {};
ALL.forEach(function(p){ P_LOOKUP[p.id] = p; });


var DELIVERY = 25;

// ── STATE ─────────────────────────────
var cart = {}, selDate = null, selSlot = null, curStep = 1;
var calY, calM;

// ── RENDER CARDS ──────────────────────
function cardHTML(p) {
  var q = cart[p.id] || 0;
  var tag = p.t ? '<div class="ptag ' + (p.tg ? 'ptag-gold' : 'ptag-dark') + '">' + p.t + '</div>' : '';
  var newTag = p.isNew ? '<div class="ptag ptag-new">New</div>' : '';
  var ctrl = q === 0
    ? '<button class="add-btn" onclick="addItem(\'' + p.id + '\')" aria-label="Add ' + p.name + ' to cart">+ Add</button>'
    : '<div class="qty-ctrl" role="group" aria-label="Quantity">'
        + '<button class="qty-btn" onclick="adj(\'' + p.id + '\',-1)" aria-label="Decrease">−</button>'
        + '<span class="qty-n" aria-live="polite">' + q + '</span>'
        + '<button class="qty-btn" onclick="adj(\'' + p.id + '\',1)" aria-label="Increase">+</button>'
      + '</div>';
  var imgStyle = p.img ? ' style="background-image:url(\'' + p.img + '\');background-size:cover;background-position:center;cursor:pointer"' : ' style="cursor:pointer"';
  var emojiSpan = p.img ? '' : '<span>' + p.e + '</span>';
  return '<article class="pcard" id="card-' + p.id + '" data-sub="' + p.sub + '">'
    + '<div class="pcard-img ' + p.bg + '" aria-hidden="true" onclick="openQuickView(\'' + p.id + '\')"' + imgStyle + '>' + emojiSpan + tag + newTag + '</div>'
    + '<div class="pcard-body">'
      + '<div class="pcard-name" onclick="openQuickView(\'' + p.id + '\')" style="cursor:pointer">' + p.name + '</div>'
      + '<div class="pcard-desc">' + p.desc + '</div>'
      + '<div class="pcard-foot">'
        + '<div class="pcard-price"><sup>₹</sup>' + p.price + '</div>' + ctrl
      + '</div>'
    + '</div>'
  + '</article>';
}

function renderAll() {
  Object.keys(P).forEach(function(k) {
    document.getElementById('g-' + k).innerHTML = P[k].map(cardHTML).join('');
    document.getElementById('c-' + k).textContent = P[k].length + ' items';
  });
}
renderAll();

// ── SUBCATEGORY FILTER ────────────────
function buildSubcatStrip() {
  var subs = [];
  ALL.forEach(function(p){ if (subs.indexOf(p.sub) === -1) subs.push(p.sub); });
  var html = '<div class="cat-pill active" onclick="filterSub(\'All\',this)" role="button" tabindex="0">🌐 All</div>';
  subs.forEach(function(s) {
    html += '<div class="cat-pill" onclick="filterSub(\'' + s + '\',this)" role="button" tabindex="0">' + s + '</div>';
  });
  document.getElementById('subcat-strip').innerHTML = html;
}
buildSubcatStrip();

function filterSub(sub, el) {
  document.querySelectorAll('#subcat-strip .cat-pill').forEach(function(p){ p.classList.remove('active'); });
  el.classList.add('active');
  document.querySelectorAll('.pcard').forEach(function(card) {
    var match = (sub === 'All') || (card.getAttribute('data-sub') === sub);
    card.style.display = match ? '' : 'none';
  });
}

function refreshCard(id) {
  var p = ALL.find(function(x){return x.id===id;}), el = document.getElementById('card-'+id);
  if (p && el) { var d = document.createElement('div'); d.innerHTML = cardHTML(p); el.replaceWith(d.firstElementChild); }
}

// ── CART OPS ──────────────────────────
function addItem(id) {
  cart[id] = (cart[id] || 0) + 1;
  syncBadge(); refreshCard(id); popBadge(); updatePrices();
}
function adj(id, d) {
  cart[id] = Math.max(0, (cart[id] || 0) + d);
  if (!cart[id]) delete cart[id];
  syncBadge(); refreshCard(id); updatePrices();
  if (document.getElementById('cpanel').classList.contains('on')) renderCartBody();
}
function openQuickView(id) {
  var p = ALL.find(function(x){ return x.id === id; });
  if (!p) return;
  renderQuickViewBody(p);
  document.getElementById('qv-overlay').classList.add('on');
  document.getElementById('qv-sheet').classList.add('on');
}
function renderQuickViewBody(p) {
  var q = cart[p.id] || 0;
  var ctrl = q === 0
    ? '<button class="add-btn" onclick="addItem(\'' + p.id + '\');renderQuickViewBody(P_LOOKUP[\'' + p.id + '\'])" aria-label="Add ' + p.name + ' to cart">+ Add to Cart</button>'
    : '<div class="qty-ctrl" role="group" aria-label="Quantity">'
        + '<button class="qty-btn" onclick="adj(\'' + p.id + '\',-1);renderQuickViewBody(P_LOOKUP[\'' + p.id + '\'])" aria-label="Decrease">−</button>'
        + '<span class="qty-n" aria-live="polite">' + q + '</span>'
        + '<button class="qty-btn" onclick="adj(\'' + p.id + '\',1);renderQuickViewBody(P_LOOKUP[\'' + p.id + '\'])" aria-label="Increase">+</button>'
      + '</div>';
  var imgStyle = p.img ? ' style="background-image:url(\'' + p.img + '\');background-size:cover;background-position:center"' : '';
  var emojiSpan = p.img ? '' : '<span>' + p.e + '</span>';
  var newBadge = p.isNew ? '<div class="qv-newbadge">New</div>' : '';
  document.getElementById('qv-body').innerHTML =
    '<div class="qv-img ' + p.bg + '" aria-hidden="true"' + imgStyle + '>' + emojiSpan + newBadge + '</div>'
    + '<div class="qv-name">' + p.name + '</div>'
    + '<div class="qv-price"><sup>₹</sup>' + p.price + '</div>'
    + '<div class="qv-desc">' + p.desc + '</div>'
    + '<div class="qv-accordion">'
      + '<div class="qv-acc-item">'
        + '<button class="qv-acc-hdr" onclick="toggleAcc(this)">Product Info <span class="qv-acc-arrow">▾</span></button>'
        + '<div class="qv-acc-panel"><p>Freshly sourced and hand-picked for quality. Handle with care and keep stems trimmed for longer life. Exact shade may vary slightly with seasonal availability.</p></div>'
      + '</div>'
      + '<div class="qv-acc-item">'
        + '<button class="qv-acc-hdr" onclick="toggleAcc(this)">Delivery Info <span class="qv-acc-arrow">▾</span></button>'
        + '<div class="qv-acc-panel"><p>Next-morning delivery, 5:30 AM onward. Choose your preferred slot at checkout. Free delivery on orders above the minimum threshold.</p></div>'
      + '</div>'
    + '</div>'
    + '<div class="qv-foot">' + ctrl + '</div>';
}
function toggleAcc(btn) {
  var item = btn.parentElement;
  item.classList.toggle('open');
}
function closeQuickView() {
  document.getElementById('qv-overlay').classList.remove('on');
  document.getElementById('qv-sheet').classList.remove('on');
}

function syncBadge() {
  var catQty = Object.values(cart).reduce(function(a,b){return a+b;}, 0);
  var custQty = customOrders.reduce(function(a,c){return a+c.qty;}, 0);
  document.getElementById('cBadge').textContent = catQty + custQty;
}
function popBadge() {
  var el = document.getElementById('cBadge');
  el.classList.add('pop');
  setTimeout(function(){el.classList.remove('pop');}, 300);
}

// ── OPEN / CLOSE ──────────────────────
function openCart() {
  renderCartBody(); updatePrices(); goStep(1);
  document.getElementById('overlay').classList.add('on');
  document.getElementById('cpanel').classList.add('on');
  document.body.style.overflow = 'hidden';
  initCal();
}
function closeCart() {
  document.getElementById('overlay').classList.remove('on');
  document.getElementById('cpanel').classList.remove('on');
  document.body.style.overflow = '';
}

// ── CUSTOMIZE YOUR OWN ────────────────
var customOrders = [];
var cxType = 'Bouquet', cxFlowers = [], cxSize = 'Standard', cxSurcharge = 0, cxQtyVal = 1;
var CX_BASE = {Bouquet: 450, Vase: 390};
var CX_FLOWER_LIST = [
  {n:'Roses', e:'🌹'}, {n:'Tulips', e:'🌷'}, {n:'Cherry Blossoms', e:'🌸'}, {n:'Sunflowers', e:'🌻'},
  {n:'Lilies', e:'💮'}, {n:'Hibiscus', e:'🌺'}, {n:'Lotuses', e:'🪷'}, {n:'Mogra / Jasmine', e:'🌼'},
  {n:'Gypsophila / Fillers', e:'🌾'}
];
var CX_SIZES = [
  {label:'Standard', desc:'approx 10-12 stems', add:0},
  {label:'Premium Deluxe', desc:'20+ stems', add:250},
  {label:'Luxury Grand', desc:'35+ stems', add:600}
];

function openCustomPanel(type) {
  cxType = type; cxFlowers = []; cxSize = 'Standard'; cxSurcharge = 0; cxQtyVal = 1;
  document.getElementById('cx-title').textContent = type === 'Bouquet'
    ? '💐 Build a Bespoke Gift Bouquet' : '🌸 Arrange a Custom Vase Set';
  document.getElementById('cx-flower-chips').innerHTML = CX_FLOWER_LIST.map(function(f) {
    return '<div class="flower-chip" onclick="toggleFlowerChip(this,\'' + f.n + '\')">' + f.e + ' ' + f.n + '</div>';
  }).join('');
  document.getElementById('cx-size-options').innerHTML = CX_SIZES.map(function(s, i) {
    return '<div class="size-opt' + (i === 0 ? ' sel' : '') + '" onclick="selectCxSize(this,\'' + s.label + '\',' + s.add + ')">'
      + s.label + (s.add ? ' (+₹' + s.add + ', ' + s.desc + ')' : ' (' + s.desc + ')')
      + '</div>';
  }).join('');
  document.getElementById('cx-note').value = '';
  document.getElementById('cx-qty').textContent = '1';
  updateCxPrice();
  document.getElementById('cx-overlay').classList.add('on');
  document.getElementById('cx-sheet').classList.add('on');
  document.body.style.overflow = 'hidden';
}
function closeCustomPanel() {
  document.getElementById('cx-overlay').classList.remove('on');
  document.getElementById('cx-sheet').classList.remove('on');
  document.body.style.overflow = '';
}
function toggleFlowerChip(el, name) {
  el.classList.toggle('sel');
  var idx = cxFlowers.indexOf(name);
  if (idx === -1) cxFlowers.push(name); else cxFlowers.splice(idx, 1);
}
function selectCxSize(el, label, add) {
  document.querySelectorAll('#cx-size-options .size-opt').forEach(function(o){ o.classList.remove('sel'); });
  el.classList.add('sel');
  cxSize = label; cxSurcharge = add;
  updateCxPrice();
}
function cxQty(delta) {
  cxQtyVal = Math.max(1, cxQtyVal + delta);
  document.getElementById('cx-qty').textContent = cxQtyVal;
  updateCxPrice();
}
function updateCxPrice() {
  var unit = CX_BASE[cxType] + cxSurcharge;
  document.getElementById('cx-price').textContent = '₹' + (unit * cxQtyVal);
}
function cxAddToCart() {
  var unit = CX_BASE[cxType] + cxSurcharge;
  customOrders.push({
    type: cxType, flowers: cxFlowers.slice(), size: cxSize,
    note: v('cx-note'), qty: cxQtyVal, unitPrice: unit
  });
  syncBadge(); popBadge();
  closeCustomPanel();
  showToast('🌸 Added to cart!', cxType + ' (' + cxSize + ') — ready for checkout.');
}

// ── SUBSCRIBE & SAVE ──────────────────
var subFreq = 'weekly', subSlot = '5:30am - 8:00am';
function openSubPanel() {
  document.getElementById('sub-overlay').classList.add('on');
  document.getElementById('sub-sheet').classList.add('on');
  document.body.style.overflow = 'hidden';
}
function closeSubPanel() {
  document.getElementById('sub-overlay').classList.remove('on');
  document.getElementById('sub-sheet').classList.remove('on');
  document.body.style.overflow = '';
}
function setFreq(freq) {
  subFreq = freq;
  document.getElementById('freq-weekly').classList.toggle('sel', freq === 'weekly');
  document.getElementById('freq-monthly').classList.toggle('sel', freq === 'monthly');
  document.getElementById('sub-month-row').style.display = freq === 'monthly' ? 'block' : 'none';
}
function pickSubSlot(el, val) {
  document.querySelectorAll('#sub-sheet .slot-card').forEach(function(c){
    c.classList.remove('sel'); c.setAttribute('aria-checked','false');
  });
  el.classList.add('sel'); el.setAttribute('aria-checked','true');
  subSlot = val;
}
function goSubWA(anchor) {
  var fn=v('s-fname'), ln=v('s-lname'), ph=v('s-phone'), fl=v('s-flat'),
      ar=v('s-area'), ct=v('s-city'), pi=v('s-pin');
  if (!fn||!ph||!fl||!ar||!ct||!pi) {
    showToast('📋 Missing details','Please fill all required (*) fields.'); return false;
  }
  if (!/^\d{6}$/.test(pi)) { showToast('📌 Invalid PIN','Please enter a valid 6-digit PIN code.'); return false; }

  var day = document.getElementById('sub-day').value;
  var pref = v('sub-pref');
  var freqLine = subFreq === 'weekly'
    ? 'Every week, on ' + day
    : 'Every month, on the ' + document.getElementById('sub-week').value + ' ' + day;

  var msg =
    'Hi BLOOM-THE-RIZZ! I would like to start a flower subscription. 🔁\n\n'
    + '📆 SUBSCRIPTION DETAILS\n' + '─────────────────────\n'
    + 'Frequency : ' + (subFreq === 'weekly' ? 'Weekly' : 'Monthly') + '\n'
    + 'Schedule  : ' + freqLine + '\n'
    + 'Time Slot : ' + subSlot + '\n'
    + (pref ? 'Preference: ' + pref + '\n' : '')
    + '─────────────────────\n'
    + '📍 DELIVERY ADDRESS\n'
    + 'Name    : ' + fn + (ln ? ' ' + ln : '') + '\n'
    + 'Phone   : ' + ph + '\n'
    + 'Address : ' + fl + ', ' + ar + '\n'
    + 'City    : ' + ct + ' - ' + pi + '\n'
    + '─────────────────────\n'
    + 'Kindly confirm my subscription and share payment details. Thank you! 🙏';

  var waLink = 'https://wa.me/917829977348?text=' + encodeURIComponent(msg);
  if (anchor) anchor.href = waLink;
  var win = window.open(waLink, '_blank');
  if (!win) { window.location.href = waLink; }
  showToast('🔁 Subscription request ready!', 'Opening WhatsApp — tap Send to confirm! 💚');
  return false;
}

// ── STEPS ─────────────────────────────
function goStep(n) {
  curStep = n;
  [1,2,3].forEach(function(i) {
    var tab = document.getElementById('stepTab'+i);
    var sc  = document.getElementById('step'+i);
    tab.classList.toggle('active', i === n);
    tab.classList.toggle('done', i < n);
    sc.classList.toggle('active', i === n);
  });
  document.getElementById('panelTitle').textContent =
    n === 1 ? '🛒 Your Cart' : n === 2 ? '📅 Date & Slot' : '📍 Delivery Details';

  var btn = document.getElementById('mainBtn');
  var row = document.getElementById('btnRow');
  if (n === 1) {
    row.innerHTML = '<button class="btn-next" id="mainBtn" onclick="mainAction()">Proceed to Date & Slot →</button>';
  } else if (n === 2) {
    row.innerHTML = '<button class="btn-back" onclick="goStep(1)">← Back</button>'
      + '<button class="btn-next" id="mainBtn" onclick="mainAction()">Proceed to Details →</button>';
  } else {
    row.innerHTML = '<button class="btn-back" onclick="goStep(2)">← Back</button>'
      + '<a id="mainBtn" href="#" target="_blank" rel="noopener" class="wa-btn" onclick="return goWA(this)">'
      + '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">'
      + '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>'
      + '<path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.104 1.523 5.827L.057 23.945l6.281-1.465A11.945 11.945 0 0012 24c6.628 0 12-5.372 12-12S18.628 0 12 0z"/></svg>'
      + 'Confirm Order on WhatsApp</a>';
  }
}

function mainAction() {
  if (curStep === 1) {
    if (!Object.keys(cart).length && !customOrders.length) { showToast('🌸 Cart is empty!','Add some flowers first.'); return; }
    goStep(2);
  } else if (curStep === 2) {
    if (!selDate) { showToast('📅 Pick a date','Please select a delivery date.'); return; }
    if (!selSlot) { showToast('⏰ Pick a slot','Please choose a delivery time slot.'); return; }
    goStep(3);
  }
}

// ── CART BODY ─────────────────────────
function renderCartBody() {
  var body = document.getElementById('cartBody');
  var foot = document.getElementById('cpFoot');
  var keys = Object.keys(cart);
  if (!keys.length && !customOrders.length) {
    body.innerHTML = '<div class="empty-cart"><div class="empty-ico">🌸</div>'
      + '<p>Your cart is empty!<br>Browse our fresh flowers above.</p></div>';
    foot.style.display = 'none'; return;
  }
  var html = '<div style="padding:12px 0 0">'
    + keys.map(function(id) {
      var p = ALL.find(function(x){return x.id===id;}); if (!p) return '';
      return '<div class="ci">'
        + '<div class="ci-ico ' + p.bg + '">' + p.e + '</div>'
        + '<div class="ci-info">'
          + '<div class="ci-name">' + p.name + '</div>'
          + '<div class="ci-price">₹' + p.price + ' × ' + cart[id] + ' = ₹' + (p.price*cart[id]) + '</div>'
        + '</div>'
        + '<div class="qty-ctrl">'
          + '<button class="qty-btn" onclick="adj(\'' + id + '\',-1)">−</button>'
          + '<span class="qty-n">' + cart[id] + '</span>'
          + '<button class="qty-btn" onclick="adj(\'' + id + '\',1)">+</button>'
        + '</div>'
      + '</div>';
    }).join('')
    + customOrders.map(function(c, i) {
      return '<div class="ci">'
        + '<div class="ci-ico bg-blush">' + (c.type === 'Bouquet' ? '💐' : '🌷') + '</div>'
        + '<div class="ci-info">'
          + '<div class="ci-name">Custom ' + c.type + ' (' + c.size + ')' + '</div>'
          + '<div class="ci-price">' + (c.flowers.length ? c.flowers.join(', ') + ' — ' : '') + '₹' + c.unitPrice + ' × ' + c.qty + ' = ₹' + (c.unitPrice*c.qty) + '</div>'
        + '</div>'
        + '<button class="qty-btn" onclick="removeCustomOrder(' + i + ')" aria-label="Remove">🗑️</button>'
      + '</div>';
    }).join('')
    + '</div>';
  body.innerHTML = html;
  foot.style.display = 'block';
  updatePrices();
}
function removeCustomOrder(i) {
  customOrders.splice(i, 1);
  syncBadge(); renderCartBody();
}

function updatePrices() {
  var sub = Object.keys(cart).reduce(function(s,id) {
    var p = ALL.find(function(x){return x.id===id;}); return s + (p ? p.price*cart[id] : 0);
  }, 0);
  sub += customOrders.reduce(function(s,c){return s + c.unitPrice*c.qty;}, 0);
  var sv = document.getElementById('subtotalVal');
  var tv = document.getElementById('totalVal');
  if (sv) sv.textContent = '₹' + sub;
  if (tv) tv.textContent = '₹' + (sub + DELIVERY);
}

// ── CALENDAR ──────────────────────────
function initCal() {
  var now = new Date(); calY = now.getFullYear(); calM = now.getMonth();
  renderCal();
}
function calShift(d) {
  calM += d;
  if (calM > 11) { calM = 0; calY++; }
  if (calM < 0)  { calM = 11; calY--; }
  renderCal();
}
function toggleCal() {
  var w = document.getElementById('calWrap'), a = document.getElementById('dtArr');
  var t = document.getElementById('dateTrigger');
  var open = w.classList.contains('open');
  w.classList.toggle('open', !open);
  a.classList.toggle('open', !open);
  t.setAttribute('aria-expanded', !open);
  w.setAttribute('aria-hidden', open);
  if (!open) renderCal();
}
function renderCal() {
  var MN = ['January','February','March','April','May','June',
            'July','August','September','October','November','December'];
  document.getElementById('calMth').textContent = MN[calM] + ' ' + calY;
  var today = new Date(); today.setHours(0,0,0,0);
  var tom   = new Date(today); tom.setDate(today.getDate()+1);
  var first = new Date(calY, calM, 1).getDay();
  var days  = new Date(calY, calM+1, 0).getDate();
  var html  = ['Su','Mo','Tu','We','Th','Fr','Sa']
    .map(function(d){return '<div class="cal-dl">'+d+'</div>';}).join('');
  for (var i=0;i<first;i++) html+='<div class="cal-d empty"></div>';
  for (var d2=1;d2<=days;d2++) {
    var dt=new Date(calY,calM,d2); dt.setHours(0,0,0,0);
    var cls='cal-d';
    if (dt<today)  { cls+=' past dis'; }
    else if (dt.getTime()===today.getTime()) { cls+=' today dis'; }
    else if (dt.getTime()===tom.getTime())   { cls+=' tom'; }
    var isSel=selDate&&selDate.getTime()===dt.getTime(); if(isSel) cls+=' sel';
    var oc=cls.indexOf('dis')<0?' onclick="pickDate('+d2+','+calM+','+calY+')"':'';
    html+='<div class="'+cls+'" role="gridcell" tabindex="'+(cls.indexOf('dis')<0?0:-1)+'"'+oc+'>'+d2+'</div>';
  }
  document.getElementById('calGrid').innerHTML = html;
}
function pickDate(d,m,y) {
  var dt=new Date(y,m,d); dt.setHours(0,0,0,0);
  var today=new Date(); today.setHours(0,0,0,0);
  if (dt<=today) return;
  selDate=dt;
  var DN=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var MN2=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var lbl=DN[dt.getDay()]+', '+dt.getDate()+' '+MN2[dt.getMonth()];
  var el=document.getElementById('dtText');
  el.textContent=lbl; el.classList.remove('ph');
  document.getElementById('dateTrigger').classList.add('filled');
  document.getElementById('calWrap').classList.remove('open');
  document.getElementById('dtArr').classList.remove('open');
  document.getElementById('dateTrigger').setAttribute('aria-expanded','false');
  renderCal();
}

// ── SLOT ──────────────────────────────
function pickSlot(el, val) {
  document.querySelectorAll('.slot-card').forEach(function(c){
    c.classList.remove('sel'); c.setAttribute('aria-checked','false');
  });
  el.classList.add('sel'); el.setAttribute('aria-checked','true');
  selSlot = val;
}

// ── WHATSAPP ORDER ────────────────────
function goWA(anchor) {
  // Validate delivery details
  var fn=v('f-fname'),ph=v('f-phone'),fl=v('f-flat'),ar=v('f-area'),ct=v('f-city'),
      pi=v('f-pin'),st=document.getElementById('f-state').value;
  if (!fn||!ph||!fl||!ar||!ct||!pi||!st) {
    showToast('📋 Missing details','Please fill all required (*) fields.'); return false;
  }
  if (!/^\d{6}$/.test(pi)) { showToast('📌 Invalid PIN','Please enter a valid 6-digit PIN code.'); return false; }

  var DN=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var MN=['January','February','March','April','May','June','July','August','September','October','November','December'];
  var nd=selDate;
  var niceDate=DN[nd.getDay()]+', '+nd.getDate()+' '+MN[nd.getMonth()]+' '+nd.getFullYear();

  var lines='', grandTotal=0, totalQty=0, hasCustom=false;
  Object.keys(cart).forEach(function(id) {
    var p=ALL.find(function(x){return x.id===id;}); if(!p) return;
    var lt=p.price*cart[id]; grandTotal+=lt; totalQty+=cart[id];
    lines+=p.e+' '+p.name+' ('+p.cat+')\n   Qty: '+cart[id]+'  x  Rs.'+p.price+' = Rs.'+lt+'\n';
  });
  customOrders.forEach(function(c) {
    var lt=c.unitPrice*c.qty; grandTotal+=lt; totalQty+=c.qty;
    hasCustom = true;
    lines+=(c.type==='Bouquet'?'💐':'🌷')+' Custom '+c.type+' — '+c.size
      +(c.flowers.length?' ('+c.flowers.join(', ')+')':'')
      +'\n   Qty: '+c.qty+'  x  Rs.'+c.unitPrice+' = Rs.'+lt+'\n'
      +(c.note?'   Note: '+c.note+'\n':'');
  });

  var ln=v('f-lname'), note=v('f-note');
  var msg=
    'Hi BLOOM-THE-RIZZ! I would like to place an order. 🌹\n\n'
    +'🛒 ORDER DETAILS\n'+'─────────────────────\n'
    +lines
    +'─────────────────────\n'
    +'Total Items  : '+totalQty+'\n'
    +'Subtotal     : Rs.'+grandTotal+'\n'
    +'Delivery Charge : Rs.'+DELIVERY+'\n'
    +'💰 TOTAL     : Rs.'+(grandTotal+DELIVERY)+'/-\n'
    +'─────────────────────\n'
    +'📅 Date  : '+niceDate+'\n'
    +'⏰ Slot  : '+selSlot+'\n'
    +'─────────────────────\n'
    +'📍 DELIVERY ADDRESS\n'
    +'Name    : '+fn+(ln?' '+ln:'')+'\n'
    +'Phone   : '+ph+'\n'
    +'Address : '+fl+', '+ar+'\n'
    +'City    : '+ct+' - '+pi+'\n'
    +'State   : '+st+'\n'
    +(note?'Note    : '+note+'\n':'')
    +(hasCustom?'📷 If you have a reference/inspiration photo for your custom order, please share it in this chat (optional)\n':'')
    +'─────────────────────\n'
    +'Kindly confirm my order and share payment details. Thank you! 🙏';

  var waLink = 'https://wa.me/917829977348?text=' + encodeURIComponent(msg);
  if (anchor) anchor.href = waLink;
  var win = window.open(waLink, '_blank');
  if (!win) { window.location.href = waLink; }

  var tom2=new Date(); tom2.setDate(tom2.getDate()+1);
  var isTom=nd.toDateString()===tom2.toDateString();
  showToast(
    isTom?'🌸 Order placed for tomorrow!':'🌷 Order placed for '+niceDate+'!',
    'Opening WhatsApp — tap Send to confirm your order! 💚'
  );
  return false;
}
function v(id){return document.getElementById(id).value.trim();}

// ── SEARCH ────────────────────────────
function doSearch(val,dropId) {
  var drop=document.getElementById(dropId);
  if (!val.trim()){drop.classList.remove('on');return;}
  var q=val.toLowerCase();
  var hits=ALL.filter(function(p){
    return p.name.toLowerCase().includes(q)||p.cat.toLowerCase().includes(q)||p.desc.toLowerCase().includes(q);
  }).slice(0,6);
  if (!hits.length){drop.classList.remove('on');return;}
  drop.innerHTML=hits.map(function(p){
    return '<div class="s-row" onclick="jumpTo(\''+p.id+'\',\''+dropId+'\')">'
      +'<span style="font-size:1.25rem">'+p.e+'</span>'
      +'<div><div class="s-nm">'+p.name+'</div><div class="s-ct">'+p.cat+'</div></div>'
      +'<span class="s-pr">₹'+p.price+'</span>'
    +'</div>';
  }).join('');
  drop.classList.add('on');
}
function jumpTo(id,dropId) {
  document.getElementById(dropId).classList.remove('on');
  ['sd','sm'].forEach(function(i){var e=document.getElementById(i);if(e)e.value='';});
  var el=document.getElementById('card-'+id);
  if(el)el.scrollIntoView({behavior:'smooth',block:'center'});
}
document.addEventListener('click',function(e){
  if(!e.target.closest('.searchbar')&&!e.target.closest('.mob-bar'))
    document.querySelectorAll('.s-drop').forEach(function(d){d.classList.remove('on');});
});

// ── CATEGORY SCROLL ───────────────────
function scrollSec(id, el) {
  document.querySelectorAll('#cat-strip-main .cat-pill').forEach(function(c){c.classList.remove('active');});
  el.classList.add('active');
  var sec=document.getElementById(id);
  if(sec) window.scrollTo({top:sec.getBoundingClientRect().top+window.scrollY-115,behavior:'smooth'});
}
window.addEventListener('scroll',function() {
  var ids=['s-bouquets','s-vase','s-pooja','s-stems','s-gajara','s-decor'];
  var pills=document.querySelectorAll('#cat-strip-main .cat-pill');
  for(var i=ids.length-1;i>=0;i--) {
    var el=document.getElementById(ids[i]);
    if(el&&window.scrollY>=el.offsetTop-130){
      pills.forEach(function(p){p.classList.remove('active');}); pills[i].classList.add('active'); break;
    }
  }
},{passive:true});

// ── TOAST ─────────────────────────────
function showToast(title,sub) {
  document.getElementById('tTitle').textContent=title;
  document.getElementById('tSub').textContent=sub;
  var t=document.getElementById('toast');
  t.classList.add('on');
  setTimeout(function(){t.classList.remove('on');},4000);
}
