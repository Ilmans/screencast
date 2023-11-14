export default function ErrorPage({ status }) {
    console.log(status);
    const title = {
        503: "503: Service Unavailable",
        500: "500: Server Error",
        404: "404: Page Not Found",
        403: "403: Forbidden",
    }[status];

    const description = {
        503: "Sorry, we are doing some maintenance. Please check back soon.",
        500: "Whoops, something went wrong on our servers.",
        404: "Sorry, the page you are looking for could not be found.",
        403: "Sorry, you are forbidden from accessing this page.",
    }[status];

    return (
        <div className="flex items-center justify-center h-screen text-white">
            <div>
                <h1 className="text-lg font-semibold">{title}</h1>
                <div>{description}</div>
            </div>
        </div>
    );
}
