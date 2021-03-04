import useSWR from "swr";

export default function useTracker(user) {
    const { data: day } = useSWR(user?.isLoggedIn && "api/workout");
    const loadingDay = day === undefined;
    return { day, loadingDay };
}
