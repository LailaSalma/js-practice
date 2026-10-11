interface Product {
  id: number;
  title: string;
  price: number;
  stock: number;
  brand?: string;
}

const products: Product[] = [  { id: 1, title: "Phone", price: 499, stock: 10 },
		      { id: 2, title: "Laptop", price: 999, stock: 0, brand: "Acme" },
		      { id: 3, title: "Mouse", price: 25, stock: 50 }];
		    
function getProduct (array: Product[], productId: number) : Product | undefined {
	const found: Product | undefined = array.find((p) => p.id === productId);
	if (found === undefined) {
	  console.log("not found");
	} else {
	  console.log(found.title);
	}
	return found;
}

getProduct(products, 2);
getProduct(products, 99);
