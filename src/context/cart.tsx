import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
interface CartProviderProps {
  children: ReactNode
}
interface CartData {
  addPlates: Function
  removePlates: Function
  cartCounter: Function
  deletePlate: Function
  totalPrice: number
  demand: CartItemsProps[]
}
interface CartItemsProps {
  plate: PlateContent
  quantity: number
  price: number
  observation?: string
  restaurantId: string
}
;[]
interface PlateContent {
  id: number
  price: number
}

const CartContext = createContext({} as CartData)

function CartProvider({ children }: CartProviderProps) {
  const [demand, setDemand] = useState<CartItemsProps[]>([])
  const [totalPrice, setTotalPrice] = useState(0)

  function addPlates(id: number, price: number, restaurantId: any) {
    const itemFound = demand.find((product) => product.plate.id === id)
    const fromOtherRestaurant = demand.find(
      (demand) => demand.restaurantId !== restaurantId,
    )

    if (!fromOtherRestaurant) {
      if (!itemFound) {
        demand.push({
          plate: { id, price },
          quantity: 1,
          price: price,
          observation: '',
          restaurantId: restaurantId,
        })
      } else {
        itemFound.quantity += 1
        itemFound.price = itemFound.price + price
      }
      setDemand(demand)
      setTotalPrice(totalPrice + price)
    } else {
      Alert.alert(
        'Aviso',
        'você pode adicionar apenas ítens do mesmo restaurante no seu carrinho, deseja substituir os itens?',
        [
          {
            text: 'ok',
          },
        ],
      )
    }
  }

  function removePlates(id: any, price: any) {
    const itemFound = demand.find((product) => product.plate.id === id)

    if (itemFound) {
      itemFound.quantity < 2
        ? demand.splice(demand.indexOf(itemFound), 1)
        : (itemFound.quantity -= 1)
      setTotalPrice(totalPrice - price)
    }
  }

  function deletePlate(id: number) {
    const itemFound = demand.find((product) => product.plate.id === id)
    if (itemFound) {
      demand.splice(demand.indexOf(itemFound), 1)
      setTotalPrice(totalPrice - itemFound.price)
    }
  }

  function cartCounter() {
    const cartLength = demand.map((product) => product.quantity)
    let cartSoma = 0
    for (let i = 0; i < cartLength.length; i++) {
      cartSoma += cartLength[i]
    }
    return cartSoma
  }

  return (
    <CartContext.Provider
      value={{
        addPlates,
        removePlates,
        cartCounter,
        deletePlate,
        totalPrice,
        demand,
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
