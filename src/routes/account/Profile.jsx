import { useSelector } from "react-redux";
import { useState } from "react";
import AddressForm from "../../components/account/AddressForm";
import AddressCard from "../../components/account/AddressCard";

const Profile = () => {
  const { userData, address } = useSelector((state) => state.auth);
  const [add, setAdd] = useState(false);

  if (!userData) return <p>Loading...</p>;
  const date = new Date(userData.createdAt);

  const monthYear = date.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="rounded-lg relative">
      <div className="border-b pb-4 mb-6">
        <h2 className="text-2xl font-semibold">
          Personal Information
        </h2>
        <p className="mt-1">View your account details</p>
      </div>

      <div className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <label className="block text-xs font-medium uppercase tracking-wider mb-1">
              Name
            </label>
            <div className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 font-medium">
              {userData?.displayName}
            </div>
          </div>

          {userData.phoneNumber && (
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider mb-1">
                Phone
              </label>
              <div className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 font-medium">
                {userData.phoneNumber}
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-medium uppercase tracking-wider mb-1">
              Member Since
            </label>
            <div className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 font-medium">
              {monthYear}
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium uppercase tracking-wider mb-1">
            Email Address
          </label>
          <div className="w-full px-4 py-3 border border-gray-200 rounded-lg dark:bg-gray-700 bg-gray-50 font-medium">
            {userData?.email}
          </div>
        </div>

        <div>
          <label className="flex text-xs font-medium uppercase tracking-wider mb-1">
            Address
          </label>
          <div className="flex flex-col gap-2">
            {address.length !== 0 &&
              address.map((add, idx) => (
               <AddressCard key={idx} address={add} uid={userData.id} />
              ))}
          </div>
        </div>
      </div>
      <button
        onClick={() => setAdd(true)}
        className=" bg-green-200 dark:bg-gray-700 p-2 m-2 rounded hover:rounded-full"
      >
        Add Address
      </button>
      <div className="absolute top-0 items-center">
        {add && <AddressForm setAdd={setAdd} uid={userData.id} />}
      </div>
    </div>
  );
};
export default Profile;
