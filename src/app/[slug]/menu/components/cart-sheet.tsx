import { useContext } from "react"; //Importa o hook useContext do React

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { CartContext } from "../contexts/cart";

const CartSheet = () => {
  const { isOpen, toggleCart, products } = useContext(CartContext);
  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
        {products.map((product) => (
          <h1 key={product.id}>
            {product.name} - {product.quantity}
          </h1>
        ))}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;

//O carrinho de compras pode ser acessado a partir de qualquer página do aplicativo.

//O componente CartSheet é um componente funcional que exibe um modal com o conteúdo do carrinho de compras. 
//Ele importa o contexto CartContext e utiliza os valores de isOpen, toggleCart e products. 
//O componente retorna um modal com o título "Are you absolutely sure?" e uma descrição. 
//Em seguida, ele exibe a lista de produtos do carrinho.