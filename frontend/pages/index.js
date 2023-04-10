import Image from 'next/image';
import { Inter } from 'next/font/google';
import HeroBanner from '@/components/HeroBanner';
import Wrapper from '@/components/Wrapper';
import ProductCard from '@/components/ProductCard';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main>
			<HeroBanner />
			<Wrapper>
				{/* products grid start */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
					{/* {products?.data?.map((product) => (
                        <ProductCard key={product?.id} data={product} />
                    ))} */}
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>
				{/* products grid end */}
			</Wrapper>
		</main>
	);
}
