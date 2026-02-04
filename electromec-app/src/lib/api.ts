export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    isHot?: boolean;
    isNew?: boolean;
}

// Mock Data matching the design
const MOCK_PRODUCTS: Product[] = [
    {
        id: "1",
        name: "Reflectores High-Bay",
        price: 154000,
        image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070",
        category: "INDUSTRIAL",
        isHot: false
    },
    {
        id: "2",
        name: "Jadever Pro",
        price: 82280,
        image: "https://images.unsplash.com/photo-1581092921461-eab6245b0262?q=80&w=1000", // Replaced with a valid generic tool image
        category: "HERRAMIENTAS",
        isHot: true
    },
    {
        id: "3",
        name: "Domótica Wiser",
        price: 45000,
        image: "https://images.unsplash.com/photo-1558002038-1091b6cad658?q=80&w=1000", // Generic smart home image
        category: "DOMÓTICA",
        isNew: true
    }
];

export async function getFeaturedProducts(): Promise<Product[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return MOCK_PRODUCTS;
}

export async function getProductById(id: string): Promise<Product | undefined> {
    return MOCK_PRODUCTS.find(p => p.id === id);
}
