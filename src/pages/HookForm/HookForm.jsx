import { useState } from 'react';
import { useForm } from 'react-hook-form';

const HookForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [tableData, setTableData] = useState([]);

  const onSubmit = (data) => {
    console.log(data);
    setTableData((prevData) => [...prevData, data]);
    reset();
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#121212]">
      <div className="bg-[#1E1E1E] p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-semibold text-center text-[#E0E0E0] mb-6">Form with React Hook Form</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-[#E0E0E0]">
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register('name', { required: 'Name is required' })}
              className="w-full px-4 py-2 border border-[#333] rounded-lg bg-[#2A2A2A] text-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#3D0000]"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-[#E0E0E0]">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register('email', { required: 'Email is required' })}
              className="w-full px-4 py-2 border border-[#333] rounded-lg bg-[#2A2A2A] text-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#3D0000]"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="age" className="block text-[#E0E0E0]">
              Age
            </label>
            <input
              id="age"
              type="number"
              {...register('age', { required: 'Age is required' })}
              className="w-full px-4 py-2 border border-[#333] rounded-lg bg-[#2A2A2A] text-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#3D0000]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#591818] text-[#ffffff] rounded-lg hover:bg-[#3D0000] focus:outline-none"
          >
            Submit
          </button>
          <button
            type="reset"
            className="w-full mt-4 py-2 bg-[#950101] text-[#ffffff] rounded-lg hover:bg-[#3D0000] focus:outline-none"
          >
            Reset
          </button>
        </form>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-[#E0E0E0] mb-4">Submitted Data</h2>
          <table className="min-w-full bg-[#1E1E1E] rounded-lg overflow-hidden">
            <thead>
              <tr className="border-b bg-[#2A2A2A]">
                <th className="px-6 py-3 text-left text-sm font-semibold text-[#E0E0E0]">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-[#E0E0E0]">Email</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-[#E0E0E0]">Age</th>
              </tr>
            </thead>
            <tbody>
              {tableData.length === 0 ? (
                <tr>
                  <td colSpan="3" className="px-6 py-3 text-center text-sm text-[#E0E0E0]">No data submitted yet</td>
                </tr>
              ) : (
                tableData.map((row, index) => (
                  <tr key={index} className="border-b bg-[#2A2A2A]">
                    <td className="px-6 py-3 text-sm text-[#E0E0E0]">{row.name}</td>
                    <td className="px-6 py-3 text-sm text-[#E0E0E0]">{row.email}</td>
                    <td className="px-6 py-3 text-sm text-[#E0E0E0]">{row.age}</td>
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

export default HookForm;
