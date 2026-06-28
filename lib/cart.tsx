"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type LineItem = {
  id: string;
  name: string;
  price: number;
  qty: number;
  recurring?: boolean;
};

type CartState = {
  items: LineItem[];
  add: (item: LineItem) => void;
  remove: (id: string) => void;
  clear: () => void;
  subtotal: number;
  count: number;
};

const CartContext = createContext<CartState | null>(null);
const STORAGE_KEY = "upright-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<LineItem[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  const add = (item: LineItem) =>
    setItems((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + item.qty } : p
        );
      }
      return [...prev, item];
    });

  const remove = (id: string) =>
    setItems((prev) => prev.filter((p) => p.id !== id));

  const clear = () => setItems([]);

  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.qty, 0),
    [items]
  );
  const count = useMemo(
    () => items.reduce((sum, i) => sum + i.qty, 0),
    [items]
  );

  return (
    <CartContext.Provider
      value={{ items, add, remove, clear, subtotal, count }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export const money = (n: number) =>
  `$${n.toFixed(2).replace(/\.00$/, "")}`;
