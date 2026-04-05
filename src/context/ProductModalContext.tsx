"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface ProductModalContextType {
  open: boolean;
  productName: string;
  openModal: (productName: string) => void;
  closeModal: () => void;
}

const ProductModalContext = createContext<ProductModalContextType>({
  open: false,
  productName: "",
  openModal: () => {},
  closeModal: () => {},
});

export function ProductModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [productName, setProductName] = useState("");

  const openModal = (name: string) => {
    setProductName(name);
    setOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <ProductModalContext.Provider value={{ open, productName, openModal, closeModal }}>
      {children}
    </ProductModalContext.Provider>
  );
}

export const useProductModal = () => useContext(ProductModalContext);
