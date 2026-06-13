import { ShoppingCart, Search, ShoppingBag, X } from "lucide-react";
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "~/components/ui/card";
import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
} from "~/components/ui/combobox";
import {
    Menubar,
    MenubarContent,
    MenubarGroup,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "~/components/ui/menubar";
import { } from "lucide-react";

import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
    InputGroupTextarea,
} from "~/components/ui/input-group";
import { useEffect, useState, type SetStateAction } from "react";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";

export type Product = {
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

export type Category = {
    name: string;
};

interface ProductType {
    cart: Product[];
    // searchResult: Category[];
    searchQuery: string;
    setSearchQuery: React.Dispatch<SetStateAction<string>>;
    productList: Product[];
    filter_by_category: (index: number) => void;
    return_productList: () => void;
    filter_by_name: () => void;
    remove_all_products: () => void;
}

export const Hearder = ({
    cart,
    searchQuery,
    setSearchQuery,
    productList,
    filter_by_category,
    return_productList,
    filter_by_name,
    remove_all_products,
}: ProductType) => {
    const filter_name = productList.filter((listName) =>
        listName.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    // product search by category and it's name.
    return (
        <div>
            <header className="w-full h-16 mx-auto shadow-lg/30 p-2 bg-white fixed z-20">
                <nav className="flex justify-between items-center px-10">
                    <Link to={"/"}>
                        <div className="flex items-center gap-2">
                            <div className="bg-black rounded-xl p-2">
                                <ShoppingBag className="size-6 text-white" />
                            </div>
                            <h1 className="text-3xl text-black font-bold capitalize">
                                HandBag!
                            </h1>
                        </div>
                    </Link>
                    <div>
                        <Combobox items={productList}>
                            <ComboboxInput
                                className="w-120 gap-2"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search for cleanser, soap, face wash, and more.."
                            >
                                <InputGroupAddon>
                                    <Search className="text-black size-5" />
                                </InputGroupAddon>
                            </ComboboxInput>
                            <ComboboxContent className={`w-120 right-8`}>
                                <ComboboxList>
                                    {searchQuery.length > 0 ? (
                                        <div>
                                            <div>
                                                <h1 className="text-lg text-black font-semibold px-2 w-119 fixed z-50 top-0 bg-white">
                                                    Search Results:{" "}
                                                </h1>
                                                {filter_name.map((itemName) => (
                                                    <div key={itemName.id} className="mt-6">
                                                        <ComboboxItem
                                                            onClick={() => filter_by_name()}
                                                            onKeyDown={(e) => e.key === "Enter"}
                                                            className={`text-sm hover:text-black font-medium capitalize`}
                                                        >
                                                            <h1>{itemName.name}</h1>
                                                        </ComboboxItem>
                                                    </div>
                                                ))}
                                            </div>
                                            <ComboboxEmpty>No items found.</ComboboxEmpty>
                                        </div>
                                    ) : (
                                        <div className="">
                                            <h1 className="text-lg text-black font-semibold px-2 w-119 fixed z-50 top-0 bg-white">
                                                Categories:
                                            </h1>
                                            <div className="mt-6">
                                                <ComboboxItem
                                                    onClick={() => {
                                                        return_productList();
                                                    }}
                                                    className={`text-sm font-medium capitalize`}
                                                >
                                                    all products
                                                </ComboboxItem>
                                                <ComboboxItem
                                                    onClick={() => filter_by_category(0)}
                                                    className={`text-sm font-medium capitalize`}
                                                >
                                                    Soap
                                                </ComboboxItem>
                                                <ComboboxItem
                                                    onClick={() => filter_by_category(1)}
                                                    className={`text-sm font-medium capitalize`}
                                                >
                                                    hair shampoo
                                                </ComboboxItem>
                                                <ComboboxItem
                                                    onClick={() => filter_by_category(2)}
                                                    className={`text-sm font-medium capitalize`}
                                                >
                                                    face wash
                                                </ComboboxItem>
                                                <ComboboxItem
                                                    onClick={() => filter_by_category(3)}
                                                    className={`text-sm font-medium capitalize`}
                                                >
                                                    perfume
                                                </ComboboxItem>
                                                <ComboboxItem
                                                    onClick={() => filter_by_category(4)}
                                                    className={`text-sm font-medium capitalize`}
                                                >
                                                    sunscreen
                                                </ComboboxItem>
                                                <ComboboxItem
                                                    onClick={() => filter_by_category(5)}
                                                    className={`text-sm font-medium capitalize`}
                                                >
                                                    cleanser
                                                </ComboboxItem>
                                                <ComboboxItem
                                                    onClick={() => filter_by_category(6)}
                                                    className={`text-sm font-medium capitalize`}
                                                >
                                                    water bottle
                                                </ComboboxItem>
                                                <ComboboxItem
                                                    onClick={() => filter_by_category(7)}
                                                    className={`text-sm font-medium capitalize`}
                                                >
                                                    bagpack
                                                </ComboboxItem>
                                                <ComboboxItem
                                                    onClick={() => filter_by_category(8)}
                                                    className={`text-sm font-medium capitalize`}
                                                >
                                                    comb
                                                </ComboboxItem>
                                            </div>
                                        </div>
                                    )}
                                </ComboboxList>
                            </ComboboxContent>
                        </Combobox>
                    </div>

                    <div className="flex gap-3">
                        {cart.length > 0 && (
                            <Button
                                onClick={() => remove_all_products()}
                                className="text-lg text-red-500 font-medium bg-transparent hover:underline capitalize"
                            >
                                clear all
                            </Button>
                        )}
                        <Menubar className="bg-white rounded-full border border-gray-500 p-2 flex">
                            <MenubarMenu>
                                <MenubarTrigger>
                                    <h1 className="text-xl text-left text-black font-medium capitalize">
                                        Cart
                                    </h1>
                                    <ShoppingCart className="size-6" />
                                    <div className="bg-black rounded-full px-2 text-white absolute right-12 top-1">
                                        {cart.length}
                                    </div>
                                </MenubarTrigger>
                                <MenubarContent className="mx-4">
                                    <ScrollArea className="h-70 rounded-md">
                                        <MenubarGroup className="hover:bg-none">
                                            {cart.length > 0 ? (
                                                cart.map((item) => {
                                                    const findQty = cart.find((item) => item.qty > 0)
                                                        ? cart.filter((item) => item)
                                                        : item;

                                                    return (
                                                        <MenubarItem
                                                            className="hover:text-popover w-100 h-full rounded-xs"
                                                            key={item.id}
                                                        >
                                                            <Card className="flex flex-row gap-0.5 w-full h-18">
                                                                <img
                                                                    className="w-16 h-16 overflow-hidden"
                                                                    src={item.image}
                                                                    alt={item.name}
                                                                />
                                                                <CardHeader className="w-full items-center">
                                                                    <CardTitle className="text-sm font-semibold text-ellipsis truncate">
                                                                        {item.name}
                                                                    </CardTitle>
                                                                    <CardDescription className="flex-row text-xs truncate">
                                                                        {item.description} <br />
                                                                        <span className="text-black"> Qty: </span>
                                                                        {item.qty}
                                                                    </CardDescription>
                                                                </CardHeader>
                                                            </Card>
                                                        </MenubarItem>
                                                    );
                                                })
                                            ) : (
                                                <div className="flex-1 justify-center items-center mx-auto">
                                                    <p className="text-2xl text-center text-black font-medium p-2">
                                                        Please add a product !
                                                    </p>
                                                    <img
                                                        className="object-cover mx-auto w-50"
                                                        src="https://i.pinimg.com/736x/03/93/d9/0393d9e7b0e221b363c93e620d3d2129.jpg"
                                                        alt="Empty cart"
                                                    />
                                                </div>
                                            )}
                                        </MenubarGroup>
                                    </ScrollArea>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    </div>
                </nav>
            </header>
        </div>
    );
};
