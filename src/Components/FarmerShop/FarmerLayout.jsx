
import { Link, Outlet, useLocation } from "react-router-dom";
export default function Layout() {
 const {pathname }=useLocation();
    return (
        <section className="mx-auto rounded-lg shadow-2xl w-full max-w-[35rem] bg-white mb-20 ">
            <header className="p-6 border-b">
                <h1 className="text-2xl font-bold">Welcome</h1>
                <p className="text-slate-600">Signup / Login To Your Account.</p>
            </header>

            <div id="card-main" className="p-6">
                <div className="flex border-b">
                    <Link
                       to="signup"
                        className={`px-4 py-2 w-24 text-center border-b-2 ${pathname === "/form/signup"
                            ? "border-blue-600"
                            : "border-transparent"
                            }`}
                    >
                        Sign Up
                    </Link>
                    <Link
                       to="login"
                        className={`px-4 py-2 w-24 text-center border-b-2 ${pathname === "/form/login"
                            ? "border-blue-600"
                            : "border-transparent"
                            }`}
                    >
                        Login
                    </Link>
                </div>
             <Outlet/>
            </div>
        </section>
    );
}
