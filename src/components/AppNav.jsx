import React from 'react'

const AppNav = () => {
  return (
    <div className="">
      <ul className="flex justify-around">
        <div className="flex gap-10">
          <li>خانه</li>
          <li>پروفایل</li>
        </div>
        <div className="flex gap-10">
          <li>کارهایی که باید بکنم</li>
          <li>کارهایی که تکمیل کردم</li>
        </div>
      </ul>
    </div>
  );
}

export default AppNav