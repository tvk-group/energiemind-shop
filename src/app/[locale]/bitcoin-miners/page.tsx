import type { Metadata } from "next";
import { generateCategoryMetadata, CategoryPageContent } from "@/lib/category-page";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  return generateCategoryMetadata({ ...props, categorySlug: "bitcoin-miners" });
}

export default function Page(props: PageProps) {
  return <CategoryPageContent {...props} categorySlug="bitcoin-miners" />;
}
