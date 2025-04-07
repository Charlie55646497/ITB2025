"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./menu.module.css";
import Cart from "../components/cart";
import FoodItem from "../components/food";

//ແມ່ນການກຳນົດແບບຮູບຂອງFoodItem
type FoodItem = {  
  id: number;
  name: string;
  price: number;
  category: string;
};
//ຈຳນວນລາຍການທີ່ເອົາໃສ່ໃນກະຕ່າ ຫຼື ຫ້ອງ
type CartItem = FoodItem & {
  quantity: number;
};

const initialCartItems: CartItem[] = [];

// ແມ່ນການກຳນົດຕົວປ່ຽນ Foods  (Array)(Object) ແຕ່ລະອັນທີ່ແທນໃນເມນູ້ລາຍການ. ທຸກອັນໃນລາຍການມີຂໍ້ມູນ 4 ຢ່າງ: id , name, price, category ແລະ ລຽງຕາມລຳດັບລົງມາ
const Foods: FoodItem[] = [
    { id: 1, name: "Hot Espresso", price: 45, category: "Hot Espresso" },
    { id: 2, name: "Hot piccolo Latte", price: 460, category: "Hot Espresso" },
    { id: 3, name: "Hot Americano", price: 45000, category: "Hot Espresso" },
    { id: 4, name: "Hot Flat White", price: 46000, category: "Hot Espresso" },
    { id: 5, name: "Hot Latte", price: 46000, category: "Hot Espresso" },
    { id: 6, name: "Hot Cappuccino", price: 460, category: "Hot Espresso" },
    { id: 7, name: "Hot Mocha", price: 460, category: "Hot Espresso" },
    { id: 8, name: "Ice Espresso", price: 460, category: "Ice Espresso" },
    { id: 9, name: "Ice Americano", price: 460, category: "Ice Espresso" },
    { id: 10, name: "Ice Flat White", price: 460, category: "Ice Espresso" },
    { id: 11, name: "Ice Latte", price: 460, category: "Ice Espresso" },
    { id: 12, name: "Ice Cappuccino", price: 460, category: "Ice Espresso" },
    { id: 13, name: "Ice Mocha", price: 460, category: "Ice Espresso" },
    { id: 14, name: "Ice C Macchiato", price: 460, category: "Ice Espresso" },
    { id: 15, name: "Frappe Espresso", price: 460, category: "Frappe Espresso" },
    { id: 16, name: "Frappe Flat White", price: 460, category: "Frappe Espresso" },
    { id: 17, name: "Frappe Latte", price: 460, category: "Frappe Espresso" },
    { id: 18, name: "Frappe Cappuccino", price: 460, category: "Frappe Espresso" },
    { id: 19, name: "Frappe Mocha", price: 460, category: "Frappe Espresso" },
    { id: 20, name: "Frappe C Macchiato", price: 460, category: "Frappe Espresso" },
    { id: 21, name: "Chocolate", price: 460, category: "I NoN-Espresso" },
    { id: 22, name: "Matcha Latte", price: 460, category: "I NoN-Espresso" },
    { id: 23, name: "Hojicha", price: 460, category: "I NoN-Espresso" },
    { id: 24, name: "Ice Milh", price: 460, category: "I NoN-Espresso" },
    { id: 25, name: "Thai Milk Tae", price: 460, category: "I NoN-Espresso" },
    { id: 26, name: "Black Tea", price: 460, category: "I NoN-Espresso" },
    { id: 27, name: "Thai Lemon Tae", price: 460, category: "I NoN-Espresso" },
    { id: 28, name: "Croissant", price: 460, category: "Croissant" },
  ];
 // ແມ່ນການປະກາດຟັງຊັນ POSOrderForm ໃນຮູບແບບ React Function Component.
export default function POSOrderForm() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);//setCartItems ແມ່ນຟັງຊັນທີ່ໃຊ້ໃນການປ່ຽນແປງຄ່າຂອງ cartItems.
  const [activeCategory, setActiveCategory] = useState("All");//ແມ່ນການສ້າງ state ອີກອັນຊື່ activeCategory ເພື່ອເກັບປະເພດສິນຄ້າທີ່ກຳລັງຖືກເລືອກຢູ່ 

  // ແມ່ນການປະກາດຕົວປ່ຽນຊື່ categories ໃນ JavaScript ທີ່ເປັນ(array)ໃຊ້ເກັບລາຍການຂອງສິນຄ້າ
  const categories = [
    "All",
    "Hot Espresso",
    "Ice Espresso",
    "Frappe Espresso",
    "I NoN-Espresso",
    "Croissant",
  ];
  //ແມ່ນການກວດສອບຄ່າ activeCategory ວ່າເທົ່າກັບ "All" ຫຼືບໍ່ ຖ້າ activeCategory ເທົ່າກັບ "All" ແມ່ນຈະໃຫ້ filteredFoods ເທົ່າກັບ Foods ທັງໝົດ 
