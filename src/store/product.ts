import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type TProduct = {
  name: string;
  imageUrl: string;
  price: number;
};

interface IProductState {
  product: TProduct | null;
  setProduct: (item: TProduct) => void;
  clearProduct: () => void;
}

export const useProductStore = create<IProductState>()(
  persist(
    (set) => ({
      product: null,
      setProduct: (item: TProduct) => set((state) => ({ product: item })),
      clearProduct: () => set(() => ({ product: null })),
    }),
    {
      name: 'product',
    }
  )
);
