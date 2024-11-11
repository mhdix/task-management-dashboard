import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div >
      <Form />
      <Link to="/profile">about</Link>
    </div>
  );
};

export default Home;

export const Form = () => {
  return (
    <form className="flex flex-col items-center  justify-center gap-10">
      <div className="flex flex-col md:grid md:grid-cols-12 w-fit gap-4 items-center text-center md:text-start">
        <div className="md:col-span-8 flex flex-col items-center gap-4 justify-center">
          <div className="flex flex-col gap-4">
            <label htmlFor="newtask">موضوع وظیفه ی جدید</label>
            <input
              type="text"
              id="newtask"
              className="border bg-gray-50 rounded-md p-2 px-4 w-48"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="newtask">توضیحات وظیفه ی جدید</label>
            <textarea
              cols="3"
              placeholder="موضوع ..."
              className="border bg-gray-50 rounded-md p-2 px-4 w-48"
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 md:col-span-4 ">
          <label htmlFor="">انتخاب هشتگ مدیریت</label>
          <select className="text-black border rounded-lg px-8 py-2 w-48 flex bg-gray-50 ">
            <option selected disabled>
              انتخاب
            </option>
            <option value="#monthlyExpenses" className="text-gray-800">
              هزینه های ماهانه
            </option>
            <option value="#additionalCosts" className="text-gray-800">
              هزینه های اضافه
            </option>
          </select>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-green-200 border w-48 py-2 rounded-lg ">
          اضافه کردن
        </button>
      </div>
    </form>
  );
};