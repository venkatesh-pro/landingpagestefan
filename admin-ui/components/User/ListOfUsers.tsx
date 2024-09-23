"use client";
import { getUsers } from "@/actions/user/user";
import React from "react";

const ListOfUsers = ({ users }) => {
  const downloadValidEmail = async () => {
    const users = await getUsers({ isFilter: true, isValidEmail: true });

    console.log("usersss", users);
  };
  return (
    <div>
      <div className="w-full mt-3 text-center">
        <button
          className="p-3 bg-blue-300"
          onClick={() => downloadValidEmail()}
        >
          Downloaded Valid Email
        </button>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                User Id
              </th>
              <th scope="col" className="px-6 py-3">
                User Email
              </th>
              <th scope="col" className="px-6 py-3">
                Is Valid
              </th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, i: number) => {
              return (
                <tr
                  key={i}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {user.id}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {user.email}
                  </th>
                  <td className="px-6 py-4">
                    {JSON.stringify(user.isValidEmail)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListOfUsers;
