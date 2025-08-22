import { App } from "@/components/app";
import { Sidebar } from "@/components/sidebar";
import { Main } from "@/components/main";
import { Toolbar } from "@/components/toolbar";
import { Home } from "@/components/home";

export default function HomePage() {
    return (
        <App>
            <Sidebar />
            <Toolbar title={"Home"} />
            <Main>
                <Home />
            </Main>
        </App>
    );
}
