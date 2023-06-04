import LayoutSideBar from "@/components/layout-admin";
import LayoutTable from "@/components/layout-table";
import UserTable from "@/view/UserTable";

export default function Users() {
  return (
    <>
      <LayoutSideBar>
        <LayoutTable>
          <UserTable />
        </LayoutTable>
      </LayoutSideBar>
    </>
  );
}
