import { products } from '../assets/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  return (
    <>  
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </>
  );
}