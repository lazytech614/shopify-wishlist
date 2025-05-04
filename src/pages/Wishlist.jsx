import { useContext } from 'react';
import { WishlistContext } from '../Context/WishlistContext';
import { products } from '../assets/products';
import ProductCard from '../components/ProductCard';

export default function Wishlist() {
  const { wishlist } = useContext(WishlistContext);
  const items = products.filter(p => wishlist.includes(p.id));

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>
      {items.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      ) : (
        <p>No items saved yet.</p>
      )}
    </>
  );
}