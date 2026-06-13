import { MinusSquare, PlusSquare, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Checkbox } from "~/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "~/components/ui/field"
import { ScrollArea } from "~/components/ui/scroll-area";
import { Hearder } from "~/src/components/Hearder";


type Product = {
  id: number;
  category: string;
  name: string;
  description: string;
  discountPrice: number;
  mrp: number;
  discount: number;
  image: string;
  qty: number;
};

export default function Home() {
  const [productList, setProductList] = useState([
    {
      id: 1,
      category: "soap",
      name: "Ghar Soap",
      description: "Ghar Soaps Magic Soap | Soap For All Skin Types",
      discountPrice: 149,
      mrp: 199,
      discount: 25,
      image:
        "https://i.pinimg.com/736x/2c/78/d0/2c78d07b6141e369c28e0134b67022d5.jpg",
      qty: 0,
    },
    {
      id: 2,
      category: "soap",
      name: "Park Avenue Soap",
      description: "Park Avenue Good Morning Soap Pack of 3",
      discountPrice: 129,
      mrp: 159,
      discount: 19,
      image:
        "https://i.pinimg.com/736x/54/e5/7c/54e57c02c34d11a240f3c0f101720c88.jpg",
      qty: 0,
    },
    {
      id: 3,
      category: "soap",
      name: "Dettol Soap",
      description: "Dettol Original Anti-Bacterial Soap Bar, 4 pack",
      discountPrice: 179,
      mrp: 239,
      discount: 25,
      image:
        "https://i.pinimg.com/736x/f6/57/da/f657dad2affa817d2ff549d92fd98e4e.jpg",
      qty: 0,
    },
    {
      id: 4,
      category: "soap",
      name: "DERMATOUCH Soap",
      description: "DERMATOUCH Kojic Acid 1% Soap with Glutathione",
      discountPrice: 179,
      mrp: 249,
      discount: 28,
      image:
        "https://i.pinimg.com/736x/f6/af/73/f6af73a52d175a057e7fac4cef832139.jpg",
      qty: 0,
    },
    {
      id: 5,
      category: "soap",
      name: "Lux Beauty Soap",
      description: "Lux Soft Touch Beauty Soap bar, 75g",
      discountPrice: 99,
      mrp: 129,
      discount: 23,
      image:
        "https://i.pinimg.com/736x/e7/40/83/e74083c7a398a662c5fcb061abf2cc2a.jpg",
      qty: 0,
    },
    {
      id: 6,
      category: "hair shampoo",
      name: "Avalon Organics Hair Shampoo",
      description:
        "12 Dandruff Shampoos That Actually Work On Dry, Flaky Scalps — A Derm Weighs In",
      discountPrice: 189,
      mrp: 299,
      discount: 37,
      image:
        "https://i.pinimg.com/736x/7f/eb/95/7feb95612c696fef73b108fef121b8b2.jpg",
      qty: 0,
    },
    {
      id: 7,
      category: "hair shampoo",
      name: "L'Oreal Conditioner",
      description: "L'Oreal Paris Total Repair Conditioner, 350ml",
      discountPrice: 229,
      mrp: 299,
      discount: 23,
      image:
        "https://i.pinimg.com/736x/30/08/ee/3008ee3d72d23eebad6e76058fffe593.jpg",
      qty: 0,
    },
    {
      id: 8,
      category: "hair shampoo",
      name: "Bajaj Almond Drops Hair Serum",
      description: "Bajaj Almond Drops Hair Serum for healthy hair, 100ml",
      discountPrice: 199,
      mrp: 249,
      discount: 20,
      image:
        "https://i.pinimg.com/736x/17/66/0c/17660ca49a8bc099b14260104b15675a.jpg",
      qty: 0,
    },
    {
      id: 9,
      category: "hair shampoo",
      name: "Herbal Hair Mask",
      description: "St. Botanica Moroccan Argan Hair Mask, 150ml",
      discountPrice: 299,
      mrp: 399,
      discount: 25,
      image:
        "https://i.pinimg.com/736x/8a/07/e0/8a07e022e1bd1511fd62bb6a90a39aa6.jpg",
      qty: 0,
    },
    {
      id: 10,
      category: "hair shampoo",
      name: "Dove Intense Repair Shampoo",
      description: "Dove Intense Repair Shampoo for strong, smooth hair",
      discountPrice: 219,
      mrp: 299,
      discount: 27,
      image:
        "https://i.pinimg.com/736x/86/a6/e7/86a6e7d06035912df41d1c93d0c03276.jpg",
      qty: 0,
    },
    {
      id: 11,
      category: "face wash",
      name: "Mamaearth Face Wash",
      description:
        "Mamaearth Rice Face Wash With Rice Water & Niacinamide for Glass Skin",
      discountPrice: 249,
      mrp: 299,
      discount: 17,
      image:
        "https://i.pinimg.com/736x/ea/36/f7/ea36f79de4dce2f1d692fc5abcbebf38.jpg",
      qty: 0,
    },
    {
      id: 12,
      category: "face wash",
      name: "Dot & Key Vitamin C Face Wash",
      description:
        "Dot & Key Vitamin C Face Wash is a gentle yet effective cleanser enriched with Vitamin C",
      discountPrice: 129,
      mrp: 199,
      discount: 35,
      image:
        "https://i.pinimg.com/736x/7a/e1/26/7ae1263808f8c2ed0ecfff60779ca5bf.jpg",
      qty: 0,
    },
    {
      id: 13,
      category: "face wash",
      name: "Himalaya Neem Face Wash",
      description: "Himalaya Purifying Neem Face Wash for acne-prone skin",
      discountPrice: 179,
      mrp: 229,
      discount: 22,
      image:
        "https://i.pinimg.com/736x/4b/13/8d/4b138dba6af4cd0aa8148f2568efed38.jpg",
      qty: 0,
    },
    {
      id: 14,
      category: "face wash",
      name: "Neutrogena Oil Free Face Wash",
      description: "Neutrogena Oil-Free Acne Face Wash, 150ml",
      discountPrice: 299,
      mrp: 399,
      discount: 25,
      image:
        "https://i.pinimg.com/736x/f6/76/4a/f6764a10868e96049866974801480b50.jpg",
      qty: 0,
    },
    {
      id: 15,
      category: "face wash",
      name: "Garnier Bright Complete Face Wash",
      description: "Garnier Bright Complete Fairness Face Wash, 100ml",
      discountPrice: 179,
      mrp: 229,
      discount: 22,
      image:
        "https://i.pinimg.com/736x/ae/37/72/ae37729891086aca9f783185663f7529.jpg",
      qty: 0,
    },
    {
      id: 16,
      category: "perfume",
      name: "BELLAVITA Perfume",
      description: "Bella Vita Luxury CEO Man 20 ml",
      discountPrice: 399,
      mrp: 499,
      discount: 20,
      image:
        "https://i.pinimg.com/736x/fa/83/35/fa83353906acf169fd03ede1e4f4dc58.jpg",
      qty: 0,
    },
    {
      id: 17,
      category: "perfume",
      name: "Wildplay Perfume",
      description: "Wildplay Chocolate Vanilla 30ml Unisex Perfume",
      discountPrice: 599,
      mrp: 799,
      discount: 25,
      image:
        "https://i.pinimg.com/736x/d2/05/d5/d205d594376917b8d1e27bab78a935c0.jpg",
      qty: 0,
    },
    {
      id: 18,
      category: "perfume",
      name: "Yardley English Lavender",
      description: "Yardley English Lavender Eau de Parfum, 50ml",
      discountPrice: 349,
      mrp: 449,
      discount: 22,
      image:
        "https://i.pinimg.com/736x/86/9b/88/869b883729ad63bb6671aa063a2feeca.jpg",
      qty: 0,
    },
    {
      id: 19,
      category: "perfume",
      name: "Engage Perfume",
      description: "Engage L'amante Perfume for women, 50ml",
      discountPrice: 299,
      mrp: 399,
      discount: 25,
      image:
        "https://i.pinimg.com/736x/cc/17/2f/cc172f847dab573751a6536f64a4833b.jpg",
      qty: 0,
    },
    {
      id: 20,
      category: "perfume",
      name: "Fogg Black Night Wave",
      description: "Fogg Black Night Wave Perfume Spray, 50ml",
      discountPrice: 249,
      mrp: 329,
      discount: 24,
      image:
        "https://i.pinimg.com/736x/4a/f1/0a/4af10acfe0328f66b58c065570f47423.jpg",
      qty: 0,
    },
    {
      id: 21,
      category: "sunscreen",
      name: "Sunscreen SPF 50+",
      description: "Aqualogica Matte Sunscreen SPF 50 PA+++ with Zinc Oxide",
      discountPrice: 349,
      mrp: 499,
      discount: 30,
      image:
        "https://i.pinimg.com/736x/6a/ca/fe/6acafe30b3b9f59a60c610eb7d36d517.jpg",
      qty: 0,
    },
    {
      id: 22,
      category: "sunscreen",
      name: "Lotus Herbals Safe Sun",
      description: "Lotus Herbals Safe Sun 3-in-1 Matte Look SPF 50",
      discountPrice: 299,
      mrp: 399,
      discount: 25,
      image:
        "https://i.pinimg.com/736x/01/1b/5b/011b5b4fdd16e36fc5316f8e2d9f5c88.jpg",
      qty: 0,
    },
    {
      id: 23,
      category: "sunscreen",
      name: "Neutrogena Ultra Sheer",
      description: "Neutrogena Ultra Sheer Dry-Touch Sunblock SPF 50+",
      discountPrice: 399,
      mrp: 549,
      discount: 27,
      image:
        "https://i.pinimg.com/736x/8a/31/d9/8a31d9855fc90f1ef3163fa7efa2920f.jpg",
      qty: 0,
    },
    {
      id: 24,
      category: "sunscreen",
      name: "L'Oreal UV Defender",
      description: "L'Oreal UV Defender SPF 50+ Invisible Sunscreen",
      discountPrice: 329,
      mrp: 429,
      discount: 23,
      image:
        "https://i.pinimg.com/736x/df/41/da/df41dadff9f3fb00fdf4a0dc07838437.jpg",
      qty: 0,
    },
    {
      id: 25,
      category: "sunscreen",
      name: "Biotique Sandalwood SPF 50",
      description: "Biotique Bio Sandalwood Sunscreen SPF 50+",
      discountPrice: 249,
      mrp: 329,
      discount: 24,
      image:
        "https://i.pinimg.com/736x/be/c3/28/bec32837abd8f3bc844673f4f5052046.jpg",
      qty: 0,
    },
    {
      id: 26,
      category: "cleanser",
      name: "Dove Body Wash",
      description: "Dove Deep Moisture Body Wash, 250ml",
      discountPrice: 199,
      mrp: 299,
      discount: 33,
      image:
        "https://i.pinimg.com/736x/2b/96/08/2b960861a71310c971afec158c5c4997.jpg",
      qty: 0,
    },
    {
      id: 27,
      category: "cleanser",
      name: "Ponds Cold Cream",
      description: "Ponds Moisturizing Cold Cream for dry skin, 250ml",
      discountPrice: 149,
      mrp: 199,
      discount: 25,
      image:
        "https://i.pinimg.com/736x/2c/1d/cb/2c1dcbd998b1a2be07e1680104b5a177.jpg",
      qty: 0,
    },
    {
      id: 28,
      category: "cleanser",
      name: "Dettol Handwash",
      description: "Dettol Original Liquid Hand Wash, 250ml",
      discountPrice: 129,
      mrp: 179,
      discount: 28,
      image:
        "https://i.pinimg.com/736x/15/98/7e/15987e2b94ae81979d4e17db33ebc274.jpg",
      qty: 0,
    },
    {
      id: 29,
      category: "cleanser",
      name: "Colgate Toothpaste",
      description: "Colgate Strong Teeth Toothpaste, 80g",
      discountPrice: 79,
      mrp: 99,
      discount: 20,
      image:
        "https://i.pinimg.com/736x/e7/ba/44/e7ba444d2faf962d2a7c43aaf786ceb7.jpg",
      qty: 0,
    },
    {
      id: 30,
      category: "cleanser",
      name: "Daily Care Aloe Vera Gel",
      description: "Daily Care Aloe Vera Gel for skin and hair",
      discountPrice: 149,
      mrp: 199,
      discount: 25,
      image:
        "https://i.pinimg.com/736x/d4/60/44/d4604408314e0200525a5a5739acec9e.jpg",
      qty: 0,
    },
    {
      id: 31,
      category: "water bottle",
      name: "Hydro Flask Water Bottle",
      description: "Stainless steel water bottle with vacuum insulation, 500ml",
      discountPrice: 999,
      mrp: 1299,
      discount: 23,
      image:
        "https://i.pinimg.com/736x/7a/03/68/7a0368ff6a97e9acf7b9cff45aac7139.jpg",
      qty: 0,
    },
    {
      id: 32,
      category: "water bottle",
      name: "Milton Steel Bottle",
      description: "Milton Stainless Steel Water Bottle, 1L",
      discountPrice: 499,
      mrp: 649,
      discount: 23,
      image:
        "https://i.pinimg.com/736x/01/32/34/013234062fb2084d918f8a69cc6e6412.jpg",
      qty: 0,
    },
    {
      id: 33,
      category: "water bottle",
      name: "Cello Active Bottle",
      description: "Cello Active Sports Water Bottle, 750ml",
      discountPrice: 299,
      mrp: 399,
      discount: 25,
      image:
        "https://i.pinimg.com/736x/8c/b2/b9/8cb2b954e4755ff3fff7765a37228cba.jpg",
      qty: 0,
    },
    {
      id: 34,
      category: "water bottle",
      name: "CamelBak Sip Bottle",
      description: "CamelBak Leak-Proof Sports Bottle, 600ml",
      discountPrice: 799,
      mrp: 999,
      discount: 20,
      image:
        "https://i.pinimg.com/736x/a7/f7/3f/a7f73f8cc1b1fd14fc3786335130930a.jpg",
      qty: 0,
    },
    {
      id: 35,
      category: "water bottle",
      name: "Tupperware Cool Bottle",
      description: "Tupperware Cool Water Bottle, 750ml",
      discountPrice: 449,
      mrp: 549,
      discount: 18,
      image:
        "https://i.pinimg.com/736x/fe/36/8d/fe368de266df3a6abae6d7c38d3ed322.jpg",
      qty: 0,
    },
    {
      id: 36,
      category: "bagpack",
      name: "Wildcraft Backpack",
      description: "Wildcraft Trail Backpack with laptop sleeve, 30L",
      discountPrice: 1899,
      mrp: 2399,
      discount: 21,
      image:
        "https://i.pinimg.com/736x/3c/81/a5/3c81a561a4374c5380c983693d9d52ae.jpg",
      qty: 0,
    },
    {
      id: 37,
      category: "bagpack",
      name: "American Tourister Backpack",
      description: "American Tourister Laptop Backpack, 28L",
      discountPrice: 1699,
      mrp: 2199,
      discount: 23,
      image:
        "https://i.pinimg.com/736x/ca/c3/7e/cac37e9a4d44acb4ac1d378624def7bb.jpg",
      qty: 0,
    },
    {
      id: 38,
      category: "bagpack",
      name: "Skybags School Backpack",
      description: "Skybags School Backpack with multiple compartments, 25L",
      discountPrice: 1299,
      mrp: 1699,
      discount: 24,
      image:
        "https://i.pinimg.com/736x/1f/78/f2/1f78f29fd985b583e80d68e2ac6d556a.jpg",
      qty: 0,
    },
    {
      id: 39,
      category: "bagpack",
      name: "Puma Sports Backpack",
      description: "Puma Sport Backpack for gym and travel, 32L",
      discountPrice: 1599,
      mrp: 1999,
      discount: 20,
      image:
        "https://i.pinimg.com/736x/78/58/95/78589592f3811e71949577f57c5ab1a9.jpg",
      qty: 0,
    },
    {
      id: 40,
      category: "bagpack",
      name: "Adidas School Backpack",
      description: "Adidas Kids School Backpack with ergonomic straps",
      discountPrice: 1399,
      mrp: 1799,
      discount: 22,
      image:
        "https://i.pinimg.com/736x/4e/6a/79/4e6a79861e52ebccb4d45cc3d4b0f939.jpg",
      qty: 0,
    },
    {
      id: 41,
      category: "comb",
      name: "Kent Hair Comb",
      description: "Kent Premium Hair Comb for smooth styling",
      discountPrice: 99,
      mrp: 129,
      discount: 23,
      image:
        "https://i.pinimg.com/736x/f0/1f/7d/f01f7d1a9e930b60b39d80db2b433b0d.jpg",
      qty: 0,
    },
    {
      id: 42,
      category: "comb",
      name: "Salon Styling Comb",
      description: "Heavy-duty styling comb for salon use",
      discountPrice: 149,
      mrp: 199,
      discount: 25,
      image:
        "https://i.pinimg.com/1200x/c5/22/f1/c522f121deb1977c5b7d25214564f8a2.jpg",
      qty: 0,
    },
    {
      id: 43,
      category: "comb",
      name: "Wide Tooth Detangling Comb",
      description: "Wide Tooth Comb for wet and curly hair",
      discountPrice: 129,
      mrp: 179,
      discount: 28,
      image:
        "https://i.pinimg.com/736x/ce/5c/2c/ce5c2cb8fb5da238a45961fd477fd4c1.jpg",
      qty: 0,
    },
    {
      id: 44,
      category: "comb",
      name: "Pocket Travel Comb Set",
      description: "Compact pocket comb set for travel and touch-ups",
      discountPrice: 179,
      mrp: 229,
      discount: 22,
      image:
        "https://i.pinimg.com/736x/70/50/1a/70501a7ce64c30c5bb30ce35f2feb2a4.jpg",
      qty: 0,
    },
    {
      id: 45,
      category: "comb",
      name: "Anti-Static Hair Comb",
      description: "Anti-static comb for smooth, frizz-free styling",
      discountPrice: 139,
      mrp: 189,
      discount: 26,
      image:
        "https://i.pinimg.com/736x/ac/15/52/ac15527f3d90671d20bbce4156eb8f25.jpg",
      qty: 0,
    },
  ]);
  const [copyProduct, setCopyProduct] = useState<Product[]>(productList);
  const [cart, setCart] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const product_category = [
    ...new Set(
      productList.map((item) => {
        return item.category;
      }),
    ),
  ];

  const filter_by_category = (index: number) => {
    const index_of_product = product_category?.[index];
    if (!index_of_product) return;
    const filterProductCategory = productList.filter(
      (item) => item.category === index_of_product,
    );
    console.log("product by index", filterProductCategory);
    setCopyProduct(filterProductCategory);
  };

  const return_productList = () => {
    const products = productList.map((list) => list);
    setCopyProduct(products);
  };

  const newProducts = [...new Set(productList.map((item) => item.name))];
  const filter_by_name = () => {
    const name_of_product = newProducts;
    if (!name_of_product) return;
    const filterProductName = productList.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setCopyProduct(filterProductName);
    console.log("filter b y name ", filterProductName);
  };

  const onAdd = (list: Product) => {
    const findProduct = cart.find((item) => item.id === list.id);
    if (!findProduct) {
      return (
        setCart([...cart, { ...list, qty: 1 }]),
        toast.success(`${list.name} added successfuly`)
      );
    } else {
      const addQty = cart.map((item) =>
        item.id === list.id ? { ...item, qty: item.qty + 1 } : item,
      );
      return setCart(addQty);
    }

    // const findProduct = cart.find((item) => item.id === list.id);
    // if (!findProduct) {
    //   (setCart([...cart, { ...list, qty: 1 }]),
    //     toast.success(`${list.name} added successfuly`));
    //   return;
    // } else {
    //   const updatedCart = cart?.map((listItem) => {
    //     if (listItem.id === list.id) {
    //       listItem.qty = listItem.qty + 1;
    //       return listItem;
    //     }
    //     return listItem;
    //   });

    //   setCart(updatedCart);
    // }
  };

  const decrease_qty = (list: Product) => {
    if (list.qty === 1) {
      const filterQty = cart.filter((item) => item.id !== list.id);
      toast.error(`${list.name} has removed`);
      return setCart(filterQty);
    } else {
      const MinusQty = cart.map((item) =>
        item.id === list.id ? { ...item, qty: item.qty - 1 } : item,
      );
      return setCart(MinusQty);
    }

    // const currentCartList = [...cart];
    // const updatecart = currentCartList
    //   .filter((item) => {
    //     return list.qty === 1 ? item.id !== list.id : item;
    //   })
    //   .map((listItem) => {
    //     return listItem.id === list.id
    //       ? { ...listItem, qty: listItem.qty - 1 }
    //       : listItem;
    //   });
    // setCart(updatecart);
  };

  const remove_all_products = () => {
    setCart([]);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      <Toaster />

      <Hearder
        remove_all_products={remove_all_products}
        filter_by_name={filter_by_name}
        cart={cart as [Product]}
        // searchResult={searchResult}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        productList={productList}
        filter_by_category={filter_by_category}
        return_productList={return_productList}
      />
      <div className="flex gap-5 justify-between mx-auto w-full">
        {/* <ScrollArea className="h-screen fixed">
          <div className="grid gap-4 justify-start p-2 mt-20 bg-amber-400">
            <FieldSet>
              <FieldLegend>Category</FieldLegend>
              <FieldGroup className="gap-3 w-80">
                <Field orientation="horizontal">
                  <Checkbox
                    id="1"
                    name="finder-pref-9k2-hard-disks-ljj-checkbox"
                    defaultChecked
                  />
                  <FieldLabel
                    htmlFor="1"
                    className="font-normal cursor-pointer"
                  >
                    Soap
                  </FieldLabel>
                </Field>
                <Field orientation="horizontal">
                  <Checkbox
                    id="2"
                    name="finder-pref-9k2-external-disks-1yg-checkbox"
                    defaultChecked
                  />
                  <FieldLabel
                    htmlFor="2"
                    className="font-normal cursor-pointer"
                  >
                    Hair Shampoo
                  </FieldLabel>
                </Field>
                <Field orientation="horizontal">
                  <Checkbox
                    id="3"
                    name="finder-pref-9k2-cds-dvds-fzt-checkbox"
                  />
                  <FieldLabel
                    htmlFor="3"
                    className="font-normal cursor-pointer"
                  >
                    Face Wash
                  </FieldLabel>
                </Field>
                <Field orientation="horizontal">
                  <Checkbox
                    id="4"
                    name="finder-pref-9k2-connected-servers-6l2-checkbox"
                  />
                  <FieldLabel
                    htmlFor="4"
                    className="font-normal cursor-pointer"
                  >
                    Perfume
                  </FieldLabel>
                </Field>
                <Field orientation="horizontal">
                  <Checkbox
                    id="5"
                    name="finder-pref-9k2-connected-servers-6l2-checkbox"
                  />
                  <FieldLabel
                    htmlFor="4"
                    className="font-normal cursor-pointer"
                  >
                    Sunscreen
                  </FieldLabel>
                </Field>
                <Field orientation="horizontal">
                  <Checkbox
                    id="4"
                    name="finder-pref-9k2-connected-servers-6l2-checkbox"
                  />
                  <FieldLabel
                    htmlFor="4"
                    className="font-normal cursor-pointer"
                  >
                    Cleanser
                  </FieldLabel>
                </Field>
                <Field orientation="horizontal">
                  <Checkbox
                    id="4"
                    name="finder-pref-9k2-connected-servers-6l2-checkbox"
                  />
                  <FieldLabel
                    htmlFor="4"
                    className="font-normal cursor-pointer"
                  >
                    Water Bottle
                  </FieldLabel>
                </Field>
                <Field orientation="horizontal">
                  <Checkbox
                    id="4"
                    name="finder-pref-9k2-connected-servers-6l2-checkbox"
                  />
                  <FieldLabel
                    htmlFor="4"
                    className="font-normal cursor-pointer"
                  >
                    Bagpack
                  </FieldLabel>
                </Field>
                <Field orientation="horizontal">
                  <Checkbox
                    id="4"
                    name="finder-pref-9k2-connected-servers-6l2-checkbox"
                  />
                  <FieldLabel
                    htmlFor="4"
                    className="font-normal cursor-pointer"
                  >
                    Comb
                  </FieldLabel>
                </Field>
              </FieldGroup>
            </FieldSet>
            <FieldSet>
              <FieldLegend>Price</FieldLegend>
              <FieldGroup className="gap-3 w-80">
                <Field orientation="horizontal">
                  <Checkbox
                    id="5"
                    name="finder-pref-9k2-hard-disks-ljj-checkbox"
                    defaultChecked
                  />
                  <FieldLabel
                    htmlFor="5"
                    className="font-normal cursor-pointer"
                  >
                    Hard disks
                  </FieldLabel>
                </Field>
                <Field orientation="horizontal">
                  <Checkbox
                    id="6"
                    name="finder-pref-9k2-external-disks-1yg-checkbox"
                    defaultChecked
                  />
                  <FieldLabel
                    htmlFor="6"
                    className="font-normal cursor-pointer"
                  >
                    External disks
                  </FieldLabel>
                </Field>
                <Field orientation="horizontal">
                  <Checkbox
                    id="7"
                    name="finder-pref-9k2-cds-dvds-fzt-checkbox"
                  />
                  <FieldLabel
                    htmlFor="7"
                    className="font-normal cursor-pointer"
                  >
                    CDs, DVDs, and iPods
                  </FieldLabel>
                </Field>
                <Field orientation="horizontal">
                  <Checkbox
                    id="8"
                    name="finder-pref-9k2-connected-servers-6l2-checkbox"
                  />
                  <FieldLabel
                    htmlFor="8"
                    className="font-normal cursor-pointer"
                  >
                    Connected servers
                  </FieldLabel>
                </Field>
              </FieldGroup>
            </FieldSet>
            <FieldSet>
              <FieldLegend>Profile</FieldLegend>
              <FieldGroup className="gap-3 w-80">
                <Field orientation="horizontal">
                  <Checkbox
                    id="9"
                    name="finder-pref-9k2-hard-disks-ljj-checkbox"
                    defaultChecked
                  />
                  <FieldLabel
                    htmlFor="9"
                    className="font-normal cursor-pointer"
                  >
                    Hard disks
                  </FieldLabel>
                </Field>
                <Field orientation="horizontal">
                  <Checkbox
                    id="10"
                    name="finder-pref-9k2-external-disks-1yg-checkbox"
                    defaultChecked
                  />
                  <FieldLabel
                    htmlFor="10"
                    className="font-normal cursor-pointer"
                  >
                    External disks
                  </FieldLabel>
                </Field>
                <Field orientation="horizontal">
                  <Checkbox
                    id="11"
                    name="finder-pref-9k2-cds-dvds-fzt-checkbox"
                  />
                  <FieldLabel
                    htmlFor="11"
                    className="font-normal cursor-pointer"
                  >
                    CDs, DVDs, and iPods
                  </FieldLabel>
                </Field>
                <Field orientation="horizontal">
                  <Checkbox
                    id="12"
                    name="finder-pref-9k2-connected-servers-6l2-checkbox"
                  />
                  <FieldLabel
                    htmlFor="12"
                    className="font-normal cursor-pointer"
                  >
                    Connected servers
                  </FieldLabel>
                </Field>
              </FieldGroup>
            </FieldSet>
            <FieldSet>
              <FieldLegend>Profile</FieldLegend>
              <FieldGroup className="gap-3 w-80">
                <Field orientation="horizontal">
                  <Checkbox
                    id="13"
                    name="finder-pref-9k2-hard-disks-ljj-checkbox"
                    defaultChecked
                  />
                  <FieldLabel
                    htmlFor="13"
                    className="font-normal cursor-pointer"
                  >
                    Hard disks
                  </FieldLabel>
                </Field>
                <Field orientation="horizontal">
                  <Checkbox
                    id="14"
                    name="finder-pref-9k2-external-disks-1yg-checkbox"
                    defaultChecked
                  />
                  <FieldLabel
                    htmlFor="14"
                    className="font-normal cursor-pointer"
                  >
                    External disks
                  </FieldLabel>
                </Field>
                <Field orientation="horizontal">
                  <Checkbox
                    id="15"
                    name="finder-pref-9k2-cds-dvds-fzt-checkbox"
                  />
                  <FieldLabel
                    htmlFor="15"
                    className="font-normal cursor-pointer"
                  >
                    CDs, DVDs, and iPods
                  </FieldLabel>
                </Field>
                <Field orientation="horizontal">
                  <Checkbox
                    id="16"
                    name="finder-pref-9k2-connected-servers-6l2-checkbox"
                  />
                  <FieldLabel
                    htmlFor="16"
                    className="font-normal cursor-pointer"
                  >
                    Connected servers
                  </FieldLabel>
                </Field>
              </FieldGroup>
            </FieldSet>
          </div>
        </ScrollArea> */}

        <div className="mx-auto max-w-6xl px-4 pt-20 pb-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {productList &&
            copyProduct?.map((list: Product) => {
              const isCartItem = cart?.find(
                (cartItem) => cartItem.id === list.id,
              );
              return (
                <div className="rounded-3xl" key={list.id}>
                  <Card className="overflow-hidden border border-slate-200 bg-white shadow-sm h-full flex flex-col">
                    <img
                      className="w-full h-88 object-cover shrink-0"
                      src={list.image}
                      alt={list.name}
                    />
                    <CardHeader className="pt-6 shrink-0">
                      <CardTitle className="text-lg font-semibold tracking-tight text-slate-900">
                        {list.name}
                      </CardTitle>
                      <CardDescription className="text-sm text-slate-500 truncate line-clamp-2">
                        {list.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-lg font-semibold text-slate-900">
                        ₹{list.discountPrice}
                        <span className="ml-2 text-sm font-normal text-slate-400 line-through">
                          ₹{list.mrp}
                        </span>
                        <span className="ml-2 text-sm font-medium text-emerald-600">
                          {list.discount}% Off
                        </span>
                      </p>

                      <div className="mt-6">
                        {isCartItem && isCartItem.qty >= 1 ? (
                          <div className="mt-auto flex items-center justify-between gap-3 rounded-2xl inset-shadow-2xs border border-slate-200 bg-slate-50 p-3">
                            <Button
                              onClick={() => {
                                onAdd(list);
                              }}
                              className="h-10 w-10 rounded-lg bg-slate-900 text-white hover:bg-slate-700"
                            >
                              <PlusSquare className="size-5" />
                            </Button>
                            <p className="text-lg font-medium text-slate-900">
                              {isCartItem.qty}
                            </p>
                            <Button
                              onClick={() => {
                                decrease_qty(isCartItem);
                              }}
                              className="h-10 w-10 rounded-lg bg-slate-900 text-white hover:bg-slate-700"
                            >
                              <MinusSquare className="size-5" />
                            </Button>
                          </div>
                        ) : (
                          <Button
                            onClick={() => {
                              onAdd(list);
                            }}
                            variant="outline"
                            className="w-full rounded-lg border border-slate-200 bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800 hover:text-white"
                          >
                            Add to cart
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
        </div>
      </div>

    </div>
  );
}
