

import { ActivityBalance } from "@/components/dashboard/activity-balance";
import {ActivityTable} from "@/components/dashboard/activity-table";
import { InsertActivityForm } from "@/components/dashboard/insert-activity-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Dashboard() {
  return (
    <>
    <InsertActivityForm />
    <ActivityTable/>
    <ActivityBalance/>

    </>
  );
}