import React, {
   createContext,
   ReactNode,
   useContext,
   useEffect,
   useState,
} from 'react';
import { Alert } from 'react-native';
import { useGet, usePost } from '../services';
import { useAuth } from '../context/auth';
import { AxiosError } from 'axios';
import { useNavigation } from '@react-navigation/native';
import { OrderSuccess } from '../screens/orderSuccess';

interface CartProviderProps {
   children: ReactNode;
}
interface CartData {
   addPlates: Function;
   removePlates: Function;
   totalPrice: number;
   deleteFromCart: Function;
   totalAmount: { quantity: number; price: number };
   cartItems: CartItem[];
   restaurant: { name: string; id: number; image: string; type: string };
   cartPost: Function;
}

type CartItem = {
   name: string;
   description: string;
   id: number;
   photo_url: string;
   price: number;
   quantity: number;
   restaurantName: string;
   restaurantId: number;
   restaurantPhoto: string;
   food_types: string;
};

interface BodyCart {
   costumer: { id: number };
   restaurant: { id: number };
   date: () => string;
   dateLastUpdated: () => string;
   totalValue: number;
   paymentType: string;
   status: string;
   requestItems: RequestItems[];
   restaurantPromotion: null;
}

interface RequestItems {
   plate: {
      id: number;
      price: number;
   };
   quantity: number;
   price: number;
   observation: string;
}

interface userId {
   id: number;
}
const CartContext = createContext({} as CartData);

function CartProvider({ children }: CartProviderProps) {
   const [totalPrice, setTotalPrice] = useState(0);
   const [cartItems, setCartItems] = useState<CartItem[]>([]);
   const [totalAmount, setTotalAmount] = useState({ quantity: 0, price: 0 });
   const [restaurant, setRestaurant] = useState({
      name: '',
      id: 0,
      image: '',
      type: '',
   });

   useEffect(() => {}, [cartItems]);

   function addPlates(item: CartItem) {
      const addProducts = Array.from(cartItems);
      const itemFound = addProducts.find((CartItem) => CartItem.id === item.id);
      const fromOtherRestaurant = addProducts.find(
         (carItem) => carItem.restaurantId !== item.restaurantId,
      );
      if (!fromOtherRestaurant) {
         if (!itemFound) {
            item.quantity = 1;
            addProducts.push(item);
            setRestaurant({
               name: item.restaurantName,
               id: item.restaurantId,
               image: item.restaurantPhoto,
               type: item.food_types,
            });
         } else {
            itemFound.quantity += 1;
         }
         setCartItems(addProducts);
         setTotalAmount({
            quantity: totalAmount.quantity + 1,
            price: totalAmount.price + item.price,
         });
      } else {
         Alert.alert(
            'Aviso',
            'você pode adicionar apenas ítens do mesmo restaurante no seu carrinho.',
            [
               {
                  text: 'ok',
               },
            ],
         );
      }
   }

   function removePlates(item: CartItem) {
      const itemFound = cartItems.find((cartItem) => cartItem.id === item.id);

      if (itemFound) {
         itemFound.quantity < 2
            ? cartItems.splice(cartItems.indexOf(itemFound), 1)
            : (itemFound.quantity -= 1);
         setTotalAmount({
            quantity: totalAmount.quantity - 1,
            price: totalAmount.price - itemFound.price,
         });
      }
   }

   function deleteFromCart(id: number) {
      const itemFound = cartItems.find((cartItem) => cartItem.id === id);
      if (itemFound) {
         cartItems.splice(cartItems.indexOf(itemFound), 1);

         setTotalAmount({
            quantity: totalAmount.quantity - itemFound?.quantity,
            price: totalAmount.price - itemFound.quantity * itemFound.price,
         });
      }
   }

   function clearCart() {
      cartItems.splice(0, cartItems.length);
      setTotalAmount({ quantity: 0, price: 0 });
   }
   const { authState } = useAuth();
   const { fetchData, data: dataId } = useGet<userId>('/auth', {
      headers: {
         Authorization: ` Bearer ${authState.token}`,
      },
   });
   useEffect(() => {
      fetchData();
   }, []);
   const bodyCart = cartItems.map((item) => {
      return {
         plate: {
            id: item.id,
            price: item.price,
         },
         quantity: item.quantity,
         price: item.price,
         observation: '',
      };
   });
   const navigation = useNavigation();
   const { data, loading, handlerPost } = usePost<BodyCart>(
      '/request',
      cartError,
      {
         headers: {
            Authorization: ` Bearer ${authState.token}`,
         },
      },
      orderSuccess,
   );
   function cartError(error: AxiosError<any, any> | any) {
      error && Alert.alert('Erro no pedido', 'Tente novamente');
   }
   function orderSuccess() {
      navigation.navigate('OrderSuccess' as never), clearCart();
   }

   function cartPost() {
      handlerPost({
         costumer: { id: dataId.id },
         restaurant: { id: cartItems[0].restaurantId },
         date: new Date().toString,
         dateLastUpdated: new Date().toString,
         totalValue: totalAmount.price,
         paymentType: 'card',
         status: 'PEDIDO_REALIZADO',
         requestItems: bodyCart,
         restaurantPromotion: null,
      });
   }

   return (
      <CartContext.Provider
         value={{
            addPlates,
            removePlates,
            totalPrice,
            deleteFromCart,
            totalAmount,
            cartItems,
            restaurant,
            cartPost,
         }}
      >
         {children}
      </CartContext.Provider>
   );
}
function useCart() {
   const context = useContext(CartContext);
   return context;
}
export { CartProvider, useCart };
