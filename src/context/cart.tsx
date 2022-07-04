import React, {
   createContext,
   ReactNode,
   useContext,
   useEffect,
   useState,
} from 'react'
import { Alert } from 'react-native'
interface CartProviderProps {
   children: ReactNode
}
interface CartData {
   addPlates: Function
   removePlates: Function
   totalPrice: number
   cartCleanup: Function
   totalAmount: { quantity: number; price: number }
   cartItems: CartItem[]
   restaurant: { name: string; id: number; image: string; type: string }
}

type CartItem = {
   name: string
   description: string
   id: number
   photo_url: string
   price: number
   quantity: number
   restaurantName: string
   restaurantId: number
   restaurantPhoto: string
   food_types: string
}

const CartContext = createContext({} as CartData)

function CartProvider({ children }: CartProviderProps) {
   const [totalPrice, setTotalPrice] = useState(0)
   const [cartItems, setCartItems] = useState<CartItem[]>([])
   const [totalAmount, setTotalAmount] = useState({ quantity: 0, price: 0 })
   const [restaurant, setRestaurant] = useState({
      name: '',
      id: 0,
      image: '',
      type: '',
   })

   useEffect(() => {}, [cartItems])

   function addPlates(item: CartItem) {
      const addProducts = Array.from(cartItems)
      const itemFound = addProducts.find((CartItem) => CartItem.id === item.id)
      const fromOtherRestaurant = addProducts.find(
         (carItem) => carItem.restaurantId !== item.restaurantId,
      )
      if (!fromOtherRestaurant) {
         if (!itemFound) {
            item.quantity = 1
            addProducts.push(item)
            setRestaurant({
               name: item.restaurantName,
               id: item.restaurantId,
               image: item.restaurantPhoto,
               type: item.food_types,
            })
         } else {
            itemFound.quantity += 1
         }
         setCartItems(addProducts)
         setTotalAmount({
            quantity: totalAmount.quantity + 1,
            price: totalAmount.price + item.price,
         })
      } else {
         Alert.alert(
            'Aviso',
            'você pode adicionar apenas ítens do mesmo restaurante no seu carrinho.',
            [
               {
                  text: 'ok',
               },
            ],
         )
      }
   }

   function removePlates(item: CartItem) {
      const itemFound = cartItems.find((cartItem) => cartItem.id === item.id)

      if (itemFound) {
         itemFound.quantity < 2
            ? cartItems.splice(cartItems.indexOf(itemFound), 1)
            : (itemFound.quantity -= 1)
         setTotalAmount({
            quantity: totalAmount.quantity - 1,
            price: totalAmount.price - itemFound.price,
         })
      }
   }

   function cartCleanup(item: CartItem) {
      cartItems.splice(0, cartItems.length, item)
      setTotalAmount({ quantity: 1, price: item.price })
      console.log(cartItems)
   }

   return (
      <CartContext.Provider
         value={{
            addPlates,
            removePlates,
            totalPrice,
            cartCleanup,
            totalAmount,
            cartItems,
            restaurant,
         }}
      >
         {children}
      </CartContext.Provider>
   )
}
function useCart() {
   const context = useContext(CartContext)
   return context
}
export { CartProvider, useCart }
