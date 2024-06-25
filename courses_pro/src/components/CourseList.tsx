import React from 'react'
import { UseSelector, useSelector } from 'react-redux'
import { CourseItem } from './CourseItem';
import { stateType } from '../control/cartSlice';
import courseItems from '../CourseItems.js';


export const CourseList = () => {
    const {quantity,cartItems,total} = useSelector((store) => store.cart);
  return (
    <>
    {quantity < 1 ? (
        <section>
            <header>
                <h2>Cart</h2>
                <h4>Empty</h4>
            </header>
        </section>
    ) : 
    (
        <section>
            <header>
                <h2>Cart</h2>
            </header>
            <div>
                {/* tum proplari aldi */}
                {courseItems.map((item:stateType,index:number) => {
                    return <CourseItem key={index} {...item} />
                })}
            </div>
            <footer>
                <hr />
                <div>
                    <h4>Total: {total} TL</h4>
                </div>
                <button>Clear</button>
            </footer>
        </section>
    )}
</>
  )
}
