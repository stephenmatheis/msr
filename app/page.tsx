import { App } from "@/components/app";
import { Sidebar } from "@/components/sidebar";
import { Main } from "@/components/main";
import { Toolbar } from "@/components/toolbar";
import { Home } from "@/components/home";
import { ToolbarButton, ToolbarButtons, ToolbarGroup, ToolbarTitle } from "@/components/toolbar/toolbar";

export default function HomePage() {
    return (
        <App>
            <Sidebar />
            <Toolbar.Root>
                <ToolbarTitle>Home</ToolbarTitle>
                <ToolbarButtons>
                    <ToolbarGroup>
                        <ToolbarButton>1</ToolbarButton>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <ToolbarButton>1</ToolbarButton>
                        <ToolbarButton>2</ToolbarButton>
                        <ToolbarButton>3</ToolbarButton>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <ToolbarButton>1</ToolbarButton>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <ToolbarButton>1</ToolbarButton>
                        <ToolbarButton>2</ToolbarButton>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <ToolbarButton>1</ToolbarButton>
                    </ToolbarGroup>
                </ToolbarButtons>
            </Toolbar.Root>
            <Main>
                <Home />
            </Main>
        </App>
    );
}
