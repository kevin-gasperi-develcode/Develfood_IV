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
   deletePlate: Function
   totalPrice: number
   cartCleanup: Function
   totalAmount: { quantity: number; price: number }
   cartItems: CartItem[]
}

type CartItem = {
   name: string
   description: string
   id: number
   photo_url: string
   price: number
   quantity: number
   restaurantName: string
   restaurantId: string
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
      id: '',
      image: '',
      type: '',
   })

   useEffect(() => {}, [cartItems])

   function addPlates(item: CartItem) {
      const addProducts = [...cartItems]
      const itemFound = addProducts.find((CartItem) => CartItem.id === item.id)
      const fromOtherRestaurant = addProducts.find(
         (carItem) => carItem.restaurantId !== item.restaurantId,
      )

      if (!fromOtherRestaurant) {
         if (!itemFound) {
            addProducts.push(item)
            setRestaurant({
               name: item.restaurantName,
               id: item.restaurantId,
               image: item.restaurantPhoto,
               type: item.food_types,
            })
            console.log('console do item', item)
         } else {
            itemFound.quantity += 1
            itemFound.price = item.price * itemFound.quantity
         }
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
            price: totalAmount.price - item.price,
         })
      }
   }

   function deletePlate(item: CartItem) {
      const itemFound = cartItems.find((cartItem) => cartItem.id === item.id)
      if (itemFound) {
         cartItems.splice(cartItems.indexOf(itemFound), 1)
         setTotalPrice(totalPrice - itemFound.price)
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
            deletePlate,
            totalPrice,
            cartCleanup,
            totalAmount,
            cartItems,
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
