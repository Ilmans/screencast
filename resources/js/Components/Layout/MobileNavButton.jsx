import { Link, usePage } from "@inertiajs/react";
import React, { Fragment, useState } from "react";
import MobileNav from "./MobileNav";
import {
    ChevronDownIcon,
    LeftBar,
    RightBar,
    UserIcon,
} from "../../../lib/Icon";
import BadgeButton from "../BadgeButton";

function MobileNavButton() {
    const { user } = usePage().props.auth;
    const [showNav, setShowNav] = useState(false);
    // set shownav to false if clicked outside

    return (
        <Fragment>
            {user ? (
                <button
                    onClick={(e) => {
                        setShowNav(!showNav);
                    }}
                    className="relative flex gap-x-2 items-center text-muted-foreground hover:text-foreground"
                >
                    <UserIcon className="w-4 h-4" />

                    <MobileNav show={showNav} setShow={setShowNav} />
                </button>
            ) : (
                <>
                    <BadgeButton className="hidden lg:block">
                        <Link className="text-xs font-semibold" href="/login">
                            Masuk
                        </Link>
                    </BadgeButton>
                    <BadgeButton className="block lg:hidden">
                        <Link
                            as="button"
                            className="relative py-1"
                            onClick={() => {
                                setShowNav(!showNav);
                            }}
                        >
                            {!showNav ? (
                                <RightBar className="w-4 h-4" />
                            ) : (
                                <LeftBar className="w-4 h-4" />
                            )}
                            <MobileNav show={showNav} setShow={setShowNav} />
                        </Link>
                    </BadgeButton>
                </>
            )}
        </Fragment>
    );
}

export default MobileNavButton;
