import { FiTrash } from "react-icons/fi";
import { removeFromUserArray } from "../../store/fetch/auth";
import { useDispatch } from "react-redux";

const AddressCard = ({address, uid}) => {
    const dispatch = useDispatch()
  return (
    <div
      className="w-full relative px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 font-medium"
    >
      <button onClick={() => dispatch(removeFromUserArray({uid, field: 'address', item: address}))} className="absolute top-2 right-2 text-blue-600 hover:text-blue-800">
        <FiTrash />
      </button>

      <div className="font-semibold mb-1">{address.name}</div>
      <div className="mb-1">
        <span className="text-gray-600 dark:text-gray-100">Address Type:</span>{" "}
        {address.addressType}
      </div>
      <div className="mb-1">
        {address.locality}, {address.pin}
      </div>
      {address.landmark && (
        <div className="mb-1">
          <span className="text-gray-600">Landmark:</span> {address.landmark}
        </div>
      )}
      <div className="mb-1">
        {address.city}, {address.state}
      </div>
      <div>
        <span className="text-gray-600 dark:text-gray-200">Phone:</span> {address.phone}
      </div>
    </div>
  );
};

export default AddressCard;
