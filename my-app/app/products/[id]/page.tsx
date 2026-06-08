import { getProductById, products } from "@/lib/products";
import ProductDetail from "@/components/comman/Productdetail ";
import { notFound } from "next/navigation";
 
// Pre-generate all product pages at build time (optional but recommended)
export function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }));
}
 
export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(Number(id));
 
  if (!product) return notFound();
 
  return <ProductDetail product={product} />;
}