import Image from 'next/image';
import { Inter } from 'next/font/google';
import HeroBanner from '@/components/HeroBanner';
import Wrapper from '@/components/Wrapper';
import ProductCard from '@/components/ProductCard';
import { useEffect, useState } from 'react';
import { fetchDataFromApi } from '@/utils/api';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ products }) {
	// const [data, setData] = useState(null);
	// useEffect(() => {
	// 	fetchProduct();
	// }, []);
	// const fetchProduct = async () => {
	// 	const { data } = await fetchDataFromApi('/api/products');
	// 	setData(data);
	// };
	return (
		<main>
			<HeroBanner />
			<Wrapper>
				{/* products grid start */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
					{products?.data?.map((product) => (
						<ProductCard key={product?.id} data={product} />
					))}
				</div>
				{/* products grid end */}
			</Wrapper>
		</main>
	);
}

export async function getStaticProps() {
	const products = await fetchDataFromApi('/api/products?populate=*');

	return {
		props: { products },
	};
}
