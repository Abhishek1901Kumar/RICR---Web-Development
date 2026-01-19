import React, { use, useState } from "react";
import UserSidebar from "../../components/userDashboard/UserSideBar";
import UserOverview from "../../components/userDashboard/UserOverview";
import UserProfile from "../../components/userDashboard/UserProfile";
import UserOrders from "../../components/userDashboard/UserOrders";
import UserTransaction from "../../components/userDashboard/UserTransaction";
import UserHelpDesk from "../../components/userDashboard/UserHelpDesk";

const UserDashboard = () => {
  const [active, setActive] = useState("overview");
  const [iscollapsed, setIsCollapsed] = useState(false);
  return (
    <>
      <div className="w-full h-[91vh] flex">
        <div className={`bg-(--color-background) duration-300 ${iscollapsed? "w-2/60":"w12/60"}`}>
          <UserSidebar
            active={active}
            setActive={setActive}
            iscollapsed={iscollapsed}
            setIsCollapsed={setIsCollapsed}
          />
        </div>
        <div className={`duration-300 ${iscollapsed? "w-58/60":"w-48/60"}`}>
          {active === "overview" && <UserOverview />}
          {active === "profile" && <UserProfile />}
          {active === "orders" && <UserOrders />}
          {active === "transactions" && <UserTransaction />}
          {active === "helpdesk" && <UserHelpDesk />}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
