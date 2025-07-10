import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendFeedback } from "../../store/fetch/feedback";
import { showNotification } from '../../store/slices/notificationSlice'

const Feedback = () => {
  const [selected, setSelected] = useState(null);
  const { loading } = useSelector(state => state.feedback);
  const dispatch = useDispatch()
  const handleFeedback = (e) => {
    e.preventDefault();
    const feedbackText = e.target[2].value;
    dispatch(sendFeedback({type: selected || 'positive', message: feedbackText}));
    dispatch(showNotification({type: 'success', message: 'Feedback Sent Successfully!!'}))
    e.target[2].value = '';
  };

  return (
    <div className="flex-1 min-w-[270px] m-4">
      <h4 className="text-lg font-semibold mb-3">Feedback</h4>
      <form className="flex flex-col space-y-3" onSubmit={handleFeedback}>
        <div className="flex space-x-3">
          <button
            type="button"
            className={`px-3 py-1 rounded-full ${
              selected === "positive" ? "bg-green-700" : "bg-green-600"
            } text-white hover:bg-green-700 focus:outline-none shadow`}
            aria-label="Positive feedback"
            onClick={() => setSelected("positive")}
          >
            👍
          </button>
          <button
            type="button"
            className={`px-3 py-1 rounded-full ${
              selected === "negative" ? "bg-red-700" : "bg-red-600"
            } text-white hover:bg-red-700 focus:outline-none shadow`}
            aria-label="Negative feedback"
            onClick={() => setSelected("negative")}
          >
            👎
          </button>
        </div>
        <input
          type="text"
          placeholder="Your feedback"
          className="px-3 py-2 rounded border border-gray-400 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="submit"
          value={loading ? 'Sending...' : 'Submit'}
          aria-label="Submit feedback"
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 font-semibold shadow transition"
        />
      </form>
    </div>
  );
};

export default Feedback;
