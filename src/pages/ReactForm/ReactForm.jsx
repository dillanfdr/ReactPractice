import { useState } from 'react';

const ReactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });
  const [tableData, setTableData] = useState([]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData((prevData) => [...prevData, formData]);
    setFormData({ name: '', email: '', age: '' }); // Reset form after submit
  };

  // Handle form reset
  const handleReset = () => {
    setFormData({ name: '', email: '', age: '' }); // Clear form data
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#121212]">
      <div className="bg-[#1E1E1E] p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center text-[#E0E0E0] mb-6">Form</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-[#E0E0E0]">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-[#333] rounded-lg bg-[#2A2A2A] text-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#3D0000]"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-[#E0E0E0]">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-[#333] rounded-lg bg-[#2A2A2A] text-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#3D0000]"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="age" className="block text-[#E0E0E0]">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-[#333] rounded-lg bg-[#2A2A2A] text-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#3D0000]"
              placeholder="Enter your age"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#591818] text-[#ffffff] rounded-lg hover:bg-[#3D0000] focus:outline-none"
          >
            Submit
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="w-full mt-4 py-2 bg-[#E0E0E0] text-[#121212] rounded-lg hover:bg-[#B0B0B0] focus:outline-none"
          >
            Reset
          </button>
        </form>

        <div className="mt-8 w-full max-w-4xl overflow-x-auto">
          <h2 className="text-2xl font-semibold text-[#E0E0E0] mb-4">Submitted Data</h2>
          <table className="min-w-full bg-[#2A2A2A] text-[#E0E0E0] rounded-lg overflow-hidden">
            <thead>
              <tr className="border-b bg-[#333]">
                <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Age</th>
              </tr>
            </thead>
            <tbody>
              {tableData.length === 0 ? (
                <tr>
                  <td colSpan="3" className="px-6 py-3 text-center text-sm text-[#E0E0E0]">No data submitted yet</td>
                </tr>
              ) : (
                tableData.map((row, index) => (
                  <tr key={index} className="border-b bg-[#1E1E1E]">
                    <td className="px-6 py-3 text-sm">{row.name}</td>
                    <td className="px-6 py-3 text-sm">{row.email}</td>
                    <td className="px-6 py-3 text-sm">{row.age}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReactForm;
