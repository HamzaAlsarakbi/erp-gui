import { NavigationBar } from '@/components/Navbar';
import { Products } from '@/features/products/ProductsComponent';

export const Inventory: React.FC = () => {
  return (
    <div className="page" id="inventory">
      <NavigationBar />
      <Products />
    </div>
  );
};
