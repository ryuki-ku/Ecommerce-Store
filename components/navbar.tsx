import Container from "@/components/ui/container";
import Link from "next/link";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/navbar-actions";

export const revalidate = 0;

const Navbar = async () => {
    const category = await getCategories();
    console.log(category);
    return (
        <div className="border-b">
            <div className="mx-auto max-w-7xl bg-slate-300"> 
                <div className="relative px-6 sm:px-6 lg:px-8 flex h-16 items-center bg-slate-300">
                <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                    <p className="font-bold text-xl">Old-things Store</p>
                </Link>
                <MainNav data={category} />
                <NavbarActions />
                </div>
            </div>
        </div>
    )
}
export default Navbar;