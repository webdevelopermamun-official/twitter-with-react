import Auth from "../pages/auth/Auth";
import Home from "../pages/home/Home";

// public router
const publicRouter = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/auth',
        element: <Auth />
    }
]

// export
export default publicRouter;