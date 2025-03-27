import React, { useState } from "react";
import TaskCards from "./TaskCards";
import TaskData from "./TaskData"; // Import the task data
import { X, CheckCircle } from "lucide-react"; // Import icons from lucide-react

const DisplayTasks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    momoName: "",
    momoNumber: "",
    paymentMethod: "", // New field to store selected payment method
  });

  const handlePayClick = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call)
    console.log("Form Submitted", { ...userData, ...selectedTask });
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {TaskData.map((task) => (
          <TaskCards
            key={task.id}
            image={task.image}
            title={task.title}
            description={task.description}
            price={task.price}
            paymentStatus={task.paymentStatus}
            onPayClick={handlePayClick}
          />
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white p-8 sm:rounded-lg w-full max-w-lg shadow-lg relative h-screen sm:h-fit">
            {/* Modal Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-semibold mb-6 text-primary">Make Payment</h2>

            {/* Task Info */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-700">
                Task: {selectedTask.title}
              </h3>
              <p className="text-sm text-gray-600">Price: {selectedTask.price} FCFA</p>
            </div>

            {/* User Info Form */}
            <form onSubmit={handleFormSubmit}>
              <div className="space-y-4">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="flex items-center bg-gray-50">
                    <input
                      type="text"
                      id="name"
                      placeholder="Yabuin Brian"
                      name="name"
                      value={userData.name}
                      onChange={handleInputChange}
                      className="w-full border outline-none focus:border-primary rounded-xl text-sm bg-transparent px-3 py-3"
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="flex items-center bg-gray-50">
                    <input
                      type="email"
                      id="email"
                      placeholder="yabuinbrian1@gmail.com"
                      name="email"
                      value={userData.email}
                      onChange={handleInputChange}
                      className="w-full border outline-none focus:border-primary rounded-xl text-sm bg-transparent px-3 py-3"
                      required
                    />
                  </div>
                </div>

                {/* Momo Name Field */}
                <div>
                  <label
                    htmlFor="momoName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Momo Name
                  </label>
                  <div className="flex items-center bg-gray-50">
                    <input
                      type="text"
                      id="momoName"
                      placeholder="Raymond Orock Orock"
                      name="momoName"
                      value={userData.momoName}
                      onChange={handleInputChange}
                      className="w-full border outline-none focus:border-primary rounded-xl text-sm bg-transparent px-3 py-3"
                      required
                    />
                  </div>
                </div>

                {/* Momo Number Field */}
                <div>
                  <label
                    htmlFor="momoNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Momo Number
                  </label>
                  <div className="flex items-center bg-gray-50">
                    <input
                      type="text"
                      id="momoNumber"
                      placeholder="674938097"
                      name="momoNumber"
                      value={userData.momoNumber}
                      onChange={handleInputChange}
                      className="w-full border outline-none focus:border-primary rounded-xl text-sm bg-transparent px-3 py-3"
                      required
                    />
                  </div>
                </div>

                {/* Payment Method Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Payment Method
                  </label>
                  <div className="flex space-x-4 mt-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="MTN MoMo"
                        onChange={handleInputChange}
                        className="text-primary focus:ring-primary"
                      />
                      <span className="text-sm">MTN MoMo</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="Orange Money"
                        onChange={handleInputChange}
                        className="text-primary focus:ring-primary"
                      />
                      <span className="text-sm">Orange Money</span>
                    </label>
                  </div>
                </div>

                {/* Amount Field */}
                <div>
                  <label
                    htmlFor="amount"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Amount
                  </label>
                  <div className="flex items-center bg-gray-50">
                    <input
                      type="text"
                      id="amount"
                      name="amount"
                      value={selectedTask.price}
                      className="w-full border outline-none focus:border-primary rounded-xl text-sm bg-transparent px-3 py-3"
                      disabled
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-white rounded-lg flex items-center justify-center space-x-2 hover:bg-primary-3 transition"
                >
                  <CheckCircle size={18} />
                  <span>Submit Payment</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default DisplayTasks;
