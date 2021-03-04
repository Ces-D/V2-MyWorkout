import useSWR from "swr";

export default function useInitialSync() {
    const { data: syncStatus } = useSWR("/api/initial");
    const loadingSyncStatus = syncStatus === undefined;
    return { syncStatus, loadingSyncStatus };
}
