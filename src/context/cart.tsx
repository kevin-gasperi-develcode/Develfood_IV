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

  useEffect(() => {
    console.log(demand)
  }, [demand])

  function addPlates(id: number, price: number, restaurantId: any) {
    const demandCopy = [...demand]
    const itemFound = demandCopy.find((product) => product.plate.id === id)
    const fromOtherRestaurant = demand.find(
      (demand) => demand.restaurantId !== restaurantId,
    )

    if (!fromOtherRestaurant) {
      if (!itemFound) {
        demandCopy.push({
          plate: { id, price },
          quantity: 1,
          price: price,
          observation: '',
          restaurantId: restaurantId,
        })
      } else {
        ;(itemFound.quantity += 1), (itemFound.price = itemFound.price + price)
      }
      setDemand(demandCopy)
    } else {
      Alert.alert(
        'Aviso',
        'você pode adicionar apenas ítens do mesmo restaurante',
      )
    }
  }

  function removePlates(id: any, price: any, restaurantId: any) {
    const demandCopy = [...demand]
    const item = demandCopy.find((product) => product.plate.id === id)

    if (item && item.quantity > 1) {
      item.quantity = item.quantity - 1
      item.price = item.price - price
      setDemand(demandCopy)
    } else {
      const arrayFiltered = demandCopy.filter(
        (product) => product.plate.id !== id,
      )
      setDemand(arrayFiltered)
    }
  }

  function cartCounter() {
    const cartLength = demand.map((product) => product.quantity)
    console.log('contagem do cart', cartLength)
    let cartSoma = 0
    for (let i = 0; i < cartLength.length; i++) {
      cartSoma += cartLength[i]
    }
    return cartSoma
  }

  return (
    <CartContext.Provider value={{ addPlates, removePlates }}>
      {children}
    </CartContext.Provider>
  )
}
function useCart() {
  const context = useContext(CartContext)
  return context
}
export { CartProvider, useCart }

// costumer: { id: number }
// restaurant: { id: number }
// date: Date
// dateLastUpdated: Date
// totalValue: number
// paymentType: string
// status: string
// requestItems:
//     plate: {[
//   {
//       id: number
//       price: number
//     }
//     quantity: number
//     price: number
//     observation: string
//   },]
// restaurantPromotion: null
