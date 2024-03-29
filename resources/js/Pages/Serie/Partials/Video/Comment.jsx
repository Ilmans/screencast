import React from "react";

function Comment() {
    return (
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm rounded-t-none">
            <div className="flex flex-col p-6">
                <h3 className="text-xl font-semibold leading-6 tracking-tighter">
                    Komentar
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                    Ada 3 komentar pada episode ini.
                </p>
            </div>
            <div className="p-6 pt-0">
                <button className="w-full rounded-lg border border-dashed p-4 tracking-tighter text-muted-foreground duration-300 hover:border-brand hover:text-foreground focus:outline-none">
                    Tambahkan komentar
                </button>
                <div className="mt-6 flex flex-col gap-y-4 sm:mt-8 sm:gap-y-8">
                    <div className="flex">
                        <a
                            className="mr-2.5 flex-shrink-0 sm:mr-4"
                            href="https://parsinta.com/@yandinovriandi"
                        >
                            <span className="relative flex shrink-0 overflow-hidden rounded-full size-6 sm:h-10 sm:w-10">
                                <img
                                    className="aspect-square h-full w-full"
                                    src="https://www.gravatar.com/avatar/b8dbc4ead0297a72b9163b27f85ed92a?s=100&d=mp"
                                />
                            </span>
                        </a>
                        <div className="w-full overflow-hidden">
                            <div className="flex items-center justify-between">
                                <h4 className="sm:text-tiny text-sm font-semibold">
                                    <span className="flex items-center gap-x-2">
                                        <a href="https://parsinta.com/@yandinovriandi">
                                            <span className="inline md:hidden">
                                                Yandi
                                            </span>
                                            <span className="hidden md:inline">
                                                Yandi Novriandi
                                            </span>
                                        </a>
                                        <small className="text-[0.8rem] font-normal text-muted-foreground">
                                            17 Februari
                                        </small>
                                    </span>
                                </h4>
                            </div>
                            <div>
                                <div className="sm:text-tiny prose prose-sky mb-3 mt-1 text-sm [text-wrap:balance;] dark:prose-invert prose-pre:border prose-pre:bg-accent/50 prose-pre:p-2 prose-pre:text-xs prose-pre:text-accent-foreground sm:max-w-3xl sm:prose-pre:p-4 sm:prose-pre:text-sm">
                                    <p>
                                        bang buat juga tutorial menambah
                                        repository pattern nya di filament,
                                    </p>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <button className="hover:text-foreground focus:text-foreground focus:outline-none">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            className="size-4"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                d="M12 21.25a9.25 9.25 0 1 0-8.302-5.166.52.52 0 0 1 .044.331L2.9 20.521a.5.5 0 0 0 .581.592l4.243-.794a.5.5 0 0 1 .315.043A9.2 9.2 0 0 0 12 21.25"
                                            />
                                        </svg>
                                    </button>
                                    <span className="text-sm text-muted-foreground">
                                        1 balasan
                                    </span>
                                </div>
                                <div className="mt-4 sm:mt-6">
                                    <div className="mt-6 flex flex-col gap-y-4 sm:mt-8 sm:gap-y-8">
                                        <div className="flex">
                                            <a
                                                className="mr-2.5 flex-shrink-0 sm:mr-4"
                                                href="https://parsinta.com/@irsyadadl"
                                            >
                                                <span className="relative flex shrink-0 overflow-hidden rounded-full size-6 sm:h-10 sm:w-10">
                                                    <img
                                                        className="aspect-square h-full w-full"
                                                        src="https://www.gravatar.com/avatar/6d999db3cd931c3ed11d21c36d533a5e?s=100&d=mp"
                                                    />
                                                </span>
                                            </a>
                                            <div className="w-full overflow-hidden">
                                                <div className="flex items-center justify-between">
                                                    <h4 className="sm:text-tiny text-sm font-semibold">
                                                        <span className="flex items-center gap-x-2">
                                                            <a href="https://parsinta.com/@irsyadadl">
                                                                <span className="inline md:hidden">
                                                                    Irsyad
                                                                </span>
                                                                <span className="hidden md:inline">
                                                                    Irsyad A.
                                                                    Panjaitan
                                                                </span>
                                                            </a>
                                                            <button
                                                                type="button"
                                                                aria-haspopup="dialog"
                                                                aria-expanded="false"
                                                                aria-controls="radix-:ri:"
                                                                data-state="closed"
                                                                className=""
                                                            >
                                                                <svg
                                                                    className="size-4 sm:size-[1.05rem] h-3.5 -ml-1"
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        clipRule="evenodd"
                                                                        d="M11.9982 2C12.2154 2 12.4219 2.09415 12.5643 2.25809L14.738 4.75988L18.0113 4.24063C18.2258 4.20661 18.4445 4.26724 18.6109 4.40684C18.7773 4.54644 18.875 4.75131 18.8787 4.96846L18.9357 8.28218L21.777 9.98844C21.9632 10.1003 22.0918 10.2873 22.1295 10.5012C22.1672 10.7151 22.1103 10.9348 21.9736 11.1035L19.8873 13.6787L20.967 16.812C21.0378 17.0174 21.0161 17.2433 20.9075 17.4314C20.7989 17.6195 20.6141 17.7513 20.4009 17.7926L17.1474 18.4242L15.9605 21.5186C15.8827 21.7214 15.7208 21.8805 15.5167 21.9548C15.3126 22.0291 15.0864 22.0112 14.8965 21.9059L11.9982 20.2984L9.09989 21.9059C8.90996 22.0112 8.68369 22.0291 8.47961 21.9548C8.27552 21.8805 8.11365 21.7214 8.03587 21.5186L6.84891 18.4242L3.59544 17.7926C3.38224 17.7513 3.19745 17.6195 3.08885 17.4314C2.98026 17.2433 2.95853 17.0174 3.02929 16.812L4.10905 13.6787L2.02273 11.1035C1.88601 10.9348 1.82915 10.7151 1.86687 10.5012C1.90458 10.2873 2.03316 10.1003 2.21935 9.98844L5.06059 8.28218L5.11763 4.96846C5.12137 4.75131 5.21906 4.54644 5.38543 4.40684C5.55181 4.26724 5.77053 4.20661 5.98503 4.24063L9.25831 4.75988L11.432 2.25809C11.5745 2.09415 11.781 2 11.9982 2ZM15.0285 11.2803C15.3214 10.9874 15.3214 10.5126 15.0285 10.2197C14.7356 9.92678 14.2607 9.92678 13.9678 10.2197L10.9982 13.1893L10.0285 12.2197C9.73561 11.9268 9.26073 11.9268 8.96784 12.2197C8.67495 12.5126 8.67495 12.9874 8.96784 13.2803L10.4678 14.7803C10.6085 14.921 10.7993 15 10.9982 15C11.1971 15 11.3879 14.921 11.5285 14.7803L15.0285 11.2803Z"
                                                                        fill="#1d9bf0"
                                                                    />
                                                                </svg>
                                                            </button>
                                                            <small className="text-[0.8rem] font-normal text-muted-foreground">
                                                                17 Februari
                                                            </small>
                                                        </span>
                                                    </h4>
                                                </div>
                                                <div>
                                                    <div className="sm:text-tiny prose prose-sky mb-3 mt-1 text-sm [text-wrap:balance;] dark:prose-invert prose-pre:border prose-pre:bg-accent/50 prose-pre:p-2 prose-pre:text-xs prose-pre:text-accent-foreground sm:max-w-3xl sm:prose-pre:p-4 sm:prose-pre:text-sm">
                                                        <p>
                                                            Oh mungkin yang abg
                                                            maksud{" "}
                                                            <a href="https://parsinta.com/sKBwR550">
                                                                gini
                                                            </a>{" "}
                                                            ya ?
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <a
                            className="mr-2.5 flex-shrink-0 sm:mr-4"
                            href="https://parsinta.com/@u10481"
                        >
                            <span className="relative flex shrink-0 overflow-hidden rounded-full size-6 sm:h-10 sm:w-10">
                                <img
                                    className="aspect-square h-full w-full"
                                    src="https://www.gravatar.com/avatar/5d32ad07c49f89245774e9ca31bca1a9?s=100&d=mp"
                                />
                            </span>
                        </a>
                        <div className="w-full overflow-hidden">
                            <div className="flex items-center justify-between">
                                <h4 className="sm:text-tiny text-sm font-semibold">
                                    <span className="flex items-center gap-x-2">
                                        <a href="https://parsinta.com/@u10481">
                                            <span className="inline md:hidden">
                                                Nazhif
                                            </span>
                                            <span className="hidden md:inline">
                                                Nazhif
                                            </span>
                                        </a>
                                        <small className="text-[0.8rem] font-normal text-muted-foreground">
                                            22 Februari
                                        </small>
                                    </span>
                                </h4>
                            </div>
                            <div>
                                <div className="sm:text-tiny prose prose-sky mb-3 mt-1 text-sm [text-wrap:balance;] dark:prose-invert prose-pre:border prose-pre:bg-accent/50 prose-pre:p-2 prose-pre:text-xs prose-pre:text-accent-foreground sm:max-w-3xl sm:prose-pre:p-4 sm:prose-pre:text-sm">
                                    <p>Kapan seri Next.Js lagi?</p>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <button className="hover:text-foreground focus:text-foreground focus:outline-none">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            className="size-4"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                d="M12 21.25a9.25 9.25 0 1 0-8.302-5.166.52.52 0 0 1 .044.331L2.9 20.521a.5.5 0 0 0 .581.592l4.243-.794a.5.5 0 0 1 .315.043A9.2 9.2 0 0 0 12 21.25"
                                            />
                                        </svg>
                                    </button>
                                    <span className="text-sm text-muted-foreground">
                                        0 balasan
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <a
                            className="mr-2.5 flex-shrink-0 sm:mr-4"
                            href="https://parsinta.com/@u10489"
                        >
                            <span className="relative flex shrink-0 overflow-hidden rounded-full size-6 sm:h-10 sm:w-10">
                                <img
                                    className="aspect-square h-full w-full"
                                    src="https://www.gravatar.com/avatar/36cf8a752c2a28cb6484082aaaa38edd?s=100&d=mp"
                                />
                            </span>
                        </a>
                        <div className="w-full overflow-hidden">
                            <div className="flex items-center justify-between">
                                <h4 className="sm:text-tiny text-sm font-semibold">
                                    <span className="flex items-center gap-x-2">
                                        <a href="https://parsinta.com/@u10489">
                                            <span className="inline md:hidden">
                                                Misbah
                                            </span>
                                            <span className="hidden md:inline">
                                                Misbah
                                            </span>
                                        </a>
                                        <small className="text-[0.8rem] font-normal text-muted-foreground">
                                            23 Februari
                                        </small>
                                    </span>
                                </h4>
                            </div>
                            <div>
                                <div className="sm:text-tiny prose prose-sky mb-3 mt-1 text-sm [text-wrap:balance;] dark:prose-invert prose-pre:border prose-pre:bg-accent/50 prose-pre:p-2 prose-pre:text-xs prose-pre:text-accent-foreground sm:max-w-3xl sm:prose-pre:p-4 sm:prose-pre:text-sm">
                                    <p>
                                        Bisa jelaskan di provider nya itu untuk
                                        apa dan kenapa menambah unguard() ??
                                    </p>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <button className="hover:text-foreground focus:text-foreground focus:outline-none">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            className="size-4"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                d="M12 21.25a9.25 9.25 0 1 0-8.302-5.166.52.52 0 0 1 .044.331L2.9 20.521a.5.5 0 0 0 .581.592l4.243-.794a.5.5 0 0 1 .315.043A9.2 9.2 0 0 0 12 21.25"
                                            />
                                        </svg>
                                    </button>
                                    <span className="text-sm text-muted-foreground">
                                        1 balasan
                                    </span>
                                </div>
                                <div className="mt-4 sm:mt-6">
                                    <div className="mt-6 flex flex-col gap-y-4 sm:mt-8 sm:gap-y-8">
                                        <div className="flex">
                                            <a
                                                className="mr-2.5 flex-shrink-0 sm:mr-4"
                                                href="https://parsinta.com/@u10489"
                                            >
                                                <span className="relative flex shrink-0 overflow-hidden rounded-full size-6 sm:h-10 sm:w-10">
                                                    <img
                                                        className="aspect-square h-full w-full"
                                                        src="https://www.gravatar.com/avatar/36cf8a752c2a28cb6484082aaaa38edd?s=100&d=mp"
                                                    />
                                                </span>
                                            </a>
                                            <div className="w-full overflow-hidden">
                                                <div className="flex items-center justify-between">
                                                    <h4 className="sm:text-tiny text-sm font-semibold">
                                                        <span className="flex items-center gap-x-2">
                                                            <a href="https://parsinta.com/@u10489">
                                                                <span className="inline md:hidden">
                                                                    Misbah
                                                                </span>
                                                                <span className="hidden md:inline">
                                                                    Misbah
                                                                </span>
                                                            </a>
                                                            <small className="text-[0.8rem] font-normal text-muted-foreground">
                                                                23 Februari
                                                            </small>
                                                        </span>
                                                    </h4>
                                                </div>
                                                <div>
                                                    <div className="sm:text-tiny prose prose-sky mb-3 mt-1 text-sm [text-wrap:balance;] dark:prose-invert prose-pre:border prose-pre:bg-accent/50 prose-pre:p-2 prose-pre:text-xs prose-pre:text-accent-foreground sm:max-w-3xl sm:prose-pre:p-4 sm:prose-pre:text-sm">
                                                        <p>
                                                            Kalau bisa dalam
                                                            video jangan terlalu
                                                            buru buru biar lebih
                                                            jelas lagi , jadinya
                                                            untuk pemula bisa
                                                            paham
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comment;
