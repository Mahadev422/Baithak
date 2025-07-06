import { useState } from 'react';
import { FaMapMarkerAlt, FaCheckCircle, FaTimesCircle, FaHome, FaBriefcase, FaStar, FaWindowClose  } from 'react-icons/fa';
import { MdOtherHouses } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { addToUserArray } from '../../store/fetch/auth';

const AddressForm = ({ setAdd, uid }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pin: '',
    locality: '',
    city: '',
    state: '',
    landmark: '',
    addressType: 'home',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const dispatch = useDispatch();

  const addressTypeIcons = {
    home: <FaHome className="mr-1" />,
    work: <FaBriefcase className="mr-1" />,
    other: <MdOtherHouses className="mr-1" />,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^[0-9]{10}$/.test(formData.phone)) newErrors.phone = 'Invalid phone number';
    if (!formData.pin.trim()) newErrors.pin = 'PIN code is required';
    else if (!/^[0-9]{6}$/.test(formData.pin)) newErrors.pin = 'Invalid PIN code';
    if (!formData.locality.trim()) newErrors.locality = 'Locality is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.info(formData)
      dispatch(addToUserArray({uid, field: 'address', item: formData}))
      //if (onSubmit) await onSubmit(formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        pin: '',
        locality: '',
        city: '',
        state: '',
        landmark: '',
        addressType: 'home',
      });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden p-4">
      <div className="flex items-center mb-6">
        <FaMapMarkerAlt className="text-blue-500 mr-2 text-xl" />
        <h2 className="text-2xl font-bold text-gray-800">Add New Address</h2>
        <button onClick={() => setAdd(false)}>
        <FaWindowClose className=' flex-1 ml-3 text-2xl text-red-500 hover:text-red-600' />
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Address Type */}
        <div className="flex space-x-4">
          {Object.entries(addressTypeIcons).map(([type, icon]) => (
            <label key={type} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="addressType"
                checked={formData.addressType === type}
                onChange={() => setFormData(prev => ({ ...prev, addressType: type }))}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700 capitalize flex items-center">
                {icon} {type}
              </span>
            </label>
          ))}
        </div>

        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Enter your full name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Enter 10-digit phone number"
            maxLength="10"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
        </div>

        {/* Address Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* PIN Code Field */}
          <div>
            <label htmlFor="pin" className="block text-sm font-medium text-gray-700 mb-1">
              PIN Code <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="pin"
              name="pin"
              value={formData.pin}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md ${errors.pin ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="6-digit PIN code"
              maxLength="6"
            />
            {errors.pin && <p className="mt-1 text-sm text-red-600">{errors.pin}</p>}
          </div>

          {/* City Field */}
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md ${errors.city ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter your city"
            />
            {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
          </div>
        </div>

        {/* Locality Field */}
        <div>
          <label htmlFor="locality" className="block text-sm font-medium text-gray-700 mb-1">
            Locality/Area <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="locality"
            name="locality"
            value={formData.locality}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md ${errors.locality ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Enter locality/area"
          />
          {errors.locality && <p className="mt-1 text-sm text-red-600">{errors.locality}</p>}
        </div>

        {/* State Field */}
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
            State <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md ${errors.state ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Enter your state"
          />
          {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state}</p>}
        </div>

        {/* Landmark Field */}
        <div>
          <label htmlFor="landmark" className="block text-sm font-medium text-gray-700 mb-1">
            Landmark (Optional)
          </label>
          <input
            type="text"
            id="landmark"
            name="landmark"
            value={formData.landmark}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nearby landmark (optional)"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
          >
            {isSubmitting ? (
              <>
                <FaStar className="animate-spin mr-2" />
                Saving Address...
              </>
            ) : (
              'Save Address'
            )}
          </button>
        </div>

        {/* Submission Status */}
        {submitStatus === 'success' && (
          <div className="mt-4 p-3 bg-green-50 rounded-md flex items-center">
            <FaCheckCircle className="text-green-500 mr-2" />
            <span className="text-sm text-green-700">Address saved successfully!</span>
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mt-4 p-3 bg-red-50 rounded-md flex items-center">
            <FaTimesCircle className="text-red-500 mr-2" />
            <span className="text-sm text-red-700">Failed to save address. Please try again.</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default AddressForm;