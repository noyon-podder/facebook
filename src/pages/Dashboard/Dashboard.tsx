import { useAppSelector } from "../../redux/hook";

const Dashboard = () => {
  const user = useAppSelector((state) => state.login);

  console.log(user);

  return <div>Dashboard</div>;
};

export default Dashboard;
