import { useGetUserQuery } from "../../redux/features/login/login.api";
import { formatTime } from "../../utils/formatTime";

type TUser = {
  _id: string;
  email: string;
  password: string;
  createdAt: string;
};

const Dashboard = () => {
  const { data } = useGetUserQuery(undefined);

  console.log(data);

  return (
    <div className="flex justify-center mt-10">
      <table className="min-w-full bg-white border border-gray-300 overflow-y-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b text-start">Email</th>
            <th className="px-4 py-2 border-b text-start">Password</th>
            <th className="px-4 py-2 border-b text-start">Time</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((item: TUser) => (
            <tr key={item._id}>
              <td className="px-4 py-2 border-b">{item.email}</td>
              <td className="px-4 py-2 border-b">{item.password}</td>
              <td className="px-4 py-2 border-b">
                {formatTime(item.createdAt)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
