import { createBrowserRouter } from "react-router-dom";
import publicRouter from "./PublicRouter";

// create new router
const router = createBrowserRouter ([...publicRouter])

// export
export default router;