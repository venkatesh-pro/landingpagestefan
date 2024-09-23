"use client";
import { getUsers } from "@/actions/user/user";
import React from "react";

const ListOfUsers = ({ users }) => {
  // Function to convert JSON to CSV
  const convertToCSV = (data) => {
    const header = Object.keys(data[0])
      .filter((key) => key !== "locationData")
      .join(","); // Get the headers
    const rows = data.map((user) => {
      return Object.keys(user)
        .filter((key) => key !== "locationData") // Exclude the 'locationData' field
        .map((key) => user[key]) // Get the value of each key
        .join(","); // Join them with commas
    });

    return [header, ...rows].join("\n"); // Combine header and rows with new lines
  };

  // Function to trigger the CSV file download
  const downloadCSV = (csv, filename) => {
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const downloadValidEmail = async () => {
    const users = await getUsers({ isFilter: true, isValidEmail: true });

    console.log("usersss", users);
    // Convert to CSV
    const csv = convertToCSV(users);
    console.log(csv);

    // Download the CSV file
    downloadCSV(csv, "users.csv");
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
