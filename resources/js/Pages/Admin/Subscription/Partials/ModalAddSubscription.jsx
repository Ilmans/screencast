import InputError from "@/Components/InputError";
import { Button } from "@/Components/ui/button";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle ,Dialog} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select";

import { useForm } from "@inertiajs/react";
import React from "react";

function ModalAddSubscription({open,setOpen,packages}) {
  
    const {data,setData,post,processing,errors} = useForm({
        user_email : "",
        package_id : packages[0].id.toString()
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("admin.subscription.store"));
    };
    return (
        <Dialog open={open}>
            <DialogContent setOpen={setOpen} className="w-96">
                <DialogHeader>
                    <DialogTitle>Tambah Langganan</DialogTitle>
                    <DialogDescription>
                        Daftarkan langganan pengguna secara manual
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={submit} className="space-y-6">
                    <div className="space-y-1">
                        <Label htmlFor="user">Email user</Label>
                        <Input type="email" name="user_email" value={data.user_email} onChange={(e) => {
                            setData({...data,user_email : e.target.value});
                        }}/>
                        <InputError errors={errors} fieldName={"user_email"} />
                    </div>
                    <div className="space-y-1">
                        <Label className="text-sm">Jenis Subscription</Label>
                        <Select
                               value={data.package_id}
                           onValueChange={(value) => {
                                setData({
                                    ...data,
                                    package_id: value.toString()
                                });
                           }}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Pilih Paket">
                                  
                                </SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                              {packages.map((item) => (
                                <SelectItem value={item.id.toString()}>{item.name}</SelectItem>
                              ))}
                            </SelectContent>
                        </Select>
                        <InputError errors={errors} fieldName={"status"} />
                    </div>
                
                    <div className="mt-4">
                        <Button
                            size="lg"
                            variant="secondary"
                            type="submit"
                            disabled={processing}
                        >
                            {processing ? "Loading..." : "Simpan"}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default ModalAddSubscription;
