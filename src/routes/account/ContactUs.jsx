import { useSelector } from "react-redux";

const Contact = () => {
  const { userData } = useSelector(state => state.auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Convert FormData to a plain JavaScript object
    const dataObject = Object.fromEntries(formData.entries());
    const contact = {...dataObject, uid: userData.id}
    console.log(dataObject);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center dark:text-white">
        Contact Us
      </h1>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 sm:p-8">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                name="fullName"
                required
                className="w-full px-4 py-2 border dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                readOnly
                value={userData.email}
                className="w-full px-4 py-2 border dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Inquiry subject"
              required
              className="w-full px-4 py-2 border dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Phone Number (optional)
            </label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              name="tel"
              className="w-full px-4 py-2 border dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Type your message here..."
              name="message"
              required
              className="w-full px-4 py-2 border dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
