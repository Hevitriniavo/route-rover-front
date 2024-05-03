import Dashboard from "../views/Dashboard";

const authRoute = [

    {
        path: "",
        element: <Dashboard />
    },
    {
        path: "tsyhaiko",
        element: (
            <div>
                Tsy haiko
            </div>
        )
    },
]

export default authRoute;