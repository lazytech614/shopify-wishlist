import { useContext } from 'react';
import { WishlistContext } from '../Context/WishlistContext';
import Button from './Button';

export default function ProductCard({ product }) {
  const { wishlist, addToWishlist, removeFromWishlist } = useContext(WishlistContext);
  const saved = wishlist.includes(product.id);

  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="h-40 w-full object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="mt-1 text-gray-700">${product.price}</p>
        <Button onClick={() => saved ? removeFromWishlist(product.id) : addToWishlist(product.id)}>
          {saved ? 'Remove' : 'Save'}
        </Button>
      </div>
    </div>
  );
}