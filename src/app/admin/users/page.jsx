import LayoutSideBar from "@/components/layout-admin";
import LayoutTable from "@/components/layout-table";
import UserTable from "@/view/UserTable";

export default function Users() {
  return (
    <div>
      <LayoutSideBar>
        <LayoutTable>
          <UserTable />
        </LayoutTable>
      </LayoutSideBar>
    </div>
  );
}
