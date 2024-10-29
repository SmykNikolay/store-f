import ImageAtom from "@/shared/ui/ImageAtom";
import { Product } from "@/entities/product/model/Product.types";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <ImageAtom src={product.images[0]} alt={product.name} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{product.name}</div>
      <p className="text-gray-700 text-base">{product.description}</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        {product.price} ₽
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
        {product.color}
      </span>
    </div>
  </div>
);

export default ProductCard;
