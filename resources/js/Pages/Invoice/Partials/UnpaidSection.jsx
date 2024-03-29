import { IconCheck, IconClipboard, IconClock } from "@tabler/icons-react";
import moment from "moment/moment";
import React, { Fragment, useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function UnpaidSection({ invoice, paymentMethods }) {
    const [copied, setCopied] = useState(null);
    const [remainingTime, setRemainingTime] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = moment();
            const expiredAt = moment(invoice.expired_at);
            const diff = expiredAt.diff(now);
            const duration = moment.duration(diff);

            if (duration.asSeconds() <= 0) {
                setRemainingTime("Kadaluarsa");
                clearInterval(interval);
                return;
            }

            const hours = duration.hours();
            const minutes = duration.minutes();
            const seconds = duration.seconds();
            const time = `${hours}:${minutes}:${seconds}`;
            setRemainingTime(time);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [invoice.expired_at]);

    return (
        <Fragment>
            <div className="text-sm   font-medium text-muted-foreground">
                Invoice anda belum dibayar, silahkan lakukan pembayaran sesuai
                dengan nominal yang telah ditentukan. Pembayaran akan otomatis
                di konfirmasi otomatis oleh system.
                <br />
                <br />
                Berikut nomor tujuan pembayaran ( pilh salah satu ):
            </div>
            {paymentMethods.map((paymentMethod, i) => (
                <Fragment key={i}>
                    <div className="text-sm mt-6 font-medium text-foreground">
                        {paymentMethod.bank_name}
                        <br />
                        <span className="text-xs text-yellow-900">
                            Atas nama {paymentMethod.account_name}
                        </span>
                    </div>
                    <div className="mt-2 flex max-w-sm items-center justify-between rounded-xl border bg-secondary py-2 pl-4 pr-2 font-mono text-sm">
                        <div>{paymentMethod.account_number}</div>
                        <CopyToClipboard
                            text={paymentMethod.account_number}
                            onCopy={() => {
                                setCopied(i);
                            }}
                        >
                            <span className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md">
                                {copied == i ? (
                                    <IconCheck className="w-6 h-6 text-green-500" />
                                ) : (
                                    <IconClipboard className="w-6 h-6 text-foreground" />
                                )}
                            </span>
                        </CopyToClipboard>
                    </div>
                </Fragment>
            ))}

            <div className="divide-y overflow-hidden rounded-xl  mt-4">
                <div className="prose max-w-none p-0 dark:prose-invert">
                    <div className="mt-6 font-semibold text-blue-500">
                        <div className="rounded-lg bg-card text-card-foreground shadow-sm mt-4 flex max-w-xl gap-x-2.5 border p-4 leading-relaxed">
                            <IconClock className="w-6 h-6 text-red-400" />
                            <span className="text-muted-foreground">
                                Invoice akan kadaluarsa dalam waktu:{" "}
                                <strong className="animate-pulse font-semibold text-foreground">
                                    {remainingTime}
                                </strong>{" "}
                                <br />
                                Atau paling lambat pada tanggal:{" "}
                                <strong className="font-semibold text-foreground">
                                    {moment(invoice.expired_at).format(
                                        "DD MMMM YYYY HH:mm:ss"
                                    )}
                                </strong>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default UnpaidSection;
