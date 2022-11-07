import React, { useState } from "react"
import { useContext } from "react"
import { MdCancel } from "react-icons/md"
import CartItem from "../Shared/CartItem"
import { CartContext } from "../../Context/CartContext"
import styles from "../../styles/styles.module.css"
import Button from "../Shared/Button"
import Modal from "../Shared/Modal"

type propType = {
  show: boolean
  hideCart: () => void
}
const Cart = ({ show = false, hideCart }: propType) => {
  const { carts } = useContext(CartContext);
  const [openModal, setModalOpen] = useState(false);
  return (
    <div
      className={`min-h-screen shadow-lg w-1/4 fixed transition-all top-0 z-10 bg-gray-100 dark:bg-primaryDark ${
        show ? "right-0" : "left-full"
      }`}
    >
      <Modal open={openModal} onCLose={()=> setModalOpen(false)}>
        <h2>Test Modal</h2>
      </Modal>
      <div className="h-16 px-4 flex justify-between items-center">
        <MdCancel
          className="text-primary dark:text-secondaryDark cursor-pointer"
          size={30}
          onClick={hideCart}
        />
        <h3 className="text-2xl text-primary dark:text-secondaryDark">Cart</h3>
      </div>
      <div className={styles.cart_scroller}>
        {carts.map((cart) => {
          return <CartItem cart={cart} key={cart.id} />
        })}
        <div className="px-4 absolute bottom-4 left-0 right-0 w-full">
          <Button onClick={()=> setModalOpen(true)} text="Checkout" className="w-full" />
        </div>
      </div>
    </div>
  )
}

export default React.memo(Cart)
