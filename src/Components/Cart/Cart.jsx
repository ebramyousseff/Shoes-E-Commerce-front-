import  {Fragment } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Tooltip } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../features/slices/cartSlice";

const Cart = ({ openModal, setOpen }) => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();


  return (
    <div>
      {cart.length > 0 ? (
        <Fragment>
          <Dialog
            className="border-0 outline-0"
            open={openModal}
            handler={() => setOpen(false)}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogHeader>Shopping Bag</DialogHeader>
            <DialogBody
              divider
              className="flex flex-col justify-center items-start"
            >
              {cart.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="grid grid-cols-2 py-4">
                      <div>
                        <img
                          src={item.img}
                          alt={item.name}
                          className="h-[125px] rounded-md"
                        />
                        <div className="flex flex-col items-start">
                          <h4 className=" text-black text-base font-inter font-bold tracking-normal leading-none pt-2">
                            {item.name}
                          </h4>
                        </div>
                        <div className="max-w-xs">
                          <p className=" text-black text-xs font-inter tracking-normal leading-none pt-2">
                            {item.text}
                          </p>
                        </div>
                      </div>
                      <div className="max-w-xs">
                        <p className=" text-black text-sm font-inter tracking-normal leading-none pt-2">
                          Selected Size:{" "}
                          <span className="ml-2 ">{item.size}</span>
                        </p>
                        <p className=" text-black text-sm font-inter tracking-normal leading-none pt-2">
                          Selected Color:{" "}
                          <span
                            className="ml-2 rounded-full px-2"
                            style={{ backgroundColor: item.color }}
                          ></span>
                        </p>
                        <p className=" text-black text-sm font-inter tracking-normal leading-none pt-2">
                          Amount: <span className="ml-2 ">{item.amount}</span>
                        </p>
                        <p className=" text-black text-sm font-inter tracking-normal leading-none pt-2">
                          Single Item Price:{" "}
                          <span className="ml-2 ">{item.price}$</span>
                        </p>
                        <p className=" text-black text-sm font-inter tracking-normal leading-none pt-2">
                          Total Item Price:{" "}
                          <span className="ml-2 ">{item.totalPrice}$</span>
                        </p>
                        <div className="pt-4">
                          <Tooltip
                            content="Remove from the Cart"
                            placement="bottom"
                          >
                            <Button
                              size="sm"
                              color="red"
                              ripple={true}
                              variant="filled"
                              onClick={() => dispatch(removeFromCart(item))}
                            >
                              Remove
                            </Button>
                          </Tooltip>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </DialogBody>
            <DialogFooter className="flex justify-start items-center">
              <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                Total Price of All Products:{" "}
                <span className="ml-2">{totalPrice}$</span>
              </p>
            </DialogFooter>
          </Dialog>
        </Fragment>
      ) : (
        <Fragment>
          <Dialog
            className="border-0 outline-0"
            open={openModal}
            handler={() => setOpen(false)}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogHeader>Shopping Bag</DialogHeader>
            <DialogBody>
              <div>
                <h1 className=" text-black text-3xl font-inter font-bold tracking-normal leading-none py-4">
                  Your Bag Is Empty
                </h1>
              </div>
              <p className=" text-black text-base font-inter tracking-normal leading-none">
                Add Some Products
              </p>
            </DialogBody>
          </Dialog>
        </Fragment>
      )}
    </div>
  );
};

export default Cart;