//ແຕ່ຖ້າ ບໍ່ເທົ່າກັບ "All" ແມ່ນຈະເອົາຂໍ້ມູນໃນ Foods ໂດຍເອົາແຕ່ລາຍການທີ່ item.category ຕົງກັບ activeCategory ເທົ່ານັ້ນ.
  const filteredFoods = activeCategory === "All" 
    ? Foods 
    : Foods.filter(item => item.category === activeCategory);

    //ແມ່ນຟັງຊັນທີ່ຖືກເອີ້ນເມື່ອຜູ້ໃຊ້ກົດເພື່ອເພີ່ມອາຫານໃສ່ກະຕ່າ ມັນຮັບຂໍ້ມູນອາຫານ (food) ທີ່ມີ FoodItem ເຂົ້າມາ.
  const handleAddToCart = (food: FoodItem) => {
    setCartItems(prev => { //ໃຊ້ setCartItems ເພື່ອອັບເດດລາຍການໃນກະຕ່າ ກວດເບິ່ງວ່າມີຢູ່ໃນກະຕ່າແລ້ວຫຼືບໍ່
      const existingItem = prev.find(item => item.id === food.id); // (ໂດຍໃຊ້ id ເປັນຕົວປ່ຽນ ຖ້າມີຢູ່ແລ້ວອັບເດດ quantity ຂອງລາຍການນັ້ນໃຫ້ເພີ່ມ 1 )
      if (existingItem) {
        return prev.map(item =>
          item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item //ຫຼື ຖ້າຍັງບໍ່ມີເພີ່ມອາຫານໃໝ່ເຂົ້າໃນກະຕ່າ ພ້ອມກັບ quantity: 1
        );
      }
      return [...prev, { ...food, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {//ແມ່ນຟັງຊັນ (function) ທີ່ຮັບ id ຂອງສິນຄ້າທີ່ຈະລຶບອອກຈາກກະຕ່າ (cart) ເປັນຄ່າເລກ (number).
    setCartItems(prev => prev.filter(item => item.id !== id));// ແມ່ນການຄັດເອົາສິນຄ້າທີ່ບໍ່ມີ id ຕົງກັນກັບທີ່ຖືກສົ່ງເຂົ້າມາ (ແລ້ວລຶບລາຍການນັ້ນອອກ).
  };

  //ຟັງຊັນນີ້ຊື່ handleQuantityChange, ຮັບຄ່າ 2 ຄ່າ:id: ຄືລະຫັດສິນຄ້າ (ປະເພດ number)change: ຄືຈຳນວນທີ່ຈະເພີ່ມ ຫຼື ລົດ (ເຊັ່ນ +1 ຫຼື -1)
  const handleQuantityChange = (id: number, change: number) => {
    setCartItems(prev =>
      prev.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + change) } 
          : item
      )
    );
  };
  //ໃຊ້ເພື່ອລວມລາຄາຂອງສິນຄ້າເວລາກົດເພີ່ມ
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className={styles.posContainer}>
     {/* Header */}
     <header className={styles.header}>
        <h1>Menu</h1>
        <nav className={styles.nav}>
        <Link href="/">Home</Link><br/>
        <Link href="/Category">Munu</Link><br/>
        <Link href="/Table">Table</Link><br/>
        <Link href="/product">Seles history</Link><br/>
        <Link href="/components">Cart</Link><br/>
        </nav>
      </header>

      {/* หมวดหมู่สินค้า */}
      <div className={styles.categoryNav}>
        {categories.map(category => (
          <button
            key={category}
            className={`${styles.categoryButton} ${
              activeCategory === category ? styles.active : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* ส่วนแสดงสินค้า */}
      <div className={styles.posMain}>
        <div className={styles.menuItems}>
          <div className={styles.menuGrid}>
            {filteredFoods.map(food => (
              <div key={food.id} className={styles.foodCard}>
                <div className={styles.foodName}>{food.name}</div>
                <div className={styles.foodPrice}>฿{food.price.toFixed(2)}</div>
                <button 
                  className={styles.addButton}
                  onClick={() => handleAddToCart(food)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ตะกร้าสินค้า */}
        <div className={styles.cartSection}>
          <h2>Cart</h2>
          {cartItems.length === 0 ? (
            <p>No item in cart</p>
          ) : (
            <div className={styles.cartItems}>
              {cartItems.map(item => (
                <div key={item.id} className={styles.cartItem}>
                  <span>{item.name} x {item.quantity}</span>
                  <span>ລາຄາ{(item.price * item.quantity).toFixed(2)}</span>
                  <div className={styles.cartControls}>
                    <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                    <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                    <button onClick={() => handleRemoveFromCart(item.id)}>×</button>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className={styles.cartTotal}>
            ລາຄາລວມ: {total.toFixed(2) }ກີບ
          </div>
          <button 
            className={styles.checkoutButton}
            disabled={cartItems.length === 0}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}