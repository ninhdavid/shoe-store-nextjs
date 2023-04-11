import { getDiscountPricecentage } from '@/utils/helper';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const ProductCard = ({ data: { attributes: p, id } }) => {
	return (
		<Link
			href={`/products/${p.slug}`}
			className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
		>
			<Image
				src={p.thumbnail.data.attributes.url}
				alt={p.name}
				width={500}
				height={500}
			/>
			<div className="p-4 text-black/[0.9]">
				<h2 className="text-lg font-medium">{p.name}</h2>
				<div className="flex items-center text-black/[0.5]">
					<p className="mr-2 text-lg font-semibold">
						&#8363;{p.price}
					</p>
					{p.original_price && (
						<>
							<p className="text-base  font-medium line-through">
								&#8363;{p.original_price}
							</p>
							<p className="ml-auto text-base font-medium text-green-500">
								{getDiscountPricecentage(
									p?.original_price,
									p?.price
								)}
								% off
							</p>
						</>
					)}
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
