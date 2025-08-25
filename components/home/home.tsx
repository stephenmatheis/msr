"use client";

import { useState } from "react";
import * as motion from "motion/react-client";
import { Document, Packer, Paragraph, TextRun, HeadingLevel } from "docx";
import { useUI } from "@/providers/ui-provider";
import { App } from "@/components/app";
import { Sidebar } from "@/components/sidebar";
import { Main } from "@/components/main";
import { Toolbar } from "@/components/toolbar";
import styles from "./home.module.scss";

type Values = {
    date: string;
    accomplishments: string;
    risks: string;
};

export function Home() {
    const { isSidebarOpen, setIsSidebarOpen } = useUI();
    const [values, setValues] = useState<Values>({
        date: new Date().toISOString().split("T")[0],
        accomplishments: "",
        risks: "",
    });

    return (
        <App>
            <Sidebar />
            <Toolbar.Root>
                <Toolbar.Leading>
                    <motion.div
                        className={styles.group}
                        variants={{
                            open: {
                                x: 16 * -4,
                                background: "rgb(255, 255, 255, 0)",
                                backdropFilter: "blur(0px)",
                                boxShadow: "none",
                            },
                            closed: {
                                x: 0,
                                background: "rgb(255, 255, 255, 0.75)",
                                backdropFilter: "blur(7px)",
                                boxShadow: "0px 0px 0px 1px rgba(0, 0, 0, 0.15)",
                            },
                        }}
                        initial="open"
                        animate={isSidebarOpen ? "open" : "closed"}
                        transition={{
                            type: "spring",
                            stiffness: 600,
                            damping: 20,
                        }}
                    >
                        <Toolbar.Button
                            className={styles.toggle}
                            onClick={() => {
                                setIsSidebarOpen((prev) => !prev);
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M14 2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2z" />
                                <path d="M3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
                            </svg>
                        </Toolbar.Button>
                    </motion.div>
                    <motion.div
                        className={styles.title}
                        variants={{
                            open: {
                                x: "calc(-44px - .75rem)",
                            },
                            closed: {
                                x: 0,
                            },
                        }}
                        initial="open"
                        animate={isSidebarOpen ? "open" : "closed"}
                        transition={{
                            type: "spring",
                            stiffness: 600,
                            damping: 20,
                        }}
                    >
                        <Toolbar.Title>Page name</Toolbar.Title>
                    </motion.div>
                </Toolbar.Leading>
                <Toolbar.Center>
                    <Toolbar.Group>
                        <Toolbar.Button>1</Toolbar.Button>
                    </Toolbar.Group>
                </Toolbar.Center>
                <Toolbar.Trailing>
                    <Toolbar.Group>
                        <Toolbar.Button>1</Toolbar.Button>
                        <Toolbar.Button>2</Toolbar.Button>
                        <Toolbar.Button>3</Toolbar.Button>
                    </Toolbar.Group>
                    <Toolbar.Group>
                        <Toolbar.Button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </Toolbar.Button>
                    </Toolbar.Group>
                    <Toolbar.Group>
                        <Toolbar.Button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                            </svg>
                        </Toolbar.Button>
                    </Toolbar.Group>
                </Toolbar.Trailing>
            </Toolbar.Root>
            <Main>
                <div className={styles.home}>
                    <div className={styles.section}>
                        <h3>Date</h3>
                        <input
                            type="date"
                            value={values.date}
                            onChange={(event) => {
                                console.log(event.target.value);

                                setValues((prev) => {
                                    return {
                                        ...prev,
                                        date: event.target.value,
                                    };
                                });
                            }}
                        />
                    </div>
                    <div className={styles.section}>
                        <h3>Accomplishments</h3>
                        <textarea
                            value={values.accomplishments}
                            onChange={(event) => {
                                console.log(event.target.value);

                                setValues((prev) => {
                                    return {
                                        ...prev,
                                        accomplishments: event.target.value,
                                    };
                                });
                            }}
                        />
                    </div>
                    <div className={styles.section}>
                        <h3>Risks</h3>
                        <textarea
                            value={values.risks}
                            onChange={(event) => {
                                console.log(event.target.value);

                                setValues((prev) => {
                                    return {
                                        ...prev,
                                        risks: event.target.value,
                                    };
                                });
                            }}
                        />
                    </div>
                    <div
                        className={styles.buttons}
                        onClick={() => {
                            console.log(values);

                            const doc = new Document({
                                sections: [
                                    {
                                        children: [
                                            new Paragraph({
                                                children: [new TextRun(new Date(values.date).toDateString())],
                                            }),
                                            new Paragraph({
                                                children: [],
                                            }),
                                            new Paragraph({
                                                text: "Accomplishments",
                                                heading: HeadingLevel.HEADING_1,
                                            }),
                                            ...values.accomplishments.split("\n").map((line) => {
                                                return new Paragraph({
                                                    children: [new TextRun(line)],
                                                });
                                            }),
                                            new Paragraph({
                                                text: "Risks",
                                                heading: HeadingLevel.HEADING_1,
                                            }),
                                            ...values.risks.split("\n").map((line) => {
                                                return new Paragraph({
                                                    children: [new TextRun(line)],
                                                });
                                            }),
                                        ],
                                    },
                                ],
                            });

                            Packer.toBlob(doc).then((blob) => {
                                console.log(blob);

                                const blobUrl = URL.createObjectURL(blob);
                                const link = document.createElement("a");

                                link.href = blobUrl;
                                link.download = "example.docx";
                                link.style.display = "none";

                                document.body.appendChild(link);

                                link.click();

                                URL.revokeObjectURL(blobUrl);

                                link.remove();
                            });
                        }}
                    >
                        <button>Save</button>
                    </div>
                </div>
            </Main>
        </App>
    );
}

// NOTE: Back Button
{
    /* <Toolbar.Group>
    <Toolbar.Button>
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.354 1.646C11.4006 1.69244 11.4375 1.74762 11.4627 1.80837C11.4879 1.86911 11.5009 1.93423 11.5009 2C11.5009 2.06577 11.4879 2.13089 11.4627 2.19163C11.4375 2.25238 11.4006 2.30755 11.354 2.354L5.707 8L11.354 13.646C11.4479 13.7399 11.5006 13.8672 11.5006 14C11.5006 14.1328 11.4479 14.2601 11.354 14.354C11.2601 14.4479 11.1328 14.5006 11 14.5006C10.8672 14.5006 10.7399 14.4479 10.646 14.354L4.646 8.354C4.59944 8.30755 4.56249 8.25238 4.53729 8.19163C4.51208 8.13089 4.49911 8.06577 4.49911 8C4.49911 7.93423 4.51208 7.86911 4.53729 7.80837C4.56249 7.74762 4.59944 7.69244 4.646 7.646L10.646 1.646C10.6924 1.59944 10.7476 1.56249 10.8084 1.53729C10.8691 1.51208 10.9342 1.49911 11 1.49911C11.0658 1.49911 11.1309 1.51208 11.1916 1.53729C11.2524 1.56249 11.3076 1.59944 11.354 1.646Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0.5"
            />
        </svg>
    </Toolbar.Button>
</Toolbar.Group>  */
}
